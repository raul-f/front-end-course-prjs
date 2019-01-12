var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}marked.setOptions({
    gfm: true,
    breaks: true });var


App = function (_React$Component) {_inherits(App, _React$Component);
    function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
        props));
        var firstInput = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)";












































        _this.state = {
            input: firstInput,
            preview: marked(firstInput),
            crtView: "both" };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.changeView = _this.changeView.bind(_this);return _this;
    }_createClass(App, [{ key: "handleChange", value: function handleChange(

        event) {
            var result = marked(event.target.value);
            this.setState({
                input: event.target.value,
                preview: result });

        } }, { key: "changeView", value: function changeView(

        event) {
            switch (event.target.id) {
                case "edit-btn":
                    console.log("EXPAND EDITOR!");
                    if (this.state.crtView === "both") {
                        this.setState({
                            crtView: "edit" });

                    } else {
                        this.setState({
                            crtView: "both" });

                    }
                    break;
                case "prev-btn":
                    console.log("EXPAND PREVIEWER!");
                    if (this.state.crtView === "both") {
                        this.setState({
                            crtView: "prev" });

                    } else {
                        this.setState({
                            crtView: "both" });

                    }}

        } }, { key: "render", value: function render()

        {
            return (
                React.createElement("div", { id: "app-frame" },
                    React.createElement(InputField, {
                        input: this.state.input,
                        handleChange: this.handleChange,
                        viewMode: this.state.crtView,
                        changeView: this.changeView }),

                    React.createElement(OutputField, {
                        textPreview: this.state.preview,
                        viewMode: this.state.crtView,
                        changeView: this.changeView })));



        } }]);return App;}(React.Component);var


InputField = function (_React$Component2) {_inherits(InputField, _React$Component2);
    function InputField(props) {_classCallCheck(this, InputField);return _possibleConstructorReturn(this, (InputField.__proto__ || Object.getPrototypeOf(InputField)).call(this,
        props));
    }_createClass(InputField, [{ key: "render", value: function render()
        {
            var displayMode = void 0;
            //
            if (this.props.viewMode === "prev") {
                displayMode = { display: "none" };
            } else if (this.props.viewMode === "both") {
                displayMode = { display: "flex", "flex-direction": "column" };
            } else {
                displayMode = {
                    display: "flex",
                    "flex-direction": "column",
                    width: "840px",
                    height: "1188px" };

            }
            return (
                React.createElement("div", { id: "editor-parent", style: displayMode },
                    React.createElement("div", { id: "editor-header", className: "bg-dark text-white" },
                        React.createElement("h2", null, "Editor"),
                        React.createElement("button", {
                                id: "edit-btn",
                                className: "icon-btn text-white",
                                onClick: this.props.changeView },

                            this.props.viewMode === "both" ?
                            React.createElement("i", { "class": "fas fa-expand-arrows-alt" }) :

                            React.createElement("i", { "class": "fas fa-undo-alt" }))),



                    React.createElement("textarea", {
                        value: this.props.input,
                        id: "editor",
                        onChange: this.props.handleChange,
                        spellcheck: "false" })));



        } }]);return InputField;}(React.Component);var


OutputField = function (_React$Component3) {_inherits(OutputField, _React$Component3);
    function OutputField(props) {_classCallCheck(this, OutputField);return _possibleConstructorReturn(this, (OutputField.__proto__ || Object.getPrototypeOf(OutputField)).call(this,
        props));
    }_createClass(OutputField, [{ key: "render", value: function render()
        {
            var displayMode = void 0;
            if (this.props.viewMode === "edit") {
                displayMode = { display: "none" };
            } else {
                displayMode = { display: "flex", "flex-direction": "column" };
            }
            return (
                React.createElement("div", { id: "preview-frame", style: displayMode },
                    React.createElement("div", { id: "preview-header", className: "bg-dark text-white" },
                        React.createElement("h2", null, "Preview"),
                        React.createElement("button", {
                                id: "prev-btn",
                                className: "icon-btn text-white",
                                onClick: this.props.changeView },

                            this.props.viewMode === "both" ?
                            React.createElement("i", { "class": "fas fa-expand-arrows-alt" }) :

                            React.createElement("i", { "class": "fas fa-undo-alt" }))),



                    React.createElement("div", {
                        id: "preview",
                        dangerouslySetInnerHTML: { __html: this.props.textPreview } })));



        } }]);return OutputField;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById("root"));