import React, { useState, useEffect } from 'react';
import {Resizable} from 're-resizable'
import resizeHandles from './../Components/ResizeHandles'

const Circle = ({
  position,
  height,
  width,
  id,
  setSelected,
  resizing,
  showContextMenu,
  backgroundColor,
  borderRadius,
}) => {
  const [styles, setStyles] = useState({
    position: 'absolute',
    width,
    height,
    top: `calc(${position.y}px)`,
    left: `calc(${position.x}px - 30rem)`,
    borderRadius,
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
    }} style={{ ...styles, backgroundColor, borderRadius }}
    className="shape shape__circle"
    id={`shape-${id}`}
    draggable={!resizing}
    enable={{
      top:resizing, right:resizing, bottom:resizing, left:resizing, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false
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
    </Resizable>
  );
};

export default Circle;