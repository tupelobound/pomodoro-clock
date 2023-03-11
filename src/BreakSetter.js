import { React, useContext } from 'react'
import { DataContext } from './context/DataContext'

// Functional component for setting the break length
const BreakSetter = () => {
  const { breakLength, handleClick } = useContext(DataContext)

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
