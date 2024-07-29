// Activity 1
class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(node) {
    this.node = node;
  }
  traverse() {
    let ptr = this.node;
    while (ptr.next) {
      console.log(ptr.val);
      ptr = ptr.next;
    }
    console.log(ptr.val);
  }
  addNode(newNode) {
    let ptr = this.node;
    while (ptr.next) ptr = ptr.next;
    ptr.next = newNode;
  }
  removeNode() {
    let ptr = this.node;
    while (ptr.next.next) ptr = ptr.next;
    ptr.next = null;
  }
}

let head = new Node(12, null);
let node2 = new Node(13, null);
head.next = node2;
let node3 = new Node(14, null);
node2.next = node3;
let myList = new LinkedList(head);

// myList.traverse();
myList.addNode(new Node(15, null));
// myList.traverse();
myList.removeNode();
// myList.traverse();

// Activity 2
// stack using array
class Stack {
  constructor(arr) {
    this.arr = arr;
  }
  pushE(e) {
    this.arr.push(e);
  }
  popE() {
    let popped = this.arr[this.arr.length - 1];
    this.arr.pop();
    return popped;
  }
  peekE() {
    console.log(this.arr[this.arr.length - 1]);
  }
}

let myStack = new Stack([1, 2, 3]);
// myStack.peekE();
myStack.pushE(10);
// myStack.peekE();
myStack.popE();

// stack using linked list
class LStack {
  constructor(list) {
    this.list = list;
  }
  lpush(e) {
    this.list.addNode(e);
  }
  lpop() {
    this.list.removeNode();
  }
  lpeek() {
    let ptr = this.list.node;
    while (ptr.next) ptr = ptr.next;
    console.log(ptr.val);
  }
}

let sHead = new Node(9, null);
let sNode2 = new Node(10, null);
sHead.next = sNode2;
let sNode3 = new Node(15, null);
sNode2.next = sNode3;

let myLstack = new LStack(new LinkedList(sHead));
// myLstack.lpeek();
myLstack.lpush(new Node(20, null));
// myLstack.lpeek();

mystr = "This is a string.";
let strStack = new Stack([]);
for (char of mystr) strStack.pushE(char);
let revStr = "";
let n = mystr.length;
while (n--) {
  revStr += strStack.popE();
}
console.log(revStr);

// Activity 3
class Queue {
  constructor(arr) {
    this.arr = arr;
  }
  enqueue(e) {
    this.arr.push(e);
  }
  dequeue() {
    this.arr.shift();
  }
  front() {
    //  console.log(this.arr[0]);
    return this.arr[0];
  }
}

let myQ = new Queue([10, 20, 30]);
console.log(myQ.front());
myQ.enqueue(40);
myQ.dequeue();
console.log(myQ.front());

let printJob = new Queue([]);
printJob.enqueue(() => console.log("Job1"));
printJob.enqueue(() => console.log("Job2"));
printJob.enqueue(() => console.log("Job3"));
printJob.enqueue(() => console.log("Job4"));

let jobs = printJob.arr.length;
while (jobs--) {
  printJob.front()();
  printJob.dequeue();
}
