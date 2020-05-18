import React, { Component } from "react";
import { IconContext } from "react-icons";
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
  render() {
    console.log(this.props["icon"]);
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
      <button style ={{
        margin :"0",
        padding : "0",
        width: "5em",
        height : "6em",
        backgroundColor: "transparent",
        borderColor : "transparent"
    }}>
      <IconContext.Provider value={{ color: "blue", size: "5rem" }}>
        {val}
      </IconContext.Provider>
      </button>
    );
  }
}

export default IconGenerator;
