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