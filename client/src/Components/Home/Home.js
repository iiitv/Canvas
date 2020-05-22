import React, { useState } from "react";
import CusButton from "../CusButton";
import "../../scss/main.scss";
import DarkNav from "./DarkNavBar";
import ContactUsForm from "./contactUs";
import TextBox from "./TextBox";

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
    toggleModal();
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

  const parsePx = (x) => {
    return parseInt(x.split("px")[0]);
  };
  const toggleModal = (id) => {
    const modal = document.querySelector(".modal");
    if (id) {
      const tid = document.getElementById(id);
      modal.classList.add("visible");
      modal.style.top = parsePx(tid.style.top) + 5 + "px";
      modal.style.left = parsePx(tid.style.left) + 260 + "px";
      return;
    }
    modal.classList.remove("visible");
  };
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
      contactUs: {
        position: "absolute",
        width: "400px",
        height: "600px",
        padding: "50px",
      },
      Text: {

        padding: "12px 20px",
        margin: "8px 0",
        boxSizing: "border-box",
        border: "1px solid #555",
        outline: "none",
        width: "200px",
        
       
      },


    };
    return properties[type];
  };

  const drop = (e) => {
    e.preventDefault();
    const _mouseY = e.clientY;
    const _mouseX = e.clientX;
    const card_id = e.dataTransfer.getData("card_id");
    console.log(card_id)
    if (card_id) {

      const card = document.getElementById(card_id);
      card.style.display = "block";
      card.style.top = `${_mouseY}px`;
      card.style.left = `${_mouseX - 200}px `;
    }
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
  const getComponent = (type, element, index) => {
    const components = {
      button: <CusButton key={index} styles={element} toggle={toggleModal} />,
      navbar: <DarkNav key={index} styles={element} toggle={toggleModal} />,
      contactUs: (
        <ContactUsForm key={index} styles={element} toggle={toggleModal} />
      ),
      Text: (
        <TextBox key={index} styles={element} toggle={toggleModal} />
      ),   

    };
    return components[type];
  };
  return (
    <div className="Home">
      <aside className="sidebar">
        <h1  style={{color: "red"}}>Our Components</h1>
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
          "#fff",
          "30px",
          "contact",
          "contact us",
          "contactUs"
        )}

        {renderSidebarButton(
          "#92D9A6",
          "25",
          "box1",
          "Simple Textbox",
          "Text"
        )}
        

      </aside>
      <div className="modal" id="add-modal">
        <div className="modal__content">
          <ul>
            <li>Edit</li>
            <li>Remove</li>
          </ul>
        </div>
      </div>
      <div
        id="moving"
        onDrop={drop}
        onDragOver={dragOver}
        onClick={getPositions}
      >
        {arr.map((element, index) => {
          return getComponent(element.type, element, index);
        })}
      </div>
    </div>
    
  );
}
export default Home;
