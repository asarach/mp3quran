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

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\axios\\index.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlkahfFlipbook.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AlkahfFlipbook.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    read_soar: function read_soar(state) {
      return state.quran.read_soar;
    },
    page_share: function page_share(state) {
      return state.quran.page_share;
    }
  })),
  data: function data() {
    return {
      url: this.ajax_prefix + "/alkahf-surah",
      pageNum: 293,
      audio: {},
      part: {
        start: 294,
        count: 306
      }
    };
  },
  methods: {
    toggleFullscreen: function toggleFullscreen() {
      this.$refs["fullscreen"].toggle();
    },
    fullscreenChange: function fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    shareItem: function shareItem(title, url, description) {
      AppEvent.$emit("share", title, url, description);
    },
    getAddPlayItem: function getAddPlayItem(item) {
      var url = this.ajax_prefix + '/soar/item?r=' + item.read + '&s=' + item.sora;
      window.appFoolter.$store.dispatch("getItemAndPlay", url);
    }
  },
  mounted: function mounted() {
    this.$store.state.loading = true;
    this.$store.dispatch("quran/setAlkahf", this);
  },
  destroyed: function destroyed() {
    this.$store.dispatch("quran/unsetAlkahf");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Confirmation.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Confirmation.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    confirm: function confirm() {
      $("#confirm_model").modal("hide");

      if (typeof window !== "undefined") {
        Event.$emit("confirmed");
      }
    }
  },
  mounted: function mounted() {
    if (typeof window !== "undefined") {
      Event.$on("confirm", function () {
        $("#confirm_model").modal("show");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Favorites.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Favorites.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    videos: function videos(state) {
      return state.favorite.show.videos;
    },
    radios: function radios(state) {
      return state.favorite.show.radios;
    },
    reads: function reads(state) {
      return state.favorite.show.reads;
    },
    soar: function soar(state) {
      return state.favorite.show.soar;
    }
  })),
  data: function data() {
    return {
      url: this.ajax_prefix + "/favorites",
      active_tab: "reads"
    };
  },
  methods: {
    moreReads: function moreReads() {
      this.$store.dispatch("favorite/moreReads", this.url + "?t=reads");
    },
    moreSoar: function moreSoar() {
      this.$store.dispatch("favorite/moreSoar", this.url + "?t=soar");
    },
    moreRadios: function moreRadios() {
      this.$store.dispatch("favorite/moreRadios", this.url + "?t=radios");
    },
    moreVides: function moreVides() {
      this.$store.dispatch("favorite/moreVides", this.url + "?t=videos");
    },
    showTab: function showTab(tab) {
      this.active_tab = tab;
    },
    setActiveTab: function setActiveTab() {
      if (this.reads.data && this.reads.data.length != 0) {
        this.active_tab = "reads";
      } else if (this.soar.data && this.soar.data.length != 0) {
        this.active_tab = "soar";
      } else if (this.radios.data && this.radios.data.length != 0) {
        this.active_tab = "radios";
      } else if (this.videos.data && this.videos.data.length != 0) {
        this.active_tab = "videos";
      }
    }
  },
  created: function created() {
    this.$store.state.loading = true;
    this.$store.dispatch("favorite/setData", this);
  },
  destroyed: function destroyed() {
    this.$store.dispatch("favorite/unsetData");
  },
  watch: {
    soar: {
      deep: true,
      handler: function handler() {
        this.setActiveTab();
      }
    },
    reads: {
      deep: true,
      handler: function handler() {
        this.setActiveTab();
      }
    },
    radios: {
      deep: true,
      handler: function handler() {
        this.setActiveTab();
      }
    },
    videos: {
      deep: true,
      handler: function handler() {
        this.setActiveTab();
      }
    },
    "$route.query.s": function $routeQueryS(newQuery) {
      this.$Progress.start();
      this.url = this.ajax_prefix + "/favorite?s=" + newQuery;
      this.$store.dispatch("favorite/setData", this);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileUploader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    style_version: function style_version(state) {
      return state.settings.style_version;
    },
    current_language: function current_language(state) {
      return state.current_language;
    },
    uploads: function uploads(state) {
      return state.uploader.uploads;
    },
    initial: function initial(state) {
      return state.initial;
    }
  })),
  data: function data() {
    return {
      url: this.ajax_prefix + "/uploader",
      filename: ""
    };
  },
  mounted: function mounted() {
    var self = this;
    dropzone__WEBPACK_IMPORTED_MODULE_1___default.a.autoDiscover = false;
    var myDropzone = new dropzone__WEBPACK_IMPORTED_MODULE_1___default.a("#imageUploader2", {
      url: this.prefix + "uploader?_token=" + window.csrftoken,
      thumbnailWidth: 138,
      maxFilesize: 2400,
      uploadMultiple: false,
      clickable: "#addBtn2",
      previewTemplate: document.querySelector("#imagePreview2").innerHTML,
      multiple: false,
      addRemoveLinks: true,
      maxFiles: 1,
      dictDefaultMessage: false,
      dictFallbackMessage: self.trans("text.dict-fallback-message"),
      dictFallbackText: self.trans("text.dict-fallback-text"),
      dictFileTooBig: self.trans("text.dict-file-too-big"),
      dictInvalidFileType: self.trans("text.dict-invalid-file-type"),
      dictResponseError: self.trans("text.dict-response-error"),
      dictCancelUpload: '<i class="fas fa-trash"></i>',
      dictUploadCanceled: self.trans("text.dict-upload-canceled"),
      dictCancelUploadConfirmation: self.trans("text.dict-cancel-upload-confirmation"),
      dictRemoveFile: '<i class="fas fa-trash"></i>',
      dictMaxFilesExceeded: self.trans("text.dict-max-files-exceeded"),
      acceptedFiles: "audio/*",
      headers: {
        "My-Awesome-Header": "header value"
      },
      init: function init() {
        this.on("success", function (file, response) {
          self.$emit("uploaded", response.image_id);

          if (this.getAcceptedFiles().length > 0) {
            this.disable();
            $("#addBtn2").hide();
          } else {
            this.enable();
            $("#addBtn2").show();
          }
        });
        this.on("removedfile", function (file) {
          self.$emit("uploaded", "");

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
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlipBook.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FlipBook.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["part", "page", "kahf"],
  data: function data() {
    return {
      current_page: 0,
      images: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    style_version: function style_version(state) {
      return state.settings.style_version;
    }
  })),
  methods: {
    next: function next() {
      var next_page = this.current_page;
      this.changePage(next_page);
    },
    previous: function previous() {
      var previous_page = this.current_page - 1;
      this.changePage(previous_page);
    },
    zIndex: function zIndex(index, image) {
      var i = this.images[this.images.length - 1] - image + 1;
      return "z-index: " + i + ";";
    },
    changePage: function changePage(page) {
      var self = this;

      if (page != self.current_page) {
        self.current_page = page;

        if (page > 5) {
          var last_item = self.images[0];
          var first_add_page = last_item - 1;

          if (!self.images.includes(first_add_page) && first_add_page > self.part.start && page < first_add_page + 7) {
            self.images.unshift(first_add_page);
          }

          if (self.images.length > 30) {
            self.images.splice(-1, 1);
          }
        }
      } else {
        self.current_page = page + 1;

        if (page > self.images[0] + 4) {
          var _last_item = self.images[self.images.length - 1];

          var _first_add_page = _last_item + 1;

          if (!self.images.includes(_first_add_page) && _first_add_page < self.part.count) {
            self.images.push(_first_add_page);
          }

          if (self.images.length > 30) {
            setTimeout(function () {
              self.images.splice(0, 1);
            }, 300);
          }
        }
      }
    }
  },
  created: function created() {
    var first_page = Math.max(this.part.start, this.page - 5);
    var last_page = Math.min(this.part.count, this.page + 29);

    for (var i = first_page; i < last_page; i++) {
      this.images.push(i);
    }

    this.current_page = this.page;
    this.changePage(this.page);
  },
  watch: {
    page: function page(val) {
      var odd = 1;
      this.images = [];
      var first_page = Math.max(this.part.start, this.page - 5);
      var last_page = Math.min(this.part.count, this.page + 29);

      for (var i = first_page; i < last_page; i++) {
        this.images.push(i);
      }

      this.changePage(val + odd);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlipBookDesktop.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FlipBookDesktop.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["part", "page", "kahf"],
  data: function data() {
    return {
      current_page: 1,
      images: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    style_version: function style_version(state) {
      return state.settings.style_version;
    }
  })),
  methods: {
    next: function next() {
      var next_page = this.current_page;
      this.changePage(next_page);
    },
    previous: function previous() {
      var previous_page = this.current_page - 1;
      this.changePage(previous_page);
    },
    zIndex: function zIndex(index, image) {
      if (index % 2 === 0) {
        var i = this.images[this.images.length - 1] - image + 1;
        return "z-index: " + i + ";";
      } else {
        return "";
      }
    },
    changePage: function changePage(page) {
      var self = this;

      if (page % 2 === 0) {
        self.current_page = page - 1;

        if (page > 5) {
          var last_item = self.images[0];
          var first_add_page = last_item - 1;
          var second_add_page = last_item - 2;

          if (!self.images.includes(first_add_page) && first_add_page > self.part.start - 1 && page < first_add_page + 7) {
            self.images.unshift(first_add_page);
          }

          if (!self.images.includes(second_add_page) && second_add_page > self.part.start - 1 && page < first_add_page + 7) {
            self.images.unshift(second_add_page);
          }

          if (self.images.length > 30) {
            self.images.splice(-2, 2);
          }
        }
      } else {
        self.current_page = page + 2;

        if (page > self.images[0] + 4) {
          var _last_item = self.images[self.images.length - 1];

          var _first_add_page = _last_item + 1;

          var _second_add_page = _last_item + 2;

          if (!self.images.includes(_first_add_page) && _first_add_page < self.part.count) {
            self.images.push(_first_add_page);
          }

          if (!self.images.includes(_second_add_page) && _second_add_page < self.part.count) {
            self.images.push(_second_add_page);
          }

          if (self.images.length > 30) {
            setTimeout(function () {
              self.images.splice(0, 2);
            }, 300);
          }
        }
      }
    }
  },
  created: function created() {
    var odd = 0;
    var add = 1;

    if (this.page % 2 === 0) {
      odd = 1;
      add = 0;
    }

    var first_page = Math.max(this.part.start - add, this.page - 5 - odd);
    var last_page = Math.min(this.part.count + add, this.page + 29 - odd);

    for (var i = first_page; i < last_page; i++) {
      this.images.push(i);
    }

    this.current_page = this.page;
    this.changePage(this.page);
  },
  watch: {
    page: function page(val) {
      var odd = 0;

      if (val % 2 === 0) {
        odd = 1;
      }

      this.images = [];
      var first_page = Math.max(1, val - 2 - odd);
      var last_page = Math.min(this.part.count, val + 29 - odd);

      for (var i = first_page; i < last_page; i++) {
        this.images.push(i);
      }

      this.changePage(val - odd);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingSpinner.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoadingSpinner.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    size: {
      "default": '40px'
    }
  },
  computed: {
    styles: function styles() {
      return {
        width: this.size,
        height: this.size
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MdPlayer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MdPlayer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["url"],
  data: function data() {
    return {
      options: {
        // autoplay: true,
        live: false,
        video: {
          url: this.url,
          pic: "demo.jpg",
          thumbnails: "thumbnails.jpg"
        }
      }
    };
  },
  mounted: function mounted() {
    var cw = $('.dplayer').width() * 9 / 16;
    $('.dplayer').css({
      'height': cw + 'px'
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MushafsFlipbook.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MushafsFlipbook.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({
    part: function part() {
      return {
        start: 1,
        count: 609
      };
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    soar: function soar(state) {
      return state.quran.soar;
    },
    reads: function reads(state) {
      return state.quran.reads;
    },
    parts: function parts(state) {
      return state.quran.parts;
    }
  })),
  data: function data() {
    return {
      fullscreen: false,
      url: this.ajax_prefix + "/mushaf",
      pageNum: 0,
      read: "",
      sora: ""
    };
  },
  methods: {
    toggleFullscreen: function toggleFullscreen() {
      this.$refs["fullscreen"].toggle();
    },
    fullscreenChange: function fullscreenChange(fullscreen) {
      this.fullscreen = fullscreen;
    },
    getReads: function getReads() {
      this.$store.dispatch("quran/setReads", this.ajax_prefix + "/reads/list?s=" + this.sora.id);
    },
    getAddPlayItem: function getAddPlayItem(item) {
      var url = this.ajax_prefix + '/soar/item?r=' + item.read + '&s=' + item.sora;
      window.appFoolter.$store.dispatch("getItemAndPlay", url);
    }
  },
  mounted: function mounted() {
    this.$store.state.loading = true;
    this.$store.dispatch("quran/setData", this);
    this.$store.dispatch("quran/setSoar", this.ajax_prefix + "/soar/list");
  },
  destroyed: function destroyed() {
    this.$store.dispatch("quran/unsetData");
  },
  watch: {
    sora: function sora(val) {
      if (this.sora.start_page % 2 || this.style_version == "m") {
        this.pageNum = this.sora.start_page;
      } else {
        this.pageNum = this.sora.start_page - 1;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuickAccess.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuickAccess.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["inclass"],
  data: function data() {
    return {
      read: "",
      sora: "",
      soar: [],
      reads: {}
    };
  },
  methods: {
    getSoar: function getSoar() {
      var self = this;
      axios.get(this.ajax_prefix + "/soar/list?r=" + this.read).then(function (response) {
        self.soar = response.data.soar;
      })["catch"](function (error) {});
    },
    setReads: function setReads() {
      var self = this;
      axios.get(this.ajax_prefix + "/reads/list").then(function (response) {
        self.reads = response.data.reads;
      })["catch"](function (error) {});
    },
    getItemAndPlay: function getItemAndPlay(url) {
      axios.get(url).then(function (response) {
        window.appFoolter.$store.dispatch("addAndPlayItem", response.data);
      })["catch"](function (error) {});
    }
  },
  mounted: function mounted() {
    this.setReads();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RadioItem.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RadioItem.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["radio"],
  computed: _objectSpread(_objectSpread({
    radiosIncludes: function radiosIncludes() {
      return this.$store.state.favorite.radios.includes(this.radio.id);
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["isPlaying", "isLoading"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    current_playing_item: function current_playing_item(state) {
      return state.playing_item;
    }
  })),
  methods: _objectSpread(_objectSpread({
    shareItem: function shareItem(title, url, description) {
      AppEvent.$emit("share", title, url, description);
    },
    download: function download(url) {
      var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
      var xhr = new XMLHttpRequest();
      xhr.responseType = "blob";

      xhr.onload = function () {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = filename;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
      };

      xhr.open("GET", url);
      xhr.send();
    },
    getItemAndPlay: function getItemAndPlay(url, playing_item) {
      if (this.current_playing_item != playing_item) {
        window.appFoolter.$store.commit("setState", {
          playing_state: "loading",
          playing_item: playing_item,
          playing_type: "radio"
        });
      }

      axios.get(url).then(function (response) {
        window.appFoolter.$store.dispatch("addAndPlayItem", response.data);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["clipboardErrorHandler", "clipboardSuccessHandler"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("favorite", {
    addRadioFavorite: "addRadio",
    removeRadioFavorite: "removeRadio"
  })),
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Read.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Read.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["read"],
  data: function data() {
    return {
      notification: {
        message: this.message,
        type: this.type,
        title: this.title
      }
    };
  },
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReciterItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReciterItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["reciter"],
  data: function data() {
    return {
      notification: {
        message: this.message,
        type: this.type,
        title: this.title
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    current_language: function current_language(state) {
      return state.current_language;
    }
  })),
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportSora.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReportSora.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      item: {},
      showError: false,
      note: ""
    };
  },
  methods: {
    report: function report() {
      var self = this;

      if (self.note.length < 10) {
        this.showError = true;
      } else {
        axios.post(self.item.prefix + "/" + self.item.read + "/" + self.item.sora + "/report", {
          note: self.note
        }).then(function (response) {
          $("#report_model").modal("hide");
          self.note = '';

          if (response.data.success) {
            Vue.notify({
              group: "app",
              title: self.trans("text.reported"),
              type: "success",
              text: self.trans("text.sora-reported-success")
            });
          } else {
            Vue.notify({
              group: "app",
              title: self.trans("text.not-reported"),
              type: "warn",
              text: self.trans("text.sora-reported-warn")
            });
          }
        })["catch"](function (error) {
          Vue.notify({
            group: "app",
            title: self.trans("text.not-reported"),
            type: "warn",
            text: self.trans("text.sora-reported-warn")
          });
        });
      }
    }
  },
  mounted: function mounted() {
    var self = this;
    AppEvent.$on("report-sora", function (item) {
      self.item = item;
      $("#report_model").modal("show");
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SearchForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      query: ''
    };
  },
  methods: {
    search: function search() {
      this.$router.push('/' + this.$store.state.current_language + '/' + "search?s=" + this.query);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Share.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Share.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      url: "",
      title: "",
      description: ""
    };
  },
  mounted: function mounted() {
    var self = this;
    AppEvent.$on("share", function (title, url, description) {
      self.title = title;
      self.url = url;
      self.description = description;
      $("#share_model").modal("show");
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sora.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sora.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["sora", "read_id", "reciter", "rewaya"],
  data: function data() {
    return {
      showoptions: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("favorite", ["soarIncludes"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["isPlaying", "isLoading"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    current_playing_item: function current_playing_item(state) {
      return state.playing_item;
    },
    current_language: function current_language(state) {
      return state.current_language;
    },
    downloading: function downloading(state) {
      return state.download.downloading;
    }
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({
    closeOptions: function closeOptions() {
      this.showoptions = false;
    },
    shareItem: function shareItem(title, url, description) {
      AppEvent.$emit("share", title, url, description);
    },
    getItemAndPlay: function getItemAndPlay(url, playing_item) {
      if (this.current_playing_item != playing_item) {
        window.appFoolter.$store.commit("setState", {
          playing_state: "loading",
          playing_item: playing_item,
          playing_type: "sora"
        });
      }

      axios.get(url).then(function (response) {
        window.appFoolter.$store.dispatch("addAndPlayItem", response.data);
      })["catch"](function (error) {});
    },
    addItem: function addItem(url) {
      axios.get(url).then(function (response) {
        window.appFoolter.$store.dispatch("addItem", response.data);
      })["catch"](function (error) {});
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["clipboardErrorHandler", "clipboardSuccessHandler", "reportSora"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("download", {
    downloadMp3: "downloadMp3"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("favorite", {
    addSoraFavorite: "addSora",
    removeSoraFavorite: "removeSora"
  })),
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SoraShow.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SoraShow.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["sora"],
  computed: _objectSpread(_objectSpread({
    soarIncludes: function soarIncludes() {
      return this.$store.state.favorite.soar.includes(this.sora.id);
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["isPlaying", "isLoading"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    current_playing_item: function current_playing_item(state) {
      return state.playing_item;
    },
    style_version: function style_version(state) {
      return state.settings.style_version;
    },
    downloading: function downloading(state) {
      return state.download.downloading;
    }
  })),
  methods: _objectSpread(_objectSpread(_objectSpread({
    shareItem: function shareItem(title, url, description) {
      if (typeof window !== "undefined") {
        AppEvent.$emit("share", title, url, description);
      }
    },
    addItem: function addItem(url) {
      axios.get(url).then(function (response) {
        window.appFoolter.$store.dispatch("addItem", response.data);
      })["catch"](function (error) {});
    },
    getItemAndPlay: function getItemAndPlay(url, playing_item) {
      if (this.current_playing_item != playing_item) {
        window.appFoolter.$store.commit("setState", {
          playing_state: "loading",
          playing_item: playing_item,
          playing_type: "sora"
        });
      }

      axios.get(url).then(function (response) {
        window.appFoolter.$store.dispatch("addAndPlayItem", response.data);
      })["catch"](function (error) {});
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["reportSora", "clipboardErrorHandler", "clipboardSuccessHandler"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("download", {
    downloadMp3: "downloadMp3"
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("favorite", {
    addSoraFavorite: "addSora",
    removeSoraFavorite: "removeSora"
  })),
  created: function created() {
    this.$store.state.loading = true;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TadaborItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TadaborItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["item", "islink", "showitem"],
  data: function data() {
    return {
      downloading: false
    };
  },
  computed: {
    isPlaying: function isPlaying() {
      return false;
    },
    isLoading: function isLoading() {
      return false;
    }
  },
  methods: _objectSpread(_objectSpread({
    shareItem: function shareItem(title, url, description) {
      if (typeof window !== "undefined") {
        Event.$emit("share", title, url, description);
      }
    },
    download: function download(url) {
      var self = this;
      var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
      var xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      self.downloading = true;

      xhr.onload = function () {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = filename;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        self.downloading = false;
      };

      xhr.open("GET", url);
      xhr.send();
    },
    getItemAndPlay: function getItemAndPlay(url) {
      axios.get(url).then(function (response) {
        window.appFoolter.$store.dispatch("addAndPlayItem", response.data);
      })["catch"](function (error) {});
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(["clipboardErrorHandlerText", "clipboardSuccessHandlerText"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("favorite", {
    addSoraFavorite: "addSora",
    removeSoraFavorite: "removeSora"
  })),
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TvsItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TvsItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["tv"],
  data: function data() {
    return {
      options: {
        live: true,
        video: {
          url: this.tv.url,
          pic: 'demo.jpg',
          thumbnails: 'thumbnails.jpg'
        }
      }
    };
  },
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadImage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UploadImage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["image", "type", "nbr"],
  mounted: function mounted() {
    var self = this;
    dropzone__WEBPACK_IMPORTED_MODULE_0___default.a.autoDiscover = false;
    var myDropzone = new dropzone__WEBPACK_IMPORTED_MODULE_0___default.a("#imageUploader2", {
      url: self.prefix + "medias/upload?type=" + self.type + "&_token=" + window.csrftoken,
      thumbnailWidth: 138,
      maxFilesize: 24,
      uploadMultiple: false,
      clickable: "#addBtn2",
      previewTemplate: document.querySelector("#imagePreview2").innerHTML,
      multiple: false,
      addRemoveLinks: true,
      maxFiles: 1,
      dictDefaultMessage: false,
      dictFallbackMessage: self.trans("text.dict-fallback-message"),
      dictFallbackText: self.trans("text.dict-fallback-text"),
      dictFileTooBig: self.trans("text.dict-file-too-big"),
      dictInvalidFileType: self.trans("text.dict-invalid-file-type"),
      dictResponseError: self.trans("text.dict-response-error"),
      dictCancelUpload: '<i class="fas fa-trash"></i>',
      dictUploadCanceled: self.trans("text.dict-upload-canceled"),
      dictCancelUploadConfirmation: self.trans("text.dict-cancel-upload-confirmation"),
      dictRemoveFile: '<i class="fas fa-trash"></i>',
      dictMaxFilesExceeded: self.trans("text.dict-max-files-exceeded"),
      acceptedFiles: "image/png,image/jpeg",
      headers: {
        "My-Awesome-Header": "header value"
      },
      init: function init() {
        this.on("success", function (file, response) {
          self.$emit("uploaded", response.image_id);

          if (this.getAcceptedFiles().length > 0) {
            this.disable();
            $("#addBtn2").hide();
          } else {
            this.enable();
            $("#addBtn2").show();
          }
        });
        this.on("removedfile", function (file) {
          self.$emit("uploaded", "");

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
            name: self.image.file_name,
            size: 12345
          };
          this.emit("addedfile", mockFile);
          self.$emit("uploaded", self.image.file_name);
          this.emit("thumbnail", mockFile, self.image.file_path);
          this.emit("complete", mockFile);
          this.disable();
          $("#addBtn2").hide();
        }
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideosCardLogoVideo.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideosCardLogoVideo.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["video"],
  data: function data() {
    return {
      video_generated_url: "",
      errors: {},
      progress: 0,
      place: "tr",
      image: ""
    };
  },
  methods: {
    generateVideo: function generateVideo() {
      var self = this;
      var data = {
        place: this.place,
        video: this.video.url,
        image: this.image
      };
      axios.post(this.ajax_prefix + "/video/download/" + this.video.id + "/generate", data).then(function (response) {
        self.progressing = response.data.progressing;
        self.video_generated_url = response.data.generated_url;

        if (response.data.progressing) {
          var myInterval = setInterval(function () {
            if (self.progress == 100) {
              self.progressing = false;
              clearInterval(myInterval);
            } else {
              axios.get(self.ajax_prefix + "/video/download/" + self.video.id + "/progress").then(function (response) {
                self.progress = response.data.progress;
              })["catch"](function (error) {});
            }
          }, 1000);
        }
      })["catch"](function (error) {
        self.progressing = error.response.data.errors;
        self.progressing = false;
      });
    },
    imageUploaded: function imageUploaded(image) {
      this.image = image;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideosItem.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideosItem.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["video"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideosItemPlaylist.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideosItemPlaylist.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["playlist"]
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingSpinner.vue?vue&type=style&index=0&id=41495c30&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoadingSpinner.vue?vue&type=style&index=0&id=41495c30&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner[data-v-41495c30] {\n  -webkit-animation: circle-rotator-data-v-41495c30 1.4s linear infinite;\n          animation: circle-rotator-data-v-41495c30 1.4s linear infinite;\n}\n.spinner *[data-v-41495c30] {\n  line-height: 0;\n  box-sizing: border-box;\n}\n@-webkit-keyframes circle-rotator-data-v-41495c30 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(270deg);\n}\n}\n@keyframes circle-rotator-data-v-41495c30 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(270deg);\n}\n}\n.path[data-v-41495c30] {\n  stroke-dasharray: 187;\n  stroke-dashoffset: 0;\n  transform-origin: center;\n  -webkit-animation: circle-dash-data-v-41495c30 1.4s ease-in-out infinite,circle-colors-data-v-41495c30 5.6s ease-in-out infinite;\n          animation: circle-dash-data-v-41495c30 1.4s ease-in-out infinite,circle-colors-data-v-41495c30 5.6s ease-in-out infinite;\n}\n@-webkit-keyframes circle-colors-data-v-41495c30 {\n0% {\n    stroke: #35495e;\n}\n25% {\n    stroke: #DE3E35;\n}\n50% {\n    stroke: #F7C223;\n}\n75% {\n    stroke: #41b883;\n}\n100% {\n    stroke: #35495e;\n}\n}\n@keyframes circle-colors-data-v-41495c30 {\n0% {\n    stroke: #35495e;\n}\n25% {\n    stroke: #DE3E35;\n}\n50% {\n    stroke: #F7C223;\n}\n75% {\n    stroke: #41b883;\n}\n100% {\n    stroke: #35495e;\n}\n}\n@-webkit-keyframes circle-dash-data-v-41495c30 {\n0% {\n    stroke-dashoffset: 187;\n}\n50% {\n    stroke-dashoffset: 46.75;\n    transform: rotate(135deg);\n}\n100% {\n    stroke-dashoffset: 187;\n    transform: rotate(450deg);\n}\n}\n@keyframes circle-dash-data-v-41495c30 {\n0% {\n    stroke-dashoffset: 187;\n}\n50% {\n    stroke-dashoffset: 46.75;\n    transform: rotate(135deg);\n}\n100% {\n    stroke-dashoffset: 187;\n    transform: rotate(450deg);\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-directive-tooltip/dist/vueDirectiveTooltip.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-directive-tooltip/dist/vueDirectiveTooltip.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-directive-tooltip\\dist\\vueDirectiveTooltip.css'");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-dplayer/dist/vue-dplayer.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-dplayer/dist/vue-dplayer.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-dplayer\\dist\\vue-dplayer.css'");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),

/***/ "./node_modules/dropzone/dist/dropzone.js":
/*!************************************************!*\
  !*** ./node_modules/dropzone/dist/dropzone.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\dropzone\\dist\\dropzone.js'");

/***/ }),

/***/ "./node_modules/hls.js/dist/hls.js":
/*!*****************************************!*\
  !*** ./node_modules/hls.js/dist/hls.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\hls.js\\dist\\hls.js'");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\lodash\\lodash.js'");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingSpinner.vue?vue&type=style&index=0&id=41495c30&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoadingSpinner.vue?vue&type=style&index=0&id=41495c30&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingSpinner.vue?vue&type=style&index=0&id=41495c30&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingSpinner.vue?vue&type=style&index=0&id=41495c30&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\style-loader\\lib\\addStyles.js'");

/***/ }),

/***/ "./node_modules/turbolinks/dist/turbolinks.js":
/*!****************************************************!*\
  !*** ./node_modules/turbolinks/dist/turbolinks.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\turbolinks\\dist\\turbolinks.js'");

/***/ }),

/***/ "./node_modules/velocity-animate/velocity.js":
/*!***************************************************!*\
  !*** ./node_modules/velocity-animate/velocity.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\velocity-animate\\velocity.js'");

/***/ }),

/***/ "./node_modules/vue-clipboard2/vue-clipboard.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-clipboard2/vue-clipboard.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-clipboard2\\vue-clipboard.js'");

/***/ }),

/***/ "./node_modules/vue-directive-tooltip/dist/vueDirectiveTooltip.css":
/*!*************************************************************************!*\
  !*** ./node_modules/vue-directive-tooltip/dist/vueDirectiveTooltip.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--8-1!../../postcss-loader/src??ref--8-2!./vueDirectiveTooltip.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-directive-tooltip/dist/vueDirectiveTooltip.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-directive-tooltip/dist/vueDirectiveTooltip.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-directive-tooltip/dist/vueDirectiveTooltip.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-directive-tooltip\\dist\\vueDirectiveTooltip.js'");

/***/ }),

/***/ "./node_modules/vue-dplayer/dist/vue-dplayer.css":
/*!*******************************************************!*\
  !*** ./node_modules/vue-dplayer/dist/vue-dplayer.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--8-1!../../postcss-loader/src??ref--8-2!./vue-dplayer.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-dplayer/dist/vue-dplayer.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-dplayer/dist/vue-dplayer.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-dplayer/dist/vue-dplayer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-dplayer\\dist\\vue-dplayer.js'");

/***/ }),

/***/ "./node_modules/vue-fullscreen/dist/vue-fullscreen.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-fullscreen/dist/vue-fullscreen.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-fullscreen\\dist\\vue-fullscreen.min.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlkahfFlipbook.vue?vue&type=template&id=3a957620&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AlkahfFlipbook.vue?vue&type=template&id=3a957620& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "fullscreen",
    { ref: "fullscreen", on: { change: _vm.fullscreenChange } },
    [
      _c(
        "div",
        { staticClass: "alkahf-flipbook" },
        [
          _c("div", { staticClass: "mushafs-options" }, [
            _c("div", { staticClass: "form-group" }, [
              _c("label", [_vm._v(_vm._s(_vm.trans("text.listen")))]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.audio,
                      expression: "audio",
                    },
                  ],
                  staticClass: "custom-select",
                  on: {
                    change: [
                      function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.audio = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function ($event) {
                        return _vm.getAddPlayItem(_vm.audio)
                      },
                    ],
                  },
                },
                _vm._l(_vm.read_soar, function (sora, index) {
                  return _c(
                    "option",
                    { key: index, domProps: { value: sora } },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(sora.reciter_name) +
                          "\n          "
                      ),
                    ]
                  )
                }),
                0
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "btn share-btn mr-auto",
                on: {
                  click: function ($event) {
                    return _vm.shareItem(
                      _vm.page_share.title,
                      _vm.page_share.url,
                      _vm.page_share.description
                    )
                  },
                },
              },
              [
                _c("span", [_vm._v(_vm._s(_vm.trans("text.share")))]),
                _vm._v(" "),
                _c("span", {
                  staticClass: "uni-icon icon-share",
                  staticStyle: { color: "#fff" },
                }),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "btn fullscreen-btn",
                on: { click: _vm.toggleFullscreen },
              },
              [
                _c("span", {
                  staticClass: "uni-icon icon-fullscreen",
                  staticStyle: { color: "#fff" },
                }),
              ]
            ),
          ]),
          _vm._v(" "),
          _vm.style_version !== "m"
            ? _c("flip-book-desktop", {
                attrs: { part: _vm.part, page: _vm.pageNum, kahf: true },
              })
            : _c("flip-book", {
                attrs: { part: _vm.part, page: _vm.pageNum, kahf: true },
              }),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Confirmation.vue?vue&type=template&id=3e5244c0&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Confirmation.vue?vue&type=template&id=3e5244c0& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.$store.state.Auth !== null
    ? _c(
        "div",
        {
          staticClass: "modal delet-modal fade confirmation",
          attrs: {
            id: "confirm_model",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "myModalLabel",
            "aria-hidden": "true",
          },
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "h4",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "myModalLabel" },
                    },
                    [_vm._v(_vm._s(_vm.trans("text.are-you-sure")))]
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c("div", { staticClass: "confirm_btns" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        attrs: { type: "button", "data-dismiss": "modal" },
                      },
                      [
                        _c("img", {
                          staticClass: "uni-icon",
                          attrs: {
                            src: "/img/icons/confirm_no.svg",
                            alt: "no",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info",
                        attrs: { type: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.confirm()
                          },
                        },
                      },
                      [
                        _c("img", {
                          staticClass: "uni-icon",
                          attrs: {
                            src: "/img/icons/confirm_yes.svg",
                            alt: "yes",
                          },
                        }),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]
          ),
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Favorites.vue?vue&type=template&id=0b01de08&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Favorites.vue?vue&type=template&id=0b01de08& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "nav-tabs-wrapper" }, [
      _c("ul", { staticClass: "nav nav-tabs" }, [
        _vm.reads.data && _vm.reads.data.length != 0
          ? _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link",
                  class: { active: _vm.active_tab == "reads" },
                  attrs: { href: "#" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.showTab("reads")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.trans("text.reciters")))]
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.soar.data && _vm.soar.data.length != 0
          ? _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link",
                  class: { active: _vm.active_tab == "soar" },
                  attrs: { href: "#" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.showTab("soar")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.trans("text.soar")))]
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.radios.data && _vm.radios.data.length != 0
          ? _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link",
                  class: { active: _vm.active_tab == "radios" },
                  attrs: { href: "#" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.showTab("radios")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.trans("text.radios")))]
              ),
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.videos.data && _vm.videos.data.length != 0
          ? _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link",
                  class: { active: _vm.active_tab == "videos" },
                  attrs: { href: "#" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.showTab("videos")
                    },
                  },
                },
                [_vm._v(_vm._s(_vm.trans("text.videos")))]
              ),
            ])
          : _vm._e(),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "tab-content" }, [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.active_tab == "reads",
              expression: "active_tab == 'reads'",
            },
          ],
          staticClass: "favorite-tab-pane",
        },
        [
          _c(
            "div",
            { staticClass: "row" },
            _vm._l(_vm.reads.data, function (read) {
              return _c(
                "div",
                { key: read.id, staticClass: "col-md-12" },
                [_c("read", { attrs: { read: read } })],
                1
              )
            }),
            0
          ),
          _vm._v(" "),
          _vm.reads.current_page < _vm.reads.last_page
            ? _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.moreReads()
                    },
                  },
                },
                [
                  _c("span", {
                    staticClass: "uni-icon icon-more-horizontal",
                    staticStyle: { color: "#fff" },
                  }),
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.trans("text.lead-more")) +
                      "\n      "
                  ),
                ]
              )
            : _vm._e(),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.active_tab == "soar",
              expression: "active_tab == 'soar'",
            },
          ],
          staticClass: "favorite-tab-pane",
        },
        [
          _c("div", { staticClass: "soar-list" }, [
            _c(
              "ul",
              { staticClass: "list-unstyled" },
              _vm._l(_vm.soar.data, function (sora) {
                return _c(
                  "li",
                  { key: sora.id },
                  [
                    _c("card-sora", {
                      attrs: {
                        sora: sora,
                        rewaya: sora.rewaya_name,
                        read_id: sora.read_id,
                        reciter: sora.reciter_name,
                      },
                    }),
                  ],
                  1
                )
              }),
              0
            ),
          ]),
          _vm._v(" "),
          _vm.soar.current_page < _vm.soar.last_page
            ? _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.moreSoar()
                    },
                  },
                },
                [
                  _c("span", {
                    staticClass: "uni-icon icon-more-horizontal",
                    staticStyle: { color: "#fff" },
                  }),
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.trans("text.lead-more")) +
                      "\n      "
                  ),
                ]
              )
            : _vm._e(),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.active_tab == "radios",
              expression: "active_tab == 'radios'",
            },
          ],
          staticClass: "favorite-tab-pane",
        },
        [
          _vm._l(_vm.radios.data, function (radio) {
            return _c("card-radio", { key: radio.id, attrs: { radio: radio } })
          }),
          _vm._v(" "),
          _vm.radios.current_page < _vm.radios.last_page
            ? _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.moreRadios()
                    },
                  },
                },
                [
                  _c("span", {
                    staticClass: "uni-icon icon-more-horizontal",
                    staticStyle: { color: "#fff" },
                  }),
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.trans("text.lead-more")) +
                      "\n      "
                  ),
                ]
              )
            : _vm._e(),
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.active_tab == "videos",
              expression: "active_tab == 'videos'",
            },
          ],
          staticClass: "favorite-tab-pane",
        },
        [
          _vm._l(_vm.videos.data, function (video) {
            return _c("card-video", { key: video.id, attrs: { video: video } })
          }),
          _vm._v(" "),
          _vm.videos.current_page < _vm.videos.last_page
            ? _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  attrs: { type: "button" },
                  on: {
                    click: function ($event) {
                      return _vm.moreVides()
                    },
                  },
                },
                [
                  _c("span", {
                    staticClass: "uni-icon icon-more-horizontal",
                    staticStyle: { color: "#fff" },
                  }),
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.trans("text.lead-more")) +
                      "\n      "
                  ),
                ]
              )
            : _vm._e(),
        ],
        2
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "file-uploader w-100" }, [
    _c(
      "div",
      { staticClass: "dropzone text-center", attrs: { id: "imageUploader2" } },
      [
        _c("div", { attrs: { id: "addBtn2" } }, [
          _c("span", [_vm._v(_vm._s(_vm.trans("text.add-file")))]),
        ]),
        _vm._v(" "),
        _vm._m(0),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-none", attrs: { id: "imagePreview2" } },
      [
        _c("div", { staticClass: "dz-preview dz-file-preview" }, [
          _c("div", { staticClass: "dz-image" }, [
            _c("img", { attrs: { "data-dz-thumbnail": "" } }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dz-success-mark" }, [
            _c("i", { staticClass: "far fa-check-circle" }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dz-error-mark" }, [
            _c("i", { staticClass: "fas fa-exclamation-circle" }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dz-error-message" }, [
            _c("span", { attrs: { "data-dz-errormessage": "" } }),
          ]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlipBook.vue?vue&type=template&id=f24d493e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FlipBook.vue?vue&type=template&id=f24d493e& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flip-book mobile-fliping-book " }, [
    _c("div", { staticClass: "fb-controle top" }, [
      _c(
        "span",
        {
          staticClass: "previous-btn",
          on: {
            click: function ($event) {
              return _vm.previous()
            },
          },
        },
        [
          _c("span", { staticClass: "uni-icon icon-arrow_forward" }),
          _vm._v("\n      " + _vm._s(_vm.trans("text.previous")) + "\n    "),
        ]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "next-btn",
          on: {
            click: function ($event) {
              return _vm.next()
            },
          },
        },
        [
          _vm._v("\n      " + _vm._s(_vm.trans("text.next")) + "\n      "),
          _c("span", { staticClass: "uni-icon icon-arrow_back" }),
        ]
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "fb-controle-side" }, [
      _c("span", {
        staticClass: "previous-btn",
        on: {
          click: function ($event) {
            return _vm.previous()
          },
        },
      }),
      _vm._v(" "),
      _c("span", {
        staticClass: "next-btn",
        on: {
          click: function ($event) {
            return _vm.next()
          },
        },
      }),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "book" }, [
      _c(
        "div",
        { staticClass: "pages", attrs: { id: "pages" } },
        _vm._l(_vm.images, function (image, index) {
          return _c(
            "div",
            {
              key: image,
              staticClass: "page",
              class: { flipped: _vm.current_page > image },
              style: _vm.zIndex(index, image),
              attrs: { id: "page-" + image },
            },
            [
              _c("img", {
                attrs: {
                  src:
                    "https://cdn.qurango.net/Sura2/files/mobile/" +
                    image +
                    ".jpg",
                },
              }),
            ]
          )
        }),
        0
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "fb-controle" }, [
      _c(
        "span",
        {
          staticClass: "previous-btn",
          on: {
            click: function ($event) {
              return _vm.previous()
            },
          },
        },
        [
          _c("span", { staticClass: "uni-icon icon-arrow_forward" }),
          _vm._v("\n      " + _vm._s(_vm.trans("text.previous")) + "\n    "),
        ]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "next-btn",
          on: {
            click: function ($event) {
              return _vm.next()
            },
          },
        },
        [
          _vm._v("\n      " + _vm._s(_vm.trans("text.next")) + "\n      "),
          _c("span", { staticClass: "uni-icon icon-arrow_back" }),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlipBookDesktop.vue?vue&type=template&id=8061e0aa&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FlipBookDesktop.vue?vue&type=template&id=8061e0aa& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flip-book fliping-book" }, [
    _c("div", { staticClass: "fb-controle top" }, [
      _c(
        "span",
        {
          staticClass: "previous-btn",
          on: {
            click: function ($event) {
              return _vm.previous()
            },
          },
        },
        [
          _c("span", { staticClass: "uni-icon icon-arrow_forward" }),
          _vm._v("\n      " + _vm._s(_vm.trans("text.previous")) + "\n    "),
        ]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "next-btn",
          on: {
            click: function ($event) {
              return _vm.next()
            },
          },
        },
        [
          _vm._v("\n      " + _vm._s(_vm.trans("text.next")) + "\n      "),
          _c("span", { staticClass: "uni-icon icon-arrow_back" }),
        ]
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "book" }, [
      _c(
        "div",
        { staticClass: "pages", attrs: { id: "pages" } },
        _vm._l(_vm.images, function (image, index) {
          return _c(
            "div",
            {
              key: image,
              staticClass: "page",
              class: { flipped: _vm.current_page > image },
              style: _vm.zIndex(index, image),
              attrs: { id: "page-" + image },
              on: {
                click: function ($event) {
                  return _vm.changePage(image)
                },
              },
            },
            [
              _c("img", {
                attrs: {
                  src:
                    "https://cdn.qurango.net/Sura2/files/mobile/" +
                    image +
                    ".jpg",
                },
              }),
            ]
          )
        }),
        0
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "fb-controle" }, [
      _c(
        "span",
        {
          staticClass: "previous-btn",
          on: {
            click: function ($event) {
              return _vm.previous()
            },
          },
        },
        [
          _c("span", { staticClass: "uni-icon icon-arrow_forward" }),
          _vm._v("\n      " + _vm._s(_vm.trans("text.previous")) + "\n    "),
        ]
      ),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "next-btn",
          on: {
            click: function ($event) {
              return _vm.next()
            },
          },
        },
        [
          _vm._v("\n      " + _vm._s(_vm.trans("text.next")) + "\n      "),
          _c("span", { staticClass: "uni-icon icon-arrow_back" }),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingSpinner.vue?vue&type=template&id=41495c30&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/LoadingSpinner.vue?vue&type=template&id=41495c30&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      staticClass: "spinner spinner--circle",
      style: _vm.styles,
      attrs: { viewBox: "0 0 66 66", xmlns: "http://www.w3.org/2000/svg" },
    },
    [
      _c("circle", {
        staticClass: "path",
        attrs: {
          fill: "none",
          "stroke-width": "6",
          "stroke-linecap": "round",
          cx: "33",
          cy: "33",
          r: "30",
        },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MdPlayer.vue?vue&type=template&id=7de670c3&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MdPlayer.vue?vue&type=template&id=7de670c3& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("d-player", { ref: "vidplayer", attrs: { options: _vm.options } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MushafsFlipbook.vue?vue&type=template&id=cd94caa8&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MushafsFlipbook.vue?vue&type=template&id=cd94caa8& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "fullscreen",
    { ref: "fullscreen", on: { change: _vm.fullscreenChange } },
    [
      _c(
        "div",
        { staticClass: "mushafs-flipbook" },
        [
          _c("div", { staticClass: "mushafs-options" }, [
            _c("div", { staticClass: "form-group" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.sora,
                      expression: "sora",
                    },
                  ],
                  staticClass: "custom-select",
                  on: {
                    change: [
                      function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.sora = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function ($event) {
                        return _vm.getReads()
                      },
                    ],
                  },
                },
                [
                  _c(
                    "option",
                    {
                      staticClass: "d-none",
                      attrs: { value: "", disabled: "", selected: "" },
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.trans("text.sora")) +
                          "\n          "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.soar, function (sora, index) {
                    return _c(
                      "option",
                      { key: index, domProps: { value: sora } },
                      [
                        _vm._v(
                          "\n            " + _vm._s(sora.name) + "\n          "
                        ),
                      ]
                    )
                  }),
                ],
                2
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.read,
                      expression: "read",
                    },
                  ],
                  staticClass: "custom-select",
                  on: {
                    change: [
                      function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.read = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      },
                      function ($event) {
                        return _vm.getAddPlayItem({
                          read: _vm.read,
                          sora: _vm.sora.id,
                        })
                      },
                    ],
                  },
                },
                [
                  _c(
                    "option",
                    {
                      staticClass: "d-none",
                      attrs: { value: "", disabled: "", selected: "" },
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.trans("text.listen")) +
                          "\n          "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.reads, function (read, index) {
                    return _c(
                      "option",
                      { key: index, domProps: { value: read.id } },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(read.reciter_name) +
                            " -\n            "
                        ),
                        _c("span", [_vm._v(_vm._s(read.rewaya_name))]),
                      ]
                    )
                  }),
                ],
                2
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group  mr-auto" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.pageNum,
                      expression: "pageNum",
                    },
                  ],
                  staticClass: "custom-select",
                  on: {
                    change: function ($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function (o) {
                          return o.selected
                        })
                        .map(function (o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.pageNum = $event.target.multiple
                        ? $$selectedVal
                        : $$selectedVal[0]
                    },
                  },
                },
                [
                  _c(
                    "option",
                    {
                      staticClass: "d-none",
                      attrs: { value: "0", disabled: "", selected: "" },
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.trans("text.part")) +
                          "\n          "
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.parts, function (part, index) {
                    return _c(
                      "option",
                      { key: index, domProps: { value: part.start_page } },
                      [
                        _vm._v(
                          "\n            " + _vm._s(part.name) + "\n          "
                        ),
                      ]
                    )
                  }),
                ],
                2
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "btn fullscreen-btn",
                on: { click: _vm.toggleFullscreen },
              },
              [
                _c("span", {
                  staticClass: "uni-icon icon-fullscreen",
                  staticStyle: { color: "#fff" },
                }),
              ]
            ),
          ]),
          _vm._v(" "),
          _vm.style_version !== "m"
            ? _c("flip-book-desktop", {
                attrs: { part: _vm.part, page: _vm.pageNum, kahf: false },
              })
            : _c("flip-book", {
                attrs: { part: _vm.part, page: _vm.pageNum, kahf: false },
              }),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuickAccess.vue?vue&type=template&id=0a999c16&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuickAccess.vue?vue&type=template&id=0a999c16& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "quick-access" }, [
    _c(
      "a",
      {
        class: _vm.inclass,
        attrs: {
          href: "#",
          "data-toggle": "modal",
          "data-target": "#quickAccessId",
        },
      },
      [
        _vm.inclass != "nav-link"
          ? _c("span", {
              staticClass: "uni-icon icon-slow_motion_video",
              staticStyle: { color: "#fff" },
            })
          : _vm._e(),
        _vm._v("\n    " + _vm._s(_vm.trans("text.quick-access")) + "\n  "),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "quickAccessId",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "modelTitleId",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog", attrs: { role: "document" } },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-10" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.read,
                              expression: "read",
                            },
                          ],
                          staticClass: "custom-select",
                          on: {
                            change: [
                              function ($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function (o) {
                                    return o.selected
                                  })
                                  .map(function (o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.read = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              function ($event) {
                                return _vm.getSoar()
                              },
                            ],
                          },
                        },
                        [
                          _c(
                            "option",
                            {
                              staticClass: "d-none",
                              attrs: { value: "", disabled: "", selected: "" },
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.trans("text.read")) +
                                  "\n                  "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.reads, function (read, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: read.id } },
                              [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(read.reciter_name) +
                                    " -\n                    "
                                ),
                                _c("span", [_vm._v(_vm._s(read.rewaya_name))]),
                              ]
                            )
                          }),
                        ],
                        2
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-10" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.sora,
                              expression: "sora",
                            },
                          ],
                          staticClass: "custom-select",
                          on: {
                            change: function ($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function (o) {
                                  return o.selected
                                })
                                .map(function (o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.sora = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                          },
                        },
                        [
                          _c(
                            "option",
                            {
                              staticClass: "d-none",
                              attrs: { value: "", disabled: "", selected: "" },
                            },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.trans("text.sora")) +
                                  "\n                  "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.soar, function (sora, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: sora } },
                              [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(sora.name) +
                                    "\n                  "
                                ),
                              ]
                            )
                          }),
                        ],
                        2
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4 text-center p-1" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary",
                        attrs: { type: "button", "data-dismiss": "modal" },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.getItemAndPlay(
                              _vm.ajax_prefix +
                                "/soar/item?r=" +
                                _vm.read +
                                "&s=" +
                                _vm.sora.id
                            )
                          },
                        },
                      },
                      [
                        _c("span", {
                          staticClass: "uni-icon icon-play_arrow",
                          staticStyle: { color: "#fff" },
                        }),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RadioItem.vue?vue&type=template&id=3d8eb0d3&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RadioItem.vue?vue&type=template&id=3d8eb0d3& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card-radio", class: { show: _vm.radio.show } },
    [
      _c(
        "div",
        {
          staticClass: "ply-btn",
          on: {
            click: function ($event) {
              $event.preventDefault()
              return _vm.getItemAndPlay(
                _vm.ajax_prefix + "/radio/item?id=" + _vm.radio.id,
                "100002-" + _vm.radio.id
              )
            },
          },
        },
        [
          _vm.isLoading({ type: "radio", id: "100002-" + _vm.radio.id })
            ? _c("scale-loader", {
                attrs: { color: "#0D3A4D", height: "10px", width: "2px" },
              })
            : _vm.isPlaying({ type: "radio", id: "100002-" + _vm.radio.id })
            ? _c("span", {
                staticClass: "uni-icon icon-pause",
                staticStyle: { color: "#f5b44b" },
              })
            : _c("span", {
                staticClass: "uni-icon icon-play_arrow",
                staticStyle: { color: "#f5b44b" },
              }),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "radio-info",
          on: {
            click: function ($event) {
              $event.preventDefault()
              return _vm.getItemAndPlay(
                _vm.ajax_prefix + "/radio/item?id=" + _vm.radio.id,
                "100002-" + _vm.radio.id
              )
            },
          },
        },
        [
          _c("div", { staticClass: "radio-name" }, [
            _vm._v("\n      " + _vm._s(_vm.radio.name)),
            _c("span", [_vm._v("- " + _vm._s(_vm.radio.rewaya_name))]),
          ]),
        ]
      ),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "radio-options" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: _vm.trans("text.share"),
                expression: "trans('text.share')",
              },
            ],
            staticClass: "radio-btn share-btn",
            on: {
              click: function ($event) {
                return _vm.shareItem(
                  _vm.radio.share_title,
                  _vm.radio.share_url,
                  _vm.radio.share_description
                )
              },
            },
          },
          [_c("span", { staticClass: "uni-icon icon-share" })]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: _vm.trans("text.copy-link"),
                expression: "trans('text.copy-link')",
              },
              {
                name: "clipboard",
                rawName: "v-clipboard:copy",
                value: _vm.radio.url,
                expression: "radio.url",
                arg: "copy",
              },
              {
                name: "clipboard",
                rawName: "v-clipboard:error",
                value: _vm.clipboardErrorHandler,
                expression: "clipboardErrorHandler",
                arg: "error",
              },
              {
                name: "clipboard",
                rawName: "v-clipboard:success",
                value: _vm.clipboardSuccessHandler,
                expression: "clipboardSuccessHandler",
                arg: "success",
              },
            ],
            staticClass: "radio-btn link-btn",
          },
          [_c("span", { staticClass: "uni-icon icon-link" })]
        ),
        _vm._v(" "),
        _vm.radiosIncludes
          ? _c(
              "div",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: _vm.trans("text.remove-from-favorite"),
                    expression: "trans('text.remove-from-favorite')",
                  },
                ],
                staticClass: "radio-btn ike-btn",
                on: {
                  click: function ($event) {
                    return _vm.removeRadioFavorite(_vm.radio.id)
                  },
                },
              },
              [
                _c("span", {
                  staticClass: "uni-icon icon-favorite",
                  staticStyle: { color: "#f5b44b" },
                }),
              ]
            )
          : _c(
              "div",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: _vm.trans("text.add-to-favorite"),
                    expression: "trans('text.add-to-favorite')",
                  },
                ],
                staticClass: "radio-btn deslike-btn",
                on: {
                  click: function ($event) {
                    return _vm.addRadioFavorite(_vm.radio.id)
                  },
                },
              },
              [_c("span", { staticClass: "uni-icon icon-favorite_outline" })]
            ),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "radio-btn more-btn" }, [
      _c("span", { staticClass: "uni-icon icon-more-horizontal" }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Read.vue?vue&type=template&id=6fea1581&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Read.vue?vue&type=template&id=6fea1581& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    { staticClass: "card-read", attrs: { href: _vm.prefix + _vm.read.slug } },
    [
      _c("div", { staticClass: "card-read-title" }, [
        _vm._v(_vm._s(_vm.read.reciter_name)),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-reciter-name" }, [
        _vm._v(_vm._s(_vm.read.name)),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-rewaya-name" }, [
        _vm._v(_vm._s(_vm.read.rewaya_name)),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-mushaf-name" }, [
        _vm._v(_vm._s(_vm.read.mushaf_name)),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReciterItem.vue?vue&type=template&id=cf114780&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReciterItem.vue?vue&type=template&id=cf114780& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card-reciter" }, [
    _c(
      "a",
      {
        staticClass: "card-reciter-name",
        attrs: {
          href: _vm.prefix + _vm.reciter.slug,
          rel: "alternate",
          hreflang: _vm.$store.state.current_language,
        },
      },
      [_vm._v(_vm._s(_vm.reciter.name))]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportSora.vue?vue&type=template&id=f6e7abec&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ReportSora.vue?vue&type=template&id=f6e7abec& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.$store.state.Auth !== null
    ? _c(
        "div",
        {
          staticClass: "modal delet-modal fade confirmation",
          attrs: {
            id: "report_model",
            tabindex: "-1",
            role: "dialog",
            "aria-labelledby": "myModalLabel",
            "aria-hidden": "true",
          },
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-body" }, [
                  _c("div", { staticClass: "form-group mb-0" }, [
                    _c("label", { attrs: { for: "exampleInputNote" } }, [
                      _vm._v(_vm._s(_vm.trans("text.note"))),
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.note,
                          expression: "note",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { id: "exampleInputNote", rows: "2" },
                      domProps: { value: _vm.note },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.note = $event.target.value
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.showError
                      ? _c("small", { staticClass: "form-text text-danger" }, [
                          _vm._v(
                            " \n            " +
                              _vm._s(
                                _vm.trans("text.please-provide-detailed-note")
                              ) +
                              "\n          "
                          ),
                        ])
                      : _vm._e(),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c("div", { staticClass: "report_btns" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-info",
                        attrs: { type: "button" },
                        on: {
                          click: function ($event) {
                            return _vm.report()
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.trans("text.send")) +
                            "\n          "
                        ),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]
          ),
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchForm.vue?vue&type=template&id=28665937&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SearchForm.vue?vue&type=template&id=28665937& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      staticClass: "search-form",
      attrs: { role: "form" },
      on: {
        submit: function ($event) {
          $event.preventDefault()
          return _vm.search()
        },
      },
    },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.query,
            expression: "query",
          },
        ],
        staticClass: "form-control mr-sm-2",
        attrs: {
          name: "s",
          type: "search",
          placeholder: _vm.trans("text.search"),
          "aria-label": "Search",
        },
        domProps: { value: _vm.query },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.query = $event.target.value
          },
        },
      }),
      _vm._v(" "),
      _vm._m(0),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "btn btn-search", attrs: { type: "submit" } },
      [
        _c("span", {
          staticClass: "uni-icon icon-search",
          staticStyle: { color: "#b5bbbf" },
        }),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Share.vue?vue&type=template&id=740ac104&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Share.vue?vue&type=template&id=740ac104& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "modal delet-modal fade shareation",
      attrs: {
        id: "share_model",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "myModalLabel",
        "aria-hidden": "true",
      },
    },
    [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c(
          "div",
          { staticClass: "modal-content" },
          [
            _c("h5", [_vm._v(_vm._s(_vm.trans("text.share")))]),
            _vm._v(" "),
            _c("social-sharing", {
              attrs: {
                url: _vm.url,
                title: _vm.title,
                description: _vm.description,
              },
              inlineTemplate: {
                render: function () {
                  var _vm = this
                  var _h = _vm.$createElement
                  var _c = _vm._self._c || _h
                  return _c(
                    "div",
                    { staticClass: "show-share" },
                    [
                      _c(
                        "network",
                        {
                          staticClass: "whatsapp",
                          attrs: { network: "whatsapp" },
                        },
                        [
                          _c("div", { staticClass: "share-icon whatsapp" }, [
                            _c("span", {
                              staticClass: "uni-icon icon-whatsapp",
                              staticStyle: { color: "#fff" },
                            }),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "text" }, [
                            _vm._v(_vm._s(_vm.trans("text.share-whatsapp"))),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "network",
                        {
                          staticClass: "facebook",
                          attrs: { network: "facebook" },
                        },
                        [
                          _c("div", { staticClass: "share-icon facebook" }, [
                            _c("span", {
                              staticClass: "uni-icon icon-facebook",
                              staticStyle: { color: "#fff" },
                            }),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "text" }, [
                            _vm._v(_vm._s(_vm.trans("text.share-facebook"))),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "network",
                        {
                          staticClass: "twitter",
                          attrs: { network: "twitter" },
                        },
                        [
                          _c("div", { staticClass: "share-icon twitter" }, [
                            _c("span", {
                              staticClass: "uni-icon icon-twitter",
                              staticStyle: { color: "#fff" },
                            }),
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "text" }, [
                            _vm._v(_vm._s(_vm.trans("text.share-twitter"))),
                          ]),
                        ]
                      ),
                    ],
                    1
                  )
                },
                staticRenderFns: [],
              },
            }),
          ],
          1
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sora.vue?vue&type=template&id=05a1aef6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sora.vue?vue&type=template&id=05a1aef6& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.closeOptions,
          expression: "closeOptions",
        },
      ],
      staticClass: "sora-item",
      class: { showoptions: _vm.showoptions, show: _vm.sora.show },
    },
    [
      _c(
        "div",
        {
          staticClass: "ply-btn",
          on: {
            click: function ($event) {
              return _vm.getItemAndPlay(
                _vm.ajax_prefix +
                  "/soar/item?r=" +
                  _vm.read_id +
                  "&s=" +
                  _vm.sora.sora_id,
                _vm.sora.id
              )
            },
          },
        },
        [
          _vm.isLoading({ type: "sora", id: _vm.sora.id })
            ? _c("scale-loader", {
                attrs: { color: "#0D3A4D", height: "10px", width: "2px" },
              })
            : _vm.isPlaying({ type: "sora", id: _vm.sora.id })
            ? _c("span", {
                staticClass: "uni-icon icon-pause",
                staticStyle: { color: "#fff" },
              })
            : _c("span", {
                staticClass: "uni-icon icon-play_arrow1",
                staticStyle: { color: "#fff" },
              }),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "sora-info" }, [
        _c("div", { staticClass: "sora-num" }, [
          _vm._v(_vm._s(_vm.sora.sora_num)),
        ]),
        _vm._v(" "),
        _vm.sora.reciter_name
          ? _c("div", { staticClass: "sora-num" }, [
              _vm._v("\n      " + _vm._s(_vm.sora.reciter_name) + "\n    "),
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "sora-name" }, [
          _c(
            "a",
            {
              staticClass: "card-reciter-name",
              attrs: {
                href: _vm.prefix + _vm.sora.read_slug + "/" + _vm.sora.sora_id,
                rel: "alternate",
                hreflang: _vm.$store.state.current_language,
              },
            },
            [_vm._v("\n        " + _vm._s(_vm.sora.sora_name) + "\n      ")]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "sora-btn more-btn",
          on: {
            click: function ($event) {
              _vm.showoptions = !_vm.showoptions
            },
          },
        },
        [_c("span", { staticClass: "uni-icon icon-more-horizontal" })]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "sora-options" }, [
        _c(
          "div",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: _vm.trans("text.share"),
                expression: "trans('text.share')",
              },
            ],
            staticClass: "sora-btn share-btn",
            on: {
              click: function ($event) {
                return _vm.shareItem(
                  _vm.sora.share_title,
                  _vm.sora.share_url,
                  _vm.sora.share_description
                )
              },
            },
          },
          [_c("span", { staticClass: "uni-icon icon-share" })]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: _vm.trans("text.copy-link"),
                expression: "trans('text.copy-link')",
              },
              {
                name: "clipboard",
                rawName: "v-clipboard:copy",
                value: _vm.sora.share_url,
                expression: "sora.share_url",
                arg: "copy",
              },
              {
                name: "clipboard",
                rawName: "v-clipboard:error",
                value: _vm.clipboardErrorHandler,
                expression: "clipboardErrorHandler",
                arg: "error",
              },
              {
                name: "clipboard",
                rawName: "v-clipboard:success",
                value: _vm.clipboardSuccessHandler,
                expression: "clipboardSuccessHandler",
                arg: "success",
              },
            ],
            staticClass: "sora-btn link-btn",
          },
          [_c("span", { staticClass: "uni-icon icon-link" })]
        ),
        _vm._v(" "),
        _vm.downloading
          ? _c(
              "div",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: _vm.trans("text.downloading"),
                    expression: "trans('text.downloading')",
                  },
                ],
                staticClass: "sora-btn downloading",
              },
              [
                _c("img", {
                  attrs: {
                    src: "/img/icons/downloading.svg",
                    width: "60",
                    alt: "",
                  },
                }),
              ]
            )
          : _c(
              "a",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: _vm.trans("text.download"),
                    expression: "trans('text.download')",
                  },
                ],
                staticClass: "sora-btn download-btn",
                attrs: { href: _vm.sora.sora_audio, target: "_blank" },
              },
              [_c("span", { staticClass: "uni-icon icon-cloud_download" })]
            ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: _vm.trans("text.add-to-playlist"),
                expression: "trans('text.add-to-playlist')",
              },
            ],
            staticClass: "sora-btn playlist-add",
            on: {
              click: function ($event) {
                return _vm.addItem(
                  _vm.ajax_prefix +
                    "/soar/item?r=" +
                    _vm.sora.read_id +
                    "&s=" +
                    _vm.sora.sora_id
                )
              },
            },
          },
          [_c("span", { staticClass: "uni-icon icon-playlist_add" })]
        ),
        _vm._v(" "),
        _vm.soarIncludes(_vm.sora.id)
          ? _c(
              "div",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: _vm.trans("text.remove-from-favorite"),
                    expression: "trans('text.remove-from-favorite')",
                  },
                ],
                staticClass: "sora-btn ike-btn",
                on: {
                  click: function ($event) {
                    return _vm.removeSoraFavorite(_vm.sora.id)
                  },
                },
              },
              [
                _c("span", {
                  staticClass: "uni-icon icon-favorite",
                  staticStyle: { color: "#f2a01b" },
                }),
              ]
            )
          : _c(
              "div",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: _vm.trans("text.add-to-favorite"),
                    expression: "trans('text.add-to-favorite')",
                  },
                ],
                staticClass: "sora-btn deslike-btn",
                on: {
                  click: function ($event) {
                    return _vm.addSoraFavorite(_vm.sora.id)
                  },
                },
              },
              [_c("span", { staticClass: "uni-icon icon-favorite_outline" })]
            ),
        _vm._v(" "),
        _vm.sora.sora_report != "-1"
          ? _c(
              "div",
              {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: _vm.trans("text.report-sora"),
                    expression: "trans('text.report-sora')",
                  },
                ],
                staticClass: "sora-btn report-btn",
                on: {
                  click: function ($event) {
                    return _vm.reportSora({
                      read: _vm.sora.read_slug,
                      sora: _vm.sora.id,
                      prefix: _vm.ajax_prefix,
                    })
                  },
                },
              },
              [_c("span", { staticClass: "uni-icon icon-warning" })]
            )
          : _vm._e(),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SoraShow.vue?vue&type=template&id=0470c893&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SoraShow.vue?vue&type=template&id=0470c893& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "sora-item sora-show-item showoptions" }, [
    _c(
      "div",
      {
        staticClass: "ply-btn",
        on: {
          click: function ($event) {
            return _vm.getItemAndPlay(
              _vm.ajax_prefix +
                "/soar/item?r=" +
                _vm.sora.read_id +
                "&s=" +
                _vm.sora.sora_id,
              _vm.sora.id
            )
          },
        },
      },
      [
        _vm.isLoading({ type: "sora", id: _vm.sora.id })
          ? _c("scale-loader", {
              attrs: { color: "#0D3A4D", height: "10px", width: "2px" },
            })
          : _vm.isPlaying({ type: "sora", id: _vm.sora.id })
          ? _c("span", {
              staticClass: "uni-icon icon-pause",
              staticStyle: { color: "#fff" },
            })
          : _c("span", {
              staticClass: "uni-icon icon-play_arrow",
              staticStyle: { color: "#fff" },
            }),
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "sora-info" }, [
      _c("div", { staticClass: "sora-name" }, [
        _vm._v("\n      " + _vm._s(_vm.sora.name) + "\n    "),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "sora-reciter" }, [
        _vm._v("\n      " + _vm._s(_vm.sora.reciter) + "\n    "),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "sora-rewaya" }, [
        _vm._v("\n      " + _vm._s(_vm.sora.rewaya) + "\n    "),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "sora-options" }, [
      _c(
        "div",
        {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip",
              value: _vm.trans("text.share"),
              expression: "trans('text.share')",
            },
          ],
          staticClass: "sora-btn share-btn",
          on: {
            click: function ($event) {
              return _vm.shareItem(
                _vm.sora.share_title,
                _vm.sora.share_url,
                _vm.sora.share_description
              )
            },
          },
        },
        [_c("span", { staticClass: "uni-icon icon-share" })]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip",
              value: _vm.trans("text.copy-link"),
              expression: "trans('text.copy-link')",
            },
            {
              name: "clipboard",
              rawName: "v-clipboard:copy",
              value: _vm.sora.url,
              expression: "sora.url",
              arg: "copy",
            },
            {
              name: "clipboard",
              rawName: "v-clipboard:error",
              value: _vm.clipboardErrorHandler,
              expression: "clipboardErrorHandler",
              arg: "error",
            },
            {
              name: "clipboard",
              rawName: "v-clipboard:success",
              value: _vm.clipboardSuccessHandler,
              expression: "clipboardSuccessHandler",
              arg: "success",
            },
          ],
          staticClass: "sora-btn link-btn",
        },
        [_c("span", { staticClass: "uni-icon icon-link" })]
      ),
      _vm._v(" "),
      _vm.downloading
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: _vm.trans("text.downloading"),
                  expression: "trans('text.downloading')",
                },
              ],
              staticClass: "sora-btn downloading",
            },
            [
              _c("img", {
                attrs: {
                  src: "/img/icons/downloading.svg",
                  width: "60",
                  alt: "",
                },
              }),
            ]
          )
        : _c(
            "a",
            {
              directives: [
                {
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: _vm.trans("text.download"),
                  expression: "trans('text.download')",
                },
              ],
              staticClass: "sora-btn download-btn",
              attrs: { href: _vm.sora.file, target: "_blank" },
            },
            [_c("span", { staticClass: "uni-icon icon-cloud_download" })]
          ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "tooltip",
              rawName: "v-tooltip",
              value: _vm.trans("text.add-to-playlist"),
              expression: "trans('text.add-to-playlist')",
            },
          ],
          staticClass: "sora-btn playlist-add",
          on: {
            click: function ($event) {
              return _vm.addItem(
                _vm.ajax_prefix +
                  "/soar/item?r=" +
                  _vm.sora.read_id +
                  "&s=" +
                  _vm.sora.sora_id
              )
            },
          },
        },
        [_c("span", { staticClass: "uni-icon icon-playlist_add" })]
      ),
      _vm._v(" "),
      _vm.soarIncludes
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: _vm.trans("text.remove-from-favorite"),
                  expression: "trans('text.remove-from-favorite')",
                },
              ],
              staticClass: "sora-btn ike-btn",
              on: {
                click: function ($event) {
                  return _vm.removeSoraFavorite(_vm.sora.id)
                },
              },
            },
            [
              _c("span", {
                staticClass: "uni-icon icon-favorite",
                staticStyle: { color: "#f5b44b" },
              }),
            ]
          )
        : _c(
            "div",
            {
              directives: [
                {
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: _vm.trans("text.add-to-favorite"),
                  expression: "trans('text.add-to-favorite')",
                },
              ],
              staticClass: "sora-btn deslike-btn",
              on: {
                click: function ($event) {
                  return _vm.addSoraFavorite(_vm.sora.id)
                },
              },
            },
            [_c("span", { staticClass: "uni-icon icon-favorite_outline" })]
          ),
      _vm._v(" "),
      _vm.sora.report != "-1"
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: _vm.trans("text.report-sora"),
                  expression: "trans('text.report-sora')",
                },
              ],
              staticClass: "sora-btn report-btn",
              on: {
                click: function ($event) {
                  return _vm.reportSora({
                    read: _vm.sora.read_slug,
                    sora: _vm.sora.id,
                    prefix: _vm.ajax_prefix,
                  })
                },
              },
            },
            [_c("span", { staticClass: "uni-icon icon-warning" })]
          )
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TadaborItem.vue?vue&type=template&id=ef12811a&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TadaborItem.vue?vue&type=template&id=ef12811a& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tadabor-item" }, [
    _vm.islink
      ? _c(
          "a",
          {
            attrs: {
              rel: "alternate",
              hreflang: _vm.$store.state.current_language,
              href: _vm.prefix + "tadabor/" + _vm.item.id,
            },
          },
          [
            _c("div", { staticClass: "databor-image" }, [
              _c("img", { attrs: { src: _vm.item.image_url, alt: "" } }),
            ]),
            _vm._v(" "),
            _c("div", {
              staticClass: "databor-text",
              domProps: { innerHTML: _vm._s(_vm.item.text) },
            }),
          ]
        )
      : _c("div", [
          _c("div", { staticClass: "databor-image" }, [
            _c("img", { attrs: { src: _vm.item.image_url, alt: "" } }),
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "databor-text",
            domProps: { innerHTML: _vm._s(_vm.item.text) },
          }),
        ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "databor-options" },
      [
        _c("div", { staticClass: "option-btn" }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "tooltip",
                  rawName: "v-tooltip.top",
                  value: _vm.trans("text.play-tadabor"),
                  expression: "trans('text.play-tadabor')",
                  modifiers: { top: true },
                },
              ],
              staticClass: "ply-btn",
              on: {
                click: function ($event) {
                  return _vm.getItemAndPlay(
                    _vm.ajax_prefix + "/tadabor/item?id=" + _vm.item.id
                  )
                },
              },
            },
            [
              _vm.isLoading
                ? _c("scale-loader", {
                    attrs: { color: "#0D3A4D", height: "10px", width: "2px" },
                  })
                : _vm.isPlaying
                ? _c("span", { staticClass: "uni-icon icon-pause" })
                : _c("span", { staticClass: "uni-icon icon-play_arrow1" }),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "option-btn" }, [
          _vm.downloading
            ? _c(
                "div",
                {
                  directives: [
                    {
                      name: "tooltip",
                      rawName: "v-tooltip.top",
                      value: _vm.trans("text.downloading"),
                      expression: "trans('text.downloading')",
                      modifiers: { top: true },
                    },
                  ],
                  staticClass: "sora-btn downloading",
                },
                [
                  _c("scale-loader", {
                    attrs: { color: "#0D3A4D", height: "10px", width: "2px" },
                  }),
                ],
                1
              )
            : _c(
                "a",
                {
                  directives: [
                    {
                      name: "tooltip",
                      rawName: "v-tooltip.top",
                      value: _vm.trans("text.download-tadabor"),
                      expression: "trans('text.download-tadabor')",
                      modifiers: { top: true },
                    },
                  ],
                  staticClass: "sora-btn download-btn",
                  attrs: { href: _vm.item.audio_url, target: "_blank" },
                },
                [_c("span", { staticClass: "uni-icon icon-cloud_download" })]
              ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "option-btn" }, [
          _c(
            "div",
            {
              directives: [
                {
                  name: "tooltip",
                  rawName: "v-tooltip.top",
                  value: _vm.trans("text.share-text"),
                  expression: "trans('text.share-text')",
                  modifiers: { top: true },
                },
                {
                  name: "clipboard",
                  rawName: "v-clipboard:copy",
                  value: _vm.item.text,
                  expression: "item.text",
                  arg: "copy",
                },
                {
                  name: "clipboard",
                  rawName: "v-clipboard:error",
                  value: _vm.clipboardErrorHandlerText,
                  expression: "clipboardErrorHandlerText",
                  arg: "error",
                },
                {
                  name: "clipboard",
                  rawName: "v-clipboard:success",
                  value: _vm.clipboardSuccessHandlerText,
                  expression: "clipboardSuccessHandlerText",
                  arg: "success",
                },
              ],
            },
            [_c("span", { staticClass: "uni-icon icon-code" })]
          ),
        ]),
        _vm._v(" "),
        _c("social-sharing", {
          attrs: {
            url: _vm.item.share_url,
            title: _vm.item.share_title,
            description: _vm.item.share_description,
          },
          inlineTemplate: {
            render: function () {
              var _vm = this
              var _h = _vm.$createElement
              var _c = _vm._self._c || _h
              return _c(
                "div",
                { staticClass: "show-share" },
                [
                  _c(
                    "network",
                    { staticClass: "twitter", attrs: { network: "twitter" } },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "tooltip",
                              rawName: "v-tooltip.top",
                              value: _vm.trans("text.share-twitter"),
                              expression: "trans('text.share-twitter')",
                              modifiers: { top: true },
                            },
                          ],
                          staticClass: "share-icon twitter",
                        },
                        [
                          _c("span", {
                            staticClass: "uni-icon icon-twitter",
                            staticStyle: { color: "#52a7e7" },
                          }),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "network",
                    { staticClass: "whatsapp", attrs: { network: "whatsapp" } },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "tooltip",
                              rawName: "v-tooltip.top",
                              value: _vm.trans("text.share-whatsapp"),
                              expression: "trans('text.share-whatsapp')",
                              modifiers: { top: true },
                            },
                          ],
                          staticClass: "share-icon whatsapp",
                        },
                        [
                          _c("span", {
                            staticClass: "uni-icon icon-whatsapp",
                            staticStyle: { color: "#43cc63" },
                          }),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "network",
                    { staticClass: "facebook", attrs: { network: "facebook" } },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "tooltip",
                              rawName: "v-tooltip.top",
                              value: _vm.trans("text.share-facebook"),
                              expression: "trans('text.share-facebook')",
                              modifiers: { top: true },
                            },
                          ],
                          staticClass: "share-icon facebook",
                        },
                        [
                          _c("span", {
                            staticClass: "uni-icon icon-facebook",
                            staticStyle: { color: "#4b69b0" },
                          }),
                        ]
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "network",
                    { staticClass: "telegram", attrs: { network: "telegram" } },
                    [
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "tooltip",
                              rawName: "v-tooltip.top",
                              value: _vm.trans("text.share-telegram"),
                              expression: "trans('text.share-telegram')",
                              modifiers: { top: true },
                            },
                          ],
                          staticClass: "share-icon telegram",
                        },
                        [
                          _c("span", {
                            staticClass: "uni-icon icon-telegram",
                            staticStyle: { color: "#2c9bdb" },
                          }),
                        ]
                      ),
                    ]
                  ),
                ],
                1
              )
            },
            staticRenderFns: [],
          },
        }),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TvsItem.vue?vue&type=template&id=647f6f6e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TvsItem.vue?vue&type=template&id=647f6f6e& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card-tv" },
    [
      _c("h3", [_vm._v(_vm._s(_vm.tv.name))]),
      _vm._v(" "),
      _c("d-player", { attrs: { options: _vm.options } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadImage.vue?vue&type=template&id=46aa7c82&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UploadImage.vue?vue&type=template&id=46aa7c82& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "image-uploader" }, [
    _c(
      "div",
      { staticClass: "dropzone text-center", attrs: { id: "imageUploader2" } },
      [
        _c("div", { attrs: { id: "addBtn2" } }, [
          _c("span", [_vm._v(_vm._s(_vm.trans("text.add-image")))]),
        ]),
        _vm._v(" "),
        _vm._m(0),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-none", attrs: { id: "imagePreview2" } },
      [
        _c("div", { staticClass: "dz-preview dz-file-preview" }, [
          _c("div", { staticClass: "dz-image" }, [
            _c("img", { attrs: { "data-dz-thumbnail": "" } }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dz-success-mark" }, [
            _c("i", { staticClass: "far fa-check-circle" }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dz-error-mark" }, [
            _c("i", { staticClass: "fas fa-exclamation-circle" }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "dz-error-message" }, [
            _c("span", { attrs: { "data-dz-errormessage": "" } }),
          ]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideosCardLogoVideo.vue?vue&type=template&id=11e155cd&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideosCardLogoVideo.vue?vue&type=template&id=11e155cd& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card-logo-video" }, [
    _c(
      "div",
      { staticClass: "video" },
      [
        _c("h3", { staticClass: "mb-3" }, [
          _vm._v(_vm._s(_vm.trans("text.logo-video-title-1"))),
        ]),
        _vm._v(" "),
        _c("my-dplayer", { attrs: { url: _vm.video.url } }),
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "image" },
      [
        _c("h3", [_vm._v(_vm._s(_vm.trans("text.logo-video-select-logo")))]),
        _vm._v(" "),
        _c("upload-image", {
          attrs: { image: false, type: "video-logo", nbr: "322" },
          on: { uploaded: _vm.imageUploaded },
        }),
        _vm._v(" "),
        _vm.errors.image
          ? _c("small", { staticClass: "form-text text-danger" }, [
              _vm._v(
                "\n      " +
                  _vm._s(_vm.trans("text.logo-video-error-image")) +
                  "\n    "
              ),
            ])
          : _vm._e(),
      ],
      1
    ),
    _vm._v(" "),
    _c("h3", { staticClass: "mb-0 mt-2" }, [
      _vm._v(
        "\n    " + _vm._s(_vm.trans("text.logo-video-select-place")) + "\n  "
      ),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "select-place" }, [
      _c("div", { staticClass: "top-right" }, [
        _c("div", { staticClass: "custom-control custom-radio" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.place,
                expression: "place",
              },
            ],
            staticClass: "custom-control-input",
            attrs: { type: "radio", value: "tr", id: "customCheckTR" },
            domProps: { checked: _vm._q(_vm.place, "tr") },
            on: {
              change: function ($event) {
                _vm.place = "tr"
              },
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "customCheckTR" },
            },
            [_vm._v(_vm._s(_vm.trans("text.top-right")))]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "top-center" }, [
        _c("div", { staticClass: "custom-control custom-radio" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.place,
                expression: "place",
              },
            ],
            staticClass: "custom-control-input",
            attrs: { type: "radio", value: "tc", id: "customCheckTC" },
            domProps: { checked: _vm._q(_vm.place, "tc") },
            on: {
              change: function ($event) {
                _vm.place = "tc"
              },
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "customCheckTC" },
            },
            [_vm._v(_vm._s(_vm.trans("text.top-center")))]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "top-left" }, [
        _c("div", { staticClass: "custom-control custom-radio" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.place,
                expression: "place",
              },
            ],
            staticClass: "custom-control-input",
            attrs: { type: "radio", value: "tl", id: "customCheckTL" },
            domProps: { checked: _vm._q(_vm.place, "tl") },
            on: {
              change: function ($event) {
                _vm.place = "tl"
              },
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "customCheckTL" },
            },
            [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.trans("text.top-left")) +
                  "\n        "
              ),
            ]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bottom-right" }, [
        _c("div", { staticClass: "custom-control custom-radio" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.place,
                expression: "place",
              },
            ],
            staticClass: "custom-control-input",
            attrs: { type: "radio", value: "br", id: "customCheckBR" },
            domProps: { checked: _vm._q(_vm.place, "br") },
            on: {
              change: function ($event) {
                _vm.place = "br"
              },
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "customCheckBR" },
            },
            [_vm._v(_vm._s(_vm.trans("text.bottom-right")))]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bottom-center" }, [
        _c("div", { staticClass: "custom-control custom-radio" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.place,
                expression: "place",
              },
            ],
            staticClass: "custom-control-input",
            attrs: { type: "radio", value: "bc", id: "customCheckBC" },
            domProps: { checked: _vm._q(_vm.place, "bc") },
            on: {
              change: function ($event) {
                _vm.place = "bc"
              },
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "customCheckBC" },
            },
            [_vm._v(_vm._s(_vm.trans("text.bottom-center")))]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bottom-left" }, [
        _c("div", { staticClass: "custom-control custom-radio" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.place,
                expression: "place",
              },
            ],
            staticClass: "custom-control-input",
            attrs: { type: "radio", value: "bl", id: "customCheckBL" },
            domProps: { checked: _vm._q(_vm.place, "bl") },
            on: {
              change: function ($event) {
                _vm.place = "bl"
              },
            },
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "custom-control-label",
              attrs: { for: "customCheckBL" },
            },
            [_vm._v(_vm._s(_vm.trans("text.bottom-left")))]
          ),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _vm.errors.place
      ? _c("small", { staticClass: "form-text text-danger" }, [
          _vm._v(
            "\n    " + _vm._s(_vm.trans("text.logo-video-error-place")) + "\n  "
          ),
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "video-state" }, [
      _vm.progress == 0
        ? _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  return _vm.generateVideo()
                },
              },
            },
            [
              _vm._v(
                "\n      " +
                  _vm._s(_vm.trans("text.logo-video-generate-video")) +
                  "\n    "
              ),
            ]
          )
        : _vm.progress == 100
        ? _c(
            "a",
            {
              staticClass: "btn btn-success",
              attrs: {
                target: "_blank",
                href: _vm.video_generated_url + "?download=1",
              },
            },
            [
              _vm._v(
                "\n      " +
                  _vm._s(_vm.trans("text.logo-video-download-video")) +
                  "\n    "
              ),
            ]
          )
        : _c("div", { staticClass: "video-progress" }, [
            _c("div", { staticClass: "progress" }, [
              _c(
                "div",
                {
                  staticClass: "progress-bar",
                  style: "width: " + _vm.progress + "%",
                  attrs: {
                    role: "progressbar",
                    ariaValuenow: _vm.progress,
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                  },
                },
                [_vm._v("\n          " + _vm._s(_vm.progress) + "%\n        ")]
              ),
            ]),
          ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideosItem.vue?vue&type=template&id=0bd96db6&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideosItem.vue?vue&type=template&id=0bd96db6& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card card-video" }, [
    _c(
      "a",
      {
        attrs: {
          href: _vm.prefix + "video/" + _vm.video.slug,
          rel: "alternate",
          hreflang: _vm.$store.state.current_language,
        },
      },
      [
        _c("img", {
          staticClass: "card-img-top",
          attrs: {
            src: _vm.video.image,
            alt: _vm.video.title,
            title: _vm.video.title,
          },
        }),
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c(
        "a",
        {
          attrs: {
            href: _vm.prefix + "video/" + _vm.video.slug,
            rel: "alternate",
            hreflang: _vm.$store.state.current_language,
          },
        },
        [
          _c("h4", { staticClass: "card-title" }, [
            _vm._v(_vm._s(_vm.video.reciter_name)),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideosItemPlaylist.vue?vue&type=template&id=99a7e6b0&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideosItemPlaylist.vue?vue&type=template&id=99a7e6b0& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card card-playlist" }, [
    _c("div", { staticClass: "card-body" }, [
      _c(
        "a",
        {
          attrs: {
            href: _vm.prefix + "video/playlist/" + _vm.playlist.id,
            rel: "alternate",
            hreflang: _vm.$store.state.current_language,
          },
        },
        [
          _c("h4", { staticClass: "card-title" }, [
            _vm._v(_vm._s(_vm.playlist.name)),
          ]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-loader\\lib\\runtime\\componentNormalizer.js'");

/***/ }),

/***/ "./node_modules/vue-notification/dist/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vue-notification/dist/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-notification\\dist\\index.js'");

/***/ }),

/***/ "./node_modules/vue-social-sharing/dist/vue-social-sharing.common.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-social-sharing/dist/vue-social-sharing.common.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-social-sharing\\dist\\vue-social-sharing.common.js'");

/***/ }),

/***/ "./node_modules/vue-spinner/src/ScaleLoader.vue":
/*!******************************************************!*\
  !*** ./node_modules/vue-spinner/src/ScaleLoader.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-spinner\\src\\ScaleLoader.vue'");

/***/ }),

/***/ "./node_modules/vue-youtube-embed/lib/vue-youtube-embed.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue-youtube-embed/lib/vue-youtube-embed.js ***!
  \*****************************************************************/
/*! exports provided: default, YouTubePlayer, getIdFromURL, getTimeFromURL */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-youtube-embed\\lib\\vue-youtube-embed.js'");

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue\\dist\\vue.common.js'");

/***/ }),

/***/ "./node_modules/vuex-persist/dist/esm/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vuex-persist/dist/esm/index.js ***!
  \*****************************************************/
/*! exports provided: default, MockStorage, VuexPersistence */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vuex-persist\\dist\\esm\\index.js'");

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createLogger, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vuex\\dist\\vuex.esm.js'");

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./resources/js/store.js");
/* harmony import */ var vuex_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex-persist */ "./node_modules/vuex-persist/dist/esm/index.js");
/* harmony import */ var vue_spinner_src_ScaleLoader_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-spinner/src/ScaleLoader.vue */ "./node_modules/vue-spinner/src/ScaleLoader.vue");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-clipboard2 */ "./node_modules/vue-clipboard2/vue-clipboard.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_clipboard2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_youtube_embed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-youtube-embed */ "./node_modules/vue-youtube-embed/lib/vue-youtube-embed.js");
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hls.js */ "./node_modules/hls.js/dist/hls.js");
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hls_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_dplayer_dist_vue_dplayer_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-dplayer/dist/vue-dplayer.css */ "./node_modules/vue-dplayer/dist/vue-dplayer.css");
/* harmony import */ var vue_dplayer_dist_vue_dplayer_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_dplayer_dist_vue_dplayer_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_dplayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-dplayer */ "./node_modules/vue-dplayer/dist/vue-dplayer.js");
/* harmony import */ var vue_dplayer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_dplayer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_fullscreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-fullscreen */ "./node_modules/vue-fullscreen/dist/vue-fullscreen.min.js");
/* harmony import */ var vue_fullscreen__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_fullscreen__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vue_directive_tooltip_dist_vueDirectiveTooltip_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-directive-tooltip/dist/vueDirectiveTooltip.css */ "./node_modules/vue-directive-tooltip/dist/vueDirectiveTooltip.css");
/* harmony import */ var vue_directive_tooltip_dist_vueDirectiveTooltip_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_directive_tooltip_dist_vueDirectiveTooltip_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vue_directive_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-directive-tooltip */ "./node_modules/vue-directive-tooltip/dist/vueDirectiveTooltip.js");
/* harmony import */ var vue_directive_tooltip__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(vue_directive_tooltip__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var vue_notification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-notification */ "./node_modules/vue-notification/dist/index.js");
/* harmony import */ var vue_notification__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vue_notification__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! velocity-animate */ "./node_modules/velocity-animate/velocity.js");
/* harmony import */ var velocity_animate__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(velocity_animate__WEBPACK_IMPORTED_MODULE_13__);
__webpack_require__(/*! ./livewire-vue */ "./resources/js/livewire-vue.js");





