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
    setState({
      ...state,
      breakLength: 34
    })
  }

  const decreaseBreak = () => {
    if (state.breakLength > 1) {
      setState({
        ...state,
        breakLength: state.breakLength - 1
      })
    }
  }

  const increaseBreak = () => {
    if (state.breakLength < 60) {
      setState({
        ...state,
        breakLength: state.breakLength + 1
      })
    }
  }
  
  return (
    <div id="main">
      <h1>Pomodoro Clock</h1>
      <Break
        length={state.breakLength}
        increase={increaseBreak}
        decrease={decreaseBreak}
      />
      <Session
        length={state.sessionLength}
        click={handleClick}
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
