// Activity 1
let name = "Arpan";
let age = 20;
console.log(`Hello my name is ${name} and my age is ${age}`);
let multiLineStr = `This is a
multiline string
using template literals in Js`;
console.log(multiLineStr);

// Activity 2
let arr = [1, 2, 3, 4, 5, 6];
// Array destructuring
let a, b, rest;
[a, b, ...rest] = arr; // destructures first two values and assigns it to a and b and the remaining array is assigned to the rest variable
console.log(a, b); // 1 2
console.log(rest); // [3, 4, 5, 6]

let book = {title: "Looking for Alaska",
            author: "Jhon Green"};
// Object destructuring
let {title, author} = book; // the local variable's name should be same as the object's property names
console.log(title, author);

let {title: t, author: au} = book; // to change the name of the local variable use a colon after the property name
console.log(t, au);

// Destructuring can be used to swap two variables
let x = 10, y = 8;
console.log(`x: ${x}, y: ${y}`);
[x, y] = [y, x];
console.log(`x: ${x}, y: ${y}`);

// Activity 3
// spread operator
let myarr1 = [5, 3, 7, 2];
let myarr2 = [10, 11, 12, ...myarr1]; 
console.log(myarr2);

let myarr3 = [1, 2, 3, 4, 5];
const sum = (...args)=>{ // using the rest operator to take an arbitary number of arguments
    let s = 0;
    for(const n of args)s+=n;
    return s;
}

console.log(sum(...myarr3)); // using the spread operator to provide the whole array in a destructured way

// Activity 4
const prod = (a, b=1)=>{ // function with default parameter
    return a * b;
}
console.log(prod(3, 4));
console.log(prod(3));

// Activity 5
let objName = "Kiki";
let objAge = 12;
function greet(name, age){
    console.log(`Hello my name is ${name} and my age is ${age}`);
}

let person = {objName, objAge, greet}; // enhanced object literals can be used to restructure an object
person.greet(person.objName, person.objAge);

let movie = "Spirited away";
let date = 2001;

let mov = {name: movie, release: date};
console.log(`The movie ${mov.name} was released on ${mov.release}`);

