function isLoggedIn() {
  return false;
}

function showContentById(id) {
  const content = document.getElementById(id);
  if (!content) return;
  content.classList.remove("hidden");
  content.classList.add("block");
}

function hideContentById(id) {
  const content = document.getElementById(id);
  if (!content) return;
  content.classList.remove("block");
  content.classList.add("hidden");
}

function contentSwitchHandler(event) {
  if (event.target.innerText === "Sign up") {
    hideContentById("login-form");
    showContentById("signup-form");
    return;
  }
  hideContentById("signup-form");
  showContentById("login-form");
}

// event listeners
const pageSwitches = Array.from(document.querySelectorAll(".highlight"));
pageSwitches.forEach((pageSwitch) => {
  pageSwitch.addEventListener("click", contentSwitchHandler);
});

if (isLoggedIn()) {
  showContentById("content");
} else {
  showContentById("login-form");
}
