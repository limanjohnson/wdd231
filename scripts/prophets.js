document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelector('#cards');
    let prophetsData = []; // Store fetched data globally

    async function getProphetData() {
        const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
        const response = await fetch(url);
        const data = await response.json();

        prophetsData = data.prophets; // Save data globally
        displayProphets(prophetsData);
    }

    getProphetData();

    const displayProphets = (prophets) => {
        // Clear the current display
        cards.innerHTML = '';

        // Render the filtered prophets
        prophets.forEach((prophet) => {
            let card = document.createElement('section');
            let fullName = document.createElement('h2');
            let portrait = document.createElement('img');

            fullName.innerText = `${prophet.name} ${prophet.lastname}`;

            portrait.setAttribute('src', `${prophet.imageurl}`);
            portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '300');
            portrait.setAttribute('height', '400');

            card.appendChild(fullName);
            card.appendChild(portrait);

            cards.appendChild(card);
        });
    };

    const applyFilters = () => {
        // Read the checkboxes
        const bornInUtah = document.getElementById('born-in-utah').checked;
        const bornOutUsa = document.getElementById('born-out-usa').checked;
        const olderThan95 = document.getElementById('older-than-95').checked;
        const moreThan10Children = document.getElementById('more-than-10-children').checked;
        const presidentMoreThan15Years = document.getElementById('pres-more-than-15-years').checked;

        // Start with the full dataset
        let filteredData = [...prophetsData];

        if (bornInUtah) {
            filteredData = filteredData.filter(prophet => prophet.birthplace.includes('Utah'));
        }

        if (bornOutUsa) {
            filteredData = filteredData.filter(prophet => !prophet.birthplace.toLowerCase().includes('usa'));
        }

        if (olderThan95) {
            filteredData = filteredData.filter(prophet => {
                const age = new Date().getFullYear() - prophet.birthdate.split('-')[0];
                return age > 95;
            });
        }

        if (moreThan10Children) {
            filteredData = filteredData.filter(prophet => prophet.numofchildren > 10);
        }

        if (presidentMoreThan15Years) {
            filteredData = filteredData.filter(prophet => prophet.yearsAsPresident > 15);
        }

        // Update the display with the filtered results
        displayProphets(filteredData);
    };

    // Attach event listeners to the checkboxes
    const filters = document.querySelectorAll('input[type=checkbox]');
    filters.forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
});