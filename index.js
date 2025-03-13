const { userInput } = require("./Helpers/UserInputHelper");

// console.log("Using counter++ inside loop:");
// for (let i = 0; i < 5; ) {
//   console.log(i++);
// }

// console.log("Using ++counter inside loop:");
// for (let i = 0; i < 5; ) {
//   console.log(++i);
// }
function sum(a, b) {
  return a + b;
}

let sumOne = function (a, b) {
  return a + b;
};
let sumTwo = sumOne;

console.log(sumTwo);

let a = 2;
let b = a;
