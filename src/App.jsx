import React from 'react'
import Dock from './components/Dock'
import Nav from './components/Nav'
import MacWindow from './components/MacWindow'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <MacWindow />
    </main>
  )
}

export default App
