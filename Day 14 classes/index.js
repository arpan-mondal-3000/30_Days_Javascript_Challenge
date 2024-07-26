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
