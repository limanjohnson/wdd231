// create hamburger menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const navItem = document.querySelectorAll('.navigation a');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// apply 'active' class to selected <a> tag

navItem.forEach(link => {
    link.addEventListener('click', () => {
        navItem.forEach(nav => nav.classList.remove('active'));

        link.classList.add('active');
    });
});

// check screen size and toggle hamburger menu
function handleResize() {
    if (window.innerWidth >= 651) {
        navigation.classList.add('open');
        hamButton.style.display = 'none';
    } else {
        navigation.classList.remove('open');
        hamButton.style.display = 'block';
    }
}

// Run on page load
handleResize();

// Check window resize
window.addEventListener('resize', handleResize);

