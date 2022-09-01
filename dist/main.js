/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./NotoSans-Regular.ttf */ "./src/NotoSans-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --slate: #f1f5f9;\n    --gray: #f3f4f6;\n    --zinc: #e4e4e7;\n    --dark-slate: #94a3b8;\n    --stone: #52525b;\n}\n\n@font-face {\n    font-family: 'Noto Sans', sans-serif;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('tff');\n    font-weight: 400;\n    font-style: normal;\n}\n\n*{\n    box-sizing: border-box;\n    font-family: 'Noto Sans', sans-serif;\n    margin: 0;\n    padding: 0;\n    color:var(--stone);\n\n}\n\nbody{\n    height: 100vh;\n}\n\nmain{\n    display: flex;\n    height: 100%;\n\n}\n\n.projects-bar{\n    background-color: var(--slate);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 20%;\n    box-shadow: 3px 0px 1px var(--dark-slate);\n}\n\n.bar-header,\n.projects-list{\n    margin: 30px 30px 20px 25px;\n}\n\n.bar-header{\n    padding: 10px;\n    background-color: var(--zinc);\n    box-shadow: 10px 10px 5px #8888;\n}\n\n\n\n.new-project-div{\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n    margin-top: auto;\n    gap: 5px;\n}\n\n.new-project-button{\n    border: none;\n    border-top: 5px solid var(--zinc);\n    padding: 5px;\n    font-weight: 600;\n    font-size: 15px;\n}\n\n.projects-list{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project-button{\n    background-color: var(--slate);\n    text-align: start;\n    font-size: 17px;\n    border: none;\n    padding: 5px;\n    font-weight: 500;\n    border: 1px solid var(--dark-slate);\n}\n\n.project-button.selected{\n    background-color: var(--zinc);\n}\n\n.new-project-textfield{\n    border: 2px solid var(--zinc) ;\n    padding: 5px;\n}\n\n.new-project-textfield:focus{\n    border-color: var(--dark-slate);\n    border-right: none;\n    outline: none;\n}\n\n\n.new-project-button:active{\n    background-color: var(--dark-slate);\n}\n\n.project-div{\n    display: flex;\n    flex-direction: column;\n    /* maybe center the project view? */\n    padding: 70px 90px 90px 70px;\n    gap: 50px;\n    background-color: var(--gray);\n    margin-left: 3px;\n    width: calc(80% - 3px);\n    overflow-y: auto;\n}\n\n.new-todo-button{\n    align-self: flex-end;\n    justify-self: flex-end;\n    order: 2;\n    background-color: #64748b;\n    color: #fafafa;\n    font-size: 40px;\n    width: 60px;\n    height: 60px;\n    border-radius: 50px;\n    border: 5px solid #0f172a;\n}\n\n.new-todo-button:active{\n    background-color: #0f172a;\n}\n\n.project-title{\n    color:var(--slate);\n    font-size: 40px;\n    background-color: var(--dark-slate);\n    border: 5px solid var(--stone);\n    padding: 10px;\n    margin-bottom: 50px;\n}\n\n.todo-div{\n    display: flex;\n    align-items: center;\n    gap: 30px;\n    border: 1px solid var(--stone);\n    padding: 5px 20px;\n    width: max(480px, 35vw);\n}\n\n.completed-todo{\n    text-decoration: line-through;\n    border: 3px solid var(--stone);\n}\n\n.low-todo{\n    background-color: #d9f99d;\n}\n\n.medium-todo{\n    background-color: #fef3c7;\n}\n\n.high-todo{\n    background-color: #fca5a5;\n}\n\n.todo-checkbox{\n    border-radius: 40px;\n    height: 60px;\n    min-width: 30px;\n}\n\n.todo-textfield,\n.todo-date,\n.todo-select{\n    height: 25px;\n    width: 300px;\n    background-color: var(--gray);\n}\n\n.todo-date{\n    min-width: 20px;\n}\n\n.remove-todo-button{\n    background-color: #b91c1c;\n    height: 30px;\n    width: 50px;\n    font-size: 20px;\n    color: white;\n    border: 2px solid black;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,0DAA8C;IAC9C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,oCAAoC;IACpC,SAAS;IACT,UAAU;IACV,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;;AAEhB;;AAEA;IACI,8BAA8B;IAC9B,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,UAAU;IACV,yCAAyC;AAC7C;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,+BAA+B;AACnC;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,iCAAiC;IACjC,YAAY;IACZ,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,mCAAmC;AACvC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,aAAa;AACjB;;;AAGA;IACI,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mCAAmC;IACnC,4BAA4B;IAC5B,SAAS;IACT,6BAA6B;IAC7B,gBAAgB;IAChB,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,QAAQ;IACR,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,mCAAmC;IACnC,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,8BAA8B;IAC9B,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,6BAA6B;IAC7B,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,eAAe;AACnB;;AAEA;;;IAGI,YAAY;IACZ,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,eAAe;IACf,YAAY;IACZ,uBAAuB;AAC3B","sourcesContent":[":root{\n    --slate: #f1f5f9;\n    --gray: #f3f4f6;\n    --zinc: #e4e4e7;\n    --dark-slate: #94a3b8;\n    --stone: #52525b;\n}\n\n@font-face {\n    font-family: 'Noto Sans', sans-serif;\n    src: url(./NotoSans-Regular.ttf) format('tff');\n    font-weight: 400;\n    font-style: normal;\n}\n\n*{\n    box-sizing: border-box;\n    font-family: 'Noto Sans', sans-serif;\n    margin: 0;\n    padding: 0;\n    color:var(--stone);\n\n}\n\nbody{\n    height: 100vh;\n}\n\nmain{\n    display: flex;\n    height: 100%;\n\n}\n\n.projects-bar{\n    background-color: var(--slate);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 20%;\n    box-shadow: 3px 0px 1px var(--dark-slate);\n}\n\n.bar-header,\n.projects-list{\n    margin: 30px 30px 20px 25px;\n}\n\n.bar-header{\n    padding: 10px;\n    background-color: var(--zinc);\n    box-shadow: 10px 10px 5px #8888;\n}\n\n\n\n.new-project-div{\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n    margin-top: auto;\n    gap: 5px;\n}\n\n.new-project-button{\n    border: none;\n    border-top: 5px solid var(--zinc);\n    padding: 5px;\n    font-weight: 600;\n    font-size: 15px;\n}\n\n.projects-list{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project-button{\n    background-color: var(--slate);\n    text-align: start;\n    font-size: 17px;\n    border: none;\n    padding: 5px;\n    font-weight: 500;\n    border: 1px solid var(--dark-slate);\n}\n\n.project-button.selected{\n    background-color: var(--zinc);\n}\n\n.new-project-textfield{\n    border: 2px solid var(--zinc) ;\n    padding: 5px;\n}\n\n.new-project-textfield:focus{\n    border-color: var(--dark-slate);\n    border-right: none;\n    outline: none;\n}\n\n\n.new-project-button:active{\n    background-color: var(--dark-slate);\n}\n\n.project-div{\n    display: flex;\n    flex-direction: column;\n    /* maybe center the project view? */\n    padding: 70px 90px 90px 70px;\n    gap: 50px;\n    background-color: var(--gray);\n    margin-left: 3px;\n    width: calc(80% - 3px);\n    overflow-y: auto;\n}\n\n.new-todo-button{\n    align-self: flex-end;\n    justify-self: flex-end;\n    order: 2;\n    background-color: #64748b;\n    color: #fafafa;\n    font-size: 40px;\n    width: 60px;\n    height: 60px;\n    border-radius: 50px;\n    border: 5px solid #0f172a;\n}\n\n.new-todo-button:active{\n    background-color: #0f172a;\n}\n\n.project-title{\n    color:var(--slate);\n    font-size: 40px;\n    background-color: var(--dark-slate);\n    border: 5px solid var(--stone);\n    padding: 10px;\n    margin-bottom: 50px;\n}\n\n.todo-div{\n    display: flex;\n    align-items: center;\n    gap: 30px;\n    border: 1px solid var(--stone);\n    padding: 5px 20px;\n    width: max(480px, 35vw);\n}\n\n.completed-todo{\n    text-decoration: line-through;\n    border: 3px solid var(--stone);\n}\n\n.low-todo{\n    background-color: #d9f99d;\n}\n\n.medium-todo{\n    background-color: #fef3c7;\n}\n\n.high-todo{\n    background-color: #fca5a5;\n}\n\n.todo-checkbox{\n    border-radius: 40px;\n    height: 60px;\n    min-width: 30px;\n}\n\n.todo-textfield,\n.todo-date,\n.todo-select{\n    height: 25px;\n    width: 300px;\n    background-color: var(--gray);\n}\n\n.todo-date{\n    min-width: 20px;\n}\n\n.remove-todo-button{\n    background-color: #b91c1c;\n    height: 30px;\n    width: 50px;\n    font-size: 20px;\n    color: white;\n    border: 2px solid black;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "getProjects": () => (/* binding */ getProjects),
/* harmony export */   "loadProjects": () => (/* binding */ loadProjects),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "saveProjects": () => (/* binding */ saveProjects)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");



const projects = [];


function addProject(title){
    const newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(title,[])
    projects.push(newProject);
    return newProject;
}

function removeProject(index){
    projects.splice(index,1);
}


function getProjects(){
    return projects;
}

function saveProjects(){
    localStorage.setItem('projects', JSON.stringify(projects));
}

function loadProjects(){
    const JSONprojects = localStorage.getItem('projects');
    if (JSONprojects){
        const oldProjects = JSON.parse(JSONprojects);
        for (let i = 0; i < oldProjects.length; i++){
            projects.push((0,_project__WEBPACK_IMPORTED_MODULE_0__["default"])(oldProjects[i].title, oldProjects[i].toDos))
        }
    }
}



/***/ }),

