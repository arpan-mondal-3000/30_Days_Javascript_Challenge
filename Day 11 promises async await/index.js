// Activity 1
const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after two seconds");
  }, 2000);
});

//myPromise.then((val) => console.log(val));

const getData = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id % 2 === 0) {
        resolve("Correct id");
      } else {
        reject("Wrong id");
      }
    }, 2000);
  });
};

// getData(13)
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((val) => {
//     console.log(val);
//   });

// Activity 2
const fetchData = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Getting data: ${id}`);
    }, 1000);
  });
};

// fetchData(1).then((val) => {
//   console.log(val);
//   fetchData(2).then((val) => {
//     console.log(val);
//     fetchData(3).then((val) => {
//       console.log(val);
//       console.log("Done");
//     });
//   });
// });

// Activity 3
const myfunc = async () => {
  const res1 = await fetchData(1);
  console.log(res1);
  const res2 = await fetchData(2);
  console.log(res2);
  const res3 = await fetchData(3);
  console.log(res3);
};

//myfunc();

const asyncFunc = async () => {
  try {
    const data = await getData(19);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
//asyncFunc();

// Activity 4
// API call using promise chaining
// fetch("https://jsonplaceholder.typicode.com/todos/4")
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// API call using async function
const apiCall = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const json = await res.json();
  console.log(json);
};
//apiCall(12);

// Activity 5

// using Promise.all() using promise chaining
// Promise.all([fetchData(1), fetchData(2), fetchData(3)]).then((res) => {
//   console.log(res);
// });

// using Promise.all() with async function
const fetchAllData = async () => {
  const results = await Promise.all([fetchData(1), fetchData(2), fetchData(3)]);
  console.log(results);
};
//fetchAllData();

const sleepFn = (id, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise ${id} resolved`);
    }, time);
  });
};

// using Promise.race() with promise chaining
Promise.race([sleepFn(1, 2000), sleepFn(2, 1000), sleepFn(3, 3000)]).then(
  (res) => {
    console.log(res);
  }
);

// using Promise.race() with async function in IIFE

(async () => {
  const result = await Promise.race([
    sleepFn(1, 2000),
    sleepFn(2, 1000),
    sleepFn(3, 500),
  ]);
  console.log(result);
})();
