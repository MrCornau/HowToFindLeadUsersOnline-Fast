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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/ui.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/ui.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "* {\n  box-sizing: border-box;\n}\n\n/*  Typography */\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"https://rsms.me/inter/font-files/Inter-Regular.woff2?v=3.7\") format(\"woff2\"), url(\"https://rsms.me/inter/font-files/Inter-Regular.woff?v=3.7\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 500;\n  src: url(\"https://rsms.me/inter/font-files/Inter-Medium.woff2?v=3.7\") format(\"woff2\"), url(\"https://rsms.me/inter/font-files/Inter-Medium.woff2?v=3.7\") format(\"woff\");\n}\n@font-face {\n  font-family: \"Inter\";\n  font-style: normal;\n  font-weight: 600;\n  src: url(\"https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=3.7\") format(\"woff2\"), url(\"https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=3.7\") format(\"woff\");\n}\n.label {\n  display: flex;\n  align-items: center;\n  height: 32px;\n  padding: 8px 4px 8px 8px;\n  cursor: default;\n  color: rgba(0, 0, 0, 0.3);\n  background-color: #ffffff;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  height: 32px;\n  padding: 8px 4px 8px 8px;\n  cursor: default;\n  color: rgba(0, 0, 0, 0.8);\n  background-color: #ffffff;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n}\n.type--pos-small-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n}\n.type--pos-small-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n}\n.type--pos-small-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n}\n.type--pos-medium-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0;\n}\n.type--pos-medium-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0;\n}\n.type--pos-medium-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0;\n}\n.type--pos-large-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: -0.001em;\n}\n.type--pos-large-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: -0.001em;\n}\n.type--pos-large-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: -0.001em;\n}\n.type--pos-xlarge-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.001em;\n}\n.type--pos-xlarge-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.001em;\n}\n.type--pos-xlarge-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.001em;\n}\n.type--figma-black {\n  color: #000000;\n}\n.type--figma-black-3 {\n  color: rgba(0, 0, 0, 0.3);\n}\n.type--figma-black-8 {\n  color: rgba(0, 0, 0, 0.8);\n}\n.type--neg-small-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n}\n.type--neg-small-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n}\n.type--neg-small-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n}\n.type--neg-medium-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n}\n.type--neg-medium-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n}\n.type--neg-medium-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n}\n.type--neg-large-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: -0.001em;\n}\n.type--neg-large-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: -0.001em;\n}\n.type--neg-large-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: -0.001em;\n}\n.type--neg-xlarge-normal {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.001em;\n}\n.type--neg-xlarge-medium {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.001em;\n}\n.type--neg-xlarge-bold {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.001em;\n}\n.type--figma-white {\n  color: #ffffff;\n}\n.type--figma-white-4 {\n  color: rgba(255, 255, 255, 0.4);\n}\n.type--figma-white-8 {\n  color: rgba(255, 255, 255, 0.8);\n}\n.button {\n  display: inline-block;\n  flex-shrink: 0;\n  margin: 1px 0 1px 0;\n  padding: 5px 16px 5px 16px;\n  text-decoration: none;\n  border: 2px solid transparent;\n  border-radius: 6px;\n  outline: none;\n}\n.button--primary {\n  color: #ffffff;\n  background-color: #18a0fb;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n}\n.button--primary:enabled:active, .button--primary:enabled:focus {\n  border: 2px solid rgba(0, 0, 0, 0.3);\n}\n.button--primary:disabled {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.button--primary-destructive {\n  color: #ffffff;\n  background-color: #f24822;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n}\n.button--primary-destructive:enabled:active, .button--primary-destructive:enabled:focus {\n  border: 2px solid rgba(0, 0, 0, 0.3);\n}\n.button--primary-destructive:disabled {\n  opacity: 0.4;\n}\n.button--secondary {\n  color: rgba(0, 0, 0, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  background-color: #ffffff;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n}\n.button--secondary:enabled:active, .button--secondary:enabled:focus {\n  padding: 4px 15px 4px 15px;\n  border: 2px solid #18a0fb;\n}\n.button--secondary:disabled {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.3);\n}\n.button--secondary-destructive {\n  color: #f24822;\n  border: 1px solid #f24822;\n  background-color: #ffffff;\n  font-family: \"Inter\", sans-serif;\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n}\n.button--secondary-destructive:enabled:active, .button--secondary-destructive:enabled:focus {\n  padding: 4px 15px 4px 15px;\n  border: 2px solid #f24822;\n}\n.button--secondary-destructive:disabled {\n  opacity: 0.4;\n}\n.button--margin-right {\n  margin-right: 8px;\n}\n.input {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  position: relative;\n  display: flex;\n  overflow: visible;\n  align-items: center;\n  width: 100%;\n  height: 30px;\n  margin: 1px 0 1px 0;\n  padding: 8px 4px 8px 7px;\n  color: rgba(0, 0, 0, 0.8);\n  border: 1px solid transparent;\n  border-radius: 2px;\n  outline: none;\n  background-color: #ffffff;\n}\n.input:hover {\n  color: rgba(0, 0, 0, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.input::selection {\n  color: #000000;\n  background-color: rgba(24, 145, 251, 0.3);\n}\n.input::placeholder {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid transparent;\n}\n.input:not(:disabled):not(:hover):placeholder-shown {\n  border: 1px solid transparent;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAABCAYAAABJ5n7WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgSURBVHgB7cMBCQAACMTAiR3sX1TQHr+DK2B+I0lSjj29qAEYlIbeBgAAAABJRU5ErkJggg==\");\n  background-repeat: no-repeat;\n  background-position: center bottom -0.9px;\n  background-size: calc(100% - 10px) 1px;\n}\n.input:not(:disabled):focus:placeholder-shown {\n  border: 2px solid #18a0fb;\n}\n.input:not(:disabled):focus:not(:placeholder-shown) {\n  padding-left: 6px;\n}\n.input:disabled:hover {\n  border: 1px solid transparent;\n}\n.input:active, .input:focus {\n  padding: 8px 4px 8px 6px;\n  color: #000000;\n  border: 2px solid #18a0fb;\n  border-radius: 2px;\n}\n.input:disabled {\n  position: relative;\n  color: rgba(0, 0, 0, 0.3);\n}\n.input:disabled:active {\n  padding: 8px 4px 8px 7px;\n}\n.input-icon {\n  position: relative;\n  width: 100%;\n}\n.input-icon__icon {\n  position: absolute;\n  top: -1px;\n  left: 0;\n  width: 32px;\n  height: 32px;\n}\n.input-icon__input {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 30px;\n  margin: 1px 0 1px 0;\n  padding: 8px 4px 8px 0;\n  text-indent: 32px;\n  color: rgba(0, 0, 0, 0.8);\n  border: 1px solid transparent;\n  border-radius: 2px;\n  outline: none;\n  background-color: #ffffff;\n}\n.input-icon__input:hover {\n  color: rgba(0, 0, 0, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.input-icon__input:active, .input-icon__input:focus {\n  margin-left: -1px;\n  padding: 8px 4px 8px 0;\n  color: #000000;\n  border: 2px solid #18a0fb;\n  border-radius: 2px;\n}\n.input-icon__input::selection {\n  color: #000000;\n  background-color: rgba(24, 145, 251, 0.3);\n}\n.input-icon__input::placeholder {\n  color: rgba(0, 0, 0, 0.3);\n}\n.input-icon__input:not(:disabled):not(:hover):placeholder-shown {\n  border: 1px solid transparent;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAABCAYAAABJ5n7WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgSURBVHgB7cMBCQAACMTAiR3sX1TQHr+DK2B+I0lSjj29qAEYlIbeBgAAAABJRU5ErkJggg==\");\n  background-repeat: no-repeat;\n  background-position: center bottom -0.9px;\n  background-size: calc(100% - 10px) 1px;\n}\n.input-icon__input:not(:disabled):focus:placeholder-shown {\n  border: 2px solid #18a0fb;\n}\n.input-icon__input:not(:disabled):focus:not(:placeholder-shown) {\n  padding-left: 0;\n}\n.input-icon__input:disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n.input-icon__input:disabled:hover {\n  border: 1px solid transparent;\n}\n.textarea {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  width: calc(100% - 16px);\n  min-height: 62px;\n  margin: 1px 8px 1px 8px;\n  padding: 7px 7px 7px 7px;\n  resize: none;\n  color: rgba(0, 0, 0, 0.8);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  outline: none;\n  background-color: #ffffff;\n}\n.textarea:active, .textarea:focus {\n  padding: 6px 6px 6px 6px;\n  color: #000000;\n  border: 2px solid #18a0fb;\n  border-radius: 2px;\n}\n.textarea::selection {\n  color: #000000;\n  background-color: rgba(24, 145, 251, 0.3);\n}\n.textarea::placeholder {\n  color: rgba(0, 0, 0, 0.3);\n}\n.textarea:disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n.textarea:disabled:focus, .textarea:disabled:active {\n  padding: 7px 7px 7px 7px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.select-menu {\n  position: relative;\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  cursor: default;\n}\n.select-menu:disabled {\n  opacity: 0.3;\n}\n.select-menu__button {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  height: 30px;\n  margin: 1px 0 1px 0;\n  padding: 6px 0 6px 8px;\n  cursor: default;\n  color: rgba(0, 0, 0, 0.8);\n  border: 1px solid transparent;\n  border-radius: 2px;\n  background-color: #ffffff;\n}\n.select-menu__button:hover {\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.select-menu__button:hover span:after {\n  opacity: 0;\n}\n.select-menu__button:hover .select-menu__icon {\n  opacity: 1;\n}\n.select-menu__button:focus, .select-menu__button:active {\n  width: 100%;\n  padding: 5px 0 5px 7px;\n  border: 2px solid #18a0fb;\n  outline: none;\n}\n.select-menu__button:focus span:after, .select-menu__button:active span:after {\n  opacity: 0;\n}\n.select-menu__button:focus .select-menu__icon, .select-menu__button:active .select-menu__icon {\n  top: -1px;\n  right: -1px;\n  opacity: 1;\n}\n.select-menu__button--active:hover {\n  width: 100%;\n  padding: 5px 0 5px 7px;\n  border: 2px solid #18a0fb;\n  outline: none;\n}\n.select-menu__button-label {\n  display: inline-block;\n  text-align: left;\n}\n.select-menu__button-label:after {\n  display: inline-block;\n  width: 7px;\n  height: 5px;\n  margin-top: 6px;\n  margin-left: 4px;\n  content: \"\";\n  background-color: transparent;\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%225%22%20viewBox%3D%220%200%207%205%22%20width%3D%227%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m3%203.70711-3-3.000003.707107-.707107%202.646443%202.64645%202.64645-2.64645.70711.707107-3%203.000003-.35356.35355z%22%20fill%3D%22%23000%22%20fill-opacity%3D%22.3%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\");\n}\n.select-menu__icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30px;\n  height: 30px;\n  opacity: 0;\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20width%3D%2230%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m15%2016.7071-3-3%20.7071-.7071%202.6465%202.6464%202.6464-2.6464.7071.7071-3%203-.3535.3536z%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\");\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.select-menu__list {\n  position: absolute;\n  z-index: 2;\n  display: none;\n  flex-direction: column;\n  width: 100%;\n  margin: 0;\n  padding: 8px 0 8px 0;\n  border-radius: 2px;\n  background-color: #222222;\n  box-shadow: 0 5px 17px rgba(0, 0, 0, 0.2), 0 2px 7px rgba(0, 0, 0, 0.15);\n}\n.select-menu__list--active {\n  display: flex;\n}\n.select-menu__list-item {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 24px;\n  padding: 0 8px 0 4px;\n  color: #ffffff;\n}\n.select-menu__list-item--active .select-menu__list-item-icon {\n  opacity: 1 !important;\n}\n.select-menu__list-item:hover {\n  background-color: #18a0fb;\n}\n.select-menu__list-item-text {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 0 0 0 4px;\n}\n.select-menu__list-item-icon {\n  display: block;\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n  opacity: 0;\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m13.2069%205.20724-5.50002%205.49996-.70711.7072-.70711-.7072-3-2.99996%201.41422-1.41421%202.29289%202.29289%204.79293-4.79289z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\");\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.select-menu__divider {\n  margin: 0;\n}\n.select-menu__divider-line {\n  display: block;\n  height: 1px;\n  margin: 8px 0 7px;\n  background-color: rgba(255, 255, 255, 0.2);\n}\n.select-menu__divider-label {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  display: flex;\n  align-items: center;\n  height: 32px;\n  margin-top: 8px;\n  padding: 8px 8px 0 32px;\n  color: rgba(255, 255, 255, 0.4);\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n}\n.select-menu__divider-label--first {\n  height: 24px;\n  margin-top: 0;\n  padding: 0 8px 0 32px;\n  border-top: none;\n}\n.switch {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  height: 32px;\n  cursor: default;\n}\n.switch__toggle {\n  display: none;\n}\n.switch__toggle:checked + label:before {\n  background-color: #000000;\n}\n.switch__toggle:checked + label:after {\n  transform: translateX(14px);\n}\n.switch__toggle:disabled + label {\n  opacity: 0.3;\n}\n.switch__label {\n  display: flex;\n  width: 100%;\n  padding-left: 40px;\n  user-select: none;\n}\n.switch__label:before {\n  position: absolute;\n  top: 10px;\n  left: 6px;\n  display: block;\n  width: 24px;\n  height: 10px;\n  content: \"\";\n  transition: background-color 0 0.2s;\n  border: 1px solid #000000;\n  border-radius: 6px;\n  background-color: #ffffff;\n}\n.switch__label:after {\n  position: absolute;\n  top: 10px;\n  left: 6px;\n  display: block;\n  width: 10px;\n  height: 10px;\n  content: \"\";\n  transition: transform 0.2s;\n  border: 1px solid #000000;\n  border-radius: 50%;\n  background-color: white;\n}\n.checkbox {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  height: 32px;\n  cursor: default;\n}\n.checkbox__box {\n  display: none;\n}\n.checkbox__box:checked + label:before {\n  border: 1px solid #18a0fb;\n  background-color: #18a0fb;\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%227%22%20viewBox%3D%220%200%208%207%22%20width%3D%228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m1.17647%201.88236%201.88235%201.88236%203.76471-3.76472%201.17647%201.17648-4.94118%204.9412-3.05882-3.05884z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E\");\n  background-repeat: no-repeat;\n  background-position: 1px 2px;\n}\n.checkbox__box:disabled + label {\n  opacity: 0.3;\n}\n.checkbox__box:checked:disabled + label:before {\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.checkbox__label {\n  display: flex;\n  width: 100%;\n  user-select: none;\n}\n.checkbox__label:before {\n  display: block;\n  width: 10px;\n  height: 10px;\n  margin: 2px 10px 0 10px;\n  content: \"\";\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  border-radius: 2px;\n}\n.divider {\n  display: block;\n  width: 100%;\n  height: 1px;\n  margin: 8px 0 8px 0;\n  padding: 0;\n  background-color: #e5e5e5;\n}\n.visual-bell {\n  display: flex;\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 1;\n  width: 100%;\n  height: 36px;\n  padding: 0 16px 0 16px;\n  transition: all 0.3s ease-out;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  background-color: #222222;\n  box-shadow: 0 5px 17px rgba(0, 0, 0, 0.2), 0 2px 7px rgba(0, 0, 0, 0.15);\n}\n.visual-bell__msg {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: -0.001em;\n  display: block;\n  color: #ffffff;\n}\n.visual-bell__spinner-container {\n  display: none;\n  overflow: hidden;\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n  margin-left: -4px;\n}\n.visual-bell__spinner {\n  display: block;\n  width: 24px;\n  height: 24px;\n  animation: rotating 1s linear infinite;\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M4.848%209.74l.477.15-.477-.15zm2.622-3.08a.5.5%200%200%200-.617-.787l.617.787zm10.677%201.99a7%207%200%200%201%20.838%203.803l.998.065a8%208%200%200%200-.958-4.346l-.878.478zm.838%203.803a7%207%200%200%201-1.324%203.662l.81.588a8%208%200%200%200%201.513-4.186l-.998-.065zm-1.324%203.662a7%207%200%200%201-3.076%202.388l.37.93a8%208%200%200%200%203.515-2.729l-.81-.588zm-3.076%202.388a7%207%200%200%201-3.876.375l-.184.983a8%208%200%200%200%204.43-.428l-.37-.93zm-3.876.375a7%207%200%200%201-3.477-1.755l-.68.732a8%208%200%200%200%203.973%202.005l.184-.983zm-3.477-1.755a7%207%200%200%201-2.001-3.341l-.967.255a8%208%200%200%200%202.287%203.818l.68-.732zm-2-3.34a7%207%200%200%201%20.094-3.893l-.954-.3a8%208%200%200%200-.107%204.449l.967-.255zm.094-3.893c.323-1.024.863-1.835%201.326-2.394.23-.278.44-.49.6-.632l.175-.157.044-.037c.01-.008.01-.008-.298-.402l-.31-.393-.026.02-.06.05-.21.2c-.175.165-.413.407-.674.722-.52.627-1.137%201.55-1.5%202.73l.954.3z%22%20fill%3D%22%23a5a5a5%22%2F%3E%3C%2Fsvg%3E\");\n  background-repeat: none;\n}\n.visual-bell--loading .visual-bell__spinner-container {\n  display: block;\n}\n.visual-bell--hidden {\n  margin-top: 8px;\n  opacity: 0;\n}\n.visual-bell--error {\n  border: 1px solid #f24822;\n  background-color: #f24822;\n}\n@keyframes rotating {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n.onboarding-tip {\n  display: flex;\n  align-items: top;\n  flex-direction: row;\n  padding: 0 16px 0 0;\n  cursor: default;\n}\n.onboarding-tip__icon {\n  width: 32px;\n  height: 32px;\n  margin-right: 8px;\n}\n.onboarding-tip__msg {\n  padding: 8px 0 8px 0;\n  color: rgba(0, 0, 0, 0.8);\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n}\n.onboarding-tip__msg a:link, .onboarding-tip__msg a:hover, .onboarding-tip__msg a:active, .onboarding-tip__msg a:visited {\n  text-decoration: none;\n  color: #18a0fb;\n}\n.onboarding-tip--hidden {\n  display: none;\n}\n.onboarding-tip--light {\n  color: rgba(0, 0, 0, 0.3);\n}\n.onboarding-tip--pt5 {\n  padding-top: 8px;\n}\n.disclosure {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.disclosure__item {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid #e5e5e5;\n  background-color: #ffffff;\n}\n.disclosure__item:last-child {\n  border-bottom: 1px solid transparent;\n}\n.disclosure__label {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 32px;\n  padding: 0 8px 0 24px;\n  cursor: default;\n  user-select: none;\n  color: rgba(0, 0, 0, 0.8);\n}\n.disclosure__label:before {\n  position: absolute;\n  top: 8px;\n  left: 4px;\n  display: block;\n  width: 16px;\n  height: 16px;\n  content: \"\";\n  opacity: 0.3;\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m11%208-4-3v6z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E\");\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n.disclosure__label:hover:before {\n  opacity: 0.8;\n}\n.disclosure__content {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n  display: none;\n  padding: 8px 8px 8px 24px;\n  color: rgba(0, 0, 0, 0.8);\n}\n.disclosure--section .disclosure__label {\n  font-family: \"Inter\", sans-serif;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.005em;\n}\n.disclosure--expanded .disclosure__content {\n  display: block;\n  border-bottom: 1px solid transparent;\n}\n.disclosure--expanded .disclosure__label:before {\n  opacity: 0.8;\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m9%2010%203-4h-6z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E\");\n}\n.icon {\n  width: 32px;\n  height: 32px;\n  cursor: default;\n  color: #000000;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n}\n.icon--black-3 {\n  color: rgba(0, 0, 0, 0.3);\n  background-position: 0 -32px;\n}\n.icon--blue {\n  color: #18a0fb;\n  background-position: 0 -64px;\n}\n.icon--white {\n  color: #18a0fb;\n  background-position: 0 -96px;\n}\n.icon--button {\n  width: 32px;\n  height: 32px;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  outline: none;\n  background-position: -1px -1px;\n}\n.icon--button:hover {\n  background-color: rgba(0, 0, 0, 0.06);\n}\n.icon--button:active {\n  border: 1px solid #18a0fb;\n  background-color: rgba(0, 0, 0, 0.06);\n  box-shadow: inset 0 0 0 1px #18a0fb;\n}\n.icon--button:disabled {\n  opacity: 0.37;\n}\n.icon--selected {\n  color: #ffffff;\n  border: 1px solid transparent;\n  background-color: #18a0fb;\n  background-position: -1px -97px;\n}\n.icon--selected:hover {\n  color: #ffffff;\n  background-color: #18a0fb;\n}\n.icon--selected:active {\n  color: #ffffff;\n  background-color: #18a0fb;\n}\n.icon--text {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Inter\", sans-serif;\n  font-size: 11px;\n}\n.icon--adjust {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-rule='evenodd' fill-rule='evenodd'%3E%3Cg fill='%23000'%3E%3Cpath d='m12 16.05v-7.05h1v7.05c1.1411.2316 2 1.2405 2 2.45s-.8589 2.2184-2 2.45v2.05h-1v-2.05c-1.1411-.2316-2-1.2405-2-2.45s.8589-2.2184 2-2.45zm2 2.45c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5z' fill-opacity='.8'/%3E%3Cpath d='m19 23h1v-7.05c1.1411-.2316 2-1.2405 2-2.45s-.8589-2.2184-2-2.45v-2.05h-1v2.05c-1.1411.2316-2 1.2405-2 2.45s.8589 2.2184 2 2.45zm2-9.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5z' fill-opacity='.8'/%3E%3Cpath d='m12 48.05v-7.05h1v7.05c1.1411.2316 2 1.2405 2 2.45s-.8589 2.2184-2 2.45v2.05h-1v-2.05c-1.1411-.2316-2-1.2405-2-2.45s.8589-2.2184 2-2.45zm2 2.45c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5z' fill-opacity='.3'/%3E%3Cpath d='m19 55h1v-7.05c1.1411-.2316 2-1.2405 2-2.45s-.8589-2.2184-2-2.45v-2.05h-1v2.05c-1.1411.2316-2 1.2405-2 2.45s.8589 2.2184 2 2.45zm2-9.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5z' fill-opacity='.3'/%3E%3C/g%3E%3Cpath d='m12 80.05v-7.05h1v7.05c1.1411.2316 2 1.2405 2 2.45s-.8589 2.2184-2 2.45v2.05h-1v-2.05c-1.1411-.2316-2-1.2405-2-2.45s.8589-2.2184 2-2.45zm2 2.45c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5z' fill='%2318a0fb'/%3E%3Cpath d='m19 87h1v-7.05c1.1411-.2316 2-1.2405 2-2.45s-.8589-2.2184-2-2.45v-2.05h-1v2.05c-1.1411.2316-2 1.2405-2 2.45s.8589 2.2184 2 2.45zm2-9.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5z' fill='%2318a0fb'/%3E%3Cpath d='m12 112.05v-7.05h1v7.05c1.1411.232 2 1.241 2 2.45s-.8589 2.218-2 2.45v2.05h-1v-2.05c-1.1411-.232-2-1.241-2-2.45s.8589-2.218 2-2.45zm2 2.45c0 .828-.6716 1.5-1.5 1.5s-1.5-.672-1.5-1.5.6716-1.5 1.5-1.5 1.5.672 1.5 1.5z' fill='%23fff'/%3E%3Cpath d='m19 119h1v-7.05c1.1411-.232 2-1.241 2-2.45s-.8589-2.218-2-2.45v-2.05h-1v2.05c-1.1411.232-2 1.241-2 2.45s.8589 2.218 2 2.45zm2-9.5c0-.828-.6716-1.5-1.5-1.5s-1.5.672-1.5 1.5.6716 1.5 1.5 1.5 1.5-.672 1.5-1.5z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E\");\n}\n.icon--alert {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath clip-rule=\"evenodd\" d=\"m21.25 17.3929c0 .72.4349 1.3385 1.0563 1.6071.2127.0919.4473.1429.6937.1429v.8571h-14v-.8571c.24643 0 .48097-.051.69365-.1429.62145-.2686 1.05635-.8871 1.05635-1.6071v-3.3929c0-3.3137 2.3505-6 5.25-6s5.25 2.6863 5.25 6zm-1-3.3929v3.3929c0 .5999.1921 1.155.5182 1.6071h-9.5364c.3261-.4521.5182-1.0072.5182-1.6071v-3.3929c0-2.891 2.024-5 4.25-5s4.25 2.109 4.25 5z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16 23c-1.1046 0-2-.8954-2-2h-1c0 1.6569 1.3431 3 3 3s3-1.3431 3-3h-1c0 1.1046-.8954 2-2 2z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m21.25 49.3929c0 .72.4349 1.3385 1.0563 1.6071.2127.0919.4473.1429.6937.1429v.8571h-14v-.8571c.24643 0 .48097-.051.69365-.1429.62145-.2686 1.05635-.8871 1.05635-1.6071v-3.3929c0-3.3137 2.3505-6 5.25-6s5.25 2.6863 5.25 6zm-1-3.3929v3.3929c0 .5999.1921 1.155.5182 1.6071h-9.5364c.3261-.4521.5182-1.0072.5182-1.6071v-3.3929c0-2.891 2.024-5 4.25-5s4.25 2.109 4.25 5z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16 55c-1.1046 0-2-.8954-2-2h-1c0 1.6569 1.3431 3 3 3s3-1.3431 3-3h-1c0 1.1046-.8954 2-2 2z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath clip-rule=\"evenodd\" d=\"m21.25 81.3929c0 .72.4349 1.3385 1.0563 1.6071.2127.0919.4473.1429.6937.1429v.8571h-14v-.8571c.24643 0 .48097-.051.69365-.1429.62145-.2686 1.05635-.8871 1.05635-1.6071v-3.3929c0-3.3137 2.3505-6 5.25-6s5.25 2.6863 5.25 6zm-1-3.3929v3.3929c0 .5999.1921 1.155.5182 1.6071h-9.5364c.3261-.4521.5182-1.0072.5182-1.6071v-3.3929c0-2.891 2.024-5 4.25-5s4.25 2.109 4.25 5z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16 87c-1.1046 0-2-.8954-2-2h-1c0 1.6569 1.3431 3 3 3s3-1.3431 3-3h-1c0 1.1046-.8954 2-2 2z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m21.25 113.393c0 .72.4349 1.338 1.0563 1.607.2127.092.4473.143.6937.143v.857h-14v-.857c.24643 0 .48097-.051.69365-.143.62145-.269 1.05635-.887 1.05635-1.607v-3.393c0-3.314 2.3505-6 5.25-6s5.25 2.686 5.25 6zm-1-3.393v3.393c0 .6.1921 1.155.5182 1.607h-9.5364c.3261-.452.5182-1.007.5182-1.607v-3.393c0-2.891 2.024-5 4.25-5s4.25 2.109 4.25 5z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16 119c-1.1046 0-2-.895-2-2h-1c0 1.657 1.3431 3 3 3s3-1.343 3-3h-1c0 1.105-.8954 2-2 2z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--align-bottom {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m23 23h-15v-1h15z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15.5 19.2071-3.8536-3.8535.7072-.7072 2.6464 2.6465v-8.2929h1v8.2929l2.6464-2.6465.7072.7072z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m23 55h-15v-1h15z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m15.5 51.2071-3.8536-3.8535.7072-.7072 2.6464 2.6465v-8.2929h1v8.2929l2.6464-2.6465.7072.7072z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m23 87h-15v-1h15z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15.5 83.2071-3.8536-3.8535.7072-.7072 2.6464 2.6465v-8.2929h1v8.2929l2.6464-2.6465.7072.7072z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m23 119h-15v-1h15z\" fill=\"%23fff\"/%3E%3Cpath d=\"m15.5 115.207-3.8536-3.853.7072-.708 2.6464 2.647v-8.293h1v8.293l2.6464-2.647.7072.708z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--align-middle {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m15.5 13.7071-2.8536-2.8535.7072-.7072 1.6464 1.6465v-4.7929h1v4.7929l1.6464-1.6465.7072.7072z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m8 16v-1h15v1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15.5 17.2929 2.8536 2.8536-.7072.7071-1.6464-1.6465v4.7929h-1v-4.7929l-1.6464 1.6465-.7072-.7071z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15.5 45.7071-2.8536-2.8535.7072-.7072 1.6464 1.6465v-4.7929h1v4.7929l1.6464-1.6465.7072.7072z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m8 48v-1h15v1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m15.5 49.2929 2.8536 2.8536-.7072.7071-1.6464-1.6465v4.7929h-1v-4.7929l-1.6464 1.6465-.7072-.7071z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m15.5 77.7071-2.8536-2.8535.7072-.7072 1.6464 1.6465v-4.7929h1v4.7929l1.6464-1.6465.7072.7072z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m8 80v-1h15v1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15.5 81.2929 2.8536 2.8536-.7072.7071-1.6464-1.6465v4.7929h-1v-4.7929l-1.6464 1.6465-.7072-.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15.5 109.707-2.8536-2.853.7072-.708 1.6464 1.647v-4.793h1v4.793l1.6464-1.647.7072.708z\" fill=\"%23fff\"/%3E%3Cpath d=\"m8 112v-1h15v1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m15.5 113.293 2.8536 2.853-.7072.708-1.6464-1.647v4.793h-1v-4.793l-1.6464 1.647-.7072-.708z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--align-top {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m23 9h-15v1h15z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15.5 12.7929-3.8536 3.8535.7072.7072 2.6464-2.6465v8.2929h1v-8.2929l2.6464 2.6465.7072-.7072z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m23 41h-15v1h15z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m15.5 44.7929-3.8536 3.8535.7072.7072 2.6464-2.6465v8.2929h1v-8.2929l2.6464 2.6465.7072-.7072z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m23 73h-15v1h15z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15.5 76.7929-3.8536 3.8535.7072.7072 2.6464-2.6465v8.2929h1v-8.2929l2.6464 2.6465.7072-.7072z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m23 105h-15v1h15z\" fill=\"%23fff\"/%3E%3Cpath d=\"m15.5 108.793-3.8536 3.853.7072.708 2.6464-2.647v8.293h1v-8.293l2.6464 2.647.7072-.708z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--angle {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-rule='evenodd' fill-rule='evenodd'%3E%3Cpath d='m12 12v8h8v-1h-3c0-2.2091-1.7909-4-4-4v-3zm1 4v3h3c0-1.6569-1.3431-3-3-3z' fill='%23000' fill-opacity='.8'/%3E%3Cpath d='m12 44v8h8v-1h-3c0-2.2091-1.7909-4-4-4v-3zm1 4v3h3c0-1.6569-1.3431-3-3-3z' fill='%23000' fill-opacity='.3'/%3E%3Cpath d='m12 76v8h8v-1h-3c0-2.2091-1.7909-4-4-4v-3zm1 4v3h3c0-1.6569-1.3431-3-3-3z' fill='%2318a0fb'/%3E%3Cpath d='m12 108v8h8v-1h-3c0-2.209-1.7909-4-4-4v-3zm1 4v3h3c0-1.657-1.3431-3-3-3z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E\");\n}\n.icon--animated-fill {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m13.6667 13.0833v5.8334l5.25-2.9167z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m9 10c0-.55228.44772-1 1-1h12c.5523 0 1 .44772 1 1v12c0 .5523-.4477 1-1 1h-12c-.55228 0-1-.4477-1-1zm1 0h12v12h-12z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m13.6667 45.0833v5.8334l5.25-2.9167z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m9 42c0-.5523.44772-1 1-1h12c.5523 0 1 .4477 1 1v12c0 .5523-.4477 1-1 1h-12c-.55228 0-1-.4477-1-1zm1 0h12v12h-12z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m13.6667 77.0833v5.8334l5.25-2.9167z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m9 74c0-.5523.44772-1 1-1h12c.5523 0 1 .4477 1 1v12c0 .5523-.4477 1-1 1h-12c-.55228 0-1-.4477-1-1zm1 0h12v12h-12z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m13.6667 109.083v5.834l5.25-2.917z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m9 106c0-.552.44772-1 1-1h12c.5523 0 1 .448 1 1v12c0 .552-.4477 1-1 1h-12c-.55228 0-1-.448-1-1zm1 0h12v12h-12z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E');\n}\n.icon--arrow-left-right {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m12.2071 16.5 1.6464 1.6465-.7071.7071-2.8536-2.8536 2.8536-2.8535.7071.7071-1.6464 1.6464h7.5857l-1.6464-1.6464.7071-.7071 2.8536 2.8535-2.8536 2.8536-.7071-.7071 1.6464-1.6465z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12.2071 48.5 1.6464 1.6465-.7071.7071-2.8536-2.8536 2.8536-2.8535.7071.7071-1.6464 1.6464h7.5857l-1.6464-1.6464.7071-.7071 2.8536 2.8535-2.8536 2.8536-.7071-.7071 1.6464-1.6465z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12.2071 80.5 1.6464 1.6465-.7071.7071-2.8536-2.8536 2.8536-2.8535.7071.7071-1.6464 1.6464h7.5857l-1.6464-1.6464.7071-.7071 2.8536 2.8535-2.8536 2.8536-.7071-.7071 1.6464-1.6465z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12.2071 112.5 1.6464 1.646-.7071.708-2.8536-2.854 2.8536-2.854.7071.708-1.6464 1.646h7.5857l-1.6464-1.646.7071-.708 2.8536 2.854-2.8536 2.854-.7071-.708 1.6464-1.646z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--arrow-up-down {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m16.0005 10.2924 2.8536 2.8535-.7071.7071-1.6465-1.6464v7.5858l1.6465-1.6465.7071.7071-2.8536 2.8536-2.8535-2.8536.7071-.7071 1.6464 1.6465v-7.5858l-1.6464 1.6464-.7071-.7071z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16.0005 42.2924 2.8536 2.8535-.7071.7071-1.6465-1.6464v7.5858l1.6465-1.6465.7071.7071-2.8536 2.8536-2.8535-2.8536.7071-.7071 1.6464 1.6465v-7.5858l-1.6464 1.6464-.7071-.7071z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16.0005 74.2924 2.8536 2.8535-.7071.7071-1.6465-1.6464v7.5858l1.6465-1.6465.7071.7071-2.8536 2.8536-2.8535-2.8536.7071-.7071 1.6464 1.6465v-7.5858l-1.6464 1.6464-.7071-.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16.0005 106.292 2.8536 2.854-.7071.707-1.6465-1.646v7.585l1.6465-1.646.7071.707-2.8536 2.854-2.8535-2.854.7071-.707 1.6464 1.646v-7.585l-1.6464 1.646-.7071-.707z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--blend-empty {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m16.6948 11.7201c-.22-.229-.4511-.4681-.6932-.7185-.0005-.0005-.001-.0011-.0015-.0016l-.0005.0005c-.0003.0003-.0007.0007-.001.001-.2421.2505-.4732.4896-.6933.7185-2.2035 2.2924-3.3053 3.5739-3.3053 5.1319-.0025 1.0624.3881 2.1256 1.1717 2.9361 1.562 1.616 4.0947 1.616 5.6567 0 .7836-.8105 1.1741-1.8737 1.1716-2.9361 0-1.558-1.1017-2.8395-3.3052-5.1318zm-.6947.7203c-.9766 1.0166-1.6934 1.7905-2.1953 2.4708-.5998.8133-.8048 1.38-.8048 1.9407v.0023c-.0019.8178.2984 1.6262.8907 2.2388 1.1689 1.2093 3.0498 1.2093 4.2188 0 .5921-.6126.8924-1.4209.8905-2.2387v-.0024c0-.5607-.205-1.1274-.8048-1.9407-.5018-.6803-1.2187-1.4542-2.1951-2.4708z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16.6948 43.7201c-.22-.229-.4511-.4681-.6932-.7185-.0005-.0005-.001-.0011-.0015-.0016l-.0005.0005c-.0003.0003-.0007.0007-.001.001-.2421.2505-.4732.4896-.6933.7185-2.2035 2.2924-3.3053 3.5739-3.3053 5.1319-.0025 1.0624.3881 2.1256 1.1717 2.9361 1.562 1.616 4.0947 1.616 5.6567 0 .7836-.8105 1.1741-1.8737 1.1716-2.9361 0-1.558-1.1017-2.8395-3.3052-5.1318zm-.6947.7203c-.9766 1.0166-1.6934 1.7905-2.1953 2.4708-.5998.8133-.8048 1.38-.8048 1.9407v.0023c-.0019.8178.2984 1.6262.8907 2.2388 1.1689 1.2093 3.0498 1.2093 4.2188 0 .5921-.6126.8924-1.4209.8905-2.2387v-.0024c0-.5607-.205-1.1274-.8048-1.9407-.5018-.6803-1.2187-1.4542-2.1951-2.4708z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16.6948 75.7201c-.22-.229-.4511-.4681-.6932-.7185-.0005-.0005-.001-.0011-.0015-.0016l-.0005.0005c-.0003.0003-.0007.0007-.001.001-.2421.2505-.4732.4896-.6933.7185-2.2035 2.2924-3.3053 3.5739-3.3053 5.1319-.0025 1.0624.3881 2.1256 1.1717 2.9361 1.562 1.616 4.0947 1.616 5.6567 0 .7836-.8105 1.1741-1.8737 1.1716-2.9361 0-1.558-1.1017-2.8395-3.3052-5.1318zm-.6947.7203c-.9766 1.0166-1.6934 1.7905-2.1953 2.4708-.5998.8133-.8048 1.38-.8048 1.9407v.0023c-.0019.8178.2984 1.6262.8907 2.2388 1.1689 1.2093 3.0498 1.2093 4.2188 0 .5921-.6126.8924-1.4209.8905-2.2387v-.0024c0-.5607-.205-1.1274-.8048-1.9407-.5018-.6803-1.2187-1.4542-2.1951-2.4708z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16.6948 107.72c-.22-.229-.4511-.468-.6932-.718-.0005-.001-.001-.001-.0015-.002h-.0005c-.0003.001-.0007.001-.001.002-.2421.25-.4732.489-.6933.718-2.2035 2.292-3.3053 3.574-3.3053 5.132-.0025 1.062.3881 2.125 1.1717 2.936 1.562 1.616 4.0947 1.616 5.6567 0 .7836-.811 1.1741-1.874 1.1716-2.936 0-1.558-1.1017-2.84-3.3052-5.132zm-.6947.72c-.9766 1.017-1.6934 1.791-2.1953 2.471-.5998.813-.8048 1.38-.8048 1.941v.002c-.0019.818.2984 1.626.8907 2.239 1.1689 1.209 3.0498 1.209 4.2188 0 .5921-.613.8924-1.421.8905-2.239v-.002c0-.561-.205-1.128-.8048-1.941-.5018-.68-1.2187-1.454-2.1951-2.471z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--blend {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m16.0016 11.0016c.2421.2504.4732.4895.6932.7185 2.2035 2.2923 3.3052 3.5738 3.3052 5.1318.0025 1.0624-.388 2.1256-1.1716 2.9361-1.562 1.616-4.0947 1.616-5.6567 0-.7836-.8105-1.1742-1.8737-1.1717-2.9361 0-1.558 1.1018-2.8395 3.3053-5.1318.2201-.229.4512-.4681.6933-.7186l.001-.001zm-2.1968 3.9096c.5019-.6803 1.2187-1.4542 2.1953-2.4708.9764 1.0166 1.6933 1.7905 2.1951 2.4708.5998.8133.8048 1.38.8048 1.9407v.0024c.0001.0486-.0008.0972-.0029.1457h-5.9942c-.002-.0485-.003-.0971-.0029-.1458v-.0023c0-.5607.205-1.1274.8048-1.9407z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16.0016 43.0016c.2421.2504.4732.4895.6932.7185 2.2035 2.2923 3.3052 3.5738 3.3052 5.1318.0025 1.0624-.388 2.1256-1.1716 2.9361-1.562 1.616-4.0947 1.616-5.6567 0-.7836-.8105-1.1742-1.8737-1.1717-2.9361 0-1.558 1.1018-2.8395 3.3053-5.1318.2201-.229.4512-.4681.6933-.7186l.001-.001zm-2.1968 3.9096c.5019-.6803 1.2187-1.4542 2.1953-2.4708.9764 1.0166 1.6933 1.7905 2.1951 2.4708.5998.8133.8048 1.38.8048 1.9407v.0024c.0001.0486-.0008.0972-.0029.1457h-5.9942c-.002-.0485-.003-.0971-.0029-.1458v-.0023c0-.5607.205-1.1274.8048-1.9407z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16.0016 75.0016c.2421.2504.4732.4895.6932.7185 2.2035 2.2923 3.3052 3.5738 3.3052 5.1318.0025 1.0624-.388 2.1256-1.1716 2.9361-1.562 1.616-4.0947 1.616-5.6567 0-.7836-.8105-1.1742-1.8737-1.1717-2.9361 0-1.558 1.1018-2.8395 3.3053-5.1318.2201-.229.4512-.4681.6933-.7186l.001-.001zm-2.1968 3.9096c.5019-.6803 1.2187-1.4542 2.1953-2.4708.9764 1.0166 1.6933 1.7905 2.1951 2.4708.5998.8133.8048 1.38.8048 1.9407v.0024c.0001.0486-.0008.0972-.0029.1457h-5.9942c-.002-.0485-.003-.0971-.0029-.1458v-.0023c0-.5607.205-1.1274.8048-1.9407z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16.0016 107.002c.2421.25.4732.489.6932.718 2.2035 2.292 3.3052 3.574 3.3052 5.132.0025 1.062-.388 2.125-1.1716 2.936-1.562 1.616-4.0947 1.616-5.6567 0-.7836-.811-1.1742-1.874-1.1717-2.936 0-1.558 1.1018-2.84 3.3053-5.132.2201-.229.4512-.468.6933-.718l.001-.002zm-2.1968 3.909c.5019-.68 1.2187-1.454 2.1953-2.471.9764 1.017 1.6933 1.791 2.1951 2.471.5998.813.8048 1.38.8048 1.941v.002c.0001.049-.0008.097-.0029.146h-5.9942c-.002-.049-.003-.097-.0029-.146v-.002c0-.561.205-1.128.8048-1.941z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--break {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='.8' opacity='.9'%3E%3Cpath d='m13.0002 9v3h1v-3z'/%3E%3Cpath d='m22.1033 9.89644c-1.1617-1.16176-3.0453-1.16176-4.2071.00002l-2.7499 2.74994.7071.7071 2.7499-2.7499c.7712-.77128 2.0217-.77129 2.7929 0 .7712.7712.7713 2.0216 0 2.7928l-2.7499 2.75.7071.7071 2.7499-2.75c1.1618-1.1617 1.1618-3.0453 0-4.20706z'/%3E%3Cpath d='m9.89639 22.1035c-1.16176-1.1617-1.16177-3.0453-.00001-4.2071l2.75002-2.75.7071.7071-2.75 2.75c-.77124.7713-.77124 2.0217 0 2.7929.7712.7713 2.0216.7713 2.7929 0l2.75-2.75.7071.7071-2.75 2.75c-1.1618 1.1618-3.0454 1.1618-4.20711 0z'/%3E%3Cpath d='m22.9998 19h-3v-1h3z'/%3E%3Cpath d='m19.0004 20v3h-1v-3z'/%3E%3Cpath d='m11.9998 13h-3.00004v1h3.00004z'/%3E%3C/g%3E%3Cg fill='%23000' fill-opacity='.3' opacity='.9'%3E%3Cpath d='m13.0002 41v3h1v-3z'/%3E%3Cpath d='m22.1033 41.8964c-1.1617-1.1617-3.0453-1.1617-4.2071.0001l-2.7499 2.7499.7071.7071 2.7499-2.7499c.7712-.7713 2.0217-.7713 2.7929 0 .7712.7712.7713 2.0216 0 2.7928l-2.7499 2.75.7071.7071 2.7499-2.75c1.1618-1.1617 1.1618-3.0453 0-4.2071z'/%3E%3Cpath d='m9.89639 54.1035c-1.16176-1.1617-1.16177-3.0453-.00001-4.2071l2.75002-2.75.7071.7071-2.75 2.75c-.77124.7713-.77124 2.0217 0 2.7929.7712.7713 2.0216.7713 2.7929 0l2.75-2.75.7071.7071-2.75 2.75c-1.1618 1.1618-3.0454 1.1618-4.20711 0z'/%3E%3Cpath d='m22.9998 51h-3v-1h3z'/%3E%3Cpath d='m19.0004 52v3h-1v-3z'/%3E%3Cpath d='m11.9998 45h-3.00004v1h3.00004z'/%3E%3C/g%3E%3Cg fill='%2318a0fb' opacity='.9'%3E%3Cpath d='m13.0002 73v3h1v-3z'/%3E%3Cpath d='m22.1033 73.8964c-1.1617-1.1617-3.0453-1.1617-4.2071.0001l-2.7499 2.7499.7071.7071 2.7499-2.7499c.7712-.7713 2.0217-.7713 2.7929 0 .7712.7712.7713 2.0216 0 2.7928l-2.7499 2.75.7071.7071 2.7499-2.75c1.1618-1.1617 1.1618-3.0453 0-4.2071z'/%3E%3Cpath d='m9.89639 86.1035c-1.16176-1.1617-1.16177-3.0453-.00001-4.2071l2.75002-2.75.7071.7071-2.75 2.75c-.77124.7713-.77124 2.0217 0 2.7929.7712.7713 2.0216.7713 2.7929 0l2.75-2.75.7071.7071-2.75 2.75c-1.1618 1.1618-3.0454 1.1618-4.20711 0z'/%3E%3Cpath d='m22.9998 83h-3v-1h3z'/%3E%3Cpath d='m19.0004 84v3h-1v-3z'/%3E%3Cpath d='m11.9998 77h-3.00004v1h3.00004z'/%3E%3C/g%3E%3Cg fill='%23fff' opacity='.9'%3E%3Cpath d='m13.0002 105v3h1v-3z'/%3E%3Cpath d='m22.1033 105.896c-1.1617-1.161-3.0453-1.161-4.2071 0l-2.7499 2.75.7071.708 2.7499-2.75c.7712-.772 2.0217-.772 2.7929 0 .7712.771.7713 2.021 0 2.792l-2.7499 2.75.7071.708 2.7499-2.75c1.1618-1.162 1.1618-3.046 0-4.208z'/%3E%3Cpath d='m9.89639 118.104c-1.16176-1.162-1.16177-3.046-.00001-4.208l2.75002-2.75.7071.708-2.75 2.75c-.77124.771-.77124 2.021 0 2.792.7712.772 2.0216.772 2.7929 0l2.75-2.75.7071.708-2.75 2.75c-1.1618 1.161-3.0454 1.161-4.20711 0z'/%3E%3Cpath d='m22.9998 115h-3v-1h3z'/%3E%3Cpath d='m19.0004 116v3h-1v-3z'/%3E%3Cpath d='m11.9998 109h-3.00004v1h3.00004z'/%3E%3C/g%3E%3C/svg%3E\");\n}\n.icon--close {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m16 15.293 4.6465-4.6464.7071.7071-4.6465 4.6464 4.6465 4.6465-.7071.7071-4.6465-4.6464-4.6464 4.6464-.7071-.7071 4.6464-4.6465-4.6464-4.6463.7071-.7071z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16 47.293 4.6465-4.6464.7071.7071-4.6465 4.6464 4.6465 4.6465-.7071.7071-4.6465-4.6464-4.6464 4.6464-.7071-.7071 4.6464-4.6465-4.6464-4.6463.7071-.7071z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16 79.293 4.6465-4.6464.7071.7071-4.6465 4.6464 4.6465 4.6465-.7071.7071-4.6465-4.6464-4.6464 4.6464-.7071-.7071 4.6464-4.6465-4.6464-4.6463.7071-.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16 111.293 4.6465-4.646.7071.707-4.6465 4.646 4.6465 4.647-.7071.707-4.6465-4.647-4.6464 4.647-.7071-.707 4.6464-4.647-4.6464-4.646.7071-.707z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--comment {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m8 23 5.812-.7664c.9562.4899 2.0398.7664 3.188.7664 3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7c0 .945.1872 1.8462.5266 2.6686zm3.6399-4.2552-.1889-.4577c-.2903-.7035-.451-1.4753-.451-2.2871 0-3.3137 2.6863-6 6-6s6 2.6863 6 6-2.6863 6-6 6c-.986 0-1.9136-.237-2.7319-.6564l-.2776-.1422-4.09891.5405z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m8 55 5.812-.7664c.9562.4899 2.0398.7664 3.188.7664 3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7c0 .945.1872 1.8462.5266 2.6686zm3.6399-4.2552-.1889-.4577c-.2903-.7035-.451-1.4753-.451-2.2871 0-3.3137 2.6863-6 6-6s6 2.6863 6 6-2.6863 6-6 6c-.986 0-1.9136-.237-2.7319-.6564l-.2776-.1422-4.09891.5405z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m8 87 5.812-.7664c.9562.4899 2.0398.7664 3.188.7664 3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7c0 .945.1872 1.8462.5266 2.6686zm3.6399-4.2552-.1889-.4577c-.2903-.7035-.451-1.4753-.451-2.2871 0-3.3137 2.6863-6 6-6s6 2.6863 6 6-2.6863 6-6 6c-.986 0-1.9136-.237-2.7319-.6564l-.2776-.1422-4.09891.5405z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m8 119 5.812-.766c.9562.49 2.0398.766 3.188.766 3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7c0 .945.1872 1.846.5266 2.669zm3.6399-4.255-.1889-.458c-.2903-.703-.451-1.475-.451-2.287 0-3.314 2.6863-6 6-6s6 2.686 6 6-2.6863 6-6 6c-.986 0-1.9136-.237-2.7319-.656l-.2776-.143-4.09891.541z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--component {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m12.0625 10.9375 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.52329z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12.0625 21.0625 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m7 16 3.9375-3.9375 3.9375 3.9375-3.9375 3.9375zm3.9375 2.5233 2.5233-2.5233-2.5233-2.5233-2.52329 2.5233z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17.125 16 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12.0625 42.9375 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12.0625 53.0625 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m7 48 3.9375-3.9375 3.9375 3.9375-3.9375 3.9375zm3.9375 2.5233 2.5233-2.5233-2.5233-2.5233-2.52329 2.5233z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17.125 48 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m12.0625 74.9375 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12.0625 85.0625 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m7 80 3.9375-3.9375 3.9375 3.9375-3.9375 3.9375zm3.9375 2.5233 2.5233-2.5233-2.5233-2.5233-2.52329 2.5233z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17.125 80 3.9375 3.9375 3.9375-3.9375-3.9375-3.9375zm6.4608 0-2.5233 2.5233-2.5233-2.5233 2.5233-2.5233z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12.0625 106.938 3.9375 3.937 3.9375-3.937-3.9375-3.938zm6.4608 0-2.5233 2.523-2.5233-2.523 2.5233-2.524z\" fill=\"%23fff\"/%3E%3Cpath d=\"m12.0625 117.062 3.9375 3.938 3.9375-3.938-3.9375-3.937zm6.4608 0-2.5233 2.524-2.5233-2.524 2.5233-2.523z\" fill=\"%23fff\"/%3E%3Cpath d=\"m7 112 3.9375-3.938 3.9375 3.938-3.9375 3.938zm3.9375 2.523 2.5233-2.523-2.5233-2.523-2.52329 2.523z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17.125 112 3.9375 3.938 3.9375-3.938-3.9375-3.938zm6.4608 0-2.5233 2.523-2.5233-2.523 2.5233-2.523z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--corner-radius {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m21 13h-4c-2.2091 0-4 1.7909-4 4v4h-1v-4c0-2.7614 2.2386-5 5-5h4z' fill='%23000' fill-opacity='.8'/%3E%3Cpath d='m21 45h-4c-2.2091 0-4 1.7909-4 4v4h-1v-4c0-2.7614 2.2386-5 5-5h4z' fill='%23000' fill-opacity='.3'/%3E%3Cpath d='m21 77h-4c-2.2091 0-4 1.7909-4 4v4h-1v-4c0-2.7614 2.2386-5 5-5h4z' fill='%2318a0fb'/%3E%3Cpath d='m21 109h-4c-2.2091 0-4 1.791-4 4v4h-1v-4c0-2.761 2.2386-5 5-5h4z' fill='%23fff'/%3E%3C/svg%3E\");\n}\n.icon--corners {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='m11 11h3v1h-2v2h-1z' fill-opacity='.8'/%3E%3Cpath d='m18 11h3v3h-1v-2h-2z' fill-opacity='.8'/%3E%3Cpath d='m12 20v-2h-1v3h3v-1z' fill-opacity='.8'/%3E%3Cpath d='m21 18v3h-3v-1h2v-2z' fill-opacity='.8'/%3E%3Cpath d='m11 43h3v1h-2v2h-1z' fill-opacity='.3'/%3E%3Cpath d='m18 43h3v3h-1v-2h-2z' fill-opacity='.3'/%3E%3Cpath d='m12 52v-2h-1v3h3v-1z' fill-opacity='.3'/%3E%3Cpath d='m21 50v3h-3v-1h2v-2z' fill-opacity='.3'/%3E%3C/g%3E%3Cpath d='m11 75h3v1h-2v2h-1z' fill='%2318a0fb'/%3E%3Cpath d='m18 75h3v3h-1v-2h-2z' fill='%2318a0fb'/%3E%3Cpath d='m12 84v-2h-1v3h3v-1z' fill='%2318a0fb'/%3E%3Cpath d='m21 82v3h-3v-1h2v-2z' fill='%2318a0fb'/%3E%3Cpath d='m11 107h3v1h-2v2h-1z' fill='%23fff'/%3E%3Cpath d='m18 107h3v3h-1v-2h-2z' fill='%23fff'/%3E%3Cpath d='m12 116v-2h-1v3h3v-1z' fill='%23fff'/%3E%3Cpath d='m21 114v3h-3v-1h2v-2z' fill='%23fff'/%3E%3C/svg%3E\");\n}\n.icon--dist-horiz-spacing {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m11 22.5v-13h-1v13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 9.5v13h-1v-13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17 12.5v7h-2v-7z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m11 54.5v-13h-1v13z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22 41.5v13h-1v-13z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17 44.5v7h-2v-7z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m11 86.5v-13h-1v13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 73.5v13h-1v-13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17 76.5v7h-2v-7z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m11 118.5v-13h-1v13z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22 105.5v13h-1v-13z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17 108.5v7h-2v-7z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--dist-vert-spacing {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m9.5 10h13v1h-13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12.5 15h7v2h-7z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22.5 21h-13v1h13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9.5 42h13v1h-13z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12.5 47h7v2h-7z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22.5 53h-13v1h13z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m9.5 74h13v1h-13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12.5 79h7v2h-7z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22.5 85h-13v1h13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9.5 106h13v1h-13z\" fill=\"%23fff\"/%3E%3Cpath d=\"m12.5 111h7v2h-7z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22.5 117h-13v1h13z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--draft {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m10 9h7.7071l4.2929 4.2929v9.7071h-12zm1 1v12h10v-8h-4v-4zm7 .7071 2.2929 2.2929h-2.2929z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 41h7.7071l4.2929 4.2929v9.7071h-12zm1 1v12h10v-8h-4v-4zm7 .7071 2.2929 2.2929h-2.2929z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 73h7.7071l4.2929 4.2929v9.7071h-12zm1 1v12h10v-8h-4v-4zm7 .7071 2.2929 2.2929h-2.2929z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 105h7.7071l4.2929 4.293v9.707h-12zm1 1v12h10v-8h-4v-4zm7 .707 2.2929 2.293h-2.2929z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--effects {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m16.5 8.5h-1v3h1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m11.0503 10.3431-.7071.7072 2.1213 2.1213.7071-.7071z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m21.657 11.0503-.7071-.7071-2.1214 2.1213.7071.7071z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m8.5 15.5v1h3v-1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20.5 15.5v1h3v-1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m13.1716 19.5355-.7071-.7071-2.1213 2.1214.7071.7071z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19.5354 18.8284-.7071.7071 2.1213 2.1214.7071-.7071z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16.5 20.5h-1v3h1z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m18.4978 15.9979c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5zm-1 0c0 .8285-.6716 1.5-1.5 1.5s-1.5-.6715-1.5-1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16.5 40.5h-1v3h1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m11.0503 42.3431-.7071.7072 2.1213 2.1213.7071-.7071z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m21.657 43.0503-.7071-.7071-2.1214 2.1213.7071.7071z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m8.5 47.5v1h3v-1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20.5 47.5v1h3v-1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m13.1716 51.5355-.7071-.7071-2.1213 2.1214.7071.7071z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19.5354 50.8284-.7071.7071 2.1213 2.1214.7071-.7071z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16.5 52.5h-1v3h1z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m18.4978 47.9979c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5zm-1 0c0 .8285-.6716 1.5-1.5 1.5s-1.5-.6715-1.5-1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m16.5 72.5h-1v3h1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m11.0503 74.3431-.7071.7072 2.1213 2.1213.7071-.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m21.657 75.0503-.7071-.7071-2.1214 2.1213.7071.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m8.5 79.5v1h3v-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20.5 79.5v1h3v-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m13.1716 83.5355-.7071-.7071-2.1213 2.1214.7071.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19.5354 82.8284-.7071.7071 2.1213 2.1214.7071-.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16.5 84.5h-1v3h1z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m18.4978 79.9979c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5zm-1 0c0 .8285-.6716 1.5-1.5 1.5s-1.5-.6715-1.5-1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16.5 104.5h-1v3h1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m11.0503 106.343-.7071.707 2.1213 2.122.7071-.708z\" fill=\"%23fff\"/%3E%3Cpath d=\"m21.657 107.05-.7071-.707-2.1214 2.121.7071.708z\" fill=\"%23fff\"/%3E%3Cpath d=\"m8.5 111.5v1h3v-1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20.5 111.5v1h3v-1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m13.1716 115.536-.7071-.708-2.1213 2.122.7071.707z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19.5354 114.828-.7071.708 2.1213 2.121.7071-.707z\" fill=\"%23fff\"/%3E%3Cpath d=\"m16.5 116.5h-1v3h1z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m18.4978 111.998c0 1.381-1.1193 2.5-2.5 2.5s-2.5-1.119-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.119 2.5 2.5zm-1 0c0 .828-.6716 1.5-1.5 1.5s-1.5-.672-1.5-1.5c0-.829.6716-1.5 1.5-1.5s1.5.671 1.5 1.5z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E');\n}\n.icon--ellipses {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-rule='evenodd' fill-rule='evenodd'%3E%3Cpath d='m11.5 16c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5zm6 0c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5zm4.5 1.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5z' fill='%23000' fill-opacity='.8'/%3E%3Cpath d='m11.5 48c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5zm6 0c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5zm4.5 1.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5z' fill='%23000' fill-opacity='.3'/%3E%3Cpath d='m11.5 80c0 .8284-.6716 1.5-1.5 1.5-.82843 0-1.5-.6716-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.6716 1.5 1.5zm6 0c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5zm4.5 1.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5z' fill='%2318a0fb'/%3E%3Cpath d='m11.5 112c0 .828-.6716 1.5-1.5 1.5-.82843 0-1.5-.672-1.5-1.5s.67157-1.5 1.5-1.5c.8284 0 1.5.672 1.5 1.5zm6 0c0 .828-.6716 1.5-1.5 1.5s-1.5-.672-1.5-1.5.6716-1.5 1.5-1.5 1.5.672 1.5 1.5zm4.5 1.5c.8284 0 1.5-.672 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.672-1.5 1.5.6716 1.5 1.5 1.5z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E\");\n}\n.icon--eyedropper {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m22.4473 9.6c-.8-.8-2-.8-2.8 0l-2.8001 2.8-.8-.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.7.7-5.79995 5.8c-.4.4-1 1.9 0 2.9.99995 1 2.49995.4 2.89995 0l5.8-5.8.7001.7c.4.4 1 .4 1.4 0s.4-1 0-1.4l-.7-.7 2.8-2.8c.8-.9.8-2.1 0-2.9zm-10.9001 11.9h-1v-1l5.8-5.8 1 1c-.1 0-5.8 5.8-5.8 5.8z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22.4473 41.6c-.8-.8-2-.8-2.8 0l-2.8001 2.8-.8-.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.7.7-5.79995 5.8c-.4.4-1 1.9 0 2.9.99995 1 2.49995.4 2.89995 0l5.8-5.8.7001.7c.4.4 1 .4 1.4 0s.4-1 0-1.4l-.7-.7 2.8-2.8c.8-.9.8-2.1 0-2.9zm-10.9001 11.9h-1v-1l5.8-5.8 1 1c-.1 0-5.8 5.8-5.8 5.8z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22.4473 73.6c-.8-.8-2-.8-2.8 0l-2.8001 2.8-.8-.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.7.7-5.79995 5.8c-.4.4-1 1.9 0 2.9.99995 1 2.49995.4 2.89995 0l5.8-5.8.7001.7c.4.4 1 .4 1.4 0s.4-1 0-1.4l-.7-.7 2.8-2.8c.8-.9.8-2.1 0-2.9zm-10.9001 11.9h-1v-1l5.8-5.8 1 1c-.1 0-5.8 5.8-5.8 5.8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22.4473 105.6c-.8-.8-2-.8-2.8 0l-2.8001 2.8-.8-.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.7.7-5.79995 5.8c-.4.4-1 1.9 0 2.9.99995 1 2.49995.4 2.89995 0l5.8-5.8.7001.7c.4.4 1 .4 1.4 0s.4-1 0-1.4l-.7-.7 2.8-2.8c.8-.9.8-2.1 0-2.9zm-10.9001 11.9h-1v-1l5.8-5.8 1 1c-.1 0-5.8 5.8-5.8 5.8z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--frame {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m11 24v-3h-3v-1h3v-8h-3v-1h3v-3h1v3h8v-3h1v3h3v1h-3v8h3v1h-3v3h-1v-3h-8v3zm9-4v-8h-8v8z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m11 56v-3h-3v-1h3v-8h-3v-1h3v-3h1v3h8v-3h1v3h3v1h-3v8h3v1h-3v3h-1v-3h-8v3zm9-4v-8h-8v8z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m11 88v-3h-3v-1h3v-8h-3v-1h3v-3h1v3h8v-3h1v3h3v1h-3v8h3v1h-3v3h-1v-3h-8v3zm9-4v-8h-8v8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m11 120v-3h-3v-1h3v-8h-3v-1h3v-3h1v3h8v-3h1v3h3v1h-3v8h3v1h-3v3h-1v-3h-8v3zm9-4v-8h-8v8z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--group {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m17.4 9h-2.8v1h2.8z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20.9 22h1.1v-1.1h1v2.1h-2.1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 14.6v2.8h-1v-2.8z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 11.1v-1.1h-1.1v-1h2.1v2.1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 14.6v2.8h1v-2.8z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 11.1v-1.1h1.1v-1h-2.1v2.1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 20.9h1v1.1h1.1v1h-2.1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17.4 22h-2.8v1h2.8z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17.4 41h-2.8v1h2.8z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20.9 54h1.1v-1.1h1v2.1h-2.1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 46.6v2.8h-1v-2.8z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22 43.1v-1.1h-1.1v-1h2.1v2.1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22 46.6v2.8h1v-2.8z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 43.1v-1.1h1.1v-1h-2.1v2.1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9 52.9h1v1.1h1.1v1h-2.1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17.4 54h-2.8v1h2.8z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m17.4 73h-2.8v1h2.8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20.9 86h1.1v-1.1h1v2.1h-2.1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 78.6v2.8h-1v-2.8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 75.1v-1.1h-1.1v-1h2.1v2.1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 78.6v2.8h1v-2.8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 75.1v-1.1h1.1v-1h-2.1v2.1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 84.9h1v1.1h1.1v1h-2.1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17.4 86h-2.8v1h2.8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17.4 105h-2.8v1h2.8z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20.9 118h1.1v-1.1h1v2.1h-2.1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m10 110.6v2.8h-1v-2.8z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22 107.1v-1.1h-1.1v-1h2.1v2.1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22 110.6v2.8h1v-2.8z\" fill=\"%23fff\"/%3E%3Cpath d=\"m10 107.1v-1.1h1.1v-1h-2.1v2.1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9 116.9h1v1.1h1.1v1h-2.1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17.4 118h-2.8v1h2.8z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--hidden {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m21.5085 15.8012c.5554-.5276 1.0351-1.134 1.421-1.8012h-1.1842c-1.2655 1.8142-3.3673 3-5.7454 3-2.3782 0-4.48-1.1858-5.7454-3h-1.18428c.38597.6673.86567 1.2737 1.42108 1.8013l-1.59482 1.5949.70712.7071 1.6573-1.6574c.7108.5234 1.5112.9321 2.3742 1.1988l-.6171 2.2213.9636.2676.6262-2.2543c.452.0793.9172.1207 1.3921.1207.4748 0 .9399-.0414 1.392-.1207l.6261 2.2543.9636-.2676-.617-2.2213c.863-.2666 1.6635-.6754 2.3743-1.1989l1.6576 1.6575.7071-.7071z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m21.5085 47.8012c.5554-.5276 1.0351-1.134 1.421-1.8012h-1.1842c-1.2655 1.8142-3.3673 3-5.7454 3-2.3782 0-4.48-1.1858-5.7454-3h-1.18428c.38597.6673.86567 1.2737 1.42108 1.8013l-1.59482 1.5949.70712.7071 1.6573-1.6574c.7108.5234 1.5112.9321 2.3742 1.1988l-.6171 2.2213.9636.2676.6262-2.2543c.452.0793.9172.1207 1.3921.1207.4748 0 .9399-.0414 1.392-.1207l.6261 2.2543.9636-.2676-.617-2.2213c.863-.2666 1.6635-.6754 2.3743-1.1989l1.6576 1.6575.7071-.7071z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m21.5085 79.8012c.5554-.5276 1.0351-1.134 1.421-1.8012h-1.1842c-1.2655 1.8142-3.3673 3-5.7454 3-2.3782 0-4.48-1.1858-5.7454-3h-1.18428c.38597.6673.86567 1.2737 1.42108 1.8013l-1.59482 1.5949.70712.7071 1.6573-1.6574c.7108.5234 1.5112.9321 2.3742 1.1988l-.6171 2.2213.9636.2676.6262-2.2543c.452.0793.9172.1207 1.3921.1207.4748 0 .9399-.0414 1.392-.1207l.6261 2.2543.9636-.2676-.617-2.2213c.863-.2666 1.6635-.6754 2.3743-1.1989l1.6576 1.6575.7071-.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m21.5085 111.801c.5554-.527 1.0351-1.134 1.421-1.801h-1.1842c-1.2655 1.814-3.3673 3-5.7454 3-2.3782 0-4.48-1.186-5.7454-3h-1.18428c.38597.667.86567 1.274 1.42108 1.801l-1.59482 1.595.70712.707 1.6573-1.657c.7108.523 1.5112.932 2.3742 1.199l-.6171 2.221.9636.268.6262-2.255c.452.08.9172.121 1.3921.121.4748 0 .9399-.041 1.392-.121l.6261 2.255.9636-.268-.617-2.221c.863-.267 1.6635-.676 2.3743-1.199l1.6576 1.657.7071-.707z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--hyperlink {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m13.5 18c1.9593 0 3.6262-1.2522 4.2439-3h1.0491c-.653 2.3085-2.7754 4-5.293 4-3.0376 0-5.5-2.4624-5.5-5.5s2.4624-5.5 5.5-5.5c2.5176 0 4.64 1.6915 5.293 4h-1.0491c-.6177-1.7478-2.2846-3-4.2439-3-2.4853 0-4.5 2.0147-4.5 4.5s2.0147 4.5 4.5 4.5z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m18.5 23c2.4853 0 4.5-2.0147 4.5-4.5s-2.0147-4.5-4.5-4.5c-1.9593 0-3.6262 1.2522-4.2439 3h-1.0491c.653-2.3085 2.7754-4 5.293-4 3.0376 0 5.5 2.4624 5.5 5.5s-2.4624 5.5-5.5 5.5c-2.5176 0-4.64-1.6915-5.293-4h1.0491c.6177 1.7478 2.2846 3 4.2439 3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m13.5 50c1.9593 0 3.6262-1.2522 4.2439-3h1.0491c-.653 2.3085-2.7754 4-5.293 4-3.0376 0-5.5-2.4624-5.5-5.5s2.4624-5.5 5.5-5.5c2.5176 0 4.64 1.6915 5.293 4h-1.0491c-.6177-1.7478-2.2846-3-4.2439-3-2.4853 0-4.5 2.0147-4.5 4.5s2.0147 4.5 4.5 4.5z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m18.5 55c2.4853 0 4.5-2.0147 4.5-4.5s-2.0147-4.5-4.5-4.5c-1.9593 0-3.6262 1.2522-4.2439 3h-1.0491c.653-2.3085 2.7754-4 5.293-4 3.0376 0 5.5 2.4624 5.5 5.5s-2.4624 5.5-5.5 5.5c-2.5176 0-4.64-1.6915-5.293-4h1.0491c.6177 1.7478 2.2846 3 4.2439 3z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m13.5 82c1.9593 0 3.6262-1.2522 4.2439-3h1.0491c-.653 2.3085-2.7754 4-5.293 4-3.0376 0-5.5-2.4624-5.5-5.5s2.4624-5.5 5.5-5.5c2.5176 0 4.64 1.6915 5.293 4h-1.0491c-.6177-1.7478-2.2846-3-4.2439-3-2.4853 0-4.5 2.0147-4.5 4.5s2.0147 4.5 4.5 4.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m18.5 87c2.4853 0 4.5-2.0147 4.5-4.5s-2.0147-4.5-4.5-4.5c-1.9593 0-3.6262 1.2522-4.2439 3h-1.0491c.653-2.3085 2.7754-4 5.293-4 3.0376 0 5.5 2.4624 5.5 5.5s-2.4624 5.5-5.5 5.5c-2.5176 0-4.64-1.6915-5.293-4h1.0491c.6177 1.7478 2.2846 3 4.2439 3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m13.5 114c1.9593 0 3.6262-1.252 4.2439-3h1.0491c-.653 2.309-2.7754 4-5.293 4-3.0376 0-5.5-2.462-5.5-5.5s2.4624-5.5 5.5-5.5c2.5176 0 4.64 1.691 5.293 4h-1.0491c-.6177-1.748-2.2846-3-4.2439-3-2.4853 0-4.5 2.015-4.5 4.5s2.0147 4.5 4.5 4.5z\" fill=\"%23fff\"/%3E%3Cpath d=\"m18.5 119c2.4853 0 4.5-2.015 4.5-4.5s-2.0147-4.5-4.5-4.5c-1.9593 0-3.6262 1.252-4.2439 3h-1.0491c.653-2.309 2.7754-4 5.293-4 3.0376 0 5.5 2.462 5.5 5.5s-2.4624 5.5-5.5 5.5c-2.5176 0-4.64-1.691-5.293-4h1.0491c.6177 1.748 2.2846 3 4.2439 3z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--image {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m20.6667 13.6667c0 1.2886-1.0447 2.3333-2.3334 2.3333-1.2886 0-2.3333-1.0447-2.3333-2.3333 0-1.2887 1.0447-2.3334 2.3333-2.3334 1.2887 0 2.3334 1.0447 2.3334 2.3334zm-1 0c0 .7363-.597 1.3333-1.3334 1.3333-.7363 0-1.3333-.597-1.3333-1.3333 0-.7364.597-1.3334 1.3333-1.3334.7364 0 1.3334.597 1.3334 1.3334z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 9c-.55228 0-1 .44772-1 1v12c0 .5523.44772 1 1 1h12c.5523 0 1-.4477 1-1v-12c0-.55228-.4477-1-1-1zm12 1h-12v7.7929l3.0833-3.0833 7.2905 7.2904h1.6262zm-12 12v-2.7929l3.0833-3.0833 5.8763 5.8762z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20.6667 45.6667c0 1.2886-1.0447 2.3333-2.3334 2.3333-1.2886 0-2.3333-1.0447-2.3333-2.3333 0-1.2887 1.0447-2.3334 2.3333-2.3334 1.2887 0 2.3334 1.0447 2.3334 2.3334zm-1 0c0 .7363-.597 1.3333-1.3334 1.3333-.7363 0-1.3333-.597-1.3333-1.3333 0-.7364.597-1.3334 1.3333-1.3334.7364 0 1.3334.597 1.3334 1.3334z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 41c-.55228 0-1 .4477-1 1v12c0 .5523.44772 1 1 1h12c.5523 0 1-.4477 1-1v-12c0-.5523-.4477-1-1-1zm12 1h-12v7.7929l3.0833-3.0833 7.2905 7.2904h1.6262zm-12 12v-2.7929l3.0833-3.0833 5.8763 5.8762z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m20.6667 77.6667c0 1.2886-1.0447 2.3333-2.3334 2.3333-1.2886 0-2.3333-1.0447-2.3333-2.3333 0-1.2887 1.0447-2.3334 2.3333-2.3334 1.2887 0 2.3334 1.0447 2.3334 2.3334zm-1 0c0 .7363-.597 1.3333-1.3334 1.3333-.7363 0-1.3333-.597-1.3333-1.3333 0-.7364.597-1.3334 1.3333-1.3334.7364 0 1.3334.597 1.3334 1.3334z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 73c-.55228 0-1 .4477-1 1v12c0 .5523.44772 1 1 1h12c.5523 0 1-.4477 1-1v-12c0-.5523-.4477-1-1-1zm12 1h-12v7.7929l3.0833-3.0833 7.2905 7.2904h1.6262zm-12 12v-2.7929l3.0833-3.0833 5.8763 5.8762z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20.6667 109.667c0 1.288-1.0447 2.333-2.3334 2.333-1.2886 0-2.3333-1.045-2.3333-2.333 0-1.289 1.0447-2.334 2.3333-2.334 1.2887 0 2.3334 1.045 2.3334 2.334zm-1 0c0 .736-.597 1.333-1.3334 1.333-.7363 0-1.3333-.597-1.3333-1.333 0-.737.597-1.334 1.3333-1.334.7364 0 1.3334.597 1.3334 1.334z\" fill=\"%23fff\"/%3E%3Cpath d=\"m10 105c-.55228 0-1 .448-1 1v12c0 .552.44772 1 1 1h12c.5523 0 1-.448 1-1v-12c0-.552-.4477-1-1-1zm12 1h-12v7.793l3.0833-3.083 7.2905 7.29h1.6262zm-12 12v-2.793l3.0833-3.083 5.8763 5.876z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--import {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m23 23v-6h-1v5h-12v-12h5v-1h-6v14z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17 15c0-1.656.4715-2.8894 1.2911-3.7089.8195-.8196 2.0529-1.2911 3.7089-1.2911h1v-1h-1c-1.844 0-3.3606.52854-4.4161 1.5839-1.0554 1.0555-1.5839 2.5721-1.5839 4.4161v2.2929l-1.6464-1.6465-.7072.7072 2.8536 2.8535 2.8536-2.8535-.7072-.7072-1.6464 1.6465z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m23 55v-6h-1v5h-12v-12h5v-1h-6v14z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17 47c0-1.656.4715-2.8894 1.2911-3.7089.8195-.8196 2.0529-1.2911 3.7089-1.2911h1v-1h-1c-1.844 0-3.3606.5285-4.4161 1.5839-1.0554 1.0555-1.5839 2.5721-1.5839 4.4161v2.2929l-1.6464-1.6465-.7072.7072 2.8536 2.8535 2.8536-2.8535-.7072-.7072-1.6464 1.6465z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m23 87v-6h-1v5h-12v-12h5v-1h-6v14z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17 79c0-1.656.4715-2.8894 1.2911-3.7089.8195-.8196 2.0529-1.2911 3.7089-1.2911h1v-1h-1c-1.844 0-3.3606.5285-4.4161 1.5839-1.0554 1.0555-1.5839 2.5721-1.5839 4.4161v2.2929l-1.6464-1.6465-.7072.7072 2.8536 2.8535 2.8536-2.8535-.7072-.7072-1.6464 1.6465z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m23 119v-6h-1v5h-12v-12h5v-1h-6v14z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17 111c0-1.656.4715-2.889 1.2911-3.709.8195-.82 2.0529-1.291 3.7089-1.291h1v-1h-1c-1.844 0-3.3606.529-4.4161 1.584-1.0554 1.055-1.5839 2.572-1.5839 4.416v2.293l-1.6464-1.647-.7072.708 2.8536 2.853 2.8536-2.853-.7072-.708-1.6464 1.647z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--instance {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m7.00037 15.9999 8.99983-8.99999 8.9999 8.99999-8.9999 9.0001zm8.99983 7.6565 7.6564-7.6565-7.6564-7.65648-7.65634 7.65648z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m7.00037 47.9999 8.99983-9 8.9999 9-8.9999 9.0001zm8.99983 7.6565 7.6564-7.6565-7.6564-7.6565-7.65634 7.6565z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m7.00037 79.9999 8.99983-9 8.9999 9-8.9999 9.0001zm8.99983 7.6565 7.6564-7.6565-7.6564-7.6565-7.65634 7.6565z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m7.00037 112 8.99983-9 8.9999 9-8.9999 9zm8.99983 7.656 7.6564-7.656-7.6564-7.657-7.65634 7.657z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--layout-align-bottom {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m14.5 10v10h-2v-10z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22.5 22v1h-13v-1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19.5 20v-6h-2v6z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14.5 42v10h-2v-10z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22.5 54v1h-13v-1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19.5 52v-6h-2v6z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m14.5 74v10h-2v-10z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22.5 86v1h-13v-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19.5 84v-6h-2v6z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14.5 106v10h-2v-10z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22.5 118v1h-13v-1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19.5 116v-6h-2v6z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--layout-align-horiz-cent {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m16.5 9.5h-1v3h-5v2h5v3h-3v2h3v3h1v-3h3v-2h-3v-3h5v-2h-5z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16.5 41.5h-1v3h-5v2h5v3h-3v2h3v3h1v-3h3v-2h-3v-3h5v-2h-5z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16.5 73.5h-1v3h-5v2h5v3h-3v2h3v3h1v-3h3v-2h-3v-3h5v-2h-5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16.5 105.5h-1v3h-5v2h5v3h-3v2h3v3h1v-3h3v-2h-3v-3h5v-2h-5z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--layout-align-left {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m10 22.5h-1v-13h1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 14.5h-10v-2h10z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12 19.5h6v-2h-6z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 54.5h-1v-13h1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22 46.5h-10v-2h10z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12 51.5h6v-2h-6z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m10 86.5h-1v-13h1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 78.5h-10v-2h10z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12 83.5h6v-2h-6z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 118.5h-1v-13h1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22 110.5h-10v-2h10z\" fill=\"%23fff\"/%3E%3Cpath d=\"m12 115.5h6v-2h-6z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--layout-align-right {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m22 22.5h1v-13h-1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 14.5h10v-2h-10z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 19.5h-6v-2h6z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 54.5h1v-13h-1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 46.5h10v-2h-10z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 51.5h-6v-2h6z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m22 86.5h1v-13h-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 78.5h10v-2h-10z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 83.5h-6v-2h6z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 118.5h1v-13h-1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m10 110.5h10v-2h-10z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 115.5h-6v-2h6z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--layout-align-top {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m14.5 22v-10h-2v10z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22.5 10v-1h-13v1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19.5 12v6h-2v-6z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14.5 54v-10h-2v10z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22.5 42v-1h-13v1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19.5 44v6h-2v-6z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m14.5 86v-10h-2v10z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22.5 74v-1h-13v1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19.5 76v6h-2v-6z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14.5 118v-10h-2v10z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22.5 106v-1h-13v1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19.5 108v6h-2v-6z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--layout-align-vert-cent {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m12.5 15.5v-5h2v5h3v-3h2v3h3v1h-3v3h-2v-3h-3v5h-2v-5h-3v-1z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12.5 47.5v-5h2v5h3v-3h2v3h3v1h-3v3h-2v-3h-3v5h-2v-5h-3v-1z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12.5 79.5v-5h2v5h3v-3h2v3h3v1h-3v3h-2v-3h-3v5h-2v-5h-3v-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12.5 111.5v-5h2v5h3v-3h2v3h3v1h-3v3h-2v-3h-3v5h-2v-5h-3v-1z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--layout-grid-columns {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m9 9h3v14h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14.5 9h3v14h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 9h3v14h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 41h3v14h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m14.5 41h3v14h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 41h3v14h-3z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m9 73h3v14h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14.5 73h3v14h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 73h3v14h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 105h3v14h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m14.5 105h3v14h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 105h3v14h-3z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--layout-grid-rows {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m9 9h14v3h-14z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 14.5h14v3h-14z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 20h14v3h-14z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 41h14v3h-14z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9 46.5h14v3h-14z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9 52h14v3h-14z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m9 73h14v3h-14z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 78.5h14v3h-14z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 84h14v3h-14z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 105h14v3h-14z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9 110.5h14v3h-14z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9 116h14v3h-14z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--layout-grid-uniform {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m9 9h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 9h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14.5 9h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 14.5h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 14.5h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14.5 14.5h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 20h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 20h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14.5 20h3v3h-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 41h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 41h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m14.5 41h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9 46.5h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 46.5h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m14.5 46.5h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9 52h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 52h3v3h-3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m14.5 52h3v3h-3z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m9 73h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 73h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14.5 73h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 78.5h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 78.5h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14.5 78.5h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 84h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 84h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14.5 84h3v3h-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 105h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 105h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m14.5 105h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9 110.5h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 110.5h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m14.5 110.5h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9 116h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 116h3v3h-3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m14.5 116h3v3h-3z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--library {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m7 12.0898s.87687-2.0898 4.5-2.0898c2.0378 0 3.2069.6611 3.8398 1.2397.3516.3214.5378.6174.6154.7603h.0896c.0776-.1429.2638-.4389.6154-.7603.6329-.5786 1.802-1.2397 3.8398-1.2397 3.6231 0 4.5 2.0898 4.5 2.0898v8.9102h-1.4875c-2.3815-1.0176-4.408-.681-5.8864.1813-.3793.2213-.7148.4985-.995.8187h-1.2579c-.2803-.3225-.6164-.6017-.997-.8246-1.4773-.8654-3.006-1.1939-5.3887-.1754h-1.9875zm8.5.387h-.4192c-.0024.0011-.0024.0012-.0024.0013l.0006.0012.001.0024.0018.0042.0028.0065c.0015.0033.0023.0049.0022.0048-.0001-.0002-.0034-.0071-.0102-.0197-.0137-.0252-.0414-.0729-.0862-.1361-.0893-.126-.246-.313-.4955-.507-.4849-.3769-1.3904-.8344-2.9949-.8344s-2.50998.4575-2.99494.8344c-.24946.194-.4062.381-.49549.507l-.00957.0137v7.6449h.78741c1.21949-.4959 2.29809-.6896 3.30659-.6161 1.0638.0775 1.964.4462 2.7877.9287.2176.1275.4243.2702.6183.4266zm1 8.2688v-8.2688h.4192c.0024.0011.0024.0012.0024.0013l-.0006.0012-.001.0024-.0018.0042-.0028.0065-.0022.0047c.0001-.0002.0034-.007.0102-.0196.0137-.0252.0414-.0729.0862-.1361.0893-.126.246-.313.4955-.507.4849-.3769 1.3904-.8344 2.9949-.8344s2.51.4575 2.9949.8344c.2495.194.4062.381.4955.507l.0096.0137v7.6449h-.2884c-2.5969-1.0455-4.8842-.6771-6.5894.3176-.219.1278-.427.2709-.6222.428z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m7 44.0898s.87687-2.0898 4.5-2.0898c2.0378 0 3.2069.6611 3.8398 1.2397.3516.3214.5378.6174.6154.7603h.0896c.0776-.1429.2638-.4389.6154-.7603.6329-.5786 1.802-1.2397 3.8398-1.2397 3.6231 0 4.5 2.0898 4.5 2.0898v8.9102h-1.4875c-2.3815-1.0176-4.408-.681-5.8864.1813-.3793.2213-.7148.4985-.995.8187h-1.2579c-.2803-.3225-.6164-.6017-.997-.8246-1.4773-.8654-3.006-1.1939-5.3887-.1754h-1.9875zm8.5.387h-.4192c-.0024.0011-.0024.0012-.0024.0013l.0006.0012.001.0024.0018.0042.0028.0065c.0015.0033.0023.0049.0022.0048-.0001-.0002-.0034-.0071-.0102-.0197-.0137-.0252-.0414-.0729-.0862-.1361-.0893-.126-.246-.313-.4955-.507-.4849-.3769-1.3904-.8344-2.9949-.8344s-2.50998.4575-2.99494.8344c-.24946.194-.4062.381-.49549.507l-.00957.0137v7.6449h.78741c1.21949-.4959 2.29809-.6896 3.30659-.6161 1.0638.0775 1.964.4462 2.7877.9287.2176.1275.4243.2702.6183.4266zm1 8.2688v-8.2688h.4192c.0024.0011.0024.0012.0024.0013l-.0006.0012-.001.0024-.0018.0042-.0028.0065-.0022.0047c.0001-.0002.0034-.007.0102-.0196.0137-.0252.0414-.0729.0862-.1361.0893-.126.246-.313.4955-.507.4849-.3769 1.3904-.8344 2.9949-.8344s2.51.4575 2.9949.8344c.2495.194.4062.381.4955.507l.0096.0137v7.6449h-.2884c-2.5969-1.0455-4.8842-.6771-6.5894.3176-.219.1278-.427.2709-.6222.428z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m7 76.0898s.87687-2.0898 4.5-2.0898c2.0378 0 3.2069.6611 3.8398 1.2397.3516.3214.5378.6174.6154.7603h.0896c.0776-.1429.2638-.4389.6154-.7603.6329-.5786 1.802-1.2397 3.8398-1.2397 3.6231 0 4.5 2.0898 4.5 2.0898v8.9102h-1.4875c-2.3815-1.0176-4.408-.681-5.8864.1813-.3793.2213-.7148.4985-.995.8187h-1.2579c-.2803-.3225-.6164-.6017-.997-.8246-1.4773-.8654-3.006-1.1939-5.3887-.1754h-1.9875zm8.5.387h-.4192c-.0024.0011-.0024.0012-.0024.0013l.0006.0012.001.0024.0018.0042.0028.0065c.0015.0033.0023.0049.0022.0048-.0001-.0002-.0034-.0071-.0102-.0197-.0137-.0252-.0414-.0729-.0862-.1361-.0893-.126-.246-.313-.4955-.507-.4849-.3769-1.3904-.8344-2.9949-.8344s-2.50998.4575-2.99494.8344c-.24946.194-.4062.381-.49549.507l-.00957.0137v7.6449h.78741c1.21949-.4959 2.29809-.6896 3.30659-.6161 1.0638.0775 1.964.4462 2.7877.9287.2176.1275.4243.2702.6183.4266zm1 8.2688v-8.2688h.4192c.0024.0011.0024.0012.0024.0013l-.0006.0012-.001.0024-.0018.0042-.0028.0065-.0022.0047c.0001-.0002.0034-.007.0102-.0196.0137-.0252.0414-.0729.0862-.1361.0893-.126.246-.313.4955-.507.4849-.3769 1.3904-.8344 2.9949-.8344s2.51.4575 2.9949.8344c.2495.194.4062.381.4955.507l.0096.0137v7.6449h-.2884c-2.5969-1.0455-4.8842-.6771-6.5894.3176-.219.1278-.427.2709-.6222.428z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m7 108.09s.87687-2.09 4.5-2.09c2.0378 0 3.2069.661 3.8398 1.24.3516.321.5378.617.6154.76h.0896c.0776-.143.2638-.439.6154-.76.6329-.579 1.802-1.24 3.8398-1.24 3.6231 0 4.5 2.09 4.5 2.09v8.91h-1.4875c-2.3815-1.018-4.408-.681-5.8864.181-.3793.222-.7148.499-.995.819h-1.2579c-.2803-.322-.6164-.602-.997-.825-1.4773-.865-3.006-1.193-5.3887-.175h-1.9875zm8.5.387h-.4192c-.0024.001-.0024.001-.0024.001l.0006.001.001.003.0018.004.0028.006c.0015.004.0023.005.0022.005s-.0034-.007-.0102-.019c-.0137-.026-.0414-.073-.0862-.137-.0893-.126-.246-.313-.4955-.507-.4849-.377-1.3904-.834-2.9949-.834s-2.50998.457-2.99494.834c-.24946.194-.4062.381-.49549.507l-.00957.014v7.645h.78741c1.21949-.496 2.29809-.69 3.30659-.616 1.0638.077 1.964.446 2.7877.929.2176.127.4243.27.6183.426zm1 8.269v-8.269h.4192c.0024.001.0024.001.0024.001l-.0006.001-.001.003-.0018.004-.0028.006-.0022.005c.0001 0 .0034-.007.0102-.019.0137-.026.0414-.073.0862-.137.0893-.126.246-.313.4955-.507.4849-.377 1.3904-.834 2.9949-.834s2.51.457 2.9949.834c.2495.194.4062.381.4955.507l.0096.014v7.645h-.2884c-2.5969-1.045-4.8842-.677-6.5894.318-.219.127-.427.271-.6222.428z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--link-broken {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m18 14v-2c0-1.1046-.8954-2-2-2s-2 .8954-2 2v2h-1v-2c0-1.6569 1.3431-3 3-3s3 1.3431 3 3v2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19 18h-1v2c0 1.1046-.8954 2-2 2s-2-.8954-2-2v-2h-1v2c0 1.6569 1.3431 3 3 3s3-1.3431 3-3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m18 46v-2c0-1.1046-.8954-2-2-2s-2 .8954-2 2v2h-1v-2c0-1.6569 1.3431-3 3-3s3 1.3431 3 3v2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19 50h-1v2c0 1.1046-.8954 2-2 2s-2-.8954-2-2v-2h-1v2c0 1.6569 1.3431 3 3 3s3-1.3431 3-3z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m18 78v-2c0-1.1046-.8954-2-2-2s-2 .8954-2 2v2h-1v-2c0-1.6569 1.3431-3 3-3s3 1.3431 3 3v2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19 82h-1v2c0 1.1046-.8954 2-2 2s-2-.8954-2-2v-2h-1v2c0 1.6569 1.3431 3 3 3s3-1.3431 3-3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m18 110v-2c0-1.105-.8954-2-2-2s-2 .895-2 2v2h-1v-2c0-1.657 1.3431-3 3-3s3 1.343 3 3v2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19 114h-1v2c0 1.105-.8954 2-2 2s-2-.895-2-2v-2h-1v2c0 1.657 1.3431 3 3 3s3-1.343 3-3z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--link-connected {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000'%3E%3Cpath d='m16 10c1.1046 0 2 .8954 2 2v2h1v-2c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v2h1v-2c0-1.1046.8954-2 2-2z' fill-opacity='.8'/%3E%3Cpath d='m18 18h1v2c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3v-2h1v2c0 1.1046.8954 2 2 2s2-.8954 2-2z' fill-opacity='.8'/%3E%3Cpath d='m15.5 13v6h1v-6z' fill-opacity='.8'/%3E%3Cpath d='m16 42c1.1046 0 2 .8954 2 2v2h1v-2c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v2h1v-2c0-1.1046.8954-2 2-2z' fill-opacity='.3'/%3E%3Cpath d='m18 50h1v2c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3v-2h1v2c0 1.1046.8954 2 2 2s2-.8954 2-2z' fill-opacity='.3'/%3E%3Cpath d='m15.5 45v6h1v-6z' fill-opacity='.3'/%3E%3C/g%3E%3Cpath d='m16 74c1.1046 0 2 .8954 2 2v2h1v-2c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v2h1v-2c0-1.1046.8954-2 2-2z' fill='%2318a0fb'/%3E%3Cpath d='m18 82h1v2c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3v-2h1v2c0 1.1046.8954 2 2 2s2-.8954 2-2z' fill='%2318a0fb'/%3E%3Cpath d='m15.5 77v6h1v-6z' fill='%2318a0fb'/%3E%3Cpath d='m16 106c1.1046 0 2 .895 2 2v2h1v-2c0-1.657-1.3431-3-3-3s-3 1.343-3 3v2h1v-2c0-1.105.8954-2 2-2z' fill='%23fff'/%3E%3Cpath d='m18 114h1v2c0 1.657-1.3431 3-3 3s-3-1.343-3-3v-2h1v2c0 1.105.8954 2 2 2s2-.895 2-2z' fill='%23fff'/%3E%3Cpath d='m15.5 109v6h1v-6z' fill='%23fff'/%3E%3C/svg%3E\");\n}\n.icon--list-detailed {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m12 10h-2v1h2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12 20h-2v1h2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 15h2v1h-2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 10h-8v1h8z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14 20h8v1h-8z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 15h-8v1h8z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12 42h-2v1h2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12 52h-2v1h2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 47h2v1h-2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22 42h-8v1h8z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m14 52h8v1h-8z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22 47h-8v1h8z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m12 74h-2v1h2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12 84h-2v1h2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 79h2v1h-2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 74h-8v1h8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14 84h8v1h-8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 79h-8v1h8z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12 106h-2v1h2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m12 116h-2v1h2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m10 111h2v1h-2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22 106h-8v1h8z\" fill=\"%23fff\"/%3E%3Cpath d=\"m14 116h8v1h-8z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22 111h-8v1h8z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--list {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m23 10h-14v1h14z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 15.5h14v1h-14z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9 21h14v1h-14z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m23 42h-14v1h14z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9 47.5h14v1h-14z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9 53h14v1h-14z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m23 74h-14v1h14z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 79.5h14v1h-14z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9 85h14v1h-14z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m23 106h-14v1h14z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9 111.5h14v1h-14z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9 117h14v1h-14z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--lock-unlocked {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m18 15h.5c.2761 0 .5.2239.5.5v5c0 .2761-.2239.5-.5.5h-6c-.2761 0-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5h4.5v-2.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5v1.5h-1v-1.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m18 47h.5c.2761 0 .5.2239.5.5v5c0 .2761-.2239.5-.5.5h-6c-.2761 0-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5h4.5v-2.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5v1.5h-1v-1.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m18 79h.5c.2761 0 .5.2239.5.5v5c0 .2761-.2239.5-.5.5h-6c-.2761 0-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5h4.5v-2.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5v1.5h-1v-1.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m18 111h.5c.2761 0 .5.224.5.5v5c0 .276-.2239.5-.5.5h-6c-.2761 0-.5-.224-.5-.5v-5c0-.276.2239-.5.5-.5h4.5v-2.5c0-1.381 1.1193-2.5 2.5-2.5s2.5 1.119 2.5 2.5v1.5h-1v-1.5c0-.828-.6716-1.5-1.5-1.5s-1.5.672-1.5 1.5z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--lock {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m13.5 15v-1.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5v1.5h.5c.2761 0 .5.2239.5.5v5c0 .2761-.2239.5-.5.5h-6c-.2761 0-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5zm4-1.5v1.5h-3v-1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m13.5 47v-1.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5v1.5h.5c.2761 0 .5.2239.5.5v5c0 .2761-.2239.5-.5.5h-6c-.2761 0-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5zm4-1.5v1.5h-3v-1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m13.5 79v-1.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5v1.5h.5c.2761 0 .5.2239.5.5v5c0 .2761-.2239.5-.5.5h-6c-.2761 0-.5-.2239-.5-.5v-5c0-.2761.2239-.5.5-.5zm4-1.5v1.5h-3v-1.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m13.5 111v-1.5c0-1.381 1.1193-2.5 2.5-2.5s2.5 1.119 2.5 2.5v1.5h.5c.2761 0 .5.224.5.5v5c0 .276-.2239.5-.5.5h-6c-.2761 0-.5-.224-.5-.5v-5c0-.276.2239-.5.5-.5zm4-1.5v1.5h-3v-1.5c0-.828.6716-1.5 1.5-1.5s1.5.672 1.5 1.5z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--mask {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m16 7.99893c-4.4188 0-8.00098 3.58217-8.00098 8.00107 0 4.4188 3.58218 8.001 8.00098 8.001 4.4189 0 8.0011-3.5822 8.0011-8.001 0-4.4189-3.5822-8.00107-8.0011-8.00107zm-1.965 1.27953c.6234-.18195 1.2828-.27953 1.965-.27953 3.8666 0 7.0011 3.13447 7.0011 7.00107 0 3.8665-3.1345 7.001-7.0011 7.001-.6815 0-1.3402-.0974-1.9631-.279 2.0967-1.4961 3.4638-3.949 3.4638-6.7211 0-2.7729-1.3679-5.2264-3.4657-6.72244z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16 39.9989c-4.4188 0-8.00098 3.5822-8.00098 8.0011 0 4.4188 3.58218 8.001 8.00098 8.001 4.4189 0 8.0011-3.5822 8.0011-8.001 0-4.4189-3.5822-8.0011-8.0011-8.0011zm-1.965 1.2796c.6234-.182 1.2828-.2796 1.965-.2796 3.8666 0 7.0011 3.1345 7.0011 7.0011 0 3.8665-3.1345 7.001-7.0011 7.001-.6815 0-1.3402-.0974-1.9631-.279 2.0967-1.4961 3.4638-3.949 3.4638-6.7211 0-2.7729-1.3679-5.2264-3.4657-6.7224z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16 71.9989c-4.4188 0-8.00098 3.5822-8.00098 8.0011 0 4.4188 3.58218 8.001 8.00098 8.001 4.4189 0 8.0011-3.5822 8.0011-8.001 0-4.4189-3.5822-8.0011-8.0011-8.0011zm-1.965 1.2796c.6234-.182 1.2828-.2796 1.965-.2796 3.8666 0 7.0011 3.1345 7.0011 7.0011 0 3.8665-3.1345 7.001-7.0011 7.001-.6815 0-1.3402-.0974-1.9631-.279 2.0967-1.4961 3.4638-3.949 3.4638-6.7211 0-2.7729-1.3679-5.2264-3.4657-6.7224z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16 103.999c-4.4188 0-8.00098 3.582-8.00098 8.001s3.58218 8.001 8.00098 8.001c4.4189 0 8.0011-3.582 8.0011-8.001s-3.5822-8.001-8.0011-8.001zm-1.965 1.279c.6234-.181 1.2828-.279 1.965-.279 3.8666 0 7.0011 3.134 7.0011 7.001s-3.1345 7.001-7.0011 7.001c-.6815 0-1.3402-.097-1.9631-.279 2.0967-1.496 3.4638-3.949 3.4638-6.721 0-2.773-1.3679-5.227-3.4657-6.723z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--minus {\n  background-image: url(\"data:image/svg+xml,%3Csvg fill='none' height='128' viewBox='0 0 32 128' width='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-rule='evenodd' fill-rule='evenodd'%3E%3Cpath d='m21.5 16.5h-11v-1h11z' fill='%23000' fill-opacity='.8'/%3E%3Cpath d='m21.5 48.5h-11v-1h11z' fill='%23000' fill-opacity='.3'/%3E%3Cpath d='m21.5 80.5h-11v-1h11z' fill='%2318a0fb'/%3E%3Cpath d='m21.5 112.5h-11v-1h11z' fill='%23fff'/%3E%3C/g%3E%3C/svg%3E\");\n}\n.icon--node-connect {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m15.5 9h-6.5v-1h7.5v5.708c.7355.3214 1.2865.9863 1.45 1.792h5.3429l-2.1465-2.1464.7072-.7072 3.3535 3.3536-3.3535 3.3536-.7072-.7072 2.1465-2.1464h-5.3429c-.1635.8057-.7145 1.4706-1.45 1.792v5.708h-7.5v-1h6.5v-4.5c-1.3807 0-2.5-1.1193-2.5-2.5s1.1193-2.5 2.5-2.5zm0 8.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15.5 41h-6.5v-1h7.5v5.708c.7355.3214 1.2865.9863 1.45 1.792h5.3429l-2.1465-2.1464.7072-.7072 3.3535 3.3536-3.3535 3.3536-.7072-.7072 2.1465-2.1464h-5.3429c-.1635.8057-.7145 1.4706-1.45 1.792v5.708h-7.5v-1h6.5v-4.5c-1.3807 0-2.5-1.1193-2.5-2.5s1.1193-2.5 2.5-2.5zm0 8.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m15.5 73h-6.5v-1h7.5v5.708c.7355.3214 1.2865.9863 1.45 1.792h5.3429l-2.1465-2.1464.7072-.7072 3.3535 3.3536-3.3535 3.3536-.7072-.7072 2.1465-2.1464h-5.3429c-.1635.8057-.7145 1.4706-1.45 1.792v5.708h-7.5v-1h6.5v-4.5c-1.3807 0-2.5-1.1193-2.5-2.5s1.1193-2.5 2.5-2.5zm0 8.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15.5 105h-6.5v-1h7.5v5.708c.7355.321 1.2865.986 1.45 1.792h5.3429l-2.1465-2.146.7072-.708 3.3535 3.354-3.3535 3.354-.7072-.708 2.1465-2.146h-5.3429c-.1635.806-.7145 1.471-1.45 1.792v5.708h-7.5v-1h6.5v-4.5c-1.3807 0-2.5-1.119-2.5-2.5s1.1193-2.5 2.5-2.5zm0 8.5c.8284 0 1.5-.672 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.672-1.5 1.5.6716 1.5 1.5 1.5z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--play {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m13 10.0979 9.4434 5.9021-9.4434 5.9021zm1 1.8042v8.1958l6.5566-4.0979z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m13 42.0979 9.4434 5.9021-9.4434 5.9021zm1 1.8042v8.1958l6.5566-4.0979z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m13 74.0979 9.4434 5.9021-9.4434 5.9021zm1 1.8042v8.1958l6.5566-4.0979z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m13 106.098 9.4434 5.902-9.4434 5.902zm1 1.804v8.196l6.5566-4.098z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--plus {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m15.5 15.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15.5 47.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m15.5 79.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15.5 111.5v-5h1v5h5v1h-5v5h-1v-5h-5v-1z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--recent {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m15 12v5h5v-1h-4v-4z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 16c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m15 44v5h5v-1h-4v-4z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 48c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m15 76v5h5v-1h-4v-4z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 80c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m15 108v5h5v-1h-4v-4z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 112c0 4.418-3.5817 8-8 8s-8-3.582-8-8 3.5817-8 8-8 8 3.582 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E');\n}\n.icon--reset-instance {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m6.79291 15.5 8.70709-8.70709 8.7071 8.70709-.7071.7071-8-7.99998-7.29288 7.29288 7.29288 7.2929 4-4 .7071.7071-4.7071 4.7071z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14.7071 15h2.2929c3.3137 0 6 2.6863 6 6 0 1.6569-.6716 3.1569-1.7574 4.2427l-.7071-.7072c.9049-.9048 1.4645-2.1548 1.4645-3.5355 0-2.7614-2.2386-5-5-5h-2.2929l1.6465 1.6465-.7072.7071-2.8535-2.8536 2.8535-2.8535.7072.7071z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m6.79291 47.5 8.70709-8.7071 8.7071 8.7071-.7071.7071-8-8-7.29288 7.2929 7.29288 7.2929 4-4 .7071.7071-4.7071 4.7071z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m14.7071 47h2.2929c3.3137 0 6 2.6863 6 6 0 1.6569-.6716 3.1569-1.7574 4.2427l-.7071-.7072c.9049-.9048 1.4645-2.1548 1.4645-3.5355 0-2.7614-2.2386-5-5-5h-2.2929l1.6465 1.6465-.7072.7071-2.8535-2.8536 2.8535-2.8535.7072.7071z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m6.79291 79.5 8.70709-8.7071 8.7071 8.7071-.7071.7071-8-8-7.29288 7.2929 7.29288 7.2929 4-4 .7071.7071-4.7071 4.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14.7071 79h2.2929c3.3137 0 6 2.6863 6 6 0 1.6569-.6716 3.1569-1.7574 4.2427l-.7071-.7072c.9049-.9048 1.4645-2.1548 1.4645-3.5355 0-2.7614-2.2386-5-5-5h-2.2929l1.6465 1.6465-.7072.7071-2.8535-2.8536 2.8535-2.8535.7072.7071z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m6.79291 111.5 8.70709-8.707 8.7071 8.707-.7071.707-8-8-7.29288 7.293 7.29288 7.293 4-4 .7071.707-4.7071 4.707z\" fill=\"%23fff\"/%3E%3Cpath d=\"m14.7071 111h2.2929c3.3137 0 6 2.686 6 6 0 1.657-.6716 3.157-1.7574 4.243l-.7071-.707c.9049-.905 1.4645-2.155 1.4645-3.536 0-2.761-2.2386-5-5-5h-2.2929l1.6465 1.646-.7072.708-2.8535-2.854 2.8535-2.854.7072.708z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--resize-to-fit {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m8.64648 9.35356 3.64642 3.64644h-2.2929v1h4v-4h-1v2.2929l-3.64641-3.64645z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19.7071 13 3.6465-3.64644-.7071-.70711-3.6465 3.64645v-2.2929h-1v4h4v-1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19.7071 19 3.6465 3.6465-.7071.7071-3.6465-3.6465v2.2929h-1v-4h4v1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12.2929 19-3.64642 3.6465.70711.7071 3.64641-3.6465v2.2929h1v-4h-4v1z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m8.64648 41.3536 3.64642 3.6464h-2.2929v1h4v-4h-1v2.2929l-3.64641-3.6464z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19.7071 45 3.6465-3.6464-.7071-.7071-3.6465 3.6464v-2.2929h-1v4h4v-1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19.7071 51 3.6465 3.6465-.7071.7071-3.6465-3.6465v2.2929h-1v-4h4v1z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12.2929 51-3.64642 3.6465.70711.7071 3.64641-3.6465v2.2929h1v-4h-4v1z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m8.64648 73.3536 3.64642 3.6464h-2.2929v1h4v-4h-1v2.2929l-3.64641-3.6464z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19.7071 77 3.6465-3.6464-.7071-.7071-3.6465 3.6464v-2.2929h-1v4h4v-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19.7071 83 3.6465 3.6465-.7071.7071-3.6465-3.6465v2.2929h-1v-4h4v1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12.2929 83-3.64642 3.6465.70711.7071 3.64641-3.6465v2.2929h1v-4h-4v1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m8.64648 105.354 3.64642 3.646h-2.2929v1h4v-4h-1v2.293l-3.64641-3.647z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19.7071 109 3.6465-3.646-.7071-.708-3.6465 3.647v-2.293h-1v4h4v-1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19.7071 115 3.6465 3.646-.7071.708-3.6465-3.647v2.293h-1v-4h4v1z\" fill=\"%23fff\"/%3E%3Cpath d=\"m12.2929 115-3.64642 3.646.70711.708 3.64641-3.647v2.293h1v-4h-4v1z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--resolve-filled {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m16 23.9999c4.4183 0 8-3.5817 8-8s-3.5817-8.00002-8-8.00002-8 3.58172-8 8.00002 3.5817 8 8 8zm3.9111-9.6345-.8222-.7308-3.6125 4.0639-2.5875-2.5874-.7778.7778 3.4125 3.4123z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16 55.9999c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8-8 3.5817-8 8 3.5817 8 8 8zm3.9111-9.6345-.8222-.7308-3.6125 4.0639-2.5875-2.5874-.7778.7778 3.4125 3.4123z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16 87.9999c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8-8 3.5817-8 8 3.5817 8 8 8zm3.9111-9.6345-.8222-.7308-3.6125 4.0639-2.5875-2.5874-.7778.7778 3.4125 3.4123z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16 120c4.4183 0 8-3.582 8-8s-3.5817-8-8-8-8 3.582-8 8 3.5817 8 8 8zm3.9111-9.635-.8222-.73-3.6125 4.064-2.5875-2.588-.7778.778 3.4125 3.412z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--resolve {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m19.9111 14.3654-.8222-.7308-3.6125 4.0639-2.5875-2.5874-.7778.7778 3.4125 3.4123z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 15.9999c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8.00002 8-8.00002 8 3.58172 8 8.00002zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7.00002 7-7.00002 7 3.13402 7 7.00002z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m19.9111 46.3654-.8222-.7308-3.6125 4.0639-2.5875-2.5874-.7778.7778 3.4125 3.4123z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 47.9999c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m19.9111 78.3654-.8222-.7308-3.6125 4.0639-2.5875-2.5874-.7778.7778 3.4125 3.4123z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 79.9999c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m19.9111 110.365-.8222-.73-3.6125 4.064-2.5875-2.588-.7778.778 3.4125 3.412z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 112c0 4.418-3.5817 8-8 8s-8-3.582-8-8 3.5817-8 8-8 8 3.582 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E');\n}\n.icon--restore {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m11.2071 11 1.1465 1.1465-.7072.7071-2.35351-2.3536 2.35351-2.35355.7072.70711-1.1465 1.14644h4.7929c3.8017.0344 6.873 3.1554 6.873 7 0 3.866-3.1056 7-6.9365 7s-6.9365-3.134-6.9365-7h1c0 3.3223 2.6664 6 5.9365 6s5.9365-2.6777 5.9365-6c0-3.3215-2.6651-5.9987-5.9341-6z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m14 14v5h5v-1h-4v-4z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m11.2071 43 1.1465 1.1465-.7072.7071-2.35351-2.3536 2.35351-2.3535.7072.7071-1.1465 1.1464h4.7929c3.8017.0344 6.873 3.1554 6.873 7 0 3.866-3.1056 7-6.9365 7s-6.9365-3.134-6.9365-7h1c0 3.3223 2.6664 6 5.9365 6s5.9365-2.6777 5.9365-6c0-3.3215-2.6651-5.9987-5.9341-6z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m14 46v5h5v-1h-4v-4z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m11.2071 75 1.1465 1.1465-.7072.7071-2.35351-2.3536 2.35351-2.3535.7072.7071-1.1465 1.1464h4.7929c3.8017.0344 6.873 3.1554 6.873 7 0 3.866-3.1056 7-6.9365 7s-6.9365-3.134-6.9365-7h1c0 3.3223 2.6664 6 5.9365 6s5.9365-2.6777 5.9365-6c0-3.3215-2.6651-5.9987-5.9341-6z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m14 78v5h5v-1h-4v-4z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m11.2071 107 1.1465 1.146-.7072.708-2.35351-2.354 2.35351-2.354.7072.708-1.1465 1.146h4.7929c3.8017.034 6.873 3.155 6.873 7 0 3.866-3.1056 7-6.9365 7s-6.9365-3.134-6.9365-7h1c0 3.322 2.6664 6 5.9365 6s5.9365-2.678 5.9365-6-2.6651-5.999-5.9341-6z\" fill=\"%23fff\"/%3E%3Cpath d=\"m14 110v5h5v-1h-4v-4z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--return {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m11.7072 14 2.6464 2.6464-.7071.7071-3.85353-3.8535 3.85353-3.85358.7071.70708-2.6464 2.6465h3.7929c3.5761 0 6.5 2.9238 6.5 6.5v1.5h-1v-1.5c0-3.0239-2.4762-5.5-5.5-5.5z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m11.7072 46 2.6464 2.6464-.7071.7071-3.85353-3.8535 3.85353-3.8536.7071.7071-2.6464 2.6465h3.7929c3.5761 0 6.5 2.9238 6.5 6.5v1.5h-1v-1.5c0-3.0239-2.4762-5.5-5.5-5.5z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m11.7072 78 2.6464 2.6464-.7071.7071-3.85353-3.8535 3.85353-3.8536.7071.7071-2.6464 2.6465h3.7929c3.5761 0 6.5 2.9238 6.5 6.5v1.5h-1v-1.5c0-3.0239-2.4762-5.5-5.5-5.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m11.7072 110 2.6464 2.646-.7071.708-3.85353-3.854 3.85353-3.854.7071.708-2.6464 2.646h3.7929c3.5761 0 6.5 2.924 6.5 6.5v1.5h-1v-1.5c0-3.024-2.4762-5.5-5.5-5.5z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--search-large {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m18.8744 19.5815c-1.0453.8849-2.3975 1.4185-3.8744 1.4185-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6c0 1.4769-.5336 2.8291-1.4185 3.8744l4.2721 4.272-.7072.7072zm1.1256-4.5815c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5 2.2386-5 5-5 5 2.2386 5 5z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m18.8744 51.5815c-1.0453.8849-2.3975 1.4185-3.8744 1.4185-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6c0 1.4769-.5336 2.8291-1.4185 3.8744l4.2721 4.272-.7072.7072zm1.1256-4.5815c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5 2.2386-5 5-5 5 2.2386 5 5z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m18.8744 83.5815c-1.0453.8849-2.3975 1.4185-3.8744 1.4185-3.3137 0-6-2.6863-6-6s2.6863-6 6-6 6 2.6863 6 6c0 1.4769-.5336 2.8291-1.4185 3.8744l4.2721 4.272-.7072.7072zm1.1256-4.5815c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5 2.2386-5 5-5 5 2.2386 5 5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m18.8744 115.582c-1.0453.884-2.3975 1.418-3.8744 1.418-3.3137 0-6-2.686-6-6s2.6863-6 6-6 6 2.686 6 6c0 1.477-.5336 2.829-1.4185 3.874l4.2721 4.272-.7072.708zm1.1256-4.582c0 2.761-2.2386 5-5 5s-5-2.239-5-5 2.2386-5 5-5 5 2.239 5 5z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--search {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m18.3972 18.6046c-.7793.625-1.7687.9988-2.8455.9988-2.5138 0-4.5517-2.0378-4.5517-4.5517 0-2.5138 2.0379-4.5517 4.5517-4.5517 2.5139 0 4.5517 2.0379 4.5517 4.5517 0 1.0769-.3739 2.0664-.999 2.8458l3.2491 3.2492-.7071.7071zm.7062-3.5529c0 1.9616-1.5901 3.5517-3.5517 3.5517-1.9615 0-3.5517-1.5901-3.5517-3.5517 0-1.9615 1.5902-3.5517 3.5517-3.5517 1.9616 0 3.5517 1.5902 3.5517 3.5517z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m18.3972 50.6046c-.7793.625-1.7687.9988-2.8455.9988-2.5138 0-4.5517-2.0378-4.5517-4.5517 0-2.5138 2.0379-4.5517 4.5517-4.5517 2.5139 0 4.5517 2.0379 4.5517 4.5517 0 1.0769-.3739 2.0664-.999 2.8458l3.2491 3.2492-.7071.7071zm.7062-3.5529c0 1.9616-1.5901 3.5517-3.5517 3.5517-1.9615 0-3.5517-1.5901-3.5517-3.5517 0-1.9615 1.5902-3.5517 3.5517-3.5517 1.9616 0 3.5517 1.5902 3.5517 3.5517z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m18.3972 82.6046c-.7793.625-1.7687.9988-2.8455.9988-2.5138 0-4.5517-2.0378-4.5517-4.5517 0-2.5138 2.0379-4.5517 4.5517-4.5517 2.5139 0 4.5517 2.0379 4.5517 4.5517 0 1.0769-.3739 2.0664-.999 2.8458l3.2491 3.2492-.7071.7071zm.7062-3.5529c0 1.9616-1.5901 3.5517-3.5517 3.5517-1.9615 0-3.5517-1.5901-3.5517-3.5517 0-1.9615 1.5902-3.5517 3.5517-3.5517 1.9616 0 3.5517 1.5902 3.5517 3.5517z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m18.3972 114.605c-.7793.625-1.7687.998-2.8455.998-2.5138 0-4.5517-2.037-4.5517-4.551s2.0379-4.552 4.5517-4.552c2.5139 0 4.5517 2.038 4.5517 4.552 0 1.077-.3739 2.066-.999 2.846l3.2491 3.249-.7071.707zm.7062-3.553c0 1.961-1.5901 3.551-3.5517 3.551-1.9615 0-3.5517-1.59-3.5517-3.551 0-1.962 1.5902-3.552 3.5517-3.552 1.9616 0 3.5517 1.59 3.5517 3.552z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--share {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m20 9.5c-1.933 0-3.5 1.567-3.5 3.5 0 1.442.872 2.6803 2.1175 3.2164-1.1371.3667-2.0766 1.1736-2.6175 2.22-.5409-1.0464-1.4803-1.8533-2.6175-2.22 1.2455-.5361 2.1175-1.7744 2.1175-3.2164 0-1.933-1.567-3.5-3.5-3.5s-3.5 1.567-3.5 3.5c0 1.442.87203 2.6803 2.1175 3.2164-1.80889.5833-3.1175 2.2806-3.1175 4.2836v1.5h17v-1.5c0-2.003-1.3086-3.7003-3.1175-4.2836 1.2455-.5361 2.1175-1.7744 2.1175-3.2164 0-1.933-1.567-3.5-3.5-3.5zm-2.5 3.5c0-1.3807 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.1193 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.1193-2.5-2.5zm-1 8v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5v.5zm-1-.5v.5h-7v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5zm-6-7.5c0-1.3807 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.1193 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.1193-2.5-2.5z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 41.5c-1.933 0-3.5 1.567-3.5 3.5 0 1.442.872 2.6803 2.1175 3.2164-1.1371.3667-2.0766 1.1736-2.6175 2.22-.5409-1.0464-1.4803-1.8533-2.6175-2.22 1.2455-.5361 2.1175-1.7744 2.1175-3.2164 0-1.933-1.567-3.5-3.5-3.5s-3.5 1.567-3.5 3.5c0 1.442.87203 2.6803 2.1175 3.2164-1.80889.5833-3.1175 2.2806-3.1175 4.2836v1.5h17v-1.5c0-2.003-1.3086-3.7003-3.1175-4.2836 1.2455-.5361 2.1175-1.7744 2.1175-3.2164 0-1.933-1.567-3.5-3.5-3.5zm-2.5 3.5c0-1.3807 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.1193 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.1193-2.5-2.5zm-1 8v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5v.5zm-1-.5v.5h-7v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5zm-6-7.5c0-1.3807 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.1193 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.1193-2.5-2.5z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 73.5c-1.933 0-3.5 1.567-3.5 3.5 0 1.442.872 2.6803 2.1175 3.2164-1.1371.3667-2.0766 1.1736-2.6175 2.22-.5409-1.0464-1.4803-1.8533-2.6175-2.22 1.2455-.5361 2.1175-1.7744 2.1175-3.2164 0-1.933-1.567-3.5-3.5-3.5s-3.5 1.567-3.5 3.5c0 1.442.87203 2.6803 2.1175 3.2164-1.80889.5833-3.1175 2.2806-3.1175 4.2836v1.5h17v-1.5c0-2.003-1.3086-3.7003-3.1175-4.2836 1.2455-.5361 2.1175-1.7744 2.1175-3.2164 0-1.933-1.567-3.5-3.5-3.5zm-2.5 3.5c0-1.3807 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.1193 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.1193-2.5-2.5zm-1 8v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5v.5zm-1-.5v.5h-7v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5zm-6-7.5c0-1.3807 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.1193 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.1193-2.5-2.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 105.5c-1.933 0-3.5 1.567-3.5 3.5 0 1.442.872 2.68 2.1175 3.216-1.1371.367-2.0766 1.174-2.6175 2.22-.5409-1.046-1.4803-1.853-2.6175-2.22 1.2455-.536 2.1175-1.774 2.1175-3.216 0-1.933-1.567-3.5-3.5-3.5s-3.5 1.567-3.5 3.5c0 1.442.87203 2.68 2.1175 3.216-1.80889.584-3.1175 2.281-3.1175 4.284v1.5h17v-1.5c0-2.003-1.3086-3.7-3.1175-4.284 1.2455-.536 2.1175-1.774 2.1175-3.216 0-1.933-1.567-3.5-3.5-3.5zm-2.5 3.5c0-1.381 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.119 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.119-2.5-2.5zm-1 8v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5v.5zm-1-.5v.5h-7v-.5c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5zm-6-7.5c0-1.381 1.1193-2.5 2.5-2.5 1.3808 0 2.5 1.119 2.5 2.5s-1.1192 2.5-2.5 2.5c-1.3807 0-2.5-1.119-2.5-2.5z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--smiley {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m15.9999 20c-1.8638 0-3.4299-1.2748-3.8739-3h1.0446c.4119 1.1652 1.5231 2 2.8293 2 1.3063 0 2.4175-.8348 2.8293-2h1.0447c-.444 1.7252-2.0101 3-3.874 3z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19.5 14.125c0 .4832-.3918.875-.875.875s-.875-.3918-.875-.875.3918-.875.875-.875.875.3918.875.875z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m13.125 15c.4832 0 .875-.3918.875-.875s-.3918-.875-.875-.875-.875.3918-.875.875.3918.875.875.875z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 16c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m15.9999 52c-1.8638 0-3.4299-1.2748-3.8739-3h1.0446c.4119 1.1652 1.5231 2 2.8293 2 1.3063 0 2.4175-.8348 2.8293-2h1.0447c-.444 1.7252-2.0101 3-3.874 3z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19.5 46.125c0 .4832-.3918.875-.875.875s-.875-.3918-.875-.875.3918-.875.875-.875.875.3918.875.875z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m13.125 47c.4832 0 .875-.3918.875-.875s-.3918-.875-.875-.875-.875.3918-.875.875.3918.875.875.875z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 48c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m15.9999 84c-1.8638 0-3.4299-1.2748-3.8739-3h1.0446c.4119 1.1652 1.5231 2 2.8293 2 1.3063 0 2.4175-.8348 2.8293-2h1.0447c-.444 1.7252-2.0101 3-3.874 3z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19.5 78.125c0 .4832-.3918.875-.875.875s-.875-.3918-.875-.875.3918-.875.875-.875.875.3918.875.875z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m13.125 79c.4832 0 .875-.3918.875-.875s-.3918-.875-.875-.875-.875.3918-.875.875.3918.875.875.875z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 80c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m15.9999 116c-1.8638 0-3.4299-1.275-3.8739-3h1.0446c.4119 1.165 1.5231 2 2.8293 2 1.3063 0 2.4175-.835 2.8293-2h1.0447c-.444 1.725-2.0101 3-3.874 3z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19.5 110.125c0 .483-.3918.875-.875.875s-.875-.392-.875-.875.3918-.875.875-.875.875.392.875.875z\" fill=\"%23fff\"/%3E%3Cpath d=\"m13.125 111c.4832 0 .875-.392.875-.875s-.3918-.875-.875-.875-.875.392-.875.875.3918.875.875.875z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m24 112c0 4.418-3.5817 8-8 8s-8-3.582-8-8 3.5817-8 8-8 8 3.582 8 8zm-1 0c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7 7 3.134 7 7z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E');\n}\n.icon--star-off {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m18 14-2-6-2 6-6-.0141 5 4.0141-2 6 5-3.7945 5 3.7945-2-6 5-4.0141zm3.1487.9926-3.8689.0091-1.2798-3.8394-1.2798 3.8394-3.8689-.0091 3.3175 2.6633-1.1976 3.5928 3.0288-2.2985 3.0288 2.2985-1.1976-3.5928z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m18 46-2-6-2 6-6-.0141 5 4.0141-2 6 5-3.7945 5 3.7945-2-6 5-4.0141zm3.1487.9926-3.8689.0091-1.2798-3.8394-1.2798 3.8394-3.8689-.0091 3.3175 2.6633-1.1976 3.5928 3.0288-2.2985 3.0288 2.2985-1.1976-3.5928z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m18 78-2-6-2 6-6-.0141 5 4.0141-2 6 5-3.7945 5 3.7945-2-6 5-4.0141zm3.1487.9926-3.8689.0091-1.2798-3.8394-1.2798 3.8394-3.8689-.0091 3.3175 2.6633-1.1976 3.5928 3.0288-2.2985 3.0288 2.2985-1.1976-3.5928z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m18 110-2-6-2 6-6-.014 5 4.014-2 6 5-3.794 5 3.794-2-6 5-4.014zm3.1487.993-3.8689.009-1.2798-3.84-1.2798 3.84-3.8689-.009 3.3175 2.663-1.1976 3.593 3.0288-2.299 3.0288 2.299-1.1976-3.593z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--star-on {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m16 8 2 6 6-.0141-5 4.0141 2 6-5-3.7945-5 3.7945 2-6-5-4.0141 6 .0141z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16 40 2 6 6-.0141-5 4.0141 2 6-5-3.7945-5 3.7945 2-6-5-4.0141 6 .0141z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16 72 2 6 6-.0141-5 4.0141 2 6-5-3.7945-5 3.7945 2-6-5-4.0141 6 .0141z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16 104 2 6 6-.014-5 4.014 2 6-5-3.794-5 3.794 2-6-5-4.014 6 .014z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--stroke-weight {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m10 10h12v1h-12z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 14h12v2h-12z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22 19h-12v3h12z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 42h12v1h-12z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 46h12v2h-12z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22 51h-12v3h12z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m10 74h12v1h-12z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 78h12v2h-12z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22 83h-12v3h12z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 106h12v1h-12z\" fill=\"%23fff\"/%3E%3Cpath d=\"m10 110h12v2h-12z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22 115h-12v3h12z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--styles {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m11.5 13c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17.5 13c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m19 20.5c-.8284 0-1.5-.6716-1.5-1.5s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5-.6716 1.5-1.5 1.5z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m11.5 19c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m11.5 45c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17.5 45c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m19 52.5c-.8284 0-1.5-.6716-1.5-1.5s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5-.6716 1.5-1.5 1.5z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m11.5 51c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m11.5 77c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17.5 77c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m19 84.5c-.8284 0-1.5-.6716-1.5-1.5s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5-.6716 1.5-1.5 1.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m11.5 83c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m11.5 109c0 .828.6716 1.5 1.5 1.5s1.5-.672 1.5-1.5-.6716-1.5-1.5-1.5-1.5.672-1.5 1.5z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17.5 109c0 .828.6716 1.5 1.5 1.5s1.5-.672 1.5-1.5-.6716-1.5-1.5-1.5-1.5.672-1.5 1.5z\" fill=\"%23fff\"/%3E%3Cpath d=\"m19 116.5c-.8284 0-1.5-.672-1.5-1.5s.6716-1.5 1.5-1.5 1.5.672 1.5 1.5-.6716 1.5-1.5 1.5z\" fill=\"%23fff\"/%3E%3Cpath d=\"m11.5 115c0 .828.6716 1.5 1.5 1.5s1.5-.672 1.5-1.5-.6716-1.5-1.5-1.5-1.5.672-1.5 1.5z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--tidy-up-grid {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m10 10h2v2h-2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 10h2v2h-2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12 15h-2v2h2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 15h2v2h-2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m12 20h-2v2h2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 20h2v2h-2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17 10h-2v2h2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15 15h2v2h-2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17 20h-2v2h2z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 42h2v2h-2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 42h2v2h-2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12 47h-2v2h2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 47h2v2h-2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m12 52h-2v2h2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 52h2v2h-2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17 42h-2v2h2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m15 47h2v2h-2z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17 52h-2v2h2z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m10 74h2v2h-2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 74h2v2h-2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12 79h-2v2h2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 79h2v2h-2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m12 84h-2v2h2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 84h2v2h-2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17 74h-2v2h2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15 79h2v2h-2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17 84h-2v2h2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 106h2v2h-2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 106h2v2h-2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m12 111h-2v2h2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 111h2v2h-2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m12 116h-2v2h2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 116h2v2h-2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17 106h-2v2h2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m15 111h2v2h-2z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17 116h-2v2h2z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--tidy-up-list-horiz {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m10 22.5v-13h2v13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m15 22.5v-13h2v13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m20 9.5v13h2v-13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 54.5v-13h2v13z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m15 54.5v-13h2v13z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m20 41.5v13h2v-13z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m10 86.5v-13h2v13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m15 86.5v-13h2v13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m20 73.5v13h2v-13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 118.5v-13h2v13z\" fill=\"%23fff\"/%3E%3Cpath d=\"m15 118.5v-13h2v13z\" fill=\"%23fff\"/%3E%3Cpath d=\"m20 105.5v13h2v-13z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--tidy-up-list-vert {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m9.5 10h13v2h-13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9.5 15h13v2h-13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m22.5 20h-13v2h13z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m9.5 42h13v2h-13z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m9.5 47h13v2h-13z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m22.5 52h-13v2h13z\" fill-opacity=\".3\"/%3E%3C/g%3E%3Cpath d=\"m9.5 74h13v2h-13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9.5 79h13v2h-13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m22.5 84h-13v2h13z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m9.5 106h13v2h-13z\" fill=\"%23fff\"/%3E%3Cpath d=\"m9.5 111h13v2h-13z\" fill=\"%23fff\"/%3E%3Cpath d=\"m22.5 116h-13v2h13z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--timer {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m19 8h-6v-1h6z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16.5 17v-5h-1v5c0 .2761.2239.5.5.5s.5-.2239.5-.5z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m22.7146 12.6492 1.5278-1.5279-2.1213-2.1213-1.4818 1.4818c-1.3085-.93298-2.9098-1.4818-4.6393-1.4818-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8c0-1.6044-.4723-3.0985-1.2854-4.3508zm.2854 4.3508c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7c1.7683 0 3.3835.6557 4.6157 1.7372l.6471.6471c1.0815 1.2322 1.7372 2.8474 1.7372 4.6157zm-1.0077-5.3004.1288.1288.7071-.7071-.7071-.7071-.7013.7013c.2005.1849.3916.3798.5725.5841z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m19 40h-6v-1h6z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16.5 49v-5h-1v5c0 .2761.2239.5.5.5s.5-.2239.5-.5z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m22.7146 44.6492 1.5278-1.5279-2.1213-2.1213-1.4818 1.4818c-1.3085-.933-2.9098-1.4818-4.6393-1.4818-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8c0-1.6044-.4723-3.0985-1.2854-4.3508zm.2854 4.3508c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7c1.7683 0 3.3835.6557 4.6157 1.7372l.6471.6471c1.0815 1.2322 1.7372 2.8474 1.7372 4.6157zm-1.0077-5.3004.1288.1288.7071-.7071-.7071-.7071-.7013.7013c.2005.1849.3916.3798.5725.5841z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m19 72h-6v-1h6z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16.5 81v-5h-1v5c0 .2761.2239.5.5.5s.5-.2239.5-.5z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m22.7146 76.6492 1.5278-1.5279-2.1213-2.1213-1.4818 1.4818c-1.3085-.933-2.9098-1.4818-4.6393-1.4818-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8c0-1.6044-.4723-3.0985-1.2854-4.3508zm.2854 4.3508c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7c1.7683 0 3.3835.6557 4.6157 1.7372l.6471.6471c1.0815 1.2322 1.7372 2.8474 1.7372 4.6157zm-1.0077-5.3004.1288.1288.7071-.7071-.7071-.7071-.7013.7013c.2005.1849.3916.3798.5725.5841z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m19 104h-6v-1h6z\" fill=\"%23fff\"/%3E%3Cpath d=\"m16.5 113v-5h-1v5c0 .276.2239.5.5.5s.5-.224.5-.5z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m22.7146 108.649 1.5278-1.528-2.1213-2.121-1.4818 1.482c-1.3085-.933-2.9098-1.482-4.6393-1.482-4.4183 0-8 3.582-8 8s3.5817 8 8 8 8-3.582 8-8c0-1.604-.4723-3.098-1.2854-4.351zm.2854 4.351c0 3.866-3.134 7-7 7s-7-3.134-7-7 3.134-7 7-7c1.7683 0 3.3835.656 4.6157 1.737l.6471.647c1.0815 1.232 1.7372 2.848 1.7372 4.616zm-1.0077-5.3.1288.128.7071-.707-.7071-.707-.7013.702c.2005.184.3916.379.5725.584z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E');\n}\n.icon--trash {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m14 18.5v-4h1v4z\" fill-opacity=\".8\"/%3E%3Cpath d=\"m17 18.5v-4h1v4z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m19 10.5c0-1.10457-.8954-2-2-2h-2c-1.1046 0-2 .89543-2 2h-3v1h1v10c0 1.1046.8954 2 2 2h6c1.1046 0 2-.8954 2-2v-10h1v-1zm-4-1c-.5523 0-1 .44772-1 1h4c0-.55228-.4477-1-1-1zm5 2h-8v10c0 .5523.4477 1 1 1h6c.5523 0 1-.4477 1-1z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m14 50.5v-4h1v4z\" fill-opacity=\".3\"/%3E%3Cpath d=\"m17 50.5v-4h1v4z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m19 42.5c0-1.1046-.8954-2-2-2h-2c-1.1046 0-2 .8954-2 2h-3v1h1v10c0 1.1046.8954 2 2 2h6c1.1046 0 2-.8954 2-2v-10h1v-1zm-4-1c-.5523 0-1 .4477-1 1h4c0-.5523-.4477-1-1-1zm5 2h-8v10c0 .5523.4477 1 1 1h6c.5523 0 1-.4477 1-1z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m14 82.5v-4h1v4z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m17 82.5v-4h1v4z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m19 74.5c0-1.1046-.8954-2-2-2h-2c-1.1046 0-2 .8954-2 2h-3v1h1v10c0 1.1046.8954 2 2 2h6c1.1046 0 2-.8954 2-2v-10h1v-1zm-4-1c-.5523 0-1 .4477-1 1h4c0-.5523-.4477-1-1-1zm5 2h-8v10c0 .5523.4477 1 1 1h6c.5523 0 1-.4477 1-1z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m14 114.5v-4h1v4z\" fill=\"%23fff\"/%3E%3Cpath d=\"m17 114.5v-4h1v4z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m19 106.5c0-1.105-.8954-2-2-2h-2c-1.1046 0-2 .895-2 2h-3v1h1v10c0 1.105.8954 2 2 2h6c1.1046 0 2-.895 2-2v-10h1v-1zm-4-1c-.5523 0-1 .448-1 1h4c0-.552-.4477-1-1-1zm5 2h-8v10c0 .552.4477 1 1 1h6c.5523 0 1-.448 1-1z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E');\n}\n.icon--type {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"m10 10h11v3h-1v-2h-4v9.9986h1.9442v1h-4.8884v-1h1.9442v-9.9986h-4v2h-1z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10 42h11v3h-1v-2h-4v9.9986h1.9442v1h-4.8884v-1h1.9442v-9.9986h-4v2h-1z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10 74h11v3h-1v-2h-4v9.9986h1.9442v1h-4.8884v-1h1.9442v-9.9986h-4v2h-1z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10 106h11v3h-1v-2h-4v9.999h1.9442v1h-4.8884v-1h1.9442v-9.999h-4v2h-1z\" fill=\"%23fff\"/%3E%3C/svg%3E');\n}\n.icon--vector-handles {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m10.5 13.5-2.5 2.5 2.5 2.5 2-2h2.0854c.2059.5826.7615 1 1.4146 1s1.2087-.4174 1.4146-1h2.0854l2 2 2.5-2.5-2.5-2.5-2 2h-2.0854c-.2059-.5826-.7615-1-1.4146-1s-1.2087.4174-1.4146 1h-2.0854zm1.0858 2.5-1.0858-1.0858-1.08579 1.0858 1.08579 1.0858zm11 0-1.0858-1.0858-1.0858 1.0858 1.0858 1.0858z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m10.5 45.5-2.5 2.5 2.5 2.5 2-2h2.0854c.2059.5826.7615 1 1.4146 1s1.2087-.4174 1.4146-1h2.0854l2 2 2.5-2.5-2.5-2.5-2 2h-2.0854c-.2059-.5826-.7615-1-1.4146-1s-1.2087.4174-1.4146 1h-2.0854zm1.0858 2.5-1.0858-1.0858-1.08579 1.0858 1.08579 1.0858zm11 0-1.0858-1.0858-1.0858 1.0858 1.0858 1.0858z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m10.5 77.5-2.5 2.5 2.5 2.5 2-2h2.0854c.2059.5826.7615 1 1.4146 1s1.2087-.4174 1.4146-1h2.0854l2 2 2.5-2.5-2.5-2.5-2 2h-2.0854c-.2059-.5826-.7615-1-1.4146-1s-1.2087.4174-1.4146 1h-2.0854zm1.0858 2.5-1.0858-1.0858-1.08579 1.0858 1.08579 1.0858zm11 0-1.0858-1.0858-1.0858 1.0858 1.0858 1.0858z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m10.5 109.5-2.5 2.5 2.5 2.5 2-2h2.0854c.2059.583.7615 1 1.4146 1s1.2087-.417 1.4146-1h2.0854l2 2 2.5-2.5-2.5-2.5-2 2h-2.0854c-.2059-.583-.7615-1-1.4146-1s-1.2087.417-1.4146 1h-2.0854zm1.0858 2.5-1.0858-1.086-1.08579 1.086 1.08579 1.086zm11 0-1.0858-1.086-1.0858 1.086 1.0858 1.086z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\n.icon--visible {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000\"%3E%3Cpath d=\"m16.0004 18c1.1045 0 2-.8954 2-2s-.8955-2-2-2c-1.1046 0-2 .8954-2 2s.8954 2 2 2z\" fill-opacity=\".8\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m16.0001 12c2.878 0 5.3774 1.6211 6.6349 4-1.2575 2.3789-3.7569 4-6.6349 4-2.8781 0-5.3775-1.6211-6.63499-4 1.25749-2.3789 3.75689-4 6.63499-4zm0 7c-2.2999 0-4.3222-1.1942-5.4784-3 1.1562-1.8058 3.1785-3 5.4784-3 2.2998 0 4.3221 1.1942 5.4783 3-1.1562 1.8058-3.1785 3-5.4783 3z\" fill-opacity=\".8\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16.0004 50c1.1045 0 2-.8954 2-2s-.8955-2-2-2c-1.1046 0-2 .8954-2 2s.8954 2 2 2z\" fill-opacity=\".3\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m16.0001 44c2.878 0 5.3774 1.6211 6.6349 4-1.2575 2.3789-3.7569 4-6.6349 4-2.8781 0-5.3775-1.6211-6.63499-4 1.25749-2.3789 3.75689-4 6.63499-4zm0 7c-2.2999 0-4.3222-1.1942-5.4784-3 1.1562-1.8058 3.1785-3 5.4784-3 2.2998 0 4.3221 1.1942 5.4783 3-1.1562 1.8058-3.1785 3-5.4783 3z\" fill-opacity=\".3\" fill-rule=\"evenodd\"/%3E%3C/g%3E%3Cpath d=\"m16.0004 82c1.1045 0 2-.8954 2-2s-.8955-2-2-2c-1.1046 0-2 .8954-2 2s.8954 2 2 2z\" fill=\"%2318a0fb\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m16.0001 76c2.878 0 5.3774 1.6211 6.6349 4-1.2575 2.3789-3.7569 4-6.6349 4-2.8781 0-5.3775-1.6211-6.63499-4 1.25749-2.3789 3.75689-4 6.63499-4zm0 7c-2.2999 0-4.3222-1.1942-5.4784-3 1.1562-1.8058 3.1785-3 5.4784-3 2.2998 0 4.3221 1.1942 5.4783 3-1.1562 1.8058-3.1785 3-5.4783 3z\" fill=\"%2318a0fb\" fill-rule=\"evenodd\"/%3E%3Cpath d=\"m16.0004 114c1.1045 0 2-.895 2-2s-.8955-2-2-2c-1.1046 0-2 .895-2 2s.8954 2 2 2z\" fill=\"%23fff\"/%3E%3Cpath clip-rule=\"evenodd\" d=\"m16.0001 108c2.878 0 5.3774 1.621 6.6349 4-1.2575 2.379-3.7569 4-6.6349 4-2.8781 0-5.3775-1.621-6.63499-4 1.25749-2.379 3.75689-4 6.63499-4zm0 7c-2.2999 0-4.3222-1.194-5.4784-3 1.1562-1.806 3.1785-3 5.4784-3 2.2998 0 4.3221 1.194 5.4783 3-1.1562 1.806-3.1785 3-5.4783 3z\" fill=\"%23fff\" fill-rule=\"evenodd\"/%3E%3C/svg%3E');\n}\n.icon--warning {\n  background-image: url('data:image/svg+xml,%3Csvg fill=\"none\" height=\"128\" viewBox=\"0 0 32 128\" width=\"32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg clip-rule=\"evenodd\" fill-rule=\"evenodd\"%3E%3Cpath d=\"m16 38 10 18h-20zm-1 11v-4h2v4zm0 2v2h2v-2z\" fill=\"%23000\" fill-opacity=\".3\"/%3E%3Cpath d=\"m16 6 10 18h-20zm-1 11v-4h2v4zm0 2v2h2v-2z\" fill=\"%23000\" fill-opacity=\".8\"/%3E%3Cpath d=\"m16 70 10 18h-20zm-1 11v-4h2v4zm0 2v2h2v-2z\" fill=\"%2318a0fb\"/%3E%3Cpath d=\"m16 102 10 18h-20zm-1 11v-4h2v4zm0 2v2h2v-2z\" fill=\"%23fff\"/%3E%3C/g%3E%3C/svg%3E');\n}\nbody {\n  background-color: #232425;\n}\n.Text_color {\n  color: #d3d7d8;\n}\n.signal_color {\n  color: #edf67d;\n}\n.secondText_color {\n  color: #b0cdcf;\n}\n.pointer {\n  cursor: pointer;\n}\nh1 {\n  font-family: IBM Plex Serif;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 23px;\n  letter-spacing: 0em;\n  text-align: left;\n  color: #dbe5e6;\n}\nh2 {\n  font-family: IBM Plex Mono;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n}\np {\n  font-family: IBM Plex Mono;\n  font-size: 12px;\n  font-style: italic;\n  font-weight: 400;\n  line-height: 16px;\n  letter-spacing: 0em;\n  text-align: left;\n}\na {\n  color: #EDF67D;\n}\n.dropfield {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0px 16px;\n}\n.spacing {\n  padding: 0px 16px;\n}\n.dropcontainer {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 32px;\n  position: static;\n  width: 472px;\n  left: 8px;\n  top: 0%;\n  bottom: 0%;\n  /* UI/Third_Text */\n  border: 1px dashed #404e51;\n  box-sizing: border-box;\n  /* Inside Auto Layout */\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n  margin: 10px 0px;\n}\n.loadingcontainer {\n  /* Auto Layout */\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 16px;\n  position: static;\n  width: 472px;\n  left: 8px;\n  top: 66.29%;\n  bottom: 0%;\n  /* UI/Fine_Contur */\n  background: #33373A;\n  /* UI/Third_Text */\n  border: 1px solid #404E51;\n  box-sizing: border-box;\n  /* Inside Auto Layout */\n  flex: none;\n  order: 1;\n  align-self: stretch;\n  flex-grow: 0;\n  margin: 10px 0px;\n}\n.progress-description {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n.loading-bar {\n  position: relative;\n  width: 420px;\n  height: 4px;\n  overflow: hidden;\n  background-color: #DBE5E6;\n}\n.loading-bar .percentage {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  left: 0px;\n  display: block;\n  height: 100%;\n  width: 50%;\n  background-color: #EDF67D;\n  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(51, 55, 58, 0.55) 5%, rgba(51, 55, 58, 0.55) 75%, transparent 75%, transparent);\n  animation: animate-stripes 3s linear infinite;\n}\n@keyframes animate-stripes {\n0% {\n    background-position: 0 0;\n}\n100% {\n    background-position: 420px 0;\n}\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/LoadingSpinner.vue?vue&type=style&index=0&id=c8fe3214&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/LoadingSpinner.vue?vue&type=style&index=0&id=c8fe3214&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\nsvg[data-v-c8fe3214] {\n  height: 100px;\n  width: 100px;\n  margin-top: 12px;\n  animation: spinner-data-v-c8fe3214 5s linear infinite;\n}\n@keyframes spinner-data-v-c8fe3214 {\nto {\n    transform: rotate(360deg);\n}\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/ui.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js??ref--2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/ui.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js??ref--2-2!../node_modules/vue-loader/lib??vue-loader-options!./ui.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/ui.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/LoadingSpinner.vue?vue&type=style&index=0&id=c8fe3214&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/LoadingSpinner.vue?vue&type=style&index=0&id=c8fe3214&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./LoadingSpinner.vue?vue&type=style&index=0&id=c8fe3214&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/LoadingSpinner.vue?vue&type=style&index=0&id=c8fe3214&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/LoadingSpinner.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/LoadingSpinner.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Spinner",
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/file-icon.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/file-icon.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "file-icon",
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./src/ui.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/ui.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uiMessageHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uiMessageHandler */ "./src/uiMessageHandler.ts");
/* harmony import */ var _figma_ui_js_selectMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./figma-ui/js/selectMenu */ "./src/figma-ui/js/selectMenu.js");
/* harmony import */ var _figma_ui_js_selectMenu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_figma_ui_js_selectMenu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _figma_ui_js_iconInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./figma-ui/js/iconInput */ "./src/figma-ui/js/iconInput.js");
/* harmony import */ var _figma_ui_js_iconInput__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_figma_ui_js_iconInput__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _figma_ui_js_disclosure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./figma-ui/js/disclosure */ "./src/figma-ui/js/disclosure.js");
/* harmony import */ var _figma_ui_js_disclosure__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_figma_ui_js_disclosure__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LoadingSpinner_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoadingSpinner.vue */ "./src/LoadingSpinner.vue");
/* harmony import */ var _file_icon_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-icon.vue */ "./src/file-icon.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// Add these lines to import the interactive figma-ui components as needed.






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Spinner: _LoadingSpinner_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    FileIcon: _file_icon_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
  },
  data() {
    return {
      loading: false,
      percentage: 0,
      count: 0,
      done: 0,
    };
  },
  mounted() {
    // Add these lines to initialize the interactive figma-ui components as needed.
    // window.selectMenu.init();
    // window.iconInput.init();
    // window.disclosure.init();

    // The following shows how messages from the main code can be handled in the UI code.
    Object(_uiMessageHandler__WEBPACK_IMPORTED_MODULE_0__["handleEvent"])("nodeCreated", (nodeID) => {
      this.message = `Node ${nodeID} was created!`;
    });
  },

  methods: {
    onFileDopped(event) {
      var reader = new FileReader();
      reader.onload = this.onReaderLoad;
      reader.readAsText(event.dataTransfer.files[0]);
      // this.onFilePicked(event.dataTransfer.files);
    },

    onPickFile() {
      this.$refs.fileInput.click();
    },

    onFilePicked(event) {
      console.log(event);
      var reader = new FileReader();
      reader.onload = this.onReaderLoad;
      reader.readAsText(event.target.files[0]);
    },
    onReaderLoad(event) {
      var obj = JSON.parse(event.target.result);
      console.log(obj);
      Object(_uiMessageHandler__WEBPACK_IMPORTED_MODULE_0__["dispatch"])("resize");
      this.createNode(obj);
    },

    async createNode(message) {
      let Cards = [];
      this.loading = true;
      this.count = message.length;
      let step = 100 / message.length;
      for await (let comment of message) {
        let imagelink = await this.fetchMetaTags(comment.link);
        console.log(imagelink);
        let metaTags = "None";
        if (imagelink != "No image found") {
          let imageData = await this.getEncodedImageFromURL(imagelink);
          metaTags = {
            data: imageData.data,
            url: imageData.img.src,
            width: imageData.img.naturalWidth,
            height: imageData.img.naturalHeight,
          };
        }
        comment["imagehash"] = metaTags;
        Cards.push(comment);
        this.percentage += step;
        this.done += 1;
      }

      this.loading = false;
      Object(_uiMessageHandler__WEBPACK_IMPORTED_MODULE_0__["dispatch"])("createNode", Cards);
    },

    async fetchMetaTags(url) {
      return new Promise(function (resolve, reject) {
        let fetchUrl = `https://cors-anywhere.herokuapp.com/${url.replace(
          /http(s)?:\/\//,
          ""
        )}`;

        fetch(fetchUrl)
          .then(function (response) {
            // The API call was successful!
            return response.text();
          })
          .then(async (html) => {
            let metaTags = {};
            // This is the HTML from our response as a text string
            let head = document.createElement("div");
            let headMatch = html.match(/<head>([\s\S]*?)<\/head>/);
            let headHTML = headMatch !== null ? headMatch[1] : html;
            headHTML.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gm, "");
            head.innerHTML = headHTML;
            // get image3
            let image = head.querySelector(
              'meta[property="og:image"],meta[name="twitter:image"]'
            );
            if (!image) {
              resolve("No image found");
              return;
            }
            resolve(image.getAttribute("content"));
          })
          .catch(function (err) {
            // There was an error
            console.warn("Something went wrong.", err);

            reject("Something went wrong.");
          });
      });
    },

    getEncodedImageFromURL: (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();

        // Some websites will allow loading of images into a canvas if set to Anonymous
        img.crossOrigin = "Anonymous";
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(async (blob) => {
            let blobBuffer = await blob.arrayBuffer();
            resolve({
              img: img,
              data: new Uint8Array(blobBuffer),
            });
          });
        };
        // If an Anonymous image does not load, attempt to load it
        // cross origin using cors-anywhere
        img.onerror = () => {
          if (img.src.indexOf("cors-anywhere") === -1) {
            img.src = `https://cors-anywhere.herokuapp.com/${url.replace(
              /http(s)?:\/\//,
              ""
            )}`;
          } else {
            reject("Error fetching image");
          }
        };

        img.src = url;
      });
    },
  },
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/ui.vue?vue&type=template&id=cf633ba6&lang=pug&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/vue-loader/lib??vue-loader-options!./src/ui.vue?vue&type=template&id=cf633ba6&lang=pug& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "window" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "dropfield",
        on: {
          drop: function ($event) {
            $event.preventDefault()
          },
          dragover: function ($event) {
            $event.preventDefault()
          },
        },
      },
      [
        _c(
          "div",
          { staticClass: "dropcontainer", on: { drop: _vm.onFileDopped } },
          [
            _c("div", { staticClass: "info" }, [
              _c("h1", { staticClass: "Text_color" }, [
                _vm._v("Drop your file or "),
                _c(
                  "span",
                  {
                    staticClass: "pointer signal_color",
                    on: { click: _vm.onPickFile },
                  },
                  [_vm._v(" browse")]
                ),
              ]),
              _vm._v(" "),
              _c("input", {
                ref: "fileInput",
                staticStyle: { display: "none" },
                attrs: { type: "file", accept: "application/JSON" },
                on: { change: _vm.onFilePicked },
              }),
              _vm._v(" "),
              _c("p", { staticClass: "secondText_color" }, [
                _vm._v("Search for LeadUser.json"),
              ]),
            ]),
            _vm._v(" "),
            _c("FileIcon"),
          ],
          1
        ),
        _vm._v(" "),
        _vm.loading
          ? _c("div", { staticClass: "loadingcontainer" }, [
              _c("h2", { staticClass: "Text_color" }, [
                _vm._v("Loading great Posts..."),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "progress" }, [
                _c("div", { staticClass: "progress-description" }, [
                  _c("p", { staticClass: "signal_color" }, [
                    _vm._v(_vm._s(this.percentage) + "% "),
                  ]),
                  _c("p", { staticClass: "secondText_color" }, [
                    _vm._v(
                      "· " +
                        _vm._s(this.done) +
                        "/" +
                        _vm._s(this.count) +
                        " Posts"
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "progressbar-container" }, [
                  _c("div", { staticClass: "loading-bar" }, [
                    _c("div", {
                      staticClass: "percentage",
                      style: { width: _vm.percentage + "%" },
                    }),
                  ]),
                ]),
              ]),
            ])
          : _vm._e(),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "spacing" }, [
      _c("p", { staticClass: "Text_color" }, [
        _vm._v("To fetch images request temporary access to the "),
        _c(
          "a",
          {
            attrs: {
              href: "https://cors-anywhere.herokuapp.com/corsdemo",
              target: "_blank",
            },
          },
          [_vm._v("corse demo server")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/LoadingSpinner.vue?vue&type=template&id=c8fe3214&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/LoadingSpinner.vue?vue&type=template&id=c8fe3214&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        width: "180",
        height: "180",
        viewBox: "0 0 180 180",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
    },
    [
      _c("path", {
        attrs: {
          d: "M85.0381 18.86H86.3871V7.878L85.0381 7.878V6.738L90.4721 6.738V7.878L89.0471 7.878V18.765L93.0371 18.765V16.257H94.9941V20L85.0381 20V18.86Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M104.345 20.4359C105.016 20.5694 105.554 20.4632 105.958 20.1175C106.375 19.7743 106.658 19.23 106.806 18.4846L107.407 15.4657C107.555 14.7203 107.502 14.1093 107.248 13.6326C107.007 13.1584 106.551 12.8545 105.88 12.7211C105.209 12.5876 104.665 12.6925 104.248 13.0358C103.844 13.3815 103.567 13.9271 103.419 14.6725L102.818 17.6913C102.67 18.4367 102.717 19.0465 102.958 19.5207C103.212 19.9974 103.675 20.3025 104.345 20.4359ZM104.101 21.6658C103.405 21.5275 102.794 21.2896 102.267 20.9523C101.755 20.6051 101.337 20.1733 101.013 19.6569C100.705 19.1306 100.5 18.5346 100.4 17.869C100.303 17.1909 100.333 16.4543 100.491 15.6592C100.649 14.8642 100.902 14.1783 101.249 13.6016C101.599 13.0125 102.016 12.5401 102.5 12.1843C102.999 11.8186 103.55 11.5796 104.153 11.4672C104.772 11.3448 105.429 11.3528 106.125 11.4912C106.82 11.6296 107.424 11.8724 107.936 12.2196C108.463 12.5569 108.881 12.9887 109.19 13.515C109.513 14.0314 109.724 14.6286 109.821 15.3067C109.921 15.9723 109.892 16.7027 109.734 17.4978C109.576 18.2929 109.322 18.985 108.972 19.5741C108.625 20.1508 108.202 20.6219 107.703 20.9876C107.219 21.3434 106.668 21.5824 106.05 21.7048C105.446 21.8172 104.796 21.8042 104.101 21.6658Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M115.675 25.1139C114.727 24.7213 114.119 24.2023 113.852 23.5568C113.585 22.9114 113.618 22.1849 113.953 21.3775C114.321 20.4881 114.922 19.9485 115.754 19.7587C116.599 19.5737 117.711 19.7673 119.092 20.3392L120.339 20.8555L120.797 19.7496C121.092 19.0358 121.169 18.4368 121.027 17.9529C120.889 17.4572 120.487 17.0712 119.82 16.7949C119.305 16.5817 118.876 16.4929 118.532 16.5287L118.503 16.5989C118.591 16.7176 118.656 16.8748 118.698 17.0706C118.757 17.2595 118.733 17.4827 118.626 17.7401C118.486 18.0795 118.264 18.3167 117.961 18.4518C117.675 18.5801 117.333 18.5618 116.935 18.397C116.596 18.2564 116.361 18.0289 116.231 17.7145C116.112 17.4049 116.128 17.0687 116.278 16.7059C116.395 16.425 116.582 16.1874 116.841 15.9929C117.116 15.7917 117.453 15.657 117.852 15.5889C118.255 15.5091 118.709 15.5053 119.214 15.5773C119.735 15.6425 120.3 15.8011 120.909 16.0531C122.079 16.5379 122.845 17.1706 123.207 17.9512C123.574 18.7202 123.559 19.5845 123.162 20.5441L120.966 25.8453L122.089 26.3107L121.726 27.1884C121.502 27.2327 121.231 27.2235 120.914 27.1608C120.593 27.1099 120.28 27.0214 119.976 26.8953C119.39 26.653 119.027 26.338 118.886 25.9505C118.75 25.5513 118.774 25.1294 118.958 24.6847L118.98 24.632L118.892 24.5957C118.728 24.7607 118.542 24.9102 118.336 25.0441C118.13 25.178 117.896 25.2798 117.634 25.3495C117.377 25.4076 117.083 25.4228 116.751 25.3952C116.432 25.3725 116.073 25.2788 115.675 25.1139ZM117.152 24.0805C117.62 24.2744 118.046 24.3207 118.431 24.2196C118.816 24.1184 119.117 23.8045 119.335 23.2779L119.946 21.8034L118.945 21.3889C118.243 21.0981 117.687 21.0184 117.276 21.1498C116.881 21.2744 116.587 21.5707 116.393 22.0388L116.262 22.3548C116.098 22.7527 116.099 23.0961 116.268 23.3852C116.447 23.679 116.742 23.9108 117.152 24.0805Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M127.822 31.3584C127.317 31.0206 126.925 30.6144 126.648 30.1398C126.382 29.6723 126.224 29.1557 126.176 28.5901C126.145 28.0209 126.226 27.4203 126.42 26.7881C126.631 26.1525 126.959 25.5029 127.402 24.8394C127.845 24.1758 128.317 23.63 128.816 23.202C129.333 22.7704 129.857 22.4653 130.387 22.2867C130.936 22.1046 131.477 22.0472 132.011 22.1145C132.555 22.1888 133.08 22.3949 133.586 22.7327C134.186 23.1338 134.575 23.5997 134.754 24.1304C134.933 24.661 134.978 25.1635 134.889 25.6376L134.968 25.6904L137.206 22.3413L136.332 21.4603L136.86 20.6704L140.363 22.0969L133.301 32.6657L134.175 33.5466L133.647 34.3365L130.144 32.9101L131.094 31.4883L131.015 31.4355C130.604 31.7091 130.114 31.8614 129.545 31.8924C128.986 31.9305 128.412 31.7524 127.822 31.3584ZM129.367 30.5168C129.809 30.8124 130.282 30.9376 130.784 30.8925C131.294 30.8368 131.703 30.5772 132.013 30.1138L134.04 27.0806C134.349 26.6172 134.429 26.1448 134.278 25.6633C134.135 25.1714 133.842 24.7776 133.399 24.482C132.873 24.1302 132.327 24.0242 131.761 24.1641C131.195 24.3041 130.694 24.7005 130.258 25.3535L128.97 27.2808C128.534 27.9338 128.359 28.5484 128.446 29.1247C128.533 29.7009 128.84 30.165 129.367 30.5168Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M148.053 32.8011C147.722 32.4697 147.556 32.1159 147.556 31.7397C147.565 31.3725 147.722 31.0366 148.026 30.7321L148.093 30.6649C148.398 30.3604 148.734 30.2037 149.101 30.1947C149.477 30.1947 149.831 30.3604 150.162 30.6918C150.494 31.0232 150.655 31.3725 150.646 31.7397C150.646 32.1159 150.494 32.4563 150.189 32.7608L150.122 32.828C149.817 33.1325 149.477 33.2848 149.101 33.2848C148.734 33.2937 148.384 33.1325 148.053 32.8011ZM138.998 38.3901L139.858 39.2499L144.842 34.2655L144.157 33.231L144.829 32.5593L147.986 34.6417L141.618 41.0099L142.477 41.8697L141.671 42.6758L138.192 39.1962L138.998 38.3901Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M146.397 46.3561L147.073 47.3672L152.934 43.451L152.464 42.3027L153.254 41.7749L155.923 44.4017L154.39 45.4256L154.443 45.5046C154.693 45.4446 154.949 45.418 155.213 45.4247C155.494 45.435 155.766 45.4891 156.03 45.5872C156.311 45.6888 156.578 45.8379 156.831 46.0343C157.084 46.2308 157.32 46.4923 157.538 46.8188C158.206 47.8193 158.423 48.7026 158.189 49.4687C157.965 50.2278 157.342 50.9486 156.32 51.6312L151.897 54.5869L152.573 55.5979L151.625 56.2313L148.922 52.187L149.87 51.5537L150.514 52.5173L154.843 49.625C155.464 49.2098 155.834 48.7949 155.953 48.3802C156.083 47.9585 155.975 47.4896 155.63 46.9736C155.497 46.7735 155.34 46.5962 155.161 46.4418C154.982 46.2874 154.781 46.17 154.56 46.0894C154.356 46.0123 154.138 45.9827 153.906 46.0005C153.674 46.0183 153.443 46.1046 153.211 46.2594L148.456 49.4367L149.1 50.4004L148.152 51.0338L145.45 46.9895L146.397 46.3561Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M151.053 65.0022C150.714 64.183 150.477 63.479 150.343 62.8902C150.214 62.3132 150.172 61.8161 150.219 61.3992C150.259 60.9988 150.379 60.6751 150.578 60.428C150.777 60.181 151.035 59.992 151.351 59.8611C151.795 59.6769 152.244 59.7173 152.697 59.9823C153.149 60.2473 153.531 60.6237 153.843 61.1116L153.913 61.0825C153.842 60.6458 153.898 60.2523 154.082 59.9019C154.278 59.5467 154.598 59.277 155.043 59.0928C155.558 58.8795 156.032 58.8819 156.465 59.1001C156.898 59.3183 157.266 59.6455 157.571 60.0817L157.658 60.0453C157.65 59.3632 157.8 58.7663 158.109 58.2544C158.423 57.7542 158.914 57.366 159.581 57.0897C160.06 56.891 160.524 56.8018 160.971 56.8222C161.423 56.8544 161.846 56.9809 162.239 57.202C162.637 57.4347 162.995 57.7526 163.313 58.1557C163.647 58.5656 163.93 59.0514 164.163 59.6132C164.352 60.0695 164.477 60.5044 164.539 60.9176C164.6 61.3309 164.609 61.7319 164.564 62.1205C165.239 61.8959 165.778 61.8576 166.182 62.0055C166.603 62.1604 166.913 62.4777 167.111 62.9575C167.242 63.2734 167.258 63.5755 167.158 63.8637C167.069 64.1471 166.856 64.3591 166.516 64.4996C166.212 64.6257 165.919 64.6304 165.638 64.5139C165.368 64.3925 165.163 64.1621 165.022 63.8227C164.945 63.6355 164.907 63.4454 164.91 63.2525C164.912 63.0596 164.962 62.8814 165.058 62.7179L165.029 62.6477L164.397 62.9094C164.275 63.2755 164.084 63.6084 163.824 63.9079C163.569 64.2192 163.201 64.4742 162.722 64.6729C162.242 64.8717 161.77 64.9574 161.306 64.9301C160.854 64.898 160.429 64.7656 160.031 64.5328C159.638 64.3118 159.274 63.9963 158.94 63.5864C158.617 63.1716 158.34 62.6834 158.107 62.1216C157.937 61.7121 157.815 61.2831 157.739 60.8347C157.562 60.6746 157.366 60.564 157.149 60.5032C156.943 60.4375 156.747 60.4434 156.56 60.5209C156.302 60.6276 156.148 60.8012 156.097 61.0417C156.062 61.2892 156.137 61.6352 156.321 62.0799L157.172 64.1337C157.671 65.339 157.807 66.2971 157.581 67.0079C157.354 67.7187 156.855 68.2341 156.083 68.554C155.135 68.9467 154.227 68.8566 153.359 68.2838C152.491 67.711 151.722 66.6171 151.053 65.0022ZM159.185 61.6957C159.602 62.7021 160.372 62.9726 161.496 62.5073L162.022 62.2891C163.146 61.8238 163.499 61.0879 163.082 60.0815C162.665 59.0751 161.895 58.8046 160.772 59.2699L160.245 59.488C159.122 59.9534 158.768 60.6893 159.185 61.6957ZM152.311 61.6842C151.516 62.0138 151.394 62.8457 151.947 64.1798L152.376 65.2154C152.681 65.9527 153.023 66.4625 153.4 66.7449C153.782 67.039 154.19 67.0963 154.623 66.917C155.033 66.7473 155.261 66.4881 155.309 66.1394C155.349 65.8072 155.251 65.3544 155.013 64.781L153.806 61.8671C153.569 61.6912 153.332 61.5836 153.097 61.5441C152.854 61.5212 152.592 61.5679 152.311 61.6842Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M159.772 88.8891C159.772 87.8631 160.019 87.1031 160.513 86.6091C161.007 86.1151 161.691 85.8681 162.565 85.8681C163.528 85.8681 164.256 86.2164 164.75 86.9131C165.244 87.6224 165.491 88.7244 165.491 90.2191V91.5681H166.688C167.461 91.5681 168.043 91.4097 168.436 91.0931C168.841 90.7764 169.044 90.2571 169.044 89.5351C169.044 88.9777 168.962 88.5471 168.797 88.2431H168.721C168.645 88.3697 168.525 88.4901 168.36 88.6041C168.208 88.7307 167.993 88.7941 167.714 88.7941C167.347 88.7941 167.043 88.6801 166.802 88.4521C166.574 88.2367 166.46 87.9137 166.46 87.4831C166.46 87.1157 166.58 86.8117 166.821 86.5711C167.062 86.3431 167.378 86.2291 167.771 86.2291C168.075 86.2291 168.366 86.3114 168.645 86.4761C168.936 86.6534 169.19 86.9131 169.405 87.2551C169.633 87.5971 169.81 88.0151 169.937 88.5091C170.076 89.0157 170.146 89.5984 170.146 90.2571C170.146 91.5237 169.855 92.4737 169.272 93.1071C168.702 93.7404 167.898 94.0571 166.859 94.0571H161.121V95.2731H160.171C160.044 95.0831 159.949 94.8297 159.886 94.5131C159.81 94.1964 159.772 93.8734 159.772 93.5441C159.772 92.9107 159.924 92.4547 160.228 92.1761C160.545 91.8974 160.944 91.7581 161.425 91.7581H161.482V91.6631C161.267 91.5744 161.058 91.4604 160.855 91.3211C160.652 91.1817 160.469 91.0044 160.304 90.7891C160.152 90.5737 160.025 90.3077 159.924 89.9911C159.823 89.6871 159.772 89.3197 159.772 88.8891ZM161.292 89.8581C161.292 90.3647 161.412 90.7764 161.653 91.0931C161.894 91.4097 162.299 91.5681 162.869 91.5681H164.465V90.4851C164.465 89.7251 164.326 89.1804 164.047 88.8511C163.781 88.5344 163.395 88.3761 162.888 88.3761H162.546C162.115 88.3761 161.799 88.5091 161.596 88.7751C161.393 89.0537 161.292 89.4147 161.292 89.8581Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M168.582 98.7458L168.76 97.8513L169.878 98.0737L168.966 102.658L167.848 102.436L168.085 101.243L161.591 101.559L161.572 101.652L168.458 105.211L168.066 107.186L160.342 107.839L160.323 107.932L166.202 110.709L166.44 109.517L167.558 109.739L166.887 113.112L165.769 112.89L165.947 111.995L157.834 107.786L158.212 105.885L165.671 105.102L165.69 105.009L159.098 101.431L159.476 99.5304L168.582 98.7458Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M154.182 117.376C154.472 116.674 154.849 116.096 155.311 115.643C155.768 115.202 156.284 114.881 156.861 114.681C157.449 114.486 158.077 114.41 158.744 114.454C159.419 114.514 160.107 114.689 160.809 114.98C161.535 115.28 162.149 115.651 162.651 116.093C163.161 116.551 163.543 117.052 163.797 117.596C164.064 118.145 164.201 118.723 164.21 119.33C164.215 119.948 164.086 120.574 163.824 121.206C163.562 121.838 163.222 122.361 162.803 122.777C162.391 123.21 161.924 123.524 161.405 123.72C160.88 123.928 160.315 124.016 159.711 123.985C159.114 123.971 158.493 123.83 157.85 123.564L157.306 123.338L159.749 117.44L159.117 117.179C158.274 116.83 157.535 116.777 156.899 117.021C156.27 117.282 155.808 117.769 155.512 118.483C155.241 119.138 155.169 119.725 155.297 120.244C155.425 120.763 155.666 121.206 156.022 121.573L155.139 122.215C154.89 121.988 154.657 121.707 154.44 121.37C154.23 121.05 154.067 120.681 153.952 120.263C153.833 119.857 153.784 119.412 153.806 118.928C153.829 118.443 153.954 117.926 154.182 117.376ZM160.767 117.862L159.313 121.373L159.541 121.467C160.383 121.816 161.067 121.921 161.591 121.782C162.11 121.654 162.485 121.309 162.718 120.748C162.951 120.186 162.934 119.665 162.667 119.184C162.406 118.72 161.855 118.313 161.013 117.964L160.767 117.862Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M147.918 128.906C148.291 128.348 148.692 127.976 149.121 127.79C149.549 127.604 149.924 127.557 150.243 127.649L150.285 127.586L149.448 127.026L150.356 125.668L152.82 127.314L151.913 128.673L151.628 128.483C151.207 128.201 150.793 128.115 150.385 128.223C149.977 128.332 149.576 128.681 149.182 129.271C148.479 130.324 148.485 131.09 149.201 131.568C149.496 131.765 149.791 131.825 150.086 131.748C150.392 131.678 150.731 131.479 151.104 131.149L151.837 130.496C152.653 129.777 153.41 129.338 154.11 129.181C154.812 129.041 155.522 129.211 156.238 129.689C157.038 130.224 157.479 130.899 157.559 131.714C157.649 132.536 157.399 133.39 156.808 134.274C156.449 134.811 156.067 135.166 155.663 135.338C155.262 135.527 154.902 135.576 154.583 135.484L154.54 135.547L155.33 136.075L154.422 137.434L151.958 135.787L152.866 134.428L153.245 134.682C153.645 134.949 154.038 135.021 154.425 134.899C154.812 134.776 155.195 134.431 155.575 133.862C156.18 132.956 156.151 132.282 155.487 131.838C155.182 131.634 154.875 131.558 154.566 131.611C154.249 131.674 153.891 131.891 153.49 132.263L152.82 132.89C152.032 133.612 151.296 134.065 150.611 134.247C149.925 134.429 149.198 134.263 148.429 133.749C147.618 133.207 147.171 132.497 147.088 131.619C147.008 130.758 147.285 129.854 147.918 128.906Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M139.87 140.575C139.387 141.059 139.176 141.565 139.239 142.094C139.293 142.631 139.588 143.168 140.126 143.706L142.302 145.882C142.84 146.42 143.377 146.715 143.914 146.769C144.443 146.832 144.949 146.621 145.433 146.138C145.916 145.654 146.131 145.143 146.077 144.606C146.015 144.077 145.715 143.545 145.177 143.007L143.001 140.831C142.463 140.293 141.931 139.993 141.402 139.931C140.865 139.877 140.354 140.092 139.87 140.575ZM138.984 139.689C139.485 139.187 140.023 138.811 140.596 138.56C141.169 138.327 141.76 138.22 142.369 138.238C142.978 138.274 143.587 138.435 144.197 138.721C144.815 139.017 145.41 139.451 145.983 140.025C146.557 140.598 146.987 141.189 147.273 141.798C147.569 142.416 147.73 143.025 147.757 143.625C147.784 144.243 147.676 144.834 147.434 145.399C147.193 145.981 146.821 146.523 146.319 147.024C145.818 147.526 145.28 147.893 144.707 148.126C144.134 148.377 143.543 148.484 142.934 148.448C142.325 148.43 141.711 148.274 141.093 147.978C140.484 147.692 139.893 147.262 139.32 146.688C138.746 146.115 138.312 145.52 138.016 144.901C137.73 144.292 137.573 143.679 137.546 143.061C137.519 142.461 137.627 141.87 137.869 141.287C138.11 140.723 138.482 140.19 138.984 139.689Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M136.081 144.769L135.07 145.444L138.986 151.305L140.134 150.835L140.662 151.625L138.035 154.294L137.011 152.762L136.932 152.815C136.992 153.064 137.019 153.321 137.012 153.584C137.002 153.865 136.948 154.137 136.85 154.401C136.759 154.675 136.615 154.939 136.419 155.192C136.212 155.452 135.945 155.691 135.618 155.909C134.923 156.374 134.293 156.605 133.727 156.602C133.162 156.599 132.629 156.383 132.13 155.955L132.067 155.997C132.116 156.254 132.136 156.523 132.125 156.804C132.105 157.092 132.043 157.376 131.942 157.658C131.83 157.946 131.67 158.22 131.463 158.48C131.253 158.758 130.974 159.013 130.626 159.245C129.657 159.892 128.8 160.092 128.055 159.843C127.307 159.612 126.591 158.986 125.908 157.964L122.953 153.541L121.942 154.216L121.308 153.268L125.305 150.598L125.939 151.546L125.022 152.158L127.915 156.487C128.33 157.108 128.74 157.482 129.144 157.608C129.555 157.744 130.013 157.644 130.519 157.306C130.708 157.179 130.88 157.026 131.035 156.847C131.179 156.675 131.285 156.481 131.356 156.267C131.422 156.07 131.443 155.851 131.418 155.608C131.39 155.383 131.298 155.155 131.143 154.923L127.977 150.184L127.06 150.796L126.427 149.848L130.329 147.241L130.962 148.189L130.046 148.801L132.938 153.13C133.354 153.751 133.763 154.125 134.167 154.251C134.568 154.395 135.016 154.301 135.511 153.97C135.711 153.837 135.888 153.68 136.043 153.501C136.197 153.321 136.309 153.125 136.379 152.91C136.446 152.713 136.467 152.494 136.442 152.251C136.413 152.027 136.322 151.798 136.167 151.567L133 146.827L132.084 147.44L131.451 146.492L135.448 143.821L136.081 144.769Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M116.026 154.741C116.728 154.45 117.402 154.308 118.049 154.314C118.685 154.325 119.277 154.463 119.826 154.73C120.38 155.008 120.877 155.398 121.318 155.901C121.753 156.42 122.116 157.031 122.406 157.733C122.707 158.458 122.879 159.155 122.922 159.822C122.959 160.506 122.875 161.131 122.67 161.695C122.47 162.272 122.159 162.778 121.736 163.213C121.301 163.654 120.768 164.005 120.136 164.267C119.504 164.529 118.893 164.658 118.302 164.656C117.705 164.671 117.153 164.563 116.647 164.334C116.129 164.11 115.668 163.773 115.262 163.324C114.85 162.892 114.511 162.354 114.244 161.71L114.019 161.166L119.917 158.723L119.655 158.091C119.306 157.248 118.82 156.688 118.198 156.411C117.57 156.151 116.898 156.168 116.184 156.464C115.529 156.736 115.063 157.1 114.786 157.557C114.51 158.015 114.367 158.499 114.359 159.009L113.281 158.839C113.265 158.503 113.3 158.139 113.384 157.747C113.462 157.372 113.608 156.997 113.822 156.62C114.025 156.248 114.305 155.899 114.663 155.572C115.022 155.246 115.476 154.969 116.026 154.741ZM120.338 159.741L116.828 161.195L116.922 161.423C117.271 162.266 117.68 162.823 118.149 163.095C118.607 163.372 119.116 163.394 119.678 163.161C120.24 162.928 120.596 162.548 120.747 162.019C120.892 161.507 120.789 160.829 120.44 159.987L120.338 159.741Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M91.9544 161.14H90.7384V172.483L91.9544 172.73V173.68L88.2494 174.44V161.14H87.0334V160H91.9544V161.14Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M75.6709 158.289C76.4163 158.437 77.0563 158.693 77.5907 159.058C78.1128 159.42 78.5281 159.864 78.8367 160.391C79.1428 160.929 79.3397 161.53 79.4273 162.194C79.5 162.867 79.4623 163.576 79.314 164.321C79.1608 165.092 78.9168 165.766 78.5821 166.346C78.2324 166.935 77.8156 167.407 77.3315 167.763C76.845 168.131 76.305 168.379 75.7114 168.506C75.1054 168.631 74.467 168.627 73.7961 168.493C73.1253 168.36 72.545 168.128 72.0553 167.798C71.5507 167.478 71.1515 167.082 70.8579 166.611C70.5519 166.137 70.3551 165.6 70.2675 165.002C70.165 164.413 70.1817 163.777 70.3177 163.094L70.4326 162.516L76.6939 163.761L76.8273 163.091C77.0053 162.196 76.9126 161.461 76.5493 160.885C76.1711 160.319 75.6031 159.961 74.8453 159.81C74.1496 159.672 73.5597 159.716 73.0755 159.942C72.5913 160.169 72.2041 160.492 71.9139 160.912L71.112 160.172C71.2856 159.883 71.5163 159.6 71.8042 159.321C72.0772 159.053 72.4073 158.821 72.7946 158.627C73.1695 158.43 73.5967 158.296 74.076 158.223C74.5554 158.151 75.087 158.173 75.6709 158.289ZM76.4789 164.842L72.7519 164.101L72.7037 164.343C72.5258 165.238 72.5563 165.928 72.7953 166.415C73.0219 166.899 73.4333 167.2 74.0297 167.319C74.626 167.438 75.1339 167.319 75.5533 166.963C75.9579 166.618 76.2491 165.998 76.427 165.103L76.4789 164.842Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M64.3251 154.886C65.273 155.279 65.8806 155.798 66.148 156.443C66.4154 157.089 66.3818 157.815 66.0473 158.623C65.6789 159.512 65.0784 160.052 64.2457 160.241C63.4013 160.426 62.2887 160.233 60.9078 159.661L59.6615 159.145L59.2034 160.25C58.9077 160.964 58.831 161.563 58.9733 162.047C59.1108 162.543 59.513 162.929 60.1801 163.205C60.695 163.418 61.1244 163.507 61.4682 163.471L61.4973 163.401C61.4094 163.282 61.3443 163.125 61.3019 162.929C61.2431 162.741 61.267 162.517 61.3736 162.26C61.5142 161.921 61.7359 161.683 62.0386 161.548C62.3248 161.42 62.6668 161.438 63.0647 161.603C63.4041 161.744 63.6389 161.971 63.7691 162.286C63.8877 162.595 63.8718 162.931 63.7216 163.294C63.6052 163.575 63.4177 163.813 63.1589 164.007C62.8836 164.208 62.5467 164.343 62.1484 164.411C61.7451 164.491 61.2911 164.495 60.7862 164.423C60.2648 164.358 59.6998 164.199 59.0913 163.947C57.9211 163.462 57.1549 162.829 56.7927 162.049C56.4257 161.28 56.441 160.416 56.8384 159.456L59.0343 154.155L57.9108 153.689L58.2744 152.812C58.4984 152.767 58.7688 152.777 59.0856 152.839C59.4072 152.89 59.7202 152.979 60.0245 153.105C60.6096 153.347 60.9727 153.662 61.1138 154.05C61.2501 154.449 61.2261 154.871 61.0419 155.315L61.0201 155.368L61.1079 155.404C61.2722 155.239 61.4575 155.09 61.6638 154.956C61.8701 154.822 62.1042 154.72 62.3662 154.651C62.6233 154.592 62.9175 154.577 63.2488 154.605C63.5685 154.628 63.9272 154.721 64.3251 154.886ZM62.8482 155.92C62.3801 155.726 61.9537 155.679 61.5691 155.78C61.1844 155.882 60.883 156.196 60.6649 156.722L60.0541 158.197L61.0547 158.611C61.7568 158.902 62.3134 158.982 62.7243 158.85C63.1186 158.726 63.4127 158.429 63.6066 157.961L63.7375 157.645C63.9023 157.247 63.9006 156.904 63.7324 156.615C63.5525 156.321 63.2578 156.089 62.8482 155.92Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M52.1779 148.642C52.6834 148.979 53.0747 149.385 53.3517 149.86C53.6183 150.328 53.7758 150.844 53.8244 151.41C53.8554 151.979 53.774 152.58 53.5801 153.212C53.3687 153.847 53.0413 154.497 52.5979 155.161C52.1546 155.824 51.6832 156.37 51.1839 156.798C50.6671 157.229 50.1433 157.535 49.6126 157.713C49.0644 157.895 48.5233 157.953 47.9894 157.885C47.4449 157.811 46.9199 157.605 46.4144 157.267C45.8141 156.866 45.4246 156.4 45.246 155.87C45.0674 155.339 45.0222 154.836 45.1106 154.362L45.0316 154.309L42.7937 157.659L43.6676 158.54L43.1398 159.329L39.637 157.903L46.6988 147.334L45.825 146.453L46.3528 145.663L49.8556 147.09L48.9056 148.512L48.9846 148.564C49.3959 148.291 49.8861 148.139 50.4553 148.107C51.0139 148.069 51.5881 148.247 52.1779 148.642ZM50.633 149.483C50.1907 149.187 49.7183 149.062 49.2159 149.107C48.7064 149.163 48.2968 149.423 47.9872 149.886L45.9605 152.919C45.6508 153.383 45.5713 153.855 45.7219 154.337C45.8654 154.829 46.1583 155.222 46.6007 155.518C47.1273 155.87 47.6734 155.976 48.2392 155.836C48.805 155.696 49.306 155.299 49.7423 154.646L51.0301 152.719C51.4664 152.066 51.641 151.451 51.5537 150.875C51.4665 150.299 51.1596 149.835 50.633 149.483Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M32.2985 129.229C32.967 130.23 33.1893 131.11 32.9652 131.869C32.7307 132.635 32.1026 133.359 31.081 134.042L27.1473 136.67L27.6175 137.819L26.8276 138.346L24.1373 135.688L29.6034 132.036C30.2248 131.62 30.6002 131.202 30.7298 130.78C30.8488 130.366 30.7359 129.9 30.391 129.384C30.2573 129.184 30.1008 129.007 29.9215 128.852C29.7422 128.698 29.5506 128.582 29.3467 128.505C29.1253 128.425 28.8987 128.393 28.6668 128.411C28.435 128.429 28.2032 128.515 27.9715 128.67L23.7061 131.52L24.1868 132.684L23.3969 133.212L20.6961 130.538L27.6946 125.862L27.2244 124.713L28.0143 124.186L30.6835 126.812L29.1511 127.836L29.2038 127.915C29.4532 127.855 29.7184 127.83 29.9995 127.841C30.263 127.847 30.5353 127.901 30.8164 128.003C31.08 128.101 31.3384 128.248 31.5915 128.445C31.8447 128.641 32.0803 128.903 32.2985 129.229Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M25.4731 116.542C25.73 117.162 25.8166 117.702 25.7328 118.162C25.649 118.622 25.4802 118.959 25.2265 119.174L25.2555 119.244L26.1859 118.859L26.8112 120.368L24.0728 121.503L23.4475 119.993L23.7635 119.862C24.2316 119.668 24.5338 119.372 24.67 118.972C24.8063 118.573 24.7387 118.046 24.4673 117.391C23.9825 116.22 23.3423 115.8 22.5465 116.13C22.2189 116.265 22.005 116.477 21.905 116.766C21.7933 117.059 21.7711 117.452 21.8383 117.945L21.9736 118.917C22.1185 119.995 22.0621 120.868 21.8044 121.537C21.5302 122.199 20.9952 122.695 20.1995 123.025C19.3101 123.393 18.5043 123.384 17.7821 122.998C17.0483 122.616 16.4777 121.934 16.0706 120.951C15.8234 120.354 15.7406 119.84 15.8224 119.408C15.8876 118.97 16.0471 118.644 16.3009 118.429L16.2718 118.359L15.3942 118.722L14.7689 117.213L17.5072 116.078L18.1325 117.588L17.7112 117.762C17.2666 117.947 16.9878 118.233 16.8749 118.623C16.762 119.012 16.8365 119.523 17.0982 120.155C17.5151 121.162 18.0922 121.512 18.8294 121.207C19.1688 121.066 19.4026 120.853 19.5308 120.566C19.6542 120.269 19.6727 119.85 19.5861 119.31L19.4374 118.405C19.274 117.348 19.307 116.484 19.5364 115.814C19.7658 115.143 20.3077 114.63 21.1619 114.276C22.063 113.903 22.9019 113.926 23.6786 114.345C24.4387 114.756 25.0369 115.489 25.4731 116.542Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M21.4258 102.895C21.5741 103.64 21.5821 104.329 21.4497 104.963C21.3149 105.584 21.0635 106.137 20.6953 106.624C20.3147 107.113 19.8348 107.525 19.2557 107.86C18.6616 108.184 17.9919 108.421 17.2465 108.569C16.4763 108.722 15.7596 108.755 15.0964 108.667C14.4183 108.57 13.8224 108.366 13.3085 108.055C12.7821 107.746 12.3466 107.342 12.0018 106.842C11.6546 106.33 11.4142 105.739 11.2808 105.068C11.1474 104.397 11.1393 103.772 11.2567 103.193C11.3591 102.605 11.5721 102.085 11.8955 101.633C12.2164 101.169 12.6367 100.781 13.1562 100.472C13.6608 100.152 14.2547 99.9237 14.938 99.7877L15.5157 99.6728L16.7611 105.934L17.432 105.801C18.3265 105.623 18.9703 105.256 19.3633 104.7C19.7415 104.134 19.8552 103.472 19.7045 102.714C19.5661 102.018 19.2996 101.49 18.905 101.13C18.5104 100.769 18.0635 100.535 17.5643 100.428L17.9417 99.4034C18.2746 99.4534 18.6247 99.5581 18.9922 99.7175C19.3448 99.8669 19.6849 100.083 20.0125 100.367C20.3376 100.638 20.6254 100.981 20.8759 101.396C21.1264 101.811 21.3097 102.311 21.4258 102.895ZM15.6803 106.149L14.939 102.422L14.6967 102.47C13.8022 102.648 13.1759 102.941 12.8178 103.348C12.4572 103.742 12.3362 104.238 12.4548 104.834C12.5734 105.43 12.8773 105.854 13.3664 106.106C13.8406 106.347 14.525 106.379 15.4194 106.201L15.6803 106.149Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M18.86 93.7576V92.5416H11.811L11.564 93.7576H10.614L9.854 90.0906H11.697V89.9956C11.4563 89.907 11.2283 89.793 11.013 89.6536C10.785 89.5143 10.5887 89.3496 10.424 89.1596C10.2467 88.957 10.1073 88.729 10.006 88.4756C9.90467 88.2223 9.854 87.9373 9.854 87.6206C9.854 87.0126 10.0123 86.5376 10.329 86.1956C10.6457 85.841 11.0827 85.6636 11.64 85.6636C12.1213 85.6636 12.495 85.784 12.761 86.0246C13.027 86.2653 13.16 86.601 13.16 87.0316C13.16 87.4623 13.046 87.7916 12.818 88.0196C12.59 88.2476 12.3113 88.3616 11.982 88.3616C11.8047 88.3616 11.6463 88.3236 11.507 88.2476C11.3677 88.1716 11.279 88.083 11.241 87.9816H11.165C11.1523 88.0323 11.146 88.121 11.146 88.2476C11.146 88.463 11.2093 88.6783 11.336 88.8936C11.45 89.109 11.602 89.3053 11.792 89.4826C11.9693 89.6473 12.172 89.7866 12.4 89.9006C12.628 90.002 12.856 90.0526 13.084 90.0526H18.86V88.4566H20V93.7576H18.86Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M25.7389 69.1715L26.2042 68.0481L16.181 63.8964L15.4875 64.9253L14.6098 64.5617L15.3255 60.8479L16.9053 61.5023L16.9417 61.4145C16.5931 61.0645 16.3457 60.6192 16.1994 60.0788C16.0579 59.5266 16.1229 58.9228 16.3943 58.2675C16.627 57.7058 16.9466 57.2486 17.3532 56.896C17.7646 56.5317 18.2463 56.2789 18.7985 56.1374C19.3438 55.9794 19.9488 55.9421 20.6135 56.0254C21.2713 56.0923 21.9689 56.2784 22.7061 56.5838C23.4434 56.8891 24.0741 57.2532 24.5982 57.676C25.1155 58.0822 25.5169 58.5363 25.8024 59.0385C26.0812 59.5241 26.2372 60.0412 26.2705 60.5897C26.3086 61.1265 26.2113 61.6757 25.9787 62.2375C25.7024 62.9045 25.3214 63.3774 24.8358 63.6561C24.3502 63.9348 23.8662 64.0771 23.3839 64.083L23.3476 64.1707L27.1567 65.7485L27.7675 64.274L28.8207 64.7103L26.7921 69.6078L25.7389 69.1715ZM24.2266 62.3961C24.469 61.8109 24.4664 61.2546 24.2187 60.727C23.9711 60.1994 23.4845 59.7853 22.759 59.4848L20.6174 58.5977C19.8919 58.2972 19.255 58.2459 18.7069 58.4439C18.1587 58.6419 17.7635 59.0334 17.5211 59.6185C17.3175 60.11 17.2927 60.6002 17.4467 61.089C17.589 61.573 17.9176 61.9216 18.4325 62.1349L21.8028 63.5309C22.3177 63.7442 22.8025 63.7324 23.257 63.4957C23.6998 63.2541 24.023 62.8876 24.2266 62.3961Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M31.2209 50.1257C31.6009 49.557 31.7086 49.0196 31.5441 48.5136C31.3865 47.997 30.9918 47.5276 30.3599 47.1053L27.8006 45.3953C27.1687 44.973 26.5839 44.788 26.0464 44.8401C25.5159 44.8817 25.0606 45.1869 24.6806 45.7556C24.3006 46.3243 24.1893 46.867 24.3469 47.3836C24.5115 47.8896 24.9097 48.3538 25.5416 48.776L28.1009 50.4861C28.7328 50.9083 29.314 51.0986 29.8446 51.057C30.3821 51.0049 30.8409 50.6945 31.2209 50.1257ZM32.2636 50.8224C31.8695 51.4122 31.4158 51.886 30.9025 52.2438C30.3857 52.584 29.8269 52.8048 29.2261 52.906C28.6217 52.9897 27.9929 52.9504 27.3397 52.7881C26.6759 52.6188 26.007 52.3089 25.3329 51.8586C24.6589 51.4082 24.1219 50.9123 23.722 50.3708C23.3115 49.8224 23.0345 49.2565 22.8911 48.6731C22.7442 48.0722 22.7343 47.4715 22.8614 46.8709C22.985 46.2527 23.2438 45.6487 23.6379 45.0589C24.032 44.4691 24.4874 44.0041 25.0042 43.6639C25.5175 43.3061 26.0763 43.0854 26.6807 43.0017C27.2815 42.9004 27.9138 42.9345 28.5776 43.1038C29.2309 43.2661 29.8946 43.5724 30.5686 44.0228C31.2426 44.4732 31.7849 44.9726 32.1954 45.5211C32.5953 46.0625 32.8687 46.6337 33.0156 47.2346C33.1591 47.8179 33.169 48.4186 33.0454 49.0368C32.9183 49.6374 32.6577 50.2326 32.2636 50.8224Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M40.7851 40.5425C40.3104 41.0172 39.8446 41.3038 39.3878 41.4024C38.931 41.5009 38.5549 41.474 38.2593 41.3217L38.2055 41.3755L38.9176 42.0875L37.7622 43.243L35.6663 41.1471L36.8217 39.9917L37.0636 40.2335C37.4218 40.5918 37.8115 40.7575 38.2324 40.7306C38.6534 40.7037 39.1147 40.4395 39.6162 39.9379C40.5119 39.0423 40.6552 38.2899 40.0461 37.6809C39.7954 37.4301 39.5177 37.3136 39.2132 37.3315C38.8997 37.3405 38.528 37.4704 38.0981 37.7212L37.2517 38.2183C36.3112 38.7646 35.4827 39.0467 34.7662 39.0647C34.0496 39.0647 33.3868 38.7601 32.7778 38.1511C32.0971 37.4704 31.797 36.7225 31.8776 35.9074C31.9493 35.0834 32.3613 34.2952 33.1137 33.5429C33.5705 33.0861 34.0138 32.8129 34.4437 32.7233C34.8737 32.6158 35.2364 32.6382 35.532 32.7905L35.5857 32.7368L34.914 32.065L36.0694 30.9096L38.1652 33.0055L37.0098 34.1609L36.6874 33.8384C36.347 33.4981 35.9753 33.3503 35.5723 33.3951C35.1692 33.4399 34.7259 33.7041 34.2422 34.1877C33.4719 34.958 33.3689 35.6253 33.9332 36.1896C34.193 36.4493 34.4796 36.5837 34.793 36.5926C35.1155 36.5926 35.5096 36.4493 35.9753 36.1627L36.7546 35.679C37.6681 35.1237 38.4787 34.8237 39.1863 34.7789C39.8939 34.7341 40.5746 35.0386 41.2284 35.6925C41.9181 36.3821 42.2181 37.1658 42.1286 38.0436C42.039 38.9034 41.5912 39.7364 40.7851 40.5425Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M51.9752 31.425C51.3538 31.8402 50.8182 32.0076 50.3684 31.9273C49.9292 31.8399 49.5266 31.5224 49.1607 30.9747L45.3078 25.2085L44.2178 25.9368L43.5422 24.9258L43.8897 24.6935C44.2584 24.4472 44.4759 24.2028 44.5424 23.9604C44.6019 23.7074 44.5945 23.4 44.5204 23.0382L44.1707 21.2838L45.2134 20.5871L46.7018 22.8146L48.5975 21.5479L49.2731 22.559L47.3773 23.8257L51.5575 30.0816L53.4532 28.8149L53.9916 29.6206C53.8793 29.8175 53.639 30.0847 53.2704 30.4224C52.9019 30.76 52.4702 31.0942 51.9752 31.425Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M63.4572 25.4735C62.837 25.7304 62.297 25.8169 61.8373 25.7331C61.3775 25.6494 61.0403 25.4806 60.8255 25.2268L60.7553 25.2559L61.1406 26.1862L59.631 26.8115L58.4967 24.0732L60.0063 23.4479L60.1372 23.7638C60.3311 24.2319 60.6277 24.5341 61.0269 24.6704C61.4261 24.8066 61.9533 24.7391 62.6087 24.4676C63.7789 23.9829 64.1992 23.3426 63.8696 22.5469C63.7339 22.2192 63.5219 22.0054 63.2337 21.9054C62.9407 21.7937 62.5476 21.7714 62.0544 21.8386L61.0822 21.9739C60.0043 22.1188 59.1309 22.0624 58.462 21.8048C57.8 21.5306 57.3042 20.9956 56.9746 20.1998C56.6062 19.3104 56.6152 18.5046 57.0016 17.7825C57.3831 17.0486 58.0654 16.4781 59.0484 16.0709C59.6452 15.8237 60.1594 15.741 60.5908 15.8227C61.0292 15.888 61.3557 16.0475 61.5705 16.3013L61.6407 16.2722L61.2772 15.3945L62.7868 14.7692L63.9211 17.5076L62.4115 18.1329L62.237 17.7116C62.0528 17.2669 61.7659 16.9881 61.3764 16.8752C60.9869 16.7624 60.4762 16.8368 59.8442 17.0986C58.8378 17.5154 58.4873 18.0925 58.7927 18.8298C58.9333 19.1691 59.1466 19.4029 59.4328 19.5312C59.7307 19.6546 60.1497 19.673 60.6897 19.5864L61.5947 19.4378C62.6512 19.2744 63.5149 19.3073 64.1858 19.5367C64.8566 19.7661 65.369 20.308 65.7228 21.1623C66.0961 22.0634 66.0734 22.9022 65.6547 23.6789C65.2429 24.439 64.5104 25.0372 63.4572 25.4735Z",
          fill: "black",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M76.3906 21.5681C75.9061 21.6645 75.4988 21.597 75.1686 21.3656C74.8509 21.1318 74.6513 20.8098 74.5697 20.3999L74.5512 20.3067C74.4696 19.8967 74.5309 19.5229 74.7349 19.1853C74.9514 18.8452 75.3019 18.627 75.7864 18.5306C76.2709 18.4342 76.672 18.503 76.9898 18.7368C77.3199 18.9682 77.5258 19.2888 77.6073 19.6988L77.6258 19.792C77.7074 20.2019 77.6399 20.577 77.4234 20.9171C77.2194 21.2547 76.8751 21.4717 76.3906 21.5681ZM73.0401 11.5411L72.4544 8.59676L75.0633 8.07782L75.6489 11.0221L76.0596 17.372L75.0906 17.5648L73.0401 11.5411Z",
          fill: "black",
        },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/file-icon.vue?vue&type=template&id=e93274be&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/file-icon.vue?vue&type=template&id=e93274be& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        width: "63",
        height: "80",
        viewBox: "0 0 63 80",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
    },
    [
      _c("path", {
        attrs: {
          d: "M59.1543 20.2425V62.6321H3.8457V1H39.0979L59.1543 20.2425Z",
          fill: "#33373A",
          stroke: "#404E51",
          "stroke-width": "2",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M27.1075 43.5293H35.8925V46.4576H27.1075V43.5293ZM38.6832 34.3226C40.1913 32.5569 41.7491 30.7311 41.7491 27.4235C41.7491 21.7734 37.1502 17.1744 31.5 17.1744C25.8498 17.1744 21.2509 21.7734 21.2509 27.4235C21.2509 30.7691 22.8132 32.5891 24.3271 34.349C24.8513 34.961 25.3945 35.595 25.9143 36.3242C26.1251 36.6258 26.4706 37.7825 26.7796 39.1368H25.6434V42.0651H37.3566V39.1368H36.2234C36.5353 37.7795 36.8823 36.6199 37.0916 36.3183C37.607 35.5818 38.1546 34.942 38.6832 34.3226ZM34.6948 34.6345C34.0594 35.5379 33.5293 37.6726 33.2219 39.1368H29.7796C29.4736 37.6697 28.9421 35.5306 28.2994 34.6272C27.75 33.8722 27.1656 33.1432 26.5482 32.4427C25.1221 30.7823 24.1792 29.6842 24.1792 27.4235C24.1792 23.3869 27.4633 20.1028 31.5 20.1028C35.5367 20.1028 38.8208 23.3869 38.8208 27.4235C38.8208 29.6505 37.8793 30.753 36.4562 32.4207C35.9101 33.062 35.2907 33.7868 34.6948 34.6345Z",
          fill: "#404E51",
        },
      }),
      _vm._v(" "),
      _c("path", {
        attrs: {
          d: "M0.944313 77.6321L1.88031 72.0481H2.52831L1.69631 77.0561H4.34431L4.24831 77.6321H0.944313ZM7.33319 77.7281C6.81052 77.7281 6.40785 77.5841 6.12519 77.2961C5.84252 77.0027 5.70119 76.5574 5.70119 75.9601C5.70119 75.5867 5.75719 75.2454 5.86919 74.9361C5.98119 74.6214 6.13585 74.3521 6.33319 74.1281C6.53585 73.8987 6.77585 73.7227 7.05319 73.6001C7.33585 73.4721 7.64252 73.4081 7.97319 73.4081C8.17585 73.4081 8.36252 73.4321 8.53319 73.4801C8.70385 73.5281 8.85052 73.6001 8.97319 73.6961C9.10119 73.7867 9.19985 73.9014 9.26919 74.0401C9.33852 74.1787 9.37319 74.3387 9.37319 74.5201C9.37319 74.6641 9.33852 74.8134 9.26919 74.9681C9.20519 75.1227 9.06652 75.2667 8.85319 75.4001C8.64519 75.5334 8.34119 75.6454 7.94119 75.7361C7.54652 75.8267 7.02119 75.8801 6.36519 75.8961C6.35985 75.9387 6.35719 75.9787 6.35719 76.0161C6.35719 76.0481 6.35719 76.0694 6.35719 76.0801C6.35719 76.2241 6.37052 76.3627 6.39719 76.4961C6.42385 76.6294 6.47452 76.7494 6.54919 76.8561C6.62385 76.9574 6.72785 77.0401 6.86119 77.1041C6.99452 77.1627 7.17052 77.1921 7.38919 77.1921C7.53852 77.1921 7.67185 77.1761 7.78919 77.1441C7.91185 77.1067 8.02652 77.0534 8.13319 76.9841C8.24519 76.9094 8.35185 76.8161 8.45319 76.7041C8.55985 76.5867 8.67185 76.4454 8.78919 76.2801L9.22919 76.5521C8.99452 76.9361 8.72785 77.2294 8.42919 77.4321C8.13585 77.6294 7.77052 77.7281 7.33319 77.7281ZM7.91719 73.9281C7.50119 73.9281 7.16252 74.0534 6.90119 74.3041C6.63985 74.5547 6.47985 74.9147 6.42119 75.3841L6.41319 75.4641C6.91452 75.4481 7.31719 75.4107 7.62119 75.3521C7.93052 75.2881 8.16519 75.2134 8.32519 75.1281C8.49052 75.0427 8.59985 74.9494 8.65319 74.8481C8.70652 74.7467 8.73319 74.6454 8.73319 74.5441C8.73319 74.4587 8.71719 74.3787 8.68519 74.3041C8.65852 74.2294 8.61319 74.1654 8.54919 74.1121C8.48519 74.0534 8.39985 74.0081 8.29319 73.9761C8.19185 73.9441 8.06652 73.9281 7.91719 73.9281ZM12.9781 77.6321L13.1381 76.6561H13.1141C12.9541 76.9814 12.7594 77.2427 12.5301 77.4401C12.3061 77.6321 12.0127 77.7281 11.6501 77.7281C11.2341 77.7281 10.9141 77.5947 10.6901 77.3281C10.4714 77.0614 10.3621 76.6614 10.3621 76.1281C10.3621 75.8507 10.3941 75.5547 10.4581 75.2401C10.5274 74.9201 10.6367 74.6241 10.7861 74.3521C10.9407 74.0801 11.1434 73.8561 11.3941 73.6801C11.6447 73.4987 11.9514 73.4081 12.3141 73.4081C12.6181 73.4081 12.8714 73.4774 13.0741 73.6161C13.2821 73.7494 13.4314 73.9521 13.5221 74.2241H13.5461L13.6661 73.5041H14.2901L13.6021 77.6321H12.9781ZM11.8661 77.1761C12.0367 77.1761 12.2047 77.1414 12.3701 77.0721C12.5354 76.9974 12.6901 76.8801 12.8341 76.7201C12.9407 76.6027 13.0341 76.4641 13.1141 76.3041C13.1994 76.1441 13.2581 75.9681 13.2901 75.7761L13.4421 74.8641C13.4901 74.5761 13.4207 74.3547 13.2341 74.2001C13.0527 74.0401 12.8074 73.9601 12.4981 73.9601C12.0981 73.9601 11.7834 74.0801 11.5541 74.3201C11.3301 74.5601 11.1861 74.8721 11.1221 75.2561L11.0261 75.8321C11.0154 75.9067 11.0074 75.9734 11.0021 76.0321C10.9967 76.0854 10.9941 76.1387 10.9941 76.1921C10.9941 76.5014 11.0661 76.7441 11.2101 76.9201C11.3594 77.0907 11.5781 77.1761 11.8661 77.1761ZM17.9349 76.6561H17.9109C17.7509 76.9814 17.5563 77.2427 17.3269 77.4401C17.1029 77.6321 16.8096 77.7281 16.4469 77.7281C16.0309 77.7281 15.7109 77.5947 15.4869 77.3281C15.2683 77.0614 15.1589 76.6614 15.1589 76.1281C15.1589 75.8507 15.1909 75.5547 15.2549 75.2401C15.3243 74.9201 15.4336 74.6241 15.5829 74.3521C15.7376 74.0801 15.9403 73.8561 16.1909 73.6801C16.4416 73.4987 16.7483 73.4081 17.1109 73.4081C17.4149 73.4081 17.6683 73.4774 17.8709 73.6161C18.0789 73.7494 18.2283 73.9521 18.3189 74.2241H18.3429L18.7669 71.7121H19.3909L18.3989 77.6321H17.7749L17.9349 76.6561ZM16.6629 77.1761C16.8336 77.1761 17.0016 77.1414 17.1669 77.0721C17.3323 76.9974 17.4869 76.8801 17.6309 76.7201C17.7376 76.6027 17.8309 76.4641 17.9109 76.3041C17.9963 76.1441 18.0549 75.9681 18.0869 75.7761L18.2389 74.8641C18.2869 74.5761 18.2176 74.3547 18.0309 74.2001C17.8496 74.0401 17.6043 73.9601 17.2949 73.9601C16.8949 73.9601 16.5803 74.0801 16.3509 74.3201C16.1269 74.5601 15.9829 74.8721 15.9189 75.2561L15.8229 75.8321C15.8123 75.9067 15.8043 75.9734 15.7989 76.0321C15.7936 76.0854 15.7909 76.1387 15.7909 76.1921C15.7909 76.5014 15.8629 76.7441 16.0069 76.9201C16.1563 77.0907 16.3749 77.1761 16.6629 77.1761ZM21.3958 72.0481L20.8598 75.2481C20.8331 75.3921 20.8118 75.5174 20.7958 75.6241C20.7851 75.7254 20.7745 75.8134 20.7638 75.8881C20.7531 75.9627 20.7451 76.0294 20.7398 76.0881C20.7398 76.1467 20.7398 76.2001 20.7398 76.2481C20.7398 76.3867 20.7531 76.5121 20.7798 76.6241C20.8065 76.7361 20.8518 76.8321 20.9158 76.9121C20.9851 76.9867 21.0785 77.0454 21.1958 77.0881C21.3131 77.1307 21.4598 77.1521 21.6358 77.1521C21.8971 77.1521 22.1078 77.1147 22.2678 77.0401C22.4278 76.9654 22.5558 76.8561 22.6518 76.7121C22.7478 76.5627 22.8198 76.3814 22.8678 76.1681C22.9211 75.9547 22.9718 75.7121 23.0198 75.4401L23.5878 72.0481H24.2438L23.6998 75.3041C23.6305 75.7201 23.5531 76.0801 23.4678 76.3841C23.3825 76.6881 23.2678 76.9414 23.1238 77.1441C22.9798 77.3414 22.7905 77.4881 22.5558 77.5841C22.3265 77.6801 22.0278 77.7281 21.6598 77.7281C21.0891 77.7281 20.6838 77.6054 20.4438 77.3601C20.2091 77.1147 20.0918 76.7627 20.0918 76.3041C20.0918 76.1334 20.1051 75.9361 20.1318 75.7121C20.1638 75.4881 20.1985 75.2667 20.2358 75.0481L20.7398 72.0481H21.3958ZM26.4487 77.7281C26.0487 77.7281 25.6994 77.6614 25.4007 77.5281C25.1074 77.3947 24.87 77.2027 24.6887 76.9521L25.1527 76.5841C25.3127 76.7867 25.4994 76.9414 25.7127 77.0481C25.926 77.1494 26.19 77.2001 26.5047 77.2001C26.8727 77.2001 27.1607 77.1307 27.3687 76.9921C27.5767 76.8534 27.6807 76.6587 27.6807 76.4081C27.6807 76.2161 27.622 76.0854 27.5047 76.0161C27.3927 75.9414 27.2514 75.8907 27.0807 75.8641L26.4807 75.7761C26.3314 75.7547 26.182 75.7254 26.0327 75.6881C25.8887 75.6454 25.758 75.5841 25.6407 75.5041C25.5287 75.4241 25.4354 75.3227 25.3607 75.2001C25.2914 75.0721 25.2567 74.9121 25.2567 74.7201C25.2567 74.5014 25.302 74.3121 25.3927 74.1521C25.4887 73.9867 25.6167 73.8507 25.7767 73.7441C25.9367 73.6321 26.1234 73.5494 26.3367 73.4961C26.55 73.4374 26.7794 73.4081 27.0247 73.4081C27.3874 73.4081 27.6967 73.4641 27.9527 73.5761C28.2087 73.6881 28.414 73.8427 28.5687 74.0401L28.1287 74.4241C28.0914 74.3707 28.0407 74.3147 27.9767 74.2561C27.918 74.1974 27.8407 74.1441 27.7447 74.0961C27.654 74.0481 27.542 74.0107 27.4087 73.9841C27.2807 73.9521 27.1287 73.9361 26.9527 73.9361C26.5954 73.9361 26.3234 74.0027 26.1367 74.1361C25.9554 74.2694 25.8647 74.4481 25.8647 74.6721C25.8647 74.7734 25.8807 74.8561 25.9127 74.9201C25.95 74.9841 25.998 75.0374 26.0567 75.0801C26.1154 75.1174 26.182 75.1467 26.2567 75.1681C26.3367 75.1841 26.4194 75.2001 26.5047 75.2161L27.0887 75.3121C27.222 75.3334 27.358 75.3627 27.4967 75.4001C27.6407 75.4321 27.7714 75.4854 27.8887 75.5601C28.006 75.6294 28.102 75.7281 28.1767 75.8561C28.2567 75.9787 28.2967 76.1414 28.2967 76.3441C28.2967 76.5574 28.2514 76.7494 28.1607 76.9201C28.0754 77.0907 27.95 77.2374 27.7847 77.3601C27.6247 77.4774 27.43 77.5681 27.2007 77.6321C26.9767 77.6961 26.726 77.7281 26.4487 77.7281ZM31.3176 77.7281C30.7949 77.7281 30.3922 77.5841 30.1096 77.2961C29.8269 77.0027 29.6856 76.5574 29.6856 75.9601C29.6856 75.5867 29.7416 75.2454 29.8536 74.9361C29.9656 74.6214 30.1202 74.3521 30.3176 74.1281C30.5202 73.8987 30.7602 73.7227 31.0376 73.6001C31.3202 73.4721 31.6269 73.4081 31.9576 73.4081C32.1602 73.4081 32.3469 73.4321 32.5176 73.4801C32.6882 73.5281 32.8349 73.6001 32.9576 73.6961C33.0856 73.7867 33.1842 73.9014 33.2536 74.0401C33.3229 74.1787 33.3576 74.3387 33.3576 74.5201C33.3576 74.6641 33.3229 74.8134 33.2536 74.9681C33.1896 75.1227 33.0509 75.2667 32.8376 75.4001C32.6296 75.5334 32.3256 75.6454 31.9256 75.7361C31.5309 75.8267 31.0056 75.8801 30.3496 75.8961C30.3442 75.9387 30.3416 75.9787 30.3416 76.0161C30.3416 76.0481 30.3416 76.0694 30.3416 76.0801C30.3416 76.2241 30.3549 76.3627 30.3816 76.4961C30.4082 76.6294 30.4589 76.7494 30.5336 76.8561C30.6082 76.9574 30.7122 77.0401 30.8456 77.1041C30.9789 77.1627 31.1549 77.1921 31.3736 77.1921C31.5229 77.1921 31.6562 77.1761 31.7736 77.1441C31.8962 77.1067 32.0109 77.0534 32.1176 76.9841C32.2296 76.9094 32.3362 76.8161 32.4376 76.7041C32.5442 76.5867 32.6562 76.4454 32.7736 76.2801L33.2136 76.5521C32.9789 76.9361 32.7122 77.2294 32.4136 77.4321C32.1202 77.6294 31.7549 77.7281 31.3176 77.7281ZM31.9016 73.9281C31.4856 73.9281 31.1469 74.0534 30.8856 74.3041C30.6242 74.5547 30.4642 74.9147 30.4056 75.3841L30.3976 75.4641C30.8989 75.4481 31.3016 75.4107 31.6056 75.3521C31.9149 75.2881 32.1496 75.2134 32.3096 75.1281C32.4749 75.0427 32.5842 74.9494 32.6376 74.8481C32.6909 74.7467 32.7176 74.6454 32.7176 74.5441C32.7176 74.4587 32.7016 74.3787 32.6696 74.3041C32.6429 74.2294 32.5976 74.1654 32.5336 74.1121C32.4696 74.0534 32.3842 74.0081 32.2776 73.9761C32.1762 73.9441 32.0509 73.9281 31.9016 73.9281ZM35.3224 77.6321L35.9224 74.0401H34.7624L34.8504 73.5041H36.6344L36.4504 74.6081H36.4904C36.5598 74.4427 36.6398 74.2934 36.7304 74.1601C36.8211 74.0214 36.9251 73.9041 37.0424 73.8081C37.1651 73.7121 37.3038 73.6374 37.4584 73.5841C37.6131 73.5307 37.7891 73.5041 37.9864 73.5041H38.6104L38.5064 74.1281H37.8024C37.5624 74.1281 37.3624 74.1627 37.2024 74.2321C37.0424 74.2961 36.9011 74.4001 36.7784 74.5441C36.7518 74.5761 36.7144 74.6214 36.6664 74.6801C36.6238 74.7334 36.5784 74.8001 36.5304 74.8801C36.4824 74.9601 36.4371 75.0507 36.3944 75.1521C36.3571 75.2534 36.3278 75.3627 36.3064 75.4801L35.9464 77.6321H35.3224ZM40.7513 77.7041C40.5646 77.7041 40.4313 77.6694 40.3513 77.6001C40.2713 77.5307 40.2313 77.4454 40.2313 77.3441C40.2313 77.3121 40.234 77.2747 40.2393 77.2321C40.2446 77.1841 40.2526 77.1361 40.2633 77.0881C40.29 76.9441 40.354 76.8294 40.4553 76.7441C40.5566 76.6587 40.7086 76.6161 40.9113 76.6161C41.098 76.6161 41.2313 76.6507 41.3113 76.7201C41.3913 76.7894 41.4313 76.8747 41.4313 76.9761C41.4313 77.0081 41.4286 77.0481 41.4233 77.0961C41.418 77.1387 41.41 77.1841 41.3993 77.2321C41.3726 77.3761 41.3086 77.4907 41.2073 77.5761C41.106 77.6614 40.954 77.7041 40.7513 77.7041ZM45.6922 79.3281C45.6122 79.3281 45.5349 79.3121 45.4602 79.2801C45.3855 79.2534 45.3029 79.2027 45.2122 79.1281C45.1269 79.0587 45.0255 78.9627 44.9082 78.8401C44.7909 78.7174 44.6469 78.5627 44.4762 78.3761L43.9562 77.8081L44.3802 77.4241L45.6442 78.7681L45.7882 78.7361L46.5722 74.0401H44.8682L44.9562 73.5041H47.2842L46.4522 78.4881C46.4362 78.6001 46.4095 78.7067 46.3722 78.8081C46.3349 78.9094 46.2842 78.9974 46.2202 79.0721C46.1615 79.1521 46.0869 79.2134 45.9962 79.2561C45.9109 79.3041 45.8095 79.3281 45.6922 79.3281ZM47.1482 72.5841C46.9775 72.5841 46.8575 72.5521 46.7882 72.4881C46.7189 72.4241 46.6842 72.3494 46.6842 72.2641C46.6842 72.2321 46.6869 72.1974 46.6922 72.1601C46.6975 72.1227 46.7055 72.0801 46.7162 72.0321C46.7375 71.9094 46.7909 71.8161 46.8762 71.7521C46.9615 71.6827 47.0842 71.6481 47.2442 71.6481C47.4149 71.6481 47.5349 71.6801 47.6042 71.7441C47.6735 71.8081 47.7082 71.8827 47.7082 71.9681C47.7082 72.0001 47.7055 72.0347 47.7002 72.0721C47.6949 72.1094 47.6869 72.1521 47.6762 72.2001C47.6549 72.3227 47.6015 72.4187 47.5162 72.4881C47.4309 72.5521 47.3082 72.5841 47.1482 72.5841ZM50.4331 77.7281C50.0331 77.7281 49.6837 77.6614 49.3851 77.5281C49.0917 77.3947 48.8544 77.2027 48.6731 76.9521L49.1371 76.5841C49.2971 76.7867 49.4837 76.9414 49.6971 77.0481C49.9104 77.1494 50.1744 77.2001 50.4891 77.2001C50.8571 77.2001 51.1451 77.1307 51.3531 76.9921C51.5611 76.8534 51.6651 76.6587 51.6651 76.4081C51.6651 76.2161 51.6064 76.0854 51.4891 76.0161C51.3771 75.9414 51.2357 75.8907 51.0651 75.8641L50.4651 75.7761C50.3157 75.7547 50.1664 75.7254 50.0171 75.6881C49.8731 75.6454 49.7424 75.5841 49.6251 75.5041C49.5131 75.4241 49.4197 75.3227 49.3451 75.2001C49.2757 75.0721 49.2411 74.9121 49.2411 74.7201C49.2411 74.5014 49.2864 74.3121 49.3771 74.1521C49.4731 73.9867 49.6011 73.8507 49.7611 73.7441C49.9211 73.6321 50.1077 73.5494 50.3211 73.4961C50.5344 73.4374 50.7637 73.4081 51.0091 73.4081C51.3717 73.4081 51.6811 73.4641 51.9371 73.5761C52.1931 73.6881 52.3984 73.8427 52.5531 74.0401L52.1131 74.4241C52.0757 74.3707 52.0251 74.3147 51.9611 74.2561C51.9024 74.1974 51.8251 74.1441 51.7291 74.0961C51.6384 74.0481 51.5264 74.0107 51.3931 73.9841C51.2651 73.9521 51.1131 73.9361 50.9371 73.9361C50.5797 73.9361 50.3077 74.0027 50.1211 74.1361C49.9397 74.2694 49.8491 74.4481 49.8491 74.6721C49.8491 74.7734 49.8651 74.8561 49.8971 74.9201C49.9344 74.9841 49.9824 75.0374 50.0411 75.0801C50.0997 75.1174 50.1664 75.1467 50.2411 75.1681C50.3211 75.1841 50.4037 75.2001 50.4891 75.2161L51.0731 75.3121C51.2064 75.3334 51.3424 75.3627 51.4811 75.4001C51.6251 75.4321 51.7557 75.4854 51.8731 75.5601C51.9904 75.6294 52.0864 75.7281 52.1611 75.8561C52.2411 75.9787 52.2811 76.1414 52.2811 76.3441C52.2811 76.5574 52.2357 76.7494 52.1451 76.9201C52.0597 77.0907 51.9344 77.2374 51.7691 77.3601C51.6091 77.4774 51.4144 77.5681 51.1851 77.6321C50.9611 77.6961 50.7104 77.7281 50.4331 77.7281ZM55.2059 77.7281C54.9393 77.7281 54.7046 77.6854 54.5019 77.6001C54.3046 77.5147 54.1393 77.3974 54.0059 77.2481C53.8726 77.0934 53.7713 76.9094 53.7019 76.6961C53.6326 76.4774 53.5979 76.2401 53.5979 75.9841C53.5979 75.5894 53.6539 75.2347 53.7659 74.9201C53.8779 74.6001 54.0299 74.3281 54.2219 74.1041C54.4193 73.8801 54.6486 73.7094 54.9099 73.5921C55.1713 73.4694 55.4539 73.4081 55.7579 73.4081C56.0246 73.4081 56.2593 73.4507 56.4619 73.5361C56.6646 73.6214 56.8326 73.7414 56.9659 73.8961C57.1046 74.0454 57.2059 74.2294 57.2699 74.4481C57.3393 74.6614 57.3739 74.8961 57.3739 75.1521C57.3739 75.5467 57.3179 75.9041 57.2059 76.2241C57.0939 76.5387 56.9393 76.8081 56.7419 77.0321C56.5499 77.2561 56.3206 77.4294 56.0539 77.5521C55.7926 77.6694 55.5099 77.7281 55.2059 77.7281ZM55.2379 77.1841C55.6273 77.1841 55.9366 77.0667 56.1659 76.8321C56.4006 76.5921 56.5526 76.2667 56.6219 75.8561L56.7019 75.3761C56.7179 75.2801 56.7286 75.2001 56.7339 75.1361C56.7393 75.0721 56.7419 75.0161 56.7419 74.9681C56.7419 74.6161 56.6513 74.3601 56.4699 74.2001C56.2886 74.0347 56.0433 73.9521 55.7339 73.9521C55.3446 73.9521 55.0326 74.0721 54.7979 74.3121C54.5686 74.5467 54.4193 74.8694 54.3499 75.2801L54.2699 75.7601C54.2539 75.8561 54.2433 75.9361 54.2379 76.0001C54.2326 76.0641 54.2299 76.1201 54.2299 76.1681C54.2299 76.5201 54.3206 76.7787 54.5019 76.9441C54.6833 77.1041 54.9286 77.1841 55.2379 77.1841ZM58.3548 77.6321L59.0428 73.5041H59.6668L59.5068 74.4801H59.5388C59.6935 74.1494 59.8775 73.8881 60.0908 73.6961C60.3041 73.5041 60.5788 73.4081 60.9148 73.4081C61.2615 73.4081 61.5335 73.5121 61.7308 73.7201C61.9335 73.9281 62.0348 74.2214 62.0348 74.6001C62.0348 74.6801 62.0295 74.7681 62.0188 74.8641C62.0135 74.9547 62.0028 75.0454 61.9868 75.1361L61.5708 77.6321H60.9468L61.3548 75.1921C61.3708 75.0961 61.3815 75.0107 61.3868 74.9361C61.3921 74.8561 61.3948 74.7947 61.3948 74.7521C61.3948 74.5067 61.3388 74.3147 61.2268 74.1761C61.1148 74.0321 60.9415 73.9601 60.7068 73.9601C60.5255 73.9601 60.3628 74.0001 60.2188 74.0801C60.0801 74.1601 59.9521 74.2694 59.8348 74.4081C59.8135 74.4347 59.7788 74.4774 59.7308 74.5361C59.6881 74.5894 59.6428 74.6587 59.5948 74.7441C59.5468 74.8241 59.5015 74.9174 59.4588 75.0241C59.4161 75.1254 59.3841 75.2347 59.3628 75.3521L58.9788 77.6321H58.3548Z",
          fill: "#B0CDCF",
        },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i], vm);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
  if (!valid && haveExpectedTypes) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

function assertType (value, type, vm) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    try {
      valid = value instanceof type;
    } catch (e) {
      warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
      valid = false;
    }
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

var functionTypeCheckRE = /^\s*function (\w+)/;

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(functionTypeCheckRE);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  // check if we need to specify expected value
  if (
    expectedTypes.length === 1 &&
    isExplicable(expectedType) &&
    isExplicable(typeof value) &&
    !isBoolean(expectedType, receivedType)
  ) {
    message += " with value " + (styleValue(value, expectedType));
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + (styleValue(value, receivedType)) + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
function isExplicable (value) {
  return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    var vnode = res && res[0];
    return res && (
      !vnode ||
      (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) // #9658, #10391
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallbackRender,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes =
      scopedSlotFn(props) ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  } else {
    nodes =
      this.$slots[name] ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
  return eventKeyCode === undefined
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  // we know it's MountedComponentVNode but flow doesn't
  vnode,
  // activeInstance in lifecycle state
  parent
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
    (!newScopedSlots && vm.$scopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        var info = "callback for watcher \"" + (this.expression) + "\"";
        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      } else if (vm.$options.methods && key in vm.$options.methods) {
        warn(("The computed property \"" + key + "\" is already defined as a method."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      var info = "callback for immediate watcher \"" + (watcher.expression) + "\"";
      pushTarget();
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
      popTarget();
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */





function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var entry = cache[key];
    if (entry) {
      var name = entry.name;
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var entry = cache[key];
  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  methods: {
    cacheVNode: function cacheVNode() {
      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var vnodeToCache = ref.vnodeToCache;
      var keyToCache = ref.keyToCache;
      if (vnodeToCache) {
        var tag = vnodeToCache.tag;
        var componentInstance = vnodeToCache.componentInstance;
        var componentOptions = vnodeToCache.componentOptions;
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag: tag,
          componentInstance: componentInstance,
        };
        keys.push(keyToCache);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
        this.vnodeToCache = null;
      }
    }
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.cacheVNode();
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  updated: function updated () {
    this.cacheVNode();
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        // delay setting the cache until update
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.14';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.asyncFactory === b.asyncFactory && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value, isInPre) {
  if (isInPre || el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/LoadingSpinner.vue":
/*!********************************!*\
  !*** ./src/LoadingSpinner.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadingSpinner_vue_vue_type_template_id_c8fe3214_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingSpinner.vue?vue&type=template&id=c8fe3214&scoped=true& */ "./src/LoadingSpinner.vue?vue&type=template&id=c8fe3214&scoped=true&");
/* harmony import */ var _LoadingSpinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingSpinner.vue?vue&type=script&lang=js& */ "./src/LoadingSpinner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoadingSpinner_vue_vue_type_style_index_0_id_c8fe3214_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingSpinner.vue?vue&type=style&index=0&id=c8fe3214&scoped=true&lang=css& */ "./src/LoadingSpinner.vue?vue&type=style&index=0&id=c8fe3214&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoadingSpinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadingSpinner_vue_vue_type_template_id_c8fe3214_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadingSpinner_vue_vue_type_template_id_c8fe3214_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c8fe3214",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/LoadingSpinner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/LoadingSpinner.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./src/LoadingSpinner.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./LoadingSpinner.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/LoadingSpinner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/LoadingSpinner.vue?vue&type=style&index=0&id=c8fe3214&scoped=true&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./src/LoadingSpinner.vue?vue&type=style&index=0&id=c8fe3214&scoped=true&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_c8fe3214_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib??vue-loader-options!./LoadingSpinner.vue?vue&type=style&index=0&id=c8fe3214&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/LoadingSpinner.vue?vue&type=style&index=0&id=c8fe3214&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_c8fe3214_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_c8fe3214_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_c8fe3214_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_c8fe3214_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/LoadingSpinner.vue?vue&type=template&id=c8fe3214&scoped=true&":
/*!***************************************************************************!*\
  !*** ./src/LoadingSpinner.vue?vue&type=template&id=c8fe3214&scoped=true& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_template_id_c8fe3214_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./LoadingSpinner.vue?vue&type=template&id=c8fe3214&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/LoadingSpinner.vue?vue&type=template&id=c8fe3214&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_template_id_c8fe3214_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_template_id_c8fe3214_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/figma-ui/js/disclosure.js":
/*!***************************************!*\
  !*** ./src/figma-ui/js/disclosure.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){

    'use strict';

    // DEFAULT SETTINGS //////////
    var defaults = {
        selector: 'disclosure'
    }

    var selector;

    //PRIVATE FUNCTIONS //////////
    var disclosureHandler = function(event) {
        let disclosureSet = this.parentNode.parentNode;
        let disclosuresInSet = disclosureSet.querySelectorAll('li');
        let alreadyActive = this.parentNode.classList.contains(selector + '--expanded');

        disclosuresInSet.forEach((disclosure) => {
            disclosure.classList.remove(selector + '--expanded');
        });

        this.parentNode.classList.add(selector + '--expanded');

        if (alreadyActive) {
            this.parentNode.classList.remove(selector + '--expanded');
        }
    
    }

    //PUBLIC FUNCTIONS //////////
    window.disclosure = {

        init: function(opts) {
            
            let settings = Object.assign({}, defaults, opts);
            selector = settings.selector;
            let disclosures = document.querySelectorAll('.' + selector + '__label');

            disclosures.forEach((disclosure) => {
                disclosure.addEventListener('click', disclosureHandler, false);
            });

        },

        destroy: function() {
            
            let disclosures = document.querySelectorAll('.' + selector + '__label');

            disclosures.forEach((disclosure) => {
                disclosure.removeEventListener('click', disclosureHandler, false);
            });

        }

    };

})();

/***/ }),

/***/ "./src/figma-ui/js/iconInput.js":
/*!**************************************!*\
  !*** ./src/figma-ui/js/iconInput.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){

    'use strict';

    // DEFAULT SETTINGS //////////
    var defaults = {
        selector: '.input-icon'
    }

    //VARIABLES //////////
    var selector;

    //PRIVATE FUNCTIONS //////////
    var inputIconFocusIn = function(event) {
        let parent = this.parentNode;
        let iconNode = parent.querySelector('.icon');
        iconNode.classList.remove('icon--black-3');
        iconNode.classList.add('icon--blue');
    }

    var inputIconFocusOut = function(event) {
        let parent = this.parentNode;
        let iconNode = parent.querySelector('.icon');
        iconNode.classList.add('icon--black-3');
        iconNode.classList.remove('icon--blue');
    }

    //PUBLIC FUNCTIONS //////////
    window.iconInput = {

        init: function(opts) {
            let settings = Object.assign({}, defaults, opts);
            selector = settings.selector;
            let elements = document.querySelectorAll(selector);

            //initialize
            elements.forEach((element) => {
                element.addEventListener('focusin', inputIconFocusIn, false);
                element.addEventListener('focusout', inputIconFocusOut, false);
            });
        },

        destroy: function() {
            let elements = document.querySelectorAll(selector);

            //initialize
            elements.forEach((element) => {
                element.removeEventListener('focusin', inputIconFocusIn, false);
                element.removeEventListener('focusout', inputIconFocusOut, false);
            });

        }

    };

})();

/***/ }),

/***/ "./src/figma-ui/js/selectMenu.js":
/*!***************************************!*\
  !*** ./src/figma-ui/js/selectMenu.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(){

	'use strict';

	// DEFAULT SETTINGS //////////
	var defaults = {
		selector: 'select-menu',
		position: 'under'
	}
	//position options
	// 'positionToSelected' = open menu to selected item
	// 'under' opens drop down below select menu
	// 'overlap' opens dropdown menu with first menu item overlapping select menu

	// VARIABLES /////////////
	var settings, selector, targets, optionList, selectedItem, itemHeight;

	var init = false;

	//PRIVATE FUNCTIONS //////////

	//create the select menus
	function createMenus() {

		let targetLen = targets.length;
		for (let i = 0; i < targetLen; i++) {

			//create menu element wrapper + ul + button + hide select menu
			createWrapper(document.createElement('div'), i);
			
			let optionGroups = targets[i].getElementsByTagName('optgroup');
            selectedItem = targets[i].selectedIndex;
			itemHeight = 0;

			//create option groups if they are present else create normal list items
			if (optionGroups.length != 0) {
				//yes there are option groups

				//determine if option groups have labels present
                let hasLabels;
                if (!optionGroups[0].label) {
                    hasLabels =  false;
                } else {
                    hasLabels =  true;
				}

				//loop through option groups
				for (let k = 0; k < optionGroups.length; k++) {

					//get children of option groups
					let optionGroupChildren = optionGroups[k].getElementsByTagName('option');
					
					//create divider element
					let divider = document.createElement('div');
					divider.className = selector + '__divider';

					// if labels are present, put them before the list item
                    // otherwise put a divider after (unless it is the last item)
                    if (hasLabels == true) {
					
						//create divider
                        let dividerLabel = document.createElement('span');
                        let labelText = document.createTextNode(optionGroups[k].label);
						dividerLabel.className = selector + '__divider-label';
						
						if (k === 0) {
							dividerLabel.classList.add(selector + '__divider-label--first');
						}

                        dividerLabel.appendChild(labelText);
                        divider.appendChild(dividerLabel);
						optionList.appendChild(divider);

						//calculate height of divider
						addItemHeight(dividerLabel);

						// create the list item
                        for (let j = 0; j < optionGroupChildren.length; j++) {
                            createListItem(optionGroupChildren[j]);
                        }

					} else {

						// create the list item 
                        for (let j = 0; j < optionGroupChildren.length; j++) {
                            createListItem(optionGroupChildren[j]);
						}
						
						if (k != optionGroups.length-1) {
                            //create line
                            let dividerLine = document.createElement('span');
                            dividerLine.className = selector + '__divider-line';
                            divider.appendChild(dividerLine);
                            optionList.appendChild(divider);

                            //calculate height of item to offset menu items
                            addItemHeight(dividerLine);
                            
                        }

					}

					//prevent clicks on optgroup dividers					
					divider.addEventListener('click', stopProp, false);

				}

			} else {
				//no there are no option groups

				//create select items (no groups)
                for (let k = 0; k < targets[i].length; k++) {
                    //console.log(objectData.elements[i].options[k]);
                    createListItem(targets[i].options[k]);
                }

			}

		}

	}

	//create wrapper element
	function createWrapper(selectWrapper, count) {
		let element = targets[count];

        //handle the select menu
		element.style.display = 'none'; //hide the select menu
		
		//set the selected option to the correct element if not set
        element.options[element.selectedIndex].selected = true;


        //create the div wrapper
        element.parentNode.insertBefore(selectWrapper, element);
        selectWrapper.appendChild(element);
        selectWrapper.className = selector;

        //create the new button element
        let selectButton = document.createElement('button');
        let selectButtonLabel = document.createElement('span');
        let selectButtonIcon = document.createElement('span');
		optionList = document.createElement('ul');
		
		//determine button label
        let selectButtonLabelText;
        if (element.selectedIndex == 0) {
            selectButtonLabelText = document.createTextNode(element.options[0].text);
        } else {
            let index = element.selectedIndex;
            selectButtonLabelText = document.createTextNode(element.options[index].text);
		}

		//assign class names
        selectButton.className = selector + '__button';
        selectButtonLabel.className = selector + '__button-label';
        selectButtonIcon.className = selector + '__icon';
		optionList.className = selector + '__list';
		
		//add button to dom
        selectWrapper.appendChild(selectButton);
        selectWrapper.appendChild(optionList);
        selectButton.appendChild(selectButtonLabel);
        selectButton.appendChild(selectButtonIcon);
		selectButtonLabel.appendChild(selectButtonLabelText);
		
		//overlap the position of the menu if setting selected
        if (settings.position == 'overlap') {
            optionList.style.top = 0;
		}
		
		//add event listener		
		selectButton.addEventListener('click', displayMenu, false);
	}

	//create list item
	function createListItem(item) {
		if (item.value != "") {
			let listItem =  document.createElement("li");
			let listIcon = document.createElement("span");
			let listText= document.createElement("span");

			listItem.className = selector + '__list-item';
			listIcon.className = selector + '__list-item-icon';
			listText.className = selector + '__list-item-text';
			
            listItem.setAttribute('data-value', item.value);
            listText.innerHTML +=item.text;
			
			listItem.appendChild(listIcon);
			listItem.appendChild(listText);
            optionList.appendChild(listItem);

            //add data attributes to item if positionToSelection is set
            if (settings.position == 'positionToSelection') {
                listItem.setAttribute('position', itemHeight);
                addItemHeight(listItem);
            }

            //if item is selected, add active class
            if (item.index == selectedItem) {
                listItem.classList.add(selector + '__list-item--active');
                
                if (settings.position == 'positionToSelection') {
                    let menuPosition = -Math.abs(parseInt(listItem.getAttribute('position')));
                    optionList.style.top = menuPosition + 'px';
                }
                
            }

			//event listener			
			listItem.addEventListener('click', displayMenu, false);
        }

	}

	//function display menu
	var displayMenu = function(event) {

		let element = this;

		//determine if the the menu button or item is clicked
        if (element.tagName == 'BUTTON') {

			this.classList.toggle(selector + '__button--active');

            //toggle the dropdown
            let dropdown = element.parentNode.querySelector('UL');
            dropdown.classList.toggle(selector + '__list--active');

        } else if (element.tagName == 'LI') {
			
            let dropdown = element.parentNode.parentNode.querySelector('UL');

            //remove active classses from all menus
            let listItems = dropdown.getElementsByTagName('LI');
            for (let i = 0; i < listItems.length; i++) {
                listItems[i].classList.remove(selector + '__list-item--active');
            }

            //add active class
            element.classList.add(selector + '__list-item--active');

            //update the value of the select menu
            let select = dropdown.parentNode.querySelector('SELECT');
			let selectedValue = element.getAttribute('data-value');
			let selectItems = select.querySelectorAll('option');
			let selectItemsLen = selectItems.length;
			let event = new Event('change');
			select.dispatchEvent(event);

			selectItems.forEach((item) => {
				item.removeAttribute("selected");
			});

			select.value = selectedValue;

			for (let i = 0; i < selectItemsLen; i++) {
				let value = selectItems[i].value;
				if (value == selectedValue) {
					selectItems[i].setAttribute('selected','selected')
				}
			}


			//update the dropdown button
			let button = element.parentNode.parentNode.querySelector('BUTTON');
			let buttonLabel = button.querySelector('.' + selector + '__button-label');
			buttonLabel.textContent = element.textContent;
			button.classList.toggle(selector + '__button--active');

            //toggle the dropdown
            dropdown.classList.toggle(selector + '__list--active');

            if (settings.position == 'positionToSelection') {
                let menuPosition = -Math.abs(parseInt(element.getAttribute('position')));
                element.parentNode.style.top = menuPosition + 'px';
            }

        }

	}

	//EVENT HANDLERS //////////

	//stop event propagation
	var stopProp = function(event) {
		event.stopPropagation();
	}

	//track clicks outside the menu
	var isOutside = function(event) {
		let menus = document.querySelectorAll('select.' + selector);

		menus.forEach((menu) => {
			let parent = menu.parentNode;
			let menuList = parent.querySelector('UL');
			let button = parent.querySelector('BUTTON');

			if (menuList.classList.contains(selector + '__list--active')) {
				let clickInside = parent.contains(event.target);
				if (!clickInside) {
					menuList.classList.remove(selector + '__list--active');
					button.classList.remove(selector + '__button--active');
				}
			}
		});
	}


	//HELPER FUNCTIONS //////////
	
	//increment itemHeight
    function addItemHeight(element) {

        //get key dimensions to calculate height
        let dimensions = [
            parseInt(window.getComputedStyle(element, null).getPropertyValue('margin-top')),
            parseInt(window.getComputedStyle(element, null).getPropertyValue('margin-bottom')),
            parseInt(window.getComputedStyle(element, null).getPropertyValue('padding-top')),
            parseInt(window.getComputedStyle(element, null).getPropertyValue('padding-bottom')),
            parseInt(window.getComputedStyle(element, null).getPropertyValue('height')),
        ];
        itemHeight += arraySum(dimensions);
    }

    //helper function to return sum of array
    function arraySum(data) {
        return data.reduce(function(a,b){
            return a + b
        }, 0);
    }


	// PUBLIC FUNCTIONS /////////////
	window.selectMenu = {

		init: function(opts) {

			if (init == true) {
				selectMenu.destroy();
			}

			settings = Object.assign({}, defaults, opts);
			selector = settings.selector;
			targets = document.querySelectorAll('.' + selector);

			createMenus();

			//click handler for clicks outside of menu
			document.addEventListener('click', isOutside, false);

			init = true;
		},

		destroy: function() {

			//destroy the elements
			let selectMenus = document.querySelectorAll('select.' + selector);
			
			selectMenus.forEach((menu) => {

				let parent = menu.parentNode;
				let button = parent.querySelector('BUTTON');
				let menuList = parent.querySelector('UL');

				button.remove();
				menuList.remove();

				parent.outerHTML = parent.innerHTML;

			});

			//remove event handler
			document.removeEventListener('click', isOutside, false);

			init = false;
		}

	}

})();

/***/ }),

/***/ "./src/file-icon.vue":
/*!***************************!*\
  !*** ./src/file-icon.vue ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_icon_vue_vue_type_template_id_e93274be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-icon.vue?vue&type=template&id=e93274be& */ "./src/file-icon.vue?vue&type=template&id=e93274be&");
/* harmony import */ var _file_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-icon.vue?vue&type=script&lang=js& */ "./src/file-icon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _file_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _file_icon_vue_vue_type_template_id_e93274be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _file_icon_vue_vue_type_template_id_e93274be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/file-icon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/file-icon.vue?vue&type=script&lang=js&":
/*!****************************************************!*\
  !*** ./src/file-icon.vue?vue&type=script&lang=js& ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_file_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./file-icon.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/file-icon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_file_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/file-icon.vue?vue&type=template&id=e93274be&":
/*!**********************************************************!*\
  !*** ./src/file-icon.vue?vue&type=template&id=e93274be& ***!
  \**********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_file_icon_vue_vue_type_template_id_e93274be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./file-icon.vue?vue&type=template&id=e93274be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/file-icon.vue?vue&type=template&id=e93274be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_file_icon_vue_vue_type_template_id_e93274be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_file_icon_vue_vue_type_template_id_e93274be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _ui_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.vue */ "./src/ui.vue");


new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
    el: '#app',
    render: function (h) { return h(_ui_vue__WEBPACK_IMPORTED_MODULE_1__["default"]); }
});


/***/ }),

/***/ "./src/ui.vue":
/*!********************!*\
  !*** ./src/ui.vue ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_vue_vue_type_template_id_cf633ba6_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.vue?vue&type=template&id=cf633ba6&lang=pug& */ "./src/ui.vue?vue&type=template&id=cf633ba6&lang=pug&");
/* harmony import */ var _ui_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.vue?vue&type=script&lang=js& */ "./src/ui.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ui_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.vue?vue&type=style&index=0&lang=scss& */ "./src/ui.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _ui_vue_vue_type_custom_index_0_blockType_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui.vue?vue&type=custom&index=0&blockType=Spinner */ "./src/ui.vue?vue&type=custom&index=0&blockType=Spinner");
/* harmony import */ var _ui_vue_vue_type_custom_index_0_blockType_Spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ui_vue_vue_type_custom_index_0_blockType_Spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui_vue_vue_type_custom_index_1_blockType_div__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui.vue?vue&type=custom&index=1&blockType=div */ "./src/ui.vue?vue&type=custom&index=1&blockType=div");
/* harmony import */ var _ui_vue_vue_type_custom_index_1_blockType_div__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ui_vue_vue_type_custom_index_1_blockType_div__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ui_vue_vue_type_custom_index_2_blockType_div_class_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui.vue?vue&type=custom&index=2&blockType=div&class=container */ "./src/ui.vue?vue&type=custom&index=2&blockType=div&class=container");
/* harmony import */ var _ui_vue_vue_type_custom_index_2_blockType_div_class_container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ui_vue_vue_type_custom_index_2_blockType_div_class_container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ui_vue_vue_type_custom_index_3_blockType_button_class_button_20button_primary_40click_createNode_message___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui.vue?vue&type=custom&index=3&blockType=button&class=button%20button--primary&%40click=createNode(message) */ "./src/ui.vue?vue&type=custom&index=3&blockType=button&class=button%20button--primary&%40click=createNode(message)");
/* harmony import */ var _ui_vue_vue_type_custom_index_3_blockType_button_class_button_20button_primary_40click_createNode_message___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ui_vue_vue_type_custom_index_3_blockType_button_class_button_20button_primary_40click_createNode_message___WEBPACK_IMPORTED_MODULE_7__);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ui_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ui_vue_vue_type_template_id_cf633ba6_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ui_vue_vue_type_template_id_cf633ba6_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* custom blocks */

