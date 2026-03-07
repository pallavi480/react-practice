import React, { useState } from "react";

function NoteItem({ note, deleteNote, editNote }) {

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(note.text);

  const handleSave = () => {
    editNote(note.id, newText);
    setIsEditing(false);
  };

  return (
    <div>

      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />

          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{note.text}</p>

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button onClick={() => deleteNote(note.id)}>
            Delete
          </button>
        </>
      )}

    </div>
  );
}

export default NoteItem;