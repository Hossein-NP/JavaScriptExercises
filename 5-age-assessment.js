//EX 1 >> Age Assessment

//Variabels

let age = Number(prompt("Please enter your age: ", 18));

//Calculation

if (age < 18) {
  alert("You are not authorized to access the site.")
}
if (age >= 18) {
  alert("You are authorized to access the site.")
}

//Ex 2 >> Power

//Variabels

let number_1 = +prompt("Please enter first number: ", 0);
let number_2 = +prompt("Please enter second number: ", 0);

//Calculation

let power = number_1 ** number_2;
alert(power);
