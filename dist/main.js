/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./NanumPenScript-Regular.ttf */ "./src/NanumPenScript-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./tacos.jpg */ "./src/tacos.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Nanum';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n.content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 260px;\r\n    grid-template-rows: 10vh 80vh 10vh;\r\n    min-width: 700px;\r\n}\r\n\r\n.header {\r\n    font-family: 'Nanum';\r\n    font-size: 64px;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, auto-fit);\r\n    grid-template-rows: 1fr;\r\n    grid-row: 1 / 2;\r\n    grid-column: 1 / 3;\r\n    background-color: cornflowerblue;\r\n}\r\n\r\n.header ul {\r\n    display: block;\r\n    justify-self: end;\r\n    align-self: end;\r\n\r\n}\r\n\r\nli {\r\n    position: relative;\r\n    float: left;\r\n    margin-left: 1.5em;\r\n    margin-right: 1.5em;\r\n    top: .4em;\r\n}\r\n\r\nli:hover {\r\n    background-color: lightsteelblue;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.navlist {\r\n    font-size: 18px;\r\n    list-style: none;\r\n    grid-column: 2 / 3;\r\n}\r\n\r\n.main {\r\n    grid-row: 2 / 3;\r\n    grid-column: 1 / 2;\r\n    background-color: lightblue;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-size: 100% auto;\r\n    background-repeat: no-repeat;\r\n    overflow: hidden;\r\n}\r\n\r\n.sidebar {\r\n    grid-row: 2 / 3;\r\n    grid-column: 2 / 3;\r\n    background-color: lightsteelblue;\r\n}\r\n\r\n.sidebar div {\r\n    padding: 1.5em;\r\n    font-family: 'Nanum', sans-serif;\r\n    font-size: x-large;\r\n}\r\n\r\n.footer div {\r\n    padding: .7em;\r\n    font-family: 'Nanum', sans-serif;\r\n    font-size: medium;\r\n}\r\n\r\n.footer {\r\n    grid-row: 3 / 4;\r\n    grid-column: 1 / 3;\r\n    background-color: cornflowerblue;\r\n}\r\n\r\n.menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-column: 1 / 3;\r\n    grid-row: 2 / 3;\r\n    background: lightsteelblue;\r\n    justify-items: center;\r\n    align-items: center;\r\n    overflow: auto;\r\n}\r\n\r\n.menuitemcard {\r\n    display: flex;\r\n    background-color: darkkhaki;\r\n    border-radius: 5px;\r\n    margin: 2em;\r\n    justify-content: center;\r\n    width: 20%;\r\n    height: 4em;\r\n}\r\n\r\n.contact {\r\n    grid-column: 1 / 3;\r\n    grid-row: 2 / 3;\r\n    background: lightsteelblue;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 2fr 1fr 2fr;\r\n    gap: 10px;\r\n}\r\n\r\n.contact div {\r\n    padding: 10px;\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n.address {\r\n    display: grid;\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.address p {\r\n    margin: 5px;\r\n    padding: 0;\r\n}\r\n\r\n.address :first-child {\r\n    align-self: end;\r\n}\r\n\r\n.address :last-child {\r\n    align-self: flex-start;\r\n}\r\n\r\n.phone {\r\n    display: grid;\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.email {\r\n    grid-column: 3 / 4;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.address,\r\n.phone,\r\n.email {\r\n    font-family: 'Nanum', sans-serif;\r\n    font-size: x-large;\r\n    background-color: lightslategray;\r\n    border-radius: 5px;\r\n    box-shadow: 5px 5px 3px burlywood;\r\n}\r\n\r\n.addresslabel {\r\n    grid-row: 1 / 2;\r\n    grid-column: 1 / 2;\r\n}\r\n\r\n.phonelabel {\r\n    grid-row: 1 / 2;\r\n    grid-column: 2 / 3;\r\n}\r\n\r\n.emaillabel {\r\n    grid-column: 3 / 4;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n.addresslabel,\r\n.phonelabel,\r\n.emaillabel {\r\n    font-family: 'Nanum', sans-serif;\r\n    font-size: x-large;\r\n    align-self: end;\r\n    margin: 0;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,4CAAwC;AAC5C;AACA;IACI,aAAa;IACb,gCAAgC;IAChC,kCAAkC;IAClC,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,eAAe;IACf,aAAa;IACb,0CAA0C;IAC1C,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,gCAAgC;AACpC;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,eAAe;;AAEnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,gCAAgC;IAChC,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,2BAA2B;IAC3B,yDAAkC;IAClC,0BAA0B;IAC1B,4BAA4B;IAC5B,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,gCAAgC;AACpC;;AAEA;IACI,cAAc;IACd,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,eAAe;IACf,0BAA0B;IAC1B,qBAAqB;IACrB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,kBAAkB;IAClB,WAAW;IACX,uBAAuB;IACvB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,0BAA0B;IAC1B,aAAa;IACb,kCAAkC;IAClC,+BAA+B;IAC/B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,UAAU;AACd;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;;IAGI,gCAAgC;IAChC,kBAAkB;IAClB,gCAAgC;IAChC,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;;IAGI,gCAAgC;IAChC,kBAAkB;IAClB,eAAe;IACf,SAAS;AACb","sourcesContent":["@font-face {\r\n    font-family: 'Nanum';\r\n    src: url('./NanumPenScript-Regular.ttf');\r\n}\r\n.content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 260px;\r\n    grid-template-rows: 10vh 80vh 10vh;\r\n    min-width: 700px;\r\n}\r\n\r\n.header {\r\n    font-family: 'Nanum';\r\n    font-size: 64px;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, auto-fit);\r\n    grid-template-rows: 1fr;\r\n    grid-row: 1 / 2;\r\n    grid-column: 1 / 3;\r\n    background-color: cornflowerblue;\r\n}\r\n\r\n.header ul {\r\n    display: block;\r\n    justify-self: end;\r\n    align-self: end;\r\n\r\n}\r\n\r\nli {\r\n    position: relative;\r\n    float: left;\r\n    margin-left: 1.5em;\r\n    margin-right: 1.5em;\r\n    top: .4em;\r\n}\r\n\r\nli:hover {\r\n    background-color: lightsteelblue;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n.navlist {\r\n    font-size: 18px;\r\n    list-style: none;\r\n    grid-column: 2 / 3;\r\n}\r\n\r\n.main {\r\n    grid-row: 2 / 3;\r\n    grid-column: 1 / 2;\r\n    background-color: lightblue;\r\n    background-image: url(./tacos.jpg);\r\n    background-size: 100% auto;\r\n    background-repeat: no-repeat;\r\n    overflow: hidden;\r\n}\r\n\r\n.sidebar {\r\n    grid-row: 2 / 3;\r\n    grid-column: 2 / 3;\r\n    background-color: lightsteelblue;\r\n}\r\n\r\n.sidebar div {\r\n    padding: 1.5em;\r\n    font-family: 'Nanum', sans-serif;\r\n    font-size: x-large;\r\n}\r\n\r\n.footer div {\r\n    padding: .7em;\r\n    font-family: 'Nanum', sans-serif;\r\n    font-size: medium;\r\n}\r\n\r\n.footer {\r\n    grid-row: 3 / 4;\r\n    grid-column: 1 / 3;\r\n    background-color: cornflowerblue;\r\n}\r\n\r\n.menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    grid-column: 1 / 3;\r\n    grid-row: 2 / 3;\r\n    background: lightsteelblue;\r\n    justify-items: center;\r\n    align-items: center;\r\n    overflow: auto;\r\n}\r\n\r\n.menuitemcard {\r\n    display: flex;\r\n    background-color: darkkhaki;\r\n    border-radius: 5px;\r\n    margin: 2em;\r\n    justify-content: center;\r\n    width: 20%;\r\n    height: 4em;\r\n}\r\n\r\n.contact {\r\n    grid-column: 1 / 3;\r\n    grid-row: 2 / 3;\r\n    background: lightsteelblue;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: 2fr 1fr 2fr;\r\n    gap: 10px;\r\n}\r\n\r\n.contact div {\r\n    padding: 10px;\r\n    align-items: center;\r\n    justify-items: center;\r\n}\r\n\r\n.address {\r\n    display: grid;\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.address p {\r\n    margin: 5px;\r\n    padding: 0;\r\n}\r\n\r\n.address :first-child {\r\n    align-self: end;\r\n}\r\n\r\n.address :last-child {\r\n    align-self: flex-start;\r\n}\r\n\r\n.phone {\r\n    display: grid;\r\n    grid-column: 2 / 3;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.email {\r\n    grid-column: 3 / 4;\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.address,\r\n.phone,\r\n.email {\r\n    font-family: 'Nanum', sans-serif;\r\n    font-size: x-large;\r\n    background-color: lightslategray;\r\n    border-radius: 5px;\r\n    box-shadow: 5px 5px 3px burlywood;\r\n}\r\n\r\n.addresslabel {\r\n    grid-row: 1 / 2;\r\n    grid-column: 1 / 2;\r\n}\r\n\r\n.phonelabel {\r\n    grid-row: 1 / 2;\r\n    grid-column: 2 / 3;\r\n}\r\n\r\n.emaillabel {\r\n    grid-column: 3 / 4;\r\n    grid-row: 1 / 2;\r\n}\r\n\r\n.addresslabel,\r\n.phonelabel,\r\n.emaillabel {\r\n    font-family: 'Nanum', sans-serif;\r\n    font-size: x-large;\r\n    align-self: end;\r\n    margin: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildContactPage)
/* harmony export */ });
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./src/navigation.js");


