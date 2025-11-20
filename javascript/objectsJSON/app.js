// Variable Scope
//function printName() {
//  //const myName = "Sadiq";
//  for (let i = 1; i < 3; i++) {
//    const myName = "inside of If";
//    console.log(myName);
//  }
//  console.log("function scope: ", myName);
//}

//let myName = "My Name";
//printName();
//console.log("global scope", myName);

// Objects
//const obj1 = {
//  oname: "obj1",
//  colour: "brown",
//  printName: () => {
//    console.log("I am Obj1");
//  },
//};

//const obj2 = {
//  1: "one",
//  2: undefined,
//  1.1: [1, 2, 3, "something", null],
//  oname: "object 2",
//  3: {
//    en: "Three",
//    fr: "Trois",
//  },
//  4: function () {
//    console.log("I am number 4");
//  },
//};

// accessing object properties
//console.log("object 1 name:", obj1.oname);
//console.log("object 1 colour:", obj1["colour"]);
//console.log("object 2 index 1 => :", obj2[1]);

// getting keys, values and entries of objects
//console.log("object 1 keys: ", Object.keys(obj1));
//console.log("object 1 values: ", Object.values(obj1));
//console.log("object 1 entries: ", Object.entries(obj1));

// print all values through keys in a loop
//for (let key of Object.keys(obj1)) {
//  console.log(`${key} => `, obj1[key]);
//}

// calling object methods
//obj1.printName();

//checking type of an object
//console.log(
//  typeof obj2,
//  [obj2] instanceof Object,
//  Object.getPrototypeOf(obj1).constructor.name
//);

// object factories
//function Person(personName, personAge) {
//  this.name = personName;
//  this.age = personAge;
//}

//const p1 = new Person("James", 12);
//console.log(p1);
//p1.name = "Jackson";
//console.log("updated name to Jackson:", p1);
//delete p1.name;
//console.log("deleted name:", p1);
//const p2 = new Person("Sadiq", 17);
//console.log(p1, p2);

// JSON - JavaScript Object Notation

const person = `{
	"name": "Sadiq",
	"age": 17,
	"height": 5.9,
	"isStudent": true,
	"skills": ["JavaScript", "HTML", "CSS", "Python"],
	"address": {
		"street": "123 Main St",
		"city": "Nyanya",
		"state": "Abuja",
		"country": "Nigeria"
	},
	"hobbies": null
}`;

//const personObject = JSON.parse(person);
//const personString = JSON.stringify([
//  "name",
//  13,
//  true,
//  null,
//  undefined,
//  { a: 1 },
//  [1, 2, 3],
//  4.3,
//  () => {},
//]);
////console.log("JSON String:", person, "type is:", typeof person);
//console.log("JSON String:", personString, "type is:", typeof personObject);
//console.log(
//  "JSON String from JS:",
//  personString,
//  "type is:",
//  typeof personString
//);
