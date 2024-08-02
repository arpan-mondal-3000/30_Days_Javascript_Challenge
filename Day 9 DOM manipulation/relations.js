const parent = document.querySelector(".parent"); // accessing the element with className parent
console.log(parent);
console.log(parent.children); // accessing the children elements of parent which returns an HTMLCollection
console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}
parent.children[1].style.color = "orange";
console.log(parent.firstElementChild); // returns the first child in the children collection
console.log(parent.lastElementChild); // returns the last child in the children collection

const dayOne = document.querySelector(".day");
console.log(dayOne);
console.log(dayOne.parentElement); // returns the parent element
console.log(dayOne.nextElementSibling); // returns the next element in the node tree which is in the same parent

console.log("NODES: ", parent.childNodes); // returns a NodeList containing all the child nodes including comments and text nodes
