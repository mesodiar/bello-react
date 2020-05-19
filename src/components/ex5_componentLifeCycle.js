import React, { Component } from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { data: 0 };
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ data: this.state.data + 1 })}>
          Increment
        </button>
        <Content myNumber={this.state.data} />
      </div>
    );
  }
}

class Content extends React.Component {
  componentWillMount() {
    console.log("Compoentn WILL MOUNT");
  }
  componentDidMount() {
    console.log("Component DID MOUNT");
  }
  componentWillRecieveProps(newProps) {
    console.log("Component WILL RECEIVE PROPS");
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("Compoennt WILL Update");
  }
  componentDidUpdate(prepProps, prevState) {
    console.log("Compoennt DID UPDATE");
  }

  render() {
    return <h1>{this.props.myNumber}</h1>;
  }
}
