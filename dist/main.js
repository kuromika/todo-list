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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --slate: #f1f5f9;\n    --gray: #f3f4f6;\n    --zinc: #e4e4e7;\n    --dark-slate: #94a3b8;\n    --stone: #52525b;\n}\n\n@font-face {\n    font-family: 'Noto Sans', sans-serif;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('tff');\n    font-weight: 400;\n    font-style: normal;\n}\n\n*{\n    box-sizing: border-box;\n    font-family: 'Noto Sans', sans-serif;\n    margin: 0;\n    padding: 0;\n    color:var(--stone);\n\n}\n\nbody{\n    height: 100vh;\n}\n\nmain{\n    display: flex;\n    height: 100%;\n\n}\n\n.projects-bar{\n    background-color: var(--slate);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 20%;\n    box-shadow: 3px 0px 1px var(--dark-slate);\n}\n\n.bar-header,\n.projects-list{\n    margin: 30px 30px 20px 25px;\n}\n\n.bar-header{\n    padding: 10px;\n    background-color: var(--zinc);\n    box-shadow: 10px 10px 5px #8888;\n}\n\n\n\n.new-project-div{\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n    margin-top: auto;\n    gap: 5px;\n}\n\n.new-project-button{\n    border: none;\n    border-top: 5px solid var(--zinc);\n    padding: 5px;\n    font-weight: 600;\n    font-size: 15px;\n}\n\n.projects-list{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project-button{\n    background-color: var(--slate);\n    text-align: start;\n    font-size: 17px;\n    border: none;\n    padding: 5px;\n    font-weight: 500;\n    border: 1px solid var(--dark-slate);\n}\n\n.project-button.selected{\n    background-color: var(--zinc);\n}\n\n.new-project-textfield{\n    border: 2px solid var(--zinc) ;\n    padding: 5px;\n}\n\n.new-project-textfield:focus{\n    border-color: var(--dark-slate);\n    border-right: none;\n    outline: none;\n}\n\n\n.new-project-button:active{\n    background-color: var(--dark-slate);\n}\n\n.project-div{\n    display: flex;\n    flex-direction: column;\n    /* maybe center the project view? */\n    padding: 70px 90px 90px 70px;\n    gap: 50px;\n    background-color: var(--gray);\n    margin-left: 3px;\n    width: calc(80% - 3px);\n    overflow-y: auto;\n}\n\n.new-todo-button{\n    align-self: flex-end;\n    justify-self: flex-end;\n    order: 2;\n    background-color: #64748b;\n    color: #fafafa;\n    font-size: 40px;\n    width: 60px;\n    height: 60px;\n    border-radius: 50px;\n    border: 5px solid #0f172a;\n}\n\n.new-todo-button:active{\n    background-color: #0f172a;\n}\n\n.project-title{\n    color:var(--slate);\n    font-size: 40px;\n    background-color: var(--dark-slate);\n    border: 5px solid var(--stone);\n    padding: 10px;\n    margin-bottom: 50px;\n}\n\n.todo-div{\n    display: flex;\n    align-items: center;\n    gap: 30px;\n    border: 1px solid var(--stone);\n    padding: 10px 20px;\n    width: max(445px, 30vw);\n}\n\n.completed-todo{\n    text-decoration: line-through;\n    border: 3px solid var(--stone);\n}\n\n.low-todo{\n    background-color: #d9f99d;\n}\n\n.medium-todo{\n    background-color: #fef3c7;\n}\n\n.high-todo{\n    background-color: #fca5a5;\n}\n\n.todo-checkbox{\n    border-radius: 40px;\n    height: 60px;\n    width: 30px;\n}\n\n.todo-textfield,\n.todo-date,\n.todo-select{\n    height: 25px;\n    width: 300px;\n    background-color: var(--gray);\n}\n\n.todo-date{\n    min-width: 20px;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,eAAe;IACf,eAAe;IACf,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;IACpC,0DAA8C;IAC9C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,oCAAoC;IACpC,SAAS;IACT,UAAU;IACV,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,YAAY;;AAEhB;;AAEA;IACI,8BAA8B;IAC9B,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,UAAU;IACV,yCAAyC;AAC7C;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,+BAA+B;AACnC;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,iCAAiC;IACjC,YAAY;IACZ,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,8BAA8B;IAC9B,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,mCAAmC;AACvC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,aAAa;AACjB;;;AAGA;IACI,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mCAAmC;IACnC,4BAA4B;IAC5B,SAAS;IACT,6BAA6B;IAC7B,gBAAgB;IAChB,sBAAsB;IACtB,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,QAAQ;IACR,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,mCAAmC;IACnC,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,8BAA8B;IAC9B,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,6BAA6B;IAC7B,8BAA8B;AAClC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,WAAW;AACf;;AAEA;;;IAGI,YAAY;IACZ,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,eAAe;AACnB","sourcesContent":[":root{\n    --slate: #f1f5f9;\n    --gray: #f3f4f6;\n    --zinc: #e4e4e7;\n    --dark-slate: #94a3b8;\n    --stone: #52525b;\n}\n\n@font-face {\n    font-family: 'Noto Sans', sans-serif;\n    src: url(./NotoSans-Regular.ttf) format('tff');\n    font-weight: 400;\n    font-style: normal;\n}\n\n*{\n    box-sizing: border-box;\n    font-family: 'Noto Sans', sans-serif;\n    margin: 0;\n    padding: 0;\n    color:var(--stone);\n\n}\n\nbody{\n    height: 100vh;\n}\n\nmain{\n    display: flex;\n    height: 100%;\n\n}\n\n.projects-bar{\n    background-color: var(--slate);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 20%;\n    box-shadow: 3px 0px 1px var(--dark-slate);\n}\n\n.bar-header,\n.projects-list{\n    margin: 30px 30px 20px 25px;\n}\n\n.bar-header{\n    padding: 10px;\n    background-color: var(--zinc);\n    box-shadow: 10px 10px 5px #8888;\n}\n\n\n\n.new-project-div{\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n    margin-top: auto;\n    gap: 5px;\n}\n\n.new-project-button{\n    border: none;\n    border-top: 5px solid var(--zinc);\n    padding: 5px;\n    font-weight: 600;\n    font-size: 15px;\n}\n\n.projects-list{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project-button{\n    background-color: var(--slate);\n    text-align: start;\n    font-size: 17px;\n    border: none;\n    padding: 5px;\n    font-weight: 500;\n    border: 1px solid var(--dark-slate);\n}\n\n.project-button.selected{\n    background-color: var(--zinc);\n}\n\n.new-project-textfield{\n    border: 2px solid var(--zinc) ;\n    padding: 5px;\n}\n\n.new-project-textfield:focus{\n    border-color: var(--dark-slate);\n    border-right: none;\n    outline: none;\n}\n\n\n.new-project-button:active{\n    background-color: var(--dark-slate);\n}\n\n.project-div{\n    display: flex;\n    flex-direction: column;\n    /* maybe center the project view? */\n    padding: 70px 90px 90px 70px;\n    gap: 50px;\n    background-color: var(--gray);\n    margin-left: 3px;\n    width: calc(80% - 3px);\n    overflow-y: auto;\n}\n\n.new-todo-button{\n    align-self: flex-end;\n    justify-self: flex-end;\n    order: 2;\n    background-color: #64748b;\n    color: #fafafa;\n    font-size: 40px;\n    width: 60px;\n    height: 60px;\n    border-radius: 50px;\n    border: 5px solid #0f172a;\n}\n\n.new-todo-button:active{\n    background-color: #0f172a;\n}\n\n.project-title{\n    color:var(--slate);\n    font-size: 40px;\n    background-color: var(--dark-slate);\n    border: 5px solid var(--stone);\n    padding: 10px;\n    margin-bottom: 50px;\n}\n\n.todo-div{\n    display: flex;\n    align-items: center;\n    gap: 30px;\n    border: 1px solid var(--stone);\n    padding: 10px 20px;\n    width: max(445px, 30vw);\n}\n\n.completed-todo{\n    text-decoration: line-through;\n    border: 3px solid var(--stone);\n}\n\n.low-todo{\n    background-color: #d9f99d;\n}\n\n.medium-todo{\n    background-color: #fef3c7;\n}\n\n.high-todo{\n    background-color: #fca5a5;\n}\n\n.todo-checkbox{\n    border-radius: 40px;\n    height: 60px;\n    width: 30px;\n}\n\n.todo-textfield,\n.todo-date,\n.todo-select{\n    height: 25px;\n    width: 300px;\n    background-color: var(--gray);\n}\n\n.todo-date{\n    min-width: 20px;\n}\n\n"],"sourceRoot":""}]);
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
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



