import './Timer.css'

function Timer({ color, mode, minutes, seconds, playPause, cancel }) {
  return (
    <div id="timer">
      <p id="timer-label" className={color}>{mode}</p>
      <p id="time-left" className={color}>{minutes}:{seconds}</p>
      <i id="start_stop" className="fas fa-play fa-3x" onClick={playPause} />
      <i id="reset" className="fas fa-sync-alt fa-3x" onClick={cancel} />
    </div>
  )
}

export default Timer