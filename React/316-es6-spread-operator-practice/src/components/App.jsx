import React, { useState } from "react";

function App() {
  const [toDoItems, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  function handleChange(event) {
    setNewItem(event.target.value);
  }

  function handleClick(event) {
    setItems((prevValue) => {
      return [...prevValue, newItem];
    });
    setNewItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={newItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
