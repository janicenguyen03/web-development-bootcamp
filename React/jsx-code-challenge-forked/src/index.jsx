//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW IT);
ReactDOM.render(
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>My Quang</li>
      <li>Pho</li>
      <li>Cao Lau</li>
    </ul>
  </div>,
  document.getElementById("root")
);
