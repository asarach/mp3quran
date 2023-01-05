/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dplayer/dist/DPlayer.min.js":
/*!**************************************************!*\
  !*** ./node_modules/dplayer/dist/DPlayer.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s=57)}([function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=a(6),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function l(e){return void 0===e}function s(e){return null!==e&&"object"===n(e)}function d(e){return"[object Function]"===o.call(e)}function p(e,t){if(null!=e)if("object"!==n(e)&&(e=[e]),i(e))for(var a=0,r=e.length;a<r;a++)t.call(null,e[a],a,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:l,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:d,isStream:function(e){return s(e)&&d(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:p,merge:function e(){var t={};function a(a,r){"object"===n(t[r])&&"object"===n(a)?t[r]=e(t[r],a):t[r]=a}for(var r=0,o=arguments.length;r<o;r++)p(arguments[r],a);return t},deepMerge:function e(){var t={};function a(a,r){"object"===n(t[r])&&"object"===n(a)?t[r]=e(t[r],a):"object"===n(a)?t[r]=e({},a):t[r]=a}for(var r=0,o=arguments.length;r<o;r++)p(arguments[r],a);return t},extend:function(e,t,a){return p(t,(function(t,n){e[n]=a&&"function"==typeof t?r(t,a):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,a){var n=a(14);e.exports=function(e){"use strict";var t="",a=(e=e||{}).enableSubtitle,r=e.subtitle,o=e.current,i=e.pic,l=n.$escape,s=e.screenshot,d=e.preload,p=e.url;a=r&&"webvtt"===r.type;return t+='\n<video\n    class="dplayer-video ',o&&(t+="dplayer-video-current"),t+='"\n    webkit-playsinline\n    playsinline\n    ',i&&(t+='poster="',t+=l(i),t+='"'),t+="\n    ",(s||a)&&(t+='crossorigin="anonymous"'),t+="\n    ",d&&(t+='preload="',t+=l(d),t+='"'),t+="\n    ",p&&(t+='src="',t+=l(p),t+='"'),t+="\n    >\n    ",a&&(t+='\n    <track kind="metadata" default src="',t+=l(r.url),t+='"></track>\n    '),t+="\n</video>"}},function(e,t,a){e.exports=a(40)},function(e,t,a){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=function(e,t){var a=e[1]||"",n=e[3];if(!n)return a;if(t&&"function"==typeof btoa){var r=(i=n,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),o=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[a].concat(o).concat([r]).join("\n")}var i,l,s;return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);n&&r[s[0]]||(a&&(s[2]?s[2]="".concat(a," and ").concat(s[2]):s[2]=a),t.push(s))}},t}},function(e,t){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":a(window))&&(n=window)}e.exports=n},function(e,t){var a,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(a===setTimeout)return setTimeout(e,0);if((a===o||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:o}catch(e){a=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var s,d=[],p=!1,c=-1;function u(){p&&s&&(p=!1,s.length?d=s.concat(d):c=-1,d.length&&y())}function y(){if(!p){var e=l(u);p=!0;for(var t=d.length;t;){for(s=d,d=[];++c<t;)s&&s[c].run();c=-1,t=d.length}s=null,p=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];d.push(new m(e,t)),1!==d.length||p||l(y)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,a){"use strict";e.exports=function(e,t){return function(){for(var a=new Array(arguments.length),n=0;n<a.length;n++)a[n]=arguments[n];return e.apply(t,a)}}},function(e,t,a){"use strict";var n=a(0);function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,a){if(!t)return e;var o;if(a)o=a(t);else if(n.isURLSearchParams(t))o=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))})))})),o=i.join("&")}if(o){var l=e.indexOf("#");-1!==l&&(e=e.slice(0,l)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},function(e,t,a){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,a){"use strict";(function(t){var n=a(0),r=a(45),o={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var l,s={adapter:("undefined"!=typeof XMLHttpRequest?l=a(10):void 0!==t&&"[object process]"===Object.prototype.toString.call(t)&&(l=a(10)),l),transformRequest:[function(e,t){return r(t,"Accept"),r(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){s.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){s.headers[e]=n.merge(o)})),e.exports=s}).call(this,a(5))},function(e,t,a){"use strict";var n=a(0),r=a(46),o=a(7),i=a(48),l=a(51),s=a(52),d=a(11);e.exports=function(e){return new Promise((function(t,p){var c=e.data,u=e.headers;n.isFormData(c)&&delete u["Content-Type"];var y=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password||"";u.Authorization="Basic "+btoa(m+":"+h)}var f=i(e.baseURL,e.url);if(y.open(e.method.toUpperCase(),o(f,e.params,e.paramsSerializer),!0),y.timeout=e.timeout,y.onreadystatechange=function(){if(y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))){var a="getAllResponseHeaders"in y?l(y.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:a,config:e,request:y};r(t,p,n),y=null}},y.onabort=function(){y&&(p(d("Request aborted",e,"ECONNABORTED",y)),y=null)},y.onerror=function(){p(d("Network Error",e,null,y)),y=null},y.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),p(d(t,e,"ECONNABORTED",y)),y=null},n.isStandardBrowserEnv()){var b=a(53),v=(e.withCredentials||s(f))&&e.xsrfCookieName?b.read(e.xsrfCookieName):void 0;v&&(u[e.xsrfHeaderName]=v)}if("setRequestHeader"in y&&n.forEach(u,(function(e,t){void 0===c&&"content-type"===t.toLowerCase()?delete u[t]:y.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(y.withCredentials=!!e.withCredentials),e.responseType)try{y.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&y.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){y&&(y.abort(),p(e),y=null)})),void 0===c&&(c=null),y.send(c)}))}},function(e,t,a){"use strict";var n=a(47);e.exports=function(e,t,a,r,o){var i=new Error(e);return n(i,t,a,r,o)}},function(e,t,a){"use strict";var n=a(0);e.exports=function(e,t){t=t||{};var a={},r=["url","method","params","data"],o=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(r,(function(e){void 0!==t[e]&&(a[e]=t[e])})),n.forEach(o,(function(r){n.isObject(t[r])?a[r]=n.deepMerge(e[r],t[r]):void 0!==t[r]?a[r]=t[r]:n.isObject(e[r])?a[r]=n.deepMerge(e[r]):void 0!==e[r]&&(a[r]=e[r])})),n.forEach(i,(function(n){void 0!==t[n]?a[n]=t[n]:void 0!==e[n]&&(a[n]=e[n])}));var l=r.concat(o).concat(i),s=Object.keys(t).filter((function(e){return-1===l.indexOf(e)}));return n.forEach(s,(function(n){void 0!==t[n]?a[n]=t[n]:void 0!==e[n]&&(a[n]=e[n])})),a}},function(e,t,a){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,a){"use strict";e.exports=a(56)},function(e,t,a){"use strict";(function(e){var n=a(16);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=setTimeout;function i(e){return Boolean(e&&void 0!==e.length)}function l(){}function s(e){if(!(this instanceof s))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],m(e,this)}function d(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,s._immediateFn((function(){var a=1===e._state?t.onFulfilled:t.onRejected;if(null!==a){var n;try{n=a(e._value)}catch(e){return void c(t.promise,e)}p(t.promise,n)}else(1===e._state?p:c)(t.promise,e._value)}))):e._deferreds.push(t)}function p(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"===r(t)||"function"==typeof t)){var a=t.then;if(t instanceof s)return e._state=3,e._value=t,void u(e);if("function"==typeof a)return void m((n=a,o=t,function(){n.apply(o,arguments)}),e)}e._state=1,e._value=t,u(e)}catch(t){c(e,t)}var n,o}function c(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&s._immediateFn((function(){e._handled||s._unhandledRejectionFn(e._value)}));for(var t=0,a=e._deferreds.length;t<a;t++)d(e,e._deferreds[t]);e._deferreds=null}function y(e,t,a){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=a}function m(e,t){var a=!1;try{e((function(e){a||(a=!0,p(t,e))}),(function(e){a||(a=!0,c(t,e))}))}catch(e){if(a)return;a=!0,c(t,e)}}s.prototype.catch=function(e){return this.then(null,e)},s.prototype.then=function(e,t){var a=new this.constructor(l);return d(this,new y(e,t,a)),a},s.prototype.finally=n.a,s.all=function(e){return new s((function(t,a){if(!i(e))return a(new TypeError("Promise.all accepts an array"));var n=Array.prototype.slice.call(e);if(0===n.length)return t([]);var o=n.length;function l(e,i){try{if(i&&("object"===r(i)||"function"==typeof i)){var s=i.then;if("function"==typeof s)return void s.call(i,(function(t){l(e,t)}),a)}n[e]=i,0==--o&&t(n)}catch(e){a(e)}}for(var s=0;s<n.length;s++)l(s,n[s])}))},s.resolve=function(e){return e&&"object"===r(e)&&e.constructor===s?e:new s((function(t){t(e)}))},s.reject=function(e){return new s((function(t,a){a(e)}))},s.race=function(e){return new s((function(t,a){if(!i(e))return a(new TypeError("Promise.race accepts an array"));for(var n=0,r=e.length;n<r;n++)s.resolve(e[n]).then(t,a)}))},s._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){o(e,0)},s._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=s}).call(this,a(38).setImmediate)},function(e,t,a){"use strict";t.a=function(e){var t=this.constructor;return this.then((function(a){return t.resolve(e()).then((function(){return a}))}),(function(a){return t.resolve(e()).then((function(){return t.reject(a)}))}))}},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},function(e,t){e.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},function(e,t,a){var n=a(14);e.exports=function(e){"use strict";e=e||{};var t="",r=(arguments[1],function(e){return t+=e}),o=e.video,i=e.options,l=n.$escape,s=e.tran,d=e.icons,p=e.index,c=n.$each;e.$value,e.$index;return t+='<div class="dplayer-mask"></div>\n<div class="dplayer-video-wrap">\n    ',r(a(1)(o)),t+="\n    ",i.logo&&(t+='\n    <div class="dplayer-logo">\n        <img src="',t+=l(i.logo),t+='">\n    </div>\n    '),t+='\n    <div class="dplayer-danmaku"',i.danmaku&&i.danmaku.bottm&&(t+=' style="margin-bottom:',t+=l(i.danmaku.bottm),t+='"'),t+='>\n        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>\n    </div>\n    <div class="dplayer-subtitle"></div>\n    <div class="dplayer-bezel">\n        <span class="dplayer-bezel-icon"></span>\n        ',i.danmaku&&(t+='\n        <span class="dplayer-danloading">',t+=l(s("Danmaku is loading")),t+="</span>\n        "),t+='\n        <span class="diplayer-loading-icon">',t+=d.loading,t+='</span>\n    </div>\n</div>\n<div class="dplayer-controller-mask"></div>\n<div class="dplayer-controller">\n    <div class="dplayer-icons dplayer-comment-box">\n        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="',t+=l(s("Setting")),t+='" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',t+=d.pallette,t+='</span>\n        </button>\n        <div class="dplayer-comment-setting-box">\n            <div class="dplayer-comment-setting-color">\n                <div class="dplayer-comment-setting-title">',t+=l(s("Set danmaku color")),t+='</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',t+=l(p),t+='" value="#fff" checked>\n                    <span style="background: #fff;"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',t+=l(p),t+='" value="#e54256">\n                    <span style="background: #e54256"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',t+=l(p),t+='" value="#ffe133">\n                    <span style="background: #ffe133"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',t+=l(p),t+='" value="#64DD17">\n                    <span style="background: #64DD17"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',t+=l(p),t+='" value="#39ccff">\n                    <span style="background: #39ccff"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',t+=l(p),t+='" value="#D500F9">\n                    <span style="background: #D500F9"></span>\n                </label>\n            </div>\n            <div class="dplayer-comment-setting-type">\n                <div class="dplayer-comment-setting-title">',t+=l(s("Set danmaku type")),t+='</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-',t+=l(p),t+='" value="1">\n                    <span>',t+=l(s("Top")),t+='</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-',t+=l(p),t+='" value="0" checked>\n                    <span>',t+=l(s("Rolling")),t+='</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-',t+=l(p),t+='" value="2">\n                    <span>',t+=l(s("Bottom")),t+='</span>\n                </label>\n            </div>\n        </div>\n        <input class="dplayer-comment-input" type="text" placeholder="',t+=l(s("Input danmaku, hit Enter")),t+='" maxlength="30">\n        <button class="dplayer-icon dplayer-send-icon" data-balloon="',t+=l(s("Send")),t+='" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',t+=d.send,t+='</span>\n        </button>\n    </div>\n    <div class="dplayer-icons dplayer-icons-left">\n        <button class="dplayer-icon dplayer-play-icon">\n            <span class="dplayer-icon-content">',t+=d.play,t+='</span>\n        </button>\n        <div class="dplayer-volume">\n            <button class="dplayer-icon dplayer-volume-icon">\n                <span class="dplayer-icon-content">',t+=d.volumeDown,t+='</span>\n            </button>\n            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">\n                <div class="dplayer-volume-bar">\n                    <div class="dplayer-volume-bar-inner" style="background: ',t+=l(i.theme),t+=';">\n                        <span class="dplayer-thumb" style="background: ',t+=l(i.theme),t+='"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <span class="dplayer-time">\n            <span class="dplayer-ptime">0:00</span> /\n            <span class="dplayer-dtime">0:00</span>\n        </span>\n        ',i.live&&(t+='\n        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: ',t+=l(i.theme),t+=';"></span>',t+=l(s("Live")),t+="</span>\n        "),t+='\n    </div>\n    <div class="dplayer-icons dplayer-icons-right">\n        ',i.video.quality&&(t+='\n        <div class="dplayer-quality">\n            <button class="dplayer-icon dplayer-quality-icon">',t+=l(i.video.quality[i.video.defaultQuality].name),t+='</button>\n            <div class="dplayer-quality-mask">\n                <div class="dplayer-quality-list">\n                ',c(i.video.quality,(function(e,a){t+='\n                    <div class="dplayer-quality-item" data-index="',t+=l(a),t+='">',t+=l(e.name),t+="</div>\n                "})),t+="\n                </div>\n            </div>\n        </div>\n        "),t+="\n        ",i.screenshot&&(t+='\n        <div class="dplayer-icon dplayer-camera-icon" data-balloon="',t+=l(s("Screenshot")),t+='" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',t+=d.camera,t+="</span>\n        </div>\n        "),t+='\n        <div class="dplayer-comment">\n            <button class="dplayer-icon dplayer-comment-icon" data-balloon="',t+=l(s("Send danmaku")),t+='" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',t+=d.comment,t+="</span>\n            </button>\n        </div>\n        ",i.subtitle&&(t+='\n        <div class="dplayer-subtitle-btn">\n            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="',t+=l(s("Hide subtitle")),t+='" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',t+=d.subtitle,t+="</span>\n            </button>\n        </div>\n        "),t+='\n        <div class="dplayer-setting">\n            <button class="dplayer-icon dplayer-setting-icon" data-balloon="',t+=l(s("Setting")),t+='" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',t+=d.setting,t+='</span>\n            </button>\n            <div class="dplayer-setting-box">\n                <div class="dplayer-setting-origin-panel">\n                    <div class="dplayer-setting-item dplayer-setting-speed">\n                        <span class="dplayer-label">',t+=l(s("Speed")),t+='</span>\n                        <div class="dplayer-toggle">',t+=d.right,t+='</div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-loop">\n                        <span class="dplayer-label">',t+=l(s("Loop")),t+='</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">\n                            <label for="dplayer-toggle"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-showdan">\n                        <span class="dplayer-label">',t+=l(s("Show danmaku")),t+='</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">\n                            <label for="dplayer-toggle-dan"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danunlimit">\n                        <span class="dplayer-label">',t+=l(s("Unlimited danmaku")),t+='</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">\n                            <label for="dplayer-toggle-danunlimit"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danmaku">\n                        <span class="dplayer-label">',t+=l(s("Opacity for danmaku")),t+='</span>\n                        <div class="dplayer-danmaku-bar-wrap">\n                            <div class="dplayer-danmaku-bar">\n                                <div class="dplayer-danmaku-bar-inner">\n                                    <span class="dplayer-thumb"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="dplayer-setting-speed-panel">\n                    <div class="dplayer-setting-speed-item" data-speed="0.5">\n                        <span class="dplayer-label">0.5</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="0.75">\n                        <span class="dplayer-label">0.75</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1">\n                        <span class="dplayer-label">',t+=l(s("Normal")),t+='</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1.25">\n                        <span class="dplayer-label">1.25</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1.5">\n                        <span class="dplayer-label">1.5</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="2">\n                        <span class="dplayer-label">2</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="dplayer-full">\n            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="',t+=l(s("Web full screen")),t+='" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',t+=d.fullWeb,t+='</span>\n            </button>\n            <button class="dplayer-icon dplayer-full-icon" data-balloon="',t+=l(s("Full screen")),t+='" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',t+=d.full,t+='</span>\n            </button>\n        </div>\n    </div>\n    <div class="dplayer-bar-wrap">\n        <div class="dplayer-bar-time hidden">00:00</div>\n        <div class="dplayer-bar-preview"></div>\n        <div class="dplayer-bar">\n            <div class="dplayer-loaded" style="width: 0;"></div>\n            <div class="dplayer-played" style="width: 0; background: ',t+=l(i.theme),t+='">\n                <span class="dplayer-thumb" style="background: ',t+=l(i.theme),t+='"></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="dplayer-info-panel dplayer-info-panel-hide">\n    <div class="dplayer-info-panel-close">[x]</div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">\n        <span class="dplayer-info-panel-item-title">Player version</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">\n        <span class="dplayer-info-panel-item-title">Player FPS</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">\n        <span class="dplayer-info-panel-item-title">Video type</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">\n        <span class="dplayer-info-panel-item-title">Video url</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">\n        <span class="dplayer-info-panel-item-title">Video resolution</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">\n        <span class="dplayer-info-panel-item-title">Video duration</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    ',i.danmaku&&(t+='\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">\n        <span class="dplayer-info-panel-item-title">Danamku id</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">\n        <span class="dplayer-info-panel-item-title">Danamku api</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">\n        <span class="dplayer-info-panel-item-title">Danamku amount</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    '),t+='\n</div>\n<div class="dplayer-menu">\n    ',c(i.contextmenu,(function(e,a){t+='\n        <div class="dplayer-menu-item">\n            <a',e.link&&(t+=' target="_blank"'),t+=' href="',t+=l(e.link||"javascript:void(0);"),t+='">',t+=l(s(e.text)),t+="</a>\n        </div>\n    "})),t+='\n</div>\n<div class="dplayer-notice"></div>\n<button class="dplayer-mobile-play">\n    ',t+=d.play,t+="\n</button>"}},function(e,t,a){var n=a(35),r=a(36);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},i=(n(r,o),r.locals?r.locals:{});e.exports=i},function(e,t,a){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},o=function(){var e={};return function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}e[t]=a}return e[t]}}(),i=[];function l(e){for(var t=-1,a=0;a<i.length;a++)if(i[a].identifier===e){t=a;break}return t}function s(e,t){for(var a={},n=[],r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var c=l(p),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==c?(i[c].references++,i[c].updater(u)):i.push({identifier:p,updater:f(u,t),references:1}),n.push(p)}return n}function d(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=a.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var p,c=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function u(e,t,a,n){var r=a?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=c(t,r);else{var o=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function y(e,t,a){var n=a.css,r=a.media,o=a.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,h=0;function f(e,t){var a,n,r;if(t.singleton){var o=h++;a=m||(m=d(t)),n=u.bind(null,a,o,!1),r=u.bind(null,a,o,!0)}else a=d(t),n=y.bind(null,a,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var a=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<a.length;n++){var r=l(a[n]);i[r].references--}for(var o=s(e,t),d=0;d<a.length;d++){var p=l(a[d]);0===i[p].references&&(i[p].updater(),i.splice(p,1))}a=o}}}},function(e,t,a){var n=a(3),r=a(37);(t=n(!1)).i(r),t.push([e.i,'@-webkit-keyframes my-face{2%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}4%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}6%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}8%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}10%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}12%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}14%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}16%{-webkit-transform:translateY(-.5px) rotate(-1.5deg);transform:translateY(-.5px) rotate(-1.5deg)}18%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}20%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}22%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}24%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}26%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}28%{-webkit-transform:translateY(.5px) rotate(1.5deg);transform:translateY(.5px) rotate(1.5deg)}30%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}32%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}34%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}36%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}38%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}40%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}42%{-webkit-transform:translateY(2.5px) rotate(-1.5deg);transform:translateY(2.5px) rotate(-1.5deg)}44%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}46%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}48%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}50%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}52%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}54%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}56%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}58%{-webkit-transform:translateY(.5px) rotate(2.5deg);transform:translateY(.5px) rotate(2.5deg)}60%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}62%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}64%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}66%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}68%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}70%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}72%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}74%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}76%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}78%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}80%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}82%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}84%{-webkit-transform:translateY(1.5px) rotate(2.5deg);transform:translateY(1.5px) rotate(2.5deg)}86%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}88%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}90%{-webkit-transform:translateY(2.5px) rotate(-.5deg);transform:translateY(2.5px) rotate(-.5deg)}92%{-webkit-transform:translateY(.5px) rotate(-.5deg);transform:translateY(.5px) rotate(-.5deg)}94%{-webkit-transform:translateY(2.5px) rotate(.5deg);transform:translateY(2.5px) rotate(.5deg)}96%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}98%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}0%,to{-webkit-transform:translate(0) rotate(0deg);transform:translate(0) rotate(0deg)}}@keyframes my-face{2%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}4%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}6%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}8%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}10%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}12%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}14%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}16%{-webkit-transform:translateY(-.5px) rotate(-1.5deg);transform:translateY(-.5px) rotate(-1.5deg)}18%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}20%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}22%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}24%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}26%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}28%{-webkit-transform:translateY(.5px) rotate(1.5deg);transform:translateY(.5px) rotate(1.5deg)}30%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}32%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}34%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}36%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}38%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}40%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}42%{-webkit-transform:translateY(2.5px) rotate(-1.5deg);transform:translateY(2.5px) rotate(-1.5deg)}44%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}46%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}48%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}50%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}52%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}54%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}56%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}58%{-webkit-transform:translateY(.5px) rotate(2.5deg);transform:translateY(.5px) rotate(2.5deg)}60%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}62%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}64%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}66%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}68%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}70%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}72%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}74%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}76%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}78%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}80%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}82%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}84%{-webkit-transform:translateY(1.5px) rotate(2.5deg);transform:translateY(1.5px) rotate(2.5deg)}86%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}88%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}90%{-webkit-transform:translateY(2.5px) rotate(-.5deg);transform:translateY(2.5px) rotate(-.5deg)}92%{-webkit-transform:translateY(.5px) rotate(-.5deg);transform:translateY(.5px) rotate(-.5deg)}94%{-webkit-transform:translateY(2.5px) rotate(.5deg);transform:translateY(2.5px) rotate(.5deg)}96%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}98%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}0%,to{-webkit-transform:translate(0) rotate(0deg);transform:translate(0) rotate(0deg)}}.dplayer{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:1}.dplayer *{box-sizing:content-box}.dplayer svg{width:100%;height:100%}.dplayer svg circle,.dplayer svg path{fill:#fff}.dplayer:-webkit-full-screen{width:100%;height:100%;background:#000;position:fixed;z-index:100000;left:0;top:0;margin:0;padding:0;-webkit-transform:translate(0);transform:translate(0)}.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{-webkit-animation:danmaku-center 6s linear;animation:danmaku-center 6s linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{-webkit-animation:danmaku 8s linear;animation:danmaku 8s linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.dplayer.dplayer-live .dplayer-bar-wrap,.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting,.dplayer.dplayer-live .dplayer-setting-loop,.dplayer.dplayer-live .dplayer-setting-speed,.dplayer.dplayer-live .dplayer-time,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,.dplayer.dplayer-no-danmaku .dplayer-danmaku{display:none}.dplayer.dplayer-arrow .dplayer-danmaku{font-size:18px}.dplayer.dplayer-arrow .dplayer-icon{margin:0 -3px}.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move{-webkit-animation-play-state:running;animation-play-state:running}@media (min-width:900px){.dplayer.dplayer-playing .dplayer-controller,.dplayer.dplayer-playing .dplayer-controller-mask{opacity:0}.dplayer.dplayer-playing:hover .dplayer-controller-mask{opacity:1}.dplayer.dplayer-playing:hover .dplayer-controller{opacity:1}}.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon{display:block}.dplayer.dplayer-loading .dplayer-danmaku,.dplayer.dplayer-loading .dplayer-danmaku-move,.dplayer.dplayer-paused .dplayer-danmaku,.dplayer.dplayer-paused .dplayer-danmaku-move{-webkit-animation-play-state:paused;animation-play-state:paused}.dplayer.dplayer-hide-controller{cursor:none}.dplayer.dplayer-hide-controller .dplayer-controller,.dplayer.dplayer-hide-controller .dplayer-controller-mask{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}.dplayer.dplayer-show-controller .dplayer-controller,.dplayer.dplayer-show-controller .dplayer-controller-mask{opacity:1}.dplayer.dplayer-fulled{position:fixed;z-index:100000;left:0;top:0;width:100%;height:100%}.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon,.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume{display:none}.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon{position:static;display:inline-block}.dplayer.dplayer-mobile .dplayer-bar-time,.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play{display:none}.dplayer.dplayer-mobile .dplayer-mobile-play{display:block}.dplayer-web-fullscreen-fix{position:fixed;top:0;left:0;margin:0;padding:0}[data-balloon]:before{display:none}[data-balloon]:after{padding:.3em .7em;background:rgba(17,17,17,.7)}[data-balloon][data-balloon-pos=up]:after{margin-bottom:0}.dplayer-bezel{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff;pointer-events:none}.dplayer-bezel .dplayer-bezel-icon{position:absolute;top:50%;left:50%;margin:-26px 0 0 -26px;height:52px;width:52px;padding:12px;box-sizing:border-box;background:rgba(0,0,0,.5);border-radius:50%;opacity:0;pointer-events:none}.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition{-webkit-animation:bezel-hide .5s linear;animation:bezel-hide .5s linear}@-webkit-keyframes bezel-hide{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform:scale(2);transform:scale(2)}}@keyframes bezel-hide{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform:scale(2);transform:scale(2)}}.dplayer-bezel .dplayer-danloading{position:absolute;top:50%;margin-top:-7px;width:100%;text-align:center;font-size:14px;line-height:14px;-webkit-animation:my-face 5s ease-in-out infinite;animation:my-face 5s ease-in-out infinite}.dplayer-bezel .diplayer-loading-icon{display:none;position:absolute;top:50%;left:50%;margin:-18px 0 0 -18px;height:36px;width:36px;pointer-events:none}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide{display:none}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot{-webkit-animation:diplayer-loading-dot-fade .8s ease infinite;animation:diplayer-loading-dot-fade .8s ease infinite;opacity:0;-webkit-transform-origin:4px 4px;transform-origin:4px 4px}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7{-webkit-animation-delay:.7s;animation-delay:.7s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6{-webkit-animation-delay:.6s;animation-delay:.6s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5{-webkit-animation-delay:.5s;animation-delay:.5s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4{-webkit-animation-delay:.4s;animation-delay:.4s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3{-webkit-animation-delay:.3s;animation-delay:.3s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2{-webkit-animation-delay:.2s;animation-delay:.2s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1{-webkit-animation-delay:.1s;animation-delay:.1s}@-webkit-keyframes diplayer-loading-dot-fade{0%{opacity:.7;-webkit-transform:scale(1.2);transform:scale(1.2)}50%{opacity:.25;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:.25;-webkit-transform:scale(.85);transform:scale(.85)}}@keyframes diplayer-loading-dot-fade{0%{opacity:.7;-webkit-transform:scale(1.2);transform:scale(1.2)}50%{opacity:.25;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:.25;-webkit-transform:scale(.85);transform:scale(.85)}}.dplayer-controller-mask{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;height:98px;width:100%}.dplayer-controller,.dplayer-controller-mask{position:absolute;bottom:0;-webkit-transition:all .3s ease;transition:all .3s ease}.dplayer-controller{left:0;right:0;height:41px;padding:0 20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dplayer-controller.dplayer-controller-comment .dplayer-icons{display:none}.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box{display:block}.dplayer-controller .dplayer-bar-wrap{padding:5px 0;cursor:pointer;position:absolute;bottom:33px;width:calc(100% - 40px);height:3px}.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb{-webkit-transform:scale(1);transform:scale(1)}.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight{display:block;width:8px;-webkit-transform:translateX(-4px);transform:translateX(-4px);top:4px;height:40%}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight{z-index:12;position:absolute;top:5px;width:6px;height:20%;border-radius:6px;background-color:#fff;text-align:center;-webkit-transform:translateX(-3px);transform:translateX(-3px);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text{display:block}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover~.dplayer-bar-preview{opacity:0}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover~.dplayer-bar-time{opacity:0}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text{display:none;position:absolute;left:50%;top:-24px;padding:5px 8px;background-color:rgba(0,0,0,.62);color:#fff;border-radius:4px;font-size:12px;white-space:nowrap;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview{position:absolute;background:#fff;pointer-events:none;display:none;background-size:16000px 100%}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas{position:absolute;width:100%;height:100%;z-index:1;pointer-events:none}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time{position:absolute;left:0;top:-20px;border-radius:4px;padding:5px 7px;background-color:rgba(0,0,0,.62);color:#fff;font-size:12px;text-align:center;opacity:1;-webkit-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out;word-wrap:normal;word-break:normal;z-index:2;pointer-events:none}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden{opacity:0}.dplayer-controller .dplayer-bar-wrap .dplayer-bar{position:relative;height:3px;width:100%;background:hsla(0,0%,100%,.2);cursor:pointer}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded{background:hsla(0,0%,100%,.4);-webkit-transition:all .5s ease;transition:all .5s ease}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded,.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played{position:absolute;left:0;top:0;bottom:0;height:3px;will-change:width}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:scale(0);transform:scale(0)}.dplayer-controller .dplayer-icons{height:38px;position:absolute;bottom:0}.dplayer-controller .dplayer-icons.dplayer-comment-box{display:none;position:absolute;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;z-index:2;height:38px;bottom:0;left:20px;right:20px;color:#fff}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon{padding:7px}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon{position:absolute;left:0;top:0}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon{position:absolute;right:0;top:0}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box{position:absolute;background:rgba(28,28,28,.9);bottom:41px;left:0;box-shadow:0 0 25px rgba(0,0,0,.3);border-radius:4px;padding:10px 10px 16px;font-size:14px;width:204px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:scale(0);transform:scale(0)}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open{-webkit-transform:scale(1);transform:scale(1)}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio]{display:none}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label{cursor:pointer}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title{font-size:13px;color:#fff;line-height:30px}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type{font-size:0}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title{margin-bottom:6px}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span{border-radius:4px 0 0 4px}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span{border-radius:0 4px 4px 0}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span{width:33%;padding:4px 6px;line-height:16px;display:inline-block;font-size:12px;color:#fff;border:1px solid #fff;margin-right:-1px;box-sizing:border-box;text-align:center;cursor:pointer}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked+span{background:#e4e4e6;color:#1c1c1c}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color{font-size:0}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label{font-size:0;padding:6px;display:inline-block}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span{width:22px;height:22px;display:inline-block;border-radius:50%;box-sizing:border-box;cursor:pointer}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover{-webkit-animation:my-face 5s ease-in-out infinite;animation:my-face 5s ease-in-out infinite}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input{outline:none;border:none;padding:8px 31px;font-size:14px;line-height:18px;text-align:center;border-radius:4px;background:none;margin:0;height:100%;box-sizing:border-box;width:100%;color:#fff}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-webkit-input-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input:-ms-input-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-input-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear{display:none}.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon{padding:7px}.dplayer-controller .dplayer-icons.dplayer-icons-right{right:20px}.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon{padding:8px}.dplayer-controller .dplayer-icons .dplayer-live-badge,.dplayer-controller .dplayer-icons .dplayer-time{line-height:38px;color:#eee;text-shadow:0 0 2px rgba(0,0,0,.5);vertical-align:middle;font-size:13px;cursor:default}.dplayer-controller .dplayer-icons .dplayer-live-dot{display:inline-block;width:6px;height:6px;vertical-align:4%;margin-right:5px;content:"";border-radius:6px}.dplayer-controller .dplayer-icons .dplayer-icon{width:40px;height:100%;border:none;background-color:transparent;outline:none;cursor:pointer;vertical-align:middle;box-sizing:border-box;display:inline-block}.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;opacity:.8}.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content{opacity:1}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon{color:#fff;width:auto;line-height:22px;font-size:14px}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon{padding:10px 9px 9px}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon{padding-top:8.5px}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon{width:43px}.dplayer-controller .dplayer-icons .dplayer-volume{position:relative;display:inline-block;cursor:pointer;height:100%}.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar{width:45px}.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{-webkit-transform:scale(1);transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar{width:45px}.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{-webkit-transform:scale(1);transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap{display:inline-block;margin:0 10px 0 -5px;vertical-align:middle;height:100%}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar{position:relative;top:17px;width:0;height:3px;background:#aaa;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner{position:absolute;bottom:0;left:0;height:100%;-webkit-transition:all .1s ease;transition:all .1s ease;will-change:width}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:scale(0);transform:scale(0)}.dplayer-controller .dplayer-icons .dplayer-setting,.dplayer-controller .dplayer-icons .dplayer-subtitle-btn{display:inline-block;height:100%}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box{position:absolute;right:0;bottom:50px;-webkit-transform:scale(0);transform:scale(0);width:150px;border-radius:2px;background:rgba(28,28,28,.9);padding:7px 0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;overflow:hidden;z-index:2}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box>div{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box>div.dplayer-setting-origin-panel{display:block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open{-webkit-transform:scale(1);transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow{width:70px;height:180px;text-align:center}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel{display:block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item{height:30px;padding:5px 10px;box-sizing:border-box;cursor:pointer;position:relative}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku{padding:5px 0}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label{padding:0 10px;display:inline}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap{display:inline-block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap{display:inline-block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap{padding:0 10px;box-sizing:border-box;display:none;vertical-align:middle;height:100%;width:100%}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar{position:relative;top:8.5px;width:100%;height:3px;background:#fff;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner{position:absolute;bottom:0;left:0;height:100%;-webkit-transition:all .1s ease;transition:all .1s ease;background:#aaa;will-change:width}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;background:#aaa}.dplayer-controller .dplayer-icons .dplayer-full{display:inline-block;height:100%;position:relative}.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon{display:block}.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon{position:absolute;top:-30px;z-index:1;display:none}.dplayer-controller .dplayer-icons .dplayer-quality{position:relative;display:inline-block;height:100%;z-index:2}.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list{display:block}.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask{display:block}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask{display:none;position:absolute;bottom:38px;left:-18px;width:80px;padding-bottom:12px}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list{display:none;font-size:12px;width:80px;border-radius:2px;background:rgba(28,28,28,.9);padding:5px 0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;overflow:hidden;color:#fff;text-align:center}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item{height:25px;box-sizing:border-box;cursor:pointer;line-height:25px}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer-controller .dplayer-icons .dplayer-comment{display:inline-block;height:100%}.dplayer-controller .dplayer-icons .dplayer-label{color:#eee;font-size:13px;display:inline-block;vertical-align:middle;white-space:nowrap}.dplayer-controller .dplayer-icons .dplayer-toggle{width:32px;height:20px;text-align:center;font-size:0;vertical-align:middle;position:absolute;top:5px;right:10px}.dplayer-controller .dplayer-icons .dplayer-toggle input{max-height:0;max-width:0;display:none}.dplayer-controller .dplayer-icons .dplayer-toggle input+label{display:inline-block;position:relative;box-shadow:inset 0 0 0 0 #dfdfdf;border:1px solid #dfdfdf;height:20px;width:32px;border-radius:10px;box-sizing:border-box;cursor:pointer;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-toggle input+label:before{content:"";position:absolute;display:block;height:18px;width:18px;top:0;left:0;border-radius:15px;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-toggle input+label:after{content:"";position:absolute;display:block;left:0;top:0;border-radius:15px;background:#fff;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;box-shadow:0 1px 3px rgba(0,0,0,.4);height:18px;width:18px}.dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label{border-color:hsla(0,0%,100%,.5)}.dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:before{width:30px;background:hsla(0,0%,100%,.5)}.dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:after{left:12px}.dplayer-mobile-play{display:none;width:50px;height:50px;border:none;background-color:transparent;outline:none;cursor:pointer;box-sizing:border-box;bottom:0;opacity:.8;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.dplayer-danmaku{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff}.dplayer-danmaku .dplayer-danmaku-item{display:inline-block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;white-space:nowrap;text-shadow:.5px .5px .5px rgba(0,0,0,.5)}.dplayer-danmaku .dplayer-danmaku-item--demo{position:absolute;visibility:hidden}.dplayer-danmaku .dplayer-danmaku-right{position:absolute;right:0;-webkit-transform:translateX(100%);transform:translateX(100%)}.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{will-change:transform;-webkit-animation:danmaku 5s linear;animation:danmaku 5s linear;-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes danmaku{0%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes danmaku{0%{-webkit-transform:translateX(100%);transform:translateX(100%)}}.dplayer-danmaku .dplayer-danmaku-bottom,.dplayer-danmaku .dplayer-danmaku-top{position:absolute;width:100%;text-align:center;visibility:hidden}.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{will-change:visibility;-webkit-animation:danmaku-center 4s linear;animation:danmaku-center 4s linear;-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes danmaku-center{0%{visibility:visible}to{visibility:visible}}@keyframes danmaku-center{0%{visibility:visible}to{visibility:visible}}.dplayer-logo{pointer-events:none;position:absolute;left:20px;top:20px;max-width:50px;max-height:50px}.dplayer-logo img{max-width:100%;max-height:100%;background:none}.dplayer-menu{position:absolute;width:170px;border-radius:2px;background:rgba(28,28,28,.85);padding:5px 0;overflow:hidden;z-index:3;display:none}.dplayer-menu.dplayer-menu-show{display:block}.dplayer-menu .dplayer-menu-item{height:30px;box-sizing:border-box;cursor:pointer}.dplayer-menu .dplayer-menu-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer-menu .dplayer-menu-item a{padding:0 10px;line-height:30px;color:#eee;font-size:13px;display:inline-block;vertical-align:middle;width:100%;box-sizing:border-box;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.dplayer-menu .dplayer-menu-item a:hover{text-decoration:none}.dplayer-notice{opacity:0;position:absolute;bottom:60px;left:20px;font-size:14px;border-radius:2px;background:rgba(28,28,28,.9);padding:7px 20px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;overflow:hidden;color:#fff;pointer-events:none}.dplayer-subtitle{position:absolute;bottom:40px;width:90%;left:5%;text-align:center;color:#fff;text-shadow:.5px .5px .5px rgba(0,0,0,.5);font-size:20px}.dplayer-subtitle.dplayer-subtitle-hide{display:none}.dplayer-mask{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:none}.dplayer-mask.dplayer-mask-show{display:block}.dplayer-video-wrap{position:relative;background:#000;font-size:0;width:100%;height:100%}.dplayer-video-wrap .dplayer-video{width:100%;height:100%;display:none}.dplayer-video-wrap .dplayer-video-current{display:block}.dplayer-video-wrap .dplayer-video-prepare{display:none}.dplayer-info-panel{position:absolute;top:10px;left:10px;width:400px;background:rgba(28,28,28,.8);padding:10px;color:#fff;font-size:12px;border-radius:2px}.dplayer-info-panel-hide{display:none}.dplayer-info-panel .dplayer-info-panel-close{cursor:pointer;position:absolute;right:10px;top:10px}.dplayer-info-panel .dplayer-info-panel-item>span{display:inline-block;vertical-align:middle;line-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.dplayer-info-panel .dplayer-info-panel-item-title{width:100px;text-align:right;margin-right:10px}.dplayer-info-panel .dplayer-info-panel-item-data{width:260px}',""]),e.exports=t},function(e,t,a){(t=a(3)(!1)).push([e.i,':root{--balloon-color:rgba(16,16,16,0.95);--balloon-font-size:12px;--balloon-move:4px}button[aria-label][data-balloon-pos]{overflow:visible}[aria-label][data-balloon-pos]{position:relative;cursor:pointer}[aria-label][data-balloon-pos]:after{opacity:0;pointer-events:none;-webkit-transition:all .18s ease-out .18s;transition:all .18s ease-out .18s;text-indent:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;font-style:normal;text-shadow:none;font-size:var(--balloon-font-size);background:var(--balloon-color);border-radius:2px;color:#fff;content:attr(aria-label);padding:.5em 1em;position:absolute;white-space:nowrap;z-index:10}[aria-label][data-balloon-pos]:before{width:0;height:0;border:5px solid transparent;border-top:5px solid var(--balloon-color);opacity:0;pointer-events:none;-webkit-transition:all .18s ease-out .18s;transition:all .18s ease-out .18s;content:"";position:absolute;z-index:10}[aria-label][data-balloon-pos]:hover:after,[aria-label][data-balloon-pos]:hover:before,[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after,[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before,[aria-label][data-balloon-pos][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-visible]:before{opacity:1;pointer-events:none}[aria-label][data-balloon-pos].font-awesome:after{font-family:FontAwesome,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}[aria-label][data-balloon-pos][data-balloon-break]:after{white-space:pre}[aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after{white-space:pre-line;word-break:break-word}[aria-label][data-balloon-pos][data-balloon-blunt]:after,[aria-label][data-balloon-pos][data-balloon-blunt]:before{-webkit-transition:none;transition:none}[aria-label][data-balloon-pos][data-balloon-pos=up]:after{bottom:100%;left:50%;margin-bottom:10px;-webkit-transform:translate(-50%,var(--balloon-move));transform:translate(-50%,var(--balloon-move));-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up]:before{bottom:100%;left:50%;-webkit-transform:translate(-50%,var(--balloon-move));transform:translate(-50%,var(--balloon-move));-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up][data-balloon-visible]:after{-webkit-transform:translate(-50%);transform:translate(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up][data-balloon-visible]:before{-webkit-transform:translate(-50%);transform:translate(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:after{bottom:100%;left:0;margin-bottom:10px;-webkit-transform:translateY(var(--balloon-move));transform:translateY(var(--balloon-move));-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:before{bottom:100%;left:5px;-webkit-transform:translateY(var(--balloon-move));transform:translateY(var(--balloon-move));-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up-left][data-balloon-visible]:after{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up-left][data-balloon-visible]:before{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:after{bottom:100%;right:0;margin-bottom:10px;-webkit-transform:translateY(var(--balloon-move));transform:translateY(var(--balloon-move));-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:before{bottom:100%;right:5px;-webkit-transform:translateY(var(--balloon-move));transform:translateY(var(--balloon-move));-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up-right][data-balloon-visible]:after{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up-right][data-balloon-visible]:before{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=down]:after{left:50%;margin-top:10px;top:100%;-webkit-transform:translate(-50%,calc(var(--balloon-move)*-1));transform:translate(-50%,calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down]:before{width:0;height:0;border:5px solid transparent;border-bottom:5px solid var(--balloon-color);left:50%;top:100%;-webkit-transform:translate(-50%,calc(var(--balloon-move)*-1));transform:translate(-50%,calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down][data-balloon-visible]:after{-webkit-transform:translate(-50%);transform:translate(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=down]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down][data-balloon-visible]:before{-webkit-transform:translate(-50%);transform:translate(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:after{left:0;margin-top:10px;top:100%;-webkit-transform:translateY(calc(var(--balloon-move)*-1));transform:translateY(calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:before{width:0;height:0;border:5px solid transparent;border-bottom:5px solid var(--balloon-color);left:5px;top:100%;-webkit-transform:translateY(calc(var(--balloon-move)*-1));transform:translateY(calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down-left][data-balloon-visible]:after{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down-left][data-balloon-visible]:before{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:after{right:0;margin-top:10px;top:100%;-webkit-transform:translateY(calc(var(--balloon-move)*-1));transform:translateY(calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:before{width:0;height:0;border:5px solid transparent;border-bottom:5px solid var(--balloon-color);right:5px;top:100%;-webkit-transform:translateY(calc(var(--balloon-move)*-1));transform:translateY(calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down-right][data-balloon-visible]:after{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down-right][data-balloon-visible]:before{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=left]:after{margin-right:10px;right:100%;top:50%;-webkit-transform:translate(var(--balloon-move),-50%);transform:translate(var(--balloon-move),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:before{width:0;height:0;border:5px solid transparent;border-left:5px solid var(--balloon-color);right:100%;top:50%;-webkit-transform:translate(var(--balloon-move),-50%);transform:translate(var(--balloon-move),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=left][data-balloon-visible]:after{-webkit-transform:translateY(-50%);transform:translateY(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=left][data-balloon-visible]:before{-webkit-transform:translateY(-50%);transform:translateY(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:after{left:100%;margin-left:10px;top:50%;-webkit-transform:translate(calc(var(--balloon-move)*-1),-50%);transform:translate(calc(var(--balloon-move)*-1),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:before{width:0;height:0;border:5px solid transparent;border-right:5px solid var(--balloon-color);left:100%;top:50%;-webkit-transform:translate(calc(var(--balloon-move)*-1),-50%);transform:translate(calc(var(--balloon-move)*-1),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=right][data-balloon-visible]:after{-webkit-transform:translateY(-50%);transform:translateY(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=right][data-balloon-visible]:before{-webkit-transform:translateY(-50%);transform:translateY(-50%)}[aria-label][data-balloon-pos][data-balloon-length=small]:after{white-space:normal;width:80px}[aria-label][data-balloon-pos][data-balloon-length=medium]:after{white-space:normal;width:150px}[aria-label][data-balloon-pos][data-balloon-length=large]:after{white-space:normal;width:260px}[aria-label][data-balloon-pos][data-balloon-length=xlarge]:after{white-space:normal;width:380px}@media screen and (max-width:768px){[aria-label][data-balloon-pos][data-balloon-length=xlarge]:after{white-space:normal;width:90vw}}[aria-label][data-balloon-pos][data-balloon-length=fit]:after{white-space:normal;width:100%}',""]),e.exports=t},function(e,t,a){var n=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(n.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(n.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},a(39),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,a){(function(e,t){!function(e,a){"use strict";if(!e.setImmediate){var n,r,o,i,l,s=1,d={},p=!1,c=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,"[object process]"==={}.toString.call(e.process)?n=function(e){t.nextTick((function(){m(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,a=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=a,t}}()?e.MessageChannel?((o=new MessageChannel).port1.onmessage=function(e){m(e.data)},n=function(e){o.port2.postMessage(e)}):c&&"onreadystatechange"in c.createElement("script")?(r=c.documentElement,n=function(e){var t=c.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):n=function(e){setTimeout(m,0,e)}:(i="setImmediate$"+Math.random()+"$",l=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(i)&&m(+t.data.slice(i.length))},e.addEventListener?e.addEventListener("message",l,!1):e.attachEvent("onmessage",l),n=function(t){e.postMessage(i+t,"*")}),u.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),a=0;a<t.length;a++)t[a]=arguments[a+1];var r={callback:e,args:t};return d[s]=r,n(s),s++},u.clearImmediate=y}function y(e){delete d[e]}function m(e){if(p)setTimeout(m,0,e);else{var t=d[e];if(t){p=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(a,n)}}(t)}finally{y(e),p=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,a(4),a(5))},function(e,t,a){"use strict";var n=a(0),r=a(6),o=a(41),i=a(12);function l(e){var t=new o(e),a=r(o.prototype.request,t);return n.extend(a,o.prototype,t),n.extend(a,t),a}var s=l(a(9));s.Axios=o,s.create=function(e){return l(i(s.defaults,e))},s.Cancel=a(13),s.CancelToken=a(54),s.isCancel=a(8),s.all=function(e){return Promise.all(e)},s.spread=a(55),e.exports=s,e.exports.default=s},function(e,t,a){"use strict";var n=a(0),r=a(7),o=a(42),i=a(43),l=a(12);function s(e){this.defaults=e,this.interceptors={request:new o,response:new o}}s.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=l(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],a=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)a=a.then(t.shift(),t.shift());return a},s.prototype.getUri=function(e){return e=l(this.defaults,e),r(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){s.prototype[e]=function(t,a){return this.request(n.merge(a||{},{method:e,url:t}))}})),n.forEach(["post","put","patch"],(function(e){s.prototype[e]=function(t,a,r){return this.request(n.merge(r||{},{method:e,url:t,data:a}))}})),e.exports=s},function(e,t,a){"use strict";var n=a(0);function r(){this.handlers=[]}r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},function(e,t,a){"use strict";var n=a(0),r=a(44),o=a(8),i=a(9);function l(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return l(e),e.headers=e.headers||{},e.data=r(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return l(e),t.data=r(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(l(e),t&&t.response&&(t.response.data=r(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,a){"use strict";var n=a(0);e.exports=function(e,t,a){return n.forEach(a,(function(a){e=a(e,t)})),e}},function(e,t,a){"use strict";var n=a(0);e.exports=function(e,t){n.forEach(e,(function(a,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=a,delete e[n])}))}},function(e,t,a){"use strict";var n=a(11);e.exports=function(e,t,a){var r=a.config.validateStatus;!r||r(a.status)?e(a):t(n("Request failed with status code "+a.status,a.config,null,a.request,a))}},function(e,t,a){"use strict";e.exports=function(e,t,a,n,r){return e.config=t,a&&(e.code=a),e.request=n,e.response=r,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,a){"use strict";var n=a(49),r=a(50);e.exports=function(e,t){return e&&!n(t)?r(e,t):t}},function(e,t,a){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,a){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,a){"use strict";var n=a(0),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,a,o,i={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),a=n.trim(e.substr(o+1)),t){if(i[t]&&r.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([a]):i[t]?i[t]+", "+a:a}})),i):i}},function(e,t,a){"use strict";var n=a(0);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");function r(e){var n=e;return t&&(a.setAttribute("href",n),n=a.href),a.setAttribute("href",n),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname}}return e=r(window.location.href),function(t){var a=n.isString(t)?r(t):t;return a.protocol===e.protocol&&a.host===e.host}}():function(){return!0}},function(e,t,a){"use strict";var n=a(0);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,a,r,o,i){var l=[];l.push(e+"="+encodeURIComponent(t)),n.isNumber(a)&&l.push("expires="+new Date(a).toGMTString()),n.isString(r)&&l.push("path="+r),n.isString(o)&&l.push("domain="+o),!0===i&&l.push("secure"),document.cookie=l.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,a){"use strict";var n=a(13);function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var a=this;e((function(e){a.reason||(a.reason=new n(e),t(a.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},function(e,t,a){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,a){"use strict";(function(t){var a="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},n=Object.create(a),r=/["&'<>]/;n.$escape=function(e){return function(e){var t=""+e,a=r.exec(t);if(!a)return e;var n="",o=void 0,i=void 0,l=void 0;for(o=a.index,i=0;o<t.length;o++){switch(t.charCodeAt(o)){case 34:l="&#34;";break;case 38:l="&#38;";break;case 39:l="&#39;";break;case 60:l="&#60;";break;case 62:l="&#62;";break;default:continue}i!==o&&(n+=t.substring(i,o)),i=o+1,n+=l}return i!==o?n+t.substring(i,o):n}(function e(t){"string"!=typeof t&&(t=null==t?"":"function"==typeof t?e(t.call(t)):JSON.stringify(t));return t}(e))},n.$each=function(e,t){if(Array.isArray(e))for(var a=0,n=e.length;a<n;a++)t(e[a],a);else for(var r in e)t(e[r],r)},e.exports=n}).call(this,a(4))},function(e,t,a){"use strict";a.r(t);a(34);var n=a(15),r=/mobile/i.test(window.navigator.userAgent),o={secondToTime:function(e){if(0===(e=e||0)||e===1/0||"NaN"===e.toString())return"00:00";var t=Math.floor(e/3600),a=Math.floor((e-3600*t)/60),n=Math.floor(e-3600*t-60*a);return(t>0?[t,a,n]:[a,n]).map((function(e){return e<10?"0"+e:""+e})).join(":")},getElementViewLeft:function(e){var t=e.offsetLeft,a=e.offsetParent,n=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;null!==a&&a!==e;)t+=a.offsetLeft,a=a.offsetParent;else for(;null!==a;)t+=a.offsetLeft,a=a.offsetParent;return t-n},getBoundingClientRectViewLeft:function(e){var t=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(e.getBoundingClientRect){if("number"!=typeof this.getBoundingClientRectViewLeft.offset){var a=document.createElement("div");a.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(a),this.getBoundingClientRectViewLeft.offset=-a.getBoundingClientRect().top-t,document.body.removeChild(a),a=null}var n=e.getBoundingClientRect(),r=this.getBoundingClientRectViewLeft.offset;return n.left+r}return this.getElementViewLeft(e)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(e){var t=e.left,a=void 0===t?0:t,n=e.top,r=void 0===n?0:n;this.isFirefox?(document.documentElement.scrollLeft=a,document.documentElement.scrollTop=r):window.scrollTo(a,r)},isMobile:r,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),storage:{set:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)}},nameMap:{dragStart:r?"touchstart":"mousedown",dragMove:r?"touchmove":"mousemove",dragEnd:r?"touchend":"mouseup"},color2Number:function(e){return"#"===e[0]&&(e=e.substr(1)),3===e.length&&(e="".concat(e[0]).concat(e[0]).concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2])),parseInt(e,16)+0&16777215},number2Color:function(e){return"#"+("00000"+e.toString(16)).slice(-6)},number2Type:function(e){switch(e){case 0:return"right";case 1:return"top";case 2:return"bottom";default:return"right"}}},i=a(2),l=a.n(i),s={send:function(e){l.a.post(e.url,e.data).then((function(t){var a=t.data;a&&0===a.code?e.success&&e.success(a):e.error&&e.error(a&&a.msg)})).catch((function(t){console.error(t),e.error&&e.error()}))},read:function(e){l.a.get(e.url).then((function(t){var a=t.data;a&&0===a.code?e.success&&e.success(a.data.map((function(e){return{time:e[0],type:e[1],color:e[2],author:e[3],text:e[4]}}))):e.error&&e.error(a&&a.msg)})).catch((function(t){console.error(t),e.error&&e.error()}))}};function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var p=function(e){var t={container:e.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,hotkey:!0,preload:"metadata",volume:.7,apiBackend:s,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flvjs:{},dash:{},webtorrent:{}}};for(var a in t)t.hasOwnProperty(a)&&!e.hasOwnProperty(a)&&(e[a]=t[a]);return e.video&&!e.video.type&&(e.video.type="auto"),"object"===d(e.danmaku)&&e.danmaku&&!e.danmaku.user&&(e.danmaku.user="DIYgod"),e.subtitle&&(!e.subtitle.type&&(e.subtitle.type="webvtt"),!e.subtitle.fontSize&&(e.subtitle.fontSize="20px"),!e.subtitle.bottom&&(e.subtitle.bottom="40px"),!e.subtitle.color&&(e.subtitle.color="#fff")),e.video.quality&&(e.video.url=e.video.quality[e.video.defaultQuality].url),e.lang&&(e.lang=e.lang.toLowerCase()),e.contextmenu=e.contextmenu.concat([{text:"Video info",click:function(e){e.infoPanel.triggle()}},{text:"About author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.25.1"),link:"https://github.com/MoePlayer/DPlayer"}]),e};var c={"zh-cn":{"Danmaku is loading":"弹幕加载中",Top:"顶部",Bottom:"底部",Rolling:"滚动","Input danmaku, hit Enter":"输入弹幕，回车发送","About author":"关于作者","DPlayer feedback":"播放器意见反馈","About DPlayer":"关于 DPlayer 播放器",Loop:"洗脑循环",Speed:"速度","Opacity for danmaku":"弹幕透明度",Normal:"正常","Please input danmaku content!":"要输入弹幕内容啊喂！","Set danmaku color":"设置弹幕颜色","Set danmaku type":"设置弹幕类型","Show danmaku":"显示弹幕","Video load failed":"视频加载失败","Danmaku load failed":"弹幕加载失败","Danmaku send failed":"弹幕发送失败","Switching to":"正在切换至","Switched to":"已经切换至",quality:"画质",FF:"快进",REW:"快退","Unlimited danmaku":"海量弹幕","Send danmaku":"发送弹幕",Setting:"设置","Full screen":"全屏","Web full screen":"页面全屏",Send:"发送",Screenshot:"截图",s:"秒","Show subtitle":"显示字幕","Hide subtitle":"隐藏字幕",Volume:"音量",Live:"直播","Video info":"视频统计信息"},"zh-tw":{"Danmaku is loading":"彈幕載入中",Top:"頂部",Bottom:"底部",Rolling:"滾動","Input danmaku, hit Enter":"輸入彈幕，Enter 發送","About author":"關於作者","DPlayer feedback":"播放器意見回饋","About DPlayer":"關於 DPlayer 播放器",Loop:"循環播放",Speed:"速度","Opacity for danmaku":"彈幕透明度",Normal:"正常","Please input danmaku content!":"請輸入彈幕內容啊！","Set danmaku color":"設定彈幕顏色","Set danmaku type":"設定彈幕類型","Show danmaku":"顯示彈幕","Video load failed":"影片載入失敗","Danmaku load failed":"彈幕載入失敗","Danmaku send failed":"彈幕發送失敗","Switching to":"正在切換至","Switched to":"已經切換至",quality:"畫質",FF:"快進",REW:"快退","Unlimited danmaku":"巨量彈幕","Send danmaku":"發送彈幕",Setting:"設定","Full screen":"全螢幕","Web full screen":"頁面全螢幕",Send:"發送",Screenshot:"截圖",s:"秒","Show subtitle":"顯示字幕","Hide subtitle":"隱藏字幕",Volume:"音量",Live:"直播","Video info":"影片統計訊息"}},u=function(e){var t=this;this.lang=e,this.tran=function(e){return c[t.lang]&&c[t.lang][e]?c[t.lang][e]:e}},y=a(17),m=a.n(y),h=a(18),f=a.n(h),b=a(19),v=a.n(b),g=a(20),w=a.n(g),k=a(21),x=a.n(k),S=a(22),T=a.n(S),L=a(23),E=a.n(L),Y=a(24),q=a.n(Y),B=a(25),M=a.n(B),z=a(26),C=a.n(z),O=a(27),j=a.n(O),P=a(28),A=a.n(P),F=a(29),_=a.n(F),D=a(30),R=a.n(D),I=a(31),W=a.n(I),H=a(32),N=a.n(H),U={play:m.a,pause:f.a,volumeUp:v.a,volumeDown:w.a,volumeOff:x.a,full:T.a,fullWeb:E.a,setting:q.a,right:M.a,comment:C.a,commentOff:j.a,send:A.a,pallette:_.a,camera:R.a,subtitle:W.a,loading:N.a},V=a(33),X=a.n(V);function Q(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var $=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t.container,this.options=t.options,this.index=t.index,this.tran=t.tran,this.init()}var t,a,n;return t=e,(a=[{key:"init",value:function(){this.container.innerHTML=X()({options:this.options,index:this.index,tran:this.tran,icons:U,mobile:o.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.notice=this.container.querySelector(".dplayer-notice"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&Q(t.prototype,a),n&&Q(t,n),e}();function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var Z=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var t,a,n;return t=e,(a=[{key:"load",value:function(){var e,t=this;e=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var a=(this.options.api.addition||[]).slice(0);a.push(e),this.events&&this.events.trigger("danmaku_load_start",a),this._readAllEndpoints(a,(function(e){t.dan=[].concat.apply([],e).sort((function(e,t){return e.time-t.time})),window.requestAnimationFrame((function(){t.frame()})),t.options.callback(),t.events&&t.events.trigger("danmaku_load_end")}))}},{key:"reload",value:function(e){this.options.api=e,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(e,t){for(var a=this,n=[],r=0,o=function(o){a.options.apiBackend.read({url:e[o],success:function(a){n[o]=a,++r===e.length&&t(n)},error:function(i){a.options.error(i||a.options.tran("Danmaku load failed")),n[o]=[],++r===e.length&&t(n)}})},i=0;i<e.length;++i)o(i)}},{key:"send",value:function(e,t){var a=this,n={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:e.text,color:e.color,type:e.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:n,success:t,error:function(e){a.options.error(e||a.options.tran("Danmaku send failed"))}}),this.dan.splice(this.danIndex,0,n),this.danIndex++;var r={text:this.htmlEncode(n.text),color:n.color,type:n.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(r),this.events&&this.events.trigger("danmaku_send",n)}},{key:"frame",value:function(){var e=this;if(this.dan.length&&!this.paused&&this.showing){for(var t=this.dan[this.danIndex],a=[];t&&this.options.time()>parseFloat(t.time);)a.push(t),t=this.dan[++this.danIndex];this.draw(a)}window.requestAnimationFrame((function(){e.frame()}))}},{key:"opacity",value:function(e){if(void 0!==e){for(var t=this.container.getElementsByClassName("dplayer-danmaku-item"),a=0;a<t.length;a++)t[a].style.opacity=e;this._opacity=e,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(e){var t=this;if(this.showing){var a=this.options.height,n=this.container.offsetWidth,r=this.container.offsetHeight,i=parseInt(r/a),l=function(e){var a=e.offsetWidth||parseInt(e.style.width),n=e.getBoundingClientRect().right||t.container.getBoundingClientRect().right+a;return t.container.getBoundingClientRect().right-n},s=function(e){return(n+e)/5},d=function(e,a,r){for(var o=n/s(r),d=function(r){var d=t.danTunnel[a][r+""];if(!d||!d.length)return t.danTunnel[a][r+""]=[e],e.addEventListener("animationend",(function(){t.danTunnel[a][r+""].splice(0,1)})),{v:r%i};if("right"!==a)return"continue";for(var p=0;p<d.length;p++){var c=l(d[p])-10;if(c<=n-o*s(parseInt(d[p].style.width))||c<=0)break;if(p===d.length-1)return t.danTunnel[a][r+""].push(e),e.addEventListener("animationend",(function(){t.danTunnel[a][r+""].splice(0,1)})),{v:r%i}}},p=0;t.unlimited||p<i;p++){var c=d(p);switch(c){case"continue":continue;default:if("object"===J(c))return c.v}}return-1};"[object Array]"!==Object.prototype.toString.call(e)&&(e=[e]);for(var p=document.createDocumentFragment(),c=function(r){e[r].type=o.number2Type(e[r].type),e[r].color||(e[r].color=16777215);var i=document.createElement("div");i.classList.add("dplayer-danmaku-item"),i.classList.add("dplayer-danmaku-".concat(e[r].type)),e[r].border?i.innerHTML='<span style="border:'.concat(e[r].border,'">').concat(e[r].text,"</span>"):i.innerHTML=e[r].text,i.style.opacity=t._opacity,i.style.color=o.number2Color(e[r].color),i.addEventListener("animationend",(function(){t.container.removeChild(i)}));var l=t._measure(e[r].text),s=void 0;switch(e[r].type){case"right":(s=d(i,e[r].type,l))>=0&&(i.style.width=l+1+"px",i.style.top=a*s+"px",i.style.transform="translateX(-".concat(n,"px)"));break;case"top":(s=d(i,e[r].type))>=0&&(i.style.top=a*s+"px");break;case"bottom":(s=d(i,e[r].type))>=0&&(i.style.bottom=a*s+"px");break;default:console.error("Can't handled danmaku type: ".concat(e[r].type))}s>=0&&(i.classList.add("dplayer-danmaku-move"),p.appendChild(i))},u=0;u<e.length;u++)c(u);return this.container.appendChild(p),p}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(e){if(!this.context){var t=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=t.getPropertyValue("font")}return this.context.measureText(e).width}},{key:"seek",value:function(){this.clear();for(var e=0;e<this.dan.length;e++){if(this.dan[e].time>=this.options.time()){this.danIndex=e;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var e=this.container.offsetWidth,t=this.container.getElementsByClassName("dplayer-danmaku-item"),a=0;a<t.length;a++)t[a].style.transform="translateX(-".concat(e,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(e){this.unlimited=e}}])&&K(t.prototype,a),n&&K(t,n),e}();function G(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var ee=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var t,a,n;return t=e,(a=[{key:"on",value:function(e,t){this.type(e)&&"function"==typeof t&&(this.events[e]||(this.events[e]=[]),this.events[e].push(t))}},{key:"trigger",value:function(e,t){if(this.events[e]&&this.events[e].length)for(var a=0;a<this.events[e].length;a++)this.events[e][a](t)}},{key:"type",value:function(e){return-1!==this.playerEvents.indexOf(e)?"player":-1!==this.videoEvents.indexOf(e)?"video":(console.error("Unknown event name: ".concat(e)),null)}}])&&G(t.prototype,a),n&&G(t,n),e}();function te(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var ae=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",(function(){a.player.resize()})),this.player.events.on("webfullscreen_cancel",(function(){a.player.resize(),o.setScrollPosition(a.lastScrollPosition)}));var n=function(){a.player.resize(),a.isFullScreen("browser")?a.player.events.trigger("fullscreen"):(o.setScrollPosition(a.lastScrollPosition),a.player.events.trigger("fullscreen_cancel"))},r=function(){var e=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;e&&e!==a.player.container||(a.player.resize(),e?a.player.events.trigger("fullscreen"):(o.setScrollPosition(a.lastScrollPosition),a.player.events.trigger("fullscreen_cancel")))};/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",r),document.addEventListener("fullscreenchange",r)):(this.player.container.addEventListener("fullscreenchange",n),this.player.container.addEventListener("webkitfullscreenchange",n),document.addEventListener("msfullscreenchange",r),document.addEventListener("MSFullscreenChange",r))}var t,a,n;return t=e,(a=[{key:"isFullScreen",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"browser";switch(e){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"browser",t="browser"===e?"web":"browser",a=this.isFullScreen(t);switch(a||(this.lastScrollPosition=o.getScrollPosition()),e){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}a&&this.cancel(t)}},{key:"cancel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"browser";switch(e){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"browser";this.isFullScreen(e)?this.cancel(e):this.request(e)}}])&&te(t.prototype,a),n&&te(t,n),e}();function ne(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var re=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:t.options.hasOwnProperty("volume")?t.options.volume:.7,unlimited:(t.options.danmaku&&t.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var t,a,n;return t=e,(a=[{key:"init",value:function(){for(var e in this.storageName){var t=this.storageName[e];this.data[e]=parseFloat(o.storage.get(t)||this.default[e])}}},{key:"get",value:function(e){return this.data[e]}},{key:"set",value:function(e,t){this.data[e]=t,o.storage.set(this.storageName[e],t)}}])&&ne(t.prototype,a),n&&ne(t,n),e}();function oe(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var ie=function(){function e(t,a,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.video=a,this.options=n,this.events=r,this.init()}var t,a,n;return t=e,(a=[{key:"init",value:function(){var e=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var t=this.video.textTracks[0];t.oncuechange=function(){var a=t.activeCues[0];if(e.container.innerHTML="",a){var n=document.createElement("div");n.appendChild(a.getCueAsHTML());var r=n.innerHTML.split(/\r?\n/).map((function(e){return"<p>".concat(e,"</p>")})).join("");e.container.innerHTML=r}e.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}])&&oe(t.prototype,a),n&&oe(t,n),e}();function le(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var se=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elements={},this.elements.volume=t.volumeBar,this.elements.played=t.playedBar,this.elements.loaded=t.loadedBar,this.elements.danmaku=t.danmakuOpacityBar}var t,a,n;return t=e,(a=[{key:"set",value:function(e,t,a){t=Math.max(t,0),t=Math.min(t,1),this.elements[e].style[a]=100*t+"%"}},{key:"get",value:function(e){return parseFloat(this.elements[e].style.width)/100}}])&&le(t.prototype,a),n&&le(t,n),e}();function de(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var pe=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},this.types=["loading","info","fps"],this.init()}var t,a,n;return t=e,(a=[{key:"init",value:function(){var e=this;this.types.map((function(t){return"fps"!==t&&e["init".concat(t,"Checker")](),t}))}},{key:"initloadingChecker",value:function(){var e=this,t=0,a=0,n=!1;this.loadingChecker=setInterval((function(){e.enableloadingChecker&&(a=e.player.video.currentTime,n||a!==t||e.player.video.paused||(e.player.container.classList.add("dplayer-loading"),n=!0),n&&a>t&&!e.player.video.paused&&(e.player.container.classList.remove("dplayer-loading"),n=!1),t=a)}),100)}},{key:"initfpsChecker",value:function(){var e=this;window.requestAnimationFrame((function(){if(e.enablefpsChecker)if(e.initfpsChecker(),e.fpsStart){e.fpsIndex++;var t=new Date;t-e.fpsStart>1e3&&(e.player.infoPanel.fps(e.fpsIndex/(t-e.fpsStart)*1e3),e.fpsStart=new Date,e.fpsIndex=0)}else e.fpsStart=new Date,e.fpsIndex=0;else e.fpsStart=0,e.fpsIndex=0}))}},{key:"initinfoChecker",value:function(){var e=this;this.infoChecker=setInterval((function(){e.enableinfoChecker&&e.player.infoPanel.update()}),1e3)}},{key:"enable",value:function(e){this["enable".concat(e,"Checker")]=!0,"fps"===e&&this.initfpsChecker()}},{key:"disable",value:function(e){this["enable".concat(e,"Checker")]=!1}},{key:"destroy",value:function(){var e=this;this.types.map((function(t){return e["enable".concat(t,"Checker")]=!1,e["".concat(t,"Checker")]&&clearInterval(e["".concat(t,"Checker")]),t}))}}])&&de(t.prototype,a),n&&de(t,n),e}();function ce(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var ue=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.container.addEventListener("animationend",(function(){a.container.classList.remove("dplayer-bezel-transition")}))}var t,a,n;return t=e,(a=[{key:"switch",value:function(e){this.container.innerHTML=e,this.container.classList.add("dplayer-bezel-transition")}}])&&ce(t.prototype,a),n&&ce(t,n),e}();function ye(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var me=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t.container,this.barWidth=t.barWidth,this.container.style.backgroundImage="url('".concat(t.url,"')"),this.events=t.events}var t,a,n;return t=e,(a=[{key:"resize",value:function(e,t,a){this.container.style.width="".concat(e,"px"),this.container.style.height="".concat(t,"px"),this.container.style.top="".concat(2-t,"px"),this.barWidth=a}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(e){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(e/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(e-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&ye(t.prototype,a),n&&ye(t,n),e}();function he(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var fe=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,this.autoHideTimer=0,o.isMobile||(this.player.container.addEventListener("mousemove",(function(){a.setAutoHide()})),this.player.container.addEventListener("click",(function(){a.setAutoHide()})),this.player.on("play",(function(){a.setAutoHide()})),this.player.on("pause",(function(){a.setAutoHide()}))),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.initSubtitleButton(),this.initHighlights(),o.isMobile||this.initVolumeButton()}var t,a,n;return t=e,(a=[{key:"initPlayButton",value:function(){var e=this;this.player.template.playButton.addEventListener("click",(function(){e.player.toggle()})),this.player.template.mobilePlayButton.addEventListener("click",(function(){e.player.toggle()})),o.isMobile?(this.player.template.videoWrap.addEventListener("click",(function(){e.toggle()})),this.player.template.controllerMask.addEventListener("click",(function(){e.toggle()}))):(this.player.template.videoWrap.addEventListener("click",(function(){e.player.toggle()})),this.player.template.controllerMask.addEventListener("click",(function(){e.player.toggle()})))}},{key:"initHighlights",value:function(){var e=this;this.player.on("durationchange",(function(){if(1!==e.player.video.duration&&e.player.video.duration!==1/0&&e.player.options.highlight){var t=document.querySelectorAll(".dplayer-highlight");[].slice.call(t,0).forEach((function(t){e.player.template.playedBarWrap.removeChild(t)}));for(var a=0;a<e.player.options.highlight.length;a++)if(e.player.options.highlight[a].text&&e.player.options.highlight[a].time){var n=document.createElement("div");n.classList.add("dplayer-highlight"),n.style.left=e.player.options.highlight[a].time/e.player.video.duration*100+"%",n.innerHTML='<span class="dplayer-highlight-text">'+e.player.options.highlight[a].text+"</span>",e.player.template.playedBarWrap.insertBefore(n,e.player.template.playedBarTime)}}}))}},{key:"initThumbnails",value:function(){var e=this;this.player.options.video.thumbnails&&(this.thumbnails=new me({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",(function(){e.thumbnails.resize(160,e.player.video.videoHeight/e.player.video.videoWidth*160,e.player.template.barWrap.offsetWidth)})))}},{key:"initPlayedBar",value:function(){var e=this,t=function(t){var a=((t.clientX||t.changedTouches[0].clientX)-o.getBoundingClientRectViewLeft(e.player.template.playedBarWrap))/e.player.template.playedBarWrap.clientWidth;a=Math.max(a,0),a=Math.min(a,1),e.player.bar.set("played",a,"width"),e.player.template.ptime.innerHTML=o.secondToTime(a*e.player.video.duration)},a=function a(n){document.removeEventListener(o.nameMap.dragEnd,a),document.removeEventListener(o.nameMap.dragMove,t);var r=((n.clientX||n.changedTouches[0].clientX)-o.getBoundingClientRectViewLeft(e.player.template.playedBarWrap))/e.player.template.playedBarWrap.clientWidth;r=Math.max(r,0),r=Math.min(r,1),e.player.bar.set("played",r,"width"),e.player.seek(e.player.bar.get("played")*e.player.video.duration),e.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(o.nameMap.dragStart,(function(){e.player.timer.disable("progress"),document.addEventListener(o.nameMap.dragMove,t),document.addEventListener(o.nameMap.dragEnd,a)})),this.player.template.playedBarWrap.addEventListener(o.nameMap.dragMove,(function(t){if(e.player.video.duration){var a=e.player.template.playedBarWrap.getBoundingClientRect().left,n=(t.clientX||t.changedTouches[0].clientX)-a;if(n<0||n>e.player.template.playedBarWrap.offsetWidth)return;var r=e.player.video.duration*(n/e.player.template.playedBarWrap.offsetWidth);o.isMobile&&e.thumbnails&&e.thumbnails.show(),e.thumbnails&&e.thumbnails.move(n),e.player.template.playedBarTime.style.left="".concat(n-(r>=3600?25:20),"px"),e.player.template.playedBarTime.innerText=o.secondToTime(r),e.player.template.playedBarTime.classList.remove("hidden")}})),this.player.template.playedBarWrap.addEventListener(o.nameMap.dragEnd,(function(){o.isMobile&&e.thumbnails&&e.thumbnails.hide()})),o.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",(function(){e.player.video.duration&&(e.thumbnails&&e.thumbnails.show(),e.player.template.playedBarTime.classList.remove("hidden"))})),this.player.template.playedBarWrap.addEventListener("mouseleave",(function(){e.player.video.duration&&(e.thumbnails&&e.thumbnails.hide(),e.player.template.playedBarTime.classList.add("hidden"))})))}},{key:"initFullButton",value:function(){var e=this;this.player.template.browserFullButton.addEventListener("click",(function(){e.player.fullScreen.toggle("browser")})),this.player.template.webFullButton.addEventListener("click",(function(){e.player.fullScreen.toggle("web")}))}},{key:"initVolumeButton",value:function(){var e=this,t=function(t){var a=t||window.event,n=((a.clientX||a.changedTouches[0].clientX)-o.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap)-5.5)/35;e.player.volume(n)},a=function a(){document.removeEventListener(o.nameMap.dragEnd,a),document.removeEventListener(o.nameMap.dragMove,t),e.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",(function(t){var a=t||window.event,n=((a.clientX||a.changedTouches[0].clientX)-o.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap)-5.5)/35;e.player.volume(n)})),this.player.template.volumeBarWrapWrap.addEventListener(o.nameMap.dragStart,(function(){document.addEventListener(o.nameMap.dragMove,t),document.addEventListener(o.nameMap.dragEnd,a),e.player.template.volumeButton.classList.add("dplayer-volume-active")})),this.player.template.volumeButtonIcon.addEventListener("click",(function(){e.player.video.muted?(e.player.video.muted=!1,e.player.switchVolumeIcon(),e.player.bar.set("volume",e.player.volume(),"width")):(e.player.video.muted=!0,e.player.template.volumeIcon.innerHTML=U.volumeOff,e.player.bar.set("volume",0,"width"))}))}},{key:"initQualityButton",value:function(){var e=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",(function(t){t.target.classList.contains("dplayer-quality-item")&&e.player.switchQuality(t.target.dataset.index)}))}},{key:"initScreenshotButton",value:function(){var e=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",(function(){var t,a=document.createElement("canvas");a.width=e.player.video.videoWidth,a.height=e.player.video.videoHeight,a.getContext("2d").drawImage(e.player.video,0,0,a.width,a.height),a.toBlob((function(e){t=URL.createObjectURL(e);var a=document.createElement("a");a.href=t,a.download="DPlayer.png",a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(t)})),e.player.events.trigger("screenshot",t)}))}},{key:"initSubtitleButton",value:function(){var e=this;this.player.options.subtitle&&(this.player.events.on("subtitle_show",(function(){e.player.template.subtitleButton.dataset.balloon=e.player.tran("Hide subtitle"),e.player.template.subtitleButtonInner.style.opacity="",e.player.user.set("subtitle",1)})),this.player.events.on("subtitle_hide",(function(){e.player.template.subtitleButton.dataset.balloon=e.player.tran("Show subtitle"),e.player.template.subtitleButtonInner.style.opacity="0.4",e.player.user.set("subtitle",0)})),this.player.template.subtitleButton.addEventListener("click",(function(){e.player.subtitle.toggle()})))}},{key:"setAutoHide",value:function(){var e=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout((function(){!e.player.video.played.length||e.player.paused||e.disableAutoHide||e.hide()}),3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){clearTimeout(this.autoHideTimer)}}])&&he(t.prototype,a),n&&he(t,n),e}();function be(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var ve=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,this.player.template.mask.addEventListener("click",(function(){a.hide()})),this.player.template.settingButton.addEventListener("click",(function(){a.show()})),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",(function(){a.player.template.loopToggle.checked=!a.player.template.loopToggle.checked,a.player.template.loopToggle.checked?a.loop=!0:a.loop=!1,a.hide()})),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",(function(){a.player.template.showDanmakuToggle.checked=!a.player.template.showDanmakuToggle.checked,a.player.template.showDanmakuToggle.checked?(a.showDanmaku=!0,a.player.danmaku.show()):(a.showDanmaku=!1,a.player.danmaku.hide()),a.player.user.set("danmaku",a.showDanmaku?1:0),a.hide()})),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",(function(){a.player.template.unlimitDanmakuToggle.checked=!a.player.template.unlimitDanmakuToggle.checked,a.player.template.unlimitDanmakuToggle.checked?(a.unlimitDanmaku=!0,a.player.danmaku.unlimit(!0)):(a.unlimitDanmaku=!1,a.player.danmaku.unlimit(!1)),a.player.user.set("unlimited",a.unlimitDanmaku?1:0),a.hide()})),this.player.template.speed.addEventListener("click",(function(){a.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),a.player.template.settingBox.classList.add("dplayer-setting-box-speed")}));for(var n=function(e){a.player.template.speedItem[e].addEventListener("click",(function(){a.player.speed(a.player.template.speedItem[e].dataset.speed),a.hide()}))},r=0;r<this.player.template.speedItem.length;r++)n(r);if(this.player.danmaku){this.player.on("danmaku_opacity",(function(e){a.player.bar.set("danmaku",e,"width"),a.player.user.set("opacity",e)})),this.player.danmaku.opacity(this.player.user.get("opacity"));var i=function(e){var t=e||window.event,n=((t.clientX||t.changedTouches[0].clientX)-o.getBoundingClientRectViewLeft(a.player.template.danmakuOpacityBarWrap))/130;n=Math.max(n,0),n=Math.min(n,1),a.player.danmaku.opacity(n)},l=function e(){document.removeEventListener(o.nameMap.dragEnd,e),document.removeEventListener(o.nameMap.dragMove,i),a.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",(function(e){var t=e||window.event,n=((t.clientX||t.changedTouches[0].clientX)-o.getBoundingClientRectViewLeft(a.player.template.danmakuOpacityBarWrap))/130;n=Math.max(n,0),n=Math.min(n,1),a.player.danmaku.opacity(n)})),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(o.nameMap.dragStart,(function(){document.addEventListener(o.nameMap.dragMove,i),document.addEventListener(o.nameMap.dragEnd,l),a.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")}))}}var t,a,n;return t=e,(a=[{key:"hide",value:function(){var e=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout((function(){e.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),e.player.template.settingBox.classList.remove("dplayer-setting-box-speed")}),300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&be(t.prototype,a),n&&be(t,n),e}();function ge(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var we=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,this.player.template.mask.addEventListener("click",(function(){a.hide()})),this.player.template.commentButton.addEventListener("click",(function(){a.show()})),this.player.template.commentSettingButton.addEventListener("click",(function(){a.toggleSetting()})),this.player.template.commentColorSettingBox.addEventListener("click",(function(){if(a.player.template.commentColorSettingBox.querySelector("input:checked+span")){var e=a.player.template.commentColorSettingBox.querySelector("input:checked").value;a.player.template.commentSettingFill.style.fill=e,a.player.template.commentInput.style.color=e,a.player.template.commentSendFill.style.fill=e}})),this.player.template.commentInput.addEventListener("click",(function(){a.hideSetting()})),this.player.template.commentInput.addEventListener("keydown",(function(e){13===(e||window.event).keyCode&&a.send()})),this.player.template.commentSendButton.addEventListener("click",(function(){a.send()}))}var t,a,n;return t=e,(a=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var e=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:o.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},(function(){e.player.template.commentInput.value="",e.hide()})):this.player.notice(this.player.tran("Please input danmaku content!"))}}])&&ge(t.prototype,a),n&&ge(t,n),e}();var ke=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t.options.hotkey&&document.addEventListener("keydown",(function(e){if(t.focus){var a=document.activeElement.tagName.toUpperCase(),n=document.activeElement.getAttribute("contenteditable");if("INPUT"!==a&&"TEXTAREA"!==a&&""!==n&&"true"!==n){var r,o=e||window.event;switch(o.keyCode){case 32:o.preventDefault(),t.toggle();break;case 37:o.preventDefault(),t.seek(t.video.currentTime-5),t.controller.setAutoHide();break;case 39:o.preventDefault(),t.seek(t.video.currentTime+5),t.controller.setAutoHide();break;case 38:o.preventDefault(),r=t.volume()+.1,t.volume(r);break;case 40:o.preventDefault(),r=t.volume()-.1,t.volume(r)}}}})),document.addEventListener("keydown",(function(e){switch((e||window.event).keyCode){case 27:t.fullScreen.isFullScreen("web")&&t.fullScreen.cancel("web")}}))};function xe(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var Se=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.player=t,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach((function(e,t){a.player.options.contextmenu[t].click&&e.addEventListener("click",(function(){a.player.options.contextmenu[t].click(a.player),a.hide()}))})),this.player.container.addEventListener("contextmenu",(function(e){if(a.shown)a.hide();else{var t=e||window.event;t.preventDefault();var n=a.player.container.getBoundingClientRect();a.show(t.clientX-n.left,t.clientY-n.top),a.player.template.mask.addEventListener("click",(function(){a.hide()}))}}))}var t,a,n;return t=e,(a=[{key:"show",value:function(e,t){this.player.template.menu.classList.add("dplayer-menu-show");var a=this.player.container.getBoundingClientRect();e+this.player.template.menu.offsetWidth>=a.width?(this.player.template.menu.style.right=a.width-e+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=e+"px",this.player.template.menu.style.right="initial"),t+this.player.template.menu.offsetHeight>=a.height?(this.player.template.menu.style.bottom=a.height-t+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=t+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}}])&&xe(t.prototype,a),n&&xe(t,n),e}();function Te(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var Le=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t.template.infoPanel,this.template=t.template,this.video=t.video,this.player=t,this.template.infoPanelClose.addEventListener("click",(function(){a.hide()}))}var t,a,n;return t=e,(a=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.25.1"," ").concat("e3a4631"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(e){this.template.infoFPS.innerHTML="".concat(e.toFixed(1))}}])&&Te(t.prototype,a),n&&Te(t,n),e}(),Ee=a(1),Ye=a.n(Ee);function qe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Be(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function Me(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var ze=0,Ce=[],Oe=function(){function e(t){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=p(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?qe(Object(a),!0).forEach((function(t){Be(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):qe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({preload:"webtorrent"===t.video.type?"none":"metadata"},t)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new u(this.options.lang).tran,this.events=new ee,this.user=new re(this),this.container=this.options.container,this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live&&this.container.classList.add("dplayer-live"),o.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.template=new $({container:this.container,options:this.options,index:ze,tran:this.tran}),this.video=this.template.video,this.bar=new se(this.template),this.bezel=new ue(this.template.bezel),this.fullScreen=new ae(this),this.controller=new fe(this),this.options.danmaku&&(this.danmaku=new Z({container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout((function(){a.template.danmakuLoading.style.display="none",a.options.autoplay&&a.play()}),0)},error:function(e){a.notice(e)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return a.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user},events:this.events,tran:function(e){return a.tran(e)}}),this.comment=new we(this)),this.setting=new ve(this),this.plugins={},document.addEventListener("click",(function(){a.focus=!1}),!0),this.container.addEventListener("click",(function(){a.focus=!0}),!0),this.paused=!0,this.timer=new pe(this),this.hotkey=new ke(this),this.contextmenu=new Se(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new Le(this),!this.danmaku&&this.options.autoplay&&this.play(),ze++,Ce.push(this)}var t,a,r;return t=e,r=[{key:"version",get:function(){return"1.25.1"}}],(a=[{key:"seek",value:function(e){e=Math.max(e,0),this.video.duration&&(e=Math.min(e,this.video.duration)),this.video.currentTime<e?this.notice("".concat(this.tran("FF")," ").concat((e-this.video.currentTime).toFixed(0)," ").concat(this.tran("s"))):this.video.currentTime>e&&this.notice("".concat(this.tran("REW")," ").concat((this.video.currentTime-e).toFixed(0)," ").concat(this.tran("s"))),this.video.currentTime=e,this.danmaku&&this.danmaku.seek(),this.bar.set("played",e/this.video.duration,"width"),this.template.ptime.innerHTML=o.secondToTime(e)}},{key:"play",value:function(e){var t=this;if(this.paused=!1,this.video.paused&&!o.isMobile&&this.bezel.switch(U.play),this.template.playButton.innerHTML=U.pause,this.template.mobilePlayButton.innerHTML=U.pause,e||n.a.resolve(this.video.play()).catch((function(){t.pause()})).then((function(){})),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var a=0;a<Ce.length;a++)this!==Ce[a]&&Ce[a].pause()}},{key:"pause",value:function(e){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||o.isMobile||this.bezel.switch(U.pause),this.template.playButton.innerHTML=U.play,this.template.mobilePlayButton.innerHTML=U.play,e||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=U.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=U.volumeDown:this.template.volumeIcon.innerHTML=U.volumeOff}},{key:"volume",value:function(e,t,a){if(e=parseFloat(e),!isNaN(e)){e=Math.max(e,0),e=Math.min(e,1),this.bar.set("volume",e,"width");var n="".concat((100*e).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=n,t||this.user.set("volume",e),a||this.notice("".concat(this.tran("Volume")," ").concat((100*e).toFixed(0),"%")),this.video.volume=e,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(e,t){this.events.on(e,t)}},{key:"switchVideo",value:function(e,t){this.pause(),this.video.poster=e.pic?e.pic:"",this.video.src=e.url,this.initMSE(this.video,e.type||"auto"),t&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:t.id,address:t.api,token:t.token,maximum:t.maximum,addition:t.addition,user:t.user}))}},{key:"initMSE",value:function(e,t){var a=this;if(this.type=t,this.options.video.customType&&this.options.video.customType[t])"[object Function]"===Object.prototype.toString.call(this.options.video.customType[t])?this.options.video.customType[t](this.video,this):console.error("Illegal customType: ".concat(t));else switch("auto"===this.type&&(/m3u8(#|\?|$)/i.exec(e.src)?this.type="hls":/.flv(#|\?|$)/i.exec(e.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(e.src)?this.type="dash":this.type="normal"),"hls"===this.type&&(e.canPlayType("application/x-mpegURL")||e.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var n=this.options.pluginOptions.hls,r=new window.Hls(n);this.plugins.hls=r,r.loadSource(e.src),r.attachMedia(e),this.events.on("destroy",(function(){r.destroy(),delete a.plugins.hls}))}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var o=Object.assign(this.options.pluginOptions.flvjs,{type:"flv",url:e.src}),i=window.flvjs.createPlayer(o);this.plugins.flvjs=i,i.attachMediaElement(e),i.load(),this.events.on("destroy",(function(){i.unload(),i.detachMediaElement(),i.destroy(),delete a.plugins.flvjs}))}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var l=window.dashjs.MediaPlayer().create().initialize(e,e.src,!1),s=this.options.pluginOptions.dash;l.updateSettings(s),this.plugins.dash=l,this.events.on("destroy",(function(){window.dashjs.MediaPlayer().reset(),delete a.plugins.dash}))}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var d=this.options.pluginOptions.webtorrent,p=new window.WebTorrent(d);this.plugins.webtorrent=p;var c=e.src;e.src="",e.preload="metadata",e.addEventListener("durationchange",(function(){return a.container.classList.remove("dplayer-loading")}),{once:!0}),p.add(c,(function(e){e.files.find((function(e){return e.name.endsWith(".mp4")})).renderTo(a.video,{autoplay:a.options.autoplay})})),this.events.on("destroy",(function(){p.remove(c),p.destroy(),delete a.plugins.webtorrent}))}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(e,t){var a=this;this.initMSE(e,t),this.on("durationchange",(function(){1!==e.duration&&e.duration!==1/0&&(a.template.dtime.innerHTML=o.secondToTime(e.duration))})),this.on("progress",(function(){var t=e.buffered.length?e.buffered.end(e.buffered.length-1)/e.duration:0;a.bar.set("loaded",t,"width")})),this.on("error",(function(){a.video.error&&a.tran&&a.notice&&"webtorrent"!==a.type&&a.notice(a.tran("Video load failed"),-1)})),this.on("ended",(function(){a.bar.set("played",1,"width"),a.setting.loop?(a.seek(0),a.play()):a.pause(),a.danmaku&&(a.danmaku.danIndex=0)})),this.on("play",(function(){a.paused&&a.play(!0)})),this.on("pause",(function(){a.paused||a.pause(!0)})),this.on("timeupdate",(function(){a.bar.set("played",a.video.currentTime/a.video.duration,"width");var e=o.secondToTime(a.video.currentTime);a.template.ptime.innerHTML!==e&&(a.template.ptime.innerHTML=e)}));for(var n=function(t){e.addEventListener(a.events.videoEvents[t],(function(){a.events.trigger(a.events.videoEvents[t])}))},r=0;r<this.events.videoEvents.length;r++)n(r);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new ie(this.template.subtitle,this.video,this.options.subtitle,this.events),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(e){var t=this;if(e="string"==typeof e?parseInt(e):e,this.qualityIndex!==e&&!this.switchingQuality){this.qualityIndex=e,this.switchingQuality=!0,this.quality=this.options.video.quality[e],this.template.qualityButton.innerHTML=this.quality.name;var a=this.video.paused;this.video.pause();var n=Ye()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),r=(new DOMParser).parseFromString(n,"text/html").body.firstChild;this.template.videoWrap.insertBefore(r,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=r,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("Switching to")," ").concat(this.quality.name," ").concat(this.tran("quality")),-1),this.events.trigger("quality_start",this.quality),this.on("canplay",(function(){if(t.prevVideo){if(t.video.currentTime!==t.prevVideo.currentTime)return void t.seek(t.prevVideo.currentTime);t.template.videoWrap.removeChild(t.prevVideo),t.video.classList.add("dplayer-video-current"),a||t.video.play(),t.prevVideo=null,t.notice("".concat(t.tran("Switched to")," ").concat(t.quality.name," ").concat(t.tran("quality"))),t.switchingQuality=!1,t.events.trigger("quality_end")}}))}}},{key:"notice",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.8;this.template.notice.innerHTML=e,this.template.notice.style.opacity=n,this.noticeTime&&clearTimeout(this.noticeTime),this.events.trigger("notice_show",e),a>0&&(this.noticeTime=setTimeout((function(){t.template.notice.style.opacity=0,t.events.trigger("notice_hide")}),a))}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(e){this.video.playbackRate=e}},{key:"destroy",value:function(){Ce.splice(Ce.indexOf(this),1),this.pause(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}])&&Me(t.prototype,a),r&&Me(t,r),e}();console.log("\n".concat(" %c DPlayer v","1.25.1"," ").concat("e3a4631"," %c http://dplayer.js.org ","\n","\n"),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");t.default=Oe}]).default}));
//# sourceMappingURL=DPlayer.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").clearImmediate))

/***/ }),

/***/ "./node_modules/dropzone/dist/dropzone.js":
/*!************************************************!*\
  !*** ./node_modules/dropzone/dist/dropzone.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
// The Emitter class provides the ability to call `.on()` on Dropzone to listen
// to events.
// It is strongly based on component's emitter class, and I removed the
// functionality because of the dependency hell with different frameworks.
var Emitter =
/*#__PURE__*/
function () {
  function Emitter() {
    _classCallCheck(this, Emitter);
  }

  _createClass(Emitter, [{
    key: "on",
    // Add an event listener for given event
    value: function on(event, fn) {
      this._callbacks = this._callbacks || {}; // Create namespace for this event

      if (!this._callbacks[event]) {
        this._callbacks[event] = [];
      }

      this._callbacks[event].push(fn);

      return this;
    }
  }, {
    key: "emit",
    value: function emit(event) {
      this._callbacks = this._callbacks || {};
      var callbacks = this._callbacks[event];

      if (callbacks) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = callbacks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var callback = _step.value;
            callback.apply(this, args);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      return this;
    } // Remove event listener for given event. If fn is not provided, all event
    // listeners for that event will be removed. If neither is provided, all
    // event listeners will be removed.

  }, {
    key: "off",
    value: function off(event, fn) {
      if (!this._callbacks || arguments.length === 0) {
        this._callbacks = {};
        return this;
      } // specific event


      var callbacks = this._callbacks[event];

      if (!callbacks) {
        return this;
      } // remove all handlers


      if (arguments.length === 1) {
        delete this._callbacks[event];
        return this;
      } // remove specific handler


      for (var i = 0; i < callbacks.length; i++) {
        var callback = callbacks[i];

        if (callback === fn) {
          callbacks.splice(i, 1);
          break;
        }
      }

      return this;
    }
  }]);

  return Emitter;
}();

var Dropzone =
/*#__PURE__*/
function (_Emitter) {
  _inherits(Dropzone, _Emitter);

  _createClass(Dropzone, null, [{
    key: "initClass",
    value: function initClass() {
      // Exposing the emitter class, mainly for tests
      this.prototype.Emitter = Emitter;
      /*
       This is a list of all available events you can register on a dropzone object.
        You can register an event handler like this:
        dropzone.on("dragEnter", function() { });
        */

      this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];
      this.prototype.defaultOptions = {
        /**
         * Has to be specified on elements other than form (or when the form
         * doesn't have an `action` attribute). You can also
         * provide a function that will be called with `files` and
         * must return the url (since `v3.12.0`)
         */
        url: null,

        /**
         * Can be changed to `"put"` if necessary. You can also provide a function
         * that will be called with `files` and must return the method (since `v3.12.0`).
         */
        method: "post",

        /**
         * Will be set on the XHRequest.
         */
        withCredentials: false,

        /**
         * The timeout for the XHR requests in milliseconds (since `v4.4.0`).
         */
        timeout: 30000,

        /**
         * How many file uploads to process in parallel (See the
         * Enqueuing file uploads documentation section for more info)
         */
        parallelUploads: 2,

        /**
         * Whether to send multiple files in one request. If
         * this it set to true, then the fallback file input element will
         * have the `multiple` attribute as well. This option will
         * also trigger additional events (like `processingmultiple`). See the events
         * documentation section for more information.
         */
        uploadMultiple: false,

        /**
         * Whether you want files to be uploaded in chunks to your server. This can't be
         * used in combination with `uploadMultiple`.
         *
         * See [chunksUploaded](#config-chunksUploaded) for the callback to finalise an upload.
         */
        chunking: false,

        /**
         * If `chunking` is enabled, this defines whether **every** file should be chunked,
         * even if the file size is below chunkSize. This means, that the additional chunk
         * form data will be submitted and the `chunksUploaded` callback will be invoked.
         */
        forceChunking: false,

        /**
         * If `chunking` is `true`, then this defines the chunk size in bytes.
         */
        chunkSize: 2000000,

        /**
         * If `true`, the individual chunks of a file are being uploaded simultaneously.
         */
        parallelChunkUploads: false,

        /**
         * Whether a chunk should be retried if it fails.
         */
        retryChunks: false,

        /**
         * If `retryChunks` is true, how many times should it be retried.
         */
        retryChunksLimit: 3,

        /**
         * If not `null` defines how many files this Dropzone handles. If it exceeds,
         * the event `maxfilesexceeded` will be called. The dropzone element gets the
         * class `dz-max-files-reached` accordingly so you can provide visual feedback.
         */
        maxFilesize: 256,

        /**
         * The name of the file param that gets transferred.
         * **NOTE**: If you have the option  `uploadMultiple` set to `true`, then
         * Dropzone will append `[]` to the name.
         */
        paramName: "file",

        /**
         * Whether thumbnails for images should be generated
         */
        createImageThumbnails: true,

        /**
         * In MB. When the filename exceeds this limit, the thumbnail will not be generated.
         */
        maxThumbnailFilesize: 10,

        /**
         * If `null`, the ratio of the image will be used to calculate it.
         */
        thumbnailWidth: 120,

        /**
         * The same as `thumbnailWidth`. If both are null, images will not be resized.
         */
        thumbnailHeight: 120,

        /**
         * How the images should be scaled down in case both, `thumbnailWidth` and `thumbnailHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        thumbnailMethod: 'crop',

        /**
         * If set, images will be resized to these dimensions before being **uploaded**.
         * If only one, `resizeWidth` **or** `resizeHeight` is provided, the original aspect
         * ratio of the file will be preserved.
         *
         * The `options.transformFile` function uses these options, so if the `transformFile` function
         * is overridden, these options don't do anything.
         */
        resizeWidth: null,

        /**
         * See `resizeWidth`.
         */
        resizeHeight: null,

        /**
         * The mime type of the resized image (before it gets uploaded to the server).
         * If `null` the original mime type will be used. To force jpeg, for example, use `image/jpeg`.
         * See `resizeWidth` for more information.
         */
        resizeMimeType: null,

        /**
         * The quality of the resized images. See `resizeWidth`.
         */
        resizeQuality: 0.8,

        /**
         * How the images should be scaled down in case both, `resizeWidth` and `resizeHeight` are provided.
         * Can be either `contain` or `crop`.
         */
        resizeMethod: 'contain',

        /**
         * The base that is used to calculate the filesize. You can change this to
         * 1024 if you would rather display kibibytes, mebibytes, etc...
         * 1024 is technically incorrect, because `1024 bytes` are `1 kibibyte` not `1 kilobyte`.
         * You can change this to `1024` if you don't care about validity.
         */
        filesizeBase: 1000,

        /**
         * Can be used to limit the maximum number of files that will be handled by this Dropzone
         */
        maxFiles: null,

        /**
         * An optional object to send additional headers to the server. Eg:
         * `{ "My-Awesome-Header": "header value" }`
         */
        headers: null,

        /**
         * If `true`, the dropzone element itself will be clickable, if `false`
         * nothing will be clickable.
         *
         * You can also pass an HTML element, a CSS selector (for multiple elements)
         * or an array of those. In that case, all of those elements will trigger an
         * upload when clicked.
         */
        clickable: true,

        /**
         * Whether hidden files in directories should be ignored.
         */
        ignoreHiddenFiles: true,

        /**
         * The default implementation of `accept` checks the file's mime type or
         * extension against this list. This is a comma separated list of mime
         * types or file extensions.
         *
         * Eg.: `image/*,application/pdf,.psd`
         *
         * If the Dropzone is `clickable` this option will also be used as
         * [`accept`](https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept)
         * parameter on the hidden file input as well.
         */
        acceptedFiles: null,

        /**
         * **Deprecated!**
         * Use acceptedFiles instead.
         */
        acceptedMimeTypes: null,

        /**
         * If false, files will be added to the queue but the queue will not be
         * processed automatically.
         * This can be useful if you need some additional user input before sending
         * files (or if you want want all files sent at once).
         * If you're ready to send the file simply call `myDropzone.processQueue()`.
         *
         * See the [enqueuing file uploads](#enqueuing-file-uploads) documentation
         * section for more information.
         */
        autoProcessQueue: true,

        /**
         * If false, files added to the dropzone will not be queued by default.
         * You'll have to call `enqueueFile(file)` manually.
         */
        autoQueue: true,

        /**
         * If `true`, this will add a link to every file preview to remove or cancel (if
         * already uploading) the file. The `dictCancelUpload`, `dictCancelUploadConfirmation`
         * and `dictRemoveFile` options are used for the wording.
         */
        addRemoveLinks: false,

        /**
         * Defines where to display the file previews – if `null` the
         * Dropzone element itself is used. Can be a plain `HTMLElement` or a CSS
         * selector. The element should have the `dropzone-previews` class so
         * the previews are displayed properly.
         */
        previewsContainer: null,

        /**
         * This is the element the hidden input field (which is used when clicking on the
         * dropzone to trigger file selection) will be appended to. This might
         * be important in case you use frameworks to switch the content of your page.
         *
         * Can be a selector string, or an element directly.
         */
        hiddenInputContainer: "body",

        /**
         * If null, no capture type will be specified
         * If camera, mobile devices will skip the file selection and choose camera
         * If microphone, mobile devices will skip the file selection and choose the microphone
         * If camcorder, mobile devices will skip the file selection and choose the camera in video mode
         * On apple devices multiple must be set to false.  AcceptedFiles may need to
         * be set to an appropriate mime type (e.g. "image/*", "audio/*", or "video/*").
         */
        capture: null,

        /**
         * **Deprecated**. Use `renameFile` instead.
         */
        renameFilename: null,

        /**
         * A function that is invoked before the file is uploaded to the server and renames the file.
         * This function gets the `File` as argument and can use the `file.name`. The actual name of the
         * file that gets used during the upload can be accessed through `file.upload.filename`.
         */
        renameFile: null,

        /**
         * If `true` the fallback will be forced. This is very useful to test your server
         * implementations first and make sure that everything works as
         * expected without dropzone if you experience problems, and to test
         * how your fallbacks will look.
         */
        forceFallback: false,

        /**
         * The text used before any files are dropped.
         */
        dictDefaultMessage: "Drop files here to upload",

        /**
         * The text that replaces the default message text it the browser is not supported.
         */
        dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",

        /**
         * The text that will be added before the fallback form.
         * If you provide a  fallback element yourself, or if this option is `null` this will
         * be ignored.
         */
        dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",

        /**
         * If the filesize is too big.
         * `{{filesize}}` and `{{maxFilesize}}` will be replaced with the respective configuration values.
         */
        dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",

        /**
         * If the file doesn't match the file type.
         */
        dictInvalidFileType: "You can't upload files of this type.",

        /**
         * If the server response was invalid.
         * `{{statusCode}}` will be replaced with the servers status code.
         */
        dictResponseError: "Server responded with {{statusCode}} code.",

        /**
         * If `addRemoveLinks` is true, the text to be used for the cancel upload link.
         */
        dictCancelUpload: "Cancel upload",

        /**
         * The text that is displayed if an upload was manually canceled
         */
        dictUploadCanceled: "Upload canceled.",

        /**
         * If `addRemoveLinks` is true, the text to be used for confirmation when cancelling upload.
         */
        dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",

        /**
         * If `addRemoveLinks` is true, the text to be used to remove a file.
         */
        dictRemoveFile: "Remove file",

        /**
         * If this is not null, then the user will be prompted before removing a file.
         */
        dictRemoveFileConfirmation: null,

        /**
         * Displayed if `maxFiles` is st and exceeded.
         * The string `{{maxFiles}}` will be replaced by the configuration value.
         */
        dictMaxFilesExceeded: "You can not upload any more files.",

        /**
         * Allows you to translate the different units. Starting with `tb` for terabytes and going down to
         * `b` for bytes.
         */
        dictFileSizeUnits: {
          tb: "TB",
          gb: "GB",
          mb: "MB",
          kb: "KB",
          b: "b"
        },

        /**
         * Called when dropzone initialized
         * You can add event listeners here
         */
        init: function init() {},

        /**
         * Can be an **object** of additional parameters to transfer to the server, **or** a `Function`
         * that gets invoked with the `files`, `xhr` and, if it's a chunked upload, `chunk` arguments. In case
         * of a function, this needs to return a map.
         *
         * The default implementation does nothing for normal uploads, but adds relevant information for
         * chunked uploads.
         *
         * This is the same as adding hidden input fields in the form element.
         */
        params: function params(files, xhr, chunk) {
          if (chunk) {
            return {
              dzuuid: chunk.file.upload.uuid,
              dzchunkindex: chunk.index,
              dztotalfilesize: chunk.file.size,
              dzchunksize: this.options.chunkSize,
              dztotalchunkcount: chunk.file.upload.totalChunkCount,
              dzchunkbyteoffset: chunk.index * this.options.chunkSize
            };
          }
        },

        /**
         * A function that gets a [file](https://developer.mozilla.org/en-US/docs/DOM/File)
         * and a `done` function as parameters.
         *
         * If the done function is invoked without arguments, the file is "accepted" and will
         * be processed. If you pass an error message, the file is rejected, and the error
         * message will be displayed.
         * This function will not be called if the file is too big or doesn't match the mime types.
         */
        accept: function accept(file, done) {
          return done();
        },

        /**
         * The callback that will be invoked when all chunks have been uploaded for a file.
         * It gets the file for which the chunks have been uploaded as the first parameter,
         * and the `done` function as second. `done()` needs to be invoked when everything
         * needed to finish the upload process is done.
         */
        chunksUploaded: function chunksUploaded(file, done) {
          done();
        },

        /**
         * Gets called when the browser is not supported.
         * The default implementation shows the fallback input field and adds
         * a text.
         */
        fallback: function fallback() {
          // This code should pass in IE7... :(
          var messageElement;
          this.element.className = "".concat(this.element.className, " dz-browser-not-supported");
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.element.getElementsByTagName("div")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var child = _step2.value;

              if (/(^| )dz-message($| )/.test(child.className)) {
                messageElement = child;
                child.className = "dz-message"; // Removes the 'dz-default' class

                break;
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          if (!messageElement) {
            messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
            this.element.appendChild(messageElement);
          }

          var span = messageElement.getElementsByTagName("span")[0];

          if (span) {
            if (span.textContent != null) {
              span.textContent = this.options.dictFallbackMessage;
            } else if (span.innerText != null) {
              span.innerText = this.options.dictFallbackMessage;
            }
          }

          return this.element.appendChild(this.getFallbackForm());
        },

        /**
         * Gets called to calculate the thumbnail dimensions.
         *
         * It gets `file`, `width` and `height` (both may be `null`) as parameters and must return an object containing:
         *
         *  - `srcWidth` & `srcHeight` (required)
         *  - `trgWidth` & `trgHeight` (required)
         *  - `srcX` & `srcY` (optional, default `0`)
         *  - `trgX` & `trgY` (optional, default `0`)
         *
         * Those values are going to be used by `ctx.drawImage()`.
         */
        resize: function resize(file, width, height, resizeMethod) {
          var info = {
            srcX: 0,
            srcY: 0,
            srcWidth: file.width,
            srcHeight: file.height
          };
          var srcRatio = file.width / file.height; // Automatically calculate dimensions if not specified

          if (width == null && height == null) {
            width = info.srcWidth;
            height = info.srcHeight;
          } else if (width == null) {
            width = height * srcRatio;
          } else if (height == null) {
            height = width / srcRatio;
          } // Make sure images aren't upscaled


          width = Math.min(width, info.srcWidth);
          height = Math.min(height, info.srcHeight);
          var trgRatio = width / height;

          if (info.srcWidth > width || info.srcHeight > height) {
            // Image is bigger and needs rescaling
            if (resizeMethod === 'crop') {
              if (srcRatio > trgRatio) {
                info.srcHeight = file.height;
                info.srcWidth = info.srcHeight * trgRatio;
              } else {
                info.srcWidth = file.width;
                info.srcHeight = info.srcWidth / trgRatio;
              }
            } else if (resizeMethod === 'contain') {
              // Method 'contain'
              if (srcRatio > trgRatio) {
                height = width / srcRatio;
              } else {
                width = height * srcRatio;
              }
            } else {
              throw new Error("Unknown resizeMethod '".concat(resizeMethod, "'"));
            }
          }

          info.srcX = (file.width - info.srcWidth) / 2;
          info.srcY = (file.height - info.srcHeight) / 2;
          info.trgWidth = width;
          info.trgHeight = height;
          return info;
        },

        /**
         * Can be used to transform the file (for example, resize an image if necessary).
         *
         * The default implementation uses `resizeWidth` and `resizeHeight` (if provided) and resizes
         * images according to those dimensions.
         *
         * Gets the `file` as the first parameter, and a `done()` function as the second, that needs
         * to be invoked with the file when the transformation is done.
         */
        transformFile: function transformFile(file, done) {
          if ((this.options.resizeWidth || this.options.resizeHeight) && file.type.match(/image.*/)) {
            return this.resizeImage(file, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, done);
          } else {
            return done(file);
          }
        },

        /**
         * A string that contains the template used for each dropped
         * file. Change it to fulfill your needs but make sure to properly
         * provide all elements.
         *
         * If you want to use an actual HTML element instead of providing a String
         * as a config option, you could create a div with the id `tpl`,
         * put the template inside it and provide the element like this:
         *
         *     document
         *       .querySelector('#tpl')
         *       .innerHTML
         *
         */
        previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>Check</title>\n      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <title>Error</title>\n      <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>",
        // END OPTIONS
        // (Required by the dropzone documentation parser)

        /*
         Those functions register themselves to the events on init and handle all
         the user interface specific stuff. Overwriting them won't break the upload
         but can break the way it's displayed.
         You can overwrite them if you don't like the default behavior. If you just
         want to add an additional event handler, register it on the dropzone object
         and don't overwrite those options.
         */
        // Those are self explanatory and simply concern the DragnDrop.
        drop: function drop(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragstart: function dragstart(e) {},
        dragend: function dragend(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        dragenter: function dragenter(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragover: function dragover(e) {
          return this.element.classList.add("dz-drag-hover");
        },
        dragleave: function dragleave(e) {
          return this.element.classList.remove("dz-drag-hover");
        },
        paste: function paste(e) {},
        // Called whenever there are no files left in the dropzone anymore, and the
        // dropzone should be displayed as if in the initial state.
        reset: function reset() {
          return this.element.classList.remove("dz-started");
        },
        // Called when a file is added to the queue
        // Receives `file`
        addedfile: function addedfile(file) {
          var _this2 = this;

          if (this.element === this.previewsContainer) {
            this.element.classList.add("dz-started");
          }

          if (this.previewsContainer) {
            file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
            file.previewTemplate = file.previewElement; // Backwards compatibility

            this.previewsContainer.appendChild(file.previewElement);
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = file.previewElement.querySelectorAll("[data-dz-name]")[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var node = _step3.value;
                node.textContent = file.name;
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                  _iterator3["return"]();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = file.previewElement.querySelectorAll("[data-dz-size]")[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                node = _step4.value;
                node.innerHTML = this.filesize(file.size);
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                  _iterator4["return"]();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            if (this.options.addRemoveLinks) {
              file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>".concat(this.options.dictRemoveFile, "</a>"));
              file.previewElement.appendChild(file._removeLink);
            }

            var removeFileEvent = function removeFileEvent(e) {
              e.preventDefault();
              e.stopPropagation();

              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this2.options.dictCancelUploadConfirmation, function () {
                  return _this2.removeFile(file);
                });
              } else {
                if (_this2.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this2.options.dictRemoveFileConfirmation, function () {
                    return _this2.removeFile(file);
                  });
                } else {
                  return _this2.removeFile(file);
                }
              }
            };

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = file.previewElement.querySelectorAll("[data-dz-remove]")[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var removeLink = _step5.value;
                removeLink.addEventListener("click", removeFileEvent);
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                  _iterator5["return"]();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }
          }
        },
        // Called whenever a file is removed.
        removedfile: function removedfile(file) {
          if (file.previewElement != null && file.previewElement.parentNode != null) {
            file.previewElement.parentNode.removeChild(file.previewElement);
          }

          return this._updateMaxFilesReachedClass();
        },
        // Called when a thumbnail has been generated
        // Receives `file` and `dataUrl`
        thumbnail: function thumbnail(file, dataUrl) {
          if (file.previewElement) {
            file.previewElement.classList.remove("dz-file-preview");
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = file.previewElement.querySelectorAll("[data-dz-thumbnail]")[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var thumbnailElement = _step6.value;
                thumbnailElement.alt = file.name;
                thumbnailElement.src = dataUrl;
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                  _iterator6["return"]();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }

            return setTimeout(function () {
              return file.previewElement.classList.add("dz-image-preview");
            }, 1);
          }
        },
        // Called whenever an error occurs
        // Receives `file` and `message`
        error: function error(file, message) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-error");

            if (typeof message !== "String" && message.error) {
              message = message.error;
            }

            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = file.previewElement.querySelectorAll("[data-dz-errormessage]")[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var node = _step7.value;
                node.textContent = message;
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                  _iterator7["return"]();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }
          }
        },
        errormultiple: function errormultiple() {},
        // Called when a file gets processed. Since there is a cue, not all added
        // files are processed immediately.
        // Receives `file`
        processing: function processing(file) {
          if (file.previewElement) {
            file.previewElement.classList.add("dz-processing");

            if (file._removeLink) {
              return file._removeLink.innerHTML = this.options.dictCancelUpload;
            }
          }
        },
        processingmultiple: function processingmultiple() {},
        // Called whenever the upload progress gets updated.
        // Receives `file`, `progress` (percentage 0-100) and `bytesSent`.
        // To get the total number of bytes of the file, use `file.size`
        uploadprogress: function uploadprogress(file, progress, bytesSent) {
          if (file.previewElement) {
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
              for (var _iterator8 = file.previewElement.querySelectorAll("[data-dz-uploadprogress]")[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                var node = _step8.value;
                node.nodeName === 'PROGRESS' ? node.value = progress : node.style.width = "".concat(progress, "%");
              }
            } catch (err) {
              _didIteratorError8 = true;
              _iteratorError8 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                  _iterator8["return"]();
                }
              } finally {
                if (_didIteratorError8) {
                  throw _iteratorError8;
                }
              }
            }
          }
        },
        // Called whenever the total upload progress gets updated.
        // Called with totalUploadProgress (0-100), totalBytes and totalBytesSent
        totaluploadprogress: function totaluploadprogress() {},
        // Called just before the file is sent. Gets the `xhr` object as second
        // parameter, so you can modify it (for example to add a CSRF token) and a
        // `formData` object to add additional information.
        sending: function sending() {},
        sendingmultiple: function sendingmultiple() {},
        // When the complete upload is finished and successful
        // Receives `file`
        success: function success(file) {
          if (file.previewElement) {
            return file.previewElement.classList.add("dz-success");
          }
        },
        successmultiple: function successmultiple() {},
        // When the upload is canceled.
        canceled: function canceled(file) {
          return this.emit("error", file, this.options.dictUploadCanceled);
        },
        canceledmultiple: function canceledmultiple() {},
        // When the upload is finished, either with success or an error.
        // Receives `file`
        complete: function complete(file) {
          if (file._removeLink) {
            file._removeLink.innerHTML = this.options.dictRemoveFile;
          }

          if (file.previewElement) {
            return file.previewElement.classList.add("dz-complete");
          }
        },
        completemultiple: function completemultiple() {},
        maxfilesexceeded: function maxfilesexceeded() {},
        maxfilesreached: function maxfilesreached() {},
        queuecomplete: function queuecomplete() {},
        addedfiles: function addedfiles() {}
      };
      this.prototype._thumbnailQueue = [];
      this.prototype._processingThumbnail = false;
    } // global utility

  }, {
    key: "extend",
    value: function extend(target) {
      for (var _len2 = arguments.length, objects = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        objects[_key2 - 1] = arguments[_key2];
      }

      for (var _i = 0, _objects = objects; _i < _objects.length; _i++) {
        var object = _objects[_i];

        for (var key in object) {
          var val = object[key];
          target[key] = val;
        }
      }

      return target;
    }
  }]);

  function Dropzone(el, options) {
    var _this;

    _classCallCheck(this, Dropzone);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropzone).call(this));
    var fallback, left;
    _this.element = el; // For backwards compatibility since the version was in the prototype previously

    _this.version = Dropzone.version;
    _this.defaultOptions.previewTemplate = _this.defaultOptions.previewTemplate.replace(/\n*/g, "");
    _this.clickableElements = [];
    _this.listeners = [];
    _this.files = []; // All files

    if (typeof _this.element === "string") {
      _this.element = document.querySelector(_this.element);
    } // Not checking if instance of HTMLElement or Element since IE9 is extremely weird.


    if (!_this.element || _this.element.nodeType == null) {
      throw new Error("Invalid dropzone element.");
    }

    if (_this.element.dropzone) {
      throw new Error("Dropzone already attached.");
    } // Now add this dropzone to the instances.


    Dropzone.instances.push(_assertThisInitialized(_this)); // Put the dropzone inside the element itself.

    _this.element.dropzone = _assertThisInitialized(_this);
    var elementOptions = (left = Dropzone.optionsForElement(_this.element)) != null ? left : {};
    _this.options = Dropzone.extend({}, _this.defaultOptions, elementOptions, options != null ? options : {}); // If the browser failed, just call the fallback and leave

    if (_this.options.forceFallback || !Dropzone.isBrowserSupported()) {
      return _possibleConstructorReturn(_this, _this.options.fallback.call(_assertThisInitialized(_this)));
    } // @options.url = @element.getAttribute "action" unless @options.url?


    if (_this.options.url == null) {
      _this.options.url = _this.element.getAttribute("action");
    }

    if (!_this.options.url) {
      throw new Error("No URL provided.");
    }

    if (_this.options.acceptedFiles && _this.options.acceptedMimeTypes) {
      throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
    }

    if (_this.options.uploadMultiple && _this.options.chunking) {
      throw new Error('You cannot set both: uploadMultiple and chunking.');
    } // Backwards compatibility


    if (_this.options.acceptedMimeTypes) {
      _this.options.acceptedFiles = _this.options.acceptedMimeTypes;
      delete _this.options.acceptedMimeTypes;
    } // Backwards compatibility


    if (_this.options.renameFilename != null) {
      _this.options.renameFile = function (file) {
        return _this.options.renameFilename.call(_assertThisInitialized(_this), file.name, file);
      };
    }

    _this.options.method = _this.options.method.toUpperCase();

    if ((fallback = _this.getExistingFallback()) && fallback.parentNode) {
      // Remove the fallback
      fallback.parentNode.removeChild(fallback);
    } // Display previews in the previewsContainer element or the Dropzone element unless explicitly set to false


    if (_this.options.previewsContainer !== false) {
      if (_this.options.previewsContainer) {
        _this.previewsContainer = Dropzone.getElement(_this.options.previewsContainer, "previewsContainer");
      } else {
        _this.previewsContainer = _this.element;
      }
    }

    if (_this.options.clickable) {
      if (_this.options.clickable === true) {
        _this.clickableElements = [_this.element];
      } else {
        _this.clickableElements = Dropzone.getElements(_this.options.clickable, "clickable");
      }
    }

    _this.init();

    return _this;
  } // Returns all files that have been accepted


  _createClass(Dropzone, [{
    key: "getAcceptedFiles",
    value: function getAcceptedFiles() {
      return this.files.filter(function (file) {
        return file.accepted;
      }).map(function (file) {
        return file;
      });
    } // Returns all files that have been rejected
    // Not sure when that's going to be useful, but added for completeness.

  }, {
    key: "getRejectedFiles",
    value: function getRejectedFiles() {
      return this.files.filter(function (file) {
        return !file.accepted;
      }).map(function (file) {
        return file;
      });
    }
  }, {
    key: "getFilesWithStatus",
    value: function getFilesWithStatus(status) {
      return this.files.filter(function (file) {
        return file.status === status;
      }).map(function (file) {
        return file;
      });
    } // Returns all files that are in the queue

  }, {
    key: "getQueuedFiles",
    value: function getQueuedFiles() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    }
  }, {
    key: "getUploadingFiles",
    value: function getUploadingFiles() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    }
  }, {
    key: "getAddedFiles",
    value: function getAddedFiles() {
      return this.getFilesWithStatus(Dropzone.ADDED);
    } // Files that are either queued or uploading

  }, {
    key: "getActiveFiles",
    value: function getActiveFiles() {
      return this.files.filter(function (file) {
        return file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED;
      }).map(function (file) {
        return file;
      });
    } // The function that gets called when Dropzone is initialized. You
    // can (and should) setup event listeners inside this function.

  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      // In case it isn't set already
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }

      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><button class=\"dz-button\" type=\"button\">".concat(this.options.dictDefaultMessage, "</button></div>")));
      }

      if (this.clickableElements.length) {
        var setupHiddenFileInput = function setupHiddenFileInput() {
          if (_this3.hiddenFileInput) {
            _this3.hiddenFileInput.parentNode.removeChild(_this3.hiddenFileInput);
          }

          _this3.hiddenFileInput = document.createElement("input");

          _this3.hiddenFileInput.setAttribute("type", "file");

          if (_this3.options.maxFiles === null || _this3.options.maxFiles > 1) {
            _this3.hiddenFileInput.setAttribute("multiple", "multiple");
          }

          _this3.hiddenFileInput.className = "dz-hidden-input";

          if (_this3.options.acceptedFiles !== null) {
            _this3.hiddenFileInput.setAttribute("accept", _this3.options.acceptedFiles);
          }

          if (_this3.options.capture !== null) {
            _this3.hiddenFileInput.setAttribute("capture", _this3.options.capture);
          } // Not setting `display="none"` because some browsers don't accept clicks
          // on elements that aren't displayed.


          _this3.hiddenFileInput.style.visibility = "hidden";
          _this3.hiddenFileInput.style.position = "absolute";
          _this3.hiddenFileInput.style.top = "0";
          _this3.hiddenFileInput.style.left = "0";
          _this3.hiddenFileInput.style.height = "0";
          _this3.hiddenFileInput.style.width = "0";
          Dropzone.getElement(_this3.options.hiddenInputContainer, 'hiddenInputContainer').appendChild(_this3.hiddenFileInput);
          return _this3.hiddenFileInput.addEventListener("change", function () {
            var files = _this3.hiddenFileInput.files;

            if (files.length) {
              var _iteratorNormalCompletion9 = true;
              var _didIteratorError9 = false;
              var _iteratorError9 = undefined;

              try {
                for (var _iterator9 = files[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                  var file = _step9.value;

                  _this3.addFile(file);
                }
              } catch (err) {
                _didIteratorError9 = true;
                _iteratorError9 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                    _iterator9["return"]();
                  }
                } finally {
                  if (_didIteratorError9) {
                    throw _iteratorError9;
                  }
                }
              }
            }

            _this3.emit("addedfiles", files);

            return setupHiddenFileInput();
          });
        };

        setupHiddenFileInput();
      }

      this.URL = window.URL !== null ? window.URL : window.webkitURL; // Setup all event listeners on the Dropzone object itself.
      // They're not in @setupEventListeners() because they shouldn't be removed
      // again when the dropzone gets disabled.

      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = this.events[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var eventName = _step10.value;
          this.on(eventName, this.options[eventName]);
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
            _iterator10["return"]();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }

      this.on("uploadprogress", function () {
        return _this3.updateTotalUploadProgress();
      });
      this.on("removedfile", function () {
        return _this3.updateTotalUploadProgress();
      });
      this.on("canceled", function (file) {
        return _this3.emit("complete", file);
      }); // Emit a `queuecomplete` event if all files finished uploading.

      this.on("complete", function (file) {
        if (_this3.getAddedFiles().length === 0 && _this3.getUploadingFiles().length === 0 && _this3.getQueuedFiles().length === 0) {
          // This needs to be deferred so that `queuecomplete` really triggers after `complete`
          return setTimeout(function () {
            return _this3.emit("queuecomplete");
          }, 0);
        }
      });

      var containsFiles = function containsFiles(e) {
        return e.dataTransfer.types && e.dataTransfer.types.some(function (type) {
          return type == "Files";
        });
      };

      var noPropagation = function noPropagation(e) {
        // If there are no files, we don't want to stop
        // propagation so we don't interfere with other
        // drag and drop behaviour.
        if (!containsFiles(e)) return;
        e.stopPropagation();

        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      }; // Create the listeners


      this.listeners = [{
        element: this.element,
        events: {
          "dragstart": function dragstart(e) {
            return _this3.emit("dragstart", e);
          },
          "dragenter": function dragenter(e) {
            noPropagation(e);
            return _this3.emit("dragenter", e);
          },
          "dragover": function dragover(e) {
            // Makes it possible to drag files from chrome's download bar
            // http://stackoverflow.com/questions/19526430/drag-and-drop-file-uploads-from-chrome-downloads-bar
            // Try is required to prevent bug in Internet Explorer 11 (SCRIPT65535 exception)
            var efct;

            try {
              efct = e.dataTransfer.effectAllowed;
            } catch (error) {}

            e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
            noPropagation(e);
            return _this3.emit("dragover", e);
          },
          "dragleave": function dragleave(e) {
            return _this3.emit("dragleave", e);
          },
          "drop": function drop(e) {
            noPropagation(e);
            return _this3.drop(e);
          },
          "dragend": function dragend(e) {
            return _this3.emit("dragend", e);
          }
        } // This is disabled right now, because the browsers don't implement it properly.
        // "paste": (e) =>
        //   noPropagation e
        //   @paste e

      }];
      this.clickableElements.forEach(function (clickableElement) {
        return _this3.listeners.push({
          element: clickableElement,
          events: {
            "click": function click(evt) {
              // Only the actual dropzone or the message element should trigger file selection
              if (clickableElement !== _this3.element || evt.target === _this3.element || Dropzone.elementInside(evt.target, _this3.element.querySelector(".dz-message"))) {
                _this3.hiddenFileInput.click(); // Forward the click

              }

              return true;
            }
          }
        });
      });
      this.enable();
      return this.options.init.call(this);
    } // Not fully tested yet

  }, {
    key: "destroy",
    value: function destroy() {
      this.disable();
      this.removeAllFiles(true);

      if (this.hiddenFileInput != null ? this.hiddenFileInput.parentNode : undefined) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }

      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    }
  }, {
    key: "updateTotalUploadProgress",
    value: function updateTotalUploadProgress() {
      var totalUploadProgress;
      var totalBytesSent = 0;
      var totalBytes = 0;
      var activeFiles = this.getActiveFiles();

      if (activeFiles.length) {
        var _iteratorNormalCompletion11 = true;
        var _didIteratorError11 = false;
        var _iteratorError11 = undefined;

        try {
          for (var _iterator11 = this.getActiveFiles()[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
            var file = _step11.value;
            totalBytesSent += file.upload.bytesSent;
            totalBytes += file.upload.total;
          }
        } catch (err) {
          _didIteratorError11 = true;
          _iteratorError11 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
              _iterator11["return"]();
            }
          } finally {
            if (_didIteratorError11) {
              throw _iteratorError11;
            }
          }
        }

        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }

      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    } // @options.paramName can be a function taking one parameter rather than a string.
    // A parameter name for a file is obtained simply by calling this with an index number.

  }, {
    key: "_getParamName",
    value: function _getParamName(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "".concat(this.options.paramName).concat(this.options.uploadMultiple ? "[".concat(n, "]") : "");
      }
    } // If @options.renameFile is a function,
    // the function will be used to rename the file.name before appending it to the formData

  }, {
    key: "_renameFile",
    value: function _renameFile(file) {
      if (typeof this.options.renameFile !== "function") {
        return file.name;
      }

      return this.options.renameFile(file);
    } // Returns a form that can be used as fallback if the browser does not support DragnDrop
    //
    // If the dropzone is already a form, only the input field and button are returned. Otherwise a complete form element is provided.
    // This code has to pass in IE7 :(

  }, {
    key: "getFallbackForm",
    value: function getFallbackForm() {
      var existingFallback, form;

      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }

      var fieldsString = "<div class=\"dz-fallback\">";

      if (this.options.dictFallbackText) {
        fieldsString += "<p>".concat(this.options.dictFallbackText, "</p>");
      }

      fieldsString += "<input type=\"file\" name=\"".concat(this._getParamName(0), "\" ").concat(this.options.uploadMultiple ? 'multiple="multiple"' : undefined, " /><input type=\"submit\" value=\"Upload!\"></div>");
      var fields = Dropzone.createElement(fieldsString);

      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"".concat(this.options.url, "\" enctype=\"multipart/form-data\" method=\"").concat(this.options.method, "\"></form>"));
        form.appendChild(fields);
      } else {
        // Make sure that the enctype and method attributes are set properly
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }

      return form != null ? form : fields;
    } // Returns the fallback elements if they exist already
    //
    // This code has to pass in IE7 :(

  }, {
    key: "getExistingFallback",
    value: function getExistingFallback() {
      var getFallback = function getFallback(elements) {
        var _iteratorNormalCompletion12 = true;
        var _didIteratorError12 = false;
        var _iteratorError12 = undefined;

        try {
          for (var _iterator12 = elements[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
            var el = _step12.value;

            if (/(^| )fallback($| )/.test(el.className)) {
              return el;
            }
          }
        } catch (err) {
          _didIteratorError12 = true;
          _iteratorError12 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
              _iterator12["return"]();
            }
          } finally {
            if (_didIteratorError12) {
              throw _iteratorError12;
            }
          }
        }
      };

      for (var _i2 = 0, _arr = ["div", "form"]; _i2 < _arr.length; _i2++) {
        var tagName = _arr[_i2];
        var fallback;

        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    } // Activates all listeners stored in @listeners

  }, {
    key: "setupEventListeners",
    value: function setupEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];

          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.addEventListener(event, listener, false));
          }

          return result;
        }();
      });
    } // Deactivates all listeners stored in @listeners

  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      return this.listeners.map(function (elementListeners) {
        return function () {
          var result = [];

          for (var event in elementListeners.events) {
            var listener = elementListeners.events[event];
            result.push(elementListeners.element.removeEventListener(event, listener, false));
          }

          return result;
        }();
      });
    } // Removes all event listeners and cancels all files in the queue or being processed.

  }, {
    key: "disable",
    value: function disable() {
      var _this4 = this;

      this.clickableElements.forEach(function (element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      this.disabled = true;
      return this.files.map(function (file) {
        return _this4.cancelUpload(file);
      });
    }
  }, {
    key: "enable",
    value: function enable() {
      delete this.disabled;
      this.clickableElements.forEach(function (element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    } // Returns a nicely formatted filesize

  }, {
    key: "filesize",
    value: function filesize(size) {
      var selectedSize = 0;
      var selectedUnit = "b";

      if (size > 0) {
        var units = ['tb', 'gb', 'mb', 'kb', 'b'];

        for (var i = 0; i < units.length; i++) {
          var unit = units[i];
          var cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;

          if (size >= cutoff) {
            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
            selectedUnit = unit;
            break;
          }
        }

        selectedSize = Math.round(10 * selectedSize) / 10; // Cutting of digits
      }

      return "<strong>".concat(selectedSize, "</strong> ").concat(this.options.dictFileSizeUnits[selectedUnit]);
    } // Adds or removes the `dz-max-files-reached` class from the form.

  }, {
    key: "_updateMaxFilesReachedClass",
    value: function _updateMaxFilesReachedClass() {
      if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }

        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    }
  }, {
    key: "drop",
    value: function drop(e) {
      if (!e.dataTransfer) {
        return;
      }

      this.emit("drop", e); // Convert the FileList to an Array
      // This is necessary for IE11

      var files = [];

      for (var i = 0; i < e.dataTransfer.files.length; i++) {
        files[i] = e.dataTransfer.files[i];
      } // Even if it's a folder, files.length will contain the folders.


      if (files.length) {
        var items = e.dataTransfer.items;

        if (items && items.length && items[0].webkitGetAsEntry != null) {
          // The browser supports dropping of folders, so handle items instead of files
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }

      this.emit("addedfiles", files);
    }
  }, {
    key: "paste",
    value: function paste(e) {
      if (__guard__(e != null ? e.clipboardData : undefined, function (x) {
        return x.items;
      }) == null) {
        return;
      }

      this.emit("paste", e);
      var items = e.clipboardData.items;

      if (items.length) {
        return this._addFilesFromItems(items);
      }
    }
  }, {
    key: "handleFiles",
    value: function handleFiles(files) {
      var _iteratorNormalCompletion13 = true;
      var _didIteratorError13 = false;
      var _iteratorError13 = undefined;

      try {
        for (var _iterator13 = files[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
          var file = _step13.value;
          this.addFile(file);
        }
      } catch (err) {
        _didIteratorError13 = true;
        _iteratorError13 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
            _iterator13["return"]();
          }
        } finally {
          if (_didIteratorError13) {
            throw _iteratorError13;
          }
        }
      }
    } // When a folder is dropped (or files are pasted), items must be handled
    // instead of files.

  }, {
    key: "_addFilesFromItems",
    value: function _addFilesFromItems(items) {
      var _this5 = this;

      return function () {
        var result = [];
        var _iteratorNormalCompletion14 = true;
        var _didIteratorError14 = false;
        var _iteratorError14 = undefined;

        try {
          for (var _iterator14 = items[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
            var item = _step14.value;
            var entry;

            if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
              if (entry.isFile) {
                result.push(_this5.addFile(item.getAsFile()));
              } else if (entry.isDirectory) {
                // Append all files from that directory to files
                result.push(_this5._addFilesFromDirectory(entry, entry.name));
              } else {
                result.push(undefined);
              }
            } else if (item.getAsFile != null) {
              if (item.kind == null || item.kind === "file") {
                result.push(_this5.addFile(item.getAsFile()));
              } else {
                result.push(undefined);
              }
            } else {
              result.push(undefined);
            }
          }
        } catch (err) {
          _didIteratorError14 = true;
          _iteratorError14 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
              _iterator14["return"]();
            }
          } finally {
            if (_didIteratorError14) {
              throw _iteratorError14;
            }
          }
        }

        return result;
      }();
    } // Goes through the directory, and adds each file it finds recursively

  }, {
    key: "_addFilesFromDirectory",
    value: function _addFilesFromDirectory(directory, path) {
      var _this6 = this;

      var dirReader = directory.createReader();

      var errorHandler = function errorHandler(error) {
        return __guardMethod__(console, 'log', function (o) {
          return o.log(error);
        });
      };

      var readEntries = function readEntries() {
        return dirReader.readEntries(function (entries) {
          if (entries.length > 0) {
            var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
              for (var _iterator15 = entries[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                var entry = _step15.value;

                if (entry.isFile) {
                  entry.file(function (file) {
                    if (_this6.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                      return;
                    }

                    file.fullPath = "".concat(path, "/").concat(file.name);
                    return _this6.addFile(file);
                  });
                } else if (entry.isDirectory) {
                  _this6._addFilesFromDirectory(entry, "".concat(path, "/").concat(entry.name));
                }
              } // Recursively call readEntries() again, since browser only handle
              // the first 100 entries.
              // See: https://developer.mozilla.org/en-US/docs/Web/API/DirectoryReader#readEntries

            } catch (err) {
              _didIteratorError15 = true;
              _iteratorError15 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
                  _iterator15["return"]();
                }
              } finally {
                if (_didIteratorError15) {
                  throw _iteratorError15;
                }
              }
            }

            readEntries();
          }

          return null;
        }, errorHandler);
      };

      return readEntries();
    } // If `done()` is called without argument the file is accepted
    // If you call it with an error message, the file is rejected
    // (This allows for asynchronous validation)
    //
    // This function checks the filesize, and if the file.type passes the
    // `acceptedFiles` check.

  }, {
    key: "accept",
    value: function accept(file, done) {
      if (this.options.maxFilesize && file.size > this.options.maxFilesize * 1024 * 1024) {
        done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        done(this.options.dictInvalidFileType);
      } else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        this.emit("maxfilesexceeded", file);
      } else {
        this.options.accept.call(this, file, done);
      }
    }
  }, {
    key: "addFile",
    value: function addFile(file) {
      var _this7 = this;

      file.upload = {
        uuid: Dropzone.uuidv4(),
        progress: 0,
        // Setting the total upload size to file.size for the beginning
        // It's actual different than the size to be transmitted.
        total: file.size,
        bytesSent: 0,
        filename: this._renameFile(file) // Not setting chunking information here, because the acutal data — and
        // thus the chunks — might change if `options.transformFile` is set
        // and does something to the data.

      };
      this.files.push(file);
      file.status = Dropzone.ADDED;
      this.emit("addedfile", file);

      this._enqueueThumbnail(file);

      this.accept(file, function (error) {
        if (error) {
          file.accepted = false;

          _this7._errorProcessing([file], error); // Will set the file.status

        } else {
          file.accepted = true;

          if (_this7.options.autoQueue) {
            _this7.enqueueFile(file);
          } // Will set .accepted = true

        }

        _this7._updateMaxFilesReachedClass();
      });
    } // Wrapper for enqueueFile

  }, {
    key: "enqueueFiles",
    value: function enqueueFiles(files) {
      var _iteratorNormalCompletion16 = true;
      var _didIteratorError16 = false;
      var _iteratorError16 = undefined;

      try {
        for (var _iterator16 = files[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
          var file = _step16.value;
          this.enqueueFile(file);
        }
      } catch (err) {
        _didIteratorError16 = true;
        _iteratorError16 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
            _iterator16["return"]();
          }
        } finally {
          if (_didIteratorError16) {
            throw _iteratorError16;
          }
        }
      }

      return null;
    }
  }, {
    key: "enqueueFile",
    value: function enqueueFile(file) {
      var _this8 = this;

      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;

        if (this.options.autoProcessQueue) {
          return setTimeout(function () {
            return _this8.processQueue();
          }, 0); // Deferring the call
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    }
  }, {
    key: "_enqueueThumbnail",
    value: function _enqueueThumbnail(file) {
      var _this9 = this;

      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);

        return setTimeout(function () {
          return _this9._processThumbnailQueue();
        }, 0); // Deferring the call
      }
    }
  }, {
    key: "_processThumbnailQueue",
    value: function _processThumbnailQueue() {
      var _this10 = this;

      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }

      this._processingThumbnail = true;

      var file = this._thumbnailQueue.shift();

      return this.createThumbnail(file, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, true, function (dataUrl) {
        _this10.emit("thumbnail", file, dataUrl);

        _this10._processingThumbnail = false;
        return _this10._processThumbnailQueue();
      });
    } // Can be called by the user to remove a file

  }, {
    key: "removeFile",
    value: function removeFile(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }

      this.files = without(this.files, file);
      this.emit("removedfile", file);

      if (this.files.length === 0) {
        return this.emit("reset");
      }
    } // Removes all files that aren't currently processed from the list

  }, {
    key: "removeAllFiles",
    value: function removeAllFiles(cancelIfNecessary) {
      // Create a copy of files since removeFile() changes the @files array.
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }

      var _iteratorNormalCompletion17 = true;
      var _didIteratorError17 = false;
      var _iteratorError17 = undefined;

      try {
        for (var _iterator17 = this.files.slice()[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
          var file = _step17.value;

          if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
            this.removeFile(file);
          }
        }
      } catch (err) {
        _didIteratorError17 = true;
        _iteratorError17 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
            _iterator17["return"]();
          }
        } finally {
          if (_didIteratorError17) {
            throw _iteratorError17;
          }
        }
      }

      return null;
    } // Resizes an image before it gets sent to the server. This function is the default behavior of
    // `options.transformFile` if `resizeWidth` or `resizeHeight` are set. The callback is invoked with
    // the resized blob.

  }, {
    key: "resizeImage",
    value: function resizeImage(file, width, height, resizeMethod, callback) {
      var _this11 = this;

      return this.createThumbnail(file, width, height, resizeMethod, true, function (dataUrl, canvas) {
        if (canvas == null) {
          // The image has not been resized
          return callback(file);
        } else {
          var resizeMimeType = _this11.options.resizeMimeType;

          if (resizeMimeType == null) {
            resizeMimeType = file.type;
          }

          var resizedDataURL = canvas.toDataURL(resizeMimeType, _this11.options.resizeQuality);

          if (resizeMimeType === 'image/jpeg' || resizeMimeType === 'image/jpg') {
            // Now add the original EXIF information
            resizedDataURL = ExifRestore.restore(file.dataURL, resizedDataURL);
          }

          return callback(Dropzone.dataURItoBlob(resizedDataURL));
        }
      });
    }
  }, {
    key: "createThumbnail",
    value: function createThumbnail(file, width, height, resizeMethod, fixOrientation, callback) {
      var _this12 = this;

      var fileReader = new FileReader();

      fileReader.onload = function () {
        file.dataURL = fileReader.result; // Don't bother creating a thumbnail for SVG images since they're vector

        if (file.type === "image/svg+xml") {
          if (callback != null) {
            callback(fileReader.result);
          }

          return;
        }

        _this12.createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback);
      };

      fileReader.readAsDataURL(file);
    } // `mockFile` needs to have these attributes:
    // 
    //     { name: 'name', size: 12345, imageUrl: '' }
    //
    // `callback` will be invoked when the image has been downloaded and displayed.
    // `crossOrigin` will be added to the `img` tag when accessing the file.

  }, {
    key: "displayExistingFile",
    value: function displayExistingFile(mockFile, imageUrl, callback, crossOrigin) {
      var _this13 = this;

      var resizeThumbnail = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      this.emit("addedfile", mockFile);
      this.emit("complete", mockFile);

      if (!resizeThumbnail) {
        this.emit("thumbnail", mockFile, imageUrl);
        if (callback) callback();
      } else {
        var onDone = function onDone(thumbnail) {
          _this13.emit('thumbnail', mockFile, thumbnail);

          if (callback) callback();
        };

        mockFile.dataURL = imageUrl;
        this.createThumbnailFromUrl(mockFile, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.resizeMethod, this.options.fixOrientation, onDone, crossOrigin);
      }
    }
  }, {
    key: "createThumbnailFromUrl",
    value: function createThumbnailFromUrl(file, width, height, resizeMethod, fixOrientation, callback, crossOrigin) {
      var _this14 = this;

      // Not using `new Image` here because of a bug in latest Chrome versions.
      // See https://github.com/enyo/dropzone/pull/226
      var img = document.createElement("img");

      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }

      img.onload = function () {
        var loadExif = function loadExif(callback) {
          return callback(1);
        };

        if (typeof EXIF !== 'undefined' && EXIF !== null && fixOrientation) {
          loadExif = function loadExif(callback) {
            return EXIF.getData(img, function () {
              return callback(EXIF.getTag(this, 'Orientation'));
            });
          };
        }

        return loadExif(function (orientation) {
          file.width = img.width;
          file.height = img.height;

          var resizeInfo = _this14.options.resize.call(_this14, file, width, height, resizeMethod);

          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          canvas.width = resizeInfo.trgWidth;
          canvas.height = resizeInfo.trgHeight;

          if (orientation > 4) {
            canvas.width = resizeInfo.trgHeight;
            canvas.height = resizeInfo.trgWidth;
          }

          switch (orientation) {
            case 2:
              // horizontal flip
              ctx.translate(canvas.width, 0);
              ctx.scale(-1, 1);
              break;

            case 3:
              // 180° rotate left
              ctx.translate(canvas.width, canvas.height);
              ctx.rotate(Math.PI);
              break;

            case 4:
              // vertical flip
              ctx.translate(0, canvas.height);
              ctx.scale(1, -1);
              break;

            case 5:
              // vertical flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.scale(1, -1);
              break;

            case 6:
              // 90° rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(0, -canvas.width);
              break;

            case 7:
              // horizontal flip + 90 rotate right
              ctx.rotate(0.5 * Math.PI);
              ctx.translate(canvas.height, -canvas.width);
              ctx.scale(-1, 1);
              break;

            case 8:
              // 90° rotate left
              ctx.rotate(-0.5 * Math.PI);
              ctx.translate(-canvas.height, 0);
              break;
          } // This is a bugfix for iOS' scaling bug.


          drawImageIOSFix(ctx, img, resizeInfo.srcX != null ? resizeInfo.srcX : 0, resizeInfo.srcY != null ? resizeInfo.srcY : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, resizeInfo.trgX != null ? resizeInfo.trgX : 0, resizeInfo.trgY != null ? resizeInfo.trgY : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
          var thumbnail = canvas.toDataURL("image/png");

          if (callback != null) {
            return callback(thumbnail, canvas);
          }
        });
      };

      if (callback != null) {
        img.onerror = callback;
      }

      return img.src = file.dataURL;
    } // Goes through the queue and processes files if there aren't too many already.

  }, {
    key: "processQueue",
    value: function processQueue() {
      var parallelUploads = this.options.parallelUploads;
      var processingLength = this.getUploadingFiles().length;
      var i = processingLength; // There are already at least as many files uploading than should be

      if (processingLength >= parallelUploads) {
        return;
      }

      var queuedFiles = this.getQueuedFiles();

      if (!(queuedFiles.length > 0)) {
        return;
      }

      if (this.options.uploadMultiple) {
        // The files should be uploaded in one request
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          } // Nothing left to process


          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    } // Wrapper for `processFiles`

  }, {
    key: "processFile",
    value: function processFile(file) {
      return this.processFiles([file]);
    } // Loads the file, then calls finishedLoading()

  }, {
    key: "processFiles",
    value: function processFiles(files) {
      var _iteratorNormalCompletion18 = true;
      var _didIteratorError18 = false;
      var _iteratorError18 = undefined;

      try {
        for (var _iterator18 = files[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
          var file = _step18.value;
          file.processing = true; // Backwards compatibility

          file.status = Dropzone.UPLOADING;
          this.emit("processing", file);
        }
      } catch (err) {
        _didIteratorError18 = true;
        _iteratorError18 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
            _iterator18["return"]();
          }
        } finally {
          if (_didIteratorError18) {
            throw _iteratorError18;
          }
        }
      }

      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }

      return this.uploadFiles(files);
    }
  }, {
    key: "_getFilesWithXhr",
    value: function _getFilesWithXhr(xhr) {
      var files;
      return files = this.files.filter(function (file) {
        return file.xhr === xhr;
      }).map(function (file) {
        return file;
      });
    } // Cancels the file upload and sets the status to CANCELED
    // **if** the file is actually being uploaded.
    // If it's still in the queue, the file is being removed from it and the status
    // set to CANCELED.

  }, {
    key: "cancelUpload",
    value: function cancelUpload(file) {
      if (file.status === Dropzone.UPLOADING) {
        var groupedFiles = this._getFilesWithXhr(file.xhr);

        var _iteratorNormalCompletion19 = true;
        var _didIteratorError19 = false;
        var _iteratorError19 = undefined;

        try {
          for (var _iterator19 = groupedFiles[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
            var groupedFile = _step19.value;
            groupedFile.status = Dropzone.CANCELED;
          }
        } catch (err) {
          _didIteratorError19 = true;
          _iteratorError19 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) {
              _iterator19["return"]();
            }
          } finally {
            if (_didIteratorError19) {
              throw _iteratorError19;
            }
          }
        }

        if (typeof file.xhr !== 'undefined') {
          file.xhr.abort();
        }

        var _iteratorNormalCompletion20 = true;
        var _didIteratorError20 = false;
        var _iteratorError20 = undefined;

        try {
          for (var _iterator20 = groupedFiles[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
            var _groupedFile = _step20.value;
            this.emit("canceled", _groupedFile);
          }
        } catch (err) {
          _didIteratorError20 = true;
          _iteratorError20 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion20 && _iterator20["return"] != null) {
              _iterator20["return"]();
            }
          } finally {
            if (_didIteratorError20) {
              throw _iteratorError20;
            }
          }
        }

        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if (file.status === Dropzone.ADDED || file.status === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);

        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }, {
    key: "resolveOption",
    value: function resolveOption(option) {
      if (typeof option === 'function') {
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }

        return option.apply(this, args);
      }

      return option;
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(file) {
      return this.uploadFiles([file]);
    }
  }, {
    key: "uploadFiles",
    value: function uploadFiles(files) {
      var _this15 = this;

      this._transformFiles(files, function (transformedFiles) {
        if (_this15.options.chunking) {
          // Chunking is not allowed to be used with `uploadMultiple` so we know
          // that there is only __one__file.
          var transformedFile = transformedFiles[0];
          files[0].upload.chunked = _this15.options.chunking && (_this15.options.forceChunking || transformedFile.size > _this15.options.chunkSize);
          files[0].upload.totalChunkCount = Math.ceil(transformedFile.size / _this15.options.chunkSize);
        }

        if (files[0].upload.chunked) {
          // This file should be sent in chunks!
          // If the chunking option is set, we **know** that there can only be **one** file, since
          // uploadMultiple is not allowed with this option.
          var file = files[0];
          var _transformedFile = transformedFiles[0];
          var startedChunkCount = 0;
          file.upload.chunks = [];

          var handleNextChunk = function handleNextChunk() {
            var chunkIndex = 0; // Find the next item in file.upload.chunks that is not defined yet.

            while (file.upload.chunks[chunkIndex] !== undefined) {
              chunkIndex++;
            } // This means, that all chunks have already been started.


            if (chunkIndex >= file.upload.totalChunkCount) return;
            startedChunkCount++;
            var start = chunkIndex * _this15.options.chunkSize;
            var end = Math.min(start + _this15.options.chunkSize, file.size);
            var dataBlock = {
              name: _this15._getParamName(0),
              data: _transformedFile.webkitSlice ? _transformedFile.webkitSlice(start, end) : _transformedFile.slice(start, end),
              filename: file.upload.filename,
              chunkIndex: chunkIndex
            };
            file.upload.chunks[chunkIndex] = {
              file: file,
              index: chunkIndex,
              dataBlock: dataBlock,
              // In case we want to retry.
              status: Dropzone.UPLOADING,
              progress: 0,
              retries: 0 // The number of times this block has been retried.

            };

            _this15._uploadData(files, [dataBlock]);
          };

          file.upload.finishedChunkUpload = function (chunk) {
            var allFinished = true;
            chunk.status = Dropzone.SUCCESS; // Clear the data from the chunk

            chunk.dataBlock = null; // Leaving this reference to xhr intact here will cause memory leaks in some browsers

            chunk.xhr = null;

            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              if (file.upload.chunks[i] === undefined) {
                return handleNextChunk();
              }

              if (file.upload.chunks[i].status !== Dropzone.SUCCESS) {
                allFinished = false;
              }
            }

            if (allFinished) {
              _this15.options.chunksUploaded(file, function () {
                _this15._finished(files, '', null);
              });
            }
          };

          if (_this15.options.parallelChunkUploads) {
            for (var i = 0; i < file.upload.totalChunkCount; i++) {
              handleNextChunk();
            }
          } else {
            handleNextChunk();
          }
        } else {
          var dataBlocks = [];

          for (var _i3 = 0; _i3 < files.length; _i3++) {
            dataBlocks[_i3] = {
              name: _this15._getParamName(_i3),
              data: transformedFiles[_i3],
              filename: files[_i3].upload.filename
            };
          }

          _this15._uploadData(files, dataBlocks);
        }
      });
    } /// Returns the right chunk for given file and xhr

  }, {
    key: "_getChunk",
    value: function _getChunk(file, xhr) {
      for (var i = 0; i < file.upload.totalChunkCount; i++) {
        if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].xhr === xhr) {
          return file.upload.chunks[i];
        }
      }
    } // This function actually uploads the file(s) to the server.
    // If dataBlocks contains the actual data to upload (meaning, that this could either be transformed
    // files, or individual chunks for chunked upload).

  }, {
    key: "_uploadData",
    value: function _uploadData(files, dataBlocks) {
      var _this16 = this;

      var xhr = new XMLHttpRequest(); // Put the xhr object in the file objects to be able to reference it later.

      var _iteratorNormalCompletion21 = true;
      var _didIteratorError21 = false;
      var _iteratorError21 = undefined;

      try {
        for (var _iterator21 = files[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
          var file = _step21.value;
          file.xhr = xhr;
        }
      } catch (err) {
        _didIteratorError21 = true;
        _iteratorError21 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion21 && _iterator21["return"] != null) {
            _iterator21["return"]();
          }
        } finally {
          if (_didIteratorError21) {
            throw _iteratorError21;
          }
        }
      }

      if (files[0].upload.chunked) {
        // Put the xhr object in the right chunk object, so it can be associated later, and found with _getChunk
        files[0].upload.chunks[dataBlocks[0].chunkIndex].xhr = xhr;
      }

      var method = this.resolveOption(this.options.method, files);
      var url = this.resolveOption(this.options.url, files);
      xhr.open(method, url, true); // Setting the timeout after open because of IE11 issue: https://gitlab.com/meno/dropzone/issues/8

      xhr.timeout = this.resolveOption(this.options.timeout, files); // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179

      xhr.withCredentials = !!this.options.withCredentials;

      xhr.onload = function (e) {
        _this16._finishedUploading(files, xhr, e);
      };

      xhr.ontimeout = function () {
        _this16._handleUploadError(files, xhr, "Request timedout after ".concat(_this16.options.timeout, " seconds"));
      };

      xhr.onerror = function () {
        _this16._handleUploadError(files, xhr);
      }; // Some browsers do not have the .upload property


      var progressObj = xhr.upload != null ? xhr.upload : xhr;

      progressObj.onprogress = function (e) {
        return _this16._updateFilesUploadProgress(files, xhr, e);
      };

      var headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };

      if (this.options.headers) {
        Dropzone.extend(headers, this.options.headers);
      }

      for (var headerName in headers) {
        var headerValue = headers[headerName];

        if (headerValue) {
          xhr.setRequestHeader(headerName, headerValue);
        }
      }

      var formData = new FormData(); // Adding all @options parameters

      if (this.options.params) {
        var additionalParams = this.options.params;

        if (typeof additionalParams === 'function') {
          additionalParams = additionalParams.call(this, files, xhr, files[0].upload.chunked ? this._getChunk(files[0], xhr) : null);
        }

        for (var key in additionalParams) {
          var value = additionalParams[key];
          formData.append(key, value);
        }
      } // Let the user add additional data if necessary


      var _iteratorNormalCompletion22 = true;
      var _didIteratorError22 = false;
      var _iteratorError22 = undefined;

      try {
        for (var _iterator22 = files[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
          var _file = _step22.value;
          this.emit("sending", _file, xhr, formData);
        }
      } catch (err) {
        _didIteratorError22 = true;
        _iteratorError22 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion22 && _iterator22["return"] != null) {
            _iterator22["return"]();
          }
        } finally {
          if (_didIteratorError22) {
            throw _iteratorError22;
          }
        }
      }

      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }

      this._addFormElementData(formData); // Finally add the files
      // Has to be last because some servers (eg: S3) expect the file to be the last parameter


      for (var i = 0; i < dataBlocks.length; i++) {
        var dataBlock = dataBlocks[i];
        formData.append(dataBlock.name, dataBlock.data, dataBlock.filename);
      }

      this.submitRequest(xhr, formData, files);
    } // Transforms all files with this.options.transformFile and invokes done with the transformed files when done.

  }, {
    key: "_transformFiles",
    value: function _transformFiles(files, done) {
      var _this17 = this;

      var transformedFiles = []; // Clumsy way of handling asynchronous calls, until I get to add a proper Future library.

      var doneCounter = 0;

      var _loop = function _loop(i) {
        _this17.options.transformFile.call(_this17, files[i], function (transformedFile) {
          transformedFiles[i] = transformedFile;

          if (++doneCounter === files.length) {
            done(transformedFiles);
          }
        });
      };

      for (var i = 0; i < files.length; i++) {
        _loop(i);
      }
    } // Takes care of adding other input elements of the form to the AJAX request

  }, {
    key: "_addFormElementData",
    value: function _addFormElementData(formData) {
      // Take care of other input elements
      if (this.element.tagName === "FORM") {
        var _iteratorNormalCompletion23 = true;
        var _didIteratorError23 = false;
        var _iteratorError23 = undefined;

        try {
          for (var _iterator23 = this.element.querySelectorAll("input, textarea, select, button")[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
            var input = _step23.value;
            var inputName = input.getAttribute("name");
            var inputType = input.getAttribute("type");
            if (inputType) inputType = inputType.toLowerCase(); // If the input doesn't have a name, we can't use it.

            if (typeof inputName === 'undefined' || inputName === null) continue;

            if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
              // Possibly multiple values
              var _iteratorNormalCompletion24 = true;
              var _didIteratorError24 = false;
              var _iteratorError24 = undefined;

              try {
                for (var _iterator24 = input.options[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                  var option = _step24.value;

                  if (option.selected) {
                    formData.append(inputName, option.value);
                  }
                }
              } catch (err) {
                _didIteratorError24 = true;
                _iteratorError24 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion24 && _iterator24["return"] != null) {
                    _iterator24["return"]();
                  }
                } finally {
                  if (_didIteratorError24) {
                    throw _iteratorError24;
                  }
                }
              }
            } else if (!inputType || inputType !== "checkbox" && inputType !== "radio" || input.checked) {
              formData.append(inputName, input.value);
            }
          }
        } catch (err) {
          _didIteratorError23 = true;
          _iteratorError23 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion23 && _iterator23["return"] != null) {
              _iterator23["return"]();
            }
          } finally {
            if (_didIteratorError23) {
              throw _iteratorError23;
            }
          }
        }
      }
    } // Invoked when there is new progress information about given files.
    // If e is not provided, it is assumed that the upload is finished.

  }, {
    key: "_updateFilesUploadProgress",
    value: function _updateFilesUploadProgress(files, xhr, e) {
      var progress;

      if (typeof e !== 'undefined') {
        progress = 100 * e.loaded / e.total;

        if (files[0].upload.chunked) {
          var file = files[0]; // Since this is a chunked upload, we need to update the appropriate chunk progress.

          var chunk = this._getChunk(file, xhr);

          chunk.progress = progress;
          chunk.total = e.total;
          chunk.bytesSent = e.loaded;
          var fileProgress = 0,
              fileTotal,
              fileBytesSent;
          file.upload.progress = 0;
          file.upload.total = 0;
          file.upload.bytesSent = 0;

          for (var i = 0; i < file.upload.totalChunkCount; i++) {
            if (file.upload.chunks[i] !== undefined && file.upload.chunks[i].progress !== undefined) {
              file.upload.progress += file.upload.chunks[i].progress;
              file.upload.total += file.upload.chunks[i].total;
              file.upload.bytesSent += file.upload.chunks[i].bytesSent;
            }
          }

          file.upload.progress = file.upload.progress / file.upload.totalChunkCount;
        } else {
          var _iteratorNormalCompletion25 = true;
          var _didIteratorError25 = false;
          var _iteratorError25 = undefined;

          try {
            for (var _iterator25 = files[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
              var _file2 = _step25.value;
              _file2.upload.progress = progress;
              _file2.upload.total = e.total;
              _file2.upload.bytesSent = e.loaded;
            }
          } catch (err) {
            _didIteratorError25 = true;
            _iteratorError25 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion25 && _iterator25["return"] != null) {
                _iterator25["return"]();
              }
            } finally {
              if (_didIteratorError25) {
                throw _iteratorError25;
              }
            }
          }
        }

        var _iteratorNormalCompletion26 = true;
        var _didIteratorError26 = false;
        var _iteratorError26 = undefined;

        try {
          for (var _iterator26 = files[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
            var _file3 = _step26.value;
            this.emit("uploadprogress", _file3, _file3.upload.progress, _file3.upload.bytesSent);
          }
        } catch (err) {
          _didIteratorError26 = true;
          _iteratorError26 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion26 && _iterator26["return"] != null) {
              _iterator26["return"]();
            }
          } finally {
            if (_didIteratorError26) {
              throw _iteratorError26;
            }
          }
        }
      } else {
        // Called when the file finished uploading
        var allFilesFinished = true;
        progress = 100;
        var _iteratorNormalCompletion27 = true;
        var _didIteratorError27 = false;
        var _iteratorError27 = undefined;

        try {
          for (var _iterator27 = files[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
            var _file4 = _step27.value;

            if (_file4.upload.progress !== 100 || _file4.upload.bytesSent !== _file4.upload.total) {
              allFilesFinished = false;
            }

            _file4.upload.progress = progress;
            _file4.upload.bytesSent = _file4.upload.total;
          } // Nothing to do, all files already at 100%

        } catch (err) {
          _didIteratorError27 = true;
          _iteratorError27 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion27 && _iterator27["return"] != null) {
              _iterator27["return"]();
            }
          } finally {
            if (_didIteratorError27) {
              throw _iteratorError27;
            }
          }
        }

        if (allFilesFinished) {
          return;
        }

        var _iteratorNormalCompletion28 = true;
        var _didIteratorError28 = false;
        var _iteratorError28 = undefined;

        try {
          for (var _iterator28 = files[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
            var _file5 = _step28.value;
            this.emit("uploadprogress", _file5, progress, _file5.upload.bytesSent);
          }
        } catch (err) {
          _didIteratorError28 = true;
          _iteratorError28 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion28 && _iterator28["return"] != null) {
              _iterator28["return"]();
            }
          } finally {
            if (_didIteratorError28) {
              throw _iteratorError28;
            }
          }
        }
      }
    }
  }, {
    key: "_finishedUploading",
    value: function _finishedUploading(files, xhr, e) {
      var response;

      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.responseType !== 'arraybuffer' && xhr.responseType !== 'blob') {
        response = xhr.responseText;

        if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
          try {
            response = JSON.parse(response);
          } catch (error) {
            e = error;
            response = "Invalid JSON response from server.";
          }
        }
      }

      this._updateFilesUploadProgress(files);

      if (!(200 <= xhr.status && xhr.status < 300)) {
        this._handleUploadError(files, xhr, response);
      } else {
        if (files[0].upload.chunked) {
          files[0].upload.finishedChunkUpload(this._getChunk(files[0], xhr));
        } else {
          this._finished(files, response, e);
        }
      }
    }
  }, {
    key: "_handleUploadError",
    value: function _handleUploadError(files, xhr, response) {
      if (files[0].status === Dropzone.CANCELED) {
        return;
      }

      if (files[0].upload.chunked && this.options.retryChunks) {
        var chunk = this._getChunk(files[0], xhr);

        if (chunk.retries++ < this.options.retryChunksLimit) {
          this._uploadData(files, [chunk.dataBlock]);

          return;
        } else {
          console.warn('Retried this chunk too often. Giving up.');
        }
      }

      this._errorProcessing(files, response || this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr);
    }
  }, {
    key: "submitRequest",
    value: function submitRequest(xhr, formData, files) {
      xhr.send(formData);
    } // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_finished",
    value: function _finished(files, responseText, e) {
      var _iteratorNormalCompletion29 = true;
      var _didIteratorError29 = false;
      var _iteratorError29 = undefined;

      try {
        for (var _iterator29 = files[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
          var file = _step29.value;
          file.status = Dropzone.SUCCESS;
          this.emit("success", file, responseText, e);
          this.emit("complete", file);
        }
      } catch (err) {
        _didIteratorError29 = true;
        _iteratorError29 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion29 && _iterator29["return"] != null) {
            _iterator29["return"]();
          }
        } finally {
          if (_didIteratorError29) {
            throw _iteratorError29;
          }
        }
      }

      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    } // Called internally when processing is finished.
    // Individual callbacks have to be called in the appropriate sections.

  }, {
    key: "_errorProcessing",
    value: function _errorProcessing(files, message, xhr) {
      var _iteratorNormalCompletion30 = true;
      var _didIteratorError30 = false;
      var _iteratorError30 = undefined;

      try {
        for (var _iterator30 = files[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
          var file = _step30.value;
          file.status = Dropzone.ERROR;
          this.emit("error", file, message, xhr);
          this.emit("complete", file);
        }
      } catch (err) {
        _didIteratorError30 = true;
        _iteratorError30 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion30 && _iterator30["return"] != null) {
            _iterator30["return"]();
          }
        } finally {
          if (_didIteratorError30) {
            throw _iteratorError30;
          }
        }
      }

      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }

      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    }
  }], [{
    key: "uuidv4",
    value: function uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
      });
    }
  }]);

  return Dropzone;
}(Emitter);

Dropzone.initClass();
Dropzone.version = "5.7.0"; // This is a map of options for your different dropzones. Add configurations
// to this object for your different dropzone elemens.
//
// Example:
//
//     Dropzone.options.myDropzoneElementId = { maxFilesize: 1 };
//
// To disable autoDiscover for a specific element, you can set `false` as an option:
//
//     Dropzone.options.myDisabledElementId = false;
//
// And in html:
//
//     <form action="/upload" id="my-dropzone-element-id" class="dropzone"></form>

Dropzone.options = {}; // Returns the options for an element or undefined if none available.

Dropzone.optionsForElement = function (element) {
  // Get the `Dropzone.options.elementId` for this element if it exists
  if (element.getAttribute("id")) {
    return Dropzone.options[camelize(element.getAttribute("id"))];
  } else {
    return undefined;
  }
}; // Holds a list of all dropzone instances


Dropzone.instances = []; // Returns the dropzone for given element if any

Dropzone.forElement = function (element) {
  if (typeof element === "string") {
    element = document.querySelector(element);
  }

  if ((element != null ? element.dropzone : undefined) == null) {
    throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
  }

  return element.dropzone;
}; // Set to false if you don't want Dropzone to automatically find and attach to .dropzone elements.


Dropzone.autoDiscover = true; // Looks for all .dropzone elements and creates a dropzone for them

Dropzone.discover = function () {
  var dropzones;

  if (document.querySelectorAll) {
    dropzones = document.querySelectorAll(".dropzone");
  } else {
    dropzones = []; // IE :(

    var checkElements = function checkElements(elements) {
      return function () {
        var result = [];
        var _iteratorNormalCompletion31 = true;
        var _didIteratorError31 = false;
        var _iteratorError31 = undefined;

        try {
          for (var _iterator31 = elements[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
            var el = _step31.value;

            if (/(^| )dropzone($| )/.test(el.className)) {
              result.push(dropzones.push(el));
            } else {
              result.push(undefined);
            }
          }
        } catch (err) {
          _didIteratorError31 = true;
          _iteratorError31 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion31 && _iterator31["return"] != null) {
              _iterator31["return"]();
            }
          } finally {
            if (_didIteratorError31) {
              throw _iteratorError31;
            }
          }
        }

        return result;
      }();
    };

    checkElements(document.getElementsByTagName("div"));
    checkElements(document.getElementsByTagName("form"));
  }

  return function () {
    var result = [];
    var _iteratorNormalCompletion32 = true;
    var _didIteratorError32 = false;
    var _iteratorError32 = undefined;

    try {
      for (var _iterator32 = dropzones[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
        var dropzone = _step32.value;

        // Create a dropzone unless auto discover has been disabled for specific element
        if (Dropzone.optionsForElement(dropzone) !== false) {
          result.push(new Dropzone(dropzone));
        } else {
          result.push(undefined);
        }
      }
    } catch (err) {
      _didIteratorError32 = true;
      _iteratorError32 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion32 && _iterator32["return"] != null) {
          _iterator32["return"]();
        }
      } finally {
        if (_didIteratorError32) {
          throw _iteratorError32;
        }
      }
    }

    return result;
  }();
}; // Since the whole Drag'n'Drop API is pretty new, some browsers implement it,
// but not correctly.
// So I created a blacklist of userAgents. Yes, yes. Browser sniffing, I know.
// But what to do when browsers *theoretically* support an API, but crash
// when using it.
//
// This is a list of regular expressions tested against navigator.userAgent
//
// ** It should only be used on browser that *do* support the API, but
// incorrectly **
//


Dropzone.blacklistedBrowsers = [// The mac os and windows phone version of opera 12 seems to have a problem with the File drag'n'drop API.
/opera.*(Macintosh|Windows Phone).*version\/12/i]; // Checks if the browser is supported

Dropzone.isBrowserSupported = function () {
  var capableBrowser = true;

  if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
    if (!("classList" in document.createElement("a"))) {
      capableBrowser = false;
    } else {
      // The browser supports the API, but may be blacklisted.
      var _iteratorNormalCompletion33 = true;
      var _didIteratorError33 = false;
      var _iteratorError33 = undefined;

      try {
        for (var _iterator33 = Dropzone.blacklistedBrowsers[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
          var regex = _step33.value;

          if (regex.test(navigator.userAgent)) {
            capableBrowser = false;
            continue;
          }
        }
      } catch (err) {
        _didIteratorError33 = true;
        _iteratorError33 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion33 && _iterator33["return"] != null) {
            _iterator33["return"]();
          }
        } finally {
          if (_didIteratorError33) {
            throw _iteratorError33;
          }
        }
      }
    }
  } else {
    capableBrowser = false;
  }

  return capableBrowser;
};

Dropzone.dataURItoBlob = function (dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]); // separate out the mime component

  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]; // write the bytes of the string to an ArrayBuffer

  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0, end = byteString.length, asc = 0 <= end; asc ? i <= end : i >= end; asc ? i++ : i--) {
    ia[i] = byteString.charCodeAt(i);
  } // write the ArrayBuffer to a blob


  return new Blob([ab], {
    type: mimeString
  });
}; // Returns an array without the rejected item


var without = function without(list, rejectedItem) {
  return list.filter(function (item) {
    return item !== rejectedItem;
  }).map(function (item) {
    return item;
  });
}; // abc-def_ghi -> abcDefGhi


var camelize = function camelize(str) {
  return str.replace(/[\-_](\w)/g, function (match) {
    return match.charAt(1).toUpperCase();
  });
}; // Creates an element from string


Dropzone.createElement = function (string) {
  var div = document.createElement("div");
  div.innerHTML = string;
  return div.childNodes[0];
}; // Tests if given element is inside (or simply is) the container


Dropzone.elementInside = function (element, container) {
  if (element === container) {
    return true;
  } // Coffeescript doesn't support do/while loops


  while (element = element.parentNode) {
    if (element === container) {
      return true;
    }
  }

  return false;
};

Dropzone.getElement = function (el, name) {
  var element;

  if (typeof el === "string") {
    element = document.querySelector(el);
  } else if (el.nodeType != null) {
    element = el;
  }

  if (element == null) {
    throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector or a plain HTML element."));
  }

  return element;
};

Dropzone.getElements = function (els, name) {
  var el, elements;

  if (els instanceof Array) {
    elements = [];

    try {
      var _iteratorNormalCompletion34 = true;
      var _didIteratorError34 = false;
      var _iteratorError34 = undefined;

      try {
        for (var _iterator34 = els[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
          el = _step34.value;
          elements.push(this.getElement(el, name));
        }
      } catch (err) {
        _didIteratorError34 = true;
        _iteratorError34 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion34 && _iterator34["return"] != null) {
            _iterator34["return"]();
          }
        } finally {
          if (_didIteratorError34) {
            throw _iteratorError34;
          }
        }
      }
    } catch (e) {
      elements = null;
    }
  } else if (typeof els === "string") {
    elements = [];
    var _iteratorNormalCompletion35 = true;
    var _didIteratorError35 = false;
    var _iteratorError35 = undefined;

    try {
      for (var _iterator35 = document.querySelectorAll(els)[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
        el = _step35.value;
        elements.push(el);
      }
    } catch (err) {
      _didIteratorError35 = true;
      _iteratorError35 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion35 && _iterator35["return"] != null) {
          _iterator35["return"]();
        }
      } finally {
        if (_didIteratorError35) {
          throw _iteratorError35;
        }
      }
    }
  } else if (els.nodeType != null) {
    elements = [els];
  }

  if (elements == null || !elements.length) {
    throw new Error("Invalid `".concat(name, "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."));
  }

  return elements;
}; // Asks the user the question and calls accepted or rejected accordingly
//
// The default implementation just uses `window.confirm` and then calls the
// appropriate callback.


Dropzone.confirm = function (question, accepted, rejected) {
  if (window.confirm(question)) {
    return accepted();
  } else if (rejected != null) {
    return rejected();
  }
}; // Validates the mime type like this:
//
// https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept


Dropzone.isValidFile = function (file, acceptedFiles) {
  if (!acceptedFiles) {
    return true;
  } // If there are no accepted mime types, it's OK


  acceptedFiles = acceptedFiles.split(",");
  var mimeType = file.type;
  var baseMimeType = mimeType.replace(/\/.*$/, "");
  var _iteratorNormalCompletion36 = true;
  var _didIteratorError36 = false;
  var _iteratorError36 = undefined;

  try {
    for (var _iterator36 = acceptedFiles[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
      var validType = _step36.value;
      validType = validType.trim();

      if (validType.charAt(0) === ".") {
        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
          return true;
        }
      } else if (/\/\*$/.test(validType)) {
        // This is something like a image/* mime type
        if (baseMimeType === validType.replace(/\/.*$/, "")) {
          return true;
        }
      } else {
        if (mimeType === validType) {
          return true;
        }
      }
    }
  } catch (err) {
    _didIteratorError36 = true;
    _iteratorError36 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion36 && _iterator36["return"] != null) {
        _iterator36["return"]();
      }
    } finally {
      if (_didIteratorError36) {
        throw _iteratorError36;
      }
    }
  }

  return false;
}; // Augment jQuery


if (typeof jQuery !== 'undefined' && jQuery !== null) {
  jQuery.fn.dropzone = function (options) {
    return this.each(function () {
      return new Dropzone(this, options);
    });
  };
}

if ( true && module !== null) {
  module.exports = Dropzone;
} else {
  window.Dropzone = Dropzone;
} // Dropzone file status codes


Dropzone.ADDED = "added";
Dropzone.QUEUED = "queued"; // For backwards compatibility. Now, if a file is accepted, it's either queued
// or uploading.

Dropzone.ACCEPTED = Dropzone.QUEUED;
Dropzone.UPLOADING = "uploading";
Dropzone.PROCESSING = Dropzone.UPLOADING; // alias

Dropzone.CANCELED = "canceled";
Dropzone.ERROR = "error";
Dropzone.SUCCESS = "success";
/*

 Bugfix for iOS 6 and 7
 Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
 based on the work of https://github.com/stomita/ios-imagefile-megapixel

 */
// Detecting vertical squash in loaded image.
// Fixes a bug which squash image vertically while drawing into canvas for some images.
// This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel

var detectVerticalSquash = function detectVerticalSquash(img) {
  var iw = img.naturalWidth;
  var ih = img.naturalHeight;
  var canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = ih;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var _ctx$getImageData = ctx.getImageData(1, 0, 1, ih),
      data = _ctx$getImageData.data; // search image edge pixel position in case it is squashed vertically.


  var sy = 0;
  var ey = ih;
  var py = ih;

  while (py > sy) {
    var alpha = data[(py - 1) * 4 + 3];

    if (alpha === 0) {
      ey = py;
    } else {
      sy = py;
    }

    py = ey + sy >> 1;
  }

  var ratio = py / ih;

  if (ratio === 0) {
    return 1;
  } else {
    return ratio;
  }
}; // A replacement for context.drawImage
// (args are for source and destination).


var drawImageIOSFix = function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
  var vertSquashRatio = detectVerticalSquash(img);
  return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
}; // Based on MinifyJpeg
// Source: http://www.perry.cz/files/ExifRestorer.js
// http://elicon.blog57.fc2.com/blog-entry-206.html


var ExifRestore =
/*#__PURE__*/
function () {
  function ExifRestore() {
    _classCallCheck(this, ExifRestore);
  }

  _createClass(ExifRestore, null, [{
    key: "initClass",
    value: function initClass() {
      this.KEY_STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    }
  }, {
    key: "encode64",
    value: function encode64(input) {
      var output = '';
      var chr1 = undefined;
      var chr2 = undefined;
      var chr3 = '';
      var enc1 = undefined;
      var enc2 = undefined;
      var enc3 = undefined;
      var enc4 = '';
      var i = 0;

      while (true) {
        chr1 = input[i++];
        chr2 = input[i++];
        chr3 = input[i++];
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = (chr2 & 15) << 2 | chr3 >> 6;
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
          enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
          enc4 = 64;
        }

        output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';

        if (!(i < input.length)) {
          break;
        }
      }

      return output;
    }
  }, {
    key: "restore",
    value: function restore(origFileBase64, resizedFileBase64) {
      if (!origFileBase64.match('data:image/jpeg;base64,')) {
        return resizedFileBase64;
      }

      var rawImage = this.decode64(origFileBase64.replace('data:image/jpeg;base64,', ''));
      var segments = this.slice2Segments(rawImage);
      var image = this.exifManipulation(resizedFileBase64, segments);
      return "data:image/jpeg;base64,".concat(this.encode64(image));
    }
  }, {
    key: "exifManipulation",
    value: function exifManipulation(resizedFileBase64, segments) {
      var exifArray = this.getExifArray(segments);
      var newImageArray = this.insertExif(resizedFileBase64, exifArray);
      var aBuffer = new Uint8Array(newImageArray);
      return aBuffer;
    }
  }, {
    key: "getExifArray",
    value: function getExifArray(segments) {
      var seg = undefined;
      var x = 0;

      while (x < segments.length) {
        seg = segments[x];

        if (seg[0] === 255 & seg[1] === 225) {
          return seg;
        }

        x++;
      }

      return [];
    }
  }, {
    key: "insertExif",
    value: function insertExif(resizedFileBase64, exifArray) {
      var imageData = resizedFileBase64.replace('data:image/jpeg;base64,', '');
      var buf = this.decode64(imageData);
      var separatePoint = buf.indexOf(255, 3);
      var mae = buf.slice(0, separatePoint);
      var ato = buf.slice(separatePoint);
      var array = mae;
      array = array.concat(exifArray);
      array = array.concat(ato);
      return array;
    }
  }, {
    key: "slice2Segments",
    value: function slice2Segments(rawImageArray) {
      var head = 0;
      var segments = [];

      while (true) {
        var length;

        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 218) {
          break;
        }

        if (rawImageArray[head] === 255 & rawImageArray[head + 1] === 216) {
          head += 2;
        } else {
          length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3];
          var endPoint = head + length + 2;
          var seg = rawImageArray.slice(head, endPoint);
          segments.push(seg);
          head = endPoint;
        }

        if (head > rawImageArray.length) {
          break;
        }
      }

      return segments;
    }
  }, {
    key: "decode64",
    value: function decode64(input) {
      var output = '';
      var chr1 = undefined;
      var chr2 = undefined;
      var chr3 = '';
      var enc1 = undefined;
      var enc2 = undefined;
      var enc3 = undefined;
      var enc4 = '';
      var i = 0;
      var buf = []; // remove all characters that are not A-Z, a-z, 0-9, +, /, or =

      var base64test = /[^A-Za-z0-9\+\/\=]/g;

      if (base64test.exec(input)) {
        console.warn('There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, \'+\', \'/\',and \'=\'\nExpect errors in decoding.');
      }

      input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

      while (true) {
        enc1 = this.KEY_STR.indexOf(input.charAt(i++));
        enc2 = this.KEY_STR.indexOf(input.charAt(i++));
        enc3 = this.KEY_STR.indexOf(input.charAt(i++));
        enc4 = this.KEY_STR.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        buf.push(chr1);

        if (enc3 !== 64) {
          buf.push(chr2);
        }

        if (enc4 !== 64) {
          buf.push(chr3);
        }

        chr1 = chr2 = chr3 = '';
        enc1 = enc2 = enc3 = enc4 = '';

        if (!(i < input.length)) {
          break;
        }
      }

      return buf;
    }
  }]);

  return ExifRestore;
}();

ExifRestore.initClass();
/*
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 */
// @win window reference
// @fn function reference

var contentLoaded = function contentLoaded(win, fn) {
  var done = false;
  var top = true;
  var doc = win.document;
  var root = doc.documentElement;
  var add = doc.addEventListener ? "addEventListener" : "attachEvent";
  var rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
  var pre = doc.addEventListener ? "" : "on";

  var init = function init(e) {
    if (e.type === "readystatechange" && doc.readyState !== "complete") {
      return;
    }

    (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);

    if (!done && (done = true)) {
      return fn.call(win, e.type || e);
    }
  };

  var poll = function poll() {
    try {
      root.doScroll("left");
    } catch (e) {
      setTimeout(poll, 50);
      return;
    }

    return init("poll");
  };

  if (doc.readyState !== "complete") {
    if (doc.createEventObject && root.doScroll) {
      try {
        top = !win.frameElement;
      } catch (error) {}

      if (top) {
        poll();
      }
    }

    doc[add](pre + "DOMContentLoaded", init, false);
    doc[add](pre + "readystatechange", init, false);
    return win[add](pre + "load", init, false);
  }
}; // As a single function to be able to write tests.


Dropzone._autoDiscoverFunction = function () {
  if (Dropzone.autoDiscover) {
    return Dropzone.discover();
  }
};

contentLoaded(window, Dropzone._autoDiscoverFunction);

function __guard__(value, transform) {
  return typeof value !== 'undefined' && value !== null ? transform(value) : undefined;
}

function __guardMethod__(obj, methodName, transform) {
  if (typeof obj !== 'undefined' && obj !== null && typeof obj[methodName] === 'function') {
    return transform(obj, methodName);
  } else {
    return undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/howler/dist/howler.js":
/*!********************************************!*\
  !*** ./node_modules/howler/dist/howler.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */
  var HowlerGlobal = function() {
    this.init();
  };
  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function() {
      var self = this || Howler;

      // Create a global ID counter.
      self._counter = 1000;

      // Pool of unlocked HTML5 Audio objects.
      self._html5AudioPool = [];
      self.html5PoolSize = 10;

      // Internal properties.
      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

      // Public properties.
      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null;

      // Set to false to disable the auto audio unlocker.
      self.autoUnlock = true;

      // Setup the various state values for global tracking.
      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this || Howler;
      vol = parseFloat(vol);

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol;

        // Don't update any of the nodes if we are muted.
        if (self._muted) {
          return self;
        }

        // When using Web Audio, we just need to adjust the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
        }

        // Loop through and change volume for all HTML5 audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and change the volumes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function(muted) {
      var self = this || Howler;

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted;

      // With Web Audio, we just need to mute the master gain.
      if (self.usingWebAudio) {
        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
      }

      // Loop through and mute all HTML5 Audio nodes.
      for (var i=0; i<self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds();

          // Loop through all sounds and mark the audio node as muted.
          for (var j=0; j<ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = (muted) ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Handle stopping all sounds globally.
     */
    stop: function() {
      var self = this || Howler;

      // Loop through all Howls and stop them.
      for (var i=0; i<self._howls.length; i++) {
        self._howls[i].stop();
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function() {
      var self = this || Howler;

      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].unload();
      }

      // Create a new AudioContext to make sure it is fully reset.
      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function() {
      var self = this || Howler;

      // Keeps track of the suspend/resume state of the AudioContext.
      self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';

      // Automatically begin the 30-second suspend process
      self._autoSuspend();

      // Check if audio is available.
      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio();

            // Check if the canplaythrough event is available.
            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch(e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      }

      // Test to make sure audio isn't disabled in Internet Explorer.
      try {
        var test = new Audio();
        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {}

      // Check for supported codecs.
      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function() {
      var self = this || Howler;
      var audioTest = null;

      // Must wrap in a try/catch because IE11 in server mode throws an error.
      try {
        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
      var ua = self._navigator ? self._navigator.userAgent : '';
      var checkOpera = ua.match(/OPR\/([0-6].)/g);
      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);
      var checkSafari = ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1;
      var safariVersion = ua.match(/Version\/(.*?) /);
      var isOldSafari = (checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15);

      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType('audio/wav')).replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        m4b: !!(audioTest.canPlayType('audio/x-m4b;') || audioTest.canPlayType('audio/m4b;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
        webm: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };

      return self;
    },

    /**
     * Some browsers/devices will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _unlockAudio: function() {
      var self = this || Howler;

      // Only run this if Web Audio is supported and it hasn't already been unlocked.
      if (self._audioUnlocked || !self.ctx) {
        return;
      }

      self._audioUnlocked = false;
      self.autoUnlock = false;

      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      }

      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684
      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

      // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.
      var unlock = function(e) {
        // Create a pool of unlocked HTML5 Audio objects that can
        // be used for playing sounds without user interaction. HTML5
        // Audio objects must be individually unlocked, as opposed
        // to the WebAudio API which only needs a single activation.
        // This must occur before WebAudio setup or the source.onended
        // event will not fire.
        while (self._html5AudioPool.length < self.html5PoolSize) {
          try {
            var audioNode = new Audio();

            // Mark this Audio object as unlocked to ensure it can get returned
            // to the unlocked pool when released.
            audioNode._unlocked = true;

            // Add the audio node to the pool.
            self._releaseHtml5Audio(audioNode);
          } catch (e) {
            self.noAudio = true;
            break;
          }
        }

        // Loop through any assigned audio nodes and unlock them.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and unlock the audio nodes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node && !sound._node._unlocked) {
                sound._node._unlocked = true;
                sound._node.load();
              }
            }
          }
        }

        // Fix Android can not play in suspend state.
        self._autoResume();

        // Create an empty buffer.
        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination);

        // Play the empty buffer.
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        }

        // Setup a timeout to check that we are unlocked on the next event loop.
        source.onended = function() {
          source.disconnect(0);

          // Update the unlocked state and prevent this check from happening again.
          self._audioUnlocked = true;

          // Remove the touch start listener.
          document.removeEventListener('touchstart', unlock, true);
          document.removeEventListener('touchend', unlock, true);
          document.removeEventListener('click', unlock, true);
          document.removeEventListener('keydown', unlock, true);

          // Let all sounds know that audio has been unlocked.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('unlock');
          }
        };
      };

      // Setup a touch start listener to attempt an unlock in.
      document.addEventListener('touchstart', unlock, true);
      document.addEventListener('touchend', unlock, true);
      document.addEventListener('click', unlock, true);
      document.addEventListener('keydown', unlock, true);

      return self;
    },

    /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left,
     * return a new Audio object and throw a warning.
     * @return {Audio} HTML5 Audio object.
     */
    _obtainHtml5Audio: function() {
      var self = this || Howler;

      // Return the next object from the pool if one exists.
      if (self._html5AudioPool.length) {
        return self._html5AudioPool.pop();
      }

      //.Check if the audio is locked and throw a warning.
      var testPlay = new Audio().play();
      if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
        testPlay.catch(function() {
          console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
        });
      }

      return new Audio();
    },

    /**
     * Return an activated HTML5 Audio object to the pool.
     * @return {Howler}
     */
    _releaseHtml5Audio: function(audio) {
      var self = this || Howler;

      // Don't add audio to the pool if we don't know if it has been unlocked.
      if (audio._unlocked) {
        self._html5AudioPool.push(audio);
      }

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      // Check if any sounds are playing.
      for (var i=0; i<self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j=0; j<self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      }

      // If no sound has played after 30 seconds, suspend the context.
      self._suspendTimer = setTimeout(function() {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';

        // Handle updating the state of the audio context after suspending.
        var handleSuspension = function() {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;
            self._autoResume();
          }
        };

        // Either the state gets suspended or it is interrupted.
        // Either way, we need to update the state to suspended.
        self.ctx.suspend().then(handleSuspension, handleSuspension);
      }, 30000);

      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self.ctx.state !== 'interrupted' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended' || self.state === 'running' && self.ctx.state === 'interrupted') {
        self.ctx.resume().then(function() {
          self.state = 'running';

          // Emit to all Howls that the audio has resumed.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  };

  // Setup the global audio controller.
  var Howler = new HowlerGlobal();

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */
  var Howl = function(o) {
    var self = this;

    // Throw an error if no source is provided.
    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };
  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function(o) {
      var self = this;

      // If we don't have an AudioContext created yet, run the setup.
      if (!Howler.ctx) {
        setupAudioContext();
      }

      // Setup user-defined default properties.
      self._autoplay = o.autoplay || false;
      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = (typeof o.preload === 'boolean' || o.preload === 'metadata') ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;
      self._xhr = {
        method: o.xhr && o.xhr.method ? o.xhr.method : 'GET',
        headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
        withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false,
      };

      // Setup all other default properties.
      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];
      self._playLock = false;

      // Setup event listeners.
      self._onend = o.onend ? [{fn: o.onend}] : [];
      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
      self._onload = o.onload ? [{fn: o.onload}] : [];
      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
      self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
      self._onunlock = o.onunlock ? [{fn: o.onunlock}] : [];
      self._onresume = [];

      // Web Audio or HTML5 Audio?
      self._webAudio = Howler.usingWebAudio && !self._html5;

      // Automatically try to enable audio.
      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
        Howler._unlockAudio();
      }

      // Keep track of this Howl group in the global controller.
      Howler._howls.push(self);

      // If they selected autoplay, add a play event to the load queue.
      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function() {
            self.play();
          }
        });
      }

      // Load the source file unless otherwise specified.
      if (self._preload && self._preload !== 'none') {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function() {
      var self = this;
      var url = null;

      // If no audio is available, quit immediately.
      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');
        return;
      }

      // Make sure our source is in an array.
      if (typeof self._src === 'string') {
        self._src = [self._src];
      }

      // Loop through the sources and pick the first one that is compatible.
      for (var i=0; i<self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];
          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
            continue;
          }

          // Extract the file extension from the URL or base64 data URI.
          ext = /^data:audio\/([^;,]+);/i.exec(str);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        }

        // Log a warning if no extension was found.
        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        }

        // Check if this extension is available.
        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');
        return;
      }

      self._src = url;
      self._state = 'loading';

      // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.
      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      }

      // Create a new sound object and add it to the pool.
      new Sound(self);

      // Load and decode the audio data for playback.
      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function(sprite, internal) {
      var self = this;
      var id = null;

      // Determine if a sprite, sound id or nothing was passed
      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default';

        // Check if there is a single paused sound that isn't ended.
        // If there is, play that sound. If not, continue as usual.
        if (!self._playLock) {
          var num = 0;
          for (var i=0; i<self._sounds.length; i++) {
            if (self._sounds[i]._paused && !self._sounds[i]._ended) {
              num++;
              id = self._sounds[i]._id;
            }
          }

          if (num === 1) {
            sprite = null;
          } else {
            id = null;
          }
        }
      }

      // Get the selected node, or get one from the pool.
      var sound = id ? self._soundById(id) : self._inactiveSound();

      // If the sound doesn't exist, do nothing.
      if (!sound) {
        return null;
      }

      // Select the sprite definition.
      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      }

      // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.
      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite;

        // Mark this sound as not ended in case another sound is played before this one loads.
        sound._ended = false;

        // Add the sound to the queue to be played on load.
        var soundId = sound._id;
        self._queue.push({
          event: 'play',
          action: function() {
            self.play(soundId);
          }
        });

        return soundId;
      }

      // Don't play the sound if an id was passed and it is already playing.
      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          self._loadQueue('play');
        }

        return sound._id;
      }

      // Make sure the AudioContext isn't suspended, and resume it if it is.
      if (self._webAudio) {
        Howler._autoResume();
      }

      // Determine how long to play for and where to start playing.
      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
      var timeout = (duration * 1000) / Math.abs(sound._rate);
      var start = self._sprite[sprite][0] / 1000;
      var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      sound._sprite = sprite;

      // Mark the sound as ended instantly so that this async playback
      // doesn't get grabbed by another call to play while this one waits to start.
      sound._ended = false;

      // Update the parameters of the sound.
      var setParams = function() {
        sound._paused = false;
        sound._seek = seek;
        sound._start = start;
        sound._stop = stop;
        sound._loop = !!(sound._loop || self._sprite[sprite][2]);
      };

      // End the sound instantly if seek is at the end.
      if (seek >= stop) {
        self._ended(sound);
        return;
      }

      // Begin the actual playback.
      var node = sound._node;
      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function() {
          self._playLock = false;
          setParams();
          self._refreshBuffer(sound);

          // Setup the playback params.
          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime;

          // Play the sound using the supported method.
          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          }

          // Start a new timer if none is present.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function() {
              self._emit('play', sound._id);
              self._loadQueue();
            }, 0);
          }
        };

        if (Howler.state === 'running' && Howler.ctx.state !== 'interrupted') {
          playWebAudio();
        } else {
          self._playLock = true;

          // Wait for the audio context to resume before playing.
          self.once('resume', playWebAudio);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate;

          // Some browsers will throw an error if this is called without user interaction.
          try {
            var play = node.play();

            // Support older browsers that don't support promises, and thus don't have this issue.
            if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
              self._playLock = true;

              // Set param values immediately.
              setParams();

              // Releases the lock and executes queued actions.
              play
                .then(function() {
                  self._playLock = false;
                  node._unlocked = true;
                  if (!internal) {
                    self._emit('play', sound._id);
                  } else {
                    self._loadQueue();
                  }
                })
                .catch(function() {
                  self._playLock = false;
                  self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                    'on mobile devices and Chrome where playback was not within a user interaction.');

                  // Reset the ended and paused values.
                  sound._ended = true;
                  sound._paused = true;
                });
            } else if (!internal) {
              self._playLock = false;
              setParams();
              self._emit('play', sound._id);
            }

            // Setting rate before playing won't work in IE, so we set it again here.
            node.playbackRate = sound._rate;

            // If the node is still paused, then we can assume there was a playback issue.
            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                'on mobile devices and Chrome where playback was not within a user interaction.');
              return;
            }

            // Setup the end timer on sprites or listen for the ended event.
            if (sprite !== '__default' || sound._loop) {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } else {
              self._endTimers[sound._id] = function() {
                // Fire ended on this audio node.
                self._ended(sound);

                // Clear this listener.
                node.removeEventListener('ended', self._endTimers[sound._id], false);
              };
              node.addEventListener('ended', self._endTimers[sound._id], false);
            }
          } catch (err) {
            self._emit('playerror', sound._id, err);
          }
        };

        // If this is streaming audio, make sure the src is set and load again.
        if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
          node.src = self._src;
          node.load();
        }

        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
        var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
        if (node.readyState >= 3 || loadedNoReadyState) {
          playHtml5();
        } else {
          self._playLock = true;
          self._state = 'loading';

          var listener = function() {
            self._state = 'loaded';
            
            // Begin playback.
            playHtml5();

            // Clear this listener.
            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };
          node.addEventListener(Howler._canPlayEvent, listener, false);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'pause',
          action: function() {
            self.pause(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be paused.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              }

              // Clean up the buffer source.
              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        }

        // Fire the pause event, unless `true` is passed as the 2nd argument.
        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function(id, internal) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to stop when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'stop',
          action: function() {
            self.stop(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be stopped.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;
              sound._node.pause();

              // If this is a live stream, stop download once the audio is stopped.
              if (sound._node.duration === Infinity) {
                self._clearSound(sound._node);
              }
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function(muted, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to mute when capable.
      if (self._state !== 'loaded'|| self._playLock) {
        self._queue.push({
          event: 'mute',
          action: function() {
            self.mute(muted, id);
          }
        });

        return self;
      }

      // If applying mute/unmute to all sounds, update the group's value.
      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      }

      // If no id is passed, get all ID's to be muted.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted;

          // Cancel active fade and set the volume to the end value.
          if (sound._interval) {
            self._stopFade(sound._id);
          }

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function() {
      var self = this;
      var args = arguments;
      var vol, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the volume or return the current volume.
      var sound;
      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded'|| self._playLock) {
          self._queue.push({
            event: 'volume',
            action: function() {
              self.volume.apply(self, args);
            }
          });

          return self;
        }

        // Set the group volume.
        if (typeof id === 'undefined') {
          self._volume = vol;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol;

            // Stop currently running fades.
            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function(from, to, len, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to fade when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'fade',
          action: function() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      }

      // Make sure the to/from/len values are numbers.
      from = Math.min(Math.max(0, parseFloat(from)), 1);
      to = Math.min(Math.max(0, parseFloat(to)), 1);
      len = parseFloat(len);

      // Set the volume to the start position.
      self.volume(from, id);

      // Fade the volume of one or all sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        // Create a linear fade or fall back to timeouts with HTML5 Audio.
        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          }

          // If we are using Web Audio, let the native methods do the actual fade.
          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + (len / 1000);
            sound._volume = from;
            sound._node.gain.setValueAtTime(from, currentTime);
            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
        }
      }

      return self;
    },

    /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */
    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
      var self = this;
      var vol = from;
      var diff = to - from;
      var steps = Math.abs(diff / 0.01);
      var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
      var lastTick = Date.now();

      // Store the value being faded to.
      sound._fadeTo = to;

      // Update the volume value on each interval tick.
      sound._interval = setInterval(function() {
        // Update the volume based on the time since the last tick.
        var tick = (Date.now() - lastTick) / len;
        lastTick = Date.now();
        vol += diff * tick;

        // Round to within 2 decimal points.
        vol = Math.round(vol * 100) / 100;

        // Make sure the volume is in the right bounds.
        if (diff < 0) {
          vol = Math.max(to, vol);
        } else {
          vol = Math.min(to, vol);
        }

        // Change the volume.
        if (self._webAudio) {
          sound._volume = vol;
        } else {
          self.volume(vol, sound._id, true);
        }

        // Set the group's volume.
        if (isGroup) {
          self._volume = vol;
        }

        // When the fade is complete, stop it and fire event.
        if ((to < from && vol <= to) || (to > from && vol >= to)) {
          clearInterval(sound._interval);
          sound._interval = null;
          sound._fadeTo = null;
          self.volume(to, sound._id);
          self._emit('fade', sound._id);
        }
      }, stepLen);
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function(id) {
      var self = this;
      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self.volume(sound._fadeTo, id);
        sound._fadeTo = null;
        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function() {
      var self = this;
      var args = arguments;
      var loop, id, sound;

      // Determine the values for loop and id.
      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      }

      // If no id is passed, get all ID's to be looped.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;
          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;
            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;

              // If playing, restart playback to ensure looping updates.
              if (self.playing(ids[i])) {
                self.pause(ids[i], true);
                self.play(ids[i], true);
              }
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function() {
      var self = this;
      var args = arguments;
      var rate, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the playback rate or return the current value.
      var sound;
      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'rate',
            action: function() {
              self.rate.apply(self, args);
            }
          });

          return self;
        }

        // Set the group rate.
        if (typeof id === 'undefined') {
          self._rate = rate;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            if (self.playing(id[i])) {
              sound._rateSeek = self.seek(id[i]);
              sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            }
            sound._rate = rate;

            // Change the playback rate.
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            }

            // Reset the timers.
            var seek = self.seek(id[i]);
            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Start a new end timer if sound is already playing.
            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);
              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function() {
      var self = this;
      var args = arguments;
      var seek, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current position of the first node.
        if (self._sounds.length) {
          id = self._sounds[0]._id;
        }
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else if (self._sounds.length) {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // If there is no ID, bail out.
      if (typeof id === 'undefined') {
        return 0;
      }

      // If the sound hasn't loaded, add it to the load queue to seek when capable.
      if (typeof seek === 'number' && (self._state !== 'loaded' || self._playLock)) {
        self._queue.push({
          event: 'seek',
          action: function() {
            self.seek.apply(self, args);
          }
        });

        return self;
      }

      // Get the sound.
      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);
          if (playing) {
            self.pause(id, true);
          }

          // Move the position of the track and cancel timer.
          sound._seek = seek;
          sound._ended = false;
          self._clearTimer(id);

          // Update the seek position for HTML5 Audio.
          if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
            sound._node.currentTime = seek;
          }

          // Seek and emit when ready.
          var seekAndEmit = function() {
            // Restart the playback if the sound was playing.
            if (playing) {
              self.play(id, true);
            }

            self._emit('seek', id);
          };

          // Wait for the play lock to be unset before emitting (HTML5 Audio).
          if (playing && !self._webAudio) {
            var emitSeek = function() {
              if (!self._playLock) {
                seekAndEmit();
              } else {
                setTimeout(emitSeek, 0);
              }
            };
            setTimeout(emitSeek, 0);
          } else {
            seekAndEmit();
          }
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function(id) {
      var self = this;

      // Check the passed sound ID (if any).
      if (typeof id === 'number') {
        var sound = self._soundById(id);
        return sound ? !sound._paused : false;
      }

      // Otherwise, loop through all sounds and check if any are playing.
      for (var i=0; i<self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function(id) {
      var self = this;
      var duration = self._duration;

      // If we pass an ID, get the sound and return the sprite length.
      var sound = self._soundById(id);
      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function() {
      var self = this;

      // Stop playing any active sounds.
      var sounds = self._sounds;
      for (var i=0; i<sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        }

        // Remove the source or disconnect.
        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          self._clearSound(sounds[i]._node);

          // Remove any event listeners.
          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
          sounds[i]._node.removeEventListener('ended', sounds[i]._endFn, false);

          // Release the Audio object back to the pool.
          Howler._releaseHtml5Audio(sounds[i]._node);
        }

        // Empty out all of the nodes.
        delete sounds[i]._node;

        // Make sure all timers are cleared out.
        self._clearTimer(sounds[i]._id);
      }

      // Remove the references in the global Howler object.
      var index = Howler._howls.indexOf(self);
      if (index >= 0) {
        Howler._howls.splice(index, 1);
      }

      // Delete this sound from the cache (if no other Howl is using it).
      var remCache = true;
      for (i=0; i<Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      }

      // Clear global errors.
      Howler.noAudio = false;

      // Clear out `self`.
      self._state = 'unloaded';
      self._sounds = [];
      self = null;

      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0;

      // Allow passing just an event and ID.
      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i=0; i<events.length; i++) {
          var isId = (id === events[i].id);
          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);
        for (i=0; i<keys.length; i++) {
          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function(event, fn, id) {
      var self = this;

      // Setup the event listener.
      self.on(event, fn, id, 1);

      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function(event, id, msg) {
      var self = this;
      var events = self['_on' + event];

      // Loop through event store and fire all functions.
      for (var i=events.length-1; i>=0; i--) {
        // Only fire the listener if the correct ID is used.
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function(fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0);

          // If this event was setup with `once`, remove it.
          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      }

      // Pass the event type into load queue so that it can continue stepping.
      self._loadQueue(event);

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function(event) {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0];

        // Remove this task if a matching event was passed.
        if (task.event === event) {
          self._queue.shift();
          self._loadQueue();
        }

        // Run the task if no event type is passed.
        if (!event) {
          task.action();
        }
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function(sound) {
      var self = this;
      var sprite = sound._sprite;

      // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.
      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      }

      // Should this sound loop?
      var loop = !!(sound._loop || self._sprite[sprite][2]);

      // Fire the ended event.
      self._emit('end', sound._id);

      // Restart the playback for HTML5 Audio loop.
      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      }

      // Restart this timer if on a Web Audio loop.
      if (self._webAudio && loop) {
        self._emit('play', sound._id);
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;

        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      }

      // Mark the node as paused.
      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        self._clearTimer(sound._id);

        // Clean up the buffer source.
        self._cleanBuffer(sound._node);

        // Attempt to auto-suspend AudioContext if no sounds are still playing.
        Howler._autoSuspend();
      }

      // When using a sprite, end the track.
      if (!self._webAudio && !loop) {
        self.stop(sound._id, true);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function(id) {
      var self = this;

      if (self._endTimers[id]) {
        // Clear the timeout or remove the ended listener.
        if (typeof self._endTimers[id] !== 'function') {
          clearTimeout(self._endTimers[id]);
        } else {
          var sound = self._soundById(id);
          if (sound && sound._node) {
            sound._node.removeEventListener('ended', self._endTimers[id], false);
          }
        }

        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function(id) {
      var self = this;

      // Loop through all sounds and find the one with this ID.
      for (var i=0; i<self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function() {
      var self = this;

      self._drain();

      // Find the first inactive node to recycle.
      for (var i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      }

      // If no inactive node was found, create a new one.
      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0;

      // If there are less sounds than the max pool size, we are done.
      if (self._sounds.length < limit) {
        return;
      }

      // Count the number of inactive sounds.
      for (i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      }

      // Remove excess inactive sounds, going in reverse order.
      for (i=self._sounds.length - 1; i>=0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          }

          // Remove sounds until we have the pool size.
          self._sounds.splice(i, 1);
          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];
        for (var i=0; i<self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function(sound) {
      var self = this;

      // Setup the buffer source for playback.
      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src];

      // Connect to the correct node.
      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      }

      // Setup looping and playback rate.
      sound._node.bufferSource.loop = sound._loop;
      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop || 0;
      }
      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function(node) {
      var self = this;
      var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

      if (Howler._scratchBuffer && node.bufferSource) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);
        if (isIOS) {
          try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
        }
      }
      node.bufferSource = null;

      return self;
    },

    /**
     * Set the source to a 0-second silence to stop any downloading (except in IE).
     * @param  {Object} node Audio node to clear.
     */
    _clearSound: function(node) {
      var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
      if (!checkIE) {
        node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
      }
    }
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */
  var Sound = function(howl) {
    this._parent = howl;
    this.init();
  };
  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function() {
      var self = this;
      var parent = self._parent;

      // Setup the default parameters.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a unique ID for this sound.
      self._id = ++Howler._counter;

      // Add itself to the parent's pool.
      parent._sounds.push(self);

      // Create the new node.
      self.create();

      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function() {
      var self = this;
      var parent = self._parent;
      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
        self._node.paused = true;
        self._node.connect(Howler.masterGain);
      } else if (!Howler.noAudio) {
        // Get an unlocked Audio object from the pool.
        self._node = Howler._obtainHtml5Audio();

        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
        self._errorFn = self._errorListener.bind(self);
        self._node.addEventListener('error', self._errorFn, false);

        // Listen for 'canplaythrough' event to let us know the sound is ready.
        self._loadFn = self._loadListener.bind(self);
        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

        // Listen for the 'ended' event on the sound to account for edge-case where
        // a finite sound has a duration of Infinity.
        self._endFn = self._endListener.bind(self);
        self._node.addEventListener('ended', self._endFn, false);

        // Setup the new audio node.
        self._node.src = parent._src;
        self._node.preload = parent._preload === true ? 'auto' : parent._preload;
        self._node.volume = volume * Howler.volume();

        // Begin loading the source.
        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function() {
      var self = this;
      var parent = self._parent;

      // Reset all of the parameters of this sound.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a new ID so that it isn't confused with the previous sound.
      self._id = ++Howler._counter;

      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function() {
      var self = this;

      // Fire an error event and pass back the code.
      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

      // Clear the event listener.
      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function() {
      var self = this;
      var parent = self._parent;

      // Round up the duration to account for the lower precision in HTML5 Audio.
      parent._duration = Math.ceil(self._node.duration * 10) / 10;

      // Setup a sprite if none is defined.
      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {__default: [0, parent._duration * 1000]};
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';
        parent._emit('load');
        parent._loadQueue();
      }

      // Clear the event listener.
      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    },

    /**
     * HTML5 Audio ended listener callback.
     */
    _endListener: function() {
      var self = this;
      var parent = self._parent;

      // Only handle the `ended`` event if the duration is Infinity.
      if (parent._duration === Infinity) {
        // Update the parent duration to match the real audio duration.
        // Round up the duration to account for the lower precision in HTML5 Audio.
        parent._duration = Math.ceil(self._node.duration * 10) / 10;

        // Update the sprite that corresponds to the real duration.
        if (parent._sprite.__default[1] === Infinity) {
          parent._sprite.__default[1] = parent._duration * 1000;
        }

        // Run the regular ended method.
        parent._ended(self);
      }

      // Clear the event listener since the duration is now correct.
      self._node.removeEventListener('ended', self._endFn, false);
    }
  };

  /** Helper Methods **/
  /***************************************************************************/

  var cache = {};

  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */
  var loadBuffer = function(self) {
    var url = self._src;

    // Check if the buffer has already been cached and use it instead.
    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration;

      // Load the sound into this Howl.
      loadSound(self);

      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);
      for (var i=0; i<data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open(self._xhr.method, url, true);
      xhr.withCredentials = self._xhr.withCredentials;
      xhr.responseType = 'arraybuffer';

      // Apply any custom headers to the request.
      if (self._xhr.headers) {
        Object.keys(self._xhr.headers).forEach(function(key) {
          xhr.setRequestHeader(key, self._xhr.headers[key]);
        });
      }

      xhr.onload = function() {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];
        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
          return;
        }

        decodeAudioData(xhr.response, self);
      };
      xhr.onerror = function() {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };
      safeXhrSend(xhr);
    }
  };

  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */
  var safeXhrSend = function(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };

  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */
  var decodeAudioData = function(arraybuffer, self) {
    // Fire a load error if something broke.
    var error = function() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    };

    // Load the sound on success.
    var success = function(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      } else {
        error();
      }
    };

    // Decode the buffer into an audio source.
    if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
      Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
    } else {
      Howler.ctx.decodeAudioData(arraybuffer, success, error);
    }
  }

  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */
  var loadSound = function(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {__default: [0, self._duration * 1000]};
    }

    // Fire the loaded event.
    if (self._state !== 'loaded') {
      self._state = 'loaded';
      self._emit('load');
      self._loadQueue();
    }
  };

  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */
  var setupAudioContext = function() {
    // If we have already detected that Web Audio isn't supported, don't run this step again.
    if (!Howler.usingWebAudio) {
      return;
    }

    // Check if we are using Web Audio and setup the AudioContext if we are.
    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch(e) {
      Howler.usingWebAudio = false;
    }

    // If the audio context creation still failed, set using web audio to false.
    if (!Howler.ctx) {
      Howler.usingWebAudio = false;
    }

    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.
    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var version = appVersion ? parseInt(appVersion[1], 10) : null;
    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
      if (Howler._navigator && !safari) {
        Howler.usingWebAudio = false;
      }
    }

    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    if (Howler.usingWebAudio) {
      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : Howler._volume, Howler.ctx.currentTime);
      Howler.masterGain.connect(Howler.ctx.destination);
    }

    // Re-run the setup on Howler.
    Howler._setup();
  };

  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // Add support for CommonJS libraries such as browserify.
  if (true) {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // Add to global in Node.js (for testing, etc).
  if (typeof global !== 'undefined') {
    global.HowlerGlobal = HowlerGlobal;
    global.Howler = Howler;
    global.Howl = Howl;
    global.Sound = Sound;
  } else if (typeof window !== 'undefined') {  // Define globally in case AMD is not available or unused.
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  // Setup default properties.
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */
  HowlerGlobal.prototype.stereo = function(pan) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Loop through all Howls and update their stereo panning.
    for (var i=self._howls.length-1; i>=0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };

  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */
  HowlerGlobal.prototype.pos = function(x, y, z) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._pos[1] : y;
    z = (typeof z !== 'number') ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];

      if (typeof self.ctx.listener.positionX !== 'undefined') {
        self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
      }
    } else {
      return self._pos;
    }

    return self;
  };

  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */
  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    var or = self._orientation;
    y = (typeof y !== 'number') ? or[1] : y;
    z = (typeof z !== 'number') ? or[2] : z;
    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];

      if (typeof self.ctx.listener.forwardX !== 'undefined') {
        self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
      }
    } else {
      return or;
    }

    return self;
  };

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */
  Howl.prototype.init = (function(_super) {
    return function(o) {
      var self = this;

      // Setup user-defined default properties.
      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      };

      // Setup event listeners.
      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

      // Complete initilization with howler.js core's init function.
      return _super.call(this, o);
    };
  })(Howl.prototype.init);

  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */
  Howl.prototype.stereo = function(pan, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function() {
          self.stereo(pan, id);
        }
      });

      return self;
    }

    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

    // Setup the group's stereo panning if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    }

    // Change the streo panning of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower';

            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(pan, 0, 0);
              }
            } else {
              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */
  Howl.prototype.pos = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change position when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? 0 : y;
    z = (typeof z !== 'number') ? -0.5 : z;

    // Setup the group's spatial position if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    }

    // Change the spatial position of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.positionX !== 'undefined') {
              sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setPosition(x, y, z);
            }
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */
  Howl.prototype.orientation = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._orientation[1] : y;
    z = (typeof z !== 'number') ? self._orientation[2] : z;

    // Setup the group's spatial orientation if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    }

    // Change the spatial orientation of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.orientationX !== 'undefined') {
              sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setOrientation(x, y, z);
            }
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */
  Howl.prototype.pannerAttr = function() {
    var self = this;
    var args = arguments;
    var o, id, sound;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // Determine the values based on arguments.
    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (typeof args[0] === 'object') {
        o = args[0];

        // Set the grou's panner attribute values.
        if (typeof id === 'undefined') {
          if (!o.pannerAttr) {
            o.pannerAttr = {
              coneInnerAngle: o.coneInnerAngle,
              coneOuterAngle: o.coneOuterAngle,
              coneOuterGain: o.coneOuterGain,
              distanceModel: o.distanceModel,
              maxDistance: o.maxDistance,
              refDistance: o.refDistance,
              rolloffFactor: o.rolloffFactor,
              panningModel: o.panningModel
            };
          }

          self._pannerAttr = {
            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    }

    // Update the values of the specified sounds.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
        };

        // Update the panner values or create a new panner if none exists.
        var panner = sound._panner;
        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
          panner.panningModel = pa.panningModel;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          }

          // Create a new panner node.
          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */
  Sound.prototype.init = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Setup user-defined default properties.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete initilization with howler.js core Sound's init function.
      _super.call(this);

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  })(Sound.prototype.init);

  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */
  Sound.prototype.reset = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Reset all spatial plugin properties on this sound.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      } else if (self._panner) {
        // Disconnect the panner.
        self._panner.disconnect(0);
        self._panner = undefined;
        parent._refreshBuffer(self);
      }

      // Complete resetting of the sound.
      return _super.call(this);
    };
  })(Sound.prototype.reset);

  /** Helper Methods **/
  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */
  var setupPanner = function(sound, type) {
    type = type || 'spatial';

    // Create the new panner node.
    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.panningModel = sound._pannerAttr.panningModel;

      if (typeof sound._panner.positionX !== 'undefined') {
        sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
        sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
        sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      }

      if (typeof sound._panner.orientationX !== 'undefined') {
        sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
        sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
        sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
      }
    } else {
      sound._panner = Howler.ctx.createStereoPanner();
      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
    }

    sound._panner.connect(sound._node);

    // Update the connections.
    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id, true);
    }
  };
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Turbolinks 5.2.0
Copyright © 2018 Basecamp, LLC
 */
(function(){var t=this;(function(){(function(){this.Turbolinks={supported:function(){return null!=window.history.pushState&&null!=window.requestAnimationFrame&&null!=window.addEventListener}(),visit:function(t,r){return e.controller.visit(t,r)},clearCache:function(){return e.controller.clearCache()},setProgressBarDelay:function(t){return e.controller.setProgressBarDelay(t)}}}).call(this)}).call(t);var e=t.Turbolinks;(function(){(function(){var t,r,n,o=[].slice;e.copyObject=function(t){var e,r,n;r={};for(e in t)n=t[e],r[e]=n;return r},e.closest=function(e,r){return t.call(e,r)},t=function(){var t,e;return t=document.documentElement,null!=(e=t.closest)?e:function(t){var e;for(e=this;e;){if(e.nodeType===Node.ELEMENT_NODE&&r.call(e,t))return e;e=e.parentNode}}}(),e.defer=function(t){return setTimeout(t,1)},e.throttle=function(t){var e;return e=null,function(){var r;return r=1<=arguments.length?o.call(arguments,0):[],null!=e?e:e=requestAnimationFrame(function(n){return function(){return e=null,t.apply(n,r)}}(this))}},e.dispatch=function(t,e){var r,o,i,s,a,u;return a=null!=e?e:{},u=a.target,r=a.cancelable,o=a.data,i=document.createEvent("Events"),i.initEvent(t,!0,r===!0),i.data=null!=o?o:{},i.cancelable&&!n&&(s=i.preventDefault,i.preventDefault=function(){return this.defaultPrevented||Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}),s.call(this)}),(null!=u?u:document).dispatchEvent(i),i},n=function(){var t;return t=document.createEvent("Events"),t.initEvent("test",!0,!0),t.preventDefault(),t.defaultPrevented}(),e.match=function(t,e){return r.call(t,e)},r=function(){var t,e,r,n;return t=document.documentElement,null!=(e=null!=(r=null!=(n=t.matchesSelector)?n:t.webkitMatchesSelector)?r:t.msMatchesSelector)?e:t.mozMatchesSelector}(),e.uuid=function(){var t,e,r;for(r="",t=e=1;36>=e;t=++e)r+=9===t||14===t||19===t||24===t?"-":15===t?"4":20===t?(Math.floor(4*Math.random())+8).toString(16):Math.floor(15*Math.random()).toString(16);return r}}).call(this),function(){e.Location=function(){function t(t){var e,r;null==t&&(t=""),r=document.createElement("a"),r.href=t.toString(),this.absoluteURL=r.href,e=r.hash.length,2>e?this.requestURL=this.absoluteURL:(this.requestURL=this.absoluteURL.slice(0,-e),this.anchor=r.hash.slice(1))}var e,r,n,o;return t.wrap=function(t){return t instanceof this?t:new this(t)},t.prototype.getOrigin=function(){return this.absoluteURL.split("/",3).join("/")},t.prototype.getPath=function(){var t,e;return null!=(t=null!=(e=this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/))?e[1]:void 0)?t:"/"},t.prototype.getPathComponents=function(){return this.getPath().split("/").slice(1)},t.prototype.getLastPathComponent=function(){return this.getPathComponents().slice(-1)[0]},t.prototype.getExtension=function(){var t,e;return null!=(t=null!=(e=this.getLastPathComponent().match(/\.[^.]*$/))?e[0]:void 0)?t:""},t.prototype.isHTML=function(){return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)},t.prototype.isPrefixedBy=function(t){var e;return e=r(t),this.isEqualTo(t)||o(this.absoluteURL,e)},t.prototype.isEqualTo=function(t){return this.absoluteURL===(null!=t?t.absoluteURL:void 0)},t.prototype.toCacheKey=function(){return this.requestURL},t.prototype.toJSON=function(){return this.absoluteURL},t.prototype.toString=function(){return this.absoluteURL},t.prototype.valueOf=function(){return this.absoluteURL},r=function(t){return e(t.getOrigin()+t.getPath())},e=function(t){return n(t,"/")?t:t+"/"},o=function(t,e){return t.slice(0,e.length)===e},n=function(t,e){return t.slice(-e.length)===e},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.HttpRequest=function(){function r(r,n,o){this.delegate=r,this.requestCanceled=t(this.requestCanceled,this),this.requestTimedOut=t(this.requestTimedOut,this),this.requestFailed=t(this.requestFailed,this),this.requestLoaded=t(this.requestLoaded,this),this.requestProgressed=t(this.requestProgressed,this),this.url=e.Location.wrap(n).requestURL,this.referrer=e.Location.wrap(o).absoluteURL,this.createXHR()}return r.NETWORK_FAILURE=0,r.TIMEOUT_FAILURE=-1,r.timeout=60,r.prototype.send=function(){var t;return this.xhr&&!this.sent?(this.notifyApplicationBeforeRequestStart(),this.setProgress(0),this.xhr.send(),this.sent=!0,"function"==typeof(t=this.delegate).requestStarted?t.requestStarted():void 0):void 0},r.prototype.cancel=function(){return this.xhr&&this.sent?this.xhr.abort():void 0},r.prototype.requestProgressed=function(t){return t.lengthComputable?this.setProgress(t.loaded/t.total):void 0},r.prototype.requestLoaded=function(){return this.endRequest(function(t){return function(){var e;return 200<=(e=t.xhr.status)&&300>e?t.delegate.requestCompletedWithResponse(t.xhr.responseText,t.xhr.getResponseHeader("Turbolinks-Location")):(t.failed=!0,t.delegate.requestFailedWithStatusCode(t.xhr.status,t.xhr.responseText))}}(this))},r.prototype.requestFailed=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)}}(this))},r.prototype.requestTimedOut=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)}}(this))},r.prototype.requestCanceled=function(){return this.endRequest()},r.prototype.notifyApplicationBeforeRequestStart=function(){return e.dispatch("turbolinks:request-start",{data:{url:this.url,xhr:this.xhr}})},r.prototype.notifyApplicationAfterRequestEnd=function(){return e.dispatch("turbolinks:request-end",{data:{url:this.url,xhr:this.xhr}})},r.prototype.createXHR=function(){return this.xhr=new XMLHttpRequest,this.xhr.open("GET",this.url,!0),this.xhr.timeout=1e3*this.constructor.timeout,this.xhr.setRequestHeader("Accept","text/html, application/xhtml+xml"),this.xhr.setRequestHeader("Turbolinks-Referrer",this.referrer),this.xhr.onprogress=this.requestProgressed,this.xhr.onload=this.requestLoaded,this.xhr.onerror=this.requestFailed,this.xhr.ontimeout=this.requestTimedOut,this.xhr.onabort=this.requestCanceled},r.prototype.endRequest=function(t){return this.xhr?(this.notifyApplicationAfterRequestEnd(),null!=t&&t.call(this),this.destroy()):void 0},r.prototype.setProgress=function(t){var e;return this.progress=t,"function"==typeof(e=this.delegate).requestProgressed?e.requestProgressed(this.progress):void 0},r.prototype.destroy=function(){var t;return this.setProgress(1),"function"==typeof(t=this.delegate).requestFinished&&t.requestFinished(),this.delegate=null,this.xhr=null},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ProgressBar=function(){function e(){this.trickle=t(this.trickle,this),this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement()}var r;return r=300,e.defaultCSS=".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width "+r+"ms ease-out, opacity "+r/2+"ms "+r/2+"ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",e.prototype.show=function(){return this.visible?void 0:(this.visible=!0,this.installStylesheetElement(),this.installProgressElement(),this.startTrickling())},e.prototype.hide=function(){return this.visible&&!this.hiding?(this.hiding=!0,this.fadeProgressElement(function(t){return function(){return t.uninstallProgressElement(),t.stopTrickling(),t.visible=!1,t.hiding=!1}}(this))):void 0},e.prototype.setValue=function(t){return this.value=t,this.refresh()},e.prototype.installStylesheetElement=function(){return document.head.insertBefore(this.stylesheetElement,document.head.firstChild)},e.prototype.installProgressElement=function(){return this.progressElement.style.width=0,this.progressElement.style.opacity=1,document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()},e.prototype.fadeProgressElement=function(t){return this.progressElement.style.opacity=0,setTimeout(t,1.5*r)},e.prototype.uninstallProgressElement=function(){return this.progressElement.parentNode?document.documentElement.removeChild(this.progressElement):void 0},e.prototype.startTrickling=function(){return null!=this.trickleInterval?this.trickleInterval:this.trickleInterval=setInterval(this.trickle,r)},e.prototype.stopTrickling=function(){return clearInterval(this.trickleInterval),this.trickleInterval=null},e.prototype.trickle=function(){return this.setValue(this.value+Math.random()/100)},e.prototype.refresh=function(){return requestAnimationFrame(function(t){return function(){return t.progressElement.style.width=10+90*t.value+"%"}}(this))},e.prototype.createStylesheetElement=function(){var t;return t=document.createElement("style"),t.type="text/css",t.textContent=this.constructor.defaultCSS,t},e.prototype.createProgressElement=function(){var t;return t=document.createElement("div"),t.className="turbolinks-progress-bar",t},e}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.BrowserAdapter=function(){function r(r){this.controller=r,this.showProgressBar=t(this.showProgressBar,this),this.progressBar=new e.ProgressBar}var n,o,i;return i=e.HttpRequest,n=i.NETWORK_FAILURE,o=i.TIMEOUT_FAILURE,r.prototype.visitProposedToLocationWithAction=function(t,e){return this.controller.startVisitToLocationWithAction(t,e)},r.prototype.visitStarted=function(t){return t.issueRequest(),t.changeHistory(),t.loadCachedSnapshot()},r.prototype.visitRequestStarted=function(t){return this.progressBar.setValue(0),t.hasCachedSnapshot()||"restore"!==t.action?this.showProgressBarAfterDelay():this.showProgressBar()},r.prototype.visitRequestProgressed=function(t){return this.progressBar.setValue(t.progress)},r.prototype.visitRequestCompleted=function(t){return t.loadResponse()},r.prototype.visitRequestFailedWithStatusCode=function(t,e){switch(e){case n:case o:return this.reload();default:return t.loadResponse()}},r.prototype.visitRequestFinished=function(t){return this.hideProgressBar()},r.prototype.visitCompleted=function(t){return t.followRedirect()},r.prototype.pageInvalidated=function(){return this.reload()},r.prototype.showProgressBarAfterDelay=function(){return this.progressBarTimeout=setTimeout(this.showProgressBar,this.controller.progressBarDelay)},r.prototype.showProgressBar=function(){return this.progressBar.show()},r.prototype.hideProgressBar=function(){return this.progressBar.hide(),clearTimeout(this.progressBarTimeout)},r.prototype.reload=function(){return window.location.reload()},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.History=function(){function r(e){this.delegate=e,this.onPageLoad=t(this.onPageLoad,this),this.onPopState=t(this.onPopState,this)}return r.prototype.start=function(){return this.started?void 0:(addEventListener("popstate",this.onPopState,!1),addEventListener("load",this.onPageLoad,!1),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("popstate",this.onPopState,!1),removeEventListener("load",this.onPageLoad,!1),this.started=!1):void 0},r.prototype.push=function(t,r){return t=e.Location.wrap(t),this.update("push",t,r)},r.prototype.replace=function(t,r){return t=e.Location.wrap(t),this.update("replace",t,r)},r.prototype.onPopState=function(t){var r,n,o,i;return this.shouldHandlePopState()&&(i=null!=(n=t.state)?n.turbolinks:void 0)?(r=e.Location.wrap(window.location),o=i.restorationIdentifier,this.delegate.historyPoppedToLocationWithRestorationIdentifier(r,o)):void 0},r.prototype.onPageLoad=function(t){return e.defer(function(t){return function(){return t.pageLoaded=!0}}(this))},r.prototype.shouldHandlePopState=function(){return this.pageIsLoaded()},r.prototype.pageIsLoaded=function(){return this.pageLoaded||"complete"===document.readyState},r.prototype.update=function(t,e,r){var n;return n={turbolinks:{restorationIdentifier:r}},history[t+"State"](n,null,e)},r}()}.call(this),function(){e.HeadDetails=function(){function t(t){var e,r,n,s,a,u;for(this.elements={},n=0,a=t.length;a>n;n++)u=t[n],u.nodeType===Node.ELEMENT_NODE&&(s=u.outerHTML,r=null!=(e=this.elements)[s]?e[s]:e[s]={type:i(u),tracked:o(u),elements:[]},r.elements.push(u))}var e,r,n,o,i;return t.fromHeadElement=function(t){var e;return new this(null!=(e=null!=t?t.childNodes:void 0)?e:[])},t.prototype.hasElementWithKey=function(t){return t in this.elements},t.prototype.getTrackedElementSignature=function(){var t,e;return function(){var r,n;r=this.elements,n=[];for(t in r)e=r[t].tracked,e&&n.push(t);return n}.call(this).join("")},t.prototype.getScriptElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("script",t)},t.prototype.getStylesheetElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("stylesheet",t)},t.prototype.getElementsMatchingTypeNotInDetails=function(t,e){var r,n,o,i,s,a;o=this.elements,s=[];for(n in o)i=o[n],a=i.type,r=i.elements,a!==t||e.hasElementWithKey(n)||s.push(r[0]);return s},t.prototype.getProvisionalElements=function(){var t,e,r,n,o,i,s;r=[],n=this.elements;for(e in n)o=n[e],s=o.type,i=o.tracked,t=o.elements,null!=s||i?t.length>1&&r.push.apply(r,t.slice(1)):r.push.apply(r,t);return r},t.prototype.getMetaValue=function(t){var e;return null!=(e=this.findMetaElementByName(t))?e.getAttribute("content"):void 0},t.prototype.findMetaElementByName=function(t){var r,n,o,i;r=void 0,i=this.elements;for(o in i)n=i[o].elements,e(n[0],t)&&(r=n[0]);return r},i=function(t){return r(t)?"script":n(t)?"stylesheet":void 0},o=function(t){return"reload"===t.getAttribute("data-turbolinks-track")},r=function(t){var e;return e=t.tagName.toLowerCase(),"script"===e},n=function(t){var e;return e=t.tagName.toLowerCase(),"style"===e||"link"===e&&"stylesheet"===t.getAttribute("rel")},e=function(t,e){var r;return r=t.tagName.toLowerCase(),"meta"===r&&t.getAttribute("name")===e},t}()}.call(this),function(){e.Snapshot=function(){function t(t,e){this.headDetails=t,this.bodyElement=e}return t.wrap=function(t){return t instanceof this?t:"string"==typeof t?this.fromHTMLString(t):this.fromHTMLElement(t)},t.fromHTMLString=function(t){var e;return e=document.createElement("html"),e.innerHTML=t,this.fromHTMLElement(e)},t.fromHTMLElement=function(t){var r,n,o,i;return o=t.querySelector("head"),r=null!=(i=t.querySelector("body"))?i:document.createElement("body"),n=e.HeadDetails.fromHeadElement(o),new this(n,r)},t.prototype.clone=function(){return new this.constructor(this.headDetails,this.bodyElement.cloneNode(!0))},t.prototype.getRootLocation=function(){var t,r;return r=null!=(t=this.getSetting("root"))?t:"/",new e.Location(r)},t.prototype.getCacheControlValue=function(){return this.getSetting("cache-control")},t.prototype.getElementForAnchor=function(t){try{return this.bodyElement.querySelector("[id='"+t+"'], a[name='"+t+"']")}catch(e){}},t.prototype.getPermanentElements=function(){return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")},t.prototype.getPermanentElementById=function(t){return this.bodyElement.querySelector("#"+t+"[data-turbolinks-permanent]")},t.prototype.getPermanentElementsPresentInSnapshot=function(t){var e,r,n,o,i;for(o=this.getPermanentElements(),i=[],r=0,n=o.length;n>r;r++)e=o[r],t.getPermanentElementById(e.id)&&i.push(e);return i},t.prototype.findFirstAutofocusableElement=function(){return this.bodyElement.querySelector("[autofocus]")},t.prototype.hasAnchor=function(t){return null!=this.getElementForAnchor(t)},t.prototype.isPreviewable=function(){return"no-preview"!==this.getCacheControlValue()},t.prototype.isCacheable=function(){return"no-cache"!==this.getCacheControlValue()},t.prototype.isVisitable=function(){return"reload"!==this.getSetting("visit-control")},t.prototype.getSetting=function(t){return this.headDetails.getMetaValue("turbolinks-"+t)},t}()}.call(this),function(){var t=[].slice;e.Renderer=function(){function e(){}var r;return e.render=function(){var e,r,n,o;return n=arguments[0],r=arguments[1],e=3<=arguments.length?t.call(arguments,2):[],o=function(t,e,r){r.prototype=t.prototype;var n=new r,o=t.apply(n,e);return Object(o)===o?o:n}(this,e,function(){}),o.delegate=n,o.render(r),o},e.prototype.renderView=function(t){return this.delegate.viewWillRender(this.newBody),t(),this.delegate.viewRendered(this.newBody)},e.prototype.invalidateView=function(){return this.delegate.viewInvalidated()},e.prototype.createScriptElement=function(t){var e;return"false"===t.getAttribute("data-turbolinks-eval")?t:(e=document.createElement("script"),e.textContent=t.textContent,e.async=!1,r(e,t),e)},r=function(t,e){var r,n,o,i,s,a,u;for(i=e.attributes,a=[],r=0,n=i.length;n>r;r++)s=i[r],o=s.name,u=s.value,a.push(t.setAttribute(o,u));return a},e}()}.call(this),function(){var t,r,n=function(t,e){function r(){this.constructor=t}for(var n in e)o.call(e,n)&&(t[n]=e[n]);return r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype,t},o={}.hasOwnProperty;e.SnapshotRenderer=function(e){function o(t,e,r){this.currentSnapshot=t,this.newSnapshot=e,this.isPreview=r,this.currentHeadDetails=this.currentSnapshot.headDetails,this.newHeadDetails=this.newSnapshot.headDetails,this.currentBody=this.currentSnapshot.bodyElement,this.newBody=this.newSnapshot.bodyElement}return n(o,e),o.prototype.render=function(t){return this.shouldRender()?(this.mergeHead(),this.renderView(function(e){return function(){return e.replaceBody(),e.isPreview||e.focusFirstAutofocusableElement(),t()}}(this))):this.invalidateView()},o.prototype.mergeHead=function(){return this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()},o.prototype.replaceBody=function(){var t;return t=this.relocateCurrentBodyPermanentElements(),this.activateNewBodyScriptElements(),this.assignNewBody(),this.replacePlaceholderElementsWithClonedPermanentElements(t)},o.prototype.shouldRender=function(){return this.newSnapshot.isVisitable()&&this.trackedElementsAreIdentical()},o.prototype.trackedElementsAreIdentical=function(){return this.currentHeadDetails.getTrackedElementSignature()===this.newHeadDetails.getTrackedElementSignature()},o.prototype.copyNewHeadStylesheetElements=function(){var t,e,r,n,o;for(n=this.getNewHeadStylesheetElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},o.prototype.copyNewHeadScriptElements=function(){var t,e,r,n,o;for(n=this.getNewHeadScriptElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(this.createScriptElement(t)));return o},o.prototype.removeCurrentHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getCurrentHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.removeChild(t));return o},o.prototype.copyNewHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getNewHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},o.prototype.relocateCurrentBodyPermanentElements=function(){var e,n,o,i,s,a,u;for(a=this.getCurrentBodyPermanentElements(),u=[],e=0,n=a.length;n>e;e++)i=a[e],s=t(i),o=this.newSnapshot.getPermanentElementById(i.id),r(i,s.element),r(o,i),u.push(s);return u},o.prototype.replacePlaceholderElementsWithClonedPermanentElements=function(t){var e,n,o,i,s,a,u;for(u=[],o=0,i=t.length;i>o;o++)a=t[o],n=a.element,s=a.permanentElement,e=s.cloneNode(!0),u.push(r(n,e));return u},o.prototype.activateNewBodyScriptElements=function(){var t,e,n,o,i,s;for(i=this.getNewBodyScriptElements(),s=[],e=0,o=i.length;o>e;e++)n=i[e],t=this.createScriptElement(n),s.push(r(n,t));return s},o.prototype.assignNewBody=function(){return document.body=this.newBody},o.prototype.focusFirstAutofocusableElement=function(){var t;return null!=(t=this.newSnapshot.findFirstAutofocusableElement())?t.focus():void 0},o.prototype.getNewHeadStylesheetElements=function(){return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)},o.prototype.getNewHeadScriptElements=function(){return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)},o.prototype.getCurrentHeadProvisionalElements=function(){return this.currentHeadDetails.getProvisionalElements()},o.prototype.getNewHeadProvisionalElements=function(){return this.newHeadDetails.getProvisionalElements()},o.prototype.getCurrentBodyPermanentElements=function(){return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)},o.prototype.getNewBodyScriptElements=function(){return this.newBody.querySelectorAll("script")},o}(e.Renderer),t=function(t){var e;return e=document.createElement("meta"),e.setAttribute("name","turbolinks-permanent-placeholder"),e.setAttribute("content",t.id),{element:e,permanentElement:t}},r=function(t,e){var r;return(r=t.parentNode)?r.replaceChild(e,t):void 0}}.call(this),function(){var t=function(t,e){function n(){this.constructor=t}for(var o in e)r.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;e.ErrorRenderer=function(e){function r(t){var e;e=document.createElement("html"),e.innerHTML=t,this.newHead=e.querySelector("head"),this.newBody=e.querySelector("body")}return t(r,e),r.prototype.render=function(t){return this.renderView(function(e){return function(){return e.replaceHeadAndBody(),e.activateBodyScriptElements(),t()}}(this))},r.prototype.replaceHeadAndBody=function(){var t,e;return e=document.head,t=document.body,e.parentNode.replaceChild(this.newHead,e),t.parentNode.replaceChild(this.newBody,t)},r.prototype.activateBodyScriptElements=function(){var t,e,r,n,o,i;for(n=this.getScriptElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},r.prototype.getScriptElements=function(){return document.documentElement.querySelectorAll("script")},r}(e.Renderer)}.call(this),function(){e.View=function(){function t(t){this.delegate=t,this.htmlElement=document.documentElement}return t.prototype.getRootLocation=function(){return this.getSnapshot().getRootLocation()},t.prototype.getElementForAnchor=function(t){return this.getSnapshot().getElementForAnchor(t)},t.prototype.getSnapshot=function(){return e.Snapshot.fromHTMLElement(this.htmlElement)},t.prototype.render=function(t,e){var r,n,o;return o=t.snapshot,r=t.error,n=t.isPreview,this.markAsPreview(n),null!=o?this.renderSnapshot(o,n,e):this.renderError(r,e)},t.prototype.markAsPreview=function(t){return t?this.htmlElement.setAttribute("data-turbolinks-preview",""):this.htmlElement.removeAttribute("data-turbolinks-preview")},t.prototype.renderSnapshot=function(t,r,n){return e.SnapshotRenderer.render(this.delegate,n,this.getSnapshot(),e.Snapshot.wrap(t),r)},t.prototype.renderError=function(t,r){return e.ErrorRenderer.render(this.delegate,r,t)},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ScrollManager=function(){function r(r){this.delegate=r,this.onScroll=t(this.onScroll,this),this.onScroll=e.throttle(this.onScroll)}return r.prototype.start=function(){return this.started?void 0:(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("scroll",this.onScroll,!1),this.started=!1):void 0},r.prototype.scrollToElement=function(t){return t.scrollIntoView()},r.prototype.scrollToPosition=function(t){var e,r;return e=t.x,r=t.y,window.scrollTo(e,r)},r.prototype.onScroll=function(t){return this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},r.prototype.updatePosition=function(t){var e;return this.position=t,null!=(e=this.delegate)?e.scrollPositionChanged(this.position):void 0},r}()}.call(this),function(){e.SnapshotCache=function(){function t(t){this.size=t,this.keys=[],this.snapshots={}}var r;return t.prototype.has=function(t){var e;return e=r(t),e in this.snapshots},t.prototype.get=function(t){var e;if(this.has(t))return e=this.read(t),this.touch(t),e},t.prototype.put=function(t,e){return this.write(t,e),this.touch(t),e},t.prototype.read=function(t){var e;return e=r(t),this.snapshots[e]},t.prototype.write=function(t,e){var n;return n=r(t),this.snapshots[n]=e},t.prototype.touch=function(t){var e,n;return n=r(t),e=this.keys.indexOf(n),e>-1&&this.keys.splice(e,1),this.keys.unshift(n),this.trim()},t.prototype.trim=function(){var t,e,r,n,o;for(n=this.keys.splice(this.size),o=[],t=0,r=n.length;r>t;t++)e=n[t],o.push(delete this.snapshots[e]);return o},r=function(t){return e.Location.wrap(t).toCacheKey()},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Visit=function(){function r(r,n,o){this.controller=r,this.action=o,this.performScroll=t(this.performScroll,this),this.identifier=e.uuid(),this.location=e.Location.wrap(n),this.adapter=this.controller.adapter,this.state="initialized",this.timingMetrics={}}var n;return r.prototype.start=function(){return"initialized"===this.state?(this.recordTimingMetric("visitStart"),this.state="started",this.adapter.visitStarted(this)):void 0},r.prototype.cancel=function(){var t;return"started"===this.state?(null!=(t=this.request)&&t.cancel(),this.cancelRender(),this.state="canceled"):void 0},r.prototype.complete=function(){var t;return"started"===this.state?(this.recordTimingMetric("visitEnd"),this.state="completed","function"==typeof(t=this.adapter).visitCompleted&&t.visitCompleted(this),this.controller.visitCompleted(this)):void 0},r.prototype.fail=function(){var t;return"started"===this.state?(this.state="failed","function"==typeof(t=this.adapter).visitFailed?t.visitFailed(this):void 0):void 0},r.prototype.changeHistory=function(){var t,e;return this.historyChanged?void 0:(t=this.location.isEqualTo(this.referrer)?"replace":this.action,e=n(t),this.controller[e](this.location,this.restorationIdentifier),this.historyChanged=!0)},r.prototype.issueRequest=function(){return this.shouldIssueRequest()&&null==this.request?(this.progress=0,this.request=new e.HttpRequest(this,this.location,this.referrer),this.request.send()):void 0},r.prototype.getCachedSnapshot=function(){var t;return!(t=this.controller.getCachedSnapshotForLocation(this.location))||null!=this.location.anchor&&!t.hasAnchor(this.location.anchor)||"restore"!==this.action&&!t.isPreviewable()?void 0:t},r.prototype.hasCachedSnapshot=function(){return null!=this.getCachedSnapshot()},r.prototype.loadCachedSnapshot=function(){var t,e;return(e=this.getCachedSnapshot())?(t=this.shouldIssueRequest(),this.render(function(){var r;return this.cacheSnapshot(),this.controller.render({snapshot:e,isPreview:t},this.performScroll),"function"==typeof(r=this.adapter).visitRendered&&r.visitRendered(this),t?void 0:this.complete()})):void 0},r.prototype.loadResponse=function(){return null!=this.response?this.render(function(){var t,e;return this.cacheSnapshot(),this.request.failed?(this.controller.render({error:this.response},this.performScroll),"function"==typeof(t=this.adapter).visitRendered&&t.visitRendered(this),this.fail()):(this.controller.render({snapshot:this.response},this.performScroll),"function"==typeof(e=this.adapter).visitRendered&&e.visitRendered(this),this.complete())}):void 0},r.prototype.followRedirect=function(){return this.redirectedToLocation&&!this.followedRedirect?(this.location=this.redirectedToLocation,this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation,this.restorationIdentifier),this.followedRedirect=!0):void 0},r.prototype.requestStarted=function(){var t;return this.recordTimingMetric("requestStart"),"function"==typeof(t=this.adapter).visitRequestStarted?t.visitRequestStarted(this):void 0},r.prototype.requestProgressed=function(t){var e;return this.progress=t,"function"==typeof(e=this.adapter).visitRequestProgressed?e.visitRequestProgressed(this):void 0},r.prototype.requestCompletedWithResponse=function(t,r){return this.response=t,null!=r&&(this.redirectedToLocation=e.Location.wrap(r)),this.adapter.visitRequestCompleted(this)},r.prototype.requestFailedWithStatusCode=function(t,e){return this.response=e,this.adapter.visitRequestFailedWithStatusCode(this,t)},r.prototype.requestFinished=function(){var t;return this.recordTimingMetric("requestEnd"),"function"==typeof(t=this.adapter).visitRequestFinished?t.visitRequestFinished(this):void 0},r.prototype.performScroll=function(){return this.scrolled?void 0:("restore"===this.action?this.scrollToRestoredPosition()||this.scrollToTop():this.scrollToAnchor()||this.scrollToTop(),this.scrolled=!0)},r.prototype.scrollToRestoredPosition=function(){var t,e;return t=null!=(e=this.restorationData)?e.scrollPosition:void 0,null!=t?(this.controller.scrollToPosition(t),!0):void 0},r.prototype.scrollToAnchor=function(){return null!=this.location.anchor?(this.controller.scrollToAnchor(this.location.anchor),!0):void 0},r.prototype.scrollToTop=function(){return this.controller.scrollToPosition({x:0,y:0})},r.prototype.recordTimingMetric=function(t){var e;return null!=(e=this.timingMetrics)[t]?e[t]:e[t]=(new Date).getTime()},r.prototype.getTimingMetrics=function(){return e.copyObject(this.timingMetrics)},n=function(t){switch(t){case"replace":return"replaceHistoryWithLocationAndRestorationIdentifier";case"advance":case"restore":return"pushHistoryWithLocationAndRestorationIdentifier"}},r.prototype.shouldIssueRequest=function(){return"restore"===this.action?!this.hasCachedSnapshot():!0},r.prototype.cacheSnapshot=function(){return this.snapshotCached?void 0:(this.controller.cacheSnapshot(),this.snapshotCached=!0)},r.prototype.render=function(t){return this.cancelRender(),this.frame=requestAnimationFrame(function(e){return function(){return e.frame=null,t.call(e)}}(this))},r.prototype.cancelRender=function(){return this.frame?cancelAnimationFrame(this.frame):void 0},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Controller=function(){function r(){this.clickBubbled=t(this.clickBubbled,this),this.clickCaptured=t(this.clickCaptured,this),this.pageLoaded=t(this.pageLoaded,this),this.history=new e.History(this),this.view=new e.View(this),this.scrollManager=new e.ScrollManager(this),this.restorationData={},this.clearCache(),this.setProgressBarDelay(500)}return r.prototype.start=function(){return e.supported&&!this.started?(addEventListener("click",this.clickCaptured,!0),addEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.start(),this.startHistory(),this.started=!0,this.enabled=!0):void 0},r.prototype.disable=function(){return this.enabled=!1},r.prototype.stop=function(){return this.started?(removeEventListener("click",this.clickCaptured,!0),removeEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.stop(),this.stopHistory(),this.started=!1):void 0},r.prototype.clearCache=function(){return this.cache=new e.SnapshotCache(10)},r.prototype.visit=function(t,r){var n,o;return null==r&&(r={}),t=e.Location.wrap(t),this.applicationAllowsVisitingLocation(t)?this.locationIsVisitable(t)?(n=null!=(o=r.action)?o:"advance",this.adapter.visitProposedToLocationWithAction(t,n)):window.location=t:void 0},r.prototype.startVisitToLocationWithAction=function(t,r,n){var o;return e.supported?(o=this.getRestorationDataForIdentifier(n),this.startVisit(t,r,{restorationData:o})):window.location=t},r.prototype.setProgressBarDelay=function(t){return this.progressBarDelay=t},r.prototype.startHistory=function(){return this.location=e.Location.wrap(window.location),this.restorationIdentifier=e.uuid(),this.history.start(),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.stopHistory=function(){return this.history.stop()},r.prototype.pushHistoryWithLocationAndRestorationIdentifier=function(t,r){return this.restorationIdentifier=r,this.location=e.Location.wrap(t),this.history.push(this.location,this.restorationIdentifier)},r.prototype.replaceHistoryWithLocationAndRestorationIdentifier=function(t,r){return this.restorationIdentifier=r,this.location=e.Location.wrap(t),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.historyPoppedToLocationWithRestorationIdentifier=function(t,r){var n;return this.restorationIdentifier=r,this.enabled?(n=this.getRestorationDataForIdentifier(this.restorationIdentifier),this.startVisit(t,"restore",{restorationIdentifier:this.restorationIdentifier,restorationData:n,historyChanged:!0}),this.location=e.Location.wrap(t)):this.adapter.pageInvalidated()},r.prototype.getCachedSnapshotForLocation=function(t){var e;return null!=(e=this.cache.get(t))?e.clone():void 0},r.prototype.shouldCacheSnapshot=function(){return this.view.getSnapshot().isCacheable();
},r.prototype.cacheSnapshot=function(){var t,r;return this.shouldCacheSnapshot()?(this.notifyApplicationBeforeCachingSnapshot(),r=this.view.getSnapshot(),t=this.lastRenderedLocation,e.defer(function(e){return function(){return e.cache.put(t,r.clone())}}(this))):void 0},r.prototype.scrollToAnchor=function(t){var e;return(e=this.view.getElementForAnchor(t))?this.scrollToElement(e):this.scrollToPosition({x:0,y:0})},r.prototype.scrollToElement=function(t){return this.scrollManager.scrollToElement(t)},r.prototype.scrollToPosition=function(t){return this.scrollManager.scrollToPosition(t)},r.prototype.scrollPositionChanged=function(t){var e;return e=this.getCurrentRestorationData(),e.scrollPosition=t},r.prototype.render=function(t,e){return this.view.render(t,e)},r.prototype.viewInvalidated=function(){return this.adapter.pageInvalidated()},r.prototype.viewWillRender=function(t){return this.notifyApplicationBeforeRender(t)},r.prototype.viewRendered=function(){return this.lastRenderedLocation=this.currentVisit.location,this.notifyApplicationAfterRender()},r.prototype.pageLoaded=function(){return this.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()},r.prototype.clickCaptured=function(){return removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},r.prototype.clickBubbled=function(t){var e,r,n;return this.enabled&&this.clickEventIsSignificant(t)&&(r=this.getVisitableLinkForNode(t.target))&&(n=this.getVisitableLocationForLink(r))&&this.applicationAllowsFollowingLinkToLocation(r,n)?(t.preventDefault(),e=this.getActionForLink(r),this.visit(n,{action:e})):void 0},r.prototype.applicationAllowsFollowingLinkToLocation=function(t,e){var r;return r=this.notifyApplicationAfterClickingLinkToLocation(t,e),!r.defaultPrevented},r.prototype.applicationAllowsVisitingLocation=function(t){var e;return e=this.notifyApplicationBeforeVisitingLocation(t),!e.defaultPrevented},r.prototype.notifyApplicationAfterClickingLinkToLocation=function(t,r){return e.dispatch("turbolinks:click",{target:t,data:{url:r.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationBeforeVisitingLocation=function(t){return e.dispatch("turbolinks:before-visit",{data:{url:t.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationAfterVisitingLocation=function(t){return e.dispatch("turbolinks:visit",{data:{url:t.absoluteURL}})},r.prototype.notifyApplicationBeforeCachingSnapshot=function(){return e.dispatch("turbolinks:before-cache")},r.prototype.notifyApplicationBeforeRender=function(t){return e.dispatch("turbolinks:before-render",{data:{newBody:t}})},r.prototype.notifyApplicationAfterRender=function(){return e.dispatch("turbolinks:render")},r.prototype.notifyApplicationAfterPageLoad=function(t){return null==t&&(t={}),e.dispatch("turbolinks:load",{data:{url:this.location.absoluteURL,timing:t}})},r.prototype.startVisit=function(t,e,r){var n;return null!=(n=this.currentVisit)&&n.cancel(),this.currentVisit=this.createVisit(t,e,r),this.currentVisit.start(),this.notifyApplicationAfterVisitingLocation(t)},r.prototype.createVisit=function(t,r,n){var o,i,s,a,u;return i=null!=n?n:{},a=i.restorationIdentifier,s=i.restorationData,o=i.historyChanged,u=new e.Visit(this,t,r),u.restorationIdentifier=null!=a?a:e.uuid(),u.restorationData=e.copyObject(s),u.historyChanged=o,u.referrer=this.location,u},r.prototype.visitCompleted=function(t){return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())},r.prototype.clickEventIsSignificant=function(t){return!(t.defaultPrevented||t.target.isContentEditable||t.which>1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)},r.prototype.getVisitableLinkForNode=function(t){return this.nodeIsVisitable(t)?e.closest(t,"a[href]:not([target]):not([download])"):void 0},r.prototype.getVisitableLocationForLink=function(t){var r;return r=new e.Location(t.getAttribute("href")),this.locationIsVisitable(r)?r:void 0},r.prototype.getActionForLink=function(t){var e;return null!=(e=t.getAttribute("data-turbolinks-action"))?e:"advance"},r.prototype.nodeIsVisitable=function(t){var r;return(r=e.closest(t,"[data-turbolinks]"))?"false"!==r.getAttribute("data-turbolinks"):!0},r.prototype.locationIsVisitable=function(t){return t.isPrefixedBy(this.view.getRootLocation())&&t.isHTML()},r.prototype.getCurrentRestorationData=function(){return this.getRestorationDataForIdentifier(this.restorationIdentifier)},r.prototype.getRestorationDataForIdentifier=function(t){var e;return null!=(e=this.restorationData)[t]?e[t]:e[t]={}},r}()}.call(this),function(){!function(){var t,e;if((t=e=document.currentScript)&&!e.hasAttribute("data-turbolinks-suppress-warning"))for(;t=t.parentNode;)if(t===document.body)return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s",e.outerHTML)}()}.call(this),function(){var t,r,n;e.start=function(){return r()?(null==e.controller&&(e.controller=t()),e.controller.start()):void 0},r=function(){return null==window.Turbolinks&&(window.Turbolinks=e),n()},t=function(){var t;return t=new e.Controller,t.adapter=new e.BrowserAdapter(t),t},n=function(){return window.Turbolinks===e},n()&&e.start()}.call(this)}).call(this), true&&module.exports?module.exports=e: true&&!(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}).call(this);

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/app_v3.js":
/*!********************************!*\
  !*** ./resources/js/app_v3.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_favorites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/favorites */ "./resources/js/lib/favorites.js");
/* harmony import */ var _lib_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/player */ "./resources/js/lib/player.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./resources/js/main.js");




var Turbolinks = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");

Turbolinks.start();
$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});
window.ajax_prefix = window.App.urlBase + '/' + window.App.current_language + '/ajax';
window.prefix = window.App.urlBase + '/' + window.App.current_language;
window.player = new _lib_player__WEBPACK_IMPORTED_MODULE_1__["default"]();
window.favorites = new _lib_favorites__WEBPACK_IMPORTED_MODULE_0__["default"]();
$(document).ready(function () {
  Object(_main__WEBPACK_IMPORTED_MODULE_2__["initiateLib"])();
  favorites.favoritesChanged();
});
document.addEventListener("turbolinks:before-visit", function (event) {
  document.getElementById("MainLoading").style.display = "flex";
});
document.addEventListener("turbolinks:render", function (event) {
  $(document).ready(function () {
    Object(_main__WEBPACK_IMPORTED_MODULE_2__["initiateLib"])();
  });
  window.player.stateChanged();
  favorites.favoritesChanged();
});
document.addEventListener("DOMContentLoaded", function () {
  Livewire.hook('message.processed', function (message, component) {
    Object(_main__WEBPACK_IMPORTED_MODULE_2__["initiateLib"])();
    window.player.stateChanged();
    favorites.favoritesChanged();
  });
});

/***/ }),

/***/ "./resources/js/lib/clipboard.js":
/*!***************************************!*\
  !*** ./resources/js/lib/clipboard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clipboard; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/lib/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Clipboard = /*#__PURE__*/function () {
  function Clipboard(text) {
    _classCallCheck(this, Clipboard);

    this.text = text;
  }

  _createClass(Clipboard, [{
    key: "copy",
    value: function copy() {
      var value;

      if (typeof this.text !== 'string') {
        try {
          value = JSON.stringify(this.text);
        } catch (e) {
          this.errorNotify();
        }
      } else {
        value = this.text;
      }

      var textarea = document.createElement('textarea');
      textarea.addEventListener('focusin', function (e) {
        return e.stopPropagation();
      });
      textarea.value = value;
      textarea.setAttribute('readonly', '');
      textarea.style.cssText = 'position:fixed;pointer-events:none;z-index:-9999;opacity:0;';
      document.body.appendChild(textarea);

      if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        textarea.contentEditable = true;
        textarea.readOnly = true;
        var range = document.createRange();
        range.selectNodeContents(textarea);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        textarea.setSelectionRange(0, 999999);
      } else {
        textarea.select();
      }

      try {
        document.execCommand('copy');
        this.successNotify();
      } catch (err) {
        this.errorNotify();
      }
    }
  }, {
    key: "successNotify",
    value: function successNotify() {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.copied"), 'success', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.text-copied"));
    }
  }, {
    key: "errorNotify",
    value: function errorNotify() {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.error"), 'warn', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.error-copying-text"));
    }
  }]);

  return Clipboard;
}();



/***/ }),

/***/ "./resources/js/lib/favorites.js":
/*!***************************************!*\
  !*** ./resources/js/lib/favorites.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Favorites; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/lib/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Favorites = /*#__PURE__*/function () {
  function Favorites() {
    _classCallCheck(this, Favorites);

    this.videos = [];
    this.radios = [];
    this.reads = [];
    this.soar = [];
    this.getFavorites();
  }

  _createClass(Favorites, [{
    key: "getFavorites",
    value: function getFavorites() {
      var self = this;
      $.get(window.App.urlBase + '/' + window.App.current_language + '/ajax/favorites', function (response, status) {
        if (typeof response.videos != "undefined") {
          self.videos = response.videos;
        }

        if (typeof response.radios != "undefined") {
          self.radios = response.radios;
        }

        if (typeof response.reads != "undefined") {
          self.reads = response.reads;
        }

        if (typeof response.soar != "undefined") {
          self.soar = response.soar;
        }

        self.favoritesChanged();
      });
    }
  }, {
    key: "saveFavorites",
    value: function saveFavorites() {
      var data = {
        "_token": window.App.csrfToken,
        videos: this.videos,
        radios: this.radios,
        reads: this.reads,
        soar: this.soar
      };
      $.post(window.App.urlBase + '/' + window.App.current_language + '/ajax/favorites', data, function (response, textStatus, jqXHR) {}).fail(function (jqXHR, textStatus, errorThrown) {});
    }
  }, {
    key: "addItem",
    value: function addItem(item, type) {
      item = item.toString();

      switch (type) {
        case 'videos':
          var items = this.videos;
          break;

        case 'radios':
          var items = this.radios;
          break;

        case 'reads':
          var items = this.reads;
          break;

        case 'soar':
          var items = this.soar;
          break;
      }

      if (!items.includes(item)) {
        items.push(item);
        this.saveFavorites();
        this.favoritesChanged();
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.added"), 'success', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.sora-added-favorites"));
    }
  }, {
    key: "removeItem",
    value: function removeItem(item, type) {
      item = item.toString();

      switch (type) {
        case 'videos':
          var items = this.videos;
          break;

        case 'radios':
          var items = this.radios;
          break;

        case 'reads':
          var items = this.reads;
          break;

        case 'soar':
          var items = this.soar;
          break;
      }

      if (items.includes(item)) {
        items.splice(items.indexOf(item), 1);
        this.saveFavorites();
        this.favoritesChanged();
      }

      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.removed"), 'warn', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.sora-removed-favorites"));
    }
  }, {
    key: "favoritesChanged",
    value: function favoritesChanged() {
      $('.like-btn').each(function (i, obj) {
        var id = $(this).data("id").toString();
        var group = $(this).data("group");
        var inFavorites = false;
        inFavorites = favorites[group].includes(id);

        if (inFavorites) {
          $(this).hide();
          $(this).next('.deslike-btn').show();
        } else {
          $(this).show();
          $(this).next('.deslike-btn').hide();
        }
      });
    }
  }, {
    key: "favoritesIncludes",
    value: function favoritesIncludes(item, type) {
      var result = false;

      switch (type) {
        case 'videos':
          result = this.videos.includes(item);
          break;

        case 'radios':
          result = this.radios.includes(item);
          break;

        case 'reads':
          result = this.reads.includes(item);
          break;

        case 'soar':
          result = this.soar.includes(item);
          break;
      }

      return result;
    }
  }, {
    key: "clearFavorites",
    value: function clearFavorites() {
      this.videos = [];
      this.radios = [];
      this.reads = [];
      this.soar = [];
    }
  }]);

  return Favorites;
}();



/***/ }),

/***/ "./resources/js/lib/file-uploader.js":
/*!*******************************************!*\
  !*** ./resources/js/lib/file-uploader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileUploader; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/lib/utils.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var FileUploader = /*#__PURE__*/function () {
  function FileUploader(item) {
    _classCallCheck(this, FileUploader);

    var self = this;
    dropzone__WEBPACK_IMPORTED_MODULE_1___default.a.autoDiscover = false;
    this.myDropzone = new dropzone__WEBPACK_IMPORTED_MODULE_1___default.a("#fileUploader", {
      url: window.prefix + "/uploader?_token=" + window.csrftoken,
      thumbnailWidth: 138,
      maxFilesize: 2400,
      uploadMultiple: false,
      clickable: "#addBtn2",
      previewTemplate: document.querySelector("#imagePreview2").innerHTML,
      multiple: false,
      addRemoveLinks: true,
      maxFiles: 1,
      dictDefaultMessage: false,
      dictFallbackMessage: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-fallback-message"),
      dictFallbackText: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-fallback-text"),
      dictFileTooBig: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-file-too-big"),
      dictInvalidFileType: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-invalid-file-type"),
      dictResponseError: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-response-error"),
      dictCancelUpload: '<i class="fas fa-trash"></i>',
      dictUploadCanceled: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-upload-canceled"),
      dictCancelUploadConfirmation: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-cancel-upload-confirmation"),
      dictRemoveFile: '<i class="fas fa-trash"></i>',
      dictMaxFilesExceeded: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-max-files-exceeded"),
      acceptedFiles: "audio/*",
      headers: {
        "My-Awesome-Header": "header value"
      },
      init: function init() {
        this.on("success", function (file, response) {
          // self.$emit("uploaded", response.image_id);
          if (this.getAcceptedFiles().length > 0) {
            this.disable();
            $("#addBtn2").hide();
          } else {
            this.enable();
            $("#addBtn2").show();
          }
        });
        this.on("removedfile", function (file) {
          // self.$emit("uploaded", "");
          if (this.getAcceptedFiles().length > 0) {
            this.disable();
            $("#addBtn2").hide();
          } else {
            this.enable();
            $("#addBtn2").show();
          }
        });
      }
    });
  }

  _createClass(FileUploader, [{
    key: "successNotify",
    value: function successNotify() {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.copied"), 'success', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.text-copied"));
    }
  }, {
    key: "errorNotify",
    value: function errorNotify() {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.error"), 'warn', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.error-copying-text"));
    }
  }]);

  return FileUploader;
}();



/***/ }),

/***/ "./resources/js/lib/flipbook.js":
/*!**************************************!*\
  !*** ./resources/js/lib/flipbook.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlipBook; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/lib/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FlipBook = /*#__PURE__*/function () {
  function FlipBook(element) {
    _classCallCheck(this, FlipBook);

    var self = this;
    this.start = parseInt(element.dataset.start);
    this.end = parseInt(element.dataset.end);
    this.page = parseInt(element.dataset.page);
    this.kahf = element.dataset.kahf;
    this.mobile = element.dataset.mobile;
    this.sora = 18;
    this.current_page = 0;
    this.images = [];
    this.setImages();
    $(".mushafs-options .custom-select.read").change(function () {
      var read = $(this).val();
      var url = ajax_prefix + '/soar/item?r=' + read + '&s=' + self.sora;
      var item = self.sora;
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getItemAndPlay"])(url, item, 'sora');
    });
    $(".mushafs-options .custom-select.sora").change(function () {
      self.sora = $(this).val();
      self.page = $(this).children('option:selected').data('page');
      self.setReads();
    });
    $(".mushafs-options .custom-select.part").change(function () {
      self.page = parseInt($(this).val());
      self.changePage($(this).val());
    });
    Array.prototype.forEach.call(document.getElementsByClassName("next-btn"), function (nextBtn) {
      nextBtn.onclick = function () {
        self.nextPage();
      };
    });
    Array.prototype.forEach.call(document.getElementsByClassName("previous-btn"), function (nextBtn) {
      nextBtn.onclick = function () {
        self.previousPage();
      };
    });
  }

  _createClass(FlipBook, [{
    key: "setAlkahfReads",
    value: function setAlkahfReads() {
      $.ajax({
        type: 'GET',
        url: ajax_prefix + "/alkahf-surah",
        success: function success(response) {
          for (var i = 0; i < response.read_soar.length; i++) {
            var read = response.read_soar[i];
            var html = '<option value="' + read.read + '">' + read.reciter_name + '</option>';
            $(".mushafs-options .custom-select.read").append(html);
          }

          $(".mushafs-options .share-btn").data('title', response.page_share.title);
          $(".mushafs-options .share-btn").data('description', response.page_share.description);
          $(".mushafs-options .share-btn").data('url', response.page_share.url);
        },
        error: function error(data) {}
      });
    }
  }, {
    key: "setReads",
    value: function setReads() {
      var self = this;
      $.ajax({
        type: 'GET',
        url: ajax_prefix + "/reads/list?s=" + this.sora,
        success: function success(response) {
          for (var i = 0; i < response.reads.length; i++) {
            var read = response.reads[i];
            var html = '<option value="' + read.id + '">' + read.reciter_name + ' - <span>' + read.rewaya_name + '</span></option>';
            $(".mushafs-options .custom-select.read").append(html);
          }

          self.changePage(self.page);
        },
        error: function error(data) {}
      });
    }
  }, {
    key: "setParts",
    value: function setParts() {
      $.ajax({
        type: 'GET',
        url: ajax_prefix + "/mushaf",
        success: function success(response) {
          for (var key in response.parts) {
            if (response.parts.hasOwnProperty(key)) {
              var part = response.parts[key];
              var html = '<option value="' + part.start_page + '">' + part.name + '</option>';
              $(".mushafs-options .custom-select.part").append(html);
            }
          }
        },
        error: function error(data) {}
      });
    }
  }, {
    key: "setSoar",
    value: function setSoar() {
      $.ajax({
        type: 'GET',
        url: ajax_prefix + "/soar/list",
        success: function success(response) {
          for (var i = 0; i < response.soar.length; i++) {
            var sora = response.soar[i];
            var html = '<option data-page="' + sora.start_page + '" value="' + sora.id + '">' + sora.name + '</option>';
            $(".mushafs-options .custom-select.sora").append(html);
          }
        },
        error: function error(data) {}
      });
    }
  }, {
    key: "nextPage",
    value: function nextPage() {
      if (this.mobile !== 'true') {
        this.changePage(this.current_page + 2);
      } else {
        this.changePage(this.current_page + 1);
      }
    }
  }, {
    key: "previousPage",
    value: function previousPage() {
      if (this.mobile !== 'true') {
        this.changePage(this.current_page - 2);
      } else {
        this.changePage(this.current_page - 1);
      }
    }
  }, {
    key: "changePage",
    value: function changePage(page) {
      var self = this;
      var add = 0;

      if (this.kahf !== 'true') {
        if (this.mobile !== 'true') {
          add = 2;
        } else {
          add = 1;
        }
      }

      if (page <= this.end && page >= this.start - add) {
        if (page % 2 === 0 && this.mobile !== 'true') {
          self.current_page = page - 1;
        } else {
          self.current_page = page;
        }
      }

      if (page <= this.end && page > this.start - add) {
        if (this.images.includes(self.current_page)) {
          this.adjustImages();
        } else {
          this.setImages();
        }
      }

      this.setFlipped();
    }
  }, {
    key: "setFlipped",
    value: function setFlipped() {
      var self = this;
      var index = parseInt(self.images[0]) - 1;

      if (self.current_page % 2 !== 0 && this.mobile !== 'true') {
        index--;
      }

      Array.prototype.forEach.call(document.getElementsByClassName("fipable"), function (fliping) {
        if (self.current_page > index) {
          fliping.classList.add("flipped");
        } else {
          fliping.classList.remove("flipped");
        }

        index++;
      });
    }
  }, {
    key: "setImages",
    value: function setImages() {
      var odd = 0;
      var add = 1;
      var count = 29;

      if (this.mobile == 'true') {
        count = 12;
      }

      if (this.page === 0) {
        odd = 1;
        add = 0;
      }

      if (this.page % 2 !== 0 && this.mobile !== 'true') {
        odd = 1;
        add = 0;
      }

      var first_page = Math.max(1, this.start - add, this.page - 5 - odd);
      var last_page = Math.min(this.end + add, this.page + count - odd);
      this.images = [];

      for (var i = first_page; i < last_page; i++) {
        this.images.push(i);
      }

      this.current_page = this.page;
      this.insertImages();
    }
  }, {
    key: "adjustImages",
    value: function adjustImages() {
      var last_item = this.images[this.images.length - 1];
      var first_item = this.images[0];
      var itemsCount = 2;

      if (this.mobile === 'true') {
        itemsCount--;
      }

      if (this.current_page > first_item + 4 && last_item < this.end) {
        for (var index = 0; index < itemsCount; index++) {
          // remove pages 
          document.getElementById('pages').removeChild(document.getElementById('pages').firstChild);
          this.images.shift(); // add pages 

          this.images.push(last_item + index + 1);
          this.insertImage(this.images.indexOf(last_item + index + 1));
        }
      }

      if (this.current_page < first_item + 4 && first_item > 1) {
        for (var _index = 0; _index < itemsCount; _index++) {
          // remove pages 
          document.getElementById('pages').removeChild(document.getElementById('pages').lastChild);
          this.images.pop(); // add pages 

          this.images.unshift(first_item - _index - 1);
          this.insertImage(this.images.indexOf(first_item - _index - 1), true);
        }
      }
    }
  }, {
    key: "insertImages",
    value: function insertImages() {
      document.getElementById("pages").innerHTML = "";

      for (var index = 0; index < this.images.length; index++) {
        this.insertImage(index);
      }

      this.setFlipped();
    }
  }, {
    key: "insertImage",
    value: function insertImage(index) {
      var prepand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var self = this;
      var item = self.images[index];
      var page = document.createElement("div");
      page.className = 'page fipable';
      var zindex = 1000 - item + 1;

      if (item % 2 || this.mobile === 'true') {
        page.style = "z-index: " + zindex + ";";
      }

      if (this.mobile !== 'true') {
        page.onclick = function () {
          if (item % 2) {
            self.nextPage();
          } else {
            self.previousPage();
          }
        };
      }

      var image = document.createElement("img");
      image.src = "https://cdn.qurango.net/Sura2/files/mobile/" + item + ".jpg";
      page.appendChild(image);

      if (prepand) {
        document.getElementById("pages").prepend(page);
      } else {
        document.getElementById("pages").appendChild(page);
      }
    }
  }]);

  return FlipBook;
}();



/***/ }),

/***/ "./resources/js/lib/image-uploader.js":
/*!********************************************!*\
  !*** ./resources/js/lib/image-uploader.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageUploader; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/lib/utils.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ImageUploader = /*#__PURE__*/function () {
  function ImageUploader(item) {
    _classCallCheck(this, ImageUploader);

    var self = this;
    this.type = item.dataset.type;
    this.image = false;
    this.image_id = '';
    dropzone__WEBPACK_IMPORTED_MODULE_1___default.a.autoDiscover = false;
    var myDropzone = new dropzone__WEBPACK_IMPORTED_MODULE_1___default.a("#imageUploader", {
      url: window.prefix + "/medias/upload?type=" + self.type + "&_token=" + window.csrftoken,
      thumbnailWidth: 138,
      maxFilesize: 24,
      uploadMultiple: false,
      clickable: "#addBtn2",
      previewTemplate: document.querySelector("#imagePreview2").innerHTML,
      multiple: false,
      addRemoveLinks: true,
      maxFiles: 1,
      dictDefaultMessage: false,
      dictFallbackMessage: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-fallback-message"),
      dictFallbackText: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-fallback-text"),
      dictFileTooBig: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-file-too-big"),
      dictInvalidFileType: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-invalid-file-type"),
      dictResponseError: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-response-error"),
      dictCancelUpload: '<i class="fas fa-trash"></i>',
      dictUploadCanceled: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-upload-canceled"),
      dictCancelUploadConfirmation: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-cancel-upload-confirmation"),
      dictRemoveFile: '<i class="fas fa-trash"></i>',
      dictMaxFilesExceeded: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.dict-max-files-exceeded"),
      acceptedFiles: "image/png,image/jpeg",
      headers: {
        "My-Awesome-Header": "header value"
      },
      init: function init() {
        this.on("success", function (file, response) {
          self.image_id = response.image_id;

          if (this.getAcceptedFiles().length > 0) {
            this.disable();
            $("#addBtn2").hide();
          } else {
            this.enable();
            $("#addBtn2").show();
          }
        });
        this.on("removedfile", function (file) {
          self.image_id = '';

          if (this.getAcceptedFiles().length > 0) {
            this.disable();
            $("#addBtn2").hide();
          } else {
            this.enable();
            $("#addBtn2").show();
          }
        });

        if (self.image) {
          var mockFile = {
            name: image.file_name,
            size: 12345
          };
          this.emit("addedfile", mockFile);
          $emit("uploaded", image.file_name);
          this.emit("thumbnail", mockFile, image.file_path);
          this.emit("complete", mockFile);
          this.disable();
          $("#addBtn2").hide();
        }
      }
    });
  }

  _createClass(ImageUploader, [{
    key: "successNotify",
    value: function successNotify() {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.copied"), 'success', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.text-copied"));
    }
  }, {
    key: "errorNotify",
    value: function errorNotify() {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.error"), 'warn', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.error-copying-text"));
    }
  }]);

  return ImageUploader;
}();



/***/ }),

/***/ "./resources/js/lib/logo-video.js":
/*!****************************************!*\
  !*** ./resources/js/lib/logo-video.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VideoLogo; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/lib/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var VideoLogo = /*#__PURE__*/function () {
  function VideoLogo(item) {
    _classCallCheck(this, VideoLogo);

    var self = this;
    this.item = item;
    this.place = '';
    this.video = item.dataset.url;
    this.video_id = item.dataset.id;
    this.image = '';
    this.progressing = false;
    this.progress = 0;

    document.getElementById('generateVideoBtn').onclick = function () {
      self.generateVideo();
    };
  }

  _createClass(VideoLogo, [{
    key: "generateVideo",
    value: function generateVideo() {
      var self = this;

      if (this.validate()) {
        var data = {
          place: this.place,
          video: this.video,
          image: this.image
        };
        $.ajax({
          type: 'POST',
          url: window.ajax_prefix + "/video/download/" + this.video.id + "/generate",
          data: data,
          success: function success(response) {
            self.progressing = response.progressing;
            $("#downloadVideoBtn").attr('href', response.generated_url);

            if (response.progressing) {
              self.setProgressing();
            }
          },
          error: function error(data) {
            self.progressing = false;
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.not-reported"), 'warn', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.sora-reported-warn"));
          }
        });
      }
    }
  }, {
    key: "setProgressing",
    value: function setProgressing() {
      $("#generateVideoBtn").hide();
      $("#progressVideo").show();
      var self = this;
      var myInterval = setInterval(function () {
        if (self.progress == 100) {
          self.progressing = false;
          $("#progressVideo").hide();
          $("#downloadVideoBtn").show();
          clearInterval(myInterval);
        } else {
          $.ajax({
            type: 'GET',
            url: window.ajax_prefix + "/video/download/" + self.video_id + "/progress",
            success: function success(response) {
              self.progress = response.progress;
              $("#progressVideo .progress-bar").html(self.progress);
              $("#progressVideo .progress-bar").attr('ariaValuenow', self.progress);
              $("#progressVideo .progress-bar").attr('style', 'width: ' + self.progress + '%;');
            },
            error: function error(data) {}
          });
        }
      }, 1000);
    }
  }, {
    key: "validate",
    value: function validate() {
      var valid = true;
      $("#imageError").hide();
      $("#placeError").hide();

      try {
        this.place = document.querySelector('input[name="place"]:checked').value;
      } catch (error) {
        $("#placeError").show();
        valid = false;
      }

      if (this.place.length != 2) {
        $("#placeError").show();
        valid = false;
      }

      try {
        this.image = window.imageUploader.image_id;
      } catch (error) {
        $("#imageError").show();
        valid = false;
      }

      if (this.image.length == 0) {
        $("#imageError").show();
        valid = false;
      }

      return valid;
    }
  }]);

  return VideoLogo;
}();



/***/ }),

/***/ "./resources/js/lib/player.js":
/*!************************************!*\
  !*** ./resources/js/lib/player.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _playlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist */ "./resources/js/lib/playlist.js");
/* harmony import */ var _quran_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quran-slider */ "./resources/js/lib/quran-slider.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js"),
    Howl = _require.Howl,
    Howler = _require.Howler;




var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    self = this; //Get old current item

    this.sound = null;
    this.current_item = null;
    this.current_index = 0;
    this.state = {
      playing_state: null,
      playing_item: null,
      playing_type: null
    };
    this.dragStartIndex = null; //Get old playlist
    // localStorage.removeItem('mp3quran_playlist_2');
    // localStorage.removeItem('mp3quran_player_2');

    this.getLocalData();

    if (this.playerData.current_index != undefined && this.playlist.length > 0) {
      this.setCurrentItem(this.playerData.current_index);
      this.current_index = this.playerData.current_index;
    }

    if (this.playerData.volume != undefined) {
      this.volume(parseFloat(this.playerData.volume));
    } else {
      this.volume(0.7);
    }

    this.stateChanged();
    $("#playerPlayBtn").on("click", function (e) {
      e.preventDefault();
      self.play();
    });
    $("#fullPlayerPlayBtn").on("click", function (e) {
      e.preventDefault();
      self.play();
    });
    $("#playerPauseBtn").on("click", function (e) {
      e.preventDefault();
      self.pause();
    });
    $("#fullPlayerPauseBtn").on("click", function (e) {
      e.preventDefault();
      self.pause();
    });
    $("#playerPrevBtn").on("click", function (e) {
      e.preventDefault();
      self.skip('prev');
    });
    $("#fullPlayerPrevBtn").on("click", function (e) {
      e.preventDefault();
      self.skip('prev');
    });
    $("#playerNextBtn").on("click", function (e) {
      e.preventDefault();
      self.skip('next');
    });
    $("#fullPlayerNextBtn").on("click", function (e) {
      e.preventDefault();
      self.skip('next');
    });
    $("#playerBackwardBtn").on("click", function (e) {
      e.preventDefault();
      self.backward(5);
    });
    $("#playerForwardBtn").on("click", function (e) {
      e.preventDefault();
      self.forward(5);
    });
    $("#playerPlaylistBtn").on("click", function (e) {
      e.preventDefault();
      self.togglePlaylist();
    });
    $("#closePlaylist").on("click", function (e) {
      e.preventDefault();
      self.togglePlaylist();
    });
    $("#fullPlayerToggle").on("click", function (e) {
      e.preventDefault();
      self.toggleFullPlayer();
    });
    $("#closeFullplayer").on("click", function (e) {
      e.preventDefault();
      self.toggleFullPlayer();
    });
    $("#playerVolumeBtn").on("click", function (e) {
      self.toggleVolume();
    });
    $("#playerVolumeBtnMbl").on("click", function (e) {
      self.toggleVolumeMbl();
    });
    $("#clearPlaylist").on("click", function (e) {
      e.preventDefault();
      self.setPlaylist([]);
      $("#playlistId").val("");
      $("#playlistName").val("");
    });

    if ($('#savePlaylist').length) {
      $("#savePlaylist").on("click", function (e) {
        e.preventDefault();
        Object(_playlist__WEBPACK_IMPORTED_MODULE_0__["savePlaylist"])();
      });
    }

    $(".quran-slider").each(function (e) {
      var control = $(this).data("control");
      new _quran_slider__WEBPACK_IMPORTED_MODULE_1__["default"](this, control);
    });
  }
  /************************************
  * Playlist Controles
  ************************************/


  _createClass(Player, [{
    key: "getLocalData",
    value: function getLocalData() {
      var playlist = JSON.parse(localStorage.getItem("mp3quran_playlist_2") || "[]");

      for (var index = 0; index < playlist.length; index++) {
        var element = playlist[index];
        delete element.howl;

        if (!Object.hasOwn(element, 'id') || !Object.hasOwn(element, 'file') || !Object.hasOwn(element, 'name') || !Object.hasOwn(element, 'type')) {
          playlist.splice(index, 1);
        }
      }

      this.playerData = JSON.parse(localStorage.getItem("mp3quran_player_2") || "{}");
      this.setPlaylist(playlist);
    }
  }, {
    key: "setPlaylist",
    value: function setPlaylist(playlist) {
      this.playlist = playlist;
      this.updatePlaylist();
    }
  }, {
    key: "addItemToPlaylist",
    value: function addItemToPlaylist(item) {
      var index = this.getItemIndex(item);

      if (index === -1) {
        this.playlist.push(item);
        this.updatePlaylist();
      }
    }
  }, {
    key: "removeItemFromPlaylist",
    value: function removeItemFromPlaylist(item) {
      var index = this.getItemIndex(item);
      this.playlist.splice(index, 1);
      this.updatePlaylist();

      if (index == this.current_index) {
        this.skip('next');
      }
    }
  }, {
    key: "swapItemsPlaylist",
    value: function swapItemsPlaylist(startIndex, EndIndex) {
      if (startIndex > EndIndex) {
        this.playlist.splice(EndIndex, 0, this.playlist[startIndex]);
        this.playlist.splice(startIndex + 1, 1);
      } else {
        this.playlist.splice(EndIndex + 1, 0, this.playlist[startIndex]);
        this.playlist.splice(startIndex, 1);
      }

      this.updatePlaylist();
    }
  }, {
    key: "updatePlaylist",
    value: function updatePlaylist() {
      var _this = this;

      var self = this;
      var storagePlaylist = [];
      $("#playerList").html('');

      if (this.playlist.length > 0) {
        $('.audio-player').show();
      } else {
        $('.audio-player').hide();

        if (self.sound != null) {
          self.sound.stop();
        }
      }

      var _loop = function _loop(index) {
        var item = _this.playlist[index];
        clone = document.getElementById('playlistItem').content.cloneNode(true);
        fullclone = document.getElementById('fullPlaylistItem').content.cloneNode(true); //set text elements

        if (typeof item.name !== "undefined" && item.name != null) {
          sora = clone.querySelectorAll(".read-sora")[0];
          fullsora = fullclone.querySelectorAll(".read-sora")[0];
          sora.innerHTML = item.name;
          fullsora.innerHTML = item.name;
        }

        if (typeof item.num !== "undefined" && item.num != null) {
          num = clone.querySelectorAll(".read-num")[0];
          num.innerHTML = item.num;
        }

        if (typeof item.reciter !== "undefined" && item.reciter != null) {
          reciter = clone.querySelectorAll(".reciter-name")[0];
          fullreciter = fullclone.querySelectorAll(".read-reciter")[0];
          reciter.innerHTML = item.reciter;
          fullreciter.innerHTML = item.reciter;
        }

        if (typeof item.rewaya !== "undefined" && item.rewaya != null) {
          rewaya = clone.querySelectorAll(".rewaya-name")[0];
          rewaya.innerHTML = item.rewaya;
        }

        clone.querySelectorAll("li")[0].id = "playerListItem-" + index;
        clone.querySelectorAll("li")[0].classList.add('spib-' + item.type + '-' + item.id);
        fullclone.querySelectorAll("li")[0].id = "fullPlayerListItem-" + index;
        fullclone.querySelectorAll("li")[0].classList.add('spib-' + item.type + '-' + item.id); //add event and append

        clone.querySelectorAll(".btn-play")[0].onclick = function () {
          player.skipTo(index);
        };

        fullclone.querySelectorAll(".btn-play")[0].onclick = function () {
          player.skipTo(index);
        };

        clone.querySelectorAll(".btn-pause")[0].onclick = function () {
          player.pause();
        };

        fullclone.querySelectorAll(".btn-pause")[0].onclick = function () {
          player.pause();
        };

        clone.querySelectorAll(".btn-delete-plitem")[0].onclick = function () {
          player.removeItemFromPlaylist(item);
        };

        clone.querySelectorAll(".drag-handle")[0].closest('li').addEventListener('dragstart', function () {
          self.dragStartIndex = index;
        });
        clone.querySelectorAll(".drag-handle")[0].closest('li').addEventListener('dragover', function (event) {
          event.preventDefault();
        });
        clone.querySelectorAll(".drag-handle")[0].closest('li').addEventListener('drop', function () {
          var dragEndIndex = index;
          player.swapItemsPlaylist(self.dragStartIndex, dragEndIndex);
        });
        document.getElementById('playerList').appendChild(clone);
        document.getElementById('fullPlayerList').appendChild(fullclone); //update storage playlist

        var storageItem = Object.assign({}, item);
        delete storageItem.howl;
        storagePlaylist.push(storageItem);
      };

      for (var index = 0; index < this.playlist.length; index++) {
        var clone;
        var fullclone;
        var sora;
        var fullsora;
        var num;
        var reciter;
        var fullreciter;
        var rewaya;

        _loop(index);
      }

      localStorage.setItem('mp3quran_playlist_2', JSON.stringify(storagePlaylist));
      self.stateChanged();
    }
  }, {
    key: "setCurrentItem",
    value: function setCurrentItem(index) {
      var self = this;

      if (typeof self.playlist[index] == 'undefined') {
        index = 0;
      }

      self.current_item = self.playlist[index];
      self.state.playing_item = self.current_item.id;
      self.state.playing_type = self.current_item.type;
      self.stateChanged();
      self.setCurrentIndex(index);
      var data = self.playlist[self.current_index]; //stop current playing item

      for (var i = 0; i < self.playlist.length; i++) {
        if (self.playlist[i].howl) {
          self.playlist[i].howl.stop();
        }
      } //if is howler and current is same as clicked just play else create and load 


      if (data.howl) {
        self.sound = data.howl;
      } else {
        if (self.sound == null || self.sound.src !== self.current_item.file) {
          if (self.sound != null) {
            self.sound.unload();
          }
        }

        self.sound = data.howl = new Howl({
          src: [self.current_item.file],
          html5: true,
          // Force to HTML5 so that the audio can stream in (best for large files).
          preload: true,
          pool: 1,
          onplay: function onplay() {
            requestAnimationFrame(self.step.bind(self));
            self.state.playing_state = 'playing';
            self.stateChanged();
          },
          onplayerror: function onplayerror() {},
          onloaderror: function onloaderror() {},
          onload: function onload() {
            $("#playerDuration").html(self.formatTime(Math.round(self.sound.duration())));
            $("#playerTimer").html(self.formatTime(0));
          },
          onend: function onend() {
            self.skip('next');
          },
          onpause: function onpause() {
            self.state.playing_state = 'paused';
            self.stateChanged();
          },
          onstop: function onstop() {
            self.stateChanged();
          },
          onseek: function onseek() {
            requestAnimationFrame(self.step.bind(self));
          }
        });
      } // self.sound.load();


      $("#reciterName").html(self.current_item.reciter);
      $("#soraName").html(self.current_item.name);
      $("#fplyReader").html(self.current_item.reciter);
      $("#fplySora").html(self.current_item.name);

      if (self.current_item.type == "tsora") {
        $("#bookmarkBtn").addClass('show');
      } else {
        $("#bookmarkBtn").removeClass('show');
      }
    }
  }, {
    key: "setCurrentIndex",
    value: function setCurrentIndex(index) {
      if (typeof index === 'number') {
        this.current_index = index;
        this.playerData.current_index = index;
        localStorage.setItem('mp3quran_player_2', JSON.stringify(this.playerData));
      }
    }
  }, {
    key: "addAndPlayItem",
    value: function addAndPlayItem(item) {
      this.state.playing_state = 'loading';
      this.addItemToPlaylist(item);
      this.setCurrentItem(this.getItemIndex(item));
      this.play();
    }
  }, {
    key: "loadPalylist",
    value: function loadPalylist(items, id, name) {
      this.setPlaylist([]);
      this.state.playing_state = 'loading';

      for (var index = 0; index < items.length; index++) {
        this.addItemToPlaylist(items[index]);
      }

      $("#playlistId").val(id);
      $("#playlistName").val(name);
      this.setCurrentItem(this.getItemIndex(items[0]));
      this.play();
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      this.addItemToPlaylist(item);

      if (this.playlist.length == 1) {
        this.setCurrentItem(this.getItemIndex(item));
      }
    }
  }, {
    key: "stateChanged",
    value: function stateChanged() {
      this.stateChange({
        index: this.current_index,
        playing_state: this.state.playing_state,
        playing_item: this.state.playing_item,
        playing_type: this.state.playing_type
      });
    }
  }, {
    key: "stateChange",
    value: function stateChange(state) {
      $('.spib-loading').hide();
      $('.spib-pause').hide();
      $('.spib-play').show();

      switch (state.playing_state) {
        case "loading":
          $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-loading').show();
          $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-pause').hide();
          $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-play').hide();
          $('.spib-controls .spib-loading').show();
          $('.spib-controls .spib-pause').hide();
          $('.spib-controls .spib-play').hide();
          break;

        case "playing":
          $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-loading').hide();
          $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-pause').show();
          $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-play').hide();
          $('.spib-controls .spib-loading').hide();
          $('.spib-controls .spib-pause').show();
          $('.spib-controls .spib-play').hide();
          break;

        default:
          $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-loading').hide();
          $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-pause').hide();
          $(".spib-" + state.playing_type + '-' + state.playing_item + ' .spib-play').show();
          $('.spib-controls .spib-loading').hide();
          $('.spib-controls .spib-pause').hide();
          $('.spib-controls .spib-play').show();
          break;
      }
    }
  }, {
    key: "togglePlaylist",
    value: function togglePlaylist() {
      $("#playerPlaylist").toggleClass('opened');
    }
  }, {
    key: "toggleFullPlayer",
    value: function toggleFullPlayer() {
      $("#fullPlayer").toggleClass("opened");
    }
    /************************************
     * Player Controles
     ************************************/

  }, {
    key: "play",
    value: function play() {
      if (!this.sound.playing()) {
        this.sound.play();
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this.sound.playing()) {
        this.sound.pause();
      }
    }
  }, {
    key: "skip",
    value: function skip(direction) {
      var self = this; // Get the next track based on the direction of the track.

      var index = 0;

      if (direction === 'prev') {
        index = self.current_index - 1;

        if (index < 0) {
          index = self.playlist.length - 1;
        }
      } else {
        index = self.current_index + 1;

        if (index >= self.playlist.length) {
          index = 0;
        }
      }

      self.skipTo(index);
    }
  }, {
    key: "skipTo",
    value: function skipTo(index) {
      var self = this; // Stop the current track.

      if (self.playlist[self.current_index].howl) {
        self.playlist[self.current_index].howl.stop();
      } // Reset playerProgress.


      $(".quran-slider.seek .qs-progress").css("width", "0%");
      $(".player-progress-line").css("width", "0%");
      $(".quran-slider.seek .qs-point").css("left", "calc(0% - 6px)");
      $(".sply-progress-mobile").css("width", '0%'); // Play the new track.

      this.state.playing_state = 'loading';
      this.setCurrentItem(index);
      self.play(index);
    }
    /************************************
    * volume Controles
    ************************************/

  }, {
    key: "volume",
    value: function volume(val) {
      var self = this; // Update the global volume (affecting all Howls).

      Howler.volume(val); // Update the display on the slider.

      if (val <= 0) {
        $('#playerVolumeBtn .uni-icon').hide();
        $('#playerVolumeBtn .icon-volume_off').show();
        $('#playerVolumeBtnMbl .uni-icon').hide();
        $('#playerVolumeBtnMbl .icon-volume_off').show();
      } else if (val > 0 && val <= 0.15) {
        $('#playerVolumeBtn .uni-icon').hide();
        $('#playerVolumeBtn .icon-volume_mute').show();
        $('#playerVolumeBtnMbl .uni-icon').hide();
        $('#playerVolumeBtnMbl .icon-volume_mute').show();
      } else if (val > 0.15 && val <= 0.65) {
        $('#playerVolumeBtn .uni-icon').hide();
        $('#playerVolumeBtn .icon-volume_down').show();
        $('#playerVolumeBtnMbl .uni-icon').hide();
        $('#playerVolumeBtnMbl .icon-volume_down').show();
      } else {
        $('#playerVolumeBtn .uni-icon').hide();
        $('#playerVolumeBtn .icon-volume_up').show();
        $('#playerVolumeBtnMbl .uni-icon').hide();
        $('#playerVolumeBtnMbl .icon-volume_up').show();
      }

      this.playerData.volume = val;
      localStorage.setItem('mp3quran_player_2', JSON.stringify(this.playerData));
      $(".quran-slider.volume .qs-progress").css("height", val * 100 + 'px');
      $(".quran-slider.volume .qs-point").css("bottom", 'calc(' + val * 100 + 'px - 6px)'); // var barWidth = (val * 90) / 100;
      // $("#playerBarFull").css("width", (barWidth * 100) + '%');
      // $("#playerSliderBtn").css("left", (window.innerWidth * barWidth + window.innerWidth * 0.05 - 25) + 'px');
    }
  }, {
    key: "toggleVolume",
    value: function toggleVolume() {
      if (Howler.volume() > 0) {
        Howler.volume(0);
        $('#playerVolumeBtn .uni-icon').hide();
        $('#playerVolumeBtn .icon-volume_off').show();
        $(".quran-slider.volume .qs-progress").css("height", '0px');
        $(".quran-slider.volume .qs-point").css("bottom", 'calc(0px - 6px)');
      } else {
        this.volume(this.playerData.volume);
      }

      $("#playerVolume").toggleClass('show');
    }
  }, {
    key: "toggleVolumeMbl",
    value: function toggleVolumeMbl() {
      $("#playerVolume").toggleClass('show');
    }
    /************************************
    * Helpers Functions
    ************************************/

  }, {
    key: "formatTime",
    value: function formatTime(secs) {
      var minutes = Math.floor(secs / 60) || 0;
      var seconds = secs - minutes * 60 || 0;
      return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }
  }, {
    key: "getItemIndex",
    value: function getItemIndex(item) {
      var result = this.playlist.filter(function (obj) {
        return obj.id === item.id;
      });
      return this.playlist.indexOf(result[0]);
    }
    /************************************
    ************************************/

  }, {
    key: "seek",
    value: function seek(per) {
      // Convert the percent into a seek position.
      // if (this.sound.playing()) {
      this.sound.seek(this.sound.duration() * per); // }
    }
  }, {
    key: "forward",
    value: function forward(sec) {
      var seek = this.sound.seek() || 0;
      seek = Math.min(seek + sec, this.sound.duration() - 1);
      this.sound.seek(seek);
    }
  }, {
    key: "backward",
    value: function backward(sec) {
      var seek = this.sound.seek() || 0;
      seek = Math.max(seek - sec, 0);
      this.sound.seek(seek);
    }
    /**
     * The step called within requestAnimationFrame to update the playback position.
     */

  }, {
    key: "step",
    value: function step() {
      if ($(".quran-slider.seek").hasClass("qs-active")) {} else {
        var seek = this.sound.seek() || 0;
        $("#playerTimer").html(this.formatTime(Math.round(seek)));
        $(".quran-slider.seek .qs-progress").css("width", (seek / this.sound.duration() * 100 || 0) + '%');
        $(".quran-slider.seek .qs-point").css("left", 'calc(' + (seek / this.sound.duration() * 100 || 0) + '% - 6px)');
        $(".player-progress-line").css("width", (seek / this.sound.duration() * 100 || 0) + '%');
        $(".sply-progress-mobile").css("width", (seek / this.sound.duration() * 100 || 0) + '%');

        if (this.sound.playing() && $(".quran-slider.seek .qs-point").data('down', 'false')) {
          requestAnimationFrame(this.step.bind(this));
        }
      }
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./resources/js/lib/playlist.js":
/*!**************************************!*\
  !*** ./resources/js/lib/playlist.js ***!
  \**************************************/
/*! exports provided: savePlaylist, loadPalylist, deletePalylist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePlaylist", function() { return savePlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPalylist", function() { return loadPalylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePalylist", function() { return deletePalylist; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/lib/utils.js");

function savePlaylist() {
  $("#playlistName").removeClass("error");
  var savePlaylist = [];

  for (var index = 0; index < window.player.playlist.length; index++) {
    var item = window.player.playlist[index];
    var saveItem = {};

    switch (item.type) {
      case 'tadabor':
        saveItem = {
          'type': item.type,
          'tadabor_id': item.id.replace('tb', '')
        };
        break;

      case 'radio':
        saveItem = {
          'type': item.type,
          'radio_id': item.id.replace('100002-', '')
        };
        break;

      default:
        saveItem = {
          'type': item.type,
          'sora_id': item.sora_id,
          'read_id': item.read_id
        };
        break;
    }

    savePlaylist.push(saveItem);
  }

  var data = {
    name: $("#playlistName").val(),
    id: $("#playlistId").val(),
    playlist: JSON.stringify(savePlaylist)
  };
  var url = window.App.urlBase + '/' + window.App.current_language + '/ajax/playlist';
  $.ajax({
    type: 'POST',
    url: url,
    data: data,
    success: function success(response) {
      var loc = window.location.pathname;

      if (loc.includes('playlists')) {
        Turbolinks.visit(window.location.toString(), {
          action: 'replace'
        });
      }
    },
    error: function error(data) {
      if (data.responseJSON && data.responseJSON.errors && data.responseJSON.errors.name) {
        $("#playlistName").addClass("error");
      }
    }
  });
}
function loadPalylist(id, name) {
  $.ajax({
    type: 'GET',
    url: window.App.urlBase + '/' + window.App.current_language + '/ajax/playlist/' + id,
    success: function success(response) {
      window.player.loadPalylist(response, id, name);
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.done"), 'success', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.playlist-loaded-text"));
    },
    error: function error(data) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.error"), 'warn', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.playlist-not-loaded-text"));
    }
  });
}
function deletePalylist(id) {
  $.ajax({
    type: 'DELETE',
    url: window.App.urlBase + '/' + window.App.current_language + '/ajax/playlist/' + id,
    success: function success(response) {
      Turbolinks.visit(window.location.toString(), {
        action: 'replace'
      });
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.done"), 'success', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.playlist-deleted-text"));
    },
    error: function error(data) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.error"), 'warn', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.playlist-not-deleted-text"));
    }
  });
}

/***/ }),

/***/ "./resources/js/lib/quick-access.js":
/*!******************************************!*\
  !*** ./resources/js/lib/quick-access.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuickAccess; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/lib/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var QuickAccess = /*#__PURE__*/function () {
  function QuickAccess() {
    _classCallCheck(this, QuickAccess);

    var self = this;
    self.setReads();
    $("#quickAccessId .custom-select.read").change(function () {
      self.getSoar($(this).val());
    });
    $("#quickAccessId button").on("click", function (e) {
      e.preventDefault();
      var read = $("#quickAccessId .custom-select.read").val();
      var sora = $("#quickAccessId .custom-select.sora").val();
      var url = ajax_prefix + '/soar/item?r=' + read + '&s=' + sora;
      var item = sora;
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getItemAndPlay"])(url, item, 'sora');
      $("#quickAccessId").modal("hide");
    });
  }

  _createClass(QuickAccess, [{
    key: "showModal",
    value: function showModal() {
      $("#quickAccessId").modal("show");
    }
  }, {
    key: "setReads",
    value: function setReads() {
      $.ajax({
        type: 'GET',
        url: ajax_prefix + "/reads/list",
        success: function success(response) {
          for (var i = 0; i < response.reads.length; i++) {
            var read = response.reads[i];
            var html = '<option value="' + read.id + '">' + read.reciter_name + ' - <span>' + read.rewaya_name + '</span></option>';
            $("#quickAccessId .custom-select.read").append(html);
          }
        },
        error: function error(data) {}
      });
    }
  }, {
    key: "getSoar",
    value: function getSoar(read) {
      $.ajax({
        type: 'GET',
        url: ajax_prefix + "/soar/list?r=" + read,
        success: function success(response) {
          var html = '<option value class="d-none" disabled selected>' + Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.sora") + '</option>';

          for (var i = 0; i < response.soar.length; i++) {
            var sora = response.soar[i];
            html += '<option value="' + sora.id + '">' + sora.name + '</option>';
          }

          $("#quickAccessId .custom-select.sora").html(html);
        },
        error: function error(data) {}
      });
    }
  }, {
    key: "submitReport",
    value: function submitReport() {
      var data = {
        note: $("#reportNote").val()
      };

      if (data.note.length < 10) {
        $("#report_model .text-danger").show();
      } else {
        var url = this.prefix + "/" + this.read + "/" + this.sora + "/report";
        $.ajax({
          type: 'POST',
          url: url,
          data: data,
          success: function success(response) {
            $("#report_model").modal("hide");

            if (response.success) {
              $("#reportNote").val('');
              Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.reported"), 'success', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.sora-reported-success"));
            } else {
              Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.not-reported"), 'warn', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.sora-reported-warn"));
            }
          },
          error: function error(data) {
            Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.not-reported"), 'warn', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.sora-reported-warn"));
          }
        });
      }
    }
  }]);

  return QuickAccess;
}();



/***/ }),

/***/ "./resources/js/lib/quran-slider.js":
/*!******************************************!*\
  !*** ./resources/js/lib/quran-slider.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quranSlider; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var quranSlider = /*#__PURE__*/function () {
  function quranSlider(slider, control) {
    _classCallCheck(this, quranSlider);

    var self = this;
    this.control = control;
    this.slider = slider;
    this.set_perc = 0; // $(this.slider).on("mouseover", function (event) {
    //     self.showTooltip(event);
    // });
    // $(this.slider).on("mouseout", function (event) {
    //     self.hideTooltip(event);
    // });

    $(this.slider).on("mousedown", function (event) {
      if (player.sound.duration() != Infinity || control == 'volume') {
        self.startSlide(event);
      }
    });
    $(document).on("mousemove", function (event) {
      var mousedown = event.buttons === 1;

      if (mousedown && $(self.slider).hasClass("qs-active")) {
        self.changeSlide(event);
      }

      event.stopPropagation();
    });
    $(document).on("mouseup", function (event) {
      if ($(self.slider).hasClass("qs-active")) {
        self.stopSlide(event);
      }

      event.stopPropagation();
    });
  }

  _createClass(quranSlider, [{
    key: "showTooltip",
    value: function showTooltip(event) {
      $(this.slider).find(".player-progress-tooltip").show();
      var set_perc = this.calcPerc(event);
      $(this.slider).find(".player-progress-tooltip").css('left', 'calc(' + set_perc * 100 + '% - 6px)');
    }
  }, {
    key: "hideTooltip",
    value: function hideTooltip(event) {
      $(this.slider).find(".player-progress-tooltip").hide();
    }
  }, {
    key: "startSlide",
    value: function startSlide(event) {
      $(this.slider).addClass("qs-active");
      this.changeSlide(event);
    }
  }, {
    key: "changeSlide",
    value: function changeSlide(event) {
      this.set_perc = this.calcPerc(event);

      if (this.control == 'volume') {
        $(this.slider).find(".qs-progress").css('height', this.set_perc * 100 + 'px');
        $(this.slider).find(".qs-point").css('bottom', 'calc(' + this.set_perc * 100 + 'px - 6px)');
      } else {
        $(this.slider).find(".qs-progress").css('width', this.set_perc * 100 + '%');
        $(this.slider).find(".qs-point").css('left', 'calc(' + this.set_perc * 100 + '% - 6px)');
        $(this.slider).find(".qs-point").attr('data-down', 'true');
        $("#playerTimer").html(player.formatTime(Math.round(this.set_perc * player.sound.duration())));
        $('.player-progress-line').css('width', this.set_perc * 100 + '%');
      }
    }
  }, {
    key: "stopSlide",
    value: function stopSlide(event) {
      $(this.slider).removeClass("qs-active");

      if (this.control == 'progress') {
        player.seek(this.set_perc);
      }

      if (this.control == 'volume') {
        player.volume(this.set_perc);
      }

      this.set_perc = 0;
    }
  }, {
    key: "calcPerc",
    value: function calcPerc(event) {
      var set_perc = 0;

      if (this.control == 'volume') {
        var bottom = $(this.slider)[0].getBoundingClientRect().bottom;
        set_perc = ((-event.clientY + bottom) / $(this.slider).outerHeight()).toFixed(6);
      } else {
        var playerProgress = $(this.slider).find(".qs-progress");
        set_perc = ((event.clientX - $(playerProgress).offset().left) / $(this.slider).outerWidth()).toFixed(6);
      }

      set_perc = Math.max(set_perc, 0);
      return Math.min(set_perc, 1);
    }
  }]);

  return quranSlider;
}();



/***/ }),

/***/ "./resources/js/lib/report-sora.js":
/*!*****************************************!*\
  !*** ./resources/js/lib/report-sora.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReportSora; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./resources/js/lib/services.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ReportSora = /*#__PURE__*/function () {
  function ReportSora(params) {
    _classCallCheck(this, ReportSora);

    this.read = params.read;
    this.sora = params.sora;
    this.prefix = params.prefix;
  }

  _createClass(ReportSora, [{
    key: "showModal",
    value: function showModal() {
      $("#report_model").modal("show");
    }
  }, {
    key: "submitReport",
    value: function submitReport() {
      var data = {
        note: $("#reportNote").val()
      };

      if (data.note.length < 10) {
        $("#report_model .text-danger").show();
      } else {
        var url = this.prefix + "/" + this.read + "/" + this.sora + "/report";
        Object(_services__WEBPACK_IMPORTED_MODULE_0__["postReport"])(url, data);
      }
    }
  }]);

  return ReportSora;
}();



/***/ }),

/***/ "./resources/js/lib/screenfull.js":
/*!****************************************!*\
  !*** ./resources/js/lib/screenfull.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable promise/prefer-await-to-then */
var methodMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], // New WebKit
['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], // Old WebKit
['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];

var nativeAPI = function () {
  if (typeof document === 'undefined') {
    return false;
  }

  var unprefixedMethods = methodMap[0];
  var returnValue = {};

  var _iterator = _createForOfIteratorHelper(methodMap),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var methodList = _step.value;
      var exitFullscreenMethod = methodList === null || methodList === void 0 ? void 0 : methodList[1];

      if (exitFullscreenMethod in document) {
        var _iterator2 = _createForOfIteratorHelper(methodList.entries()),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 2),
                index = _step2$value[0],
                method = _step2$value[1];

            returnValue[unprefixedMethods[index]] = method;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return returnValue;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return false;
}();

var eventNameMap = {
  change: nativeAPI.fullscreenchange,
  error: nativeAPI.fullscreenerror
}; // eslint-disable-next-line import/no-mutable-exports

var screenfull = {
  // eslint-disable-next-line default-param-last
  request: function request() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
    var options = arguments.length > 1 ? arguments[1] : undefined;
    return new Promise(function (resolve, reject) {
      var onFullScreenEntered = function onFullScreenEntered() {
        screenfull.off('change', onFullScreenEntered);
        resolve();
      };

      screenfull.on('change', onFullScreenEntered);
      var returnPromise = element[nativeAPI.requestFullscreen](options);

      if (returnPromise instanceof Promise) {
        returnPromise.then(onFullScreenEntered)["catch"](reject);
      }
    });
  },
  exit: function exit() {
    return new Promise(function (resolve, reject) {
      if (!screenfull.isFullscreen) {
        resolve();
        return;
      }

      var onFullScreenExit = function onFullScreenExit() {
        screenfull.off('change', onFullScreenExit);
        resolve();
      };

      screenfull.on('change', onFullScreenExit);
      var returnPromise = document[nativeAPI.exitFullscreen]();

      if (returnPromise instanceof Promise) {
        returnPromise.then(onFullScreenExit)["catch"](reject);
      }
    });
  },
  toggle: function toggle(element, options) {
    return screenfull.isFullscreen ? screenfull.exit() : screenfull.request(element, options);
  },
  onchange: function onchange(callback) {
    screenfull.on('change', callback);
  },
  onerror: function onerror(callback) {
    screenfull.on('error', callback);
  },
  on: function on(event, callback) {
    var eventName = eventNameMap[event];

    if (eventName) {
      document.addEventListener(eventName, callback, false);
    }
  },
  off: function off(event, callback) {
    var eventName = eventNameMap[event];

    if (eventName) {
      document.removeEventListener(eventName, callback, false);
    }
  },
  raw: nativeAPI
};
Object.defineProperties(screenfull, {
  isFullscreen: {
    get: function get() {
      return Boolean(document[nativeAPI.fullscreenElement]);
    }
  },
  element: {
    enumerable: true,
    get: function get() {
      var _document$nativeAPI$f;

      return (_document$nativeAPI$f = document[nativeAPI.fullscreenElement]) !== null && _document$nativeAPI$f !== void 0 ? _document$nativeAPI$f : undefined;
    }
  },
  isEnabled: {
    enumerable: true,
    // Coerce to boolean in case of old WebKit.
    get: function get() {
      return Boolean(document[nativeAPI.fullscreenEnabled]);
    }
  }
});

if (!nativeAPI) {
  screenfull = {
    isEnabled: false
  };
}

/* harmony default export */ __webpack_exports__["default"] = (screenfull);

/***/ }),

/***/ "./resources/js/lib/services.js":
/*!**************************************!*\
  !*** ./resources/js/lib/services.js ***!
  \**************************************/
/*! exports provided: postReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postReport", function() { return postReport; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/lib/utils.js");

function postReport(url, data) {
  $.ajax({
    type: 'POST',
    url: url,
    data: data,
    success: function success(response) {
      $("#report_model").modal("hide");

      if (response.success) {
        $("#reportNote").val('');
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.reported"), 'success', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.sora-reported-success"));
      } else {
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.not-reported"), 'warn', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.sora-reported-warn"));
      }
    },
    error: function error(data) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["notify"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.not-reported"), 'warn', Object(_utils__WEBPACK_IMPORTED_MODULE_0__["trans"])("text.sora-reported-warn"));
    }
  });
}

/***/ }),

/***/ "./resources/js/lib/share.js":
/*!***********************************!*\
  !*** ./resources/js/lib/share.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Share; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var $window = typeof window !== 'undefined' ? window : null;

var Share = /*#__PURE__*/function () {
  function Share(params) {
    _classCallCheck(this, Share);

    this.url = encodeURIComponent(params.url);
    this.description = encodeURIComponent(params.description);
    this.title = encodeURIComponent(params.title);
    this.key = '';
    this.link = '';
    this.popup = {
      width: 626,
      height: 436
    };
  }

  _createClass(Share, [{
    key: "showModal",
    value: function showModal() {
      $("#share_model").modal("show");
    }
  }, {
    key: "shareOn",
    value: function shareOn(network) {
      var _this = this;

      this.key = network.toLowerCase();

      switch (network) {
        case 'whatsapp':
          this.link = this.shareOnWhatsappLink();
          break;

        case 'facebook':
          this.link = this.shareOnFacebookLink();
          break;

        case 'twitter':
          this.link = this.shareOnTwitterLink();
          break;
      }

      this.resizePopup(); // If a popup window already exist, we close it and trigger a change event.

      if (this.popupWindow && this.popupInterval) {
        clearInterval(this.popupInterval); // Force close (for Facebook)

        this.popupWindow.close();
        this.emit('change');
      }

      this.popupWindow = $window.open(this.link, 'sharer-' + this.key, ',height=' + this.popup.height + ',width=' + this.popup.width + ',left=' + this.popupLeft + ',top=' + this.popupTop + ',screenX=' + this.popupLeft + ',screenY=' + this.popupTop); // If popup are prevented (AdBlocker, Mobile App context..), popup.window stays undefined and we can't display it

      if (!this.popupWindow) return;
      this.popupWindow.focus(); // Create an interval to detect popup closing event

      this.popupInterval = setInterval(function () {
        if (!_this.popupWindow || _this.popupWindow.closed) {
          clearInterval(_this.popupInterval);
          _this.popupWindow = null;

          _this.emit('close');
        }
      }, 500);
      this.emit('open');
    }
  }, {
    key: "shareOnWhatsappLink",
    value: function shareOnWhatsappLink() {
      return 'https://api.whatsapp.com/send?text=' + this.title + '%0D%0A' + this.url + '%0D%0A' + this.description;
    }
  }, {
    key: "shareOnFacebookLink",
    value: function shareOnFacebookLink() {
      return 'https://www.facebook.com/sharer/sharer.php?u=' + this.url + '&title=' + this.title + '&description=' + this.description;
    }
  }, {
    key: "shareOnTwitterLink",
    value: function shareOnTwitterLink() {
      return 'https://twitter.com/intent/tweet?text=' + this.title + '&url=' + this.url;
    }
  }, {
    key: "resizePopup",
    value: function resizePopup() {
      var width = $window.innerWidth || document.documentElement.clientWidth || $window.screenX;
      var height = $window.innerHeight || document.documentElement.clientHeight || $window.screenY;
      var systemZoom = width / $window.screen.availWidth;
      this.popupLeft = (width - this.popup.width) / 2 / systemZoom + ($window.screenLeft !== undefined ? $window.screenLeft : $window.screenX);
      this.popupTop = (height - this.popup.height) / 2 / systemZoom + ($window.screenTop !== undefined ? $window.screenTop : $window.screenY);
    }
  }, {
    key: "touch",
    value: function touch() {
      window.open(this.shareLink, '_blank');
      this.emit('open');
    }
  }, {
    key: "emit",
    value: function emit(name) {// this.$emit('share_network_' + name, this.key, this.url)
      // this.emit(name, this.key, this.url)
    }
  }]);

  return Share;
}();



/***/ }),

/***/ "./resources/js/lib/utils.js":
/*!***********************************!*\
  !*** ./resources/js/lib/utils.js ***!
  \***********************************/
/*! exports provided: notify, trans, getItemAndPlay, addItem, bookmarkTsora */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notify", function() { return notify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trans", function() { return trans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemAndPlay", function() { return getItemAndPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookmarkTsora", function() { return bookmarkTsora; });
function notify(title, type, text) {
  var div = $("<div class='notification-wrapper'><div class='notification " + type + "'><div class='notification-title'>" + title + "</div><div class='notification-content'>" + text + "</div></div></div>");
  $(".notifications").append(div);
  setTimeout(function () {
    div.remove();
  }, 3000);
}
function trans(string) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var stringArray = string.split(".");
  var value = window.trans;

  for (var index = 0; index < stringArray.length; index++) {
    value = value[stringArray[index]];
  }

  for (var arg in args) {
    if (!args.hasOwnProperty(arg)) continue;
    value = value.replace(arg, args[arg]);
  }

  return value;
}
function getItemAndPlay(url, item, type) {
  var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (window.player.state.playing_item != item && url) {
    window.player.stateChange({
      playing_type: type,
      playing_item: item,
      playing_state: "loading"
    });
    $.ajax({
      type: 'GET',
      url: url,
      success: function success(response) {
        window.player.addAndPlayItem(response);

        if (time) {
          window.player.sound.once('play', function () {
            window.player.sound.seek(time / 1000);
          });
        }
      },
      error: function error(response) {}
    });
  } else {
    window.player.play();
  }
}
function addItem(url) {
  $.ajax({
    type: 'GET',
    url: url,
    success: function success(response) {
      window.player.addItem(response);
      notify(trans("text.added"), 'success', trans("text.item-added-playlist"));
    },
    error: function error(response) {
      notify(trans("text.not-added"), 'warn', trans("text.item-not-added-playlist"));
    }
  });
}
function bookmarkTsora(url) {
  $.ajax({
    type: 'GET',
    url: url,
    success: function success(response) {
      notify(trans("text.added"), 'success', trans("text.bookmark-created"));
    },
    error: function error(response) {
      notify(trans("text.not-added"), 'warn', trans("text.bookmark-not-created"));
    }
  });
}

/***/ }),

/***/ "./resources/js/lib/vid-player.js":
/*!****************************************!*\
  !*** ./resources/js/lib/vid-player.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VidPlayer; });
/* harmony import */ var dplayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dplayer */ "./node_modules/dplayer/dist/DPlayer.min.js");
/* harmony import */ var dplayer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dplayer__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var VidPlayer = function VidPlayer(item) {
  _classCallCheck(this, VidPlayer);

  var url = item.dataset.url;
  var live = false;

  if (item.dataset.live) {
    live = true;
  }

  var autoplay = false;

  if (item.dataset.autoplay) {
    autoplay = true;
  }

  this.dp = new dplayer__WEBPACK_IMPORTED_MODULE_0___default.a({
    container: item,
    live: live,
    autoplay: autoplay,
    video: {
      url: url,
      pic: 'demo.jpg',
      thumbnails: 'thumbnails.jpg'
    }
  });
};



/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! exports provided: initiateLib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initiateLib", function() { return initiateLib; });
/* harmony import */ var _lib_report_sora__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/report-sora */ "./resources/js/lib/report-sora.js");
/* harmony import */ var _lib_quick_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/quick-access */ "./resources/js/lib/quick-access.js");
/* harmony import */ var _lib_flipbook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/flipbook */ "./resources/js/lib/flipbook.js");
/* harmony import */ var _lib_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/share */ "./resources/js/lib/share.js");
/* harmony import */ var _lib_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/clipboard */ "./resources/js/lib/clipboard.js");
/* harmony import */ var _lib_file_uploader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/file-uploader */ "./resources/js/lib/file-uploader.js");
/* harmony import */ var _lib_image_uploader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/image-uploader */ "./resources/js/lib/image-uploader.js");
/* harmony import */ var _lib_vid_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/vid-player */ "./resources/js/lib/vid-player.js");
/* harmony import */ var _lib_logo_video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/logo-video */ "./resources/js/lib/logo-video.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/utils */ "./resources/js/lib/utils.js");
/* harmony import */ var _lib_playlist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/playlist */ "./resources/js/lib/playlist.js");
/* harmony import */ var _lib_screenfull__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/screenfull */ "./resources/js/lib/screenfull.js");












function initiateLib() {
  document.getElementById("MainLoading").style.display = "none";
  retateHeaderAds();
  $('.tafsir-sora-btn').off('click').click(function () {
    var current_sora = $(this).data("sora");
    $('.tafsir-sora-collapse').not($('#tafsirsSora-' + current_sora)).removeClass('show');
    $('.tafsir-sora-btn').not($(this)).removeClass('show');
    $('#tafsirsSora-' + current_sora).toggleClass('show');
    $(this).toggleClass('show');
  });
  $(".card-playlist .load-btn").off('click').on("click", function (e) {
    Object(_lib_playlist__WEBPACK_IMPORTED_MODULE_10__["loadPalylist"])($(this).data("id"), $(this).data("name"));
  });
  $(".card-playlist .delete-btn").off('click').on("click", function (e) {
    Object(_lib_playlist__WEBPACK_IMPORTED_MODULE_10__["deletePalylist"])($(this).data("id"));
  }); //languagesToggl

  $('.tbl-btn').off('click').click(function (e) {
    e.preventDefault();
    $('.tb-languages .tbl-dropdown').toggleClass('opened');
    $('#footer .expend-menu').removeClass('expended');
  });
  $('.tbl-dropdown .close-lan').off('click').click(function (e) {
    e.preventDefault();
    $('.tb-languages .tbl-dropdown').removeClass('opened');
  });
  $('#toggelExpended').off('click').click(function (e) {
    e.preventDefault();
    $('#footer .expend-menu').toggleClass('expended');
    $('.tb-languages .tbl-dropdown').removeClass('opened');
  });
  $(".quick-access a").off('click').on("click", function (e) {
    e.preventDefault();
    window.quickAccess = new _lib_quick_access__WEBPACK_IMPORTED_MODULE_1__["default"]();
    quickAccess.showModal();
  });
  $(".report-btn").off('click').on("click", function (e) {
    e.preventDefault();
    var params = {
      read: $(this).data("read"),
      sora: $(this).data("sora"),
      prefix: $(this).data("prefix")
    };
    window.reportSora = new _lib_report_sora__WEBPACK_IMPORTED_MODULE_0__["default"](params);
    reportSora.showModal();
  });
  $("#submitReport").off('click').on("click", function (e) {
    e.preventDefault();
    reportSora.submitReport();
  });
  $(".ply-btn.btn-pause").off('click').on("click", function (e) {
    player.pause();
  });
  $(".ply-btn.btn-play").off('click').on("click", function (e) {
    var url = $(this).data("url");
    var item = $(this).data("item");
    var type = $(this).data("type");
    var time = $(this).data("time");
    Object(_lib_utils__WEBPACK_IMPORTED_MODULE_9__["getItemAndPlay"])(url, item, type, time);
  });
  $(".share-btn").off('click').on("click", function (e) {
    var params = {
      url: $(this).data("url"),
      description: $(this).data("description"),
      title: $(this).data("title")
    };
    window.share = new _lib_share__WEBPACK_IMPORTED_MODULE_3__["default"](params);
    share.showModal();
  });
  $(".share-on").off('click').on("click", function (e) {
    var network = $(this).data("network");
    share.shareOn(network);
  });
  $(".direct-share").off('click').on("click", function (e) {
    var network = $(this).data("network");
    var params = {
      url: $(this).closest('.show-share').data("url"),
      description: $(this).parents('.show-share').data("description"),
      title: $(this).parent().data("title")
    };
    window.share = new _lib_share__WEBPACK_IMPORTED_MODULE_3__["default"](params);
    share.shareOn(network);
  });
  $(".clipboard-btn").off('click').on("click", function (e) {
    var text = $(this).data("text");
    window.clipboard = new _lib_clipboard__WEBPACK_IMPORTED_MODULE_4__["default"](text);
    clipboard.copy();
  });
  $(".sora-btn.playlist-add").off('click').on("click", function (e) {
    var url = $(this).data("url");
    Object(_lib_utils__WEBPACK_IMPORTED_MODULE_9__["addItem"])(url);
  });
  $('.like-btn').off('click').on("click", function (e) {
    var sora_id = $(this).data("id");
    var group = $(this).data("group");
    favorites.addItem(sora_id, group);
  });
  $('.deslike-btn').off('click').on("click", function (e) {
    var sora_id = $(this).data("id");
    var group = $(this).data("group");
    favorites.removeItem(sora_id, group);
  });
  $('.more-btn').off('click').on("click", function (e) {
    $('.more-btn').not(this).next('.item-options').removeClass('show');
    $(this).next('.item-options').toggleClass('show');
  });
  $(".btn-bookmark-tafsir").off('click').on("click", function (e) {
    try {
      var time = window.player.current_item.howl.seek();
      console.log(time);
      var url = window.ajax_prefix + '/tsora/bookmark?id=' + window.player.current_item.read_id + '&time=' + Math.round(time);
      Object(_lib_utils__WEBPACK_IMPORTED_MODULE_9__["bookmarkTsora"])(url);
    } catch (error) {
      notify(trans("text.not-added"), 'warn', trans("text.bookmark-not-created"));
    }
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  }); // ********* card logo video ********* //

  $(".card-logo-video").each(function (index) {
    window.videoLogo = new _lib_logo_video__WEBPACK_IMPORTED_MODULE_8__["default"](this);
  }); // ********* file uploader ********* //

  $(".file-uploader").each(function (index) {
    new _lib_file_uploader__WEBPACK_IMPORTED_MODULE_5__["default"](this);
  }); // ********* file uploader ********* //

  $(".image-uploader").each(function (index) {
    window.imageUploader = new _lib_image_uploader__WEBPACK_IMPORTED_MODULE_6__["default"](this);
  }); // ********* video player ********* //

  $(".dplayer").each(function (index) {
    new _lib_vid_player__WEBPACK_IMPORTED_MODULE_7__["default"](this);
  }); // ********* fullscreen ********* //

  var fullscreenElement = document.getElementById('fullscreen');

  if (fullscreenElement) {
    document.getElementById('fullscreenToggle').addEventListener('click', function () {
      if (_lib_screenfull__WEBPACK_IMPORTED_MODULE_11__["default"].isEnabled) {
        _lib_screenfull__WEBPACK_IMPORTED_MODULE_11__["default"].toggle(fullscreenElement);
      }
    });
  } // ********* alkahf flipbook ********* //


  var alkahfFlipbook = document.querySelector('div.alkahf-flipbook');

  if (alkahfFlipbook) {
    window.flipbook = new _lib_flipbook__WEBPACK_IMPORTED_MODULE_2__["default"](alkahfFlipbook);
    flipbook.setAlkahfReads();
    var flipbookObserver = new MutationObserver(function (event) {
      flipbook.watchPage(alkahfFlipbook.dataset.page);
    });
    flipbookObserver.observe(alkahfFlipbook, {
      attributes: true,
      attributeFilter: ['data-page'],
      childList: false,
      characterData: false
    });
  } // ********* mushafs flipbook ********* //


  var mushafsFlipbook = document.querySelector('div.mushafs-flipbook');

  if (mushafsFlipbook) {
    window.flipbook = new _lib_flipbook__WEBPACK_IMPORTED_MODULE_2__["default"](mushafsFlipbook);
    flipbook.setSoar();
    flipbook.setParts();
  }

  $('img').each(function () {
    if (!$(this).attr('title') && $(this).attr('alt')) {
      $(this).attr('title', $(this).attr('alt'));
    }
  });
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
      $(".header").addClass("sticky-header fadeInDown");
      $(".header .top-buttons .btn").addClass("jackInTheBox delay-1s faster");
    } else {
      $(".header").removeClass("sticky-header fadeInDown");
      $(".header .top-buttons .btn").removeClass("jackInTheBox");
    }
  });
  $(document).on('keyup', function (e) {
    if (e.keyCode == 27) {
      $('.popupOverlay').remove();
    }
  }); // CLOSE AND REMOVE ON CLICK

  $('body').on('click', '.popupOverlay .close', function () {
    $('.popupOverlay').remove();
    var adId = $(this).attr("data-id");
    $.get(window.current_language + "/ajax/mpa_closed/" + adId, function () {});
  });
}

function retateHeaderAds() {
  var count = $(" .main .show-header .header-ads .ha-item").length;
  var currentItem = 1;

  if (count > 1) {
    var nextItem = 2;
  } else {
    var nextItem = 1;
  }

  $(" .main .show-header .header-ads .ha-item:nth-child(" + currentItem + ")").addClass('show');
  toggleHeaderAds(currentItem, nextItem, count);
}

function toggleHeaderAds(currentItem, nextItem, count) {
  var soconds = 5;
  window.setTimeout(function () {
    $(" .main .show-header .header-ads .ha-item:nth-child(" + currentItem + ")").removeClass('show');
    $(" .main .show-header .header-ads .ha-item:nth-child(" + nextItem + ")").addClass('show');
    var newCurrentItem = nextItem;
    var newNextItem;

    if (nextItem == count) {
      newNextItem = 1;
    } else {
      newNextItem = nextItem + 1;
    }

    toggleHeaderAds(newCurrentItem, newNextItem, count);
  }, soconds * 1000);
}

/***/ }),

/***/ "./resources/sass/admin/admin.scss":
/*!*****************************************!*\
  !*** ./resources/sass/admin/admin.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/errors.scss":
/*!************************************!*\
  !*** ./resources/sass/errors.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************!*\
  !*** multi ./resources/js/app_v3.js ./resources/sass/app.scss ./resources/sass/errors.scss ./resources/sass/admin/admin.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /opt/homebrew/var/www/mp3quran/resources/js/app_v3.js */"./resources/js/app_v3.js");
__webpack_require__(/*! /opt/homebrew/var/www/mp3quran/resources/sass/app.scss */"./resources/sass/app.scss");
__webpack_require__(/*! /opt/homebrew/var/www/mp3quran/resources/sass/errors.scss */"./resources/sass/errors.scss");
module.exports = __webpack_require__(/*! /opt/homebrew/var/www/mp3quran/resources/sass/admin/admin.scss */"./resources/sass/admin/admin.scss");


/***/ })

/******/ });