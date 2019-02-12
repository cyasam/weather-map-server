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
        name: 'Istanbul',
        lat: 41.01384,
        lng: 28.94966
      }, {
        name: 'Ankara',
        lat: 39.91987,
        lng: 32.85427
      }, {
        name: 'Izmir',
        lat: 38.41273,
        lng: 27.13838
      }, {
        name: 'Brussels',
        lat: 50.85045,
        lng: 4.34878
      }, {
        name: 'Berlin',
        lat: 52.52437,
        lng: 13.41053
      }, {
        name: 'Frankfurt',
        lat: 50.11552,
        lng: 8.68417
      }, {
        name: 'Munich',
        lat: 48.13743,
        lng: 11.57549
      }, {
        name: 'London',
        lat: 51.50853,
        lng: -0.12574
      }, {
        name: 'Paris',
        lat: 48.85341,
        lng: 2.3488
      }, {
        name: 'Milano',
        lat: 45.46427,
        lng: 9.18951
      }, {
        name: 'Rome',
        lat: 41.89193,
        lng: 12.51133
      }, {
        name: 'Vienna',
        lat: 48.20849,
        lng: 16.37208
      }, {
        name: 'Stockholm',
        lat: 59.33258,
        lng: 18.0649
      }, {
        name: 'Oslo',
        lat: 59.91273,
        lng: 10.74609
      }, {
        name: 'Copenhagen',
        lat: 55.67594,
        lng: 12.56553
      }, {
        name: 'Helsinki',
        lat: 60.16952,
        lng: 24.93545
      }, {
        name: 'Madrid',
        lat: 40.4165,
        lng: -3.70256
      }, {
        name: 'Barcelona',
        lat: 41.38879,
        lng: 2.15899
      }, {
        name: 'Moscow',
        lat: 55.75222,
        lng: 37.61556
      }, {
        name: 'Warsaw',
        lat: 52.22977,
        lng: 21.01178
      }, {
        name: 'Bucharest',
        lat: 44.43225,
        lng: 26.10626
      }, {
        name: 'Riga',
        lat: 56.946,
        lng: 24.10589
      }, {
        name: 'Minsk',
        lat: 53.9,
        lng: 27.56667
      }, {
        name: 'Kiev',
        lat: 50.45466,
        lng: 30.5238
      }, {
        name: 'Zagreb',
        lat: 45.81444,
        lng: 15.97798
      }, {
        name: 'Sarajevo',
        lat: 43.84864,
        lng: 18.35644
      }, {
        name: 'Budapest',
        lat: 47.49801,
        lng: 19.03991
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
        anchor: new google.maps.Point(iconSize.width / 2, iconSize.width / 2 * 3)
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
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "map",
        className: "jsx-715383559",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "715383559",
        __self: this
      }, "html,body,#__next{width:100%;height:100%;margin:0;padding:0;}#map-wrapper,#map{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxGcm9udGVuZC1leGFtcGxlc1xcd2VhdGhlci1tYXBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzTlcsQUFLMEIsQUFPRSxXQU5ELFlBQ0gsU0FDQyxVQUNaLGdDQUlhLFdBQ0MsWUFDZCIsImZpbGUiOiJFOlxcRnJvbnRlbmQtZXhhbXBsZXNcXHdlYXRoZXItbWFwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcHBSZXEsIGdvb2dsZU1hcEluaXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWFwOiBudWxsLFxuICAgIG1hcENlbnRlcjoge1xuICAgICAgbGF0OiA1Mi4wMjYsXG4gICAgICBsbmc6IDE1LjA1NTEsXG4gICAgfSxcbiAgICBjaXRpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0lzdGFuYnVsJyxcbiAgICAgICAgbGF0OiA0MS4wMTM4NCxcbiAgICAgICAgbG5nOiAyOC45NDk2NixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdBbmthcmEnLFxuICAgICAgICBsYXQ6IDM5LjkxOTg3LFxuICAgICAgICBsbmc6IDMyLjg1NDI3LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0l6bWlyJyxcbiAgICAgICAgbGF0OiAzOC40MTI3MyxcbiAgICAgICAgbG5nOiAyNy4xMzgzOCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCcnVzc2VscycsXG4gICAgICAgIGxhdDogNTAuODUwNDUsXG4gICAgICAgIGxuZzogNC4zNDg3OCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCZXJsaW4nLFxuICAgICAgICBsYXQ6IDUyLjUyNDM3LFxuICAgICAgICBsbmc6IDEzLjQxMDUzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0ZyYW5rZnVydCcsXG4gICAgICAgIGxhdDogNTAuMTE1NTIsXG4gICAgICAgIGxuZzogOC42ODQxNyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNdW5pY2gnLFxuICAgICAgICBsYXQ6IDQ4LjEzNzQzLFxuICAgICAgICBsbmc6IDExLjU3NTQ5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0xvbmRvbicsXG4gICAgICAgIGxhdDogNTEuNTA4NTMsXG4gICAgICAgIGxuZzogLTAuMTI1NzQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnUGFyaXMnLFxuICAgICAgICBsYXQ6IDQ4Ljg1MzQxLFxuICAgICAgICBsbmc6IDIuMzQ4OCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNaWxhbm8nLFxuICAgICAgICBsYXQ6IDQ1LjQ2NDI3LFxuICAgICAgICBsbmc6IDkuMTg5NTEsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnUm9tZScsXG4gICAgICAgIGxhdDogNDEuODkxOTMsXG4gICAgICAgIGxuZzogMTIuNTExMzMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnVmllbm5hJyxcbiAgICAgICAgbGF0OiA0OC4yMDg0OSxcbiAgICAgICAgbG5nOiAxNi4zNzIwOCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTdG9ja2hvbG0nLFxuICAgICAgICBsYXQ6IDU5LjMzMjU4LFxuICAgICAgICBsbmc6IDE4LjA2NDksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnT3NsbycsXG4gICAgICAgIGxhdDogNTkuOTEyNzMsXG4gICAgICAgIGxuZzogMTAuNzQ2MDksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQ29wZW5oYWdlbicsXG4gICAgICAgIGxhdDogNTUuNjc1OTQsXG4gICAgICAgIGxuZzogMTIuNTY1NTMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnSGVsc2lua2knLFxuICAgICAgICBsYXQ6IDYwLjE2OTUyLFxuICAgICAgICBsbmc6IDI0LjkzNTQ1LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01hZHJpZCcsXG4gICAgICAgIGxhdDogNDAuNDE2NSxcbiAgICAgICAgbG5nOiAtMy43MDI1NixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCYXJjZWxvbmEnLFxuICAgICAgICBsYXQ6IDQxLjM4ODc5LFxuICAgICAgICBsbmc6IDIuMTU4OTksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTW9zY293JyxcbiAgICAgICAgbGF0OiA1NS43NTIyMixcbiAgICAgICAgbG5nOiAzNy42MTU1NixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdXYXJzYXcnLFxuICAgICAgICBsYXQ6IDUyLjIyOTc3LFxuICAgICAgICBsbmc6IDIxLjAxMTc4LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0J1Y2hhcmVzdCcsXG4gICAgICAgIGxhdDogNDQuNDMyMjUsXG4gICAgICAgIGxuZzogMjYuMTA2MjYsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnUmlnYScsXG4gICAgICAgIGxhdDogNTYuOTQ2LFxuICAgICAgICBsbmc6IDI0LjEwNTg5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01pbnNrJyxcbiAgICAgICAgbGF0OiA1My45LFxuICAgICAgICBsbmc6IDI3LjU2NjY3LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0tpZXYnLFxuICAgICAgICBsYXQ6IDUwLjQ1NDY2LFxuICAgICAgICBsbmc6IDMwLjUyMzgsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnWmFncmViJyxcbiAgICAgICAgbGF0OiA0NS44MTQ0NCxcbiAgICAgICAgbG5nOiAxNS45Nzc5OCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTYXJhamV2bycsXG4gICAgICAgIGxhdDogNDMuODQ4NjQsXG4gICAgICAgIGxuZzogMTguMzU2NDQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQnVkYXBlc3QnLFxuICAgICAgICBsYXQ6IDQ3LjQ5ODAxLFxuICAgICAgICBsbmc6IDE5LjAzOTkxLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUubWFwKSB7XG4gICAgICBnb29nbGVNYXBJbml0KClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9uTG9hZEdvb2dsZU1hcHNTY3JpcHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2VzID0+IHtcbiAgICAgICAgICByZXNwb25zZXMuZm9yRWFjaChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGN1cnJlbnRseTogeyBpY29uIH0sXG4gICAgICAgICAgICAgIGxhdGl0dWRlLFxuICAgICAgICAgICAgICBsb25naXR1ZGUsXG4gICAgICAgICAgICB9ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWFya2VycyhsYXRpdHVkZSwgbG9uZ2l0dWRlLCBpY29uKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlTWFya2VycyhsYXQsIGxuZywgaWNvbikge1xuICAgIGNvbnN0IGljb25CYXNlID0gJy9zdGF0aWMvaW1hZ2VzL3dlYXRoZXItaWNvbnMnO1xuICAgIGNvbnN0IGljb25TaXplID0ge1xuICAgICAgd2lkdGg6IDM2LFxuICAgICAgaGVpZ2h0OiAzNixcbiAgICB9O1xuXG4gICAgY29uc3QgaWNvbk9iaiA9IHtcbiAgICAgIHVybDogYCR7aWNvbkJhc2V9LyR7aWNvbn0uc3ZnYCxcbiAgICAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKGljb25TaXplLndpZHRoLCBpY29uU2l6ZS5oZWlnaHQpLFxuICAgICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoXG4gICAgICAgIGljb25TaXplLndpZHRoIC8gMixcbiAgICAgICAgKGljb25TaXplLndpZHRoIC8gMikgKiAzLFxuICAgICAgKSxcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlIG1hcmtlcnMuXG4gICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyksXG4gICAgICBpY29uOiBpY29uT2JqLFxuICAgICAgbWFwOiB0aGlzLnN0YXRlLm1hcCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uTG9hZEdvb2dsZU1hcHNTY3JpcHQoKSB7XG4gICAgY29uc3QgeyBtYXBDZW50ZXIsIGNpdGllcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGxhdCwgbG5nIH0gPSBtYXBDZW50ZXI7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcDogbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgICAgY2VudGVyOiB7IGxhdCwgbG5nIH0sXG4gICAgICAgIHpvb206IDUsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb21pc2VDaXRpZXMgPSBjaXRpZXMubWFwKGNpdHkgPT4ge1xuICAgICAgcmV0dXJuIGFwcFJlcS5nZXQoYC9nZXQtd2VhdGhlcj9sYXRsbmc9JHtjaXR5LmxhdH0sJHtjaXR5LmxuZ31gKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlQ2l0aWVzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIm1hcC13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJtYXBcIiAvPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI21hcC13cmFwcGVyLFxuICAgICAgICAgICAgI21hcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\n/*@ sourceURL=E:\\Frontend-examples\\weather-map\\pages\\index.js */"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.195c4126df4a19bdde1d.hot-update.js.map