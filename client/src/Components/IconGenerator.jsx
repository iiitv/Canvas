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
  handleContextMenu = (e) => {
    e.preventDefault();
    const { toggle, styles } = this.props;
    toggle(styles.aid);
  };
   dragover = (e) => {
    e.stopPropagation();
  };
  render() {
    console.log(this.props.styles)
    const name = this.props.styles.aid.split("!")[0];
    return (
      <button
        className="SocialIcons"
        draggable="true"
        onDragStart={this.dragStart}
        onDragOver={this.dragOver}
        id = {this.props.styles.aid}
        style={{
          // position:this.props.styles.position,
          left: this.props.styles.left,
          top: this.props.styles.top,
          
        }}
        onContextMenu = {this.handleContextMenu}
        // toggle={this.props.styles.aid}
      >
        <FontAwesomeIcon
                icon={["fab", name]}
                size="5x"
                style={{
                  color: this.props.styles.color
                }}
              >
                {this.props.key}
              </FontAwesomeIcon>
      </button>
    );
  }
}

export default IconGenerator;
