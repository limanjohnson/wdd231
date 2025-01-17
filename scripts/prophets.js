// Fetch Prophet Information

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.getElementById('#cards');

async function getProphetDate() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);

}

getProphetDate();