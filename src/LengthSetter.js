import React from 'react'
import PropTypes from 'prop-types'

// Functional component for setting the break length
const LengthSetter = ({ name, length, setLength }) => {
  const handleClick = (e) => {
    setLength(60)
  }

  return (
        <div className="length-adjust">
            <p id="break-label" className="label">{name}</p>
            <i id="break-decrement" className="fas fa-arrow-down fa-2x" onClick={handleClick} />
            <p id="break-length">{length}</p>
            <i id="break-increment" className="fas fa-arrow-up fa-2x" onClick={handleClick} />
        </div>
  )
}

LengthSetter.propTypes = {
  name: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func.isRequired
}

export default LengthSetter
