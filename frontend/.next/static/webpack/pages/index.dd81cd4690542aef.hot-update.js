"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/login.js":
/*!*****************************!*\
  !*** ./components/login.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar backendUrl = \"http://localhost:1337\";\nvar providersNames = [\n    \"google\",\n    \"twitter\",\n    \"auth0\"\n];\nvar LoginButton = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"\".concat(backendUrl, \"/api/connect/\").concat(props.providerName),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            style: {\n                width: \"150px\"\n            },\n            children: [\n                \"Connect to \",\n                props.providerName\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n            lineNumber: 11,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, _this);\n};\n_c = LoginButton;\nvar LogoutButton = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: props.onClick,\n        children: \"Logout\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n        lineNumber: 18,\n        columnNumber: 33\n    }, _this);\n};\n_c1 = LogoutButton;\nvar Login = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLogged = ref[0], setIsLogged = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), userName = ref1[0], setUserName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), texts = ref2[0], setTexts = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), dataJwt = ref3[0], setDataJwt = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), logoutEffect = ref4[0], setLogoutEffect = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), idUser = ref5[0], setIdUser = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"\".concat(backendUrl, \"/api/auth/google/callback/\").concat(location.search)).then(function(res) {\n            if (res.status !== 200) {\n                throw new Error(\"Couldn't login to Strapi. Status: \".concat(res.status));\n            }\n            return res;\n        }).then(function(res) {\n            return res.json();\n        }).then(function(res) {\n            // Successfully logged with Strapi\n            // Now saving the jwt to use it for future authenticated requests to Strapi\n            localStorage.setItem(\"jwt\", res.jwt);\n            localStorage.setItem(\"username\", res.user.username);\n            setDataJwt(res.jwt);\n            setUserName(res.user.username);\n            setIsLogged(true);\n            setIdUser(res.user.id);\n            setTexts(\"You have been successfully logged in. You will be redirected in a few seconds...\");\n            console.log(res);\n        }).catch(function(err) {\n            console.log(err);\n            setTexts(\"\");\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (logoutEffect) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n            setDataJwt(null);\n            setUserName(null);\n        }\n    }, [\n        logoutEffect,\n        dataJwt,\n        userName\n    ]);\n    var logout = function(e) {\n        e.preventDefault();\n        setIsLogged(false);\n        setLogoutEffect(true);\n        localStorage.removeItem(dataJwt);\n        localStorage.removeItem(userName);\n    };\n    var buttons;\n    if (isLogged) {\n        buttons = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-red-600 w-fit text-white p-2\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoutButton, {\n                onClick: logout\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n                lineNumber: 79,\n                columnNumber: 64\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n            lineNumber: 79,\n            columnNumber: 15\n        }, _this);\n    } else {\n        var _this1 = _this;\n        buttons = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            style: {\n                listStyleType: \"none\"\n            },\n            children: providersNames.map(function(providerName, i) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"border w-fit my-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginButton, {\n                        providerName: providerName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, _this1)\n                }, providerName, false, {\n                    fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n                    lineNumber: 84,\n                    columnNumber: 11\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, _this);\n    }\n    var text;\n    if (isLogged) {\n        text = \"Welcome \".concat(userName, \", you are connected! Your JWT is => \").concat(dataJwt, \". Your ID is => \").concat(idUser);\n    } else {\n        text = \"Please login to continue.\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: text\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, _this),\n            buttons,\n            texts\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, _this);\n};\n_s(Login, \"gC63YuL16lExEUIlIdgOZYEMCgI=\");\n_c2 = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"LoginButton\");\n$RefreshReg$(_c1, \"LogoutButton\");\n$RefreshReg$(_c2, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNqQztJQUVELElBQUlpQyxPQUFPO0lBRVgsSUFBSW5DLFFBQVEsRUFBRTtRQUNabUMsT0FBTyxpQkFBRyw4REFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsaUNBQWlDO3NCQUFDLDRFQUFDeEMsWUFBWTtnQkFBQ0MsT0FBTyxFQUFFaUMsTUFBTTs7Ozs7cUJBQUk7Ozs7O2lCQUFNLENBQUM7S0FDcEcsTUFBTTs7UUFDTEksT0FBTyxpQkFDTCw4REFBQ0csSUFBRTtZQUFDM0MsS0FBSyxFQUFFO2dCQUFFNEMsYUFBYSxFQUFFLE1BQU07YUFBRTtzQkFDakNuRCxjQUFjLENBQUNvRCxHQUFHLENBQUMsU0FBQy9DLFlBQVksRUFBRWdELENBQUM7cUNBQ2xDLDhEQUFDQyxJQUFFO29CQUFvQkwsU0FBUyxFQUFDLG1CQUFtQjs4QkFDbEQsNEVBQUNoRCxXQUFXO3dCQUFDSSxZQUFZLEVBQUVBLFlBQVk7Ozs7OzhCQUFJO21CQURwQ0EsWUFBWTs7OzswQkFFaEI7YUFDTixDQUFDOzs7OztpQkFDQyxDQUNMO0tBQ0g7SUFFRCxJQUFJa0QsSUFBSTtJQUVSLElBQUkzQyxRQUFRLEVBQUU7UUFDWjJDLElBQUksR0FBRyxVQUFTLENBQWlEckMsTUFBTyxDQUF0REosUUFBUSxFQUFDLHNDQUFvQyxDQUFVLENBQWtCUSxNQUFNLENBQWhDSixPQUFPLEVBQUMsa0JBQWdCLENBQVMsUUFBUEksTUFBTSxDQUFFLENBQUM7S0FDckcsTUFBTTtRQUNMaUMsSUFBSSxHQUFJLDJCQUF5QixDQUFFO0tBQ3BDO0lBRUQscUJBQ0UsOERBQUNQLEtBQUc7OzBCQUNGLDhEQUFDUSxHQUFDOzBCQUFFRCxJQUFJOzs7OztxQkFBSztZQUNaUixPQUFPO1lBQ1AvQixLQUFLOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0F2RktMLEtBQUs7QUFBTEEsTUFBQUEsS0FBSztBQXlGWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbG9naW4uanM/MmU5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuXHJcbmNvbnN0IGJhY2tlbmRVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xyXG5cclxuY29uc3QgcHJvdmlkZXJzTmFtZXMgPSBbXCJnb29nbGVcIiwgXCJ0d2l0dGVyXCIsIFwiYXV0aDBcIl07XHJcblxyXG5jb25zdCBMb2dpbkJ1dHRvbiA9IChwcm9wcykgPT4gKFxyXG4gIDxhIGhyZWY9e2Ake2JhY2tlbmRVcmx9L2FwaS9jb25uZWN0LyR7cHJvcHMucHJvdmlkZXJOYW1lfWB9PlxyXG4gICAgPGJ1dHRvbiBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiIH19PkNvbm5lY3QgdG8ge3Byb3BzLnByb3ZpZGVyTmFtZX08L2J1dHRvbj5cclxuICA8L2E+XHJcbik7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBMb2dvdXRCdXR0b24gPSAocHJvcHMpID0+IDxidXR0b24gb25DbGljaz17cHJvcHMub25DbGlja30+TG9nb3V0PC9idXR0b24+O1xyXG5cclxuY29uc3QgTG9naW4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlck5hbWUsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0ZXh0cywgc2V0VGV4dHNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2RhdGFKd3QsIHNldERhdGFKd3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvZ291dEVmZmVjdCwgc2V0TG9nb3V0RWZmZWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaWRVc2VyLCBzZXRJZFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG5cclxuICAgIGZldGNoKGAke2JhY2tlbmRVcmx9L2FwaS9hdXRoL2dvb2dsZS9jYWxsYmFjay8ke2xvY2F0aW9uLnNlYXJjaH1gKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGRuJ3QgbG9naW4gdG8gU3RyYXBpLiBTdGF0dXM6ICR7cmVzLnN0YXR1c31gKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgLy8gU3VjY2Vzc2Z1bGx5IGxvZ2dlZCB3aXRoIFN0cmFwaVxyXG4gICAgICAvLyBOb3cgc2F2aW5nIHRoZSBqd3QgdG8gdXNlIGl0IGZvciBmdXR1cmUgYXV0aGVudGljYXRlZCByZXF1ZXN0cyB0byBTdHJhcGlcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2p3dCcsIHJlcy5qd3QpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCByZXMudXNlci51c2VybmFtZSk7XHJcbiAgICAgIHNldERhdGFKd3QocmVzLmp3dCk7XHJcbiAgICAgIHNldFVzZXJOYW1lKHJlcy51c2VyLnVzZXJuYW1lKTtcclxuICAgICAgc2V0SXNMb2dnZWQodHJ1ZSk7XHJcbiAgICAgIHNldElkVXNlcihyZXMudXNlci5pZCk7XHJcbiAgICAgIHNldFRleHRzKCdZb3UgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4uIFlvdSB3aWxsIGJlIHJlZGlyZWN0ZWQgaW4gYSBmZXcgc2Vjb25kcy4uLicpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICBcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgc2V0VGV4dHMoJycpXHJcbiAgICB9KTtcclxuICAgIFxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2dvdXRFZmZlY3QpIHtcclxuICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICBzZXREYXRhSnd0KG51bGwpO1xyXG4gICAgc2V0VXNlck5hbWUobnVsbCk7XHJcbiAgfVxyXG59XHJcbiwgW2xvZ291dEVmZmVjdCwgZGF0YUp3dCwgdXNlck5hbWVdKTtcclxuXHJcbmNvbnN0IGxvZ291dCA9IChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHNldElzTG9nZ2VkKGZhbHNlKTtcclxuICBzZXRMb2dvdXRFZmZlY3QodHJ1ZSk7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZGF0YUp3dCk7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odXNlck5hbWUpO1xyXG4gIH07XHJcblxyXG4gIGxldCBidXR0b25zO1xyXG5cclxuICBpZiAoaXNMb2dnZWQpIHtcclxuICAgIGJ1dHRvbnMgPSA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlZC02MDAgdy1maXQgdGV4dC13aGl0ZSBwLTJcIj48TG9nb3V0QnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0gLz48L2Rpdj47XHJcbiAgfSBlbHNlIHtcclxuICAgIGJ1dHRvbnMgPSAoXHJcbiAgICAgIDx1bCBzdHlsZT17eyBsaXN0U3R5bGVUeXBlOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICB7cHJvdmlkZXJzTmFtZXMubWFwKChwcm92aWRlck5hbWUsIGkpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e3Byb3ZpZGVyTmFtZX0gY2xhc3NOYW1lPVwiYm9yZGVyIHctZml0IG15LTJcIj5cclxuICAgICAgICAgICAgPExvZ2luQnV0dG9uIHByb3ZpZGVyTmFtZT17cHJvdmlkZXJOYW1lfSAvPiBcclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbGV0IHRleHQ7XHJcblxyXG4gIGlmIChpc0xvZ2dlZCkge1xyXG4gICAgdGV4dCA9IGBXZWxjb21lICR7dXNlck5hbWV9LCB5b3UgYXJlIGNvbm5lY3RlZCEgWW91ciBKV1QgaXMgPT4gJHtkYXRhSnd0fS4gWW91ciBJRCBpcyA9PiAke2lkVXNlcn1gO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0ZXh0ID0gYFBsZWFzZSBsb2dpbiB0byBjb250aW51ZS5gOyBcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cD57dGV4dH08L3A+XHJcbiAgICAgIHtidXR0b25zfVxyXG4gICAgICB7dGV4dHN9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUm91dGVyIiwiYmFja2VuZFVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwicHJvdmlkZXJzTmFtZXMiLCJMb2dpbkJ1dHRvbiIsInByb3BzIiwiYSIsImhyZWYiLCJwcm92aWRlck5hbWUiLCJidXR0b24iLCJzdHlsZSIsIndpZHRoIiwiTG9nb3V0QnV0dG9uIiwib25DbGljayIsIkxvZ2luIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJ0ZXh0cyIsInNldFRleHRzIiwiZGF0YUp3dCIsInNldERhdGFKd3QiLCJsb2dvdXRFZmZlY3QiLCJzZXRMb2dvdXRFZmZlY3QiLCJpZFVzZXIiLCJzZXRJZFVzZXIiLCJmZXRjaCIsImxvY2F0aW9uIiwic2VhcmNoIiwidGhlbiIsInJlcyIsInN0YXR1cyIsIkVycm9yIiwianNvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJqd3QiLCJ1c2VyIiwidXNlcm5hbWUiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsInB1c2giLCJsb2dvdXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVJdGVtIiwiYnV0dG9ucyIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibGlzdFN0eWxlVHlwZSIsIm1hcCIsImkiLCJsaSIsInRleHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/login.js\n");

/***/ })

});