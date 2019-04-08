import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to="/register">Sign Up</NavLink>
        <NavLink to="/login">Sign In</NavLink>
        <NavLink to="/jokes">Dad Jokes!</NavLink>
        <Route path="" />
      </div>
    );
  }
}

export default App;
