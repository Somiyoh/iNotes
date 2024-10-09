import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: '6700857233d7e13f645cac3ed',
      user: '670084b133d7e3f645cac3da',
      title: 'My title',
      description: 'finish the react app course',
      tag: 'personal',
      date: '2024-10-05T00:16:50.852Z',
      __v: 0,
    },
    {
      _id: '6700857233d27e3f645cac3ed',
      user: '670084b133d7e3f645cac3da',
      title: 'My title',
      description: 'finish the react app course',
      tag: 'personal',
      date: '2024-10-05T00:16:50.852Z',
      __v: 0,
    },
    {
      _id: '67008573233d7e3f645cac3ed',
      user: '670084b133d7e3f645cac3da',
      title: 'My title',
      description: 'finish the react app course',
      tag: 'personal',
      date: '2024-10-05T00:16:50.852Z',
      __v: 0,
    },
    {
      _id: '67008574233d7e3f645cac3ed',
      user: '670084b133d7e3f645cac3da',
      title: 'My title',
      description: 'finish the react app course',
      tag: 'personal',
      date: '2024-10-05T00:16:50.852Z',
      __v: 0,
    },
    {
      _id: '67008557233d7e3f645cac3ed',
      user: '670084b133d7e3f645cac3da',
      title: 'My title',
      description: 'finish the react app course',
      tag: 'personal',
      date: '2024-10-05T00:16:50.852Z',
      __v: 0,
    },
    {
      _id: '67060857233d7e3f645cac3ed',
      user: '670084b133d7e3f645cac3da',
      title: 'My title',
      description: 'finish the react app course',
      tag: 'personal',
      date: '2024-10-05T00:16:50.852Z',
      __v: 0,
    },
  ]

  const [notes, setNotes] = useState(notesInitial)

  // add a note
  const addNote = (title, description, tag) => {
    // to do api call
    const note = {
      _id: '67060857233d7e3f645cac3ed',
      user: '670084b133d7e3f645cac3da',
      title: title,
      description: description,
      tag: tag,
      date: '2024-10-05T00:16:50.852Z',
      __v: 0,
    }
    setNotes(notes.concat(note))
  }

  // delete a note
  const deleteNote = (id) => {
    // to do api call
   const newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes)
  }

  // edit a note
  const editNote = (id, title, description, editNote) => {}

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
