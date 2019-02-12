webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/*! exports provided: googleMapInit, appReq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleMapInit", function() { return googleMapInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReq", function() { return appReq; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var CALLBACK_NAME = '__googleMapsApiOnLoadCallback';
var googleMapInit = function googleMapInit() {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    var timeoutId = setTimeout(function () {
      reject(new Error('Could not load the Google Maps API'));
    }, 10000);

    window[CALLBACK_NAME] = function () {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }

      resolve(window.google.maps);
      delete window[CALLBACK_NAME];
    };

    var gmapiScript = document.createElement('script');
    gmapiScript.src = "https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyAc8lzNL0Xv0XNCCvG2GsfQPIYjXLJdeVo", "&callback=").concat(CALLBACK_NAME);
    document.body.appendChild(gmapiScript);
  });
};
var appReq = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL:  false ? undefined : 'http://localhost:3001/api'
});

/***/ })

})
//# sourceMappingURL=index.js.676e24a78688245b0220.hot-update.js.map