// Activity 1
const fact = (n) => {
  if (n < 2) return 1;
  return n * fact(n - 1);
};

// console.log(fact(4));
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// console.log(fib(7));

// Activity 2
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// using reduce method
sum = arr.reduce((acc, curr) => acc + curr);
// console.log(sum);

// using recursion
function arrSum(arr, n) {
  if (n == 0) return arr[0];
  return arr[n] + arrSum(arr, n - 1);
}
// console.log(arrSum(arr, arr.length - 1));

// myarr = [3, 5, 12, 32, 54];
myarr = [8, 12, 4, 90, 23, 5];
// using reduce method
max = myarr.reduce((acc, curr) => (acc > curr ? acc : curr));
// console.log(max);

// using recursion
function maxElem(arr, n) {
  if (n == 0) return arr[0];
  let max = maxElem(arr, n - 1);
  return arr[n] > max ? arr[n] : max;
}

// console.log(maxElem(myarr, myarr.length));

// Activity 3
str = "This is a string";

// reversing a string using array methods
strarr = Array.from(str);
strarr.reverse();
revStr = "";
strarr.forEach((e) => (revStr += e));
// console.log(revStr);

// using recursion
// newstr = "";
function reverseStr(str, n, newstr = "") {
  if (n == 0) {
    newstr += str[0];
    return newstr;
  }
  newstr += str[n];
  return reverseStr(str, n - 1, newstr);
}
reversed = reverseStr(str, str.length - 1);
// console.log(reversed);

mystr = "asdfdsa";
myrevstr = reverseStr(mystr, mystr.length - 1);
mystr === myrevstr ? console.log("Palindrome") : console.log("Not palindrome");

// Activity 4
sortedArr = [3, 5, 12, 32, 54];

function binSearch(arr, low, high, target) {
  if (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) return `${target} found at ${mid}`;
    else if (arr[mid] > target) return binSearch(arr, low, mid - 1, target);
    else return binSearch(arr, mid + 1, high, target);
  }
  return -1;
}
idx = binSearch(sortedArr, 0, sortedArr.length - 1, 32);
idx === -1 ? console.log("Target not found") : console.log(idx);

multiarr = [2, 4, 2, 3, 5, 5, 6, 1, 2, 3, 2, 4, 6, 6, 2, 3];
target = 2;

// using foreach
c = 0;
multiarr.forEach((e) => (e === target ? c++ : c));
console.log(c);
// using filter
newmutiarr = multiarr.filter((e) => e === target);
console.log(newmutiarr.length);

// using recursion
function freq(arr, n, target, c = 0) {
  if (n === 0) {
    if (arr[0] === target) c++;
    return c;
  }
  if (arr[n] === target) c++;
  return freq(arr, n - 1, target, c);
}

freqofe = freq(multiarr, multiarr.length - 1, 3);
console.log(freqofe);
