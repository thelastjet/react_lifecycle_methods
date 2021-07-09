import React from "react";

function App () {

  const [text, setText] = React.useState("Welcome to React!");
  const [hasLoaded, setHasLoaded] = React.useState(false);

  function handleInput (e) {
    console.log("Changing State - text");
    setText(e.target.value)
  }

  function handleClick () {
    console.log("Changing State - hasLoaded");
    setHasLoaded(hasLoaded ? false : true);
  }
  
  React.useEffect(() => {
    console.log("App - Effect Hook");
    setHasLoaded(true);
    return function cleanup() {
      console.log("App - Cleanup");
    };
  }, []);

  if (hasLoaded) {
    return (
      <div>
        <h1>{text}</h1>
        <hr />
        <input 
          type="text" 
          placeholder="Enter some text here!" 
          onChange={handleInput} />    
        <br />
        <br />
        <button onClick={handleClick}>Unload</button>
      </div>
    )
  } else {
    return (
      <div>
        <h1>...loading</h1>
        <br />
        <button onClick={handleClick}>Load</button>
      </div>
    )
  }
}

export default App;
