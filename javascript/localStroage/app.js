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

async function loginUser(dataObject) {
  try {
    const dataString = JSON.stringify(dataObject);
    localStorage.setItem("user", dataString);
    return;
  } catch (err) {
    throw err;
  }
}

// event handlers
async function handleLogin(event) {
  event.preventDefault();
  const form = document.querySelector("form");
  if (!form) return;
  const data = new FormData(form);
  try {
    await loginUser(Object.fromEntries(data.entries()));
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
form?.addEventListener("submit", handleLogin);

const logoutBtn = document.getElementById("logout-btn");
logoutBtn?.addEventListener("click", handleLogout);

// Main Body
if (isLoggedIn()) {
  showContent();
} else {
  showForm();
}
