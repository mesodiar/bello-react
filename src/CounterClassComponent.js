import React, { Component } from "react";

export default class CounterClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  //render will be called to update UI when anything changed
  render() {
    return (
      <div style={{ backgroundColor: "#D291BC" }}>
        <h2>Counter Class component</h2>
        <h2> Count : {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Add
        </button>
      </div>
    );
  }
}
