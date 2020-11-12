import React, { useEffect, useState } from 'react';
import { TwitterPicker } from 'react-color';

const ColorProperties = ({
  updateSelectedElement,
  defaultBackgroundColor,
  defaultTextColor,
  selectedType,
}) => {
  const [textPicker, setTextPicker] = useState(false);
  const [backgroundPicker, setBackgroundPicker] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(
    defaultBackgroundColor
  );
  const [textColor, setTextColor] = useState(defaultTextColor);

  useEffect(() => {
    updateSelectedElement({
      textColor: textColor.rgb
        ? `rgba(${textColor.rgb.r}, ${textColor.rgb.g}, ${textColor.rgb.b}, ${textColor.rgb.a})`
        : textColor,
      backgroundColor:
        selectedType === 'text'
          ? 'transparent'
          : backgroundColor.rgb
          ? `rgba(${backgroundColor.rgb.r}, ${backgroundColor.rgb.g}, ${backgroundColor.rgb.b}, ${backgroundColor.rgb.a})`
          : backgroundColor,
    });
  }, [backgroundColor, textColor]);

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
        if (els.includes('twitter-picker')) return;
        if (textPicker) setTextPicker(false);
        if (backgroundPicker) setBackgroundPicker(false);
      }}
    >
      <div className="properties__section">
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
      {
        selectedType === 'text' ? null : (
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
        )
      }
    </div>
  );
};

export default ColorProperties;