/***/ "./src/bar.js":
/*!********************!*\
  !*** ./src/bar.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectElement": () => (/* binding */ createProjectElement),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "listProject": () => (/* binding */ listProject)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




const bar = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)('div', 'projects-bar');
const header = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)('h2', 'bar-header');
header.textContent = 'My Projects';
const projectsList = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)('ul', 'projects-list');

const newProjectDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)('div', 'new-project-div');
const newProjectTextField = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)('input', 'new-project-textfield');
newProjectTextField.setAttribute('type','textfield');
newProjectTextField.setAttribute('placeholder','Name');
const newProjectButton = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)('button', 'new-project-button');
newProjectButton.textContent = '+ New Project';
newProjectButton.setAttribute('type', 'button');
newProjectDiv.append(newProjectTextField);
newProjectDiv.append(newProjectButton);

function createProjectElement(title, index){
    const newProject = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)('button', 'project-button');
    newProject.textContent = title;
    newProject.setAttribute('index',index); 
    newProject.addEventListener('click', () =>{
        const prev = document.getElementsByClassName('selected')[0];
        if (prev != undefined){
            prev.classList.remove('selected');
        }

        newProject.classList.add('selected');
    })
    projectsList.append(newProject);
    newProject.click();
    return newProject;
}


function listProject(project){
    projectsList.append(project);
}

