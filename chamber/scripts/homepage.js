import setupNavigationMenu from './navigateMenu.js';
import displayWeather from './getweather.js';
import getDate from './last-modified.js';

setupNavigationMenu();

document.addEventListener('DOMContentLoaded', displayWeather);
getDate();

    async function getBusinessData() {
        const source = 'data/members.json';
        const response = await fetch(source);
        const businessData = await response.json();
        console.table(businessData);
        return businessData;
    }

    const selectRandomBusiness = (businessInformation) => {
        const businessCard = document.querySelector('#businessCardAds');
        businessCard.innerHTML = '';
        businessInformation.forEach((business) => {
            let businessCard = document.createElement('section');
            let businessLogo = document.createElement('img');
            let businessName = document.createElement('h3');
            let businessAddress = document.createElement('p');
            let businessNumber = document.createElement('p');
            let businessURL = document.createElement('a');

            businessName.innerText = `${business.businessName}`;
            businessAddress.innerText = `${business.address}`;
            businessNumber.innerText = `${business.phoneNumber}`;
            businessNumber.setAttribute('class', 'phone-number');

            businessURL.setAttribute('href', business.websiteURL);
            businessURL.setAttribute('target', '_blank');
            businessURL.innerText = `Visit Website`;

            businessLogo.setAttribute('src', `${business.images}`);
            businessLogo.setAttribute('alt', business.businessName);
            businessLogo.setAttribute('loading', 'lazy');

            businessCard.appendChild(businessLogo);
            businessCard.appendChild(businessName);
            businessCard.appendChild(businessAddress);
            businessCard.appendChild(businessNumber);
            businessCard.appendChild(businessURL);
            cards.appendChild(businessCard);

        })

    };


    // Randomly select three businesses if membership is 2 or 3
const randomizeSelection = (array) => {
    for (let i = array.length - 1; i > 0; i-- ) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

async function displayRandomBusinesses () {
    const business = await getBusinessData();
    const filteredBusiness = business.filter( business => business.membershipLevel === 2 || business.membershipLevel === 3 );

    let chooseEligibleBusiness = randomizeSelection(filteredBusiness);
    selectRandomBusiness(chooseEligibleBusiness);

}

document.addEventListener('DOMContentLoaded', displayRandomBusinesses);