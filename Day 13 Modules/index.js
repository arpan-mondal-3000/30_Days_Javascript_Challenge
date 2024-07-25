// Activity 1
import { add } from "./add.js";
import { person } from "./person.js";

console.log(add(12, 4));
person.greet();

// Activity 2
import division, { multiply, square, root } from "./module2.js";
console.log(root(72));
console.log(division(10, 4));

// Activity 3
import module3 from "./module3.js";
console.log(module3.car);

// Activity 4
import lodash from "lodash";

let max = lodash.max([3, 1, 34, 2, 12]);
console.log("Maximum element: " + max);

import axios from "axios";

axios({
  method: "get",
  url: "https://jsonplaceholder.typicode.com/todos/4",
})
  .then((res) => console.log(res.data))
  .catch((e) => console.log(`${e}`));
