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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/yatra-one-v14-latin-regular.woff2 */ "./src/assets/yatra-one-v14-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/yatra-one-v14-latin-regular.woff */ "./src/assets/yatra-one-v14-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/bg-body.jpg */ "./src/assets/bg-body.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/lettuceeat.png */ "./src/assets/lettuceeat.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/githublogo.png */ "./src/assets/githublogo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* yatra-one-regular - latin */\n@font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'YatraOne';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'), /* Super Modern Browsers */\n         url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff'), /* Modern Browsers */\n  }\n\nbody {\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n    margin: 0;\n    background-image:  linear-gradient(rgba(255, 255, 255, 0.8),\n    rgba(255, 255, 255, 0.6)), url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n#header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width:  70%;\n    margin: 0 auto;\n    box-shadow: 0 4px 2px -1px gray;\n    background-color: rgba(0, 0, 0, 0.8);\n    color: white;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.border {\n    position: relative;\n}\n\n.border:before {\n    box-shadow: -20px 0 20px -20px #000000 inset;\n    content: \" \";\n    height: 100%;\n    left: -20px;\n    position: absolute;\n    top: 0;\n    width: 20px;\n}\n\n.border:after {\n    box-shadow: 20px 0 20px -20px #000000 inset;\n    content: \" \";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: -20px;\n    width: 20px;\n}\n\n#header-title h1 {\n    font-size: 3rem;\n    padding-top: 20px;\n    font-family: 'YatraOne';\n}\n\n.header-nav {\n    margin: 0;\n}\n\n#nav-list {\n    list-style-type: none;\n    display: flex;\n    padding: 0px;\n    font-size: 1.5rem;\n    justify-content: space-around;\n    align-items: center;\n    margin: 0;\n}\n\n.nav-btns {\n    background: none;\n    border: none;\n    color: white;\n    padding: 20px;\n    cursor: pointer;\n    font-size: 1rem\n}\n\n.nav-btns:hover {\n    color: black;\n    text-decoration: underline;\n}\n\n#content {\n    height: auto;\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0 auto;\n    background-color: rgba(255, 255, 255, 0.7);\n    padding-bottom: 20px;\n}\n\n.home-intro {\n\n    text-align: center;\n}\n\n.home-intro,\n.home-intro-text {\n    padding: 20px;\n}\n\n.home-intro > h1,\n.home-intro > p,\n.home-intro-text > p,\n.home-intro-text > h2 {\n    margin: 0;\n}\n\n.home-intro-text-wrapper {\n    padding: 20px;\n    display: flex;\n    margin: 0 auto;\n    max-width: 60%;\n}\n\n.home-intro-text {\n    display: flex;\n    flex-direction: column;\n}\n\n.home-about {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 15px;\n}\n\n.home-about > * {\n    margin: 0 auto;\n}\n\n#home-map-img {\n    height: 200px;\n    width: 350px;\n}\n\n#footer {\n    height: 3rem;\n    width: 70%;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(47, 105, 47);\n    color: white;\n}\n\n#footer > a > img {\n    height: 40px;\n    width: auto;\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")\n}\n\n.recipe-list {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    margin: 0 auto;\n    max-width: 60%;\n    gap: 10px;\n}\n\n.recipe-row {\n    text-align: center;\n    display: flex;\n    gap: 20px;\n}\n\n.recipe-img {\n    height: 200px;\n    width: 200px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,8BAA8B;AAC9B;IACI,kBAAkB,EAAE,sGAAsG;IAC1H,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB;+DACoE,EAAE,oBAAoB;EAC5F;;AAEF;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,SAAS;IACT;sEACsD;IACtD,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,cAAc;IACd,+BAA+B;IAC/B,oCAAoC;IACpC,YAAY;IACZ,yDAAgD;IAChD,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,4CAA4C;IAC5C,YAAY;IACZ,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,WAAW;AACf;;AAEA;IACI,2CAA2C;IAC3C,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,6BAA6B;IAC7B,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,eAAe;IACf;AACJ;;AAEA;IACI,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,0CAA0C;IAC1C,oBAAoB;AACxB;;AAEA;;IAEI,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;;;;IAII,SAAS;AACb;;AAEA;IACI,aAAa;IACb,aAAa;IACb,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,kCAAkC;IAClC,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX;AACJ;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,cAAc;IACd,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,YAAY;AAChB","sourcesContent":["/* yatra-one-regular - latin */\n@font-face {\n    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'YatraOne';\n    font-style: normal;\n    font-weight: 400;\n    src: url('./assets/yatra-one-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */\n         url('./assets/yatra-one-v14-latin-regular.woff') format('woff'), /* Modern Browsers */\n  }\n\nbody {\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n    margin: 0;\n    background-image:  linear-gradient(rgba(255, 255, 255, 0.8),\n    rgba(255, 255, 255, 0.6)), url('./assets/bg-body.jpg');\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n#header {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width:  70%;\n    margin: 0 auto;\n    box-shadow: 0 4px 2px -1px gray;\n    background-color: rgba(0, 0, 0, 0.8);\n    color: white;\n    background-image: url('./assets/lettuceeat.png');\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.border {\n    position: relative;\n}\n\n.border:before {\n    box-shadow: -20px 0 20px -20px #000000 inset;\n    content: \" \";\n    height: 100%;\n    left: -20px;\n    position: absolute;\n    top: 0;\n    width: 20px;\n}\n\n.border:after {\n    box-shadow: 20px 0 20px -20px #000000 inset;\n    content: \" \";\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: -20px;\n    width: 20px;\n}\n\n#header-title h1 {\n    font-size: 3rem;\n    padding-top: 20px;\n    font-family: 'YatraOne';\n}\n\n.header-nav {\n    margin: 0;\n}\n\n#nav-list {\n    list-style-type: none;\n    display: flex;\n    padding: 0px;\n    font-size: 1.5rem;\n    justify-content: space-around;\n    align-items: center;\n    margin: 0;\n}\n\n.nav-btns {\n    background: none;\n    border: none;\n    color: white;\n    padding: 20px;\n    cursor: pointer;\n    font-size: 1rem\n}\n\n.nav-btns:hover {\n    color: black;\n    text-decoration: underline;\n}\n\n#content {\n    height: auto;\n    width: 70%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: 0 auto;\n    background-color: rgba(255, 255, 255, 0.7);\n    padding-bottom: 20px;\n}\n\n.home-intro {\n\n    text-align: center;\n}\n\n.home-intro,\n.home-intro-text {\n    padding: 20px;\n}\n\n.home-intro > h1,\n.home-intro > p,\n.home-intro-text > p,\n.home-intro-text > h2 {\n    margin: 0;\n}\n\n.home-intro-text-wrapper {\n    padding: 20px;\n    display: flex;\n    margin: 0 auto;\n    max-width: 60%;\n}\n\n.home-intro-text {\n    display: flex;\n    flex-direction: column;\n}\n\n.home-about {\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    gap: 15px;\n}\n\n.home-about > * {\n    margin: 0 auto;\n}\n\n#home-map-img {\n    height: 200px;\n    width: 350px;\n}\n\n#footer {\n    height: 3rem;\n    width: 70%;\n    margin: 0 auto;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    background-color: rgb(47, 105, 47);\n    color: white;\n}\n\n#footer > a > img {\n    height: 40px;\n    width: auto;\n    content: url(\"./assets/githublogo.png\")\n}\n\n.recipe-list {\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    margin: 0 auto;\n    max-width: 60%;\n    gap: 10px;\n}\n\n.recipe-row {\n    text-align: center;\n    display: flex;\n    gap: 20px;\n}\n\n.recipe-img {\n    height: 200px;\n    width: 200px;\n}"],"sourceRoot":""}]);
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Element)
/* harmony export */ });
// module for creating divs and inserting elements
const Element = (() => {
  const insertToById = (parent, child) => {
    const parentNode = document.querySelector('#' + `${parent}`)
    parentNode.appendChild(child)
  }
  const insertToByClass = (parent, child) => {
    const parentNode = document.querySelector('.' + `${parent}`)
    parentNode.appendChild(child)
  }
  const createDiv = (className) => {
    const div = document.createElement('div')
    div.setAttribute('class', className)
    return div
  }
  const createImgById = (id, src) => {
    const element = document.createElement('img')
    element.setAttribute('id', id)
    element.src = src
    return element
  }
  const createImgByClass = (id, src) => {
    const element = document.createElement('img')
    element.setAttribute('class', id)
    element.src = src
    return element
  }
  const insertHtmlByClass = (className, text) => {
    const element = document.querySelector('.' + `${className}`)
    element.innerHTML = text
  }
  const removeByClass = (className) => {
    const element = document.querySelector('.' + `${className}`)
    element.remove()
  }
  return { createDiv, insertToById, insertToByClass, insertHtmlByClass, removeByClass, createImgById, createImgByClass }
})()




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ "./src/element.js");
/* harmony import */ var _assets_lettuce_home_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/lettuce-home.jpeg */ "./src/assets/lettuce-home.jpeg");
/* harmony import */ var _assets_home_map_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/home_map.png */ "./src/assets/home_map.png");




