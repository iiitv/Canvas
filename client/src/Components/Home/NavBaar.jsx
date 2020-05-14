import React, { Component } from "react";
import DarkNav from "./DarkNavBar";
class NavBar extends Component {
  state = {
    backgroundColor: "",
    borderRadius: "",
    didClick: false,
    id: "",
    elements: [],
  };
  renderNavbar = (color, radius, id, label) => {
    console.log("render Navbar");
    return (
      <button
        onClick={() =>
          this.setNavbarProperties(`${color}`, `${radius}`, `${id}`)
        }
      >
        {label}
      </button>
    );
  };

  setNavbarProperties = (backgroundColor, borderRadius, id) => {
    this.setState({ backgroundColor, borderRadius, id, didClick: true });
  };
  onDrop = (e) => {
    e.preventDefault();
    const _mouseY = e.clientY;
    const _mouseX = e.clientX;
    const navbar_id = e.dataTransfer.getData("navbar_id");
    console.log(navbar_id);
    const navbar = document.getElementById(navbar_id);
    navbar.style.display = "block";
    navbar.style.top = `${_mouseY}px`;
    navbar.style.left = `${_mouseX - 200}px `;
    // console.log(card.style.top, card.style.top);
  };
  dragOver = (e) => {
    e.preventDefault();
  };
  getPositions = (ev) => {
    console.log("hello");
    const {
      backgroundColor,
      borderRadius,
      id,
      didClick,
      elements,
    } = this.state;
    const element = {};
    if (didClick === true) {
      const _mouseY = ev.clientY;
      const _mouseX = ev.clientX;
      element.type = "navbar";
      element.width = "800px";
      element.height = "150px";
      element.backgroundColor = backgroundColor;
      element.top = `${_mouseY}px`;
      element.left = `${_mouseX - 200}px`;
      element.borderRadius = borderRadius;
      element.display = "flexbox";
      element.position = "absolute";
      element.id = id;
      this.setState({ didClick: false });
    } else {
      return;
    }
    elements.push(element);
  };
  render() {
    const { elements } = this.state;
    console.log(elements);
    return (
      <div className="ome">
        <div className="button">
          {this.renderNavbar("grey", "18px", "nav1", "add navbar")}
        </div>
        <div
          id="dropspace"
          onDrop={this.onDrop}
          onDragOver={this.dragOver}
          onClick={this.getPositions}
        >
          {elements.map((element) => {
            console.log(element);
            if (element.type === "navbar") {
              return <DarkNav styles={element} />;
            }
          })}
        </div>
      </div>
    );
  }
}

export default NavBar;
