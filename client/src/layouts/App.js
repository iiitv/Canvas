import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import '../scss/main.scss';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      elements: [],
      modalOpen: false,
      selected: null,
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
    console.log('done');
    // newArray.splice(index, 1);
    // newArray.push({ id, element });
    // this.setState({
    //   elements: newArray,
    // });
    // console.log(this.state.elements);
  };

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

  render() {
    return (
      <BrowserRouter>
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
