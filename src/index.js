import React from "react";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="search-form" className="mb-3">
              <div className="row">
                <div className="col-9">
                  <h1>Weather App</h1>
                  <WeatherSearch />
                </div>
            </div>
          </form>
          <div className="container">
            <div className="overview">
            <ul>
              <li>Last updated: <span id="date"></span></li>
              <li id="description"></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="clearfix weather-temperature">
                <img src="" alt="Clear" id="icon" class="float-left" />
              <div className="float-left">
                <strong id="temperature"></strong>
                <span className="units"><a href="#" id="fahrenheit-link"> °F </a>| <a href="#" id="celsius-link">ºC</a> </span> 
              </div>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
        <small>
          <a
            href="https://github.com/natelba/vanilla-weather-app"
            target="_blank"  id="open-source"
            >Open-source code</a>
          by Nat Guardia
        </small>
      </div>
    </div>
    </div>
  </div>
  </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(rootElement);
