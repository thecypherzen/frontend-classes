const inputField = document.querySelector("input");

if (inputField) {
  const messageArea = document.getElementById("greeting-message-area");
  inputField.addEventListener("keydown", (event) => {
    // Remove message content if it exists
    if (messageArea?.innerHTML !== "") {
      messageArea.innerHTML = "";
    }
    // Handle when user hits enter key
    if (event.key === "Enter") {
      // get value entered by user in input
      const name = event.target.value;
      if (name === "") {
        return;
      }
      // construct display message
      const message = `
			<p>Welcome <span class="text-bold">${name}</span>! Nice to meet you. </p>
			`;
      // Display message
      if (messageArea) {
        messageArea.innerHTML = message;
      }
    }
  });
}
