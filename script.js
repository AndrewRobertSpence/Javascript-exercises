// let favouriteFood = "Thai";
// console.log(favouriteFood);

// let age = "49";
// if ((age) => 18) {
//   console.log("I'm an adult");
// } else {
//   console.log("I'm a young person");
// }

// let secretNumber = "32";
// let guessNumber = prompt("Guess the secret number: ");

// if (secretNumber !== guessNumber){
//     console.log("Your guess was wrong");
// } else {
//     console.log("Congratulations, you are correct!");
// }

// let oneNumber = prompt("select 1 number: ")
// let numberTwo = prompt("select another number: ");
// console.log(Number(oneNumber) + Number(numberTwo));

// let temperature = 27;
// if (temperature <= 16) {
//   console.log("it's cold today");
// } else if (temperature >= 17 && temperature <= 26) {
//   console.log("it is warm today");
// } else {
//   console.log("it is hot today");
// }

// let monthlyIncome = prompt("enter monthly income");
// let monthlyRent = prompt("enter monthly rent cost");
// let monthlyUtilities = prompt("enter month utilities cost");
// let monthlyFood = prompt("enter monthly food costs");
// let totalExpenses = Number(monthlyRent) + Number(monthlyUtilities) + Number(monthlyFood)
// let netIncome = Number(monthlyIncome) - Number(totalExpenses)
// if (netIncome >= 0) {
//   console.log("You are living within your budget")
// }
// else {
//   console.log("You are not living within your budget")
// }

// let eventDate = prompt("Enter day of an event")
// let userAvailability = prompt("Are you available on this day?")
// if (userAvailability.toLowerCase() == "yes") {
//   console.log ("Your attendance is confirmed")
// } else {
//   console.log ("Unfortunately you are unable to attendance")
// }

// let temperature = prompt("Enter the temperature");
// let typeTemperature = prompt("is it fahrenheit or celsius")
// let resultFahrenheit = typeTemperature.includes("f");
// if (resultFahrenheit) {
//   console.log((temperature - 32) * 5/9, " converted to celsius")
//  } else {
//   console.log((temperature * 9/5) + 32, " converted to fahrenheit")
// }

let groceries = ["milk", "bread", "apples", "shampoo"]
let nonFood = groceries.pop()
let food = groceries;
console.log("non food items:", nonFood, "food items:", food)
