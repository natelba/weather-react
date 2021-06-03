import React from "react";
import './App.css';
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search App</h1>
        <WeatherSearch />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
