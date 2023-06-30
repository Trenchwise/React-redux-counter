import React, { Component } from "react";
import { connect } from "react-redux"; // connects to the store
import Controls from "./components/Controls";

class App extends Component {
  render() {
    const { count, name } = this.props;
    return (
      <>
        <h1>
          {name} {count}
        </h1>
        <Controls />
      </>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count, name: state.name };
}
// Lets component interact with redux
export default connect(mapStateToProps)(App);
