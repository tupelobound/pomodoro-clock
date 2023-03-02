import './Adjust.css'

function Break({ length, click }) {
  return (
    <div className="length-adjust">
      <p id="break-label" className="label">Break Length</p>
      <i id="break-decrement" className="fas fa-arrow-down fa-2x" onClick={click} />
      <p id="break-length">{length}</p>
      <i id="break-increment" className="fas fa-arrow-up fa-2x" onClick={click} />
    </div>
  )
}

export default Break