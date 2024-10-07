import React from "react";

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.

function Note(props) {
  console.log(props.title);
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
