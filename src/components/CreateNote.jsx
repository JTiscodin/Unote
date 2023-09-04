import React, { useState } from "react";
// import ReactDOM from "react-dom"

function CreateNote(props) {
  const [note, setNote] = useState({
    heading: "",
    content: "",
  });
  let {heading, content} = note
  
  function handleChange(e) {
  const { name, value } = e.target;

  // Check the name attribute to determine which field is being updated
  if (name === "Title") {
    setNote((prevNote) => ({
      ...prevNote,
      heading: value,
    }));
  } else if (name === "Content") {
    setNote((prevNote) => ({
      ...prevNote,
      content: value,
    }));
  }
}

  function handleSubmit(e) {
    e.preventDefault();
    if(heading.length || content.length!==0){
        props.send(heading, content)
    }
    
    setNote({heading: "", content: ""})
    }
  return (
    <div className="center">
      <div className="notes-maker">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="Title"
            value={heading}
            onChange={handleChange}
            placeholder="Note"
          />
          <textarea
            value={content}
            onChange={handleChange}
            name="Content"
            cols="30"
            rows="10"
            placeholder="About"
          ></textarea>
          <button type="submit" className="add">
            +
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;


