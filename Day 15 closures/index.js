// Activity 1
function afun() {
  let str = "enigma";
  return function anotherFun() {
    console.log(str);
  };
}
const myfun = afun();
// myfun();

function closure() {
  let pvtCounter = 0;
  return {
    incr: () => {
      pvtCounter++;
    },
    getVal: () => {
      console.log(pvtCounter);
    },
  };
}

let { incr, getVal } = closure();
incr();
incr();
// getVal();

// Activity 2
// implementing the same idea with classes
class myID {
  #id = -1;
  generateId() {
    this.#id++;
    console.log(this.#id);
  }
  getCurrID() {
    console.log(this.#id);
  }
}

const newId = new myID();
// newId.generateId();
// newId.generateId();
// newId.generateId();
// newId.getCurrID();
// newId.getCurrID();

function myfun2() {
  let id = 0;
  function generateId() {
    id++;
    console.log(id);
  }
  return generateId;
}
const genID = myfun2();
// genID();
// genID();
// genID();

const user = (name) => () => console.log(`Hello ${name}`);
const newUser = user("Arpan");
// newUser();

// Activity 3
function createFunc(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

const arrFunc = createFunc(10);
// arrFunc[0]();
// arrFunc[1]();
// arrFunc[2]();
// arrFunc[3]();
// arrFunc[9]();

// Activity 4
import { createItemBox } from "./items.js";

const newBox = createItemBox();
newBox.add("name", "Arpan");
newBox.add("age", 20);
newBox.add("city", "Kolkata");
newBox.remove("city");
newBox.listItems();

const newBox2 = createItemBox();
newBox2.add("name", "Suman");
newBox2.listItems();

// Activity 5

function remFact() {
  let memory = {};
  return function fact(n) {
    if (n in memory) return memory[n];
    let ans = 1,
      t = n;
    while (t > 0) {
      if (t in memory) {
        ans *= memory[t];
        // console.log(memory);
        break;
      }
      ans *= t;
      t--;
    }
    memory[n] = ans;
    // console.log(memory);
    return ans;
  };
}

const newFact = remFact();
console.log(newFact(5));
console.log(newFact(7));
console.log(newFact(10));
