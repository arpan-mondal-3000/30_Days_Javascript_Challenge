const secondLang = document.querySelector("li:nth-child(2)"); // using css selectors to select the 2nd child
console.log(secondLang);
//secondLang.innerHTML = "Mojo"
const newli = document.createElement("li");
newli.textContent = "Mojo";
secondLang.replaceWith(newli); // replaces previous element with new element

const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>TypeScript</li>"; // outerHTML property refers to the whole element

/*
Difference between innerHTML property and outerHTML property:

<h1 class="heading">This is a <span style="color: orange">Heading</span></h1>

<script>
let heading = document.querySelector(".heading");
</script>

if we use innerHTML property on the heading variable then "This is a <span style="color: orange">Heading</span>" is returned
and if we use outerHTML property then "<h1 class="heading">This is a <span style="color: orange">Heading</span></h1>" is returned
*/

//removing elements
const lastLang = document.querySelector("li:last-child");
lastLang.remove();
