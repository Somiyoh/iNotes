import noteContext from '../context/notes/noteContext'
import React, {useContext} from 'react'
import Noteitem from './Noteitem'


// flow of the notes
// NoteState (Provides notes via Context)
//     ↓
// Notes (Consumes Context and passes notes to Noteitem)
//     ↓
// Noteitem (Receives each note as a prop and displays it)

const Notes = () => {
  const context = useContext(noteContext)
  const { notes, setNotes } = context
  return (
    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return <Noteitem note = {note}/>
      })}
    </div>
  )
}

export default Notes
