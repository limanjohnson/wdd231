document.addEventListener( 'DOMContentLoaded', () => {

    const leadList = document.querySelector('#leadList');
    loadLeads();

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
          ${lead.firstName} ${lead.lastName} - ${lead.organizationName} - ${lead.phone} - ${lead.email}
          <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            leadList.appendChild(li);
        });

        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", function () {
                deleteLead(this.getAttribute("data-index"));
            });
        });
    }

    function deleteLead(index) {
        let leads = JSON.parse(localStorage.getItem("leads")) || [];
        leads.splice(index, 1);
        localStorage.setItem("leads", JSON.stringify(leads));
        loadLeads();
    }
});