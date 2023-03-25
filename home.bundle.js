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
  !*** ./src/home.js ***!
  \*********************/
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFVBQVU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFVBQVU7QUFDOUQ7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUU0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEM3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNma0M7QUFDa0I7QUFDYjs7QUFFdkM7QUFDQSxFQUFFLGdFQUFvQixZQUFZLDZEQUFpQjtBQUNuRCxFQUFFLG1FQUF1QixpQkFBaUIsNkRBQWlCO0FBQzNELEVBQUUsbUVBQXVCLGlCQUFpQiw2REFBaUI7QUFDM0QsRUFBRSxtRUFBdUIsNEJBQTRCLDZEQUFpQjtBQUN0RSxFQUFFLG1FQUF1QiwyQkFBMkIsaUVBQXFCLG1CQUFtQixzREFBVztBQUN2RyxFQUFFLG1FQUF1Qiw0QkFBNEIsNkRBQWlCO0FBQ3RFLEVBQUUsbUVBQXVCLGlCQUFpQiw2REFBaUI7O0FBRTNEO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHFFQUF5QjtBQUMzQixFQUFFLHFFQUF5QjtBQUMzQixFQUFFLHFFQUF5QjtBQUMzQixFQUFFLG1FQUF1QixlQUFlLGlFQUFxQixpQkFBaUIsaURBQUc7QUFDakY7O0FBRTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1vZHVsZSBmb3IgY3JlYXRpbmcgZGl2cyBhbmQgaW5zZXJ0aW5nIGVsZW1lbnRzXG5jb25zdCBFbGVtZW50ID0gKCgpID0+IHtcbiAgY29uc3QgaW5zZXJ0VG9CeUlkID0gKHBhcmVudCwgY2hpbGQpID0+IHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBgJHtwYXJlbnR9YClcbiAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKGNoaWxkKVxuICB9XG4gIGNvbnN0IGluc2VydFRvQnlDbGFzcyA9IChwYXJlbnQsIGNoaWxkKSA9PiB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgYCR7cGFyZW50fWApXG4gICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjaGlsZClcbiAgfVxuICBjb25zdCBjcmVhdGVEaXYgPSAoY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSlcbiAgICByZXR1cm4gZGl2XG4gIH1cbiAgY29uc3QgY3JlYXRlSW1nQnlJZCA9IChpZCwgc3JjKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpXG4gICAgZWxlbWVudC5zcmMgPSBzcmNcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG4gIGNvbnN0IGNyZWF0ZUltZ0J5Q2xhc3MgPSAoaWQsIHNyYykgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGlkKVxuICAgIGVsZW1lbnQuc3JjID0gc3JjXG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxuICBjb25zdCBpbnNlcnRIdG1sQnlDbGFzcyA9IChjbGFzc05hbWUsIHRleHQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBgJHtjbGFzc05hbWV9YClcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHRleHRcbiAgfVxuICBjb25zdCByZW1vdmVCeUNsYXNzID0gKGNsYXNzTmFtZSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGAke2NsYXNzTmFtZX1gKVxuICAgIGVsZW1lbnQucmVtb3ZlKClcbiAgfVxuICByZXR1cm4geyBjcmVhdGVEaXYsIGluc2VydFRvQnlJZCwgaW5zZXJ0VG9CeUNsYXNzLCBpbnNlcnRIdG1sQnlDbGFzcywgcmVtb3ZlQnlDbGFzcywgY3JlYXRlSW1nQnlJZCwgY3JlYXRlSW1nQnlDbGFzcyB9XG59KSgpXG5cbmV4cG9ydCB7IEVsZW1lbnQgYXMgZGVmYXVsdCB9XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9lbGVtZW50LmpzJ1xuaW1wb3J0IExldHR1Y2VIb21lIGZyb20gJy4vYXNzZXRzL2xldHR1Y2UtaG9tZS5qcGVnJ1xuaW1wb3J0IE1hcCBmcm9tICcuL2Fzc2V0cy9ob21lX21hcC5wbmcnXG5cbmZ1bmN0aW9uIEhvbWUgKCkge1xuICBFbGVtZW50Lmluc2VydFRvQnlJZCgnY29udGVudCcsIEVsZW1lbnQuY3JlYXRlRGl2KCdjb250ZW50LWJvZHknKSlcbiAgRWxlbWVudC5pbnNlcnRUb0J5Q2xhc3MoJ2NvbnRlbnQtYm9keScsIEVsZW1lbnQuY3JlYXRlRGl2KCdob21lLWludHJvJykpXG4gIEVsZW1lbnQuaW5zZXJ0VG9CeUNsYXNzKCdjb250ZW50LWJvZHknLCBFbGVtZW50LmNyZWF0ZURpdignaG9tZS1pbnRyby10ZXh0LXdyYXBwZXInKSlcbiAgRWxlbWVudC5pbnNlcnRUb0J5Q2xhc3MoJ2hvbWUtaW50cm8tdGV4dC13cmFwcGVyJywgRWxlbWVudC5jcmVhdGVEaXYoJ2hvbWUtaW50cm8taW1nLXdyYXBwZXInKSlcbiAgRWxlbWVudC5pbnNlcnRUb0J5Q2xhc3MoJ2hvbWUtaW50cm8taW1nLXdyYXBwZXInLCBFbGVtZW50LmNyZWF0ZUltZ0J5SWQoJ2hvbWUtaW50cm8taW1nJywgTGV0dHVjZUhvbWUpKVxuICBFbGVtZW50Lmluc2VydFRvQnlDbGFzcygnaG9tZS1pbnRyby10ZXh0LXdyYXBwZXInLCBFbGVtZW50LmNyZWF0ZURpdignaG9tZS1pbnRyby10ZXh0JykpXG4gIEVsZW1lbnQuaW5zZXJ0VG9CeUNsYXNzKCdjb250ZW50LWJvZHknLCBFbGVtZW50LmNyZWF0ZURpdignaG9tZS1hYm91dCcpKVxuXG4gIGNvbnN0IGludHJvID0gJzxoMT5XZWxjb21lIHRvIExldHR1Y2UgRWF0ITwvaDE+PGJyPjxwPkFuIEFsbC1Zb3UtQ2FuLUVhdCBCdWZmZXQgd2l0aCBvbmx5IGRpc2hlcyBvZiBsZXR0dWNlITwvcD4nXG4gIGNvbnN0IGludHJvVGV4dCA9ICc8aDI+SG9tZSBvZiB0aGUgYmVzdCBsZXR0dWNlIGRpc2hlcyE8L2gyPjxicj48cD5FYWNoIGRpc2ggaXMgY29va2VkIGFuZCBtYWRlIHdpdGggbGV0dHVjZSBhbmQgbG92ZSB0aGF0IHdpbGwgc3VyZSBzYXRpc2Z5IHlvdSB1cCE8L3A+PHA+PGJyPkxldHR1Y2UgRWF0IGd1YXJhbnRlZXMgdGhhdCB3ZSBoYXZlIGFsbCB5b3VyIGNyYXZpbmdzITxwPidcbiAgY29uc3QgdGV4dCA9ICc8aDE+TG9jYXRpb248L2gxPjxwPjNyZCBTdC4sIEJvdWxldmFyZCBSZC4sIFRvd24gQ2l0eSwgQ2FudHJ5PC9wPidcblxuICBFbGVtZW50Lmluc2VydEh0bWxCeUNsYXNzKCdob21lLWludHJvJywgaW50cm8pXG4gIEVsZW1lbnQuaW5zZXJ0SHRtbEJ5Q2xhc3MoJ2hvbWUtaW50cm8tdGV4dCcsIGludHJvVGV4dClcbiAgRWxlbWVudC5pbnNlcnRIdG1sQnlDbGFzcygnaG9tZS1hYm91dCcsIHRleHQpXG4gIEVsZW1lbnQuaW5zZXJ0VG9CeUNsYXNzKCdob21lLWFib3V0JywgRWxlbWVudC5jcmVhdGVJbWdCeUlkKCdob21lLW1hcC1pbWcnLCBNYXApKVxufVxuXG5leHBvcnQgeyBIb21lIGFzIGRlZmF1bHQgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9