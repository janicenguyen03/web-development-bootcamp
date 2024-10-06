import React from "react";
import contacts from "../contacts.js"
import Card from "./Card.jsx";
import Avatar from "./Avatar.jsx";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="" />
      <Card name={contacts[0].name} 
        img={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card name={contacts[1].name} 
        img={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card name={contacts[2].name} 
        img={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
