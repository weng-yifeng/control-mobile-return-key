/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controlreturnkey_module__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controlreturnkey_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__controlreturnkey_module__);



document.getElementById('radio_container').addEventListener('click', function (e) {

	if (e.target.value === 'customEvent') {
		
		// 自定义事件
		__WEBPACK_IMPORTED_MODULE_0__controlreturnkey_module___default.a.customEvent(function () {
			alert("I am custom event. 我是自定义事件");
			e.target.checked = false;
		});

	} else if (e.target.value === 'defaultEvent') {
		
		// 还原默认行为
		__WEBPACK_IMPORTED_MODULE_0__controlreturnkey_module___default.a.defaultEvent();
	}

});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
* author: wengyifeng（翁艺逢）
* email: wengyifeng.HL@gmail.com 
*/

// 回调封装
let callbackPack = null;

/*
* 0 - 默认事件
* 1 - 自定义事件
*/
let status = 0;


let controlReturnKey = {

	// 事件处理
	_event: function () {
		window.addEventListener('popstate', callbackPack);
	},

	// 还原默认事件（即原生的默认行为）
	defaultEvent: function () {

		if (status === 1) {
			status = 0;
			window.removeEventListener('popstate', callbackPack);
			window.history.back();
		}
	},

	// 自定义事件
	customEvent: function (callback) {

		// 先解绑
		window.removeEventListener('popstate', callbackPack);

		status = 1;
		callbackPack = function () {
			callback();
			status = 0;
		};
		window.history.pushState('currentPage', null, location.href);
		controlReturnKey._event();
	}
}

module.exports = controlReturnKey;




/***/ })
/******/ ]);