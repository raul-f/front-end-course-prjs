var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Calculator = function (_React$Component) {_inherits(Calculator, _React$Component);
	function Calculator(props) {_classCallCheck(this, Calculator);var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this,
		props));

		_this.referenceTable = {
			zero: "0",
			one: "1",
			two: "2",
			three: "3",
			four: "4",
			five: "5",
			six: "6",
			seven: "7",
			eight: "8",
			nine: "9",
			decimal: ".",
			add: "+",
			subtract: "-",
			multiply: "*",
			divide: "/",
			equals: "=",
			clear: "C",
			Enter: "equals",
			Delete: "clear",
			"0": "zero",
			"1": "one",
			"2": "two",
			"3": "three",
			"4": "four",
			"5": "five",
			"6": "six",
			"7": "seven",
			"8": "eight",
			"9": "nine",
			",": "decimal",
			"+": "add",
			"-": "subtract",
			"*": "multiply",
			"/": "divide" };

		_this.tokenList = [];
		_this.itmStr = "";
		_this.result = 0;
		_this.regExNumber = /[0-9]/;
		_this.regExOperator = /[-+*/]/;
		_this.regExDecimal = /\./;
		_this.regExScope = /[-0-9+*/,]/;

		_this.handleClick = _this.handleClick.bind(_this);
		_this.handleKeyPress = _this.handleKeyPress.bind(_this);
		_this.clearMemory = _this.clearMemory.bind(_this);
		_this.calculateResult = _this.calculateResult.bind(_this);
		_this.processTL = _this.processTL.bind(_this);

		_this.state = {
			displayCalculation: "",
			displayResult: "0",
			debugJSX: React.createElement("h2", null) };return _this;

	}

	//To-do: set up the adding of elements to the token list and develop calculation method.
	_createClass(Calculator, [{ key: "handleClick", value: function handleClick(
		event) {
			event.target.blur();

			var symbol = this.referenceTable[event.target.id];
			var lastIndex = this.tokenList.length - 1;
			var leng = this.itmStr.length;

			//first stop: all digits and 0 and '.'
			if (
			this.tokenList.length === 0 ||
			this.regExOperator.test(this.tokenList[lastIndex]))
			{
				if (this.regExNumber.test(symbol) && leng < 12) {
					if (symbol !== "0" && this.itmStr !== "0") {
						this.itmStr += symbol;
					} else if (this.itmStr !== "0") {
						this.itmStr += symbol;
					} else if (this.itmStr === "0") {
						this.itmStr = symbol;
					}
					this.setState({
						displayResult: this.itmStr });

				} else if (symbol === "." && !this.regExDecimal.test(this.itmStr)) {
					if (this.itmStr === "") {
						this.itmStr = "0.";
					} else {
						this.itmStr += symbol;
					}
					this.setState({
						displayResult: this.itmStr });

				}
			}

			// second stop: deal with operators

			if (this.regExOperator.test(symbol)) {
				if (this.tokenList.length === 0 && this.itmStr === "") {
					console.log("I have used result as props");
					this.tokenList.push(this.result);
					this.tokenList.push(symbol);
				} else if (this.itmStr === "") {
					this.tokenList[lastIndex] = symbol;
				} else if (this.itmStr === "0." && this.tokenList[lastIndex] !== "/") {
					this.tokenList.push("0", symbol);
					this.itmStr = "";
				} else if (
				(this.itmStr === "0." || this.itmStr === "0") &&
				this.tokenList[lastIndex] === "/")
				{
					this.setState({
						displayResult: "Cannot divide by 0!" });

				} else {
					this.tokenList.push(this.itmStr, symbol);
					this.itmStr = "";
				}
			}

			this.setState({
				displayCalculation: this.tokenList.join(" ") });

		} }, { key: "handleKeyPress", value: function handleKeyPress(

		event) {
			document.getElementById(this.referenceTable[event.key]).click();

			//facepalm
			/*if (key === 'q') {
       document.getElementById('one').click();
     }*/
		} }, { key: "clearMemory", value: function clearMemory(

		event) {
			event.target.blur();
			this.tokenList = [];
			this.itmStr = "";
			this.result = 0;
			this.setState({
				displayCalculation: "",
				displayResult: "0",
				debugJSX: React.createElement("h2", null) });

		} }, { key: "calculateResult", value: function calculateResult()

		{
			var lastIndex = this.tokenList.length - 1;
			var calcSrc = [].concat(_toConsumableArray(this.tokenList));
			console.log(this.tokenList);

			if (this.tokenList.length > 0) {
				console.log("Entered! - 1");
				if (
				(this.itmStr === "0." || this.itmStr === "0") &&
				this.tokenList[lastIndex] === "/")
				{
					//console.log('Entered! - 2');
					this.setState({
						displayCalculation: "",
						displayResult: "Cannot divide by 0!" });

				} else {
					console.log("Entered! - 2");
					if (this.itmStr !== "") {
						console.log("Entered! - 3");
						if (this.itmStr === "0.") {
							//console.log('Entered! - 4');
							this.tokenList.push("0");
							calcSrc.push("0");
						} else {
							console.log("Entered! - 4");
							this.tokenList.push(this.itmStr);
							calcSrc.push(this.itmStr);
							console.log("The token list is " + JSON.stringify(this.tokenList));
							console.log("The calc list is " + JSON.stringify(calcSrc));
						}
					} else if (this.regExOperator.test(this.tokenList[lastIndex])) {
						this.tokenList.pop();
						calcSrc.pop();
					}

					this.itmStr = "";

					this.processTL(this.tokenList);
					console.log("Entered! - 10");

					this.setState({
						displayResult: this.result,
						displayCalculation: calcSrc.join(" ") });


					this.tokenList.pop();
				}
			}
		} }, { key: "processTL", value: function processTL(

		list) {
			if (list.length === 1) {
				console.log("Entered! - 8");
				console.log(JSON.stringify(list));
				var check = list[0].toString();
				if (check.length > 12) {
					if (check[0] === "0") {
						var exponent = void 0;
						var localStr = check;
						for (var i = 2; i < localStr.length; i++) {
							if (localStr[i] !== "0") {
								exponent = i;
								break;
							}
						}
					} else {
					}
				}
				if (this.regExDecimal.test(check)) {
					this.result = Math.round(1000000000000 * parseFloat(check)) / 1000000000000;
					this.setState({
						displayResult: this.result });

				} else {
					console.log("Entered! - 9");
					this.result = check;
					this.setState({
						displayResult: this.result });

				}
			} else {
				console.log("Entered! - 5");
				console.log(JSON.stringify(list) + " - 2");

				if (list.includes("*") || list.includes("/")) {
					//console.log("Entered! - 6");

					for (var _i = 0; _i < list.length; _i++) {
						if (list[_i] === "*" || list[_i] === "/") {
							if (list[_i] === "*") {
								if (
								this.regExDecimal.test(list[_i - 1]) ||
								this.regExDecimal.test(list[_i + 1]))
								{
									list[_i - 1] = parseFloat(list[_i - 1]) * parseFloat(list[_i + 1]);
								} else {
									list[_i - 1] = parseInt(list[_i - 1]) * parseInt(list[_i + 1]);
								}
								list.splice(_i, 2);
								console.log("MULTIPLY!");
								this.processTL(list);
							} else if (list[_i + 1] !== "0") {
								if (
								this.regExDecimal.test(list[_i - 1]) ||
								this.regExDecimal.test(list[_i + 1]))
								{
									list[_i - 1] = parseFloat(list[_i - 1]) / parseFloat(list[_i + 1]);
								} else {
									list[_i - 1] = parseInt(list[_i - 1]) / parseInt(list[_i + 1]);
								}
								list.splice(_i, 2);
								console.log("DIVIDE!");
								this.processTL(list);
							}
						}
					}
				} else {
					console.log("Entered! - 6");
					console.log(JSON.stringify(list));
					if (list[1] === "+") {
						if (this.regExDecimal.test(list[0]) || this.regExDecimal.test(list[2])) {
							//console.log("Entered! - 7");
							list[0] = parseFloat(list[0]) + parseFloat(list[2]);
						} else {
							console.log("Entered! - 7");
							list[0] = parseInt(list[0]) + parseInt(list[2]);
						}
						list.splice(1, 2);
						console.log("SUM!");
						this.processTL(list);
					} else {
						//console.log("Entered! - 8");
						if (this.regExDecimal.test(list[0]) || this.regExDecimal.test(list[2])) {
							list[0] = parseFloat(list[0]) - parseFloat(list[2]);
						} else {
							list[0] = parseInt(list[0]) - parseInt(list[2]);
						}
						list.splice(1, 2);
						console.log("SUBTRACT!");
						this.processTL(list);
					}
				}
			}
		} }, { key: "componentDidMount", value: function componentDidMount()

		{
			addEventListener("keydown", this.handleKeyPress);
		} }, { key: "render", value: function render()

		{
			return (
				React.createElement("div", { id: "calc-bg" },
					React.createElement("div", { id: "calc-body" },
						React.createElement(Display, {
							calculation: this.state.displayCalculation,
							result: this.state.displayResult }),

						React.createElement(Buttons, {
							parentHandler: this.handleClick,
							clear: this.clearMemory,
							calculate: this.calculateResult })),


					this.state.debugJSX));


		} }]);return Calculator;}(React.Component);


