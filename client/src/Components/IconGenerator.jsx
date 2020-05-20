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
    
    return (
      <button
        className="SocialIcons"
        draggable="true"
        onDragStart={this.dragStart}
        onDragOver={this.dragOver}
        id = {this.props.ele.aid}
      >
        <FontAwesomeIcon
                icon={["fab", this.props.ele.aid]}
                size="5x"
                style={{
                  position:'initial',
                  left: this.props.ele.left,
                  top: this.props.ele.top,
                  color: this.props.ele.color
                }}
                toggle={this.props.ele.toggleModal}
              >
                {this.props.ele.aid}
              </FontAwesomeIcon>
      </button>
    );
  }
}

export default IconGenerator;
