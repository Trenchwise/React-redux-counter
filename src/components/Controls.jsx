import React, { Component } from "react";
import { connect } from "react-redux";
import { INCREMENT } from "../store/types";
import { DECREMENT } from "../store/types";
import { RESET } from "../store/types";

class Controls extends Component {
  add = () => {
    this.props.dispatch({ type: INCREMENT }); // capitals
  };

  minus = () => {
    this.props.dispatch({ type: DECREMENT });
  };

  reset = () => {
    this.props.dispatch({ type: RESET });
  };

  render() {
    return (
      <>
        {/* <h1>The count is {count}</h1> */}
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.reset}>Reset</button>
      </>
    );
  }
}

export default connect()(Controls);
