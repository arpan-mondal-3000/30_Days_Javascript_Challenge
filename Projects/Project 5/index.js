import { API_KEY } from "./conf.js";

async function fetchLoc(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`
    );
    const location = await response.json();
    return location;
  } catch (e) {
    throw e;
  }
}

async function fetchWeather(city) {
  try {
    const location = await fetchLoc(city);
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location[0].lat}&lon=${location[0].lon}&appid=${API_KEY}`
    );
    const weatherData = await weather.json();
    return weatherData;
  } catch (e) {
    throw e;
  }
}

const form = document.querySelector("#weather-form");
const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = e.target[0].value;
  e.target[0].value = "";
  result.innerHTML = "";
  try {
    fetchWeather(city).then((weather) => {
      // console.log(weather);
      const showInfo = document.createElement("div");
      showInfo.className = "show-info";
      showInfo.innerHTML = `<div class="weather-head">${city} weather report</div><div>Summary: ${
        weather.weather[0].main
      }<img src="https://openweathermap.org/img/wn/${
        weather.weather[0].icon
      }.png" alt="icon" /></div><div>Temperature: ${(
        Number(weather.main.temp) - 273
      ).toFixed(2)}°</div><div>Humidity: ${
        weather.main.humidity
      }</div><div>Feels like: ${(Number(weather.main.feels_like) - 273).toFixed(
        2
      )}°</div>`;
      result.appendChild(showInfo);
    });
  } catch (e) {
    console.log(e);
  }
});
