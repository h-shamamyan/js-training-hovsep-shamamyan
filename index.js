const { userInput } = require("./Helpers/UserInputHelper");

// console.log("Using counter++ inside loop:");
// for (let i = 0; i < 5; ) {
//   console.log(i++);
// }

// console.log("Using ++counter inside loop:");
// for (let i = 0; i < 5; ) {
//   console.log(++i);
// }
for (let i = 1; i <= 2; i++) {
  console.log(`Outer loop iteration: ${i}`);

  for (let j = 1; j <= 3; j++) {
    console.log(`Inner loop iteration: ${j}`);
  }
}
console.log("Done!");
