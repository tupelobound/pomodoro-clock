import './App.css'
import Break from './Break'
import Session from './Session'
import Timer from './Timer'
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

  const handleClick = (e) => {
    console.log(e)
  }

  const handleArrows = (e) => {
    let key
    let value
    if (e.target.id.search('break') === -1) {
      key = 'sessionLength'
    } else {
      key = 'breakLength'
    }
    if (e.target.id.search('increment') === -1) {
      if (state[key] > 1) {
        value = state[key] - 1
      } else {
        value = state[key]
      }
    } else {
      if (state[key] < 60) {
        value = state[key] + 1
      } else {
        value = state[key]
      }
    }
    setState({
      ...state,
      [key]: value
    })
  }
  
  return (
    <div id="main">
      <h1>Pomodoro Clock</h1>
      <Break
        length={state.breakLength}
        click={handleArrows}
      />
      <Session
        length={state.sessionLength}
        click={handleArrows}
      />
      <Timer
        minutes={state.timerMinutes}
        seconds={state.timerSeconds}
        playPause={handleClick}
        cancel={handleClick}
        color={state.color}
        mode={state.timerMode}
      />
      <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
    </div>
  )
}

export default App