newProjectTextField.addEventListener('keypress', (e)=>{
    if (e.code == 'Enter'){
        newProjectButton.click();
    }
})

newProjectButton.addEventListener('click', () => {
    if (newProjectTextField.value == ''){
        return;
    }
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.addProjectDom)((0,_app__WEBPACK_IMPORTED_MODULE_0__.addProject)(newProjectTextField.value));
    newProjectTextField.value = '';
})

bar.append(header);
bar.append(projectsList);
bar.append(newProjectDiv);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bar);



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectDom": () => (/* binding */ addProjectDom),
/* harmony export */   "build": () => (/* binding */ build),
/* harmony export */   "createElementWithClass": () => (/* binding */ createElementWithClass)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar */ "./src/bar.js");
/* harmony import */ var _projectView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectView */ "./src/projectView.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");













const projectViews = [];
const main = document.createElement('main');


function createElementWithClass(tag, elementClass){
    const newElement = document.createElement(tag);
    newElement.classList.add(elementClass);
    return newElement;
}

function build(){
    (0,_app__WEBPACK_IMPORTED_MODULE_3__.loadProjects)();
    main.append(_bar__WEBPACK_IMPORTED_MODULE_1__["default"]);
    ___WEBPACK_IMPORTED_MODULE_0__.body.append(main);
    if ((0,_app__WEBPACK_IMPORTED_MODULE_3__.getProjects)().length == 0){
        addProjectDom((0,_app__WEBPACK_IMPORTED_MODULE_3__.addProject)('Default'));
        return;
    }
    loadDomProjects();
}

function addProjectDom(project){
    const newProjectView = (0,_projectView__WEBPACK_IMPORTED_MODULE_2__["default"])(project);
    projectViews.push(newProjectView);
    const lastProjectIndex = (0,_app__WEBPACK_IMPORTED_MODULE_3__.getProjects)().length;
    const projectButton = (0,_bar__WEBPACK_IMPORTED_MODULE_1__.createProjectElement)(project.getTitle(), lastProjectIndex);
    projectButton.addEventListener('click', () => {
        if (main.childElementCount > 1){
            main.getElementsByClassName('project-div')[0].remove();
        }
        main.append(newProjectView.getProjectDiv());
    });
    projectButton.click();
    (0,_app__WEBPACK_IMPORTED_MODULE_3__.saveProjects)();
}

function loadDomProjects(){
    const projects = (0,_app__WEBPACK_IMPORTED_MODULE_3__.getProjects)();
    for (let i = 0; i < projects.length; i++){
        addProjectDom(projects[i]);
    }
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "body": () => (/* binding */ body)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



const body = document.body;

(0,_dom__WEBPACK_IMPORTED_MODULE_0__.build)();



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");


const project = (title, toDos) =>{
    const proto = {
        type : 'Project',

        addToDo : function(){
            const newToDo = (0,_toDo__WEBPACK_IMPORTED_MODULE_0__["default"])('','','','',false); //override
            toDos.push(newToDo);
            return newToDo;
        },

        removeToDo : function(index){
            toDos.splice(index,1);
        },

        getTitle : () => title,
        getToDos : () => toDos,
    }

    return Object.assign(Object.create(proto), {title, toDos});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);

/***/ }),

/***/ "./src/projectView.js":
/*!****************************!*\
  !*** ./src/projectView.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _todoView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoView */ "./src/todoView.js");




const projectView = (project) => {
    const projectDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)('div', 'project-div');
    const projectTitle = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)('h2', 'project-title');
    const addToDoButton = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)('button', 'new-todo-button');
    addToDoButton.setAttribute('type','input');
    addToDoButton.textContent = "+";
    addToDoButton.addEventListener('click', () =>{
        const newToDo = project.addToDo();
        const toDoView = (0,_todoView__WEBPACK_IMPORTED_MODULE_2__.creaetToDoView)(newToDo, project.getToDos().length);
        const removeButton = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.createElementWithClass)('button','remove-todo-button');
        removeButton.setAttribute('type','button');
        removeButton.textContent = '-';
        removeButton.addEventListener('click', () => {
            project.removeToDo(project.getToDos().length);
            toDoView.remove();
            (0,_app__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();
        });
        toDoView.append(removeButton);
        projectDiv.append(toDoView);
        (0,_app__WEBPACK_IMPORTED_MODULE_0__.saveProjects)();
    })
    projectTitle.textContent = project.getTitle();
    projectDiv.append(projectTitle);
    projectDiv.append(addToDoButton);


    const getProjectDiv = () => projectDiv;

    return {getProjectDiv}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectView);


