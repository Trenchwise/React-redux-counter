import React, { Component } from "react";
import { connect } from "react-redux";
import { INCREMENT } from "../store/types";
import { DECREMENT } from "../store/types";
import { RESET } from "../store/types";
import { INCREMENT_BY_VALUE } from "../store/types";

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

  add_Ten = () => {
    this.props.dispatch({ type: INCREMENT_BY_VALUE, payload: 10 });
  };

  render() {
    return (
      <>
        {/* <h1>The count is {count}</h1> */}
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.add_Ten}>Add 10</button>
      </>
    );
  }
}

export default connect()(Controls);
