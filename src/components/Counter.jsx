import * as React from "react";

class Counters extends React.Component {
  render() {
    console.log("Counters - Rendered");
    return (
      <div>
        <h3>Counters</h3>
      </div>
    );
  }
}

class Counter extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div>
        <h2>Counter</h2>
      </div>
    );
  }
}

export default Counter;
