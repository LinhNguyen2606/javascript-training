// Funtion
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
