import React, { useState } from "react";
import CusButton from "../CusButton";
import "../../scss/main.scss";
import DarkNav from "./DarkNavBar";
import ContactUsForm from "./contactUs";

function Home() {
  const [backgroundColor, setbackgroundColor] = useState();
  const [borderRadius, setborderRadius] = useState();
  const [didClick, setdidClick] = useState(false);
  const [type, settype] = useState("");
  const [aid, setaid] = useState();
  const [arr] = useState([]);
  const setProperties = (col, rad, aid, type) => {
    setbackgroundColor(col);
    setborderRadius(rad);
    setaid(aid);
    settype(type);
    setdidClick(true);
  };

  function getPositions(ev) {
    let specificProperties = {};
    let element = {};
    if (didClick === true) {
      const _mouseY = ev.clientY;
      const _mouseX = ev.clientX;
      element.type = type;
      element.borderRadius = borderRadius;
      element.aid = aid;
      element.backgroundColor = backgroundColor;
      specificProperties = getSpecificProperties(type);
      element = { ...element, ...specificProperties };
      element.top = `${_mouseY}px`;
      element.left = `${_mouseX - 200}px`;
      setdidClick(false);
    } else {
      return;
    }
    arr.push(element);
  }
  const getSpecificProperties = (type) => {
    const properties = {
      button: {
        width: "70px",
      },
      navbar: {
        display: "flexbox",
        position: "absolute",
        width: "800px",
        height: "150px",
      },
    };
    return properties[type];
  };

  const drop = (e) => {
    e.preventDefault();
    const _mouseY = e.clientY;
    const _mouseX = e.clientX;
    const card_id = e.dataTransfer.getData("card_id");
    console.log(card_id);
    const card = document.getElementById(card_id);
    card.style.display = "block";
    card.style.top = `${_mouseY}px`;
    card.style.left = `${_mouseX - 200}px `;
    console.log(card.style.top, card.style.top);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  const renderSidebarButton = (color, radius, id, label, type) => {
    return (
      <button
        onClick={() =>
          setProperties(`${color}`, `${radius}`, `${id}`, `${type}`)
        }
      >
        {label}
      </button>
    );
  };
  const getComponent = (type, element) => {
    const components = {
      button: <CusButton styles={element} />,
      navbar: <DarkNav styles={element} />,
      contactUs: <ContactUsForm styles={element} />,
    };
    return components[type];
  };
  return (
    <div className="Home">
      <aside className="sidebar">
        <h1>Our Components</h1>
        {renderSidebarButton(
          "lightgrey",
          "25px",
          "btn3",
          "Red Round Button",
          "button"
        )}
        {renderSidebarButton(
          "orange",
          "25",
          "btn4",
          "Blue round Button",
          "button"
        )}
        {renderSidebarButton("#d9455f", "18px", "nav1", "add navbar", "navbar")}
        {renderSidebarButton(
          "#d9455f",
          "18px",
          "contact",
          "contact us",
          "contactUs"
        )}
      </aside>
      <div
        id="moving"
        onDrop={drop}
        onDragOver={dragOver}
        onClick={getPositions}
      >
        {arr.map((element) => {
          return getComponent(element.type, element);
        })}
      </div>
    </div>
  );
}
export default Home;
