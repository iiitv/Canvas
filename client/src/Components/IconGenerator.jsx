import React, { Component } from "react";
import "../scss/main.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class IconGenerator extends Component {
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
  render() {
    console.log(this.props.styles)
    return (
      <button
        className="SocialIcons"
        draggable="true"
        onDragStart={this.dragStart}
        onDragOver={this.dragOver}
        id = {this.props.styles.aid}
      >
        <FontAwesomeIcon
                icon={["fab", this.props.styles.aid]}
                size="5x"
                style={{
                  position:this.props.styles.position,
                  left: this.props.styles.left,
                  top: this.props.styles.top,
                  color: this.props.styles.color
                }}
                toggle={this.props.toggle}
              >
                {this.props.key}
              </FontAwesomeIcon>
      </button>
    );
  }
}

export default IconGenerator;
