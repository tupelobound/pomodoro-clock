import { React, useEffect } from 'react'
import PropTypes from 'prop-types'

// Functional component for the play/pause button
const PlayButton = ({ status, setStatus, icon, setIcon, totalSeconds, setTotalSeconds }) => {
  const playPause = (e) => {
    if (status !== 'running') {
      setStatus('running')
      setIcon('fas fa-pause fa-3x')
    } else {
      setStatus('paused')
      setIcon('fas fa-play fa-3x')
    }
  }

  useEffect(() => {
    if (status === 'running') {
      const interval = setInterval(() => {
        setTotalSeconds(totalSeconds => totalSeconds - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [status])

  return (
    <>
      <i id="start_stop" className={icon} onClick={playPause} />
    </>
  )
}

PlayButton.propTypes = {
  status: PropTypes.string,
  setStatus: PropTypes.func,
  icon: PropTypes.string,
  setIcon: PropTypes.func,
  totalSeconds: PropTypes.number,
  setTotalSeconds: PropTypes.func
}

export default PlayButton
