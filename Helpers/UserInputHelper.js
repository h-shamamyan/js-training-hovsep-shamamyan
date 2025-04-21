// npm install readline-sync

// Function to get input synchronously
// export function userInput(message) {
//   const readlineSync = require("readline-sync");
//   let input = readlineSync.question(message ?? "Please enter your input: "); // Synchronously ask for input
//   return input;
// }

// module.exports = { userInput };
// Import readline-sync using ES module syntax
import readlineSync from "readline-sync";

// Export the userInput function
export function userInput(message) {
  let input = readlineSync.question(message ?? "Please enter your input: "); // Synchronously ask for input
  return input;
}
