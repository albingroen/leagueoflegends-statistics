'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _button = require('../comps/button.js');

var _nav = require('../comps/nav.js');

var _input = require('../comps/input.js');

var _scrollHint = require('../comps/scrollHint.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/albingroen/Gymnasiearbete-17-18-REACTJS/pages/index.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = { name: null // här är vad `this.state.name` är satt till i början
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (process.browser) {
        var name = window.prompt('Name?');
        this.setState({ name: name });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var name = this.state.name;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, 'name: ', name), _react2.default.createElement(_nav.Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('div', { className: 'header', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('div', { className: 'headerContent', 'data-jsx': 4197641465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 4197641465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, 'Search for summoner'), _react2.default.createElement('p', { className: 'about-site', 'data-jsx': 4197641465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, 'Enter a summoner name to recieve to most necessary information about the player.'), _react2.default.createElement(_input.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement(_scrollHint.Scrollhint, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 4197641465,
        css: '*{padding:0;margin:0}body{background:white}.header{height:80vh;widht:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.headerContent{text-align:center;padding-left:30px;padding-right:30px}.title,.about-site{color:#222;font-family:\'Roboto\',sanss-serif;font-weight:400;font-size:40px;margin-bottom:20px}.title{font-weight:300!important;-webkit-letter-spacing:.5px;-moz-letter-spacing:.5px;-ms-letter-spacing:.5px;letter-spacing:.5px}.about-site{font-family:\'Lato\',sanss-serif;font-weight:400;font-size:17px;width:400px;margin-bottom:70px;opacity:.5}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDK0IsQUFHdUIsQUFJTyxBQUdMLEFBUU0sQUFNUCxBQU9lLEFBSU0sVUEvQnZCLENBcUJ5QixDQWR2QixLQUhiLENBV29CLENBZHBCLElBT2UsR0FvQk8sS0FJSixLQWhCRyxRQU1ILEdBV0QsUUFoQmpCLEtBTWlCLEVBWWYsWUFBbUIsQ0FYQSxrQkFZUixDQVhiLEdBaEJxQixPQTRCckIsbUJBUkEsbUVBbkJ5QixtR0FFekIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsYmluZ3JvZW4vR3ltbmFzaWVhcmJldGUtMTctMTgtUkVBQ1RKUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBzL2J1dHRvbi5qcydcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4uL2NvbXBzL25hdi5qcydcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi4vY29tcHMvaW5wdXQuanMnXG5pbXBvcnQgeyBTY3JvbGxoaW50IH0gZnJvbSAnLi4vY29tcHMvc2Nyb2xsSGludC5qcydcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgbmFtZTogbnVsbCB9IC8vIGjDpHIgw6RyIHZhZCBgdGhpcy5zdGF0ZS5uYW1lYCDDpHIgc2F0dCB0aWxsIGkgYsO2cmphblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICBjb25zdCBuYW1lID0gd2luZG93LnByb21wdCgnTmFtZT8nKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IG5hbWUgfSlcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2Pm5hbWU6IHtuYW1lfTwvZGl2PlxuXG4gICAgICAgIDxOYXYgLz5cbiAgICAgICAgey8qIDxoMT57bmFtZX08L2gxPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlNlYXJjaCBmb3Igc3VtbW9uZXI8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJvdXQtc2l0ZVwiPlxuICAgICAgICAgICAgICBFbnRlciBhIHN1bW1vbmVyIG5hbWUgdG8gcmVjaWV2ZSB0byBtb3N0IG5lY2Vzc2FyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICBhYm91dCB0aGUgcGxheWVyLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPElucHV0IC8+XG4gICAgICAgICAgICA8U2Nyb2xsaGludCAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgd2lkaHQ6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXJDb250ZW50IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSxcbiAgICAgICAgICAuYWJvdXQtc2l0ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fuc3Mtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7IFxuICAgICAgICAgIH1cbiAgICAgICAgICAuYWJvdXQtc2l0ZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zcy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHggICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzNCwgMjM0LCAyMzQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 364779009,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 364779009,
        css: '.content[data-jsx="364779009"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:50vh;width:100%;background:rgb(250,250,250);border-top:1px solid rgb(234,234,234)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFc0IsQUFHNEIsMEVBQ1UsbUdBQ0osNkZBQ0oseURBQ0gsWUFDRCxXQUNtQiw0QkFDVSxzQ0FDMUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsYmluZ3JvZW4vR3ltbmFzaWVhcmJldGUtMTctMTgtUkVBQ1RKUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBzL2J1dHRvbi5qcydcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4uL2NvbXBzL25hdi5qcydcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi4vY29tcHMvaW5wdXQuanMnXG5pbXBvcnQgeyBTY3JvbGxoaW50IH0gZnJvbSAnLi4vY29tcHMvc2Nyb2xsSGludC5qcydcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHsgbmFtZTogbnVsbCB9IC8vIGjDpHIgw6RyIHZhZCBgdGhpcy5zdGF0ZS5uYW1lYCDDpHIgc2F0dCB0aWxsIGkgYsO2cmphblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICBjb25zdCBuYW1lID0gd2luZG93LnByb21wdCgnTmFtZT8nKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IG5hbWUgfSlcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2Pm5hbWU6IHtuYW1lfTwvZGl2PlxuXG4gICAgICAgIDxOYXYgLz5cbiAgICAgICAgey8qIDxoMT57bmFtZX08L2gxPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlNlYXJjaCBmb3Igc3VtbW9uZXI8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJvdXQtc2l0ZVwiPlxuICAgICAgICAgICAgICBFbnRlciBhIHN1bW1vbmVyIG5hbWUgdG8gcmVjaWV2ZSB0byBtb3N0IG5lY2Vzc2FyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICBhYm91dCB0aGUgcGxheWVyLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPElucHV0IC8+XG4gICAgICAgICAgICA8U2Nyb2xsaGludCAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgd2lkaHQ6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXJDb250ZW50IHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50aXRsZSxcbiAgICAgICAgICAuYWJvdXQtc2l0ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fuc3Mtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7IFxuICAgICAgICAgIH1cbiAgICAgICAgICAuYWJvdXQtc2l0ZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zcy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHggICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzNCwgMjM0LCAyMzQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      })));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkJ1dHRvbiIsIk5hdiIsIklucHV0IiwiU2Nyb2xsaGludCIsIkluZGV4Iiwic3RhdGUiLCJuYW1lIiwicHJvY2VzcyIsImJyb3dzZXIiLCJ3aW5kb3ciLCJwcm9tcHQiLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTOzs7Ozs7O0lBRUgsQTs7Ozs7Ozs7Ozs7Ozs7ME0sQUFDSixVQUFVLE1BQUYsQUFBUSxLLEFBQVIsQUFBZTtBQUFmOzs7Ozt3Q0FDWSxBQUNsQjtVQUFJLFFBQUosQUFBWSxTQUFTLEFBQ25CO1lBQU0sT0FBTyxPQUFBLEFBQU8sT0FBcEIsQUFBYSxBQUFjLEFBQzNCO2FBQUEsQUFBSyxTQUFTLEVBQUUsTUFBaEIsQUFBYyxBQUFRLEFBQ3ZCO0FBQ0Y7Ozs7NkJBQ1E7VUFBQSxBQUNDLE9BQVMsS0FEVixBQUNlLE1BRGYsQUFDQyxBQUNSOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFZLFVBRGQsQUFDRSxBQUVBLHVCQUFBLEFBQUM7O29CQUFEO3NCQUhGLEFBR0UsQUFFQTtBQUZBO0FBQUEsMEJBRUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSw2QkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsUUFBSSxXQUFKLEFBQWMscUJBQWQ7O29CQUFBO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBQ0Esd0NBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYSwwQkFBYjs7b0JBQUE7c0JBQUE7QUFBQTtTQUZGLEFBRUUsQUFJQSxxR0FBQSxBQUFDOztvQkFBRDtzQkFORixBQU1FLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQVBGLEFBT0U7QUFBQTtBQUFBO2lCQVBGO2FBTkosQUFLRSxBQUNFLEFBb0RGO0FBcERFLDRCQW9ERixjQUFBLFNBQUssV0FBTCxBQUFlLHVCQUFmOztvQkFBQTtzQkFBQTtBQUFBOztpQkFBQTthQTNESixBQUNFLEFBMERFLEFBZ0JMO0FBaEJLOzs7OztFQXJFWSxnQkFBTSxBLEFBd0YxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxiaW5ncm9lbi9HeW1uYXNpZWFyYmV0ZS0xNy0xOC1SRUFDVEpTIn0=