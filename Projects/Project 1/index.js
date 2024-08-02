const colors = {
  white: "#ffff",
  slate: "#1E293B",
  green: "#4ADE80",
  orange: "#FDBA74",
};

let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.style.backgroundColor = colors[box.id];
  box.addEventListener("click", () => {
    document.body.style.backgroundColor = colors[box.id];
    if (box.id === "slate") {
      document.body.setAttribute("class", "dark");
      boxes.forEach((b) => {
        b.style.border = "2px solid white";
      });
    } else {
      document.body.removeAttribute("class");
      boxes.forEach((b) => {
        b.style.border = "2px solid black";
      });
    }
  });
});
