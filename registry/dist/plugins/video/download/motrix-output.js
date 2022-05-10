/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["video/download/motrix-output"] = factory();
	else
		root["video/download/motrix-output"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./registry/lib/plugins/video/download/motrix-output/index.ts":
/*!********************************************************************!*\
  !*** ./registry/lib/plugins/video/download/motrix-output/index.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"plugin\": function() { return /* binding */ plugin; }\n/* harmony export */ });\n/* harmony import */ var _core_toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/toast */ \"@/core/toast\");\n/* harmony import */ var _core_toast__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_toast__WEBPACK_IMPORTED_MODULE_0__);\n\nconst plugin = {\n  name: 'downloadVideo.outputs.motrix',\n  displayName: '下载视频 - Motrix 输出支持',\n  description: '为下载视频增加 Motrix 输出支持.',\n  setup: ({\n    addData\n  }) => {\n    addData('downloadVideo.outputs', outputs => {\n      outputs.push({\n        name: 'motrix',\n        displayName: 'Motrix',\n        description: '调用 Motrix 下载.',\n        runAction: async action => {\n          const fragments = action.infos.flatMap(it => it.titledFragments);\n\n          try {\n            const params = new URLSearchParams({\n              uris: fragments.map(f => f.url).join('\\n'),\n              referer: document.URL.replace(window.location.search, '')\n            });\n            window.open(`motrix://new-task?${params.toString()}`, '_self');\n          } catch (error) {\n            _core_toast__WEBPACK_IMPORTED_MODULE_0__.Toast.error(String(error), '发生错误');\n          }\n        }\n      });\n    });\n  },\n  commitHash: \"15d25ec78ef6db595aa6488f7403236a1bd3fc10\",\n  coreVersion: \"2.1.8\"\n};\n\n//# sourceURL=webpack://%5Bname%5D/./registry/lib/plugins/video/download/motrix-output/index.ts?");

/***/ }),

/***/ "@/core/toast":
/*!*************************************!*\
  !*** external ["coreApis","toast"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = coreApis.toast;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./registry/lib/plugins/video/download/motrix-output/index.ts");
/******/ 	__webpack_exports__ = __webpack_exports__.plugin;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});