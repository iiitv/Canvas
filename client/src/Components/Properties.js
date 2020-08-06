import React, { cloneElement, useEffect, useState } from 'react';
import { TwitterPicker } from 'react-color';

const Properties = ({ selected, updateElement }) => {
  const [text, setText] = useState(selected.element.props.text);
  const [textPicker, setTextPicker] = useState(false);
  const [backgroundPicker, setBackgroundPicker] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    selected.element.props.backgroundColor
  );
  const [textColor, setTextColor] = useState(selected.element.props.textColor);

  useEffect(() => {
    const id = selected.id;
    const element = selected.element;
    let updatedElement = cloneElement(element, { text });
    updateElement(id, updatedElement);
  }, [text, selected]);

  useEffect(() => {
    const id = selected.id;
    const element = selected.element;
    if (textColor.rgb) {
      let { rgb } = textColor;
      let { r, g, b, a } = rgb;
      let updatedElement = cloneElement(element, {
        textColor: `rgba(${r}, ${g}, ${b}, ${a})`,
        backgroundColor,
      });
      updateElement(id, updatedElement);
    }
  }, [textColor, selected]);
  useEffect(() => {
    const id = selected.id;
    const element = selected.element;
    if (element.props.type === 'text') return;
    if (backgroundColor.rgb) {
      let { rgb } = backgroundColor;
      let { r, g, b, a } = rgb;
      let updatedElement = cloneElement(element, {
        backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`,
        textColor,
      });
      updateElement(id, updatedElement);
    }
  }, [backgroundColor, selected]);

  return (
    <div
      className="properties"
      onClick={e => {
        let els = [];
        let a = e.target;
        while (a) {
          if (!a.classList) break;
          Array.from(a.classList, cur => els.push(cur));
          a = a.parentNode;
        }
        if (els.includes('twitter-picker')) return;
        if (textPicker) setTextPicker(false);
        if (backgroundPicker) setBackgroundPicker(false);
      }}
    >
      <div className="properties__title">Properties</div>
      <div className="properties__divider"></div>
      <div className="properties__section">
        <div className="properties__label">Text</div>
        <input
          className="properties__textinput"
          type="text"
          defaultValue={selected.element.props.text}
          onChange={e => setText(e.target.value)}
        />
        <div className="properties__label">Text Color</div>
        <div
          className="properties__color-picker__parent"
          style={{ marginBottom: textPicker ? '5rem' : 'auto' }}
        >
          <div
            className="properties__color-picker__trigger"
            onClick={() => setTextPicker(!textPicker)}
            style={{ backgroundColor: textColor.hex || textColor }}
          ></div>
          <div
            className={`properties__color-picker__picker ${
              textPicker ? 'properties__color-picker__picker--visible' : ''
            }`}
          >
            <TwitterPicker
              triangle="hide"
              onChangeComplete={color => {
                setTextColor(color);
                setTextPicker(false);
              }}
            />
          </div>
        </div>
      </div>
      <div className="properties__section">
        <div className="properties__label">Background Color</div>
        <div
          className="properties__color-picker__parent"
          style={{ marginBottom: backgroundPicker ? '5rem' : 'auto' }}
        >
          <div
            className="properties__color-picker__trigger"
            onClick={() => setBackgroundPicker(!backgroundPicker)}
            style={{ backgroundColor: backgroundColor.hex || backgroundColor }}
          ></div>
          <div
            className={`properties__color-picker__picker ${
              backgroundPicker
                ? 'properties__color-picker__picker--visible'
                : ''
            }`}
          >
            <TwitterPicker
              triangle="hide"
              onChangeComplete={color => {
                setBackgroundColor(color);
                setBackgroundPicker(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