__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

__webpack_require__(/*! ./main */ "./resources/js/main.js");

var Turbolinks = __webpack_require__(/*! turbolinks */ "./node_modules/turbolinks/dist/turbolinks.js");

Turbolinks.start();
window.AppEvent = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();
new vuex_persist__WEBPACK_IMPORTED_MODULE_2__["default"]({
  key: 'mp3quranb.net',
  storage: window.localStorage,
  reducer: function reducer(state) {
    return {
      favorite: state.favorite
    };
  }
}).plugin(_store__WEBPACK_IMPORTED_MODULE_1__["default"]);

var Errors = __webpack_require__(/*! ./errors.js */ "./resources/js/errors.js");

window.Vue = vue__WEBPACK_IMPORTED_MODULE_0___default.a;

vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.trans = function (string, args) {
  var value = _.get(window.trans, string, string);

  _.eachRight(args, function (paramVal, paramKey) {
    value = _.replace(value, ":".concat(paramKey), paramVal);
  });

  return value;
};

vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.ajax_prefix = window.App.urlBase + '/' + window.App.current_language + '/ajax';
vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.prefix = window.App.urlBase + '/' + window.App.current_language + '/';
vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.style_version = window.App.style_version;
vue__WEBPACK_IMPORTED_MODULE_0___default.a.directive('click-outside', {
  bind: function bind(el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his childrens
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };

    document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unbind: function unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
});

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('scale-loader', vue_spinner_src_ScaleLoader_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_clipboard2__WEBPACK_IMPORTED_MODULE_4___default.a);

