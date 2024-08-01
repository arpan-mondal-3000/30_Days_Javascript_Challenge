// Activity 1
let book1 = { title: "Looking for Alaska", author: "John Green", year: 2005 };
console.log(book1);
console.log(`Title: ${book1.title}\nAuthor: ${book1.author}`);

// Activity 2
let book2 = {
  title: "13 Reasons Why?",
  author: "Jay Asher",
  year: 2007,
  getTitle() {
    let data = { title: book2.title, author: book2.author };
    return data;
  },
  updateYear(year) {
    this.year = year;
  },
};

let reqData = book2.getTitle();
console.log(reqData);
console.log(book2.year);
book2.updateYear(2010);
console.log(book2.year);

// Activity 3
let library = {
  name: "Central Library",
  books: [
    { bookName: "Quantum Mechanics", author: "AK", year: 1989 },
    { bookName: "Advanced Optics", author: "GT", year: 2000 },
    { bookName: "Engineering Mathematics", author: "BS", year: 1995 },
  ],
};
//console.log(library);
console.log(`Library name: ${library.name}`);
library.books.forEach((book) => console.log(`Title: ${book.bookName}`));

// Activity 4
let book3 = {
  title: "All the Bright Places",
  author: "Jennifer Niven",
  year: 2015,
  getTitle() {
    return `Book title: ${this.title}\nYear published: ${this.year}`;
  },
};

console.log(book3.getTitle());

// Activity 5
for (prop in book3) {
  console.log(`${prop}: ${book3[prop]}`);
}

Object.keys(book3).forEach((prop) => console.log(prop));
// returns an array of all the properties: ["title", "author", "year", "getTitle"]
Object.values(book3).forEach((val) => console.log(val));

// Using a symbol as a key in an object
const mySym = Symbol("key1");
let user = new Object();
user = {
  userName: "Arpan Mondal",
  email: "example@example.com",
  [mySym]: "The key is symbol", // this is the syntax to use symbol as a key
};

// to access the value that is stores using a symbol
console.log(user[mySym]);
console.log(user);
