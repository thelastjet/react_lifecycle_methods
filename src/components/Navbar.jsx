import * as React from "react";

const Navbar = (props) => {
  console.log("Navbar - Rendered");
  return (
    <nav style={{ backgroundColor: "#0094C8", color: "#eee", padding: "1rem" }}>
      <span>React Lifecycle Methods</span>
    </nav>
  );
};

export default Navbar;
