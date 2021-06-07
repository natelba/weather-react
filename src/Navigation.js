  
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <header>
        <ul className="navigation-items">
          <li className="navigation-item">
            <Link to="/newyork">New York</Link>
          </li>
          <li className="navigation-item">
            <Link to="/losangeles">Los Angeles</Link>
          </li>
          <li className="navigation-item">
            <Link to="/miami">Miami</Link>
          </li>
          <li className="navigation-item">
            <Link to="/montreal">Montreal</Link>
          </li>
        </ul>
      </header>
    );
  }
}