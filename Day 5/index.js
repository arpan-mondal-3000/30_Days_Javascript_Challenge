// Activity 1
let number = 12;
function checkOddEven(num) {
  if (num % 2 === 0) console.log("Even");
  else console.log("Odd");
}
checkOddEven(number);

function sq(n) {
  return n * n;
}

console.log(sq(12));

// Activity 2
let max = function (a, b) {
  a > b ? console.log(a) : console.log(b);
};
max(12, 54);

let concat = function (str1, str2) {
  return str1 + str2;
};

console.log(concat("hello", "world"));

// Activity 3
let sum = (a, b) => {
  return a + b;
};

console.log(sum(34, 57));

let checkStr = (str) => {
  for (let i = 0; i < str.length; i++) if (str[i] === "a") return true;
  return false;
};
console.log(checkStr("njeanoej"));

//another way is to use the includes() method for strings
let checkChar = (str) => {
  if (str.includes("a")) return true;
  return false;
};

console.log(checkChar("helloasdf"));

// Activity 4
let prod = (a, b = 10) => {
  return a * b;
};

console.log(prod(2, 3)); //checking with all the parameters provided
console.log(prod(4)); // checking with default parameter

let greet = (name, age = 20) => {
  console.log(`Hello ${name}, your age is ${age}.`);
};
greet("Suman", 19); // checking with all the prameters
greet("Arpan"); // checking with default parameters

// Activity 5
function higherOrder(n, func) {
  if (n === 0) return;
  func();
  return higherOrder(n - 1, func);
}

function func() {
  console.log("Function called");
}

higherOrder(3, func);

function twoFunc(a, func1, func2) {
  let res = func1(a);
  return func2(res);
}

function func1(a) {
  return a + 2;
}
function func2(a) {
  return a + 3;
}

console.log(twoFunc(23, func1, func2));