function Home () {
  _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToById('content', _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('content-body'))
  _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('content-body', _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('home-intro'))
  _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('content-body', _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('home-intro-text-wrapper'))
  _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('home-intro-text-wrapper', _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('home-intro-img-wrapper'))
  _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('home-intro-img-wrapper', _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createImgById('home-intro-img', _assets_lettuce_home_jpeg__WEBPACK_IMPORTED_MODULE_1__))
  _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('home-intro-text-wrapper', _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('home-intro-text'))
  _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('content-body', _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('home-about'))

  const intro = '<h1>Welcome to Lettuce Eat!</h1><br><p>An All-You-Can-Eat Buffet with only dishes of lettuce!</p>'
  const introText = '<h2>Home of the best lettuce dishes!</h2><br><p>Each dish is cooked and made with lettuce and love that will sure satisfy you up!</p><p><br>Lettuce Eat guarantees that we have all your cravings!<p>'
  const text = '<h1>Location</h1><p>3rd St., Boulevard Rd., Town City, Cantry</p>'

  _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertHtmlByClass('home-intro', intro)
  _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertHtmlByClass('home-intro-text', introText)
  _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertHtmlByClass('home-about', text)
  _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('home-about', _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createImgById('home-map-img', _assets_home_map_png__WEBPACK_IMPORTED_MODULE_2__))
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element.js */ "./src/element.js");
/* harmony import */ var _assets_recipes_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/recipes/1.jpg */ "./src/assets/recipes/1.jpg");
/* harmony import */ var _assets_recipes_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/recipes/2.jpg */ "./src/assets/recipes/2.jpg");
/* harmony import */ var _assets_recipes_3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/recipes/3.jpg */ "./src/assets/recipes/3.jpg");
/* harmony import */ var _assets_recipes_4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/recipes/4.jpg */ "./src/assets/recipes/4.jpg");
/* harmony import */ var _assets_recipes_5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/recipes/5.jpg */ "./src/assets/recipes/5.jpg");
/* harmony import */ var _assets_recipes_6_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/recipes/6.jpg */ "./src/assets/recipes/6.jpg");
/* harmony import */ var _assets_recipes_7_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/recipes/7.jpg */ "./src/assets/recipes/7.jpg");
/* harmony import */ var _assets_recipes_8_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/recipes/8.jpg */ "./src/assets/recipes/8.jpg");










