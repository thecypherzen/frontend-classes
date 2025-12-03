STORAGE_KEY = "v-user";

function isLoggedIn() {
  return !!localStorage.getItem(STORAGE_KEY);
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

async function signupFormSubmitHandler(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  formData.set("avatar", "https://picsum.photos/500");
  const data = Object.fromEntries(formData.entries());

  // validate that email doesn't already exist using the endpoint:
  // https://api.escuelajs.co/api/v1/users/is-available

  const res = await fetch("https://api.escuelajs.co/api/v1/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    const userData = await res.json();
    window.alert("Signup successfull. Logging you in...");
    loginUser(userData);
    return;
  }
  window.alert("Error:", res?.message ?? "An Error occured");
  console.error(res);
}

function loginUser(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  window.location.reload();
}

function logoutUser(event) {
  event.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
}

async function loginFormSubmitHandler(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  // get all users
  const res = await fetch("https://api.escuelajs.co/api/v1/users");
  if (!res.ok) {
    window.alert("Error:", res);
    return;
  }
  const users = await res.json();

  // find user matching our user's credentials
  const [user] = users.filter(
    (user) => user.email === data.email && user.password === data.password
  );

  if (!user) {
    window.alert("Error: User not found");
    return;
  }
  loginUser(user);
}

async function updatePassword(event) {
  event.preventDefault();
  const newPass = document.getElementById("passup-input")?.value;
  console.log("new password:", newPass);
  if (!newPass) {
    window.alert("Error! No Password entered");
    return;
  }
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (!storedData) {
    window.alert("Error! You're not logged in.");
    return;
  }

  const { id } = JSON.parse(storedData);

  const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: newPass }),
  });

  if (!res.ok) {
    window.alert("Error! Password update failed");
    return;
  }

  const updatedUserData = await res.json();
  console.log(updatedUserData);
  loginUser(updatedUserData);
}

// event listeners
const pageSwitches = Array.from(document.querySelectorAll(".highlight"));
pageSwitches.forEach((pageSwitch) => {
  pageSwitch.addEventListener("click", contentSwitchHandler);
});

document
  .getElementById("signup-form")
  ?.addEventListener("submit", signupFormSubmitHandler);
document
  .getElementById("login-form")
  ?.addEventListener("submit", loginFormSubmitHandler);
document.getElementById("logout-btn")?.addEventListener("click", logoutUser);

document
  .getElementById("passup-btn")
  ?.addEventListener("click", updatePassword);

if (isLoggedIn()) {
  showContentById("content");
} else {
  showContentById("login-form");
}
