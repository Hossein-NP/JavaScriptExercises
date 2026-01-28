import prompt from 'prompt';
// Odd or Even

//Variables
let inputNumber = +prompt("Please enter a number: ", "4");
let remain = inputNumber % 2;

//Calculation
if(remain === 0) {
  alert("The entered number is even.");
}

if(remain !== 0){
  alert("The entered number is odd.")
}