function Menu () {
  const intro = '<h1>Menu</h1><br><p>Listed below are all of our Lettuce Specials!</p>'
  const imgArr = [_assets_recipes_1_jpg__WEBPACK_IMPORTED_MODULE_1__, _assets_recipes_2_jpg__WEBPACK_IMPORTED_MODULE_2__, _assets_recipes_3_jpg__WEBPACK_IMPORTED_MODULE_3__, _assets_recipes_4_jpg__WEBPACK_IMPORTED_MODULE_4__, _assets_recipes_5_jpg__WEBPACK_IMPORTED_MODULE_5__, _assets_recipes_6_jpg__WEBPACK_IMPORTED_MODULE_6__, _assets_recipes_7_jpg__WEBPACK_IMPORTED_MODULE_7__, _assets_recipes_8_jpg__WEBPACK_IMPORTED_MODULE_8__]
  const recipeNameArr = ['Quick Nicoise Salad', 'Warm Rice & Pintos Salad', 'Mexican Layered Salad',
    'Strawberry Salad with Poppy Seed Dressing', 'Hoisin Meatball Lettuce Wraps',
    'Tropical Layered Chicken Salad', 'Shrimp & Avocado Salads', 'Turkey Salad on Wheat Bread']
  _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToById('content', _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('content-body'))
  _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('content-body', _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('home-intro'))
  _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('content-body', _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('recipe-list'))
  _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertHtmlByClass('home-intro', intro)

  for (let i = 0; i <= 4; i++) {
    const text = '<h2>' + recipeNameArr[i]
    const textTwo = '<h2>' + recipeNameArr[i + 1]
    _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('recipe-list', _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('recipe-row c' + i))

    _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('c' + i, _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('recipe-card a' + i))
    _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('a' + i, _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('recipe-name b' + i))
    _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertHtmlByClass('b' + i, text)
    _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('a' + i, _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createImgByClass('recipe-img img' + i, imgArr[i]))
    _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('c' + i, _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('recipe-card a' + (i + 1)))
    _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('a' + (i + 1), _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('recipe-name b' + (i + 1)))
    _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertHtmlByClass('b' + (i + 1), textTwo)
    _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].insertToByClass('a' + (i + 1), _element_js__WEBPACK_IMPORTED_MODULE_0__["default"].createImgByClass('recipe-img img' + (i + 1), imgArr[(i + 1)]))
    i++
  }
}




/***/ }),

/***/ "./src/assets/bg-body.jpg":
/*!********************************!*\
  !*** ./src/assets/bg-body.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a3f8431d98199d8738bf.jpg";

/***/ }),

/***/ "./src/assets/githublogo.png":
/*!***********************************!*\
  !*** ./src/assets/githublogo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d1230310984ab700a264.png";

/***/ }),

/***/ "./src/assets/home_map.png":
/*!*********************************!*\
  !*** ./src/assets/home_map.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1611dbe8e4366256c7da.png";

/***/ }),

