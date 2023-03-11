/* eslint-disable react/prop-types */
import Timer from './Timer'
import CancelButton from './CancelButton'
import PlayButton from './PlayButton'
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
        <PlayButton />
        <CancelButton />
      </div>
    </DataProvider>
  )
}

export default App
