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
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_nav.Nav, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }), _react2.default.createElement('div', { className: 'header', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement('div', { className: 'headerContent', 'data-jsx': 4197641465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 4197641465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, 'Search for summoner'), _react2.default.createElement('p', { className: 'about-site', 'data-jsx': 4197641465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'Enter a summoner name to recieve to most necessary information about the player.'), _react2.default.createElement(_input.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement(_scrollHint.Scrollhint, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 4197641465,
        css: '*{padding:0;margin:0}body{background:white}.header{height:80vh;widht:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.headerContent{text-align:center;padding-left:30px;padding-right:30px}.title,.about-site{color:#222;font-family:\'Roboto\',sanss-serif;font-weight:400;font-size:40px;margin-bottom:20px}.title{font-weight:300!important;-webkit-letter-spacing:.5px;-moz-letter-spacing:.5px;-ms-letter-spacing:.5px;letter-spacing:.5px}.about-site{font-family:\'Lato\',sanss-serif;font-weight:400;font-size:17px;width:400px;margin-bottom:70px;opacity:.5}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCK0IsQUFHdUIsQUFJTyxBQUdMLEFBUU0sQUFNUCxBQU9lLEFBSU0sVUEvQnZCLENBcUJ5QixDQWR2QixLQUhiLENBV29CLENBZHBCLElBT2UsR0FvQk8sS0FJSixLQWhCRyxRQU1ILEdBV0QsUUFoQmpCLEtBTWlCLEVBWWYsWUFBbUIsQ0FYQSxrQkFZUixDQVhiLEdBaEJxQixPQTRCckIsbUJBUkEsbUVBbkJ5QixtR0FFekIiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsYmluZ3JvZW4vR3ltbmFzaWVhcmJldGUtMTctMTgtUkVBQ1RKUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBzL2J1dHRvbi5qcydcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4uL2NvbXBzL25hdi5qcydcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi4vY29tcHMvaW5wdXQuanMnXG5pbXBvcnQgeyBTY3JvbGxoaW50IH0gZnJvbSAnLi4vY29tcHMvc2Nyb2xsSGludC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXYgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyQ29udGVudFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2VhcmNoIGZvciBzdW1tb25lcjwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYm91dC1zaXRlXCI+XG4gICAgICAgICAgICAgIEVudGVyIGEgc3VtbW9uZXIgbmFtZSB0byByZWNpZXZlIHRvIG1vc3QgbmVjZXNzYXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgIGFib3V0IHRoZSBwbGF5ZXIuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8SW5wdXQgLz5cbiAgICAgICAgICAgIDxTY3JvbGxoaW50IC8+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICB3aWRodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlckNvbnRlbnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlLFxuICAgICAgICAgIC5hYm91dC1zaXRlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zcy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDsgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5hYm91dC1zaXRlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnNzLXNlcmlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweCAgICAgICAgICAgIFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwdmg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM0LCAyMzQsIDIzNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 364779009,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 364779009,
        css: '.content[data-jsx="364779009"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:50vh;width:100%;background:rgb(250,250,250);border-top:1px solid rgb(234,234,234)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fc0IsQUFHNEIsMEVBQ1UsbUdBQ0osNkZBQ0oseURBQ0gsWUFDRCxXQUNtQiw0QkFDVSxzQ0FDMUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FsYmluZ3JvZW4vR3ltbmFzaWVhcmJldGUtMTctMTgtUkVBQ1RKUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBzL2J1dHRvbi5qcydcbmltcG9ydCB7IE5hdiB9IGZyb20gJy4uL2NvbXBzL25hdi5qcydcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi4vY29tcHMvaW5wdXQuanMnXG5pbXBvcnQgeyBTY3JvbGxoaW50IH0gZnJvbSAnLi4vY29tcHMvc2Nyb2xsSGludC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXYgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyQ29udGVudFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2VhcmNoIGZvciBzdW1tb25lcjwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYm91dC1zaXRlXCI+XG4gICAgICAgICAgICAgIEVudGVyIGEgc3VtbW9uZXIgbmFtZSB0byByZWNpZXZlIHRvIG1vc3QgbmVjZXNzYXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgIGFib3V0IHRoZSBwbGF5ZXIuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8SW5wdXQgLz5cbiAgICAgICAgICAgIDxTY3JvbGxoaW50IC8+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICoge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICB3aWRodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlckNvbnRlbnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlLFxuICAgICAgICAgIC5hYm91dC1zaXRlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zcy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMCFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjVweDsgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5hYm91dC1zaXRlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnNzLXNlcmlmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweCAgICAgICAgICAgIFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwdmg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM0LCAyMzQsIDIzNCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      })));
    }
  }]);

  return Index;
}(_react2.default.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkJ1dHRvbiIsIk5hdiIsIklucHV0IiwiU2Nyb2xsaGludCIsIkluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVM7Ozs7Ozs7SSxBQUVZOzs7Ozs7Ozs7Ozs2QkFDVixBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRSxBQUVBO0FBRkE7QUFBQSwwQkFFQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlLDZCQUFmOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYyxxQkFBZDs7b0JBQUE7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFDQSx3Q0FBQSxjQUFBLE9BQUcsV0FBSCxBQUFhLDBCQUFiOztvQkFBQTtzQkFBQTtBQUFBO1NBRkYsQUFFRSxBQUlBLHFHQUFBLEFBQUM7O29CQUFEO3NCQU5GLEFBTUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBUEYsQUFPRTtBQUFBO0FBQUE7aUJBUEY7YUFKSixBQUdFLEFBQ0UsQUFvREY7QUFwREUsNEJBb0RGLGNBQUEsU0FBSyxXQUFMLEFBQWUsdUJBQWY7O29CQUFBO3NCQUFBO0FBQUE7O2lCQUFBO2FBekRKLEFBQ0UsQUF3REUsQUFnQkw7QUFoQks7Ozs7O0VBM0QyQixnQkFBTSxBOztrQkFBcEIsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWxiaW5ncm9lbi9HeW1uYXNpZWFyYmV0ZS0xNy0xOC1SRUFDVEpTIn0=