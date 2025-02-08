import { places } from "../data/places.mjs";
import setupNavigationMenu from './navigateMenu.js';
import getDate from './lastModified.js';

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

document.addEventListener('DOMContentLoaded', () => {
    setupNavigationMenu();
    getDate();

    getPlaceData();

    const sidebarMessageContainer = document.createElement('div');
    sidebarMessageContainer.id = "sidebar-message"

    // current timestamp
    const currentTimestamp = Date.now();

    // check last visit to page
    const lastVisit = localStorage.getItem('lastVisit');

    // message to display based on last visit
    if (!lastVisit) {
        // first visit
        sidebarMessageContainer.innerText = "Welcome! Let us know if you have any questions."
    } else {
        // difference in days between the visits
        const timeDifference = currentTimestamp - parseInt(lastVisit, 10);
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (timeDifference < 24 * 60 * 60 * 1000) {
            sidebarMessageContainer.innerText = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            sidebarMessageContainer.innerText = "You last visited 1 day ago.";
        } else {
            sidebarMessageContainer.innerText = `You last visited ${daysDifference} days ago.`;
        }
    }

    localStorage.setItem("lastVisit", currentTimestamp.toString());

    const pageHeading = document.querySelector( ".page-heading-container h2")

    pageHeading.appendChild(sidebarMessageContainer);

    // const mainContent = document.querySelector('main');
    // if (mainContent) {
    //     mainContent.insertBefore(sidebarMessageContainer, mainContent.firstChild);
    // }
})
