/* eslint-disable react/prop-types */
import Timer from './Timer'
import BreakSetter from './BreakSetter'
import SessionSetter from './SessionSetter'
import { React } from 'react'
import { DataProvider } from './context/DataContext'

function App () {
  // return app JSX components
  return (
    <DataProvider>
      <div id='main'>
        <h1>Pomodoro Clock</h1>
        <BreakSetter />
        <SessionSetter />
        <Timer />
      </div>
      <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
    </DataProvider>
  )
}

export default App
