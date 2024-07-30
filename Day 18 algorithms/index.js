// Activity 1 - Sorting algorithms

// Bubble sort
let arr1 = [5, 12, 3, 43, 1, 4];
let n = arr1.length;
let flag;
for (let i = 0; i < n - 1; i++) {
  flag = 0;
  for (let j = 0; j < n - i - 1; j++) {
    if (arr1[j] > arr1[j + 1]) {
      arr1[j] = arr1[j] ^ arr1[j + 1];
      arr1[j + 1] = arr1[j] ^ arr1[j + 1];
      arr1[j] = arr1[j] ^ arr1[j + 1];
      flag++;
    }
  }
  if (!flag) break;
}
// console.log(arr1);

// Selection sort
let arr2 = [5, 12, 3, 43, 1, 4];
let min;
for (let i = 0; i < n - 1; i++) {
  min = i;
  for (let j = i + 1; j < n; j++) if (arr2[min] > arr2[j]) min = j;
  arr2[i] = arr2[i] ^ arr2[min];
  arr2[min] = arr2[i] ^ arr2[min];
  arr2[i] = arr2[i] ^ arr2[min];
}
// console.log(arr2);

// Merge sort
let arr3 = [5, 12, 3, 43, 1, 4];

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mergeSort(arr, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

mergeSort(arr3, 0, n - 1);
// console.log(arr3);

// Activity 2 - Search algorithms

// Linear search
let arr4 = [5, 12, 3, 43, 1, 4];
let target = 43;
let idx;
for (idx = 0; idx < n; idx++) {
  if (arr4[idx] === target) {
    //  console.log(`${target} found at ${idx} index.`);
    break;
  }
}
// if (idx === n && arr4[n - 1] !== target) console.log("Target not found");

// Binary search
let arr5 = [3, 5, 12, 32, 54];
let low = 0;
let high = arr5.length - 1;
let t = 32;
let ans = -1;
while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  if (arr5[mid] === t) {
    ans = mid;
    break;
  } else if (arr5[mid] > t) high = mid - 1;
  else if (arr5[mid] < t) low = mid + 1;
}
// ans === -1
//   ? console.log("Target not found")
//   : console.log(`${t} found at ${ans}`);

// Activity 3 - String algorithm
let str = "nkjvabkv anjv roirn cidiio";

let charMap = new Map();
for (char of str) {
  if (!charMap.get(char)) {
    charMap.set(char, 1);
    continue;
  }
  charMap.set(char, charMap.get(char) + 1);
}

// console.log(charMap.get("n"));
