// Activity 1
for (let i = 1; i <= 10; i++); //console.log(i);

for (let i = 1; i <= 10; i++); // console.log(i * 5);

// Activity 2
let i = 10,
  sum = 0;
while (i--) sum += i;
console.log(sum);

i = 10;
while (i--); //console.log(i + 1);

// Activity 3
i = 1;
do {
  //console.log(i);
  i++;
} while (i <= 5);

f = 1;
let n = 6;
do {
  f *= n;
  n--;
} while (n > 1);

console.log(f);

// Activity 4
let h = 5;
for (let i = 0; i < h; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  console.log();
}

// Activity 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i);
}
