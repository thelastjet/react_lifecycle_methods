import * as React from "react";

const Navbar = (props) => {
  console.log("Navbar - Rendered");
  return (
    <nav
      style={{
        backgroundColor: "#0094C8",
        color: "#eee",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>React Lifecycle Methods</h2>
      <span>{props.today.toLocaleDateString()}</span>
    </nav>
  );
};

export default Navbar;
