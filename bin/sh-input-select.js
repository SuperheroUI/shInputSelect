(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["sh-input-select"] = factory(require("react"), require("lodash"));
	else
		root["sh-input-select"] = factory(root["React"], root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("d:\\projects\\SuperheroUI\\shInputSelect\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("d:\\projects\\SuperheroUI\\shInputSelect\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _shInputSelect = __webpack_require__(/*! ./sh-input-select.js */ 1);
	
	var _shInputSelect2 = _interopRequireDefault(_shInputSelect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _shInputSelect2.default;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("d:\\projects\\SuperheroUI\\shInputSelect\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */
/*!********************************!*\
  !*** ./src/sh-input-select.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("d:\\projects\\SuperheroUI\\shInputSelect\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("d:\\projects\\SuperheroUI\\shInputSelect\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(/*! lodash */ 3);
	
	var _ = _interopRequireWildcard(_lodash);
	
	var _utilClassesService = __webpack_require__(/*! ./util-classes.service.js */ 4);
	
	var _utilClassesService2 = _interopRequireDefault(_utilClassesService);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(/*! ./sh-input-select.scss */ 5);
	
	var ShInputSelect = function (_React$Component) {
	    _inherits(ShInputSelect, _React$Component);
	
	    /** @namespace this.refs.dropdownElement */
	    /** @namespace this.refs.mainElement */
	
	    function ShInputSelect() {
	        _classCallCheck(this, ShInputSelect);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ShInputSelect).call(this));
	
	        _this.state = {
	            value: null,
	            dropdownOpen: false
	        };
	
	        _this.checkDocumentEvent = _this.checkDocumentEvent.bind(_this);
	        _this.inputKeyUp = _this.inputKeyUp.bind(_this);
	        _this.toggleDropdown = _this.toggleDropdown.bind(_this);
	        _this.optionKeyUp = _this.optionKeyUp.bind(_this);
	        _this.optionSelect = _this.optionSelect.bind(_this);
	        _this.navigateTab = _this.navigateTab.bind(_this);
	        return _this;
	    }
	
	    _createClass(ShInputSelect, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.updateState(this.props.value);
	
	            document.addEventListener('click', this.checkDocumentEvent);
	            document.addEventListener('keyup', this.checkDocumentEvent);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(props) {
	            this.updateState(props.value);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            document.removeEventListener('click', this.checkDocumentEvent);
	            document.removeEventListener('keyup', this.checkDocumentEvent);
	        }
	    }, {
	        key: 'checkDocumentEvent',
	        value: function checkDocumentEvent(event) {
	            if (this.state.dropdownOpen && !_.includes(event.path, this.refs.mainElement)) {
	                this.setState({
	                    dropdownOpen: false
	                });
	            }
	        }
	    }, {
	        key: 'updateState',
	        value: function updateState(value) {
	            var _this2 = this;
	
	            if (this.isMulti()) {
	                var newValue = this.props.options.filter(function (option) {
	                    return !!_.includes(value, _this2.getIdField(option));
	                });
	
	                this.setState({
	                    value: newValue
	                });
	            } else {
	                this.setState({
	                    value: this.getOption(value)
	                });
	            }
	        }
	    }, {
	        key: 'inputKeyUp',
	        value: function inputKeyUp(event) {
	            console.log('event', event.keyCode);
	            switch (event.keyCode) {
	                case 32:
	                    {
	                        // Space
	                        this.toggleDropdown();
	                        break;
	                    }
	                case 27:
	                    {
	                        // Esc
	                        this.setState({
	                            dropdownOpen: false
	                        });
	                        break;
	                    }
	                case 40:
	                    {
	                        // Down Arrow
	                        this.navigateTab(-1, -1);
	                    }
	            }
	        }
	    }, {
	        key: 'toggleDropdown',
	        value: function toggleDropdown() {
	            this.setState({
	                dropdownOpen: !this.state.dropdownOpen
	            });
	        }
	    }, {
	        key: 'optionKeyUp',
	        value: function optionKeyUp(option, index) {
	            var _this3 = this;
	
	            return function (event) {
	                console.log('event', event);
	                switch (event.keyCode) {
	                    case 32:
	                        {
	                            // Space
	                            _this3.optionSelect(option)();
	                            break;
	                        }
	                    case 27:
	                        {
	                            // Esc
	                            _this3.setState({
	                                dropdownOpen: false
	                            });
	                            break;
	                        }
	                    case 38:
	                        {
	                            // Up Arrow
	                            _this3.navigateTab(1, index);
	                            break;
	                        }
	                    case 40:
	                        {
	                            // Down Arrow
	                            _this3.navigateTab(-1, index);
	                            break;
	                        }
	                }
	            };
	        }
	    }, {
	        key: 'navigateTab',
	        value: function navigateTab(direction, index) {
	            if (!this.state.dropdownOpen) {
	                this.setState({
	                    dropdownOpen: true
	                });
	            }
	
	            var currentElement = null;
	            if (index < 0) {
	                currentElement = this.refs.dropdownElement.lastElementChild;
	            } else {
	                currentElement = this.refs.dropdownElement.children[index];
	            }
	
	            var nextElement = null;
	            if (direction < 0) {
	                nextElement = currentElement.nextElementSibling;
	
	                if (!nextElement) {
	                    nextElement = currentElement.parentElement.firstElementChild;
	                }
	            } else {
	                nextElement = currentElement.previousElementSibling;
	
	                if (!nextElement) {
	                    nextElement = currentElement.parentElement.lastElementChild;
	                }
	            }
	
	            if (nextElement) {
	                nextElement.focus();
	            }
	        }
	
	        /**
	         * Select this option
	         * @param option
	         * @returns {function()} this function does the actual work
	         */
	
	    }, {
	        key: 'optionSelect',
	        value: function optionSelect(option) {
	            var _this4 = this;
	
	            return function () {
	                if (_this4.isMulti()) {
	                    if (_.includes(_this4.state.value, option)) {
	                        var newValue = _.without(_this4.state.value, option);
	                        _this4.setState({
	                            value: newValue
	                        });
	
	                        _this4.props.onChange(newValue.map(function (value) {
	                            return _this4.getIdField(value);
	                        }));
	                    } else {
	                        var _newValue = _.concat(_this4.state.value, option);
	                        _this4.setState({
	                            value: _newValue
	                        });
	
	                        _this4.props.onChange(_newValue.map(function (value) {
	                            return _this4.getIdField(value);
	                        }));
	                    }
	                } else {
	                    var _newValue2 = _this4.getIdField(option);
	                    if (!_.isEqual(_this4.state.value, _newValue2)) {
	                        _this4.props.onChange(_newValue2);
	                    }
	
	                    _this4.setState({
	                        dropdownOpen: false,
	                        value: _newValue2
	                    });
	                }
	            };
	        }
	
	        /**
	         * Gets the proper value used to set the value of the select
	         * @param option - object to get idField for
	         * @returns {*} the value of the idField or the entire object
	         */
	
	    }, {
	        key: 'getIdField',
	        value: function getIdField(option) {
	            if (this.props.config.idField) {
	                return _.get(option, this.props.config.idField);
	            } else {
	                return option;
	            }
	        }
	
	        /**
	         * Get an option based on value and config
	         * @param value - value stored and changed
	         * @returns {object} Option that matches passed in value
	         */
	
	    }, {
	        key: 'getOption',
	        value: function getOption(value) {
	            if (this.props.config.idField) {
	                var search = {};
	                _.set(search, this.props.config.idField, value);
	                return _.find(this.props.options, search);
	            } else {
	                return value;
	            }
	        }
	
	        /**
	         * Get the proper displayable string for an option
	         * @param option - object to get the display for
	         * @returns {string} Visual representation of this option
	         */
	
	    }, {
	        key: 'getDisplay',
	        value: function getDisplay(option) {
	            if (_.isFunction(this.props.config.getDisplay)) {
	                return this.props.config.getDisplay(option);
	            } else if (_.isString(this.props.config.getDisplay)) {
	                return _.get(option, this.props.config.getDisplay);
	            } else {
	                return JSON.stringify(option);
	            }
	        }
	    }, {
	        key: 'isMulti',
	        value: function isMulti() {
	            return this.props.config.type === 'multi';
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this5 = this;
	
	            var mainClasses = {
	                shInputSelect: true,
	                openDown: true,
	                openUp: false,
	                closed: !this.state.dropdownOpen,
	                opened: this.state.dropdownOpen
	            };
	
	            var inputSelected = 'Select';
	            if (this.isMulti()) {
	                if (this.state.value.length === 0) {
	                    // Don't do anything
	                } else if (this.state.value.length === this.props.options.length) {
	                    inputSelected = 'All Selected';
	                } else if (this.state.value.length === 1) {
	                    inputSelected = this.getDisplay(this.state.value[0]);
	                } else {
	                    inputSelected = this.state.value.length + ' Selected';
	                }
	            } else if (this.state.value) {
	                inputSelected = this.getDisplay(this.state.value);
	            }
	            var input = _react2.default.createElement(
	                'div',
	                { className: 'input', tabIndex: '0', onClick: this.toggleDropdown, onKeyUp: this.inputKeyUp },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'inputSelected' },
	                    inputSelected
	                ),
	                _react2.default.createElement(
	                    'i',
	                    { className: 'icon-chevronDown' },
	                    'V'
	                )
	            );
	
	            var options = this.props.options.map(function (current, index) {
	                var showSelected = null;
	                if (_this5.isMulti()) {
	                    if (_.includes(_this5.state.value, current)) {
	                        showSelected = _react2.default.createElement(
	                            'i',
	                            { className: 'icon-checkboxChecked' },
	                            'X'
	                        );
	                    } else {
	                        showSelected = _react2.default.createElement(
	                            'i',
	                            { className: 'icon-checkboxEmpty' },
	                            'O'
	                        );
	                    }
	                }
	
	                return _react2.default.createElement(
	                    'div',
	                    { key: index, className: 'option', tabIndex: _this5.state.dropdownOpen ? 0 : -1, onClick: _this5.optionSelect(current), onKeyUp: _this5.optionKeyUp(current, index) },
	                    showSelected,
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'optionDetails' },
	                        _this5.getDisplay(current)
	                    )
	                );
	            });
	
	            var dropdownClasses = {
	                dropdown: true,
	                single: !this.isMulti(),
	                multi: this.isMulti()
	            };
	
	            var dropdown = _react2.default.createElement(
	                'div',
	                { className: 'dropdownWrapper' },
	                _react2.default.createElement(
	                    'div',
	                    { className: _utilClassesService2.default.getClassNames(dropdownClasses), ref: 'dropdownElement' },
	                    options
	                )
	            );
	
	            return _react2.default.createElement(
	                'div',
	                { ref: 'mainElement', className: _utilClassesService2.default.getClassNames(mainClasses) },
	                input,
	                dropdown
	            );
	        }
	    }]);
	
	    return ShInputSelect;
	}(_react2.default.Component);
	
	ShInputSelect.propTypes = {
	    value: _react2.default.PropTypes.any,
	    options: _react2.default.PropTypes.array.isRequired,
	    onChange: _react2.default.PropTypes.func,
	    config: _react2.default.PropTypes.object
	};
	
	ShInputSelect.defaultProps = {
	    value: null,
	    options: [],
	    onChange: _.noop,
	    config: {
	        getDisplay: function getDisplay(option) {
	            if (_.isObject(option)) {
	                if (option.name) {
	                    return option.name;
	                } else {
	                    return JSON.stringify(option);
	                }
	            } else {
	                return option;
	            }
	        },
	        type: 'single',
	        idField: null
	    }
	};
	
	exports.default = ShInputSelect;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("d:\\projects\\SuperheroUI\\shInputSelect\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "sh-input-select.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 2 */
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/*!*************************************************************************************!*\
  !*** external {"root":"_","commonjs2":"lodash","commonjs":"lodash","amd":"lodash"} ***!
  \*************************************************************************************/
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/*!*************************************!*\
  !*** ./src/util-classes.service.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("d:\\projects\\SuperheroUI\\shInputSelect\\node_modules\\react-hot-loader\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("d:\\projects\\SuperheroUI\\shInputSelect\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var utilClasses = {
	    getClassNames: function getClassNames(classObject) {
	        var classNames = [];
	
	        for (var key in classObject) {
	            if (classObject.hasOwnProperty(key)) {
	                if (classObject[key]) {
	                    classNames.push(key);
	                }
	            }
	        }
	
	        return classNames.join(' ');
	    }
	};
	
	exports.default = utilClasses;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("d:\\projects\\SuperheroUI\\shInputSelect\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "util-classes.service.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 5 */
/*!**********************************!*\
  !*** ./src/sh-input-select.scss ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../~/css-loader!./../~/sass-loader!./sh-input-select.scss */ 6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../~/style-loader/addStyles.js */ 8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./sh-input-select.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./sh-input-select.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/*!*****************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./src/sh-input-select.scss ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 7)();
	// imports
	
	
	// module
	exports.push([module.id, "body {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n  padding: 20px;\n  background: linear-gradient(#284D51, #304853) fixed; }\n\n.shInputSelect {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: 40px;\n  font-size: 16px;\n  color: rgba(255, 255, 255, 0.8); }\n  .shInputSelect:hover .input {\n    background: rgba(255, 255, 255, 0.2); }\n  .shInputSelect.openUp .dropdownWrapper {\n    bottom: calc(100% + 1px); }\n  .shInputSelect.openUp .dropdown {\n    bottom: 0; }\n  .shInputSelect.openDown .dropdownWrapper {\n    top: calc(100% + 1px); }\n  .shInputSelect.openDown .dropdown {\n    top: 0; }\n  .shInputSelect.opened.openUp .input {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n  .shInputSelect.opened.openUp .dropdown {\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px; }\n  .shInputSelect.opened.openDown .input {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n  .shInputSelect.opened.openDown .dropdown {\n    border-bottom-left-radius: 2px;\n    border-bottom-right-radius: 2px; }\n  .shInputSelect.opened .dropdownWrapper {\n    height: 200px; }\n  .shInputSelect .input {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 2px;\n    line-height: 1;\n    cursor: pointer;\n    z-index: 1;\n    transition: border-radius 0.25s ease-in-out, background 0.25s ease-in-out;\n    outline: 0; }\n    .shInputSelect .input:focus {\n      -webkit-box-shadow: inset 0 1px 1px transparent, 0 0 5px rgba(255, 255, 255, 0.6);\n      box-shadow: inset 0 1px 1px transparent, 0 0 5px rgba(255, 255, 255, 0.6); }\n    .shInputSelect .input .inputSelected {\n      height: 100%;\n      line-height: 2.4;\n      padding: 0 28px 0 15px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n    .shInputSelect .input i {\n      position: absolute;\n      top: 0;\n      right: 8px;\n      height: 100%;\n      font-size: 14px;\n      line-height: 3; }\n  .shInputSelect .dropdownWrapper {\n    position: absolute;\n    right: 0;\n    left: 0;\n    height: 0;\n    overflow: hidden;\n    transition: height 0.25s ease-in-out; }\n    .shInputSelect .dropdownWrapper .dropdown {\n      position: absolute;\n      width: 100%;\n      max-height: 200px;\n      color: rgba(0, 0, 0, 0.6);\n      background: white;\n      overflow-x: hidden;\n      overflow-y: auto;\n      z-index: 2; }\n  .shInputSelect .option {\n    padding: 10px 15px;\n    background: transparent;\n    cursor: pointer;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    transition: background 0.25s ease-in-out, color 0.25s ease-in-out; }\n    .shInputSelect .option:focus, .shInputSelect .option:hover {\n      color: white;\n      background: #3ab676;\n      outline: 0; }\n    .shInputSelect .option .optionDetails {\n      display: inline-block;\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n", ""]);
	
	// exports


/***/ },
/* 7 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=sh-input-select.js.map