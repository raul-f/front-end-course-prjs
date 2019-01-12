var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var DrumMachine = function (_React$Component) {_inherits(DrumMachine, _React$Component);

  function DrumMachine(props) {_classCallCheck(this, DrumMachine);var _this = _possibleConstructorReturn(this, (DrumMachine.__proto__ || Object.getPrototypeOf(DrumMachine)).call(this,
    props));

    _this.kitLibrary = {
      Acoustic: {
        tag: 'Acoustic Kit',
        audioSources: {
          "Q-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Acoustic/CYCdh_K2room_Snr-05.wav",
          "W-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Acoustic/CYCdh_Crash-03.wav",
          "E-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Acoustic/CYCdh_K2room_SnrOff-07.wav",
          "A-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Acoustic/CYCdh_K2room_OpHat-06.wav",
          "S-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Acoustic/CYCdh_Sab_HfHat-03.wav",
          "D-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Acoustic/CYCdh_K2room_ClHat-08.wav",
          "Z-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Acoustic/CYCdh_K2room_Flam-04.wav",
          "X-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Acoustic/CYCdh_K2room_Kick-04.wav",
          "C-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Acoustic/CYCdh_K2room_Rim-07.wav" },

        drumTags: {
          "Q-drum-pad": "Snare",
          "W-drum-pad": "Crash Cymbal",
          "E-drum-pad": "Snares Off",
          "A-drum-pad": "Open Hi-Hat",
          "S-drum-pad": "Half-open Hi-Hat",
          "D-drum-pad": "Closed Hi-Hat",
          "Z-drum-pad": "Flam",
          "X-drum-pad": "Kick",
          "C-drum-pad": "Rim Shot" } },


      Electro: {
        tag: 'Electro Kit',
        audioSources: {
          "Q-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Electro/CYCdh_ElecK01-Snr01.wav",
          "W-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Electro/CYCdh_ElecK02-FX01.wav",
          "E-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Electro/CYCdh_ElecK02-Clap01.wav",
          "A-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Electro/CYCdh_ElecK03-OpHat.wav",
          "S-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Electro/CYCdh_ElecK04-HfHat.wav",
          "D-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Electro/CYCdh_ElecK05-ClHat04.wav",
          "Z-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Electro/CYCdh_ElecK02-Kick01.wav",
          "X-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Electro/CYCdh_ElecK05-Kick01.wav",
          "C-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Electro/CYCdh_ElecK03-Tom02.wav" },

        drumTags: {
          "Q-drum-pad": "Snare",
          "W-drum-pad": "FX",
          "E-drum-pad": "Clap",
          "A-drum-pad": "Open Hi-Hat",
          "S-drum-pad": "Half-open Hi-Hat",
          "D-drum-pad": "Closed Hi-Hat",
          "Z-drum-pad": "Kick 1",
          "X-drum-pad": "Kick 2",
          "C-drum-pad": "Tom-tom" } },


      Vinyl: {
        tag: 'Vinyl Kit',
        audioSources: {
          "Q-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Vinyl/CYCdh_VinylK3-Snr01.wav",
          "W-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Vinyl/CYCdh_VinylK2-Ride01.wav",
          "E-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Vinyl/CYCdh_VinylK1-Shkr01.wav",
          "A-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Vinyl/CYCdh_VinylK4-OpHat02.wav",
          "S-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Vinyl/CYCdh_VinylK2-HfHat.wav",
          "D-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Vinyl/CYCdh_VinylK4-ClHat04.wav",
          "Z-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Vinyl/CYCdh_VinylK1-Kick03.wav",
          "X-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Vinyl/CYCdh_VinylK3-Kick01.wav",
          "C-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Vinyl/CYCdh_VinylK2-Tom02.wav" },

        drumTags: {
          "Q-drum-pad": "Snare 1",
          "W-drum-pad": "Ride Cymbal",
          "E-drum-pad": "Shaker",
          "A-drum-pad": "Open Hi-Hat",
          "S-drum-pad": "Half-open Hi-Hat",
          "D-drum-pad": "Closed Hi-Hat",
          "Z-drum-pad": "Kick 1",
          "X-drum-pad": "Kick 2",
          "C-drum-pad": "Tom-tom" } },


      Kurzweil: {
        tag: 'Kurzweil Kit',
        audioSources: {
          "Q-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Kurzweil/CYCdh_Kurz01-Snr03.wav",
          "W-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Kurzweil/CYCdh_Kurz07-SdSt.wav",
          "E-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Kurzweil/CYCdh_Kurz08-Perc04.wav",
          "A-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Kurzweil/CYCdh_Kurz04-OpHat.wav",
          "S-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Kurzweil/CYCdh_Kurz03-HfHat.wav",
          "D-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Kurzweil/CYCdh_Kurz02-ClHat.wav",
          "Z-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Kurzweil/CYCdh_Kurz01-Tom01.wav",
          "X-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Kurzweil/CYCdh_Kurz06-Kick02.wav",
          "C-drum-pad": "https://s3-sa-east-1.amazonaws.com/myhostedfiles.raulf/Audio+Clips/Drums/Kurzweil/CYCdh_Kurz08-Tom02.wav" },

        drumTags: {
          "Q-drum-pad": "Snare",
          "W-drum-pad": "Side Stick",
          "E-drum-pad": "Percussion",
          "A-drum-pad": "Open Hi-Hat",
          "S-drum-pad": "Half-open Hi-Hat",
          "D-drum-pad": "Closed Hi-Hat",
          "Z-drum-pad": "Tom-tom 1",
          "X-drum-pad": "Kick",
          "C-drum-pad": "Tom-tom 2" } } };




    _this.displayClock;
    _this.buttonClock;

    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handlePower = _this.handlePower.bind(_this);
    _this.handleKitChange = _this.handleKitChange.bind(_this);
    _this.changeVol = _this.changeVol.bind(_this);

    _this.state = {
      power: true,
      clipLabel: "",
      currentKit: _this.kitLibrary["Acoustic"],
      volume: 0.6,
      prevVolume: 0 };return _this;

  }_createClass(DrumMachine, [{ key: "handleKeyPress", value: function handleKeyPress(

    event) {

      clearTimeout(this.displayClock);

      var key = event.key.toUpperCase();
      var clip = key + '-pad-audioclip';
      var pad = key + '-drum-pad';

      if (key === "P") {
        this.handlePower();
      } else if (this.state.power) {

        document.getElementById(pad).click();

        /*const node = document.getElementById(clip);
                                              node.volume = this.state.volume;
                                              if (node.paused) {
                                                node.play();
                                              } else {
                                                node.currentTime = 0;
                                              }
                                              this.setState({
                                                clipLabel: this.state.currentKit['drumTags'][pad]
                                              });*/

      }

      /*this.displayClock = setTimeout(
          (() => {
            this.setState({ clipLabel: "" });
          }).bind(this),
          1500
        );
        document.getElementById(pad).className = "drum-pad btn btn-dark text-white";
        this.buttonClock = setTimeout(
          function() {
            document.getElementById(pad).className = "drum-pad btn btn-secondary text-white";
          }.bind(this),
          130
        );*/

    } }, { key: "handleClick", value: function handleClick(

    event) {

      clearTimeout(this.displayClock);

      var key = event.target.id;
      var audioTable = {
        "Q-drum-pad": "Q-pad-audioclip",
        "W-drum-pad": "W-pad-audioclip",
        "E-drum-pad": "E-pad-audioclip",
        "A-drum-pad": "A-pad-audioclip",
        "S-drum-pad": "S-pad-audioclip",
        "D-drum-pad": "D-pad-audioclip",
        "Z-drum-pad": "Z-pad-audioclip",
        "X-drum-pad": "X-pad-audioclip",
        "C-drum-pad": "C-pad-audioclip" };


      var node = document.getElementById(audioTable[key]);
      node.volume = this.state.volume;

      if (this.state.power) {
        if (node.paused) {
          node.play();
        } else {
          node.currentTime = 0;
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
      if (this.state.power) {
        this.setState({
          prevVolume: this.state.volume,
          volume: 0 });

      } else {
        this.setState({
          volume: this.state.prevVolume });

      }
      this.setState({
        power: !this.state.power,
        clipLabel: "" });

    } }, { key: "handleKitChange", value: function handleKitChange(

    event) {
      this.setState({
        currentKit: this.kitLibrary[event.target.id] });

    } }, { key: "changeVol", value: function changeVol(

    event) {
      if (this.state.power) {
        clearTimeout(this.displayClock);
        this.setState({
          clipLabel: "Volume: " + Math.round(event.target.value * 100),
          volume: event.target.value });

        this.displayClock = setTimeout(
        function () {
          this.setState({ clipLabel: "" });
        }.bind(this),
        1500);

      }
    } }, { key: "componentDidMount", value: function componentDidMount()

    {
      document.addEventListener("keydown", this.handleKeyPress);
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "dm-container" },
          React.createElement("div", { id: "drum-machine", className: "bg-dark" },
            React.createElement(DrumButtons, {
              kit: this.state.currentKit["audioSources"],
              parentHandleClick: this.handleClick }),

            React.createElement(Display, {
              changeVolume: this.changeVol,
              volumeValue: this.state.volume,
              handleChange: this.handleKitChange,
              dropdownLabel: this.state.currentKit.tag,
              clipLabel: this.state.clipLabel,
              parentHandlePower: this.handlePower,
              parentPowerState: this.state.power })),


          React.createElement("div", { id: "credits", className: "text-white" },
            React.createElement("h2", { id: "credits-line" }, "Coded and designed by ", React.createElement("a", { id: "port-link", href: "https://portfolio.raul-f.repl.co/", target: "_blank" }, "Raul F."))),

          this.state.visibility && this.state.controlJSX));


    } }]);return DrumMachine;}(React.Component);


