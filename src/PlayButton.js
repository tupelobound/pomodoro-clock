import { React, useContext } from 'react'
import { DataContext } from './context/DataContext'

// Functional component for the play/pause button
const PlayButton = () => {
  const { icon, playPause } = useContext(DataContext)
  // return JSX component
  return (
    <>
      <i id="start_stop" className={icon} onClick={playPause} />
    </>
  )
}

export default PlayButton
