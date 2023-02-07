"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// Ensure FCC test suite is set to correct project
var projectName = "25-5-clock";
localStorage.setItem("example_project", "25 + 5 Clock");

// Create class to wrap entire app
var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);
  var _super = _createSuper(App);
  function App(props) {
    var _this;
    _classCallCheck(this, App);
    _this = _super.call(this, props);
    // set initial states
    _this.handleClick = function (event) {
      if (event.target.id == "reset") {
        // If reset button is pressed:
        clearInterval(_this.countdown); // Stop the timer and reset state
        document.getElementById("beep").pause(); // Stop alarm
        document.getElementById("beep").currentTime = 0; // Reset alarm
        _this.setState({
          breakLength: 5,
          sessionLength: 25,
          timerTotalSeconds: 25 * 60,
          timerMinutes: 25,
          timerSeconds: "00",
          running: "initialized",
          color: "white",
          timerMode: "Session"
        });
      } else if (_this.state.running != "running") {
        // only allow increment and decrement arrows to function when timer isn't running
        // Declare variables for holding values temporarily before setting app state
        var temp = 0;
        var temp2 = "00";
        // Check which arrow button has been pressed
        switch (event.target.id) {
          case "break-increment":
            // Increment the break time up to a maximum of 60
            if (_this.state.breakLength < 60) {
              temp = _this.state.breakLength + 1;
              if (temp.toString().length == 1) {
                // Convert single digits into two digit strings
                temp2 = "0" + temp.toString();
              } else {
                temp2 = temp.toString();
              }
              _this.setState({
                breakLength: temp
              });
              if (_this.state.timerMode == "Break") {
                _this.setState({
                  timerMinutes: temp2,
                  timerSeconds: "00",
                  timerTotalSeconds: temp * 60
                });
              }
            }
            break;
          case "break-decrement":
            // Decrement the break time down to a minimum of 1
            if (_this.state.breakLength > 1) {
              temp = _this.state.breakLength - 1;
              if (temp.toString().length == 1) {
                // Convert single digits into two digit strings
                temp2 = "0" + temp.toString();
              } else {
                temp2 = temp.toString();
              }
              _this.setState({
                breakLength: temp
              });
              if (_this.state.timerMode == "Break") {
                _this.setState({
                  timerMinutes: temp2,
                  timerSeconds: "00",
                  timerTotalSeconds: temp * 60
                });
              }
            }
            break;
          case "session-increment":
            // Increment the session time up to a maximum of 60
            if (_this.state.sessionLength < 60) {
              temp = _this.state.sessionLength + 1;
              if (temp.toString().length == 1) {
                // Convert single digits into two digit strings
                temp2 = "0" + temp.toString();
              } else {
                temp2 = temp.toString();
              }
              _this.setState({
                sessionLength: temp,
                timerTotalSeconds: temp * 60
              });
              if (_this.state.timerMode == "Session") {
                _this.setState({
                  timerMinutes: temp2,
                  timerSeconds: "00"
                });
              }
            }
            break;
          case "session-decrement":
            // Decrement the session time down to a minimum of 1
            if (_this.state.sessionLength > 1) {
              temp = _this.state.sessionLength - 1;
              if (temp.toString().length == 1) {
                // Convert single digits into two digit strings
                temp2 = "0" + temp.toString();
              } else {
                temp2 = temp.toString();
              }
              _this.setState({
                sessionLength: temp,
                timerTotalSeconds: temp * 60
              });
              if (_this.state.timerMode == "Session") {
                _this.setState({
                  timerMinutes: temp2,
                  timerSeconds: "00"
                });
              }
            }
            break;
        }
      }
    };
    _this.toggleTimerMode = function () {
      // Declare variable to temporarily hold value before setting state
      var temp = 0;

      // set off alarm
      document.getElementById("beep").play();
      if (_this.state.timerMode == "Session") {
        // Check timer mode and toggle states
        temp = _this.state.breakLength;
        _this.setState({
          timerMode: "Break",
          timerTotalSeconds: temp * 60,
          color: "white"
        });
      } else {
        temp = _this.state.sessionLength;
        _this.setState({
          timerMode: "Session",
          timerTotalSeconds: temp * 60,
          color: "white"
        });
      }
    };
    _this.timerDecrement = function () {
      var gap = _this.state.timerTotalSeconds - 1; // set total seconds of timer
      if (gap == -1) {
        // if timer has reached zero trigger the function to toggle timer mode
        _this.toggleTimerMode();
        gap = _this.state.timerTotalSeconds; // get new total seconds from state
      } else if (gap < 60) {
        // change color if only one minute remains
        _this.setState({
          color: "red"
        });
      } else {
        _this.setState({
          color: "white"
        });
      }
      // calculate minutes and seconds from total seconds remaining
      var minutes = Math.floor(gap / 60).toString();
      var seconds = (gap % 60).toString();
      // convert single digits into double digit strings
      if (seconds.length == 1) {
        seconds = "0" + seconds;
      }
      if (minutes.length == 1) {
        minutes = "0" + minutes;
      }
      // pass variables into state
      _this.setState({
        timerTotalSeconds: gap,
        timerMinutes: minutes,
        timerSeconds: seconds
      });
    };
    _this.timerClick = function () {
      // Check running state of timer, set current state and trigger timer functions based on that
      if (_this.state.running == "initialized") {
        _this.setState({
          running: "running"
        });
        _this.countdown = setInterval(_this.timerDecrement, 1000);
      } else if (_this.state.running == "running") {
        _this.setState({
          running: "paused"
        });
        clearInterval(_this.countdown);
      } else {
        _this.setState({
          running: "running"
        });
        _this.countdown = setInterval(_this.timerDecrement, 1000);
      }
    };
    _this.state = {
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
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.timerClick = _this.timerClick.bind(_assertThisInitialized(_this));
    _this.timerDecrement = _this.timerDecrement.bind(_assertThisInitialized(_this));
    _this.toggleTimerMode = _this.toggleTimerMode.bind(_assertThisInitialized(_this));
    return _this;
  }

  // Function to handle click events
  _createClass(App, [{
    key: "render",
    value:
    // Render the app
    function render() {
      return /*#__PURE__*/React.createElement("div", {
        id: "main"
      }, /*#__PURE__*/React.createElement("h1", null, "Pomodoro Clock"), /*#__PURE__*/React.createElement(Break, {
        length: this.state.breakLength,
        click: this.handleClick
      }), /*#__PURE__*/React.createElement(Session, {
        length: this.state.sessionLength,
        click: this.handleClick
      }), /*#__PURE__*/React.createElement(Timer, {
        minutes: this.state.timerMinutes,
        seconds: this.state.timerSeconds,
        playPause: this.timerClick,
        cancel: this.handleClick,
        color: this.state.color,
        mode: this.state.timerMode
      }), /*#__PURE__*/React.createElement("audio", {
        id: "beep",
        src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      }));
    }
  }]);
  return App;
}(React.Component); // Functional component for setting the break length
var Break = function Break(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "length-adjust"
  }, /*#__PURE__*/React.createElement("p", {
    id: "break-label",
    className: "label"
  }, "Break Length"), /*#__PURE__*/React.createElement("i", {
    id: "break-decrement",
    "class": "fas fa-arrow-down fa-2x",
    onClick: props.click
  }), /*#__PURE__*/React.createElement("p", {
    id: "break-length"
  }, props.length), /*#__PURE__*/React.createElement("i", {
    id: "break-increment",
    "class": "fas fa-arrow-up fa-2x",
    onClick: props.click
  }));
};

