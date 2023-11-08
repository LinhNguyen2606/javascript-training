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

let h1ELement = document.querySelector("h1");

for (let i = 0; i < h1ELement.length; i++) {
  h1ELement.onclick = function (e) {
    console.log(e.target);
  };
}
/*-----------------------HTML DOM -----------------------*/

/*-----------------------JSON -----------------------*/
// let json = '["JavaScript", "PHP"]';
// let json = '{"name": "Linh Nguyen", "age": 18}';

console.log(
  JSON.stringify({
    name: "Linh Nguyen",
    age: 22,
    test: function () {},
  })
);
/*-----------------------JSON -----------------------*/

/*-----------------------Promise -----------------------*/
let promise = new Promise((resolve, reject) => {
  resolve([
    {
      id: 1,
      name: "Javascript",
    },
  ]);
  reject("Error");
});

promise
  .then((courses) => {
    console.log("courses");
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Done");
  });

const users = [
  {
    id: 1,
    name: "Kien Dang",
  },

  {
    id: 2,
    name: "Linh Nguyen",
  },

  {
    id: 3,
    name: "Tommy",
  },
];

const comments = [
  {
    id: 1,
    user_id: 3,
    comment: "It's really good",
  },

  {
    id: 2,
    user_id: 2,
    comment: "Fanstastic!",
  },
];

const getComments = () => {
  return new Promise((resolve, reject) => {
    if (comments) {
      resolve(comments);
    } else {
      reject("Not found comments");
    }
  });
};

const getUsersById = (userId) => {
  return new Promise((resolve, reject) => {
    let usersFound = users.find((user) => user.id === userId);
    if (usersFound) {
      resolve(usersFound);
    } else {
      reject("User not found");
    }
  });
};

getComments()
  .then((comments) => {
    const userIds = comments.map((comment) => comment.user_id);
    const userPromises = userIds.map((userId) => getUsersById(userId));
    return Promise.all(userPromises).then((users) => {
      return { comments, users };
    });
  })
  .then(({ comments, users }) => {
    const list = document.createElement("ul");
    comments.forEach((comment) => {
      const user = users.find((user) => user.id === comment.user_id);
      if (user) {
        const listItem = document.createElement("li");
        listItem.textContent = `${user.name}: ${comment.comment}`;
        list.appendChild(listItem);
      }
    });
    document.body.appendChild(list);
  })
  .catch((error) => {
    console.error(error);
  });
/*-----------------------Promise -----------------------*/

/*-----------------------Fetch -----------------------*/
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then(function (posts) {
    let htmls = posts.map((post) => {
      return `
        <li>
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </li>
      `;
    });

    let html = htmls.join("");
    document.querySelector("ul").innerHTML = html;
  });

/* ------------------------------------------- */

const postAPI = "https://jsonplaceholder.typicode.com/posts";

function start() {
  getPosts(renderPosts);
  handleCreateForm();
}

start();

function getPosts(callback) {
  fetch(postAPI)
    .then((response) => response.json())
    .then(callback);
}

function createPost(data, callback) {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  fetch(postAPI, options)
    .then((response) => response.json())
    .then(callback);
}

function handleRemovePost(postId) {
  let deleteAPI = `${postAPI}/${postId}`;

  let options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  fetch(deleteAPI, options)
    .then(() => {
      // Remove the post element from the DOM directly
      let postElement = document.getElementById(`post-${postId}`);

      if (postElement) {
        postElement.remove();
      }
    })
    .catch((error) => {
      console.error("Error deleting post:", error);
    });
}

function renderPosts(posts) {
  let ulElement = document.getElementById("list-posts");

  let htmls = posts.map((post) => {
    return `
        <li>
          <h4>${post.title}</h4>
          <p>${post.body}</p>
          <button onclick="handleRemovePost(${post.id})">Remove</button>
        </li>
    `;
  });

  ulElement.innerHTML = htmls.join("");
}