const bar = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('div', 'projects-bar');
const header = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('h2', 'bar-header');
header.textContent = 'My Projects';
const projectsList = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('ul', 'projects-list');

const newProjectDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('div', 'new-project-div');
const newProjectTextField = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('input', 'new-project-textfield');
newProjectTextField.setAttribute('type','textfield');
newProjectTextField.setAttribute('placeholder','Name');
const newProjectButton = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('button', 'new-project-button');
newProjectButton.textContent = '+ New Project';
newProjectButton.setAttribute('type', 'button');
newProjectDiv.append(newProjectTextField);
newProjectDiv.append(newProjectButton);

function createProjectElement(title, index){
    const newProject = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('button', 'project-button');
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
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addProjectDom)(newProjectTextField.value);
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
    main.append(_bar__WEBPACK_IMPORTED_MODULE_1__["default"]);
    ___WEBPACK_IMPORTED_MODULE_0__.body.append(main);
    addProjectDom('Default');
}

function addProjectDom(title){
    const newProjectView = (0,_projectView__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_app__WEBPACK_IMPORTED_MODULE_3__.addProject)(title));
    const lastProjectIndex = (0,_app__WEBPACK_IMPORTED_MODULE_3__.getProjects)().length;
    (0,_bar__WEBPACK_IMPORTED_MODULE_1__.createProjectElement)(title, lastProjectIndex );
    if (main.childElementCount > 1){
        main.getElementsByClassName('project-div')[0].remove();
    }
    main.append(newProjectView.getProjectDiv());
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
            const newToDo = (0,_toDo__WEBPACK_IMPORTED_MODULE_0__["default"])('','','','',false);
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _todoView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoView */ "./src/todoView.js");



