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
  </StrictMode>
);


