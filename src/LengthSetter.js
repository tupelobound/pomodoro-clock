import React from 'react'
import PropTypes from 'prop-types'

// Functional component for setting the break length
const LengthSetter = ({ name, length, setLength, setTimerMinutes }) => {
  const handleClick = (e) => {
    if (e.target.id.search('increment') === -1) {
      if (name === 'session' && length > 1) setTimerMinutes(length - 1)
      if (length > 1) setLength(length - 1)
    } else {
      if (name === 'session' && length < 60) setTimerMinutes(length + 1)
      if (length < 60) setLength(length + 1)
    }
  }

  return (
        <div className="length-adjust">
            <p id={`${name}-label`} className="label">{`${name.charAt(0).toUpperCase() + name.slice(1)} Length`}</p>
            <i id={`${name}-decrement`} className="fas fa-arrow-down fa-2x" onClick={handleClick} />
            <p id={`${name}-length`}>{length}</p>
            <i id={`${name}-increment`} className="fas fa-arrow-up fa-2x" onClick={handleClick} />
        </div>
  )
}

LengthSetter.propTypes = {
  name: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired,
  setTimerMinutes: PropTypes.func
}

export default LengthSetter
