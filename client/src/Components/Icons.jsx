import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export class Icons extends Component {
  dragOver = this.props.func1;
  i;
  render() {
    const iconTray = [
      "facebook",
      "github",
      "google",
      "dribbble",
      "instagram",
      "linkedin",
      "medium",
      "quora",
      "twitter",
    ];
    const list = (
      <ul
        style={{
          display: "grid",
          listStyle: "none",
          gridTemplateColumns: "1fr 1fr ",
          border: "0",
          margin: "10px",
          padding: "0",
        }}
      >
        {iconTray.map((iconV, idx) => (
          <li key={idx} style={{ padding: "2px" }} className={iconV}>
            {/* <IconGenerator icon={iconV} />{" "} */}
            <FontAwesomeIcon
              icon={["fab", iconV]}
              size="5x"
              onClick={(event) => {
                this.props.btn(
                  "transparent",
                  null,
                  iconV + "!" + Math.random(),
                  "icon"
                );
              }}
            >
              {iconV}
            </FontAwesomeIcon>
          </li>
        ))}
      </ul>
    );
    return <div>{list}</div>;
  }
}

export default Icons;
