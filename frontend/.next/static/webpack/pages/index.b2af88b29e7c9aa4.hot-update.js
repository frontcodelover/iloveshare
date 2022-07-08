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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar backendUrl = \"http://localhost:1337\";\nvar providersNames = [\n    \"google\",\n    \"twitter\",\n    \"auth0\"\n];\nvar LoginButton = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: \"\".concat(backendUrl, \"/api/connect/\").concat(props.providerName),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            style: {\n                width: \"150px\"\n            },\n            children: [\n                \"Connect to \",\n                props.providerName\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n            lineNumber: 11,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, _this);\n};\n_c = LoginButton;\nvar LogoutButton = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: props.onClick,\n        children: \"Logout\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n        lineNumber: 18,\n        columnNumber: 33\n    }, _this);\n};\n_c1 = LogoutButton;\nvar Login = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLogged = ref[0], setIsLogged = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), userName = ref1[0], setUserName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), texts = ref2[0], setTexts = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), dataJwt = ref3[0], setDataJwt = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), logoutEffect = ref4[0], setLogoutEffect = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), idUser = ref5[0], setIdUser = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        fetch(\"\".concat(backendUrl, \"/api/auth/google/callback/\").concat(location.search)).then(function(res) {\n            if (res.status !== 200) {\n                throw new Error(\"Couldn't login to Strapi. Status: \".concat(res.status));\n            }\n            return res;\n        }).then(function(res) {\n            return res.json();\n        }).then(function(res) {\n            // Successfully logged with Strapi\n            // Now saving the jwt to use it for future authenticated requests to Strapi\n            localStorage.setItem(\"jwt\", res.jwt);\n            localStorage.setItem(\"username\", res.user.username);\n            setDataJwt(res.jwt);\n            setUserName(res.user.username);\n            setIsLogged(true);\n            setIdUser(res.user.id);\n            setTexts(\"You have been successfully logged in. \");\n            console.log(res);\n        }).catch(function(err) {\n            console.log(err);\n            setTexts(\"\");\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (logoutEffect) {\n            next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n            setDataJwt(null);\n            setUserName(null);\n        }\n    }, [\n        logoutEffect,\n        dataJwt,\n        userName\n    ]);\n    var logout = function(e) {\n        e.preventDefault();\n        setIsLogged(false);\n        setLogoutEffect(true);\n        localStorage.removeItem(dataJwt);\n        localStorage.removeItem(userName);\n    };\n    var buttons;\n    if (isLogged) {\n        buttons = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-red-600 w-fit text-white p-2\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LogoutButton, {\n                onClick: logout\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n                lineNumber: 79,\n                columnNumber: 64\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n            lineNumber: 79,\n            columnNumber: 15\n        }, _this);\n    } else {\n        var _this1 = _this;\n        buttons = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            style: {\n                listStyleType: \"none\"\n            },\n            children: providersNames.map(function(providerName, i) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"border w-fit my-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoginButton, {\n                        providerName: providerName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, _this1)\n                }, providerName, false, {\n                    fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n                    lineNumber: 84,\n                    columnNumber: 11\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n            lineNumber: 82,\n            columnNumber: 7\n        }, _this);\n    }\n    var text;\n    if (isLogged) {\n        text = \"Welcome \".concat(userName, \", you are connected! Your JWT is => \").concat(dataJwt, \". Your ID is => \").concat(idUser);\n    } else {\n        text = \"Please login to continue.\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: text\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, _this),\n            buttons,\n            texts,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/user/\".concat(idUser),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Go to user page\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\login.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, _this);\n};\n_s(Login, \"gC63YuL16lExEUIlIdgOZYEMCgI=\");\n_c2 = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"LoginButton\");\n$RefreshReg$(_c1, \"LogoutButton\");\n$RefreshReg$(_c2, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDbkI7O0FBR2hDLElBQU1JLFVBQVUsR0FBR0MsdUJBQStCO0FBRWxELElBQU1HLGNBQWMsR0FBRztJQUFDLFFBQVE7SUFBRSxTQUFTO0lBQUUsT0FBTztDQUFDO0FBRXJELElBQU1DLFdBQVcsR0FBRyxTQUFDQyxLQUFLO3lCQUN4Qiw4REFBQ0MsR0FBQztRQUFDQyxJQUFJLEVBQUUsRUFBQyxDQUE0QkYsTUFBa0IsQ0FBNUNOLFVBQVUsRUFBQyxlQUFhLENBQXFCLFFBQW5CTSxLQUFLLENBQUNHLFlBQVksQ0FBRTtrQkFDeEQsNEVBQUNDLFFBQU07WUFBQ0MsS0FBSyxFQUFFO2dCQUFFQyxLQUFLLEVBQUUsT0FBTzthQUFFOztnQkFBRSxhQUFXO2dCQUFDTixLQUFLLENBQUNHLFlBQVk7Ozs7OztpQkFBVTs7Ozs7YUFDekU7Q0FDTDtBQUpLSixLQUFBQSxXQUFXO0FBU2pCLElBQU1RLFlBQVksR0FBRyxTQUFDUCxLQUFLO3lCQUFLLDhEQUFDSSxRQUFNO1FBQUNJLE9BQU8sRUFBRVIsS0FBSyxDQUFDUSxPQUFPO2tCQUFFLFFBQU07Ozs7O2FBQVM7Q0FBQTtBQUF6RUQsTUFBQUEsWUFBWTtBQUVsQixJQUFNRSxLQUFLLEdBQUcsU0FBQ1QsS0FBSyxFQUFLOztJQUN2QixJQUFnQ1IsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQXBCakQsUUFvQmlCLEdBQWlCQSxHQUFlLEdBQWhDLEVBcEJqQixXQW9COEIsR0FBSUEsR0FBZSxHQUFuQjtJQUM1QixJQUFnQ0EsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQXJCaEQsUUFxQmlCLEdBQWlCQSxJQUFjLEdBQS9CLEVBckJqQixXQXFCOEIsR0FBSUEsSUFBYyxHQUFsQjtJQUM1QixJQUEwQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQXRCeEMsS0FzQmMsR0FBY0EsSUFBWSxHQUExQixFQXRCZCxRQXNCd0IsR0FBSUEsSUFBWSxHQUFoQjtJQUN0QixJQUE4QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQXZCNUMsT0F1QmdCLEdBQWdCQSxJQUFZLEdBQTVCLEVBdkJoQixVQXVCNEIsR0FBSUEsSUFBWSxHQUFoQjtJQUMxQixJQUF3Q0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQXhCekQsWUF3QnFCLEdBQXFCQSxJQUFlLEdBQXBDLEVBeEJyQixlQXdCc0MsR0FBSUEsSUFBZSxHQUFuQjtJQUNwQyxJQUE0QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQXpCNUMsTUF5QmUsR0FBZUEsSUFBYyxHQUE3QixFQXpCZixTQXlCMEIsR0FBSUEsSUFBYyxHQUFsQjtJQUV4QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBR2QrQixLQUFLLENBQUMsRUFBQyxDQUF5Q0MsTUFBZSxDQUF0RDdCLFVBQVUsRUFBQyw0QkFBMEIsQ0FBa0IsUUFBaEI2QixRQUFRLENBQUNDLE1BQU0sQ0FBRSxDQUFDLENBQ2pFQyxJQUFJLENBQUNDLFNBQUFBLEdBQUcsRUFBSTtZQUNYLElBQUlBLEdBQUcsQ0FBQ0MsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDdEIsTUFBTSxJQUFJQyxLQUFLLENBQUMsb0NBQW1DLENBQWEsT0FBWEYsR0FBRyxDQUFDQyxNQUFNLENBQUUsQ0FBQyxDQUFDO2FBQ3BFO1lBQ0QsT0FBT0QsR0FBRyxDQUFDO1NBQ1osQ0FBQyxDQUNERCxJQUFJLENBQUNDLFNBQUFBLEdBQUc7bUJBQUlBLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO1NBQUEsQ0FBQyxDQUN2QkosSUFBSSxDQUFDQyxTQUFBQSxHQUFHLEVBQUk7WUFDWCxrQ0FBa0M7WUFDbEMsMkVBQTJFO1lBQzNFSSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxLQUFLLEVBQUVMLEdBQUcsQ0FBQ00sR0FBRyxDQUFDLENBQUM7WUFDckNGLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsRUFBRUwsR0FBRyxDQUFDTyxJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BEakIsVUFBVSxDQUFDUyxHQUFHLENBQUNNLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCbkIsV0FBVyxDQUFDYSxHQUFHLENBQUNPLElBQUksQ0FBQ0MsUUFBUSxDQUFDLENBQUM7WUFDL0J2QixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEJVLFNBQVMsQ0FBQ0ssR0FBRyxDQUFDTyxJQUFJLENBQUNFLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCcEIsUUFBUSxDQUFDLHdDQUF3QyxDQUFDLENBQUM7WUFDbkRxQixPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsR0FBRyxDQUFDLENBQUM7U0FFbEIsQ0FBQyxDQUNEWSxLQUFLLENBQUNDLFNBQUFBLEdBQUcsRUFBSTtZQUNaSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsR0FBRyxDQUFDLENBQUM7WUFDakJ4QixRQUFRLENBQUMsRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUFDO0tBRUosRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQeEIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSTJCLFlBQVksRUFBRTtZQUNsQnpCLHVEQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakJ3QixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakJKLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjtLQUNGLEVBQ0M7UUFBQ0ssWUFBWTtRQUFFRixPQUFPO1FBQUVKLFFBQVE7S0FBQyxDQUFDLENBQUM7SUFFckMsSUFBTTZCLE1BQU0sR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDcEJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkJoQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkJRLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QlcsWUFBWSxDQUFDYyxVQUFVLENBQUM1QixPQUFPLENBQUMsQ0FBQztRQUNqQ2MsWUFBWSxDQUFDYyxVQUFVLENBQUNoQyxRQUFRLENBQUMsQ0FBQztLQUNqQztJQUVELElBQUlpQyxPQUFPO0lBRVgsSUFBSW5DLFFBQVEsRUFBRTtRQUNabUMsT0FBTyxpQkFBRyw4REFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsaUNBQWlDO3NCQUFDLDRFQUFDeEMsWUFBWTtnQkFBQ0MsT0FBTyxFQUFFaUMsTUFBTTs7Ozs7cUJBQUk7Ozs7O2lCQUFNLENBQUM7S0FDcEcsTUFBTTs7UUFDTEksT0FBTyxpQkFDTCw4REFBQ0csSUFBRTtZQUFDM0MsS0FBSyxFQUFFO2dCQUFFNEMsYUFBYSxFQUFFLE1BQU07YUFBRTtzQkFDakNuRCxjQUFjLENBQUNvRCxHQUFHLENBQUMsU0FBQy9DLFlBQVksRUFBRWdELENBQUM7cUNBQ2xDLDhEQUFDQyxJQUFFO29CQUFvQkwsU0FBUyxFQUFDLG1CQUFtQjs4QkFDbEQsNEVBQUNoRCxXQUFXO3dCQUFDSSxZQUFZLEVBQUVBLFlBQVk7Ozs7OzhCQUFJO21CQURwQ0EsWUFBWTs7OzswQkFFaEI7YUFDTixDQUFDOzs7OztpQkFDQyxDQUNMO0tBQ0g7SUFFRCxJQUFJa0QsSUFBSTtJQUVSLElBQUkzQyxRQUFRLEVBQUU7UUFDWjJDLElBQUksR0FBRyxVQUFTLENBQWlEckMsTUFBTyxDQUF0REosUUFBUSxFQUFDLHNDQUFvQyxDQUFVLENBQWtCUSxNQUFNLENBQWhDSixPQUFPLEVBQUMsa0JBQWdCLENBQVMsUUFBUEksTUFBTSxDQUFFLENBQUM7S0FDckcsTUFBTTtRQUNMaUMsSUFBSSxHQUFJLDJCQUF5QixDQUFFO0tBQ3BDO0lBRUQscUJBQ0UsOERBQUNQLEtBQUc7OzBCQUNGLDhEQUFDUSxHQUFDOzBCQUFFRCxJQUFJOzs7OztxQkFBSztZQUNaUixPQUFPO1lBQ1AvQixLQUFLOzBCQUVOLDhEQUFDYixHQUFDO2dCQUFDQyxJQUFJLEVBQUUsUUFBTyxDQUFTLE9BQVBrQixNQUFNLENBQUU7MEJBQ3hCLDRFQUFDaEIsUUFBTTs4QkFBQyxpQkFBZTs7Ozs7eUJBQVM7Ozs7O3FCQUM5Qjs7Ozs7O2FBRUEsQ0FDTjtDQUNIO0dBNUZLSyxLQUFLO0FBQUxBLE1BQUFBLEtBQUs7QUE4RlgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xvZ2luLmpzPzJlOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcblxyXG5jb25zdCBiYWNrZW5kVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcclxuXHJcbmNvbnN0IHByb3ZpZGVyc05hbWVzID0gW1wiZ29vZ2xlXCIsIFwidHdpdHRlclwiLCBcImF1dGgwXCJdO1xyXG5cclxuY29uc3QgTG9naW5CdXR0b24gPSAocHJvcHMpID0+IChcclxuICA8YSBocmVmPXtgJHtiYWNrZW5kVXJsfS9hcGkvY29ubmVjdC8ke3Byb3BzLnByb3ZpZGVyTmFtZX1gfT5cclxuICAgIDxidXR0b24gc3R5bGU9e3sgd2lkdGg6IFwiMTUwcHhcIiB9fT5Db25uZWN0IHRvIHtwcm9wcy5wcm92aWRlck5hbWV9PC9idXR0b24+XHJcbiAgPC9hPlxyXG4pO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgTG9nb3V0QnV0dG9uID0gKHByb3BzKSA9PiA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PkxvZ291dDwvYnV0dG9uPjtcclxuXHJcbmNvbnN0IExvZ2luID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdGV4dHMsIHNldFRleHRzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkYXRhSnd0LCBzZXREYXRhSnd0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2dvdXRFZmZlY3QsIHNldExvZ291dEVmZmVjdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lkVXNlciwgc2V0SWRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuXHJcbiAgICBmZXRjaChgJHtiYWNrZW5kVXJsfS9hcGkvYXV0aC9nb29nbGUvY2FsbGJhY2svJHtsb2NhdGlvbi5zZWFyY2h9YClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkbid0IGxvZ2luIHRvIFN0cmFwaS4gU3RhdHVzOiAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIC8vIFN1Y2Nlc3NmdWxseSBsb2dnZWQgd2l0aCBTdHJhcGlcclxuICAgICAgLy8gTm93IHNhdmluZyB0aGUgand0IHRvIHVzZSBpdCBmb3IgZnV0dXJlIGF1dGhlbnRpY2F0ZWQgcmVxdWVzdHMgdG8gU3RyYXBpXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdqd3QnLCByZXMuand0KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgcmVzLnVzZXIudXNlcm5hbWUpO1xyXG4gICAgICBzZXREYXRhSnd0KHJlcy5qd3QpO1xyXG4gICAgICBzZXRVc2VyTmFtZShyZXMudXNlci51c2VybmFtZSk7XHJcbiAgICAgIHNldElzTG9nZ2VkKHRydWUpO1xyXG4gICAgICBzZXRJZFVzZXIocmVzLnVzZXIuaWQpO1xyXG4gICAgICBzZXRUZXh0cygnWW91IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgbG9nZ2VkIGluLiAnKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIHNldFRleHRzKCcnKVxyXG4gICAgfSk7XHJcbiAgICBcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9nb3V0RWZmZWN0KSB7XHJcbiAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgc2V0RGF0YUp3dChudWxsKTtcclxuICAgIHNldFVzZXJOYW1lKG51bGwpO1xyXG4gIH1cclxufVxyXG4sIFtsb2dvdXRFZmZlY3QsIGRhdGFKd3QsIHVzZXJOYW1lXSk7XHJcblxyXG5jb25zdCBsb2dvdXQgPSAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBzZXRJc0xvZ2dlZChmYWxzZSk7XHJcbiAgc2V0TG9nb3V0RWZmZWN0KHRydWUpO1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGRhdGFKd3QpO1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHVzZXJOYW1lKTtcclxuICB9O1xyXG5cclxuICBsZXQgYnV0dG9ucztcclxuXHJcbiAgaWYgKGlzTG9nZ2VkKSB7XHJcbiAgICBidXR0b25zID0gPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNjAwIHctZml0IHRleHQtd2hpdGUgcC0yXCI+PExvZ291dEJ1dHRvbiBvbkNsaWNrPXtsb2dvdXR9IC8+PC9kaXY+O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBidXR0b25zID0gKFxyXG4gICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlVHlwZTogXCJub25lXCIgfX0+XHJcbiAgICAgICAge3Byb3ZpZGVyc05hbWVzLm1hcCgocHJvdmlkZXJOYW1lLCBpKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtwcm92aWRlck5hbWV9IGNsYXNzTmFtZT1cImJvcmRlciB3LWZpdCBteS0yXCI+XHJcbiAgICAgICAgICAgIDxMb2dpbkJ1dHRvbiBwcm92aWRlck5hbWU9e3Byb3ZpZGVyTmFtZX0gLz4gXHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGxldCB0ZXh0O1xyXG5cclxuICBpZiAoaXNMb2dnZWQpIHtcclxuICAgIHRleHQgPSBgV2VsY29tZSAke3VzZXJOYW1lfSwgeW91IGFyZSBjb25uZWN0ZWQhIFlvdXIgSldUIGlzID0+ICR7ZGF0YUp3dH0uIFlvdXIgSUQgaXMgPT4gJHtpZFVzZXJ9YDtcclxuICB9IGVsc2Uge1xyXG4gICAgdGV4dCA9IGBQbGVhc2UgbG9naW4gdG8gY29udGludWUuYDsgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHA+e3RleHR9PC9wPlxyXG4gICAgICB7YnV0dG9uc31cclxuICAgICAge3RleHRzfVxyXG4gICAgICBcclxuICAgICAgPGEgaHJlZj17YC91c2VyLyR7aWRVc2VyfWB9PlxyXG4gICAgICAgIDxidXR0b24+R28gdG8gdXNlciBwYWdlPC9idXR0b24+XHJcbiAgICAgIDwvYT5cclxuICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUm91dGVyIiwiYmFja2VuZFVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwicHJvdmlkZXJzTmFtZXMiLCJMb2dpbkJ1dHRvbiIsInByb3BzIiwiYSIsImhyZWYiLCJwcm92aWRlck5hbWUiLCJidXR0b24iLCJzdHlsZSIsIndpZHRoIiwiTG9nb3V0QnV0dG9uIiwib25DbGljayIsIkxvZ2luIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsInVzZXJOYW1lIiwic2V0VXNlck5hbWUiLCJ0ZXh0cyIsInNldFRleHRzIiwiZGF0YUp3dCIsInNldERhdGFKd3QiLCJsb2dvdXRFZmZlY3QiLCJzZXRMb2dvdXRFZmZlY3QiLCJpZFVzZXIiLCJzZXRJZFVzZXIiLCJmZXRjaCIsImxvY2F0aW9uIiwic2VhcmNoIiwidGhlbiIsInJlcyIsInN0YXR1cyIsIkVycm9yIiwianNvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJqd3QiLCJ1c2VyIiwidXNlcm5hbWUiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsInB1c2giLCJsb2dvdXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVJdGVtIiwiYnV0dG9ucyIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibGlzdFN0eWxlVHlwZSIsIm1hcCIsImkiLCJsaSIsInRleHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/login.js\n");

/***/ })

});