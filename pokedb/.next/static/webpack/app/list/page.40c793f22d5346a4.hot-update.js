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

/***/ "(app-client)/./src/app/component/pagination.js":
/*!*****************************************!*\
  !*** ./src/app/component/pagination.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pagination; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction Pagination(param) {\n    let { totalPokemon, pokemonPerPage, setCurrentPage, currentPage } = param;\n    let pages = [];\n    for(let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++){\n        pages.push(i);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        class: \"flex flex-wrap justify-center p-4 m-4\",\n        children: pages.map((page, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                class: \"outline outline-black m-2 py-1 px-3 rounded transition ease-in-out bg-gray-400 font-mono font-bold active:text-white active:bg-[#e4000f]\",\n                onClick: ()=>setCurrentPage(page),\n                className: page == currentPage ? \"active\" : \"visited\",\n                children: page\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\rafi moreno\\\\Documents\\\\pokedb\\\\pokedb\\\\src\\\\app\\\\component\\\\pagination.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rafi moreno\\\\Documents\\\\pokedb\\\\pokedb\\\\src\\\\app\\\\component\\\\pagination.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = Pagination;\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnQvcGFnaW5hdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFHZSxTQUFTQSxXQUFXLEtBS2xDO1FBTGtDLEVBQy9CQyxZQUFZLEVBQ1pDLGNBQWMsRUFDZEMsY0FBYyxFQUNkQyxXQUFXLEVBQ2QsR0FMa0M7SUFNL0IsSUFBSUMsUUFBUSxFQUFFO0lBRWQsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLEtBQUtDLEtBQUtDLEtBQUtQLGVBQWVDLGlCQUFpQkksSUFBSztRQUNoRUQsTUFBTUksS0FBS0g7SUFDZjtJQUNGLHFCQUNFLDhEQUFDSTtRQUFJQyxPQUFNO2tCQUNOTixNQUFNTyxJQUFJLENBQUNDLE1BQU1DO1lBQ2xCLHFCQUNJLDhEQUFDQztnQkFDR0osT0FDQTtnQkFFQUssU0FBUyxJQUFNYixlQUFlVTtnQkFDOUJJLFdBQVdKLFFBQVFULGNBQWMsV0FBVzswQkFDM0NTO2VBSElDOzs7OztRQU1qQjs7Ozs7O0FBRUo7S0ExQndCZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9wYWdpbmF0aW9uLmpzP2I2MmMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hdGlvbih7XHJcbiAgICB0b3RhbFBva2Vtb24sXHJcbiAgICBwb2tlbW9uUGVyUGFnZSxcclxuICAgIHNldEN1cnJlbnRQYWdlLFxyXG4gICAgY3VycmVudFBhZ2UsXHJcbn0pIHtcclxuICAgIGxldCBwYWdlcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IE1hdGguY2VpbCh0b3RhbFBva2Vtb24gLyBwb2tlbW9uUGVyUGFnZSk7IGkrKykge1xyXG4gICAgICAgIHBhZ2VzLnB1c2goaSk7XHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBwLTQgbS00XCI+XHJcbiAgICAgICAge3BhZ2VzLm1hcCgocGFnZSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzcyA9IFxyXG4gICAgICAgICAgICAgICAgJ291dGxpbmUgb3V0bGluZS1ibGFjayBtLTIgcHktMSBweC0zIHJvdW5kZWQgdHJhbnNpdGlvbiBlYXNlLWluLW91dCBiZy1ncmF5LTQwMCBmb250LW1vbm8gZm9udC1ib2xkIGFjdGl2ZTp0ZXh0LXdoaXRlIGFjdGl2ZTpiZy1bI2U0MDAwZl0nXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0Q3VycmVudFBhZ2UocGFnZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BhZ2UgPT0gY3VycmVudFBhZ2UgPyBcImFjdGl2ZVwiIDogXCJ2aXNpdGVkXCJ9PlxyXG4gICAgICAgICAgICAgICAge3BhZ2V9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9KX08L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlBhZ2luYXRpb24iLCJ0b3RhbFBva2Vtb24iLCJwb2tlbW9uUGVyUGFnZSIsInNldEN1cnJlbnRQYWdlIiwiY3VycmVudFBhZ2UiLCJwYWdlcyIsImkiLCJNYXRoIiwiY2VpbCIsInB1c2giLCJkaXYiLCJjbGFzcyIsIm1hcCIsInBhZ2UiLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/component/pagination.js\n"));

/***/ })

});