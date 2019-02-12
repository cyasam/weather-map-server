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
/* harmony import */ var _static_json_cities_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../static/json/cities.json */ "./static/json/cities.json");
var _static_json_cities_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/json/cities.json */ "./static/json/cities.json", 1);
/* harmony import */ var _static_json_map_style_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../static/json/map-style.json */ "./static/json/map-style.json");
var _static_json_map_style_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/json/map-style.json */ "./static/json/map-style.json", 1);









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
        lat: 51.026,
        lng: 11.5551
      },
      cities: []
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        cities: _static_json_cities_json__WEBPACK_IMPORTED_MODULE_12__
      });

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

              _this2.createMarkers({
                lat: lat,
                lon: lon,
                icon: icon
              });
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
      var city = _static_json_cities_json__WEBPACK_IMPORTED_MODULE_12__.find(function (city) {
        return city.lat === lat && city.lng === lng;
      });
      console.log(city);
      var iconObj = {
        url: "".concat(iconBase, "/").concat(icon, ".png"),
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
      var nowHour = new Date().getHours();
      this.setState({
        map: new google.maps.Map(document.getElementById('map'), {
          center: {
            lat: lat,
            lng: lng
          },
          zoom: 5,
          minZoom: 5,
          maxZoom: 8,
          styles: nowHour >= 18 && nowHour < 6 ? _static_json_map_style_json__WEBPACK_IMPORTED_MODULE_13__.night : _static_json_map_style_json__WEBPACK_IMPORTED_MODULE_13__.day
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
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "map",
        className: "jsx-715383559",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "715383559",
        __self: this
      }, "html,body,#__next{width:100%;height:100%;margin:0;padding:0;}#map-wrapper,#map{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxGcm9udGVuZC1leGFtcGxlc1xcd2VhdGhlci1tYXBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RlcsQUFLMEIsQUFPRSxXQU5ELFlBQ0gsU0FDQyxVQUNaLGdDQUlhLFdBQ0MsWUFDZCIsImZpbGUiOiJFOlxcRnJvbnRlbmQtZXhhbXBsZXNcXHdlYXRoZXItbWFwXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhcHBSZXEsIGdvb2dsZU1hcEluaXQgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCBjaXRpZXMgZnJvbSAnLi4vc3RhdGljL2pzb24vY2l0aWVzLmpzb24nO1xuaW1wb3J0IG1hcFN0eWxlIGZyb20gJy4uL3N0YXRpYy9qc29uL21hcC1zdHlsZS5qc29uJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWFwOiBudWxsLFxuICAgIG1hcENlbnRlcjoge1xuICAgICAgbGF0OiA1MS4wMjYsXG4gICAgICBsbmc6IDExLjU1NTEsXG4gICAgfSxcbiAgICBjaXRpZXM6IFtdLFxuICB9O1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGNpdGllcyxcbiAgICB9KTtcblxuICAgIGlmICghdGhpcy5zdGF0ZS5tYXApIHtcbiAgICAgIGdvb2dsZU1hcEluaXQoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub25Mb2FkR29vZ2xlTWFwc1NjcmlwdCgpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZXMgPT4ge1xuICAgICAgICAgIHJlc3BvbnNlcy5mb3JFYWNoKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgd2VhdGhlcjogW3sgaWNvbiB9XSxcbiAgICAgICAgICAgICAgICBjb29yZDogeyBsYXQsIGxvbiB9LFxuICAgICAgICAgICAgICB9ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVNYXJrZXJzKHsgbGF0LCBsb24sIGljb24gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZU1hcmtlcnMobGF0LCBsbmcsIGljb24pIHtcbiAgICBjb25zdCBpY29uQmFzZSA9ICdodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93JztcbiAgICBjb25zdCBpY29uU2l6ZSA9IHtcbiAgICAgIHdpZHRoOiA1MCxcbiAgICAgIGhlaWdodDogNTAsXG4gICAgfTtcblxuICAgIGNvbnN0IGNpdHkgPSBjaXRpZXMuZmluZChjaXR5ID0+IGNpdHkubGF0ID09PSBsYXQgJiYgY2l0eS5sbmcgPT09IGxuZyk7XG4gICAgY29uc29sZS5sb2coY2l0eSk7XG5cbiAgICBjb25zdCBpY29uT2JqID0ge1xuICAgICAgdXJsOiBgJHtpY29uQmFzZX0vJHtpY29ufS5wbmdgLFxuICAgICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoaWNvblNpemUud2lkdGggLyAyLCBpY29uU2l6ZS53aWR0aCArIDYpLFxuICAgIH07XG5cbiAgICAvLyBDcmVhdGUgbWFya2Vycy5cbiAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdCwgbG5nKSxcbiAgICAgIGljb246IGljb25PYmosXG4gICAgICBtYXA6IHRoaXMuc3RhdGUubWFwLFxuICAgIH0pO1xuICB9XG5cbiAgb25Mb2FkR29vZ2xlTWFwc1NjcmlwdCgpIHtcbiAgICBjb25zdCB7IG1hcENlbnRlciwgY2l0aWVzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IG1hcENlbnRlcjtcblxuICAgIGNvbnN0IG5vd0hvdXIgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1hcDogbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgICAgY2VudGVyOiB7IGxhdCwgbG5nIH0sXG4gICAgICAgIHpvb206IDUsXG4gICAgICAgIG1pblpvb206IDUsXG4gICAgICAgIG1heFpvb206IDgsXG4gICAgICAgIHN0eWxlczogbm93SG91ciA+PSAxOCAmJiBub3dIb3VyIDwgNiA/IG1hcFN0eWxlLm5pZ2h0IDogbWFwU3R5bGUuZGF5LFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9taXNlQ2l0aWVzID0gY2l0aWVzLm1hcChjaXR5ID0+IHtcbiAgICAgIHJldHVybiBhcHBSZXEuZ2V0KGAvZ2V0LXdlYXRoZXI/bGF0bG5nPSR7Y2l0eS5sYXR9LCR7Y2l0eS5sbmd9YCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZUNpdGllcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJtYXAtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGlkPVwibWFwXCIgLz5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNtYXAtd3JhcHBlcixcbiAgICAgICAgICAgICNtYXAge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdfQ== */\n/*@ sourceURL=E:\\Frontend-examples\\weather-map\\pages\\index.js */"));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./static/json/cities.json":
/*!*********************************!*\
  !*** ./static/json/cities.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, default */
/***/ (function(module) {

module.exports = [{"name":"Istanbul","lat":41.01384,"lng":28.94966},{"name":"Ankara","lat":39.91987,"lng":32.85427},{"name":"Izmir","lat":38.41273,"lng":27.13838},{"name":"Amsterdam","lat":52.37403,"lng":4.88969},{"name":"Brussels","lat":50.85045,"lng":4.34878},{"name":"Berlin","lat":52.52437,"lng":13.41053},{"name":"Frankfurt","lat":50.11552,"lng":8.68417},{"name":"Munich","lat":48.13743,"lng":11.57549},{"name":"Hamburg","lat":53.57532,"lng":10.01534},{"name":"London","lat":53.33306,"lng":-6.24889},{"name":"Dublin","lat":51.50853,"lng":-0.12574},{"name":"Edinburg","lat":55.95206,"lng":-3.19648},{"name":"Paris","lat":48.85341,"lng":2.3488},{"name":"Monaco","lat":43.73333,"lng":7.41667},{"name":"Milano","lat":45.46427,"lng":9.18951},{"name":"Rome","lat":41.89193,"lng":12.51133,"markerOffset":-2},{"name":"Vienna","lat":48.20849,"lng":16.37208},{"name":"Stockholm","lat":59.33258,"lng":18.0649},{"name":"Oslo","lat":59.91273,"lng":10.74609},{"name":"Copenhagen","lat":55.67594,"lng":12.56553},{"name":"Helsinki","lat":60.16952,"lng":24.93545},{"name":"Athens","lat":37.97945,"lng":23.71622},{"name":"Prague","lat":50.08804,"lng":14.42076},{"name":"Madrid","lat":40.4165,"lng":-3.70256},{"name":"Barcelona","lat":41.38879,"lng":2.15899},{"name":"Lisbon","lat":38.71667,"lng":-9.13333},{"name":"Porto","lat":41.14961,"lng":-8.61099},{"name":"Moscow","lat":55.75222,"lng":37.61556},{"name":"Warsaw","lat":52.22977,"lng":21.01178},{"name":"Bucharest","lat":44.43225,"lng":26.10626},{"name":"Sofia","lat":42.69751,"lng":23.32415},{"name":"Riga","lat":56.946,"lng":24.10589},{"name":"Minsk","lat":53.9,"lng":27.56667},{"name":"Kiev","lat":50.45466,"lng":30.5238},{"name":"Zagreb","lat":45.81444,"lng":15.97798},{"name":"Sarajevo","lat":43.84864,"lng":18.35644},{"name":"Budapest","lat":47.49801,"lng":19.03991},{"name":"Belgrade","lat":44.80401,"lng":20.46513}];

/***/ })

})
//# sourceMappingURL=index.js.e983c9774950b9eb0ffa.hot-update.js.map