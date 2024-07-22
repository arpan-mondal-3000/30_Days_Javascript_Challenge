// Activity 1
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  const para1 = document.getElementsByClassName("para")[0];
  para1.innerHTML = "This paragraph was changed on button click";
});

const img1 = document.getElementsByClassName("img")[0];
img1.style.visibility = "hidden";

const con1 = document.getElementsByClassName("container")[0];
con1.addEventListener("dblclick", () => {
  img1.style.visibility = "";
});

// Activity 2
const box1 = document.getElementsByClassName("box")[0];
box1.addEventListener("mouseover", (e) => {
  e.target.style.background = "red";
  //   console.log(e.clientX, e.clientY);
  //   console.log(e.pageX, e.pageY);
});

box1.addEventListener("mouseout", () => {
  box1.style.background = "";
});

// code for cursor following circle

const circle = document.getElementsByClassName("box1")[0];
circle.style.visibility = "hidden";
document.body.addEventListener("mousemove", (e) => {
  //   console.log(e.clientX, e.clientY);
  circle.style.visibility = "";
  circle.setAttribute(
    "style",
    `transform: translate(${e.clientX - 24}px, ${e.clientY - 24}px)`
  );
});

document.body.addEventListener("mouseout", () => {
  circle.style.visibility = "hidden";
});

// Activity 3
document.addEventListener("keydown", (e) => {
  console.log(e.key);
});

const in1 = document.getElementById("in1");
in1.addEventListener("keyup", (e) => {
  const show = document.getElementsByClassName("show")[0];
  show.innerHTML = e.target.value;
});

// Activity 4
const form1 = document.getElementById("form1");
form1.addEventListener("submit", (e) => {
  const in2 = document.getElementById("in2");
  console.log(in2.value);
  in2.value = "";
  e.preventDefault();
});

const lang = document.getElementById("lang");
lang.addEventListener("change", (e) => {
  const show = document.getElementById("langShow");
  show.textContent = `You chose ${e.target.value}`;
});

// Activity 5
const list = document.getElementById("list");
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

const parent = document.getElementById("parent");
const child1 = document.createElement("p");
child1.textContent = "Child 1";
const child2 = document.createElement("p");
child2.textContent = "Child 2";
const child3 = document.createElement("p");
child3.textContent = "Child 3";

parent.append(child1, child2, child3);

parent.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    console.log(e.target.textContent);
  }
});
