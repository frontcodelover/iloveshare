"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/[id]",{

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetUsersInfosByIdInParams; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction GetUsersInfosByIdInParams() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), username = ref[0], setUsername = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), email = ref1[0], setEmail = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), provider = ref2[0], setProvider = ref2[1];\n    console.log(id);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"\".concat(\"http://localhost:1337\", \"/api/users/\").concat(id)).then(function(res) {\n            if (res.status !== 200) {\n                throw new Error(\"Couldn't login to Strapi. Status: \".concat(res.status));\n            }\n            return res;\n        }).then(function(res) {\n            return res.json();\n        }).then(function(res) {\n            // Successfully logged with Strapi\n            // Now saving the jwt to use it for future authenticated requests to Strapi\n            console.log(res);\n            setUsername(res.username);\n            setEmail(res.email);\n            setProvider(res.provider);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"[id]\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\pages\\\\user\\\\[id].js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n};\n_s(GetUsersInfosByIdInParams, \"LrxYMsgF0GalvsphbhNzBgKJuOQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = GetUsersInfosByIdInParams;\nvar _c;\n$RefreshReg$(_c, \"GetUsersInfosByIdInParams\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWlEO0FBQ1Q7O0FBR3pCLFNBQVNJLHlCQUF5QixHQUFHOztJQUNsRCxJQUFNQyxNQUFNLEdBQUdGLHNEQUFTLEVBQUU7SUFDMUIsSUFBTSxFQUFJLEdBQUtFLE1BQU0sQ0FBQ0UsS0FBSyxDQUFuQkQsRUFBRTtJQUNWLElBQWdDSixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBUGhELFFBT2lCLEdBQWlCQSxHQUFjLEdBQS9CLEVBUGpCLFdBTzhCLEdBQUlBLEdBQWMsR0FBbEI7SUFDNUIsSUFBMEJBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFSMUMsS0FRYyxHQUFjQSxJQUFjLEdBQTVCLEVBUmQsUUFRd0IsR0FBSUEsSUFBYyxHQUFsQjtJQUN0QixJQUFnQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQVRoRCxRQVNpQixHQUFpQkEsSUFBYyxHQUEvQixFQVRqQixXQVM4QixHQUFJQSxJQUFjLEdBQWxCO0lBRzVCWSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsRUFBRSxDQUFDLENBQUM7SUFFaEJMLGdEQUFTLENBQUMsV0FBTTtRQUNkZSxLQUFLLENBQUMsRUFBQyxDQUErQ1YsTUFBRSxDQUEvQ1csdUJBQStCLEVBQUMsYUFBVyxDQUFLLFFBQUhYLEVBQUUsQ0FBRSxDQUFDLENBQ3hEYyxJQUFJLENBQUNDLFNBQUFBLEdBQUcsRUFBSTtZQUNYLElBQUlBLEdBQUcsQ0FBQ0MsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDdEIsTUFBTSxJQUFJQyxLQUFLLENBQUMsb0NBQW1DLENBQWEsT0FBWEYsR0FBRyxDQUFDQyxNQUFNLENBQUUsQ0FBQyxDQUFDO2FBQ3BFO1lBQ0QsT0FBT0QsR0FBRyxDQUFDO1NBQ1osQ0FDQSxDQUNBRCxJQUFJLENBQUNDLFNBQUFBLEdBQUc7bUJBQUlBLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO1NBQUEsQ0FBQyxDQUN2QkosSUFBSSxDQUFDQyxTQUFBQSxHQUFHLEVBQUk7WUFDWCxrQ0FBa0M7WUFDbEMsMkVBQTJFO1lBQzNFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ00sR0FBRyxDQUFDLENBQUM7WUFDakJaLFdBQVcsQ0FBQ1ksR0FBRyxDQUFDYixRQUFRLENBQUMsQ0FBQztZQUMxQkcsUUFBUSxDQUFDVSxHQUFHLENBQUNYLEtBQUssQ0FBQyxDQUFDO1lBQ3BCRyxXQUFXLENBQUNRLEdBQUcsQ0FBQ1QsUUFBUSxDQUFDLENBQUM7U0FDM0IsQ0FDQSxDQUNBYSxLQUFLLENBQUNDLFNBQUFBLEdBQUcsRUFBSTtZQUNaWixPQUFPLENBQUNDLEdBQUcsQ0FBQ1csR0FBRyxDQUFDLENBQUM7U0FDbEIsQ0FDQSxDQUFDO0tBR0wsRUFBRTtRQUFDcEIsRUFBRTtLQUFDLENBQUM7SUFHUixxQkFDRSw4REFBQ3FCLEtBQUc7a0JBQUMsTUFBSTs7Ozs7WUFBTSxDQUNoQjtDQUNGO0dBekN1QnZCLHlCQUF5Qjs7UUFDaENELGtEQUFTOzs7QUFERkMsS0FBQUEseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvW2lkXS5qcz9jMmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRVc2Vyc0luZm9zQnlJZEluUGFyYW1zKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Byb3ZpZGVyLCBzZXRQcm92aWRlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgXHJcbiAgY29uc29sZS5sb2coaWQpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vYXBpL3VzZXJzLyR7aWR9YClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkbid0IGxvZ2luIHRvIFN0cmFwaS4gU3RhdHVzOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAvLyBTdWNjZXNzZnVsbHkgbG9nZ2VkIHdpdGggU3RyYXBpXHJcbiAgICAgICAgLy8gTm93IHNhdmluZyB0aGUgand0IHRvIHVzZSBpdCBmb3IgZnV0dXJlIGF1dGhlbnRpY2F0ZWQgcmVxdWVzdHMgdG8gU3RyYXBpXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICBzZXRVc2VybmFtZShyZXMudXNlcm5hbWUpO1xyXG4gICAgICAgIHNldEVtYWlsKHJlcy5lbWFpbCk7XHJcbiAgICAgICAgc2V0UHJvdmlkZXIocmVzLnByb3ZpZGVyKTtcclxuICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH1cclxuICAgICAgKTtcclxuXHJcblxyXG4gIH0sIFtpZF0pXHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PltpZF08L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJHZXRVc2Vyc0luZm9zQnlJZEluUGFyYW1zIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicHJvdmlkZXIiLCJzZXRQcm92aWRlciIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwidGhlbiIsInJlcyIsInN0YXR1cyIsIkVycm9yIiwianNvbiIsImNhdGNoIiwiZXJyIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/[id].js\n");

/***/ })

});