/***/ "./src/assets/lettuce-home.jpeg":
/*!**************************************!*\
  !*** ./src/assets/lettuce-home.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a156a910c2a3458458de.jpeg";

/***/ }),

/***/ "./src/assets/lettuceeat.png":
/*!***********************************!*\
  !*** ./src/assets/lettuceeat.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7f7a3497d133d65aed69.png";

/***/ }),

/***/ "./src/assets/recipes/1.jpg":
/*!**********************************!*\
  !*** ./src/assets/recipes/1.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/recipes/94fa39ba838e03d6a058.jpg";

/***/ }),

/***/ "./src/assets/recipes/2.jpg":
/*!**********************************!*\
  !*** ./src/assets/recipes/2.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/recipes/ec3372db1c935a155ed2.jpg";

/***/ }),

/***/ "./src/assets/recipes/3.jpg":
/*!**********************************!*\
  !*** ./src/assets/recipes/3.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/recipes/b3e15471e88ec01451c9.jpg";

/***/ }),

/***/ "./src/assets/recipes/4.jpg":
/*!**********************************!*\
  !*** ./src/assets/recipes/4.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/recipes/bd697c7a4188e3ea2b31.jpg";

/***/ }),

/***/ "./src/assets/recipes/5.jpg":
/*!**********************************!*\
  !*** ./src/assets/recipes/5.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/recipes/a0678945412ebb43383c.jpg";

/***/ }),

/***/ "./src/assets/recipes/6.jpg":
/*!**********************************!*\
  !*** ./src/assets/recipes/6.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/recipes/59d85a83e34e06e37b9e.jpg";

/***/ }),

/***/ "./src/assets/recipes/7.jpg":
/*!**********************************!*\
  !*** ./src/assets/recipes/7.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/recipes/cb27c561bd3deaee5cc9.jpg";

/***/ }),

/***/ "./src/assets/recipes/8.jpg":
/*!**********************************!*\
  !*** ./src/assets/recipes/8.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/recipes/35ee6d6570439f4faaad.jpg";

/***/ }),

/***/ "./src/assets/yatra-one-v14-latin-regular.woff":
/*!*****************************************************!*\
  !*** ./src/assets/yatra-one-v14-latin-regular.woff ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d86276310a7293632e7b.woff";

/***/ }),

/***/ "./src/assets/yatra-one-v14-latin-regular.woff2":
/*!******************************************************!*\
  !*** ./src/assets/yatra-one-v14-latin-regular.woff2 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/a9bab782b613590cdb02.woff2";

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
/******/ 				scriptUrl = document.currentScript.src;
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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./element.js */ "./src/element.js");





const btnHome = document.querySelector('#btns-home')
btnHome.addEventListener('click', loadHome)
const btnMenu = document.querySelector('#btns-menu')
btnMenu.addEventListener('click', loadMenu)
const btnContacts = document.querySelector('#btns-contacts')
btnContacts.addEventListener('click', loadContacts)
const footerText = document.querySelector('#footer-text')
const year = new Date().getFullYear()
footerText.textContent = '© ' + year + footerText.textContent

function loadHome () {
  _element_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeByClass('content-body')
  ;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
}

function loadMenu () {
  _element_js__WEBPACK_IMPORTED_MODULE_3__["default"].removeByClass('content-body')
  ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
}

function loadContacts () {

}

