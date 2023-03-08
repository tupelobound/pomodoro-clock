import './App.css'
import { React, useState } from 'react'
import LengthSetter from './LengthSetter'
import Timer from './Timer'
import CancelButton from './CancelButton'
import PlayButton from './PlayButton'

function App () {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timerMinutes, setTimerMinutes] = useState(25)
  const [timerSeconds, setTimerSeconds] = useState('00')
  const [timerMode, setTimerMode] = useState('Session')
  const [color, setColor] = useState('white')
  const [status, setStatus] = useState('initialised')
  const [icon, setIcon] = useState('fas fa-play fa-3x')
  const [totalSeconds, setTotalSeconds] = useState(1500)

  return (
    <div id='main'>
      <h1>Pomodoro Clock</h1>
      <LengthSetter
        name={'break'}
        length={breakLength}
        setLength={setBreakLength}
        status={status}
      />
      <LengthSetter
        name={'session'}
        length={sessionLength}
        setLength={setSessionLength}
        setTimerMinutes={setTimerMinutes}
        status={status}
      />
      <Timer
        color={color}
        timerMode={timerMode}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      <PlayButton
        status={status}
        setStatus={setStatus}
        icon={icon}
        setIcon={setIcon}
        totalSeconds={totalSeconds}
        setTotalSeconds={setTotalSeconds}
      />
      <CancelButton
        setBreakLength={setBreakLength}
        setSessionLength={setSessionLength}
        setTimerMinutes={setTimerMinutes}
        setTimerSeconds={setTimerSeconds}
        setColor={setColor}
        setTimerMode={setTimerMode}
        setTotalSeconds={setTotalSeconds}
        setStatus={setStatus}
      />

    </div>
  )
}

export default App
