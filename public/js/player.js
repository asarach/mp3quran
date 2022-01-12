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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CircleSpin.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CircleSpin.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    size: {
      "default": '40px'
    }
  },
  computed: {
    innerStyles: function innerStyles() {
      var size = parseInt(this.size);
      return {
        transform: 'scale(' + size / 44 + ')'
      };
    },
    styles: function styles() {
      return {
        width: this.size,
        height: this.size
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/player/AudioPlayer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/player/AudioPlayer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["type"],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    source: function source(state) {
      return state.source;
    },
    playlist: function playlist(state) {
      return state.playlist;
    }
  })),
  created: function created() {
    if (!this.source || !this.source.file) {
      var source = {
        file: "empty"
      };
      this.$store.commit("setSource", {
        source: source
      });
    }

    for (var i = 0; i < this.playlist.length; i++) {
      if (!this.playlist[i]) {
        this.$store.dispatch("removeItem", i);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/player/DesktopPlayer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/player/DesktopPlayer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_smooth_dnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-smooth-dnd */ "./node_modules/vue-smooth-dnd/dist/vue-smooth-dnd.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Container: vue_smooth_dnd__WEBPACK_IMPORTED_MODULE_0__["Container"],
    Draggable: vue_smooth_dnd__WEBPACK_IMPORTED_MODULE_0__["Draggable"]
  },
  computed: _objectSpread(_objectSpread({
    currentVolume: {
      get: function get() {
        return this.$store.state.volume;
      },
      set: function set(value) {
        this.$store.dispatch("changeVolume", value);
      }
    },
    percentComplete: {
      get: function get() {
        var value = parseInt(this.currentSeconds / this.durationSeconds * 100);

        if (value) {
          return value;
        } else {
          return 0;
        }
      },
      set: function set(value) {
        this.$store.dispatch("setPercentComplete", value);
      }
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    current_language: function current_language(state) {
      return state.current_language;
    },
    source: function source(state) {
      return state.source;
    },
    audio: function audio(state) {
      return state.audio;
    },
    playlist: function playlist(state) {
      return state.playlist;
    },
    currentSeconds: function currentSeconds(state) {
      return state.currentSeconds;
    },
    durationSeconds: function durationSeconds(state) {
      return state.durationSeconds;
    },
    playing: function playing(state) {
      return state.playing;
    },
    volume: function volume(state) {
      return state.volume;
    },
    show_playlist: function show_playlist(state) {
      return state.show_playlist;
    },
    show_moreoptions: function show_moreoptions(state) {
      return state.show_moreoptions;
    },
    show_fullplayer: function show_fullplayer(state) {
      return state.show_fullplayer;
    },
    show_moreoptions_item: function show_moreoptions_item(state) {
      return state.show_moreoptions_item;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    durationTime: "durationTime",
    currentTime: "currentTime",
    favoriteIncludes: "favoriteIncludes",
    currentPosition: "currentPosition",
    isLoading: "isLoading"
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(["onDrop", "load", "pause", "nextItem", "prevItem", "loadAndPlayItem", "toggeleItem", "changeVolume", "clearPlaylist", "toggelePlaylist", "closePlaylist", "toggeleMoreoptions", "clipboardErrorHandler", "clipboardSuccessHandler", "removeItemFavorite", "addItemFavorite", "shareItem", "removeItem", "showFullplayer", "closeFullplayer"])),
  mounted: function mounted() {
    this.$store.dispatch("setAudio", this.$refs.audiofile);
  },
  created: function created() {
    var self = this;
    PlayerEvent.$on("player_play", function () {
      self.$store.dispatch("play");
    });
    PlayerEvent.$on("player_stop", function () {
      self.$store.dispatch("stop");
    });
    PlayerEvent.$on("player_toggel", function () {
      self.$store.dispatch("toggeleItem");
    });
    PlayerEvent.$on("player_pause", function () {
      self.$store.dispatch("pause");
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/player/MobilePlayer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/player/MobilePlayer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_smooth_dnd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-smooth-dnd */ "./node_modules/vue-smooth-dnd/dist/vue-smooth-dnd.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Container: vue_smooth_dnd__WEBPACK_IMPORTED_MODULE_0__["Container"],
    Draggable: vue_smooth_dnd__WEBPACK_IMPORTED_MODULE_0__["Draggable"]
  },
  computed: _objectSpread(_objectSpread({
    currentVolume: {
      get: function get() {
        return this.$store.state.volume;
      },
      set: function set(value) {
        this.$store.dispatch("changeVolume", value);
      }
    },
    percentComplete: {
      get: function get() {
        var value = parseInt(this.currentSeconds / this.durationSeconds * 100);

        if (value) {
          return value;
        } else {
          return 0;
        }
      },
      set: function set(value) {
        this.$store.dispatch("setPercentComplete", value);
      }
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    current_language: function current_language(state) {
      return state.current_language;
    },
    source: function source(state) {
      return state.source;
    },
    audio: function audio(state) {
      return state.audio;
    },
    playlist: function playlist(state) {
      return state.playlist;
    },
    currentSeconds: function currentSeconds(state) {
      return state.currentSeconds;
    },
    durationSeconds: function durationSeconds(state) {
      return state.durationSeconds;
    },
    playing: function playing(state) {
      return state.playing;
    },
    volume: function volume(state) {
      return state.volume;
    },
    show_playlist: function show_playlist(state) {
      return state.show_playlist;
    },
    show_moreoptions: function show_moreoptions(state) {
      return state.show_moreoptions;
    },
    show_fullplayer: function show_fullplayer(state) {
      return state.show_fullplayer;
    },
    show_moreoptions_item: function show_moreoptions_item(state) {
      return state.show_moreoptions_item;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    durationTime: "durationTime",
    currentTime: "currentTime",
    favoriteIncludes: "favoriteIncludes",
    currentPosition: "currentPosition",
    isLoading: "isLoading"
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(["onDrop", "load", "pause", "nextItem", "prevItem", "loadAndPlayItem", "toggeleItem", "changeVolume", "clearPlaylist", "toggelePlaylist", "closePlaylist", "toggeleMoreoptions", "clipboardErrorHandler", "clipboardSuccessHandler", "removeItemFavorite", "addItemFavorite", "shareItem", "removeItem", "showFullplayer", "closeFullplayer"])),
  mounted: function mounted() {
    this.$store.dispatch("setAudio", this.$refs.audiofile);
  },
  created: function created() {
    var self = this;
    PlayerEvent.$on("player_play", function () {
      self.$store.dispatch("play");
    });
    PlayerEvent.$on("player_stop", function () {
      self.$store.dispatch("stop");
    });
    PlayerEvent.$on("player_toggel", function () {
      self.$store.dispatch("toggeleItem");
    });
    PlayerEvent.$on("player_pause", function () {
      self.$store.dispatch("pause");
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CircleSpin.vue?vue&type=style&index=0&id=5869f646&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CircleSpin.vue?vue&type=style&index=0&id=5869f646&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner[data-v-5869f646] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.spinner *[data-v-5869f646] {\n  line-height: 0;\n  box-sizing: border-box;\n}\n.ball-container[data-v-5869f646] {\n  -webkit-animation: animball_two-data-v-5869f646 1.5s infinite;\n          animation: animball_two-data-v-5869f646 1.5s infinite;\n  width: 44px;\n  height: 44px;\n  flex-shrink: 0;\n  position: relative;\n}\n.contener_mixte[data-v-5869f646] {\n  width: 44px;\n  height: 44px;\n  position: absolute;\n}\n.ballcolor[data-v-5869f646] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n}\n.ball_1[data-v-5869f646], .ball_2[data-v-5869f646], .ball_3[data-v-5869f646], .ball_4[data-v-5869f646] {\n  position: absolute;\n  -webkit-animation: animball_one-data-v-5869f646 1.5s infinite ease;\n          animation: animball_one-data-v-5869f646 1.5s infinite ease;\n}\n.ball_1[data-v-5869f646] {\n  background-color: #f7484e;\n  top: 0;\n  left: 0;\n}\n.ball_2[data-v-5869f646] {\n  background-color: #f8b334;\n  top: 0;\n  left: 24px;\n}\n.ball_3[data-v-5869f646] {\n  background-color: #41b883;\n  top: 24px;\n  left: 0;\n}\n.ball_4[data-v-5869f646] {\n  background-color: #34495e;\n  top: 24px;\n  left: 24px;\n}\n@-webkit-keyframes animball_one-data-v-5869f646 {\n0% {\n    position: absolute;\n}\n50% {\n    top: 12px;\n    left: 12px;\n    position: absolute;\n    opacity: 0.5;\n}\n100% {\n    position: absolute;\n}\n}\n@keyframes animball_one-data-v-5869f646 {\n0% {\n    position: absolute;\n}\n50% {\n    top: 12px;\n    left: 12px;\n    position: absolute;\n    opacity: 0.5;\n}\n100% {\n    position: absolute;\n}\n}\n@-webkit-keyframes animball_two-data-v-5869f646 {\n0% {\n    transform: rotate(0deg) scale(1);\n}\n50% {\n    transform: rotate(360deg) scale(1.3);\n}\n100% {\n    transform: rotate(720deg) scale(1);\n}\n}\n@keyframes animball_two-data-v-5869f646 {\n0% {\n    transform: rotate(0deg) scale(1);\n}\n50% {\n    transform: rotate(360deg) scale(1.3);\n}\n100% {\n    transform: rotate(720deg) scale(1);\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-slider-component/theme/antd.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-slider-component/theme/antd.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/postcss-loader/src/index.js):\nError: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-slider-component\\theme\\antd.css'");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CircleSpin.vue?vue&type=style&index=0&id=5869f646&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/sass-loader/dist/cjs.js??ref--9-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CircleSpin.vue?vue&type=style&index=0&id=5869f646&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./CircleSpin.vue?vue&type=style&index=0&id=5869f646&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CircleSpin.vue?vue&type=style&index=0&id=5869f646&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-clipboard2/vue-clipboard.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-clipboard2/vue-clipboard.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-clipboard2\\vue-clipboard.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CircleSpin.vue?vue&type=template&id=5869f646&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CircleSpin.vue?vue&type=template&id=5869f646&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "spinner spinner--circle-8", style: _vm.styles },
    [
      _c("div", { staticClass: "spinner-inner", style: _vm.innerStyles }, [
        _vm._m(0),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ball-container" }, [
      _c("div", { staticClass: "contener_mixte" }, [
        _c("div", { staticClass: "ballcolor ball_1" }, [_vm._v(" ")]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "contener_mixte" }, [
        _c("div", { staticClass: "ballcolor ball_2" }, [_vm._v(" ")]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "contener_mixte" }, [
        _c("div", { staticClass: "ballcolor ball_3" }, [_vm._v(" ")]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "contener_mixte" }, [
        _c("div", { staticClass: "ballcolor ball_4" }, [_vm._v(" ")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/player/AudioPlayer.vue?vue&type=template&id=3f1fb2f2&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/player/AudioPlayer.vue?vue&type=template&id=3f1fb2f2& ***!
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
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.source.file != "empty",
          expression: "source.file != 'empty'",
        },
      ],
      staticClass: "audio-player",
    },
    [
      _vm.type == "desktop"
        ? _c("desktop-player", {
            attrs: {
              sources: _vm.source.file,
              formats: ["mp3"],
              autoplay: true,
              html5: true,
            },
          })
        : _c("mobile-player", {
            attrs: {
              sources: _vm.source.file,
              formats: ["mp3"],
              autoplay: true,
              html5: true,
            },
          }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/player/DesktopPlayer.vue?vue&type=template&id=7fe9d566&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/player/DesktopPlayer.vue?vue&type=template&id=7fe9d566& ***!
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
    {
      directives: [
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.closePlaylist,
          expression: "closePlaylist",
        },
      ],
      staticClass: "desktop-player",
    },
    [
      _c("div", { staticClass: "container d-flex" }, [
        _c("div", { staticClass: "ply-controls" }, [
          _c(
            "div",
            {
              staticClass: "ply-btn btn-previous",
              class: { disabled: _vm.currentPosition() < 1 },
            },
            [
              _c("span", {
                staticClass: "uni-icon icon-skip_previous",
                on: { click: _vm.prevItem },
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "ply-btn btn-play-pause",
              attrs: { title: _vm.playing ? "Pause" : "Play" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.toggeleItem.apply(null, arguments)
                },
              },
            },
            [
              _vm.playing
                ? _c("span", {
                    staticClass: "uni-icon icon-pause",
                    staticStyle: { color: "#fff" },
                  })
                : _c("span", {
                    staticClass: "uni-icon icon-play_arrow1",
                    staticStyle: { color: "#fff" },
                  }),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "ply-btn btn-next",
              class: {
                disabled: _vm.currentPosition() >= _vm.playlist.length - 1,
              },
            },
            [
              _c("span", {
                staticClass: "uni-icon icon-skip_next",
                on: { click: _vm.nextItem },
              }),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "ply-body" }, [
          _c("div", { staticClass: "ply-timer" }, [
            _vm._v(_vm._s(_vm.currentTime)),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "ply-progress" },
            [
              _c("vue-slider", {
                attrs: {
                  lazy: true,
                  disabled: _vm.durationSeconds == 0,
                  tooltip: "none",
                },
                model: {
                  value: _vm.percentComplete,
                  callback: function ($$v) {
                    _vm.percentComplete = $$v
                  },
                  expression: "percentComplete",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "ply-duration" }, [
            _vm._v(_vm._s(_vm.durationTime)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "ply-options" }, [
          _c("div", { staticClass: "ply-btn btn-volume" }, [
            _vm.volume === 0
              ? _c("span", { staticClass: "uni-icon icon-volume_off" })
              : _vm.volume <= 15
              ? _c("span", { staticClass: "uni-icon icon-volume_mute" })
              : _vm.volume <= 65
              ? _c("span", { staticClass: "uni-icon icon-volume_down" })
              : _c("span", { staticClass: "uni-icon icon-volume_up" }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "volume-selector" },
              [
                _c("vue-slider", {
                  staticStyle: { display: "inline-block", margin: "12px 2px" },
                  attrs: { direction: "btt", height: "120", tooltip: "none" },
                  model: {
                    value: _vm.currentVolume,
                    callback: function ($$v) {
                      _vm.currentVolume = $$v
                    },
                    expression: "currentVolume",
                  },
                }),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _vm.playlist.length > 0
            ? _c("div", { staticClass: "ply-btn btn-list" }, [
                _c("span", {
                  staticClass: "uni-icon icon-playlist_play",
                  on: { click: _vm.toggelePlaylist },
                }),
              ])
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "ply-item-info" }, [
          _c(
            "a",
            {
              attrs: {
                href: _vm.prefix + _vm.source.read_slug,
                rel: "alternate",
                hreflang: _vm.current_language,
              },
            },
            [_vm._v("\n        " + _vm._s(_vm.source.reciter) + "\n      ")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "ply-sora" }, [
            _vm._v(_vm._s(_vm.source.name)),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.playlist.length > 0,
                expression: "playlist.length > 0",
              },
            ],
            staticClass: "ply-playlist",
            class: { opened: _vm.show_playlist },
          },
          [
            _c("div", { staticClass: "ply-list-header" }, [
              _c(
                "div",
                {
                  staticClass: "ply-btn btn-next",
                  on: { click: _vm.closePlaylist },
                },
                [_c("span", { staticClass: "uni-icon icon-clear" })]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "ply-btn btn-next",
                  on: { click: _vm.clearPlaylist },
                },
                [_c("span", { staticClass: "uni-icon icon-delete_sweep" })]
              ),
            ]),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "list-unstyled" },
              [
                _c(
                  "Container",
                  { on: { drop: _vm.onDrop } },
                  _vm._l(_vm.playlist, function (item, index) {
                    return _c("Draggable", { key: item.id }, [
                      _c(
                        "li",
                        {
                          class: {
                            playing:
                              _vm.playing && _vm.currentPosition() == index,
                          },
                        },
                        [
                          _c("div", { staticClass: "drag-handle bg" }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "playlist-avatar drag-handle" },
                            [
                              _vm.isLoading(item)
                                ? _c(
                                    "div",
                                    { staticClass: "ply-btn btn-play" },
                                    [
                                      _c("scale-loader", {
                                        attrs: {
                                          color: "#fff",
                                          height: "10px",
                                          width: "2px",
                                        },
                                      }),
                                    ],
                                    1
                                  )
                                : _vm.playing && _vm.currentPosition() == index
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "ply-btn btn-pause",
                                      on: {
                                        click: function ($event) {
                                          return _vm.pause()
                                        },
                                      },
                                    },
                                    [
                                      _c("span", {
                                        staticClass: "uni-icon icon-pause",
                                      }),
                                    ]
                                  )
                                : _c(
                                    "div",
                                    {
                                      staticClass: "ply-btn btn-play",
                                      on: {
                                        click: function ($event) {
                                          return _vm.loadAndPlayItem(item)
                                        },
                                      },
                                    },
                                    [
                                      _c("span", {
                                        staticClass:
                                          "uni-icon icon-play_arrow1",
                                      }),
                                    ]
                                  ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "read-info" }, [
                            _c("div", { staticClass: "read-num" }, [
                              _vm._v(_vm._s(item.num)),
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "read-sora" }, [
                              _vm._v(_vm._s(item.name)),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "read-reciter" },
                              [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(item.reciter) +
                                    "\n                  "
                                ),
                                item.rewaya
                                  ? [
                                      _vm._v(
                                        "\n                    (" +
                                          _vm._s(item.rewaya) +
                                          ")\n                  "
                                      ),
                                    ]
                                  : _vm._e(),
                              ],
                              2
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "read-options",
                              class: {
                                opened:
                                  _vm.show_moreoptions &&
                                  _vm.show_moreoptions_item == item.id,
                              },
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "ply-btn read-more-btn",
                                  on: {
                                    click: function ($event) {
                                      return _vm.toggeleMoreoptions(item.id)
                                    },
                                  },
                                },
                                [
                                  _c("span", {
                                    staticClass:
                                      "uni-icon icon-more-horizontal",
                                  }),
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "ply-btn" }, [
                                _c("span", {
                                  staticClass: "uni-icon icon-delete",
                                  on: {
                                    click: function ($event) {
                                      return _vm.removeItem(index)
                                    },
                                  },
                                }),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "ply-btn" }, [
                                _c("span", {
                                  staticClass: "uni-icon icon-share",
                                  on: {
                                    click: function ($event) {
                                      return _vm.shareItem(
                                        item.share_title,
                                        item.share_url,
                                        item.share_description
                                      )
                                    },
                                  },
                                }),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "clipboard",
                                      rawName: "v-clipboard:copy",
                                      value: item.file,
                                      expression: "item.file",
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
                                  staticClass: "ply-btn",
                                },
                                [
                                  _c("span", {
                                    staticClass: "uni-icon icon-link",
                                  }),
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "ply-btn",
                                  attrs: { href: item.file, target: "_blank" },
                                },
                                [
                                  _c("span", {
                                    staticClass: "uni-icon icon-cloud_download",
                                  }),
                                ]
                              ),
                              _vm._v(" "),
                              _vm.favoriteIncludes(item.id, item.type)
                                ? _c(
                                    "div",
                                    {
                                      staticClass: "ply-btn",
                                      on: {
                                        click: function ($event) {
                                          return _vm.removeItemFavorite({
                                            item: item.id,
                                            type: item.type,
                                          })
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
                                      staticClass: "ply-btn",
                                      on: {
                                        click: function ($event) {
                                          return _vm.addItemFavorite({
                                            item: item.id,
                                            type: item.type,
                                          })
                                        },
                                      },
                                    },
                                    [
                                      _c("span", {
                                        staticClass:
                                          "uni-icon icon-favorite_outline",
                                      }),
                                    ]
                                  ),
                            ]
                          ),
                        ]
                      ),
                    ])
                  }),
                  1
                ),
              ],
              1
            ),
          ]
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/player/MobilePlayer.vue?vue&type=template&id=0b1fd5ba&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/player/MobilePlayer.vue?vue&type=template&id=0b1fd5ba& ***!
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
  return _c("div", { staticClass: "mobile-player" }, [
    _c("div", {
      staticClass: "sply-progress",
      style: "width: " + _vm.percentComplete + "%;",
    }),
    _vm._v(" "),
    _c("div", { staticClass: "ply-controls" }, [
      _c(
        "div",
        {
          staticClass: "ply-btn btn-previous",
          class: { disabled: _vm.currentPosition() < 1 },
        },
        [
          _c("span", {
            staticClass: "uni-icon icon-skip_previous",
            on: { click: _vm.prevItem },
          }),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "ply-btn btn-play-pause",
          attrs: { title: _vm.playing ? "Pause" : "Play" },
          on: {
            click: function ($event) {
              $event.preventDefault()
              return _vm.toggeleItem.apply(null, arguments)
            },
          },
        },
        [
          _vm.playing
            ? _c("span", { staticClass: "uni-icon icon-pause" })
            : _c("span", { staticClass: "uni-icon icon-play_arrow1" }),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "ply-btn btn-next",
          class: { disabled: _vm.currentPosition() >= _vm.playlist.length - 1 },
        },
        [
          _c("span", {
            staticClass: "uni-icon icon-skip_next",
            on: { click: _vm.nextItem },
          }),
        ]
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "ply-item-info", on: { click: _vm.showFullplayer } },
      [
        _c("div", { staticClass: "ply-reader" }, [
          _vm._v(_vm._s(_vm.source.reciter)),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "ply-sora" }, [
          _vm._v(_vm._s(_vm.source.name)),
        ]),
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "ply-options" }, [
      _c("div", { staticClass: "ply-btn btn-volume" }, [
        _vm.volume === 0
          ? _c("span", { staticClass: "uni-icon icon-volume_off" })
          : _vm.volume <= 15
          ? _c("span", { staticClass: "uni-icon icon-volume_mute" })
          : _vm.volume <= 65
          ? _c("span", { staticClass: "uni-icon icon-volume_down" })
          : _c("span", { staticClass: "uni-icon icon-volume_up" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "volume-selector" },
          [
            _c("vue-slider", {
              staticStyle: { display: "inline-block", margin: "12px 2px" },
              attrs: { direction: "btt", height: "120", tooltip: "none" },
              model: {
                value: _vm.volume,
                callback: function ($$v) {
                  _vm.volume = $$v
                },
                expression: "volume",
              },
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "ply-btn btn-list", on: { click: _vm.toggelePlaylist } },
        [_c("span", { staticClass: "uni-icon icon-playlist_play" })]
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "ply-fullplayer", class: { opened: _vm.show_fullplayer } },
      [
        _c("div", { staticClass: "fply-header" }, [
          _c("div", { staticClass: "fply-reader" }, [
            _c("span", [_vm._v(_vm._s(_vm.source.reciter))]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "fply-sora" }, [
            _vm._v(_vm._s(_vm.source.name)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "fply-body" }, [
          _c("div", { staticClass: "fply-timer" }, [
            _vm._v(_vm._s(_vm.currentTime)),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "fply-progress" },
            [
              _c("vue-slider", {
                attrs: { lazy: true, tooltip: "none" },
                model: {
                  value: _vm.percentComplete,
                  callback: function ($$v) {
                    _vm.percentComplete = $$v
                  },
                  expression: "percentComplete",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "fply-duration" }, [
            _vm._v(_vm._s(_vm.durationTime)),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "fply-controls" }, [
          _c(
            "div",
            {
              staticClass: "ply-btn btn-previous",
              class: { disabled: _vm.currentPosition() < 1 },
            },
            [
              _c("span", {
                staticClass: "uni-icon icon-skip_previous",
                staticStyle: { color: "#fff" },
                on: { click: _vm.prevItem },
              }),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "ply-btn btn-play-pause",
              attrs: { title: _vm.playing ? "Pause" : "Play" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.toggeleItem.apply(null, arguments)
                },
              },
            },
            [
              _vm.playing
                ? _c("span", { staticClass: "uni-icon icon-pause" })
                : _c("span", {
                    staticClass: "uni-icon icon-play_arrow1",
                    staticStyle: { color: "#fff" },
                  }),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "ply-btn btn-next",
              class: {
                disabled: _vm.currentPosition() >= _vm.playlist.length - 1,
              },
            },
            [
              _c("span", {
                staticClass: "uni-icon icon-skip_next",
                staticStyle: { color: "#fff" },
                on: { click: _vm.nextItem },
              }),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "fply-footer" }, [
          _c(
            "ul",
            { staticClass: "list-unstyled" },
            _vm._l(_vm.playlist, function (audio, index) {
              return _c(
                "li",
                {
                  key: audio.id,
                  class: {
                    playing: _vm.playing && _vm.currentPosition() == index,
                  },
                  on: {
                    click: function ($event) {
                      return _vm.loadAndPlayItem(audio)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "read-info" }, [
                    _c("div", { staticClass: "read-sora" }, [
                      _vm._v(_vm._s(audio.name)),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "read-reciter" }, [
                      _vm._v(_vm._s(audio.reciter)),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "read-options" }, [
                    _vm.favoriteIncludes(audio.id, audio.type)
                      ? _c(
                          "div",
                          {
                            staticClass: "ply-btn read-like-btn",
                            on: {
                              click: function ($event) {
                                return _vm.removeItemFavorite({
                                  item: audio.id,
                                  type: audio.type,
                                })
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
                            staticClass: "ply-btn read-like-btn",
                            on: {
                              click: function ($event) {
                                return _vm.addItemFavorite({
                                  item: audio.id,
                                  type: audio.type,
                                })
                              },
                            },
                          },
                          [
                            _c("span", {
                              staticClass: "uni-icon icon-favorite_outline",
                              staticStyle: { color: "#fff" },
                            }),
                          ]
                        ),
                  ]),
                ]
              )
            }),
            0
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "fply-close", on: { click: _vm.closeFullplayer } },
          [
            _c("span", {
              staticClass: "uni-icon icon-keyboard_arrow_down",
              staticStyle: { color: "#fff" },
            }),
          ]
        ),
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "ply-playlist", class: { opened: _vm.show_playlist } },
      [
        _c("div", { staticClass: "ply-list-header" }, [
          _c(
            "div",
            {
              staticClass: "ply-btn btn-next",
              on: { click: _vm.closePlaylist },
            },
            [_c("span", { staticClass: "uni-icon icon-clear" })]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "ply-btn btn-next",
              on: { click: _vm.clearPlaylist },
            },
            [_c("span", { staticClass: "uni-icon icon-delete_sweep" })]
          ),
        ]),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "list-unstyled" },
          [
            _c(
              "Container",
              { on: { drop: _vm.onDrop } },
              _vm._l(_vm.playlist, function (audio, index) {
                return _c("Draggable", { key: audio.id }, [
                  _c(
                    "li",
                    {
                      class: {
                        playing: _vm.playing && _vm.currentPosition() == index,
                      },
                    },
                    [
                      _c("div", { staticClass: "drag-handle bg" }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "playlist-avatar drag-handle" },
                        [
                          _vm.isLoading(audio)
                            ? _c(
                                "div",
                                { staticClass: "ply-btn btn-play" },
                                [
                                  _c("scale-loader", {
                                    attrs: {
                                      color: "#fff",
                                      height: "10px",
                                      width: "2px",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm.playing && _vm.currentPosition() == index
                            ? _c(
                                "div",
                                {
                                  staticClass: "ply-btn btn-pause",
                                  on: { click: _vm.pause },
                                },
                                [
                                  _c("span", {
                                    staticClass: "uni-icon icon-pause",
                                  }),
                                ]
                              )
                            : _c(
                                "div",
                                {
                                  staticClass: "ply-btn btn-play",
                                  on: {
                                    click: function ($event) {
                                      return _vm.loadAndPlayItem(audio)
                                    },
                                  },
                                },
                                [
                                  _c("span", {
                                    staticClass: "uni-icon icon-play_arrow",
                                  }),
                                ]
                              ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "read-info" }, [
                        _c("div", { staticClass: "read-num" }, [
                          _vm._v(_vm._s(audio.num)),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "read-sora" }, [
                          _vm._v(_vm._s(audio.name)),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "read-reciter" },
                          [
                            _vm._v(
                              "\n                " +
                                _vm._s(audio.reciter) +
                                "\n                "
                            ),
                            audio.rewaya
                              ? [
                                  _vm._v(
                                    "\n                  (" +
                                      _vm._s(audio.rewaya) +
                                      ")\n                "
                                  ),
                                ]
                              : _vm._e(),
                          ],
                          2
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "read-options",
                          class: {
                            opened:
                              _vm.show_moreoptions &&
                              _vm.show_moreoptions_item == audio.id,
                          },
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "ply-btn read-more-btn",
                              on: {
                                click: function ($event) {
                                  return _vm.toggeleMoreoptions(audio.id)
                                },
                              },
                            },
                            [
                              _c("span", {
                                staticClass: "uni-icon icon-more-horizontal",
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "ply-btn" }, [
                            _c("span", {
                              staticClass: "uni-icon icon-delete",
                              on: {
                                click: function ($event) {
                                  return _vm.removeItem(index)
                                },
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "ply-btn" }, [
                            _c("span", {
                              staticClass: "uni-icon icon-share",
                              on: {
                                click: function ($event) {
                                  return _vm.shareItem(
                                    audio.share_title,
                                    audio.share_url,
                                    audio.share_description
                                  )
                                },
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "clipboard",
                                  rawName: "v-clipboard:copy",
                                  value: audio.file,
                                  expression: "audio.file",
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
                              staticClass: "ply-btn",
                            },
                            [_c("span", { staticClass: "uni-icon icon-link" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "ply-btn",
                              attrs: { href: audio.file, target: "_blank" },
                            },
                            [
                              _c("span", {
                                staticClass: "uni-icon icon-cloud_download",
                              }),
                            ]
                          ),
                          _vm._v(" "),
                          _vm.favoriteIncludes(audio.id, audio.type)
                            ? _c(
                                "div",
                                {
                                  staticClass: "ply-btn",
                                  on: {
                                    click: function ($event) {
                                      return _vm.removeItemFavorite({
                                        item: audio.id,
                                        type: audio.type,
                                      })
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
                                  staticClass: "ply-btn",
                                  on: {
                                    click: function ($event) {
                                      return _vm.addItemFavorite({
                                        item: audio.id,
                                        type: audio.type,
                                      })
                                    },
                                  },
                                },
                                [
                                  _c("span", {
                                    staticClass:
                                      "uni-icon icon-favorite_outline",
                                  }),
                                ]
                              ),
                        ]
                      ),
                    ]
                  ),
                ])
              }),
              1
            ),
          ],
          1
        ),
      ]
    ),
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

/***/ "./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js":
/*!********************************************************************************!*\
  !*** ./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-slider-component\\dist\\vue-slider-component.umd.min.js'");

/***/ }),

/***/ "./node_modules/vue-slider-component/theme/antd.css":
/*!**********************************************************!*\
  !*** ./node_modules/vue-slider-component/theme/antd.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--8-1!../../postcss-loader/src??ref--8-2!./antd.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-slider-component/theme/antd.css");

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

/***/ "./node_modules/vue-smooth-dnd/dist/vue-smooth-dnd.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-smooth-dnd/dist/vue-smooth-dnd.esm.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-smooth-dnd\\dist\\vue-smooth-dnd.esm.js'");

/***/ }),

/***/ "./node_modules/vue-spinner/src/ScaleLoader.vue":
/*!******************************************************!*\
  !*** ./node_modules/vue-spinner/src/ScaleLoader.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/vue-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'C:\\wnmp\\nginx-bins\\default\\www\\mp3quran\\node_modules\\vue-spinner\\src\\ScaleLoader.vue'");

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

/***/ "./resources/js/components/CircleSpin.vue":
/*!************************************************!*\
  !*** ./resources/js/components/CircleSpin.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CircleSpin_vue_vue_type_template_id_5869f646_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircleSpin.vue?vue&type=template&id=5869f646&scoped=true& */ "./resources/js/components/CircleSpin.vue?vue&type=template&id=5869f646&scoped=true&");
/* harmony import */ var _CircleSpin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CircleSpin.vue?vue&type=script&lang=js& */ "./resources/js/components/CircleSpin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CircleSpin_vue_vue_type_style_index_0_id_5869f646_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CircleSpin.vue?vue&type=style&index=0&id=5869f646&lang=scss&scoped=true& */ "./resources/js/components/CircleSpin.vue?vue&type=style&index=0&id=5869f646&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CircleSpin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CircleSpin_vue_vue_type_template_id_5869f646_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CircleSpin_vue_vue_type_template_id_5869f646_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5869f646",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CircleSpin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CircleSpin.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/CircleSpin.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CircleSpin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CircleSpin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CircleSpin.vue?vue&type=style&index=0&id=5869f646&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/CircleSpin.vue?vue&type=style&index=0&id=5869f646&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpin_vue_vue_type_style_index_0_id_5869f646_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-3!../../../node_modules/vue-loader/lib??vue-loader-options!./CircleSpin.vue?vue&type=style&index=0&id=5869f646&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CircleSpin.vue?vue&type=style&index=0&id=5869f646&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpin_vue_vue_type_style_index_0_id_5869f646_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpin_vue_vue_type_style_index_0_id_5869f646_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpin_vue_vue_type_style_index_0_id_5869f646_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpin_vue_vue_type_style_index_0_id_5869f646_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/CircleSpin.vue?vue&type=template&id=5869f646&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/CircleSpin.vue?vue&type=template&id=5869f646&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpin_vue_vue_type_template_id_5869f646_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CircleSpin.vue?vue&type=template&id=5869f646&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CircleSpin.vue?vue&type=template&id=5869f646&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpin_vue_vue_type_template_id_5869f646_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleSpin_vue_vue_type_template_id_5869f646_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/player/AudioPlayer.vue":
/*!*********************************************!*\
  !*** ./resources/js/player/AudioPlayer.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AudioPlayer_vue_vue_type_template_id_3f1fb2f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioPlayer.vue?vue&type=template&id=3f1fb2f2& */ "./resources/js/player/AudioPlayer.vue?vue&type=template&id=3f1fb2f2&");
/* harmony import */ var _AudioPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioPlayer.vue?vue&type=script&lang=js& */ "./resources/js/player/AudioPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AudioPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AudioPlayer_vue_vue_type_template_id_3f1fb2f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AudioPlayer_vue_vue_type_template_id_3f1fb2f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/player/AudioPlayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/player/AudioPlayer.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/player/AudioPlayer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AudioPlayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/player/AudioPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/player/AudioPlayer.vue?vue&type=template&id=3f1fb2f2&":
/*!****************************************************************************!*\
  !*** ./resources/js/player/AudioPlayer.vue?vue&type=template&id=3f1fb2f2& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_template_id_3f1fb2f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AudioPlayer.vue?vue&type=template&id=3f1fb2f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/player/AudioPlayer.vue?vue&type=template&id=3f1fb2f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_template_id_3f1fb2f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioPlayer_vue_vue_type_template_id_3f1fb2f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/player/DesktopPlayer.vue":
/*!***********************************************!*\
  !*** ./resources/js/player/DesktopPlayer.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DesktopPlayer_vue_vue_type_template_id_7fe9d566___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesktopPlayer.vue?vue&type=template&id=7fe9d566& */ "./resources/js/player/DesktopPlayer.vue?vue&type=template&id=7fe9d566&");
/* harmony import */ var _DesktopPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopPlayer.vue?vue&type=script&lang=js& */ "./resources/js/player/DesktopPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DesktopPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DesktopPlayer_vue_vue_type_template_id_7fe9d566___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DesktopPlayer_vue_vue_type_template_id_7fe9d566___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/player/DesktopPlayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/player/DesktopPlayer.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/player/DesktopPlayer.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopPlayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/player/DesktopPlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/player/DesktopPlayer.vue?vue&type=template&id=7fe9d566&":
/*!******************************************************************************!*\
  !*** ./resources/js/player/DesktopPlayer.vue?vue&type=template&id=7fe9d566& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopPlayer_vue_vue_type_template_id_7fe9d566___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopPlayer.vue?vue&type=template&id=7fe9d566& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/player/DesktopPlayer.vue?vue&type=template&id=7fe9d566&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopPlayer_vue_vue_type_template_id_7fe9d566___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopPlayer_vue_vue_type_template_id_7fe9d566___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/player/MobilePlayer.vue":
/*!**********************************************!*\
  !*** ./resources/js/player/MobilePlayer.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobilePlayer_vue_vue_type_template_id_0b1fd5ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobilePlayer.vue?vue&type=template&id=0b1fd5ba& */ "./resources/js/player/MobilePlayer.vue?vue&type=template&id=0b1fd5ba&");
/* harmony import */ var _MobilePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobilePlayer.vue?vue&type=script&lang=js& */ "./resources/js/player/MobilePlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MobilePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobilePlayer_vue_vue_type_template_id_0b1fd5ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobilePlayer_vue_vue_type_template_id_0b1fd5ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/player/MobilePlayer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/player/MobilePlayer.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/player/MobilePlayer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobilePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MobilePlayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/player/MobilePlayer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobilePlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/player/MobilePlayer.vue?vue&type=template&id=0b1fd5ba&":
/*!*****************************************************************************!*\
  !*** ./resources/js/player/MobilePlayer.vue?vue&type=template&id=0b1fd5ba& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobilePlayer_vue_vue_type_template_id_0b1fd5ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MobilePlayer.vue?vue&type=template&id=0b1fd5ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/player/MobilePlayer.vue?vue&type=template&id=0b1fd5ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobilePlayer_vue_vue_type_template_id_0b1fd5ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobilePlayer_vue_vue_type_template_id_0b1fd5ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/player/player.js":
/*!***************************************!*\
  !*** ./resources/js/player/player.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./resources/js/player/store.js");
/* harmony import */ var vuex_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex-persist */ "./node_modules/vuex-persist/dist/esm/index.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-slider-component */ "./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_slider_component_theme_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-slider-component/theme/antd.css */ "./node_modules/vue-slider-component/theme/antd.css");
/* harmony import */ var vue_slider_component_theme_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component_theme_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_spinner_src_ScaleLoader_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-spinner/src/ScaleLoader.vue */ "./node_modules/vue-spinner/src/ScaleLoader.vue");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-clipboard2 */ "./node_modules/vue-clipboard2/vue-clipboard.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_clipboard2__WEBPACK_IMPORTED_MODULE_6__);



window.PlayerEvent = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();
window.PlayerVue = vue__WEBPACK_IMPORTED_MODULE_0___default.a;
window.appMain = {};
new vuex_persist__WEBPACK_IMPORTED_MODULE_2__["default"]({
  key: 'mp3quranb.net_player',
  storage: window.localStorage
}).plugin(_store__WEBPACK_IMPORTED_MODULE_1__["default"]); //Prototypes 

PlayerVue.prototype.ajax_prefix = window.App.urlBase + '/' + window.App.current_language + '/ajax';
PlayerVue.prototype.prefix = window.App.urlBase + '/' + window.App.current_language + '/';
PlayerVue.prototype.style_version = window.App.style_version;

PlayerVue.prototype.trans = function (string, args) {
  var value = _.get(window.trans, string, string);

  _.eachRight(args, function (paramVal, paramKey) {
    value = _.replace(value, ":".concat(paramKey), paramVal);
  });

  return value;
}; //Packages 




PlayerVue.component('vue-slider', vue_slider_component__WEBPACK_IMPORTED_MODULE_3___default.a);

PlayerVue.component('scale-loader', vue_spinner_src_ScaleLoader_vue__WEBPACK_IMPORTED_MODULE_5__["default"]);

PlayerVue.use(vue_clipboard2__WEBPACK_IMPORTED_MODULE_6___default.a);
PlayerVue.directive('click-outside', {
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
}); //Components

PlayerVue.component('audio-player', __webpack_require__(/*! ./AudioPlayer.vue */ "./resources/js/player/AudioPlayer.vue")["default"]);
PlayerVue.component('mobile-player', __webpack_require__(/*! ./MobilePlayer.vue */ "./resources/js/player/MobilePlayer.vue")["default"]);
PlayerVue.component('desktop-player', __webpack_require__(/*! ./DesktopPlayer.vue */ "./resources/js/player/DesktopPlayer.vue")["default"]);
PlayerVue.component('circle-spin', __webpack_require__(/*! ../components/CircleSpin.vue */ "./resources/js/components/CircleSpin.vue")["default"]);
window.appFoolter = new PlayerVue({
  el: '#appFooter',
  store: _store__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./resources/js/player/store.js":
/*!**************************************!*\
  !*** ./resources/js/player/store.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);

var convertTimeHHMMSS = function convertTimeHHMMSS(val) {
  var hhmmss = new Date(val * 1000).toISOString().substr(11, 8);
  return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
};

/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    audio: undefined,
    currentSeconds: 0,
    durationSeconds: 0,
    playing: false,
    volume: 60,
    show_playlist: false,
    show_moreoptions: false,
    show_moreoptions_item: false,
    loaded: false,
    dragging: false,
    show_fullplayer: false,
    playing_state: '',
    playing_item: '',
    playing_type: '',
    source: {
      file: "empty",
      id: "",
      name: "",
      num: "",
      read_id: "",
      read_slug: "",
      reciter: "",
      share_description: "",
      share_title: "",
      share_url: "",
      sora_id: "",
      type: ""
    },
    playlist: [],
    favorite: {
      videos: [],
      radios: [],
      reads: [],
      soar: []
    }
  },
  mutations: {
    setCurrentTime: function setCurrentTime(state, _ref) {
      var currentTime = _ref.currentTime;
      state.currentTime = currentTime;
    },
    setFavorite: function setFavorite(state, _ref2) {
      var favorite = _ref2.favorite;
      state.favorite = favorite;
    },
    setPlaylist: function setPlaylist(state, _ref3) {
      var playlist = _ref3.playlist;
      state.playlist = playlist;
    },
    setVolume: function setVolume(state, _ref4) {
      var volume = _ref4.volume;
      state.volume = volume;
    },
    setCurrentSeconds: function setCurrentSeconds(state, _ref5) {
      var currentSeconds = _ref5.currentSeconds;
      state.currentSeconds = currentSeconds;
    },
    setSource: function setSource(state, _ref6) {
      var source = _ref6.source;
      state.source = source;
      window.appMain.$store.state.playing_item = source.id;
    },
    setPlaying: function setPlaying(state, _ref7) {
      var playing = _ref7.playing;
      state.playing = playing;
      window.appMain.$store.state.playing = playing;
    },
    setState: function setState(state, _ref8) {
      var playing_state = _ref8.playing_state,
          playing_item = _ref8.playing_item,
          playing_type = _ref8.playing_type;
      state.playing_type = playing_type;
      window.appMain.$store.state.playing_type = playing_type;
      state.playing_item = playing_item;
      window.appMain.$store.state.playing_item = playing_item;
      state.playing_state = playing_state;
      window.appMain.$store.state.playing_state = playing_state;
    }
  },
  getters: {
    currentTime: function currentTime(state) {
      return convertTimeHHMMSS(state.currentSeconds);
    },
    durationTime: function durationTime(state) {
      return convertTimeHHMMSS(state.durationSeconds);
    },
    favoriteIncludes: function favoriteIncludes(state, getters) {
      return function (item, type) {
        var includ = false;

        if (window.appMain.$store) {
          switch (type) {
            case 'sora':
              if (window.appMain.$store.state.favorite.soar.includes(item)) {
                includ = true;
              }

              break;

            case 'radio':
              if (window.appMain.$store.state.favorite.radios.includes(item)) {
                includ = true;
              }

              break;
          }
        }

        return includ;
      };
    },
    currentPosition: function currentPosition(state, getters) {
      return function (item) {
        var index = -1;

        for (var i = 0; i < state.playlist.length; i++) {
          if (state.playlist[i].file === state.source.file) {
            index = i;
          }
        }

        return index;
      };
    },
    isPlaying: function isPlaying(state, getters) {
      return function () {
        if (state.source.id == item && state.playing) {
          return true;
        } else {
          return false;
        }
      };
    },
    isLoading: function isLoading(state, getters) {
      return function (item) {
        if (state.source.id == item.id && state.playing_state == 'loading') {
          return true;
        }

        if (item.type == 'radio' && state.source.id == item.id && state.playing_state == 'unloaded') {
          return true;
        }

        return false;
      };
    }
  },
  actions: {
    getItemAndPlay: function getItemAndPlay(_ref9, url) {
      var dispatch = _ref9.dispatch,
          state = _ref9.state;
      axios.get(url).then(function (response) {
        dispatch('addAndPlayItem', response.data);
      })["catch"](function (error) {});
    },
    addAndPlayItem: function addAndPlayItem(_ref10, item) {
      var commit = _ref10.commit,
          state = _ref10.state,
          dispatch = _ref10.dispatch;
      var found = false;

      for (var i = 0; i < state.playlist.length; i++) {
        if (state.playlist[i].id == item.id) {
          found = true;
          break;
        }
      }

      if (!found) {
        var new_playlist = state.playlist;
        new_playlist.push(item);
        commit('setPlaylist', {
          playlist: new_playlist
        });
      }

      if (item.id == state.source.id) {
        dispatch("toggeleItem");
      } else {
        dispatch("loadAndPlayItem", item);
      }
    },
    addItem: function addItem(_ref11, item) {
      var commit = _ref11.commit,
          state = _ref11.state;
      var new_playlist = state.playlist;
      var exist = new_playlist.find(function (itm) {
        if (itm.id == item.id) return true;
      });

      if (exist == undefined) {
        new_playlist.push(item);
        window.appMain.$store.dispatch("notify", {
          //tofixe
          group: 'app',
          title: window.appFoolter.trans('text.added'),
          type: 'success',
          text: window.appFoolter.trans('text.item-added-playlist')
        });
      } else {
        window.appMain.$store.dispatch("notify", {
          //tofixe
          group: 'app',
          title: window.appFoolter.trans('text.not-added'),
          type: 'warn',
          text: window.appFoolter.trans('text.item-exists-in-playlist')
        });
      }

      commit('setPlaylist', {
        playlist: new_playlist
      });

      if (state.source.file == 'empty') {
        commit('setSource', {
          source: item
        });
      }
    },
    removeItem: function removeItem(_ref12, index) {
      var commit = _ref12.commit,
          state = _ref12.state;
      var new_playlist = state.playlist;
      new_playlist.splice(index, 1);
      commit('setPlaylist', {
        playlist: new_playlist
      });
    },
    loadAndPlayItem: function loadAndPlayItem(_ref13, item) {
      var commit = _ref13.commit,
          dispatch = _ref13.dispatch,
          state = _ref13.state;
      commit("setState", {
        playing_state: "loading",
        playing_item: item.id,
        playing_type: state.playing_type
      });
      commit('setSource', {
        source: item
      });
      commit('setCurrentTime', {
        currentTime: 0
      });
      state.audio.currentTime = 0;
      state.audio.pause();
      state.audio.setAttribute('src', state.source.file);
      state.audio.load();
      dispatch("play");
    },
    toggeleItem: function toggeleItem(_ref14) {
      var dispatch = _ref14.dispatch,
          state = _ref14.state;

      if (state.playing) {
        dispatch("pause");
      } else {
        dispatch("play");
      }
    },
    load: function load(_ref15, item) {
      var commit = _ref15.commit,
          state = _ref15.state;

      if (state.audio.readyState >= 2) {
        state.loaded = true;
        state.durationSeconds = parseInt(state.audio.duration);

        if (!state.durationSeconds) {
          state.durationSeconds = 0;
        }

        commit("setState", {
          playing_state: 'loaded',
          playing_item: state.playing_item,
          playing_type: state.playing_type
        });
        return true;
      }

      throw new Error("Failed to load sound file.");
    },
    nextItem: function nextItem(_ref16) {
      var state = _ref16.state,
          dispatch = _ref16.dispatch;
      var index = -1;

      for (var i = 0; i < state.playlist.length; i++) {
        if (state.playlist[i].file === state.source.file) {
          index = i;
        }
      }

      var playlistIndex = Math.min(state.playlist.length - 1, index + 1);
      var item = state.playlist[playlistIndex];
      dispatch("loadAndPlayItem", item);
    },
    prevItem: function prevItem(_ref17) {
      var state = _ref17.state,
          dispatch = _ref17.dispatch;
      var index = -1;

      for (var i = 0; i < state.playlist.length; i++) {
        if (state.playlist[i].file === state.source.file) {
          index = i;
        }
      }

      var playlistIndex = Math.max(0, index - 1);
      var item = state.playlist[playlistIndex];
      dispatch("loadAndPlayItem", item);
    },
    play: function play(_ref18) {
      var commit = _ref18.commit,
          state = _ref18.state;
      state.audio.play();
      commit("setPlaying", {
        playing: true
      });
    },
    pause: function pause(_ref19) {
      var commit = _ref19.commit,
          state = _ref19.state;
      state.audio.pause();
      commit("setPlaying", {
        playing: false
      });
    },
    stop: function stop(_ref20, products) {
      var commit = _ref20.commit,
          state = _ref20.state;
      state.audio.pause();
      state.audio.currentTime = 0;
      commit("setPlaying", {
        playing: false
      });
    },
    setAudio: function setAudio(_ref21, audioold) {
      var state = _ref21.state,
          dispatch = _ref21.dispatch,
          commit = _ref21.commit;
      // commit("setPlaying", { playing: false });
      state.playing = false;
      state.audio = document.createElement('audio');
      state.audio.addEventListener("timeupdate", function () {
        dispatch("update");
      });
      state.audio.addEventListener("ended", function () {
        dispatch("nextItem");
      });
      state.audio.addEventListener("loadeddata", function () {
        dispatch("load");
      }); // state.audio.addEventListener("pause", () => {
      // });
      // state.audio.addEventListener("play", () => {
      // });

      state.audio.setAttribute('controls', 'controls');
      state.audio.setAttribute('id', 'audioPlayer');

      if (state.source.file !== 'empty') {
        state.audio.setAttribute('src', state.source.file);
        state.audio.load();
      }

      $('body').append(state.audio);
      state.audio.volume = state.volume / 100;
      state.audio.currentTime = state.currentSeconds;
    },
    update: function update(_ref22) {
      var state = _ref22.state,
          commit = _ref22.commit;
      commit("setCurrentSeconds", {
        currentSeconds: parseInt(state.audio.currentTime)
      });
    },
    //audio controles
    setPercentComplete: function setPercentComplete(_ref23, value) {
      var state = _ref23.state;
      var cal = value * state.audio.duration / 100;
      state.audio.currentTime = parseInt(cal);
    },
    changeVolume: function changeVolume(_ref24, volume) {
      var commit = _ref24.commit,
          state = _ref24.state;
      commit("setVolume", {
        volume: volume
      });
      state.audio.volume = volume / 100;
    },
    //Additional actions
    toggeleMoreoptions: function toggeleMoreoptions(_ref25, id) {
      var commit = _ref25.commit,
          state = _ref25.state;

      if (state.show_moreoptions_item == id) {
        state.show_moreoptions_item = false;
        state.show_moreoptions = false;
      } else {
        state.show_moreoptions_item = id;
        state.show_moreoptions = true;
      }
    },
    onDrop: function onDrop(_ref26, dragResult) {
      var commit = _ref26.commit,
          state = _ref26.state;
      var removedIndex = dragResult.removedIndex,
          addedIndex = dragResult.addedIndex,
          payload = dragResult.payload;
      if (removedIndex === null && addedIndex === null) return state.playlist;

      var result = _toConsumableArray(state.playlist);

      var itemToAdd = payload;

      if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0];
      }

      if (addedIndex !== null) {
        result.splice(addedIndex, 0, itemToAdd);
      }

      commit("setPlaylist", {
        playlist: result
      });
    },
    download: function download(_ref27, url) {
      var commit = _ref27.commit,
          state = _ref27.state;
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
    clipboardSuccessHandler: function clipboardSuccessHandler(_ref28, products) {
      var commit = _ref28.commit,
          state = _ref28.state;
      window.appMain.$store.dispatch("notify", {
        //tofixe
        group: 'app',
        title: window.appFoolter.trans('text.copied'),
        type: 'success',
        text: window.appFoolter.trans('text.text-copied')
      });
    },
    clipboardErrorHandler: function clipboardErrorHandler(_ref29, products) {
      var commit = _ref29.commit,
          state = _ref29.state;
      window.appMain.$store.dispatch("notify", {
        //tofixe  
        group: 'app',
        title: window.appFoolter.trans('text.error'),
        type: 'error',
        text: window.appFoolter.trans('text.error-copying-text')
      });
    },
    toggelePlaylist: function toggelePlaylist(_ref30) {
      var state = _ref30.state;
      state.show_playlist = !state.show_playlist;
    },
    closePlaylist: function closePlaylist(_ref31) {
      var state = _ref31.state;
      state.show_playlist = false;
    },
    clearPlaylist: function clearPlaylist(_ref32) {
      var commit = _ref32.commit,
          dispatch = _ref32.dispatch;
      var source = {
        file: "empty",
        id: "",
        name: "",
        num: "",
        read_id: "",
        read_slug: "",
        reciter: "",
        share_description: "",
        share_title: "",
        share_url: "",
        sora_id: "",
        type: ""
      };
      commit("setSource", {
        source: source
      });
      commit("setPlaylist", {
        playlist: []
      });
      dispatch("stop");
    },
    shareItem: function shareItem(_ref33, title, url, description) {
      _objectDestructuringEmpty(_ref33);

      AppEvent.$emit("share", title, url, description);
    },
    addItemFavorite: function addItemFavorite(_ref34, _ref35) {
      _objectDestructuringEmpty(_ref34);

      var item = _ref35.item,
          type = _ref35.type;

      switch (type) {
        case 'sora':
          window.appMain.$store.dispatch("favorite/addSora", item);
          break;

        case 'radio':
          window.appMain.$store.dispatch("favorite/addRadio", item);
          break;
      }
    },
    removeItemFavorite: function removeItemFavorite(_ref36, _ref37) {
      _objectDestructuringEmpty(_ref36);

      var item = _ref37.item,
          type = _ref37.type;

      switch (type) {
        case 'sora':
          window.appMain.$store.dispatch("favorite/removeSora", item);
          break;

        case 'radio':
          window.appMain.$store.dispatch("favorite/removeRadio", item);
          break;
      }
    },
    downloadMp3: function downloadMp3(_ref38, item) {
      _objectDestructuringEmpty(_ref38);

      window.appMain.$store.dispatch("download/downloadMp3", item);
    },
    showFullplayer: function showFullplayer(_ref39) {
      var state = _ref39.state;
      state.show_fullplayer = true;
    },
    closeFullplayer: function closeFullplayer(_ref40) {
      var state = _ref40.state;
      state.show_fullplayer = false;
    }
  }
}));

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi ./resources/js/player/player.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wnmp\nginx-bins\default\www\mp3quran\resources\js\player\player.js */"./resources/js/player/player.js");


/***/ })

/******/ });