import React from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { NotesContext } from "./context/NotesContext";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [notes, setNotes] = useLocalStorage("notes",[])

  const addNote = (text) =>{
    setNotes([...notes, {id: Date.now(), text}])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note)=> note.id !== id))
  }
  return (
    <NotesContext.Provider value = {{notes, addNote, deleteNote}}>
      <div>
        <h1>Notes App</h1>
        <NoteForm />
        <NoteList />
      </div>
    </NotesContext.Provider>

  )
}

export default App