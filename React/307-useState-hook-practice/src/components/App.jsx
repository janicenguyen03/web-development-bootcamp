import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  const [current, setTime] = useState(time);
  
  function getTime() {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }
  
  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{current}</h1>
      <button >Get Time</button>
    </div>
  );
}

export default App;