/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const toDo = (title, description, dueDate, priority, status) => {
    const proto = {
        type: 'ToDo',

        getTitle : () => title,
        getDescription: () => description,
        getDueDate: () => dueDate,
        getPriority: () => priority,
        getStatus: () => status,

        setDueDate: (newDate) => dueDate = newDate,
        setStatus: () => {
            status = !status
            return status;
        },
        setTitle : (newTitle) => {
            console.log(title);
            console.log(newTitle);
        },
        setPriority: (newPriority) => priority = newPriority,



    }
    return Object.assign(Object.create(proto), {
        title, description, dueDate, priority, status});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDo);

/***/ }),

/***/ "./src/todoView.js":
/*!*************************!*\
  !*** ./src/todoView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "creaetToDoView": () => (/* binding */ creaetToDoView)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


function creaetToDoView(todo, index) {
    const todoDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('div', 'todo-div');
    todoDiv.setAttribute('toddo-index', index);
    const checkbox = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('input', 'todo-checkbox');
    checkbox.setAttribute('type','checkbox');
    if (todo.getStatus()){
        checkbox.checked = true;
    }
    const textfield = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('input','todo-textfield');
    textfield.setAttribute('type','textfield');
    textfield.value = todo.getTitle();
    const date = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('input','todo-date');
    date.setAttribute('type', 'date');
    date.value = todo.getDueDate();
    const select = createSelectPriority(todo,todoDiv);
 
    checkbox.addEventListener('change', () => {
        todo.setStatus();
        const status = todo.getStatus();
        date.disabled = status;
        textfield.disabled = status;
        select.disabled = status;
        todoDiv.classList.toggle('completed-todo');
    });

    textfield.addEventListener('change', ()=> {
        todo.setTitle(textfield.value);
    });

    date.addEventListener('change', () => {
        todo.setDueDate(date.value);
    });

   
    todoDiv.append(checkbox);
    todoDiv.append(textfield);
    todoDiv.append(date);
    todoDiv.append(select);

    return todoDiv;

}

function createSelectPriority(todo, todoDiv){
    const select = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('select','todo-select');
    select.append(createOptionElement('select priority', 'select priority'));
    select.append(createOptionElement('Low', 'low'));
    select.append(createOptionElement('Medium', 'medium'));
    select.append(createOptionElement('High', 'high'));
    select.value = todo.getPriority();

    select.addEventListener('change', ()=>{
        // could be improved
        const oldClass = `${todo.getPriority()}-todo`;
        if (oldClass != '') {
            todoDiv.classList.remove(oldClass);
        }
        todo.setPriority(select.value);
        const newClass = `${todo.getPriority()}-todo`;
        todoDiv.classList.add(newClass);
    });

    return select;
    
}

function createOptionElement(text, value){
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    return option;
}



/***/ }),

