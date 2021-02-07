import React, { useState, useEffect } from 'react';
import {Resizable} from 're-resizable'
import resizeHandles from './../Components/ResizeHandles'

const Button = ({
  text,
  position,
  height,
  width,
  id,
  setSelected,
  resizing,
  showContextMenu,
  backgroundColor,
  textColor,
  borderRadius,
  fontWeight,
  fontFamily
}) => {
  const [styles, setStyles] = useState({
    position: 'absolute',
    width,
    height,
    top: `calc(${position.y}px)`,
    left: `calc(${position.x}px - 30rem)`,
    borderRadius,
    fontWeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'


  });

  useEffect(() => {
    console.log(resizing);
  }, [resizing])

  const setCoordinates = e => {
    if (resizing) return;
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
    <Resizable defaultSize={{
      width,
      height
    }} style={{ ...styles, backgroundColor, color: textColor, borderRadius, fontFamily, fontWeight}}
    className="btn"
    id={`btn-${id}`}
    draggable={!resizing}
    enable={{
      top:resizing, right:resizing, bottom:resizing, left:resizing, topRight:resizing, bottomRight:resizing, bottomLeft:resizing, topLeft:resizing
    }}
    onDoubleClick={() =>
      setSelected(id)
    }
    onContextMenu={showContextMenu}
    onDrag={(e) => {
      if (resizing) return;
      setCoordinates(e)
    }}
    onDragStart={e => {
      if (resizing) return;
      e.dataTransfer.setDragImage(new Image(), 0, 0)
    }}
    handleComponent={resizeHandles}
    >
    {text}
    </Resizable>
  );
};

export default Button;

/*
<button
      style={{ ...styles, backgroundColor, color: textColor, borderRadius }}
      className="btn"
      draggable="true"
      onDrag={setCoordinates}
      onDragStart={e => e.dataTransfer.setDragImage(new Image(), 0, 0)}
      onDoubleClick={() => setSelected(id)}
      id={`btn-${id}`}
    >
      {text}
    </button>
*/