var DrumButtons = function DrumButtons(props) {
  var btnClassName = "drum-pad btn btn-secondary text-white";
  return (
    React.createElement("div", { id: "outer-drum" },
      React.createElement("div", { id: "drum-set" },
        React.createElement("div", { className: "row drum-pad-row" },
          React.createElement("div", { className: "col drum-pad-box" },
            React.createElement("button", {
                id: "Q-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick,
                onTouchStart: props.parentHandleClick },

              React.createElement("audio", {
                id: "Q-pad-audioclip",
                src: props.kit["Q-drum-pad"],
                type: "audio/wav",
                className: "clip" }), "Q")),




          React.createElement("div", { className: "col drum-pad-box" },
            React.createElement("button", {
                id: "W-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick },

              React.createElement("audio", {
                id: "W-pad-audioclip",
                src: props.kit["W-drum-pad"],
                type: "audio/wav",
                className: "clip" }), "W")),




          React.createElement("div", { className: "col drum-pad-box" },
            React.createElement("button", {
                id: "E-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick },

              React.createElement("audio", {
                id: "E-pad-audioclip",
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
                id: "A-pad-audioclip",
                src: props.kit["A-drum-pad"],
                type: "audio/mp3",
                className: "clip" }), "A")),




          React.createElement("div", { className: "col-4 drum-pad-box" },
            React.createElement("button", {
                id: "S-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick },

              React.createElement("audio", {
                id: "S-pad-audioclip",
                src: props.kit["S-drum-pad"],
                type: "audio/mp3",
                className: "clip" }), "S")),




          React.createElement("div", { className: "col-4 drum-pad-box" },
            React.createElement("button", {
                id: "D-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick },

              React.createElement("audio", {
                id: "D-pad-audioclip",
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
                id: "Z-pad-audioclip",
                src: props.kit["Z-drum-pad"],
                type: "audio/wav",
                className: "clip" }), "Z")),




          React.createElement("div", { className: "col-4 drum-pad-box" },
            React.createElement("button", {
                id: "X-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick },

              React.createElement("audio", {
                id: "X-pad-audioclip",
                src: props.kit["X-drum-pad"],
                type: "audio/wav",
                className: "clip" }), "X")),




          React.createElement("div", { className: "col-4 drum-pad-box" },
            React.createElement("button", {
                id: "C-drum-pad",
                className: btnClassName,
                onClick: props.parentHandleClick },

              React.createElement("audio", {
                id: "C-pad-audioclip",
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
    React.createElement("div", { id: "outer-display" },
      React.createElement("div", { id: "inner-display" },
        React.createElement("div", {
            id: "power-slider",
            style: powerStyle,
            onClick: props.parentHandlePower },

          React.createElement("button", { id: "power-button", className: "btn btn-dark" },
            React.createElement("i", { "class": "fas fa-power-off " + powerIconClass }))),



        React.createElement("input", { value: props.volumeValue, id: "volume-slider", className: "custom-range", type: "range", min: "0", max: "1", step: "0.01", onChange: props.changeVolume }),

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