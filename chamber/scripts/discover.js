import { places } from "../data/places.mjs";
import setupNavigationMenu from './navigateMenu.js';
import getDate from './lastModified.js';

setupNavigationMenu();
getDate();

let allPlaces = [];

const displayPlaces = (locations) => {
    const cards = document.querySelector('#place-cards');
    if (!cards) {
        console.error("Element #place-cards not found!");
        return;
    }

    cards.innerHTML = '';
    locations.forEach((location) => {
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let imageContainer = document.createElement('figure');
        let displayImage = document.createElement('img');
        let displayCaption = document.createElement('figcaption');
        let description = document.createElement('p');
        let address = document.createElement('address');
        let learnMoreButton = document.createElement('button');

        displayImage.setAttribute('class', "ln-discover-images");

        title.innerHTML = location.name;
        displayImage.src = location.image_url;
        displayCaption.innerHTML = location.name;
        description.innerHTML = location.description;
        address.innerHTML = location.address;

        learnMoreButton.innerHTML = "Learn More";

        imageContainer.appendChild(displayImage);
        imageContainer.appendChild(displayCaption);
        card.appendChild(imageContainer);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(learnMoreButton);

        cards.appendChild(card);
    });
};

async function getPlaceData() {
    const placeData = places;
    allPlaces = placeData;
    displayPlaces(allPlaces);
    console.table(allPlaces);
}

getPlaceData();
