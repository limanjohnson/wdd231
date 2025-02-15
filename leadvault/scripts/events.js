// Fetch events from localStorage
function fetchEvents() {
    const events = JSON.parse(localStorage.getItem("leadEvents")) || []; // Retrieve or default to []
    const tableBody = document.getElementById("eventsTable");
    tableBody.innerHTML = ""; // Clear the table before reloading

    events.forEach(event => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${event.lead_name}</td>
            <td>${event.event_type}</td>
            <td>${new Date(event.date_time).toLocaleString()}</td>
            <td class="action-buttons">
                <button onclick="editEvent(${event.id})">Edit</button>
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

    // Get existing events
    const events = JSON.parse(localStorage.getItem("leadEvents")) || [];
    const newEvent = {
        id: Date.now(), // Use current timestamp as a unique ID
        lead_name: leadName,
        event_type: eventType,
        date_time: new Date(dateTime).toISOString(),
    };

    events.push(newEvent); // Add new event to the list
    localStorage.setItem("leadEvents", JSON.stringify(events)); // Save updated list to localStorage

    alert("Event added successfully!");
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

// Edit an event (basic implementation)
function editEvent(eventId) {
    const events = JSON.parse(localStorage.getItem("leadEvents")) || [];
    const event = events.find(event => event.id === eventId);

    if (!event) {
        alert("Event not found!");
        return;
    }

    // Pre-fill the modal with event data
    document.getElementById("leadName").value = event.lead_name;
    document.getElementById("eventType").value = event.event_type;
    document.getElementById("dateTime").value = event.date_time;

    // Remove the old event and save the updated version on form submission
    events.splice(events.indexOf(event), 1);
    localStorage.setItem("leadEvents", JSON.stringify(events)); // Temporarily remove the event

    openModal("addEventModal");
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
}

// Load events on page load
document.addEventListener("DOMContentLoaded", fetchEvents);