(0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])()

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDUTtBQUNBO0FBQ007O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsaUVBQXFCO0FBQ3ZCLEVBQUUscURBQUk7QUFDTjs7QUFFQTtBQUNBLEVBQUUsaUVBQXFCO0FBQ3ZCLEVBQUUscURBQUk7QUFDTjs7QUFFQTs7QUFFQTs7QUFFQSxvREFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9lbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy95YXRyYS1vbmUtdjE0LWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy95YXRyYS1vbmUtdjE0LWxhdGluLXJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2JnLWJvZHkuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvbGV0dHVjZWVhdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9naXRodWJsb2dvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiB5YXRyYS1vbmUtcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDsgLyogQ2hlY2sgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL0Bmb250LWZhY2UvZm9udC1kaXNwbGF5IGZvciBvdGhlciBvcHRpb25zLiAqL1xcbiAgICBmb250LWZhbWlseTogJ1lhdHJhT25lJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gICAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gIH1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSxcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAgNzAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgYm94LXNoYWRvdzogMCA0cHggMnB4IC0xcHggZ3JheTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmJvcmRlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJvcmRlcjpiZWZvcmUge1xcbiAgICBib3gtc2hhZG93OiAtMjBweCAwIDIwcHggLTIwcHggIzAwMDAwMCBpbnNldDtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGxlZnQ6IC0yMHB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5ib3JkZXI6YWZ0ZXIge1xcbiAgICBib3gtc2hhZG93OiAyMHB4IDAgMjBweCAtMjBweCAjMDAwMDAwIGluc2V0O1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAtMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbiNoZWFkZXItdGl0bGUgaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1lhdHJhT25lJztcXG59XFxuXFxuLmhlYWRlci1uYXYge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNuYXYtbGlzdCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLm5hdi1idG5zIHtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtXFxufVxcblxcbi5uYXYtYnRuczpob3ZlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbi5ob21lLWludHJvIHtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1pbnRybyxcXG4uaG9tZS1pbnRyby10ZXh0IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmhvbWUtaW50cm8gPiBoMSxcXG4uaG9tZS1pbnRybyA+IHAsXFxuLmhvbWUtaW50cm8tdGV4dCA+IHAsXFxuLmhvbWUtaW50cm8tdGV4dCA+IGgyIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uaG9tZS1pbnRyby10ZXh0LXdyYXBwZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiA2MCU7XFxufVxcblxcbi5ob21lLWludHJvLXRleHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaG9tZS1hYm91dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLmhvbWUtYWJvdXQgPiAqIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbiNob21lLW1hcC1pbWcge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMzUwcHg7XFxufVxcblxcbiNmb290ZXIge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ3LCAxMDUsIDQ3KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jZm9vdGVyID4gYSA+IGltZyB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGNvbnRlbnQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gKyBcIilcXG59XFxuXFxuLnJlY2lwZS1saXN0IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1heC13aWR0aDogNjAlO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5yZWNpcGUtcm93IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5yZWNpcGUtaW1nIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhCQUE4QjtBQUM5QjtJQUNJLGtCQUFrQixFQUFFLHNHQUFzRztJQUMxSCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjsrREFDb0UsRUFBRSxvQkFBb0I7RUFDNUY7O0FBRUY7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0lBQ1Q7c0VBQ3NEO0lBQ3RELDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0Isb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWix5REFBZ0Q7SUFDaEQsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCwwQ0FBMEM7SUFDMUMsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOzs7O0lBSUksU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsY0FBYztJQUNkLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogeWF0cmEtb25lLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7IC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gICAgZm9udC1mYW1pbHk6ICdZYXRyYU9uZSc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXRzL3lhdHJhLW9uZS12MTQtbGF0aW4tcmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgLyogU3VwZXIgTW9kZXJuIEJyb3dzZXJzICovXFxuICAgICAgICAgdXJsKCcuL2Fzc2V0cy95YXRyYS1vbmUtdjE0LWxhdGluLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cXG4gIH1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAgbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSxcXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpKSwgdXJsKCcuL2Fzc2V0cy9iZy1ib2R5LmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6ICA3MCU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCAycHggLTFweCBncmF5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9sZXR0dWNlZWF0LnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5ib3JkZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5ib3JkZXI6YmVmb3JlIHtcXG4gICAgYm94LXNoYWRvdzogLTIwcHggMCAyMHB4IC0yMHB4ICMwMDAwMDAgaW5zZXQ7XFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBsZWZ0OiAtMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uYm9yZGVyOmFmdGVyIHtcXG4gICAgYm94LXNoYWRvdzogMjBweCAwIDIwcHggLTIwcHggIzAwMDAwMCBpbnNldDtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogLTIwcHg7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4jaGVhZGVyLXRpdGxlIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdZYXRyYU9uZSc7XFxufVxcblxcbi5oZWFkZXItbmF2IHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jbmF2LWxpc3Qge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5uYXYtYnRucyB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbVxcbn1cXG5cXG4ubmF2LWJ0bnM6aG92ZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uaG9tZS1pbnRybyB7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUtaW50cm8sXFxuLmhvbWUtaW50cm8tdGV4dCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5ob21lLWludHJvID4gaDEsXFxuLmhvbWUtaW50cm8gPiBwLFxcbi5ob21lLWludHJvLXRleHQgPiBwLFxcbi5ob21lLWludHJvLXRleHQgPiBoMiB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmhvbWUtaW50cm8tdGV4dC13cmFwcGVyIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1heC13aWR0aDogNjAlO1xcbn1cXG5cXG4uaG9tZS1pbnRyby10ZXh0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhvbWUtYWJvdXQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbi5ob21lLWFib3V0ID4gKiB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4jaG9tZS1tYXAtaW1nIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NywgMTA1LCA0Nyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2Zvb3RlciA+IGEgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBjb250ZW50OiB1cmwoXFxcIi4vYXNzZXRzL2dpdGh1YmxvZ28ucG5nXFxcIilcXG59XFxuXFxuLnJlY2lwZS1saXN0IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1heC13aWR0aDogNjAlO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5yZWNpcGUtcm93IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5yZWNpcGUtaW1nIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIG1vZHVsZSBmb3IgY3JlYXRpbmcgZGl2cyBhbmQgaW5zZXJ0aW5nIGVsZW1lbnRzXG5jb25zdCBFbGVtZW50ID0gKCgpID0+IHtcbiAgY29uc3QgaW5zZXJ0VG9CeUlkID0gKHBhcmVudCwgY2hpbGQpID0+IHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBgJHtwYXJlbnR9YClcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGNoaWxkKVxuICB9XG4gIGNvbnN0IGluc2VydFRvQnlDbGFzcyA9IChwYXJlbnQsIGNoaWxkKSA9PiB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgYCR7cGFyZW50fWApXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjaGlsZClcbiAgfVxuICBjb25zdCBjcmVhdGVEaXYgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSlcbiAgICByZXR1cm4gZGl2XG4gIH1cbiAgY29uc3QgY3JlYXRlSW1nQnlJZCA9IChpZCwgc3JjKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpXG4gICAgZWxlbWVudC5zcmMgPSBzcmNcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG4gIGNvbnN0IGNyZWF0ZUltZ0J5Q2xhc3MgPSAoaWQsIHNyYykgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGlkKVxuICAgIGVsZW1lbnQuc3JjID0gc3JjXG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuICBjb25zdCBpbnNlcnRIdG1sQnlDbGFzcyA9IChjbGFzc05hbWUsIHRleHQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBgJHtjbGFzc05hbWV9YClcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHRleHRcbiAgfVxuICBjb25zdCByZW1vdmVCeUNsYXNzID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGAke2NsYXNzTmFtZX1gKVxuICAgIGVsZW1lbnQucmVtb3ZlKClcbiAgfVxuICByZXR1cm4geyBjcmVhdGVEaXYsIGluc2VydFRvQnlJZCwgaW5zZXJ0VG9CeUNsYXNzLCBpbnNlcnRIdG1sQnlDbGFzcywgcmVtb3ZlQnlDbGFzcywgY3JlYXRlSW1nQnlJZCwgY3JlYXRlSW1nQnlDbGFzcyB9XG59KSgpXG5cbmV4cG9ydCB7IEVsZW1lbnQgYXMgZGVmYXVsdCB9XG4iLCJpbXBvcnQgRWxlbWVudCBmcm9tICcuL2VsZW1lbnQuanMnXG5pbXBvcnQgTGV0dHVjZUhvbWUgZnJvbSAnLi9hc3NldHMvbGV0dHVjZS1ob21lLmpwZWcnXG5pbXBvcnQgTWFwIGZyb20gJy4vYXNzZXRzL2hvbWVfbWFwLnBuZydcblxuZnVuY3Rpb24gSG9tZSAoKSB7XG4gIEVsZW1lbnQuaW5zZXJ0VG9CeUlkKCdjb250ZW50JywgRWxlbWVudC5jcmVhdGVEaXYoJ2NvbnRlbnQtYm9keScpKVxuICBFbGVtZW50Lmluc2VydFRvQnlDbGFzcygnY29udGVudC1ib2R5JywgRWxlbWVudC5jcmVhdGVEaXYoJ2hvbWUtaW50cm8nKSlcbiAgRWxlbWVudC5pbnNlcnRUb0J5Q2xhc3MoJ2NvbnRlbnQtYm9keScsIEVsZW1lbnQuY3JlYXRlRGl2KCdob21lLWludHJvLXRleHQtd3JhcHBlcicpKVxuICBFbGVtZW50Lmluc2VydFRvQnlDbGFzcygnaG9tZS1pbnRyby10ZXh0LXdyYXBwZXInLCBFbGVtZW50LmNyZWF0ZURpdignaG9tZS1pbnRyby1pbWctd3JhcHBlcicpKVxuICBFbGVtZW50Lmluc2VydFRvQnlDbGFzcygnaG9tZS1pbnRyby1pbWctd3JhcHBlcicsIEVsZW1lbnQuY3JlYXRlSW1nQnlJZCgnaG9tZS1pbnRyby1pbWcnLCBMZXR0dWNlSG9tZSkpXG4gIEVsZW1lbnQuaW5zZXJ0VG9CeUNsYXNzKCdob21lLWludHJvLXRleHQtd3JhcHBlcicsIEVsZW1lbnQuY3JlYXRlRGl2KCdob21lLWludHJvLXRleHQnKSlcbiAgRWxlbWVudC5pbnNlcnRUb0J5Q2xhc3MoJ2NvbnRlbnQtYm9keScsIEVsZW1lbnQuY3JlYXRlRGl2KCdob21lLWFib3V0JykpXG5cbiAgY29uc3QgaW50cm8gPSAnPGgxPldlbGNvbWUgdG8gTGV0dHVjZSBFYXQhPC9oMT48YnI+PHA+QW4gQWxsLVlvdS1DYW4tRWF0IEJ1ZmZldCB3aXRoIG9ubHkgZGlzaGVzIG9mIGxldHR1Y2UhPC9wPidcbiAgY29uc3QgaW50cm9UZXh0ID0gJzxoMj5Ib21lIG9mIHRoZSBiZXN0IGxldHR1Y2UgZGlzaGVzITwvaDI+PGJyPjxwPkVhY2ggZGlzaCBpcyBjb29rZWQgYW5kIG1hZGUgd2l0aCBsZXR0dWNlIGFuZCBsb3ZlIHRoYXQgd2lsbCBzdXJlIHNhdGlzZnkgeW91IHVwITwvcD48cD48YnI+TGV0dHVjZSBFYXQgZ3VhcmFudGVlcyB0aGF0IHdlIGhhdmUgYWxsIHlvdXIgY3JhdmluZ3MhPHA+J1xuICBjb25zdCB0ZXh0ID0gJzxoMT5Mb2NhdGlvbjwvaDE+PHA+M3JkIFN0LiwgQm91bGV2YXJkIFJkLiwgVG93biBDaXR5LCBDYW50cnk8L3A+J1xuXG4gIEVsZW1lbnQuaW5zZXJ0SHRtbEJ5Q2xhc3MoJ2hvbWUtaW50cm8nLCBpbnRybylcbiAgRWxlbWVudC5pbnNlcnRIdG1sQnlDbGFzcygnaG9tZS1pbnRyby10ZXh0JywgaW50cm9UZXh0KVxuICBFbGVtZW50Lmluc2VydEh0bWxCeUNsYXNzKCdob21lLWFib3V0JywgdGV4dClcbiAgRWxlbWVudC5pbnNlcnRUb0J5Q2xhc3MoJ2hvbWUtYWJvdXQnLCBFbGVtZW50LmNyZWF0ZUltZ0J5SWQoJ2hvbWUtbWFwLWltZycsIE1hcCkpXG59XG5cbmV4cG9ydCB7IEhvbWUgYXMgZGVmYXVsdCB9XG4iLCJpbXBvcnQgRWxlbWVudCBmcm9tICcuL2VsZW1lbnQuanMnXG5pbXBvcnQgUmVjaXBlT25lIGZyb20gJy4vYXNzZXRzL3JlY2lwZXMvMS5qcGcnXG5pbXBvcnQgUmVjaXBlVHdvIGZyb20gJy4vYXNzZXRzL3JlY2lwZXMvMi5qcGcnXG5pbXBvcnQgUmVjaXBlVGhyZWUgZnJvbSAnLi9hc3NldHMvcmVjaXBlcy8zLmpwZydcbmltcG9ydCBSZWNpcGVGb3VyIGZyb20gJy4vYXNzZXRzL3JlY2lwZXMvNC5qcGcnXG5pbXBvcnQgUmVjaXBlRml2ZSBmcm9tICcuL2Fzc2V0cy9yZWNpcGVzLzUuanBnJ1xuaW1wb3J0IFJlY2lwZVNpeCBmcm9tICcuL2Fzc2V0cy9yZWNpcGVzLzYuanBnJ1xuaW1wb3J0IFJlY2lwZVNldmVuIGZyb20gJy4vYXNzZXRzL3JlY2lwZXMvNy5qcGcnXG5pbXBvcnQgUmVjaXBlRWlnaHQgZnJvbSAnLi9hc3NldHMvcmVjaXBlcy84LmpwZydcblxuZnVuY3Rpb24gTWVudSAoKSB7XG4gIGNvbnN0IGludHJvID0gJzxoMT5NZW51PC9oMT48YnI+PHA+TGlzdGVkIGJlbG93IGFyZSBhbGwgb2Ygb3VyIExldHR1Y2UgU3BlY2lhbHMhPC9wPidcbiAgY29uc3QgaW1nQXJyID0gW1JlY2lwZU9uZSwgUmVjaXBlVHdvLCBSZWNpcGVUaHJlZSwgUmVjaXBlRm91ciwgUmVjaXBlRml2ZSwgUmVjaXBlU2l4LCBSZWNpcGVTZXZlbiwgUmVjaXBlRWlnaHRdXG4gIGNvbnN0IHJlY2lwZU5hbWVBcnIgPSBbJ1F1aWNrIE5pY29pc2UgU2FsYWQnLCAnV2FybSBSaWNlICYgUGludG9zIFNhbGFkJywgJ01leGljYW4gTGF5ZXJlZCBTYWxhZCcsXG4gICAgJ1N0cmF3YmVycnkgU2FsYWQgd2l0aCBQb3BweSBTZWVkIERyZXNzaW5nJywgJ0hvaXNpbiBNZWF0YmFsbCBMZXR0dWNlIFdyYXBzJyxcbiAgICAnVHJvcGljYWwgTGF5ZXJlZCBDaGlja2VuIFNhbGFkJywgJ1NocmltcCAmIEF2b2NhZG8gU2FsYWRzJywgJ1R1cmtleSBTYWxhZCBvbiBXaGVhdCBCcmVhZCddXG4gIEVsZW1lbnQuaW5zZXJ0VG9CeUlkKCdjb250ZW50JywgRWxlbWVudC5jcmVhdGVEaXYoJ2NvbnRlbnQtYm9keScpKVxuICBFbGVtZW50Lmluc2VydFRvQnlDbGFzcygnY29udGVudC1ib2R5JywgRWxlbWVudC5jcmVhdGVEaXYoJ2hvbWUtaW50cm8nKSlcbiAgRWxlbWVudC5pbnNlcnRUb0J5Q2xhc3MoJ2NvbnRlbnQtYm9keScsIEVsZW1lbnQuY3JlYXRlRGl2KCdyZWNpcGUtbGlzdCcpKVxuICBFbGVtZW50Lmluc2VydEh0bWxCeUNsYXNzKCdob21lLWludHJvJywgaW50cm8pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNDsgaSsrKSB7XG4gICAgY29uc3QgdGV4dCA9ICc8aDI+JyArIHJlY2lwZU5hbWVBcnJbaV1cbiAgICBjb25zdCB0ZXh0VHdvID0gJzxoMj4nICsgcmVjaXBlTmFtZUFycltpICsgMV1cbiAgICBFbGVtZW50Lmluc2VydFRvQnlDbGFzcygncmVjaXBlLWxpc3QnLCBFbGVtZW50LmNyZWF0ZURpdigncmVjaXBlLXJvdyBjJyArIGkpKVxuXG4gICAgRWxlbWVudC5pbnNlcnRUb0J5Q2xhc3MoJ2MnICsgaSwgRWxlbWVudC5jcmVhdGVEaXYoJ3JlY2lwZS1jYXJkIGEnICsgaSkpXG4gICAgRWxlbWVudC5pbnNlcnRUb0J5Q2xhc3MoJ2EnICsgaSwgRWxlbWVudC5jcmVhdGVEaXYoJ3JlY2lwZS1uYW1lIGInICsgaSkpXG4gICAgRWxlbWVudC5pbnNlcnRIdG1sQnlDbGFzcygnYicgKyBpLCB0ZXh0KVxuICAgIEVsZW1lbnQuaW5zZXJ0VG9CeUNsYXNzKCdhJyArIGksIEVsZW1lbnQuY3JlYXRlSW1nQnlDbGFzcygncmVjaXBlLWltZyBpbWcnICsgaSwgaW1nQXJyW2ldKSlcbiAgICBFbGVtZW50Lmluc2VydFRvQnlDbGFzcygnYycgKyBpLCBFbGVtZW50LmNyZWF0ZURpdigncmVjaXBlLWNhcmQgYScgKyAoaSArIDEpKSlcbiAgICBFbGVtZW50Lmluc2VydFRvQnlDbGFzcygnYScgKyAoaSArIDEpLCBFbGVtZW50LmNyZWF0ZURpdigncmVjaXBlLW5hbWUgYicgKyAoaSArIDEpKSlcbiAgICBFbGVtZW50Lmluc2VydEh0bWxCeUNsYXNzKCdiJyArIChpICsgMSksIHRleHRUd28pXG4gICAgRWxlbWVudC5pbnNlcnRUb0J5Q2xhc3MoJ2EnICsgKGkgKyAxKSwgRWxlbWVudC5jcmVhdGVJbWdCeUNsYXNzKCdyZWNpcGUtaW1nIGltZycgKyAoaSArIDEpLCBpbWdBcnJbKGkgKyAxKV0pKVxuICAgIGkrK1xuICB9XG59XG5cbmV4cG9ydCB7IE1lbnUgYXMgZGVmYXVsdCB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgSG9tZSBmcm9tICcuL2hvbWUuanMnXG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUuanMnXG5pbXBvcnQgRWxlbWVudCBmcm9tICcuL2VsZW1lbnQuanMnXG5cbmNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRucy1ob21lJylcbmJ0bkhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZSlcbmNvbnN0IGJ0bk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRucy1tZW51JylcbmJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSlcbmNvbnN0IGJ0bkNvbnRhY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bnMtY29udGFjdHMnKVxuYnRuQ29udGFjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkQ29udGFjdHMpXG5jb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvb3Rlci10ZXh0JylcbmNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKClcbmZvb3RlclRleHQudGV4dENvbnRlbnQgPSAnwqkgJyArIHllYXIgKyBmb290ZXJUZXh0LnRleHRDb250ZW50XG5cbmZ1bmN0aW9uIGxvYWRIb21lICgpIHtcbiAgRWxlbWVudC5yZW1vdmVCeUNsYXNzKCdjb250ZW50LWJvZHknKVxuICBIb21lKClcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUgKCkge1xuICBFbGVtZW50LnJlbW92ZUJ5Q2xhc3MoJ2NvbnRlbnQtYm9keScpXG4gIE1lbnUoKVxufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdHMgKCkge1xuXG59XG5cbkhvbWUoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9