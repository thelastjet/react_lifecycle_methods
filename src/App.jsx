import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    //initialize state
    this.state = { text: "Let's practice React!", hasLoaded: false }; 
    //bind methods to this
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput (e) {
    this.setState({ text: e.target.value })
  }

  handleClick () {
    this.setState({ hasLoaded: !this.state.hasLoaded })
  }
  //sets hasLoaded to true so I get my first return in render()
  componentDidMount () {
    this.setState({ hasLoaded: true })
  }

  render() {
    if (this.state.hasLoaded) {
      return (
        <div>
          <h1>{this.state.text}</h1>
          <hr />
          <input 
            type="text" 
            placeholder="Enter some text here!" 
            onChange={this.handleInput} />    
          <br />
          <br />
          <button onClick={this.handleClick}>Unload</button>
        </div>
      ) 
    } else {
      return (
            <div>
              <h1>...loading</h1>
              <br />
              <button onClick={this.handleClick}>Load</button>
            </div>
      )
    }
  }
}

export default App;
