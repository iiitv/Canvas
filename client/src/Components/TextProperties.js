import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window'

const BasicProperties = ({
  updateSelectedElement,
  defaultText,
  selectedType,
  defaultFontWeight,
  defaultFontFamily,
  addFont,
  fontsList
}) => {
  const [text, setText] = useState(defaultText);
  const [fontWeight, setFontWeight] = useState(defaultFontWeight)
  const [fontWeightDropdownOpen, setFontWeightDropdownOpen] = useState(false)
  const [fontFamilyDropdownOpen, setFontFamilyDropdownOpen] = useState(false)

  const [fontFamily, setFontFamily] = useState(defaultFontFamily)
  const [current, setCurrent] = useState(fontsList.slice(0, 20))

  useEffect(() => {
    updateSelectedElement({
      text,
      fontWeight: fontWeight,
      fontFamily: fontFamily

    });
  }, [text, fontWeight, fontFamily]);


  
  const fetchMoreFonts = () => {
    setTimeout(() => {
      console.log(fontsList.slice(current.length + 1, current.length + 21))
      console.log(current.length);
    }, 1000)
    console.log('fetching')
  }

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
        if (fontWeightDropdownOpen) setFontWeightDropdownOpen(false);
        if (fontFamilyDropdownOpen) setFontFamilyDropdownOpen(false);

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
        <div className="properties__label">Font Family</div>
        
        <div className="properties__dropdown-wrapper">
            <button className="properties__dropdown-trigger" onClick={() => setFontFamilyDropdownOpen(true)}>{fontFamily ? fontFamily : 'Select Font'}</button>
          <div id="properties-dropdown" className={`properties__dropdown ${fontFamilyDropdownOpen ? 'properties__dropdown__open' : ''}`}
        >
            
            <List
            className="font-families-list"
            height={200}
            itemCount={fontsList.length}
            width={200}
            itemSize={30}
            >
              {
                ({index, style}) => (
                  <div style={style} key={index} className="properties__dropdown__item" onClick={() => {
                    setFontFamily(fontsList[index])
                    addFont({ font: fontsList[index], weights: [400] })
                  }}>
                  {fontsList[index]}
                  </div>
                )
              }
            </List>

            {/*
{current.map((cur, index) => (

              <div key={index} className="properties__dropdown__item" onClick={(e) =>  {
                setFontFamily(cur)
          addFont({font: cur, weights: [400]})
              }}>{cur}</div>
            ))}

            */}
            
          </div>
        </div>


      </div>
      
      

      <div className="properties__section" style={{ marginTop: fontFamilyDropdownOpen ? '10rem' : 'auto' }}>
        <div className="properties__label">Font Weight</div>
        <div className="properties__dropdown-wrapper">
            <button className="properties__dropdown-trigger" onClick={() => setFontWeightDropdownOpen(true)}>{fontWeight ? fontWeight : console.log(fontWeight)}</button>
          <div id="properties-dropdown" className={`properties__dropdown ${fontWeightDropdownOpen ? 'properties__dropdown__open' : ''}`}
          
          onClick={e =>{
            if (e.target.classList.contains('properties__dropdown__item')) {
              setFontWeight(parseInt(e.target.dataset.value))
            }
          }}>
            
            {[100, 300, 400, 500, 600, 800, 900].map((cur, index) => (
              <div className="properties__dropdown__item" key={index} data-value={cur}>{cur}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicProperties;
