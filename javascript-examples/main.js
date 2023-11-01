/*-----------------------Function-----------------------*/
function showDialog() {
  alert("Hello world!");
}

showDialog();

// Pass many parameters
function caculateSum(a, b) {
  console.log(a + b);
}

caculateSum(5, 10);

function myLog() {
  let myString = "";
  for (let param of arguments) {
    myString += `${param} - `;
  }
  console.log(myString);
}

myLog(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Using return to caculate sum
function sum(a, b) {
  return a + b;
}

const result = sum(20, 6);

console.log(result);
/*-----------------------Function-----------------------*/

/*-----------------------String-----------------------*/
var myString = "hello world in world of the world!";
// 1. Length
console.log(myString.length);

// 2. Find index
console.log(myString.indexOf("world!", 6));
console.log(myString.lastIndexOf("world!"));
console.log(myString.search("world"));

// 3.Cut string
console.log(myString.slice(6, 11));
console.log(myString.slice(6));
console.log(myString.slice(-1));

// 4. Replace
console.log(myString.replace("world", "best"));
// Replace all the world text in the string
console.log(myString.replace(/world/g, "best"));

// 5. Convert to upper case
console.log(myString.toUpperCase());

// 6.Convert to lower case
console.log(myString.toLowerCase());

// 7.Trim
console.log(myString.trim());

// 8.Split
const languages = "JS, PHP, Ruby";

console.log(languages.split(", "));

// 9. Get a character by index
const myString2 = "Linh Nguyen";
// return '' dont have a character
console.log(myString2.charAt(0));
// return undefined
console.log(myString2[0]);
/*-----------------------String-----------------------*/

/*-----------------------Number-----------------------*/
// first way to create number
const age = 22;
const PI = 30000.2363454565;

// second way to create number
// const otherNumber = new Number(9);
console.log(PI.toFixed(2));

console.log(Number.isFinite(20 / 5));
console.log(Number.isInteger(Math.PI));
/*-----------------------Number-----------------------*/

/*-----------------------Object-----------------------*/
const programminglanguages = [
  "Javascript",
  "PHP",
  "Ruby",
  null,
  undefined,
  function () {},
  {},
  123,
];

const programminglanguages2 = ["HTML", "SCSS"];

console.log(programminglanguages.slice(4, 8));
console.log(programminglanguages);
console.log(programminglanguages.concat(programminglanguages2));
console.log(programminglanguages.splice(1, 1, "Dart"));
console.log(programminglanguages.push("Linh Nguyen"));
console.log(programminglanguages.pop());
console.log(typeof programminglanguages.join(", "));
console.log(typeof programminglanguages.toString());
console.log(Array.isArray(programminglanguages));
console.log(programminglanguages[0]);
/*-----------------------Array-----------------------*/

/*-----------------------Array-----------------------*/
const emailKey = "email";

const myInfo = {
  name: "Linh Nguyen",
  age: 22,
  address: "Da Nang, VN",
  [emailKey]: "linhdt@gmail.com",
  getName: function () {
    //this is myInfo
    return this.name;
  },
};

// delete myInfo.address;
// delete myInfo.age;

console.log(myInfo.getName());

// Object constructor

//Description User
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

User.prototype.className = "intro__title";
User.prototype.getClassName = function () {
  return this.className;
};

// Create a object
const user = new User("Linh", "Nguyen", "Avatar");
const author = new User("Tommy", "Nguyen", "Avatar");

author.title = "Sharing this with everone in the group";
user.comment =
  "I really like this. And I really appreciate when you sharing it to everyone";

console.log(user.className);
console.log(user.getClassName());

// Date object
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

console.log(`${day} - ${month} - ${year}`);

// Math object
const random = Math.floor(Math.random() * 100);

if (random < 50) {
  console.log("Success enhancement");
} else {
  console.log("Failure enhancement");
}

/*-----------------------Object-----------------------*/