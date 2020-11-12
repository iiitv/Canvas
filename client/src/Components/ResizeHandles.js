import React from 'react';

const TopHandle = () => {
  return (
    <div className="resize-handle__top resize-handle__topbottom">
      
    </div>
  )
}

const RightHandle = () => {
  return (
    <div className="resize-handle__right resize-handle__sides">
      
    </div>
  )
}

const LeftHandle = () => {
  return (
    <div className="resize-handle__left resize-handle__sides">
      
    </div>
  )
}

const BottomHandle = () => {
  return (
    <div className="resize-handle__bottom resize-handle__topbottom">
      
    </div>
  )
}

const TopRightHandle = () => {
  return (
    <div className="resize-handle__topright resize-handle__corners">
      
    </div>
  )
}

const TopLeftHandle = () => {
  return (
    <div className="resize-handle__topleft resize-handle__corners">
      
    </div>
  )
}

const BottomRightHandle = () => {
  return (
    <div className="resize-handle__bottomright resize-handle__corners">
      
    </div>
  )
}

const BottomLeftHandle = () => {
  return (
    <div className="resize-handle__bottomleft resize-handle__corners">
      
    </div>
  )
}

const resizeHandles = {
  top: <TopHandle />,
  bottom: <BottomHandle />,
  left: <LeftHandle />,
  right: <RightHandle />,
  topRight: <TopRightHandle />,
  topLeft: <TopLeftHandle />,
  bottomLeft: <BottomLeftHandle />,
  bottomRight: <BottomRightHandle />
}

export default resizeHandles; 