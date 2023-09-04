import React, { useState } from "react";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Note from "./components/Note";
import { v4 as uuid } from "uuid";
function App() {
  
  const [Notes, setNotes] = useState([]);
  function handleDel(id){
    const damn = Notes.filter((each) => {
        return each.key!==id
    })
    setNotes(damn)
  }
  function makeNewNote(heading, content) {
    const note = {
      key: uuid(),
      heading: heading,
      content: content,
    };
    setNotes((prev) => {
      return [...prev, note];
    });
  }
  return (
    <div>
      <Header />
      <CreateNote send={makeNewNote} />
      <div className="notes">
        {Notes.map((each) => {
          return (
            <Note
              key={each.key}
              id={each.key}
              title={each.heading}
              del = {handleDel}
              content={each.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
