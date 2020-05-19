import React, { Component } from "react";
import { IconContext } from "react-icons";
import "../scss/main.scss"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGoogle,
  FaPinterest,
  FaMedium,
  FaDribbble,
  FaQuora,
} from "react-icons/fa";
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
    
    const icon = this.props.icon;
    let val = "";
    switch (icon) {
      case "facebook":
        val = <FaFacebookF />;
        break;
      case "github":
        val = <FaGithub />;
        break;
      case "dribbble":
        val = <FaDribbble />;
        break;
      case "google":
        val = <FaGoogle />;
        break;
      case "instagram":
        val = <FaInstagram />;
        break;
      case "linkedin":
        val = <FaLinkedin />;
        break;
      case "medium":
        val = <FaMedium />;
        break;
      case "pintrest":
        val = <FaPinterest />;
        break;
      case "quora":
        val = <FaQuora />;
        break;
      case "twitter":
        val = <FaTwitter />;
        break;
    }
    return (
      <button
        className="SocialIcons"
        draggable="true"
        onDragStart={this.dragStart}
        onDragOver={this.dragOver}
        id = {this.props.icon}
      >
        <IconContext.Provider value={{ color: this.props.col, size: "5rem" }}>
          {val}
        </IconContext.Provider>
      </button>
    );
  }
}

export default IconGenerator;
