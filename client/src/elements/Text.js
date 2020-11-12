import React, { useState } from 'react';
import {Resizable} from 're-resizable'
import resizeHandles from './../Components/ResizeHandles'

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
  fontWeight,
  resizing,
  fontFamily
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
    <Resizable defaultSize={{
      width: 100,
      height: 50
    }} style={{ ...styles, backgroundColor, color: textColor, fontWeight, fontFamily}}
    className="text"
      id={`text-${id}`}
      draggable={!resizing}
    enable={{
      top:resizing, right:resizing, bottom:resizing, left:resizing, topRight:resizing, bottomRight:resizing, bottomLeft:resizing, topLeft:resizing
    }}
    onDoubleClick={() =>
      setSelected(id)
    }
    onResizeStop={() => {

    }}
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
