import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown'

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

  useEffect(() => {
    updateSelectedElement({
      text,
      fontWeight: fontWeight,
      fontFamily: fontFamily
    });
  }, [text, fontWeight, fontFamily]);



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
          setFontFamilyDropdownOpen(false);
          setFontWeightDropdownOpen(false);
          document.querySelectorAll('.properties__dropdown__searchbar > input').forEach(cur => cur.value = '');
        }

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
        <Dropdown
        arr={fontsList}
        isOpen={fontFamilyDropdownOpen}
        setIsOpen={setFontFamilyDropdownOpen}
        config={{
          title: fontFamily !== 'sans-serif' ? fontFamily : 'Select Font',
          searchable: true,
          windowing: true,
          searchPlaceholder: 'Search Font',
          itemConfig: {
            height: 300,
            width: 300,
            size: 30,
            action: (val) => {
              setFontFamily(val)
              addFont({ font: val, weights: [400] })
            }
          }
        }
        } />
      </div>
        
      <div className="properties__section"  style={{ marginTop: fontFamilyDropdownOpen ? '13rem' : 'auto' }}>
        <div className="properties__label">Font Weight</div>
        <Dropdown
          arr={[100, 300, 400, 500, 700, 900]}
          isOpen={fontWeightDropdownOpen}
          setIsOpen={setFontWeightDropdownOpen}
          config={{
          title: fontWeight ? fontWeight : 'Select Font Weight',
            searchable: false,
            windowing: false,
            itemConfig: {
              action: (val) => {
                setFontWeight(val)
                addFont({ font: fontFamily, weights: [val] })
              }
            }
          }}
        />
      </div>
      

      {/* <div className="properties__section" style={{ marginTop: fontFamilyDropdownOpen ? '10rem' : 'auto' }}>
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
      </div> */}
    </div>
  );
};

export default BasicProperties;
