// Fetch Prophet Information

// const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
document.addEventListener('DOMContentLoaded', () => {

    let allProphets = []

    async function getProphetData() {
        const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
        const response = await fetch(url);
        const data = await response.json();
        // console.table(data.prophets);
        allProphets = data.prophets
        displayProphets(allProphets)
        console.table(allProphets)

    }

    getProphetData()

    const displayProphets = (prophets) => {
        const cards = document.querySelector('#cards');
        cards.innerHTML = '';
        prophets.forEach((prophet) => {
            let card = document.createElement('section');
            let fullName = document.createElement('h2');
            let portrait = document.createElement('img');

            fullName.innerText = `${prophet.name} ${prophet.lastname}`

            portrait.setAttribute('src', `${prophet.imageurl}`);
            portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '300');
            portrait.setAttribute('height', '400');

            card.appendChild(fullName);
            card.appendChild(portrait);
            cards.appendChild(card);

        })
    }

    // Filter data based on selected category
// function filterProphets(category) {
//         let filteredProphets;
//
//         switch (category) {
//             case 'born-in-utah':
//                 filteredProphets = allProphets.filter(prophet => prophet.birthplace === 'Utah');
//                 break;
//             case 'born-out-usa':
//                 filteredProphets = allProphets.filter(prophet => prophet.birthplace === 'England');
//                 break;
//             case 'older-than-95':
//                 filteredProphets = allProphets.filter(prophet => prophet.death - prophet.birthdate > 95);
//                 break;
//             case 'more-than-10-children':
//                 filteredProphets = allProphets.filter(prophet => prophet.numofchildren > 10)
//                 break;
//             case 'pres-more-than-15-years':
//                 filteredProphets = allProphets.filter(prophet => prophet.length > 15);
//                 break;
//             defaut
//                 filteredProphets = allProphets;
//         }
// }
//
//     // Event Listeners for buttons
//     document.getElementById('born-in-utah').addEventListener('click', () => filterProphets('born-in-utah'));
//     document.getElementById('born-out-usa').addEventListener('click', () => filterProphets('born-out-usa'));
//     document.getElementById('older-than-95').addEventListener('click', () => filterProphets('older-than-95'));
//     document.getElementById('more-than-10-children').addEventListener('click', () => filterProphets('more-than-10-children'));
//     document.getElementById('pres-more-than-15-years').addEventListener('click', () => filterProphets('pres-more-than-15-years'));



    displayProphets();

});




