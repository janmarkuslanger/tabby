(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Tabs"] = factory();
	else
		root["Tabs"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n/**\r\n  * Tabs js\r\n  *\r\n  * @author Jan-Markus Langer\r\n  */\n\nvar killActiveTab = function killActiveTab(tabContainer) {\n  // get the active items\n  var activeBar = tabContainer.querySelector('[data-tabs-item][data-tabs-active]');\n  var activeItem = tabContainer.querySelector('[data-tabs-content][data-tabs-active]');\n\n  // if there is an active bar item remove the attribute\n  if (activeBar) {\n    activeBar.removeAttribute('data-tabs-active');\n  }\n\n  // if there is an active content item renove the attribute\n  if (activeItem) {\n    activeItem.removeAttribute('data-tabs-active');\n  }\n};\n\nvar showTab = function showTab(item, tabContainer) {\n  // kill the active tab\n  killActiveTab(tabContainer);\n\n  // set active to the bar and content item\n  item.setAttribute('data-tabs-active', '');\n  tabContainer.querySelector('[data-tabs-content=\"' + item.getAttribute('data-tabs-item') + '\"]').setAttribute('data-tabs-active', '');\n};\n\nvar initTabs = function initTabs(tabContainer) {\n  // get the bar items\n  var barItems = [].slice.call(tabContainer.querySelectorAll('[data-tabs-item]'));\n\n  barItems.forEach(function (item) {\n    // add event listener\n    item.addEventListener('click', function () {\n      // the item is already set to active\n      if (item.getAttribute('data-tabs-active') !== null) {\n        return;\n      }\n\n      // ativate the tab\n      showTab(item, tabContainer);\n    });\n  });\n};\n\nvar init = exports.init = function init() {\n  // if there is no tabContainer to handle just return\n  if (!document.querySelector('[data-tabs]')) {\n    return;\n  }\n\n  // get all the tabContainer in DOM\n  var tabsContainer = [].slice.call(document.querySelectorAll('[data-tabs]'));\n\n  // init them\n  tabsContainer.forEach(function (tabContainer) {\n    initTabs(tabContainer);\n  });\n};\n\n//# sourceURL=webpack://Tabs/./src/index.js?");

/***/ })

/******/ });
});