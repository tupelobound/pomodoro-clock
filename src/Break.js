import './Adjust.css'

function Break({ length, increase, decrease }) {
  return (
    <div className="length-adjust">
      <p id="break-label" className="label">Break Length</p>
      <i id="break-decrement" className="fas fa-arrow-down fa-2x" onClick={decrease} />
      <p id="break-length">{length}</p>
      <i id="break-increment" className="fas fa-arrow-up fa-2x" onClick={increase} />
    </div>
  )
}

export default Break