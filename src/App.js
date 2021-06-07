import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";


import "./App.css";
import CurrentLocation from "./CurrentLocation";

export default class App extends Component {
  render() {
    return (
      <div>
        <Weather />
        <WeatherSearch />
        <CurrentLocation />
        <Forecast />
      </div>
    );
  }
}