import './Adjust.css'

// Functional component for setting the session length
function Session({ length, click }) {
    return (
        <div className="length-adjust">
            <p id="session-label" className="label">Session Length</p>
            <i id="session-decrement" className="fas fa-arrow-down fa-2x" onClick={click} />
            <p id="session-length">{length}</p>
            <i id="session-increment" className="fas fa-arrow-up fa-2x" onClick={click} />
        </div>
    )
}

export default Session