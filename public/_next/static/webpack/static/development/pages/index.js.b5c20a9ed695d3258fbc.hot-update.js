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
        name: 'İstanbul',
        lat: 41.033606,
        lng: 29.086941
      }, {
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
        lat: 56.132514,
        lng: 37.65615
      }, {
        name: 'Warsaw',
        lat: 52.2297,
        lng: 21.0122
      }, {
        name: 'Bucharest',
        lat: 44.43895,
        lng: 26.109011
      }, {
        name: 'Riga',
        lat: 57.027595,
        lng: 24.048958
      }, {
        name: 'Minsk',
        lat: 54.264456,
        lng: 27.512846
      }, {
        name: 'Kyiv',
        lat: 50.599229,
        lng: 30.573538
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
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        id: "map",
        className: "jsx-715383559",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "715383559",
        __self: this
      }, "html,body,#__next{width:100%;height:100%;margin:0;padding:0;}#map-wrapper,#map{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxGcm9udGVuZC1leGFtcGxlc1xcd2VhdGhlci1tYXBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSlcsQUFLMEIsQUFPRSxXQU5ELFlBQ0gsU0FDQyxVQUNaLGdDQUlhLFdBQ0MsWUFDZCIsImZpbGUiOiJFOlxcRnJvbnRlbmQtZXhhbXBsZXNcXHdlYXRoZXItbWFwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcHBSZXEsIGdvb2dsZU1hcEluaXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWFwOiBudWxsLFxuICAgIG1hcENlbnRlcjoge1xuICAgICAgbGF0OiA1Mi4wMjYsXG4gICAgICBsbmc6IDE1LjA1NTEsXG4gICAgfSxcbiAgICBjaXRpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ8Swc3RhbmJ1bCcsXG4gICAgICAgIGxhdDogNDEuMDMzNjA2LFxuICAgICAgICBsbmc6IDI5LjA4Njk0MSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCZXJsaW4nLFxuICAgICAgICBsYXQ6IDUyLjUyLFxuICAgICAgICBsbmc6IDEzLjQwNSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdMb25kb24nLFxuICAgICAgICBsYXQ6IDUxLjUwNzQsXG4gICAgICAgIGxuZzogLTAuMTE4MixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdQYXJpcycsXG4gICAgICAgIGxhdDogNDguODYyMixcbiAgICAgICAgbG5nOiAyLjM2MzgsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTWlsYW4nLFxuICAgICAgICBsYXQ6IDQ1LjQ4MDcsXG4gICAgICAgIGxuZzogOS4xNzEzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1ZpZW5uYScsXG4gICAgICAgIGxhdDogNDguMjA5NixcbiAgICAgICAgbG5nOiAxNi40MTEzLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1N0b2NraG9sbScsXG4gICAgICAgIGxhdDogNTkuMzMwOSxcbiAgICAgICAgbG5nOiAxOC4wODA5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ09zbG8nLFxuICAgICAgICBsYXQ6IDU5LjkxMTQsXG4gICAgICAgIGxuZzogMTAuNzMyNSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdNb3Nrb3cnLFxuICAgICAgICBsYXQ6IDU2LjEzMjUxNCxcbiAgICAgICAgbG5nOiAzNy42NTYxNSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdXYXJzYXcnLFxuICAgICAgICBsYXQ6IDUyLjIyOTcsXG4gICAgICAgIGxuZzogMjEuMDEyMixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCdWNoYXJlc3QnLFxuICAgICAgICBsYXQ6IDQ0LjQzODk1LFxuICAgICAgICBsbmc6IDI2LjEwOTAxMSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdSaWdhJyxcbiAgICAgICAgbGF0OiA1Ny4wMjc1OTUsXG4gICAgICAgIGxuZzogMjQuMDQ4OTU4LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01pbnNrJyxcbiAgICAgICAgbGF0OiA1NC4yNjQ0NTYsXG4gICAgICAgIGxuZzogMjcuNTEyODQ2LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0t5aXYnLFxuICAgICAgICBsYXQ6IDUwLjU5OTIyOSxcbiAgICAgICAgbG5nOiAzMC41NzM1MzgsXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5tYXApIHtcbiAgICAgIGdvb2dsZU1hcEluaXQoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub25Mb2FkR29vZ2xlTWFwc1NjcmlwdCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZXMgPT4ge1xuICAgICAgICAgIHJlc3BvbnNlcy5mb3JFYWNoKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgY3VycmVudGx5OiB7IGljb24gfSxcbiAgICAgICAgICAgICAgbGF0aXR1ZGUsXG4gICAgICAgICAgICAgIGxvbmdpdHVkZSxcbiAgICAgICAgICAgIH0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVNYXJrZXJzKGxhdGl0dWRlLCBsb25naXR1ZGUsIGljb24pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVNYXJrZXJzKGxhdCwgbG5nLCBpY29uKSB7XG4gICAgY29uc3QgaWNvbkJhc2UgPSAnL3N0YXRpYy9pbWFnZXMvd2VhdGhlci1pY29ucyc7XG4gICAgY29uc3QgaWNvblNpemUgPSB7XG4gICAgICB3aWR0aDogMzYsXG4gICAgICBoZWlnaHQ6IDM2LFxuICAgIH07XG5cbiAgICBjb25zdCBpY29uT2JqID0ge1xuICAgICAgdXJsOiBgJHtpY29uQmFzZX0vJHtpY29ufS5zdmdgLFxuICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoaWNvblNpemUud2lkdGgsIGljb25TaXplLmhlaWdodCksXG4gICAgICBhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludChcbiAgICAgICAgaWNvblNpemUud2lkdGggLyAyLFxuICAgICAgICAoaWNvblNpemUud2lkdGggLyAyKSAqIDMsXG4gICAgICApLFxuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgbWFya2Vycy5cbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdCwgbG5nKSxcbiAgICAgIGljb246IGljb25PYmosXG4gICAgICBtYXA6IHRoaXMuc3RhdGUubWFwLFxuICAgIH0pO1xuICB9XG5cbiAgb25Mb2FkR29vZ2xlTWFwc1NjcmlwdCgpIHtcbiAgICBjb25zdCB7IG1hcENlbnRlciwgY2l0aWVzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IG1hcENlbnRlcjtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFwOiBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xuICAgICAgICBjZW50ZXI6IHsgbGF0LCBsbmcgfSxcbiAgICAgICAgem9vbTogNSxcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvbWlzZUNpdGllcyA9IGNpdGllcy5tYXAoY2l0eSA9PiB7XG4gICAgICByZXR1cm4gYXBwUmVxLmdldChgL2dldC13ZWF0aGVyP2xhdGxuZz0ke2NpdHkubGF0fSwke2NpdHkubG5nfWApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VDaXRpZXMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibWFwLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBpZD1cIm1hcFwiIC8+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBodG1sLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgICNfX25leHQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbWFwLXdyYXBwZXIsXG4gICAgICAgICAgICAjbWFwIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\n/*@ sourceURL=E:\\Frontend-examples\\weather-map\\pages\\index.js */"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.b5c20a9ed695d3258fbc.hot-update.js.map