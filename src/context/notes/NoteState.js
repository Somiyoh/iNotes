import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
  const s1 = {
    name: 'Somiyo',
    class: '5b',
  }
  const [state, setState] = useState(s1)
  const update = () => {
    setTimeout(() => {
        setState({
            name: 'Sajjan',
            class: '5c',
          })
    }, 2000)
  }
   return (
    <NoteContext.Provider value={{state, update}}>{props.children}</NoteContext.Provider>
  )
}

export default NoteState
