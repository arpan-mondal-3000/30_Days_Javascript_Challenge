let display = document.querySelector("#time");

const showTime = () => {
  let current = new Date();
  let time = current.toLocaleTimeString();
  display.textContent = time;
};

setInterval(() => {
  showTime();
}, 1000);