if (typeof _ui_vue_vue_type_custom_index_0_blockType_Spinner__WEBPACK_IMPORTED_MODULE_4___default.a === 'function') _ui_vue_vue_type_custom_index_0_blockType_Spinner__WEBPACK_IMPORTED_MODULE_4___default()(component)

if (typeof _ui_vue_vue_type_custom_index_1_blockType_div__WEBPACK_IMPORTED_MODULE_5___default.a === 'function') _ui_vue_vue_type_custom_index_1_blockType_div__WEBPACK_IMPORTED_MODULE_5___default()(component)

if (typeof _ui_vue_vue_type_custom_index_2_blockType_div_class_container__WEBPACK_IMPORTED_MODULE_6___default.a === 'function') _ui_vue_vue_type_custom_index_2_blockType_div_class_container__WEBPACK_IMPORTED_MODULE_6___default()(component)

if (typeof _ui_vue_vue_type_custom_index_3_blockType_button_class_button_20button_primary_40click_createNode_message___WEBPACK_IMPORTED_MODULE_7___default.a === 'function') _ui_vue_vue_type_custom_index_3_blockType_button_class_button_20button_primary_40click_createNode_message___WEBPACK_IMPORTED_MODULE_7___default()(component)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/ui.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/ui.vue?vue&type=custom&index=0&blockType=Spinner":
/*!**************************************************************!*\
  !*** ./src/ui.vue?vue&type=custom&index=0&blockType=Spinner ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/ui.vue?vue&type=custom&index=1&blockType=div":
/*!**********************************************************!*\
  !*** ./src/ui.vue?vue&type=custom&index=1&blockType=div ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/ui.vue?vue&type=custom&index=2&blockType=div&class=container":
/*!**************************************************************************!*\
  !*** ./src/ui.vue?vue&type=custom&index=2&blockType=div&class=container ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/ui.vue?vue&type=custom&index=3&blockType=button&class=button%20button--primary&%40click=createNode(message)":
/*!*************************************************************************************************************************!*\
  !*** ./src/ui.vue?vue&type=custom&index=3&blockType=button&class=button%20button--primary&%40click=createNode(message) ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/ui.vue?vue&type=script&lang=js&":
/*!*********************************************!*\
  !*** ./src/ui.vue?vue&type=script&lang=js& ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_ui_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./ui.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./src/ui.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_ui_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/ui.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************!*\
  !*** ./src/ui.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ui_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/style-loader!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/sass-loader/dist/cjs.js??ref--2-2!../node_modules/vue-loader/lib??vue-loader-options!./ui.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/ui.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ui_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ui_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ui_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ui_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/ui.vue?vue&type=template&id=cf633ba6&lang=pug&":
/*!************************************************************!*\
  !*** ./src/ui.vue?vue&type=template&id=cf633ba6&lang=pug& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ui_vue_vue_type_template_id_cf633ba6_lang_pug___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/pug-plain-loader!../node_modules/vue-loader/lib??vue-loader-options!./ui.vue?vue&type=template&id=cf633ba6&lang=pug& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/pug-plain-loader/index.js!./node_modules/vue-loader/lib/index.js?!./src/ui.vue?vue&type=template&id=cf633ba6&lang=pug&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ui_vue_vue_type_template_id_cf633ba6_lang_pug___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_pug_plain_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ui_vue_vue_type_template_id_cf633ba6_lang_pug___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/uiMessageHandler.ts":
/*!*********************************!*\
  !*** ./src/uiMessageHandler.ts ***!
  \*********************************/
/*! exports provided: dispatch, handleEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleEvent", function() { return handleEvent; });
var eventListeners = [];
var dispatch = function (action, data) {
    parent.postMessage({ pluginMessage: { action: action, data: data } }, '*');
};
var handleEvent = function (type, callback) {
    eventListeners.push({ type: type, callback: callback });
};
window.onmessage = function (event) {
    var message = event.data.pluginMessage;
    if (message) {
        for (var _i = 0, eventListeners_1 = eventListeners; _i < eventListeners_1.length; _i++) {
            var eventListener = eventListeners_1[_i];
            if (message.action === eventListener.type)
                eventListener.callback(message.data);
        }
    }
};


/***/ })

/******/ });