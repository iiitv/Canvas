import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import "../scss/main.scss";
import NavBar from "./Home/NavBaar";
import ContactUsForm from "./Home/contactUs";
class App extends Component {
  render() {
    return <Home />;
  }
}
export default App;
