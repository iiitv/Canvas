import React, { Component } from "react";
import "../../scss/components/_navbar.scss";
class DarkNav extends Component {
  state = {
    link1: "hello",
    link2: "raghu",
    link3: "dear",
    link4: "turlo",
    styles: {},
  };
  handleInputChange = (e, label) => {
    const value = e.currentTarget.value;
    console.log(label);
    this.setState({ [label]: value });
  };
  renderInput = (property) => {
    return <input type="text" id={`${property}`} />;
  };
  applyStyles = (e) => {
    let styles = this.getStyleObject();
    this.setState({ styles });
    console.log(this.state.styles);
  };
  getStyleObject = () => {
    let styles = this.state.styles;
    const properties = ["backgroundColor"];
    for (let m of properties) {
      styles[m] = document.getElementById(`${m}`).value.trim();
    }
    console.log(styles);
    return styles;
  };
  render() {
    const links = ["link1", "link2", "link3", "link4"];
    return (
      <React.Fragment>
        <div className="options">
          {this.renderInput("backgroundColor")}
          <button onClick={(e) => this.applyStyles(e)}>apply</button>
        </div>
        <div className="darknav" style={this.state.styles} draggable={true}>
          {links.map((m) => (
            <a href="#">
              <input
                type="text"
                value={this.state[m]}
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
