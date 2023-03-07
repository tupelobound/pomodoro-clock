import './App.css'
import { React, useState } from 'react'
import LengthSetter from './LengthSetter'
import Timer from './Timer'
import CancelButton from './CancelButton'
import PlayButton from './PlayButton'

function App () {
  // set initial states
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timerMinutes, setTimerMinutes] = useState(25)
  const [timerSeconds, setTimerSeconds] = useState('00')
  const [color, setColor] = useState('white')
  const [timerMode, setTimerMode] = useState('Session')

  return (
    <div id='main'>
      <h1>Pomodoro Clock</h1>
      <LengthSetter
        name="break"
        length={breakLength}
        setLength={setBreakLength}
      />
      <LengthSetter
        name="session"
        length={sessionLength}
        setLength={setSessionLength}
        setTimerMinutes={setTimerMinutes}
      />
      <Timer
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
        color={color}
        timerMode={timerMode}
      />
      <PlayButton />
      <CancelButton
        setBreakLength={setBreakLength}
        setSessionLength={setSessionLength}
        setTimerMinutes={setTimerMinutes}
        setTimerSeconds={setTimerSeconds}
        setColor={setColor}
        setTimerMode={setTimerMode}
      />
    </div>
  )
}

export default App
