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

/*-----------------------If/else-----------------------*/
function run(a) {
  if (a % 15 === 0) {
    return 5;
  } else if (a % 5 === 0) {
    return 2;
  } else if (a % 3 === 0) {
    return 1;
  }
}

console.log(run(5));

function isEnoughAge(age) {
  if (age < 18) {
    return "Sorry bro, you dont have enough to drink alcohol";
  } else {
    return "Lets grab some beer bro";
  }
}

console.log(isEnoughAge(22));
/*-----------------------If/else-----------------------*/

/*-----------------------Switch-----------------------*/
function run(fruits) {
  let result;

  switch (fruits) {
    case "Banana":
      result = "This is a Banana";
      break;
    case "Apple":
      result = "This is an Apple";
      break;
    case "Orange":
    case "Watermelon":
    case "grape":
      result = "This is a Orange, Watermelon, and Grape";
      break;
    default:
      result = "No fruits";
  }

  return result;
}
console.log(run("Orange"));
/*-----------------------Switch-----------------------*/

/*-----------------------Ternary operator-----------------------*/

const courses = {
  course: "Javascript",
  coin: 200,
};

result = courses.coin > 0 ? `${courses.coin} coin` : "Free";
console.log(result);
/*-----------------------Ternary operator-----------------------*/

/*-----------------------Loop-----------------------*/
function getRandNumbers(min, max, length) {
  let numbers = [];
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    numbers.push(randomNumber);
  }
  return numbers;
}
console.log(getRandNumbers(1, 10, 5));

function getTotal(numbers) {
  let totals = 0;
  for (let i = 0; i < numbers.length; i++) {
    totals += numbers[i];
  }
  return totals;
}
console.log(getTotal([1, 10, 5]));

var orders = [
  {
    name: "Khóa học HTML - CSS Pro",
    price: 3000000,
  },
  {
    name: "Khóa học Javascript Pro",
    price: 2500000,
  },
  {
    name: "Khóa học React Pro",
    price: 3200000,
  },
];

function getTotal() {
  let total = 0;
  for (let i = 0; i < orders.length; i++) {
    console.log(orders[i]);
    total += orders[i].price;
  }
  return total;
}

console.log(getTotal(orders));

// For/in loop
const myInfo1 = {
  name: "Linh Nguyen",
  age: 22,
  address: "Da Nang, VN",
};

for (var key in myInfo1) {
  console.log(key);
  console.log(myInfo1[key]);
}

const languages1 = ["JS", "TS", "C#"];

for (var key in languages1) {
  console.log(key);
  console.log(languages1[key]);
}

const myString1 = "JavaScript";

for (var key in myString1) {
  console.log(myString1[key]);
}

function run(object) {
  let results = [];
  for (var key in object) {
    console.log(key, object[key]);
    results.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
  }
  return results;
}

console.log(run({ name: "Nguyen Van A", age: 16 }));

// For/of loop
for (var value of Object.values(myInfo1)) {
  console.log(value);
}

// while loop
const myArray = ["JS", "PHP", "CSS"];

let i = 0;

while (i < myArray.length) {
  console.log(myArray[i]);
  i++;
}

/*-----------------------Loop-----------------------*/
