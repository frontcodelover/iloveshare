"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/user/account";
exports.ids = ["pages/user/account"];
exports.modules = {

/***/ "./components/user/dashboard.js":
/*!**************************************!*\
  !*** ./components/user/dashboard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dashboard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Dashboard() {\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(`${\"http://localhost:1337\"}/api/users`).then((res)=>{\n            if (res.status !== 200) {\n                throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);\n            }\n            return res;\n        }).then((res)=>res.json()\n        ).then((res)=>{\n            // Successfully logged with Strapi\n            // Now saving the jwt to use it for future authenticated requests to Strapi\n            console.log(res);\n        }).catch((err)=>{\n            console.log(err);\n            setTexts(\"\");\n        });\n    }), [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"dashboard\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\user\\\\dashboard.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFHakMsU0FBU0csU0FBUyxHQUFHO0lBQ2xDLE1BQU0sRUFKUixHQUlTQyxJQUFJLEdBSmIsR0FJZUMsT0FBTyxNQUFJSCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUV4Q0QsZ0RBQVMsQ0FBQyxJQUFNO1FBRWRLLEtBQUssQ0FBRSxDQUFDLEVBQUVDLHVCQUErQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQ3JERyxJQUFJLENBQUNDLENBQUFBLEdBQUcsR0FBSTtZQUNYLElBQUlBLEdBQUcsQ0FBQ0MsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDdEIsTUFBTSxJQUFJQyxLQUFLLENBQUMsQ0FBQyxrQ0FBa0MsRUFBRUYsR0FBRyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDcEU7WUFDRCxPQUFPRCxHQUFHLENBQUM7U0FDWixDQUFDLENBQ0RELElBQUksQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFJQSxHQUFHLENBQUNHLElBQUksRUFBRTtRQUFBLENBQUMsQ0FDdkJKLElBQUksQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFJO1lBQ1gsa0NBQWtDO1lBQ2xDLDJFQUEyRTtZQUM1RUksT0FBTyxDQUFDQyxHQUFHLENBQUNMLEdBQUcsQ0FBQyxDQUFDO1NBRWpCLENBQUMsQ0FDRE0sS0FBSyxDQUFDQyxDQUFBQSxHQUFHLEdBQUk7WUFDWkgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCQyxRQUFRLENBQUMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0tBQ0osQ0FBQyxFQUFDLEVBQUUsQ0FBQztJQUVKLHFCQUNFLDhEQUFDQyxLQUFHO2tCQUFDLFdBRUw7Ozs7O1lBQU0sQ0FDUDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL3VzZXIvZGFzaGJvYXJkLmpzPzYxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgZmV0Y2ggKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2FwaS91c2Vyc2ApXHJcbiAgLnRoZW4ocmVzID0+IHtcclxuICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZG4ndCBsb2dpbiB0byBTdHJhcGkuIFN0YXR1czogJHtyZXMuc3RhdHVzfWApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9KVxyXG4gIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gIC50aGVuKHJlcyA9PiB7XHJcbiAgICAvLyBTdWNjZXNzZnVsbHkgbG9nZ2VkIHdpdGggU3RyYXBpXHJcbiAgICAvLyBOb3cgc2F2aW5nIHRoZSBqd3QgdG8gdXNlIGl0IGZvciBmdXR1cmUgYXV0aGVudGljYXRlZCByZXF1ZXN0cyB0byBTdHJhcGlcclxuICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIFxyXG4gIH0pXHJcbiAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgc2V0VGV4dHMoJycpXHJcbiAgfSk7XHJcbn0pLFtdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5kYXNoYm9hcmRcclxuXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJEYXNoYm9hcmQiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiRXJyb3IiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwic2V0VGV4dHMiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user/dashboard.js\n");

/***/ }),

/***/ "./pages/user/account.js":
/*!*******************************!*\
  !*** ./pages/user/account.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ account)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_user_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/user/dashboard */ \"./components/user/dashboard.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction account() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_user_dashboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\pages\\\\user\\\\account.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\pages\\\\user\\\\account.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2FjY291bnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBd0Q7QUFDOUI7QUFFWCxTQUFTRSxPQUFPLEdBQUc7SUFDaEMscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0YsNEVBQUNILGtFQUFTOzs7O2dCQUFHOzs7OztZQUNULENBQ047Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvdXNlci9hY2NvdW50LmpzP2UxZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy91c2VyL2Rhc2hib2FyZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY2NvdW50KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8RGFzaGJvYXJkIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJSZWFjdCIsImFjY291bnQiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/account.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/user/account.js"));
module.exports = __webpack_exports__;

})();