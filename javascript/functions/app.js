const p1 = "Jonah";
const p2 = "Sadiq";
const p3 = "Mr Kabiru";

// method 1
function displayUser(name) {
  const resutlts = document.getElementById("results-area");
  const pTag = document.createElement("p");
  pTag.innerText = name;
  resutlts.appendChild(pTag);
}

//displayUser(p1);
//displayUser(p2);
//displayUser(p3);

// method 2 - Arrow function
const addTwoNumbers = (a, b) => {
  return a + b;
};

function divideTwoNumbers(numerator, denominator) {
  return numerator / denominator;
}

//const addTwoNumbers = (a, b) => a + b;

//const sum1 = addTwoNumbers(2, 8);
//displayUser(`${sum1}`);
//displayUser(`${addTwoNumbers(-200, 37)}`);

function addNumbers() {
  const length = addNumbers.arguments.length;
  let total = 0;
  for (let i = 0; i <= length - 1; i++) {
    total += addNumbers.arguments[i];
  }
  return total;
}

//         0  1   2   3    4    5   6
const sum1 = addNumbers(1, 3);
console.log("sum1:", sum1);
