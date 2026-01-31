// Ex 1 >> Time Convert

//Variabels

let minutes = +prompt("Please enter the time in minutes: ", 60);
let hour = Math.floor(minutes / 60);
let min = minutes % 60;

alert("Time: " + hour + "H : " + min + "M");
