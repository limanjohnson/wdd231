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
            let businessName = document.createElement('h2');


            businessName.innerText = `${business.businessName}`

            businessLogo.setAttribute('src', `${business.images}`)

            businessCard.appendChild(businessLogo);
            businessCard.appendChild(businessName);
            cards.appendChild(businessCard);

        })

        // businessInformation.forEach((business) => {
        //     let businessList = document.createElement('section')
        // })
    }


    // Fetch business data and pass it to displaybusiness
    getBusinessData().then((businessData) => {
        if (businessData && businessData.businessInformation) {
        displayBusiness(businessData.businessInformation);
        } else {
            console.error('no valid data found', businessData)
        }
    });

    // Display list vs grid
    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");

});


