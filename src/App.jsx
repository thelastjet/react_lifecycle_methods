import React, { Component } from "react";
import Box from "./components/Box";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React Exercise</h1>
      </main>
    );
  }
}

export default App;
