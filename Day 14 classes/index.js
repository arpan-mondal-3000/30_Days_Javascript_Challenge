// Activity 1
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  greet() {
    return `Hello I am ${this.firstName}`;
  }
  updateAge(newAge) {
    this.age = newAge;
    console.log(`The updated age is ${this.age}`);
  }
  static greet() {
    console.log("Hello from static greet");
  }
  get fullName() {
    return `My full name is ${this.firstName} ${this.lastName}`;
  }
  set name(name) {
    this.firstName = name.firstName;
    this.lastName = name.lastName;
  }
}

const me = new Person("Arpan", 20);
console.log(me.greet());
me.updateAge(21);

// Activity 2
class Student extends Person {
  static num = 0;
  constructor(firstName, lastName, age, id) {
    super(firstName, lastName, age);
    this.id = id;
    Student.num++;
  }
  returnID() {
    return `My ID is ${this.id}`;
  }
  greet() {
    return `Hello I am ${this.firstName} and my ID is ${this.id}`;
  }
  static numOfStudents() {
    return Student.num;
  }
}

const student1 = new Student("Suman", "Mondal", 18, 1312);
console.log(student1.returnID());
console.log(student1.firstName, student1.age);
console.log(student1.greet());

// Activity 3
Person.greet();
const student2 = new Student("Student 2", 18, 1255);
console.log(Student.numOfStudents());

// Activity 4
const person1 = new Person("foo", "bar", 100);
console.log(person1.fullName);
person1.name = { firstName: "John", lastName: "Doe" };
console.log(person1.fullName);

// Activity 5
class Account {
  #balance = 0;
  deposit(amt) {
    this.#balance += amt;
  }
  withdraw(amt) {
    if (this.#balance - amt < 0) console.log("You have not enough balance.");
    else this.#balance -= amt;
  }
  get balance() {
    return this.#balance;
  }
}

const myAcc = new Account();
console.log(myAcc.balance);
myAcc.deposit(1000);
console.log(myAcc.balance);
myAcc.withdraw(900);
console.log(myAcc.balance);
myAcc.withdraw(200);
console.log(myAcc.balance);

// The new keyword is used to create a new instance which can be used with functions also
function createUser(username, id, age) {
  //a constructor cannot be an arrow function because we don't have access to this keyword in arrow functions
  this.username = username;
  this.id = id;
  this.age = age;
  this.greeting = () => {
    console.log(`Hello I am ${this.username}`);
  };

  return this; //returning this is implicitly done so even if we don't write this line this will work
}

const userOne = new createUser("Arpan", 1, 20);
const userTwo = new createUser("Suman", 2, 18); // if we don't use the new keyword the previous object will be overwritten
console.log(userOne);
console.log(userTwo);
userOne.greeting();
userTwo.greeting();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
