import React, {useState} from "react";
import axios from "axios";

import "./App.css";

export default function WeatherSearch() {
    const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});
  
    function displayWeather(response) {
      setLoaded(true);
      setWeather({
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${
          response.data.weather[0].icon
        }@2x.png`,
        description: response.data.weather[0].description
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey = "67530174dacc3fcebbae46692eea5dd9";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(displayWeather);
    }
  
    function updateCity(event) {
      setCity(event.target.value);
    }
  
    let form = (
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city.." onChange={updateCity} />
        <button type="Submit">Search</button>
      </form>
    );
  
    if (loaded) {
      return (
        <div className="WeatherSeach">
            <div className="City">
                {updateCity}
            </div>
            <div className="temperature">
                {Math.round(weather.temperature)}ºC
            </div>
          {form}
          <div className="col-6">
              <ul>
                <li>Description: {weather.description}</li>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {weather.wind}km/h</li>
                <li>
                    <img src={weather.icon} alt={weather.description} />
                </li>

              </ul>
            </div>
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
                  <strong id="temperature"></strong
                  ><span className="units"><a href="#" id="fahrenheit-link"> °F </a>| <a href="#" id="celsius-link">ºC</a> </span> 
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}