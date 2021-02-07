import React, { Fragment } from 'react';

class Expressions extends React.Component {

  constructor(props) {
    super(props);
    this.operations = null;
  }

  clickHandler = (e) => {
    if (this.props.onClick) {
      this.props.onClick(e.target.attributes.value.value);
    }
  }

  componentDidMount = () => {
    this.operations.addEventListener("click", this.clickHandler);
  }

  componentWillUnmount = () => {
    this.operations.removeEventListener("click", this.clickHandler);
  }

  render() {

    return (
      <Fragment>
      <div className="operations" ref={el => { this.operations = el }}>

        <div className="row">
          <div className="action-item" value="1"> 1 </div>
          <div className="action-item" value="2"> 2 </div>
          <div className="action-item" value="3"> 3 </div>
          {
            (this.props.mode == "normal") ? (
              <div className="action-item" value="+"> Add (+) </div>
            ): (
              <div className="action-item" value="flip"> Sign (+/-) </div>
            )
          }
        </div>

        <div className="row">
          <div className="action-item" value="4"> 4 </div>
          <div className="action-item" value="5"> 5 </div>
          <div className="action-item" value="6"> 6 </div>
          {
            (this.props.mode == "normal") ? (
              <div className="action-item" value="-"> Subtract (-) </div>
            ): (
              <div className="action-item" value="square"> Square </div>
            )
          }
        </div>

        <div className="row">
          <div className="action-item" value="7"> 7 </div>
          <div className="action-item" value="8"> 8 </div>
          <div className="action-item" value="9"> 9 </div>
          {
            (this.props.mode == "normal") ? (
              <div className="action-item" value="*"> Multiply (*) </div>
            ): (
              <div className="action-item" value="square_root"> Square root </div>
            )
          }
        </div>

        <div className="row">
          <div className="action-item" value="clear"> Clear </div>
          <div className="action-item" value="0"> 0 </div>
          <div className="action-item" value="="> = </div>
          {
            (this.props.mode == "normal") ? (
              <div className="action-item" value="/"> Divide (/) </div>
            ): (
              null
            )
          }
        </div>

      </div>
      </Fragment>
    );

  }


}

export default Expressions;