function buildContactPage() {
    let contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = "";

    function createHeader() {
        //name of restaurant
        let header = document.createElement('div');
        header.classList.add('header');
        header.textContent = "kevin's taco hut";

        //navigation links
        let navList = document.createElement('ul');
        navList.classList.add('navlist');
        let navLinks = ['home', 'menu', 'contact'];
        for (let i = 0; i < navLinks.length; i++) {
            let link = document.createElement('a');
            let nav = document.createElement('li');
            nav.textContent = navLinks[i];
            nav.setAttribute('id', navLinks[i]);
            link.appendChild(nav);
            navList.appendChild(link);
        }

        header.appendChild(navList);
        return header;
    }
    function createFooter() {
        let footer = document.createElement('div');
        footer.classList.add('footer');
        footer.textContent = 'FOOTER CONTENT';

        return footer;
    }
    function createContactInfo() {
        let contact = document.createElement('div');
        contact.classList.add('contact')

        let address = document.createElement('div');
        address.classList.add('address');
        
        let phone = document.createElement('div');
        phone.classList.add('phone');

        let email = document.createElement('div');
        email.classList.add('email');

        let addressText = document.createElement('p');
        addressText.textContent = "193 St. Michael Way";
        let cityStateText = document.createElement('p');
        cityStateText.textContent = "Newport News, VA 23602";
        

        let phoneText = document.createElement('p');
        phoneText.textContent = "434.555.5944";

        let emailText = document.createElement('p');
        emailText.textContent = "BrianLTalbert@gmail.com";

        let addressLabel = document.createElement('p');
        addressLabel.classList.add('addresslabel');
        addressLabel.textContent = "Address:"

        let phoneLabel = document.createElement('p');
        phoneLabel.classList.add('phonelabel');
        phoneLabel.textContent = "Phone Number:"

        let emailLabel = document.createElement('p');
        emailLabel.classList.add('emaillabel');
        emailLabel.textContent = "E-mail Address:"

        address.appendChild(addressText);
        address.appendChild(cityStateText);
        phone.appendChild(phoneText);
        email.appendChild(emailText);

        contact.appendChild(address);
        contact.appendChild(phone);
        contact.appendChild(email);
        contact.appendChild(addressLabel);
        contact.appendChild(phoneLabel);
        contact.appendChild(emailLabel);

        return contact;
    }

    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createFooter());
    contentDiv.appendChild(createContactInfo());
    (0,_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildHomePage)
