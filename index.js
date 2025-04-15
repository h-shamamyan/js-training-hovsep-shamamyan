const { userInput } = require("./Helpers/UserInputHelper");

const symbol1 = Symbol("userId");
const symbol2 = Symbol("userId");

function User(name, id) {
  this.name = name;
  this[id] = id;
}

let user1 = new User("Hayk", symbol1);

console.log(Object.keys(user1));
console.log(user1.name);
user1.name = "Hamo";
console.log(user1.name);
