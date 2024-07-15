// Activity 1
let num = -3;
if (num > 0) console.log("Positive");
else if (num < 0) console.log("Negative");
else console.log("Zero");

// Activity 2
// largest of three using ternary operator
let a = 12,
  b = 82,
  c = 13;
let ans = a > b ? (a > c ? a : c) : b > c ? b : c;
console.log("Largest", ans);
// largest of three using nested if-else
if (a > b) {
  if (a > c) console.log("Largest", a);
  else console.log("Largest", c);
} else if (b > c) console.log("Largest", b);
else console.log("Largest", c);

// Activity 4
let day = 1;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  default:
    console.log("You're dumb");
}

let score = 78;
switch (true) {
  case score >= 0 && score <= 50:
    console.log("F");
    break;
  case score >= 51 && score <= 70:
    console.log("B");
    break;
  case score >= 71 && score <= 100:
    console.log("A");
    break;
  default:
    console.log("Not valid");
}

// Activity 5
let num1 = 24;
num1 % 2 === 0 ? console.log("Even") : console.log("Odd");

// Activity 6
let year = 2000;
if (year % 4 === 0 && year % 100 != 0) console.log("Leap year");
else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)
  console.log("Leap year");
else console.log("Not leap year");
