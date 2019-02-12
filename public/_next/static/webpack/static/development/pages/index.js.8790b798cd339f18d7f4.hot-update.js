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
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "map",
        className: "jsx-715383559",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "715383559",
        __self: this
      }, "html,body,#__next{width:100%;height:100%;margin:0;padding:0;}#map-wrapper,#map{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxGcm9udGVuZC1leGFtcGxlc1xcd2VhdGhlci1tYXBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0TlcsQUFLMEIsQUFPRSxXQU5ELFlBQ0gsU0FDQyxVQUNaLGdDQUlhLFdBQ0MsWUFDZCIsImZpbGUiOiJFOlxcRnJvbnRlbmQtZXhhbXBsZXNcXHdlYXRoZXItbWFwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcHBSZXEsIGdvb2dsZU1hcEluaXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWFwOiBudWxsLFxuICAgIG1hcENlbnRlcjoge1xuICAgICAgbGF0OiA1Mi4wMjYsXG4gICAgICBsbmc6IDE0LjU1NTEsXG4gICAgfSxcbiAgICBjaXRpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0lzdGFuYnVsJyxcbiAgICAgICAgbGF0OiA0MS4wMTM4NCxcbiAgICAgICAgbG5nOiAyOC45NDk2NixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdBbmthcmEnLFxuICAgICAgICBsYXQ6IDM5LjkxOTg3LFxuICAgICAgICBsbmc6IDMyLjg1NDI3LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0l6bWlyJyxcbiAgICAgICAgbGF0OiAzOC40MTI3MyxcbiAgICAgICAgbG5nOiAyNy4xMzgzOCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCcnVzc2VscycsXG4gICAgICAgIGxhdDogNTAuODUwNDUsXG4gICAgICAgIGxuZzogNC4zNDg3OCxcbiAgICAgIH0sXG4gICAgICAvKntcbiAgICAgICAgbmFtZTogJ0JlcmxpbicsXG4gICAgICAgIGxhdDogNTIuNTI0MzcsXG4gICAgICAgIGxuZzogMTMuNDEwNTMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnRnJhbmtmdXJ0JyxcbiAgICAgICAgbGF0OiA1MC4xMTU1MixcbiAgICAgICAgbG5nOiA4LjY4NDE3LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ011bmljaCcsXG4gICAgICAgIGxhdDogNDguMTM3NDMsXG4gICAgICAgIGxuZzogMTEuNTc1NDksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTG9uZG9uJyxcbiAgICAgICAgbGF0OiA1MS41MDg1MyxcbiAgICAgICAgbG5nOiAtMC4xMjU3NCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdQYXJpcycsXG4gICAgICAgIGxhdDogNDguODUzNDEsXG4gICAgICAgIGxuZzogMi4zNDg4LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01pbGFubycsXG4gICAgICAgIGxhdDogNDUuNDY0MjcsXG4gICAgICAgIGxuZzogOS4xODk1MSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdSb21lJyxcbiAgICAgICAgbGF0OiA0MS44OTE5MyxcbiAgICAgICAgbG5nOiAxMi41MTEzMyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdWaWVubmEnLFxuICAgICAgICBsYXQ6IDQ4LjIwODQ5LFxuICAgICAgICBsbmc6IDE2LjM3MjA4LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1N0b2NraG9sbScsXG4gICAgICAgIGxhdDogNTkuMzMyNTgsXG4gICAgICAgIGxuZzogMTguMDY0OSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdPc2xvJyxcbiAgICAgICAgbGF0OiA1OS45MTI3MyxcbiAgICAgICAgbG5nOiAxMC43NDYwOSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdDb3BlbmhhZ2VuJyxcbiAgICAgICAgbGF0OiA1NS42NzU5NCxcbiAgICAgICAgbG5nOiAxMi41NjU1MyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdIZWxzaW5raScsXG4gICAgICAgIGxhdDogNjAuMTY5NTIsXG4gICAgICAgIGxuZzogMjQuOTM1NDUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQXRoZW5zJyxcbiAgICAgICAgbGF0OiAzNy45Nzk0NSxcbiAgICAgICAgbG5nOiAyMy43MTYyMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNYWRyaWQnLFxuICAgICAgICBsYXQ6IDQwLjQxNjUsXG4gICAgICAgIGxuZzogLTMuNzAyNTYsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmFyY2Vsb25hJyxcbiAgICAgICAgbGF0OiA0MS4zODg3OSxcbiAgICAgICAgbG5nOiAyLjE1ODk5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01vc2NvdycsXG4gICAgICAgIGxhdDogNTUuNzUyMjIsXG4gICAgICAgIGxuZzogMzcuNjE1NTYsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnV2Fyc2F3JyxcbiAgICAgICAgbGF0OiA1Mi4yMjk3NyxcbiAgICAgICAgbG5nOiAyMS4wMTE3OCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCdWNoYXJlc3QnLFxuICAgICAgICBsYXQ6IDQ0LjQzMjI1LFxuICAgICAgICBsbmc6IDI2LjEwNjI2LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1JpZ2EnLFxuICAgICAgICBsYXQ6IDU2Ljk0NixcbiAgICAgICAgbG5nOiAyNC4xMDU4OSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNaW5zaycsXG4gICAgICAgIGxhdDogNTMuOSxcbiAgICAgICAgbG5nOiAyNy41NjY2NyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdLaWV2JyxcbiAgICAgICAgbGF0OiA1MC40NTQ2NixcbiAgICAgICAgbG5nOiAzMC41MjM4LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1phZ3JlYicsXG4gICAgICAgIGxhdDogNDUuODE0NDQsXG4gICAgICAgIGxuZzogMTUuOTc3OTgsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnU2FyYWpldm8nLFxuICAgICAgICBsYXQ6IDQzLjg0ODY0LFxuICAgICAgICBsbmc6IDE4LjM1NjQ0LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0J1ZGFwZXN0JyxcbiAgICAgICAgbGF0OiA0Ny40OTgwMSxcbiAgICAgICAgbG5nOiAxOS4wMzk5MSxcbiAgICAgIH0sICovXG4gICAgICAsXG4gICAgXSxcbiAgfTtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLm1hcCkge1xuICAgICAgZ29vZ2xlTWFwSW5pdCgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vbkxvYWRHb29nbGVNYXBzU2NyaXB0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlcyA9PiB7XG4gICAgICAgICAgcmVzcG9uc2VzLmZvckVhY2gocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICB3ZWF0aGVyOiBbeyBpY29uIH1dLFxuICAgICAgICAgICAgICAgIGNvb3JkOiB7IGxhdCwgbG9uIH0sXG4gICAgICAgICAgICAgIH0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU1hcmtlcnMobGF0LCBsb24sIGljb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVNYXJrZXJzKGxhdCwgbG5nLCBpY29uKSB7XG4gICAgY29uc3QgaWNvbkJhc2UgPSAnaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdyc7XG4gICAgY29uc3QgaWNvblNpemUgPSB7XG4gICAgICB3aWR0aDogNTAsXG4gICAgICBoZWlnaHQ6IDUwLFxuICAgIH07XG5cbiAgICBjb25zdCBpY29uT2JqID0ge1xuICAgICAgdXJsOiBgJHtpY29uQmFzZX0vJHtpY29ufS5wbmdgLFxuICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoaWNvblNpemUud2lkdGgsIGljb25TaXplLmhlaWdodCksXG4gICAgICBhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludChpY29uU2l6ZS53aWR0aCAvIDIsIGljb25TaXplLndpZHRoICsgNiksXG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSBtYXJrZXJzLlxuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsbmcpLFxuICAgICAgaWNvbjogaWNvbk9iaixcbiAgICAgIG1hcDogdGhpcy5zdGF0ZS5tYXAsXG4gICAgfSk7XG4gIH1cblxuICBvbkxvYWRHb29nbGVNYXBzU2NyaXB0KCkge1xuICAgIGNvbnN0IHsgbWFwQ2VudGVyLCBjaXRpZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gbWFwQ2VudGVyO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXA6IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XG4gICAgICAgIGNlbnRlcjogeyBsYXQsIGxuZyB9LFxuICAgICAgICB6b29tOiA1LFxuICAgICAgICBtaW5ab29tOiA1LFxuICAgICAgICBtYXhab29tOiA4LFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9taXNlQ2l0aWVzID0gY2l0aWVzLm1hcChjaXR5ID0+IHtcbiAgICAgIHJldHVybiBhcHBSZXEuZ2V0KGAvZ2V0LXdlYXRoZXI/bGF0bG5nPSR7Y2l0eS5sYXR9LCR7Y2l0eS5sbmd9YCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZUNpdGllcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJtYXAtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGlkPVwibWFwXCIgLz5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtYXAtd3JhcHBlcixcbiAgICAgICAgICAgICNtYXAge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\n/*@ sourceURL=E:\\Frontend-examples\\weather-map\\pages\\index.js */"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.8790b798cd339f18d7f4.hot-update.js.map