// Fetch events from localStorage
function fetchEvents() {
    const events = JSON.parse(localStorage.getItem("leadEvents")) || []; // Retrieve or default to []
    const tableBody = document.getElementById("eventsTable");
    tableBody.innerHTML = ""; // Clear the table before reloading

    events.forEach(event => {
        const eventDate = new Date(event.date_time);
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${event.lead_name}</td>
            <td>${event.event_type}</td>
            <td class="event-time">${eventDate.toLocaleString()}</td>
            <td class="action-buttons">
                <button onclick="deleteEvent(${event.id})">Delete</button>
            </td>
        `;

        row.classList.add("event-row");
        tableBody.appendChild(row);
    });
}

// Save an event to localStorage
function scheduleEvent(event) {
    event.preventDefault(); // Prevent form reload

    const leadName = document.getElementById("leadName").value;
    const eventType = document.getElementById("eventType").value;
    const dateTime = document.getElementById("dateTime").value;

    if (!leadName || !eventType || !dateTime) {
        alert("Please fill out all fields!");
        return;
    }

    const eventId = document.getElementById("saveEventButton").dataset.eventId;

    let events = JSON.parse(localStorage.getItem("leadEvents")) || [];

    const localDateTime = new Date(dateTime);

    if (eventId) {
        const eventIndex = events.findIndex(event => event.id === parseInt(eventId, 10));

        if (eventIndex !== -1) {
            events[eventIndex] = {
                ...events[eventIndex],
                lead_name: leadName,
                event_type: eventType,
                date_time: localDateTime.toString(),
            };
        } else {
            alert("Failed to update event. Event not found!");
        }
    } else {
        const newEvent = {
            id: Date.now(), // this creates a unique id
            lead_name: leadName,
            event_type: eventType,
            date_time: localDateTime.toString(),
        };
        events.push(newEvent);
    }

    localStorage.setItem("leadEvents", JSON.stringify(events)); // Save updated list to localStorage

    alert(eventId ? "Event updated!" : "Event added!");
    closeModal("addEventModal");
    fetchEvents(); // Reload the table
}

// Delete an event
function deleteEvent(eventId) {
    if (confirm("Are you sure you want to delete this event?")) {
        let events = JSON.parse(localStorage.getItem("leadEvents")) || [];
        events = events.filter(event => event.id !== eventId); // Remove the event with matching ID
        localStorage.setItem("leadEvents", JSON.stringify(events)); // Save back to localStorage
        fetchEvents(); // Reload the table
    }
}


// Open modal
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

// Close modal
function closeModal(id) {
    document.getElementById(id).style.display = "none";
    // Clear the form
    document.getElementById("leadName").value = "";
    document.getElementById("eventType").value = "";
    document.getElementById("dateTime").value = "";

    // Remove event ID for tracking editing state
    document.getElementById("saveEventButton").removeAttribute("data-event-id");
}

// Load events on page load
document.addEventListener("DOMContentLoaded", fetchEvents);