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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/twitter":
/*!**********************************************!*\
  !*** external "next-auth/providers/twitter" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/twitter");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/twitter */ \"next-auth/providers/twitter\");\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/*\r\nexport default NextAuth({\r\n    // Configure one or more authentication providers\r\n    providers: [\r\n        Twitter({\r\n            clientId: process.env.TWITTER_CLIENT_ID,\r\n            clientSecret: process.env.TWITTER_CLIENT_SECRET,\r\n            version: \"2.0\",\r\n            callbacks: {\r\n                session: async (session, user) => {\r\n\r\n                    console.log(\"???? session \");\r\n                    session.jwt = user.jwt;\r\n                    session.id = user.id;\r\n                    return Promise.resolve(session);\r\n                },\r\n                jwt: async (token, user, account) => {\r\n\r\n                    console.log(\"???? JWT ?\")\r\n                    console.log(account)\r\n                    const isSignIn = user ? true : false;\r\n                    if (isSignIn) {\r\n                        const response = await fetch(\r\n                            `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`\r\n                        );\r\n                        const data = await response.json();\r\n                        token.jwt = data.jwt;\r\n                        token.id = data.user.id;\r\n                    }\r\n                    return Promise.resolve(token);\r\n                },\r\n            },\r\n        }),\r\n        // ...add more providers here\r\n    ],\r\n})\r\n*/ const options = {\n    providers: [\n        next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.TWITTER_CLIENT_ID,\n            clientSecret: process.env.TWITTER_CLIENT_SECRET,\n            version: \"2.0\"\n        }), \n    ]\n};\nconst Auth = (req, res)=>next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQ2lCO0FBQ2xEO0lBdUNJRyxTQUFTLEVBQUU7UUFDUEYsT0FBTyxDQUFDO1lBQ0pHO1lBQ0FJO1lBQ0FFLE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUM7S0FDTDtDQUNKO0FBRUQsTUFBTUMsSUFBSSxHQUFHLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxHQUFLYixRQUFRLENBQUNZLEdBQUcsRUFBRUMsR0FBRyxFQUFFWCxPQUFPLENBQUM7QUFBQztBQUV2RCxlQUFlUyxJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgVHdpdHRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy90d2l0dGVyXCI7XHJcbi8qXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICAgIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIFR3aXR0ZXIoe1xyXG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9DTElFTlRfSUQsXHJcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuVFdJVFRFUl9DTElFTlRfU0VDUkVULFxyXG4gICAgICAgICAgICB2ZXJzaW9uOiBcIjIuMFwiLFxyXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgICAgICAgIHNlc3Npb246IGFzeW5jIChzZXNzaW9uLCB1c2VyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPz8/PyBzZXNzaW9uIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uLmp3dCA9IHVzZXIuand0O1xyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb24uaWQgPSB1c2VyLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2Vzc2lvbik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgand0OiBhc3luYyAodG9rZW4sIHVzZXIsIGFjY291bnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI/Pz8/IEpXVCA/XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWNjb3VudClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1NpZ25JbiA9IHVzZXIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2lnbkluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hdXRoLyR7YWNjb3VudC5wcm92aWRlcn0vY2FsbGJhY2s/YWNjZXNzX3Rva2VuPSR7YWNjb3VudD8uYWNjZXNzVG9rZW59YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbi5qd3QgPSBkYXRhLmp3dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4uaWQgPSBkYXRhLnVzZXIuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgICAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxyXG4gICAgXSxcclxufSlcclxuKi9cclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBUd2l0dGVyKHtcclxuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LlRXSVRURVJfQ0xJRU5UX0lELFxyXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LlRXSVRURVJfQ0xJRU5UX1NFQ1JFVCxcclxuICAgICAgICAgICAgdmVyc2lvbjogXCIyLjBcIixcclxuICAgICAgICB9KSxcclxuICAgIF0sXHJcbn07XHJcblxyXG5jb25zdCBBdXRoID0gKHJlcSwgcmVzKSA9PiBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoO1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJUd2l0dGVyIiwib3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIlRXSVRURVJfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiVFdJVFRFUl9DTElFTlRfU0VDUkVUIiwidmVyc2lvbiIsIkF1dGgiLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();