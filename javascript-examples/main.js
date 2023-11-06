/* document */
/*eslint-disable no-console*/
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

/*-----------------------Array-----------------------*/
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

const courses1 = [
  {
    id: 1,
    name: "Javascript",
    coin: 200,
  },

  {
    id: 2,
    name: "TypeScript",
    coin: 250,
  },

  {
    id: 3,
    name: "ReactJS",
    coin: 300,
  },

  {
    id: 4,
    name: "NextJS",
    coin: 350,
  },

  {
    id: 5,
    name: "HTML/CSS",
    coin: 0,
  },

  {
    id: 6,
    name: "HTML/CSS",
    coin: 10,
  },

  {
    id: 7,
    name: "HTML/CSS",
    coin: 12,
  },
];

const dethArray = [1, 2, [3, 4], 5, 6, [7, 8, 9], 10];
const flatArray = dethArray.reduce(function (flatOutput, item) {
  return flatOutput.concat(item);
}, []);

console.log(flatArray);

const topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "HTML/CSS",
      },

      {
        id: 2,
        title: "JavaScript",
      },

      {
        id: 3,
        title: "ReactJS",
      },
    ],
  },

  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: "Database",
      },

      {
        id: 2,
        title: "JavaScript",
      },

      {
        id: 3,
        title: "NodeJS",
      },
    ],
  },
];

const newCourses = topics.reduce((acc, topic) => {
  return acc.concat(
    topic.courses.map((course) => {
      return `
      <div>
        <span>ID: ${course.id}</span>
        <h2>ID: ${course.title}</h2>
      </div>
    `;
    })
  );
}, []);
console.log(newCourses.join(", "));
//accumulator: storage variable
//curentValue: courses1

const totalCoin = courses1.reduce(
  (accumulator, currentValue) => accumulator + currentValue.coin,
  0
);

console.log(totalCoin);

const newCourse = courses1.map((course) => {
  return {
    id: course.id,
    name: `Course: ${course.name}`,
    coin: course.coin,
    textCoin: `Price: ${course.coin}`,
  };
});

console.log(newCourse);

const listCoures = courses1.filter(function (course) {
  return course.name === "HTML/CSS";
});

console.log(listCoures);

const isFree1 = courses.some(function (course, index) {
  console.log(index);
  return course.coin === 0;
});

console.log(isFree1);

const isFree = courses.every(function (course, index) {
  console.log(index);
  return course.coin === 0;
});

console.log(isFree);

courses1.forEach(function (course, index) {
  console.log(course);
});

/*-----------------------Array-----------------------*/

/*-----------------------Object-----------------------*/
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

// do/while loop
let i1 = 0;
let isSuccess = false;

do {
  i1++;
  console.log(`Recharge time ${i1}`);
} while (!isSuccess && i1 <= 3);

// Continue
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// Nested loop
const myArray1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let i = 0; i < myArray1.length; i++) {
  for (let j = 0; j < myArray1[i].length; j++) {
    console.log(myArray1[i][j]);
  }
}

for (let i = 100; i > 0; i -= 5) {
  console.log(i);
}

// Recursive
function countDown(num) {
  if (num > 0) {
    console.log(num);
    return countDown(num - 1);
  }
  return num;
}

countDown(10);

function loop(start, end, cb) {
  if (start < end) {
    cb(start);
    return loop(start + 1, end, cb);
  }
}

const arr = ["Javascript", "PHP", "Ruby"];

loop(0, arr.length, function (index) {
  console.log(arr[index]);
});

// function factorial(num) {
//   let output = 1;
//   for (let i = num; i > 0; i--) {
//     output *= i;
//   }
//   return output;
// }

// console.log(factorial(3));

function factorial(num) {
  if (num > 0) {
    return num * factorial(num - 1);
  }
  return 1;
}

console.log(factorial(3));
/*-----------------------Loop-----------------------*/

/*-----------------------HTML DOM-----------------------*/
// HTML DOM

// 1. Element: ID, class, tag
// CSS selector, HTML colection

// 2. Attribute
// 3. Text

let boxElement = document.querySelector(".box");

boxElement.innerHTML = "<h1>Heading</h1>";

// DOM style
boxElement.style.width = "100px";
boxElement.style.height = "200px";
boxElement.style.backgroundColor = "red";

Object.assign(boxElement.style, {
  width: "200px",
  height: "100px",
  backgroundColor: "green",
});
/*-----------------------HTML DOM -----------------------*/
