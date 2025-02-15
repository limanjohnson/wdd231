document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('leadForm');
    const addAddressToggle = document.getElementById('addAddressToggle');
    const addressFields = document.getElementById('addressFields');

    addAddressToggle.addEventListener('change', function() {
        addressFields.style.display = this.checked ? "flex" : "none";
    });

    leadForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const organizationName = document.getElementById('organization').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const notes = document.getElementById('notes').value.trim();
        // const streetAddress = document.getElementById('streetAddress').value.trim();
        // const city = document.getElementById('city').value.trim();
        // const state = document.getElementById('state').value.trim();
        // const zip = document.getElementById('zip').value.trim();
        // const country = document.getElementById('country').value.trim();
        let streetAddress = document.getElementById('streetAddress').value.trim();
        let city = document.getElementById('city').value.trim();
        let state = document.getElementById('state').value.trim();
        let zip = document.getElementById('zip').value.trim();
        let country = document.getElementById('country').value.trim();

        // if (addAddressToggle.checked) {
        //     let streetAddress = document.getElementById('streetAddress').value.trim();
        //     const city = document.getElementById('city').value.trim();
        //     const state = document.getElementById('state').value.trim();
        //     const zip = document.getElementById('zip').value.trim();
        //     const country = document.getElementById('country').value.trim();
        // }

        if (firstName && lastName && organizationName && email && phone) {
            const lead = {
                firstName,
                lastName,
                organizationName,
                email,
                phone,
                notes,
                streetAddress,
                city,
                state,
                zip,
                country,
            };
            saveLead(lead)
            leadForm.reset();
            addressFields.style.display = "none";
        } else {
            alert("Please fill out all required fields");
        }

    });

    function saveLead(lead) {
        let leads = JSON.parse(localStorage.getItem('leads')) || [];
        leads.push(lead);
        localStorage.setItem('leads', JSON.stringify(leads));
        alert("Lead Added")
    }

});