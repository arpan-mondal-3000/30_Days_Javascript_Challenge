// Activity 1
const regex1 = /JavaScript/g;
let str =
  "JavaScript is a programming language for the web. JavaScript is a very powerful language, Javascript can be run in the browser";

const regex2 = /\d+/g;
str = "string wi7832th numbers 81 214";

// Activity 2
const regex3 = /[A-Z]\w+/g;
str = "This is a String with words having CapitalLetters.";

// Activity 3
const regex4 = /\d+/g;
str = "(123) 456-7890";

const regex5 = /(\w|(\.\w+))+/g;
str = "username@domain.com";

// Activity 4
const regex6 = /^\w+/g;
str = "this is a string.";

const regex7 = /((\w+\.)|\w+)$/g;

// Activity 5
const regex8 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/g;

let password = "7Abc$k6";

let passMatch = password.match(regex8);
// console.log(passMatch);
passMatch ? console.log("valid Password") : console.log("Invalid password");

const regex9 = /^(https?:\/\/)?([\da-z.-]+)\.([a-z]{2,6})([/\w .-]*)*\/?$/g;
url =
  "https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197439";

let matchUrl = url.match(regex9);
matchUrl[0] === url ? console.log("Valid url") : console.log("Invalid url");
