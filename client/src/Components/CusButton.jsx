import React, { Component } from "react";

class CusButton extends Component {
  state = {
    value: "Type here",
  };
  dragStart = (e) => {
    const target = e.target;
    target.classList.add("drag");
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
  handleContextMenu = (e) => {
    e.preventDefault();
    const { toggle, styles } = this.props;
    toggle(styles.aid);
  };
  dragover = (e) => {
    e.stopPropagation();
  };
  getInputStyles = (color, radius) => {
    const styles = {};
    styles.color = `white`;
    styles.display = "block";
    styles.borderRadius = `${radius}`;
    styles.backgroundColor = `${color}`;
    return styles;
  };
  getButtonStyles = () => {
    const { styles } = this.props;
    const properties = ["backgroundColor", "left", "top", "borderRadius"];
    const buttonStyles = {};
    for (const property of properties) {
      buttonStyles[property] = styles[property];
    }
    return buttonStyles;
  };
  render() {
    const { aid, backgroundColor, borderRadius } = this.props.styles;
    return (
      <button
        className={aid}
        draggable="true"
        onDragStart={this.dragStart}
        onDragOver={this.dragover}
<<<<<<< HEAD
        id={this.props.aid}
        style={{
          color: this.props.color,
          left: this.props.left,
          top: this.props.top,
          borderRadius: this.props.radius,
        }}
        onContextMenu={(e) => {
          console.log(e);
          e.preventDefault();
          this.props.toggle(this.props.aid);
          // console window object for global access
          console.log(window.anuj);
        }}
=======
        id={aid}
        style={this.getButtonStyles()}
        onContextMenu={this.handleContextMenu}
>>>>>>> d82c6fc60d083b463d9991d533c1b886b49c6bf1
      >
        <input
          type="text"
          style={this.getInputStyles(backgroundColor, borderRadius)}
          value={this.state.value}
          className="buttonInput"
          onChange={(e) => this.handleInputChange(e)}
        />
      </button>
    );
  }
}

export default CusButton;
