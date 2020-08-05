import React, { useState } from 'react';
import ContextMenu from './../Components/ContextMenu';

const Button = ({
  text,
  position,
  height,
  width,
  setModalOpen,
  id,
  removeElement,
  setSelected,
}) => {
  const [styles, setStyles] = useState({
    position: 'absolute',
    width: width,
    height: height,
    top: `calc(${position.y}px - ${height / 2}px)`,
    left: `calc(${position.x}px - 30rem - ${width / 2}px)`,
  });

  const setCoordinates = e => {
    let x = e.clientX,
      y = e.clientY;
    let top = `calc(${y}px - ${styles.height / 2}px)`,
      left = `calc(${x}px - 30rem - ${styles.width / 2}px)`;

    let newStyles = { ...styles, top, left };
    setStyles(newStyles);
  };

  const select = () => setSelected(id);

  const showContextMenu = e => {
    let menu = new ContextMenu({
      theme: 'pure',
      items: [
        {
          icon: 'trash',
          name: 'Remove',
          action: () => {
            removeElement(id);
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

  return (
    <span
      style={styles}
      className="text"
      draggable="true"
      onDrag={setCoordinates}
      onDragStart={e => e.dataTransfer.setDragImage(new Image(), 0, 0)}
      onContextMenu={showContextMenu}
      onClick={select}
    >
      {text}
    </span>
  );
};

export default Button;
