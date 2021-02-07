import React, { Fragment } from 'react';
import './calculator.scss';
import Input from './input';
import Expressions from './expressions';



class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      expression: 0
    };
    this.stack = [];
    this.pointer = 0;
    this.mappings = {
      "+": true,
      "/": true,
      "-": true,
      "*": true,
      "=": true,
      "clear": true
    };
    this.operand = "";
  }

  onChangeHandler = (value) => {
    let expression = value;
    if (this.state.expression) {
      expression = this.state.expression + value;
    }

    // Operator match.
    if (this.mappings[value] && value != "clear") {
      this.stack[this.pointer] = parseInt(this.operand);
      this.operand = "";
      this.pointer++;

      // Do the math of the intermediate.
      if (this.pointer > 2) {
        let result = null;
        if (this.stack[1] == "+") {
          result = this.stack[0] + this.stack[2];
        } else if (this.stack[1] == "-") {
          result = this.stack[0] - this.stack[2];
        } else if (this.stack[1] == "/") {
          result = this.stack[0] / this.stack[2];
        } else if (this.stack[1] == "*") {
          result = this.stack[0] * this.stack[2];
        }
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
    } else if (value == "clear") {
      this.stack = [];
      this.pointer = 0;
      this.operand = "";
      this.setState({result: 0, expression: 0});
    } else if (value >= 0 && value <= 9) {
      // Allow only numbers in case of non arithmetic operators.
      this.operand += value;
      this.setState({expression: expression, result: this.operand});
    }
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
          <Expressions onClick={this.onChangeHandler}/>
        </div>
      </div>
    );
  }

}



export default Calculator;
