// Nav item wayfinding
const navItems = document.querySelectorAll('.nav-item');

// Loop through each item and add an event listener
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // remove 'active' class from all nav items
        navItems.forEach(nav => nav.classList.remove('active'));

        // add 'active' class to selected nav item
        item.classList.add('active');
    })
})

// Hamburger Menu
const menu = document.getElementById("menu");

const input = document.createElement("input");
const label = document.createElement("checkbox");
const div = document.createElement("div");
const span = document.createElement("span");

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.querySelector("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.querySelector("main").style.marginLeft = "0";
}