var Display = function Display(props) {
	return (
		React.createElement("div", { id: "outer-display" },
			React.createElement("div", { id: "secondary-display" },
				React.createElement("p", { id: "display-calculation" }, props.calculation)),

			React.createElement("div", { id: "display" }, props.result)));


};

var Buttons = function Buttons(props) {
	return (
		React.createElement("div", null,
			React.createElement("div", { id: "digits-operators" },
				React.createElement("div", { id: "upper-buttons", className: "row m-0 btn-row" },
					React.createElement("button", {
							id: "clear",
							className: "col-6 btn btn-danger calc-btn non-icon",
							onClick: props.clear }, "AC"),



					React.createElement("button", {
							id: "multiply",
							className: "col-3 btn btn-dark calc-btn",
							onClick: props.parentHandler },

						React.createElement("i", { "class": "fas fa-times" })),

					React.createElement("button", {
							id: "divide",
							className: "col-3 btn btn-dark calc-btn",
							onClick: props.parentHandler },

						React.createElement("i", { "class": "fas fa-divide" }))),


				React.createElement("div", { /*id='row-1'*/className: "row m-0 btn-row" },
					React.createElement("button", {
							id: "one",
							className: "col btn btn-secondary calc-btn non-icon",
							onClick: props.parentHandler }, "1"),



					React.createElement("button", {
							id: "two",
							className: "col btn btn-secondary calc-btn non-icon",
							onClick: props.parentHandler }, "2"),



					React.createElement("button", {
							id: "three",
							className: "col btn btn-secondary calc-btn non-icon",
							onClick: props.parentHandler }, "3"),



					React.createElement("button", {
							id: "add",
							className: "col btn btn-dark calc-btn",
							onClick: props.parentHandler },

						React.createElement("i", { "class": "fas fa-plus" }))),


				React.createElement("div", { className: "row m-0 btn-row" },
					React.createElement("button", {
							id: "four",
							className: "col btn btn-secondary calc-btn non-icon",
							onClick: props.parentHandler }, "4"),



					React.createElement("button", {
							id: "five",
							className: "col btn btn-secondary calc-btn non-icon",
							onClick: props.parentHandler }, "5"),



					React.createElement("button", {
							id: "six",
							className: "col btn btn-secondary calc-btn non-icon",
							onClick: props.parentHandler }, "6"),



					React.createElement("button", {
							id: "subtract",
							className: "col btn btn-dark calc-btn",
							onClick: props.parentHandler },

						React.createElement("i", { "class": "fas fa-minus" }))),


				React.createElement("div", { className: "row m-0" },
					React.createElement("div", { id: "lower-digits", className: "col-9" },
						React.createElement("div", { className: "row m-0 btn-row" },
							React.createElement("button", {
									id: "seven",
									className: "col btn btn-secondary calc-btn non-icon",
									onClick: props.parentHandler }, "7"),



							React.createElement("button", {
									id: "eight",
									className: "col btn btn-secondary calc-btn non-icon",
									onClick: props.parentHandler }, "8"),



							React.createElement("button", {
									id: "nine",
									className: "col btn btn-secondary calc-btn non-icon",
									onClick: props.parentHandler }, "9")),




						React.createElement("div", { id: "zero-decimal", className: "row m-0 btn-row" },
							React.createElement("button", {
									id: "zero",
									className: "col-8 btn btn-secondary calc-btn non-icon",
									onClick: props.parentHandler }, "0"),



							React.createElement("button", {
									id: "decimal",
									className: "col-4 btn btn-secondary calc-btn non-icon",
									onClick: props.parentHandler }, "."))),





					React.createElement("button", {
							id: "equals",
							className: "dummy col-3 btn btn-dark calc-btn",
							onClick: props.calculate },

						React.createElement("i", { "class": "fas fa-equals" }))))));





};

ReactDOM.render(React.createElement(Calculator, null), document.getElementById("root"));