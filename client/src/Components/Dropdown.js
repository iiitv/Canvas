import React, { useState, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';
import Sifter from 'sifter'
import ThrottledInput from 'react-input-box-done-typing'

const Dropdown = ({ arr, config, isOpen, setIsOpen }) => {
  
  const { title, searchable, windowing, itemConfig, searchPlaceholder } = config;
  const { height, width, size } = itemConfig;
  const [current, setCurrent] = useState(arr);
  const [query, setQuery] = useState('');
  const [value, setValue] = useState('');
  const [length, setLength] = useState(arr.length)

  const handleSearch = () => {
    if (query === '') {
      setCurrent(arr);
      setLength(arr.length)
      return
    }
    let sifter = new Sifter([...arr.map(el => {return {name: el}})])
    let res = sifter.search(query, {fields: ['name']})
    
    let newArray = [...res.items.map(obj => {
      return arr[obj.id] 
    })]
    setCurrent(newArray)
    setLength(newArray.length)
  } 

  useEffect(() => {
    if (!isOpen) setCurrent(arr)
      setLength(arr.length)
      setQuery('')
    }, [isOpen])

    useEffect(() => {
      handleSearch()
    }, [query])

  return (
    <div className="properties__dropdown-wrapper">

    {!isOpen && 
      <button className="properties__dropdown-trigger" onClick={() => setIsOpen(true)}>{ value ? value : title }</button>}

      <div id="properties-dropdown" className={`properties__dropdown ${isOpen ? 'properties__dropdown--open' : ''}`}>
        {searchable && (
          <>
          <div className="properties__dropdown__searchbar" style={{ maxWidth: itemConfig.width, maxHeight: itemConfig.height }}>
            <ThrottledInput placeholder={searchPlaceholder} doneTyping={(e) => setQuery(e)} type="text"/>
          </div>
          <div className="properties__dropdown__searchbar__divider"></div>
          </>
        )}
        {windowing ? current[0] ? (
          <List
          className="properties-dropdown-list"
          height={height}
          width={width}
          itemSize={size}
          itemCount={length}
          >
            {({ index, style }) => (

              <div style={style} key={index} className="properties__dropdown__item" onClick={() => {
                itemConfig.action(current[index]);
                setIsOpen(false)
                setValue(current[index])
                setQuery('')
              }}>
              {current[index]}
              </div>
              )
            }
          </List>
        ) : (
          <div className="properties__dropdown__item properties__dropdown__item--disabled">
            Oops! No Fonts were found.<br />
            Please try searching another font.
          </div>
        ) : null
        }

        {!windowing ? current.map((cur, index) => (
          <div key={index} className="properties__dropdown__item" onClick={() => {
            itemConfig.action(cur);
            setIsOpen(false)
            setValue(cur);
            setQuery('')
          }}>
          {cur}
          </div>
        )) : null
        
        }

      </div>
    </div>
  )
}

export default Dropdown;