const pName = window.prompt("Enter your name: ");
if (pName == null || pName == "") {
  window.alert(`Welcome. It's good to have you here.`);
  console.log("This is branch positive");
} else {
  window.alert(`Welcome ${pName}! It's good to have you here.`);
  console.log("This is branch negative");
}
console.log("\n\nProgram continues here...");