/* harmony export */ });
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./src/navigation.js");


function buildHomePage() {
    //clear main content
    let contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = "";

    function createHeader() {
        //name of restaurant
        let header = document.createElement('div');
        header.classList.add('header');
        header.textContent = "kevin's taco hut";

        //navigation links
        let navList = document.createElement('ul');
        navList.classList.add('navlist');
        let navLinks = ['home', 'menu', 'contact'];
        for (let i = 0; i < navLinks.length; i++) {
            let link = document.createElement('a');
            let nav = document.createElement('li');
            nav.textContent = navLinks[i];
            nav.setAttribute('id', navLinks[i]);
            link.appendChild(nav);
            navList.appendChild(link);
        }

        header.appendChild(navList);
        return header;
    }

    function createMain() {
        let main = document.createElement('div');
        main.classList.add('main');
        
        return main;
    }

    function createSidebar() {
        let sideText = `Welcome to Kevin's Taco Hut! Kevin has been making tacos since 1986, and his taco hut has been a fixture
                        on these city streets for over 30 years. With homemade tortillas, deliciousy tender meat, and fresh
                        toppings, once you have a fresh Kevin taco, you won't go anywhere else!`
        let sidebar = document.createElement('div');
        let sideBarTextContainer = document.createElement('div');
        sideBarTextContainer.textContent = sideText;
        sidebar.classList.add('sidebar');
        sidebar.appendChild(sideBarTextContainer);

        return sidebar;
    }

    function createFooter() {
        let footerText = `Page made by Brian Talbert. Unfortunately, Kevin's Taco Hut does not exist. Yet.`
        let footer = document.createElement('div');
        let footerTextContainer = document.createElement('div');
        footerTextContainer.textContent = footerText;
        footer.classList.add('footer');
        footer.appendChild(footerTextContainer);

        return footer;
    }

    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createMain());
    contentDiv.appendChild(createSidebar())
    contentDiv.appendChild(createFooter());
    (0,_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])();
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMenuPage)
/* harmony export */ });
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./src/navigation.js");
/* harmony import */ var _menuitems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuitems */ "./src/menuitems.js");



