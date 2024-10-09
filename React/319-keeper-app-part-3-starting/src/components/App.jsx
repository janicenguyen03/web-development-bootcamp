import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  function addNote(newNote) {
    setAllNotes(prevNotes => {
      return [ ...prevNotes, newNote ];
    });
  }

  function deleteNote(id) {
    setAllNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    })
  }
  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {allNotes.map((note, index) => {
        return <Note
          key={index}
          id={index}
          delete={deleteNote}
          title={note.title}
          content={note.content}
        />;
      })}
      <Footer />
    </div>
  );
}

export default App;
