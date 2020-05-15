import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import "../scss/main.scss";
import NavBar from "./Home/NavBaar";
class App extends Component {
  render() {
    return <NavBar />;
  }
}
export default App;
