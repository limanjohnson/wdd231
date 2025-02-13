document.addEventListener( 'DOMContentLoaded', () => {

    const leadList = document.querySelector('#leadList');
    const modal = document.querySelector('#view-modal');
    const modalContent = document.querySelector('#modal-content');
    const closeModal = document.querySelector('#close-btn');
    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const organizationName = document.querySelector('#organizationName');
    const phone = document.querySelector('#phone');
    const email = document.querySelector('#email');
    const notes = document.querySelector('#notes');
    const saveBtn = document.querySelector('#save-edit-btn')

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
            firstName.value = lead.firstName;
            lastName.value = lead.lastName;
            organizationName.value = lead.organizationName;
            phone.value = lead.phone;
            email.value = lead.email;
            notes.value = lead.notes || [];
            if (notes.value === "") {
                notes.value = "No notes";
            }

            saveBtn.addEventListener("click", function () {
                saveChanges(lead.id, index);
            });
        }

        function saveChanges(leadId, index) {
            const leads = JSON.parse(localStorage.getItem("leads")) || [];
            const updatedLeads = leads.map(lead => {
                if (lead.id === leadId) {
                    lead.firstName = firstName.value;
                    lead.lastName = lastName.value;
                    lead.organizationName = organizationName.value;
                    lead.phone = phone.value;
                    lead.email = email.value;
                    lead.notes = notes.value;
                }
                return lead;
            });

            localStorage.setItem("leads", JSON.stringify(updatedLeads));

            // close modal and reload leads
            // modal.classList.remove("active")
            loadLeads();
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
    }

    function deleteLead(index) {
        let leads = JSON.parse(localStorage.getItem("leads")) || [];
        leads.splice(index, 1);
        localStorage.setItem("leads", JSON.stringify(leads));
        loadLeads();
    }
});