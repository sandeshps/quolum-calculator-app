import React, { Fragment } from 'react';


class Input extends React.Component {

  constructor(props) {
    super(props);
  }

  onChangeHandler = (e) => {
    if (this.props.onChange) {
      this.props.onChange(e.key);
    }
  }

  render() {

    let attributes = {};
    if (this.props.readOnly) {
      attributes.value = this.props.value;
      attributes.readOnly = true;
    } else if (this.props.placeholder) {
      attributes.placeholder = this.props.placeholder;
      attributes.onKeyPress = this.onChangeHandler;
      if (this.input) {
        this.input.value = "";
      }
    } else if (!this.props.placeholder) {
      attributes.value = this.props.value;
      attributes.onKeyPress = this.onChangeHandler;
    }

    return (
      <input type="text" ref = {el => this.input = el} className="input-box" {...attributes} />
    );
  }

}



export default Input;
