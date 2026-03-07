import { useRef, useContext } from "react";
import { NotesContext } from "../context/NotesContext";

function NoteForm() {

    const inputRef = useRef();
    const {addNote} = useContext(NotesContext)

    const handleAdd = () =>{
        const text = inputRef.current.value;
        if (text.trim()) return

        addNote(text);
        inputRef.current.value = "";
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter note..." />
            <button onClick={handleAdd}>Add Note</button>
        </div>
    )
}

export default NoteForm;