// get last modified date

const currentyear = new Date();
let year = currentyear.getFullYear();
document.getElementById("currentyear").innerHTML = "&copy;" + year;

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = oLastModif;