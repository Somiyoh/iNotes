import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBars'
import Home from './components/Hoome'
import About from './components/About'
import NoteState from './context/notes/NoteState'

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <NavBar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  )
}

export default App
