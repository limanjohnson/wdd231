document.addEventListener( 'DOMContentLoaded', () => {
    const hamMenu = document.querySelector('#ham-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // hamMenu.addEventListener('click', () => {
    //     navMenu.classList.toggle('active')
    // });
    //
    // navLinks.forEach(link => {
    //     link.addEventListener('click', () => {
    //         navMenu.classList.remove('active');
    //     });
    // });

    function updateHamMenuIcon() {
        if (navMenu.classList.contains('active')) {
            hamMenu.innerHTML = '&#88;';
        } else {
            hamMenu.innerHTML = '&#9776;';
        }
    }

    updateHamMenuIcon();

    hamMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        updateHamMenuIcon();
    });

    navLinks.forEach(link => {
        hamMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            updateHamMenuIcon();
        });
    });
});