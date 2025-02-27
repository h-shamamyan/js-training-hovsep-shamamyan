// Problem:

// You are building a scheduling application that requires converting a numeric input (1-7) into the corresponding day of the week. The application should handle the following:

// If the input number is 1, it should log "Monday".
// If the input number is 2, it should log "Tuesday".
// If the input number is 3, it should log "Wednesday".
// If the input number is 4, it should log "Thursday".
// If the input number is 5, it should log "Friday".
// If the input number is 6, it should log "Saturday".
// If the input number is 7, it should log "Sunday".
// If the input number is outside the range of 1-7, it should return an error message: "Invalid day number. Please enter a number between 1 and 7."
// The program should be able to process this input and output the correct day, or display an error message if the number is invalid.

const { userInput } = require("../../Helpers/UserInputHelper");
const myInput = userInput("test");
console.log(myInput);

let weekDay = userInput();
switch (weekDay) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednsday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number. Please enter a number between 1 and 7.");
}
weekDay = "test";
if (typeof weekDay !== "number" || Number.isNaN(weekDay)) {
  console.log(`${weekDay} is not a number, please provide a valid number`);
} else {
  if (weekDay === 1) {
    console.log("Monday");
  } else if (weekDay === 2) {
    console.log("Tuesday");
  } else if (weekDay === 3) {
    console.log("Wednsday");
  } else if (weekDay === 4) {
    console.log("Thursday");
  } else if (weekDay === 5) {
    console.log("Friday");
  } else if (weekDay === 6) {
    console.log("Saturday");
  } else if (weekDay === 7) {
    console.log("Sunday");
  } else {
    console.log("Invalid day number. Please enter a number between 1 and 7.");
  }
}
