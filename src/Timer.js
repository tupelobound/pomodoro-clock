import { React, useContext } from 'react'
import { DataContext } from './context/DataContext'
import PlayButton from './PlayButton'
import CancelButton from './CancelButton'

// Functional component for the timer
const Timer = () => {
  const { color, timerMode, timerMinutes, timerSeconds } = useContext(DataContext)
  // return JSX components
  return (
      <div id="timer">
       <p id="timer-label" className={color}>{timerMode}</p>
       <p id="time-left" className={color}>{timerMinutes}:{timerSeconds}</p>
       <PlayButton />
       <CancelButton />
      </div>
  )
}

export default Timer
