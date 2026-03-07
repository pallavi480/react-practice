import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteItem from "./NoteItem";

function NoteList () {
    const { notes} = useContext(NotesContext)
    return (
        <div>
            {notes.map((note) => (
                <NoteItem key={note.id} note={note} />
            ))}
        </div>
    )
}

export default NoteList;