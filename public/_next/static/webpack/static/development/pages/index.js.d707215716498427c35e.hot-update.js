webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");








var _jsxFileName = "E:\\Frontend-examples\\weather-map\\pages\\index.js";





var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this)), "state", {
      map: null,
      mapCenter: {
        lat: 52.026,
        lng: 15.0551
      },
      cities: [{
        name: 'Berlin',
        lat: 52.52,
        lng: 13.405
      }, {
        name: 'London',
        lat: 51.5074,
        lng: -0.1182
      }, {
        name: 'Paris',
        lat: 48.8622,
        lng: 2.3638
      }, {
        name: 'Milan',
        lat: 45.4807,
        lng: 9.1713
      }, {
        name: 'Vienna',
        lat: 48.2096,
        lng: 16.4113
      }, {
        name: 'Stockholm',
        lat: 59.3309,
        lng: 18.0809
      }, {
        name: 'Oslo',
        lat: 59.9114,
        lng: 10.7325
      }, {
        name: 'Moskow',
        lat: 55.7901,
        lng: 37.6425
      }, {
        name: 'Warsaw',
        lat: 52.2297,
        lng: 21.0122
      }]
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.state.map) {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_10__["googleMapInit"])().then(function () {
          return _this2.onLoadGoogleMapsScript();
        }).then(function (responses) {
          responses.forEach(function (response) {
            var _response$data = response.data,
                icon = _response$data.currently.icon,
                latitude = _response$data.latitude,
                longitude = _response$data.longitude;

            _this2.createMarkers(latitude, longitude, icon);
          });
        });
      }
    }
  }, {
    key: "createMarkers",
    value: function createMarkers(lat, lng, icon) {
      var iconBase = '/static/images/weather-icons';
      var iconSize = {
        width: 36,
        height: 36
      };
      var iconObj = {
        url: "".concat(iconBase, "/").concat(icon, ".svg"),
        scaledSize: new google.maps.Size(iconSize.width, iconSize.height),
        anchor: new google.maps.Point(0, iconSize.width / 2 * 3)
      }; // Create markers.

      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        icon: iconObj,
        map: this.state.map
      });
    }
  }, {
    key: "onLoadGoogleMapsScript",
    value: function onLoadGoogleMapsScript() {
      var _this$state = this.state,
          mapCenter = _this$state.mapCenter,
          cities = _this$state.cities;
      var lat = mapCenter.lat,
          lng = mapCenter.lng;
      this.setState({
        map: new google.maps.Map(document.getElementById('map'), {
          center: {
            lat: lat,
            lng: lng
          },
          zoom: 5
        })
      });
      var promiseCities = cities.map(function (city) {
        return _helpers__WEBPACK_IMPORTED_MODULE_10__["appReq"].get("/get-weather?latlng=".concat(city.lat, ",").concat(city.lng));
      });
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(promiseCities);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "map-wrapper",
        className: "jsx-715383559",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "map",
        className: "jsx-715383559",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "715383559",
        __self: this
      }, "html,body,#__next{width:100%;height:100%;margin:0;padding:0;}#map-wrapper,#map{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxGcm9udGVuZC1leGFtcGxlc1xcd2VhdGhlci1tYXBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SFcsQUFLMEIsQUFPRSxXQU5ELFlBQ0gsU0FDQyxVQUNaLGdDQUlhLFdBQ0MsWUFDZCIsImZpbGUiOiJFOlxcRnJvbnRlbmQtZXhhbXBsZXNcXHdlYXRoZXItbWFwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcHBSZXEsIGdvb2dsZU1hcEluaXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWFwOiBudWxsLFxuICAgIG1hcENlbnRlcjoge1xuICAgICAgbGF0OiA1Mi4wMjYsXG4gICAgICBsbmc6IDE1LjA1NTEsXG4gICAgfSxcbiAgICBjaXRpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0JlcmxpbicsXG4gICAgICAgIGxhdDogNTIuNTIsXG4gICAgICAgIGxuZzogMTMuNDA1LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0xvbmRvbicsXG4gICAgICAgIGxhdDogNTEuNTA3NCxcbiAgICAgICAgbG5nOiAtMC4xMTgyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1BhcmlzJyxcbiAgICAgICAgbGF0OiA0OC44NjIyLFxuICAgICAgICBsbmc6IDIuMzYzOCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNaWxhbicsXG4gICAgICAgIGxhdDogNDUuNDgwNyxcbiAgICAgICAgbG5nOiA5LjE3MTMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVmllbm5hJyxcbiAgICAgICAgbGF0OiA0OC4yMDk2LFxuICAgICAgICBsbmc6IDE2LjQxMTMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU3RvY2tob2xtJyxcbiAgICAgICAgbGF0OiA1OS4zMzA5LFxuICAgICAgICBsbmc6IDE4LjA4MDksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnT3NsbycsXG4gICAgICAgIGxhdDogNTkuOTExNCxcbiAgICAgICAgbG5nOiAxMC43MzI1LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01vc2tvdycsXG4gICAgICAgIGxhdDogNTUuNzkwMSxcbiAgICAgICAgbG5nOiAzNy42NDI1LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1dhcnNhdycsXG4gICAgICAgIGxhdDogNTIuMjI5NyxcbiAgICAgICAgbG5nOiAyMS4wMTIyLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUubWFwKSB7XG4gICAgICBnb29nbGVNYXBJbml0KClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9uTG9hZEdvb2dsZU1hcHNTY3JpcHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2VzID0+IHtcbiAgICAgICAgICByZXNwb25zZXMuZm9yRWFjaChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGN1cnJlbnRseTogeyBpY29uIH0sXG4gICAgICAgICAgICAgIGxhdGl0dWRlLFxuICAgICAgICAgICAgICBsb25naXR1ZGUsXG4gICAgICAgICAgICB9ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWFya2VycyhsYXRpdHVkZSwgbG9uZ2l0dWRlLCBpY29uKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlTWFya2VycyhsYXQsIGxuZywgaWNvbikge1xuICAgIGNvbnN0IGljb25CYXNlID0gJy9zdGF0aWMvaW1hZ2VzL3dlYXRoZXItaWNvbnMnO1xuICAgIGNvbnN0IGljb25TaXplID0ge1xuICAgICAgd2lkdGg6IDM2LFxuICAgICAgaGVpZ2h0OiAzNixcbiAgICB9O1xuXG4gICAgY29uc3QgaWNvbk9iaiA9IHtcbiAgICAgIHVybDogYCR7aWNvbkJhc2V9LyR7aWNvbn0uc3ZnYCxcbiAgICAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKGljb25TaXplLndpZHRoLCBpY29uU2l6ZS5oZWlnaHQpLFxuICAgICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgKGljb25TaXplLndpZHRoIC8gMikgKiAzKSxcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlIG1hcmtlcnMuXG4gICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyksXG4gICAgICBpY29uOiBpY29uT2JqLFxuICAgICAgbWFwOiB0aGlzLnN0YXRlLm1hcCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uTG9hZEdvb2dsZU1hcHNTY3JpcHQoKSB7XG4gICAgY29uc3QgeyBtYXBDZW50ZXIsIGNpdGllcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGxhdCwgbG5nIH0gPSBtYXBDZW50ZXI7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcDogbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgICAgY2VudGVyOiB7IGxhdCwgbG5nIH0sXG4gICAgICAgIHpvb206IDUsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb21pc2VDaXRpZXMgPSBjaXRpZXMubWFwKGNpdHkgPT4ge1xuICAgICAgcmV0dXJuIGFwcFJlcS5nZXQoYC9nZXQtd2VhdGhlcj9sYXRsbmc9JHtjaXR5LmxhdH0sJHtjaXR5LmxuZ31gKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlQ2l0aWVzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIm1hcC13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJtYXBcIiAvPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI21hcC13cmFwcGVyLFxuICAgICAgICAgICAgI21hcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\n/*@ sourceURL=E:\\Frontend-examples\\weather-map\\pages\\index.js */"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.d707215716498427c35e.hot-update.js.map