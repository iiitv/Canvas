import React, { useState, Fragment, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import uniqid from 'uniqid';
import { createButton, createText } from './../logic/ElementCreators';

import Button from '../elements/Button';
import Text from '../elements/Text';
import Properties from '../Components/Properties';

const Home = ({
  elements,
  addElement,
  removeElement,
  setModalOpen,
  selected,
  setSelected,
  updateElement,
  removeSelection,
}) => {
  /*
  
  const { text, position, height, width, allowContextMenu } = config;

  const {
    setModalOpen,
    removeElement,
    setSelected,
    removeSelected,
    addElement,
  } = functions;
*/

  const addButton = position => {
    const buttonConfig = {
      text: 'Button',
      position,
      height: 'auto',
      width: 'auto',
      allowContextMenu: true,
      backgroundColor: '#ccc',
      textColor: '#000',
    };

    const buttonFunctions = {
      setModalOpen,
      removeElement,
      setSelected,
      removeSelection,
      addElement,
      updateElement,
    };
    createButton(buttonConfig, buttonFunctions);
  };
  const addText = position => {
    const textConfig = {
      text: 'Text',
      position,
      height: 50,
      width: 100,
      allowContextMenu: true,
      backgroundColor: 'transparent',
      textColor: '#000',
    };

    const textFunctions = {
      setModalOpen,
      removeElement,
      setSelected,
      removeSelection,
      addElement,
      updateElement,
    };
    createText(textConfig, textFunctions);
  };

  return (
    <div className="home">
      <Sidebar />
      {selected ? (
        <Properties updateElement={updateElement} selected={selected} />
      ) : null}
      <div
        className="home__canvas"
        onClick={e => {
          if (e.target.classList.contains('home__canvas')) {
            removeSelection();
          }
        }}
        onDragOver={e => e.preventDefault()}
        onDrop={e => {
          e.preventDefault();
          let type = e.dataTransfer.getData('type');
          console.log(e.clientX, e.clientY);
          let dropCoords = { x: e.clientX, y: e.clientY };
          if (type === 'button') {
            addButton(dropCoords);
          }
          if (type === 'text') {
            addText(dropCoords);
          }
        }}
      >
        {elements.map(cur => (
          <Fragment key={cur.id}>{cur.element}</Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;
