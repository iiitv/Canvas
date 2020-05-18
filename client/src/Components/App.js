import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import Icons from "./Icons";
import "../scss/main.scss";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Icons" component={Icons} />
      </Switch>
      
    );
  }
}
export default App;