const projectView = (project) => {
    const projectDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('div', 'project-div');
    const projectTitle = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('h2', 'project-title');
    const addToDoButton = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('button', 'new-todo-button');
    addToDoButton.setAttribute('type','input');
    addToDoButton.textContent = "+";
    addToDoButton.addEventListener('click', () =>{
        const newToDo = project.addToDo();
        projectDiv.append((0,_todoView__WEBPACK_IMPORTED_MODULE_1__.creaetToDoView)(newToDo, project.getToDos().length));

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
        setTitle : (newTitle) => title = newTitle,
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



function creaetToDoView(todo, index){
    const todoDiv = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('div', 'todo-div');
    todoDiv.setAttribute('toddo-index', index);
    const checkbox = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('input', 'todo-checkbox');
    checkbox.setAttribute('type','checkbox');
    const textfield = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('input','todo-textfield');
    textfield.setAttribute('type','textfield')
    const date = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElementWithClass)('input','todo-date');
    date.setAttribute('type', 'date');
    const dateObject = new Date();
    const dateAsString = `${dateObject.getFullYear()}-${dateObject.getMonth()}-${dateObject.getDate()}`;
    date.value = dateAsString;
    todo.setDueDate(dateAsString);
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
    select.append(createOptionElement('-- select priority --', ''));
    select.append(createOptionElement('Low', 'low'));
    select.append(createOptionElement('Medium', 'medium'));
    select.append(createOptionElement('High', 'high'));

    select.addEventListener('change', ()=>{
        // could be improved
        const oldClass = `${todo.getPriority()}-todo`;
        if (oldClass != '') {
            todoDiv.classList.remove(oldClass);
        }
        todo.setPriority(select.value);
        const newClass = `${todo.getPriority()}-todo`;
        console.log(todo.getPriority());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9iYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RWaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b0RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvVmlldy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Ob3RvU2Fucy1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLXNsYXRlOiAjZjFmNWY5O1xcbiAgICAtLWdyYXk6ICNmM2Y0ZjY7XFxuICAgIC0temluYzogI2U0ZTRlNztcXG4gICAgLS1kYXJrLXNsYXRlOiAjOTRhM2I4O1xcbiAgICAtLXN0b25lOiAjNTI1MjViO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0ZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6dmFyKC0tc3RvbmUpO1xcblxcbn1cXG5cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxufVxcblxcbi5wcm9qZWN0cy1iYXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBib3gtc2hhZG93OiAzcHggMHB4IDFweCB2YXIoLS1kYXJrLXNsYXRlKTtcXG59XFxuXFxuLmJhci1oZWFkZXIsXFxuLnByb2plY3RzLWxpc3R7XFxuICAgIG1hcmdpbjogMzBweCAzMHB4IDIwcHggMjVweDtcXG59XFxuXFxuLmJhci1oZWFkZXJ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMpO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4ICM4ODg4O1xcbn1cXG5cXG5cXG5cXG4ubmV3LXByb2plY3QtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdmFyKC0temluYyk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlKTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstc2xhdGUpO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24uc2VsZWN0ZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtdGV4dGZpZWxke1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS16aW5jKSA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LXRleHRmaWVsZDpmb2N1c3tcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLXNsYXRlKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uOmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZSk7XFxufVxcblxcbi5wcm9qZWN0LWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogbWF5YmUgY2VudGVyIHRoZSBwcm9qZWN0IHZpZXc/ICovXFxuICAgIHBhZGRpbmc6IDcwcHggOTBweCA5MHB4IDcwcHg7XFxuICAgIGdhcDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgIHdpZHRoOiBjYWxjKDgwJSAtIDNweCk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5uZXctdG9kby1idXR0b257XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBvcmRlcjogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXG4gICAgY29sb3I6ICNmYWZhZmE7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzBmMTcyYTtcXG59XFxuXFxuLm5ldy10b2RvLWJ1dHRvbjphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxle1xcbiAgICBjb2xvcjp2YXIoLS1zbGF0ZSk7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZSk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLXN0b25lKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnRvZG8tZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN0b25lKTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICB3aWR0aDogbWF4KDQ0NXB4LCAzMHZ3KTtcXG59XFxuXFxuLmNvbXBsZXRlZC10b2Rve1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc3RvbmUpO1xcbn1cXG5cXG4ubG93LXRvZG97XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWY5OWQ7XFxufVxcblxcbi5tZWRpdW0tdG9kb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjNjNztcXG59XFxuXFxuLmhpZ2gtdG9kb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYTVhNTtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3h7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi50b2RvLXRleHRmaWVsZCxcXG4udG9kby1kYXRlLFxcbi50b2RvLXNlbGVjdHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbn1cXG5cXG4udG9kby1kYXRle1xcbiAgICBtaW4td2lkdGg6IDIwcHg7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDBEQUE4QztJQUM5QyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVix5Q0FBeUM7QUFDN0M7O0FBRUE7O0lBRUksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QiwrQkFBK0I7QUFDbkM7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tc2xhdGU6ICNmMWY1Zjk7XFxuICAgIC0tZ3JheTogI2YzZjRmNjtcXG4gICAgLS16aW5jOiAjZTRlNGU3O1xcbiAgICAtLWRhcmstc2xhdGU6ICM5NGEzYjg7XFxuICAgIC0tc3RvbmU6ICM1MjUyNWI7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIHNyYzogdXJsKC4vTm90b1NhbnMtUmVndWxhci50dGYpIGZvcm1hdCgndGZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKntcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOnZhcigtLXN0b25lKTtcXG5cXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubWFpbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcblxcbn1cXG5cXG4ucHJvamVjdHMtYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDBweCAxcHggdmFyKC0tZGFyay1zbGF0ZSk7XFxufVxcblxcbi5iYXItaGVhZGVyLFxcbi5wcm9qZWN0cy1saXN0e1xcbiAgICBtYXJnaW46IDMwcHggMzBweCAyMHB4IDI1cHg7XFxufVxcblxcbi5iYXItaGVhZGVye1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAjODg4ODtcXG59XFxuXFxuXFxuXFxuLm5ldy1wcm9qZWN0LWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b257XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHZhcigtLXppbmMpO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLnByb2plY3RzLWxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zbGF0ZSk7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1kYXJrLXNsYXRlKTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS16aW5jKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LXRleHRmaWVsZHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0temluYykgO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5uZXctcHJvamVjdC10ZXh0ZmllbGQ6Zm9jdXN7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZSk7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbjphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc2xhdGUpO1xcbn1cXG5cXG4ucHJvamVjdC1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIG1heWJlIGNlbnRlciB0aGUgcHJvamVjdCB2aWV3PyAqL1xcbiAgICBwYWRkaW5nOiA3MHB4IDkwcHggOTBweCA3MHB4O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xcbiAgICB3aWR0aDogY2FsYyg4MCUgLSAzcHgpO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4ubmV3LXRvZG8tYnV0dG9ue1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgb3JkZXI6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxuICAgIGNvbG9yOiAjZmFmYWZhO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICMwZjE3MmE7XFxufVxcblxcbi5uZXctdG9kby1idXR0b246YWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxNzJhO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZXtcXG4gICAgY29sb3I6dmFyKC0tc2xhdGUpO1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstc2xhdGUpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1zdG9uZSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi50b2RvLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdG9uZSk7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgd2lkdGg6IG1heCg0NDVweCwgMzB2dyk7XFxufVxcblxcbi5jb21wbGV0ZWQtdG9kb3tcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXN0b25lKTtcXG59XFxuXFxuLmxvdy10b2Rve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlmOTlkO1xcbn1cXG5cXG4ubWVkaXVtLXRvZG97XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWYzYzc7XFxufVxcblxcbi5oaWdoLXRvZG97XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2E1YTU7XFxufVxcblxcbi50b2RvLWNoZWNrYm94e1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4udG9kby10ZXh0ZmllbGQsXFxuLnRvZG8tZGF0ZSxcXG4udG9kby1zZWxlY3R7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG59XFxuXFxuLnRvZG8tZGF0ZXtcXG4gICAgbWluLXdpZHRoOiAyMHB4O1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHRvRG8gZnJvbSBcIi4vdG9Eb1wiO1xuXG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuXG5cbmZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUpe1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0KHRpdGxlLFtdKVxuICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaW5kZXgpe1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwxKTtcbn1cblxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpe1xuICAgIHJldHVybiBwcm9qZWN0cztcbn1cblxuZXhwb3J0IHtcbiAgICBhZGRQcm9qZWN0LFxuICAgIHJlbW92ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdHNcbn07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFdpdGhDbGFzcywgYWRkUHJvamVjdERvbX0gZnJvbSBcIi4vZG9tXCI7XG5cblxuY29uc3QgYmFyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3Byb2plY3RzLWJhcicpO1xuY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnaDInLCAnYmFyLWhlYWRlcicpO1xuaGVhZGVyLnRleHRDb250ZW50ID0gJ015IFByb2plY3RzJztcbmNvbnN0IHByb2plY3RzTGlzdCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ3VsJywgJ3Byb2plY3RzLWxpc3QnKTtcblxuY29uc3QgbmV3UHJvamVjdERpdiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICduZXctcHJvamVjdC1kaXYnKTtcbmNvbnN0IG5ld1Byb2plY3RUZXh0RmllbGQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdpbnB1dCcsICduZXctcHJvamVjdC10ZXh0ZmllbGQnKTtcbm5ld1Byb2plY3RUZXh0RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dGZpZWxkJyk7XG5uZXdQcm9qZWN0VGV4dEZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdOYW1lJyk7XG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnYnV0dG9uJywgJ25ldy1wcm9qZWN0LWJ1dHRvbicpO1xubmV3UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICcrIE5ldyBQcm9qZWN0Jztcbm5ld1Byb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xubmV3UHJvamVjdERpdi5hcHBlbmQobmV3UHJvamVjdFRleHRGaWVsZCk7XG5uZXdQcm9qZWN0RGl2LmFwcGVuZChuZXdQcm9qZWN0QnV0dG9uKTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVsZW1lbnQodGl0bGUsIGluZGV4KXtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnYnV0dG9uJywgJ3Byb2plY3QtYnV0dG9uJyk7XG4gICAgbmV3UHJvamVjdC50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdpbmRleCcsaW5kZXgpOyBcbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIGNvbnN0IHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpWzBdO1xuICAgICAgICBpZiAocHJldiAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcHJldi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICB9KVxuICAgIHByb2plY3RzTGlzdC5hcHBlbmQobmV3UHJvamVjdCk7XG4gICAgbmV3UHJvamVjdC5jbGljaygpO1xufVxuXG5cbmZ1bmN0aW9uIGxpc3RQcm9qZWN0KHByb2plY3Qpe1xuICAgIHByb2plY3RzTGlzdC5hcHBlbmQocHJvamVjdCk7XG59XG5cbm5ld1Byb2plY3RUZXh0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSk9PntcbiAgICBpZiAoZS5jb2RlID09ICdFbnRlcicpe1xuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmNsaWNrKCk7XG4gICAgfVxufSlcblxubmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAobmV3UHJvamVjdFRleHRGaWVsZC52YWx1ZSA9PSAnJyl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWRkUHJvamVjdERvbShuZXdQcm9qZWN0VGV4dEZpZWxkLnZhbHVlKTtcbiAgICBuZXdQcm9qZWN0VGV4dEZpZWxkLnZhbHVlID0gJyc7XG59KVxuXG5iYXIuYXBwZW5kKGhlYWRlcik7XG5iYXIuYXBwZW5kKHByb2plY3RzTGlzdCk7XG5iYXIuYXBwZW5kKG5ld1Byb2plY3REaXYpO1xuXG5leHBvcnQgZGVmYXVsdCBiYXI7XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlUHJvamVjdEVsZW1lbnQsXG4gICAgbGlzdFByb2plY3Rcbn0iLCJcbmltcG9ydCB7IGJvZHkgfSBmcm9tIFwiLlwiO1xuXG5pbXBvcnQgYmFyIGZyb20gXCIuL2JhclwiO1xuaW1wb3J0IHtjcmVhdGVQcm9qZWN0RWxlbWVudH0gZnJvbSBcIi4vYmFyXCI7XG5cbmltcG9ydCBwcm9qZWN0VmlldyBmcm9tIFwiLi9wcm9qZWN0Vmlld1wiO1xuXG5pbXBvcnQgeyBnZXRQcm9qZWN0cywgYWRkUHJvamVjdH0gZnJvbSBcIi4vYXBwXCI7XG5cblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IHByb2plY3RWaWV3cyA9IFtdO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhDbGFzcyh0YWcsIGVsZW1lbnRDbGFzcyl7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudENsYXNzKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYnVpbGQoKXtcbiAgICBtYWluLmFwcGVuZChiYXIpO1xuICAgIGJvZHkuYXBwZW5kKG1haW4pO1xuICAgIGFkZFByb2plY3REb20oJ0RlZmF1bHQnKTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdERvbSh0aXRsZSl7XG4gICAgY29uc3QgbmV3UHJvamVjdFZpZXcgPSBwcm9qZWN0VmlldyhhZGRQcm9qZWN0KHRpdGxlKSk7XG4gICAgY29uc3QgbGFzdFByb2plY3RJbmRleCA9IGdldFByb2plY3RzKCkubGVuZ3RoO1xuICAgIGNyZWF0ZVByb2plY3RFbGVtZW50KHRpdGxlLCBsYXN0UHJvamVjdEluZGV4ICk7XG4gICAgaWYgKG1haW4uY2hpbGRFbGVtZW50Q291bnQgPiAxKXtcbiAgICAgICAgbWFpbi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0LWRpdicpWzBdLnJlbW92ZSgpO1xuICAgIH1cbiAgICBtYWluLmFwcGVuZChuZXdQcm9qZWN0Vmlldy5nZXRQcm9qZWN0RGl2KCkpO1xufVxuXG5cbmV4cG9ydCB7Y3JlYXRlRWxlbWVudFdpdGhDbGFzcywgYnVpbGQsIGFkZFByb2plY3REb219IiwiaW1wb3J0IHsgYnVpbGQgfSBmcm9tIFwiLi9kb21cIjtcblxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuYnVpbGQoKTtcblxuZXhwb3J0IHtib2R5fTsiLCJpbXBvcnQgdG9EbyBmcm9tIFwiLi90b0RvXCI7XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUsIHRvRG9zKSA9PntcbiAgICBjb25zdCBwcm90byA9IHtcbiAgICAgICAgdHlwZSA6ICdQcm9qZWN0JyxcblxuICAgICAgICBhZGRUb0RvIDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RvRG8gPSB0b0RvKCcnLCcnLCcnLCcnLGZhbHNlKTtcbiAgICAgICAgICAgIHRvRG9zLnB1c2gobmV3VG9Ebyk7XG4gICAgICAgICAgICByZXR1cm4gbmV3VG9EbztcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVUb0RvIDogZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICAgICAgdG9Eb3Muc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFRpdGxlIDogKCkgPT4gdGl0bGUsXG4gICAgICAgIGdldFRvRG9zIDogKCkgPT4gdG9Eb3MsXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm90byksIHt0aXRsZSwgdG9Eb3N9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50V2l0aENsYXNzIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBjcmVhZXRUb0RvVmlldyB9IGZyb20gXCIuL3RvZG9WaWV3XCI7XG5cbmNvbnN0IHByb2plY3RWaWV3ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3Byb2plY3QtZGl2Jyk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnaDInLCAncHJvamVjdC10aXRsZScpO1xuICAgIGNvbnN0IGFkZFRvRG9CdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdidXR0b24nLCAnbmV3LXRvZG8tYnV0dG9uJyk7XG4gICAgYWRkVG9Eb0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdpbnB1dCcpO1xuICAgIGFkZFRvRG9CdXR0b24udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICBhZGRUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIGNvbnN0IG5ld1RvRG8gPSBwcm9qZWN0LmFkZFRvRG8oKTtcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmQoY3JlYWV0VG9Eb1ZpZXcobmV3VG9EbywgcHJvamVjdC5nZXRUb0RvcygpLmxlbmd0aCkpO1xuXG4gICAgfSlcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldFRpdGxlKCk7XG4gICAgcHJvamVjdERpdi5hcHBlbmQocHJvamVjdFRpdGxlKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZChhZGRUb0RvQnV0dG9uKTtcblxuXG4gICAgY29uc3QgZ2V0UHJvamVjdERpdiA9ICgpID0+IHByb2plY3REaXY7XG5cbiAgICByZXR1cm4ge2dldFByb2plY3REaXZ9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RWaWV3O1xuIiwiXG5jb25zdCB0b0RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cykgPT4ge1xuICAgIGNvbnN0IHByb3RvID0ge1xuICAgICAgICB0eXBlOiAnVG9EbycsXG5cbiAgICAgICAgZ2V0VGl0bGUgOiAoKSA9PiB0aXRsZSxcbiAgICAgICAgZ2V0RGVzY3JpcHRpb246ICgpID0+IGRlc2NyaXB0aW9uLFxuICAgICAgICBnZXREdWVEYXRlOiAoKSA9PiBkdWVEYXRlLFxuICAgICAgICBnZXRQcmlvcml0eTogKCkgPT4gcHJpb3JpdHksXG4gICAgICAgIGdldFN0YXR1czogKCkgPT4gc3RhdHVzLFxuXG4gICAgICAgIHNldER1ZURhdGU6IChuZXdEYXRlKSA9PiBkdWVEYXRlID0gbmV3RGF0ZSxcbiAgICAgICAgc2V0U3RhdHVzOiAoKSA9PiB7XG4gICAgICAgICAgICBzdGF0dXMgPSAhc3RhdHVzXG4gICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXRUaXRsZSA6IChuZXdUaXRsZSkgPT4gdGl0bGUgPSBuZXdUaXRsZSxcbiAgICAgICAgc2V0UHJpb3JpdHk6IChuZXdQcmlvcml0eSkgPT4gcHJpb3JpdHkgPSBuZXdQcmlvcml0eSxcblxuXG5cbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm90byksIHtcbiAgICAgICAgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvRG87IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyB9IGZyb20gXCIuL2RvbVwiO1xuXG5cbmZ1bmN0aW9uIGNyZWFldFRvRG9WaWV3KHRvZG8sIGluZGV4KXtcbiAgICBjb25zdCB0b2RvRGl2ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ3RvZG8tZGl2Jyk7XG4gICAgdG9kb0Rpdi5zZXRBdHRyaWJ1dGUoJ3RvZGRvLWluZGV4JywgaW5kZXgpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnaW5wdXQnLCAndG9kby1jaGVja2JveCcpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsJ2NoZWNrYm94Jyk7XG4gICAgY29uc3QgdGV4dGZpZWxkID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnaW5wdXQnLCd0b2RvLXRleHRmaWVsZCcpO1xuICAgIHRleHRmaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0ZmllbGQnKVxuICAgIGNvbnN0IGRhdGUgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdpbnB1dCcsJ3RvZG8tZGF0ZScpO1xuICAgIGRhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBjb25zdCBkYXRlT2JqZWN0ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlQXNTdHJpbmcgPSBgJHtkYXRlT2JqZWN0LmdldEZ1bGxZZWFyKCl9LSR7ZGF0ZU9iamVjdC5nZXRNb250aCgpfS0ke2RhdGVPYmplY3QuZ2V0RGF0ZSgpfWA7XG4gICAgZGF0ZS52YWx1ZSA9IGRhdGVBc1N0cmluZztcbiAgICB0b2RvLnNldER1ZURhdGUoZGF0ZUFzU3RyaW5nKTtcbiAgICBjb25zdCBzZWxlY3QgPSBjcmVhdGVTZWxlY3RQcmlvcml0eSh0b2RvLHRvZG9EaXYpO1xuIFxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdG9kby5zZXRTdGF0dXMoKTtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gdG9kby5nZXRTdGF0dXMoKTtcbiAgICAgICAgZGF0ZS5kaXNhYmxlZCA9IHN0YXR1cztcbiAgICAgICAgdGV4dGZpZWxkLmRpc2FibGVkID0gc3RhdHVzO1xuICAgICAgICBzZWxlY3QuZGlzYWJsZWQgPSBzdGF0dXM7XG5cbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZWQtdG9kbycpO1xuICAgIH0pO1xuXG4gICAgdGV4dGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpPT4ge1xuICAgICAgICB0b2RvLnNldFRpdGxlKHRleHRmaWVsZC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgdG9kby5zZXREdWVEYXRlKGRhdGUudmFsdWUpO1xuICAgIH0pO1xuXG4gICBcbiAgICB0b2RvRGl2LmFwcGVuZChjaGVja2JveCk7XG4gICAgdG9kb0Rpdi5hcHBlbmQodGV4dGZpZWxkKTtcbiAgICB0b2RvRGl2LmFwcGVuZChkYXRlKTtcbiAgICB0b2RvRGl2LmFwcGVuZChzZWxlY3QpO1xuXG4gICAgcmV0dXJuIHRvZG9EaXY7XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0UHJpb3JpdHkodG9kbywgdG9kb0Rpdil7XG4gICAgY29uc3Qgc2VsZWN0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnc2VsZWN0JywndG9kby1zZWxlY3QnKTtcbiAgICBzZWxlY3QuYXBwZW5kKGNyZWF0ZU9wdGlvbkVsZW1lbnQoJy0tIHNlbGVjdCBwcmlvcml0eSAtLScsICcnKSk7XG4gICAgc2VsZWN0LmFwcGVuZChjcmVhdGVPcHRpb25FbGVtZW50KCdMb3cnLCAnbG93JykpO1xuICAgIHNlbGVjdC5hcHBlbmQoY3JlYXRlT3B0aW9uRWxlbWVudCgnTWVkaXVtJywgJ21lZGl1bScpKTtcbiAgICBzZWxlY3QuYXBwZW5kKGNyZWF0ZU9wdGlvbkVsZW1lbnQoJ0hpZ2gnLCAnaGlnaCcpKTtcblxuICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKT0+e1xuICAgICAgICAvLyBjb3VsZCBiZSBpbXByb3ZlZFxuICAgICAgICBjb25zdCBvbGRDbGFzcyA9IGAke3RvZG8uZ2V0UHJpb3JpdHkoKX0tdG9kb2A7XG4gICAgICAgIGlmIChvbGRDbGFzcyAhPSAnJykge1xuICAgICAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QucmVtb3ZlKG9sZENsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICB0b2RvLnNldFByaW9yaXR5KHNlbGVjdC52YWx1ZSk7XG4gICAgICAgIGNvbnN0IG5ld0NsYXNzID0gYCR7dG9kby5nZXRQcmlvcml0eSgpfS10b2RvYDtcbiAgICAgICAgY29uc29sZS5sb2codG9kby5nZXRQcmlvcml0eSgpKTtcbiAgICAgICAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzZWxlY3Q7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbkVsZW1lbnQodGV4dCwgdmFsdWUpe1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIG9wdGlvbjtcbn1cblxuZXhwb3J0IHtjcmVhZXRUb0RvVmlld307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9