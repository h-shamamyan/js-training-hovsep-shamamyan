const { userInput } = require("./Helpers/UserInputHelper");

function assignName(callback) {
  let name;
  setTimeout(() => {
    name = "bob";

    return callback(name);
  }, 100);
}
function logName(name) {
  console.log(name);
  return name;
}

let name1 = assignName(logName);
console.log(name1);
