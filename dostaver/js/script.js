/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");


function forms(formSelector, modalSelector, modalTimerId) {
  const forms = document.querySelectorAll(formSelector);
  forms.forEach(item => {
    bindPostData(item);
  });
  function bindPostData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.postData)('http://localhost:3000/requests', json).then(() => {
        showResultModal('success');
        console.log('ok');
      }).catch(() => {
        showResultModal('error');
        console.log('error');
      }).finally(() => {
        form.reset();
      });
    });
  }
  function showResultModal(result) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    prevModalDialog.classList.remove('show');
    (0,_modal__WEBPACK_IMPORTED_MODULE_1__.showModal)('.modal', modalTimerId);
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    if (result == 'success') {
      thanksModal.innerHTML = `
                <div class="modal__content modal__content_thanks">
                    <div data-close class="modal__close"></div>
                    <img class="modal__logo_thanks" src="icons/modals/thanks.svg" alt="thanks">
                    <div class="modal__title">Дякую за заявку!</div>
                    <div class="modal__subtitle">Найближчим часом ми зв'яжемося з вами</div>
                </div>
            `;
    } else if (result == 'error') {
      thanksModal.innerHTML = `
                <div class="modal__content modal__content_thanks">
                    <div data-close class="modal__close"></div>
                    <img class="modal__logo_thanks" src="icons/modals/thanks.svg" alt="thanks">
                    <div class="modal__title">Нажаль сталась помилка(</div>
                    <div class="modal__subtitle">Спробуйте ще раз)</div>
                </div>
            `;
    }
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      (0,_modal__WEBPACK_IMPORTED_MODULE_1__.closeModal)(modalSelector);
    }, 3000);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const menu = () => {
  const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.header__menu'),
    menuList = document.querySelector('.header__list'),
    close = document.querySelector('.header__list-close');
  function showMenu() {
    menu.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function hideMenu() {
    menu.classList.remove('show');
    document.body.style.overflow = 'visible';
  }
  hamburger.addEventListener('click', () => {
    showMenu();
  });
  close.addEventListener('click', () => {
    hideMenu();
  });
  menu.addEventListener('click', e => {
    if (menuList != e.target) {
      hideMenu();
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('show')) {
      hideMenu();
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": function() { return /* binding */ closeModal; },
/* harmony export */   "showModal": function() { return /* binding */ showModal; }
/* harmony export */ });
function showModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  if (modal) {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    if (modalTimerId) {
      clearInterval(modalTimerId);
    }
  }
}
function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}
function modal(modalSelector, modalBtnClose, modalTimerId) {
  const close = document.querySelector(modalBtnClose),
    modal = document.querySelector(modalSelector);
  if (close && modal) {
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && modal.classList.contains('show')) {
        closeModal(modalSelector);
      }
    });
    modal.addEventListener('click', e => {
      if (e.target === modal || e.target.getAttribute('data-close') == '') {
        closeModal(modalSelector);
      }
    });
    function showModalByScroll() {
      if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
        showModal(modalSelector, modalTimerId);
        window.removeEventListener('scroll', showModalByScroll);
      }
    }
    window.addEventListener('scroll', showModalByScroll);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./src/js/modules/privacyFullText.js":
/*!*******************************************!*\
  !*** ./src/js/modules/privacyFullText.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const privacyFullText = () => {
  const fullTextBtn = document.querySelector('.privacy__mobile_full'),
    text = document.querySelector('.privacy__mobile_text');
  if (fullTextBtn) {
    fullTextBtn.addEventListener('click', e => {
      e.preventDefault();
      text.style.display = 'block';
      fullTextBtn.style.display = 'none';
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (privacyFullText);

/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "postData": function() { return /* binding */ postData; }
/* harmony export */ });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  return await res.json(); // json() возвращает обьект
};



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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_privacyFullText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/privacyFullText */ "./src/js/modules/privacyFullText.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");





window.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(() => (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__.showModal)('.modal', modalTimerId), 50000);
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('.modal', '.modal__close', modalTimerId);
  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_privacyFullText__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"])('.form', '.modal', modalTimerId);
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map