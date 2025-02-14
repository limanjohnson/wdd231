async function fetchEvents() {
    const response = await fetch('https://lead-capture-backend.onrender.com')
    const events = await response.json();

    const tableBody = document.getElementById("eventsTable");
    tableBody.innerHTML = "";

    events.forEach(event => {
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${events.lead_name}</td>
        <td>${event.event_type}</td>
        <td>${new Date(event.date_time).toLocaleString()}</td>
        <td>${event.reminder_sent ? "Sent" : "Not Sent"}</td>
        <td>
            <button onclick="editEvent(${event.id})">Edit</button>
            <button onclick="deleteEvent(${event.id})">Delete</button>
        </td>
    `;
        tableBody.appendChild(row);
    });
}

async function deleteEvent(eventId) {
    if (confirm("Are you sure you want to delete this event?")) {
        await fetch(`https://lead-capture-backend.onrender.com/events/${eventId}`, {method: "DELETE"});
        fetchEvents();
    }
}

function editEvent(eventId) {
    alert("Edit function not implement yet!")
}

// load events on page load
document.addEventListener("DOMContentLoaded", fetchEvents);