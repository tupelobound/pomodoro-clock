import { React, useContext } from 'react'
import { DataContext } from './context/DataContext'

// Functional component for the cancel button
const CancelButton = () => {
  const {
    setBreakLength,
    setSessionLength,
    setTimerMinutes,
    setTimerSeconds,
    setColor,
    setTimerMode,
    setTotalSeconds,
    setStatus,
    setIcon
  } = useContext(DataContext)

  // Declare function for returning state to initial values
  const cancel = () => {
    document.getElementById('beep').pause() // Stop alarm
    document.getElementById('beep').currentTime = 0 // Reset alarm
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

  // return JSX component
  return (
    <>
      <i id="reset" className="fas fa-sync-alt fa-3x" onClick={cancel} />
    </>
  )
}

export default CancelButton
