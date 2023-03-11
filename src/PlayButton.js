import { React, useContext } from 'react'
import { DataContext } from './context/DataContext'

// Functional component for the play/pause button
const PlayButton = () => {
  const { icon, status, setStatus, setIcon } = useContext(DataContext)

  // Declare function for changing status and play/pause button icon when pressed
  const playPause = (e) => {
    document.getElementById('beep').play()
    document.getElementById('beep').pause()
    // Check status of app, if not 'running':
    if (status !== 'running') {
      setStatus('running') // set status to 'running'
      setIcon('fas fa-pause fa-3x') // change icon to 'pause'
    } else {
      setStatus('paused') // set status to 'paused'
      setIcon('fas fa-play fa-3x') // change icon to 'play'
    }
  }

  // return JSX component
  return (
    <>
      <i id="start_stop" className={icon} onClick={playPause} />
    </>
  )
}

export default PlayButton
