import getTime from './timeAndDateOfFormSubmission.js'
import getDate from './lastModified.js';
import setupNavigationMenu from './navigateMenu.js';

getTime();
getDate();
setupNavigationMenu();

const openButton = document.querySelector('#openButton1');
const dialogBox =document.querySelector('#membershipDialog');
const closeButton = document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('#membershipDialog div');


// Open the dialog box
openButton1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'The Non Profit Membership is for non profit organizations.'
})

openButton2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'The Bronze membership provides the following benefits:'
})

openButton3.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'The Silver membership provides the following benefits:'
})

openButton4.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = 'The Gold membership provides the following benefits:'
})

// Close the dialog box
closeButton.addEventListener('click', () => {
    dialogBox.close();
})