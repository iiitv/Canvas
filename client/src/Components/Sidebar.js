import React from 'react';

const Sidebar = () => {
  const dragStart = e => {
    e.dataTransfer.setData('type', e.target.dataset.type);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__section">
        <div className="sidebar__section__title">Components</div>
      </div>
      <div className="sidebar__divider"></div>
      <div className="sidebar__section__content">
        <div
          className="sidebar__component sidebar__component--button"
          draggable="true"
          data-type="button"
          onDragStart={dragStart}
        >
          <i className="fa fa-icon fa-hand-pointer-o"></i>
          <span>Drag a button</span>
        </div>
        <div
          className="sidebar__component sidebar__component--text"
          data-type="text"
          draggable="true"
          onDragStart={dragStart}
        >
          <i className="fa fa-icon fa-font"></i>
          <span>Drag Text</span>
        </div>
        <div className="sidebar__divider"></div>
      </div>
    </div>
  );
};

export default Sidebar;
