var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var PmdClock = function (_React$Component) {_inherits(PmdClock, _React$Component);
	function PmdClock(props) {_classCallCheck(this, PmdClock);var _this = _possibleConstructorReturn(this, (PmdClock.__proto__ || Object.getPrototypeOf(PmdClock)).call(this,
		props));

		_this.handleClick = _this.handleClick.bind(_this);
		_this.handleChange = _this.handleChange.bind(_this);
		_this.togglePlay = _this.togglePlay.bind(_this);
		_this.tick = _this.tick.bind(_this);
		_this.updateValue = _this.updateValue.bind(_this);

		_this.session = 25;
		_this.break = 5;
		_this.countdown;

		_this.state = {
			brkLength: 5,
			sesLength: 25,
			crtInterval: "Session",
			play_pause: false,
			remainingSecs: _this.session * 60 };return _this;

	}_createClass(PmdClock, [{ key: "handleClick", value: function handleClick(

		event) {
			switch (event.target.id) {
				case "break-increment":
					if (this.state.brkLength < 60) {
						this.break += 1;
						if (this.state.crtInterval === "Break") {
							this.setState({
								brkLength: this.break,
								remainingSecs: this.break * 60 });

						} else {
							this.setState({
								brkLength: this.break });

						}
					}
					break;
				case "break-decrement":
					if (this.state.brkLength > 1) {
						this.break -= 1;
						if (this.state.crtInterval === "Break") {
							this.setState({
								brkLength: this.break,
								remainingSecs: this.break * 60 });

						} else {
							this.setState({
								brkLength: this.break });

						}
					}
					break;
				case "session-increment":
					if (this.state.sesLength < 60) {
						this.session += 1;
						if (this.state.crtInterval === "Session") {
							this.setState({
								sesLength: this.session,
								remainingSecs: this.session * 60 });

						} else {
							this.setState({
								sesLength: this.session });

						}
					}
					break;
				case "session-decrement":
					if (this.state.sesLength > 1) {
						this.session -= 1;
						if (this.state.crtInterval === "Session") {
							this.setState({
								sesLength: this.session,
								remainingSecs: this.session * 60 });

						} else {
							this.setState({
								sesLength: this.session });

						}
					}
					break;
				case "reset":
					var alarm = document.getElementById("beep");
					this.session = 25;
					this.break = 5;
					if (!alarm.paused) {
						alarm.pause();
						alarm.currentTime = 0;
					}
					this.setState({
						brkLength: this.break,
						sesLength: this.session,
						crtInterval: "Session",
						remainingSecs: this.session * 60 });

					if (this.state.play_pause) {
						this.togglePlay();
					}
					break;}

		} }, { key: "handleChange", value: function handleChange(

		event) {
			if (event.target.id === "break-length") {
				this.break = parseInt(event.target.value);
				this.forceUpdate();
			} else {
				this.session = parseInt(event.target.value);
				this.forceUpdate();
			}
		} }, { key: "updateValue", value: function updateValue()

		{
			if (this.break > 60 || this.break < 1) {
				if (this.break > 60) {
					this.break = 60;
				} else {
					this.break = 1;
				}
			} else if (this.session > 60 || this.session < 1) {
				if (this.session > 60) {
					this.session = 60;
				} else {
					this.session = 1;
				}
			}

			if (this.state.crtInterval === "Session") {
				this.setState({
					brkLength: this.break,
					sesLength: this.session,
					remainingSecs: this.session * 60 });

			} else if (this.state.play_pause) {
				this.setState({
					brkLength: this.break,
					sesLength: this.session,
					remainingSecs: this.break * 60 });

			}
		} }, { key: "togglePlay", value: function togglePlay()

		{var _this2 = this;
			if (this.state.sesLength > 60 || this.state.sesLength < 1) {
				if (this.state.sesLength > 60) {
					this.setState({
						sesLength: 60,
						remainingSecs: 3600 });

				} else {
					this.setState({
						sesLength: 1,
						remainingSecs: 60 });

				}
			}
			if (this.state.brkLength > 60 || this.state.brkLength < 1) {
				if (this.state.brkLength > 60) {
					this.setState({
						brkLength: 60,
						remainingSecs: 3600 });

				} else {
					this.setState({
						brkLength: 1,
						remainingSecs: 60 });

				}
			}

			this.setState({
				play_pause: !this.state.play_pause });

			if (!this.state.play_pause) {
				this.countdown = setInterval(
				function () {
					_this2.tick();
				}.bind(this),
				1000);

			} else {
				clearInterval(this.countdown);
			}
		} }, { key: "tick", value: function tick()

		{
			if (this.state.remainingSecs > 0) {
				this.setState({
					remainingSecs: this.state.remainingSecs - 1 });

			} else {
				document.getElementById("beep").play();
				if (this.state.crtInterval === "Session") {
					this.setState({
						crtInterval: "Break",
						remainingSecs: this.state.brkLength * 60 });

				} else {
					this.setState({
						crtInterval: "Session",
						remainingSecs: this.state.sesLength * 60 });

				}
			}
		} }, { key: "render", value: function render()

		{
			return (
				React.createElement("div", { id: "pmd-background" },
					React.createElement("div", { id: "title", className: "text-white" },
						React.createElement("h1", null, "Pomodoro Clock")),

					React.createElement("div", { id: "pomodoro", className: "text-white" },
						React.createElement(Controls, {
							breakLength: this.break,
							sessionLength: this.session,
							clkHandler: this.handleClick,
							changeHandler: this.handleChange,
							updateValue: this.updateValue,
							playPauseToggle: this.togglePlay,
							playPause: this.state.play_pause }),

						React.createElement(Display, {
							currentInterval: this.state.crtInterval,
							totalSeconds: this.state.remainingSecs }),

						React.createElement("audio", {
							id: "beep",
							src: "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Digital+alarm+clock+sound+effect+beeping+sounds.mp3",
							type: "audio/mp3" })),


					React.createElement("div", { id: "credits", className: "text-white" },
						React.createElement("h2", { id: "credits-line" }, "Coded and designed by",
							" ",
							React.createElement("a", { id: "port-link", href: "#", target: "_blank" }, "Raul F.")))));






		} }]);return PmdClock;}(React.Component);


