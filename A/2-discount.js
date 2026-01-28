

//Variabels
let price = Number(prompt("Please enter the price: ", 0));
let discount = Number(prompt("Please enter the discunt: ", "20"));

//Calculation
let finalPrice = price - (price / 100) * discount;

//Show in console tab
console.log("Price: " + price + "\n" + "Discount: " + discount + "\n" +
 "Final price: " + finalPrice);

//Show with alert method
alert(finalPrice)
