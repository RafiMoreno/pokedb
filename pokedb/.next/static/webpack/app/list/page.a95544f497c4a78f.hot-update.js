"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/list/page",{

/***/ "(app-client)/./src/app/component/pokemonlistclient.js":
/*!************************************************!*\
  !*** ./src/app/component/pokemonlistclient.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PokemonListClient; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_returnbutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/returnbutton */ \"(app-client)/./src/app/component/returnbutton.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction imageIndex(number) {\n    const url = \"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/\" + number.toString() + \".png\";\n    return url;\n}\nfunction PokemonListClient(param) {\n    let { data } = param;\n    _s();\n    let allPokemon = data.results;\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const [pokemonPerPage, setPokemonPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(8);\n    const lastIndex = currentPage * pokemonPerPage;\n    const firstIndex = lastIndex - pokemonPerPage;\n    const currentIndex = allPokemon.slice(firstIndex, lastIndex);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_returnbutton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rafi moreno\\\\Documents\\\\pokedb\\\\pokedb\\\\src\\\\app\\\\component\\\\pokemonlistclient.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                class: \"text-center text-lg my-auto font-mono font-bold mt-12\",\n                children: \"List of Pokemon\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rafi moreno\\\\Documents\\\\pokedb\\\\pokedb\\\\src\\\\app\\\\component\\\\pokemonlistclient.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"flex flex-wrap pl-[10%] pr-[8%] mx-auto my-2\",\n                children: currentIndex.map((pokemon, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"m-1 px-2 py-8 md:w-32 lg:w-48 sm:max-w-8   border-solid border-2 bg-gray-400 border-black rounded    text-center font-mono font-medium shadow-lg hover:underline\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                class: \"ml-auto mr-auto bg-[#a8ccd7] border-solid border-2 border-black rounded p-5\",\n                                src: imageIndex(index + 1)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rafi moreno\\\\Documents\\\\pokedb\\\\pokedb\\\\src\\\\app\\\\component\\\\pokemonlistclient.js\",\n                                lineNumber: 29,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/pokemon/\".concat(index + 1),\n                                children: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\rafi moreno\\\\Documents\\\\pokedb\\\\pokedb\\\\src\\\\app\\\\component\\\\pokemonlistclient.js\",\n                                lineNumber: 32,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\rafi moreno\\\\Documents\\\\pokedb\\\\pokedb\\\\src\\\\app\\\\component\\\\pokemonlistclient.js\",\n                        lineNumber: 26,\n                        columnNumber: 24\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rafi moreno\\\\Documents\\\\pokedb\\\\pokedb\\\\src\\\\app\\\\component\\\\pokemonlistclient.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\rafi moreno\\\\Documents\\\\pokedb\\\\pokedb\\\\src\\\\app\\\\component\\\\pokemonlistclient.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(PokemonListClient, \"UCDjMeiqagifGRz/BRRtBK1qCAQ=\");\n_c = PokemonListClient;\nvar _c;\n$RefreshReg$(_c, \"PokemonListClient\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnQvcG9rZW1vbmxpc3RjbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQ3VCO0FBQ1o7QUFFeEMsU0FBU0ksV0FBV0MsTUFBTTtJQUN0QixNQUFNQyxNQUFNLDhFQUE4RUQsT0FBT0UsYUFBYTtJQUM5RyxPQUFPRDtBQUNYO0FBR2UsU0FBU0Usa0JBQWtCLEtBQU07UUFBTixFQUFDQyxJQUFJLEVBQUMsR0FBTjs7SUFDdEMsSUFBSUMsYUFBYUQsS0FBS0U7SUFDdEIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdWLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1csZ0JBQWdCQyxrQkFBa0IsR0FBR1osK0NBQVFBLENBQUM7SUFDckQsTUFBTWEsWUFBWUosY0FBY0U7SUFDaEMsTUFBTUcsYUFBYUQsWUFBWUY7SUFDL0IsTUFBTUksZUFBZVIsV0FBV1MsTUFBTUYsWUFBWUQ7SUFFcEQscUJBQ0UsOERBQUNJOzswQkFDTyw4REFBQ25CLCtEQUFZQTs7Ozs7MEJBQ2IsOERBQUNvQjtnQkFBR0MsT0FBTTswQkFBd0Q7Ozs7OzswQkFDbEUsOERBQUNGO2dCQUFJRSxPQUFNOzBCQUNOSixhQUFhSyxJQUFJLENBQUNDLFNBQVNDO29CQUM1QixxQkFBTyw4REFBQ0w7d0JBQUlFLE9BQU07OzBDQUdsQiw4REFBQ0k7Z0NBQUlKLE9BQU07Z0NBQ1hLLEtBQUt2QixXQUFXcUIsUUFBTTs7Ozs7OzBDQUV0Qiw4REFBQ3pCLGtEQUFJQTtnQ0FBQzRCLE1BQU0sWUFBb0IsT0FBUkgsUUFBTTswQ0FDN0JELFFBQVFLLEtBQUtDLE9BQU8sR0FBR0MsZ0JBQWdCUCxRQUFRSyxLQUFLVixNQUFNOzs7Ozs7Ozs7Ozs7Z0JBRzNEOzs7Ozs7Ozs7Ozs7QUFJaEI7R0E1QndCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9wb2tlbW9ubGlzdGNsaWVudC5qcz84ZDQ5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZXR1cm5CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50L3JldHVybmJ1dHRvbidcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBpbWFnZUluZGV4KG51bWJlcikge1xyXG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vXCIgKyBudW1iZXIudG9TdHJpbmcoKSArIFwiLnBuZ1wiXHJcbiAgICByZXR1cm4gdXJsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uTGlzdENsaWVudCh7ZGF0YX0pIHtcclxuICAgIGxldCBhbGxQb2tlbW9uID0gZGF0YS5yZXN1bHRzXHJcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3Bva2Vtb25QZXJQYWdlLCBzZXRQb2tlbW9uUGVyUGFnZV0gPSB1c2VTdGF0ZSg4KTtcclxuICAgIGNvbnN0IGxhc3RJbmRleCA9IGN1cnJlbnRQYWdlICogcG9rZW1vblBlclBhZ2U7XHJcbiAgICBjb25zdCBmaXJzdEluZGV4ID0gbGFzdEluZGV4IC0gcG9rZW1vblBlclBhZ2U7XHJcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSBhbGxQb2tlbW9uLnNsaWNlKGZpcnN0SW5kZXgsIGxhc3RJbmRleCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8UmV0dXJuQnV0dG9uPjwvUmV0dXJuQnV0dG9uPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0ZXh0LWxnIG15LWF1dG8gZm9udC1tb25vIGZvbnQtYm9sZCBtdC0xMlwiPkxpc3Qgb2YgUG9rZW1vbjwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBwbC1bMTAlXSBwci1bOCVdIG14LWF1dG8gbXktMlwiPlxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnRJbmRleC5tYXAoKHBva2Vtb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzcz1cIm0tMSBweC0yIHB5LTggbWQ6dy0zMiBsZzp3LTQ4IHNtOm1heC13LThcclxuICAgICAgICAgICAgICAgIGJvcmRlci1zb2xpZCBib3JkZXItMiBiZy1ncmF5LTQwMCBib3JkZXItYmxhY2sgcm91bmRlZCBcclxuICAgICAgICAgICAgICAgIHRleHQtY2VudGVyIGZvbnQtbW9ubyBmb250LW1lZGl1bSBzaGFkb3ctbGcgaG92ZXI6dW5kZXJsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwibWwtYXV0byBtci1hdXRvIGJnLVsjYThjY2Q3XSBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHJvdW5kZWQgcC01XCIgXHJcbiAgICAgICAgICAgICAgICBzcmM9e2ltYWdlSW5kZXgoaW5kZXgrMSl9PlxyXG4gICAgICAgICAgICAgICAgPC9pbWc+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bva2Vtb24vJHtpbmRleCsxfWB9PlxyXG4gICAgICAgICAgICAgICAge3Bva2Vtb24ubmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHBva2Vtb24ubmFtZS5zbGljZSgxKX1cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZXR1cm5CdXR0b24iLCJSZWFjdCIsInVzZVN0YXRlIiwiaW1hZ2VJbmRleCIsIm51bWJlciIsInVybCIsInRvU3RyaW5nIiwiUG9rZW1vbkxpc3RDbGllbnQiLCJkYXRhIiwiYWxsUG9rZW1vbiIsInJlc3VsdHMiLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwicG9rZW1vblBlclBhZ2UiLCJzZXRQb2tlbW9uUGVyUGFnZSIsImxhc3RJbmRleCIsImZpcnN0SW5kZXgiLCJjdXJyZW50SW5kZXgiLCJzbGljZSIsImRpdiIsImgxIiwiY2xhc3MiLCJtYXAiLCJwb2tlbW9uIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJocmVmIiwibmFtZSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/component/pokemonlistclient.js\n"));

/***/ })

});