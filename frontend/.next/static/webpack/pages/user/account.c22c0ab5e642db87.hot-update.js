"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/account",{

/***/ "./components/user/dashboard.js":
/*!**************************************!*\
  !*** ./components/user/dashboard.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Dashboard() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"\".concat(\"http://localhost:1337\", \"/api/users\")).then(function(res) {\n            return res.json();\n        }).then(function(data) {\n            return setData(data.data);\n        });\n        if (res.status !== 200) {\n            throw new Error(\"Couldn't login to Strapi. Status: \".concat(res.status));\n        }\n    }), [];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"dashboard\",\n            console.log(res)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\user\\\\dashboard.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n};\n_s(Dashboard, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBZ0Q7O0FBR2pDLFNBQVNHLFNBQVMsR0FBRzs7SUFFcENGLGdEQUFTLENBQUMsV0FBTTtRQUVkRyxLQUFLLENBQUUsRUFBQyxDQUFrQyxNQUFVLENBQTFDQyx1QkFBK0IsRUFBQyxZQUFVLENBQUMsQ0FBQyxDQUNyREcsSUFBSSxDQUFDLFNBQUNDLEdBQUc7bUJBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO1NBQUEsQ0FBQyxDQUN6QkYsSUFBSSxDQUFDLFNBQUNHLElBQUk7bUJBQUtDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDQSxJQUFJLENBQUM7U0FBQSxDQUFDLENBQUM7UUFFbEMsSUFBSUYsR0FBRyxDQUFDSSxNQUFNLEtBQUssR0FBRyxFQUFFO1lBQ3RCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLG9DQUFtQyxDQUFhLE9BQVhMLEdBQUcsQ0FBQ0ksTUFBTSxDQUFFLENBQUMsQ0FBQztTQUNwRTtLQUNGLENBQ0YsRUFBQyxFQUFFLENBQUM7SUFFSCxxQkFDRSw4REFBQ0UsS0FBRzs7WUFBQyxXQUNIO1lBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixHQUFHLENBQUM7Ozs7OztZQUNiLENBQ1A7Q0FDRjtHQW5CdUJOLFNBQVM7QUFBVEEsS0FBQUEsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXIvZGFzaGJvYXJkLmpzPzYxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG5cclxudXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgZmV0Y2ggKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2FwaS91c2Vyc2ApXHJcbiAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAudGhlbigoZGF0YSkgPT4gc2V0RGF0YShkYXRhLmRhdGEpKTtcclxuICBcclxuICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZG4ndCBsb2dpbiB0byBTdHJhcGkuIFN0YXR1czogJHtyZXMuc3RhdHVzfWApO1xyXG4gICAgfVxyXG4gIH1cclxuKSxbXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+ZGFzaGJvYXJkXHJcbiAgICAgIHtjb25zb2xlLmxvZyhyZXMpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRGFzaGJvYXJkIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInNldERhdGEiLCJzdGF0dXMiLCJFcnJvciIsImRpdiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/user/dashboard.js\n");

/***/ })

});