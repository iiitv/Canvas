import React, { Component } from "react";
import IconGenerator from "./IconGenerator";

export class Icons extends Component {
  render() {
    const list = (
      <ul
        style={{
          display: "grid",
          listStyle: "none",
          gridTemplateColumns: "1fr 1fr ",
          border: "0",
          margin: "0",
          padding: "0"
        }}
      >
        <li>
          <IconGenerator icon="facebook" />
        </li>
        <li>
          <IconGenerator icon="github" />
        </li>
        <li>
          <IconGenerator icon="dribbble" />
        </li>
        <li>
          <IconGenerator icon="google" />
        </li>
        <li>
          <IconGenerator icon="instagram" />
        </li>
        <li>
          <IconGenerator icon="linkedin" />
        </li>
        <li>
          <IconGenerator icon="medium" />
        </li>
        <li>
          <IconGenerator icon="pintrest" />
        </li>
        <li>
          <IconGenerator icon="quora" />
        </li>
        <li>
          <IconGenerator icon="twitter" />
        </li>
      </ul>
    );
    return <div>{list}</div>;
  }
}

export default Icons;
