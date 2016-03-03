/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/src/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _app = __webpack_require__(1);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	React.render(React.createElement(_app2.default, null), document.getElementById("app")); /**
	                                                                                         * Created by jiaaobo on 16/3/1.
	                                                                                         */

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _appHeader = __webpack_require__(3);
	
	var _appHeader2 = _interopRequireDefault(_appHeader);
	
	var _appFooter = __webpack_require__(4);
	
	var _appFooter2 = _interopRequireDefault(_appFooter);
	
	var _appMain = __webpack_require__(5);
	
	var _appMain2 = _interopRequireDefault(_appMain);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App() {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));
	
	        _this.state = {
	            todoList: []
	        };
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: "changeTodoState",
	
	
	        //改变任务状态
	        value: function changeTodoState(index, isDone) {
	
	            this.state.todoList[index].isDone = isDone;
	            this.setState({});
	        }
	    }, {
	        key: "addTodo",
	
	
	        //添加任务
	        value: function addTodo(todoItem) {
	            var todoList = this.state.todoList;
	            todoList.push(todoItem);
	            this.setState({
	                todoList: todoList
	            });
	        }
	    }, {
	        key: "removeTodo",
	
	
	        //删除当前任务
	        value: function removeTodo(index) {
	            this.state.todoList.splice(index, 1);
	            this.setState({
	                todoList: this.state.todoList
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	
	            var props = {
	                todoCount: this.state.todoList.length || 0,
	                todoDoneCount: (this.state.todoList && this.state.todoList.filter(function (todo) {
	                    return todo.isDone;
	                })).length || 0
	            };
	
	            return _react2.default.createElement(
	                "div",
	                { className: "panel" },
	                _react2.default.createElement(_appHeader2.default, { addTodo: this.addTodo.bind(this) }),
	                _react2.default.createElement(_appMain2.default, { removeTodo: this.removeTodo.bind(this), todoList: this.state.todoList, changeTodoState: this.changeTodoState.bind(this) }),
	                _react2.default.createElement(_appFooter2.default, props)
	            );
	        }
	    }]);
	
	    return App;
	}(_react2.default.Component);
	
	exports.default = App;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jiaaobo on 16/3/1.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TodoHeader = function (_React$Component) {
	    _inherits(TodoHeader, _React$Component);
	
	    function TodoHeader() {
	        _classCallCheck(this, TodoHeader);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoHeader).apply(this, arguments));
	    }
	
	    _createClass(TodoHeader, [{
	        key: "handlerKeyUp",
	
	
	        //添加新任务
	        value: function handlerKeyUp(event) {
	
	            if (event.keyCode === 13) {
	                var val = event.target.value;
	                if (!val) return false;
	
	                var newToDoItem = {
	                    text: val,
	                    isChecked: false
	                };
	
	                event.target.value = "";
	                this.props.addTodo(newToDoItem);
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	
	            return _react2.default.createElement(
	                "div",
	                { className: "panel-header" },
	                _react2.default.createElement("input", { type: "text", placeholder: "您的任务?", onKeyUp: this.handlerKeyUp.bind(this) })
	            );
	        }
	    }]);
	
	    return TodoHeader;
	}(_react2.default.Component);
	
	exports.default = TodoHeader;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jiaaobo on 16/3/1.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TodoFooter = function (_React$Component) {
	    _inherits(TodoFooter, _React$Component);
	
	    function TodoFooter() {
	        _classCallCheck(this, TodoFooter);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoFooter).apply(this, arguments));
	    }
	
	    _createClass(TodoFooter, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "clearfix todo-footer" },
	                _react2.default.createElement(
	                    "span",
	                    null,
	                    this.props.todoDoneCount,
	                    "已完成/",
	                    this.props.todoCount,
	                    "总数"
	                )
	            );
	        }
	    }]);
	
	    return TodoFooter;
	}(_react2.default.Component);
	
	exports.default = TodoFooter;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _appItem = __webpack_require__(6);
	
	var _appItem2 = _interopRequireDefault(_appItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jiaaobo on 16/3/1.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TodoMain = function (_React$Component) {
	    _inherits(TodoMain, _React$Component);
	
	    function TodoMain() {
	        _classCallCheck(this, TodoMain);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoMain).apply(this, arguments));
	    }
	
	    _createClass(TodoMain, [{
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            return _react2.default.createElement(
	                "ul",
	                { className: "todo-list" },
	                this.props.todoList.map(function (todo, index) {
	                    return _react2.default.createElement(_appItem2.default, _extends({ key: index }, todo, { index: index }, _this2.props));
	                })
	            );
	        }
	    }]);
	
	    return TodoMain;
	}(_react2.default.Component);
	
	exports.default = TodoMain;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by jiaaobo on 16/3/1.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	var TodoItem = function (_React$Component) {
	    _inherits(TodoItem, _React$Component);
	
	    function TodoItem() {
	        _classCallCheck(this, TodoItem);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoItem).apply(this, arguments));
	    }
	
	    _createClass(TodoItem, [{
	        key: "handlerChange",
	
	
	        //处理任务是否完成
	        value: function handlerChange() {
	            var isDone = !this.props.isDone;
	            this.props.changeTodoState(this.props.index, isDone);
	        }
	    }, {
	        key: "handlerMouseOver",
	
	
	        // 鼠标移入
	        value: function handlerMouseOver() {
	            _react2.default.findDOMNode(this.refs.deleteBtn).style.display = "inline";
	        }
	
	        // 鼠标移出
	
	    }, {
	        key: "handlerMouseOut",
	        value: function handlerMouseOut() {
	            _react2.default.findDOMNode(this.refs.deleteBtn).style.display = "none";
	        }
	    }, {
	        key: "handlerDelete",
	        value: function handlerDelete() {
	            this.props.removeTodo(this.props.index);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var doneStyle = this.props.isDone ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
	            return _react2.default.createElement(
	                "li",
	                {
	                    onMouseOver: this.handlerMouseOver.bind(this),
	                    onMouseOut: this.handlerMouseOut.bind(this)
	                },
	                _react2.default.createElement("input", { type: "checkbox", checked: this.props.isDone, onChange: this.handlerChange.bind(this) }),
	                _react2.default.createElement(
	                    "span",
	                    { style: doneStyle },
	                    this.props.text
	                ),
	                _react2.default.createElement(
	                    "button",
	                    { style: { 'display': 'none' }, ref: "deleteBtn", onClick: this.handlerDelete.bind(this), className: "fr" },
	                    "删除"
	                )
	            );
	        }
	    }]);
	
	    return TodoItem;
	}(_react2.default.Component);
	
	exports.default = TodoItem;

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map