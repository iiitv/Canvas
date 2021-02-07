import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown'

const TransformProperties = ({
  updateSelectedElement,
  selectedType,
  toggleResizing, resizing, defaultBorderRadius
}) => {
  
  const normalizeBorderRadius = (val, type) => {
    if (!val) return
    let arr = val.split('')
    let filtered = []
    if (type === 'magnitude') filtered = arr.filter(cur => !isNaN(cur))
    if (type === 'unit') filtered = arr.filter(cur => isNaN(cur))
    let final = filtered.join('')
    return final
  }
  const [borderRadius, setBorderRadius] = useState(normalizeBorderRadius(defaultBorderRadius, 'magnitude'))
  const [borderRadiusDropdownOpen, setBorderRadiusDropdownOpen] = useState(false)
  const [borderRadiusUnit, setBorderRadiusUnit] = useState(normalizeBorderRadius(defaultBorderRadius, 'unit'))

  useEffect(() => {
    updateSelectedElement({
      borderRadius: `${borderRadius}${borderRadiusUnit}`
    })
  }, [borderRadius, borderRadiusUnit])

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
        if (!els.filter(el => el === 'properties__dropdown-wrapper')[0]) {
          setBorderRadiusDropdownOpen(false);
          document.querySelectorAll('.properties__dropdown__searchbar > input').forEach(cur => cur.value = '');
        }
      }}
    >
      <div className="properties__section">
        <div className="properties__label">Resizing</div>
        <button className={`properties__btn properties__resize-btn ${resizing ? 'properties__resize-btn--active' : ''}`} onClick={() => toggleResizing(!resizing)}>
          <i className="fa fa-icon fa-arrows-alt properties__btn__logo"></i>
          <span>{resizing ? 'Stop Resizing' : 'Start Resizing'}</span>
        </button>
      </div>
      {selectedType !== 'text' ? (
        <div className="properties__section">
        <div className="properties__label">Border Radius</div>
        <div className="properties__grid__1-by-3">
        <input
          className="properties__textinput"
          type="text"
          defaultValue={borderRadius}
          onChange={e => setBorderRadius(e.target.value)}
        />
        <Dropdown
          arr={[ 'px', '%', 'rem', 'em' ]}
          isOpen={borderRadiusDropdownOpen}
          setIsOpen={setBorderRadiusDropdownOpen}
          config={{
            title: borderRadiusUnit ? borderRadiusUnit : 'Select Unit',
            searchable: false,
            windowing: false,
            itemConfig: {
            height: 300,
            width: 100,
            size: 30,
            action: (val) => {
              setBorderRadiusUnit(val)
            }
          }
          }}
        />
        </div>
      </div>
      ) : null}
    </div>
  );
};

export default TransformProperties;
