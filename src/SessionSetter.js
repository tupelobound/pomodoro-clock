import { React, useContext } from 'react'
import { DataContext } from './context/DataContext'

// Functional component for setting the session length
const SessionSetter = () => {
  const { status, setSessionLength, sessionLength, setTimerMinutes, setTotalSeconds } = useContext(DataContext)
  // Declare function for handling clicks of the up/down arrows
  const handleClick = (e) => {
    // check status, only execute if the app isn't running
    if (status !== 'running') {
      // if the down arrow is pressed:
      if (e.target.id.search('increment') === -1) {
        if (sessionLength > 1) {
          setSessionLength(sessionLength => sessionLength - 1)
          setTimerMinutes((sessionLength - 1).toString()) // if session is pressed reduce session length AND timer minutes
          setTotalSeconds((sessionLength - 1) * 60)
        }
      } else {
        if (sessionLength < 60) {
          setSessionLength(sessionLength => sessionLength + 1) // only allow numbers to increase to sixty
          setTimerMinutes((sessionLength + 1).toString()) // if session is pressed reduce session length AND timer minutes
          setTotalSeconds((sessionLength + 1) * 60)
        }
      }
    }
  }

  // return JSX components
  return (
        <div className="length-adjust">
            <p id={'session-label'} className="label">{'Session Length'}</p>
            <i id={'session-decrement'} className="fas fa-arrow-down fa-2x" onClick={handleClick} />
            <p id={'session-length'}>{sessionLength}</p>
            <i id={'session-increment'} className="fas fa-arrow-up fa-2x" onClick={handleClick} />
        </div>
  )
}

export default SessionSetter
