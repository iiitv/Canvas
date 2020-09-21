import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';

const BasicProperties = ({
  updateSelectedElement,
  defaultText,
  selectedType,
  defaultBorderRadius,
}) => {
  const [text, setText] = useState(defaultText);
  const [textPicker, setTextPicker] = useState(false);
  const [backgroundPicker, setBackgroundPicker] = useState(false);
  const [borderRadius, setBorderRadius] = useState(defaultBorderRadius);

  useEffect(() => {
    updateSelectedElement({
      text,
      borderRadius: selectedType !== 'text' ? `${borderRadius}px` : '5px',
    });
  }, [text, borderRadius]);

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
