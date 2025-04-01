const { userInput } = require("./Helpers/UserInputHelper");

let arr = ["Apple", "hsgds", "wutfuwf"];
let fullString = "";
for (let i = 0; i < arr.length; i++) {
  fullString += `${arr[i]}; `;
  console.log(i + ";");
}
console.log(fullString);
