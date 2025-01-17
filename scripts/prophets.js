// Fetch Prophet Information

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.getElementById('#cards');

async function getProphetDate() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets)

}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('div');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        fullName.innerText = `${prophet.name}`

        portrait.setAttribute('src', `${imageurl}`);
        portrait.setAttribute('alt', `Portrait of ${prophet.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '200');

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);

    })
}

getProphetDate();
