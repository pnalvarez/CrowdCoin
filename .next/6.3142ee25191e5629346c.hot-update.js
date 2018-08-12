webpackHotUpdate(6,{

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(1159);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(482);

var _routes = __webpack_require__(726);

var _campaign = __webpack_require__(1179);

var _campaign2 = _interopRequireDefault(_campaign);

var _Requestrow = __webpack_require__(1186);

var _Requestrow2 = _interopRequireDefault(_Requestrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pedronalvarez/Desktop/Kickstarter/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: 'renderrows',
    value: function renderrows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {

        return _react2.default.createElement(_Requestrow2.default, {
          key: index,
          id: index,
          request: request,
          address: _this2.props.address,
          totalApprovers: _this2.props.totalApprovers,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: "right", style: { marginBottom: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, ' ID'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, ' Description'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, ' Amount'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, ' recipient'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, ' Approval counts'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, ' Approved'), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, ' Final'))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, ' ', this.renderrows(), ' ')), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, 'Found ', this.props.requestCount, ' requests'));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestCount, totalApprovers, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;
                campaign = (0, _campaign2.default)(address);
                _context.next = 4;
                return campaign.methods.getRequestCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return campaign.methods.totalApprovers().call();

              case 7:
                totalApprovers = _context.sent;
                _context.next = 10;
                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {

                  return campaign.methods.requests(index).call();
                }));

              case 10:
                requests = _context.sent;
                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, totalApprovers: totalApprovers });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkNhbXBhaWduIiwiUmVxdWVzdHJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwidG90YWxBcHByb3ZlcnMiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlcnJvd3MiLCJyZXF1ZXN0Q291bnQiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFRLEFBQVE7O0FBQ2hCLEFBQVEsQUFBVzs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7OztpQ0F5QlE7bUJBRVY7O2tCQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFTLE9BQVUsQUFFOUM7OytCQUFPLEFBQUM7ZUFBRCxBQUNJLEFBQ1A7Y0FGRyxBQUVHLEFBQ047bUJBSEcsQUFHUSxBQUNYO21CQUFXLE9BQUEsQUFBSyxNQUpiLEFBSW1CLEFBQ3RCOzBCQUFrQixPQUFBLEFBQUssTUFMcEIsQUFLMEI7O3NCQUwxQjt3QkFBUCxBQUFPLEFBUVY7QUFSVTtBQUNILFNBREc7QUFGWCxBQUFPLEFBV1IsT0FYUTs7Ozs2QkFhQTtVQUFBLEFBRUEsU0FGQSxBQUVpQyx1QkFGakMsQUFFQTtVQUZBLEFBRVEsTUFGUixBQUVpQyx1QkFGakMsQUFFUTtVQUZSLEFBRWEsYUFGYixBQUVpQyx1QkFGakMsQUFFYTtVQUZiLEFBRXlCLE9BRnpCLEFBRWlDLHVCQUZqQyxBQUV5QixBQUNoQzs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsNkJBQUEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBaEIsQUFBMkIsU0FBUyxPQUFTLEVBQUMsY0FBOUMsQUFBNkMsQUFBZTtvQkFBNUQ7c0JBQUE7QUFBQTtTQUpOLEFBRUUsQUFDRSxBQUNFLEFBR0Ysa0NBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHdCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSxpQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FIRixBQUdFLEFBQ0EsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSkYsQUFJRSxBQUNBLCtCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxGLEFBS0UsQUFDQSxxQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FORixBQU1FLEFBQ0EsOEJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBVE4sQUFDRSxBQUNFLEFBT0UsQUFHSiw2QkFBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBUSxVQUFSLEFBQVEsQUFBSyxjQW5CbkIsQUFPSSxBQVlFLEFBRUYsdUJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQ08sZUFBQSxBQUFLLE1BRFosQUFDa0IsY0F2QnhCLEFBQ0UsQUFxQkksQUFLUDs7Ozs7MkcsQUFwRTRCOzs7OzttQkFFcEI7QSwwQkFBVyxNQUFNLEEsTSxBQUFqQixBQUNEO0EsMkJBQVcsd0JBQUEsQSxBQUFTOzt1QkFFQyxTQUFBLEFBQVMsUUFBVCxBQUFpQixrQixBQUFqQixBQUFtQzs7bUJBQXhEO0E7O3VCQUV1QixTQUFBLEFBQVMsUUFBVCxBQUFpQixpQkFBakIsQUFBa0MsQTs7bUJBQXpEO0E7O3lDQUVpQixBQUFRLFVBRXpCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFBOEIsT0FBOUIsQUFBcUMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFFekQ7O3lCQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLE9BQWpDLEFBQU8sQUFBaUMsQUFFM0M7QUFOc0IsQUFFdkIsQSxpQkFBQSxDQUZ1Qjs7bUJBQWpCO0E7aURBV0MsRUFBQyxTQUFELFNBQVUsVUFBVixVQUFvQixjQUFwQixjQUFrQyxnQkFBbEMsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXRCZ0IsQSxBQXdFM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BlZHJvbmFsdmFyZXovRGVza3RvcC9LaWNrc3RhcnRlciJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/pedronalvarez/Desktop/Kickstarter/pages/campaigns/requests/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pedronalvarez/Desktop/Kickstarter/pages/campaigns/requests/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4zMTQyZWUyNTE5MWU1NjI5MzQ2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzP2ZmNDc2M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IHtCdXR0b24sIFRhYmxlfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vLi4vRXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IFJlcXVlc3Ryb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0cm93JztcblxuY2xhc3MgUmVxdWVzdEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XG5cbiAgICBjb25zdCB7YWRkcmVzc30gPSBwcm9wcy5xdWVyeTtcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuXG4gICAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0Q291bnQoKS5jYWxsKClcblxuICAgIGNvbnN0IHRvdGFsQXBwcm92ZXJzID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy50b3RhbEFwcHJvdmVycygpLmNhbGwoKTtcblxuICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG5cbiAgICBBcnJheShwYXJzZUludChyZXF1ZXN0Q291bnQpKS5maWxsKCkubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuXG4gICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKClcblxuICAgIH0pXG5cbik7XG5cblxuICAgIHJldHVybiB7YWRkcmVzcywgcmVxdWVzdHMsIHJlcXVlc3RDb3VudCwgdG90YWxBcHByb3ZlcnN9O1xuICB9XG5cbiAgcmVuZGVycm93cygpe1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMucmVxdWVzdHMubWFwKChyZXF1ZXN0LGluZGV4KSA9PiB7XG5cbiAgICAgICAgcmV0dXJuIDxSZXF1ZXN0cm93XG4gICAgICAgICAgICBrZXkgPSB7aW5kZXh9XG4gICAgICAgICAgICBpZCA9IHtpbmRleH1cbiAgICAgICAgICAgIHJlcXVlc3QgPSB7cmVxdWVzdH1cbiAgICAgICAgICAgIGFkZHJlc3MgPSB7dGhpcy5wcm9wcy5hZGRyZXNzfVxuICAgICAgICAgICAgdG90YWxBcHByb3ZlcnMgPSB7dGhpcy5wcm9wcy50b3RhbEFwcHJvdmVyc31cbiAgICAgICAgLz5cblxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3Qge0hlYWRlciwgUm93LCBIZWFkZXJDZWxsLCBCb2R5fSA9IFRhYmxlO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDM+UmVxdWVzdHM8L2gzPlxuICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGZsb2F0ZWQgPSB7XCJyaWdodFwifSBzdHlsZSA9IHt7bWFyZ2luQm90dG9tOiAxMH19PkFkZCBSZXF1ZXN0PC9CdXR0b24+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD4gSUQ8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+IERlc2NyaXB0aW9uPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPiBBbW91bnQ8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+IHJlY2lwaWVudDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD4gQXBwcm92YWwgY291bnRzPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPiBBcHByb3ZlZDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD4gRmluYWw8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgICA8Qm9keT4ge3RoaXMucmVuZGVycm93cygpfSA8L0JvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgIEZvdW5kIHt0aGlzLnByb3BzLnJlcXVlc3RDb3VudH0gcmVxdWVzdHNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUxBO0FBUUE7QUFSQTtBQUNBO0FBUUE7Ozs7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUE3REE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFEQTs7O0FBRUE7QUFDQTtBQURBOzs7QUFFQTtBQUNBO0FBR0E7QUFGQTtBQUNBO0FBSEE7O0FBV0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==