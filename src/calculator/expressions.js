import React from 'react';

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
      <div className="operations" ref={el => { this.operations = el }}>

        <div className="row">
          <div className="action-item" value="1"> 1 </div>
          <div className="action-item" value="2"> 2 </div>
          <div className="action-item" value="3"> 3 </div>
          <div className="action-item" value="+"> Add (+) </div>
        </div>

        <div className="row">
          <div className="action-item" value="4"> 4 </div>
          <div className="action-item" value="5"> 5 </div>
          <div className="action-item" value="6"> 6 </div>
          <div className="action-item" value="-"> Subtract (-) </div>
        </div>

        <div className="row">
          <div className="action-item" value="7"> 7 </div>
          <div className="action-item" value="8"> 8 </div>
          <div className="action-item" value="9"> 9 </div>
          <div className="action-item" value="*"> Multiply (*) </div>
        </div>

        <div className="row">
          <div className="action-item" value="clear"> Clear </div>
          <div className="action-item" value="0"> 0 </div>
          <div className="action-item" value="="> = </div>
          <div className="action-item" value="/"> Divide (/) </div>
        </div>

      </div>
    );

  }


}

export default Expressions;
