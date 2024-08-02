let randomNum = Math.floor(Math.random() * 100 + 1);
// console.log(randomNum);

const form = document.querySelector("#myform");
const result = document.querySelector("#result");
const left = document.querySelector("#left");
const prev = document.querySelector("#prev");
const box = document.querySelector(".box");
const guessBtn = document.querySelector("#guessBtn");

let guessesLeft = 10;
left.textContent = guessesLeft;

const startNew = document.createElement("div");
startNew.appendChild(document.createTextNode("Start new Game"));
startNew.id = "startNew";
startNew.className = "btn";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userGuess = document.querySelector("#guess");
  const guess = userGuess.value;
  userGuess.value = "";
  if (guess <= 0 || guess > 100) {
    result.style.color = "red";
    result.textContent = "Enter a valid guess!!!";
  } else {
    if (guessesLeft) {
      result.style.color = "#F59E0B";
      guessesLeft--;
      left.textContent = guessesLeft;
      prev.appendChild(document.createTextNode(guess + " "));
      if (Number(guess) === randomNum) {
        result.style.color = "#22C55E";
        result.textContent = "You Won!!!";
        userGuess.setAttribute("readonly", "true");
        guessBtn.setAttribute("disabled", "");
        box.appendChild(startNew);
      } else if (Number(guess) < randomNum) {
        result.textContent = "Enter a larger number";
      } else {
        result.textContent = "Enter a smaller number";
      }
    } else {
      result.style.color = "red";
      result.textContent =
        "No guesses left! You Lost. The random number was: " + randomNum;
      userGuess.setAttribute("readonly", "true");
      guessBtn.setAttribute("disabled", "");
      box.appendChild(startNew);
    }
  }
});

startNew.addEventListener("click", () => {
  randomNum = Math.floor(Math.random() * 100 + 1);
  guessesLeft = 10;
  left.textContent = guessesLeft;
  prev.innerHTML = "";
  const userGuess = document.querySelector("#guess");
  userGuess.removeAttribute("readonly");
  guessBtn.removeAttribute("disabled");
  result.style.color = "#F59E0B";
  result.textContent = "Enter your guess";
  box.removeChild(startNew);
});
