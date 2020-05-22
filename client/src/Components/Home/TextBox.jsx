import React, { Component } from "react";
class TextBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             hover: ''
        }
    }

  dragover = (e) => {
    e.stopPropagation();
  };
  dragStart = (e) => {
    const target = e.target;
    target.classList.add("drag");
    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
  

  getInputStyles = () => {
    const element = this.props.styles;
    const style = {};
   // element[backgroundColor] =  this.state.hover ? 'grey': this.props.backgroundColor;
    const properties = [
      "position",
      "backgroundColor",
      "margin",
      "boxSizing",  
      "borderRadius",
      "height",
      "padding",
      "width",
      "border",
      "outline",
      "transition"
    ];
   for (const property of properties) {
      style[property] = element[property];
    }
    style['backgroundColor'] =  this.state.hover ? 'grey': element['backgroundColor'];
    return style;
  };

  handleContextMenu = (e) => {
    e.preventDefault();
    const { toggle, styles } = this.props;
    toggle(styles.aid);
  };

  handleMouseIn() {
    this.setState({ hover: true })
  }
  
  handleMouseOut() {
    this.setState({ hover: false })
  }

//   hoverStyle = {
//     backgroundColor: this.state.hover ? 'grey' : ''
//   }  
  
  
  render() {
    return (
   
        
         
         
          <input 
          
                type="text"
                value = {this.state.username}
                style={this.getInputStyles()}
                draggable={true}
                placeholder={"type your text here"}
                onChange={this.myChangeHandler}
                className="textbox"
                onDragStart={this.dragStart}
                onDragOver={this.dragover}
                id={this.props.styles.aid}
                onContextMenu={this.handleContextMenu}
              />     
        
        
    );
  }

}

export default TextBox;