// Initialize Swiper
const swiper = new Swiper('.mySwiper', {
    loop: true, // Enable looping
    navigation: {
        nextEl: '.swiper-button-next', // Add next button
        prevEl: '.swiper-button-prev', // Add prev button
    },
    pagination: {
        el: '.swiper-pagination', // Add pagination
        clickable: true, // Make pagination clickable
    },
    autoplay: {
        delay: 3000, // Set autoplay delay (3 seconds)
        disableOnInteraction: false, // Keep autoplay after user interacts
    },
});