var SocialSharing = __webpack_require__(/*! vue-social-sharing */ "./node_modules/vue-social-sharing/dist/vue-social-sharing.common.js");

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(SocialSharing);

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_youtube_embed__WEBPACK_IMPORTED_MODULE_5__["default"]);

window.Hls = hls_js__WEBPACK_IMPORTED_MODULE_6___default.a;


vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('d-player', vue_dplayer__WEBPACK_IMPORTED_MODULE_8___default.a);

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_fullscreen__WEBPACK_IMPORTED_MODULE_9___default.a);


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_directive_tooltip__WEBPACK_IMPORTED_MODULE_11___default.a);


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_notification__WEBPACK_IMPORTED_MODULE_12___default.a, {
  velocity: velocity_animate__WEBPACK_IMPORTED_MODULE_13___default.a
});
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('my-dplayer', __webpack_require__(/*! ./components/MdPlayer.vue */ "./resources/js/components/MdPlayer.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('share-box', __webpack_require__(/*! ./components/Share.vue */ "./resources/js/components/Share.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('confirmation', __webpack_require__(/*! ./components/Confirmation.vue */ "./resources/js/components/Confirmation.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('report-sora', __webpack_require__(/*! ./components/ReportSora.vue */ "./resources/js/components/ReportSora.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('quick-access', __webpack_require__(/*! ./components/QuickAccess.vue */ "./resources/js/components/QuickAccess.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('search-form', __webpack_require__(/*! ./components/SearchForm.vue */ "./resources/js/components/SearchForm.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('mushafs-flipbook', __webpack_require__(/*! ./components/MushafsFlipbook.vue */ "./resources/js/components/MushafsFlipbook.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('alkahf-flipbook', __webpack_require__(/*! ./components/AlkahfFlipbook.vue */ "./resources/js/components/AlkahfFlipbook.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('favorites', __webpack_require__(/*! ./components/Favorites.vue */ "./resources/js/components/Favorites.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('card-sora', __webpack_require__(/*! ./components/Sora.vue */ "./resources/js/components/Sora.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('sora-show', __webpack_require__(/*! ./components/SoraShow.vue */ "./resources/js/components/SoraShow.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('read', __webpack_require__(/*! ./components/Read.vue */ "./resources/js/components/Read.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('file-uploader', __webpack_require__(/*! ./components/FileUploader.vue */ "./resources/js/components/FileUploader.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('flip-book', __webpack_require__(/*! ./components/FlipBook.vue */ "./resources/js/components/FlipBook.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('flip-book-desktop', __webpack_require__(/*! ./components/FlipBookDesktop.vue */ "./resources/js/components/FlipBookDesktop.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('upload-image', __webpack_require__(/*! ./components/UploadImage.vue */ "./resources/js/components/UploadImage.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('loading-spinner', __webpack_require__(/*! ./components/LoadingSpinner.vue */ "./resources/js/components/LoadingSpinner.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('card-video', __webpack_require__(/*! ./components/VideosItem.vue */ "./resources/js/components/VideosItem.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('card-playlist', __webpack_require__(/*! ./components/VideosItemPlaylist.vue */ "./resources/js/components/VideosItemPlaylist.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('card-logo-video', __webpack_require__(/*! ./components/VideosCardLogoVideo.vue */ "./resources/js/components/VideosCardLogoVideo.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('card-reciter', __webpack_require__(/*! ./components/ReciterItem.vue */ "./resources/js/components/ReciterItem.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('card-radio', __webpack_require__(/*! ./components/RadioItem.vue */ "./resources/js/components/RadioItem.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('card-tv', __webpack_require__(/*! ./components/TvsItem.vue */ "./resources/js/components/TvsItem.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.component('tadabor-item', __webpack_require__(/*! ./components/TadaborItem.vue */ "./resources/js/components/TadaborItem.vue")["default"]);

function initiateVue() {
  window.appMain = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
    el: '#app',
    store: _store__WEBPACK_IMPORTED_MODULE_1__["default"],
    delimiters: ['${', '}'],
    data: {
      errors: new Errors(),
      show_languages: false,
      animation: {
        enter: {
          opacity: [1, 0],
          translateX: [0, -300],
          scale: [1, 0.2]
        },
        leave: {
          opacity: 0,
          height: 0
        }
      }
    },
    methods: {
      toggelLanguages: function toggelLanguages() {
        this.show_languages = !this.show_languages;
      },
      emitEvent: function emitEvent() {},
      getItemAndPlay: function getItemAndPlay(url) {
        axios.get(url).then(function (response) {
          window.appFoolter.$store.dispatch("addAndPlayItem", response.data);
        })["catch"](function (error) {});
      },
      handleAbort: function handleAbort() {},
      closeLanguages: function closeLanguages() {
        this.show_languages = false;
      }
    },
    mounted: function mounted() {
      var MainLoading = document.getElementById("MainLoading");
      MainLoading.style.display = "none";
    }
  });
}

initiateVue();
document.addEventListener("turbolinks:before-visit", function (event) {
  var MainLoading = document.getElementById("MainLoading");
  MainLoading.style.display = "flex";
});
document.addEventListener("turbolinks:render", function (event) {
  initiateVue();
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
// try {
//     window.Popper = require('popper.js').default;
//     window.$ = window.jQuery = require('jquery');
//     require('bootstrap');
// } catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');
window.csrftoken = token.content;

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/AlkahfFlipbook.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/AlkahfFlipbook.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AlkahfFlipbook_vue_vue_type_template_id_3a957620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlkahfFlipbook.vue?vue&type=template&id=3a957620& */ "./resources/js/components/AlkahfFlipbook.vue?vue&type=template&id=3a957620&");
/* harmony import */ var _AlkahfFlipbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlkahfFlipbook.vue?vue&type=script&lang=js& */ "./resources/js/components/AlkahfFlipbook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AlkahfFlipbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AlkahfFlipbook_vue_vue_type_template_id_3a957620___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AlkahfFlipbook_vue_vue_type_template_id_3a957620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AlkahfFlipbook.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AlkahfFlipbook.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/AlkahfFlipbook.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlkahfFlipbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AlkahfFlipbook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlkahfFlipbook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlkahfFlipbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AlkahfFlipbook.vue?vue&type=template&id=3a957620&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/AlkahfFlipbook.vue?vue&type=template&id=3a957620& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlkahfFlipbook_vue_vue_type_template_id_3a957620___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AlkahfFlipbook.vue?vue&type=template&id=3a957620& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AlkahfFlipbook.vue?vue&type=template&id=3a957620&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlkahfFlipbook_vue_vue_type_template_id_3a957620___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlkahfFlipbook_vue_vue_type_template_id_3a957620___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Confirmation.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Confirmation.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Confirmation_vue_vue_type_template_id_3e5244c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Confirmation.vue?vue&type=template&id=3e5244c0& */ "./resources/js/components/Confirmation.vue?vue&type=template&id=3e5244c0&");
/* harmony import */ var _Confirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Confirmation.vue?vue&type=script&lang=js& */ "./resources/js/components/Confirmation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Confirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Confirmation_vue_vue_type_template_id_3e5244c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Confirmation_vue_vue_type_template_id_3e5244c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Confirmation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Confirmation.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Confirmation.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Confirmation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Confirmation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Confirmation.vue?vue&type=template&id=3e5244c0&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Confirmation.vue?vue&type=template&id=3e5244c0& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirmation_vue_vue_type_template_id_3e5244c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Confirmation.vue?vue&type=template&id=3e5244c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Confirmation.vue?vue&type=template&id=3e5244c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirmation_vue_vue_type_template_id_3e5244c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Confirmation_vue_vue_type_template_id_3e5244c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Favorites.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Favorites.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Favorites_vue_vue_type_template_id_0b01de08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Favorites.vue?vue&type=template&id=0b01de08& */ "./resources/js/components/Favorites.vue?vue&type=template&id=0b01de08&");
/* harmony import */ var _Favorites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Favorites.vue?vue&type=script&lang=js& */ "./resources/js/components/Favorites.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Favorites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Favorites_vue_vue_type_template_id_0b01de08___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Favorites_vue_vue_type_template_id_0b01de08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Favorites.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Favorites.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Favorites.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Favorites.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Favorites.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Favorites.vue?vue&type=template&id=0b01de08&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Favorites.vue?vue&type=template&id=0b01de08& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_template_id_0b01de08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Favorites.vue?vue&type=template&id=0b01de08& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Favorites.vue?vue&type=template&id=0b01de08&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_template_id_0b01de08___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorites_vue_vue_type_template_id_0b01de08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FileUploader.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/FileUploader.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileUploader_vue_vue_type_template_id_4ce61af5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileUploader.vue?vue&type=template&id=4ce61af5& */ "./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5&");
/* harmony import */ var _FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileUploader.vue?vue&type=script&lang=js& */ "./resources/js/components/FileUploader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileUploader_vue_vue_type_template_id_4ce61af5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileUploader_vue_vue_type_template_id_4ce61af5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileUploader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileUploader.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/FileUploader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FileUploader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_template_id_4ce61af5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FileUploader.vue?vue&type=template&id=4ce61af5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_template_id_4ce61af5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_template_id_4ce61af5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FlipBook.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/FlipBook.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlipBook_vue_vue_type_template_id_f24d493e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlipBook.vue?vue&type=template&id=f24d493e& */ "./resources/js/components/FlipBook.vue?vue&type=template&id=f24d493e&");
/* harmony import */ var _FlipBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlipBook.vue?vue&type=script&lang=js& */ "./resources/js/components/FlipBook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FlipBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlipBook_vue_vue_type_template_id_f24d493e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlipBook_vue_vue_type_template_id_f24d493e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FlipBook.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FlipBook.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/FlipBook.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlipBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FlipBook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlipBook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlipBook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FlipBook.vue?vue&type=template&id=f24d493e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/FlipBook.vue?vue&type=template&id=f24d493e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlipBook_vue_vue_type_template_id_f24d493e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FlipBook.vue?vue&type=template&id=f24d493e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlipBook.vue?vue&type=template&id=f24d493e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlipBook_vue_vue_type_template_id_f24d493e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlipBook_vue_vue_type_template_id_f24d493e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FlipBookDesktop.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/FlipBookDesktop.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlipBookDesktop_vue_vue_type_template_id_8061e0aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlipBookDesktop.vue?vue&type=template&id=8061e0aa& */ "./resources/js/components/FlipBookDesktop.vue?vue&type=template&id=8061e0aa&");
/* harmony import */ var _FlipBookDesktop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlipBookDesktop.vue?vue&type=script&lang=js& */ "./resources/js/components/FlipBookDesktop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FlipBookDesktop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlipBookDesktop_vue_vue_type_template_id_8061e0aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlipBookDesktop_vue_vue_type_template_id_8061e0aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FlipBookDesktop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FlipBookDesktop.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/FlipBookDesktop.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlipBookDesktop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FlipBookDesktop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlipBookDesktop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlipBookDesktop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FlipBookDesktop.vue?vue&type=template&id=8061e0aa&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/FlipBookDesktop.vue?vue&type=template&id=8061e0aa& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlipBookDesktop_vue_vue_type_template_id_8061e0aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FlipBookDesktop.vue?vue&type=template&id=8061e0aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlipBookDesktop.vue?vue&type=template&id=8061e0aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlipBookDesktop_vue_vue_type_template_id_8061e0aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlipBookDesktop_vue_vue_type_template_id_8061e0aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/LoadingSpinner.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/LoadingSpinner.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadingSpinner_vue_vue_type_template_id_41495c30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingSpinner.vue?vue&type=template&id=41495c30&scoped=true& */ "./resources/js/components/LoadingSpinner.vue?vue&type=template&id=41495c30&scoped=true&");
/* harmony import */ var _LoadingSpinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingSpinner.vue?vue&type=script&lang=js& */ "./resources/js/components/LoadingSpinner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LoadingSpinner_vue_vue_type_style_index_0_id_41495c30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingSpinner.vue?vue&type=style&index=0&id=41495c30&lang=scss&scoped=true& */ "./resources/js/components/LoadingSpinner.vue?vue&type=style&index=0&id=41495c30&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoadingSpinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoadingSpinner_vue_vue_type_template_id_41495c30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoadingSpinner_vue_vue_type_template_id_41495c30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "41495c30",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LoadingSpinner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/LoadingSpinner.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/LoadingSpinner.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingSpinner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingSpinner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LoadingSpinner.vue?vue&type=style&index=0&id=41495c30&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/LoadingSpinner.vue?vue&type=style&index=0&id=41495c30&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_41495c30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingSpinner.vue?vue&type=style&index=0&id=41495c30&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingSpinner.vue?vue&type=style&index=0&id=41495c30&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_41495c30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_41495c30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_41495c30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_41495c30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/LoadingSpinner.vue?vue&type=template&id=41495c30&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/LoadingSpinner.vue?vue&type=template&id=41495c30&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_template_id_41495c30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./LoadingSpinner.vue?vue&type=template&id=41495c30&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/LoadingSpinner.vue?vue&type=template&id=41495c30&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_template_id_41495c30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_template_id_41495c30_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/MdPlayer.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/MdPlayer.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MdPlayer_vue_vue_type_template_id_7de670c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MdPlayer.vue?vue&type=template&id=7de670c3& */ "./resources/js/components/MdPlayer.vue?vue&type=template&id=7de670c3&");
/* harmony import */ var _MdPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MdPlayer.vue?vue&type=script&lang=js& */ "./resources/js/components/MdPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MdPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MdPlayer_vue_vue_type_template_id_7de670c3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MdPlayer_vue_vue_type_template_id_7de670c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MdPlayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MdPlayer.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/MdPlayer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MdPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MdPlayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MdPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MdPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MdPlayer.vue?vue&type=template&id=7de670c3&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/MdPlayer.vue?vue&type=template&id=7de670c3& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MdPlayer_vue_vue_type_template_id_7de670c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MdPlayer.vue?vue&type=template&id=7de670c3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MdPlayer.vue?vue&type=template&id=7de670c3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MdPlayer_vue_vue_type_template_id_7de670c3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MdPlayer_vue_vue_type_template_id_7de670c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/MushafsFlipbook.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/MushafsFlipbook.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MushafsFlipbook_vue_vue_type_template_id_cd94caa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MushafsFlipbook.vue?vue&type=template&id=cd94caa8& */ "./resources/js/components/MushafsFlipbook.vue?vue&type=template&id=cd94caa8&");
/* harmony import */ var _MushafsFlipbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MushafsFlipbook.vue?vue&type=script&lang=js& */ "./resources/js/components/MushafsFlipbook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MushafsFlipbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MushafsFlipbook_vue_vue_type_template_id_cd94caa8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MushafsFlipbook_vue_vue_type_template_id_cd94caa8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MushafsFlipbook.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MushafsFlipbook.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/MushafsFlipbook.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MushafsFlipbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MushafsFlipbook.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MushafsFlipbook.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MushafsFlipbook_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MushafsFlipbook.vue?vue&type=template&id=cd94caa8&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/MushafsFlipbook.vue?vue&type=template&id=cd94caa8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MushafsFlipbook_vue_vue_type_template_id_cd94caa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MushafsFlipbook.vue?vue&type=template&id=cd94caa8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MushafsFlipbook.vue?vue&type=template&id=cd94caa8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MushafsFlipbook_vue_vue_type_template_id_cd94caa8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MushafsFlipbook_vue_vue_type_template_id_cd94caa8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/QuickAccess.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/QuickAccess.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuickAccess_vue_vue_type_template_id_0a999c16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickAccess.vue?vue&type=template&id=0a999c16& */ "./resources/js/components/QuickAccess.vue?vue&type=template&id=0a999c16&");
/* harmony import */ var _QuickAccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickAccess.vue?vue&type=script&lang=js& */ "./resources/js/components/QuickAccess.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuickAccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuickAccess_vue_vue_type_template_id_0a999c16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuickAccess_vue_vue_type_template_id_0a999c16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/QuickAccess.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/QuickAccess.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/QuickAccess.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickAccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./QuickAccess.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuickAccess.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickAccess_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/QuickAccess.vue?vue&type=template&id=0a999c16&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/QuickAccess.vue?vue&type=template&id=0a999c16& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickAccess_vue_vue_type_template_id_0a999c16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./QuickAccess.vue?vue&type=template&id=0a999c16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuickAccess.vue?vue&type=template&id=0a999c16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickAccess_vue_vue_type_template_id_0a999c16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickAccess_vue_vue_type_template_id_0a999c16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/RadioItem.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/RadioItem.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RadioItem_vue_vue_type_template_id_3d8eb0d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadioItem.vue?vue&type=template&id=3d8eb0d3& */ "./resources/js/components/RadioItem.vue?vue&type=template&id=3d8eb0d3&");
/* harmony import */ var _RadioItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioItem.vue?vue&type=script&lang=js& */ "./resources/js/components/RadioItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RadioItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RadioItem_vue_vue_type_template_id_3d8eb0d3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RadioItem_vue_vue_type_template_id_3d8eb0d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RadioItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/RadioItem.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/RadioItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RadioItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RadioItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RadioItem.vue?vue&type=template&id=3d8eb0d3&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/RadioItem.vue?vue&type=template&id=3d8eb0d3& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioItem_vue_vue_type_template_id_3d8eb0d3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RadioItem.vue?vue&type=template&id=3d8eb0d3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RadioItem.vue?vue&type=template&id=3d8eb0d3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioItem_vue_vue_type_template_id_3d8eb0d3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioItem_vue_vue_type_template_id_3d8eb0d3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Read.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Read.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Read_vue_vue_type_template_id_6fea1581___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Read.vue?vue&type=template&id=6fea1581& */ "./resources/js/components/Read.vue?vue&type=template&id=6fea1581&");
/* harmony import */ var _Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Read.vue?vue&type=script&lang=js& */ "./resources/js/components/Read.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Read_vue_vue_type_template_id_6fea1581___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Read_vue_vue_type_template_id_6fea1581___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Read.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Read.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Read.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Read.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Read.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Read.vue?vue&type=template&id=6fea1581&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Read.vue?vue&type=template&id=6fea1581& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_6fea1581___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Read.vue?vue&type=template&id=6fea1581& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Read.vue?vue&type=template&id=6fea1581&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_6fea1581___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_6fea1581___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ReciterItem.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ReciterItem.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReciterItem_vue_vue_type_template_id_cf114780___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReciterItem.vue?vue&type=template&id=cf114780& */ "./resources/js/components/ReciterItem.vue?vue&type=template&id=cf114780&");
/* harmony import */ var _ReciterItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReciterItem.vue?vue&type=script&lang=js& */ "./resources/js/components/ReciterItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReciterItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReciterItem_vue_vue_type_template_id_cf114780___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReciterItem_vue_vue_type_template_id_cf114780___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ReciterItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ReciterItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ReciterItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReciterItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ReciterItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReciterItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReciterItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ReciterItem.vue?vue&type=template&id=cf114780&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ReciterItem.vue?vue&type=template&id=cf114780& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReciterItem_vue_vue_type_template_id_cf114780___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ReciterItem.vue?vue&type=template&id=cf114780& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReciterItem.vue?vue&type=template&id=cf114780&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReciterItem_vue_vue_type_template_id_cf114780___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReciterItem_vue_vue_type_template_id_cf114780___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ReportSora.vue":
/*!************************************************!*\
  !*** ./resources/js/components/ReportSora.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportSora_vue_vue_type_template_id_f6e7abec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportSora.vue?vue&type=template&id=f6e7abec& */ "./resources/js/components/ReportSora.vue?vue&type=template&id=f6e7abec&");
/* harmony import */ var _ReportSora_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportSora.vue?vue&type=script&lang=js& */ "./resources/js/components/ReportSora.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportSora_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportSora_vue_vue_type_template_id_f6e7abec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportSora_vue_vue_type_template_id_f6e7abec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ReportSora.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ReportSora.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/ReportSora.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportSora_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ReportSora.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportSora.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportSora_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ReportSora.vue?vue&type=template&id=f6e7abec&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ReportSora.vue?vue&type=template&id=f6e7abec& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportSora_vue_vue_type_template_id_f6e7abec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ReportSora.vue?vue&type=template&id=f6e7abec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ReportSora.vue?vue&type=template&id=f6e7abec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportSora_vue_vue_type_template_id_f6e7abec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportSora_vue_vue_type_template_id_f6e7abec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SearchForm.vue":
/*!************************************************!*\
  !*** ./resources/js/components/SearchForm.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchForm_vue_vue_type_template_id_28665937___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchForm.vue?vue&type=template&id=28665937& */ "./resources/js/components/SearchForm.vue?vue&type=template&id=28665937&");
/* harmony import */ var _SearchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchForm.vue?vue&type=script&lang=js& */ "./resources/js/components/SearchForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchForm_vue_vue_type_template_id_28665937___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchForm_vue_vue_type_template_id_28665937___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SearchForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SearchForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/SearchForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SearchForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SearchForm.vue?vue&type=template&id=28665937&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/SearchForm.vue?vue&type=template&id=28665937& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchForm_vue_vue_type_template_id_28665937___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SearchForm.vue?vue&type=template&id=28665937& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchForm.vue?vue&type=template&id=28665937&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchForm_vue_vue_type_template_id_28665937___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchForm_vue_vue_type_template_id_28665937___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Share.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/Share.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Share_vue_vue_type_template_id_740ac104___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Share.vue?vue&type=template&id=740ac104& */ "./resources/js/components/Share.vue?vue&type=template&id=740ac104&");
/* harmony import */ var _Share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Share.vue?vue&type=script&lang=js& */ "./resources/js/components/Share.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Share_vue_vue_type_template_id_740ac104___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Share_vue_vue_type_template_id_740ac104___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Share.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Share.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/Share.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Share.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Share.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Share_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Share.vue?vue&type=template&id=740ac104&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Share.vue?vue&type=template&id=740ac104& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Share_vue_vue_type_template_id_740ac104___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Share.vue?vue&type=template&id=740ac104& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Share.vue?vue&type=template&id=740ac104&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Share_vue_vue_type_template_id_740ac104___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Share_vue_vue_type_template_id_740ac104___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Sora.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Sora.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sora_vue_vue_type_template_id_05a1aef6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sora.vue?vue&type=template&id=05a1aef6& */ "./resources/js/components/Sora.vue?vue&type=template&id=05a1aef6&");
/* harmony import */ var _Sora_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sora.vue?vue&type=script&lang=js& */ "./resources/js/components/Sora.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sora_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sora_vue_vue_type_template_id_05a1aef6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sora_vue_vue_type_template_id_05a1aef6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sora.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Sora.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Sora.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sora_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Sora.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sora.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sora_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Sora.vue?vue&type=template&id=05a1aef6&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Sora.vue?vue&type=template&id=05a1aef6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sora_vue_vue_type_template_id_05a1aef6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Sora.vue?vue&type=template&id=05a1aef6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sora.vue?vue&type=template&id=05a1aef6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sora_vue_vue_type_template_id_05a1aef6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sora_vue_vue_type_template_id_05a1aef6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SoraShow.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/SoraShow.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoraShow_vue_vue_type_template_id_0470c893___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SoraShow.vue?vue&type=template&id=0470c893& */ "./resources/js/components/SoraShow.vue?vue&type=template&id=0470c893&");
/* harmony import */ var _SoraShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SoraShow.vue?vue&type=script&lang=js& */ "./resources/js/components/SoraShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SoraShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SoraShow_vue_vue_type_template_id_0470c893___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SoraShow_vue_vue_type_template_id_0470c893___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SoraShow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SoraShow.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/SoraShow.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SoraShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SoraShow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SoraShow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SoraShow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SoraShow.vue?vue&type=template&id=0470c893&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/SoraShow.vue?vue&type=template&id=0470c893& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoraShow_vue_vue_type_template_id_0470c893___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SoraShow.vue?vue&type=template&id=0470c893& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SoraShow.vue?vue&type=template&id=0470c893&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoraShow_vue_vue_type_template_id_0470c893___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoraShow_vue_vue_type_template_id_0470c893___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TadaborItem.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/TadaborItem.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TadaborItem_vue_vue_type_template_id_ef12811a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TadaborItem.vue?vue&type=template&id=ef12811a& */ "./resources/js/components/TadaborItem.vue?vue&type=template&id=ef12811a&");
/* harmony import */ var _TadaborItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TadaborItem.vue?vue&type=script&lang=js& */ "./resources/js/components/TadaborItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TadaborItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TadaborItem_vue_vue_type_template_id_ef12811a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TadaborItem_vue_vue_type_template_id_ef12811a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TadaborItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TadaborItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/TadaborItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TadaborItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TadaborItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TadaborItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TadaborItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TadaborItem.vue?vue&type=template&id=ef12811a&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/TadaborItem.vue?vue&type=template&id=ef12811a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TadaborItem_vue_vue_type_template_id_ef12811a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TadaborItem.vue?vue&type=template&id=ef12811a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TadaborItem.vue?vue&type=template&id=ef12811a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TadaborItem_vue_vue_type_template_id_ef12811a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TadaborItem_vue_vue_type_template_id_ef12811a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/TvsItem.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/TvsItem.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TvsItem_vue_vue_type_template_id_647f6f6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TvsItem.vue?vue&type=template&id=647f6f6e& */ "./resources/js/components/TvsItem.vue?vue&type=template&id=647f6f6e&");
/* harmony import */ var _TvsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TvsItem.vue?vue&type=script&lang=js& */ "./resources/js/components/TvsItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TvsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TvsItem_vue_vue_type_template_id_647f6f6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TvsItem_vue_vue_type_template_id_647f6f6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TvsItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TvsItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/TvsItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TvsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TvsItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TvsItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TvsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TvsItem.vue?vue&type=template&id=647f6f6e&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/TvsItem.vue?vue&type=template&id=647f6f6e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TvsItem_vue_vue_type_template_id_647f6f6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TvsItem.vue?vue&type=template&id=647f6f6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TvsItem.vue?vue&type=template&id=647f6f6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TvsItem_vue_vue_type_template_id_647f6f6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TvsItem_vue_vue_type_template_id_647f6f6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UploadImage.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/UploadImage.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UploadImage_vue_vue_type_template_id_46aa7c82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadImage.vue?vue&type=template&id=46aa7c82& */ "./resources/js/components/UploadImage.vue?vue&type=template&id=46aa7c82&");
/* harmony import */ var _UploadImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadImage.vue?vue&type=script&lang=js& */ "./resources/js/components/UploadImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UploadImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UploadImage_vue_vue_type_template_id_46aa7c82___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UploadImage_vue_vue_type_template_id_46aa7c82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UploadImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UploadImage.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/UploadImage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UploadImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UploadImage.vue?vue&type=template&id=46aa7c82&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/UploadImage.vue?vue&type=template&id=46aa7c82& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadImage_vue_vue_type_template_id_46aa7c82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UploadImage.vue?vue&type=template&id=46aa7c82& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadImage.vue?vue&type=template&id=46aa7c82&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadImage_vue_vue_type_template_id_46aa7c82___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadImage_vue_vue_type_template_id_46aa7c82___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/VideosCardLogoVideo.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/VideosCardLogoVideo.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideosCardLogoVideo_vue_vue_type_template_id_11e155cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideosCardLogoVideo.vue?vue&type=template&id=11e155cd& */ "./resources/js/components/VideosCardLogoVideo.vue?vue&type=template&id=11e155cd&");
/* harmony import */ var _VideosCardLogoVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideosCardLogoVideo.vue?vue&type=script&lang=js& */ "./resources/js/components/VideosCardLogoVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VideosCardLogoVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideosCardLogoVideo_vue_vue_type_template_id_11e155cd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VideosCardLogoVideo_vue_vue_type_template_id_11e155cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/VideosCardLogoVideo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/VideosCardLogoVideo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/VideosCardLogoVideo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideosCardLogoVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VideosCardLogoVideo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideosCardLogoVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideosCardLogoVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/VideosCardLogoVideo.vue?vue&type=template&id=11e155cd&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/VideosCardLogoVideo.vue?vue&type=template&id=11e155cd& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideosCardLogoVideo_vue_vue_type_template_id_11e155cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VideosCardLogoVideo.vue?vue&type=template&id=11e155cd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideosCardLogoVideo.vue?vue&type=template&id=11e155cd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideosCardLogoVideo_vue_vue_type_template_id_11e155cd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideosCardLogoVideo_vue_vue_type_template_id_11e155cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/VideosItem.vue":
/*!************************************************!*\
  !*** ./resources/js/components/VideosItem.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideosItem_vue_vue_type_template_id_0bd96db6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideosItem.vue?vue&type=template&id=0bd96db6& */ "./resources/js/components/VideosItem.vue?vue&type=template&id=0bd96db6&");
/* harmony import */ var _VideosItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideosItem.vue?vue&type=script&lang=js& */ "./resources/js/components/VideosItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VideosItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideosItem_vue_vue_type_template_id_0bd96db6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VideosItem_vue_vue_type_template_id_0bd96db6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/VideosItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/VideosItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/VideosItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideosItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VideosItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideosItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideosItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/VideosItem.vue?vue&type=template&id=0bd96db6&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/VideosItem.vue?vue&type=template&id=0bd96db6& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideosItem_vue_vue_type_template_id_0bd96db6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VideosItem.vue?vue&type=template&id=0bd96db6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideosItem.vue?vue&type=template&id=0bd96db6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideosItem_vue_vue_type_template_id_0bd96db6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideosItem_vue_vue_type_template_id_0bd96db6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/VideosItemPlaylist.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/VideosItemPlaylist.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideosItemPlaylist_vue_vue_type_template_id_99a7e6b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideosItemPlaylist.vue?vue&type=template&id=99a7e6b0& */ "./resources/js/components/VideosItemPlaylist.vue?vue&type=template&id=99a7e6b0&");
/* harmony import */ var _VideosItemPlaylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideosItemPlaylist.vue?vue&type=script&lang=js& */ "./resources/js/components/VideosItemPlaylist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VideosItemPlaylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideosItemPlaylist_vue_vue_type_template_id_99a7e6b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VideosItemPlaylist_vue_vue_type_template_id_99a7e6b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/VideosItemPlaylist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/VideosItemPlaylist.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/VideosItemPlaylist.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideosItemPlaylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VideosItemPlaylist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideosItemPlaylist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideosItemPlaylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/VideosItemPlaylist.vue?vue&type=template&id=99a7e6b0&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/VideosItemPlaylist.vue?vue&type=template&id=99a7e6b0& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideosItemPlaylist_vue_vue_type_template_id_99a7e6b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VideosItemPlaylist.vue?vue&type=template&id=99a7e6b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideosItemPlaylist.vue?vue&type=template&id=99a7e6b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideosItemPlaylist_vue_vue_type_template_id_99a7e6b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideosItemPlaylist_vue_vue_type_template_id_99a7e6b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/errors.js":
/*!********************************!*\
  !*** ./resources/js/errors.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Errors = /*#__PURE__*/function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }

  _createClass(Errors, [{
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }
  }, {
    key: "all",
    value: function all() {
      return this.errors;
    }
  }, {
    key: "record",
    value: function record(error) {
      if (error.response == undefined) {
        this.errors = {};
      } else {
        this.errors = error.response.data.errors;
      }
    }
  }, {
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }
  }, {
    key: "clear",
    value: function clear(field) {
      delete this.errors[field];
    }
  }]);

  return Errors;
}();

;
module.exports = Errors;

/***/ }),

/***/ "./resources/js/livewire-vue.js":
/*!**************************************!*\
  !*** ./resources/js/livewire-vue.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./resources/js/store.js");
/* harmony import */ var vuex_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-persist */ "./node_modules/vuex-persist/dist/esm/index.js");
if (typeof window.livewire === 'undefined') {
  throw 'Livewire Vue Plugin: window.livewire is undefined. Make sure @livewireScripts is placed above this script include';
}



new vuex_persist__WEBPACK_IMPORTED_MODULE_1__["default"]({
  key: 'mp3quranb.net',
  storage: window.localStorage,
  reducer: function reducer(state) {
    return {
      player: state.player,
      favorite: state.favorite
    };
  }
}).plugin(_store__WEBPACK_IMPORTED_MODULE_0__["default"]);
window.livewire.hook('message.received', function (message, component) {
  if (!window.Vue) return;
  if (!message.response.effects.html) return;
  var div = document.createElement('div');
  div.innerHTML = message.response.effects.html;
  new window.Vue({
    store: _store__WEBPACK_IMPORTED_MODULE_0__["default"]
  }).$mount(div.firstElementChild);
  message.response.effects.html = div.firstElementChild.outerHTML;
}); // window.livewire.hook('element.initialized', el => {
//     if (el.__vue__) el.__livewire_ignore = true
// })

window.livewire.hook('interceptWireModelSetValue', function (value, el) {
  // If it's a vue component pass down the value prop.
  if (!el.__vue__) return; // Also, Vue will throw a warning because we are programmaticallly
  // setting a prop, we need to silence that.

  var originalSilent = window.Vue.config.silent;
  window.Vue.config.silent = true;
  el.__vue__.$props.value = value;
  window.Vue.config.silent = originalSilent;
});
window.livewire.hook('interceptWireModelAttachListener', function (directive, el, component, debounceIf) {
  // If it's a vue component pass down the value prop.
  if (!el.__vue__) return;
  var hasDebounceModifier = directive.modifiers.includes('debounce');
  var isLazy = directive.modifiers.includes('lazy');

  if (debounceIf == undefined) {
    debounceIf = function debounceIf(condition, callback, time) {
      return condition ? component.modelSyncDebounce(callback, time) : callback;
    };
  }

  el.__vue__.$on('input', debounceIf(hasDebounceModifier || !isLazy, function (e) {
    var model = directive.value;
    var value = e;
    component.set(model, value);
  }, directive.durationOr(150)));
});

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
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
  $('#font_increase_size').click(function () {
    $('.main-content .card-body').children().each(function () {
      var size = parseInt($(this).css("font-size")) + 2;
      $(this).css("font-size", size);
    });
  });
  $('#font_reset_size').click(function () {
    $('.main-content .card-body p').css("font-size", 16);
    $('.main-content .card-body li').css("font-size", 16);
    $('.main-content .card-body pre').css("font-size", 16);
    $('.main-content .card-body figcaption').css("font-size", 14);
    $('.main-content .card-body h1').css("font-size", 34);
    $('.main-content .card-body h2').css("font-size", 30);
    $('.main-content .card-body h3').css("font-size", 26);
    $('.main-content .card-body h4').css("font-size", 22);
    $('.main-content .card-body h5').css("font-size", 18);
    $('.main-content .card-body h6').css("font-size", 15);
  });
  $('#font_decrease_size').click(function () {
    $('.main-content .card-body').children().each(function () {
      var size = parseInt($(this).css("font-size")) - 2;
      $(this).css("font-size", size);
    });
  });
  $("#menu-drawer").click(function (e) {
    e.preventDefault();
    $("#app").toggleClass("toggled");
  });
  $(".drawer-side-menu a").click(function (e) {
    $("#app").toggleClass("toggled");
  });
  $(".drawer-side-menu .drawer-search form").submit(function (e) {
    $("#app").toggleClass("toggled");
  });
  jQuery('img.svg-icon').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg'); // Add replaced image's ID to the new SVG

      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      } // Add replaced image's classes to the new SVG


      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      } // Remove any invalid XML tags as per http://validator.w3.org


      $svg = $svg.removeAttr('xmlns:a'); // Check if the viewport is set, if the viewport is not set the SVG wont't scale.

      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
      } // Replace image with new SVG


      $img.replaceWith($svg);
    }, 'xml');
  });
});

function handleClick(myRadio) {}

/***/ }),

/***/ "./resources/js/modules/download.js":
/*!******************************************!*\
  !*** ./resources/js/modules/download.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    downloading: false
  },
  mutations: {
    setDownloading: function setDownloading(state, _ref) {
      var downloading = _ref.downloading;
      state.downloading = downloading;
    }
  },
  actions: {
    downloadMp3: function downloadMp3(_ref2, data) {
      var commit = _ref2.commit;
      commit('setDownloading', {
        downloading: true
      });
      axios({
        method: 'get',
        // url: 'http://mp3quran.de/015.mp3',
        url: data.url,
        responseType: 'arraybuffer'
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', data.num + '.mp3'); //or any other extension

        document.body.appendChild(link);
        link.click();
        commit('setDownloading', {
          downloading: false
        });
      })["catch"](function (error) {});
    },
    downloadOld: function downloadOld(url) {
      var self = this;
      var filename = url.substring(url.lastIndexOf("/") + 1).split("?")[0];
      var xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      self.downloading = true;

      xhr.onload = function () {
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(xhr.response);
        a.download = filename;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        self.downloading = false;
      };

      xhr.open("GET", url);
      xhr.send();
    }
  }
});

/***/ }),

