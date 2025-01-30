import setupNavigationMenu from './navigateMenu.js';
import displayWeather from './getWeather.js';
import getDate from './lastModified.js';

setupNavigationMenu();

document.addEventListener('DOMContentLoaded', () => {
    displayWeather();
    displayRandomBusinesses();
    getDate();
});

    async function getBusinessData() {
        const source = 'data/members.json';
        try {
            const response = await fetch(source);
            if (!response.ok) throw new Error ( `Error fetching data: ${response.statusText}`);
                const businessData = await response.json();
                console.table(businessData);
                return businessData.businessInformation;
        } catch (error) {
            console.error(`Failed to fetch data: ${error.message}`, error);
            return[];
        }

    }

    const selectRandomBusiness = (businessInformation) => {
        const businessCard = document.querySelector('#businessCardAds');
        businessCard.innerHTML = '';
        businessInformation.forEach((business) => {
            let businessCardContainer = document.createElement('section');
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

            businessCardContainer.appendChild(businessLogo);
            businessCardContainer.appendChild(businessName);
            businessCardContainer.appendChild(businessAddress);
            businessCardContainer.appendChild(businessNumber);
            businessCardContainer.appendChild(businessURL);
            businessCard.appendChild(businessCardContainer);

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
    const businesses = await getBusinessData();

    console.log('Business Information:', businesses)

    if (!Array.isArray(businesses)) {
        console.error('Expected an array of businesses but got: ', businesses);
        return;
    }

    const filteredBusiness = businesses.filter( business => business.membershipLevel === "2" || business.membershipLevel === "3" );

    let chooseEligibleBusiness = randomizeSelection(filteredBusiness);
    let selectedBusiness = chooseEligibleBusiness.slice(0, 3);

    selectRandomBusiness(selectedBusiness);

}