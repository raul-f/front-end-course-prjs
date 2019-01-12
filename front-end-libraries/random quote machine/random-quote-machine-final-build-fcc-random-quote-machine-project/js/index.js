var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var QuoteAndAuthor = function (_React$Component) {_inherits(QuoteAndAuthor, _React$Component);
	function QuoteAndAuthor(props) {_classCallCheck(this, QuoteAndAuthor);return _possibleConstructorReturn(this, (QuoteAndAuthor.__proto__ || Object.getPrototypeOf(QuoteAndAuthor)).call(this,
		props));
	}_createClass(QuoteAndAuthor, [{ key: "render", value: function render()
		{
			return (
				React.createElement("div", { id: "content" },
					React.createElement("p", { id: "text" },
						React.createElement("i", { "class": "fa fa-quote-left" }), " ", this.props.quote, " ",
						React.createElement("i", { "class": "fa fa-quote-right" })),

					React.createElement("h5", { id: "author" }, "- ", this.props.author)));


		} }]);return QuoteAndAuthor;}(React.Component);var


ButtonBar = function (_React$Component2) {_inherits(ButtonBar, _React$Component2);
	function ButtonBar(props) {_classCallCheck(this, ButtonBar);return _possibleConstructorReturn(this, (ButtonBar.__proto__ || Object.getPrototypeOf(ButtonBar)).call(this,
		props));
	}_createClass(ButtonBar, [{ key: "render", value: function render()
		{
			var ttQuote = this.props.quote.split(" ").join("%20");
			var ttAuthor = this.props.author.split(" ").join("%20");

			return (
				React.createElement("div", { id: "tools" },
					React.createElement("div", null,
						React.createElement("a", {
								href: "https://twitter.com/intent/tweet?hashtags=quotes,freeCodeCamp&text=\"" + ttQuote + "\"%20-%20" + ttAuthor + "%20",
								title: "Tweet this quote!",
								id: "tweet-quote",
								className: "text-secondary",
								target: "_blank" },

							React.createElement("i", { id: "tweet", className: "fab fa-3x fa-twitter-square" }))),






					React.createElement("button", {
							id: "new-quote",
							className: "btn btn-outline-secondary",
							onClick: this.props.raffleQuote },

						React.createElement("i", { "class": "fas fa-2x fa-arrow-right" }))));



		} }]);return ButtonBar;}(React.Component);var


