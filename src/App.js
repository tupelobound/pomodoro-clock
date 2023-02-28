import './App.css'
import Break from './Break'
import { useState } from 'react'

function App() {
  // Set initial state
  const [state, setState]= useState({
    breakLength: 5,
    sessionLength: 25,
    timerTotalSeconds: 25 * 60,
    timerMinutes: 25,
    timerSeconds: "00",
    running: "initialized",
    color: "white",
    timerMode: "Session"
  })

  const handleClick = () => {
    console.log('Testing')
  }
  
  return (
    <div id="main">
      <h1>Pomodoro Clock</h1>
      <Break length={state.breakLength} click={handleClick} />
    </div>
  )
}

export default App
