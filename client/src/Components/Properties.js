import React, { cloneElement, useEffect, useState } from 'react';
import BasicProperties from './BasicProperties';
import ColorProperties from './ColorProperties';

const Properties = ({ selectedElement, updateElement, getElementFromId }) => {
  const [tab, setTab] = useState('basic');
  const [selected, setSelected] = useState(selectedElement);

  let id = selected.id;
  let element = selected.element;

  useEffect(() => {
    console.log('updated');
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

  return (
    <div className="properties">
      <div className="properties__tabs">
        <div
          className="properties__tab properties__tab--basic"
          onClick={() => setTab('basic')}
        >
          <i className="fa fa-icon fa-ruler-horizontal"></i>
          <span>Basic</span>
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
        {tab === 'basic' && (
          <BasicProperties
            updateSelectedElement={updateSelectedElement}
            defaultBackgroundColor={selected.element.props.backgroundColor}
            defaultText={selected.element.props.text}
            defaultTextColor={selected.element.props.textColor}
            selectedType={selected.element.props.type}
            defaultBorderRadius={selected.element.props.borderRadius}
          />
        )}
        {tab === 'color' && (
          <ColorProperties
            updateSelectedElement={updateSelectedElement}
            defaultBackgroundColor={selected.element.props.backgroundColor}
            defaultText={selected.element.props.text}
            defaultTextColor={selected.element.props.textColor}
            selectedType={selected.element.props.type}
          />
        )}
      </div>
    </div>
  );
};

export default Properties;
