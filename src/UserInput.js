// npm install readline-sync

// Function to get input synchronously
function userInput() {
  const readlineSync = require("readline-sync");
  let input = readlineSync.question("Please enter your name: "); // Synchronously ask for input
  return input;
}

module.exports = { userInput };
