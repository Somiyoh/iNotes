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

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState
