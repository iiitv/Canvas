import React, { Component } from "react";

class CusButton extends Component {
  state = {
    value: "",
  };
  dragStart = (e) => {
    const target = e.target;
    target.classList.add("drag");
    console.log(target);
    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  handleInputChange = (e) => {
    const currentTarget = e.currentTarget;
    const value = currentTarget.value;
    this.setState({ value });
  };
  dragover = (e) => {
    const target = e.target;
    e.stopPropagation();
  };
  getInputStyles = (color, radius) => {
    console.log("get Input styles" + color);
    const styles = {};
    styles.color = `white`;
    styles.display = "block";
    styles.borderRadius = `${radius}`;
    styles.backgroundColor = `${color}`;
    return styles;
  };
  getButtonStyles = () => {
    const { color, left, top, radius } = this.props;

    const styles = {
      backgroundColor: color,
      left: left,
      top: top,
      borderRadius: `${radius}px`,
    };
    return styles;
  };
  render() {
    const { aid, color, radius } = this.props;
    return (
      <button
        className={aid}
        draggable="true"
        onDragStart={this.dragStart}
        onDragOver={this.dragover}
        id={aid}
        style={this.getButtonStyles()}
      >
        <input
          type="text"
          style={this.getInputStyles(color, radius)}
          value={this.state.value}
          className="buttonInput"
          onChange={(e) => this.handleInputChange(e)}
        />
      </button>
    );
  }
}

export default CusButton;
