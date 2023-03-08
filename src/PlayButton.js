import React from 'react'

// Functional component for the play/pause button
const PlayButton = () => {
  const playPause = (e) => {
    console.log(e)
  }

  return (
    <>
      <i id="start_stop" className="fas fa-play fa-3x" onClick={playPause} />
    </>
  )
}

export default PlayButton
