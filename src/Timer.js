import React from 'react'
import PropTypes from 'prop-types'
import './Timer.css'

// Functional component for the timer
const Timer = ({ color, timerMode, timerMinutes, timerSeconds }) => {
  return (
    <div id="timer">
      <p id="timer-label" className={color}>{timerMode}</p>
      <p id="time-left" className={color}>{timerMinutes}:{timerSeconds}</p>
    </div>
  )
}

Timer.propTypes = {
  color: PropTypes.string.isRequired,
  timerMode: PropTypes.string.isRequired,
  timerMinutes: PropTypes.number.isRequired,
  timerSeconds: PropTypes.string.isRequired
}

export default Timer
