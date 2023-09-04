import React from "react";

function Note(props) {
    function handleDelete(e){
        props.del(e.target.parentElement.id)
    }
  return (
    <div >
      <div id={props.id} className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleDelete}>Del</button>
      </div>
    </div>
  );
}

export default Note;
