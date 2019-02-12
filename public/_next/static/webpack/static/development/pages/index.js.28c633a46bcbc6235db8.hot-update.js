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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _static_json_map_style_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/json/map-style.json */ "./static/json/map-style.json");
var _static_json_map_style_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/json/map-style.json */ "./static/json/map-style.json", 1);









var _jsxFileName = "E:\\Frontend-examples\\weather-map\\pages\\index.js";






var App =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this)), "state", {
      map: null,
      mapCenter: {
        lat: 52.026,
        lng: 14.5551
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
        name: 'Athens',
        lat: 37.97945,
        lng: 23.71622
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
      },,]
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.state.map) {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_11__["googleMapInit"])().then(function () {
          return _this2.onLoadGoogleMapsScript();
        }).then(function (responses) {
          responses.forEach(function (response) {
            if (response) {
              var _response$data = response.data,
                  _response$data$weathe = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_response$data.weather, 1),
                  icon = _response$data$weathe[0].icon,
                  _response$data$coord = _response$data.coord,
                  lat = _response$data$coord.lat,
                  lon = _response$data$coord.lon;

              _this2.createMarkers(lat, lon, icon);
            }
          });
        });
      }
    }
  }, {
    key: "createMarkers",
    value: function createMarkers(lat, lng, icon) {
      var iconBase = 'http://openweathermap.org/img/w';
      var iconSize = {
        width: 50,
        height: 50
      };
      var iconObj = {
        url: "".concat(iconBase, "/").concat(icon, ".png"),
        scaledSize: new google.maps.Size(iconSize.width, iconSize.height),
        anchor: new google.maps.Point(iconSize.width / 2, iconSize.width + 6)
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
          zoom: 5,
          minZoom: 5,
          maxZoom: 8
        })
      });
      var promiseCities = cities.map(function (city) {
        return _helpers__WEBPACK_IMPORTED_MODULE_11__["appReq"].get("/get-weather?latlng=".concat(city.lat, ",").concat(city.lng));
      });
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all(promiseCities);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "map-wrapper",
        className: "jsx-715383559",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "map",
        className: "jsx-715383559",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "715383559",
        __self: this
      }, "html,body,#__next{width:100%;height:100%;margin:0;padding:0;}#map-wrapper,#map{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxGcm9udGVuZC1leGFtcGxlc1xcd2VhdGhlci1tYXBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2TlcsQUFLMEIsQUFPRSxXQU5ELFlBQ0gsU0FDQyxVQUNaLGdDQUlhLFdBQ0MsWUFDZCIsImZpbGUiOiJFOlxcRnJvbnRlbmQtZXhhbXBsZXNcXHdlYXRoZXItbWFwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcHBSZXEsIGdvb2dsZU1hcEluaXQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBtYXBTdHlsZSBmcm9tICcuLi9zdGF0aWMvanNvbi9tYXAtc3R5bGUuanNvbic7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG1hcDogbnVsbCxcbiAgICBtYXBDZW50ZXI6IHtcbiAgICAgIGxhdDogNTIuMDI2LFxuICAgICAgbG5nOiAxNC41NTUxLFxuICAgIH0sXG4gICAgY2l0aWVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdJc3RhbmJ1bCcsXG4gICAgICAgIGxhdDogNDEuMDEzODQsXG4gICAgICAgIGxuZzogMjguOTQ5NjYsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQW5rYXJhJyxcbiAgICAgICAgbGF0OiAzOS45MTk4NyxcbiAgICAgICAgbG5nOiAzMi44NTQyNyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdJem1pcicsXG4gICAgICAgIGxhdDogMzguNDEyNzMsXG4gICAgICAgIGxuZzogMjcuMTM4MzgsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQnJ1c3NlbHMnLFxuICAgICAgICBsYXQ6IDUwLjg1MDQ1LFxuICAgICAgICBsbmc6IDQuMzQ4NzgsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmVybGluJyxcbiAgICAgICAgbGF0OiA1Mi41MjQzNyxcbiAgICAgICAgbG5nOiAxMy40MTA1MyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdGcmFua2Z1cnQnLFxuICAgICAgICBsYXQ6IDUwLjExNTUyLFxuICAgICAgICBsbmc6IDguNjg0MTcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTXVuaWNoJyxcbiAgICAgICAgbGF0OiA0OC4xMzc0MyxcbiAgICAgICAgbG5nOiAxMS41NzU0OSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdMb25kb24nLFxuICAgICAgICBsYXQ6IDUxLjUwODUzLFxuICAgICAgICBsbmc6IC0wLjEyNTc0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1BhcmlzJyxcbiAgICAgICAgbGF0OiA0OC44NTM0MSxcbiAgICAgICAgbG5nOiAyLjM0ODgsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTWlsYW5vJyxcbiAgICAgICAgbGF0OiA0NS40NjQyNyxcbiAgICAgICAgbG5nOiA5LjE4OTUxLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1JvbWUnLFxuICAgICAgICBsYXQ6IDQxLjg5MTkzLFxuICAgICAgICBsbmc6IDEyLjUxMTMzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1ZpZW5uYScsXG4gICAgICAgIGxhdDogNDguMjA4NDksXG4gICAgICAgIGxuZzogMTYuMzcyMDgsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU3RvY2tob2xtJyxcbiAgICAgICAgbGF0OiA1OS4zMzI1OCxcbiAgICAgICAgbG5nOiAxOC4wNjQ5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ09zbG8nLFxuICAgICAgICBsYXQ6IDU5LjkxMjczLFxuICAgICAgICBsbmc6IDEwLjc0NjA5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0NvcGVuaGFnZW4nLFxuICAgICAgICBsYXQ6IDU1LjY3NTk0LFxuICAgICAgICBsbmc6IDEyLjU2NTUzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0hlbHNpbmtpJyxcbiAgICAgICAgbGF0OiA2MC4xNjk1MixcbiAgICAgICAgbG5nOiAyNC45MzU0NSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdBdGhlbnMnLFxuICAgICAgICBsYXQ6IDM3Ljk3OTQ1LFxuICAgICAgICBsbmc6IDIzLjcxNjIyLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01hZHJpZCcsXG4gICAgICAgIGxhdDogNDAuNDE2NSxcbiAgICAgICAgbG5nOiAtMy43MDI1NixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCYXJjZWxvbmEnLFxuICAgICAgICBsYXQ6IDQxLjM4ODc5LFxuICAgICAgICBsbmc6IDIuMTU4OTksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTW9zY293JyxcbiAgICAgICAgbGF0OiA1NS43NTIyMixcbiAgICAgICAgbG5nOiAzNy42MTU1NixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdXYXJzYXcnLFxuICAgICAgICBsYXQ6IDUyLjIyOTc3LFxuICAgICAgICBsbmc6IDIxLjAxMTc4LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0J1Y2hhcmVzdCcsXG4gICAgICAgIGxhdDogNDQuNDMyMjUsXG4gICAgICAgIGxuZzogMjYuMTA2MjYsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnUmlnYScsXG4gICAgICAgIGxhdDogNTYuOTQ2LFxuICAgICAgICBsbmc6IDI0LjEwNTg5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01pbnNrJyxcbiAgICAgICAgbGF0OiA1My45LFxuICAgICAgICBsbmc6IDI3LjU2NjY3LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0tpZXYnLFxuICAgICAgICBsYXQ6IDUwLjQ1NDY2LFxuICAgICAgICBsbmc6IDMwLjUyMzgsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnWmFncmViJyxcbiAgICAgICAgbGF0OiA0NS44MTQ0NCxcbiAgICAgICAgbG5nOiAxNS45Nzc5OCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTYXJhamV2bycsXG4gICAgICAgIGxhdDogNDMuODQ4NjQsXG4gICAgICAgIGxuZzogMTguMzU2NDQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQnVkYXBlc3QnLFxuICAgICAgICBsYXQ6IDQ3LjQ5ODAxLFxuICAgICAgICBsbmc6IDE5LjAzOTkxLFxuICAgICAgfSxcbiAgICAgICxcbiAgICBdLFxuICB9O1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUubWFwKSB7XG4gICAgICBnb29nbGVNYXBJbml0KClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9uTG9hZEdvb2dsZU1hcHNTY3JpcHQoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2VzID0+IHtcbiAgICAgICAgICByZXNwb25zZXMuZm9yRWFjaChyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgIHdlYXRoZXI6IFt7IGljb24gfV0sXG4gICAgICAgICAgICAgICAgY29vcmQ6IHsgbGF0LCBsb24gfSxcbiAgICAgICAgICAgICAgfSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgIHRoaXMuY3JlYXRlTWFya2VycyhsYXQsIGxvbiwgaWNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZU1hcmtlcnMobGF0LCBsbmcsIGljb24pIHtcbiAgICBjb25zdCBpY29uQmFzZSA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93JztcbiAgICBjb25zdCBpY29uU2l6ZSA9IHtcbiAgICAgIHdpZHRoOiA1MCxcbiAgICAgIGhlaWdodDogNTAsXG4gICAgfTtcblxuICAgIGNvbnN0IGljb25PYmogPSB7XG4gICAgICB1cmw6IGAke2ljb25CYXNlfS8ke2ljb259LnBuZ2AsXG4gICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZShpY29uU2l6ZS53aWR0aCwgaWNvblNpemUuaGVpZ2h0KSxcbiAgICAgIGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KGljb25TaXplLndpZHRoIC8gMiwgaWNvblNpemUud2lkdGggKyA2KSxcbiAgICB9O1xuXG4gICAgLy8gQ3JlYXRlIG1hcmtlcnMuXG4gICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyksXG4gICAgICBpY29uOiBpY29uT2JqLFxuICAgICAgbWFwOiB0aGlzLnN0YXRlLm1hcCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uTG9hZEdvb2dsZU1hcHNTY3JpcHQoKSB7XG4gICAgY29uc3QgeyBtYXBDZW50ZXIsIGNpdGllcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGxhdCwgbG5nIH0gPSBtYXBDZW50ZXI7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcDogbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgICAgY2VudGVyOiB7IGxhdCwgbG5nIH0sXG4gICAgICAgIHpvb206IDUsXG4gICAgICAgIG1pblpvb206IDUsXG4gICAgICAgIG1heFpvb206IDgsXG4gICAgICB9KSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHByb21pc2VDaXRpZXMgPSBjaXRpZXMubWFwKGNpdHkgPT4ge1xuICAgICAgcmV0dXJuIGFwcFJlcS5nZXQoYC9nZXQtd2VhdGhlcj9sYXRsbmc9JHtjaXR5LmxhdH0sJHtjaXR5LmxuZ31gKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlQ2l0aWVzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIm1hcC13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJtYXBcIiAvPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI21hcC13cmFwcGVyLFxuICAgICAgICAgICAgI21hcCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19 */\n/*@ sourceURL=E:\\Frontend-examples\\weather-map\\pages\\index.js */"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./static/json/map-style.json":
/*!************************************!*\
  !*** ./static/json/map-style.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, default */
/***/ (function(module) {

module.exports = [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}];

/***/ })

})
//# sourceMappingURL=index.js.28c633a46bcbc6235db8.hot-update.js.map