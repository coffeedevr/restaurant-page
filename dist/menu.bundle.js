/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFVBQVU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFVBQVU7QUFDOUQ7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEM3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0M7QUFDWTtBQUNBO0FBQ0U7QUFDRDtBQUNBO0FBQ0Q7QUFDRTtBQUNBOztBQUVoRDtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFTLEVBQUUsa0RBQVMsRUFBRSxrREFBVyxFQUFFLGtEQUFVLEVBQUUsa0RBQVUsRUFBRSxrREFBUyxFQUFFLGtEQUFXLEVBQUUsa0RBQVc7QUFDaEg7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnRUFBb0IsWUFBWSw2REFBaUI7QUFDbkQsRUFBRSxtRUFBdUIsaUJBQWlCLDZEQUFpQjtBQUMzRCxFQUFFLG1FQUF1QixpQkFBaUIsNkRBQWlCO0FBQzNELEVBQUUscUVBQXlCOztBQUUzQixrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0EsSUFBSSxtRUFBdUIsZ0JBQWdCLDZEQUFpQjs7QUFFNUQsSUFBSSxtRUFBdUIsVUFBVSw2REFBaUI7QUFDdEQsSUFBSSxtRUFBdUIsVUFBVSw2REFBaUI7QUFDdEQsSUFBSSxxRUFBeUI7QUFDN0IsSUFBSSxtRUFBdUIsVUFBVSxvRUFBd0I7QUFDN0QsSUFBSSxtRUFBdUIsVUFBVSw2REFBaUI7QUFDdEQsSUFBSSxtRUFBdUIsZ0JBQWdCLDZEQUFpQjtBQUM1RCxJQUFJLHFFQUF5QjtBQUM3QixJQUFJLG1FQUF1QixnQkFBZ0Isb0VBQXdCO0FBQ25FO0FBQ0E7QUFDQTs7QUFFMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbW9kdWxlIGZvciBjcmVhdGluZyBkaXZzIGFuZCBpbnNlcnRpbmcgZWxlbWVudHNcbmNvbnN0IEVsZW1lbnQgPSAoKCkgPT4ge1xuICBjb25zdCBpbnNlcnRUb0J5SWQgPSAocGFyZW50LCBjaGlsZCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIGAke3BhcmVudH1gKVxuICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpXG4gIH1cbiAgY29uc3QgaW5zZXJ0VG9CeUNsYXNzID0gKHBhcmVudCwgY2hpbGQpID0+IHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBgJHtwYXJlbnR9YClcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGNoaWxkKVxuICB9XG4gIGNvbnN0IGNyZWF0ZURpdiA9IChjbGFzc05hbWUpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKVxuICAgIHJldHVybiBkaXZcbiAgfVxuICBjb25zdCBjcmVhdGVJbWdCeUlkID0gKGlkLCBzcmMpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBpZClcbiAgICBlbGVtZW50LnNyYyA9IHNyY1xuICAgIHJldHVybiBlbGVtZW50XG4gIH1cbiAgY29uc3QgY3JlYXRlSW1nQnlDbGFzcyA9IChpZCwgc3JjKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgaWQpXG4gICAgZWxlbWVudC5zcmMgPSBzcmNcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG4gIGNvbnN0IGluc2VydEh0bWxCeUNsYXNzID0gKGNsYXNzTmFtZSwgdGV4dCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGAke2NsYXNzTmFtZX1gKVxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGV4dFxuICB9XG4gIGNvbnN0IHJlbW92ZUJ5Q2xhc3MgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgYCR7Y2xhc3NOYW1lfWApXG4gICAgZWxlbWVudC5yZW1vdmUoKVxuICB9XG4gIHJldHVybiB7IGNyZWF0ZURpdiwgaW5zZXJ0VG9CeUlkLCBpbnNlcnRUb0J5Q2xhc3MsIGluc2VydEh0bWxCeUNsYXNzLCByZW1vdmVCeUNsYXNzLCBjcmVhdGVJbWdCeUlkLCBjcmVhdGVJbWdCeUNsYXNzIH1cbn0pKClcblxuZXhwb3J0IHsgRWxlbWVudCBhcyBkZWZhdWx0IH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgRWxlbWVudCBmcm9tICcuL2VsZW1lbnQuanMnXG5pbXBvcnQgUmVjaXBlT25lIGZyb20gJy4vYXNzZXRzL3JlY2lwZXMvMS5qcGcnXG5pbXBvcnQgUmVjaXBlVHdvIGZyb20gJy4vYXNzZXRzL3JlY2lwZXMvMi5qcGcnXG5pbXBvcnQgUmVjaXBlVGhyZWUgZnJvbSAnLi9hc3NldHMvcmVjaXBlcy8zLmpwZydcbmltcG9ydCBSZWNpcGVGb3VyIGZyb20gJy4vYXNzZXRzL3JlY2lwZXMvNC5qcGcnXG5pbXBvcnQgUmVjaXBlRml2ZSBmcm9tICcuL2Fzc2V0cy9yZWNpcGVzLzUuanBnJ1xuaW1wb3J0IFJlY2lwZVNpeCBmcm9tICcuL2Fzc2V0cy9yZWNpcGVzLzYuanBnJ1xuaW1wb3J0IFJlY2lwZVNldmVuIGZyb20gJy4vYXNzZXRzL3JlY2lwZXMvNy5qcGcnXG5pbXBvcnQgUmVjaXBlRWlnaHQgZnJvbSAnLi9hc3NldHMvcmVjaXBlcy84LmpwZydcblxuZnVuY3Rpb24gTWVudSAoKSB7XG4gIGNvbnN0IGludHJvID0gJzxoMT5NZW51PC9oMT48YnI+PHA+TGlzdGVkIGJlbG93IGFyZSBhbGwgb2Ygb3VyIExldHR1Y2UgU3BlY2lhbHMhPC9wPidcbiAgY29uc3QgaW1nQXJyID0gW1JlY2lwZU9uZSwgUmVjaXBlVHdvLCBSZWNpcGVUaHJlZSwgUmVjaXBlRm91ciwgUmVjaXBlRml2ZSwgUmVjaXBlU2l4LCBSZWNpcGVTZXZlbiwgUmVjaXBlRWlnaHRdXG4gIGNvbnN0IHJlY2lwZU5hbWVBcnIgPSBbJ1F1aWNrIE5pY29pc2UgU2FsYWQnLCAnV2FybSBSaWNlICYgUGludG9zIFNhbGFkJywgJ01leGljYW4gTGF5ZXJlZCBTYWxhZCcsXG4gICAgJ1N0cmF3YmVycnkgU2FsYWQgd2l0aCBQb3BweSBTZWVkIERyZXNzaW5nJywgJ0hvaXNpbiBNZWF0YmFsbCBMZXR0dWNlIFdyYXBzJyxcbiAgICAnVHJvcGljYWwgTGF5ZXJlZCBDaGlja2VuIFNhbGFkJywgJ1NocmltcCAmIEF2b2NhZG8gU2FsYWRzJywgJ1R1cmtleSBTYWxhZCBvbiBXaGVhdCBCcmVhZCddXG4gIEVsZW1lbnQuaW5zZXJ0VG9CeUlkKCdjb250ZW50JywgRWxlbWVudC5jcmVhdGVEaXYoJ2NvbnRlbnQtYm9keScpKVxuICBFbGVtZW50Lmluc2VydFRvQnlDbGFzcygnY29udGVudC1ib2R5JywgRWxlbWVudC5jcmVhdGVEaXYoJ2hvbWUtaW50cm8nKSlcbiAgRWxlbWVudC5pbnNlcnRUb0J5Q2xhc3MoJ2NvbnRlbnQtYm9keScsIEVsZW1lbnQuY3JlYXRlRGl2KCdyZWNpcGUtbGlzdCcpKVxuICBFbGVtZW50Lmluc2VydEh0bWxCeUNsYXNzKCdob21lLWludHJvJywgaW50cm8pXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNDsgaSsrKSB7XG4gICAgY29uc3QgdGV4dCA9ICc8aDI+JyArIHJlY2lwZU5hbWVBcnJbaV1cbiAgICBjb25zdCB0ZXh0VHdvID0gJzxoMj4nICsgcmVjaXBlTmFtZUFycltpICsgMV1cbiAgICBFbGVtZW50Lmluc2VydFRvQnlDbGFzcygncmVjaXBlLWxpc3QnLCBFbGVtZW50LmNyZWF0ZURpdigncmVjaXBlLXJvdyBjJyArIGkpKVxuXG4gICAgRWxlbWVudC5pbnNlcnRUb0J5Q2xhc3MoJ2MnICsgaSwgRWxlbWVudC5jcmVhdGVEaXYoJ3JlY2lwZS1jYXJkIGEnICsgaSkpXG4gICAgRWxlbWVudC5pbnNlcnRUb0J5Q2xhc3MoJ2EnICsgaSwgRWxlbWVudC5jcmVhdGVEaXYoJ3JlY2lwZS1uYW1lIGInICsgaSkpXG4gICAgRWxlbWVudC5pbnNlcnRIdG1sQnlDbGFzcygnYicgKyBpLCB0ZXh0KVxuICAgIEVsZW1lbnQuaW5zZXJ0VG9CeUNsYXNzKCdhJyArIGksIEVsZW1lbnQuY3JlYXRlSW1nQnlDbGFzcygncmVjaXBlLWltZyBpbWcnICsgaSwgaW1nQXJyW2ldKSlcbiAgICBFbGVtZW50Lmluc2VydFRvQnlDbGFzcygnYycgKyBpLCBFbGVtZW50LmNyZWF0ZURpdigncmVjaXBlLWNhcmQgYScgKyAoaSArIDEpKSlcbiAgICBFbGVtZW50Lmluc2VydFRvQnlDbGFzcygnYScgKyAoaSArIDEpLCBFbGVtZW50LmNyZWF0ZURpdigncmVjaXBlLW5hbWUgYicgKyAoaSArIDEpKSlcbiAgICBFbGVtZW50Lmluc2VydEh0bWxCeUNsYXNzKCdiJyArIChpICsgMSksIHRleHRUd28pXG4gICAgRWxlbWVudC5pbnNlcnRUb0J5Q2xhc3MoJ2EnICsgKGkgKyAxKSwgRWxlbWVudC5jcmVhdGVJbWdCeUNsYXNzKCdyZWNpcGUtaW1nIGltZycgKyAoaSArIDEpLCBpbWdBcnJbKGkgKyAxKV0pKVxuICAgIGkrK1xuICB9XG59XG5cbmV4cG9ydCB7IE1lbnUgYXMgZGVmYXVsdCB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=