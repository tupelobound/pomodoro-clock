import { React, useContext } from 'react'
import { DataContext } from './context/DataContext'

// Functional component for setting the break length
const BreakSetter = () => {
  const { status, setBreakLength, breakLength } = useContext(DataContext)
  // Declare function for handling clicks of the up/down arrows
  const handleClick = (e) => {
    // check status, only execute if the app isn't running
    if (status !== 'running') {
      // if the down arrow is pressed:
      if (e.target.id.search('increment') === -1) {
        if (breakLength > 1) setBreakLength(breakLength => breakLength - 1)
      } else {
        if (breakLength < 60) setBreakLength(breakLength => breakLength + 1) // only allow numbers to increase to sixty
      }
    }
  }

  // return JSX components
  return (
        <div className="length-adjust">
            <p id={'break-label'} className="label">{'Break Length'}</p>
            <i id={'break-decrement'} className="fas fa-arrow-down fa-2x" onClick={handleClick} />
            <p id={'break-length'}>{breakLength}</p>
            <i id={'break-increment'} className="fas fa-arrow-up fa-2x" onClick={handleClick} />
        </div>
  )
}

export default BreakSetter