/***/ "./resources/js/modules/favorite.js":
/*!******************************************!*\
  !*** ./resources/js/modules/favorite.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    videos: [],
    radios: [],
    reads: [],
    soar: [],
    show: {
      videos: [],
      radios: [],
      reads: [],
      soar: []
    }
  },
  mutations: {
    setVideos: function setVideos(state, _ref) {
      var videos = _ref.videos;
      state.videos = videos;
    },
    setRadios: function setRadios(state, _ref2) {
      var radios = _ref2.radios;
      state.radios = radios;
    },
    setReads: function setReads(state, _ref3) {
      var reads = _ref3.reads;
      state.reads = reads;
    },
    setSoar: function setSoar(state, _ref4) {
      var soar = _ref4.soar;
      state.soar = soar;
    },
    setShowVideos: function setShowVideos(state, _ref5) {
      var videos = _ref5.videos;
      state.show.videos = videos;
    },
    setShowRadios: function setShowRadios(state, _ref6) {
      var radios = _ref6.radios;
      state.show.radios = radios;
    },
    setShowReads: function setShowReads(state, _ref7) {
      var reads = _ref7.reads;
      state.show.reads = reads;
    },
    setShowSoar: function setShowSoar(state, _ref8) {
      var soar = _ref8.soar;
      state.show.soar = soar;
    },
    appendVideos: function appendVideos(state, _ref9) {
      var videos = _ref9.videos;

      for (var i = 0; i < videos.data.length; i++) {
        state.show.videos.data.push(videos.data[i]);
      }

      state.show.videos.current_page = videos.current_page;
      state.show.videos.last_page = videos.last_page;
    },
    appendSoar: function appendSoar(state, _ref10) {
      var soar = _ref10.soar;

      for (var i = 0; i < soar.data.length; i++) {
        state.show.soar.data.push(soar.data[i]);
      }

      state.show.soar.current_page = soar.current_page;
      state.show.soar.last_page = soar.last_page;
    },
    appendRadios: function appendRadios(state, _ref11) {
      var radios = _ref11.radios;

      for (var i = 0; i < radios.data.length; i++) {
        state.show.radios.data.push(radios.data[i]);
      }

      state.show.radios.current_page = radios.current_page;
      state.show.radios.last_page = radios.last_page;
    },
    appendReads: function appendReads(state, _ref12) {
      var reads = _ref12.reads;

      for (var i = 0; i < reads.data.length; i++) {
        state.show.reads.data.push(reads.data[i]);
      }

      state.show.reads.current_page = reads.current_page;
      state.show.reads.last_page = reads.last_page;
    }
  },
  getters: {
    soarIncludes: function soarIncludes(state, getters) {
      return function (item) {
        if (state.soar.includes(item)) {
          return true;
        } else {
          return false;
        }
      };
    },
    readsIncludes: function readsIncludes(state, getters) {
      return function (item) {
        if (state.reads.includes(item)) {
          return true;
        } else {
          return false;
        }
      };
    },
    radiosIncludes: function radiosIncludes(state, getters) {
      return function (item) {
        if (state.radios.includes(item)) {
          return true;
        } else {
          return false;
        }
      };
    },
    videosIncludes: function videosIncludes(state, getters) {
      return function (item) {
        if (state.videos.includes(item)) {
          return true;
        } else {
          return false;
        }
      };
    }
  },
  actions: {
    setData: function setData(_ref13, vm) {
      var commit = _ref13.commit,
          state = _ref13.state;
      var data = {
        videos: state.videos,
        radios: state.radios,
        reads: state.reads,
        soar: state.soar
      };
      axios.post("ajax/favorites", data).then(function (response) {
        commit('setShowVideos', {
          videos: response.data.videos
        });
        commit('setShowSoar', {
          soar: response.data.soar
        });
        commit('setShowRadios', {
          radios: response.data.radios
        });
        commit('setShowReads', {
          reads: response.data.reads
        });
        commit('changelaoding', {
          loading: false
        }, {
          root: true
        });
      })["catch"](function (error) {});
    },
    moreSoar: function moreSoar(_ref14, url) {
      var commit = _ref14.commit,
          state = _ref14.state;
      return function (url) {
        var page = state.show.soar.current_page + 1;
        var base = 'ajax/favorites?t=reads&';

        if (page > 1) {
          base = base + 'page=' + page + '&';
        }

        var url = base.slice(0, -1);
        var data = {
          soar: state.soar
        };
        axios.post(url, data).then(function (response) {
          commit('appendSoar', {
            soar: response.data.soar
          });
        })["catch"](function (error) {});
      }(url);
    },
    moreVideos: function moreVideos(_ref15, url) {
      var commit = _ref15.commit,
          state = _ref15.state;
      return function (url) {
        var page = state.show.videos.current_page + 1;
        var base = url + '&';

        if (page > 1) {
          base = base + 'page=' + page + '&';
        }

        var url = base.slice(0, -1);
        axios.get(url).then(function (response) {
          commit('appendVideos', {
            videos: response.data.videos
          });
        })["catch"](function (error) {});
      }(url);
    },
    moreRadios: function moreRadios(_ref16, url) {
      var commit = _ref16.commit,
          state = _ref16.state;
      return function (url) {
        var page = state.show.radios.current_page + 1;
        var base = url + '&';

        if (page > 1) {
          base = base + 'page=' + page + '&';
        }

        var url = base.slice(0, -1);
        axios.get(url).then(function (response) {
          commit('appendRadios', {
            radios: response.data.radios
          });
        })["catch"](function (error) {});
      }(url);
    },
    moreReads: function moreReads(_ref17, url) {
      var commit = _ref17.commit,
          state = _ref17.state;
      return function (url) {
        var page = state.show.reads.current_page + 1;
        var base = url + '&';

        if (page > 1) {
          base = base + 'page=' + page + '&';
        }

        var url = base.slice(0, -1);
        axios.get(url).then(function (response) {
          commit('appendReads', {
            reads: response.data.reads
          });
        })["catch"](function (error) {});
      }(url);
    },
    unsetData: function unsetData(_ref18, url) {
      var commit = _ref18.commit;
      commit('setShowVideos', {
        videos: []
      });
      commit('setShowRadios', {
        radios: []
      });
      commit('setShowSoar', {
        soar: []
      });
      commit('setShowReads', {
        reads: []
      });
    },
    clearFavorites: function clearFavorites(_ref19, url) {
      var commit = _ref19.commit;
      commit('setVideos', {
        videos: []
      });
      commit('setRadios', {
        radios: []
      });
      commit('setReads', {
        reads: []
      });
      commit('setSoar', {
        soar: []
      });
      commit('setShowVideos', {
        videos: []
      });
      commit('setShowRadios', {
        radios: []
      });
      commit('setShowSoar', {
        soar: []
      });
      commit('setShowReads', {
        reads: []
      });
    },
    addVideo: function addVideo(_ref20, item) {
      var commit = _ref20.commit,
          state = _ref20.state;
      var new_videos = state.videos;

      if (!new_videos.includes(item)) {
        new_videos.push(item);
      }

      vue__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
        group: 'app',
        title: this.getters.getTrans('text.added'),
        type: 'success',
        text: this.getters.getTrans('text.video-added-favorites')
      });
      commit('setVideos', {
        videos: new_videos
      });
    },
    removeVideo: function removeVideo(_ref21, item) {
      var commit = _ref21.commit,
          state = _ref21.state;
      var i = state.videos.indexOf(item);
      var videos = state.videos.slice(0, i).concat(state.videos.slice(i + 1, state.videos.length));
      commit('setVideos', {
        videos: videos
      });
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
        group: 'app',
        title: this.getters.getTrans('text.removed'),
        type: 'warn',
        text: this.getters.getTrans('text.video-removed-favorites')
      });
    },
    addRadio: function addRadio(_ref22, item) {
      var commit = _ref22.commit,
          state = _ref22.state;
      var new_radios = state.radios;

      if (!new_radios.includes(item)) {
        new_radios.push(item);
      }

      vue__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
        group: 'app',
        title: this.getters.getTrans('text.added'),
        type: 'success',
        text: this.getters.getTrans('text.radio-added-favorites')
      });
      commit('setRadios', {
        radios: new_radios
      });
    },
    removeRadio: function removeRadio(_ref23, item) {
      var commit = _ref23.commit,
          state = _ref23.state;
      var i = state.radios.indexOf(item);
      var radios = state.radios.slice(0, i).concat(state.radios.slice(i + 1, state.radios.length));
      commit('setRadios', {
        radios: radios
      });
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
        group: 'app',
        title: this.getters.getTrans('text.removed'),
        type: 'warn',
        text: this.getters.getTrans('text.radio-removed-favorites')
      });
    },
    addRead: function addRead(_ref24, item) {
      var commit = _ref24.commit,
          state = _ref24.state;
      var new_reads = state.reads;

      if (!new_reads.includes(item)) {
        new_reads.push(item);
      }

      vue__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
        group: 'app',
        title: this.getters.getTrans('text.added'),
        type: 'success',
        text: this.getters.getTrans('text.read-added-favorites')
      });
      commit('setReads', {
        reads: new_reads
      });
    },
    removeRead: function removeRead(_ref25, item) {
      var commit = _ref25.commit,
          state = _ref25.state;
      var i = state.reads.indexOf(item);
      var reads = state.reads.slice(0, i).concat(state.reads.slice(i + 1, state.reads.length));
      commit('setReads', {
        reads: reads
      });
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
        group: 'app',
        title: this.getters.getTrans('text.removed'),
        type: 'warn',
        text: this.getters.getTrans('text.read-removed-favorites')
      });
    },
    addSora: function addSora(_ref26, item) {
      var commit = _ref26.commit,
          state = _ref26.state;
      var new_soar = state.soar;

      if (!new_soar.includes(item)) {
        new_soar.push(item);
      }

      commit('setSoar', {
        soar: new_soar
      });
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
        group: 'app',
        title: this.getters.getTrans('text.added'),
        type: 'success',
        text: this.getters.getTrans('text.sora-added-favorites')
      });
    },
    removeSora: function removeSora(_ref27, item) {
      var commit = _ref27.commit,
          state = _ref27.state;
      var i = state.soar.indexOf(item);
      var soar = state.soar.slice(0, i).concat(state.soar.slice(i + 1, state.soar.length));
      commit('setSoar', {
        soar: soar
      });
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
        group: 'app',
        title: this.getters.getTrans('text.removed'),
        type: 'warn',
        text: this.getters.getTrans('text.sora-removed-favorites')
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/modules/quran.js":
/*!***************************************!*\
  !*** ./resources/js/modules/quran.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    soar: [],
    reads: {},
    read_soar: [],
    page: {},
    downloads_order: 'title',
    downloads_dir: 'asc',
    parts: [],
    mushaf_pages: [],
    alkahf_pages: [],
    page_share: [],
    downloads: []
  },
  mutations: {
    setMushafPages: function setMushafPages(state, _ref) {
      var mushaf_pages = _ref.mushaf_pages;
      state.mushaf_pages = mushaf_pages;
    },
    setReadSoar: function setReadSoar(state, _ref2) {
      var read_soar = _ref2.read_soar;
      state.read_soar = read_soar;
    },
    setPage: function setPage(state, _ref3) {
      var page = _ref3.page;
      state.page = page;
    },
    setParts: function setParts(state, _ref4) {
      var parts = _ref4.parts;
      state.parts = parts;
    },
    setPageShare: function setPageShare(state, _ref5) {
      var page_share = _ref5.page_share;
      state.page_share = page_share;
    },
    setAlkahfPages: function setAlkahfPages(state, _ref6) {
      var alkahf_pages = _ref6.alkahf_pages;
      state.alkahf_pages = alkahf_pages;
    },
    setDownloads: function setDownloads(state, _ref7) {
      var downloads = _ref7.downloads;
      state.downloads = downloads;
    },
    setOrder: function setOrder(state, _ref8) {
      var order = _ref8.order;
      state.downloads_order = order;
    },
    setDir: function setDir(state, _ref9) {
      var dir = _ref9.dir;
      state.downloads_dir = dir;
    },
    setSoar: function setSoar(state, _ref10) {
      var soar = _ref10.soar;
      state.soar = soar;
    },
    setReads: function setReads(state, _ref11) {
      var reads = _ref11.reads;
      state.reads = reads;
    }
  },
  actions: {
    setData: function setData(_ref12, vm) {
      var commit = _ref12.commit,
          state = _ref12.state;
      axios.get(vm.url).then(function (response) {
        commit('setParts', {
          parts: response.data.parts
        });
        commit('changelaoding', {
          loading: false
        }, {
          root: true
        });
      })["catch"](function (error) {});
    },
    setAlkahf: function setAlkahf(_ref13, vm) {
      var commit = _ref13.commit;
      axios.get(vm.url).then(function (response) {
        commit('setReadSoar', {
          read_soar: response.data.read_soar
        });
        commit('setPageShare', {
          page_share: response.data.page_share
        });
        commit('changelaoding', {
          loading: false
        }, {
          root: true
        });
      })["catch"](function (error) {});
    },
    setDownloadsData: function setDownloadsData(_ref14, vm) {
      var commit = _ref14.commit,
          state = _ref14.state;
      axios.get(vm.url).then(function (response) {
        commit('setDownloads', {
          downloads: response.data.downloads
        });
        commit('setPageTitle', {
          page_title: response.data.page_title
        }, {
          root: true
        });
        commit('changelaoding', {
          loading: false
        }, {
          root: true
        });
      })["catch"](function (error) {});
    },
    setSoar: function setSoar(_ref15, url) {
      var commit = _ref15.commit,
          state = _ref15.state;
      axios.get(url).then(function (response) {
        commit('setSoar', {
          soar: response.data.soar
        });
      });
    },
    setReads: function setReads(_ref16, url) {
      var commit = _ref16.commit,
          state = _ref16.state;
      axios.get(url).then(function (response) {
        commit('setReads', {
          reads: response.data.reads
        });
      });
    },
    unsetSoar: function unsetSoar(_ref17) {
      var commit = _ref17.commit;
      commit('setSoar', {
        soar: []
      });
    },
    unsetReads: function unsetReads(_ref18) {
      var commit = _ref18.commit;
      commit('setReads', {
        reads: []
      });
    },
    unsetAlkahf: function unsetAlkahf(_ref19) {
      var commit = _ref19.commit;
      commit('setAlkahfPages', {
        alkahf_pages: []
      });
    },
    unsetDownloadsData: function unsetDownloadsData(_ref20) {
      var commit = _ref20.commit;
      commit('setDownloads', {
        downloads: []
      });
    },
    unsetData: function unsetData(_ref21, url) {
      var commit = _ref21.commit;
      commit('setMushafPages', {
        mushaf_pages: []
      });
    },
    orderDownloads: function orderDownloads(_ref22, data) {
      var commit = _ref22.commit;
      axios.get(data.url + '?order=' + data.order + '&dir=' + data.dir).then(function (response) {
        commit('setDownloads', {
          downloads: response.data.downloads
        });
        commit('setOrder', {
          order: data.order
        });
        commit('setDir', {
          dir: data.dir
        });
      })["catch"](function (error) {});
    }
  }
});

/***/ }),

