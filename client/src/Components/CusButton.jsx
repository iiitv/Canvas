import React, { Component } from "react";

class CusButton extends Component {
  dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  dragover = (e) => {
    e.stopPropagation();
  };
  parsePx=(x)=>{
    return parseInt(x.split("px")[0])
  }
  render() {
    return (
      <button
        draggable="true"
        onDragStart={this.dragStart}
        onDragOver={this.dragover}
        id={this.props.aid}
        style={{
          color: this.props.color,
          left: this.props.left,
          top: this.props.top,
          borderRadius: this.props.radius,
        }}
        onContextMenu={(e) => {
          console.log(e)
          e.preventDefault();
          this.props.toggle(this.parsePx(this.props.top),this.parsePx(this.props.left),this.parsePx(this.props.width),this.props.aid);
        }}
      >
        hello
      </button>
    );
  }
}

export default CusButton;
