/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/countPercents.js":
/*!*****************************************!*\
  !*** ./src/js/modules/countPercents.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const countPercents = (selectorPercents, selectorLine) => {
    const percents = document.querySelectorAll(selectorPercents),
    lines = document.querySelectorAll(selectorLine);

    percents.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });
};

/* harmony default export */ __webpack_exports__["default"] = (countPercents);

/***/ }),

/***/ "./src/js/modules/scrollUp.js":
/*!************************************!*\
  !*** ./src/js/modules/scrollUp.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const scrollUp = () => {
    //Scroll up
    const pageUp =  document.querySelector('.pageup'),
          promo = document.querySelector('.promo'),
          hamburgerSpan = document.querySelectorAll('.hamburger span'),
          promoHeight = promo.offsetHeight;

    document.addEventListener('scroll', () => {
        if(window.scrollY > 1600) {
            pageUp.style.display = 'block';
        } else {
            pageUp.style.display = 'none';
        }
        if(window.scrollY > promoHeight-10) {
            hamburgerSpan.forEach(item => {
                item.style.background = '#000';
            });
        } else {
            hamburgerSpan.forEach(item => {
                item.style.background = '#FFF';
            });
        }
    })

    pageUp.addEventListener('click', () => {
        window.scrollTo(0,0);
    });
};

/* harmony default export */ __webpack_exports__["default"] = (scrollUp);

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scrollUp */ "./src/js/modules/scrollUp.js");
/* harmony import */ var _modules_countPercents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/countPercents */ "./src/js/modules/countPercents.js");



window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_countPercents__WEBPACK_IMPORTED_MODULE_1__["default"])('.progress__item-percent', '.progress__item-line span');
    

    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.menu'),
          closeMenu = document.querySelector('.menu__close'),
          overlay = document.querySelector('.menu__overlay'),
          menulink = document.querySelectorAll('.menu__link');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    menulink.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
        })
    });
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map