/***/ "./resources/js/store.js":
/*!*******************************!*\
  !*** ./resources/js/store.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modules_quran__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/quran */ "./resources/js/modules/quran.js");
/* harmony import */ var _modules_favorite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/favorite */ "./resources/js/modules/favorite.js");
/* harmony import */ var _modules_download__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/download */ "./resources/js/modules/download.js");





vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: {
    quran: _modules_quran__WEBPACK_IMPORTED_MODULE_2__["default"],
    favorite: _modules_favorite__WEBPACK_IMPORTED_MODULE_3__["default"],
    download: _modules_download__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  state: {
    current_menu: {
      name: '',
      id: '',
      location: ''
    },
    initial: true,
    playing: false,
    playing_item: '',
    playing_type: '',
    playing_state: '',
    subscribed: false,
    stats: {},
    settings: {},
    languages_test: [],
    languages: [],
    all_ads: [],
    current_language: '',
    page_title: '',
    trans: window.trans,
    main_menu: [],
    posts_metas: [],
    last_comments: [],
    last_news: [],
    loading: false
  },
  getters: {
    isPlaying: function isPlaying(state, getters) {
      return function (item) {
        if (state.playing_item == item.id && state.playing) {
          return true;
        } else {
          return false;
        }
      };
    },
    isLoading: function isLoading(state, getters) {
      return function (item) {
        if (state.playing_item == item.id && state.playing_state == 'loading') {
          return true;
        }

        if (state.playing_type == 'radio' && state.playing_item == item.id && state.playing_state == 'unloaded') {
          return true;
        }

        return false;
      };
    },
    getTrans: function getTrans(state) {
      return function (string, args) {
        var string = string.split(".");
        var value = state.trans[string[0]][string[1]];

        if (value) {
          for (var arg in args) {
            value = value.replace(":".concat(arg), args[arg]);
          }
        } else {
          value = string['1'];
        }

        return value;
      };
    }
  },
  actions: {
    newsletterSubscribe: function newsletterSubscribe(_ref, vm) {
      var _this = this;

      var commit = _ref.commit,
          state = _ref.state;
      var data = {
        email: vm.email
      };
      axios.post(vm.url, data).then(function (response) {
        commit('setSubscribed', {
          subscribed: true
        });
        vue__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
          group: 'app',
          title: _this.getters.getTrans('text.you-subscribed'),
          type: 'success',
          text: _this.getters.getTrans('text.you-subscribed-test')
        });
      })["catch"](function (error) {
        vue__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
          group: 'app',
          title: _this.getters.getTrans('text.you-not-subscribed'),
          type: 'error',
          text: _this.getters.getTrans('text.you-not-subscribed-test')
        });
      });
    },
    clipboardErrorHandler: function clipboardErrorHandler(_ref2, products) {
      var commit = _ref2.commit,
          state = _ref2.state;
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
        group: 'app',
        title: this.getters.getTrans('text.error'),
        type: 'error',
        text: this.getters.getTrans('text.error-copying-text')
      });
    },
    clipboardSuccessHandler: function clipboardSuccessHandler(_ref3, products) {
      var commit = _ref3.commit,
          state = _ref3.state;
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
        group: 'app',
        title: this.getters.getTrans('text.copied'),
        type: 'success',
        text: this.getters.getTrans('text.text-copied')
      });
    },
    clipboardErrorHandlerText: function clipboardErrorHandlerText(_ref4, products) {
      var commit = _ref4.commit,
          state = _ref4.state;
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
        group: 'app',
        title: this.getters.getTrans('text.error'),
        type: 'error',
        text: this.getters.getTrans('text.error-copying-code')
      });
    },
    clipboardSuccessHandlerText: function clipboardSuccessHandlerText(_ref5, products) {
      var commit = _ref5.commit,
          state = _ref5.state;
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
        group: 'app',
        title: this.getters.getTrans('text.copied'),
        type: 'success',
        text: this.getters.getTrans('text.code-copied')
      });
    },
    reportSora: function reportSora(_ref6, item) {
      var commit = _ref6.commit,
          state = _ref6.state;
      AppEvent.$emit("report-sora", item);
    },
    notify: function notify(_ref7, note) {
      var commit = _ref7.commit,
          state = _ref7.state;
      vue__WEBPACK_IMPORTED_MODULE_0___default.a.notify({
        group: note.group,
        title: note.title,
        type: note.type,
        text: note.text
      });
    }
  },
  mutations: {
    setStats: function setStats(state, _ref8) {
      var stats = _ref8.stats;
      state.stats = stats;
    },
    setInitial: function setInitial(state, _ref9) {
      var initial = _ref9.initial;

      if (typeof window !== 'undefined') {
        state.initial = initial;
      }
    },
    setSettings: function setSettings(state, _ref10) {
      var settings = _ref10.settings;
      state.settings = settings;
    },
    setLanguages: function setLanguages(state, _ref11) {
      var languages = _ref11.languages;
      state.languages = languages;
    },
    addLanguagesTets: function addLanguagesTets(state, _ref12) {
      var language = _ref12.language;
      state.languages_test.push(language);
    },
    setSubscribed: function setSubscribed(state, _ref13) {
      var subscribed = _ref13.subscribed;
      state.subscribed = subscribed;
    },
    setAllAds: function setAllAds(state, _ref14) {
      var all_ads = _ref14.all_ads;
      state.all_ads = all_ads;
    },
    setCurrentLanguages: function setCurrentLanguages(state, _ref15) {
      var current_language = _ref15.current_language;
      state.current_language = current_language;
    },
    setPageTitle: function setPageTitle(state, _ref16) {
      var page_title = _ref16.page_title;
      state.page_title = page_title;
    },
    setTrans: function setTrans(state, _ref17) {
      var trans = _ref17.trans;
      state.trans = trans;
    },
    setMainMenu: function setMainMenu(state, _ref18) {
      var main_menu = _ref18.main_menu;
      state.main_menu = main_menu;
    },
    changelaoding: function changelaoding(state, _ref19) {
      var loading = _ref19.loading;
      state.loading = loading;
    },
    setPostsMetas: function setPostsMetas(state, _ref20) {
      var posts_metas = _ref20.posts_metas;
      state.posts_metas = posts_metas;
    },
    setLastNews: function setLastNews(state, _ref21) {
      var last_news = _ref21.last_news;
      state.last_news = last_news;
    },
    setLastComments: function setLastComments(state, _ref22) {
      var last_comments = _ref22.last_comments;
      state.last_comments = last_comments;
    },
    appendPostsMetas: function appendPostsMetas(state, _ref23) {
      var posts_metas = _ref23.posts_metas;
      Object.assign(state.posts_metas, posts_metas);
    }
  }
}));

