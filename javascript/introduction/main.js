const resultsArea = document.getElementById("results-area");
//let a = "aub9d8hq7-19 8yfej 9iwguv9ejdfn r0 9pjfn";
//console.log("I am a string:", a);

//a = 123437898;
//console.log("\nI am a Number(int):", a);
//a = 12343.7898;
//console.log("\nI am a Number(float):", a);
//a = true;
//console.log("\nI am a Boolean", a);

//const b = false;
//console.log("\nI am a Boolean", b);

//b = "error";
//console.log("\nI am undefiend", f);

//a = null;
//console.log("\nI am null", a);

//a = new Date();
//console.log("\nI am a date", a);

//let a = 3,
//  b = 6;
//const dividend = Math.floor(a / b);
//const remainder = a % b;

//console.log(`${a}/${b} = ${dividend} remainder ${remainder}`);

//my_name_is = "me"; // snake case - Python, Rust, Ruby
//myNameIs = "me"; // lower camel case or camel case - JS(variables)
//MyNameIs = "me"; // upper camel case or Pascal case - JS(Class Names, Custom Type Names)

// Expressions
let x = 3 * 2 + 7;
//coxsole.log(x);
//x = 3 * (2 + 2);
//console.log(x);

//x = "3" * 2;
//console.log(x);
//x = "3" + 2;
//console.log(x);
//x = 2 + 3 + "3" + 4 + 7;
//console.log(x);
//x = "aaaa" + "  " + "zzz";
//console.log(x);

// Truthiness - 1, -1, "this", [1], {k: 1},..
// Falsiness - undefined, null, 0;
// Conditionals
//if (x > 10) {
//  resultsArea.innerText = `${x} is greater than 10`;
//} else if (x == 10) {
//  resultsArea.innerText = `${x} is equal to 10`;
//} else {
//  resultsArea.innerText = `${x} is less than 10`;
//}

//if (x) {
//  resultsArea.innerText = `${x} is true`;
//} else {
//  resultsArea.innerText = `${x} is false`;
//}

//switch (x) {
//  case 10:
//    resultsArea.innerText = `${x} is 10`;
//    break;
//  case 5:
//    resultsArea.innerText = `${x} is half of 10`;
//    break;
//  default:
//    resultsArea.innerText = `${x} is < or > 10`;
//}

//switch (x % 2) {
//  case 0:
//    resultsArea.innerText = `${x} even`;
//    break;
//  default:
//    resultsArea.innerText = `${x} odd`;
//}

resultsArea.innerText =
  x > 10
    ? `${x} is greater than 10`
    : x == 10
    ? `${x} is equal to 10`
    : `${x} is less than 10`;
