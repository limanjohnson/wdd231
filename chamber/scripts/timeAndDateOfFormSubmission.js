export default function getTime() {
        document.addEventListener("DOMContentLoaded", () => {
        // Get the hidden timestamp input field
        const timestampField = document.getElementById("timeStamp");

        // Set its value to the current date and time
        let now = new Date(); // current date and time
        let formatDate = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        timestampField.value = formatDate.format(now) // Format as ISO string
    });
}