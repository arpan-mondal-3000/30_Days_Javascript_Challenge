let result = document.querySelector("#result");

const form = document.querySelector("#bmi-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const weight = document.querySelector("#weight");
  const height = document.querySelector("#height");
  const user_weight = Number(weight.value);
  const user_height = Number(height.value);
  if (user_height < 0 || isNaN(user_height)) {
    result.textContent = "Invalid height";
  } else if (user_weight < 0 || isNaN(user_weight)) {
    result.textContent = "Invalid weight";
  } else {
    const bmi = (user_weight / (user_height * user_height)).toFixed(2);
    result.textContent = bmi;
    weight.value = "";
    height.value = "";
  }
});