// Functional component for setting the session length
var Session = function Session(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "length-adjust"
  }, /*#__PURE__*/React.createElement("p", {
    id: "session-label",
    className: "label"
  }, "Session Length"), /*#__PURE__*/React.createElement("i", {
    id: "session-decrement",
    "class": "fas fa-arrow-down fa-2x",
    onClick: props.click
  }), /*#__PURE__*/React.createElement("p", {
    id: "session-length"
  }, props.length), /*#__PURE__*/React.createElement("i", {
    id: "session-increment",
    "class": "fas fa-arrow-up fa-2x",
    onClick: props.click
  }));
};

// Functional component for the timer
var Timer = function Timer(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "timer"
  }, /*#__PURE__*/React.createElement("p", {
    id: "timer-label",
    className: props.color
  }, props.mode), /*#__PURE__*/React.createElement("p", {
    id: "time-left",
    className: props.color
  }, props.minutes, ":", props.seconds), /*#__PURE__*/React.createElement("i", {
    id: "start_stop",
    "class": "fas fa-play fa-3x",
    onClick: props.playPause
  }), /*#__PURE__*/React.createElement("i", {
    id: "reset",
    "class": "fas fa-sync-alt fa-3x",
    onClick: props.cancel
  }));
};

// Render the app to the DOM
var rootNode = document.getElementById('app');
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));