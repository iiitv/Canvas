import React, { useState, useEffect } from 'react';
import addResizeEvent from 'element-resize-event';
import { throttle } from 'lodash';

const Button = ({
  text,
  position,
  height,
  width,
  id,
  setSelected,
  showContextMenu,
  backgroundColor,
  textColor,
  borderRadius,
}) => {
  const [styles, setStyles] = useState({
    position: 'absolute',
    width,
    height,
    top: `calc(${position.y}px)`,
    left: `calc(${position.x}px - 30rem)`,
    minWidth: '4rem',
    maxWidth: '100rem',
    borderRadius,
  });

  const setCoordinates = e => {
    let width = e.target.clientWidth;
    let height = e.target.clientHeight;
    let x = e.clientX,
      y = e.clientY;
    let top = `calc(${y}px - ${height / 2}px)`,
      left = `calc(${x}px - 30rem - ${width / 2}px)`;

    let newStyles = { ...styles, top, left };
    setStyles(newStyles);
  };

  return (
    <button
      style={{ ...styles, backgroundColor, color: textColor, borderRadius }}
      className="btn"
      draggable="true"
      onDrag={setCoordinates}
      onDragStart={e => e.dataTransfer.setDragImage(new Image(), 0, 0)}
      onContextMenu={showContextMenu}
      onDoubleClick={() => setSelected(id)}
      id={`btn-${id}`}
    >
      {text}
    </button>
  );
};

export default Button;
