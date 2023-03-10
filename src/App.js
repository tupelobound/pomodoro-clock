/* eslint-disable react/prop-types */
import { React, useState, useEffect } from 'react'

function App () {
  // Declare and set initial states of app
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timerMinutes, setTimerMinutes] = useState('25')
  const [timerSeconds, setTimerSeconds] = useState('00')
  const [timerMode, setTimerMode] = useState('Session')
  const [color, setColor] = useState('white')
  const [status, setStatus] = useState('paused')
  const [icon, setIcon] = useState('fas fa-play fa-3x')
  const [totalSeconds, setTotalSeconds] = useState(1500)

  // Declare function for changing status and play/pause button icon when pressed
  const playPause = (e) => {
    // Check status of app, if not 'running':
    if (status !== 'running') {
      setStatus('running') // set status to 'running'
      setIcon('fas fa-pause fa-3x') // change icon to 'pause'
    } else {
      setStatus('paused') // set status to 'paused'
      setIcon('fas fa-play fa-3x') // change icon to 'play'
    }
  }

  const toggleTimerMode = () => {
    setColor('white')
    if (timerMode === 'Session') { // Check timer mode and toggle states
      setTimerMode('Break')
      setTotalSeconds(breakLength * 60)
    } else {
      setTimerMode('Session')
      setTotalSeconds(sessionLength * 60)
    }
  }

  // useEffect hook for changing timer values and activating mode toggle, if necessary
  useEffect(() => {
    if (totalSeconds === -1) { // if timer has reached zero trigger the function to toggle timer mode
      toggleTimerMode()
    } else if (totalSeconds < 60) { // change color if only one minute remains
      setColor('red')
    } else {
      setColor('white')
    }
    // calculate minutes and seconds from total seconds remaining
    let minutes = (Math.floor(totalSeconds / 60)).toString()
    let seconds = (totalSeconds % 60).toString()
    // convert single digits into double digit strings
    if (seconds.length === 1) {
      seconds = '0' + seconds
    }
    if (minutes.length === 1) {
      minutes = '0' + minutes
    }
    // pass variables into state
    setTimerMinutes(minutes)
    setTimerSeconds(seconds)
  }, [totalSeconds])

  // useEffect hook for reducing totalSeconds by one, every second, upon change of status
  useEffect(() => {
    // check if status is 'running', if so:
    if (status === 'running') {
      const interval = setInterval(() => {
        setTotalSeconds(totalSeconds => totalSeconds - 1) // reduce totalSeconds by one
      }, 1000) // every second
      return () => clearInterval(interval) // clean up by clearing the interval
    }
  }, [status])

  // Declare function for returning state to initial values
  const cancel = () => {
    setBreakLength(5)
    setSessionLength(25)
    setTimerMinutes('25')
    setTimerSeconds('00')
    setColor('white')
    setTimerMode('Session')
    setTotalSeconds(1500)
    setStatus('initialised')
    setIcon('fas fa-play fa-3x')
  }

  // Functional component for setting the break or session length
  const LengthSetter = ({ name, length, setLength, setTimerMinutes }) => {
    // Declare function for handling clicks of the up/down arrows
    const handleClick = (e) => {
      // check status, only execute if the app isn't running
      if (status !== 'running') {
        // if the down arrow is pressed:
        if (e.target.id.search('increment') === -1) {
          if (name === 'session' && length > 1) {
            setTimerMinutes((length - 1).toString()) // if session is pressed reduce session length AND timer minutes
            setTotalSeconds((length - 1) * 60)
          }
          if (length > 1) setLength(length - 1) // only allow numbers to reduce to one
          // otherwise:
        } else {
          if (name === 'session' && length < 60) {
            setTimerMinutes((length + 1).toString()) // if session is pressed increase session length AND timer minutes
            setTotalSeconds((length + 1) * 60)
          }
          if (length < 60) setLength(length + 1) // only allow numbers to increase to sixty
        }
      }
    }

    // return JSX components
    return (
        <div className="length-adjust">
            <p id={`${name}-label`} className="label">{`${name.charAt(0).toUpperCase() + name.slice(1)} Length`}</p>
            <i id={`${name}-decrement`} className="fas fa-arrow-down fa-2x" onClick={handleClick} />
            <p id={`${name}-length`}>{length}</p>
            <i id={`${name}-increment`} className="fas fa-arrow-up fa-2x" onClick={handleClick} />
        </div>
    )
  }

  // Functional component for the timer
  const Timer = ({ color, timerMode, timerMinutes, timerSeconds }) => {
    // return JSX components
    return (
      <div id="timer">
       <p id="timer-label" className={color}>{timerMode}</p>
       <p id="time-left" className={color}>{timerMinutes}:{timerSeconds}</p>
      </div>
    )
  }

  // Functional component for the play/pause button
  const PlayButton = ({ icon }) => {
    // return JSX component
    return (
    <>
      <i id="start_stop" className={icon} onClick={playPause} />
    </>
    )
  }

  // Functional component for the cancel button
  const CancelButton = () => {
    // return JSX component
    return (
    <>
      <i id="reset" className="fas fa-sync-alt fa-3x" onClick={cancel} />
    </>
    )
  }

  // return app JSX components
  return (
    <div id='main'>
      <h1>Pomodoro Clock</h1>
      <LengthSetter
        name={'break'}
        length={breakLength}
        setLength={setBreakLength}
      />
      <LengthSetter
        name={'session'}
        length={sessionLength}
        setLength={setSessionLength}
        setTimerMinutes={setTimerMinutes}
      />
      <Timer
        color={color}
        timerMode={timerMode}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
      <PlayButton
        icon={icon}
      />
      <CancelButton />
    </div>
  )
}

export default App