function buildMenuPage() {
    let contentDiv = document.querySelector('.content');
    contentDiv.innerHTML = "";

    function createHeader() {
        //name of restaurant
        let header = document.createElement('div');
        header.classList.add('header');
        header.textContent = "kevin's taco hut";

        //navigation links
        let navList = document.createElement('ul');
        navList.classList.add('navlist');
        let navLinks = ['home', 'menu', 'contact'];
        for (let i = 0; i < navLinks.length; i++) {
            let link = document.createElement('a');
            let nav = document.createElement('li');
            nav.textContent = navLinks[i];
            nav.setAttribute('id', navLinks[i]);
            link.appendChild(nav);
            navList.appendChild(link);
        }

        header.appendChild(navList);
        return header;
    }
    
    function createFooter() {
        let footer = document.createElement('div');
        footer.classList.add('footer');
        footer.textContent = 'FOOTER CONTENT';

        return footer;
    }

    function createMenu() {
        let menu = document.createElement('div');
        menu.classList.add('menu')
        
        let menuitems = (0,_menuitems__WEBPACK_IMPORTED_MODULE_1__["default"])();
        menuitems.forEach(item => {
            let menuItemCard = document.createElement('div');
            menuItemCard.classList.add('menuitemcard');

            let food = document.createElement('p');
            food.classList.add('food');

            food.textContent = item;
            menuItemCard.appendChild(food);
            menu.appendChild(menuItemCard);
        });

        return menu
    }

    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createFooter());
    contentDiv.appendChild(createMenu());
    (0,_navigation__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/***/ }),

/***/ "./src/menuitems.js":
/*!**************************!*\
  !*** ./src/menuitems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMenuItems)
/* harmony export */ });
function getMenuItems() {
    return ["Carnitas", "Al Pastor", "Chicken", "Fajitas", "Shrimp", "Quesadilla", "Veggie"];
}

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNavLinks)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




