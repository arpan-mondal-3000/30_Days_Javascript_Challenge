// Activity 1
var num = 32;
console.log(num);

let str = "Hello";
console.log(str);

// Activity 2
let num3 = 5;
num3 += 100;
console.log(num3);

const bool = true;
console.log(bool);

// Activity 3
console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr);
console.log(arr[2]);

// Activity 4
let myvar = 28;
console.log(`Previous value: ${myvar}`);
myvar = 82;
console.log(`New value: ${myvar}`);

// Activity 5
const constvar = 78;
console.log(`Previous constant value: ${constvar}`);

// It raises an error because of assignment to a constant variable.
// constvar = 87;
// console.log(`Next constant value: ${constvar}`);

// Using console.table() to print the data in tabular form
console.table([num, str, bool, myvar, typeof bool]);
