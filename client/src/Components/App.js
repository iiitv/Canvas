import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import "../scss/main.scss";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
export default App;
