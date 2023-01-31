import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './views/Home/Home'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Home/>
    </div>
  )
}

export default App
