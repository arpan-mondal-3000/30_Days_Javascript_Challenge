// Activity 1
const el1 = document.getElementById("el1");
el1.innerHTML = "It is manipulated through Js";

const el2 = document.getElementsByClassName("element")[1];
el2.style.background = "red";

// Activity 2
const newEl = document.createElement("div");
newEl.innerText = "This element was created by Js";

const currDiv = document.getElementsByClassName("con")[0];
currDiv.appendChild(newEl);

const item = document.createElement("li");
item.innerText = "This item was created by Js";
const list = document.querySelectorAll("ul")[0];
list.appendChild(item);

// Activity 3
const el3 = document.getElementsByClassName("remove")[0];
el3.remove();

const el4 = document.getElementsByClassName("div-with-children")[0];
// el4.removeChild(el4.lastElementChild);
const last = el4.lastElementChild;
el4.removeChild(last);

// Activity 4
const img1 = document.getElementById("img1");
img1.src =
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const el5 = document.getElementsByClassName("para")[0];

el5.removeAttribute("style");
el5.style.margin = "40px";
el5.style.padding = "20px";
el5.style.color = "red";
el5.style.background = "yellow";
el5.style.removeProperty("background");

// Activity 5
const btn = document.getElementsByClassName("btn1")[0];
// The event listener code will be executed and the changes here will be final
btn.addEventListener("click", () => {
  el5.innerHTML =
    "This para was generated on button click using event listener.";
});

const changePara = () => {
  el5.innerHTML =
    "This para was generated on button click using onClick function.";
};

const box = document.getElementsByClassName("box")[0];
box.setAttribute(
  "style",
  `background: green; 
   display: flex; 
   align-items: center; 
   justify-content: center`
);
box.style.height = "50px";
box.style.width = "150px";

box.addEventListener("mouseover", (event) => {
  event.target.style.cursor = "pointer";
  box.style.border = "2px solid white";
});
