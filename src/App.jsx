import React, { useState } from 'react'
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note.jsx'
import Resume from './components/windows/Resume.jsx'
import Spotify from './components/windows/Spotify.jsx'
import Cli from './components/windows/Cli.jsx'

const App = () => {

  const [windowState, setwindowState] = useState({
    github:false,
    note:false,
    resume:false,
    spotify:false,
    cli:false,
  })
  return (
    <main>
      <Nav />
      <Dock setWindowState={setwindowState}/>
      {windowState.github&&<Github windowName="github" setWindowState={setwindowState} />}
      {windowState.note&&<Note windowName="note" setWindowState={setwindowState} />}
      {windowState.resume&&<Resume windowName="resume" setWindowState={setwindowState} />}
      {windowState.spotify&&<Spotify windowName="spotify" setWindowState={setwindowState} />}
      {windowState.cli&&<Cli windowName="cli" setWindowState={setwindowState} />}
    </main>
  )
}

export default App
