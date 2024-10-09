import noteContext from '../context/notes/noteContext'
import React, { useContext, useEffect } from 'react'
import Noteitem from './Noteitem'
import AddNote from './AddNote'

// flow of the notes
// NoteState (Provides notes via Context)
//     ↓
// Notes (Consumes Context and passes notes to Noteitem)
//     ↓
// Noteitem (Receives each note as a prop and displays it)

const Notes = () => {
  const context = useContext(noteContext)
  const { notes, getNotes } = context

  useEffect(() => {
    getNotes()  
  }, [])
  
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes
