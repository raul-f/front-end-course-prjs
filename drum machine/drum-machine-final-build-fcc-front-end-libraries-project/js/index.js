var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var DrumMachine = function (_React$Component) {_inherits(DrumMachine, _React$Component);

  function DrumMachine(props) {_classCallCheck(this, DrumMachine);var _this = _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this,
    props));

    _this.kitLibrary = {
      Acoustic: {
        tag: 'Acoustic kit',
        audioSources: {
          "Q-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_Snr-05.wav",
          "W-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_Crash-03.wav",
          "E-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_SnrOff-07.wav",
          "A-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_OpHat-06.wav",
          "S-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_Sab_HfHat-03.wav",
          "D-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_ClHat-08.wav",
          "Z-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_Flam-04.wav",
          "X-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_Kick-04.wav",
          "C-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_Rim-07.wav" },

        drumTags: {
          "Q-drum-pad": "Snare",
          "W-drum-pad": "Cymbal Crash",
          "E-drum-pad": "Snares Off",
          "A-drum-pad": "Open Hi-Hat",
          "S-drum-pad": "Half-open Hi-Hat",
          "D-drum-pad": "Closed Hi-Hat",
          "Z-drum-pad": "Flam",
          "X-drum-pad": "Kick",
          "C-drum-pad": "Rim Shot" } },


      Electro: {
        tag: 'Electro kit',
        audioSources: {
          "Q-drum-pad": "",
          "W-drum-pad": "",
          "E-drum-pad": "",
          "A-drum-pad": "",
          "S-drum-pad": "",
          "D-drum-pad": "",
          "Z-drum-pad": "",
          "X-drum-pad": "",
          "C-drum-pad": "" },

        drumTags: {
          "Q-drum-pad": "Snare",
          "W-drum-pad": "Cymbal Crash",
          "E-drum-pad": "Snares Off",
          "A-drum-pad": "Open Hi-Hat",
          "S-drum-pad": "Half-open Hi-Hat",
          "D-drum-pad": "Closed Hi-Hat",
          "Z-drum-pad": "Flam",
          "X-drum-pad": "Kick",
          "C-drum-pad": "Rim Shot" } },


      Vinyl: {
        tag: 'Vinyl kit',
        audioSources: {
          "Q-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_Snr-05.wav",
          "W-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_Crash-03.wav",
          "E-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_SnrOff-07.wav",
          "A-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_OpHat-06.wav",
          "S-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_Sab_HfHat-03.wav",
          "D-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_ClHat-08.wav",
          "Z-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_Flam-04.wav",
          "X-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_Kick-04.wav",
          "C-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_Rim-07.wav" },

        drumTags: {
          "Q-drum-pad": "Snare",
          "W-drum-pad": "Cymbal Crash",
          "E-drum-pad": "Snares Off",
          "A-drum-pad": "Open Hi-Hat",
          "S-drum-pad": "Half-open Hi-Hat",
          "D-drum-pad": "Closed Hi-Hat",
          "Z-drum-pad": "Flam",
          "X-drum-pad": "Kick",
          "C-drum-pad": "Rim Shot" } },


      Kurzweil: {
        tag: 'Kurzweil kit',
        audioSources: {
          "Q-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_Snr-05.wav",
          "W-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_Crash-03.wav",
          "E-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_SnrOff-07.wav",
          "A-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_OpHat-06.wav",
          "S-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_Sab_HfHat-03.wav",
          "D-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_ClHat-08.wav",
          "Z-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_Flam-04.wav",
          "X-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_Kick-04.wav",
          "C-drum-pad": "https://s3-sa-east-1.amazonaws.com/myaudioclips.raulf/CYCdh_K2room_Rim-07.wav" },

        drumTags: {
          "Q-drum-pad": "Snare",
          "W-drum-pad": "Cymbal Crash",
          "E-drum-pad": "Snares Off",
          "A-drum-pad": "Open Hi-Hat",
          "S-drum-pad": "Half-open Hi-Hat",
          "D-drum-pad": "Closed Hi-Hat",
          "Z-drum-pad": "Flam",
          "X-drum-pad": "Kick",
          "C-drum-pad": "Rim Shot" } } };




    _this.displayClock;
    _this.buttonClock;

    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handlePower = _this.handlePower.bind(_this);
    _this.handleKitChange = _this.handleKitChange.bind(_this);

    _this.state = {
      power: true,
      clipLabel: "",
      currentKit: _this.kitLibrary["Acoustic"] };return _this;

  }_createClass(DrumMachine, [{ key: "handleKeyPress", value: function handleKeyPress(

    event) {var _this2 = this;
      var eventCallback = {};

      clearTimeout(this.displayClock);

      var key = event.key.toUpperCase();
      var pad = key + '-drum-pad';

      var node = document.getElementById(key);

      if (key === "P") {
        this.handlePower();
      } else if (this.state.power) {
        if (node.paused) {
          node.play();
        } else {
          node.currentTime = 0;
        }
        this.setState({
          clipLabel: this.state.currentKit['drumTags'][pad] });

      }

      this.displayClock = setTimeout(
      function () {
        _this2.setState({ clipLabel: "" });
      }.bind(this),
      1500);

      document.getElementById(pad).className =
      "drum-pad btn btn-dark text-white";
      this.buttonClock = setTimeout(
      function () {
        document.getElementById(pad).className =
        "drum-pad btn btn-secondary text-white";
      }.bind(this),
      130);

    } }, { key: "handleClick", value: function handleClick(

    event) {

      clearTimeout(this.displayClock);

      var key = event.target.id;

      if (this.state.power) {
        if (document.getElementById(key[0]).paused) {
          document.getElementById(key[0]).play();
        } else {
          document.getElementById(key[0]).currentTime = 0;
        }
        this.setState({
          clipLabel: this.state.currentKit['drumTags'][key] });

      }

      this.displayClock = setTimeout(
      function () {
        this.setState({ clipLabel: "" });
      }.bind(this),
      1500);


      document.getElementById(key).className = "drum-pad btn btn-dark text-white";
      this.buttonClock = setTimeout(
      function () {
        document.getElementById(key).className =
        "drum-pad btn btn-secondary text-white";
      }.bind(this),
      130);

    } }, { key: "handlePower", value: function handlePower()

    {
      this.setState({
        power: !this.state.power,
        clipLabel: "" });

    } }, { key: "handleKitChange", value: function handleKitChange(

    event) {
      this.setState({
        currentKit: this.kitLibrary[event.target.id] });

    } }, { key: "componentDidMount", value: function componentDidMount()

    {
      document.addEventListener("keydown", this.handleKeyPress);
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "dm-container" },
          React.createElement("div", { id: "drum-machine", className: "row bg-dark" },
            React.createElement(DrumButtons, {
              kit: this.state.currentKit["audioSources"],
              parentHandleClick: this.handleClick }),

            React.createElement(Display, {
              handleChange: this.handleKitChange,
              dropdownLabel: this.state.currentKit.tag,
              clipLabel: this.state.clipLabel,
              parentHandlePower: this.handlePower,
              parentPowerState: this.state.power })),


          this.state.visibility && this.state.controlJSX));


    } }]);return DrumMachine;}(React.Component);


var DrumButtons = function DrumButtons(props) {
  var btnClassName = "drum-pad btn btn-secondary text-white";
  return (
    React.createElement("div", { id: "outer-drum", className: "col-8" },
      React.createElement("div", { id: "drum-set" },
        React.createElement("div", { className: "row drum-pad-row" },
          React.createElement("div", { className: "col drum-pad-box" },
            React.createElement("button", {
                id: "Q-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick },

              React.createElement("audio", {
                id: "Q",
                src: props.kit["Q-drum-pad"],
                type: "audio/wav",
                className: "clip" }), "Q")),




          React.createElement("div", { className: "col drum-pad-box" },
            React.createElement("button", {
                id: "W-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick },

              React.createElement("audio", {
                id: "W",
                src: props.kit["W-drum-pad"],
                type: "audio/wav",
                className: "clip" }), "W")),




          React.createElement("div", { className: "col drum-pad-box" },
            React.createElement("button", {
                id: "E-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick },

              React.createElement("audio", {
                id: "E",
                src: props.kit["E-drum-pad"],
                type: "audio/wav",
                className: "clip" }), "E"))),





        React.createElement("div", { className: "row drum-pad-row" },
          React.createElement("div", { className: "col-4 drum-pad-box" },
            React.createElement("button", {
                id: "A-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick },

              React.createElement("audio", {
                id: "A",
                src: props.kit["A-drum-pad"],
                type: "audio/mp3",
                className: "clip" }), "A")),




          React.createElement("div", { className: "col-4 drum-pad-box" },
            React.createElement("button", {
                id: "S-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick },

              React.createElement("audio", {
                id: "S",
                src: props.kit["S-drum-pad"],
                type: "audio/mp3",
                className: "clip" }), "S")),




          React.createElement("div", { className: "col-4 drum-pad-box" },
            React.createElement("button", {
                id: "D-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick },

              React.createElement("audio", {
                id: "D",
                src: props.kit["D-drum-pad"],
                type: "audio/wav",
                className: "clip" }), "D"))),





        React.createElement("div", { className: "row drum-pad-row" },
          React.createElement("div", { className: "col-4 drum-pad-box" },
            React.createElement("button", {
                id: "Z-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick },

              React.createElement("audio", {
                id: "Z",
                src: props.kit["Z-drum-pad"],
                type: "audio/wav",
                className: "clip" }), "Z")),




          React.createElement("div", { className: "col-4 drum-pad-box" },
            React.createElement("button", {
                id: "X-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick },

              React.createElement("audio", {
                id: "X",
                src: props.kit["X-drum-pad"],
                type: "audio/wav",
                className: "clip" }), "X")),




          React.createElement("div", { className: "col-4 drum-pad-box" },
            React.createElement("button", {
                id: "C-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick },

              React.createElement("audio", {
                id: "C",
                src: props.kit["C-drum-pad"],
                type: "audio/wav",
                className: "clip" }), "C"))))));








};

var Display = function Display(props) {
  var powerStyle = void 0;
  var powerIconClass = void 0;
  switch (props.parentPowerState) {
    case true:
      powerStyle = { "justify-content": "flex-start" };
      powerIconClass = "text-white";
      break;
    case false:
      powerStyle = { "justify-content": "flex-end" };
      powerIconClass = "text-secondary";
      break;}

  var optionClass = "bg-secondary text-white";
  return (
    React.createElement("div", { id: "outer-display", className: "col-4" },
      React.createElement("div", { id: "inner-display" },
        React.createElement("div", {
            id: "power-slider",
            style: powerStyle,
            onClick: props.parentHandlePower },

          React.createElement("button", { id: "power-button", className: "btn btn-dark" },
            React.createElement("i", { "class": "fas fa-power-off " + powerIconClass }))),



        React.createElement("button", { className: "btn btn-secondary" }, "Vol slider (pHolder)"),

        React.createElement("div", { id: "dsp-holder" },
          React.createElement("p", { id: "display" }, props.clipLabel)),


        React.createElement("div", { "class": "dropdown" },
          React.createElement("button", {
              "class": "btn btn-secondary dropdown-toggle",
              type: "button",
              "data-toggle": "dropdown" },

            props.dropdownLabel),

          React.createElement("div", { "class": "dropdown-menu bg-secondary" },
            React.createElement("a", { id: "Acoustic", "class": "dropdown-item", href: "#", onClick: props.handleChange }, "Acoustic"),


            React.createElement("a", { id: "Electro", "class": "dropdown-item", href: "#", onClick: props.handleChange }, "Electro"),


            React.createElement("a", { id: "Vinyl", "class": "dropdown-item", href: "#", onClick: props.handleChange }, "Vinyl"),


            React.createElement("a", { id: "Kurzweil", "class": "dropdown-item", href: "#", onClick: props.handleChange }, "Kurzweil"))))));







};

ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById("root"));