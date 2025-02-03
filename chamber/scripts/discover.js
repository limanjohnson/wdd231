import { places } from "../data/places.mjs";
import setupNavigationMenu from './navigateMenu.js';
import getDate from './lastModified.js' ;

setupNavigationMenu();
getDate();

console.log(places);