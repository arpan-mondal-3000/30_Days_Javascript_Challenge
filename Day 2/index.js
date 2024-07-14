// Activity 1 : Arithmetic operators
let num1 = 54,
  num2 = 79;
console.log(num1 + num2);
console.log((num1 / num2).toFixed(4)); // toFixed() is used to round a decimal number
console.log(num2 % num1);

// Activity 2: Assignment operators
let num3 = 34;
num3 += 23;
console.log(num3);
num3 -= 23;
console.log(num3);

// Activity 3 : Comparision operators
console.log(Number(5 > 4));
// 5 > 4 returns true ans Number() can be used to typecast the boolean to a number which gives 1
console.log(8 >= 10);

console.log(23 == 10); // prints false
console.log(24 === 24); // prints true
/*
Difference between == and ===
==(Loose Equality): This operator compares values after attempting to convert them to a common type. This is also known as type coercion.
===(Strict Equality): This operator compares values without performing any type conversion. It checks both the value and the type of the operands.
*/
console.log(10 == "10"); // returns true as they are converted to the same type before checking
console.log(10 === "10"); // returns false as their tyes are also checked

// Activity 4: Logical operators
console.log(5 || 10); // returns the first true value
console.log(10 && -3); // returns 0 if one of them is zero otherwise returns the last true value
console.log(10 > 4 && -2 < 0); // returns true
console.log(2 < 0 || 5 > 3); // returns true
console.log(!0); // returns true
console.log(!10); // returns false

// Activity 5: Ternary operators
console.log(10 == "10" ? "hi" : "bye");
console.log(5 <= 3 ? "Five" : "2" === 2 ? "two" : "three");

// Extra
/*
The Nullish Coalescing Operator (??)
The ?? operator returns the first argument if it is not nullish (null or undefined). Otherwise it returns the second argument.
*/

let a = null;
let b = 9;
console.log(a ?? b); // returns b because the first argument is null

let c = undefined;
let d = "Hello";
console.log(d ?? c); // prints hello because d is not null

/*
The Optional Chaining Operator (?.)
The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
*/
let addr = { country: "India", state: { name: "WB", city: "Kolkata" } };
console.log(addr.state?.district); // there is no key named district so it returns undefined instead of throwing an error
