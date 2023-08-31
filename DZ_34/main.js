const url = "https://api.openweathermap.org/data/2.5/weather"; // Замените на нужный URL
const params = {
  q: "ODESA",
  units: "metric",
  APPID: "5d066958a60d315387d9492393935c19",
};

const queryStr = Object.keys(params)
  .map((key) => `${key}=${params[key]}`)
  .join("&");

const finalUrl = `${url}?${queryStr}`;

fetch(finalUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    if (data.cod != 200) {
      throw new Error("Bad request");
    }
    const weather = document.getElementById("weather");
    const contextWeather = `
    <p>Город - ${findKeyInJSON(data, "name")} </p>
    <p>Температура - ${findKeyInJSON(data, "temp")} </p>
    <p>Давление - ${findKeyInJSON(data, "pressure")} </p>
    <p>Описание - ${findKeyInJSON(data, "description")} </p>
    <p>Влажность - ${findKeyInJSON(data, "humidity")} </p>
    <p>Скорость ветра - ${findKeyInJSON(data, "speed")} </p>
    <p>Направление в градусах - ${findKeyInJSON(data, "deg")} </p> 
    <img src="http://openweathermap.org/img/w/${findKeyInJSON(data,"icon")}.png">
    `;
    weather.innerHTML = contextWeather;
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

function findKeyInJSON(json, findKey) {
  for (let key in json) {
    if (key === findKey) {
      return json[key];
    }
    if (typeof json[key] === "object") {
      let x = findKeyInJSON(json[key], findKey);
      if (x) {
        return x;
      }
    }
  }
}
