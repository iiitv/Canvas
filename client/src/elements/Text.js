import React, { useState } from 'react';

const Button = ({
  text,
  position,
  height,
  width,
  id,
  setSelected,
  showContextMenu,
  textColor,
  backgroundColor,
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
      y = e.clientY,
      width = e.target.clientWidth,
      height = e.target.clientHeight;

    let top = `calc(${y}px - ${height / 2}px)`,
      left = `calc(${x}px - 30rem - ${width / 2}px)`;
    let newStyles = { ...styles, top, left };
    setStyles(newStyles);
  };

  return (
    <span
      style={{ ...styles, backgroundColor, color: textColor }}
      className="text"
      draggable="true"
      onDrag={setCoordinates}
      onDragStart={e => e.dataTransfer.setDragImage(new Image(), 0, 0)}
      onContextMenu={showContextMenu}
      onDoubleClick={() => setSelected(id)}
      id={id}
    >
      {text}
    </span>
  );
};

export default Button;
