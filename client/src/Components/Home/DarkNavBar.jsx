import React, { Component } from "react";
class DarkNav extends Component {
  state = {
    link1: "Home",
    link2: "Design",
    link3: "Contact us",
    link4: "Share",
    backgroundColor: "",
  };
  componentDidMount() {
    const backgroundColor = this.props.styles.backgroundColor;
    this.setState({ backgroundColor });
  }
  handleInputChange = (e, label) => {
    const value = e.currentTarget.value;
    this.setState({ [label]: value });
  };
  dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", e.target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  dragover = (e) => {
    e.stopPropagation();
  };
  getNavbarStyles = () => {
    const element = this.props.styles;
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
      style[property] = element[property];
    }
    style.padding = "3% 4%";
    return style;
  };
  handleContextMenu = (e) => {
    e.preventDefault();
    const { toggle, styles } = this.props;
    toggle(styles.aid);
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
        <div
          style={this.getNavbarStyles()}
          id={this.props.styles.aid}
          onDragStart={this.dragStart}
          onContextMenu={this.handleContextMenu}
          onDragOver={this.dragover}
          draggable={true}
        >
          {links.map((m) => (
            <a href="#" key={m} draggable={false}>
              <input
                type="text"
                value={this.state[m]}
                style={this.getInputStyles()}
                draggable={false}
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
