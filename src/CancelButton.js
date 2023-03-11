import { React, useContext } from 'react'
import { DataContext } from './context/DataContext'

// Functional component for the cancel button
const CancelButton = () => {
  const { cancel } = useContext(DataContext)
  // return JSX component
  return (
    <>
      <i id="reset" className="fas fa-sync-alt fa-3x" onClick={cancel} />
    </>
  )
}

export default CancelButton
