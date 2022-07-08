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
exports.id = "pages/user/[id]";
exports.ids = ["pages/user/[id]"];
exports.modules = {

/***/ "./components/user/dashboard.js":
/*!**************************************!*\
  !*** ./components/user/dashboard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dashboard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Dashboard({ email , provider , username  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            username,\n            email,\n            provider\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\components\\\\user\\\\dashboard.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXIvZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFFVixTQUFTQyxTQUFTLENBQUMsRUFBQ0MsS0FBSyxHQUFFQyxRQUFRLEdBQUVDLFFBQVEsR0FBQyxFQUFFO0lBRTdELHFCQUNFLDhEQUFDQyxLQUFHOztZQUVERCxRQUFRO1lBQ1JGLEtBQUs7WUFDTEMsUUFBUTs7Ozs7O1lBQ0wsQ0FDUDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9jb21wb25lbnRzL3VzZXIvZGFzaGJvYXJkLmpzPzYxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKHtlbWFpbCwgcHJvdmlkZXIsIHVzZXJuYW1lfSkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuXHJcbiAgICAgIHt1c2VybmFtZX1cclxuICAgICAge2VtYWlsfVxyXG4gICAgICB7cHJvdmlkZXJ9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRGFzaGJvYXJkIiwiZW1haWwiLCJwcm92aWRlciIsInVzZXJuYW1lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/user/dashboard.js\n");

/***/ }),

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetUsersInfosByIdInParams)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_user_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/user/dashboard */ \"./components/user/dashboard.js\");\n\n\n\n\nfunction GetUsersInfosByIdInParams() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const { 0: provider , 1: setProvider  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    console.log(id);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(`${\"http://localhost:1337\"}/api/users/${id}`).then((res)=>{\n            if (res.status !== 200) {\n                throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);\n            }\n            return res;\n        }).then((res)=>res.json()\n        ).then((res)=>{\n            // Successfully logged with Strapi\n            // Now saving the jwt to use it for future authenticated requests to Strapi\n            console.log(res);\n            setUsername(res.username);\n            setEmail(res.email);\n            setProvider(res.provider);\n        }).catch((err)=>{\n            console.log(err);\n        });\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_user_dashboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            username: username,\n            email: email,\n            provider: provider\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\pages\\\\user\\\\[id].js\",\n            lineNumber: 47,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nideraemy\\\\Desktop\\\\perso\\\\code\\\\iloveshare\\\\frontend\\\\pages\\\\user\\\\[id].js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFpRDtBQUNUO0FBQ2dCO0FBR3pDLFNBQVNLLHlCQUF5QixHQUFHO0lBQ2xELE1BQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUMxQixNQUFNLEVBQUVJLEVBQUUsR0FBRSxHQUFHRCxNQUFNLENBQUNFLEtBQUs7SUFDM0IsTUFBTSxFQVJSLEdBUVNDLFFBQVEsR0FSakIsR0FRbUJDLFdBQVcsTUFBSVIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDOUMsTUFBTSxFQVRSLEdBU1NTLEtBQUssR0FUZCxHQVNnQkMsUUFBUSxNQUFJViwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUN4QyxNQUFNLEVBVlIsR0FVU1csUUFBUSxHQVZqQixHQVVtQkMsV0FBVyxNQUFJWiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUs5Q2EsT0FBTyxDQUFDQyxHQUFHLENBQUNULEVBQUUsQ0FBQyxDQUFDO0lBRWhCTixnREFBUyxDQUFDLElBQU07UUFDZGdCLEtBQUssQ0FBQyxDQUFDLEVBQUVDLHVCQUErQixDQUFDLFdBQVcsRUFBRVgsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUN4RGMsSUFBSSxDQUFDQyxDQUFBQSxHQUFHLEdBQUk7WUFDWCxJQUFJQSxHQUFHLENBQUNDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3RCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLENBQUMsa0NBQWtDLEVBQUVGLEdBQUcsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1lBQ0QsT0FBT0QsR0FBRyxDQUFDO1NBQ1osQ0FDQSxDQUNBRCxJQUFJLENBQUNDLENBQUFBLEdBQUcsR0FBSUEsR0FBRyxDQUFDRyxJQUFJLEVBQUU7UUFBQSxDQUFDLENBQ3ZCSixJQUFJLENBQUNDLENBQUFBLEdBQUcsR0FBSTtZQUNYLGtDQUFrQztZQUNsQywyRUFBMkU7WUFDM0VQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxHQUFHLENBQUMsQ0FBQztZQUNqQlosV0FBVyxDQUFDWSxHQUFHLENBQUNiLFFBQVEsQ0FBQyxDQUFDO1lBQzFCRyxRQUFRLENBQUNVLEdBQUcsQ0FBQ1gsS0FBSyxDQUFDLENBQUM7WUFDcEJHLFdBQVcsQ0FBQ1EsR0FBRyxDQUFDVCxRQUFRLENBQUMsQ0FBQztTQUMzQixDQUNBLENBQ0FhLEtBQUssQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFJO1lBQ1paLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVyxHQUFHLENBQUMsQ0FBQztTQUNsQixDQUNBLENBQUM7S0FHTCxFQUFFO1FBQUNwQixFQUFFO0tBQUMsQ0FBQztJQUdSLHFCQUNFLDhEQUFDcUIsS0FBRztrQkFBQyw0RUFBQ3hCLGtFQUFTO1lBQUNLLFFBQVEsRUFBRUEsUUFBUTtZQUFFRSxLQUFLLEVBQUVBLEtBQUs7WUFBRUUsUUFBUSxFQUFFQSxRQUFROzs7OztnQkFBSTs7Ozs7WUFBTSxDQUMvRTtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy91c2VyL1tpZF0uanM/YzJhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvdXNlci9kYXNoYm9hcmRcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRVc2Vyc0luZm9zQnlJZEluUGFyYW1zKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Byb3ZpZGVyLCBzZXRQcm92aWRlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcblxyXG5cclxuICBcclxuICBjb25zb2xlLmxvZyhpZCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hcGkvdXNlcnMvJHtpZH1gKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGRuJ3QgbG9naW4gdG8gU3RyYXBpLiBTdGF0dXM6ICR7cmVzLnN0YXR1c31gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgfVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIC8vIFN1Y2Nlc3NmdWxseSBsb2dnZWQgd2l0aCBTdHJhcGlcclxuICAgICAgICAvLyBOb3cgc2F2aW5nIHRoZSBqd3QgdG8gdXNlIGl0IGZvciBmdXR1cmUgYXV0aGVudGljYXRlZCByZXF1ZXN0cyB0byBTdHJhcGlcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIHNldFVzZXJuYW1lKHJlcy51c2VybmFtZSk7XHJcbiAgICAgICAgc2V0RW1haWwocmVzLmVtYWlsKTtcclxuICAgICAgICBzZXRQcm92aWRlcihyZXMucHJvdmlkZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuXHJcbiAgfSwgW2lkXSlcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+PERhc2hib2FyZCB1c2VybmFtZT17dXNlcm5hbWV9IGVtYWlsPXtlbWFpbH0gcHJvdmlkZXI9e3Byb3ZpZGVyfSAvPjwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkRhc2hib2FyZCIsIkdldFVzZXJzSW5mb3NCeUlkSW5QYXJhbXMiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJwcm92aWRlciIsInNldFByb3ZpZGVyIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiRXJyb3IiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/user/[id].js"));
module.exports = __webpack_exports__;

})();