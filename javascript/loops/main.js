const forLoop = document.getElementById("for-loop");
const whileLoop = document.getElementById("while-loop");
const doWhileLoop = document.getElementById("do-while-loop");

for (let counter = 1; counter <= 100; counter++) {
  setTimeout(() => {
    forLoop.innerText = counter;
  }, counter * 1000);
}

//let counter = 10;
//while (counter > 10) {
//  console.log(counter);
//  counter += 1;
//}

//do {
//  console.log(counter);
//} while (counter < 10);
