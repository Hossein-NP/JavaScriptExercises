//Ex - 1 >> User Age

//Variabels

let birthYear = +prompt("Please enter your age: ");
let userAge;

//Calculation

userAge = 2026 - birthYear;
if(birthYear < 1900) {
  alert("You are" + " " + userAge + " " + "years old. It is impossible for you to be alive.");
}
if(birthYear >= 1900) {
  alert("You are" + " " + userAge + " " + "years old.");
}