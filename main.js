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
    projectViews.push(newProjectView);
    const lastProjectIndex = (0,_app__WEBPACK_IMPORTED_MODULE_3__.getProjects)().length;
    const projectButton = (0,_bar__WEBPACK_IMPORTED_MODULE_1__.createProjectElement)(title, lastProjectIndex );
    projectButton.addEventListener('click', () => {
        if (main.childElementCount > 1){
            main.getElementsByClassName('project-div')[0].remove();
        }
        main.append(newProjectView.getProjectDiv());
    });
    projectButton.click();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Jhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdFZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9WaWV3LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL05vdG9TYW5zLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tc2xhdGU6ICNmMWY1Zjk7XFxuICAgIC0tZ3JheTogI2YzZjRmNjtcXG4gICAgLS16aW5jOiAjZTRlNGU3O1xcbiAgICAtLWRhcmstc2xhdGU6ICM5NGEzYjg7XFxuICAgIC0tc3RvbmU6ICM1MjUyNWI7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RmZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjp2YXIoLS1zdG9uZSk7XFxuXFxufVxcblxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbm1haW57XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG59XFxuXFxuLnByb2plY3RzLWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIGJveC1zaGFkb3c6IDNweCAwcHggMXB4IHZhcigtLWRhcmstc2xhdGUpO1xcbn1cXG5cXG4uYmFyLWhlYWRlcixcXG4ucHJvamVjdHMtbGlzdHtcXG4gICAgbWFyZ2luOiAzMHB4IDMwcHggMjBweCAyNXB4O1xcbn1cXG5cXG4uYmFyLWhlYWRlcntcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0temluYyk7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggIzg4ODg7XFxufVxcblxcblxcblxcbi5uZXctcHJvamVjdC1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9ue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB2YXIoLS16aW5jKTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5wcm9qZWN0cy1saXN0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2xhdGUpO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgZm9udC1zaXplOiAxN3B4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZGFyay1zbGF0ZSk7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbi5zZWxlY3RlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0temluYyk7XFxufVxcblxcbi5uZXctcHJvamVjdC10ZXh0ZmllbGR7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXppbmMpIDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtdGV4dGZpZWxkOmZvY3Vze1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstc2xhdGUpO1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcblxcbi5uZXctcHJvamVjdC1idXR0b246YWN0aXZle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNsYXRlKTtcXG59XFxuXFxuLnByb2plY3QtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBtYXliZSBjZW50ZXIgdGhlIHByb2plY3Qgdmlldz8gKi9cXG4gICAgcGFkZGluZzogNzBweCA5MHB4IDkwcHggNzBweDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gICAgd2lkdGg6IGNhbGMoODAlIC0gM3B4KTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLm5ldy10b2RvLWJ1dHRvbntcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIG9yZGVyOiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcbiAgICBjb2xvcjogI2ZhZmFmYTtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMGYxNzJhO1xcbn1cXG5cXG4ubmV3LXRvZG8tYnV0dG9uOmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMTcyYTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGV7XFxuICAgIGNvbG9yOnZhcigtLXNsYXRlKTtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXNsYXRlKTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tc3RvbmUpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4udG9kby1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3RvbmUpO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIHdpZHRoOiBtYXgoNDQ1cHgsIDMwdncpO1xcbn1cXG5cXG4uY29tcGxldGVkLXRvZG97XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1zdG9uZSk7XFxufVxcblxcbi5sb3ctdG9kb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5Zjk5ZDtcXG59XFxuXFxuLm1lZGl1bS10b2Rve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmM2M3O1xcbn1cXG5cXG4uaGlnaC10b2Rve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNhNWE1O1xcbn1cXG5cXG4udG9kby1jaGVja2JveHtcXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnRvZG8tdGV4dGZpZWxkLFxcbi50b2RvLWRhdGUsXFxuLnRvZG8tc2VsZWN0e1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxufVxcblxcbi50b2RvLWRhdGV7XFxuICAgIG1pbi13aWR0aDogMjBweDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsMERBQThDO0lBQzlDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLHlDQUF5QztBQUM3Qzs7QUFFQTs7SUFFSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLCtCQUErQjtBQUNuQzs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyw0QkFBNEI7SUFDNUIsU0FBUztJQUNULDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7OztJQUdJLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1zbGF0ZTogI2YxZjVmOTtcXG4gICAgLS1ncmF5OiAjZjNmNGY2O1xcbiAgICAtLXppbmM6ICNlNGU0ZTc7XFxuICAgIC0tZGFyay1zbGF0ZTogIzk0YTNiODtcXG4gICAgLS1zdG9uZTogIzUyNTI1YjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgc3JjOiB1cmwoLi9Ob3RvU2Fucy1SZWd1bGFyLnR0ZikgZm9ybWF0KCd0ZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qe1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6dmFyKC0tc3RvbmUpO1xcblxcbn1cXG5cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5tYWlue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxufVxcblxcbi5wcm9qZWN0cy1iYXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBib3gtc2hhZG93OiAzcHggMHB4IDFweCB2YXIoLS1kYXJrLXNsYXRlKTtcXG59XFxuXFxuLmJhci1oZWFkZXIsXFxuLnByb2plY3RzLWxpc3R7XFxuICAgIG1hcmdpbjogMzBweCAzMHB4IDIwcHggMjVweDtcXG59XFxuXFxuLmJhci1oZWFkZXJ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMpO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4ICM4ODg4O1xcbn1cXG5cXG5cXG5cXG4ubmV3LXByb2plY3QtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdmFyKC0temluYyk7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNsYXRlKTtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmstc2xhdGUpO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24uc2VsZWN0ZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXppbmMpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtdGV4dGZpZWxke1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS16aW5jKSA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LXRleHRmaWVsZDpmb2N1c3tcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLXNsYXRlKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uOmFjdGl2ZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZSk7XFxufVxcblxcbi5wcm9qZWN0LWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogbWF5YmUgY2VudGVyIHRoZSBwcm9qZWN0IHZpZXc/ICovXFxuICAgIHBhZGRpbmc6IDcwcHggOTBweCA5MHB4IDcwcHg7XFxuICAgIGdhcDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgIHdpZHRoOiBjYWxjKDgwJSAtIDNweCk7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5uZXctdG9kby1idXR0b257XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICBvcmRlcjogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXG4gICAgY29sb3I6ICNmYWZhZmE7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgIzBmMTcyYTtcXG59XFxuXFxuLm5ldy10b2RvLWJ1dHRvbjphY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjE3MmE7XFxufVxcblxcbi5wcm9qZWN0LXRpdGxle1xcbiAgICBjb2xvcjp2YXIoLS1zbGF0ZSk7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1zbGF0ZSk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtLXN0b25lKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG59XFxuXFxuLnRvZG8tZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN0b25lKTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICB3aWR0aDogbWF4KDQ0NXB4LCAzMHZ3KTtcXG59XFxuXFxuLmNvbXBsZXRlZC10b2Rve1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tc3RvbmUpO1xcbn1cXG5cXG4ubG93LXRvZG97XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWY5OWQ7XFxufVxcblxcbi5tZWRpdW0tdG9kb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjNjNztcXG59XFxuXFxuLmhpZ2gtdG9kb3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYTVhNTtcXG59XFxuXFxuLnRvZG8tY2hlY2tib3h7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi50b2RvLXRleHRmaWVsZCxcXG4udG9kby1kYXRlLFxcbi50b2RvLXNlbGVjdHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXkpO1xcbn1cXG5cXG4udG9kby1kYXRle1xcbiAgICBtaW4td2lkdGg6IDIwcHg7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgdG9EbyBmcm9tIFwiLi90b0RvXCI7XG5cbmNvbnN0IHByb2plY3RzID0gW107XG5cblxuZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSl7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QodGl0bGUsW10pXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpbmRleCl7XG4gICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LDEpO1xufVxuXG5cbmZ1bmN0aW9uIGdldFByb2plY3RzKCl7XG4gICAgcmV0dXJuIHByb2plY3RzO1xufVxuXG5leHBvcnQge1xuICAgIGFkZFByb2plY3QsXG4gICAgcmVtb3ZlUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0c1xufTsiLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50V2l0aENsYXNzLCBhZGRQcm9qZWN0RG9tfSBmcm9tIFwiLi9kb21cIjtcblxuXG5jb25zdCBiYXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdkaXYnLCAncHJvamVjdHMtYmFyJyk7XG5jb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdoMicsICdiYXItaGVhZGVyJyk7XG5oZWFkZXIudGV4dENvbnRlbnQgPSAnTXkgUHJvamVjdHMnO1xuY29uc3QgcHJvamVjdHNMaXN0ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygndWwnLCAncHJvamVjdHMtbGlzdCcpO1xuXG5jb25zdCBuZXdQcm9qZWN0RGl2ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnZGl2JywgJ25ldy1wcm9qZWN0LWRpdicpO1xuY29uc3QgbmV3UHJvamVjdFRleHRGaWVsZCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2lucHV0JywgJ25ldy1wcm9qZWN0LXRleHRmaWVsZCcpO1xubmV3UHJvamVjdFRleHRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0ZmllbGQnKTtcbm5ld1Byb2plY3RUZXh0RmllbGQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ05hbWUnKTtcbmNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdidXR0b24nLCAnbmV3LXByb2plY3QtYnV0dG9uJyk7XG5uZXdQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJysgTmV3IFByb2plY3QnO1xubmV3UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5uZXdQcm9qZWN0RGl2LmFwcGVuZChuZXdQcm9qZWN0VGV4dEZpZWxkKTtcbm5ld1Byb2plY3REaXYuYXBwZW5kKG5ld1Byb2plY3RCdXR0b24pO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RWxlbWVudCh0aXRsZSwgaW5kZXgpe1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdidXR0b24nLCAncHJvamVjdC1idXR0b24nKTtcbiAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2luZGV4JyxpbmRleCk7IFxuICAgIG5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdGVkJylbMF07XG4gICAgICAgIGlmIChwcmV2ICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBwcmV2LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgfSlcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kKG5ld1Byb2plY3QpO1xuICAgIG5ld1Byb2plY3QuY2xpY2soKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cblxuXG5mdW5jdGlvbiBsaXN0UHJvamVjdChwcm9qZWN0KXtcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kKHByb2plY3QpO1xufVxuXG5uZXdQcm9qZWN0VGV4dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpPT57XG4gICAgaWYgKGUuY29kZSA9PSAnRW50ZXInKXtcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi5jbGljaygpO1xuICAgIH1cbn0pXG5cbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG5ld1Byb2plY3RUZXh0RmllbGQudmFsdWUgPT0gJycpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGFkZFByb2plY3REb20obmV3UHJvamVjdFRleHRGaWVsZC52YWx1ZSk7XG4gICAgbmV3UHJvamVjdFRleHRGaWVsZC52YWx1ZSA9ICcnO1xufSlcblxuYmFyLmFwcGVuZChoZWFkZXIpO1xuYmFyLmFwcGVuZChwcm9qZWN0c0xpc3QpO1xuYmFyLmFwcGVuZChuZXdQcm9qZWN0RGl2KTtcblxuZXhwb3J0IGRlZmF1bHQgYmFyO1xuXG5leHBvcnQge1xuICAgIGNyZWF0ZVByb2plY3RFbGVtZW50LFxuICAgIGxpc3RQcm9qZWN0XG59IiwiXG5pbXBvcnQgeyBib2R5IH0gZnJvbSBcIi5cIjtcblxuaW1wb3J0IGJhciBmcm9tIFwiLi9iYXJcIjtcbmltcG9ydCB7Y3JlYXRlUHJvamVjdEVsZW1lbnR9IGZyb20gXCIuL2JhclwiO1xuXG5pbXBvcnQgcHJvamVjdFZpZXcgZnJvbSBcIi4vcHJvamVjdFZpZXdcIjtcblxuaW1wb3J0IHsgZ2V0UHJvamVjdHMsIGFkZFByb2plY3R9IGZyb20gXCIuL2FwcFwiO1xuXG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBwcm9qZWN0Vmlld3MgPSBbXTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3ModGFnLCBlbGVtZW50Q2xhc3Mpe1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnRDbGFzcyk7XG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkKCl7XG4gICAgbWFpbi5hcHBlbmQoYmFyKTtcbiAgICBib2R5LmFwcGVuZChtYWluKTtcbiAgICBhZGRQcm9qZWN0RG9tKCdEZWZhdWx0Jyk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3REb20odGl0bGUpe1xuICAgIGNvbnN0IG5ld1Byb2plY3RWaWV3ID0gcHJvamVjdFZpZXcoYWRkUHJvamVjdCh0aXRsZSkpO1xuICAgIHByb2plY3RWaWV3cy5wdXNoKG5ld1Byb2plY3RWaWV3KTtcbiAgICBjb25zdCBsYXN0UHJvamVjdEluZGV4ID0gZ2V0UHJvamVjdHMoKS5sZW5ndGg7XG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGNyZWF0ZVByb2plY3RFbGVtZW50KHRpdGxlLCBsYXN0UHJvamVjdEluZGV4ICk7XG4gICAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKG1haW4uY2hpbGRFbGVtZW50Q291bnQgPiAxKXtcbiAgICAgICAgICAgIG1haW4uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdC1kaXYnKVswXS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBtYWluLmFwcGVuZChuZXdQcm9qZWN0Vmlldy5nZXRQcm9qZWN0RGl2KCkpO1xuICAgIH0pO1xuICAgIHByb2plY3RCdXR0b24uY2xpY2soKTtcbn1cblxuXG5leHBvcnQge2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MsIGJ1aWxkLCBhZGRQcm9qZWN0RG9tfSIsImltcG9ydCB7IGJ1aWxkIH0gZnJvbSBcIi4vZG9tXCI7XG5cblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbmJ1aWxkKCk7XG5cbmV4cG9ydCB7Ym9keX07IiwiaW1wb3J0IHRvRG8gZnJvbSBcIi4vdG9Eb1wiO1xuXG5jb25zdCBwcm9qZWN0ID0gKHRpdGxlLCB0b0RvcykgPT57XG4gICAgY29uc3QgcHJvdG8gPSB7XG4gICAgICAgIHR5cGUgOiAnUHJvamVjdCcsXG5cbiAgICAgICAgYWRkVG9EbyA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCBuZXdUb0RvID0gdG9EbygnJywnJywnJywnJyxmYWxzZSk7XG4gICAgICAgICAgICB0b0Rvcy5wdXNoKG5ld1RvRG8pO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1RvRG87XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlVG9EbyA6IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgICAgIHRvRG9zLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRUaXRsZSA6ICgpID0+IHRpdGxlLFxuICAgICAgICBnZXRUb0RvcyA6ICgpID0+IHRvRG9zLFxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocHJvdG8pLCB7dGl0bGUsIHRvRG9zfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudFdpdGhDbGFzcyB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgY3JlYWV0VG9Eb1ZpZXcgfSBmcm9tIFwiLi90b2RvVmlld1wiO1xuXG5jb25zdCBwcm9qZWN0VmlldyA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICdwcm9qZWN0LWRpdicpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2gyJywgJ3Byb2plY3QtdGl0bGUnKTtcbiAgICBjb25zdCBhZGRUb0RvQnV0dG9uID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnYnV0dG9uJywgJ25ldy10b2RvLWJ1dHRvbicpO1xuICAgIGFkZFRvRG9CdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnaW5wdXQnKTtcbiAgICBhZGRUb0RvQnV0dG9uLnRleHRDb250ZW50ID0gXCIrXCI7XG4gICAgYWRkVG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICBjb25zdCBuZXdUb0RvID0gcHJvamVjdC5hZGRUb0RvKCk7XG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kKGNyZWFldFRvRG9WaWV3KG5ld1RvRG8sIHByb2plY3QuZ2V0VG9Eb3MoKS5sZW5ndGgpKTtcblxuICAgIH0pXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXRUaXRsZSgpO1xuICAgIHByb2plY3REaXYuYXBwZW5kKHByb2plY3RUaXRsZSk7XG4gICAgcHJvamVjdERpdi5hcHBlbmQoYWRkVG9Eb0J1dHRvbik7XG5cblxuICAgIGNvbnN0IGdldFByb2plY3REaXYgPSAoKSA9PiBwcm9qZWN0RGl2O1xuXG4gICAgcmV0dXJuIHtnZXRQcm9qZWN0RGl2fVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0VmlldztcbiIsIlxuY29uc3QgdG9EbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpID0+IHtcbiAgICBjb25zdCBwcm90byA9IHtcbiAgICAgICAgdHlwZTogJ1RvRG8nLFxuXG4gICAgICAgIGdldFRpdGxlIDogKCkgPT4gdGl0bGUsXG4gICAgICAgIGdldERlc2NyaXB0aW9uOiAoKSA9PiBkZXNjcmlwdGlvbixcbiAgICAgICAgZ2V0RHVlRGF0ZTogKCkgPT4gZHVlRGF0ZSxcbiAgICAgICAgZ2V0UHJpb3JpdHk6ICgpID0+IHByaW9yaXR5LFxuICAgICAgICBnZXRTdGF0dXM6ICgpID0+IHN0YXR1cyxcblxuICAgICAgICBzZXREdWVEYXRlOiAobmV3RGF0ZSkgPT4gZHVlRGF0ZSA9IG5ld0RhdGUsXG4gICAgICAgIHNldFN0YXR1czogKCkgPT4ge1xuICAgICAgICAgICAgc3RhdHVzID0gIXN0YXR1c1xuICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VGl0bGUgOiAobmV3VGl0bGUpID0+IHRpdGxlID0gbmV3VGl0bGUsXG4gICAgICAgIHNldFByaW9yaXR5OiAobmV3UHJpb3JpdHkpID0+IHByaW9yaXR5ID0gbmV3UHJpb3JpdHksXG5cblxuXG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocHJvdG8pLCB7XG4gICAgICAgIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1c30pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b0RvOyIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MgfSBmcm9tIFwiLi9kb21cIjtcblxuXG5mdW5jdGlvbiBjcmVhZXRUb0RvVmlldyh0b2RvLCBpbmRleCl7XG4gICAgY29uc3QgdG9kb0RpdiA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2RpdicsICd0b2RvLWRpdicpO1xuICAgIHRvZG9EaXYuc2V0QXR0cmlidXRlKCd0b2Rkby1pbmRleCcsIGluZGV4KTtcbiAgICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2lucHV0JywgJ3RvZG8tY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdjaGVja2JveCcpO1xuICAgIGNvbnN0IHRleHRmaWVsZCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3MoJ2lucHV0JywndG9kby10ZXh0ZmllbGQnKTtcbiAgICB0ZXh0ZmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dGZpZWxkJylcbiAgICBjb25zdCBkYXRlID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzcygnaW5wdXQnLCd0b2RvLWRhdGUnKTtcbiAgICBkYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgY29uc3QgZGF0ZU9iamVjdCA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZUFzU3RyaW5nID0gYCR7ZGF0ZU9iamVjdC5nZXRGdWxsWWVhcigpfS0ke2RhdGVPYmplY3QuZ2V0TW9udGgoKX0tJHtkYXRlT2JqZWN0LmdldERhdGUoKX1gO1xuICAgIGRhdGUudmFsdWUgPSBkYXRlQXNTdHJpbmc7XG4gICAgdG9kby5zZXREdWVEYXRlKGRhdGVBc1N0cmluZyk7XG4gICAgY29uc3Qgc2VsZWN0ID0gY3JlYXRlU2VsZWN0UHJpb3JpdHkodG9kbyx0b2RvRGl2KTtcbiBcbiAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIHRvZG8uc2V0U3RhdHVzKCk7XG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHRvZG8uZ2V0U3RhdHVzKCk7XG4gICAgICAgIGRhdGUuZGlzYWJsZWQgPSBzdGF0dXM7XG4gICAgICAgIHRleHRmaWVsZC5kaXNhYmxlZCA9IHN0YXR1cztcbiAgICAgICAgc2VsZWN0LmRpc2FibGVkID0gc3RhdHVzO1xuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZC10b2RvJyk7XG4gICAgfSk7XG5cbiAgICB0ZXh0ZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk9PiB7XG4gICAgICAgIHRvZG8uc2V0VGl0bGUodGV4dGZpZWxkLnZhbHVlKTtcbiAgICB9KTtcblxuICAgIGRhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICB0b2RvLnNldER1ZURhdGUoZGF0ZS52YWx1ZSk7XG4gICAgfSk7XG5cbiAgIFxuICAgIHRvZG9EaXYuYXBwZW5kKGNoZWNrYm94KTtcbiAgICB0b2RvRGl2LmFwcGVuZCh0ZXh0ZmllbGQpO1xuICAgIHRvZG9EaXYuYXBwZW5kKGRhdGUpO1xuICAgIHRvZG9EaXYuYXBwZW5kKHNlbGVjdCk7XG5cbiAgICByZXR1cm4gdG9kb0RpdjtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RQcmlvcml0eSh0b2RvLCB0b2RvRGl2KXtcbiAgICBjb25zdCBzZWxlY3QgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzKCdzZWxlY3QnLCd0b2RvLXNlbGVjdCcpO1xuICAgIHNlbGVjdC5hcHBlbmQoY3JlYXRlT3B0aW9uRWxlbWVudCgnLS0gc2VsZWN0IHByaW9yaXR5IC0tJywgJycpKTtcbiAgICBzZWxlY3QuYXBwZW5kKGNyZWF0ZU9wdGlvbkVsZW1lbnQoJ0xvdycsICdsb3cnKSk7XG4gICAgc2VsZWN0LmFwcGVuZChjcmVhdGVPcHRpb25FbGVtZW50KCdNZWRpdW0nLCAnbWVkaXVtJykpO1xuICAgIHNlbGVjdC5hcHBlbmQoY3JlYXRlT3B0aW9uRWxlbWVudCgnSGlnaCcsICdoaWdoJykpO1xuXG4gICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpPT57XG4gICAgICAgIC8vIGNvdWxkIGJlIGltcHJvdmVkXG4gICAgICAgIGNvbnN0IG9sZENsYXNzID0gYCR7dG9kby5nZXRQcmlvcml0eSgpfS10b2RvYDtcbiAgICAgICAgaWYgKG9sZENsYXNzICE9ICcnKSB7XG4gICAgICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5yZW1vdmUob2xkQ2xhc3MpO1xuICAgICAgICB9XG4gICAgICAgIHRvZG8uc2V0UHJpb3JpdHkoc2VsZWN0LnZhbHVlKTtcbiAgICAgICAgY29uc3QgbmV3Q2xhc3MgPSBgJHt0b2RvLmdldFByaW9yaXR5KCl9LXRvZG9gO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvLmdldFByaW9yaXR5KCkpO1xuICAgICAgICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlbGVjdDtcbiAgICBcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uRWxlbWVudCh0ZXh0LCB2YWx1ZSl7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gdmFsdWU7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gb3B0aW9uO1xufVxuXG5leHBvcnQge2NyZWFldFRvRG9WaWV3fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=