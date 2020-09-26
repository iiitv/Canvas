import React, { useEffect, useState } from 'react';
const BasicProperties = ({
  updateSelectedElement,
  defaultText,
  selectedType,
  defaultBorderRadius,
  defaultFontSize,
  defaultFontWeight,
}) => {
  const [text, setText] = useState(defaultText);
  const [textPicker, setTextPicker] = useState(false);
  const [backgroundPicker, setBackgroundPicker] = useState(false);
  const [borderRadius, setBorderRadius] = useState(defaultBorderRadius);
  const [fontSize, setFontSize] = useState(defaultFontSize);
  const [fontWeight, setFontWeight] = useState(defaultFontWeight);
  useEffect(() => {
    updateSelectedElement({
      text,
      fontSize,
      fontWeight,
      borderRadius: selectedType !== 'text' ? `${borderRadius}px` : '5px',
    });
  }, [text, borderRadius, fontSize, fontWeight]);

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
        <div className="properties__label">Content</div>
        <input
          className="properties__textinput"
          type="text"
          defaultValue={defaultText}
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div className="properties__section">
        <div className="properties__label">Font size</div>
        <input
          className="properties__textinput"
          type="text"
          defaultValue={defaultFontSize}
          onChange={e => setFontSize(e.target.value)}
        />
      </div>
      <div className="properties__section">
        <div className="properties__label">Font weight</div>
        <input
          className="properties__textinput"
          type="text"
          defaultValue={defaultFontWeight}
          onChange={e => setFontWeight(e.target.value)}
        />
      </div>
      <div className="properties__section">
        <div className="properties__label">Border Radius</div>
        <input
          type="range"
          min="0"
          max="100"
          className="properties__rangeinput"
          defaultValue={defaultBorderRadius}
          onChange={e => setBorderRadius(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BasicProperties;