/***/ "./src/NotoSans-Regular.ttf":
/*!**********************************!*\
  !*** ./src/NotoSans-Regular.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eae34fa8f1e0c4c6d797.ttf";

/***/ })

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0Vmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9Eby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vTm90b1NhbnMtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1zbGF0ZTogI2YxZjVmOTtcXG4gICAgLS1ncmF5OiAjZjNmNGY2O1xcbiAgICAtLXppbmM6ICNlNGU0ZTc7XFxuICAgIC0tZGFyay1zbGF0ZTogIzk0YTNiODtcXG4gICAgLS1zdG9uZTogIzUyNTI1YjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndGZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOnZhcigtLXN0b25lKTtcXG5cXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG4ucHJvamVjdHMtYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDBweCAxcHggdmFyKC0tZGFyay1zbGF0ZSk7XFxufVxcblxcbi5iYXItaGVhZGVyLFxcbi5wcm9qZWN0cy1saXN0e1xcbiAgICBtYXJnaW46IDMwcHggMzBweCAyMHB4IDI1cHg7XFxufVxcblxcbi5iYXItaGVhZGVye1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAjODg4ODtcXG59XFxuXFxuXFxuXFxuLm5ldy1wcm9qZWN0LWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHZhcigtLXppbmMpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLnByb2plY3RzLWxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZSk7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLXNsYXRlKTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LXRleHRmaWVsZHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0temluYykgO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5uZXctcHJvamVjdC10ZXh0ZmllbGQ6Zm9jdXN7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZSk7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbjphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc2xhdGUpO1xcbn1cXG5cXG4ucHJvamVjdC1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIG1heWJlIGNlbnRlciB0aGUgcHJvamVjdCB2aWV3PyAqL1xcbiAgICBwYWRkaW5nOiA3MHB4IDkwcHggOTBweCA3MHB4O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgICB3aWR0aDogY2FsYyg4MCUgLSAzcHgpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubmV3LXRvZG8tYnV0dG9ue1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgb3JkZXI6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxuICAgIGNvbG9yOiAjZmFmYWZhO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMwZjE3MmE7XFxufVxcblxcbi5uZXctdG9kby1idXR0b246YWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNzJhO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZXtcXG4gICAgY29sb3I6dmFyKC0tc2xhdGUpO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc2xhdGUpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1zdG9uZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi50b2RvLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdG9uZSk7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICB3aWR0aDogbWF4KDQ4MHB4LCAzNXZ3KTtcXG59XFxuXFxuLmNvbXBsZXRlZC10b2Rve1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc3RvbmUpO1xcbn1cXG5cXG4ubG93LXRvZG97XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWY5OWQ7XFxufVxcblxcbi5tZWRpdW0tdG9kb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjNjNztcXG59XFxuXFxuLmhpZ2gtdG9kb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYTVhNTtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3h7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWluLXdpZHRoOiAzMHB4O1xcbn1cXG5cXG4udG9kby10ZXh0ZmllbGQsXFxuLnRvZG8tZGF0ZSxcXG4udG9kby1zZWxlY3R7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG59XFxuXFxuLnRvZG8tZGF0ZXtcXG4gICAgbWluLXdpZHRoOiAyMHB4O1xcbn1cXG5cXG4ucmVtb3ZlLXRvZG8tYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjkxYzFjO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDBEQUE4QztJQUM5QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7O0FBRUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QiwrQkFBK0I7QUFDbkM7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTs7O0lBR0ksWUFBWTtJQUNaLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7QUFDM0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tc2xhdGU6ICNmMWY1Zjk7XFxuICAgIC0tZ3JheTogI2YzZjRmNjtcXG4gICAgLS16aW5jOiAjZTRlNGU3O1xcbiAgICAtLWRhcmstc2xhdGU6ICM5NGEzYjg7XFxuICAgIC0tc3RvbmU6ICM1MjUyNWI7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIHNyYzogdXJsKC4vTm90b1NhbnMtUmVndWxhci50dGYpIGZvcm1hdCgndGZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOnZhcigtLXN0b25lKTtcXG5cXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG4ucHJvamVjdHMtYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDBweCAxcHggdmFyKC0tZGFyay1zbGF0ZSk7XFxufVxcblxcbi5iYXItaGVhZGVyLFxcbi5wcm9qZWN0cy1saXN0e1xcbiAgICBtYXJnaW46IDMwcHggMzBweCAyMHB4IDI1cHg7XFxufVxcblxcbi5iYXItaGVhZGVye1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAjODg4ODtcXG59XFxuXFxuXFxuXFxuLm5ldy1wcm9qZWN0LWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHZhcigtLXppbmMpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLnByb2plY3RzLWxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZSk7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLXNsYXRlKTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LXRleHRmaWVsZHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0temluYykgO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5uZXctcHJvamVjdC10ZXh0ZmllbGQ6Zm9jdXN7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZSk7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbjphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc2xhdGUpO1xcbn1cXG5cXG4ucHJvamVjdC1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIG1heWJlIGNlbnRlciB0aGUgcHJvamVjdCB2aWV3PyAqL1xcbiAgICBwYWRkaW5nOiA3MHB4IDkwcHggOTBweCA3MHB4O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgICB3aWR0aDogY2FsYyg4MCUgLSAzcHgpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubmV3LXRvZG8tYnV0dG9ue1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgb3JkZXI6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxuICAgIGNvbG9yOiAjZmFmYWZhO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMwZjE3MmE7XFxufVxcblxcbi5uZXctdG9kby1idXR0b246YWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNzJhO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZXtcXG4gICAgY29sb3I6dmFyKC0tc2xhdGUpO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc2xhdGUpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1zdG9uZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi50b2RvLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdG9uZSk7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICB3aWR0aDogbWF4KDQ4MHB4LCAzNXZ3KTtcXG59XFxuXFxuLmNvbXBsZXRlZC10b2Rve1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc3RvbmUpO1xcbn1cXG5cXG4ubG93LXRvZG97XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWY5OWQ7XFxufVxcblxcbi5tZWRpdW0tdG9kb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjNjNztcXG59XFxuXFxuLmhpZ2gtdG9kb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYTVhNTtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3h7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWluLXdpZHRoOiAzMHB4O1xcbn1cXG5cXG4udG9kby10ZXh0ZmllbGQsXFxuLnRvZG8tZGF0ZSxcXG4udG9kby1zZWxlY3R7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG59XFxuXFxuLnRvZG8tZGF0ZXtcXG4gICAgbWluLXdpZHRoOiAyMHB4O1xcbn1cXG5cXG4ucmVtb3ZlLXRvZG8tYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjkxYzFjO1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgdG9EbyBmcm9tIFwiLi90b0RvXCI7XG5cbmNvbnN0IHByb2plY3RzID0gW107XG5cblxuZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSl7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QodGl0bGUsW10pXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpbmRleCl7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LDEpO1xufVxuXG5cbmZ1bmN0aW9uIGdldFByb2plY3RzKCl7XG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5mdW5jdGlvbiBzYXZlUHJvamVjdHMoKXtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHMoKXtcbiAgICBjb25zdCBKU09OcHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKTtcbiAgICBpZiAoSlNPTnByb2plY3RzKXtcbiAgICAgICAgY29uc3Qgb2xkUHJvamVjdHMgPSBKU09OLnBhcnNlKEpTT05wcm9qZWN0cyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkUHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KG9sZFByb2plY3RzW2ldLnRpdGxlLCBvbGRQcm9qZWN0c1tpXS50b0RvcykpXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgYWRkUHJvamVjdCxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIGdldFByb2plY3RzLFxuICAgIHNhdmVQcm9qZWN0cyxcbiAgICBsb2FkUHJvamVjdHNcbn07IiwiaW1wb3J0IHsgYWRkUHJvamVjdCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudFdpdGhDbGFzcywgYWRkUHJvamVjdERvbX0gZnJvbSBcIi4vZG9tXCI7XG5cblxuY29uc3QgYmFyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3Byb2plY3RzLWJhcicpO1xuY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnaDInLCAnYmFyLWhlYWRlcicpO1xuaGVhZGVyLnRleHRDb250ZW50ID0gJ015IFByb2plY3RzJztcbmNvbnN0IHByb2plY3RzTGlzdCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ3VsJywgJ3Byb2plY3RzLWxpc3QnKTtcblxuY29uc3QgbmV3UHJvamVjdERpdiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICduZXctcHJvamVjdC1kaXYnKTtcbmNvbnN0IG5ld1Byb2plY3RUZXh0RmllbGQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdpbnB1dCcsICduZXctcHJvamVjdC10ZXh0ZmllbGQnKTtcbm5ld1Byb2plY3RUZXh0RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dGZpZWxkJyk7XG5uZXdQcm9qZWN0VGV4dEZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdOYW1lJyk7XG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnYnV0dG9uJywgJ25ldy1wcm9qZWN0LWJ1dHRvbicpO1xubmV3UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICcrIE5ldyBQcm9qZWN0Jztcbm5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xubmV3UHJvamVjdERpdi5hcHBlbmQobmV3UHJvamVjdFRleHRGaWVsZCk7XG5uZXdQcm9qZWN0RGl2LmFwcGVuZChuZXdQcm9qZWN0QnV0dG9uKTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVsZW1lbnQodGl0bGUsIGluZGV4KXtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnYnV0dG9uJywgJ3Byb2plY3QtYnV0dG9uJyk7XG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdpbmRleCcsaW5kZXgpOyBcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpWzBdO1xuICAgICAgICBpZiAocHJldiAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcHJldi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIH0pXG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZChuZXdQcm9qZWN0KTtcbiAgICBuZXdQcm9qZWN0LmNsaWNrKCk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cblxuZnVuY3Rpb24gbGlzdFByb2plY3QocHJvamVjdCl7XG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZChwcm9qZWN0KTtcbn1cblxubmV3UHJvamVjdFRleHRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKT0+e1xuICAgIGlmIChlLmNvZGUgPT0gJ0VudGVyJyl7XG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24uY2xpY2soKTtcbiAgICB9XG59KVxuXG5uZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChuZXdQcm9qZWN0VGV4dEZpZWxkLnZhbHVlID09ICcnKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhZGRQcm9qZWN0RG9tKGFkZFByb2plY3QobmV3UHJvamVjdFRleHRGaWVsZC52YWx1ZSkpO1xuICAgIG5ld1Byb2plY3RUZXh0RmllbGQudmFsdWUgPSAnJztcbn0pXG5cbmJhci5hcHBlbmQoaGVhZGVyKTtcbmJhci5hcHBlbmQocHJvamVjdHNMaXN0KTtcbmJhci5hcHBlbmQobmV3UHJvamVjdERpdik7XG5cbmV4cG9ydCBkZWZhdWx0IGJhcjtcblxuZXhwb3J0IHtcbiAgICBjcmVhdGVQcm9qZWN0RWxlbWVudCxcbiAgICBsaXN0UHJvamVjdFxufSIsIlxuaW1wb3J0IHsgYm9keSB9IGZyb20gXCIuXCI7XG5cbmltcG9ydCBiYXIgZnJvbSBcIi4vYmFyXCI7XG5pbXBvcnQge2NyZWF0ZVByb2plY3RFbGVtZW50fSBmcm9tIFwiLi9iYXJcIjtcblxuaW1wb3J0IHByb2plY3RWaWV3IGZyb20gXCIuL3Byb2plY3RWaWV3XCI7XG5cbmltcG9ydCB7IGdldFByb2plY3RzLCBhZGRQcm9qZWN0LCBzYXZlUHJvamVjdHMsIGxvYWRQcm9qZWN0c30gZnJvbSBcIi4vYXBwXCI7XG5cblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IHByb2plY3RWaWV3cyA9IFtdO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aENsYXNzKHRhZywgZWxlbWVudENsYXNzKXtcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChlbGVtZW50Q2xhc3MpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBidWlsZCgpe1xuICAgIGxvYWRQcm9qZWN0cygpO1xuICAgIG1haW4uYXBwZW5kKGJhcik7XG4gICAgYm9keS5hcHBlbmQobWFpbik7XG4gICAgaWYgKGdldFByb2plY3RzKCkubGVuZ3RoID09IDApe1xuICAgICAgICBhZGRQcm9qZWN0RG9tKGFkZFByb2plY3QoJ0RlZmF1bHQnKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbG9hZERvbVByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3REb20ocHJvamVjdCl7XG4gICAgY29uc3QgbmV3UHJvamVjdFZpZXcgPSBwcm9qZWN0Vmlldyhwcm9qZWN0KTtcbiAgICBwcm9qZWN0Vmlld3MucHVzaChuZXdQcm9qZWN0Vmlldyk7XG4gICAgY29uc3QgbGFzdFByb2plY3RJbmRleCA9IGdldFByb2plY3RzKCkubGVuZ3RoO1xuICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0LmdldFRpdGxlKCksIGxhc3RQcm9qZWN0SW5kZXgpO1xuICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChtYWluLmNoaWxkRWxlbWVudENvdW50ID4gMSl7XG4gICAgICAgICAgICBtYWluLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QtZGl2JylbMF0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbWFpbi5hcHBlbmQobmV3UHJvamVjdFZpZXcuZ2V0UHJvamVjdERpdigpKTtcbiAgICB9KTtcbiAgICBwcm9qZWN0QnV0dG9uLmNsaWNrKCk7XG4gICAgc2F2ZVByb2plY3RzKCk7XG59XG5cbmZ1bmN0aW9uIGxvYWREb21Qcm9qZWN0cygpe1xuICAgIGNvbnN0IHByb2plY3RzID0gZ2V0UHJvamVjdHMoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgYWRkUHJvamVjdERvbShwcm9qZWN0c1tpXSk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCB7Y3JlYXRlRWxlbWVudFdpdGhDbGFzcywgYnVpbGQsIGFkZFByb2plY3REb219IiwiaW1wb3J0IHsgYnVpbGQgfSBmcm9tIFwiLi9kb21cIjtcblxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuYnVpbGQoKTtcblxuZXhwb3J0IHtib2R5fTsiLCJpbXBvcnQgdG9EbyBmcm9tIFwiLi90b0RvXCI7XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUsIHRvRG9zKSA9PntcbiAgICBjb25zdCBwcm90byA9IHtcbiAgICAgICAgdHlwZSA6ICdQcm9qZWN0JyxcblxuICAgICAgICBhZGRUb0RvIDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvRG8gPSB0b0RvKCcnLCcnLCcnLCcnLGZhbHNlKTsgLy9vdmVycmlkZVxuICAgICAgICAgICAgdG9Eb3MucHVzaChuZXdUb0RvKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdUb0RvO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZVRvRG8gOiBmdW5jdGlvbihpbmRleCl7XG4gICAgICAgICAgICB0b0Rvcy5zcGxpY2UoaW5kZXgsMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0VGl0bGUgOiAoKSA9PiB0aXRsZSxcbiAgICAgICAgZ2V0VG9Eb3MgOiAoKSA9PiB0b0RvcyxcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHByb3RvKSwge3RpdGxlLCB0b0Rvc30pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0OyIsImltcG9ydCB7IHNhdmVQcm9qZWN0cyB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgY3JlYWV0VG9Eb1ZpZXcgfSBmcm9tIFwiLi90b2RvVmlld1wiO1xuXG5jb25zdCBwcm9qZWN0VmlldyA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdwcm9qZWN0LWRpdicpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2gyJywgJ3Byb2plY3QtdGl0bGUnKTtcbiAgICBjb25zdCBhZGRUb0RvQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnYnV0dG9uJywgJ25ldy10b2RvLWJ1dHRvbicpO1xuICAgIGFkZFRvRG9CdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnaW5wdXQnKTtcbiAgICBhZGRUb0RvQnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgYWRkVG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBjb25zdCBuZXdUb0RvID0gcHJvamVjdC5hZGRUb0RvKCk7XG4gICAgICAgIGNvbnN0IHRvRG9WaWV3ID0gY3JlYWV0VG9Eb1ZpZXcobmV3VG9EbywgcHJvamVjdC5nZXRUb0RvcygpLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2J1dHRvbicsJ3JlbW92ZS10b2RvLWJ1dHRvbicpO1xuICAgICAgICByZW1vdmVCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICctJztcbiAgICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdC5yZW1vdmVUb0RvKHByb2plY3QuZ2V0VG9Eb3MoKS5sZW5ndGgpO1xuICAgICAgICAgICAgdG9Eb1ZpZXcucmVtb3ZlKCk7XG4gICAgICAgICAgICBzYXZlUHJvamVjdHMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvRG9WaWV3LmFwcGVuZChyZW1vdmVCdXR0b24pO1xuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZCh0b0RvVmlldyk7XG4gICAgICAgIHNhdmVQcm9qZWN0cygpO1xuICAgIH0pXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICAgIHByb2plY3REaXYuYXBwZW5kKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdERpdi5hcHBlbmQoYWRkVG9Eb0J1dHRvbik7XG5cblxuICAgIGNvbnN0IGdldFByb2plY3REaXYgPSAoKSA9PiBwcm9qZWN0RGl2O1xuXG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0RGl2fVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0VmlldztcbiIsIlxuY29uc3QgdG9EbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpID0+IHtcbiAgICBjb25zdCBwcm90byA9IHtcbiAgICAgICAgdHlwZTogJ1RvRG8nLFxuXG4gICAgICAgIGdldFRpdGxlIDogKCkgPT4gdGl0bGUsXG4gICAgICAgIGdldERlc2NyaXB0aW9uOiAoKSA9PiBkZXNjcmlwdGlvbixcbiAgICAgICAgZ2V0RHVlRGF0ZTogKCkgPT4gZHVlRGF0ZSxcbiAgICAgICAgZ2V0UHJpb3JpdHk6ICgpID0+IHByaW9yaXR5LFxuICAgICAgICBnZXRTdGF0dXM6ICgpID0+IHN0YXR1cyxcblxuICAgICAgICBzZXREdWVEYXRlOiAobmV3RGF0ZSkgPT4gZHVlRGF0ZSA9IG5ld0RhdGUsXG4gICAgICAgIHNldFN0YXR1czogKCkgPT4ge1xuICAgICAgICAgICAgc3RhdHVzID0gIXN0YXR1c1xuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VGl0bGUgOiAobmV3VGl0bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1RpdGxlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0UHJpb3JpdHk6IChuZXdQcmlvcml0eSkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eSxcblxuXG5cbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm90byksIHtcbiAgICAgICAgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRG87IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyB9IGZyb20gXCIuL2RvbVwiO1xuXG5mdW5jdGlvbiBjcmVhZXRUb0RvVmlldyh0b2RvLCBpbmRleCkge1xuICAgIGNvbnN0IHRvZG9EaXYgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAndG9kby1kaXYnKTtcbiAgICB0b2RvRGl2LnNldEF0dHJpYnV0ZSgndG9kZG8taW5kZXgnLCBpbmRleCk7XG4gICAgY29uc3QgY2hlY2tib3ggPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdpbnB1dCcsICd0b2RvLWNoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKTtcbiAgICBpZiAodG9kby5nZXRTdGF0dXMoKSl7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB0ZXh0ZmllbGQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdpbnB1dCcsJ3RvZG8tdGV4dGZpZWxkJyk7XG4gICAgdGV4dGZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHRmaWVsZCcpO1xuICAgIHRleHRmaWVsZC52YWx1ZSA9IHRvZG8uZ2V0VGl0bGUoKTtcbiAgICBjb25zdCBkYXRlID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnaW5wdXQnLCd0b2RvLWRhdGUnKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZGF0ZS52YWx1ZSA9IHRvZG8uZ2V0RHVlRGF0ZSgpO1xuICAgIGNvbnN0IHNlbGVjdCA9IGNyZWF0ZVNlbGVjdFByaW9yaXR5KHRvZG8sdG9kb0Rpdik7XG4gXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0b2RvLnNldFN0YXR1cygpO1xuICAgICAgICBjb25zdCBzdGF0dXMgPSB0b2RvLmdldFN0YXR1cygpO1xuICAgICAgICBkYXRlLmRpc2FibGVkID0gc3RhdHVzO1xuICAgICAgICB0ZXh0ZmllbGQuZGlzYWJsZWQgPSBzdGF0dXM7XG4gICAgICAgIHNlbGVjdC5kaXNhYmxlZCA9IHN0YXR1cztcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQtdG9kbycpO1xuICAgIH0pO1xuXG4gICAgdGV4dGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpPT4ge1xuICAgICAgICB0b2RvLnNldFRpdGxlKHRleHRmaWVsZC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdG9kby5zZXREdWVEYXRlKGRhdGUudmFsdWUpO1xuICAgIH0pO1xuXG4gICBcbiAgICB0b2RvRGl2LmFwcGVuZChjaGVja2JveCk7XG4gICAgdG9kb0Rpdi5hcHBlbmQodGV4dGZpZWxkKTtcbiAgICB0b2RvRGl2LmFwcGVuZChkYXRlKTtcbiAgICB0b2RvRGl2LmFwcGVuZChzZWxlY3QpO1xuXG4gICAgcmV0dXJuIHRvZG9EaXY7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0UHJpb3JpdHkodG9kbywgdG9kb0Rpdil7XG4gICAgY29uc3Qgc2VsZWN0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnc2VsZWN0JywndG9kby1zZWxlY3QnKTtcbiAgICBzZWxlY3QuYXBwZW5kKGNyZWF0ZU9wdGlvbkVsZW1lbnQoJ3NlbGVjdCBwcmlvcml0eScsICdzZWxlY3QgcHJpb3JpdHknKSk7XG4gICAgc2VsZWN0LmFwcGVuZChjcmVhdGVPcHRpb25FbGVtZW50KCdMb3cnLCAnbG93JykpO1xuICAgIHNlbGVjdC5hcHBlbmQoY3JlYXRlT3B0aW9uRWxlbWVudCgnTWVkaXVtJywgJ21lZGl1bScpKTtcbiAgICBzZWxlY3QuYXBwZW5kKGNyZWF0ZU9wdGlvbkVsZW1lbnQoJ0hpZ2gnLCAnaGlnaCcpKTtcbiAgICBzZWxlY3QudmFsdWUgPSB0b2RvLmdldFByaW9yaXR5KCk7XG5cbiAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk9PntcbiAgICAgICAgLy8gY291bGQgYmUgaW1wcm92ZWRcbiAgICAgICAgY29uc3Qgb2xkQ2xhc3MgPSBgJHt0b2RvLmdldFByaW9yaXR5KCl9LXRvZG9gO1xuICAgICAgICBpZiAob2xkQ2xhc3MgIT0gJycpIHtcbiAgICAgICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LnJlbW92ZShvbGRDbGFzcyk7XG4gICAgICAgIH1cbiAgICAgICAgdG9kby5zZXRQcmlvcml0eShzZWxlY3QudmFsdWUpO1xuICAgICAgICBjb25zdCBuZXdDbGFzcyA9IGAke3RvZG8uZ2V0UHJpb3JpdHkoKX0tdG9kb2A7XG4gICAgICAgIHRvZG9EaXYuY2xhc3NMaXN0LmFkZChuZXdDbGFzcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2VsZWN0O1xuICAgIFxufVxuXG5mdW5jdGlvbiBjcmVhdGVPcHRpb25FbGVtZW50KHRleHQsIHZhbHVlKXtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udmFsdWUgPSB2YWx1ZTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBvcHRpb247XG59XG5cbmV4cG9ydCB7Y3JlYWV0VG9Eb1ZpZXd9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==