import React, { Fragment } from 'react';
import './calculator.scss';
import Input from './input';
import Expressions from './expressions';



class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      mode: 0,
      expression: 0
    };
    this.stack = [];
    this.pointer = 0;
    this.operand = "";
  }

  onChangeHandler = (value) => {
    let expression = value;
    if (this.state.expression) {
      expression = this.state.expression + value;
    }

    if (value == "clear") {
      this.stack = [];
      this.pointer = 0;
      this.operand = "";
      this.setState({result: 0, expression: 0});
    } else if (value == "+" || value == "/" || value == "*" || value == "=" || value == "-") {
      // Operator match from normal mode
      this.stack[this.pointer] = this.operand;
      this.operand = "";
      this.pointer++;

      // Do the math of the intermediate.
      if (this.pointer > 2) {
        let result = eval(this.stack[0] + this.stack[1] + this.stack[2]);
        this.stack[0] = result;
        this.stack[1] = value;
        this.pointer = 2;
        this.setState({result: result, expression: expression});
      } else {
        // Store the operator.
        this.stack[this.pointer] = value;
        this.pointer++;
        this.setState({expression: expression});
      }
    } else if (value == "flip") {
      this.operand = -(this.operand);
      this.setState({result: this.operand});
    } else if (value == "square") {
      this.operand = this.operand * this.operand;
      this.setState({result: parseInt(this.operand)});
    } else if (value == "square_root") {
      this.operand = Math.sqrt(Math.abs(this.operand));
      this.setState({result: this.operand});
    } else if (value >= 0 && value <= 9) {
      // Allow only numbers in case of non arithmetic operators.
      this.operand += value;
      this.setState({expression: expression, result: this.operand});
    }
  }

  toggleMode = () => {
    // Clear all.
    this.operand = "";
    this.stack = [];
    this.pointer = 0;
    this.setState({mode: !this.state.mode, result: 0, expression: 0});
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <Input
            key={1}
            onChange={this.onChangeHandler}
            value={this.state.expression}
            placeholder={(this.state.expression == "0") ? "0": undefined}
          />
          <Input key={2} readOnly={true} value={this.state.result}/>
          <Expressions mode={(this.state.mode) ? "scientific" : "normal"} onClick={this.onChangeHandler}/>
          <button className="btn-mode-selector" onClick={() => this.toggleMode()}> {(this.state.mode == 0) ? "Scientific": "Normal"} </button>
        </div>
      </div>
    );
  }

}



export default Calculator;
