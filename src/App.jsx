import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Welcome to React!",
      hasLoaded: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    // console.log(e.target.value);
    this.setState({
      text: e.target.value,
    });
  }

  handleClick() {
    this.setState({
      hasLoaded: true,
    });
  }

  componentDidMount() {
    console.log("App - Mount");
    this.setState({
      hasLoaded: true,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App - Update (prevProps)", prevProps);
    console.log("App - Update (prevState)", prevState);
  }

  componentWillUnmount() {
    console.log("App - Unmount");
  }

  render() {
    if (this.state.hasLoaded) {
      console.log("App - Render (has Loaded)");
      return (
        <div>
          <div>
            <input
              placeholder={this.state.text}
              onChange={this.handleInput}
            ></input>
          </div>
          <div>
            <button onClick={this.handleClick}>Advance</button>
          </div>
          <div>
            <hr></hr>
            <h1>
              {this.props.value} {this.state.text}
            </h1>
          </div>
        </div>
      );
    } else {
      console.log("App - Render (has not loaded)");
      return (
        <div>
          <h1>Loading...</h1>
          <button onClick={this.handleClick}>Load Page</button>
        </div>
      );
    }
  }
}

export default App;
