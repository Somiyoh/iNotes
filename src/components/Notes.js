import noteContext from '../context/notes/noteContext'
import React, { useContext, useEffect, useRef, useState } from 'react'
import Noteitem from './Noteitem'
import AddNote from './AddNote'

// flow of the notes
// NoteState (Provides notes via Context)
//     ↓
// Notes (Consumes Context and passes notes to Noteitem)
//     ↓
// Noteitem (Receives each note as a prop and displays it)

const Notes = (props) => {
  const context = useContext(noteContext)
  const { notes, getNotes, editNote } = context
  const ref = useRef(null)

  const [note, setNote] = useState({
    id: '',
    etitle: '',
    edescription: '',
    etag: '',
  })

  useEffect(() => {
    getNotes()
    // eslint-disable-next-line
  }, [])

  const updateNote = (currenNote) => {
    ref.current.click()
    setNote({
      id: currenNote._id,
      etitle: currenNote.title,
      edescription: currenNote.description,
      etag: currenNote.tag,
    })
  }

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag)
    props.showAlert("Updated Succesfully", "success");
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote showAlert={props.showAlert}/>
      {/* modal starts here */}
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    value={note.etitle}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
                data-bs-dismiss="modal"
                disabled={note.etitle.length < 5 || note.edescription.length < 5}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        <div className="container mx-1">
          {notes.length === 0 && 'No notes to be displayed. Please add a note.'}
        </div>
        {notes.map((note) => {
          return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
        })}
      </div>
    </>
  )
}

export default Notes