function handleCreateForm() {
  let createBtn = document.getElementById("create");

  createBtn.onclick = () => {
    let name = document.querySelector('input[name="name"]').value;
    let body = document.querySelector('input[name="body"]').value;

    let formData = {
      name: name,
      body: body,
    };

    createPost(formData, function () {
      getPosts(renderPosts);
    });
  };
}
/*-----------------------Fetch -----------------------*/

/*-----------------------Template String -----------------------*/
const courseName = "Javascript";
const description = `Course name: ${courseName}`;
console.log(description);

const lines = `Line 1
Line 2
Line 3`;
console.log(lines);
/*-----------------------Template String -----------------------*/

/*-----------------------Arrow function -----------------------*/
const logger = (log) => {
  console.log(log);
};

logger("Message...");

const sum = (a, b) => ({
  a,
  b,
});
console.log(sum(2, 2));

// arrow function isn't context
const course = {
  name: "Javascript",
  getName: () => {
    return this; //context
  },
};

console.log(course.name);

// arrow function can't constructor
const Course = (name, price) => {
  this.name = name;
  this.price = price;
};

const getCourse = new Course("Linh", 10000);

console.log(getCourse);
/*-----------------------Arrow function -----------------------*/

/*-----------------------Classes -----------------------*/
class Course1 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

const jsCourse = new Course1("Javascript", 10000);
const tsCourse = new Course1("Typescript", 20000);

console.log(jsCourse);
console.log(tsCourse);
/*-----------------------Classes -----------------------*/

/*-----------------------Default parameter value -----------------------*/
function logger(log = "Default value!") {
  console.log(log);
}

logger(undefined);
/*-----------------------Default parameter value -----------------------*/

/*-----------------------Enhanced object literals -----------------------*/
let name = "Javascript";
let price = 1000;

let course2 = {
  name,
  price,
  //Define methor for object
  getName() {
    return name;
  },
};

console.log(course2.getName());

// Define key for object as variable
let fieldName = "name";
let fieldPrice = "price";

let course3 = {
  [fieldName]: "JavaScript",
  [fieldPrice]: 1000,
};

console.log(course3);
/*-----------------------Enhanced object literals -----------------------*/

/*-----------------------Destructuring, Rest----------------------*/
// let array = ["Javascript", "Ruby", "PHP"];

// let [a, ...rest] = array;

// console.log(a, rest);

let course4 = {
  name2: "Typescript",
  price2: 2000,
  image: "image - address",
  children: {
    name2: "ReactJS",
  },
};

let {
  name2: parentName,
  children: { name2 },
  description2 = "default description",
} = course4;

console.log(parentName);
console.log(name2);
console.log(description2);

function logger(...params) {
  console.log(params);
}

console.log(logger(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11));
/*-----------------------Destructuring, Rest----------------------*/

/*----------------------Spread----------------------*/
let array1 = ["Javascript", "Ruby", "PHP"];

let array2 = ["ReactJS", "Dart"];

let array3 = [...array2, ...array1];

console.log(array3);

let object1 = {
  name: "NodeJS",
};

let object2 = {
  price: 1000,
};

let object3 = {
  ...object1,
  ...object2,
};

console.log(object3);

let defaultConfig = {
  api: "https://domain-course-page",
  apiVersion: "v1",
  other: "other",
};

let excerciseConfig = {
  ...defaultConfig,
  api: "https://domain-excercise-page",
};

console.log(excerciseConfig);

let array = ["JS", "PHP", "Ruby"];

function logger(...rest) {
  for (let i = 0; i < rest.length; i++) {
    console.log(rest[i]);
  }
}

logger(...array);
/*----------------------Spread----------------------*

/*----------------------Tagged template literals----------------------*/
function hightlight([first, ...string], ...values) {
  return values
    .reduce(
      (acc, curr) => [...acc, `<span>${curr}</span>`, string.shift()],
      [first]
    )
    .join("");
}

let branch = "Agigily";
let course5 = "Javascript";

let html = hightlight`Learn programming ${course5} at ${branch}!`;
console.log(html);
/*----------------------Tagged template literals----------------------*/
