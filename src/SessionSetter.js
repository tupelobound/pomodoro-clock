import { React, useContext } from 'react'
import { DataContext } from './context/DataContext'

// Functional component for setting the session length
const SessionSetter = () => {
  const { sessionLength, handleClick } = useContext(DataContext)

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
