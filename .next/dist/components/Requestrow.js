'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../Ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../Ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedronalvarez/Desktop/Kickstarter/components/Requestrow.js';


var Requestrow = function (_Component) {
  (0, _inherits3.default)(Requestrow, _Component);

  function Requestrow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Requestrow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Requestrow.__proto__ || (0, _getPrototypeOf2.default)(Requestrow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context.sent;
              _context.next = 6;
              return campaign.methods.aproveRequest(_this.props.id).send({ from: accounts[0] });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.onClose = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var campaign, accounts;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              campaign = (0, _campaign2.default)(_this.props.address);
              _context2.next = 3;
              return _web2.default.eth.getAccounts();

            case 3:
              accounts = _context2.sent;
              _context2.next = 6;
              return campaign.methods.closeRequest(_this.props.id).send({ from: accounts[0] });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Requestrow, [{
    key: 'render',
    value: function render() {
      var Row = _semanticUiReact.Table.Row,
          Cell = _semanticUiReact.Table.Cell;
      var _props = this.props,
          id = _props.id,
          request = _props.request,
          totalApprovers = _props.totalApprovers;

      var readyToclose = request.approveCounts >= totalApprovers / 2;
      // const totalApprovers = this.props.totalApprovers;

      return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToclose && !request.complete, __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, id), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, request.description), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _web2.default.utils.fromWei(this.props.request.value, 'ether')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, request.recipient), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, request.approveCounts, ' / ', totalApprovers, ' '), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', onClick: this.onApprove, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Approve')), _react2.default.createElement(Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'orange', onClick: this.onClose, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'close request')));
    }
  }]);

  return Requestrow;
}(_react.Component);

exports.default = Requestrow;

//ANGELA
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdHJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdHJvdyIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsIm9uQ2xvc2UiLCJjbG9zZVJlcXVlc3QiLCJSb3ciLCJDZWxsIiwicmVxdWVzdCIsInRvdGFsQXBwcm92ZXJzIiwicmVhZHlUb2Nsb3NlIiwiYXBwcm92ZUNvdW50cyIsImNvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTzs7QUFDZixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFHSixxRkFBWSxtQkFBQTtvQkFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFFSjtBQUZJLHlCQUVPLHdCQUFTLE1BQUEsQUFBSyxNQUZyQixBQUVPLEFBQW9COzhCQUYzQjtxQkFHYSxjQUFBLEFBQUssSUFIbEIsQUFHYSxBQUFTOztpQkFBMUI7QUFISSxrQ0FBQTs4QkFBQTtxQkFLSixTQUFBLEFBQVMsUUFBVCxBQUFpQixjQUFjLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxJQUExQyxBQUE4QyxLQUFLLEVBQUMsTUFBTSxTQUx0RCxBQUtKLEFBQW1ELEFBQU8sQUFBUzs7aUJBTC9EO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0EsZUFRWixBLG1GQUFVLG9CQUFBO29CQUFBO3NFQUFBO2tCQUFBOzZDQUFBO2lCQUVGO0FBRkUseUJBRVMsd0JBQVMsTUFBQSxBQUFLLE1BRnZCLEFBRVMsQUFBb0I7K0JBRjdCO3FCQUdlLGNBQUEsQUFBSyxJQUhwQixBQUdlLEFBQVM7O2lCQUExQjtBQUhFLG1DQUFBOytCQUFBO3FCQUtGLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWEsTUFBQSxBQUFLLE1BQW5DLEFBQXlDLElBQXpDLEFBQTZDLEtBQUssRUFBQyxNQUFNLFNBTHZELEFBS0YsQUFBa0QsQUFBTyxBQUFTOztpQkFMaEU7aUJBQUE7K0JBQUE7O0FBQUE7bUJBQUE7QTs7Ozs7NkJBUUY7VUFBQSxBQUVDLE1BRkQsQUFFYyx1QkFGZCxBQUVDO1VBRkQsQUFFTSxPQUZOLEFBRWMsdUJBRmQsQUFFTTttQkFDMEIsS0FIaEMsQUFHcUM7VUFIckMsQUFHQyxZQUhELEFBR0M7VUFIRCxBQUdLLGlCQUhMLEFBR0s7VUFITCxBQUdjLHdCQUhkLEFBR2MsQUFDcEI7O1VBQU0sZUFBZSxRQUFBLEFBQVEsaUJBQWlCLGlCQUE5QyxBQUErRCxBQUMvRDtBQUVBOzs2QkFBUSxjQUFELE9BQUssVUFBWSxRQUFqQixBQUF5QixVQUFVLFVBQVksZ0JBQWdCLENBQUMsUUFBaEUsQUFBd0U7b0JBQXhFO3NCQUFBLEFBQ0c7QUFESDtPQUFBLGtCQUNJLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLFNBREgsQUFDRyxBQUNBLHFCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLGlCQUZILEFBRUcsQUFBZSxBQUNmLDhCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQU87QUFBUDtBQUFBLHVCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUE5QixBQUFzQyxPQUhoRCxBQUdHLEFBQU8sQUFBNEMsQUFDbkQsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBSkgsQUFJRyxBQUFlLEFBQ2YsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFBTztBQUFQO0FBQUEsaUJBQUEsQUFBZSxlQUFrQixPQUFqQyxnQkFMSCxBQUtHLEFBQ0Esc0JBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDQztBQUREO0FBQUEsaUJBQ0MsQUFBUSxXQUFSLEFBQW1CLHVCQUNsQixBQUFDLHlDQUFPLE9BQVIsQUFBZ0IsU0FBUSxTQUFVLEtBQWxDLEFBQXVDO29CQUF2QztzQkFBQTtBQUFBO09BQUEsRUFSTCxBQU1HLEFBRUUsQUFLRiw2QkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxpQkFDRSxBQUFRLFdBQVIsQUFBbUIsdUJBQ25CLEFBQUMseUNBQU8sT0FBUixBQUFnQixVQUFTLFNBQVcsS0FBcEMsQUFBeUM7b0JBQXpDO3NCQUFBO0FBQUE7T0FBQSxFQWZaLEFBQU8sQUFhRyxBQUVFLEFBTWI7Ozs7O0FBL0NzQixBLEFBa0R6Qjs7a0JBQUEsQUFBZTs7QUFFZiIsImZpbGUiOiJSZXF1ZXN0cm93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZWRyb25hbHZhcmV6L0Rlc2t0b3AvS2lja3N0YXJ0ZXIifQ==