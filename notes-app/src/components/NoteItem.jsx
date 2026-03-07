import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

function NoteItem({ note }) {

    const { deleteNote } = useContext(NotesContext)

    return (
        <div>
            <p>{note.text}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
    )
}

export default NoteItem;