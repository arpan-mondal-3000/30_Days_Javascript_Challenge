// Actiivity 1
let arr = [1, 2, 3, 4, 5];
console.log(arr);
let first = arr[0];
let last = arr[arr.length - 1];
console.log(`First element: ${first} and last element: ${last}`);

// Activity 2
let myarr = [1, 2, 3, 4];
// Inserts an element at the back
myarr.push(6);
console.log(myarr);
// Deletes an element from the back
myarr.pop();
console.log(myarr);
// Deletes an element from the front
myarr.shift();
console.log(myarr);
// Inserts an element from the front
myarr.unshift(5);
console.log(myarr);

// Activity 3
let arr2 = [1, 2, 3, 4, 5, 6];

// Map is an array method that takes a function as its parameter and executes the function for all of the array elements
let arr3 = arr2.map((e) => e * 2);

console.log(arr3);

// Filter takes a function and passes each element through the condition in the function to make a new array
let arr4 = arr2.filter((e) => {
  if (e % 2 === 0) return e;
});
console.log(arr4);

// Reduce method takes a function with two arguments an accumulator and a current value and returns at the last iteration
// of the array element their result
let arr5 = arr2.reduce((a, c) => a + c);
// If initial value is not provided then accumulator becomes the value of the first index and iteration starts from second index
// If initial value is provided as the second parameter then accumulator becomes the initial value and iteration starts from first index
console.log(arr5);

// Activity 4
let numarr = [1, 2, 3, 4, 5];
//for(let i = 0; i < numarr.length; i++) console.log(numarr[i]);

// forEach method executes a function for each of the elements in an array
//numarr.forEach((num)=>console.log(num));

// Activity 5
let twoDarr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < twoDarr.length; i++) {
  for (let j = 0; j < twoDarr[i].length; j++) {
    process.stdout.write(String(twoDarr[i][j]) + " "); // process.stdout.write() only takes string arguments
  }
  console.log();
}

twoDarr.forEach((e) => {
  e.forEach((el) => process.stdout.write(String(el) + " "));
  console.log();
});

console.log("Specific element:", twoDarr[0][2]);
