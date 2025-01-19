// get json data from data/members.json

document.addEventListener('DOMContentLoaded', () => {

    // let allBusinesses = []

    async function getBusinessData() {
        const source = 'data/members.json';
        const response = await fetch(source);
        const businessData = await response.json();
        console.table(businessData);
        return businessData;
    }

    const displayBusiness = (businessInformation) => {
        const cards = document.querySelector('#businessCard');
        cards.innerHTML = '';
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

            businessURL.setAttribute('href', business.websiteURL)
            businessURL.setAttribute('target', '_blank')
            businessURL.innerText = `Visit Website`

            businessLogo.setAttribute('src', `${business.images}`);
            businessLogo.setAttribute('alt', business.businessName);
            businessLogo.setAttribute('loading', 'lazy');

            businessCard.appendChild(businessLogo);
            businessCard.appendChild(businessName);
            businessCard.appendChild(businessAddress);
            businessCard.appendChild(businessNumber);
            businessCard.appendChild(businessURL)
            cards.appendChild(businessCard);

        })

        // businessInformation.forEach((business) => {
        //     let businessList = document.createElement('section')
        // })
    };

    // Display list vs grid
    const setToggle = () => {
        const businessCardContainer = document.querySelector('#businessCard');
        const gridButton = document.querySelector("#grid");
        const listButton = document.querySelector("#list");

        if (!gridButton || !listButton) {
            console.error('Grid or List button not found');
            return;
        }

        console.log('Grid and List buttons found');

        gridButton.addEventListener('click', () => {
            businessCardContainer.classList.remove('list-view');
            businessCardContainer.classList.add('grid-view');
        });

        listButton.addEventListener('click', () => {
            businessCardContainer.classList.remove('grid-view');
            businessCardContainer.classList.add('list-view');
        })

    }


    // Fetch business data and pass it to displaybusiness
    getBusinessData().then((businessData) => {
        if (businessData && businessData.businessInformation) {
        displayBusiness(businessData.businessInformation);
        setToggle();
        } else {
            console.error('no valid data found', businessData)
        }
    });



});


