import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather.js";
import"./Weather.css";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1>Weather App</h1>
    <Weather />
    <footer>
  <small>Open-sourced on <a href="https://github.com/Hollieb63/weather-app-react2" target="_blank">GitHub</a> by Hollie Bradshaw</small></footer>
  
  </StrictMode>
);


