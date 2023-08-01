/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var https_www_gstatic_com_firebasejs_10_1_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js */ \"https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_10_1_0_firebase_analytics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js */ \"https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_10_1_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js */ \"https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js\");\n/* harmony import */ var https_www_gstatic_com_firebasejs_10_1_0_firebase_database_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js */ \"https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_www_gstatic_com_firebasejs_10_1_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_10_1_0_firebase_analytics_js__WEBPACK_IMPORTED_MODULE_1__, https_www_gstatic_com_firebasejs_10_1_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_2__, https_www_gstatic_com_firebasejs_10_1_0_firebase_database_js__WEBPACK_IMPORTED_MODULE_3__]);\n([https_www_gstatic_com_firebasejs_10_1_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__, https_www_gstatic_com_firebasejs_10_1_0_firebase_analytics_js__WEBPACK_IMPORTED_MODULE_1__, https_www_gstatic_com_firebasejs_10_1_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_2__, https_www_gstatic_com_firebasejs_10_1_0_firebase_database_js__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// // Import the functions you need from the SDKs you need\r\n// import { initializeApp } from 'firebase/app'\r\n// import { getDatabase, ref, child, get } from 'firebase/database'\r\n\r\n// // If you enabled Analytics in your project, add the Firebase SDK for Google Analytics\r\n// import { getAnalytics } from 'firebase/analytics'\r\n\r\n// // Add Firebase products that you want to use\r\n// import { getAuth, onAuthStateChanged } from 'firebase/auth'\r\n// // TODO: Add SDKs for Firebase products that you want to use\r\n// // https://firebase.google.com/docs/web/setup#available-libraries\r\n\r\n\r\n// Import the functions you need from the SDKs you need\r\n\r\n\r\n// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics\r\n\r\n\r\n// Add Firebase products that you want to use\r\n\r\n\r\n\r\n// Your web app's Firebase configuration\r\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyAs1rLyOoMOvEomhIwtdVqu9PhOWfq0MHE\",\r\n  authDomain: \"dashboard-test-4ff8e.firebaseapp.com\",\r\n  databaseURL: \"https://dashboard-test-4ff8e-default-rtdb.firebaseio.com\",\r\n  projectId: \"dashboard-test-4ff8e\",\r\n  storageBucket: \"dashboard-test-4ff8e.appspot.com\",\r\n  messagingSenderId: \"802722798473\",\r\n  appId: \"1:802722798473:web:33de9d8fbdddc32047df58\",\r\n  measurementId: \"G-Z9FTK26PHV\"\r\n};\r\n\r\n// Initialize Firebase\r\nconst app = (0,https_www_gstatic_com_firebasejs_10_1_0_firebase_app_js__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n// const analytics = getAnalytics(app);\r\n// const auth = getAuth(app);\r\nconst db = (0,https_www_gstatic_com_firebasejs_10_1_0_firebase_database_js__WEBPACK_IMPORTED_MODULE_3__.getDatabase)(app);\r\n\r\n(0,https_www_gstatic_com_firebasejs_10_1_0_firebase_database_js__WEBPACK_IMPORTED_MODULE_3__.get)((0,https_www_gstatic_com_firebasejs_10_1_0_firebase_database_js__WEBPACK_IMPORTED_MODULE_3__.ref)(db, '/'), (snapshot) => {\r\n  if (snapshot.exists()) {\r\n    console.log(snapshot.val());\r\n  } else {\r\n    console.log(\"No data available\");\r\n  }\r\n}).catch((error) => {\r\n  console.error(error);\r\n});\r\n\r\n\r\n(0,https_www_gstatic_com_firebasejs_10_1_0_firebase_auth_js__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(auth, (user) => {\r\n  if (user != null) {\r\n    console.log('logged in')\r\n  } else {\r\n    console.log('logged out')\r\n  }\r\n});\r\n\r\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCLFlBQVksK0JBQStCO0FBQzNDO0FBQ0E7QUFDQSxZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBLFlBQVksOEJBQThCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUY7QUFDekY7QUFDQTtBQUM4RjtBQUM5RjtBQUNBO0FBQ3dHO0FBQ0s7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzR0FBYTtBQUN6QjtBQUNBO0FBQ0EsV0FBVyx5R0FBVztBQUN0QjtBQUNBLGlHQUFHLENBQUMsaUdBQUc7QUFDUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDRHQUFrQjtBQUNsQjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbi8vIGltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnXHJcbi8vIGltcG9ydCB7IGdldERhdGFiYXNlLCByZWYsIGNoaWxkLCBnZXQgfSBmcm9tICdmaXJlYmFzZS9kYXRhYmFzZSdcclxuXHJcbi8vIC8vIElmIHlvdSBlbmFibGVkIEFuYWx5dGljcyBpbiB5b3VyIHByb2plY3QsIGFkZCB0aGUgRmlyZWJhc2UgU0RLIGZvciBHb29nbGUgQW5hbHl0aWNzXHJcbi8vIGltcG9ydCB7IGdldEFuYWx5dGljcyB9IGZyb20gJ2ZpcmViYXNlL2FuYWx5dGljcydcclxuXHJcbi8vIC8vIEFkZCBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxyXG4vLyBpbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xyXG4vLyAvLyBUT0RPOiBBZGQgU0RLcyBmb3IgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2VcclxuLy8gLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcclxuXHJcblxyXG4vLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdodHRwczovL3d3dy5nc3RhdGljLmNvbS9maXJlYmFzZWpzLzEwLjEuMC9maXJlYmFzZS1hcHAuanMnXHJcblxyXG4vLyBJZiB5b3UgZW5hYmxlZCBBbmFseXRpY3MgaW4geW91ciBwcm9qZWN0LCBhZGQgdGhlIEZpcmViYXNlIFNESyBmb3IgR29vZ2xlIEFuYWx5dGljc1xyXG5pbXBvcnQgeyBnZXRBbmFseXRpY3MgfSBmcm9tICdodHRwczovL3d3dy5nc3RhdGljLmNvbS9maXJlYmFzZWpzLzEwLjEuMC9maXJlYmFzZS1hbmFseXRpY3MuanMnXHJcblxyXG4vLyBBZGQgRmlyZWJhc2UgcHJvZHVjdHMgdGhhdCB5b3Ugd2FudCB0byB1c2VcclxuaW1wb3J0IHsgZ2V0QXV0aCwgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSAnaHR0cHM6Ly93d3cuZ3N0YXRpYy5jb20vZmlyZWJhc2Vqcy8xMC4xLjAvZmlyZWJhc2UtYXV0aC5qcydcclxuaW1wb3J0IHsgZ2V0RGF0YWJhc2UsIHJlZiwgY2hpbGQsIGdldCB9IGZyb20gJ2h0dHBzOi8vd3d3LmdzdGF0aWMuY29tL2ZpcmViYXNlanMvMTAuMS4wL2ZpcmViYXNlLWRhdGFiYXNlLmpzJ1xyXG5cclxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG4vLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lBczFyTHlPb01PdkVvbWhJd3RkVnF1OVBoT1dmcTBNSEVcIixcclxuICBhdXRoRG9tYWluOiBcImRhc2hib2FyZC10ZXN0LTRmZjhlLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vZGFzaGJvYXJkLXRlc3QtNGZmOGUtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcImRhc2hib2FyZC10ZXN0LTRmZjhlXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJkYXNoYm9hcmQtdGVzdC00ZmY4ZS5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjgwMjcyMjc5ODQ3M1wiLFxyXG4gIGFwcElkOiBcIjE6ODAyNzIyNzk4NDczOndlYjozM2RlOWQ4ZmJkZGRjMzIwNDdkZjU4XCIsXHJcbiAgbWVhc3VyZW1lbnRJZDogXCJHLVo5RlRLMjZQSFZcIlxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuLy8gY29uc3QgYW5hbHl0aWNzID0gZ2V0QW5hbHl0aWNzKGFwcCk7XHJcbi8vIGNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbmNvbnN0IGRiID0gZ2V0RGF0YWJhc2UoYXBwKTtcclxuXHJcbmdldChyZWYoZGIsICcvJyksIChzbmFwc2hvdCkgPT4ge1xyXG4gIGlmIChzbmFwc2hvdC5leGlzdHMoKSkge1xyXG4gICAgY29uc29sZS5sb2coc25hcHNob3QudmFsKCkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIk5vIGRhdGEgYXZhaWxhYmxlXCIpO1xyXG4gIH1cclxufSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbn0pO1xyXG5cclxuXHJcbm9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gIGlmICh1c2VyICE9IG51bGwpIHtcclxuICAgIGNvbnNvbGUubG9nKCdsb2dnZWQgaW4nKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnbG9nZ2VkIG91dCcpXHJcbiAgfVxyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js":
false,

/***/ "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js":
false,

/***/ "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js":
false,

/***/ "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js":
false

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;