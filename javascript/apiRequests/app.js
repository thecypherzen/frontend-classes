//function getNextUserId() {
//	localStorage.getItem("our-users");
//}

function isLoggedIn() {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  }
  return false;
}

function showContent() {
  const content = document.querySelector("main");
  if (content) {
    content.classList.remove("hidden");
    content.classList.add("block");
  }
}
function hideContent() {
  const content = document.querySelector("main");
  if (content) {
    content.classList.remove("block");
    content.classList.remove("hidden");
  }
}
function showForm() {
  const content = document.querySelector("form");
  if (content) {
    content.classList.remove("hidden");
    content.classList.add("block");
  }
}
function hideForm() {
  const content = document.querySelector("form");
  if (content) {
    content.classList.remove("block");
    content.classList.remove("hidden");
  }
}

async function signupUser(dataObject) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      data: JSON.stringify(dataObject),
    });
    const userData = await response.json();
    console.log("userData:", userData, "typeof userData:", typeof userData);
    localStorage.setItem("user", JSON.stringify(userData));
    return;
  } catch (err) {
    throw err;
  }
}

async function updateUserInfo(userId, updatedData) {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const userData = await user.json();
  console.log("user data before update", userData);

  // update user info
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      {
        method: "PUT",
        data: JSON.stringify(updatedData),
      }
    );
    const updatedUser = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const updatedUserData = await updatedUser.json();
    console.log("user data after update", updatedUserData);
  } catch (err) {
    console.error(err);
  }
}

// event handlers
async function handleSignup(event) {
  event.preventDefault();
  const form = document.querySelector("form");
  if (!form) return;
  const data = new FormData(form);
  try {
    await signupUser(Object.fromEntries(data.entries()));
    window.location.reload();
  } catch (err) {
    console.log(err);
    window.alert("login failed");
  }
}

async function handleLogout() {
  localStorage.removeItem("user");
  window.location.reload();
}

// event listeners
const form = document.querySelector("form");
form?.addEventListener("submit", handleSignup);

const logoutBtn = document.getElementById("logout-btn");
logoutBtn?.addEventListener("click", handleLogout);

// Main Body
if (isLoggedIn()) {
  showContent();
  updateUserInfo(2, { username: "NewUsername" });
} else {
  showForm();
}
