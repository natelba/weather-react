import React from "react";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      
      
      
      <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <form id="search-form" class="mb-3">
            <div class="row">
              <div class="col-9">
                <h1>Weather App</h1>
                <WeatherSearch />
              </div>
            </div>
          </form>
          <div class="container">
            
          <div class="overview">
            
            <ul>
              <li>Last updated: <span id="date"></span></li>
              <li id="description"></li>
            </ul>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="clearfix weather-temperature">
                <img src="" alt="Clear" id="icon" class="float-left" />
                <div class="float-left">
                  <strong id="temperature"></strong
                  ><span class="units"><a href="#" id="fahrenheit-link"> °F </a>| <a href="#" id="celsius-link">ºC</a> </span> 
                </div>
              </div>
            </div>
           
          <div class="weather-forecast" id="forecast"></div>
        </div>
        <small>
          <a
            href="https://github.com/natelba/vanilla-weather-app"
            target="_blank"  id="open-source"
            >Open-source code</a
          >
          by Nat Guardia
        </small>
      </div>
    </div>
    
  </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(rootElement);
