import React from 'react';

const Sidebar = () => {
  const dragStart = e => {
    e.dataTransfer.setData('type', e.target.dataset.type);
  };

  const expandOptions = (section) => {
    document.querySelector(`.sidebar__section__content--${section}`).classList.toggle('sidebar__section__content--expanded')
    document.querySelector(`.sidebar__section__title__icon--${section}`).classList.toggle('sidebar__section__title__icon--flipped')
  }

  return (
    <div className="sidebar">
      <div className="sidebar__section sidebar__section--component" onClick={() => expandOptions('components')}>
        <div className="sidebar__section__title">
        <div className="sidebar__section__title__span">Components</div>
        <div className="sidebar__section__title__icon sidebar__section__title__icon--components fa fa-icon fa-chevron-down"></div>
        </div>
      </div>

      <div className="sidebar__section__content sidebar__section__content--components">
        <div
          className="sidebar__option sidebar__option--button"
          draggable="true"
          data-type="button"
          onDragStart={dragStart}
        >
          <i className="fa fa-icon fa-hand-pointer-o"></i>
          <span>Drag Button</span>
        </div>

        <div
          className="sidebar__option sidebar__option--text"
          data-type="text"
          draggable="true"
          onDragStart={dragStart}
        >
          <i className="fa fa-icon fa-font"></i>
          <span>Drag Text</span>
        </div>
      </div>


      <div className="sidebar__section sidebar__section--shapes" onClick={() => expandOptions('shapes')}>
        <div className="sidebar__section__title">
          <div className="sidebar__section__title__span">Shapes</div>
          <div className="sidebar__section__title__icon sidebar__section__title__icon--shapes fa fa-icon fa-chevron-down"></div>
        </div>
      </div>

      <div className="sidebar__section__content sidebar__section__content--shapes">
      <div
          className="sidebar__option sidebar__option--rectangle"
          draggable="true"
          data-type="rectangle"
          onDragStart={dragStart}
        >
          <i className="fa fa-icon fa-square-o"></i>
          <span>Drag Rectangle</span>
        </div>

        <div
          className="sidebar__option sidebar__option--circle"
          data-type="circle"
          draggable="true"
          onDragStart={dragStart}
        >
          <i className="fa fa-icon fa-circle-o"></i>
          <span>Drag Circle</span>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
