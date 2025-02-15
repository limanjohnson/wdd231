document.addEventListener( 'DOMContentLoaded', () => {

    const leadList = document.querySelector('#leadList');
    const modal = document.querySelector('#view-modal');
    // const modalContent = document.querySelector('#modal-content');
    const closeModal = document.querySelector('#close-btn');
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const organizationName = document.querySelector('#organizationName');
    const phone = document.querySelector('#phone');
    const email = document.querySelector('#email');
    const notes = document.querySelector('#notes');
    const saveBtn = document.querySelector('#save-edit-btn')
    const streetAddress = document.querySelector('#streetAddress');
    const city = document.querySelector('#city');
    const state = document.querySelector('#state');
    const zip = document.querySelector('#zip');
    const country = document.querySelector('#country');

    let currentLeadIndex = null;

    window.onload = function() {
        loadLeads();
    };

    function loadLeads() {
        leadList.innerHTML = "";
        let leads = JSON.parse(localStorage.getItem('leads')) || [];

        if (leads.length === 0) {
            leadList.innerHTML = "<li>No leads to display</li>";
            return;
        }

        leads.forEach((lead, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
            <div class="leads-identity">
                <p>${lead.firstName} ${lead.lastName} | ${lead.organizationName}</p>
            </div>
          <button class="leads-list-btn view-btn" data-index="${index}">View/Edit</button>
          <button class="leads-list-btn delete-btn" data-index="${index}">Delete</button>
            `;
            leadList.appendChild(li);
        });

        // event listener to the view/edit buttons
        const viewBtns = document.querySelectorAll(".view-btn");
        viewBtns.forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                const lead = leads[index];
                openModal(lead, index);
            });
        });

        // event listener to the delete buttons
        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", function () {
                deleteLead(this.getAttribute("data-index"));
            });
        });

        // open modal with the lead information
        function openModal(lead, index) {
            modal.classList.add("active");

            // populate form fields with lead's data
            firstName.value = lead.firstName;
            lastName.value = lead.lastName;
            organizationName.value = lead.organizationName;
            phone.value = lead.phone;
            email.value = lead.email;
            notes.value = lead.notes || "";
            if (notes.value === "") {
                notes.value = "No notes";
            }
            streetAddress.value = lead.streetAddress || "";
            city.value = lead.city || "";
            state.value = lead.state || "";
            zip.value = lead.zip || "";
            country.value = lead.country || "";

            // Track index of the lead being edited
            currentLeadIndex = index;
        }

        saveBtn.addEventListener("click", function () {
            if (currentLeadIndex !== null) {
                saveChanges(currentLeadIndex);
            }
        });

        function saveChanges(index) {
            const leads = JSON.parse(localStorage.getItem("leads")) || [];

            leads[index] = {
                ...leads[index],
                firstName: firstName.value,
                lastName: lastName.value,
                organizationName: organizationName.value,
                phone: phone.value,
                email: email.value,
                notes: notes.value || "No notes",
                streetAddress: streetAddress.value || "",
                city: city.value || "",
                state: state.value || "",
                zip: zip.value || "",
                country: country.value || "",
            };

            localStorage.setItem("leads", JSON.stringify(leads));

            loadLeads();
            // modal.classList.remove("active");
        }

    }

        function showSaveNotification() {
            const notification = document.getElementById("saveNotification");

            // show notification
            notification.classList.add("show");

            // hide after 5 seconds
            setTimeout(() => {
                notification.classList.remove("show");
            }, 5000);
        }

        document.getElementById("save-edit-btn").addEventListener("click", function () {
            showSaveNotification();
        })



        // close modal
        closeModal.onclick = function() {
            modal.classList.remove("active");
        }

        window.onclick = function(event) {
            if (event.target === modal) {
                modal.classList.remove("active");
            }
        };

    function deleteLead(index) {
        let leads = JSON.parse(localStorage.getItem("leads")) || [];
        leads.splice(index, 1);
        localStorage.setItem("leads", JSON.stringify(leads));
        loadLeads();
    }
});