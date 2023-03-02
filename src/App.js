import React from 'react'

// Create class to wrap entire app
class App extends React.Component {
    constructor(props) {
        super(props);
        // set initial states
        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerTotalSeconds: 25 * 60,
            timerMinutes: 25,
            timerSeconds: "00",
            running: "initialized",
            color: "white",
            timerMode: "Session"
        };
        // bind functions
        this.handleClick = this.handleClick.bind(this);
        this.timerClick = this.timerClick.bind(this);
        this.timerDecrement = this.timerDecrement.bind(this);
        this.toggleTimerMode = this.toggleTimerMode.bind(this);
    }

    // Function to handle click events
    handleClick = event => {
        if (event.target.id === "reset") { // If reset button is pressed:
            clearInterval(this.countdown); // Stop the timer and reset state
            document.getElementById("beep").pause() // Stop alarm
            document.getElementById("beep").currentTime = 0; // Reset alarm
            this.setState({
                breakLength: 5,
                sessionLength: 25,
                timerTotalSeconds: 25 * 60,
                timerMinutes: 25,
                timerSeconds: "00",
                running: "initialized",
                color: "white",
                timerMode: "Session"
            });
        } else if (this.state.running !== "running") { // only allow increment and decrement arrows to function when timer isn't running
            // Declare variables for holding values temporarily before setting app state
            let temp = 0;
            let temp2 = "00";
            // Check which arrow button has been pressed
            switch (event.target.id) {
                case "break-increment": // Increment the break time up to a maximum of 60
                    if (this.state.breakLength < 60) {
                        temp = this.state.breakLength + 1;
                        if (temp.toString().length === 1) { // Convert single digits into two digit strings
                            temp2 = "0" + temp.toString();
                        } else {
                            temp2 = temp.toString();
                        }
                        this.setState({
                            breakLength: temp
                        });
                        if (this.state.timerMode === "Break") {
                            this.setState({
                                timerMinutes: temp2,
                                timerSeconds: "00",
                                timerTotalSeconds: temp * 60
                            });
                        }
                    }
                    break;
                case "break-decrement": // Decrement the break time down to a minimum of 1
                    if (this.state.breakLength > 1) {
                        temp = this.state.breakLength - 1;
                        if (temp.toString().length === 1) { // Convert single digits into two digit strings
                            temp2 = "0" + temp.toString();
                        } else {
                            temp2 = temp.toString();
                        }
                        this.setState({
                            breakLength: temp
                        });
                        if (this.state.timerMode === "Break") {
                            this.setState({
                                timerMinutes: temp2,
                                timerSeconds: "00",
                                timerTotalSeconds: temp * 60
                            });
                        }
                    }
                    break;
                case "session-increment": // Increment the session time up to a maximum of 60
                    if (this.state.sessionLength < 60) {
                        temp = this.state.sessionLength + 1;
                        if (temp.toString().length === 1) { // Convert single digits into two digit strings
                            temp2 = "0" + temp.toString();
                        } else {
                            temp2 = temp.toString();
                        }
                        this.setState({
                            sessionLength: temp,
                            timerTotalSeconds: temp * 60
                        });
                        if (this.state.timerMode === "Session") {
                            this.setState({
                                timerMinutes: temp2,
                                timerSeconds: "00"
                            });
                        }
                    }
                    break;
                case "session-decrement": // Decrement the session time down to a minimum of 1
                    if (this.state.sessionLength > 1) {
                        temp = this.state.sessionLength - 1;
                        if (temp.toString().length === 1) { // Convert single digits into two digit strings
                            temp2 = "0" + temp.toString();
                        } else {
                            temp2 = temp.toString();
                        }
                        this.setState({
                            sessionLength: temp,
                            timerTotalSeconds: temp * 60
                        });
                        if (this.state.timerMode === "Session") {
                            this.setState({
                                timerMinutes: temp2,
                                timerSeconds: "00"
                            });
                        }
                    }
                    break;
                  default:
            }
        }
    };

    // Function to toggle between session and break modes
    toggleTimerMode = () => {
        // Declare variable to temporarily hold value before setting state
        let temp = 0;

        // set off alarm
        document.getElementById("beep").play();

        if (this.state.timerMode === "Session") { // Check timer mode and toggle states
            temp = this.state.breakLength;
            this.setState(
                {
                    timerMode: "Break",
                    timerTotalSeconds: temp * 60,
                    color: "white"
                });
        } else {
            temp = this.state.sessionLength;
            this.setState(
                {
                    timerMode: "Session",
                    timerTotalSeconds: temp * 60,
                    color: "white"
                });
        }
    };

    // Timer function
    timerDecrement = () => {
        let gap = this.state.timerTotalSeconds - 1; // set total seconds of timer
        if (gap === -1) { // if timer has reached zero trigger the function to toggle timer mode
            this.toggleTimerMode();
            gap = this.state.timerTotalSeconds; // get new total seconds from state
        } else if (gap < 60) { // change color if only one minute remains
            this.setState({
                color: "red"
            });
        } else {
            this.setState({
                color: "white"
            });
        }
        // calculate minutes and seconds from total seconds remaining
        let minutes = (Math.floor(gap / 60)).toString();
        let seconds = (gap % 60).toString();
        // convert single digits into double digit strings
        if (seconds.length === 1) {
            seconds = "0" + seconds;
        }
        if (minutes.length === 1) {
            minutes = "0" + minutes;
        }
        // pass variables into state
        this.setState(
            {
                timerTotalSeconds: gap,
                timerMinutes: minutes,
                timerSeconds: seconds
            });
    };

    // Timer button function
    timerClick = () => {
        document.getElementById("beep").play();
        document.getElementById("beep").pause();
        // Check running state of timer, set current state and trigger timer functions based on that
        if (this.state.running === "initialized") {
            this.setState(
                {
                    running: "running"
                });
            this.countdown = setInterval(this.timerDecrement, 1000);
        } else if (this.state.running === "running") {
            this.setState(
                {
                    running: "paused"
                });
            clearInterval(this.countdown);
        } else {
            this.setState(
                {
                    running: "running"
                });
            this.countdown = setInterval(this.timerDecrement, 1000);
        }
    };

    // Render the app
    render() {
        return (
            <div id="main">
                <h1>Pomodoro Clock</h1>
                <Break length={this.state.breakLength} click={this.handleClick} />
                <Session length={this.state.sessionLength} click={this.handleClick} />
                <Timer
                    minutes={this.state.timerMinutes}
                    seconds={this.state.timerSeconds}
                    playPause={this.timerClick}
                    cancel={this.handleClick}
                    color={this.state.color}
                    mode={this.state.timerMode}
                />
                <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
            </div>
        );
    }
}

// Functional component for setting the break length
const Break = props => {
    return (
        <div className="length-adjust">
            <p id="break-label" className="label">Break Length</p>
            <i id="break-decrement" class="fas fa-arrow-down fa-2x" onClick={props.click} />
            <p id="break-length">{props.length}</p>
            <i id="break-increment" class="fas fa-arrow-up fa-2x" onClick={props.click} />
        </div>
    );
};

// Functional component for setting the session length
const Session = props => {
    return (
        <div className="length-adjust">
            <p id="session-label" className="label">Session Length</p>
            <i id="session-decrement" class="fas fa-arrow-down fa-2x" onClick={props.click} />
            <p id="session-length">{props.length}</p>
            <i id="session-increment" class="fas fa-arrow-up fa-2x" onClick={props.click} />
        </div>
    );
};

// Functional component for the timer
const Timer = props => {
    return (
        <div id="timer">
            <p id="timer-label" className={props.color}>{props.mode}</p>
            <p id="time-left" className={props.color}>{props.minutes}:{props.seconds}</p>
            <i id="start_stop" class="fas fa-play fa-3x" onClick={props.playPause} />
            <i id="reset" class="fas fa-sync-alt fa-3x" onClick={props.cancel} />
        </div>
    );
};

export default App