/***/ }),

/***/ "./resources/sass/admin/admin.scss":
/*!*****************************************!*\
  !*** ./resources/sass/admin/admin.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\n\r\n@import \"~bootstrap/scss/bootstrap\";\r\n^\r\n      File to import not found or unreadable: C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\bootstrap\\scss\\bootstrap.scss.\r\n      in C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\resources\\sass\\admin\\admin.scss (line 10, column 1)\n    at C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.callback (C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\sass-loader\\dist\\index.js:89:7)\n    at Object.done [as callback] (C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\neo-async\\async.js:8069:18)\n    at options.error (C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\node-sass\\lib\\index.js:294:32)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\n\r\n@import \"~bootstrap/scss/bootstrap\";\r\n^\r\n      File to import not found or unreadable: C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\bootstrap\\scss\\bootstrap.scss.\r\n      in C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\resources\\sass\\app.scss (line 38, column 1)\n    at C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.callback (C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\sass-loader\\dist\\index.js:89:7)\n    at Object.done [as callback] (C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\neo-async\\async.js:8069:18)\n    at options.error (C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\node-sass\\lib\\index.js:294:32)");

/***/ }),

/***/ "./resources/sass/errors.scss":
/*!************************************!*\
  !*** ./resources/sass/errors.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\n\r\n@import \"~bootstrap/scss/bootstrap\";\r\n^\r\n      File to import not found or unreadable: C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\bootstrap\\scss\\bootstrap.scss.\r\n      in C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\resources\\sass\\errors.scss (line 38, column 1)\n    at C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.callback (C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\sass-loader\\dist\\index.js:89:7)\n    at Object.done [as callback] (C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\neo-async\\async.js:8069:18)\n    at options.error (C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\node-sass\\lib\\index.js:294:32)");

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ./resources/sass/errors.scss ./resources/sass/admin/admin.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\wnmp\nginx-bins\default\www\mp3quran\resources\js\app.js */"./resources/js/app.js");
__webpack_require__(/*! C:\wnmp\nginx-bins\default\www\mp3quran\resources\sass\app.scss */"./resources/sass/app.scss");
__webpack_require__(/*! C:\wnmp\nginx-bins\default\www\mp3quran\resources\sass\errors.scss */"./resources/sass/errors.scss");
module.exports = __webpack_require__(/*! C:\wnmp\nginx-bins\default\www\mp3quran\resources\sass\admin\admin.scss */"./resources/sass/admin/admin.scss");


/***/ })

/******/ });