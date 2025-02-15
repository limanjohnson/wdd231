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

// Open modal
function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

// Close modal
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Handle form submission
async function scheduleEvent(event) {
    event.preventDefault(); // Prevent form reload

    const leadName = document.getElementById("leadName").value;
    const eventType = document.getElementById("eventType").value;
    const dateTime = document.getElementById("dateTime").value;
    const reminder = document.getElementById("reminder").checked;

    // Construct the event object
    const newEvent = {
        lead_name: leadName,
        event_type: eventType,
        date_time: new Date(dateTime).toISOString(),
        reminder_sent: reminder,
    };

    // Send a POST request to save the event
    try {
        const response = await fetch('https://lead-capture-backend.onrender.com/events', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newEvent),
        });

        if (response.ok) {
            alert("Event added successfully!");
            closeModal('addEventModal');
            fetchEvents(); // Reload events
        } else {
            alert("Error adding event.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
}

// load events on page load
document.addEventListener("DOMContentLoaded", fetchEvents);