// Activity 1
const fault = () => {
  throw new Error("Random error");
};

// try {
//   fault();
// } catch (e) {
//   console.log(`${e}`);
// }

const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by 0");
  }
  return a / b;
};

// try {
//   let ans = divide(3, 0);
//   console.log(ans);
// } catch (e) {
//   console.log(`${e}`);
// }

// Activity 2
// try {
//   console.log(divide(10, 0));
// } catch (e) {
//   console.log(`${e}`);
// } finally {
//   console.log("Execution complete");
// }

// Activity 3
class myError extends Error {}

const faulty = () => {
  throw new myError("An error");
};

// try {
//   faulty();
// } catch (e) {
//   console.log(`${e}`);
// }

const inp = "hello";

const check = (userInp) => {
  if (userInp === "") {
    throw new Error("User input is empty");
  }
  return "Done";
};

// try {
//   let res = check(inp);
//   console.log(res);
// } catch (e) {
//   console.log(`${e}`);
// }

// Activity 4
const ran = () => {
  let a = Math.floor(Math.random() * 2);
  return new Promise((res, rej) => {
    if (a === 0) res("Success");
    else if (a === 1) rej("Failure");
  });
};

// ran()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const exec = async () => {
  try {
    let res = await ran();
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
// exec();

// Activity 5
fetch("https://randominvalidurl.com")
  .then()
  .catch((e) => console.log(`${e}`));

(async () => {
  try {
    let data = await fetch("https://invalidurl.com");
    console.log(data);
  } catch (e) {
    console.log(`${e}`);
  }
})();
