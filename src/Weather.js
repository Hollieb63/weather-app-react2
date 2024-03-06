import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [search, setSearch] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setSearch(true);
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function citySearch(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a City.." onChange={citySearch} />
      <button type="submit">Search</button>
    </form>
  );

  if (search) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Description: {weather.description}</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>City: {weather.city}</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
