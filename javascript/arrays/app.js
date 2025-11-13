const resultArea = document.getElementById("results-area");

const studentNames = ["James Salisu", "Sadiq", "Jonathan", "Phoebe", "Ismailu"];
const mixedArray = new Array("person 1", 3, 4.6, {}, function () {}, [
  13,
  14,
  "Daxton",
]);

function listStudentNames(names) {
  let list = names.join(", ");
  resultArea.innerText = list;
}

function writeResult(value) {
  console.log("writing", value);
  const pTag = document.createElement("p");
  pTag.innerText = value;
  resultArea.appendChild(pTag);
}

console.log(mixedArray);
listStudentNames(studentNames);
writeResult(mixedArray.toString());

// add elements later into an array:
const fruits = [];
writeResult(`Total Fruits: ${fruits.length}`);
fruits.push("Mango");
writeResult(`${fruits} | Length: ${fruits.length}`);

fruits.push("Orange");
writeResult(`${fruits} | Length: ${fruits.length}`);

fruits.unshift("Pawpaw");
writeResult(`${fruits} | Length: ${fruits.length}`);

fruits[6] = "Apple";
writeResult(`${fruits} | Length: ${fruits.length}`);

fruits[1] = "Pineapple";
writeResult(`${fruits} | Length: ${fruits.length}`);

let value = fruits.pop();
writeResult(`removed: ${value}`);
writeResult(`${fruits} | Length: ${fruits.length}`);
value = fruits.shift();
writeResult(`removed: ${value}`);
writeResult(`${fruits} | Length: ${fruits.length}`);

studentNames.forEach((student, index) => {
  writeResult(
    `${student}: ${index + 1} position. Characters: ${student.length}`
  );
});

writeResult(`type of fruits; ${typeof fruits}`);
writeResult(`3 is instance of Array ? ${3 instanceof Array}`);
