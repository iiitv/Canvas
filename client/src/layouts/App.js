import React, { Component, cloneElement } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import GoogleFontLoader from 'react-google-font-loader'
import axios from 'axios';
import Home from './Home';
import '../scss/main.scss';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      elements: [],
      modalOpen: false,
      selected: null,
      fonts:[
        
      ],
    };
  }

  addElement = el => {
    let newArray = [...this.state.elements, el];
    this.setState({
      elements: newArray,
    });
  };

  removeSelection = () => {
    this.setState({
      selected: null,
    });
  };

  updateElement = (id, element) => {
    let newArray = this.state.elements;
    let active = newArray.filter(cur => cur.id === id)[0];
    let index = newArray.indexOf(active);
    console.log(active);
    newArray.splice(index, 1, { id, element });
    this.setState({
      elements: newArray,
    });
  };

  updateAll = (values = {}) => {

    let newArray = this.state.elements;
    let updatedArray = [];
    newArray.forEach((obj) => {
      if (values && values !== {}) {
        let updatedElement = cloneElement(obj.element, {
          ...obj.element.props,
          ...values,
        });
        let updatedObj = { id: obj.id, element: updatedElement}
        updatedArray.push(updatedObj)
        console.log(newArray)
        console.log(updatedArray)
      }
    })


    this.setState({
      elements: updatedArray
    })
  }

  setSelected = id => {
    let tempArr = this.state.elements;
    let active = tempArr.filter(cur => cur.id === id)[0];
    console.log(active);
    let index = tempArr.indexOf(active);
    let element = tempArr[index];
    if (element) {
      this.setState({
        selected: element,
      });
      console.log(element);
    } else {
      console.log('not selecting');
    }

    if (document.querySelector('.show-context-menu-pure')) {
      document.querySelector('.show-context-menu-pure').remove();
      this.setModalOpen(false);
    }
  };

  removeElement = id => {
    let tempArr = this.state.elements;
    let toRemove = tempArr.filter(cur => cur.id === id)[0];
    let index = tempArr.indexOf(toRemove);
    console.log(index);
    tempArr.splice(index, 1);
    this.setState({
      elements: tempArr,
    });
    if (document.querySelector('.show-context-menu-pure')) {
      document.querySelector('.show-context-menu-pure').remove();
      this.setModalOpen(false);
    }
  };

  setModalOpen = value => {
    this.setState({
      modalOpen: value,
    });
  };

  getElementFromId = id => {
    let active = this.state.elements.filter(cur => cur.id === id)[0];
    return active;
  };

  

  addFont = (fontObject = null) => {
    if (fontObject) {
      this.setState({
        fonts: [...this.state.fonts, fontObject]
      })
    }
  }

  fontsList = []

  getFontsList = async () => {
    let url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAOUuDEvb_rK--gRqD09Vgx-1P507UX-QI&sort=alpha'
    let res = await axios.get(url)
    let fontsList = res.data.items.map(item => {
      return item.family
    })
    this.fontsList = fontsList;
  }

  render() {
    
    this.getFontsList()
    return (
      <BrowserRouter>
        <GoogleFontLoader fonts={this.state.fonts} />
        <Route
          to="/"
          render={() => (
            <Home
              elements={this.state.elements}
              addElement={this.addElement}
              removeElement={this.removeElement}
              setModalOpen={this.setModalOpen}
              setSelected={this.setSelected}
              selected={this.state.selected}
              removeSelection={this.removeSelection}
              updateElement={this.updateElement}
              getElementFromId={this.getElementFromId}
              updateAll={this.updateAll}
              addFont={this.addFont}
              fontsList={this.fontsList}
            />
          )}
        />
        {this.state.modalOpen ? (
          <div
            className="menu-close-modal"
            onClick={() => {
              document.querySelector('.show-context-menu-pure').remove();
              this.setModalOpen(false);
            }}
          ></div>
        ) : null}
      </BrowserRouter>
    );
  }
}

export default App;
