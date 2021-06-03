import React from "react";
import './App.css';
import axios from "axios";
import WeatherSearch from "/.WeatherSearch.js";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search</h1>
      <WeatherSearch />

    </div>
  )
}
