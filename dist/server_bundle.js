/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/exportHelper.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/exportHelper.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n// runtime helper for setting properties on components\n// in a tree-shakable way\nexports[\"default\"] = function (sfc, props) {\n  var target = sfc.__vccOpts || sfc;\n  var _iterator = _createForOfIteratorHelper(props),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var _step$value = _slicedToArray(_step.value, 2),\n        key = _step$value[0],\n        val = _step$value[1];\n      target[key] = val;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  return target;\n};\n\n//# sourceURL=webpack://ssr/./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/exportHelper.js?");

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/client/App.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/client/App.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  __name: 'App',\n  setup: function setup(__props, _ref) {\n    var expose = _ref.expose;\n    expose();\n    var counter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(999);\n    function addCounter() {\n      counter.value += 1;\n    }\n    var __returned__ = {\n      counter: counter,\n      addCounter: addCounter,\n      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n});\n\n//# sourceURL=webpack://ssr/./src/client/App.vue?./node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B5%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/client/App.vue?vue&type=template&id=7c9b0854":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/client/App.vue?vue&type=template&id=7c9b0854 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ssrRender\": () => (/* binding */ ssrRender)\n/* harmony export */ });\n/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/server-renderer */ \"vue/server-renderer\");\n/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {\n  _push(\"<!--[--><div>\".concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrInterpolate)($setup.counter), \"</div><button>+1</button><a href=\\\"www.baidu.com\\\"></a><!--]-->\"));\n}\n\n//# sourceURL=webpack://ssr/./src/client/App.vue?./node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B5%5D.use%5B0%5D");

/***/ }),

/***/ "./src/client/main.js":
/*!****************************!*\
  !*** ./src/client/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createApp)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ \"./src/client/App.vue\");\n\n\n\n// 通过函数返回app 避免跨请求状态的污染 每次请求返回一个新的app \nfunction createApp() {\n  var app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSSRApp)(_App__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  return app;\n}\n\n//# sourceURL=webpack://ssr/./src/client/main.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/main */ \"./src/client/main.js\");\n/* harmony import */ var _vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/server-renderer */ \"@vue/server-renderer\");\n/* harmony import */ var _vue_server_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar express = __webpack_require__(/*! express */ \"express\");\nvar server = express();\nserver.get(\"/\", /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {\n    var app, html;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          app = (0,_client_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n          _context.next = 3;\n          return (0,_vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.renderToString)(app);\n        case 3:\n          html = _context.sent;\n          console.log(html);\n          res.send(\"\\n    <!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Document</title>\\n</head>\\n<body>\\n    <div id='app'>\\n        \".concat(html, \"\\n    </div>\\n</body>\\n</html>\\n\"));\n        case 6:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nserver.listen(3000, function () {\n  console.log(\"server start\");\n});\n\n//# sourceURL=webpack://ssr/./src/server/index.js?");

/***/ }),

/***/ "./src/client/App.vue":
/*!****************************!*\
  !*** ./src/client/App.vue ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_7c9b0854__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7c9b0854 */ \"./src/client/App.vue?vue&type=template&id=7c9b0854\");\n/* harmony import */ var _App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&setup=true&lang=js */ \"./src/client/App.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var D_2023_github_ssr_node_modules_pnpm_vue_loader_17_0_1_vue_3_2_45_webpack_5_75_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,D_2023_github_ssr_node_modules_pnpm_vue_loader_17_0_1_vue_3_2_45_webpack_5_75_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['ssrRender',_App_vue_vue_type_template_id_7c9b0854__WEBPACK_IMPORTED_MODULE_0__.ssrRender],['__file',\"src/client/App.vue\"]])\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ssr/./src/client/App.vue?");

/***/ }),

/***/ "./src/client/App.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************!*\
  !*** ./src/client/App.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_pnpm_babel_loader_9_1_2_la66t7xldg4uecmyawueag5wkm_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_pnpm_vue_loader_17_0_1_vue_3_2_45_webpack_5_75_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_pnpm_babel_loader_9_1_2_la66t7xldg4uecmyawueag5wkm_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_pnpm_vue_loader_17_0_1_vue_3_2_45_webpack_5_75_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_App_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1!../../node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./App.vue?vue&type=script&setup=true&lang=js */ \"./node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/client/App.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack://ssr/./src/client/App.vue?");

/***/ }),

/***/ "./src/client/App.vue?vue&type=template&id=7c9b0854":
/*!**********************************************************!*\
  !*** ./src/client/App.vue?vue&type=template&id=7c9b0854 ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ssrRender\": () => (/* reexport safe */ _node_modules_pnpm_babel_loader_9_1_2_la66t7xldg4uecmyawueag5wkm_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_pnpm_vue_loader_17_0_1_vue_3_2_45_webpack_5_75_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_17_0_1_vue_3_2_45_webpack_5_75_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_App_vue_vue_type_template_id_7c9b0854__WEBPACK_IMPORTED_MODULE_0__.ssrRender)\n/* harmony export */ });\n/* harmony import */ var _node_modules_pnpm_babel_loader_9_1_2_la66t7xldg4uecmyawueag5wkm_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_node_modules_pnpm_vue_loader_17_0_1_vue_3_2_45_webpack_5_75_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_pnpm_vue_loader_17_0_1_vue_3_2_45_webpack_5_75_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_5_use_0_App_vue_vue_type_template_id_7c9b0854__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1!../../node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./App.vue?vue&type=template&id=7c9b0854 */ \"./node_modules/.pnpm/babel-loader@9.1.2_la66t7xldg4uecmyawueag5wkm/node_modules/babel-loader/lib/index.js??clonedRuleSet-1!./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/vue-loader@17.0.1_vue@3.2.45+webpack@5.75.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[5].use[0]!./src/client/App.vue?vue&type=template&id=7c9b0854\");\n\n\n//# sourceURL=webpack://ssr/./src/client/App.vue?");

/***/ }),

/***/ "@vue/server-renderer":
/*!***************************************!*\
  !*** external "@vue/server-renderer" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@vue/server-renderer");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("vue");

/***/ }),

/***/ "vue/server-renderer":
/*!**************************************!*\
  !*** external "vue/server-renderer" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("vue/server-renderer");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;