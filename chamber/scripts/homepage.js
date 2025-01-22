import setupNavigationMenu from './navigateMenu.js';
import displayWeather from './getweather.js';
import getDate from './last-modified.js';

setupNavigationMenu();

document.addEventListener('DOMContentLoaded', displayWeather);
getDate();