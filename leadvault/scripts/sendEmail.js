// save an event to localStorage and send an email notification
async function scheduleEvent(event) {
    event.preventDefault(); // prevents form reload

    const leadName = document.getElementById("leadName").value;
    const eventType = document.getElementById("eventType").value;
    const dateTime = document.getElementById("dateTime").value;
    // const formattedDateTime = new Date(dateTime).toLocaleDateString();

    if (!leadName || !eventType || !dateTime) {
        alert("Please fill out all fields!");
        return;
    }

    // Get existing events from localStorage
    const events = JSON.parse(localStorage.getItem("leadEvents")) || [];
    const newEvent = {
        id: Date.now(), //current timestamp as a unique ID
        lead_name: leadName,
        event_type: eventType,
        date_time: new Date(dateTime).toISOString(),
    };

    events.push(newEvent); // Add new event to the list
    localStorage.setItem("leadEvents", JSON.stringify(events));

    alert("Event added!");
    closeModal("addEventModal");
    fetchEvents();

    try {
        await emailjs.send(
            "service_brlzawe",
            "template_5zgpg7r",
            {
                lead_name: leadName,
                event_type: eventType,
                event_date: new Date(dateTime).toLocaleDateString(),
            }
        );
        alert("Email notifitcation sent!")
    } catch (error) {
        console.error("Error sending email: ", error);
        alert("Error sending email!")
    }
}