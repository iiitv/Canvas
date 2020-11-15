import React from 'react';
import uniqid from 'uniqid';

import ContextMenu from './../Components/ContextMenu';

import Button from './../elements/Button';
import Text from './../elements/Text';
import Rectangle from './../elements/Rectangle'
import Circle from './../elements/Circle'

const triggerContextMenu = (
  e,
  id,
  allowContextMenu,
  setSelected,
  removeElement,
  removeSelection,
  setModalOpen
) => {
  if (!allowContextMenu) return;
  let menu = new ContextMenu({
    theme: 'pure',
    items: [
      {
        icon: 'trash',
        name: 'Remove',
        action: () => {
          removeElement(id);
          removeSelection();
        },
      },
      {
        icon: 'edit',
        name: 'Edit',
        action: () => {
          setSelected(id);
        },
      },
    ],
  });
  let coords = { x: e.clientX, y: e.clientY };
  const time = menu.isOpen() ? 100 : 0;
  e.preventDefault();
  menu.hide();
  setTimeout(() => {
    menu.show(coords.x, coords.y);
  }, time);
  setModalOpen(true);
};

export const createButton = (config, functions) => {
  const id = uniqid();
  const {
    text,
    position,
    height,
    width,
    allowContextMenu,
    selected,
    backgroundColor,
    textColor,
    borderRadius,
    fontWeight,
    resizing,
    fontFamily
  } = config;

  const {
    setModalOpen,
    removeElement,
    setSelected,
    removeSelection,
    addElement,
    updateElement,
  } = functions;

  const showContextMenu = e =>
    triggerContextMenu(
      e,
      id,
      allowContextMenu,
      setSelected,
      removeElement,
      removeSelection,
      setModalOpen
    );

  const btn = {
    element: (
      <Button
        id={id}
        text={text}
        position={position}
        height={height}
        width={width}
        setSelected={setSelected}
        showContextMenu={showContextMenu}
        removeSelection={removeSelection}
        updateElement={updateElement}
        selected={selected}
        backgroundColor={backgroundColor}
        textColor={textColor}
        borderRadius={borderRadius}
        type="button"
        fontWeight={fontWeight}
        resizing={resizing}
        fontFamily={fontFamily}
      />
    ),
    id,
  };
  addElement(btn);
};
export const createText = (config, functions) => {
  const id = uniqid();
  const {
    text,
    position,
    height,
    width,
    allowContextMenu,
    textColor,
    backgroundColor,
    fontWeight,
    resizing,
    fontFamily

  } = config;

  const {
    setModalOpen,
    removeElement,
    setSelected,
    removeSelection,
    addElement,
  } = functions;

  const showContextMenu = e =>
    triggerContextMenu(
      e,
      id,
      allowContextMenu,
      setSelected,
      removeElement,
      removeSelection,
      setModalOpen
    );

  const btn = {
    element: (
      <Text
        id={id}
        text={text}
        position={position}
        height={height}
        width={width}
        setSelected={setSelected}
        showContextMenu={showContextMenu}
        backgroundColor={backgroundColor}
        textColor={textColor}
        type="text"
        fontWeight={fontWeight}
        resizing={resizing}
    fontFamily={fontFamily}
      />
    ),
    id,
  };
  addElement(btn);
};

export const createRectangle = (config, functions) => {
  const id = uniqid();
  const {
    text,
    position,
    height,
    width,
    allowContextMenu,
    textColor,
    backgroundColor,
    fontWeight,
    resizing,
    fontFamily

  } = config;

  const {
    setModalOpen,
    removeElement,
    setSelected,
    removeSelection,
    addElement,
  } = functions;

  const showContextMenu = e =>
    triggerContextMenu(
      e,
      id,
      allowContextMenu,
      setSelected,
      removeElement,
      removeSelection,
      setModalOpen
    );

  const rect = {
    element: (
      <Rectangle
        id={id}
        position={position}
        height={height}
        width={width}
        setSelected={setSelected}
        showContextMenu={showContextMenu}
        backgroundColor={backgroundColor}
        type="shape"
        resizing={resizing}
        fontFamily={fontFamily}
      />
    ),
    id,
  };
  addElement(rect);
};


export const createCircle = (config, functions) => {
  const id = uniqid();
  const {
    text,
    position,
    height,
    width,
    allowContextMenu,
    textColor,
    backgroundColor,
    fontWeight,
    resizing,
    fontFamily

  } = config;

  const {
    setModalOpen,
    removeElement,
    setSelected,
    removeSelection,
    addElement,
  } = functions;

  const showContextMenu = e =>
    triggerContextMenu(
      e,
      id,
      allowContextMenu,
      setSelected,
      removeElement,
      removeSelection,
      setModalOpen
    );

  const circle = {
    element: (
      <Circle
        id={id}
        position={position}
        height={height}
        width={width}
        setSelected={setSelected}
        showContextMenu={showContextMenu}
        backgroundColor={backgroundColor}
        type="shape"
        resizing={resizing}
        fontFamily={fontFamily}
      />
    ),
    id,
  };
  addElement(circle);
};
