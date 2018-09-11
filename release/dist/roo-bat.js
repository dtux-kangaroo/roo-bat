(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global['roo-bat'] = factory(global.React));
}(this, (function (React) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  var version = '1.7.1';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames

    with fix with es6 export default
  */

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
  	var classes = [];

  	for (var i = 0; i < arguments.length; i++) {
  		var arg = arguments[i];
  		if (!arg) continue;

  		var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

  		if (argType === 'string' || argType === 'number') {
  			classes.push(arg);
  		} else if (Array.isArray(arg)) {
  			classes.push(classNames.apply(null, arg));
  		} else if (argType === 'object') {
  			for (var key in arg) {
  				if (hasOwn.call(arg, key) && arg[key]) {
  					classes.push(key);
  				}
  			}
  		}
  	}

  	return classes.join(' ');
  }

  var Button = function (_React$Component) {
      inherits(Button, _React$Component);

      function Button() {
          classCallCheck(this, Button);
          return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
      }

      createClass(Button, [{
          key: 'render',
          value: function render() {
              var _props = this.props,
                  component = _props.component,
                  type = _props.type,
                  size = _props.size,
                  plain = _props.plain,
                  className = _props.className,
                  children = _props.children,
                  others = objectWithoutProperties(_props, ['component', 'type', 'size', 'plain', 'className', 'children']);

              var Component = component ? component : this.props.href || type === 'vcode' ? 'a' : 'button';
              var cls = type === 'vcode' ? classNames('bat-vcode-btn', defineProperty({}, className, className)) : classNames(defineProperty({
                  'bat-btn': true,
                  'bat-btn_mini': size === 'small',
                  'bat-btn_primary': type === 'primary' && !plain,
                  'bat-btn_default': type === 'default' && !plain,
                  'bat-btn_warn': type === 'warn',
                  'bat-btn_plain-primary': type === 'primary' && plain,
                  'bat-btn_plain-default': type === 'default' && plain,
                  'bat-btn_disabled': this.props.disabled && !plain,
                  'bat-btn_plain-disabled': this.props.disabled && plain
              }, className, className));

              return React__default.createElement(
                  Component,
                  _extends({}, others, { className: cls }),
                  children,
                  ' test'
              );
          }
      }]);
      return Button;
  }(React__default.Component);

  Button.defaultProps = {
      disabled: false,
      type: 'primary',
      size: 'normal'
  };

  var ButtonArea = function (_Component) {
      inherits(ButtonArea, _Component);

      function ButtonArea() {
          classCallCheck(this, ButtonArea);
          return possibleConstructorReturn(this, (ButtonArea.__proto__ || Object.getPrototypeOf(ButtonArea)).apply(this, arguments));
      }

      createClass(ButtonArea, [{
          key: 'render',
          value: function render() {
              var _props = this.props,
                  direction = _props.direction,
                  children = _props.children,
                  className = _props.className;

              var cls = classNames(defineProperty({
                  'bat-btn-area': true,
                  'bat-btn-area_inline': direction === 'horizontal'
              }, className, className));

              return React__default.createElement(
                  'div',
                  { className: cls },
                  children
              );
          }
      }]);
      return ButtonArea;
  }(React.Component);

  ButtonArea.defaultProps = {
      direction: 'vertical'
  };

  var ButtonPreview = function ButtonPreview(props) {
      var className = props.className,
          primary = props.primary,
          children = props.children,
          others = objectWithoutProperties(props, ['className', 'primary', 'children']);

      var cls = classNames(defineProperty({
          'bat-form-preview__btn': true,
          'bat-form-preview__btn_default': !primary,
          'bat-form-preview__btn_primary': primary
      }, className, className));
      return React__default.createElement(
          'a',
          _extends({ className: cls }, others),
          children
      );
  };

  ButtonPreview.defaultProps = {
      primary: false
  };

  function getDisplayName(WrappedComponent) {
         return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  function withHeader (WrappedComponent) {
    var _class, _temp;

    return _temp = _class = function (_Component) {
      inherits(WithHeader, _Component);

      function WithHeader() {
        classCallCheck(this, WithHeader);
        return possibleConstructorReturn(this, (WithHeader.__proto__ || Object.getPrototypeOf(WithHeader)).apply(this, arguments));
      }

      createClass(WithHeader, [{
        key: 'render',
        value: function render() {
          return React__default.createElement(
            'div',
            null,
            React__default.createElement(
              'div',
              { className: 'base-header' },
              '\u6211\u662F\u6807\u9898--\u6211\u7279\u522B\u7F8E-\u771F\u7684'
            ),
            React__default.createElement(WrappedComponent, _extends({ data: { test: 25 } }, this.props))
          );
        }
      }]);
      return WithHeader;
    }(React.Component), _class.displayName = 'WithHeader(' + getDisplayName(WrappedComponent) + ')', _temp;
  }

  function withFooter (msg) {
    return function withFooter(WrappedComponent) {
      var _class, _temp;

      return _temp = _class = function (_Component) {
        inherits(WithFooter, _Component);

        function WithFooter() {
          classCallCheck(this, WithFooter);
          return possibleConstructorReturn(this, (WithFooter.__proto__ || Object.getPrototypeOf(WithFooter)).apply(this, arguments));
        }

        createClass(WithFooter, [{
          key: 'render',
          value: function render() {
            return React__default.createElement(
              'div',
              null,
              React__default.createElement(
                'div',
                { className: 'base-header' },
                '\u6211\u7684\u5E95\u90E8--\u957F\u7684\u975E\u5E38\u597D\u770B ',
                msg || ''
              ),
              React__default.createElement(WrappedComponent, _extends({ data: { test: 25 } }, this.props))
            );
          }
        }]);
        return WithFooter;
      }(React.Component), _class.displayName = 'WithHeader(' + getDisplayName(WrappedComponent) + ')', _temp;
    };
  }

  function withLoad (loading) {
      return function (WrappedComponent) {
          var _class, _temp;

          return _temp = _class = function (_WrappedComponent) {
              inherits(_class, _WrappedComponent);

              function _class() {
                  classCallCheck(this, _class);
                  return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
              }

              createClass(_class, [{
                  key: 'componentWillUpdate',
                  value: function componentWillUpdate(nextProps, nextState) {
                      console.log('withLoading将会更新');
                  }
              }, {
                  key: 'componentDidMount',
                  value: function componentDidMount() {
                      console.log('djj');
                  }
              }, {
                  key: 'render',
                  value: function render() {
                      return React__default.createElement(
                          'div',
                          null,
                          loading ? React__default.createElement(
                              'span',
                              null,
                              '...'
                          ) : React__default.createElement(
                              'div',
                              null,
                              get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'render', this).call(this)
                          )
                      );
                  }
              }]);
              return _class;
          }(WrappedComponent), _class.displayName = 'WithLoad(' + getDisplayName(WrappedComponent) + ')', _temp;
      };
  }

  var index = {
      Button: Button,
      ButtonArea: ButtonArea,
      ButtonPreview: ButtonPreview,
      withHeader: withHeader,
      withFooter: withFooter,
      withLoad: withLoad,
      version: version
  };

  return index;

})));
