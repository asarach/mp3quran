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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/lib/report-sora.js":
/*!*****************************************!*\
  !*** ./resources/js/lib/report-sora.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReportSora; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/lib/utils.js");
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
        $.ajax({
          type: 'POST',
          url: url,
          data: data,
          success: function success(response) {
            $("#report_model").modal("hide");

            if (response.success) {
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

  return ReportSora;
}();



/***/ }),

/***/ "./resources/js/lib/utils.js":
/*!***********************************!*\
  !*** ./resources/js/lib/utils.js ***!
  \***********************************/
/*! exports provided: notify, trans */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notify", function() { return notify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trans", function() { return trans; });
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

/***/ }),

/***/ "./resources/js/main_new.js":
/*!**********************************!*\
  !*** ./resources/js/main_new.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_report_sora__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/report-sora */ "./resources/js/lib/report-sora.js");
 // Start Js Libs 

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});
$(".report-btn").on("click", function (e) {
  e.preventDefault();
  var params = {
    read: $(this).data("read"),
    sora: $(this).data("sora"),
    prefix: $(this).data("prefix")
  };
  window.reportSora = new _lib_report_sora__WEBPACK_IMPORTED_MODULE_0__["default"](params);
  window.reportSora.showModal();
});
$("#submitReport").on("click", function (e) {
  e.preventDefault();
  window.reportSora.submitReport();
});

/***/ }),

/***/ 1:
/*!****************************************!*\
  !*** multi ./resources/js/main_new.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/homebrew/var/www/mp3quran/resources/js/main_new.js */"./resources/js/main_new.js");


/***/ })

/******/ });