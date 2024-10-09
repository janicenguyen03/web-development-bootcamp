import React, { useState } from "react";

function App() {
  const [isHovered, setIsHovered] = useState(false);

  const [headingText, setHeadingText] = useState("Hello");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function mouseOver() {
    setIsHovered(true);
  }

  function mouseOut() {
    setIsHovered(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        style={{ backgroundColor: isHovered ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
