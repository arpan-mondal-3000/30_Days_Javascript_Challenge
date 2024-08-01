// Activity 1
const out = document.getElementById("output");

localStorage.setItem("1", "Item1");
let item = localStorage.getItem("1");
out.textContent = item;

let myObj = {
  userId: 1,
  username: "Arpan",
  city: "Kolkata",
};

let objStr = JSON.stringify(myObj);
localStorage.setItem("2", objStr);

let retrived = localStorage.getItem("2");
let obj = JSON.parse(retrived);
// console.log(obj);

// Activity 2
document.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameField = document.querySelector("#name");
  let emailField = document.querySelector("#email");
  let username = nameField.value;
  let email = emailField.value;
  let user = {
    name: username,
    email: email,
  };
  let userStr = JSON.stringify(user);
  localStorage.setItem("userData", userStr);
  nameField.value = "";
  emailField.value = "";
  out.textContent = `Username: ${username} | Email: ${email}`;
});

document.addEventListener("DOMContentLoaded", () => {
  let userData = localStorage.getItem("userData");
  let user = JSON.parse(userData);
  out.textContent = `Username: ${user.name} | Email: ${user.email}`;
});

console.log(localStorage);
localStorage.removeItem("2");
console.log(localStorage);

// Activity 3
sessionStorage.setItem("1", "First Item");
let myitem = sessionStorage.getItem("1");
console.log(myitem);

// Activity 5
function save(key, value) {
  localStorage.setItem(String(key), String(value));
  sessionStorage.setItem(String(key), String(value));
}
save(10, "saved both");
let localSave = localStorage.getItem("10");
let sessionSave = sessionStorage.getItem("10");
console.log(localSave, sessionSave);

function clearAll() {
  localStorage.clear();
  sessionStorage.clear();
}

// clearAll();
