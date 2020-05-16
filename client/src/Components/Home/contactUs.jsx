import React, { Component } from "react";
class ContactUsForm extends Component {
  state = {};

  renderFormInput = (placeholder) => {
    return (
      <div className="form-items">
        <input type="text" placeholder={`${placeholder}`} />
      </div>
    );
  };

  dragover = (e) => {
    e.stopPropagation();
  };
  dragStart = (e) => {
    const target = e.target;
    target.classList.add("drag");
    console.log(target);
    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  renderFormTextArea = () => {
    return (
      <div className="form-items">
        <textarea
          className="text-area"
          id=""
          cols="40"
          rows="10"
          placeholder="your message"
        ></textarea>
      </div>
    );
  };
  render() {
    return (
      <div
        className="contact-us"
        draggable={true}
        onDragStart={this.dragStart}
        onDragOver={this.dragover}
        id={this.props.styles.aid}
      >
        <div className="title">
          <h1>Contact us</h1>
        </div>
        <div className="form">
          {this.renderFormInput("username")}
          {this.renderFormInput("your email id")}
          {this.renderFormTextArea()}
        </div>
        <button>submit</button>
      </div>
    );
  }
}

export default ContactUsForm;
