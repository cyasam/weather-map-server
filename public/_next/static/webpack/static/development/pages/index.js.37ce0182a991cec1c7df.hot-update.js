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
            var _response$data = response.data,
                _response$data$weathe = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_response$data.weather, 1),
                icon = _response$data$weathe[0].icon,
                _response$data$coord = _response$data.coord,
                lat = _response$data$coord.lat,
                lon = _response$data$coord.lon;

            _this2.createMarkers(lat, lon, icon);
          });
        });
      }
    }
  }, {
    key: "createMarkers",
    value: function createMarkers(lat, lng, icon) {
      var iconBase = 'http://openweathermap.org/img/w';
      var iconSize = {
        width: 36,
        height: 36
      };
      var iconObj = {
        url: "".concat(iconBase, "/").concat(icon, ".png"),
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
      }, "html,body,#__next{width:100%;height:100%;margin:0;padding:0;}#map-wrapper,#map{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxGcm9udGVuZC1leGFtcGxlc1xcd2VhdGhlci1tYXBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2TlcsQUFLMEIsQUFPRSxXQU5ELFlBQ0gsU0FDQyxVQUNaLGdDQUlhLFdBQ0MsWUFDZCIsImZpbGUiOiJFOlxcRnJvbnRlbmQtZXhhbXBsZXNcXHdlYXRoZXItbWFwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcHBSZXEsIGdvb2dsZU1hcEluaXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWFwOiBudWxsLFxuICAgIG1hcENlbnRlcjoge1xuICAgICAgbGF0OiA1Mi4wMjYsXG4gICAgICBsbmc6IDE0LjU1NTEsXG4gICAgfSxcbiAgICBjaXRpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0lzdGFuYnVsJyxcbiAgICAgICAgbGF0OiA0MS4wMTM4NCxcbiAgICAgICAgbG5nOiAyOC45NDk2NixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdBbmthcmEnLFxuICAgICAgICBsYXQ6IDM5LjkxOTg3LFxuICAgICAgICBsbmc6IDMyLjg1NDI3LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0l6bWlyJyxcbiAgICAgICAgbGF0OiAzOC40MTI3MyxcbiAgICAgICAgbG5nOiAyNy4xMzgzOCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCcnVzc2VscycsXG4gICAgICAgIGxhdDogNTAuODUwNDUsXG4gICAgICAgIGxuZzogNC4zNDg3OCxcbiAgICAgIH0sXG4gICAgICAvKntcbiAgICAgICAgbmFtZTogJ0JlcmxpbicsXG4gICAgICAgIGxhdDogNTIuNTI0MzcsXG4gICAgICAgIGxuZzogMTMuNDEwNTMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnRnJhbmtmdXJ0JyxcbiAgICAgICAgbGF0OiA1MC4xMTU1MixcbiAgICAgICAgbG5nOiA4LjY4NDE3LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ011bmljaCcsXG4gICAgICAgIGxhdDogNDguMTM3NDMsXG4gICAgICAgIGxuZzogMTEuNTc1NDksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTG9uZG9uJyxcbiAgICAgICAgbGF0OiA1MS41MDg1MyxcbiAgICAgICAgbG5nOiAtMC4xMjU3NCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdQYXJpcycsXG4gICAgICAgIGxhdDogNDguODUzNDEsXG4gICAgICAgIGxuZzogMi4zNDg4LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01pbGFubycsXG4gICAgICAgIGxhdDogNDUuNDY0MjcsXG4gICAgICAgIGxuZzogOS4xODk1MSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdSb21lJyxcbiAgICAgICAgbGF0OiA0MS44OTE5MyxcbiAgICAgICAgbG5nOiAxMi41MTEzMyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdWaWVubmEnLFxuICAgICAgICBsYXQ6IDQ4LjIwODQ5LFxuICAgICAgICBsbmc6IDE2LjM3MjA4LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1N0b2NraG9sbScsXG4gICAgICAgIGxhdDogNTkuMzMyNTgsXG4gICAgICAgIGxuZzogMTguMDY0OSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdPc2xvJyxcbiAgICAgICAgbGF0OiA1OS45MTI3MyxcbiAgICAgICAgbG5nOiAxMC43NDYwOSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDb3BlbmhhZ2VuJyxcbiAgICAgICAgbGF0OiA1NS42NzU5NCxcbiAgICAgICAgbG5nOiAxMi41NjU1MyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdIZWxzaW5raScsXG4gICAgICAgIGxhdDogNjAuMTY5NTIsXG4gICAgICAgIGxuZzogMjQuOTM1NDUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQXRoZW5zJyxcbiAgICAgICAgbGF0OiAzNy45Nzk0NSxcbiAgICAgICAgbG5nOiAyMy43MTYyMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNYWRyaWQnLFxuICAgICAgICBsYXQ6IDQwLjQxNjUsXG4gICAgICAgIGxuZzogLTMuNzAyNTYsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmFyY2Vsb25hJyxcbiAgICAgICAgbGF0OiA0MS4zODg3OSxcbiAgICAgICAgbG5nOiAyLjE1ODk5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01vc2NvdycsXG4gICAgICAgIGxhdDogNTUuNzUyMjIsXG4gICAgICAgIGxuZzogMzcuNjE1NTYsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnV2Fyc2F3JyxcbiAgICAgICAgbGF0OiA1Mi4yMjk3NyxcbiAgICAgICAgbG5nOiAyMS4wMTE3OCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCdWNoYXJlc3QnLFxuICAgICAgICBsYXQ6IDQ0LjQzMjI1LFxuICAgICAgICBsbmc6IDI2LjEwNjI2LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1JpZ2EnLFxuICAgICAgICBsYXQ6IDU2Ljk0NixcbiAgICAgICAgbG5nOiAyNC4xMDU4OSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNaW5zaycsXG4gICAgICAgIGxhdDogNTMuOSxcbiAgICAgICAgbG5nOiAyNy41NjY2NyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdLaWV2JyxcbiAgICAgICAgbGF0OiA1MC40NTQ2NixcbiAgICAgICAgbG5nOiAzMC41MjM4LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1phZ3JlYicsXG4gICAgICAgIGxhdDogNDUuODE0NDQsXG4gICAgICAgIGxuZzogMTUuOTc3OTgsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU2FyYWpldm8nLFxuICAgICAgICBsYXQ6IDQzLjg0ODY0LFxuICAgICAgICBsbmc6IDE4LjM1NjQ0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0J1ZGFwZXN0JyxcbiAgICAgICAgbGF0OiA0Ny40OTgwMSxcbiAgICAgICAgbG5nOiAxOS4wMzk5MSxcbiAgICAgIH0sICovXG4gICAgICAsXG4gICAgXSxcbiAgfTtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLm1hcCkge1xuICAgICAgZ29vZ2xlTWFwSW5pdCgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vbkxvYWRHb29nbGVNYXBzU2NyaXB0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlcyA9PiB7XG4gICAgICAgICAgcmVzcG9uc2VzLmZvckVhY2gocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICB3ZWF0aGVyOiBbeyBpY29uIH1dLFxuICAgICAgICAgICAgICBjb29yZDogeyBsYXQsIGxvbiB9LFxuICAgICAgICAgICAgfSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1hcmtlcnMobGF0LCBsb24sIGljb24pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVNYXJrZXJzKGxhdCwgbG5nLCBpY29uKSB7XG4gICAgY29uc3QgaWNvbkJhc2UgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdyc7XG4gICAgY29uc3QgaWNvblNpemUgPSB7XG4gICAgICB3aWR0aDogMzYsXG4gICAgICBoZWlnaHQ6IDM2LFxuICAgIH07XG5cbiAgICBjb25zdCBpY29uT2JqID0ge1xuICAgICAgdXJsOiBgJHtpY29uQmFzZX0vJHtpY29ufS5wbmdgLFxuICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoaWNvblNpemUud2lkdGgsIGljb25TaXplLmhlaWdodCksXG4gICAgICBhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludChcbiAgICAgICAgaWNvblNpemUud2lkdGggLyAyLFxuICAgICAgICAoaWNvblNpemUud2lkdGggLyAyKSAqIDMsXG4gICAgICApLFxuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgbWFya2Vycy5cbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdCwgbG5nKSxcbiAgICAgIGljb246IGljb25PYmosXG4gICAgICBtYXA6IHRoaXMuc3RhdGUubWFwLFxuICAgIH0pO1xuICB9XG5cbiAgb25Mb2FkR29vZ2xlTWFwc1NjcmlwdCgpIHtcbiAgICBjb25zdCB7IG1hcENlbnRlciwgY2l0aWVzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IG1hcENlbnRlcjtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFwOiBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xuICAgICAgICBjZW50ZXI6IHsgbGF0LCBsbmcgfSxcbiAgICAgICAgem9vbTogNSxcbiAgICAgICAgbWluWm9vbTogNSxcbiAgICAgICAgbWF4Wm9vbTogOCxcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvbWlzZUNpdGllcyA9IGNpdGllcy5tYXAoY2l0eSA9PiB7XG4gICAgICByZXR1cm4gYXBwUmVxLmdldChgL2dldC13ZWF0aGVyP2xhdGxuZz0ke2NpdHkubGF0fSwke2NpdHkubG5nfWApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VDaXRpZXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibWFwLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBpZD1cIm1hcFwiIC8+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICNfX25leHQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbWFwLXdyYXBwZXIsXG4gICAgICAgICAgICAjbWFwIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\n/*@ sourceURL=E:\\Frontend-examples\\weather-map\\pages\\index.js */"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.37ce0182a991cec1c7df.hot-update.js.map