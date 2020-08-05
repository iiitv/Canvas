import React, { useState, Fragment, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import uniqid from 'uniqid';

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
  removeSelection,
}) => {
  const addButton = coords => {
    const id = uniqid();
    const btn = {
      element: (
        <Button
          text="Pasta"
          position={coords}
          height="50"
          width="100"
          setModalOpen={setModalOpen}
          removeElement={removeElement}
          id={id}
          setSelected={setSelected}
        />
      ),
      id,
    };
    addElement(btn);
  };
  const addText = coords => {
    const id = uniqid();
    const text = {
      element: (
        <Text
          text="Pasta"
          position={coords}
          height="50"
          width="100"
          setModalOpen={setModalOpen}
          removeElement={removeElement}
          id={id}
          setSelected={setSelected}
        />
      ),
      id,
    };
    addElement(text);
  };

  return (
    <div className="home">
      <Sidebar />
      {selected ? <Properties /> : null}
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
