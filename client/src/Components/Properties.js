import React, { cloneElement, useEffect, useState } from 'react';
import TextProperties from './TextProperties';
import ColorProperties from './ColorProperties';
import TransformProperties from './TransformProperties';


const Properties = ({ selectedElement, updateElement, getElementFromId, addFont, fontsList }) => {
  const [tab, setTab] = useState('transform');
  const [selected, setSelected] = useState(selectedElement);
  const [resizing, setResizing] = useState(selectedElement.resizing)

  let id = selected.id;
  let element = selected.element;

//TODO: When not in transform tab, cannot resize, can drag. Transform also includes rotation, width, height increase, move border-radius to transform tab.

  useEffect(() => {
    console.log('updated');
    console.log(selected.element.props.fontWeight)
  }, [selected.element.props.text]);

  useEffect(() => {
    document.querySelectorAll('.properties__tab').forEach(cur => {
      if (cur.classList.contains(`properties__tab--${tab}`)) {
        cur.style.backgroundColor = '#fff';
        cur.style.borderTopLeftRadius = '5px';
        cur.style.borderTopRightRadius = '5px';
      } else {
        cur.style.backgroundColor = '#eee';
      }
    });
  }, [tab]);

  useEffect(() => {
    const tabs = document.querySelectorAll('.properties__tab');
    tabs.forEach((cur, index, arr) => {
      cur.style.width = `calc(100% - ${arr.length}%)`;
    });
  }, []);

  const updateSelectedElement = (values = {}) => {
    if (values && values !== {}) {
      let updatedElement = cloneElement(element, {
        ...element.props,
        ...values,
      });
      updateElement(id, updatedElement);
      setSelected({ id, element: updatedElement });
    }
    console.log(getElementFromId(id));
  };

  const toggleResizing = (isResizing) => {
    updateSelectedElement({ resizing: isResizing })
    setResizing(isResizing);
  }

  return (
    <div className="properties">
      <div className="properties__tabs">
        <div
          className="properties__tab properties__tab--transform"
          onClick={() => setTab('transform')}
        >
          <i className="fa fa-icon fa-ruler-horizontal"></i>
          <span>Transform</span>
        </div>
        <div
          className="properties__tab properties__tab--text"
          onClick={() => setTab('text')}
        >
          <i className="fa fa-icon fa-font"></i>
          <span>Text</span>
        </div>
        <div
          className="properties__tab properties__tab--color"
          onClick={() => setTab('color')}
        >
          <i className="fa fa-icon fa-paint-brush"></i>
          <span>Color</span>
        </div>
      </div>
      <div className="properties__content">
      {tab === 'transform' && (
          <TransformProperties
            updateSelectedElement={updateSelectedElement}
            selectedType={selected.element.props.type}
            defaultBorderRadius={selected.element.props.borderRadius}
            toggleResizing={toggleResizing}
            resizing={resizing}
          />
        )}
        {tab === 'text' && (
          <TextProperties
            updateSelectedElement={updateSelectedElement}
            defaultBackgroundColor={selected.element.props.backgroundColor}
            defaultText={selected.element.props.text}
            defaultTextColor={selected.element.props.textColor}
            selectedType={selected.element.props.type}
            defaultFontWeight={selected.element.props.fontWeight}
            defaultFontFamily={selected.element.props.fontFamily}
            addFont={addFont}
            fontsList={fontsList}
          />
        )}
        {tab === 'color' && (
          <ColorProperties
            updateSelectedElement={updateSelectedElement}
            defaultBackgroundColor={selected.element.props.backgroundColor}
            defaultTextColor={selected.element.props.textColor}
            selectedType={selected.element.props.type}
          />
        )}
        
      </div>
    </div>
  );
};

export default Properties;
