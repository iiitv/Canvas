import React, { useEffect } from 'react';

const TransformProperties = ({
  updateSelectedElement,
  selectedType,
  toggleResizing, resizing
}) => {
  

  useEffect(() => {
    updateSelectedElement({})
  }, [])

  return (
    <div
      className="properties__container"
      onClick={e => {
        let els = [];
        let a = e.target;
        while (a) {
          if (!a.classList) break;
          Array.from(a.classList, cur => els.push(cur));
          a = a.parentNode;
        }
      }}
    >
      <div className="properties__section">
        <div className="properties__label">Resizing</div>
        <button className={`properties__btn properties__resize-btn ${resizing ? 'properties__resize-btn--active' : ''}`} onClick={() => toggleResizing(!resizing)}>
          <i className="fa fa-icon fa-arrows-alt properties__btn__logo"></i>
          <span>Start Resizing</span>
        </button>
      </div>
      <div className="properties__section">
        <div className="properties__label">Border Radius</div>
        <div className="properties__rangeinput">

        </div>
      </div>
    </div>
  );
};

export default TransformProperties;
