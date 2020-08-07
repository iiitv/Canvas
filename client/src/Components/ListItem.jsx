import React, { Component } from "react";

export class ListItem extends Component {
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
  getStyles = () => {
    const lst = this.props.styles;
    const style = {};
    const properties = [
      "width",
      "height",
      "backgroundColor",
      "top",
      "left",
      "borderRadius",
      "position",
    ];
    for (const property of properties) {
      style[property] = lst[property];
    }
    return style;
  };
  render() {
    console.log(this.props);
    // console.log(this.props.key);
    console.log(this.props.styles);
    // console.log(this.props.styles.position);
    return (
      <div
        className="listitem"
        style={this.getStyles()}
        id={this.props.styles.aid}
        draggable="true"
        onDragStart={this.dragStart}
        onDragOver={this.dragover}
        onContextMenu={this.handleContextMenu}
      >
        <li ><input/></li>
      </div>
    );
  }
}

export default ListItem;
