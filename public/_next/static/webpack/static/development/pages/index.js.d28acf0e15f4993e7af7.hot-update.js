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
        lat: 41.01384,
        lng: 28.94966
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
        lat: 55.7901,
        lng: 37.6425
      }, {
        name: 'Warsaw',
        lat: 52.2297,
        lng: 21.0122
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
      }, "html,body,#__next{width:100%;height:100%;margin:0;padding:0;}#map-wrapper,#map{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxGcm9udGVuZC1leGFtcGxlc1xcd2VhdGhlci1tYXBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSlcsQUFLMEIsQUFPRSxXQU5ELFlBQ0gsU0FDQyxVQUNaLGdDQUlhLFdBQ0MsWUFDZCIsImZpbGUiOiJFOlxcRnJvbnRlbmQtZXhhbXBsZXNcXHdlYXRoZXItbWFwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcHBSZXEsIGdvb2dsZU1hcEluaXQgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWFwOiBudWxsLFxuICAgIG1hcENlbnRlcjoge1xuICAgICAgbGF0OiA1Mi4wMjYsXG4gICAgICBsbmc6IDE1LjA1NTEsXG4gICAgfSxcbiAgICBjaXRpZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ8Swc3RhbmJ1bCcsXG4gICAgICAgIGxhdDogNDEuMDEzODQsXG4gICAgICAgIGxuZzogMjguOTQ5NjYsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmVybGluJyxcbiAgICAgICAgbGF0OiA1Mi41MixcbiAgICAgICAgbG5nOiAxMy40MDUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTG9uZG9uJyxcbiAgICAgICAgbGF0OiA1MS41MDc0LFxuICAgICAgICBsbmc6IC0wLjExODIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnUGFyaXMnLFxuICAgICAgICBsYXQ6IDQ4Ljg2MjIsXG4gICAgICAgIGxuZzogMi4zNjM4LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ01pbGFuJyxcbiAgICAgICAgbGF0OiA0NS40ODA3LFxuICAgICAgICBsbmc6IDkuMTcxMyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdWaWVubmEnLFxuICAgICAgICBsYXQ6IDQ4LjIwOTYsXG4gICAgICAgIGxuZzogMTYuNDExMyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTdG9ja2hvbG0nLFxuICAgICAgICBsYXQ6IDU5LjMzMDksXG4gICAgICAgIGxuZzogMTguMDgwOSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdPc2xvJyxcbiAgICAgICAgbGF0OiA1OS45MTE0LFxuICAgICAgICBsbmc6IDEwLjczMjUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTW9za293JyxcbiAgICAgICAgbGF0OiA1NS43OTAxLFxuICAgICAgICBsbmc6IDM3LjY0MjUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnV2Fyc2F3JyxcbiAgICAgICAgbGF0OiA1Mi4yMjk3LFxuICAgICAgICBsbmc6IDIxLjAxMjIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQnVjaGFyZXN0JyxcbiAgICAgICAgbGF0OiA0NC40MzIyNSxcbiAgICAgICAgbG5nOiAyNi4xMDYyNixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdSaWdhJyxcbiAgICAgICAgbGF0OiA1Ni45NDYsXG4gICAgICAgIGxuZzogMjQuMTA1ODksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnTWluc2snLFxuICAgICAgICBsYXQ6IDUzLjksXG4gICAgICAgIGxuZzogMjcuNTY2NjcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnS2lldicsXG4gICAgICAgIGxhdDogNTAuNDU0NjYsXG4gICAgICAgIGxuZzogMzAuNTIzOCxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLm1hcCkge1xuICAgICAgZ29vZ2xlTWFwSW5pdCgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vbkxvYWRHb29nbGVNYXBzU2NyaXB0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlcyA9PiB7XG4gICAgICAgICAgcmVzcG9uc2VzLmZvckVhY2gocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICBjdXJyZW50bHk6IHsgaWNvbiB9LFxuICAgICAgICAgICAgICBsYXRpdHVkZSxcbiAgICAgICAgICAgICAgbG9uZ2l0dWRlLFxuICAgICAgICAgICAgfSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1hcmtlcnMobGF0aXR1ZGUsIGxvbmdpdHVkZSwgaWNvbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZU1hcmtlcnMobGF0LCBsbmcsIGljb24pIHtcbiAgICBjb25zdCBpY29uQmFzZSA9ICcvc3RhdGljL2ltYWdlcy93ZWF0aGVyLWljb25zJztcbiAgICBjb25zdCBpY29uU2l6ZSA9IHtcbiAgICAgIHdpZHRoOiAzNixcbiAgICAgIGhlaWdodDogMzYsXG4gICAgfTtcblxuICAgIGNvbnN0IGljb25PYmogPSB7XG4gICAgICB1cmw6IGAke2ljb25CYXNlfS8ke2ljb259LnN2Z2AsXG4gICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZShpY29uU2l6ZS53aWR0aCwgaWNvblNpemUuaGVpZ2h0KSxcbiAgICAgIGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KFxuICAgICAgICBpY29uU2l6ZS53aWR0aCAvIDIsXG4gICAgICAgIChpY29uU2l6ZS53aWR0aCAvIDIpICogMyxcbiAgICAgICksXG4gICAgfTtcblxuICAgIC8vIENyZWF0ZSBtYXJrZXJzLlxuICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsbmcpLFxuICAgICAgaWNvbjogaWNvbk9iaixcbiAgICAgIG1hcDogdGhpcy5zdGF0ZS5tYXAsXG4gICAgfSk7XG4gIH1cblxuICBvbkxvYWRHb29nbGVNYXBzU2NyaXB0KCkge1xuICAgIGNvbnN0IHsgbWFwQ2VudGVyLCBjaXRpZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gbWFwQ2VudGVyO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtYXA6IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XG4gICAgICAgIGNlbnRlcjogeyBsYXQsIGxuZyB9LFxuICAgICAgICB6b29tOiA1LFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9taXNlQ2l0aWVzID0gY2l0aWVzLm1hcChjaXR5ID0+IHtcbiAgICAgIHJldHVybiBhcHBSZXEuZ2V0KGAvZ2V0LXdlYXRoZXI/bGF0bG5nPSR7Y2l0eS5sYXR9LCR7Y2l0eS5sbmd9YCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZUNpdGllcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJtYXAtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGlkPVwibWFwXCIgLz5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtYXAtd3JhcHBlcixcbiAgICAgICAgICAgICNtYXAge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\n/*@ sourceURL=E:\\Frontend-examples\\weather-map\\pages\\index.js */"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.d28acf0e15f4993e7af7.hot-update.js.map