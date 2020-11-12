import React, { Fragment, useEffect } from 'react';
import { createButton, createText } from './../logic/ElementCreators';

import Sidebar from '../Components/Sidebar';
import Properties from '../Components/Properties';

const Home = ({
  elements,
  addElement,
  selected,
  removeElement,
  setModalOpen,
  setSelected,
  updateElement,
  removeSelection,
  getElementFromId,
  updateAll,
  addFont,
  fontsList
}) => {


  useEffect(() => {
    if (!selected) {
      updateAll({
        resizing: false
      })
    }
  }, [selected])
  
  const addButton = position => {
    const buttonConfig = {
      text: 'Button',
      position,
      height: 'auto',
      width: 'auto',
      allowContextMenu: true,
      backgroundColor: '#ccc',
      textColor: '#000',
      borderRadius: '5px',
      fontWeight: 400,
      resizing: false,
      fontFamily: 'sans-serif'
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
      fontWeight: 400,
      resizing: false,
      fontFamily: 'sans-serif'
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
        <Properties
          updateElement={updateElement}
          selectedElement={selected}
          getElementFromId={getElementFromId}
          addFont={addFont}
          fontsList={fontsList}
        />
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
