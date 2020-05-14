import React, { Component } from "react";
import "../../scss/components/_navbar.scss";
class DarkNav extends Component {
  state = {
    link1: "Home",
    link2: "Design",
    link3: "Contact us",
    link4: "Share",
    backgroundColor: "",
  };
  handleInputChange = (e, label) => {
    const value = e.currentTarget.value;
    console.log(label);
    this.setState({ [label]: value });
  };
  renderInput = (property) => {
    return (
      <input type="text" id={`${property}`} placeholder={`Enter ${property}`} />
    );
  };
  applyStyles = () => {
    const properties = [`backgroundColor`];
    for (const property of properties) {
      try {
        const value = document.getElementById(`${property}`).value.trim();
        this.setState({ [property]: value });
      } catch (error) {
        console.log(error);
      }
    }
  };
  getInputStyles = () => {
    const properties = ["backgroundColor"];
    const styles = {};
    for (const property of properties) {
      styles[property] = `${this.state[property]}`;
    }
    return styles;
  };
  render() {
    const links = ["link1", "link2", "link3", "link4"];
    return (
      <React.Fragment>
        <div className="options">
          {this.renderInput("backgroundColor")}
          <button onClick={this.applyStyles}>apply</button>
        </div>
        <div className="darknav" style={this.getInputStyles()} draggable={true}>
          {links.map((m) => (
            <a href="#">
              <input
                type="text"
                value={this.state[m]}
                style={this.getInputStyles()}
                onChange={(e) => this.handleInputChange(e, `${m}`)}
                className="anchorInput"
              />
            </a>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default DarkNav;
