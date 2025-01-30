// Find the last modified date & time
export default function getDate() {
    let oLastModif = new Date(document.lastModified);

    let formatDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById("lastModified").innerHTML = formatDate.format(oLastModif);
}