var Controls = function Controls(props) {
	return (
		React.createElement("div", { id: "control-box" },
			React.createElement("div", { id: "break-box", className: "settings-box" },
				React.createElement("h2", { id: "break-label" }, "Break Length"),
				React.createElement("div", { id: "break-tools", className: "tool-box" },
					React.createElement("button", {
							id: "break-increment",
							onClick: props.clkHandler,
							className: "invisibutton" },

						React.createElement("i", { className: "fas fa-chevron-up" })),

					React.createElement("input", {
						id: "break-length",
						type: "number",
						value: props.breakLength,
						max: "60",
						min: "1",
						onBlur: props.updateValue,
						onChange: props.changeHandler,
						className: "settings-input" }),

					React.createElement("button", {
							id: "break-decrement",
							onClick: props.clkHandler,
							className: "invisibutton" },

						React.createElement("i", { className: "fas fa-chevron-down" })))),



			React.createElement("div", { id: "session-box", className: "settings-box" },
				React.createElement("h2", { id: "session-label" }, "Session Length"),
				React.createElement("div", { id: "session-tools", className: "tool-box" },
					React.createElement("button", {
							id: "session-increment",
							onClick: props.clkHandler,
							className: "invisibutton" },

						React.createElement("i", { className: "fas fa-chevron-up" })),

					React.createElement("input", {
						id: "session-length",
						type: "number",
						value: props.sessionLength,
						max: "60",
						min: "1",
						onBlur: props.updateValue,
						onChange: props.changeHandler,
						className: "settings-input" }),

					React.createElement("button", {
							id: "session-decrement",
							onClick: props.clkHandler,
							className: "invisibutton" },

						React.createElement("i", { className: "fas fa-chevron-down" })))),



			React.createElement("div", { id: "flow-controls", className: "tool-box" },
				React.createElement("button", {
						id: "start_stop",
						onClick: props.playPauseToggle,
						className: "invisibutton" },

					props.playPause ?
					React.createElement("i", { className: "fas fa-pause" }) :

					React.createElement("i", { className: "fas fa-play" })),


				React.createElement("button", { id: "reset", onClick: props.clkHandler, className: "invisibutton" },
					React.createElement("i", { className: "fas fa-undo-alt" })))));




};

var Display = function Display(props) {
	return (
		React.createElement("div", { id: "display" },
			React.createElement("h2", { id: "timer-label" }, props.currentInterval),
			React.createElement(Clock, { seconds: props.totalSeconds })));


};

var Clock = function Clock(props) {
	var timerStyle = void 0;
	var seconds = props.seconds % 60;
	var minutes = (props.seconds - props.seconds % 60) / 60;
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (minutes === "00" && seconds <= 10) {
		timerStyle = "text-danger";
	} else {
		timerStyle = "text-white";
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	return (
		React.createElement("div", { id: "clock-box" },
			React.createElement("h2", { id: "time-left", className: timerStyle },
				minutes + ":" + seconds)));



};

ReactDOM.render(React.createElement(PmdClock, null), document.getElementById("root"));