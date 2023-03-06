import React from 'react'
import PropTypes from 'prop-types'

// Functional component for the cancel button
const CancelButton = ({
  setBreakLength,
  setSessionLength,
  setTimerMinutes,
  setTimerSeconds,
  setColor,
  setTimerMode
}) => {
  const cancel = () => {
    setBreakLength(5)
    setSessionLength(25)
    setTimerMinutes(25)
    setTimerSeconds('00')
    setColor('white')
    setTimerMode('Session')
  }
  return (
    <>
      <i id="reset" className="fas fa-sync-alt fa-3x" onClick={cancel} />
    </>
  )
}

CancelButton.propTypes = {
  setBreakLength: PropTypes.func.isRequired,
  setSessionLength: PropTypes.func.isRequired,
  setTimerMinutes: PropTypes.func.isRequired,
  setTimerSeconds: PropTypes.func.isRequired,
  setColor: PropTypes.func.isRequired,
  setTimerMode: PropTypes.func.isRequired
}

export default CancelButton
