const { userInput } = require("./Helpers/UserInputHelper");

let successfulOrFailedAttempts = 4;
Array.from({ length: successfulOrFailedAttempts }).forEach((_, index, arr) => {
  console.log("arr length", arr.length);
  console.log(
    `Index: ${index} < FailedAttemptsMax: ${successfulOrFailedAttempts - 1}`
  );
  if (index < successfulOrFailedAttempts - 1) {
    console.log("if worked");
  } else {
    console.log("else worked");
  }
});