QuoteBox = function (_React$Component3) {_inherits(QuoteBox, _React$Component3);
	function QuoteBox(props) {_classCallCheck(this, QuoteBox);var _this3 = _possibleConstructorReturn(this, (QuoteBox.__proto__ || Object.getPrototypeOf(QuoteBox)).call(this,
		props));

		_this3.raffleQuote = _this3.raffleQuote.bind(_this3);

		_this3.quoteBank = [
		{
			author: "George Bernard Shaw",
			quote:
			"The reasonable man adapts himself to the world: the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man." },

		{
			author: "Oscar Wilde",
			quote: "You can never be overdressed or overeducated." },

		{
			author: "Oscar Wilde",
			quote:
			"Anyone who lives within their means suffers from a lack of imagination." },

		{
			author: "Winston Churchill",
			quote:
			"Success is stumbling from failure to failure with no loss of enthusiasm." },

		{
			author: "Winston Churchill",
			quote:
			"You have enemies? Good. That means you've stood up for something, sometime in your life." },

		{
			author: "George Orwell",
			quote: "In a time of deceit telling the truth is a revolutionary act." },

		{
			author: "George Orwell",
			quote:
			"Every generation imagines itself to be more intelligent than the one that went before it, and wiser than the one that comes after it." },

		{
			author: "Franklin D. Roosevelt",
			quote:
			"Books can not be killed by fire. People die, but books never die. No man and no force can abolish memory... In this war, we know, books are weapons. And it is a part of your dedication always to make them weapons for man's freedom." },

		{
			author: "Franklin D. Roosevelt",
			quote:
			"Democracy cannot succeed unless those who express their choice are prepared to choose wisely. The real safeguard of democracy, therefore, is education." },

		{
			author: "George Bernard Shaw",
			quote:
			"Success does not consist in never making mistakes but in never making the same one a second time." },

		{
			author: "Franklin D. Roosevelt",
			quote:
			"Happiness lies in the joy of achievement and the thrill of creative effort." },

		{ author: "James Joyce", quote: "Life is too short to read a bad book." },
		{
			author: "Eleanor Roosevelt",
			quote: "You can often change your circumstances by changing your attitude" },

		{
			author: "Eleanor Roosevelt",
			quote: "Happiness is not a goal... it's a by-product of a life well lived." },

		{
			author: "David Hilbert",
			quote:
			"The infinite! No other question has ever moved so profoundly the spirit of man." },

		{ author: "David Hilbert", quote: "We must know. We will know." },
		{
			author: "Eleanor Roosevelt",
			quote: "What could we accomplish if we knew we could not fail?" },

		{
			author: "Charles Bukowski",
			quote:
			"We're all going to die, all of us, what a circus! That alone should make us love each other but it doesn't. We are terrorized and flattened by trivialities, we are eaten up by nothing." },

		{
			author: "Theodore Roosevelt",
			quote: "Do what you can, with what you have, where you are." },

		{
			author: "Theodore Roosevelt",
			quote:
			"The only man who never makes mistakes is the man who never does anything." },

		{
			author: "Bertrand Russell",
			quote: "I would never die for my beliefs because I might be wrong." },

		{
			author: "Bertrand Russell",
			quote:
			"In all affairs it's a healthy thing now and then to hang a question mark on the things you have long taken for granted." },

		{
			author: "Jean-Paul Sartre",
			quote:
			"Man is condemned to be free; because once thrown into the world, he is responsible for everything he does. It is up to you to give [life] a meaning." },

		{
			author: "Jean-Paul Sartre",
			quote: "There may be more beautiful times, but this one is ours." },

		{
			author: "Jean-Paul Sartre",
			quote:
			"Do you think that I count the days? There is only one day left, always starting over: it is given to us at dawn and taken away from us at dusk." },

		{
			author: "Albert Einstein",
			quote:
			"I speak to everyone in the same way, whether he is the garbage man or the president of the university." },

		{
			author: "Albert Einstein",
			quote:
			"I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world." },

		{
			author: "Albert Einstein",
			quote:
			"Great spirits have always encountered violent opposition from mediocre minds." },

		{
			author: "Albert Einstein",
			quote: "Anyone who has never made a mistake has never tried anything new." },

		{
			author: "Ronald Reagan",
			quote:
			"There is no limit to the amount of good you can do if you don't care who gets the credit." },

		{
			author: "Ronald Reagan",
			quote:
			"The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things." },

		{
			author: "Barack Obama",
			quote:
			"A change is brought about because ordinary people do extraordinary things." },

		{
			author: "Barack Obama",
			quote:
			"You can’t let your failures define you. You have to let your failures teach you." },

		{ author: "J.R.R. Tolkien", quote: "Not all those who wander are lost." },
		{
			author: "J.R.R. Tolkien",
			quote: "There is some good in this world, and it's worth fighting for." },

		{
			author: "J.R.R. Tolkien",
			quote: "Faithless is he that says farewell when the road darkens." },

		{
			author: "Johann Wolfgang von Goethe",
			quote:
			"Knowing is not enough; we must apply. Wishing is not enough; we must do." },

		{
			author: "George Bernard Shaw",
			quote:
			"A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing." }];



		_this3.state = {
			currentQuote: _this3.quoteBank[0]["quote"],
			currentAuthor: _this3.quoteBank[0]["author"] };return _this3;

	}_createClass(QuoteBox, [{ key: "raffleQuote", value: function raffleQuote()

		{
			var newIndex = Math.floor(Math.random() * this.quoteBank.length);
			this.setState({
				currentQuote: this.quoteBank[newIndex]["quote"],
				currentAuthor: this.quoteBank[newIndex]["author"] });

		} }, { key: "render", value: function render()

		{
			/*let quote = quoteBank[0]['quote'];
     let author = quoteBank[0]['author'];*/

			/*let ttQuote = quote.split(" ").join("%20");*/

			return (
				React.createElement("div", { id: "quote-box", className: "card" },
					React.createElement(QuoteAndAuthor, {
						quote: this.state.currentQuote,
						author: this.state.currentAuthor }),

					React.createElement(ButtonBar, {
						quote: this.state.currentQuote,
						author: this.state.currentAuthor,
						raffleQuote: this.raffleQuote }),

					React.createElement("div", { id: "credits", className: "" },
						React.createElement("h2", { id: "credits-line" }, "Coded and designed by",
							" ",
							React.createElement("a", {
									id: "port-link",
									href: "https://portfolio.raul-f.repl.co/",
									target: "_blank" }, "Raul F.")))));







		} }]);return QuoteBox;}(React.Component);var


App = function (_React$Component4) {_inherits(App, _React$Component4);
	function App(props) {_classCallCheck(this, App);return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
		props));
	}_createClass(App, [{ key: "render", value: function render()
		{
			return (
				React.createElement("div", { className: "container-fluid", id: "app" },
					React.createElement(QuoteBox, null)));


		} }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));