function createNavLinks() {
    let links = document.querySelectorAll('li');
    links.forEach(link => {
        link.addEventListener('click', () => {
            switch (link.getAttribute('id')) {
                case 'home':
                    (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
                    break;

                case 'menu':
                    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
                    break;

                case 'contact':
                    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
                    break;

                default:
                    break;
            }
        })
    });
}

/***/ }),

/***/ "./src/NanumPenScript-Regular.ttf":
/*!****************************************!*\
  !*** ./src/NanumPenScript-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "124b3244c7b453983cb5.ttf";

/***/ }),

/***/ "./src/tacos.jpg":
/*!***********************!*\
  !*** ./src/tacos.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec91ed3871b0ed8bdb51.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ "./src/navigation.js");




(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_navigation__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2YwQztBQUMxQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBYztBQUNsQjs7Ozs7Ozs7Ozs7Ozs7O0FDM0YwQztBQUMxQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQWM7QUFDbEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRTBDO0FBQ0g7QUFDdkM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFjO0FBQ2xCOzs7Ozs7Ozs7Ozs7OztBQzlEZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRm1DO0FBQ0E7QUFDTTtBQUN6QztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNpQjtBQUNJO0FBQzFDO0FBQ0Esb0RBQWE7QUFDYix1REFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnVpdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL05hbnVtUGVuU2NyaXB0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi90YWNvcy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTmFudW0nO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjYwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA4MHZoIDEwdmg7XFxyXFxuICAgIG1pbi13aWR0aDogNzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBmb250LWZhbWlseTogJ05hbnVtJztcXHJcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvLWZpdCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBncmlkLXJvdzogMSAvIDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgdWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMS41ZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS41ZW07XFxyXFxuICAgIHRvcDogLjRlbTtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2bGlzdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgZGl2IHtcXHJcXG4gICAgcGFkZGluZzogMS41ZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTmFudW0nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgZGl2IHtcXHJcXG4gICAgcGFkZGluZzogLjdlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOYW51bScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHN0ZWVsYmx1ZTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVpdGVtY2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtraGFraTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW46IDJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGhlaWdodDogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHN0ZWVsYmx1ZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDJmcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBkaXYge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMiAvIDM7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzIHAge1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3MgOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcyA6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5waG9uZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1haWwge1xcclxcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3MsXFxyXFxuLnBob25lLFxcclxcbi5lbWFpbCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTmFudW0nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggM3B4IGJ1cmx5d29vZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3NsYWJlbCB7XFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvbmVsYWJlbCB7XFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1haWxsYWJlbCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzc2xhYmVsLFxcclxcbi5waG9uZWxhYmVsLFxcclxcbi5lbWFpbGxhYmVsIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOYW51bScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsNENBQXdDO0FBQzVDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLGtDQUFrQztJQUNsQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IseURBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTs7O0lBR0ksZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7OztJQUdJLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOYW51bSc7XFxyXFxuICAgIHNyYzogdXJsKCcuL05hbnVtUGVuU2NyaXB0LVJlZ3VsYXIudHRmJyk7XFxyXFxufVxcclxcbi5jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjYwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA4MHZoIDEwdmg7XFxyXFxuICAgIG1pbi13aWR0aDogNzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBmb250LWZhbWlseTogJ05hbnVtJztcXHJcXG4gICAgZm9udC1zaXplOiA2NHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvLWZpdCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBncmlkLXJvdzogMSAvIDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgdWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMS41ZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMS41ZW07XFxyXFxuICAgIHRvcDogLjRlbTtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2bGlzdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3RhY29zLmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgZGl2IHtcXHJcXG4gICAgcGFkZGluZzogMS41ZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTmFudW0nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIgZGl2IHtcXHJcXG4gICAgcGFkZGluZzogLjdlbTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOYW51bScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHN0ZWVsYmx1ZTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVpdGVtY2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtraGFraTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW46IDJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICAgIGhlaWdodDogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHN0ZWVsYmx1ZTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDJmcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBkaXYge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgICBncmlkLXJvdzogMiAvIDM7XFxyXFxufVxcclxcblxcclxcbi5hZGRyZXNzIHAge1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3MgOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzcyA6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5waG9uZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1haWwge1xcclxcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3MsXFxyXFxuLnBob25lLFxcclxcbi5lbWFpbCB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTmFudW0nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggM3B4IGJ1cmx5d29vZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHJlc3NsYWJlbCB7XFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvbmVsYWJlbCB7XFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbn1cXHJcXG5cXHJcXG4uZW1haWxsYWJlbCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcmVzc2xhYmVsLFxcclxcbi5waG9uZWxhYmVsLFxcclxcbi5lbWFpbGxhYmVsIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOYW51bScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY3JlYXRlTmF2TGlua3MgZnJvbSBcIi4vbmF2aWdhdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRDb250YWN0UGFnZSgpIHtcclxuICAgIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcclxuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICAgICAgLy9uYW1lIG9mIHJlc3RhdXJhbnRcclxuICAgICAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwia2V2aW4ncyB0YWNvIGh1dFwiO1xyXG5cclxuICAgICAgICAvL25hdmlnYXRpb24gbGlua3NcclxuICAgICAgICBsZXQgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgbmF2TGlzdC5jbGFzc0xpc3QuYWRkKCduYXZsaXN0Jyk7XHJcbiAgICAgICAgbGV0IG5hdkxpbmtzID0gWydob21lJywgJ21lbnUnLCAnY29udGFjdCddO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2TGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBuYXYudGV4dENvbnRlbnQgPSBuYXZMaW5rc1tpXTtcclxuICAgICAgICAgICAgbmF2LnNldEF0dHJpYnV0ZSgnaWQnLCBuYXZMaW5rc1tpXSk7XHJcbiAgICAgICAgICAgIGxpbmsuYXBwZW5kQ2hpbGQobmF2KTtcclxuICAgICAgICAgICAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZMaXN0KTtcclxuICAgICAgICByZXR1cm4gaGVhZGVyO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xyXG4gICAgICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XHJcbiAgICAgICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ0ZPT1RFUiBDT05URU5UJztcclxuXHJcbiAgICAgICAgcmV0dXJuIGZvb3RlcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RJbmZvKCkge1xyXG4gICAgICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0JylcclxuXHJcbiAgICAgICAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MnKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwaG9uZS5jbGFzc0xpc3QuYWRkKCdwaG9uZScpO1xyXG5cclxuICAgICAgICBsZXQgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdlbWFpbCcpO1xyXG5cclxuICAgICAgICBsZXQgYWRkcmVzc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgYWRkcmVzc1RleHQudGV4dENvbnRlbnQgPSBcIjE5MyBTdC4gTWljaGFlbCBXYXlcIjtcclxuICAgICAgICBsZXQgY2l0eVN0YXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjaXR5U3RhdGVUZXh0LnRleHRDb250ZW50ID0gXCJOZXdwb3J0IE5ld3MsIFZBIDIzNjAyXCI7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGxldCBwaG9uZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcGhvbmVUZXh0LnRleHRDb250ZW50ID0gXCI0MzQuNTU1LjU5NDRcIjtcclxuXHJcbiAgICAgICAgbGV0IGVtYWlsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBlbWFpbFRleHQudGV4dENvbnRlbnQgPSBcIkJyaWFuTFRhbGJlcnRAZ21haWwuY29tXCI7XHJcblxyXG4gICAgICAgIGxldCBhZGRyZXNzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgYWRkcmVzc0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3NsYWJlbCcpO1xyXG4gICAgICAgIGFkZHJlc3NMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkcmVzczpcIlxyXG5cclxuICAgICAgICBsZXQgcGhvbmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBwaG9uZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ3Bob25lbGFiZWwnKTtcclxuICAgICAgICBwaG9uZUxhYmVsLnRleHRDb250ZW50ID0gXCJQaG9uZSBOdW1iZXI6XCJcclxuXHJcbiAgICAgICAgbGV0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZW1haWxMYWJlbC5jbGFzc0xpc3QuYWRkKCdlbWFpbGxhYmVsJyk7XHJcbiAgICAgICAgZW1haWxMYWJlbC50ZXh0Q29udGVudCA9IFwiRS1tYWlsIEFkZHJlc3M6XCJcclxuXHJcbiAgICAgICAgYWRkcmVzcy5hcHBlbmRDaGlsZChhZGRyZXNzVGV4dCk7XHJcbiAgICAgICAgYWRkcmVzcy5hcHBlbmRDaGlsZChjaXR5U3RhdGVUZXh0KTtcclxuICAgICAgICBwaG9uZS5hcHBlbmRDaGlsZChwaG9uZVRleHQpO1xyXG4gICAgICAgIGVtYWlsLmFwcGVuZENoaWxkKGVtYWlsVGV4dCk7XHJcblxyXG4gICAgICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XHJcbiAgICAgICAgY29udGFjdC5hcHBlbmRDaGlsZChwaG9uZSk7XHJcbiAgICAgICAgY29udGFjdC5hcHBlbmRDaGlsZChlbWFpbCk7XHJcbiAgICAgICAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzTGFiZWwpO1xyXG4gICAgICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQocGhvbmVMYWJlbCk7XHJcbiAgICAgICAgY29udGFjdC5hcHBlbmRDaGlsZChlbWFpbExhYmVsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnRhY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdEluZm8oKSk7XHJcbiAgICBjcmVhdGVOYXZMaW5rcygpO1xyXG59IiwiaW1wb3J0IGNyZWF0ZU5hdkxpbmtzIGZyb20gXCIuL25hdmlnYXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkSG9tZVBhZ2UoKSB7XHJcbiAgICAvL2NsZWFyIG1haW4gY29udGVudFxyXG4gICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgICAgICAvL25hbWUgb2YgcmVzdGF1cmFudFxyXG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJrZXZpbidzIHRhY28gaHV0XCI7XHJcblxyXG4gICAgICAgIC8vbmF2aWdhdGlvbiBsaW5rc1xyXG4gICAgICAgIGxldCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBuYXZMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdmxpc3QnKTtcclxuICAgICAgICBsZXQgbmF2TGlua3MgPSBbJ2hvbWUnLCAnbWVudScsICdjb250YWN0J107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZMaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIG5hdi50ZXh0Q29udGVudCA9IG5hdkxpbmtzW2ldO1xyXG4gICAgICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsIG5hdkxpbmtzW2ldKTtcclxuICAgICAgICAgICAgbGluay5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgICAgICAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkxpc3QpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcclxuICAgICAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBtYWluO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNpZGViYXIoKSB7XHJcbiAgICAgICAgbGV0IHNpZGVUZXh0ID0gYFdlbGNvbWUgdG8gS2V2aW4ncyBUYWNvIEh1dCEgS2V2aW4gaGFzIGJlZW4gbWFraW5nIHRhY29zIHNpbmNlIDE5ODYsIGFuZCBoaXMgdGFjbyBodXQgaGFzIGJlZW4gYSBmaXh0dXJlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uIHRoZXNlIGNpdHkgc3RyZWV0cyBmb3Igb3ZlciAzMCB5ZWFycy4gV2l0aCBob21lbWFkZSB0b3J0aWxsYXMsIGRlbGljaW91c3kgdGVuZGVyIG1lYXQsIGFuZCBmcmVzaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BwaW5ncywgb25jZSB5b3UgaGF2ZSBhIGZyZXNoIEtldmluIHRhY28sIHlvdSB3b24ndCBnbyBhbnl3aGVyZSBlbHNlIWBcclxuICAgICAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxldCBzaWRlQmFyVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNpZGVCYXJUZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gc2lkZVRleHQ7XHJcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyJyk7XHJcbiAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChzaWRlQmFyVGV4dENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHJldHVybiBzaWRlYmFyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICAgICAgICBsZXQgZm9vdGVyVGV4dCA9IGBQYWdlIG1hZGUgYnkgQnJpYW4gVGFsYmVydC4gVW5mb3J0dW5hdGVseSwgS2V2aW4ncyBUYWNvIEh1dCBkb2VzIG5vdCBleGlzdC4gWWV0LmBcclxuICAgICAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGZvb3RlclRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBmb290ZXJUZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gZm9vdGVyVGV4dDtcclxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XHJcbiAgICAgICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHRDb250YWluZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9vdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVTaWRlYmFyKCkpXHJcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcclxuICAgIGNyZWF0ZU5hdkxpbmtzKCk7XHJcbn1cclxuXHJcbiIsImltcG9ydCBjcmVhdGVOYXZMaW5rcyBmcm9tIFwiLi9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBnZXRNZW51SXRlbXMgZnJvbSBcIi4vbWVudWl0ZW1zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1lbnVQYWdlKCkge1xyXG4gICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgICAgICAvL25hbWUgb2YgcmVzdGF1cmFudFxyXG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJrZXZpbidzIHRhY28gaHV0XCI7XHJcblxyXG4gICAgICAgIC8vbmF2aWdhdGlvbiBsaW5rc1xyXG4gICAgICAgIGxldCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBuYXZMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdmxpc3QnKTtcclxuICAgICAgICBsZXQgbmF2TGlua3MgPSBbJ2hvbWUnLCAnbWVudScsICdjb250YWN0J107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZMaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgbGV0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIG5hdi50ZXh0Q29udGVudCA9IG5hdkxpbmtzW2ldO1xyXG4gICAgICAgICAgICBuYXYuc2V0QXR0cmlidXRlKCdpZCcsIG5hdkxpbmtzW2ldKTtcclxuICAgICAgICAgICAgbGluay5hcHBlbmRDaGlsZChuYXYpO1xyXG4gICAgICAgICAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkxpc3QpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcclxuICAgICAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xyXG4gICAgICAgIGZvb3Rlci50ZXh0Q29udGVudCA9ICdGT09URVIgQ09OVEVOVCc7XHJcblxyXG4gICAgICAgIHJldHVybiBmb290ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG1lbnVpdGVtcyA9IGdldE1lbnVJdGVtcygpO1xyXG4gICAgICAgIG1lbnVpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgbWVudUl0ZW1DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIG1lbnVJdGVtQ2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51aXRlbWNhcmQnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBmb29kLmNsYXNzTGlzdC5hZGQoJ2Zvb2QnKTtcclxuXHJcbiAgICAgICAgICAgIGZvb2QudGV4dENvbnRlbnQgPSBpdGVtO1xyXG4gICAgICAgICAgICBtZW51SXRlbUNhcmQuYXBwZW5kQ2hpbGQoZm9vZCk7XHJcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW1DYXJkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lbnVcclxuICAgIH1cclxuXHJcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xyXG4gICAgY3JlYXRlTmF2TGlua3MoKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE1lbnVJdGVtcygpIHtcclxuICAgIHJldHVybiBbXCJDYXJuaXRhc1wiLCBcIkFsIFBhc3RvclwiLCBcIkNoaWNrZW5cIiwgXCJGYWppdGFzXCIsIFwiU2hyaW1wXCIsIFwiUXVlc2FkaWxsYVwiLCBcIlZlZ2dpZVwiXTtcclxufSIsImltcG9ydCBidWlsZEhvbWVQYWdlIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IGJ1aWxkTWVudVBhZ2UgZnJvbSBcIi4vbWVudVwiO1xyXG5pbXBvcnQgYnVpbGRDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOYXZMaW5rcygpIHtcclxuICAgIGxldCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XHJcbiAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobGluay5nZXRBdHRyaWJ1dGUoJ2lkJykpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2hvbWUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkSG9tZVBhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdtZW51JzpcclxuICAgICAgICAgICAgICAgICAgICBidWlsZE1lbnVQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnY29udGFjdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgYnVpbGRDb250YWN0UGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSk7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBidWlsZEhvbWVQYWdlIGZyb20gJy4vaG9tZS5qcyc7XHJcbmltcG9ydCBjcmVhdGVOYXZMaW5rcyBmcm9tICcuL25hdmlnYXRpb24nO1xyXG5cclxuYnVpbGRIb21lUGFnZSgpO1xyXG5jcmVhdGVOYXZMaW5rcygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==