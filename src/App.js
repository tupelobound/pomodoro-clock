import './App.css'
import { React, useState } from 'react'
import LengthSetter from './LengthSetter'

function App () {
  // set initial states
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)

  return (
    <div id='main'>
      <h1>Pomodoro Clock</h1>
      <LengthSetter name="break" length={breakLength} setLength ={setBreakLength} />
      <LengthSetter name="session" length={sessionLength} setLength={setSessionLength} />
    </div>
  )
}

export default App
