/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, React } from 'react'

export const DataContext = createContext({})

export const DataProvider = ({ children }) => {
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

  return (
        <DataContext.Provider value={{
          breakLength,
          setBreakLength,
          sessionLength,
          setSessionLength,
          timerMinutes,
          setTimerMinutes,
          timerSeconds,
          setTimerSeconds,
          timerMode,
          setTimerMode,
          color,
          setColor,
          status,
          setStatus,
          icon,
          setIcon,
          totalSeconds,
          setTotalSeconds
        }}>
        {children}
        </DataContext.Provider>
  )
}
