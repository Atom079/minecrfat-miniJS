/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/loader.js":
/*!*******************************!*\
  !*** ./src/modules/loader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loader(loaderSelector) {
  const loader = document.querySelector(loaderSelector);
  document.body.style.overflow = 'hidden'
  setTimeout(() => {
    loader.style.opacity = 0;
    document.body.style.overflow = ''
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 2000);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loader);


/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider({
  field,
  wrapper,
  nextBtn,
  prevBtn,
  slideSelector,
  totalCounter,
  currentCounter,
}) {
  const sliderField = document.querySelector(field),
    slidesWrapper = document.querySelector(wrapper),
    next = document.querySelector(nextBtn),
    prev = document.querySelector(prevBtn),
    slides = document.querySelectorAll(slideSelector),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    width = window.getComputedStyle(slidesWrapper).width;


  sliderField.style.display = "flex";
  sliderField.style.width = 100 * slides.length + "%";
  slidesWrapper.style.overflow = "hidden";
  sliderField.style.transition = ".5s ease all";
  slides.forEach((slide) => {
    slide.style.width = width;
  });
  if (slides.length < 10) {
    total.textContent = `0${slides.length}`
  }else{
    total.textContent = slides.length
  }
  function deleteStr(str){
    return parseInt(str)
  }
  let slideIndex = 1,
    offset = 0
  next.addEventListener('click', ()=>{
    if (offset == deleteStr(width) * (slides.length - 1)) {
        offset = 0
    }else{
        offset += deleteStr(width)
    }
    sliderField.style.transform = `translateX(-${offset}px)`
    if (slideIndex == slides.length) {
        slideIndex = 1
    }else{
        slideIndex++;
    }
    if (slideIndex < 10) {
        current.textContent = `0${slideIndex}`
    }else{
        current.textContent = slideIndex
    }
  })
  prev.addEventListener('click', ()=>{
    if (offset == 0) {
        offset = deleteStr(width) * (slides.length - 1)
    }else{
        offset -= deleteStr(width)
    }
    sliderField.style.transform = `translateX(-${offset}px)`
    if (slideIndex <= 1) {
        slideIndex = slides.length
    }else{
        slideIndex--;
    }
    if (slideIndex < 10) {
        current.textContent = `0${slideIndex}`
    }else{
        current.textContent = slideIndex
    }
  })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


/***/ }),

/***/ "./src/modules/tab.js":
/*!****************************!*\
  !*** ./src/modules/tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tab({
  tabParentSelector,
  tabSelector,
  tabcontentSelector,
  activeClass,
}) {
  const tabParent = document.querySelector(tabParentSelector),
    tabs = document.querySelectorAll(tabSelector),
    tabcontents = document.querySelectorAll(tabcontentSelector);
  function hideTabContent() {
    tabcontents.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show");
    });
    tabs.forEach((item) => item.classList.remove(activeClass));
  }
  function showTabContent(i = 0) {
    tabcontents[i].classList.add("show");
    tabcontents[i].classList.remove("hide");
    tabs[i].classList.add(activeClass);
  }
  hideTabContent();
  showTabContent();
  tabParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains(tabSelector.slice(1))) {
      tabs.forEach((tab, index) => {
        if (target == tab) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tab);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/loader */ "./src/modules/loader.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/slider */ "./src/modules/slider.js");
/* harmony import */ var _modules_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/tab */ "./src/modules/tab.js");




window.addEventListener('DOMContentLoaded', ()=>{
    (0,_modules_loader__WEBPACK_IMPORTED_MODULE_0__["default"])('.loader')
    ;(0,_modules_tab__WEBPACK_IMPORTED_MODULE_2__["default"])({
        tabParentSelector: '.tabheader__items',
        tabSelector: '.tabheader__item',
        activeClass: 'tabheader__item_active',
        tabcontentSelector: '.tabcontent'
    })
    ;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])({
        wrapper: '.slider-wrapper',
        field: '.slider-inner',
        nextBtn: '#next',
        prevBtn: '#prev',
        slideSelector: '.slide',
        totalCounter: '#total',
        currentCounter: '#current',
    })
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map