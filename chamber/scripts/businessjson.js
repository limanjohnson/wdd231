// get json data from data/members.json

document.addEventListener('DOMContentLoaded', () => {

    // let allBusinesses = []

    async function getBusinessData() {
        const source = 'data/members.json';
        const response = await fetch(source);
        const businessData = await response.json();
        console.table(businessData);

    }

    getBusinessData()

    const displayBusiness = (businesses) => {
        const cards = document.querySelector('#businessCard');
        cards.innerHTML = '';
        businesses.forEach((business) => {
            let businessCard = document.createElement('section');
            let businessName = document.createElement('h2');
            let businessLogo = document.createElement('img');

            businessName.innerText = `${business.businessName}`

            businessLogo.setAttribute('src', `${business.images}`);
            businessLogo.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
            businessLogo.setAttribute('loading', 'lazy');
            businessLogo.setAttribute('width', '300');
            businessLogo.setAttribute('height', '400');

            businessCard.appendChild(businessName);
            businessCard.appendChild(businessLogo);
            cards.appendChild(businessCard);

        })
    }



    displayBusiness();

});


