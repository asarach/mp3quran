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

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/dplayer/dist/DPlayer.min.js":
/*!**************************************************!*\
  !*** ./node_modules/dplayer/dist/DPlayer.min.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Buffer, setImmediate) {!function(n,e){ true?module.exports=e():undefined}(self,(()=>(()=>{var n={1916:(n,e,t)=>{var a=t(6877);n.exports=function(n){"use strict";var e,o="",r=(n=n||{}).video,i=n.options,l=a.$escape,s=n.tran,p=n.icons,d=n.index,A=a.$each;return n.$value,n.$index,o+='<div class="dplayer-mask"></div>\n<div class="dplayer-video-wrap">\n    ',e=t(1568)(r),o+=e,o+="\n    ",i.logo&&(o+='\n    <div class="dplayer-logo">\n        <img src="',o+=l(i.logo),o+='">\n    </div>\n    '),o+='\n    <div class="dplayer-danmaku"',i.danmaku&&i.danmaku.bottm&&(o+=' style="margin-bottom:',o+=l(i.danmaku.bottm),o+='"'),o+='>\n        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>\n    </div>\n    <div class="dplayer-subtitle"></div>\n    <div class="dplayer-bezel">\n        <span class="dplayer-bezel-icon"></span>\n        ',i.danmaku&&(o+='\n        <span class="dplayer-danloading">',o+=l(s("danmaku-loading")),o+="</span>\n        "),o+='\n        <span class="diplayer-loading-icon">',o+=p.loading,o+='</span>\n    </div>\n</div>\n<div class="dplayer-controller-mask"></div>\n<div class="dplayer-controller">\n    <div class="dplayer-icons dplayer-comment-box">\n        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="',o+=l(s("setting")),o+='" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',o+=p.pallette,o+='</span>\n        </button>\n        <div class="dplayer-comment-setting-box">\n            <div class="dplayer-comment-setting-color">\n                <div class="dplayer-comment-setting-title">',o+=l(s("set-danmaku-color")),o+='</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',o+=l(d),o+='" value="#fff" checked>\n                    <span style="background: #fff;"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',o+=l(d),o+='" value="#e54256">\n                    <span style="background: #e54256"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',o+=l(d),o+='" value="#ffe133">\n                    <span style="background: #ffe133"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',o+=l(d),o+='" value="#64DD17">\n                    <span style="background: #64DD17"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',o+=l(d),o+='" value="#39ccff">\n                    <span style="background: #39ccff"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-',o+=l(d),o+='" value="#D500F9">\n                    <span style="background: #D500F9"></span>\n                </label>\n            </div>\n            <div class="dplayer-comment-setting-type">\n                <div class="dplayer-comment-setting-title">',o+=l(s("set-danmaku-type")),o+='</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-',o+=l(d),o+='" value="1">\n                    <span>',o+=l(s("top")),o+='</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-',o+=l(d),o+='" value="0" checked>\n                    <span>',o+=l(s("rolling")),o+='</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-',o+=l(d),o+='" value="2">\n                    <span>',o+=l(s("bottom")),o+='</span>\n                </label>\n            </div>\n        </div>\n        <input class="dplayer-comment-input" type="text" placeholder="',o+=l(s("input-danmaku-enter")),o+='" maxlength="30">\n        <button class="dplayer-icon dplayer-send-icon" data-balloon="',o+=l(s("send")),o+='" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',o+=p.send,o+='</span>\n        </button>\n    </div>\n    <div class="dplayer-icons dplayer-icons-left">\n        <button class="dplayer-icon dplayer-play-icon">\n            <span class="dplayer-icon-content">',o+=p.play,o+='</span>\n        </button>\n        <div class="dplayer-volume">\n            <button class="dplayer-icon dplayer-volume-icon">\n                <span class="dplayer-icon-content">',o+=p.volumeDown,o+='</span>\n            </button>\n            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">\n                <div class="dplayer-volume-bar">\n                    <div class="dplayer-volume-bar-inner" style="background: ',o+=l(i.theme),o+=';">\n                        <span class="dplayer-thumb" style="background: ',o+=l(i.theme),o+='"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <span class="dplayer-time">\n            <span class="dplayer-ptime">0:00</span> /\n            <span class="dplayer-dtime">0:00</span>\n        </span>\n        ',i.live&&(o+='\n        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: ',o+=l(i.theme),o+=';"></span>',o+=l(s("live")),o+="</span>\n        "),o+='\n    </div>\n    <div class="dplayer-icons dplayer-icons-right">\n        ',i.video.quality&&(o+='\n        <div class="dplayer-quality">\n            <button class="dplayer-icon dplayer-quality-icon">',o+=l(i.video.quality[i.video.defaultQuality].name),o+='</button>\n            <div class="dplayer-quality-mask">\n                <div class="dplayer-quality-list">\n                ',A(i.video.quality,(function(n,e){o+='\n                    <div class="dplayer-quality-item" data-index="',o+=l(e),o+='">',o+=l(n.name),o+="</div>\n                "})),o+="\n                </div>\n            </div>\n        </div>\n        "),o+="\n        ",i.screenshot&&(o+='\n        <div class="dplayer-icon dplayer-camera-icon" data-balloon="',o+=l(s("screenshot")),o+='" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',o+=p.camera,o+="</span>\n        </div>\n        "),o+="\n        ",i.airplay&&(o+='\n        <div class="dplayer-icon dplayer-airplay-icon" data-balloon="',o+=l(s("airplay")),o+='" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',o+=p.airplay,o+="</span>\n        </div>\n        "),o+="\n        ",i.chromecast&&(o+='\n        <div class="dplayer-icon dplayer-chromecast-icon" data-balloon="',o+=l(s("chromecast")),o+='" data-balloon-pos="up">\n            <span class="dplayer-icon-content">',o+=p.chromecast,o+="</span>\n        </div>\n        "),o+='\n        <div class="dplayer-comment">\n            <button class="dplayer-icon dplayer-comment-icon" data-balloon="',o+=l(s("send-danmaku")),o+='" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',o+=p.comment,o+="</span>\n            </button>\n        </div>\n        ",i.subtitle&&(o+="\n        ","string"==typeof i.subtitle.url?(o+='\n        <div class="dplayer-subtitle-btn">\n            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="',o+=l(s("hide-subs")),o+='" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',o+=p.subtitle,o+="</span>\n            </button>\n        </div>\n        "):(o+='\n        <div class="dplayer-subtitles">\n            <button class="dplayer-icon dplayer-subtitles-icon" data-balloon="',o+=l(s("subtitle")),o+='" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',o+=p.subtitle,o+='</span>\n            </button>\n            <div class="dplayer-subtitles-box">\n                <div class="dplayer-subtitles-panel">\n                    ',A(i.subtitle.url,(function(n,e){o+='\n                        <div class="dplayer-subtitles-item" data-subtitle="',o+=l(n.url),o+='">\n                            \x3c!-- if lang, show tran(lang). if lang and name, show name + (tran(lang)). if name, show name. off option use lang for translation. --\x3e\n                            <span class="dplayer-label">',o+=l(n.lang?n.name?n.name+" ("+s(n.lang)+")":s(n.lang):n.name),o+="</span>\n                        </div>\n                    "})),o+="\n                </div>\n            </div>\n        </div>\n        "),o+="\n        "),o+='\n        <div class="dplayer-setting">\n            <button class="dplayer-icon dplayer-setting-icon" data-balloon="',o+=l(s("setting")),o+='" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',o+=p.setting,o+='</span>\n            </button>\n            <div class="dplayer-setting-box">\n                <div class="dplayer-setting-origin-panel">\n                    <div class="dplayer-setting-item dplayer-setting-speed">\n                        <span class="dplayer-label">',o+=l(s("speed")),o+='</span>\n                        <div class="dplayer-toggle">',o+=p.right,o+='</div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-loop">\n                        <span class="dplayer-label">',o+=l(s("loop")),o+='</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">\n                            <label for="dplayer-toggle"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-showdan">\n                        <span class="dplayer-label">',o+=l(s("show-danmaku")),o+='</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">\n                            <label for="dplayer-toggle-dan"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danunlimit">\n                        <span class="dplayer-label">',o+=l(s("unlimited-danmaku")),o+='</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">\n                            <label for="dplayer-toggle-danunlimit"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danmaku">\n                        <span class="dplayer-label">',o+=l(s("opacity-danmaku")),o+='</span>\n                        <div class="dplayer-danmaku-bar-wrap">\n                            <div class="dplayer-danmaku-bar">\n                                <div class="dplayer-danmaku-bar-inner">\n                                    <span class="dplayer-thumb"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="dplayer-setting-speed-panel">\n                    ',A(i.playbackSpeed,(function(n,e){o+='\n                        <div class="dplayer-setting-speed-item" data-speed="',o+=l(n),o+='">\n                            <span class="dplayer-label">',o+=l(1===n?s("normal"):n),o+="</span>\n                        </div>\n                    "})),o+='\n                </div>\n            </div>\n        </div>\n        <div class="dplayer-full">\n            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="',o+=l(s("web-fullscreen")),o+='" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',o+=p.fullWeb,o+='</span>\n            </button>\n            <button class="dplayer-icon dplayer-full-icon" data-balloon="',o+=l(s("fullscreen")),o+='" data-balloon-pos="up">\n                <span class="dplayer-icon-content">',o+=p.full,o+='</span>\n            </button>\n        </div>\n    </div>\n    <div class="dplayer-bar-wrap">\n        <div class="dplayer-bar-time hidden">00:00</div>\n        <div class="dplayer-bar-preview"></div>\n        <div class="dplayer-bar">\n            <div class="dplayer-loaded" style="width: 0;"></div>\n            <div class="dplayer-played" style="width: 0; background: ',o+=l(i.theme),o+='">\n                <span class="dplayer-thumb" style="background: ',o+=l(i.theme),o+='"></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="dplayer-info-panel dplayer-info-panel-hide">\n    <div class="dplayer-info-panel-close">[x]</div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">\n        <span class="dplayer-info-panel-item-title">Player version</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">\n        <span class="dplayer-info-panel-item-title">Player FPS</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">\n        <span class="dplayer-info-panel-item-title">Video type</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">\n        <span class="dplayer-info-panel-item-title">Video url</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">\n        <span class="dplayer-info-panel-item-title">Video resolution</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">\n        <span class="dplayer-info-panel-item-title">Video duration</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    ',i.danmaku&&(o+='\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">\n        <span class="dplayer-info-panel-item-title">Danmaku id</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">\n        <span class="dplayer-info-panel-item-title">Danmaku api</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">\n        <span class="dplayer-info-panel-item-title">Danmaku amount</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    '),o+='\n</div>\n<div class="dplayer-menu">\n    ',A(i.contextmenu,(function(n,e){o+='\n        <div class="dplayer-menu-item">\n            <a',n.link&&(o+=' target="_blank"'),o+=' href="',o+=l(n.link||"javascript:void(0);"),o+='">',n.key&&(o+=" ",o+=l(s(n.key))),n.text&&(o+=" ",o+=l(n.text)),o+="</a>\n        </div>\n    "})),o+='\n</div>\n<div class="dplayer-notice-list"></div>\n<button class="dplayer-mobile-play">\n    ',o+=p.play,o+="\n</button>"}},1568:(n,e,t)=>{var a=t(6877);n.exports=function(n){"use strict";var e="",t=(n=n||{}).enableSubtitle,o=n.subtitle,r=n.current,i=n.airplay,l=n.pic,s=a.$escape,p=n.screenshot,d=n.preload,A=n.url;return t=o&&"webvtt"===o.type,e+='\n<video\n    class="dplayer-video ',r&&(e+="dplayer-video-current"),e+='"\n    webkit-playsinline\n    ',i&&(e+=' x-webkit-airplay="allow" '),e+="\n    playsinline\n    ",l&&(e+='poster="',e+=s(l),e+='"'),e+="\n    ",(p||t)&&(e+='crossorigin="anonymous"'),e+="\n    ",d&&(e+='preload="',e+=s(d),e+='"'),e+="\n    ",i?e+="\n    nosrc\n    ":A&&(e+='\n    src="',e+=s(A),e+='"\n    '),e+="\n    >\n    ",i&&(e+='\n    <source src="',e+=s(A),e+='">\n    '),e+="\n    ",t&&(e+='\n    <track class="dplayer-subtrack" kind="metadata" default src="',e+=s("string"==typeof o.url?o.url:o.url[o.index].url),e+='"></track>\n    '),e+"\n</video>"}},3399:(n,e,t)=>{"use strict";t.d(e,{Z:()=>l});var a=t(8955),o=t.n(a),r=t(8160),i=t.n(r)()(o());i.push([n.id,':root {\n  --balloon-border-radius: 2px;\n  --balloon-color: rgba(16, 16, 16, 0.95);\n  --balloon-text-color: #fff;\n  --balloon-font-size: 12px;\n  --balloon-move: 4px; }\n\nbutton[aria-label][data-balloon-pos] {\n  overflow: visible; }\n\n[aria-label][data-balloon-pos] {\n  position: relative;\n  cursor: pointer; }\n  [aria-label][data-balloon-pos]:after {\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    text-indent: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    text-shadow: none;\n    font-size: 12px;\n    font-size: var(--balloon-font-size);\n    background: rgba(16, 16, 16, 0.95);\n    background: var(--balloon-color);\n    border-radius: 2px;\n    color: #fff;\n    color: var(--balloon-text-color);\n    border-radius: 2px;\n    border-radius: var(--balloon-border-radius);\n    content: attr(aria-label);\n    padding: .5em 1em;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-top-color: rgba(16, 16, 16, 0.95);\n    border-top-color: var(--balloon-color);\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    content: "";\n    position: absolute;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {\n    opacity: 1;\n    pointer-events: none; }\n  [aria-label][data-balloon-pos].font-awesome:after {\n    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif; }\n  [aria-label][data-balloon-pos][data-balloon-break]:after {\n    white-space: pre; }\n  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {\n    white-space: pre-line;\n    word-break: break-word; }\n  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {\n    transition: none; }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {\n    left: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {\n    left: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {\n    right: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {\n    right: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {\n    bottom: 100%;\n    transform-origin: top;\n    transform: translate(0, 4px);\n    transform: translate(0, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {\n    margin-bottom: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {\n    left: 50%;\n    transform: translate(-50%, 4px);\n    transform: translate(-50%, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {\n    top: 100%;\n    transform: translate(0, calc(4px * -1));\n    transform: translate(0, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {\n    margin-top: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-bottom-color: rgba(16, 16, 16, 0.95);\n    border-bottom-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {\n    left: 50%;\n    transform: translate(-50%, calc(4px * -1));\n    transform: translate(-50%, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {\n    right: 100%;\n    top: 50%;\n    transform: translate(4px, -50%);\n    transform: translate(var(--balloon-move), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {\n    margin-right: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-left-color: rgba(16, 16, 16, 0.95);\n    border-left-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {\n    left: 100%;\n    top: 50%;\n    transform: translate(calc(4px * -1), -50%);\n    transform: translate(calc(var(--balloon-move) * -1), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {\n    margin-left: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-right-color: rgba(16, 16, 16, 0.95);\n    border-right-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-length]:after {\n    white-space: normal; }\n  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {\n    width: 80px; }\n  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {\n    width: 150px; }\n  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {\n    width: 260px; }\n  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {\n    width: 380px; }\n    @media screen and (max-width: 768px) {\n      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {\n        width: 90vw; } }\n  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {\n    width: 100%; }\n',"",{version:3,sources:["webpack://./node_modules/.pnpm/balloon-css@1.2.0/node_modules/balloon-css/balloon.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE;;AAErB;EACE,kBAAkB;EAClB,eAAe,EAAE;EACjB;IACE,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,cAAc;IACd,wIAAwI;IACxI,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAmC;IAAnC,mCAAmC;IACnC,kCAAgC;IAAhC,gCAAgC;IAChC,kBAAkB;IAClB,WAAgC;IAAhC,gCAAgC;IAChC,kBAA2C;IAA3C,2CAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,WAAW,EAAE;EACf;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,wCAAsC;IAAtC,sCAAsC;IACtC,UAAU;IACV,oBAAoB;IACpB,oCAAoC;IACpC,WAAW;IACX,kBAAkB;IAClB,WAAW,EAAE;EACf;IACE,UAAU;IACV,oBAAoB,EAAE;EACxB;IACE,qJAAqJ,EAAE;EACzJ;IACE,gBAAgB,EAAE;EACpB;IACE,qBAAqB;IACrB,sBAAsB,EAAE;EAC1B;IACE,gBAAgB,EAAE;EACpB;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,OAAO,EAAE;EACX;IACE,SAAS,EAAE;EACb;IACE,QAAQ,EAAE;EACZ;IACE,UAAU,EAAE;EACd;IACE,0BAA0B,EAAE;EAC9B;IACE,0BAA0B,EAAE;EAC9B;IACE,YAAY;IACZ,qBAAqB;IACrB,4BAA4C;IAA5C,4CAA4C,EAAE;EAChD;IACE,mBAAmB,EAAE;EACvB;IACE,SAAS;IACT,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,SAAS;IACT,uCAAuD;IAAvD,uDAAuD,EAAE;EAC3D;IACE,gBAAgB,EAAE;EACpB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,2CAAyC;IAAzC,yCAAyC,EAAE;EAC7C;IACE,SAAS;IACT,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,6BAA6B,EAAE;EACjC;IACE,6BAA6B,EAAE;EACjC;IACE,WAAW;IACX,QAAQ;IACR,+BAA+C;IAA/C,+CAA+C,EAAE;EACnD;IACE,kBAAkB,EAAE;EACtB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,yCAAuC;IAAvC,uCAAuC,EAAE;EAC3C;IACE,UAAU;IACV,QAAQ;IACR,0CAA0D;IAA1D,0DAA0D,EAAE;EAC9D;IACE,iBAAiB,EAAE;EACrB;IACE,QAAQ;IACR,SAAS;IACT,6BAA6B;IAC7B,0CAAwC;IAAxC,wCAAwC,EAAE;EAC5C;IACE,mBAAmB,EAAE;EACvB;IACE,WAAW,EAAE;EACf;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;EAChB;IACE,YAAY,EAAE;IACd;MACE;QACE,WAAW,EAAE,EAAE;EACrB;IACE,WAAW,EAAE",sourcesContent:[':root {\n  --balloon-border-radius: 2px;\n  --balloon-color: rgba(16, 16, 16, 0.95);\n  --balloon-text-color: #fff;\n  --balloon-font-size: 12px;\n  --balloon-move: 4px; }\n\nbutton[aria-label][data-balloon-pos] {\n  overflow: visible; }\n\n[aria-label][data-balloon-pos] {\n  position: relative;\n  cursor: pointer; }\n  [aria-label][data-balloon-pos]:after {\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    text-indent: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n    font-weight: normal;\n    font-style: normal;\n    text-shadow: none;\n    font-size: var(--balloon-font-size);\n    background: var(--balloon-color);\n    border-radius: 2px;\n    color: var(--balloon-text-color);\n    border-radius: var(--balloon-border-radius);\n    content: attr(aria-label);\n    padding: .5em 1em;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-top-color: var(--balloon-color);\n    opacity: 0;\n    pointer-events: none;\n    transition: all 0.18s ease-out 0.18s;\n    content: "";\n    position: absolute;\n    z-index: 10; }\n  [aria-label][data-balloon-pos]:hover:before, [aria-label][data-balloon-pos]:hover:after, [aria-label][data-balloon-pos][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-visible]:after, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before, [aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after {\n    opacity: 1;\n    pointer-events: none; }\n  [aria-label][data-balloon-pos].font-awesome:after {\n    font-family: FontAwesome, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif; }\n  [aria-label][data-balloon-pos][data-balloon-break]:after {\n    white-space: pre; }\n  [aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after {\n    white-space: pre-line;\n    word-break: break-word; }\n  [aria-label][data-balloon-pos][data-balloon-blunt]:before, [aria-label][data-balloon-pos][data-balloon-blunt]:after {\n    transition: none; }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:after {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="up"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="down"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="down"][data-balloon-visible]:before {\n    transform: translate(-50%, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:after {\n    left: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-left"]:before {\n    left: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:after {\n    right: 0; }\n  [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:before {\n    right: 5px; }\n  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:after {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-po*="-left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-po*="-left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos*="-right"][data-balloon-visible]:before {\n    transform: translate(0, 0); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {\n    bottom: 100%;\n    transform-origin: top;\n    transform: translate(0, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="up"]:after {\n    margin-bottom: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="up"]:before, [aria-label][data-balloon-pos][data-balloon-pos="up"]:after {\n    left: 50%;\n    transform: translate(-50%, var(--balloon-move)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before, [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {\n    top: 100%;\n    transform: translate(0, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:after {\n    margin-top: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos^="down"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-bottom-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos="down"]:after, [aria-label][data-balloon-pos][data-balloon-pos="down"]:before {\n    left: 50%;\n    transform: translate(-50%, calc(var(--balloon-move) * -1)); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:after, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:after {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="left"][data-balloon-visible]:before, [aria-label][data-balloon-pos][data-balloon-pos="right"]:hover:before, [aria-label][data-balloon-pos][data-balloon-pos="right"][data-balloon-visible]:before {\n    transform: translate(0, -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after, [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {\n    right: 100%;\n    top: 50%;\n    transform: translate(var(--balloon-move), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:after {\n    margin-right: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="left"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-left-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after, [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {\n    left: 100%;\n    top: 50%;\n    transform: translate(calc(var(--balloon-move) * -1), -50%); }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:after {\n    margin-left: 10px; }\n  [aria-label][data-balloon-pos][data-balloon-pos="right"]:before {\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n    border-right-color: var(--balloon-color); }\n  [aria-label][data-balloon-pos][data-balloon-length]:after {\n    white-space: normal; }\n  [aria-label][data-balloon-pos][data-balloon-length="small"]:after {\n    width: 80px; }\n  [aria-label][data-balloon-pos][data-balloon-length="medium"]:after {\n    width: 150px; }\n  [aria-label][data-balloon-pos][data-balloon-length="large"]:after {\n    width: 260px; }\n  [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {\n    width: 380px; }\n    @media screen and (max-width: 768px) {\n      [aria-label][data-balloon-pos][data-balloon-length="xlarge"]:after {\n        width: 90vw; } }\n  [aria-label][data-balloon-pos][data-balloon-length="fit"]:after {\n    width: 100%; }\n'],sourceRoot:""}]);const l=i},3150:(n,e,t)=>{"use strict";t.d(e,{Z:()=>u});var a=t(8955),o=t.n(a),r=t(8160),i=t.n(r),l=t(3399),s=t(8431),p=t.n(s),d=new URL(t(7831),t.b),A=i()(o());A.i(l.Z);var c=p()(d);A.push([n.id,'@-webkit-keyframes my-face {\n  2% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  4% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  6% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  8% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  10% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  12% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  14% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  16% {\n    transform: translate(0, -0.5px) rotate(-1.5deg);\n  }\n  18% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  20% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  22% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  24% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  26% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  28% {\n    transform: translate(0, 0.5px) rotate(1.5deg);\n  }\n  30% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  32% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  34% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  36% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  38% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  40% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  42% {\n    transform: translate(0, 2.5px) rotate(-1.5deg);\n  }\n  44% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  46% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  48% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  50% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  52% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  54% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  56% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  58% {\n    transform: translate(0, 0.5px) rotate(2.5deg);\n  }\n  60% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  62% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  64% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  66% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  68% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  70% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  72% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  74% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  76% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  78% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  80% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  82% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  84% {\n    transform: translate(0, 1.5px) rotate(2.5deg);\n  }\n  86% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  88% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  90% {\n    transform: translate(0, 2.5px) rotate(-0.5deg);\n  }\n  92% {\n    transform: translate(0, 0.5px) rotate(-0.5deg);\n  }\n  94% {\n    transform: translate(0, 2.5px) rotate(0.5deg);\n  }\n  96% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  98% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  0%,\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n@keyframes my-face {\n  2% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  4% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  6% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  8% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  10% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  12% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  14% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  16% {\n    transform: translate(0, -0.5px) rotate(-1.5deg);\n  }\n  18% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  20% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  22% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  24% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  26% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  28% {\n    transform: translate(0, 0.5px) rotate(1.5deg);\n  }\n  30% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  32% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  34% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  36% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  38% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  40% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  42% {\n    transform: translate(0, 2.5px) rotate(-1.5deg);\n  }\n  44% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  46% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  48% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  50% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  52% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  54% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  56% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  58% {\n    transform: translate(0, 0.5px) rotate(2.5deg);\n  }\n  60% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  62% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  64% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  66% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  68% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  70% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  72% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  74% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  76% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  78% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  80% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  82% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  84% {\n    transform: translate(0, 1.5px) rotate(2.5deg);\n  }\n  86% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  88% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  90% {\n    transform: translate(0, 2.5px) rotate(-0.5deg);\n  }\n  92% {\n    transform: translate(0, 0.5px) rotate(-0.5deg);\n  }\n  94% {\n    transform: translate(0, 2.5px) rotate(0.5deg);\n  }\n  96% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  98% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  0%,\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n.dplayer {\n  position: relative;\n  overflow: hidden;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  line-height: 1;\n}\n.dplayer * {\n  box-sizing: content-box;\n}\n.dplayer svg {\n  width: 100%;\n  height: 100%;\n}\n.dplayer svg path,\n.dplayer svg circle {\n  fill: #fff;\n}\n.dplayer:-webkit-full-screen {\n  width: 100%;\n  height: 100%;\n  background: #000;\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  transform: translate(0, 0);\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-danmaku {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-time {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-bar-wrap {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-speed {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-loop {\n  display: none;\n}\n.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {\n  display: none;\n}\n.dplayer.dplayer-arrow .dplayer-danmaku {\n  font-size: 18px;\n}\n.dplayer.dplayer-arrow .dplayer-icon {\n  margin: 0 -3px;\n}\n.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n@media (min-width: 900px) {\n  .dplayer.dplayer-playing .dplayer-controller-mask {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing .dplayer-controller {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller-mask {\n    opacity: 1;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller {\n    opacity: 1;\n  }\n}\n.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {\n  display: block;\n}\n.dplayer.dplayer-loading .dplayer-danmaku,\n.dplayer.dplayer-paused .dplayer-danmaku,\n.dplayer.dplayer-loading .dplayer-danmaku-move,\n.dplayer.dplayer-paused .dplayer-danmaku-move {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.dplayer.dplayer-hide-controller {\n  cursor: none;\n}\n.dplayer.dplayer-hide-controller .dplayer-controller-mask {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-hide-controller .dplayer-controller {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-show-controller .dplayer-controller-mask {\n  opacity: 1;\n}\n.dplayer.dplayer-show-controller .dplayer-controller {\n  opacity: 1;\n}\n.dplayer.dplayer-fulled {\n  width: 100% !important;\n  height: 100% !important;\n}\n.dplayer.dplayer-fulled {\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: static;\n  display: inline-block;\n}\n.dplayer.dplayer-mobile .dplayer-bar-time {\n  display: none;\n}\n.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-mobile-play {\n  display: block;\n}\n.dplayer-web-fullscreen-fix {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n}\n[data-balloon]:before {\n  display: none;\n}\n[data-balloon]:after {\n  padding: 0.3em 0.7em;\n  background: rgba(17, 17, 17, 0.7);\n}\n[data-balloon][data-balloon-pos="up"]:after {\n  margin-bottom: 0;\n}\n.dplayer-bezel {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -26px 0 0 -26px;\n  height: 52px;\n  width: 52px;\n  padding: 12px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {\n  -webkit-animation: bezel-hide 0.5s linear;\n          animation: bezel-hide 0.5s linear;\n}\n@-webkit-keyframes bezel-hide {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n@keyframes bezel-hide {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n.dplayer-bezel .dplayer-danloading {\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 14px;\n  -webkit-animation: my-face 5s infinite ease-in-out;\n          animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-bezel .diplayer-loading-icon {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -18px 0 0 -18px;\n  height: 36px;\n  width: 36px;\n  pointer-events: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {\n  display: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {\n  -webkit-animation: diplayer-loading-dot-fade 0.8s ease infinite;\n          animation: diplayer-loading-dot-fade 0.8s ease infinite;\n  opacity: 0;\n  transform-origin: 4px 4px;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s;\n}\n@-webkit-keyframes diplayer-loading-dot-fade {\n  0% {\n    opacity: 0.7;\n    transform: scale(1.2, 1.2);\n  }\n  50% {\n    opacity: 0.25;\n    transform: scale(0.9, 0.9);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.85, 0.85);\n  }\n}\n@keyframes diplayer-loading-dot-fade {\n  0% {\n    opacity: 0.7;\n    transform: scale(1.2, 1.2);\n  }\n  50% {\n    opacity: 0.25;\n    transform: scale(0.9, 0.9);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.85, 0.85);\n  }\n}\n.dplayer-controller-mask {\n  background: url('+c+") repeat-x bottom;\n  height: 98px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  transition: all 0.3s ease;\n}\n.dplayer-controller {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 41px;\n  padding: 0 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  transition: all 0.3s ease;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons {\n  display: none;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap {\n  padding: 5px 0;\n  cursor: pointer;\n  position: absolute;\n  bottom: 33px;\n  width: calc(100% - 40px);\n  height: 3px;\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {\n  display: block;\n  width: 8px;\n  transform: translateX(-4px);\n  top: 4px;\n  height: 40%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {\n  z-index: 12;\n  position: absolute;\n  top: 5px;\n  width: 6px;\n  height: 20%;\n  border-radius: 6px;\n  background-color: #fff;\n  text-align: center;\n  transform: translateX(-3px);\n  transition: all 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -24px;\n  padding: 5px 8px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  border-radius: 4px;\n  font-size: 12px;\n  white-space: nowrap;\n  transform: translateX(-50%);\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {\n  position: absolute;\n  background: #fff;\n  pointer-events: none;\n  display: none;\n  background-size: 16000px 100%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {\n  position: absolute;\n  left: 0px;\n  top: -20px;\n  border-radius: 4px;\n  padding: 5px 7px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n  word-wrap: normal;\n  word-break: normal;\n  z-index: 2;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar {\n  position: relative;\n  height: 3px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4);\n  height: 3px;\n  transition: all 0.5s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 3px;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons {\n  height: 38px;\n  position: absolute;\n  bottom: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box {\n  display: none;\n  position: absolute;\n  transition: all 0.3s ease-in-out;\n  z-index: 2;\n  height: 38px;\n  bottom: 0;\n  left: 20px;\n  right: 20px;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {\n  position: absolute;\n  background: rgba(28, 28, 28, 0.9);\n  bottom: 41px;\n  left: 0;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  padding: 10px 10px 16px;\n  font-size: 14px;\n  width: 204px;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {\n  font-size: 13px;\n  color: #fff;\n  line-height: 30px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {\n  margin-bottom: 6px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {\n  border-radius: 4px 0 0 4px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {\n  border-radius: 0 4px 4px 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {\n  width: 33%;\n  padding: 4px 6px;\n  line-height: 16px;\n  display: inline-block;\n  font-size: 12px;\n  color: #fff;\n  border: 1px solid #fff;\n  margin-right: -1px;\n  box-sizing: border-box;\n  text-align: center;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {\n  background: #E4E4E6;\n  color: #1c1c1c;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {\n  font-size: 0;\n  padding: 6px;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {\n  width: 22px;\n  height: 22px;\n  display: inline-block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {\n  -webkit-animation: my-face 5s infinite ease-in-out;\n          animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {\n  outline: none;\n  border: none;\n  padding: 8px 31px;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  background: none;\n  margin: 0;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100%;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder {\n  color: #fff;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {\n  color: #fff;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right {\n  right: 20px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {\n  padding: 8px;\n}\n.dplayer-controller .dplayer-icons .dplayer-time,\n.dplayer-controller .dplayer-icons .dplayer-live-badge {\n  line-height: 38px;\n  color: #eee;\n  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n  vertical-align: middle;\n  font-size: 13px;\n  cursor: default;\n}\n.dplayer-controller .dplayer-icons .dplayer-live-dot {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  vertical-align: 4%;\n  margin-right: 5px;\n  content: '';\n  border-radius: 6px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon {\n  width: 40px;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  vertical-align: middle;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {\n  transition: all 0.2s ease-in-out;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {\n  opacity: 1;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {\n  color: #fff;\n  width: auto;\n  line-height: 22px;\n  font-size: 14px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {\n  padding: 10px 9px 9px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {\n  padding-top: 8.5px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {\n  width: 43px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {\n  display: inline-block;\n  margin: 0 10px 0 -5px;\n  vertical-align: middle;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  position: relative;\n  top: 17px;\n  width: 0;\n  height: 3px;\n  background: #aaa;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 240px;\n  min-width: 120px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: auto;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: 150px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {\n  width: 70px;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {\n  padding: 5px 0;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {\n  padding: 0 10px;\n  display: inline;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {\n  padding: 0 10px;\n  box-sizing: border-box;\n  display: none;\n  vertical-align: middle;\n  height: 100%;\n  width: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {\n  position: relative;\n  top: 8.5px;\n  width: 100%;\n  height: 3px;\n  background: #fff;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  background: #aaa;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  background: #aaa;\n}\n.dplayer-controller .dplayer-icons .dplayer-full {\n  display: inline-block;\n  height: 100%;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: absolute;\n  top: -30px;\n  z-index: 1;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality {\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {\n  display: none;\n  position: absolute;\n  bottom: 38px;\n  left: -18px;\n  width: 80px;\n  padding-bottom: 12px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {\n  display: none;\n  font-size: 12px;\n  width: 80px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 5px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {\n  height: 25px;\n  box-sizing: border-box;\n  cursor: pointer;\n  line-height: 25px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-comment {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-label {\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle {\n  width: 32px;\n  height: 20px;\n  text-align: center;\n  font-size: 0;\n  vertical-align: middle;\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input {\n  max-height: 0;\n  max-width: 0;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label {\n  display: inline-block;\n  position: relative;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border: 1px solid #dfdfdf;\n  height: 20px;\n  width: 32px;\n  border-radius: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 18px;\n  width: 18px;\n  top: 0;\n  left: 0;\n  border-radius: 15px;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  border-radius: 15px;\n  background: #fff;\n  transition: 0.2s ease-in-out;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  height: 18px;\n  width: 18px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {\n  width: 30px;\n  background: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {\n  left: 12px;\n}\n.dplayer-mobile-play {\n  display: none;\n  width: 50px;\n  height: 50px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  bottom: 0;\n  opacity: 0.8;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.dplayer-danmaku {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n}\n.dplayer-danmaku .dplayer-danmaku-item {\n  display: inline-block;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  cursor: default;\n  white-space: nowrap;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n}\n.dplayer-danmaku .dplayer-danmaku-item--demo {\n  position: absolute;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-right {\n  position: absolute;\n  right: 0;\n  transform: translateX(100%);\n}\n.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {\n  will-change: transform;\n  -webkit-animation-name: 'danmaku';\n          animation-name: 'danmaku';\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n@-webkit-keyframes danmaku {\n  from {\n    transform: translateX(100%);\n  }\n}\n@keyframes danmaku {\n  from {\n    transform: translateX(100%);\n  }\n}\n.dplayer-danmaku .dplayer-danmaku-top,\n.dplayer-danmaku .dplayer-danmaku-bottom {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,\n.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {\n  will-change: visibility;\n  -webkit-animation-name: 'danmaku-center';\n          animation-name: 'danmaku-center';\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n@-webkit-keyframes danmaku-center {\n  from {\n    visibility: visible;\n  }\n  to {\n    visibility: visible;\n  }\n}\n@keyframes danmaku-center {\n  from {\n    visibility: visible;\n  }\n  to {\n    visibility: visible;\n  }\n}\n.dplayer-logo {\n  pointer-events: none;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  max-width: 50px;\n  max-height: 50px;\n}\n.dplayer-logo img {\n  max-width: 100%;\n  max-height: 100%;\n  background: none;\n}\n.dplayer-menu {\n  position: absolute;\n  width: 170px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.85);\n  padding: 5px 0;\n  overflow: hidden;\n  z-index: 3;\n  display: none;\n}\n.dplayer-menu.dplayer-menu-show {\n  display: block;\n}\n.dplayer-menu .dplayer-menu-item {\n  height: 30px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-menu .dplayer-menu-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-menu .dplayer-menu-item a {\n  padding: 0 10px;\n  line-height: 30px;\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  box-sizing: border-box;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-menu .dplayer-menu-item a:hover {\n  text-decoration: none;\n}\n.dplayer-notice-list {\n  position: absolute;\n  bottom: 60px;\n  left: 20px;\n}\n.dplayer-notice-list .dplayer-notice {\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  display: table;\n  pointer-events: none;\n  -webkit-animation: showNotice 0.3s ease 1 forwards;\n          animation: showNotice 0.3s ease 1 forwards;\n}\n.dplayer-notice-list .remove-notice {\n  -webkit-animation: removeNotice 0.3s ease 1 forwards;\n          animation: removeNotice 0.3s ease 1 forwards;\n}\n@-webkit-keyframes showNotice {\n  from {\n    padding: 0;\n    font-size: 0;\n    margin-top: 0;\n  }\n  to {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n}\n@keyframes showNotice {\n  from {\n    padding: 0;\n    font-size: 0;\n    margin-top: 0;\n  }\n  to {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n}\n@-webkit-keyframes removeNotice {\n  0% {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n  20% {\n    font-size: 12px;\n  }\n  21% {\n    font-size: 0;\n    padding: 7px 10px;\n  }\n  100% {\n    padding: 0;\n    margin-top: 0;\n    font-size: 0;\n  }\n}\n@keyframes removeNotice {\n  0% {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n  20% {\n    font-size: 12px;\n  }\n  21% {\n    font-size: 0;\n    padding: 7px 10px;\n  }\n  100% {\n    padding: 0;\n    margin-top: 0;\n    font-size: 0;\n  }\n}\n.dplayer-subtitle {\n  position: absolute;\n  bottom: 40px;\n  width: 90%;\n  left: 5%;\n  text-align: center;\n  color: #fff;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n}\n.dplayer-subtitle.dplayer-subtitle-hide {\n  display: none;\n}\n.dplayer-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  display: none;\n}\n.dplayer-mask.dplayer-mask-show {\n  display: block;\n}\n.dplayer-video-wrap {\n  position: relative;\n  background: #000;\n  font-size: 0;\n  width: 100%;\n  height: 100%;\n}\n.dplayer-video-wrap .dplayer-video {\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n.dplayer-video-wrap .dplayer-video-current {\n  display: block;\n}\n.dplayer-video-wrap .dplayer-video-prepare {\n  display: none;\n}\n.dplayer-info-panel {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 400px;\n  background: rgba(28, 28, 28, 0.8);\n  padding: 10px;\n  color: #fff;\n  font-size: 12px;\n  border-radius: 2px;\n}\n.dplayer-info-panel-hide {\n  display: none;\n}\n.dplayer-info-panel .dplayer-info-panel-close {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item > span {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-info-panel .dplayer-info-panel-item-title {\n  width: 100px;\n  text-align: right;\n  margin-right: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item-data {\n  width: 260px;\n}\n","",{version:3,sources:["webpack://./src/css/global.less","webpack://./src/css/index.less","webpack://./src/css/player.less","webpack://./src/css/balloon.less","webpack://./src/css/bezel.less","webpack://./src/css/video.less","webpack://./src/css/controller.less","webpack://./src/css/danmaku.less","webpack://./src/css/logo.less","webpack://./src/css/menu.less","webpack://./src/css/notice.less","webpack://./src/css/subtitle.less","webpack://./src/css/info-panel.less"],names:[],mappings:"AAAA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ADzJA;EACI;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,6CAAA;ECEN;EDAE;IACI,8CAAA;ECEN;EDAE;IACI,+CAAA;ECEN;EDAE;;IAEI,uCAAA;ECEN;AACF;ACzJA;EACI,kBAAA;EACA,gBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,cAAA;AD2JJ;AC/JA;EAOQ,uBAAA;AD2JR;AClKA;EAWQ,WAAA;EACA,YAAA;AD0JR;ACtKA;;EAgBY,UAAA;AD0JZ;ACtJI;EACI,WAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,UAAA;EACA,0BAAA;ADwJR;ACpJI;;;EAKY,aAAA;ADoJhB;ACzJI;EAUQ,aAAA;ADkJZ;AC5JI;EAcQ,aAAA;ADiJZ;AC7II;EAEQ,aAAA;AD8IZ;AChJI;EAKQ,aAAA;AD8IZ;ACnJI;EAQQ,aAAA;AD8IZ;ACtJI;EAWQ,aAAA;AD8IZ;AC3IQ;EAEQ,aAAA;AD4IhB;ACvII;EAEQ,eAAA;ADwIZ;AC1II;EAKQ,cAAA;ADwIZ;ACpII;EAEQ,qCAAA;UAAA,6BAAA;ADqIZ;AClIQ;EAAA;IAEQ,UAAA;EDoId;ECtIM;IAKQ,UAAA;EDoId;ECjIU;IAEQ,UAAA;EDkIlB;ECpIU;IAKQ,UAAA;EDkIlB;AACF;AC7HI;EAEQ,cAAA;AD8HZ;AC1HI;;;;EAIQ,oCAAA;UAAA,4BAAA;AD4HZ;ACxHI;EACI,YAAA;AD0HR;AC3HI;EAIQ,UAAA;EACA,2BAAA;AD0HZ;AC/HI;EAQQ,UAAA;EACA,2BAAA;AD0HZ;ACvHI;EAEQ,UAAA;ADwHZ;AC1HI;EAKQ,UAAA;ADwHZ;ACrHI;EAKI,sBAAA;EACA,uBAAA;ADuHR;AC7HI;EACI,eAAA;EACA,eAAA;EACA,OAAA;EACA,MAAA;ADyHR;ACrHI;;;;;EAOY,aAAA;ADqHhB;AC5HI;EAUY,gBAAA;EACA,qBAAA;ADqHhB;AChII;EAgBQ,aAAA;ADmHZ;AChHQ;EAEQ,aAAA;ADiHhB;ACtII;EA0BQ,cAAA;AD+GZ;ACzGA;EACI,eAAA;EACA,MAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;AD2GJ;AElSA;EACI,aAAA;AFoSJ;AEjSA;EACI,oBAAA;EACA,iCAAA;AFmSJ;AEhSA;EACI,gBAAA;AFkSJ;AG9SA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;EACA,oBAAA;AHgTJ;AGxTA;EAUQ,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AHiTR;AGhTQ;EACI,yCAAA;UAAA,iCAAA;AHkTZ;AGhTQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AG1TQ;EACI;IACI,UAAA;IACA,mBAAA;EHkTd;EGhTU;IACI,UAAA;IACA,mBAAA;EHkTd;AACF;AGnVA;EAqCQ,kBAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,kDAAA;UAAA,0CAAA;AHiTR;AG7VA;EA+CQ,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,uBAAA;EACA,YAAA;EACA,WAAA;EACA,oBAAA;AHiTR;AGvWA;EAwDY,aAAA;AHkTZ;AG1WA;EA2DY,+DAAA;UAAA,uDAAA;EACA,UAAA;EACA,yBAAA;AHkTZ;AI/WC;EDgEmB,6BAAA;UAAA,qBAAA;AHkTpB;AIlXC;EDgEmB,6BAAA;UAAA,qBAAA;AHqTpB;AIrXC;EDgEmB,6BAAA;UAAA,qBAAA;AHwTpB;AIxXC;EDgEmB,6BAAA;UAAA,qBAAA;AH2TpB;AI3XC;EDgEmB,6BAAA;UAAA,qBAAA;AH8TpB;AI9XC;EDgEmB,6BAAA;UAAA,qBAAA;AHiUpB;AIjYC;EDgEmB,6BAAA;UAAA,qBAAA;AHoUpB;AGhUQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AG9UQ;EACI;IACI,YAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,0BAAA;EHkUd;EGhUU;IACI,aAAA;IACA,4BAAA;EHkUd;AACF;AKlZA;EACI,mEAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,SAAA;EACA,yBAAA;ALoZJ;AKjZA;EACI,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,yBAAA;ALmZJ;AKlZI;EAEQ,aAAA;ALmZZ;AKrZI;EAKQ,cAAA;ALmZZ;AKjaA;EAkBQ,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,wBAAA;EACA,WAAA;ALkZR;AKjZQ;EAEQ,mBAAA;ALkZhB;AKpZQ;EAKQ,cAAA;EACA,UAAA;EACA,2BAAA;EACA,QAAA;EACA,WAAA;ALkZhB;AKnbA;EAqCY,WAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,2BAAA;EACA,gCAAA;ALiZZ;AKhZY;EAEQ,cAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AK/YgB;EACI,UAAA;ALiZpB;AKxcA;EA2DgB,aAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,2BAAA;ALgZhB;AKrdA;EAyEY,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,aAAA;EACA,6BAAA;AL+YZ;AK5dA;EAgFY,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,oBAAA;AL+YZ;AKneA;EA0FY,kBAAA;EACA,SAAA;EACA,UAAA;EACA,kBAAA;EACA,gBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;EACA,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,oBAAA;AL4YZ;AK7ZY;EACI,UAAA;AL+ZhB;AKvfA;EA2GY,kBAAA;EACA,WAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;AL+YZ;AK9fA;EAiHgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;ALgZhB;AKxgBA;EA2HgB,kBAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;ALgZhB;AKhhBA;EAkIoB,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALiZpB;AK7hBA;EAkJQ,YAAA;EACA,kBAAA;EACA,SAAA;AL8YR;AK7YQ;EACI,aAAA;EACA,kBAAA;EACA,gCAAA;EACA,UAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AL+YZ;AKxZQ;EAWQ,YAAA;ALgZhB;AK3ZQ;EAcQ,kBAAA;EACA,OAAA;EACA,MAAA;ALgZhB;AKhaQ;EAmBQ,kBAAA;EACA,QAAA;EACA,MAAA;ALgZhB;AKraQ;EAwBQ,kBAAA;EACA,iCAAA;EACA,YAAA;EACA,OAAA;EACA,uCAAA;EACA,kBAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gCAAA;EACA,mBAAA;ALgZhB;AK/YgB;EACI,mBAAA;ALiZpB;AKrbQ;EAuCY,aAAA;ALiZpB;AKxbQ;EA0CY,eAAA;ALiZpB;AK3bQ;EA6CY,eAAA;EACA,WAAA;EACA,iBAAA;ALiZpB;AKhcQ;EAkDY,YAAA;ALiZpB;AKncQ;EAoDgB,kBAAA;ALkZxB;AK/YwB;EAEQ,0BAAA;ALgZhC;AK7YwB;EAEQ,0BAAA;AL8YhC;AK5cQ;EAmEgB,UAAA;EACA,gBAAA;EACA,iBAAA;EACA,qBAAA;EACA,eAAA;EACA,WAAA;EACA,sBAAA;EACA,kBAAA;EACA,sBAAA;EACA,kBAAA;EACA,eAAA;AL4YxB;AKzdQ;EAgFgB,mBAAA;EACA,cAAA;AL4YxB;AK7dQ;EAqFY,YAAA;AL2YpB;AKheQ;EAuFgB,YAAA;EACA,YAAA;EACA,qBAAA;AL4YxB;AKreQ;EA4FgB,WAAA;EACA,YAAA;EACA,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,eAAA;AL4YxB;AK3YwB;EACI,kDAAA;UAAA,0CAAA;AL6Y5B;AKhfQ;EAyGQ,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;EACA,YAAA;EACA,sBAAA;EACA,WAAA;EACA,WAAA;AL0YhB;AKzYgB;EACI,WAAA;EACA,YAAA;AL2YpB;AK7YgB;EACI,WAAA;EACA,YAAA;AL2YpB;AKzYgB;EACI,aAAA;AL2YpB;AKvYQ;EAEQ,YAAA;ALwYhB;AKrYQ;EACI,WAAA;ALuYZ;AKxYQ;EAGQ,YAAA;ALwYhB;AKpqBA;;EAiSY,iBAAA;EACA,WAAA;EACA,uCAAA;EACA,sBAAA;EACA,eAAA;EACA,eAAA;ALuYZ;AK7qBA;EAySY,qBAAA;EACA,UAAA;EACA,WAAA;EACA,kBAAA;EACA,iBAAA;EACA,WAAA;EACA,kBAAA;ALuYZ;AKtrBA;EAkTY,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,qBAAA;ALuYZ;AKjsBA;EA4TgB,gCAAA;EACA,YAAA;ALwYhB;AKtYY;EAEQ,UAAA;ALuYpB;AKpYY;EACI,WAAA;EACA,WAAA;EACA,iBAAA;EACA,eAAA;ALsYhB;AKpYY;EACI,qBAAA;ALsYhB;AKpYY;EACI,kBAAA;ALsYhB;AKpYY;EACI,WAAA;ALsYhB;AKvtBA;EAqVY,kBAAA;EACA,qBAAA;EACA,eAAA;EACA,YAAA;ALqYZ;AKpYY;EAEQ,WAAA;ALqYpB;AKvYY;EAKQ,mBAAA;ALqYpB;AKlYY;EAEQ,WAAA;ALmYpB;AKrYY;EAKQ,mBAAA;ALmYpB;AKzuBA;EA0WgB,qBAAA;EACA,qBAAA;EACA,sBAAA;EACA,YAAA;ALkYhB;AK/uBA;EA+WoB,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;ALmYpB;AKvvBA;EAsXwB,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;ALoYxB;AK/vBA;EA6X4B,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,mBAAA;ALqY5B;AK5wBA;EA8YY,qBAAA;EACA,YAAA;ALiYZ;AKhxBA;EAkZY,qBAAA;EACA,YAAA;ALiYZ;AKpxBA;EAqZgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,cAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,cAAA;ALmYpB;AKjYgB;EACI,mBAAA;ALmYpB;AKzyBA;EA0agB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALkYhB;AKjYgB;EACI,0CAAA;ALmYpB;AKnzBA;EAqbY,qBAAA;EACA,YAAA;ALiYZ;AKvzBA;EAwbgB,kBAAA;EACA,QAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,UAAA;ALkYhB;AKjYgB;EACI,aAAA;ALmYpB;AKlYoB;EACI,cAAA;ALoYxB;AKjYgB;EACI,mBAAA;ALmYpB;AKjYgB;EACI,WAAA;EACA,kBAAA;ALmYpB;AKjYgB;EAEQ,aAAA;ALkYxB;AKpYgB;EAKQ,cAAA;ALkYxB;AKv1BA;;EA2dgB,YAAA;EACA,iBAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;ALgYhB;AK/XgB;;EACI,0CAAA;ALkYpB;AKn2BA;EAqegB,cAAA;ALiYhB;AKt2BA;EAueoB,eAAA;EACA,eAAA;ALkYpB;AKhYgB;EAEQ,aAAA;ALiYxB;AKnYgB;EAKQ,qBAAA;ALiYxB;AK9XgB;EAEQ,aAAA;AL+XxB;AKjYgB;EAKQ,qBAAA;AL+XxB;AKt3BA;EA2foB,eAAA;EACA,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,WAAA;AL8XpB;AK93BA;EAkgBwB,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,gCAAA;AL+XxB;AKt4BA;EAygB4B,kBAAA;EACA,SAAA;EACA,OAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;ALgY5B;AK/4BA;EAihBgC,kBAAA;EACA,MAAA;EACA,UAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,gCAAA;EACA,gBAAA;ALiYhC;AK55BA;EAmiBY,qBAAA;EACA,YAAA;EACA,kBAAA;AL4XZ;AK3XY;EAEQ,cAAA;AL4XpB;AKp6BA;EA4iBgB,kBAAA;EACA,UAAA;EACA,UAAA;EACA,aAAA;AL2XhB;AK16BA;EAmjBY,kBAAA;EACA,qBAAA;EACA,YAAA;EACA,UAAA;AL0XZ;AKzXY;EAEQ,cAAA;AL0XpB;AK5XY;EAKQ,cAAA;AL0XpB;AKt7BA;EAgkBgB,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,oBAAA;ALyXhB;AK97BA;EAwkBgB,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,iCAAA;EACA,cAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;ALyXhB;AK18BA;EAolBgB,YAAA;EACA,sBAAA;EACA,eAAA;EACA,iBAAA;ALyXhB;AKxXgB;EACI,0CAAA;AL0XpB;AKn9BA;EA8lBY,qBAAA;EACA,YAAA;ALwXZ;AKv9BA;EAkmBY,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,mBAAA;ALwXZ;AK99BA;EAymBY,WAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;ALwXZ;AKx+BA;EAknBgB,aAAA;EACA,YAAA;EACA,aAAA;ALyXhB;AK7+BA;EAunBgB,qBAAA;EACA,kBAAA;EACA,iCAAA;EACA,yBAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,sBAAA;EACA,eAAA;EACA,4BAAA;ALyXhB;AKz/BA;EAmoBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,mBAAA;EACA,4BAAA;ALyXhB;AKpgCA;EA8oBgB,WAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,MAAA;EACA,mBAAA;EACA,gBAAA;EACA,4BAAA;EACA,wCAAA;EACA,YAAA;EACA,WAAA;ALyXhB;AKjhCA;EA2pBgB,sCAAA;ALyXhB;AKphCA;EA8pBgB,WAAA;EACA,oCAAA;ALyXhB;AKxhCA;EAkqBgB,UAAA;ALyXhB;AKnXA;EACI,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,aAAA;EACA,eAAA;EACA,sBAAA;EAEA,SAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;ALoXJ;AMpjCA;EACI,kBAAA;EACA,OAAA;EACA,QAAA;EACA,MAAA;EACA,SAAA;EACA,eAAA;EACA,WAAA;ANsjCJ;AM7jCA;EASQ,qBAAA;EACA,oBAAA;EACA,yBAAA;KAAA,sBAAA;UAAA,iBAAA;EACA,eAAA;EACA,mBAAA;EACA,iDAAA;ANujCR;AMtjCQ;EACI,kBAAA;EACA,kBAAA;ANwjCZ;AMzkCA;EAqBQ,kBAAA;EACA,QAAA;EACA,2BAAA;ANujCR;AMtjCQ;EACI,sBAAA;EACA,iCAAA;UAAA,yBAAA;EACA,yCAAA;UAAA,iCAAA;EACA,oCAAA;UAAA,4BAAA;ANwjCZ;AMrjCI;EACI;IACI,2BAAA;ENujCV;AACF;AM1jCI;EACI;IACI,2BAAA;ENujCV;AACF;AMzlCA;;EAsCQ,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;ANujCR;AMtjCQ;;EACI,uBAAA;EACA,wCAAA;UAAA,gCAAA;EACA,yCAAA;UAAA,iCAAA;EACA,oCAAA;UAAA,4BAAA;ANyjCZ;AMtjCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AM9jCI;EACI;IACI,mBAAA;ENwjCV;EMtjCM;IACI,mBAAA;ENwjCV;AACF;AO/mCA;EACI,oBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;APinCJ;AOvnCA;EAQQ,eAAA;EACA,gBAAA;EACA,gBAAA;APknCR;AQ5nCA;EACI,kBAAA;EACA,YAAA;EACA,kBAAA;EACA,kCAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,aAAA;AR8nCJ;AQ7nCI;EACI,cAAA;AR+nCR;AQzoCA;EAaQ,YAAA;EACA,sBAAA;EACA,eAAA;AR+nCR;AQ9nCQ;EACI,0CAAA;ARgoCZ;AQjpCA;EAqBY,eAAA;EACA,iBAAA;EACA,WAAA;EACA,eAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AR+nCZ;AQ9nCY;EACI,qBAAA;ARgoChB;ASjqCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;ATmqCJ;AStqCA;EAMQ,kBAAA;EACA,iCAAA;EACA,gCAAA;EACA,gBAAA;EACA,WAAA;EACA,cAAA;EACA,oBAAA;EACA,kDAAA;UAAA,0CAAA;ATmqCR;AShrCA;EAiBQ,oDAAA;UAAA,4CAAA;ATkqCR;AS9pCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;ETgqCN;ES9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ETgqCN;AACF;AS1qCA;EACI;IACI,UAAA;IACA,YAAA;IACA,aAAA;ETgqCN;ES9pCE;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ETgqCN;AACF;AS7pCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ET+pCN;ES7pCE;IACI,eAAA;ET+pCN;ES7pCE;IACI,YAAA;IACA,iBAAA;ET+pCN;ES7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;ET+pCN;AACF;AShrCA;EACI;IACI,iBAAA;IACA,eAAA;IACA,eAAA;ET+pCN;ES7pCE;IACI,eAAA;ET+pCN;ES7pCE;IACI,YAAA;IACA,iBAAA;ET+pCN;ES7pCE;IACI,UAAA;IACA,aAAA;IACA,YAAA;ET+pCN;AACF;AUltCA;EACI,kBAAA;EACA,YAAA;EACA,UAAA;EACA,QAAA;EACA,kBAAA;EACA,WAAA;EACA,iDAAA;EACA,eAAA;AVotCJ;AUntCI;EACI,aAAA;AVqtCR;AI/tCA;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,aAAA;AJiuCJ;AIhuCI;EACI,cAAA;AJkuCR;AI9tCA;EACI,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;AJguCJ;AIruCA;EAOQ,WAAA;EACA,YAAA;EACA,aAAA;AJiuCR;AI1uCA;EAYQ,cAAA;AJiuCR;AI7uCA;EAeQ,aAAA;AJiuCR;AW7vCA;EACI,kBAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,iCAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,kBAAA;AX+vCJ;AW7vCI;EACI,aAAA;AX+vCR;AW3wCA;EAgBQ,eAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;AX8vCR;AW1vCQ;EACI,qBAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;AX4vCZ;AWzxCA;EAkCQ,YAAA;EACA,iBAAA;EACA,kBAAA;AX0vCR;AW9xCA;EAwCQ,YAAA;AXyvCR",sourcesContent:["@keyframes my-face {\n    2% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    4% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    6% {\n        transform: translate(0, 1.5px) rotate(-1.5deg);\n    }\n    8% {\n        transform: translate(0, -1.5px) rotate(-1.5deg);\n    }\n    10% {\n        transform: translate(0, 2.5px) rotate(1.5deg);\n    }\n    12% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    14% {\n        transform: translate(0, -1.5px) rotate(1.5deg);\n    }\n    16% {\n        transform: translate(0, -0.5px) rotate(-1.5deg);\n    }\n    18% {\n        transform: translate(0, 0.5px) rotate(-1.5deg);\n    }\n    20% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    22% {\n        transform: translate(0, 0.5px) rotate(-1.5deg);\n    }\n    24% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    26% {\n        transform: translate(0, 0.5px) rotate(0.5deg);\n    }\n    28% {\n        transform: translate(0, 0.5px) rotate(1.5deg);\n    }\n    30% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    32% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    34% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    36% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    38% {\n        transform: translate(0, 1.5px) rotate(-1.5deg);\n    }\n    40% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    42% {\n        transform: translate(0, 2.5px) rotate(-1.5deg);\n    }\n    44% {\n        transform: translate(0, 1.5px) rotate(0.5deg);\n    }\n    46% {\n        transform: translate(0, -1.5px) rotate(2.5deg);\n    }\n    48% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    50% {\n        transform: translate(0, 0.5px) rotate(0.5deg);\n    }\n    52% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    54% {\n        transform: translate(0, -1.5px) rotate(1.5deg);\n    }\n    56% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    58% {\n        transform: translate(0, 0.5px) rotate(2.5deg);\n    }\n    60% {\n        transform: translate(0, 2.5px) rotate(2.5deg);\n    }\n    62% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    64% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    66% {\n        transform: translate(0, 1.5px) rotate(-0.5deg);\n    }\n    68% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    70% {\n        transform: translate(0, 1.5px) rotate(0.5deg);\n    }\n    72% {\n        transform: translate(0, 2.5px) rotate(1.5deg);\n    }\n    74% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    76% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    78% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    80% {\n        transform: translate(0, 1.5px) rotate(1.5deg);\n    }\n    82% {\n        transform: translate(0, -0.5px) rotate(0.5deg);\n    }\n    84% {\n        transform: translate(0, 1.5px) rotate(2.5deg);\n    }\n    86% {\n        transform: translate(0, -1.5px) rotate(-1.5deg);\n    }\n    88% {\n        transform: translate(0, -0.5px) rotate(2.5deg);\n    }\n    90% {\n        transform: translate(0, 2.5px) rotate(-0.5deg);\n    }\n    92% {\n        transform: translate(0, 0.5px) rotate(-0.5deg);\n    }\n    94% {\n        transform: translate(0, 2.5px) rotate(0.5deg);\n    }\n    96% {\n        transform: translate(0, -0.5px) rotate(1.5deg);\n    }\n    98% {\n        transform: translate(0, -1.5px) rotate(-0.5deg);\n    }\n    0%,\n    100% {\n        transform: translate(0, 0) rotate(0deg);\n    }\n}","@import '../../node_modules/balloon-css/balloon.css';\n@keyframes my-face {\n  2% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  4% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  6% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  8% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  10% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  12% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  14% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  16% {\n    transform: translate(0, -0.5px) rotate(-1.5deg);\n  }\n  18% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  20% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  22% {\n    transform: translate(0, 0.5px) rotate(-1.5deg);\n  }\n  24% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  26% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  28% {\n    transform: translate(0, 0.5px) rotate(1.5deg);\n  }\n  30% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  32% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  34% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  36% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  38% {\n    transform: translate(0, 1.5px) rotate(-1.5deg);\n  }\n  40% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  42% {\n    transform: translate(0, 2.5px) rotate(-1.5deg);\n  }\n  44% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  46% {\n    transform: translate(0, -1.5px) rotate(2.5deg);\n  }\n  48% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  50% {\n    transform: translate(0, 0.5px) rotate(0.5deg);\n  }\n  52% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  54% {\n    transform: translate(0, -1.5px) rotate(1.5deg);\n  }\n  56% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  58% {\n    transform: translate(0, 0.5px) rotate(2.5deg);\n  }\n  60% {\n    transform: translate(0, 2.5px) rotate(2.5deg);\n  }\n  62% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  64% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  66% {\n    transform: translate(0, 1.5px) rotate(-0.5deg);\n  }\n  68% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  70% {\n    transform: translate(0, 1.5px) rotate(0.5deg);\n  }\n  72% {\n    transform: translate(0, 2.5px) rotate(1.5deg);\n  }\n  74% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  76% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  78% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  80% {\n    transform: translate(0, 1.5px) rotate(1.5deg);\n  }\n  82% {\n    transform: translate(0, -0.5px) rotate(0.5deg);\n  }\n  84% {\n    transform: translate(0, 1.5px) rotate(2.5deg);\n  }\n  86% {\n    transform: translate(0, -1.5px) rotate(-1.5deg);\n  }\n  88% {\n    transform: translate(0, -0.5px) rotate(2.5deg);\n  }\n  90% {\n    transform: translate(0, 2.5px) rotate(-0.5deg);\n  }\n  92% {\n    transform: translate(0, 0.5px) rotate(-0.5deg);\n  }\n  94% {\n    transform: translate(0, 2.5px) rotate(0.5deg);\n  }\n  96% {\n    transform: translate(0, -0.5px) rotate(1.5deg);\n  }\n  98% {\n    transform: translate(0, -1.5px) rotate(-0.5deg);\n  }\n  0%,\n  100% {\n    transform: translate(0, 0) rotate(0deg);\n  }\n}\n.dplayer {\n  position: relative;\n  overflow: hidden;\n  user-select: none;\n  line-height: 1;\n}\n.dplayer * {\n  box-sizing: content-box;\n}\n.dplayer svg {\n  width: 100%;\n  height: 100%;\n}\n.dplayer svg path,\n.dplayer svg circle {\n  fill: #fff;\n}\n.dplayer:-webkit-full-screen {\n  width: 100%;\n  height: 100%;\n  background: #000;\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  margin: 0;\n  padding: 0;\n  transform: translate(0, 0);\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment {\n  display: none;\n}\n.dplayer.dplayer-no-danmaku .dplayer-danmaku {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-time {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-bar-wrap {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-speed {\n  display: none;\n}\n.dplayer.dplayer-live .dplayer-setting-loop {\n  display: none;\n}\n.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting {\n  display: none;\n}\n.dplayer.dplayer-arrow .dplayer-danmaku {\n  font-size: 18px;\n}\n.dplayer.dplayer-arrow .dplayer-icon {\n  margin: 0 -3px;\n}\n.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move {\n  animation-play-state: running;\n}\n@media (min-width: 900px) {\n  .dplayer.dplayer-playing .dplayer-controller-mask {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing .dplayer-controller {\n    opacity: 0;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller-mask {\n    opacity: 1;\n  }\n  .dplayer.dplayer-playing:hover .dplayer-controller {\n    opacity: 1;\n  }\n}\n.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon {\n  display: block;\n}\n.dplayer.dplayer-loading .dplayer-danmaku,\n.dplayer.dplayer-paused .dplayer-danmaku,\n.dplayer.dplayer-loading .dplayer-danmaku-move,\n.dplayer.dplayer-paused .dplayer-danmaku-move {\n  animation-play-state: paused;\n}\n.dplayer.dplayer-hide-controller {\n  cursor: none;\n}\n.dplayer.dplayer-hide-controller .dplayer-controller-mask {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-hide-controller .dplayer-controller {\n  opacity: 0;\n  transform: translateY(100%);\n}\n.dplayer.dplayer-show-controller .dplayer-controller-mask {\n  opacity: 1;\n}\n.dplayer.dplayer-show-controller .dplayer-controller {\n  opacity: 1;\n}\n.dplayer.dplayer-fulled {\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100% !important;\n  height: 100% !important;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-airplay-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-chromecast-icon,\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: static;\n  display: inline-block;\n}\n.dplayer.dplayer-mobile .dplayer-bar-time {\n  display: none;\n}\n.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play {\n  display: none;\n}\n.dplayer.dplayer-mobile .dplayer-mobile-play {\n  display: block;\n}\n.dplayer-web-fullscreen-fix {\n  position: fixed;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n}\n[data-balloon]:before {\n  display: none;\n}\n[data-balloon]:after {\n  padding: 0.3em 0.7em;\n  background: rgba(17, 17, 17, 0.7);\n}\n[data-balloon][data-balloon-pos=\"up\"]:after {\n  margin-bottom: 0;\n}\n.dplayer-bezel {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -26px 0 0 -26px;\n  height: 52px;\n  width: 52px;\n  padding: 12px;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 50%;\n  opacity: 0;\n  pointer-events: none;\n}\n.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition {\n  animation: bezel-hide 0.5s linear;\n}\n@keyframes bezel-hide {\n  from {\n    opacity: 1;\n    transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    transform: scale(2);\n  }\n}\n.dplayer-bezel .dplayer-danloading {\n  position: absolute;\n  top: 50%;\n  margin-top: -7px;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 14px;\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-bezel .diplayer-loading-icon {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -18px 0 0 -18px;\n  height: 36px;\n  width: 36px;\n  pointer-events: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide {\n  display: none;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot {\n  animation: diplayer-loading-dot-fade 0.8s ease infinite;\n  opacity: 0;\n  transform-origin: 4px 4px;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1 {\n  animation-delay: 0.1s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2 {\n  animation-delay: 0.2s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3 {\n  animation-delay: 0.3s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4 {\n  animation-delay: 0.4s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5 {\n  animation-delay: 0.5s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6 {\n  animation-delay: 0.6s;\n}\n.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7 {\n  animation-delay: 0.7s;\n}\n@keyframes diplayer-loading-dot-fade {\n  0% {\n    opacity: 0.7;\n    transform: scale(1.2, 1.2);\n  }\n  50% {\n    opacity: 0.25;\n    transform: scale(0.9, 0.9);\n  }\n  to {\n    opacity: 0.25;\n    transform: scale(0.85, 0.85);\n  }\n}\n.dplayer-controller-mask {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;\n  height: 98px;\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  transition: all 0.3s ease;\n}\n.dplayer-controller {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 41px;\n  padding: 0 20px;\n  user-select: none;\n  transition: all 0.3s ease;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons {\n  display: none;\n}\n.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap {\n  padding: 5px 0;\n  cursor: pointer;\n  position: absolute;\n  bottom: 33px;\n  width: calc(100% - 40px);\n  height: 3px;\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight {\n  display: block;\n  width: 8px;\n  transform: translateX(-4px);\n  top: 4px;\n  height: 40%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight {\n  z-index: 12;\n  position: absolute;\n  top: 5px;\n  width: 6px;\n  height: 20%;\n  border-radius: 6px;\n  background-color: #fff;\n  text-align: center;\n  transform: translateX(-3px);\n  transition: all 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text {\n  display: block;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-preview {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover ~ .dplayer-bar-time {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text {\n  display: none;\n  position: absolute;\n  left: 50%;\n  top: -24px;\n  padding: 5px 8px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  border-radius: 4px;\n  font-size: 12px;\n  white-space: nowrap;\n  transform: translateX(-50%);\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview {\n  position: absolute;\n  background: #fff;\n  pointer-events: none;\n  display: none;\n  background-size: 16000px 100%;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time {\n  position: absolute;\n  left: 0px;\n  top: -20px;\n  border-radius: 4px;\n  padding: 5px 7px;\n  background-color: rgba(0, 0, 0, 0.62);\n  color: #fff;\n  font-size: 12px;\n  text-align: center;\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n  word-wrap: normal;\n  word-break: normal;\n  z-index: 2;\n  pointer-events: none;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden {\n  opacity: 0;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar {\n  position: relative;\n  height: 3px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.4);\n  height: 3px;\n  transition: all 0.5s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 3px;\n  will-change: width;\n}\n.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons {\n  height: 38px;\n  position: absolute;\n  bottom: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box {\n  display: none;\n  position: absolute;\n  transition: all 0.3s ease-in-out;\n  z-index: 2;\n  height: 38px;\n  bottom: 0;\n  left: 20px;\n  right: 20px;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box {\n  position: absolute;\n  background: rgba(28, 28, 28, 0.9);\n  bottom: 41px;\n  left: 0;\n  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);\n  border-radius: 4px;\n  padding: 10px 10px 16px;\n  font-size: 14px;\n  width: 204px;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio] {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label {\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title {\n  font-size: 13px;\n  color: #fff;\n  line-height: 30px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title {\n  margin-bottom: 6px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span {\n  border-radius: 4px 0 0 4px;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span {\n  border-radius: 0 4px 4px 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span {\n  width: 33%;\n  padding: 4px 6px;\n  line-height: 16px;\n  display: inline-block;\n  font-size: 12px;\n  color: #fff;\n  border: 1px solid #fff;\n  margin-right: -1px;\n  box-sizing: border-box;\n  text-align: center;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked + span {\n  background: #E4E4E6;\n  color: #1c1c1c;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color {\n  font-size: 0;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label {\n  font-size: 0;\n  padding: 6px;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span {\n  width: 22px;\n  height: 22px;\n  display: inline-block;\n  border-radius: 50%;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover {\n  animation: my-face 5s infinite ease-in-out;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input {\n  outline: none;\n  border: none;\n  padding: 8px 31px;\n  font-size: 14px;\n  line-height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  background: none;\n  margin: 0;\n  height: 100%;\n  box-sizing: border-box;\n  width: 100%;\n  color: #fff;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder {\n  color: #fff;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear {\n  display: none;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon {\n  padding: 7px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right {\n  right: 20px;\n}\n.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon {\n  padding: 8px;\n}\n.dplayer-controller .dplayer-icons .dplayer-time,\n.dplayer-controller .dplayer-icons .dplayer-live-badge {\n  line-height: 38px;\n  color: #eee;\n  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);\n  vertical-align: middle;\n  font-size: 13px;\n  cursor: default;\n}\n.dplayer-controller .dplayer-icons .dplayer-live-dot {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  vertical-align: 4%;\n  margin-right: 5px;\n  content: '';\n  border-radius: 6px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon {\n  width: 40px;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  vertical-align: middle;\n  box-sizing: border-box;\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content {\n  transition: all 0.2s ease-in-out;\n  opacity: 0.8;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content {\n  opacity: 1;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon {\n  color: #fff;\n  width: auto;\n  line-height: 22px;\n  font-size: 14px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon {\n  padding: 10px 9px 9px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon {\n  padding-top: 8.5px;\n}\n.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon {\n  width: 43px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  width: 45px;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap {\n  display: inline-block;\n  margin: 0 10px 0 -5px;\n  vertical-align: middle;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar {\n  position: relative;\n  top: 17px;\n  width: 0;\n  height: 3px;\n  background: #aaa;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  transform: scale(0);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitle-btn {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: fit-content;\n  max-width: 240px;\n  min-width: 120px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: auto;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-box.dplayer-subtitles-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-subtitles .dplayer-subtitles-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n  position: absolute;\n  right: 0;\n  bottom: 50px;\n  transform: scale(0);\n  width: 150px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 7px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box > div.dplayer-setting-origin-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open {\n  transform: scale(1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow {\n  width: 70px;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item {\n  height: 30px;\n  padding: 5px 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku {\n  padding: 5px 0;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label {\n  padding: 0 10px;\n  display: inline;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label {\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap {\n  display: inline-block;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap {\n  padding: 0 10px;\n  box-sizing: border-box;\n  display: none;\n  vertical-align: middle;\n  height: 100%;\n  width: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar {\n  position: relative;\n  top: 8.5px;\n  width: 100%;\n  height: 3px;\n  background: #fff;\n  transition: all 0.3s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 100%;\n  transition: all 0.1s ease;\n  background: #aaa;\n  will-change: width;\n}\n.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb {\n  position: absolute;\n  top: 0;\n  right: 5px;\n  margin-top: -4px;\n  margin-right: -10px;\n  height: 11px;\n  width: 11px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  background: #aaa;\n}\n.dplayer-controller .dplayer-icons .dplayer-full {\n  display: inline-block;\n  height: 100%;\n  position: relative;\n}\n.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon {\n  position: absolute;\n  top: -30px;\n  z-index: 1;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality {\n  position: relative;\n  display: inline-block;\n  height: 100%;\n  z-index: 2;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask {\n  display: block;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask {\n  display: none;\n  position: absolute;\n  bottom: 38px;\n  left: -18px;\n  width: 80px;\n  padding-bottom: 12px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list {\n  display: none;\n  font-size: 12px;\n  width: 80px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  padding: 5px 0;\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  text-align: center;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item {\n  height: 25px;\n  box-sizing: border-box;\n  cursor: pointer;\n  line-height: 25px;\n}\n.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-controller .dplayer-icons .dplayer-comment {\n  display: inline-block;\n  height: 100%;\n}\n.dplayer-controller .dplayer-icons .dplayer-label {\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle {\n  width: 32px;\n  height: 20px;\n  text-align: center;\n  font-size: 0;\n  vertical-align: middle;\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input {\n  max-height: 0;\n  max-width: 0;\n  display: none;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label {\n  display: inline-block;\n  position: relative;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border: 1px solid #dfdfdf;\n  height: 20px;\n  width: 32px;\n  border-radius: 10px;\n  box-sizing: border-box;\n  cursor: pointer;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  height: 18px;\n  width: 18px;\n  top: 0;\n  left: 0;\n  border-radius: 15px;\n  transition: 0.2s ease-in-out;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input + label:after {\n  content: \"\";\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  border-radius: 15px;\n  background: #fff;\n  transition: 0.2s ease-in-out;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  height: 18px;\n  width: 18px;\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label {\n  border-color: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:before {\n  width: 30px;\n  background: rgba(255, 255, 255, 0.5);\n}\n.dplayer-controller .dplayer-icons .dplayer-toggle input:checked + label:after {\n  left: 12px;\n}\n.dplayer-mobile-play {\n  display: none;\n  width: 50px;\n  height: 50px;\n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  box-sizing: border-box;\n  bottom: 0;\n  opacity: 0.8;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.dplayer-danmaku {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 22px;\n  color: #fff;\n}\n.dplayer-danmaku .dplayer-danmaku-item {\n  display: inline-block;\n  pointer-events: none;\n  user-select: none;\n  cursor: default;\n  white-space: nowrap;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n}\n.dplayer-danmaku .dplayer-danmaku-item--demo {\n  position: absolute;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-right {\n  position: absolute;\n  right: 0;\n  transform: translateX(100%);\n}\n.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move {\n  will-change: transform;\n  animation-name: 'danmaku';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku {\n  from {\n    transform: translateX(100%);\n  }\n}\n.dplayer-danmaku .dplayer-danmaku-top,\n.dplayer-danmaku .dplayer-danmaku-bottom {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  visibility: hidden;\n}\n.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move,\n.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move {\n  will-change: visibility;\n  animation-name: 'danmaku-center';\n  animation-timing-function: linear;\n  animation-play-state: paused;\n}\n@keyframes danmaku-center {\n  from {\n    visibility: visible;\n  }\n  to {\n    visibility: visible;\n  }\n}\n.dplayer-logo {\n  pointer-events: none;\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  max-width: 50px;\n  max-height: 50px;\n}\n.dplayer-logo img {\n  max-width: 100%;\n  max-height: 100%;\n  background: none;\n}\n.dplayer-menu {\n  position: absolute;\n  width: 170px;\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.85);\n  padding: 5px 0;\n  overflow: hidden;\n  z-index: 3;\n  display: none;\n}\n.dplayer-menu.dplayer-menu-show {\n  display: block;\n}\n.dplayer-menu .dplayer-menu-item {\n  height: 30px;\n  box-sizing: border-box;\n  cursor: pointer;\n}\n.dplayer-menu .dplayer-menu-item:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.dplayer-menu .dplayer-menu-item a {\n  padding: 0 10px;\n  line-height: 30px;\n  color: #eee;\n  font-size: 13px;\n  display: inline-block;\n  vertical-align: middle;\n  width: 100%;\n  box-sizing: border-box;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-menu .dplayer-menu-item a:hover {\n  text-decoration: none;\n}\n.dplayer-notice-list {\n  position: absolute;\n  bottom: 60px;\n  left: 20px;\n}\n.dplayer-notice-list .dplayer-notice {\n  border-radius: 2px;\n  background: rgba(28, 28, 28, 0.9);\n  transition: all 0.3s ease-in-out;\n  overflow: hidden;\n  color: #fff;\n  display: table;\n  pointer-events: none;\n  animation: showNotice 0.3s ease 1 forwards;\n}\n.dplayer-notice-list .remove-notice {\n  animation: removeNotice 0.3s ease 1 forwards;\n}\n@keyframes showNotice {\n  from {\n    padding: 0;\n    font-size: 0;\n    margin-top: 0;\n  }\n  to {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n}\n@keyframes removeNotice {\n  0% {\n    padding: 7px 20px;\n    font-size: 14px;\n    margin-top: 5px;\n  }\n  20% {\n    font-size: 12px;\n  }\n  21% {\n    font-size: 0;\n    padding: 7px 10px;\n  }\n  100% {\n    padding: 0;\n    margin-top: 0;\n    font-size: 0;\n  }\n}\n.dplayer-subtitle {\n  position: absolute;\n  bottom: 40px;\n  width: 90%;\n  left: 5%;\n  text-align: center;\n  color: #fff;\n  text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n}\n.dplayer-subtitle.dplayer-subtitle-hide {\n  display: none;\n}\n.dplayer-mask {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  display: none;\n}\n.dplayer-mask.dplayer-mask-show {\n  display: block;\n}\n.dplayer-video-wrap {\n  position: relative;\n  background: #000;\n  font-size: 0;\n  width: 100%;\n  height: 100%;\n}\n.dplayer-video-wrap .dplayer-video {\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n.dplayer-video-wrap .dplayer-video-current {\n  display: block;\n}\n.dplayer-video-wrap .dplayer-video-prepare {\n  display: none;\n}\n.dplayer-info-panel {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 400px;\n  background: rgba(28, 28, 28, 0.8);\n  padding: 10px;\n  color: #fff;\n  font-size: 12px;\n  border-radius: 2px;\n}\n.dplayer-info-panel-hide {\n  display: none;\n}\n.dplayer-info-panel .dplayer-info-panel-close {\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item > span {\n  display: inline-block;\n  vertical-align: middle;\n  line-height: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.dplayer-info-panel .dplayer-info-panel-item-title {\n  width: 100px;\n  text-align: right;\n  margin-right: 10px;\n}\n.dplayer-info-panel .dplayer-info-panel-item-data {\n  width: 260px;\n}\n",".dplayer {\n    position: relative;\n    overflow: hidden;\n    user-select: none;\n    line-height: 1;\n\n    * {\n        box-sizing: content-box;\n    }\n\n    svg {\n        width: 100%;\n        height: 100%;\n\n        path,\n        circle {\n            fill: #fff;\n        }\n    }\n\n    &:-webkit-full-screen {\n        width: 100%;\n        height: 100%;\n        background: #000;\n        position: fixed;\n        z-index: 100000;\n        left: 0;\n        top: 0;\n        margin: 0;\n        padding: 0;\n        transform: translate(0, 0);\n        \n    }\n\n    &.dplayer-no-danmaku {\n        .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box {\n            .dplayer-setting-showdan,\n            .dplayer-setting-danmaku,\n            .dplayer-setting-danunlimit {\n                display: none;\n            }\n        }\n\n        .dplayer-controller .dplayer-icons .dplayer-comment {\n            display: none;\n        }\n\n        .dplayer-danmaku {\n            display: none;\n        }\n    }\n\n    &.dplayer-live {\n        .dplayer-time {\n            display: none;\n        }\n        .dplayer-bar-wrap {\n            display: none;\n        }\n        .dplayer-setting-speed {\n            display: none;\n        }\n        .dplayer-setting-loop {\n            display: none;\n        }\n\n        &.dplayer-no-danmaku {\n            .dplayer-setting {\n                display: none;\n            }\n        }\n    }\n\n    &.dplayer-arrow {\n        .dplayer-danmaku {\n            font-size: 18px;\n        }\n        .dplayer-icon {\n            margin: 0 -3px;\n        }\n    }\n\n    &.dplayer-playing {\n        .dplayer-danmaku .dplayer-danmaku-move {\n            animation-play-state: running;\n        }\n\n        @media (min-width: 900px) {\n            .dplayer-controller-mask {\n                opacity: 0;\n            }\n            .dplayer-controller {\n                opacity: 0;\n            }\n\n            &:hover {\n                .dplayer-controller-mask {\n                    opacity: 1;\n                }\n                .dplayer-controller {\n                    opacity: 1;\n                }\n            }\n        }\n    }\n\n    &.dplayer-loading {\n        .dplayer-bezel .diplayer-loading-icon {\n            display: block;\n        }\n    }\n\n    &.dplayer-loading,\n    &.dplayer-paused {\n        .dplayer-danmaku,\n        .dplayer-danmaku-move {\n            animation-play-state: paused;\n        }\n    }\n\n    &.dplayer-hide-controller {\n        cursor: none;\n\n        .dplayer-controller-mask {\n            opacity: 0;\n            transform: translateY(100%);\n        }\n        .dplayer-controller {\n            opacity: 0;\n            transform: translateY(100%);\n        }\n    }\n    &.dplayer-show-controller {\n        .dplayer-controller-mask {\n            opacity: 1;\n        }\n        .dplayer-controller {\n            opacity: 1;\n        }\n    }\n    &.dplayer-fulled {\n        position: fixed;\n        z-index: 100000;\n        left: 0;\n        top: 0;\n        width: 100% !important;\n        height: 100% !important;\n    }\n    &.dplayer-mobile {\n        .dplayer-controller .dplayer-icons {\n            .dplayer-volume,\n            .dplayer-camera-icon,\n            .dplayer-airplay-icon,\n            .dplayer-chromecast-icon,\n            .dplayer-play-icon {\n                display: none;\n            }\n            .dplayer-full .dplayer-full-in-icon {\n                position: static;\n                display: inline-block;\n            }\n        }\n\n        .dplayer-bar-time {\n            display: none;\n        }\n\n        &.dplayer-hide-controller {\n            .dplayer-mobile-play {\n                display: none;\n            }\n        }\n\n        .dplayer-mobile-play {\n            display: block;\n        }\n    }\n}\n\n// To hide scroll bar, apply this class to <body>\n.dplayer-web-fullscreen-fix {\n    position: fixed;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 0;\n}\n","@import '../../node_modules/balloon-css/balloon.css';\n\n[data-balloon]:before {\n    display: none;\n}\n\n[data-balloon]:after {\n    padding: 0.3em 0.7em;\n    background: rgba(17, 17, 17, 0.7);\n}\n\n[data-balloon][data-balloon-pos=\"up\"]:after {\n    margin-bottom: 0;\n}",".dplayer-bezel {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    font-size: 22px;\n    color: #fff;\n    pointer-events: none;\n    .dplayer-bezel-icon {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -26px 0 0 -26px;\n        height: 52px;\n        width: 52px;\n        padding: 12px;\n        box-sizing: border-box;\n        background: rgba(0, 0, 0, .5);\n        border-radius: 50%;\n        opacity: 0;\n        pointer-events: none;\n        &.dplayer-bezel-transition {\n            animation: bezel-hide .5s linear;\n        }\n        @keyframes bezel-hide {\n            from {\n                opacity: 1;\n                transform: scale(1);\n            }\n            to {\n                opacity: 0;\n                transform: scale(2);\n            }\n        }\n    }\n    .dplayer-danloading {\n        position: absolute;\n        top: 50%;\n        margin-top: -7px;\n        width: 100%;\n        text-align: center;\n        font-size: 14px;\n        line-height: 14px;\n        animation: my-face 5s infinite ease-in-out;\n    }\n    .diplayer-loading-icon {\n        display: none;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -18px 0 0 -18px;\n        height: 36px;\n        width: 36px;\n        pointer-events: none;\n        .diplayer-loading-hide {\n            display: none;\n        }\n        .diplayer-loading-dot {\n            animation: diplayer-loading-dot-fade .8s ease infinite;\n            opacity: 0;\n            transform-origin: 4px 4px;\n            each(range(7), {\n                &.diplayer-loading-dot-@{value} {\n                    animation-delay: (@value * 0.1s);\n                }\n            });\n        }\n        @keyframes diplayer-loading-dot-fade {\n            0% {\n                opacity: .7;\n                transform: scale(1.2, 1.2)\n            }\n            50% {\n                opacity: .25;\n                transform: scale(.9, .9)\n            }\n            to {\n                opacity: .25;\n                transform: scale(.85, .85)\n            }\n        }\n    }\n}",".dplayer-mask {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1;\n    display: none;\n    &.dplayer-mask-show {\n        display: block;\n    }\n}\n\n.dplayer-video-wrap {\n    position: relative;\n    background: #000;\n    font-size: 0;\n    width: 100%;\n    height: 100%;\n    .dplayer-video {\n        width: 100%;\n        height: 100%;\n        display: none;\n    }\n    .dplayer-video-current {\n        display: block;\n    }\n    .dplayer-video-prepare {\n        display: none;\n    }\n}",'.dplayer-controller-mask {\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;\n    height: 98px;\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n    transition: all 0.3s ease;\n}\n\n.dplayer-controller {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 41px;\n    padding: 0 20px;\n    user-select: none;\n    transition: all 0.3s ease;\n    &.dplayer-controller-comment {\n        .dplayer-icons {\n            display: none;\n        }\n        .dplayer-icons.dplayer-comment-box {\n            display: block;\n        }\n    }\n    .dplayer-bar-wrap {\n        padding: 5px 0;\n        cursor: pointer;\n        position: absolute;\n        bottom: 33px;\n        width: calc(100% - 40px);\n        height: 3px;\n        &:hover {\n            .dplayer-bar .dplayer-played .dplayer-thumb {\n                transform: scale(1);\n            }\n            .dplayer-highlight {\n                display: block;\n                width: 8px;\n                transform: translateX(-4px);\n                top: 4px;\n                height: 40%;\n            }\n        }\n        .dplayer-highlight {\n            z-index: 12;\n            position: absolute;\n            top: 5px;\n            width: 6px;\n            height: 20%;\n            border-radius: 6px;\n            background-color: #fff;\n            text-align: center;\n            transform: translateX(-3px);\n            transition: all .2s ease-in-out;\n            &:hover {\n                .dplayer-highlight-text {\n                    display: block;\n                }\n                &~.dplayer-bar-preview {\n                    opacity: 0;\n                }\n                &~.dplayer-bar-time {\n                    opacity: 0;\n                }\n            }\n            .dplayer-highlight-text {\n                display: none;\n                position: absolute;\n                left: 50%;\n                top: -24px;\n                padding: 5px 8px;\n                background-color: rgba(0, 0, 0, .62);\n                color: #fff;\n                border-radius: 4px;\n                font-size: 12px;\n                white-space: nowrap;\n                transform: translateX(-50%);\n            }\n        }\n        .dplayer-bar-preview {\n            position: absolute;\n            background: #fff;\n            pointer-events: none;\n            display: none;\n            background-size: 16000px 100%;\n        }\n        .dplayer-bar-preview-canvas {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            z-index: 1;\n            pointer-events: none;\n        }\n        .dplayer-bar-time {\n            &.hidden {\n                opacity: 0;\n            }\n            position: absolute;\n            left: 0px;\n            top: -20px;\n            border-radius: 4px;\n            padding: 5px 7px;\n            background-color: rgba(0, 0, 0, 0.62);\n            color: #fff;\n            font-size: 12px;\n            text-align: center;\n            opacity: 1;\n            transition: opacity .1s ease-in-out;\n            word-wrap: normal;\n            word-break: normal;\n            z-index: 2;\n            pointer-events: none;\n        }\n        .dplayer-bar {\n            position: relative;\n            height: 3px;\n            width: 100%;\n            background: rgba(255, 255, 255, .2);\n            cursor: pointer;\n            .dplayer-loaded {\n                position: absolute;\n                left: 0;\n                top: 0;\n                bottom: 0;\n                background: rgba(255, 255, 255, .4);\n                height: 3px;\n                transition: all 0.5s ease;\n                will-change: width;\n            }\n            .dplayer-played {\n                position: absolute;\n                left: 0;\n                top: 0;\n                bottom: 0;\n                height: 3px;\n                will-change: width;\n                .dplayer-thumb {\n                    position: absolute;\n                    top: 0;\n                    right: 5px;\n                    margin-top: -4px;\n                    margin-right: -10px;\n                    height: 11px;\n                    width: 11px;\n                    border-radius: 50%;\n                    cursor: pointer;\n                    transition: all .3s ease-in-out;\n                    transform: scale(0);\n                }\n            }\n        }\n    }\n    .dplayer-icons {\n        height: 38px;\n        position: absolute;\n        bottom: 0;\n        &.dplayer-comment-box {\n            display: none;\n            position: absolute;\n            transition: all .3s ease-in-out;\n            z-index: 2;\n            height: 38px;\n            bottom: 0;\n            left: 20px;\n            right: 20px;\n            color: #fff;\n            .dplayer-icon {\n                padding: 7px;\n            }\n            .dplayer-comment-setting-icon {\n                position: absolute;\n                left: 0;\n                top: 0;\n            }\n            .dplayer-send-icon {\n                position: absolute;\n                right: 0;\n                top: 0;\n            }\n            .dplayer-comment-setting-box {\n                position: absolute;\n                background: rgba(28, 28, 28, 0.9);\n                bottom: 41px;\n                left: 0;\n                box-shadow: 0 0 25px rgba(0, 0, 0, .3);\n                border-radius: 4px;\n                padding: 10px 10px 16px;\n                font-size: 14px;\n                width: 204px;\n                transition: all .3s ease-in-out;\n                transform: scale(0);\n                &.dplayer-comment-setting-open {\n                    transform: scale(1);\n                }\n                input[type=radio] {\n                    display: none;\n                }\n                label {\n                    cursor: pointer;\n                }\n                .dplayer-comment-setting-title {\n                    font-size: 13px;\n                    color: #fff;\n                    line-height: 30px;\n                }\n                .dplayer-comment-setting-type {\n                    font-size: 0;\n                    .dplayer-comment-setting-title {\n                        margin-bottom: 6px;\n                    }\n                    label {\n                        &:nth-child(2) {\n                            span {\n                                border-radius: 4px 0 0 4px;\n                            }\n                        }\n                        &:nth-child(4) {\n                            span {\n                                border-radius: 0 4px 4px 0;\n                            }\n                        }\n                    }\n                    span {\n                        width: 33%;\n                        padding: 4px 6px;\n                        line-height: 16px;\n                        display: inline-block;\n                        font-size: 12px;\n                        color: #fff;\n                        border: 1px solid #fff;\n                        margin-right: -1px;\n                        box-sizing: border-box;\n                        text-align: center;\n                        cursor: pointer;\n                    }\n                    input:checked+span {\n                        background: #E4E4E6;\n                        color: #1c1c1c;\n                    }\n                }\n                .dplayer-comment-setting-color {\n                    font-size: 0;\n                    label {\n                        font-size: 0;\n                        padding: 6px;\n                        display: inline-block;\n                    }\n                    span {\n                        width: 22px;\n                        height: 22px;\n                        display: inline-block;\n                        border-radius: 50%;\n                        box-sizing: border-box;\n                        cursor: pointer;\n                        &:hover {\n                            animation: my-face 5s infinite ease-in-out;\n                        }\n                    }\n                }\n            }\n            .dplayer-comment-input {\n                outline: none;\n                border: none;\n                padding: 8px 31px;\n                font-size: 14px;\n                line-height: 18px;\n                text-align: center;\n                border-radius: 4px;\n                background: none;\n                margin: 0;\n                height: 100%;\n                box-sizing: border-box;\n                width: 100%;\n                color: #fff;\n                &::placeholder {\n                    color: #fff;\n                    opacity: 0.8;\n                }\n                &::-ms-clear {\n                    display: none;\n                }\n            }\n        }\n        &.dplayer-icons-left {\n            .dplayer-icon {\n                padding: 7px;\n            }\n        }\n        &.dplayer-icons-right {\n            right: 20px;\n            .dplayer-icon {\n                padding: 8px;\n            }\n        }\n        .dplayer-time,\n        .dplayer-live-badge {\n            line-height: 38px;\n            color: #eee;\n            text-shadow: 0 0 2px rgba(0, 0, 0, .5);\n            vertical-align: middle;\n            font-size: 13px;\n            cursor: default;\n        }\n        .dplayer-live-dot {\n            display: inline-block;\n            width: 6px;\n            height: 6px;\n            vertical-align: 4%;\n            margin-right: 5px;\n            content: \'\';\n            border-radius: 6px;\n        }\n        .dplayer-icon {\n            width: 40px;\n            height: 100%;\n            border: none;\n            background-color: transparent;\n            outline: none;\n            cursor: pointer;\n            vertical-align: middle;\n            box-sizing: border-box;\n            display: inline-block;\n            .dplayer-icon-content {\n                transition: all .2s ease-in-out;\n                opacity: .8;\n            }\n            &:hover {\n                .dplayer-icon-content {\n                    opacity: 1;\n                }\n            }\n            &.dplayer-quality-icon {\n                color: #fff;\n                width: auto;\n                line-height: 22px;\n                font-size: 14px;\n            }\n            &.dplayer-comment-icon {\n                padding: 10px 9px 9px;\n            }\n            &.dplayer-setting-icon {\n                padding-top: 8.5px;\n            }\n            &.dplayer-volume-icon {\n                width: 43px;\n            }\n        }\n        .dplayer-volume {\n            position: relative;\n            display: inline-block;\n            cursor: pointer;\n            height: 100%;\n            &:hover {\n                .dplayer-volume-bar-wrap .dplayer-volume-bar {\n                    width: 45px;\n                }\n                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n                    transform: scale(1);\n                }\n            }\n            &.dplayer-volume-active {\n                .dplayer-volume-bar-wrap .dplayer-volume-bar {\n                    width: 45px;\n                }\n                .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb {\n                    transform: scale(1);\n                }\n            }\n            .dplayer-volume-bar-wrap {\n                display: inline-block;\n                margin: 0 10px 0 -5px;\n                vertical-align: middle;\n                height: 100%;\n                .dplayer-volume-bar {\n                    position: relative;\n                    top: 17px;\n                    width: 0;\n                    height: 3px;\n                    background: #aaa;\n                    transition: all 0.3s ease-in-out;\n                    .dplayer-volume-bar-inner {\n                        position: absolute;\n                        bottom: 0;\n                        left: 0;\n                        height: 100%;\n                        transition: all 0.1s ease;\n                        will-change: width;\n                        .dplayer-thumb {\n                            position: absolute;\n                            top: 0;\n                            right: 5px;\n                            margin-top: -4px;\n                            margin-right: -10px;\n                            height: 11px;\n                            width: 11px;\n                            border-radius: 50%;\n                            cursor: pointer;\n                            transition: all .3s ease-in-out;\n                            transform: scale(0);\n                        }\n                    }\n                }\n            }\n        }\n        .dplayer-subtitle-btn {\n            display: inline-block;\n            height: 100%;\n        }\n        .dplayer-subtitles {\n            display: inline-block;\n            height: 100%;\n            .dplayer-subtitles-box {\n                position: absolute;\n                right: 0;\n                bottom: 50px;\n                transform: scale(0);\n                width: fit-content;\n                max-width: 240px;\n                min-width: 120px;\n                border-radius: 2px;\n                background: rgba(28, 28, 28, 0.9);\n                padding: 7px 0;\n                transition: all .3s ease-in-out;\n                overflow: auto;\n                z-index: 2;\n                &.dplayer-subtitles-panel {\n                    display: block;\n                }\n                &.dplayer-subtitles-box-open {\n                    transform: scale(1);\n                }\n            }\n            .dplayer-subtitles-item {\n                height: 30px;\n                padding: 5px 10px;\n                box-sizing: border-box;\n                cursor: pointer;\n                position: relative;\n                &:hover {\n                    background-color: rgba(255, 255, 255, .1);\n                }\n            }\n        }\n        .dplayer-setting {\n            display: inline-block;\n            height: 100%;\n            .dplayer-setting-box {\n                position: absolute;\n                right: 0;\n                bottom: 50px;\n                transform: scale(0);\n                width: 150px;\n                border-radius: 2px;\n                background: rgba(28, 28, 28, 0.9);\n                padding: 7px 0;\n                transition: all .3s ease-in-out;\n                overflow: hidden;\n                z-index: 2;\n                &>div {\n                    display: none;\n                    &.dplayer-setting-origin-panel {\n                        display: block;\n                    }\n                }\n                &.dplayer-setting-box-open {\n                    transform: scale(1);\n                }\n                &.dplayer-setting-box-narrow {\n                    width: 70px;\n                    text-align: center;\n                }\n                &.dplayer-setting-box-speed {\n                    .dplayer-setting-origin-panel {\n                        display: none;\n                    }\n                    .dplayer-setting-speed-panel {\n                        display: block;\n                    }\n                }\n            }\n            .dplayer-setting-item,\n            .dplayer-setting-speed-item {\n                height: 30px;\n                padding: 5px 10px;\n                box-sizing: border-box;\n                cursor: pointer;\n                position: relative;\n                &:hover {\n                    background-color: rgba(255, 255, 255, .1);\n                }\n            }\n            .dplayer-setting-danmaku {\n                padding: 5px 0;\n                .dplayer-label {\n                    padding: 0 10px;\n                    display: inline;\n                }\n                &:hover {\n                    .dplayer-label {\n                        display: none;\n                    }\n                    .dplayer-danmaku-bar-wrap {\n                        display: inline-block;\n                    }\n                }\n                &.dplayer-setting-danmaku-active {\n                    .dplayer-label {\n                        display: none;\n                    }\n                    .dplayer-danmaku-bar-wrap {\n                        display: inline-block;\n                    }\n                }\n                .dplayer-danmaku-bar-wrap {\n                    padding: 0 10px;\n                    box-sizing: border-box;\n                    display: none;\n                    vertical-align: middle;\n                    height: 100%;\n                    width: 100%;\n                    .dplayer-danmaku-bar {\n                        position: relative;\n                        top: 8.5px;\n                        width: 100%;\n                        height: 3px;\n                        background: #fff;\n                        transition: all 0.3s ease-in-out;\n                        .dplayer-danmaku-bar-inner {\n                            position: absolute;\n                            bottom: 0;\n                            left: 0;\n                            height: 100%;\n                            transition: all 0.1s ease;\n                            background: #aaa;\n                            will-change: width;\n                            .dplayer-thumb {\n                                position: absolute;\n                                top: 0;\n                                right: 5px;\n                                margin-top: -4px;\n                                margin-right: -10px;\n                                height: 11px;\n                                width: 11px;\n                                border-radius: 50%;\n                                cursor: pointer;\n                                transition: all .3s ease-in-out;\n                                background: #aaa;\n                            }\n                        }\n                    }\n                }\n            }\n        }\n        .dplayer-full {\n            display: inline-block;\n            height: 100%;\n            position: relative;\n            &:hover {\n                .dplayer-full-in-icon {\n                    display: block;\n                }\n            }\n            .dplayer-full-in-icon {\n                position: absolute;\n                top: -30px;\n                z-index: 1;\n                display: none;\n            }\n        }\n        .dplayer-quality {\n            position: relative;\n            display: inline-block;\n            height: 100%;\n            z-index: 2;\n            &:hover {\n                .dplayer-quality-list {\n                    display: block;\n                }\n                .dplayer-quality-mask {\n                    display: block;\n                }\n            }\n            .dplayer-quality-mask {\n                display: none;\n                position: absolute;\n                bottom: 38px;\n                left: -18px;\n                width: 80px;\n                padding-bottom: 12px;\n            }\n            .dplayer-quality-list {\n                display: none;\n                font-size: 12px;\n                width: 80px;\n                border-radius: 2px;\n                background: rgba(28, 28, 28, 0.9);\n                padding: 5px 0;\n                transition: all .3s ease-in-out;\n                overflow: hidden;\n                color: #fff;\n                text-align: center;\n            }\n            .dplayer-quality-item {\n                height: 25px;\n                box-sizing: border-box;\n                cursor: pointer;\n                line-height: 25px;\n                &:hover {\n                    background-color: rgba(255, 255, 255, .1);\n                }\n            }\n        }\n        .dplayer-comment {\n            display: inline-block;\n            height: 100%;\n        }\n        .dplayer-label {\n            color: #eee;\n            font-size: 13px;\n            display: inline-block;\n            vertical-align: middle;\n            white-space: nowrap;\n        }\n        .dplayer-toggle {\n            width: 32px;\n            height: 20px;\n            text-align: center;\n            font-size: 0;\n            vertical-align: middle;\n            position: absolute;\n            top: 5px;\n            right: 10px;\n            input {\n                max-height: 0;\n                max-width: 0;\n                display: none;\n            }\n            input+label {\n                display: inline-block;\n                position: relative;\n                box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n                border: 1px solid rgb(223, 223, 223);\n                height: 20px;\n                width: 32px;\n                border-radius: 10px;\n                box-sizing: border-box;\n                cursor: pointer;\n                transition: .2s ease-in-out;\n            }\n            input+label:before {\n                content: "";\n                position: absolute;\n                display: block;\n                height: 18px;\n                width: 18px;\n                top: 0;\n                left: 0;\n                border-radius: 15px;\n                transition: .2s ease-in-out;\n            }\n            input+label:after {\n                content: "";\n                position: absolute;\n                display: block;\n                left: 0;\n                top: 0;\n                border-radius: 15px;\n                background: #fff;\n                transition: .2s ease-in-out;\n                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n                height: 18px;\n                width: 18px;\n            }\n            input:checked+label {\n                border-color: rgba(255, 255, 255, 0.5);\n            }\n            input:checked+label:before {\n                width: 30px;\n                background: rgba(255, 255, 255, 0.5);\n            }\n            input:checked+label:after {\n                left: 12px;\n            }\n        }\n    }\n}\n\n.dplayer-mobile-play {\n    display: none;\n    width: 50px;\n    height: 50px;\n    border: none;\n    background-color: transparent;\n    outline: none;\n    cursor: pointer;\n    box-sizing: border-box;\n    position: absolute;\n    bottom: 0;\n    opacity: 0.8;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n}',".dplayer-danmaku {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    font-size: 22px;\n    color: #fff;\n    .dplayer-danmaku-item {\n        display: inline-block;\n        pointer-events: none;\n        user-select: none;\n        cursor: default;\n        white-space: nowrap;\n        text-shadow: .5px .5px .5px rgba(0, 0, 0, .5);\n        &--demo {\n            position: absolute;\n            visibility: hidden;\n        }\n    }\n    .dplayer-danmaku-right {\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        &.dplayer-danmaku-move {\n            will-change: transform;\n            animation-name: 'danmaku';\n            animation-timing-function: linear;\n            animation-play-state: paused;\n        }\n    }\n    @keyframes danmaku {\n        from {\n            transform: translateX(100%);\n        }\n    }\n    .dplayer-danmaku-top,\n    .dplayer-danmaku-bottom {\n        position: absolute;\n        width: 100%;\n        text-align: center;\n        visibility: hidden;\n        &.dplayer-danmaku-move {\n            will-change: visibility;\n            animation-name: 'danmaku-center';\n            animation-timing-function: linear;\n            animation-play-state: paused;\n        }\n    }\n    @keyframes danmaku-center {\n        from {\n            visibility: visible;\n        }\n        to {\n            visibility: visible;\n        }\n    }\n}",".dplayer-logo {\n    pointer-events: none;\n    position: absolute;\n    left: 20px;\n    top: 20px;\n    max-width: 50px;\n    max-height: 50px;\n    img {\n        max-width: 100%;\n        max-height: 100%;\n        background: none;\n    }\n}",".dplayer-menu {\n    position: absolute;\n    width: 170px;\n    border-radius: 2px;\n    background: rgba(28, 28, 28, 0.85);\n    padding: 5px 0;\n    overflow: hidden;\n    z-index: 3;\n    display: none;\n    &.dplayer-menu-show {\n        display: block;\n    }\n    .dplayer-menu-item {\n        height: 30px;\n        box-sizing: border-box;\n        cursor: pointer;\n        &:hover {\n            background-color: rgba(255, 255, 255, .1);\n        }\n        a {\n            display: inline-block;\n            padding: 0 10px;\n            line-height: 30px;\n            color: #eee;\n            font-size: 13px;\n            display: inline-block;\n            vertical-align: middle;\n            width: 100%;\n            box-sizing: border-box;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            &:hover {\n                text-decoration: none;\n            }\n        }\n    }\n}",".dplayer-notice-list{\n    position: absolute;\n    bottom: 60px;\n    left: 20px;\n\n    .dplayer-notice {\n        border-radius: 2px;\n        background: rgba(28, 28, 28, 0.9);\n        transition: all .3s ease-in-out;\n        overflow: hidden;\n        color: #fff;\n        display: table;\n        pointer-events: none;\n        animation: showNotice .3s ease 1 forwards;\n    }\n\n    .remove-notice{\n        animation: removeNotice .3s ease 1 forwards;\n    }\n}\n\n@keyframes showNotice {\n    from {\n        padding: 0;\n        font-size: 0;\n        margin-top: 0;\n    }\n    to {\n        padding: 7px 20px;\n        font-size: 14px;\n        margin-top: 5px;\n    }\n}\n\n@keyframes removeNotice {\n    0%{\n        padding: 7px 20px;\n        font-size: 14px;\n        margin-top: 5px;\n    }\n    20%{\n        font-size: 12px;\n    }\n    21%{\n        font-size: 0;\n        padding: 7px 10px;\n    }\n    100%{\n        padding: 0;\n        margin-top: 0;\n        font-size: 0;\n    }\n}\n",".dplayer-subtitle {\n    position: absolute;\n    bottom: 40px;\n    width: 90%;\n    left: 5%;\n    text-align: center;\n    color: #fff;\n    text-shadow: 0.5px 0.5px 0.5px rgba(0, 0, 0, 0.5);\n    font-size: 20px;\n    &.dplayer-subtitle-hide {\n        display: none;\n    }\n}",".dplayer-info-panel {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    width: 400px;\n    background: rgba(28, 28, 28, 0.8);\n    padding: 10px;\n    color: #fff;\n    font-size: 12px;\n    border-radius: 2px;\n\n    &-hide {\n        display: none;\n    }\n\n    .dplayer-info-panel-close {\n        cursor: pointer;\n        position: absolute;\n        right: 10px;\n        top: 10px;\n    }\n\n    .dplayer-info-panel-item {\n        & > span {\n            display: inline-block;\n            vertical-align: middle;\n            line-height: 15px;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n            overflow: hidden;\n        }\n    }\n\n    .dplayer-info-panel-item-title {\n        width: 100px;\n        text-align: right;\n        margin-right: 10px;\n    }\n    \n    .dplayer-info-panel-item-data {\n        width: 260px;\n    }\n}"],sourceRoot:""}]);const u=A},9624:n=>{"use strict";var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var r={},i=[],l=0;l<n.length;l++){var s=n[l],p=a.base?s[0]+a.base:s[0],d=r[p]||0,A="".concat(p," ").concat(d);r[p]=d+1;var c=t(A),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==c)e[c].references++,e[c].updater(u);else{var y=o(u,a);a.byIndex=l,e.splice(l,0,{identifier:A,updater:y,references:1})}i.push(A)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=a(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var l=t(r[i]);e[l].references--}for(var s=a(n,o),p=0;p<r.length;p++){var d=t(r[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=s}}},6892:n=>{"use strict";var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},2716:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},6359:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},6990:n=>{"use strict";n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},230:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},6251:n=>{n.exports='<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg"><path d="M288 90v96c0 20-16 36-36 36h-10c-16 0-16-24 0-24h10c7 0 12-5 12-12V90c0-7-5-12-12-12H36c-7 0-12 5-12 12v96c0 7 5 12 12 12h10c16 0 16 24 0 24H36c-20 0-36-16-36-36V90c0-20 16-36 36-36h216c20 0 36 16 36 36zm-120 62l48 68c14 20 1 38-20 38H92c-21 0-34-18-20-38l48-68c13-18 35-18 48 0z"></path></svg>'},8113:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'},3193:n=>{n.exports='<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="chromecast" class="svg-inline--fa fa-chromecast fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M447.8,64H64c-23.6,0-42.7,19.1-42.7,42.7v63.9H64v-63.9h383.8v298.6H298.6V448H448c23.6,0,42.7-19.1,42.7-42.7V106.7 C490.7,83.1,471.4,64,447.8,64z M21.3,383.6L21.3,383.6l0,63.9h63.9C85.2,412.2,56.6,383.6,21.3,383.6L21.3,383.6z M21.3,298.6V341 c58.9,0,106.6,48.1,106.6,107h42.7C170.7,365.6,103.7,298.7,21.3,298.6z M213.4,448h42.7c-0.5-129.5-105.3-234.3-234.8-234.6l0,42.4 C127.3,255.6,213.3,342,213.4,448z"></path></svg>'},338:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'},2807:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'},1415:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'},4574:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'},4182:n=>{n.exports='<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'},1965:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'},6074:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'},730:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'},1428:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'},2254:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'},5934:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'},8410:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'},2644:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'},1324:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'},4437:n=>{n.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'},9959:(n,e,t)=>{"use strict";var a="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t.g?t.g:{},o=Object.create(a),r=/["&'<>]/;function i(n){return"string"!=typeof n&&(n=null==n?"":"function"==typeof n?i(n.call(n)):JSON.stringify(n)),n}o.$escape=function(n){return function(n){var e=""+n,t=r.exec(e);if(!t)return n;var a="",o=void 0,i=void 0,l=void 0;for(o=t.index,i=0;o<e.length;o++){switch(e.charCodeAt(o)){case 34:l="&#34;";break;case 38:l="&#38;";break;case 39:l="&#39;";break;case 60:l="&#60;";break;case 62:l="&#62;";break;default:continue}i!==o&&(a+=e.substring(i,o)),i=o+1,a+=l}return i!==o?a+e.substring(i,o):a}(i(n))},o.$each=function(n,e){if(Array.isArray(n))for(var t=0,a=n.length;t<a;t++)e(n[t],t);else for(var o in n)e(n[o],o)},n.exports=o},6877:(n,e,t)=>{"use strict";n.exports=t(9959)},6208:(n,e,t)=>{n.exports=t(4568)},8170:(n,e,t)=>{"use strict";var a=t(7201),o=t(9095),r=t(8416),i=t(6374),l=t(5967),s=t(5032),p=t(1224),d=t(4033),A=t(1766),c=t(8832),u=t(8699);n.exports=function(n){return new Promise((function(e,t){var y,h=n.data,m=n.headers,f=n.responseType;function b(){n.cancelToken&&n.cancelToken.unsubscribe(y),n.signal&&n.signal.removeEventListener("abort",y)}a.isFormData(h)&&a.isStandardBrowserEnv()&&delete m["Content-Type"];var g=new XMLHttpRequest;if(n.auth){var v=n.auth.username||"",E=n.auth.password?unescape(encodeURIComponent(n.auth.password)):"";m.Authorization="Basic "+btoa(v+":"+E)}var x=l(n.baseURL,n.url);function C(){if(g){var a="getAllResponseHeaders"in g?s(g.getAllResponseHeaders()):null,r={data:f&&"text"!==f&&"json"!==f?g.response:g.responseText,status:g.status,statusText:g.statusText,headers:a,config:n,request:g};o((function(n){e(n),b()}),(function(n){t(n),b()}),r),g=null}}if(g.open(n.method.toUpperCase(),i(x,n.params,n.paramsSerializer),!0),g.timeout=n.timeout,"onloadend"in g?g.onloadend=C:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(C)},g.onabort=function(){g&&(t(new A("Request aborted",A.ECONNABORTED,n,g)),g=null)},g.onerror=function(){t(new A("Network Error",A.ERR_NETWORK,n,g,g)),g=null},g.ontimeout=function(){var e=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded",a=n.transitional||d;n.timeoutErrorMessage&&(e=n.timeoutErrorMessage),t(new A(e,a.clarifyTimeoutError?A.ETIMEDOUT:A.ECONNABORTED,n,g)),g=null},a.isStandardBrowserEnv()){var k=(n.withCredentials||p(x))&&n.xsrfCookieName?r.read(n.xsrfCookieName):void 0;k&&(m[n.xsrfHeaderName]=k)}"setRequestHeader"in g&&a.forEach(m,(function(n,e){void 0===h&&"content-type"===e.toLowerCase()?delete m[e]:g.setRequestHeader(e,n)})),a.isUndefined(n.withCredentials)||(g.withCredentials=!!n.withCredentials),f&&"json"!==f&&(g.responseType=n.responseType),"function"==typeof n.onDownloadProgress&&g.addEventListener("progress",n.onDownloadProgress),"function"==typeof n.onUploadProgress&&g.upload&&g.upload.addEventListener("progress",n.onUploadProgress),(n.cancelToken||n.signal)&&(y=function(n){g&&(t(!n||n&&n.type?new c:n),g.abort(),g=null)},n.cancelToken&&n.cancelToken.subscribe(y),n.signal&&(n.signal.aborted?y():n.signal.addEventListener("abort",y))),h||(h=null);var w=u(x);w&&-1===["http","https","file"].indexOf(w)?t(new A("Unsupported protocol "+w+":",A.ERR_BAD_REQUEST,n)):g.send(h)}))}},4568:(n,e,t)=>{"use strict";var a=t(7201),o=t(5305),r=t(2275),i=t(9834),l=function n(e){var t=new r(e),l=o(r.prototype.request,t);return a.extend(l,r.prototype,t),a.extend(l,t),l.create=function(t){return n(i(e,t))},l}(t(6339));l.Axios=r,l.CanceledError=t(8832),l.CancelToken=t(5027),l.isCancel=t(1893),l.VERSION=t(4316).version,l.toFormData=t(6615),l.AxiosError=t(1766),l.Cancel=l.CanceledError,l.all=function(n){return Promise.all(n)},l.spread=t(3282),l.isAxiosError=t(3319),n.exports=l,n.exports.default=l},5027:(n,e,t)=>{"use strict";var a=t(8832);function o(n){if("function"!=typeof n)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(n){e=n}));var t=this;this.promise.then((function(n){if(t._listeners){var e,a=t._listeners.length;for(e=0;e<a;e++)t._listeners[e](n);t._listeners=null}})),this.promise.then=function(n){var e,a=new Promise((function(n){t.subscribe(n),e=n})).then(n);return a.cancel=function(){t.unsubscribe(e)},a},n((function(n){t.reason||(t.reason=new a(n),e(t.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(n){this.reason?n(this.reason):this._listeners?this._listeners.push(n):this._listeners=[n]},o.prototype.unsubscribe=function(n){if(this._listeners){var e=this._listeners.indexOf(n);-1!==e&&this._listeners.splice(e,1)}},o.source=function(){var n;return{token:new o((function(e){n=e})),cancel:n}},n.exports=o},8832:(n,e,t)=>{"use strict";var a=t(1766);function o(n){a.call(this,null==n?"canceled":n,a.ERR_CANCELED),this.name="CanceledError"}t(7201).inherits(o,a,{__CANCEL__:!0}),n.exports=o},1893:n=>{"use strict";n.exports=function(n){return!(!n||!n.__CANCEL__)}},2275:(n,e,t)=>{"use strict";var a=t(7201),o=t(6374),r=t(6808),i=t(7313),l=t(9834),s=t(5967),p=t(9712),d=p.validators;function A(n){this.defaults=n,this.interceptors={request:new r,response:new r}}A.prototype.request=function(n,e){"string"==typeof n?(e=e||{}).url=n:e=n||{},(e=l(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&p.assertOptions(t,{silentJSONParsing:d.transitional(d.boolean),forcedJSONParsing:d.transitional(d.boolean),clarifyTimeoutError:d.transitional(d.boolean)},!1);var a=[],o=!0;this.interceptors.request.forEach((function(n){"function"==typeof n.runWhen&&!1===n.runWhen(e)||(o=o&&n.synchronous,a.unshift(n.fulfilled,n.rejected))}));var r,s=[];if(this.interceptors.response.forEach((function(n){s.push(n.fulfilled,n.rejected)})),!o){var A=[i,void 0];for(Array.prototype.unshift.apply(A,a),A=A.concat(s),r=Promise.resolve(e);A.length;)r=r.then(A.shift(),A.shift());return r}for(var c=e;a.length;){var u=a.shift(),y=a.shift();try{c=u(c)}catch(n){y(n);break}}try{r=i(c)}catch(n){return Promise.reject(n)}for(;s.length;)r=r.then(s.shift(),s.shift());return r},A.prototype.getUri=function(n){n=l(this.defaults,n);var e=s(n.baseURL,n.url);return o(e,n.params,n.paramsSerializer)},a.forEach(["delete","get","head","options"],(function(n){A.prototype[n]=function(e,t){return this.request(l(t||{},{method:n,url:e,data:(t||{}).data}))}})),a.forEach(["post","put","patch"],(function(n){function e(e){return function(t,a,o){return this.request(l(o||{},{method:n,headers:e?{"Content-Type":"multipart/form-data"}:{},url:t,data:a}))}}A.prototype[n]=e(),A.prototype[n+"Form"]=e(!0)})),n.exports=A},1766:(n,e,t)=>{"use strict";var a=t(7201);function o(n,e,t,a,o){Error.call(this),this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),a&&(this.request=a),o&&(this.response=o)}a.inherits(o,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var r=o.prototype,i={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(n){i[n]={value:n}})),Object.defineProperties(o,i),Object.defineProperty(r,"isAxiosError",{value:!0}),o.from=function(n,e,t,i,l,s){var p=Object.create(r);return a.toFlatObject(n,p,(function(n){return n!==Error.prototype})),o.call(p,n.message,e,t,i,l),p.name=n.name,s&&Object.assign(p,s),p},n.exports=o},6808:(n,e,t)=>{"use strict";var a=t(7201);function o(){this.handlers=[]}o.prototype.use=function(n,e,t){return this.handlers.push({fulfilled:n,rejected:e,synchronous:!!t&&t.synchronous,runWhen:t?t.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(n){this.handlers[n]&&(this.handlers[n]=null)},o.prototype.forEach=function(n){a.forEach(this.handlers,(function(e){null!==e&&n(e)}))},n.exports=o},5967:(n,e,t)=>{"use strict";var a=t(724),o=t(4669);n.exports=function(n,e){return n&&!a(e)?o(n,e):e}},7313:(n,e,t)=>{"use strict";var a=t(7201),o=t(6431),r=t(1893),i=t(6339),l=t(8832);function s(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new l}n.exports=function(n){return s(n),n.headers=n.headers||{},n.data=o.call(n,n.data,n.headers,n.transformRequest),n.headers=a.merge(n.headers.common||{},n.headers[n.method]||{},n.headers),a.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete n.headers[e]})),(n.adapter||i.adapter)(n).then((function(e){return s(n),e.data=o.call(n,e.data,e.headers,n.transformResponse),e}),(function(e){return r(e)||(s(n),e&&e.response&&(e.response.data=o.call(n,e.response.data,e.response.headers,n.transformResponse))),Promise.reject(e)}))}},9834:(n,e,t)=>{"use strict";var a=t(7201);n.exports=function(n,e){e=e||{};var t={};function o(n,e){return a.isPlainObject(n)&&a.isPlainObject(e)?a.merge(n,e):a.isPlainObject(e)?a.merge({},e):a.isArray(e)?e.slice():e}function r(t){return a.isUndefined(e[t])?a.isUndefined(n[t])?void 0:o(void 0,n[t]):o(n[t],e[t])}function i(n){if(!a.isUndefined(e[n]))return o(void 0,e[n])}function l(t){return a.isUndefined(e[t])?a.isUndefined(n[t])?void 0:o(void 0,n[t]):o(void 0,e[t])}function s(t){return t in e?o(n[t],e[t]):t in n?o(void 0,n[t]):void 0}var p={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:s};return a.forEach(Object.keys(n).concat(Object.keys(e)),(function(n){var e=p[n]||r,o=e(n);a.isUndefined(o)&&e!==s||(t[n]=o)})),t}},9095:(n,e,t)=>{"use strict";var a=t(1766);n.exports=function(n,e,t){var o=t.config.validateStatus;t.status&&o&&!o(t.status)?e(new a("Request failed with status code "+t.status,[a.ERR_BAD_REQUEST,a.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t)):n(t)}},6431:(n,e,t)=>{"use strict";var a=t(7201),o=t(6339);n.exports=function(n,e,t){var r=this||o;return a.forEach(t,(function(t){n=t.call(r,n,e)})),n}},6339:(n,e,t)=>{"use strict";var a=t(7201),o=t(5227),r=t(1766),i=t(4033),l=t(6615),s={"Content-Type":"application/x-www-form-urlencoded"};function p(n,e){!a.isUndefined(n)&&a.isUndefined(n["Content-Type"])&&(n["Content-Type"]=e)}var d,A={transitional:i,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(d=t(8170)),d),transformRequest:[function(n,e){if(o(e,"Accept"),o(e,"Content-Type"),a.isFormData(n)||a.isArrayBuffer(n)||a.isBuffer(n)||a.isStream(n)||a.isFile(n)||a.isBlob(n))return n;if(a.isArrayBufferView(n))return n.buffer;if(a.isURLSearchParams(n))return p(e,"application/x-www-form-urlencoded;charset=utf-8"),n.toString();var t,r=a.isObject(n),i=e&&e["Content-Type"];if((t=a.isFileList(n))||r&&"multipart/form-data"===i){var s=this.env&&this.env.FormData;return l(t?{"files[]":n}:n,s&&new s)}return r||"application/json"===i?(p(e,"application/json"),function(n,e,t){if(a.isString(n))try{return(0,JSON.parse)(n),a.trim(n)}catch(n){if("SyntaxError"!==n.name)throw n}return(0,JSON.stringify)(n)}(n)):n}],transformResponse:[function(n){var e=this.transitional||A.transitional,t=e&&e.silentJSONParsing,o=e&&e.forcedJSONParsing,i=!t&&"json"===this.responseType;if(i||o&&a.isString(n)&&n.length)try{return JSON.parse(n)}catch(n){if(i){if("SyntaxError"===n.name)throw r.from(n,r.ERR_BAD_RESPONSE,this,null,this.response);throw n}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:t(3997)},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],(function(n){A.headers[n]={}})),a.forEach(["post","put","patch"],(function(n){A.headers[n]=a.merge(s)})),n.exports=A},4033:n=>{"use strict";n.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},4316:n=>{n.exports={version:"0.27.2"}},5305:n=>{"use strict";n.exports=function(n,e){return function(){for(var t=new Array(arguments.length),a=0;a<t.length;a++)t[a]=arguments[a];return n.apply(e,t)}}},6374:(n,e,t)=>{"use strict";var a=t(7201);function o(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}n.exports=function(n,e,t){if(!e)return n;var r;if(t)r=t(e);else if(a.isURLSearchParams(e))r=e.toString();else{var i=[];a.forEach(e,(function(n,e){null!=n&&(a.isArray(n)?e+="[]":n=[n],a.forEach(n,(function(n){a.isDate(n)?n=n.toISOString():a.isObject(n)&&(n=JSON.stringify(n)),i.push(o(e)+"="+o(n))})))})),r=i.join("&")}if(r){var l=n.indexOf("#");-1!==l&&(n=n.slice(0,l)),n+=(-1===n.indexOf("?")?"?":"&")+r}return n}},4669:n=>{"use strict";n.exports=function(n,e){return e?n.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):n}},8416:(n,e,t)=>{"use strict";var a=t(7201);n.exports=a.isStandardBrowserEnv()?{write:function(n,e,t,o,r,i){var l=[];l.push(n+"="+encodeURIComponent(e)),a.isNumber(t)&&l.push("expires="+new Date(t).toGMTString()),a.isString(o)&&l.push("path="+o),a.isString(r)&&l.push("domain="+r),!0===i&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){var e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},724:n=>{"use strict";n.exports=function(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}},3319:(n,e,t)=>{"use strict";var a=t(7201);n.exports=function(n){return a.isObject(n)&&!0===n.isAxiosError}},1224:(n,e,t)=>{"use strict";var a=t(7201);n.exports=a.isStandardBrowserEnv()?function(){var n,e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");function o(n){var a=n;return e&&(t.setAttribute("href",a),a=t.href),t.setAttribute("href",a),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=o(window.location.href),function(e){var t=a.isString(e)?o(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0}},5227:(n,e,t)=>{"use strict";var a=t(7201);n.exports=function(n,e){a.forEach(n,(function(t,a){a!==e&&a.toUpperCase()===e.toUpperCase()&&(n[e]=t,delete n[a])}))}},3997:n=>{n.exports=null},5032:(n,e,t)=>{"use strict";var a=t(7201),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];n.exports=function(n){var e,t,r,i={};return n?(a.forEach(n.split("\n"),(function(n){if(r=n.indexOf(":"),e=a.trim(n.substr(0,r)).toLowerCase(),t=a.trim(n.substr(r+1)),e){if(i[e]&&o.indexOf(e)>=0)return;i[e]="set-cookie"===e?(i[e]?i[e]:[]).concat([t]):i[e]?i[e]+", "+t:t}})),i):i}},8699:n=>{"use strict";n.exports=function(n){var e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}},3282:n=>{"use strict";n.exports=function(n){return function(e){return n.apply(null,e)}}},6615:(n,e,t)=>{"use strict";function a(n){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a(n)}var o=t(7201);n.exports=function(n,e){e=e||new FormData;var t=[];function r(n){return null===n?"":o.isDate(n)?n.toISOString():o.isArrayBuffer(n)||o.isTypedArray(n)?"function"==typeof Blob?new Blob([n]):Buffer.from(n):n}return function n(i,l){if(o.isPlainObject(i)||o.isArray(i)){if(-1!==t.indexOf(i))throw Error("Circular reference detected in "+l);t.push(i),o.forEach(i,(function(t,i){if(!o.isUndefined(t)){var s,p=l?l+"."+i:i;if(t&&!l&&"object"===a(t))if(o.endsWith(i,"{}"))t=JSON.stringify(t);else if(o.endsWith(i,"[]")&&(s=o.toArray(t)))return void s.forEach((function(n){!o.isUndefined(n)&&e.append(p,r(n))}));n(t,p)}})),t.pop()}else e.append(l,r(i))}(n),e}},9712:(n,e,t)=>{"use strict";function a(n){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a(n)}var o=t(4316).version,r=t(1766),i={};["object","boolean","number","function","string","symbol"].forEach((function(n,e){i[n]=function(t){return a(t)===n||"a"+(e<1?"n ":" ")+n}}));var l={};i.transitional=function(n,e,t){function a(n,e){return"[Axios v"+o+"] Transitional option '"+n+"'"+e+(t?". "+t:"")}return function(t,o,i){if(!1===n)throw new r(a(o," has been removed"+(e?" in "+e:"")),r.ERR_DEPRECATED);return e&&!l[o]&&(l[o]=!0,console.warn(a(o," has been deprecated since v"+e+" and will be removed in the near future"))),!n||n(t,o,i)}},n.exports={assertOptions:function(n,e,t){if("object"!==a(n))throw new r("options must be an object",r.ERR_BAD_OPTION_VALUE);for(var o=Object.keys(n),i=o.length;i-- >0;){var l=o[i],s=e[l];if(s){var p=n[l],d=void 0===p||s(p,l,n);if(!0!==d)throw new r("option "+l+" must be "+d,r.ERR_BAD_OPTION_VALUE)}else if(!0!==t)throw new r("Unknown option "+l,r.ERR_BAD_OPTION)}},validators:i}},7201:(n,e,t)=>{"use strict";function a(n){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a(n)}var o,r=t(5305),i=Object.prototype.toString,l=(o=Object.create(null),function(n){var e=i.call(n);return o[e]||(o[e]=e.slice(8,-1).toLowerCase())});function s(n){return n=n.toLowerCase(),function(e){return l(e)===n}}function p(n){return Array.isArray(n)}function d(n){return void 0===n}var A=s("ArrayBuffer");function c(n){return null!==n&&"object"===a(n)}function u(n){if("object"!==l(n))return!1;var e=Object.getPrototypeOf(n);return null===e||e===Object.prototype}var y=s("Date"),h=s("File"),m=s("Blob"),f=s("FileList");function b(n){return"[object Function]"===i.call(n)}var g=s("URLSearchParams");function v(n,e){if(null!=n)if("object"!==a(n)&&(n=[n]),p(n))for(var t=0,o=n.length;t<o;t++)e.call(null,n[t],t,n);else for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.call(null,n[r],r,n)}var E,x=(E="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(n){return E&&n instanceof E});n.exports={isArray:p,isArrayBuffer:A,isBuffer:function(n){return null!==n&&!d(n)&&null!==n.constructor&&!d(n.constructor)&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n)},isFormData:function(n){var e="[object FormData]";return n&&("function"==typeof FormData&&n instanceof FormData||i.call(n)===e||b(n.toString)&&n.toString()===e)},isArrayBufferView:function(n){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(n):n&&n.buffer&&A(n.buffer)},isString:function(n){return"string"==typeof n},isNumber:function(n){return"number"==typeof n},isObject:c,isPlainObject:u,isUndefined:d,isDate:y,isFile:h,isBlob:m,isFunction:b,isStream:function(n){return c(n)&&b(n.pipe)},isURLSearchParams:g,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:v,merge:function n(){var e={};function t(t,a){u(e[a])&&u(t)?e[a]=n(e[a],t):u(t)?e[a]=n({},t):p(t)?e[a]=t.slice():e[a]=t}for(var a=0,o=arguments.length;a<o;a++)v(arguments[a],t);return e},extend:function(n,e,t){return v(e,(function(e,a){n[a]=t&&"function"==typeof e?r(e,t):e})),n},trim:function(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")},stripBOM:function(n){return 65279===n.charCodeAt(0)&&(n=n.slice(1)),n},inherits:function(n,e,t,a){n.prototype=Object.create(e.prototype,a),n.prototype.constructor=n,t&&Object.assign(n.prototype,t)},toFlatObject:function(n,e,t){var a,o,r,i={};e=e||{};do{for(o=(a=Object.getOwnPropertyNames(n)).length;o-- >0;)i[r=a[o]]||(e[r]=n[r],i[r]=!0);n=Object.getPrototypeOf(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},kindOf:l,kindOfTest:s,endsWith:function(n,e,t){n=String(n),(void 0===t||t>n.length)&&(t=n.length),t-=e.length;var a=n.indexOf(e,t);return-1!==a&&a===t},toArray:function(n){if(!n)return null;var e=n.length;if(d(e))return null;for(var t=new Array(e);e-- >0;)t[e]=n[e];return t},isTypedArray:x,isFileList:f}},8160:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);a&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},8431:n=>{"use strict";n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},8955:n=>{"use strict";n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),r="/*# ".concat(o," */"),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([r]).join("\n")}return[e].join("\n")}},7831:n=>{"use strict";n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg=="}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={id:a,exports:{}};return n[a](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.b=document.baseURI||self.location.href,t.nc=void 0;var a={};return(()=>{"use strict";t.d(a,{default:()=>bt});var n=t(9624),e=t.n(n),o=t(6990),r=t.n(o),i=t(6892),l=t.n(i),s=t(6359),p=t.n(s),d=t(2716),A=t.n(d),c=t(230),u=t.n(c),y=t(3150),h={};h.styleTagTransform=u(),h.setAttributes=p(),h.insert=l().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=A(),e()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals;function m(n){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},m(n)}function f(n){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},f(n)}var b=setTimeout;function g(n){return Boolean(n&&void 0!==n.length)}function v(){}function E(n){if(!(this instanceof E))throw new TypeError("Promises must be constructed via new");if("function"!=typeof n)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],I(n,this)}function x(n,e){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,E._immediateFn((function(){var t=1===n._state?e.onFulfilled:e.onRejected;if(null!==t){var a;try{a=t(n._value)}catch(n){return void k(e.promise,n)}C(e.promise,a)}else(1===n._state?C:k)(e.promise,n._value)}))):n._deferreds.push(e)}function C(n,e){try{if(e===n)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"===f(e)||"function"==typeof e)){var t=e.then;if(e instanceof E)return n._state=3,n._value=e,void w(n);if("function"==typeof t)return void I((a=t,o=e,function(){a.apply(o,arguments)}),n)}n._state=1,n._value=e,w(n)}catch(e){k(n,e)}var a,o}function k(n,e){n._state=2,n._value=e,w(n)}function w(n){2===n._state&&0===n._deferreds.length&&E._immediateFn((function(){n._handled||E._unhandledRejectionFn(n._value)}));for(var e=0,t=n._deferreds.length;e<t;e++)x(n,n._deferreds[e]);n._deferreds=null}function B(n,e,t){this.onFulfilled="function"==typeof n?n:null,this.onRejected="function"==typeof e?e:null,this.promise=t}function I(n,e){var t=!1;try{n((function(n){t||(t=!0,C(e,n))}),(function(n){t||(t=!0,k(e,n))}))}catch(n){if(t)return;t=!0,k(e,n)}}E.prototype.catch=function(n){return this.then(null,n)},E.prototype.then=function(n,e){var t=new this.constructor(v);return x(this,new B(n,e,t)),t},E.prototype.finally=function(n){var e=this.constructor;return this.then((function(t){return e.resolve(n()).then((function(){return t}))}),(function(t){return e.resolve(n()).then((function(){return e.reject(t)}))}))},E.all=function(n){return new E((function(e,t){if(!g(n))return t(new TypeError("Promise.all accepts an array"));var a=Array.prototype.slice.call(n);if(0===a.length)return e([]);var o=a.length;function r(n,i){try{if(i&&("object"===f(i)||"function"==typeof i)){var l=i.then;if("function"==typeof l)return void l.call(i,(function(e){r(n,e)}),t)}a[n]=i,0==--o&&e(a)}catch(n){t(n)}}for(var i=0;i<a.length;i++)r(i,a[i])}))},E.allSettled=function(n){return new this((function(e,t){if(!n||void 0===n.length)return t(new TypeError(m(n)+" "+n+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var a=Array.prototype.slice.call(n);if(0===a.length)return e([]);var o=a.length;function r(n,t){if(t&&("object"===m(t)||"function"==typeof t)){var i=t.then;if("function"==typeof i)return void i.call(t,(function(e){r(n,e)}),(function(t){a[n]={status:"rejected",reason:t},0==--o&&e(a)}))}a[n]={status:"fulfilled",value:t},0==--o&&e(a)}for(var i=0;i<a.length;i++)r(i,a[i])}))},E.resolve=function(n){return n&&"object"===f(n)&&n.constructor===E?n:new E((function(e){e(n)}))},E.reject=function(n){return new E((function(e,t){t(n)}))},E.race=function(n){return new E((function(e,t){if(!g(n))return t(new TypeError("Promise.race accepts an array"));for(var a=0,o=n.length;a<o;a++)E.resolve(n[a]).then(e,t)}))},E._immediateFn="function"==typeof setImmediate&&function(n){setImmediate(n)}||function(n){b(n,0)},E._unhandledRejectionFn=function(n){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",n)};const S=E;var L=/mobile/i.test(window.navigator.userAgent);const z={secondToTime:function(n){if(0===(n=n||0)||n===1/0||"NaN"===n.toString())return"00:00";var e=Math.floor(n/3600),t=Math.floor((n-3600*e)/60),a=Math.floor(n-3600*e-60*t);return(e>0?[e,t,a]:[t,a]).map((function(n){return n<10?"0"+n:""+n})).join(":")},getElementViewLeft:function(n){var e=n.offsetLeft,t=n.offsetParent,a=document.body.scrollLeft+document.documentElement.scrollLeft;if(document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement)for(;null!==t&&t!==n;)e+=t.offsetLeft,t=t.offsetParent;else for(;null!==t;)e+=t.offsetLeft,t=t.offsetParent;return e-a},getBoundingClientRectViewLeft:function(n){var e=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);if(n.getBoundingClientRect){if("number"!=typeof this.getBoundingClientRectViewLeft.offset){var t=document.createElement("div");t.style.cssText="position:absolute;top:0;left:0;",document.body.appendChild(t),this.getBoundingClientRectViewLeft.offset=-t.getBoundingClientRect().top-e,document.body.removeChild(t),t=null}var a=n.getBoundingClientRect(),o=this.getBoundingClientRectViewLeft.offset;return a.left+o}return this.getElementViewLeft(n)},getScrollPosition:function(){return{left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0,top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}},setScrollPosition:function(n){var e=n.left,t=void 0===e?0:e,a=n.top,o=void 0===a?0:a;this.isFirefox?(document.documentElement.scrollLeft=t,document.documentElement.scrollTop=o):window.scrollTo(t,o)},isMobile:L,isFirefox:/firefox/i.test(window.navigator.userAgent),isChrome:/chrome/i.test(window.navigator.userAgent),isSafari:/safari/i.test(window.navigator.userAgent),storage:{set:function(n,e){localStorage.setItem(n,e)},get:function(n){return localStorage.getItem(n)}},nameMap:{dragStart:L?"touchstart":"mousedown",dragMove:L?"touchmove":"mousemove",dragEnd:L?"touchend":"mouseup"},color2Number:function(n){return"#"===n[0]&&(n=n.substr(1)),3===n.length&&(n="".concat(n[0]).concat(n[0]).concat(n[1]).concat(n[1]).concat(n[2]).concat(n[2])),parseInt(n,16)+0&16777215},number2Color:function(n){return"#"+("00000"+n.toString(16)).slice(-6)},number2Type:function(n){switch(n){case 0:default:return"right";case 1:return"top";case 2:return"bottom"}}};var q=t(6208),D=t.n(q);const T={send:function(n){D().post(n.url,n.data).then((function(e){var t=e.data;t&&0===t.code?n.success&&n.success(t):n.error&&n.error(t&&t.msg)})).catch((function(e){console.error(e),n.error&&n.error()}))},read:function(n){D().get(n.url).then((function(e){var t=e.data;t&&0===t.code?n.success&&n.success(t.data.map((function(n){return{time:n[0],type:n[1],color:n[2],author:n[3],text:n[4]}}))):n.error&&n.error(t&&t.msg)})).catch((function(e){console.error(e),n.error&&n.error()}))}};function O(n){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},O(n)}function Y(n){var e=this;this.lang=n,this.fallbackLang=this.lang.includes("-")?this.lang.split("-")[0]:this.lang,this.tran=function(n){return n=n.toLowerCase(),M[e.lang]&&M[e.lang][n]?M[e.lang][n]:M[e.fallbackLang]&&M[e.fallbackLang][n]?M[e.fallbackLang][n]:N[n]?N[n]:n}}var N={"danmaku-loading":"Danmaku is loading",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Input danmaku, hit Enter","about-author":"About author","dplayer-feedback":"DPlayer feedback","about-dplayer":"About DPlayer",loop:"Loop",speed:"Speed","opacity-danmaku":"Opacity for danmaku",normal:"Normal","please-input-danmaku":"Please input danmaku content!","set-danmaku-color":"Set danmaku color","set-danmaku-type":"Set danmaku type","show-danmaku":"Show danmaku","video-failed":"Video load failed","danmaku-failed":"Danmaku load failed","danmaku-send-failed":"Danmaku send failed","switching-quality":"Switching to %q quality","switched-quality":"Switched to %q quality",ff:"FF %s s",rew:"REW %s s","unlimited-danmaku":"Unlimited danmaku","send-danmaku":"Send danmaku",setting:"Setting",fullscreen:"Full screen","web-fullscreen":"Web full screen",send:"Send",screenshot:"Screenshot",airplay:"AirPlay",chromecast:"ChromeCast",subtitle:"Subtitle",off:"Off","show-subs":"Show subtitle","hide-subs":"Hide subtitle",volume:"Volume",live:"Live","video-info":"Video info"},M={en:N,"zh-cn":{"danmaku-loading":"弹幕加载中",top:"顶部",bottom:"底部",rolling:"滚动","input-danmaku-enter":"输入弹幕，回车发送","about-author":"关于作者","dplayer-feedback":"播放器意见反馈","about-dplayer":"关于 DPlayer 播放器",loop:"洗脑循环",speed:"速度","opacity-danmaku":"弹幕透明度",normal:"正常","please-input-danmaku":"要输入弹幕内容啊喂！","set-danmaku-color":"设置弹幕颜色","set-danmaku-type":"设置弹幕类型","show-danmaku":"显示弹幕","video-failed":"视频加载失败","danmaku-failed":"弹幕加载失败","danmaku-send-failed":"弹幕发送失败","switching-quality":"正在切换至 %q 画质","switched-quality":"已经切换至 %q 画质",ff:"快进 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"海量弹幕","send-danmaku":"发送弹幕",setting:"设置",fullscreen:"全屏","web-fullscreen":"页面全屏",send:"发送",screenshot:"截图",airplay:"无线投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"关闭","show-subs":"显示字幕","hide-subs":"隐藏字幕",volume:"音量",live:"直播","video-info":"视频统计信息"},"zh-tw":{"danmaku-loading":"彈幕載入中",top:"頂部",bottom:"底部",rolling:"滾動","input-danmaku-enter":"輸入彈幕，Enter 發送","about-author":"關於作者","dplayer-feedback":"播放器意見回饋","about-dplayer":"關於 DPlayer 播放器",loop:"循環播放",speed:"速度","opacity-danmaku":"彈幕透明度",normal:"正常","please-input-danmaku":"請輸入彈幕內容啊！","set-danmaku-color":"設定彈幕顏色","set-danmaku-type":"設定彈幕類型","show-danmaku":"顯示彈幕","video-failed":"影片載入失敗","danmaku-failed":"彈幕載入失敗","danmaku-send-failed":"彈幕發送失敗","switching-quality":"正在切換至 %q 畫質","switched-quality":"已經切換至 %q 畫質",ff:"快進 %s 秒",rew:"快退 %s 秒","unlimited-danmaku":"巨量彈幕","send-danmaku":"發送彈幕",setting:"設定",fullscreen:"全螢幕","web-fullscreen":"頁面全螢幕",send:"發送",screenshot:"截圖",airplay:"無線投屏",chromecast:"ChromeCast",subtitle:"字幕",off:"關閉","show-subs":"顯示字幕","hide-subs":"隱藏字幕",volume:"音量",live:"直播","video-info":"影片統計訊息"},"ko-kr":{"danmaku-loading":"Danmaku를 불러오는 중입니다.",top:"Top",bottom:"Bottom",rolling:"Rolling","input-danmaku-enter":"Danmaku를 입력하고 Enter를 누르세요.","about-author":"만든이","dplayer-feedback":"피드백 보내기","about-dplayer":"DPlayer 정보",loop:"반복",speed:"배속","opacity-danmaku":"Danmaku 불투명도",normal:"표준","please-input-danmaku":"Danmaku를 입력하세요!","set-danmaku-color":"Danmaku 색상","set-danmaku-type":"Danmaku 설정","show-danmaku":"Danmaku 표시","video-failed":"비디오를 불러오지 못했습니다.","danmaku-failed":"Danmaku를 불러오지 못했습니다.","danmaku-send-failed":"Danmaku 전송에 실패했습니다.","Switching to":"","Switched to":"","switching-quality":"전환 %q 화질","switched-quality":"전환 됨 %q 화질",ff:"앞으로 %s 초",rew:"뒤로 %s 초","unlimited-danmaku":"끝없는 Danmaku","send-danmaku":"Danmaku 보내기",setting:"설정",fullscreen:"전체 화면","web-fullscreen":"웹 내 전체화면",send:"보내기",screenshot:"화면 캡쳐",airplay:"에어플레이",chromecast:"ChromeCast",subtitle:"부제",off:"끄다","show-subs":"자막 보이기","hide-subs":"자막 숨기기",Volume:"볼륨",live:"생방송","video-info":"비디오 정보"},de:{"danmaku-loading":"Danmaku lädt...",top:"Oben",bottom:"Unten",rolling:"Rollend","input-danmaku-enter":"Drücke Enter nach dem Einfügen vom Danmaku","about-author":"Über den Autor","dplayer-feedback":"DPlayer Feedback","about-dplayer":"Über DPlayer",loop:"Wiederholen",speed:"Geschwindigkeit","opacity-danmaku":"Transparenz für Danmaku",normal:"Normal","please-input-danmaku":"Bitte Danmaku Inhalt eingeben!","set-danmaku-color":"Danmaku Farbe festlegen","set-danmaku-type":"Danmaku Typ festlegen","show-danmaku":"Zeige Danmaku","video-failed":"Das Video konnte nicht geladen werden","danmaku-failed":"Danmaku konnte nicht geladen werden","danmaku-send-failed":"Das senden von Danmaku ist fehgeschlagen","switching-quality":"Wechsle zur %q Qualität","switched-quality":"Zur %q Qualität gewechselt",ff:"%s s Vorwärts",rew:"%s s Zurück","unlimited-danmaku":"Unlimitiertes Danmaku","send-danmaku":"Sende Danmaku",setting:"Einstellungen",fullscreen:"Vollbild","web-fullscreen":"Browser Vollbild",send:"Senden",screenshot:"Screenshot",airplay:"AirPlay","show-subs":"Zeige Untertitel",chromecast:"ChromeCast",subtitle:"Untertitel",off:"Schließung","hide-subs":"Verstecke Untertitel",volume:"Lautstärke",live:"Live","video-info":"Video Info"}},j=t(730),R=t.n(j),_=t(6074),U=t.n(_),W=t(4437),P=t.n(W),F=t(2644),Q=t.n(F),H=t(1324),K=t.n(H),Z=t(4574),X=t.n(Z),V=t(1415),J=t.n(V),G=t(5934),$=t.n(G),nn=t(1428),en=t.n(nn),tn=t(2807),an=t.n(tn),on=t(338),rn=t.n(on),ln=t(2254),sn=t.n(ln),pn=t(1965),dn=t.n(pn),An=t(8113),cn=t.n(An),un=t(6251),yn=t.n(un),hn=t(8410),mn=t.n(hn),fn=t(4182),bn=t.n(fn),gn=t(3193),vn=t.n(gn);const En={play:R(),pause:U(),volumeUp:P(),volumeDown:Q(),volumeOff:K(),full:X(),fullWeb:J(),setting:$(),right:en(),comment:an(),commentOff:rn(),send:sn(),pallette:dn(),camera:cn(),subtitle:mn(),loading:bn(),airplay:yn(),chromecast:vn()};var xn=t(1916),Cn=t.n(xn);function kn(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var wn=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=e.container,this.options=e.options,this.index=e.index,this.tran=e.tran,this.init()}var e,t,a;return e=n,a=[{key:"NewNotice",value:function(n,e){var t=document.createElement("div");return t.classList.add("dplayer-notice"),t.style.opacity=e,t.innerText=n,t}}],(t=[{key:"init",value:function(){this.container.innerHTML=Cn()({options:this.options,index:this.index,tran:this.tran,icons:En,mobile:z.isMobile,video:{current:!0,pic:this.options.video.pic,screenshot:this.options.screenshot,airplay:!(!z.isSafari||z.isChrome)&&this.options.airplay,chromecast:this.options.chromecast,preload:this.options.preload,url:this.options.video.url,subtitle:this.options.subtitle}}),this.volumeBar=this.container.querySelector(".dplayer-volume-bar-inner"),this.volumeBarWrap=this.container.querySelector(".dplayer-volume-bar"),this.volumeBarWrapWrap=this.container.querySelector(".dplayer-volume-bar-wrap"),this.volumeButton=this.container.querySelector(".dplayer-volume"),this.volumeButtonIcon=this.container.querySelector(".dplayer-volume-icon"),this.volumeIcon=this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"),this.playedBar=this.container.querySelector(".dplayer-played"),this.loadedBar=this.container.querySelector(".dplayer-loaded"),this.playedBarWrap=this.container.querySelector(".dplayer-bar-wrap"),this.playedBarTime=this.container.querySelector(".dplayer-bar-time"),this.danmaku=this.container.querySelector(".dplayer-danmaku"),this.danmakuLoading=this.container.querySelector(".dplayer-danloading"),this.video=this.container.querySelector(".dplayer-video-current"),this.bezel=this.container.querySelector(".dplayer-bezel-icon"),this.playButton=this.container.querySelector(".dplayer-play-icon"),this.mobilePlayButton=this.container.querySelector(".dplayer-mobile-play"),this.videoWrap=this.container.querySelector(".dplayer-video-wrap"),this.controllerMask=this.container.querySelector(".dplayer-controller-mask"),this.ptime=this.container.querySelector(".dplayer-ptime"),this.settingButton=this.container.querySelector(".dplayer-setting-icon"),this.settingBox=this.container.querySelector(".dplayer-setting-box"),this.mask=this.container.querySelector(".dplayer-mask"),this.loop=this.container.querySelector(".dplayer-setting-loop"),this.loopToggle=this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"),this.showDanmaku=this.container.querySelector(".dplayer-setting-showdan"),this.showDanmakuToggle=this.container.querySelector(".dplayer-showdan-setting-input"),this.unlimitDanmaku=this.container.querySelector(".dplayer-setting-danunlimit"),this.unlimitDanmakuToggle=this.container.querySelector(".dplayer-danunlimit-setting-input"),this.speed=this.container.querySelector(".dplayer-setting-speed"),this.speedItem=this.container.querySelectorAll(".dplayer-setting-speed-item"),this.danmakuOpacityBar=this.container.querySelector(".dplayer-danmaku-bar-inner"),this.danmakuOpacityBarWrap=this.container.querySelector(".dplayer-danmaku-bar"),this.danmakuOpacityBarWrapWrap=this.container.querySelector(".dplayer-danmaku-bar-wrap"),this.danmakuOpacityBox=this.container.querySelector(".dplayer-setting-danmaku"),this.dtime=this.container.querySelector(".dplayer-dtime"),this.controller=this.container.querySelector(".dplayer-controller"),this.commentInput=this.container.querySelector(".dplayer-comment-input"),this.commentButton=this.container.querySelector(".dplayer-comment-icon"),this.commentSettingBox=this.container.querySelector(".dplayer-comment-setting-box"),this.commentSettingButton=this.container.querySelector(".dplayer-comment-setting-icon"),this.commentSettingFill=this.container.querySelector(".dplayer-comment-setting-icon path"),this.commentSendButton=this.container.querySelector(".dplayer-send-icon"),this.commentSendFill=this.container.querySelector(".dplayer-send-icon path"),this.commentColorSettingBox=this.container.querySelector(".dplayer-comment-setting-color"),this.browserFullButton=this.container.querySelector(".dplayer-full-icon"),this.webFullButton=this.container.querySelector(".dplayer-full-in-icon"),this.menu=this.container.querySelector(".dplayer-menu"),this.menuItem=this.container.querySelectorAll(".dplayer-menu-item"),this.qualityList=this.container.querySelector(".dplayer-quality-list"),this.camareButton=this.container.querySelector(".dplayer-camera-icon"),this.airplayButton=this.container.querySelector(".dplayer-airplay-icon"),this.chromecastButton=this.container.querySelector(".dplayer-chromecast-icon"),this.subtitleButton=this.container.querySelector(".dplayer-subtitle-icon"),this.subtitleButtonInner=this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"),this.subtitlesButton=this.container.querySelector(".dplayer-subtitles-icon"),this.subtitlesBox=this.container.querySelector(".dplayer-subtitles-box"),this.subtitlesItem=this.container.querySelectorAll(".dplayer-subtitles-item"),this.subtitle=this.container.querySelector(".dplayer-subtitle"),this.subtrack=this.container.querySelector(".dplayer-subtrack"),this.qualityButton=this.container.querySelector(".dplayer-quality-icon"),this.barPreview=this.container.querySelector(".dplayer-bar-preview"),this.barWrap=this.container.querySelector(".dplayer-bar-wrap"),this.noticeList=this.container.querySelector(".dplayer-notice-list"),this.infoPanel=this.container.querySelector(".dplayer-info-panel"),this.infoPanelClose=this.container.querySelector(".dplayer-info-panel-close"),this.infoVersion=this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"),this.infoFPS=this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"),this.infoType=this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"),this.infoUrl=this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"),this.infoResolution=this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"),this.infoDuration=this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"),this.infoDanmakuId=this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"),this.infoDanmakuApi=this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"),this.infoDanmakuAmount=this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")}}])&&kn(e.prototype,t),a&&kn(e,a),Object.defineProperty(e,"prototype",{writable:!1}),n}();const Bn=wn;function In(n){return In="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},In(n)}function Sn(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var Ln=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.options=e,this.player=this.options.player,this.container=this.options.container,this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.dan=[],this.showing=!0,this._opacity=this.options.opacity,this.events=this.options.events,this.unlimited=this.options.unlimited,this._measure(""),this.load()}var e,t;return e=n,t=[{key:"load",value:function(){var n,e=this;n=this.options.api.maximum?"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id,"&max=").concat(this.options.api.maximum):"".concat(this.options.api.address,"v3/?id=").concat(this.options.api.id);var t=(this.options.api.addition||[]).slice(0);t.push(n),this.events&&this.events.trigger("danmaku_load_start",t),this._readAllEndpoints(t,(function(n){e.dan=[].concat.apply([],n).sort((function(n,e){return n.time-e.time})),window.requestAnimationFrame((function(){e.frame()})),e.options.callback(),e.events&&e.events.trigger("danmaku_load_end")}))}},{key:"reload",value:function(n){this.options.api=n,this.dan=[],this.clear(),this.load()}},{key:"_readAllEndpoints",value:function(n,e){for(var t=this,a=[],o=0,r=function(r){t.options.apiBackend.read({url:n[r],success:function(t){a[r]=t,++o===n.length&&e(a)},error:function(i){t.options.error(i||t.options.tran("danmaku-failed")),a[r]=[],++o===n.length&&e(a)}})},i=0;i<n.length;++i)r(i)}},{key:"send",value:function(n,e){var t=this,a={token:this.options.api.token,id:this.options.api.id,author:this.options.api.user,time:this.options.time(),text:n.text,color:n.color,type:n.type};this.options.apiBackend.send({url:this.options.api.address+"v3/",data:a,success:e,error:function(n){t.options.error(n||t.options.tran("danmaku-failed"))}}),this.dan.splice(this.danIndex,0,a),this.danIndex++;var o={text:this.htmlEncode(a.text),color:a.color,type:a.type,border:"2px solid ".concat(this.options.borderColor)};this.draw(o),this.events&&this.events.trigger("danmaku_send",a)}},{key:"frame",value:function(){var n=this;if(this.dan.length&&!this.paused&&this.showing){for(var e=this.dan[this.danIndex],t=[];e&&this.options.time()>parseFloat(e.time);)t.push(e),e=this.dan[++this.danIndex];this.draw(t)}window.requestAnimationFrame((function(){n.frame()}))}},{key:"opacity",value:function(n){if(void 0!==n){for(var e=this.container.getElementsByClassName("dplayer-danmaku-item"),t=0;t<e.length;t++)e[t].style.opacity=n;this._opacity=n,this.events&&this.events.trigger("danmaku_opacity",this._opacity)}return this._opacity}},{key:"draw",value:function(n){var e=this;if(this.showing){var t=this.options.height,a=this.container.offsetWidth,o=this.container.offsetHeight,r=parseInt(o/t),i=function(n){var t=n.offsetWidth||parseInt(n.style.width),a=n.getBoundingClientRect().right||e.container.getBoundingClientRect().right+t;return e.container.getBoundingClientRect().right-a},l=function(n){return(a+n)/5},s=function(n,t,o){for(var s=a/l(o),p=function(o){var p=e.danTunnel[t][o+""];if(!p||!p.length)return e.danTunnel[t][o+""]=[n],n.addEventListener("animationend",(function(){e.danTunnel[t][o+""].splice(0,1)})),{v:o%r};if("right"!==t)return"continue";for(var d=0;d<p.length;d++){var A=i(p[d])-10;if(A<=a-s*l(parseInt(p[d].style.width))||A<=0)break;if(d===p.length-1)return e.danTunnel[t][o+""].push(n),n.addEventListener("animationend",(function(){e.danTunnel[t][o+""].splice(0,1)})),{v:o%r}}},d=0;e.unlimited||d<r;d++){var A=p(d);if("continue"!==A&&"object"===In(A))return A.v}return-1};"[object Array]"!==Object.prototype.toString.call(n)&&(n=[n]);for(var p=document.createDocumentFragment(),d=function(o){n[o].type=z.number2Type(n[o].type),n[o].color||(n[o].color=16777215);var r=document.createElement("div");r.classList.add("dplayer-danmaku-item"),r.classList.add("dplayer-danmaku-".concat(n[o].type)),n[o].border?r.innerHTML='<span style="border:'.concat(n[o].border,'">').concat(n[o].text,"</span>"):r.innerHTML=n[o].text,r.style.opacity=e._opacity,r.style.color=z.number2Color(n[o].color),r.addEventListener("animationend",(function(){e.container.removeChild(r)}));var i=e._measure(n[o].text),l=void 0;switch(n[o].type){case"right":(l=s(r,n[o].type,i))>=0&&(r.style.width=i+1+"px",r.style.top=t*l+"px",r.style.transform="translateX(-".concat(a,"px)"));break;case"top":(l=s(r,n[o].type))>=0&&(r.style.top=t*l+"px");break;case"bottom":(l=s(r,n[o].type))>=0&&(r.style.bottom=t*l+"px");break;default:console.error("Can't handled danmaku type: ".concat(n[o].type))}l>=0&&(r.classList.add("dplayer-danmaku-move"),r.style.animationDuration=e._danAnimation(n[o].type),p.appendChild(r))},A=0;A<n.length;A++)d(A);return this.container.appendChild(p),p}}},{key:"play",value:function(){this.paused=!1}},{key:"pause",value:function(){this.paused=!0}},{key:"_measure",value:function(n){if(!this.context){var e=getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0],null);this.context=document.createElement("canvas").getContext("2d"),this.context.font=e.getPropertyValue("font")}return this.context.measureText(n).width}},{key:"seek",value:function(){this.clear();for(var n=0;n<this.dan.length;n++){if(this.dan[n].time>=this.options.time()){this.danIndex=n;break}this.danIndex=this.dan.length}}},{key:"clear",value:function(){this.danTunnel={right:{},top:{},bottom:{}},this.danIndex=0,this.options.container.innerHTML="",this.events&&this.events.trigger("danmaku_clear")}},{key:"htmlEncode",value:function(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2f;")}},{key:"resize",value:function(){for(var n=this.container.offsetWidth,e=this.container.getElementsByClassName("dplayer-danmaku-item"),t=0;t<e.length;t++)e[t].style.transform="translateX(-".concat(n,"px)")}},{key:"hide",value:function(){this.showing=!1,this.pause(),this.clear(),this.events&&this.events.trigger("danmaku_hide")}},{key:"show",value:function(){this.seek(),this.showing=!0,this.play(),this.events&&this.events.trigger("danmaku_show")}},{key:"unlimit",value:function(n){this.unlimited=n}},{key:"speed",value:function(n){this.options.api.speedRate=n}},{key:"_danAnimation",value:function(n){var e=this.options.api.speedRate||1,t=!!this.player.fullScreen.isFullScreen();return{top:"".concat((t?6:4)/e,"s"),right:"".concat((t?8:5)/e,"s"),bottom:"".concat((t?6:4)/e,"s")}[n]}}],t&&Sn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();const zn=Ln;function qn(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}const Dn=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.events={},this.videoEvents=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","mozaudioavailable","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],this.playerEvents=["screenshot","thumbnails_show","thumbnails_hide","danmaku_show","danmaku_hide","danmaku_clear","danmaku_loaded","danmaku_send","danmaku_opacity","contextmenu_show","contextmenu_hide","notice_show","notice_hide","quality_start","quality_end","destroy","resize","fullscreen","fullscreen_cancel","webfullscreen","webfullscreen_cancel","subtitle_show","subtitle_hide","subtitle_change"]}var e,t;return e=n,(t=[{key:"on",value:function(n,e){this.type(n)&&"function"==typeof e&&(this.events[n]||(this.events[n]=[]),this.events[n].push(e))}},{key:"trigger",value:function(n,e){if(this.events[n]&&this.events[n].length)for(var t=0;t<this.events[n].length;t++)this.events[n][t](e)}},{key:"type",value:function(n){return-1!==this.playerEvents.indexOf(n)?"player":-1!==this.videoEvents.indexOf(n)?"video":(console.error("Unknown event name: ".concat(n)),null)}}])&&qn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();function Tn(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var On=function(){function n(e){var t=this;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.player=e,this.lastScrollPosition={left:0,top:0},this.player.events.on("webfullscreen",(function(){t.player.resize()})),this.player.events.on("webfullscreen_cancel",(function(){t.player.resize(),z.setScrollPosition(t.lastScrollPosition)})),this.fullscreenchange=function(){t.player.resize(),t.isFullScreen("browser")?t.player.events.trigger("fullscreen"):(z.setScrollPosition(t.lastScrollPosition),t.player.events.trigger("fullscreen_cancel"))},this.docfullscreenchange=function(){var n=document.fullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;n&&n!==t.player.container||(t.player.resize(),n?t.player.events.trigger("fullscreen"):(z.setScrollPosition(t.lastScrollPosition),t.player.events.trigger("fullscreen_cancel")))},/Firefox/.test(navigator.userAgent)?(document.addEventListener("mozfullscreenchange",this.docfullscreenchange),document.addEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.addEventListener("fullscreenchange",this.fullscreenchange),this.player.container.addEventListener("webkitfullscreenchange",this.fullscreenchange),document.addEventListener("msfullscreenchange",this.docfullscreenchange),document.addEventListener("MSFullscreenChange",this.docfullscreenchange))}var e,t;return e=n,t=[{key:"isFullScreen",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"browser";switch(n){case"browser":return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;case"web":return this.player.container.classList.contains("dplayer-fulled")}}},{key:"request",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"browser",e="browser"===n?"web":"browser",t=this.isFullScreen(e);switch(t||(this.lastScrollPosition=z.getScrollPosition()),n){case"browser":this.player.container.requestFullscreen?this.player.container.requestFullscreen():this.player.container.mozRequestFullScreen?this.player.container.mozRequestFullScreen():this.player.container.webkitRequestFullscreen?this.player.container.webkitRequestFullscreen():this.player.video.webkitEnterFullscreen?this.player.video.webkitEnterFullscreen():this.player.video.webkitEnterFullScreen?this.player.video.webkitEnterFullScreen():this.player.container.msRequestFullscreen&&this.player.container.msRequestFullscreen();break;case"web":this.player.container.classList.add("dplayer-fulled"),document.body.classList.add("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen")}t&&this.cancel(e)}},{key:"cancel",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"browser";switch(n){case"browser":document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.msCancelFullScreen?document.msCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();break;case"web":this.player.container.classList.remove("dplayer-fulled"),document.body.classList.remove("dplayer-web-fullscreen-fix"),this.player.events.trigger("webfullscreen_cancel")}}},{key:"toggle",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"browser";this.isFullScreen(n)?this.cancel(n):this.request(n)}},{key:"destroy",value:function(){/Firefox/.test(navigator.userAgent)?(document.removeEventListener("mozfullscreenchange",this.docfullscreenchange),document.removeEventListener("fullscreenchange",this.docfullscreenchange)):(this.player.container.removeEventListener("fullscreenchange",this.fullscreenchange),this.player.container.removeEventListener("webkitfullscreenchange",this.fullscreenchange),document.removeEventListener("msfullscreenchange",this.docfullscreenchange),document.removeEventListener("MSFullscreenChange",this.docfullscreenchange))}}],t&&Tn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();const Yn=On;function Nn(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var Mn=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.storageName={opacity:"dplayer-danmaku-opacity",volume:"dplayer-volume",unlimited:"dplayer-danmaku-unlimited",danmaku:"dplayer-danmaku-show",subtitle:"dplayer-subtitle-show"},this.default={opacity:.7,volume:e.options.hasOwnProperty("volume")?e.options.volume:.7,unlimited:(e.options.danmaku&&e.options.danmaku.unlimited?1:0)||0,danmaku:1,subtitle:1},this.data={},this.init()}var e,t;return e=n,(t=[{key:"init",value:function(){for(var n in this.storageName){var e=this.storageName[n];this.data[n]=parseFloat(z.storage.get(e)||this.default[n])}}},{key:"get",value:function(n){return this.data[n]}},{key:"set",value:function(n,e){this.data[n]=e,z.storage.set(this.storageName[n],e)}}])&&Nn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();const jn=Mn;function Rn(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var _n=function(){function n(e,t,a,o){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=e,this.video=t,this.options=a,this.events=o,this.init()}var e,t;return e=n,t=[{key:"init",value:function(){var n=this;if(this.container.style.fontSize=this.options.fontSize,this.container.style.bottom=this.options.bottom,this.container.style.color=this.options.color,this.video.textTracks&&this.video.textTracks[0]){var e=this.video.textTracks[0];e.oncuechange=function(){var t=e.activeCues[e.activeCues.length-1];if(n.container.innerHTML="",t){var a=document.createElement("div");a.appendChild(t.getCueAsHTML());var o=a.innerHTML.split(/\r?\n/).map((function(n){return"<p>".concat(n,"</p>")})).join("");n.container.innerHTML=o}n.events.trigger("subtitle_change")}}}},{key:"show",value:function(){this.container.classList.remove("dplayer-subtitle-hide"),this.events.trigger("subtitle_show")}},{key:"hide",value:function(){this.container.classList.add("dplayer-subtitle-hide"),this.events.trigger("subtitle_hide")}},{key:"toggle",value:function(){this.container.classList.contains("dplayer-subtitle-hide")?this.show():this.hide()}}],t&&Rn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();const Un=_n;function Wn(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var Pn=function(){function n(e){var t=this;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.player=e,this.player.template.mask.addEventListener("click",(function(){t.hide()})),this.player.template.subtitlesButton.addEventListener("click",(function(){t.adaptiveHeight(),t.show()}));for(var a=this.player.template.subtitlesItem.length-1,o=function(n){t.player.template.subtitlesItem[n].addEventListener("click",(function(){t.hide(),t.player.options.subtitle.index!==n&&(t.player.template.subtitle.innerHTML="<p></p>",t.player.template.subtrack.src=t.player.template.subtitlesItem[n].dataset.subtitle,t.player.options.subtitle.index=n,t.player.template.subtitle.classList.contains("dplayer-subtitle-hide")&&t.subContainerShow())}))},r=0;r<a;r++)o(r);this.player.template.subtitlesItem[a].addEventListener("click",(function(){t.hide(),t.player.options.subtitle.index!==a&&(t.player.template.subtitle.innerHTML="<p></p>",t.player.template.subtrack.src="",t.player.options.subtitle.index=a,t.subContainerHide())}))}var e,t;return e=n,(t=[{key:"subContainerShow",value:function(){this.player.template.subtitle.classList.remove("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_show")}},{key:"subContainerHide",value:function(){this.player.template.subtitle.classList.add("dplayer-subtitle-hide"),this.player.events.trigger("subtitle_hide")}},{key:"hide",value:function(){this.player.template.subtitlesBox.classList.remove("dplayer-subtitles-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.subtitlesBox.classList.add("dplayer-subtitles-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}},{key:"adaptiveHeight",value:function(){var n=30*this.player.template.subtitlesItem.length+14,e=.8*this.player.template.videoWrap.offsetHeight;n>=e-50?(this.player.template.subtitlesBox.style.bottom="8px",this.player.template.subtitlesBox.style["max-height"]=e-8+"px"):(this.player.template.subtitlesBox.style.bottom="50px",this.player.template.subtitlesBox.style["max-height"]=e-50+"px")}}])&&Wn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();const Fn=Pn;function Qn(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var Hn=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.elements={},this.elements.volume=e.volumeBar,this.elements.played=e.playedBar,this.elements.loaded=e.loadedBar,this.elements.danmaku=e.danmakuOpacityBar}var e,t;return e=n,(t=[{key:"set",value:function(n,e,t){e=Math.max(e,0),e=Math.min(e,1),this.elements[n].style[t]=100*e+"%"}},{key:"get",value:function(n){return parseFloat(this.elements[n].style.width)/100}}])&&Qn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();const Kn=Hn;function Zn(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var Xn=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.player=e,window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){window.setTimeout(n,1e3/60)},this.types=["loading","info","fps"],this.init()}var e,t;return e=n,(t=[{key:"init",value:function(){var n=this;this.types.map((function(e){return"fps"!==e&&n["init".concat(e,"Checker")](),e}))}},{key:"initloadingChecker",value:function(){var n=this,e=0,t=0,a=!1;this.loadingChecker=setInterval((function(){n.enableloadingChecker&&(t=n.player.video.currentTime,a||t!==e||n.player.video.paused||(n.player.container.classList.add("dplayer-loading"),a=!0),a&&t>e&&!n.player.video.paused&&(n.player.container.classList.remove("dplayer-loading"),a=!1),e=t)}),100)}},{key:"initfpsChecker",value:function(){var n=this;window.requestAnimationFrame((function(){if(n.enablefpsChecker)if(n.initfpsChecker(),n.fpsStart){n.fpsIndex++;var e=new Date;e-n.fpsStart>1e3&&(n.player.infoPanel.fps(n.fpsIndex/(e-n.fpsStart)*1e3),n.fpsStart=new Date,n.fpsIndex=0)}else n.fpsStart=new Date,n.fpsIndex=0;else n.fpsStart=0,n.fpsIndex=0}))}},{key:"initinfoChecker",value:function(){var n=this;this.infoChecker=setInterval((function(){n.enableinfoChecker&&n.player.infoPanel.update()}),1e3)}},{key:"enable",value:function(n){this["enable".concat(n,"Checker")]=!0,"fps"===n&&this.initfpsChecker()}},{key:"disable",value:function(n){this["enable".concat(n,"Checker")]=!1}},{key:"destroy",value:function(){var n=this;this.types.map((function(e){return n["enable".concat(e,"Checker")]=!1,n["".concat(e,"Checker")]&&clearInterval(n["".concat(e,"Checker")]),e}))}}])&&Zn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();const Vn=Xn;function Jn(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}const Gn=function(){function n(e){var t=this;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=e,this.container.addEventListener("animationend",(function(){t.container.classList.remove("dplayer-bezel-transition")}))}var e,t;return e=n,(t=[{key:"switch",value:function(n){this.container.innerHTML=n,this.container.classList.add("dplayer-bezel-transition")}}])&&Jn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();function $n(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var ne=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=e.container,this.barWidth=e.barWidth,this.container.style.backgroundImage="url('".concat(e.url,"')"),this.events=e.events}var e,t;return e=n,(t=[{key:"resize",value:function(n,e,t){this.container.style.width="".concat(n,"px"),this.container.style.height="".concat(e,"px"),this.container.style.top="".concat(2-e,"px"),this.barWidth=t}},{key:"show",value:function(){this.container.style.display="block",this.events&&this.events.trigger("thumbnails_show")}},{key:"move",value:function(n){this.container.style.backgroundPosition="-".concat(160*(Math.ceil(n/this.barWidth*100)-1),"px 0"),this.container.style.left="".concat(Math.min(Math.max(n-this.container.offsetWidth/2,-10),this.barWidth-150),"px")}},{key:"hide",value:function(){this.container.style.display="none",this.events&&this.events.trigger("thumbnails_hide")}}])&&$n(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();const ee=ne;var te=function(n,e){return te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},te(n,e)};function ae(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=n}te(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}function oe(n){var e="function"==typeof Symbol&&Symbol.iterator,t=e&&n[e],a=0;if(t)return t.call(n);if(n&&"number"==typeof n.length)return{next:function(){return n&&a>=n.length&&(n=void 0),{value:n&&n[a++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function re(n,e){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var a,o,r=t.call(n),i=[];try{for(;(void 0===e||e-- >0)&&!(a=r.next()).done;)i.push(a.value)}catch(n){o={error:n}}finally{try{a&&!a.done&&(t=r.return)&&t.call(r)}finally{if(o)throw o.error}}return i}function ie(n,e,t){if(t||2===arguments.length)for(var a,o=0,r=e.length;o<r;o++)!a&&o in e||(a||(a=Array.prototype.slice.call(e,0,o)),a[o]=e[o]);return n.concat(a||Array.prototype.slice.call(e))}function le(n){return"function"==typeof n}function se(n){var e=n((function(n){Error.call(n),n.stack=(new Error).stack}));return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}Object.create,Object.create;var pe=se((function(n){return function(e){n(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(n,e){return e+1+") "+n.toString()})).join(""):"",this.name="UnsubscriptionError",this.errors=e}}));function de(n,e){if(n){var t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Ae=function(){function n(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}var e;return n.prototype.unsubscribe=function(){var n,e,t,a,o;if(!this.closed){this.closed=!0;var r=this._parentage;if(r)if(this._parentage=null,Array.isArray(r))try{for(var i=oe(r),l=i.next();!l.done;l=i.next())l.value.remove(this)}catch(e){n={error:e}}finally{try{l&&!l.done&&(e=i.return)&&e.call(i)}finally{if(n)throw n.error}}else r.remove(this);var s=this.initialTeardown;if(le(s))try{s()}catch(n){o=n instanceof pe?n.errors:[n]}var p=this._finalizers;if(p){this._finalizers=null;try{for(var d=oe(p),A=d.next();!A.done;A=d.next()){var c=A.value;try{ye(c)}catch(n){o=null!=o?o:[],n instanceof pe?o=ie(ie([],re(o)),re(n.errors)):o.push(n)}}}catch(n){t={error:n}}finally{try{A&&!A.done&&(a=d.return)&&a.call(d)}finally{if(t)throw t.error}}}if(o)throw new pe(o)}},n.prototype.add=function(e){var t;if(e&&e!==this)if(this.closed)ye(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=null!==(t=this._finalizers)&&void 0!==t?t:[]).push(e)}},n.prototype._hasParent=function(n){var e=this._parentage;return e===n||Array.isArray(e)&&e.includes(n)},n.prototype._addParent=function(n){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n},n.prototype._removeParent=function(n){var e=this._parentage;e===n?this._parentage=null:Array.isArray(e)&&de(e,n)},n.prototype.remove=function(e){var t=this._finalizers;t&&de(t,e),e instanceof n&&e._removeParent(this)},n.EMPTY=((e=new n).closed=!0,e),n}(),ce=Ae.EMPTY;function ue(n){return n instanceof Ae||n&&"closed"in n&&le(n.remove)&&le(n.add)&&le(n.unsubscribe)}function ye(n){le(n)?n():n.unsubscribe()}var he=null,me=null,fe=void 0,be=!1,ge=!1,ve={setTimeout:function(n){function e(e,t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(n,e){for(var t=[],a=2;a<arguments.length;a++)t[a-2]=arguments[a];var o=ve.delegate;return(null==o?void 0:o.setTimeout)?o.setTimeout.apply(o,ie([n,e],re(t))):setTimeout.apply(void 0,ie([n,e],re(t)))})),clearTimeout:function(n){function e(e){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(n){var e=ve.delegate;return((null==e?void 0:e.clearTimeout)||clearTimeout)(n)})),delegate:void 0};function Ee(){}var xe=Ce("C",void 0,void 0);function Ce(n,e,t){return{kind:n,value:e,error:t}}var ke=null;function we(n){if(be){var e=!ke;if(e&&(ke={errorThrown:!1,error:null}),n(),e){var t=ke,a=t.errorThrown,o=t.error;if(ke=null,a)throw o}}else n()}var Be=function(n){function e(e){var t=n.call(this)||this;return t.isStopped=!1,e?(t.destination=e,ue(e)&&e.add(t)):t.destination=Te,t}return ae(e,n),e.create=function(n,e,t){return new ze(n,e,t)},e.prototype.next=function(n){this.isStopped?De(function(n){return Ce("N",n,void 0)}(n),this):this._next(n)},e.prototype.error=function(n){this.isStopped?De(Ce("E",void 0,n),this):(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped?De(xe,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(Ae),Ie=Function.prototype.bind;function Se(n,e){return Ie.call(n,e)}var Le=function(){function n(n){this.partialObserver=n}return n.prototype.next=function(n){var e=this.partialObserver;if(e.next)try{e.next(n)}catch(n){qe(n)}},n.prototype.error=function(n){var e=this.partialObserver;if(e.error)try{e.error(n)}catch(n){qe(n)}else qe(n)},n.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(n){qe(n)}},n}(),ze=function(n){function e(e,t,a){var o,r,i=n.call(this)||this;return le(e)||!e?o={next:null!=e?e:void 0,error:null!=t?t:void 0,complete:null!=a?a:void 0}:i&&ge?((r=Object.create(e)).unsubscribe=function(){return i.unsubscribe()},o={next:e.next&&Se(e.next,r),error:e.error&&Se(e.error,r),complete:e.complete&&Se(e.complete,r)}):o=e,i.destination=new Le(o),i}return ae(e,n),e}(Be);function qe(n){var e;be?(e=n,be&&ke&&(ke.errorThrown=!0,ke.error=e)):function(n){ve.setTimeout((function(){if(!he)throw n;he(n)}))}(n)}function De(n,e){var t=me;t&&ve.setTimeout((function(){return t(n,e)}))}var Te={closed:!0,next:Ee,error:function(n){throw n},complete:Ee},Oe="function"==typeof Symbol&&Symbol.observable||"@@observable";function Ye(n){return n}function Ne(n){return 0===n.length?Ye:1===n.length?n[0]:function(e){return n.reduce((function(n,e){return e(n)}),e)}}var Me=function(){function n(n){n&&(this._subscribe=n)}return n.prototype.lift=function(e){var t=new n;return t.source=this,t.operator=e,t},n.prototype.subscribe=function(n,e,t){var a,o=this,r=(a=n)&&a instanceof Be||function(n){return n&&le(n.next)&&le(n.error)&&le(n.complete)}(a)&&ue(a)?n:new ze(n,e,t);return we((function(){var n=o,e=n.operator,t=n.source;r.add(e?e.call(r,t):t?o._subscribe(r):o._trySubscribe(r))})),r},n.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(e){n.error(e)}},n.prototype.forEach=function(n,e){var t=this;return new(e=je(e))((function(e,a){var o=new ze({next:function(e){try{n(e)}catch(n){a(n),o.unsubscribe()}},error:a,complete:e});t.subscribe(o)}))},n.prototype._subscribe=function(n){var e;return null===(e=this.source)||void 0===e?void 0:e.subscribe(n)},n.prototype[Oe]=function(){return this},n.prototype.pipe=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return Ne(n)(this)},n.prototype.toPromise=function(n){var e=this;return new(n=je(n))((function(n,t){var a;e.subscribe((function(n){return a=n}),(function(n){return t(n)}),(function(){return n(a)}))}))},n.create=function(e){return new n(e)},n}();function je(n){var e;return null!==(e=null!=n?n:fe)&&void 0!==e?e:Promise}var Re,_e=se((function(n){return function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}})),Ue=function(n){function e(){var e=n.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return ae(e,n),e.prototype.lift=function(n){var e=new We(this,this);return e.operator=n,e},e.prototype._throwIfClosed=function(){if(this.closed)throw new _e},e.prototype.next=function(n){var e=this;we((function(){var t,a;if(e._throwIfClosed(),!e.isStopped){e.currentObservers||(e.currentObservers=Array.from(e.observers));try{for(var o=oe(e.currentObservers),r=o.next();!r.done;r=o.next())r.value.next(n)}catch(n){t={error:n}}finally{try{r&&!r.done&&(a=o.return)&&a.call(o)}finally{if(t)throw t.error}}}}))},e.prototype.error=function(n){var e=this;we((function(){if(e._throwIfClosed(),!e.isStopped){e.hasError=e.isStopped=!0,e.thrownError=n;for(var t=e.observers;t.length;)t.shift().error(n)}}))},e.prototype.complete=function(){var n=this;we((function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var e=n.observers;e.length;)e.shift().complete()}}))},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return(null===(n=this.observers)||void 0===n?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(e){return this._throwIfClosed(),n.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var e=this,t=this,a=t.hasError,o=t.isStopped,r=t.observers;return a||o?ce:(this.currentObservers=null,r.push(n),new Ae((function(){e.currentObservers=null,de(r,n)})))},e.prototype._checkFinalizedStatuses=function(n){var e=this,t=e.hasError,a=e.thrownError,o=e.isStopped;t?n.error(a):o&&n.complete()},e.prototype.asObservable=function(){var n=new Me;return n.source=this,n},e.create=function(n,e){return new We(n,e)},e}(Me),We=function(n){function e(e,t){var a=n.call(this)||this;return a.destination=e,a.source=t,a}return ae(e,n),e.prototype.next=function(n){var e,t;null===(t=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===t||t.call(e,n)},e.prototype.error=function(n){var e,t;null===(t=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===t||t.call(e,n)},e.prototype.complete=function(){var n,e;null===(e=null===(n=this.destination)||void 0===n?void 0:n.complete)||void 0===e||e.call(n)},e.prototype._subscribe=function(n){var e,t;return null!==(t=null===(e=this.source)||void 0===e?void 0:e.subscribe(n))&&void 0!==t?t:ce},e}(Ue);function Pe(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var Fe=!0,Qe=!1,He=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.player=e,this.autoHideTimer=0,z.isMobile||(this.setAutoHideHandler=this.setAutoHide.bind(this),this.player.container.addEventListener("mousemove",this.setAutoHideHandler),this.player.container.addEventListener("click",this.setAutoHideHandler),this.player.on("play",this.setAutoHideHandler),this.player.on("pause",this.setAutoHideHandler)),this.initPlayButton(),this.initThumbnails(),this.initPlayedBar(),this.initFullButton(),this.initQualityButton(),this.initScreenshotButton(),this.player.options.subtitle&&"string"==typeof this.player.options.subtitle.url&&this.initSubtitleButton(),this.initHighlights(),this.initAirplayButton(),this.initChromecastButton(),z.isMobile||this.initVolumeButton()}var e,t;return e=n,(t=[{key:"initPlayButton",value:function(){var n=this;this.player.template.playButton.addEventListener("click",(function(){n.player.toggle()})),this.player.template.mobilePlayButton.addEventListener("click",(function(){n.player.toggle()})),z.isMobile?(this.player.template.videoWrap.addEventListener("click",(function(){n.toggle()})),this.player.template.controllerMask.addEventListener("click",(function(){n.toggle()}))):this.player.options.preventClickToggle||(this.player.template.videoWrap.addEventListener("click",(function(){n.player.toggle()})),this.player.template.controllerMask.addEventListener("click",(function(){n.player.toggle()})))}},{key:"initHighlights",value:function(){var n=this;this.player.on("durationchange",(function(){if(1!==n.player.video.duration&&n.player.video.duration!==1/0&&n.player.options.highlight){var e=n.player.template.playedBarWrap.querySelectorAll(".dplayer-highlight");[].slice.call(e,0).forEach((function(e){n.player.template.playedBarWrap.removeChild(e)}));for(var t=0;t<n.player.options.highlight.length;t++)if(n.player.options.highlight[t].text&&n.player.options.highlight[t].time){var a=document.createElement("div");a.classList.add("dplayer-highlight"),a.style.left=n.player.options.highlight[t].time/n.player.video.duration*100+"%",a.innerHTML='<span class="dplayer-highlight-text">'+n.player.options.highlight[t].text+"</span>",n.player.template.playedBarWrap.insertBefore(a,n.player.template.playedBarTime)}}}))}},{key:"initThumbnails",value:function(){var n=this;this.player.options.video.thumbnails&&(this.thumbnails=new ee({container:this.player.template.barPreview,barWidth:this.player.template.barWrap.offsetWidth,url:this.player.options.video.thumbnails,events:this.player.events}),this.player.on("loadedmetadata",(function(){n.thumbnails.resize(160,n.player.video.videoHeight/n.player.video.videoWidth*160,n.player.template.barWrap.offsetWidth)})))}},{key:"initPlayedBar",value:function(){var n=this,e=function(e){var t=((e.clientX||e.changedTouches[0].clientX)-z.getBoundingClientRectViewLeft(n.player.template.playedBarWrap))/n.player.template.playedBarWrap.clientWidth;t=Math.max(t,0),t=Math.min(t,1),n.player.bar.set("played",t,"width"),n.player.template.ptime.innerHTML=z.secondToTime(t*n.player.video.duration)},t=function t(a){document.removeEventListener(z.nameMap.dragEnd,t),document.removeEventListener(z.nameMap.dragMove,e);var o=((a.clientX||a.changedTouches[0].clientX)-z.getBoundingClientRectViewLeft(n.player.template.playedBarWrap))/n.player.template.playedBarWrap.clientWidth;o=Math.max(o,0),o=Math.min(o,1),n.player.bar.set("played",o,"width"),n.player.seek(n.player.bar.get("played")*n.player.video.duration),n.player.timer.enable("progress")};this.player.template.playedBarWrap.addEventListener(z.nameMap.dragStart,(function(){n.player.timer.disable("progress"),document.addEventListener(z.nameMap.dragMove,e),document.addEventListener(z.nameMap.dragEnd,t)})),this.player.template.playedBarWrap.addEventListener(z.nameMap.dragMove,(function(e){if(n.player.video.duration){var t=n.player.template.playedBarWrap.getBoundingClientRect().left,a=(e.clientX||e.changedTouches[0].clientX)-t;if(a<0||a>n.player.template.playedBarWrap.offsetWidth)return;var o=n.player.video.duration*(a/n.player.template.playedBarWrap.offsetWidth);z.isMobile&&n.thumbnails&&n.thumbnails.show(),n.thumbnails&&n.thumbnails.move(a),n.player.template.playedBarTime.style.left="".concat(a-(o>=3600?25:20),"px"),n.player.template.playedBarTime.innerText=z.secondToTime(o),n.player.template.playedBarTime.classList.remove("hidden")}})),this.player.template.playedBarWrap.addEventListener(z.nameMap.dragEnd,(function(){z.isMobile&&n.thumbnails&&n.thumbnails.hide()})),z.isMobile||(this.player.template.playedBarWrap.addEventListener("mouseenter",(function(){n.player.video.duration&&(n.thumbnails&&n.thumbnails.show(),n.player.template.playedBarTime.classList.remove("hidden"))})),this.player.template.playedBarWrap.addEventListener("mouseleave",(function(){n.player.video.duration&&(n.thumbnails&&n.thumbnails.hide(),n.player.template.playedBarTime.classList.add("hidden"))})))}},{key:"initFullButton",value:function(){var n=this;this.player.template.browserFullButton.addEventListener("click",(function(){n.player.fullScreen.toggle("browser")})),this.player.template.webFullButton.addEventListener("click",(function(){n.player.fullScreen.toggle("web")}))}},{key:"initVolumeButton",value:function(){var n=this,e=function(e){var t=e||window.event,a=((t.clientX||t.changedTouches[0].clientX)-z.getBoundingClientRectViewLeft(n.player.template.volumeBarWrap)-5.5)/35;n.player.volume(a)},t=function t(){document.removeEventListener(z.nameMap.dragEnd,t),document.removeEventListener(z.nameMap.dragMove,e),n.player.template.volumeButton.classList.remove("dplayer-volume-active")};this.player.template.volumeBarWrapWrap.addEventListener("click",(function(e){var t=e||window.event,a=((t.clientX||t.changedTouches[0].clientX)-z.getBoundingClientRectViewLeft(n.player.template.volumeBarWrap)-5.5)/35;n.player.volume(a)})),this.player.template.volumeBarWrapWrap.addEventListener(z.nameMap.dragStart,(function(){document.addEventListener(z.nameMap.dragMove,e),document.addEventListener(z.nameMap.dragEnd,t),n.player.template.volumeButton.classList.add("dplayer-volume-active")})),this.player.template.volumeButtonIcon.addEventListener("click",(function(){n.player.video.muted?(n.player.video.muted=!1,n.player.switchVolumeIcon(),n.player.bar.set("volume",n.player.volume(),"width")):(n.player.video.muted=!0,n.player.template.volumeIcon.innerHTML=En.volumeOff,n.player.bar.set("volume",0,"width"))}))}},{key:"initQualityButton",value:function(){var n=this;this.player.options.video.quality&&this.player.template.qualityList.addEventListener("click",(function(e){e.target.classList.contains("dplayer-quality-item")&&n.player.switchQuality(e.target.dataset.index)}))}},{key:"initScreenshotButton",value:function(){var n=this;this.player.options.screenshot&&this.player.template.camareButton.addEventListener("click",(function(){var e,t=document.createElement("canvas");t.width=n.player.video.videoWidth,t.height=n.player.video.videoHeight,t.getContext("2d").drawImage(n.player.video,0,0,t.width,t.height),t.toBlob((function(t){e=URL.createObjectURL(t);var a=document.createElement("a");a.href=e,a.download="DPlayer.png",a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(e),n.player.events.trigger("screenshot",e)}))}))}},{key:"initAirplayButton",value:function(){this.player.options.airplay&&(window.WebKitPlaybackTargetAvailabilityEvent?this.player.video.addEventListener("webkitplaybacktargetavailabilitychanged",function(n){"available"===n.availability?this.template.airplayButton.disable=!1:this.template.airplayButton.disable=!0,this.template.airplayButton.addEventListener("click",function(){this.video.webkitShowPlaybackTargetPicker()}.bind(this))}.bind(this.player)):this.player.template.airplayButton.style.display="none")}},{key:"initChromecast",value:function(){var n=window.document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),window.document.body.appendChild(n),window.__onGCastApiAvailable=function(n){if(n){var e=new(Re=window.chrome.cast).SessionRequest(Re.media.DEFAULT_MEDIA_RECEIVER_APP_ID),t=new Re.ApiConfig(e,(function(){}),(function(n){n===Re.ReceiverAvailability.AVAILABLE&&console.log("chromecast: ",n)}));Re.initialize(t,(function(){}))}}}},{key:"initChromecastButton",value:function(){var n=this;if(this.player.options.chromecast){Fe&&(Fe=!1,this.initChromecast());var e=function(e,t){n.currentMedia=t},t=function(n){console.error("Error launching media",n)};this.player.template.chromecastButton.addEventListener("click",(function(){var a;Qe?(Qe=!1,n.currentMedia.stop(),n.session.stop(),n.initChromecast()):(Qe=!0,a=new Ue,Re.requestSession((function(o){var r,i,l;n.session=o,a.next("CONNECTED"),r=n.player.options.video.url,i=new Re.media.MediaInfo(r),l=new Re.media.LoadRequest(i),n.session?n.session.loadMedia(l,e.bind(n,"loadMedia"),t).play():window.open(r)}),(function(e){"cancel"===e.code?(n.session=void 0,a.next("CANCEL")):console.error("Error selecting a cast device",e)})))}))}}},{key:"initSubtitleButton",value:function(){var n=this;this.player.events.on("subtitle_show",(function(){n.player.template.subtitleButton.dataset.balloon=n.player.tran("hide-subs"),n.player.template.subtitleButtonInner.style.opacity="",n.player.user.set("subtitle",1)})),this.player.events.on("subtitle_hide",(function(){n.player.template.subtitleButton.dataset.balloon=n.player.tran("show-subs"),n.player.template.subtitleButtonInner.style.opacity="0.4",n.player.user.set("subtitle",0)})),this.player.template.subtitleButton.addEventListener("click",(function(){n.player.subtitle.toggle()}))}},{key:"setAutoHide",value:function(){var n=this;this.show(),clearTimeout(this.autoHideTimer),this.autoHideTimer=setTimeout((function(){!n.player.video.played.length||n.player.paused||n.disableAutoHide||n.hide()}),3e3)}},{key:"show",value:function(){this.player.container.classList.remove("dplayer-hide-controller")}},{key:"hide",value:function(){this.player.container.classList.add("dplayer-hide-controller"),this.player.setting.hide(),this.player.comment&&this.player.comment.hide()}},{key:"isShow",value:function(){return!this.player.container.classList.contains("dplayer-hide-controller")}},{key:"toggle",value:function(){this.isShow()?this.hide():this.show()}},{key:"destroy",value:function(){z.isMobile||(this.player.container.removeEventListener("mousemove",this.setAutoHideHandler),this.player.container.removeEventListener("click",this.setAutoHideHandler)),clearTimeout(this.autoHideTimer)}}])&&Pe(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();const Ke=He;function Ze(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var Xe=function(){function n(e){var t=this;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.player=e,this.player.template.mask.addEventListener("click",(function(){t.hide()})),this.player.template.settingButton.addEventListener("click",(function(){t.show()})),this.loop=this.player.options.loop,this.player.template.loopToggle.checked=this.loop,this.player.template.loop.addEventListener("click",(function(){t.player.template.loopToggle.checked=!t.player.template.loopToggle.checked,t.player.template.loopToggle.checked?t.loop=!0:t.loop=!1,t.hide()})),this.showDanmaku=this.player.user.get("danmaku"),this.showDanmaku||this.player.danmaku&&this.player.danmaku.hide(),this.player.template.showDanmakuToggle.checked=this.showDanmaku,this.player.template.showDanmaku.addEventListener("click",(function(){t.player.template.showDanmakuToggle.checked=!t.player.template.showDanmakuToggle.checked,t.player.template.showDanmakuToggle.checked?(t.showDanmaku=!0,t.player.danmaku.show()):(t.showDanmaku=!1,t.player.danmaku.hide()),t.player.user.set("danmaku",t.showDanmaku?1:0),t.hide()})),this.unlimitDanmaku=this.player.user.get("unlimited"),this.player.template.unlimitDanmakuToggle.checked=this.unlimitDanmaku,this.player.template.unlimitDanmaku.addEventListener("click",(function(){t.player.template.unlimitDanmakuToggle.checked=!t.player.template.unlimitDanmakuToggle.checked,t.player.template.unlimitDanmakuToggle.checked?(t.unlimitDanmaku=!0,t.player.danmaku.unlimit(!0)):(t.unlimitDanmaku=!1,t.player.danmaku.unlimit(!1)),t.player.user.set("unlimited",t.unlimitDanmaku?1:0),t.hide()})),this.player.template.speed.addEventListener("click",(function(){t.player.template.settingBox.classList.add("dplayer-setting-box-narrow"),t.player.template.settingBox.classList.add("dplayer-setting-box-speed")}));for(var a=function(n){t.player.template.speedItem[n].addEventListener("click",(function(){t.player.speed(t.player.template.speedItem[n].dataset.speed),t.hide()}))},o=0;o<this.player.template.speedItem.length;o++)a(o);if(this.player.danmaku){this.player.on("danmaku_opacity",(function(n){t.player.bar.set("danmaku",n,"width"),t.player.user.set("opacity",n)})),this.player.danmaku.opacity(this.player.user.get("opacity"));var r=function(n){var e=n||window.event,a=((e.clientX||e.changedTouches[0].clientX)-z.getBoundingClientRectViewLeft(t.player.template.danmakuOpacityBarWrap))/130;a=Math.max(a,0),a=Math.min(a,1),t.player.danmaku.opacity(a)},i=function n(){document.removeEventListener(z.nameMap.dragEnd,n),document.removeEventListener(z.nameMap.dragMove,r),t.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")};this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click",(function(n){var e=n||window.event,a=((e.clientX||e.changedTouches[0].clientX)-z.getBoundingClientRectViewLeft(t.player.template.danmakuOpacityBarWrap))/130;a=Math.max(a,0),a=Math.min(a,1),t.player.danmaku.opacity(a)})),this.player.template.danmakuOpacityBarWrapWrap.addEventListener(z.nameMap.dragStart,(function(){document.addEventListener(z.nameMap.dragMove,r),document.addEventListener(z.nameMap.dragEnd,i),t.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")}))}}var e,t;return e=n,(t=[{key:"hide",value:function(){var n=this;this.player.template.settingBox.classList.remove("dplayer-setting-box-open"),this.player.template.mask.classList.remove("dplayer-mask-show"),setTimeout((function(){n.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"),n.player.template.settingBox.classList.remove("dplayer-setting-box-speed")}),300),this.player.controller.disableAutoHide=!1}},{key:"show",value:function(){this.player.template.settingBox.classList.add("dplayer-setting-box-open"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.controller.disableAutoHide=!0}}])&&Ze(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();const Ve=Xe;function Je(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var Ge=function(){function n(e){var t=this;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.player=e,this.player.template.mask.addEventListener("click",(function(){t.hide()})),this.player.template.commentButton.addEventListener("click",(function(){t.show()})),this.player.template.commentSettingButton.addEventListener("click",(function(){t.toggleSetting()})),this.player.template.commentColorSettingBox.addEventListener("click",(function(){if(t.player.template.commentColorSettingBox.querySelector("input:checked+span")){var n=t.player.template.commentColorSettingBox.querySelector("input:checked").value;t.player.template.commentSettingFill.style.fill=n,t.player.template.commentInput.style.color=n,t.player.template.commentSendFill.style.fill=n}})),this.player.template.commentInput.addEventListener("click",(function(){t.hideSetting()})),this.player.template.commentInput.addEventListener("keydown",(function(n){13===(n||window.event).keyCode&&t.send()})),this.player.template.commentSendButton.addEventListener("click",(function(){t.send()}))}var e,t;return e=n,(t=[{key:"show",value:function(){this.player.controller.disableAutoHide=!0,this.player.template.controller.classList.add("dplayer-controller-comment"),this.player.template.mask.classList.add("dplayer-mask-show"),this.player.container.classList.add("dplayer-show-controller"),this.player.template.commentInput.focus()}},{key:"hide",value:function(){this.player.template.controller.classList.remove("dplayer-controller-comment"),this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.container.classList.remove("dplayer-show-controller"),this.player.controller.disableAutoHide=!1,this.hideSetting()}},{key:"showSetting",value:function(){this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")}},{key:"hideSetting",value:function(){this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")}},{key:"toggleSetting",value:function(){this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open")?this.hideSetting():this.showSetting()}},{key:"send",value:function(){var n=this;this.player.template.commentInput.blur(),this.player.template.commentInput.value.replace(/^\s+|\s+$/g,"")?this.player.danmaku.send({text:this.player.template.commentInput.value,color:z.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),type:parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)},(function(){n.player.template.commentInput.value="",n.hide()})):this.player.notice(this.player.tran("please-input-danmaku"))}}])&&Je(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();const $e=Ge;function nt(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var et=function(){function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.player=e,this.doHotKeyHandler=this.doHotKey.bind(this),this.cancelFullScreenHandler=this.cancelFullScreen.bind(this),this.player.options.hotkey&&document.addEventListener("keydown",this.doHotKeyHandler),document.addEventListener("keydown",this.cancelFullScreenHandler)}var e,t;return e=n,(t=[{key:"doHotKey",value:function(n){if(this.player.focus){var e=document.activeElement.tagName.toUpperCase(),t=document.activeElement.getAttribute("contenteditable");if("INPUT"!==e&&"TEXTAREA"!==e&&""!==t&&"true"!==t){var a,o=n||window.event;switch(o.keyCode){case 32:o.preventDefault(),this.player.toggle();break;case 37:if(o.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime-5),this.player.controller.setAutoHide();break;case 39:if(o.preventDefault(),this.player.options.live)break;this.player.seek(this.player.video.currentTime+5),this.player.controller.setAutoHide();break;case 38:o.preventDefault(),a=this.player.volume()+.1,this.player.volume(a);break;case 40:o.preventDefault(),a=this.player.volume()-.1,this.player.volume(a)}}}}},{key:"cancelFullScreen",value:function(n){27===(n||window.event).keyCode&&this.player.fullScreen.isFullScreen("web")&&this.player.fullScreen.cancel("web")}},{key:"destroy",value:function(){this.player.options.hotkey&&document.removeEventListener("keydown",this.doHotKeyHandler),document.removeEventListener("keydown",this.cancelFullScreenHandler)}}])&&nt(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();const tt=et;function at(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var ot=function(){function n(e){var t=this;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.player=e,this.shown=!1,Array.prototype.slice.call(this.player.template.menuItem).forEach((function(n,e){t.player.options.contextmenu[e].click&&n.addEventListener("click",(function(){t.player.options.contextmenu[e].click(t.player),t.hide()}))})),this.contextmenuHandler=function(n){if(t.shown)t.hide();else{var e=n||window.event;e.preventDefault();var a=t.player.container.getBoundingClientRect();t.show(e.clientX-a.left,e.clientY-a.top),t.player.template.mask.addEventListener("click",(function(){t.hide()}))}},this.player.container.addEventListener("contextmenu",this.contextmenuHandler)}var e,t;return e=n,(t=[{key:"show",value:function(n,e){this.player.template.menu.classList.add("dplayer-menu-show");var t=this.player.container.getBoundingClientRect();n+this.player.template.menu.offsetWidth>=t.width?(this.player.template.menu.style.right=t.width-n+"px",this.player.template.menu.style.left="initial"):(this.player.template.menu.style.left=n+"px",this.player.template.menu.style.right="initial"),e+this.player.template.menu.offsetHeight>=t.height?(this.player.template.menu.style.bottom=t.height-e+"px",this.player.template.menu.style.top="initial"):(this.player.template.menu.style.top=e+"px",this.player.template.menu.style.bottom="initial"),this.player.template.mask.classList.add("dplayer-mask-show"),this.shown=!0,this.player.events.trigger("contextmenu_show")}},{key:"hide",value:function(){this.player.template.mask.classList.remove("dplayer-mask-show"),this.player.template.menu.classList.remove("dplayer-menu-show"),this.shown=!1,this.player.events.trigger("contextmenu_hide")}},{key:"destroy",value:function(){this.player.container.removeEventListener("contextmenu",this.contextmenuHandler)}}])&&at(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();const rt=ot;function it(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var lt=function(){function n(e){var t=this;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=e.template.infoPanel,this.template=e.template,this.video=e.video,this.player=e,this.template.infoPanelClose.addEventListener("click",(function(){t.hide()}))}var e,t;return e=n,(t=[{key:"show",value:function(){this.beginTime=Date.now(),this.update(),this.player.timer.enable("info"),this.player.timer.enable("fps"),this.container.classList.remove("dplayer-info-panel-hide")}},{key:"hide",value:function(){this.player.timer.disable("info"),this.player.timer.disable("fps"),this.container.classList.add("dplayer-info-panel-hide")}},{key:"triggle",value:function(){this.container.classList.contains("dplayer-info-panel-hide")?this.show():this.hide()}},{key:"update",value:function(){this.template.infoVersion.innerHTML="v".concat("1.27.0"," ").concat("a0424ca"),this.template.infoType.innerHTML=this.player.type,this.template.infoUrl.innerHTML=this.player.options.video.url,this.template.infoResolution.innerHTML="".concat(this.player.video.videoWidth," x ").concat(this.player.video.videoHeight),this.template.infoDuration.innerHTML=this.player.video.duration,this.player.options.danmaku&&(this.template.infoDanmakuId.innerHTML=this.player.options.danmaku.id,this.template.infoDanmakuApi.innerHTML=this.player.options.danmaku.api,this.template.infoDanmakuAmount.innerHTML=this.player.danmaku.dan.length)}},{key:"fps",value:function(n){this.template.infoFPS.innerHTML="".concat(n.toFixed(1))}}])&&it(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),n}();const st=lt;var pt=t(1568),dt=t.n(pt);function At(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function ct(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ut(n,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}var yt=0,ht=[],mt=function(){function n(e){var t=this;(function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")})(this,n),this.options=function(n){var e={container:n.element||document.getElementsByClassName("dplayer")[0],live:!1,autoplay:!1,theme:"#b7daff",loop:!1,lang:(navigator.language||navigator.browserLanguage).toLowerCase(),screenshot:!1,airplay:!0,chromecast:!1,hotkey:!0,preload:"metadata",volume:.7,playbackSpeed:[.5,.75,1,1.25,1.5,2],apiBackend:T,video:{},contextmenu:[],mutex:!0,pluginOptions:{hls:{},flv:{},dash:{},webtorrent:{}},preventClickToggle:!1};for(var t in e)e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=e[t]);return n.video&&!n.video.type&&(n.video.type="auto"),"object"===O(n.danmaku)&&n.danmaku&&!n.danmaku.user&&(n.danmaku.user="DIYgod"),n.subtitle&&(!n.subtitle.type&&(n.subtitle.type="webvtt"),!n.subtitle.fontSize&&(n.subtitle.fontSize="20px"),!n.subtitle.bottom&&(n.subtitle.bottom="40px"),!n.subtitle.color&&(n.subtitle.color="#fff")),n.video.quality&&(n.video.url=n.video.quality[n.video.defaultQuality].url),n.lang&&(n.lang=n.lang.toLowerCase()),n.contextmenu=n.contextmenu.concat([{key:"video-info",click:function(n){n.infoPanel.triggle()}},{key:"about-author",link:"https://diygod.me"},{text:"DPlayer v".concat("1.27.0"),link:"https://github.com/MoePlayer/DPlayer"}]),n}(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?At(Object(t),!0).forEach((function(e){ct(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):At(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({preload:"webtorrent"===e.video.type?"none":"metadata"},e)),this.options.video.quality&&(this.qualityIndex=this.options.video.defaultQuality,this.quality=this.options.video.quality[this.options.video.defaultQuality]),this.tran=new Y(this.options.lang).tran,this.events=new Dn,this.user=new jn(this),this.container=this.options.container,this.container.classList.add("dplayer"),this.options.danmaku||this.container.classList.add("dplayer-no-danmaku"),this.options.live?this.container.classList.add("dplayer-live"):this.container.classList.remove("dplayer-live"),z.isMobile&&this.container.classList.add("dplayer-mobile"),this.arrow=this.container.offsetWidth<=500,this.arrow&&this.container.classList.add("dplayer-arrow"),this.options.subtitle&&Array.isArray(this.options.subtitle.url)&&(this.options.subtitle.url.push({subtitle:"",lang:"off"}),this.options.subtitle.defaultSubtitle&&("string"==typeof this.options.subtitle.defaultSubtitle?this.options.subtitle.index=this.options.subtitle.url.findIndex((function(n){return n.lang===t.options.subtitle.defaultSubtitle||n.name===t.options.subtitle.defaultSubtitle})):"number"==typeof this.options.subtitle.defaultSubtitle&&(this.options.subtitle.index=this.options.subtitle.defaultSubtitle)),(-1===this.options.subtitle.index||!this.options.subtitle.index||this.options.subtitle.index>this.options.subtitle.url.length-1)&&(this.options.subtitle.index=this.options.subtitle.url.findIndex((function(n){return n.lang===t.options.lang}))),-1===this.options.subtitle.index&&(this.options.subtitle.index=this.options.subtitle.url.length-1)),this.template=new Bn({container:this.container,options:this.options,index:yt,tran:this.tran}),this.video=this.template.video,this.bar=new Kn(this.template),this.bezel=new Gn(this.template.bezel),this.fullScreen=new Yn(this),this.controller=new Ke(this),this.options.danmaku&&(this.danmaku=new zn({player:this,container:this.template.danmaku,opacity:this.user.get("opacity"),callback:function(){setTimeout((function(){t.template.danmakuLoading.style.display="none",t.options.autoplay&&t.play()}),0)},error:function(n){t.notice(n)},apiBackend:this.options.apiBackend,borderColor:this.options.theme,height:this.arrow?24:30,time:function(){return t.video.currentTime},unlimited:this.user.get("unlimited"),api:{id:this.options.danmaku.id,address:this.options.danmaku.api,token:this.options.danmaku.token,maximum:this.options.danmaku.maximum,addition:this.options.danmaku.addition,user:this.options.danmaku.user,speedRate:this.options.danmaku.speedRate},events:this.events,tran:function(n){return t.tran(n)}}),this.comment=new $e(this)),this.setting=new Ve(this),this.plugins={},this.docClickFun=function(){t.focus=!1},this.containerClickFun=function(){t.focus=!0},document.addEventListener("click",this.docClickFun,!0),this.container.addEventListener("click",this.containerClickFun,!0),this.paused=!0,this.timer=new Vn(this),this.hotkey=new tt(this),this.contextmenu=new rt(this),this.initVideo(this.video,this.quality&&this.quality.type||this.options.video.type),this.infoPanel=new st(this),!this.danmaku&&this.options.autoplay&&this.play(),yt++,ht.push(this)}var e,t,a;return e=n,t=[{key:"seek",value:function(n){n=Math.max(n,0),this.video.duration&&(n=Math.min(n,this.video.duration)),this.video.currentTime<n?this.notice("".concat(this.tran("ff").replace("%s",(n-this.video.currentTime).toFixed(0)))):this.video.currentTime>n&&this.notice("".concat(this.tran("rew").replace("%s",(this.video.currentTime-n).toFixed(0)))),this.video.currentTime=n,this.danmaku&&this.danmaku.seek(),this.bar.set("played",n/this.video.duration,"width"),this.template.ptime.innerHTML=z.secondToTime(n)}},{key:"play",value:function(n){var e=this;if(this.paused=!1,this.video.paused&&!z.isMobile&&this.bezel.switch(En.play),this.template.playButton.innerHTML=En.pause,this.template.mobilePlayButton.innerHTML=En.pause,n||S.resolve(this.video.play()).catch((function(){e.pause()})).then((function(){})),this.timer.enable("loading"),this.container.classList.remove("dplayer-paused"),this.container.classList.add("dplayer-playing"),this.danmaku&&this.danmaku.play(),this.options.mutex)for(var t=0;t<ht.length;t++)this!==ht[t]&&ht[t].pause()}},{key:"pause",value:function(n){this.paused=!0,this.container.classList.remove("dplayer-loading"),this.video.paused||z.isMobile||this.bezel.switch(En.pause),this.template.playButton.innerHTML=En.play,this.template.mobilePlayButton.innerHTML=En.play,n||this.video.pause(),this.timer.disable("loading"),this.container.classList.remove("dplayer-playing"),this.container.classList.add("dplayer-paused"),this.danmaku&&this.danmaku.pause()}},{key:"switchVolumeIcon",value:function(){this.volume()>=.95?this.template.volumeIcon.innerHTML=En.volumeUp:this.volume()>0?this.template.volumeIcon.innerHTML=En.volumeDown:this.template.volumeIcon.innerHTML=En.volumeOff}},{key:"volume",value:function(n,e,t){if(n=parseFloat(n),!isNaN(n)){n=Math.max(n,0),n=Math.min(n,1),this.bar.set("volume",n,"width");var a="".concat((100*n).toFixed(0),"%");this.template.volumeBarWrapWrap.dataset.balloon=a,e||this.user.set("volume",n),t||this.notice("".concat(this.tran("volume")," ").concat((100*n).toFixed(0),"%")),this.video.volume=n,this.video.muted&&(this.video.muted=!1),this.switchVolumeIcon()}return this.video.volume}},{key:"toggle",value:function(){this.video.paused?this.play():this.pause()}},{key:"on",value:function(n,e){this.events.on(n,e)}},{key:"switchVideo",value:function(n,e){this.pause(),this.video.poster=n.pic?n.pic:"",this.video.src=n.url,this.initMSE(this.video,n.type||"auto"),e&&(this.template.danmakuLoading.style.display="block",this.bar.set("played",0,"width"),this.bar.set("loaded",0,"width"),this.template.ptime.innerHTML="00:00",this.template.danmaku.innerHTML="",this.danmaku&&this.danmaku.reload({id:e.id,address:e.api,token:e.token,maximum:e.maximum,addition:e.addition,user:e.user}))}},{key:"initMSE",value:function(n,e){var t=this;if(this.type=e,this.options.video.customType&&this.options.video.customType[e])"[object Function]"===Object.prototype.toString.call(this.options.video.customType[e])?this.options.video.customType[e](this.video,this):console.error("Illegal customType: ".concat(e));else switch("auto"===this.type&&(/m3u8(#|\?|$)/i.exec(n.src)?this.type="hls":/.flv(#|\?|$)/i.exec(n.src)?this.type="flv":/.mpd(#|\?|$)/i.exec(n.src)?this.type="dash":this.type="normal"),"hls"===this.type&&(n.canPlayType("application/x-mpegURL")||n.canPlayType("application/vnd.apple.mpegURL"))&&(this.type="normal"),this.type){case"hls":if(window.Hls)if(window.Hls.isSupported()){var a=this.options.pluginOptions.hls,o=new window.Hls(a);this.plugins.hls=o,o.loadSource(n.src),o.attachMedia(n),this.events.on("destroy",(function(){o.destroy(),delete t.plugins.hls}))}else this.notice("Error: Hls is not supported.");else this.notice("Error: Can't find Hls.");break;case"flv":if(window.flvjs)if(window.flvjs.isSupported()){var r=window.flvjs.createPlayer(Object.assign(this.options.pluginOptions.flv.mediaDataSource||{},{type:"flv",url:n.src}),this.options.pluginOptions.flv.config);this.plugins.flvjs=r,r.attachMediaElement(n),r.load(),this.events.on("destroy",(function(){r.unload(),r.detachMediaElement(),r.destroy(),delete t.plugins.flvjs}))}else this.notice("Error: flvjs is not supported.");else this.notice("Error: Can't find flvjs.");break;case"dash":if(window.dashjs){var i=window.dashjs.MediaPlayer().create().initialize(n,n.src,!1),l=this.options.pluginOptions.dash;i.updateSettings(l),this.plugins.dash=i,this.events.on("destroy",(function(){window.dashjs.MediaPlayer().reset(),delete t.plugins.dash}))}else this.notice("Error: Can't find dashjs.");break;case"webtorrent":if(window.WebTorrent)if(window.WebTorrent.WEBRTC_SUPPORT){this.container.classList.add("dplayer-loading");var s=this.options.pluginOptions.webtorrent,p=new window.WebTorrent(s);this.plugins.webtorrent=p;var d=n.src;n.src="",n.preload="metadata",n.addEventListener("durationchange",(function(){return t.container.classList.remove("dplayer-loading")}),{once:!0}),p.add(d,(function(n){n.files.find((function(n){return n.name.endsWith(".mp4")})).renderTo(t.video,{autoplay:t.options.autoplay,controls:!1})})),this.events.on("destroy",(function(){p.remove(d),p.destroy(),delete t.plugins.webtorrent}))}else this.notice("Error: Webtorrent is not supported.");else this.notice("Error: Can't find Webtorrent.")}}},{key:"initVideo",value:function(n,e){var t=this;this.initMSE(n,e),this.on("durationchange",(function(){1!==n.duration&&n.duration!==1/0&&(t.template.dtime.innerHTML=z.secondToTime(n.duration))})),this.on("progress",(function(){var e=n.buffered.length?n.buffered.end(n.buffered.length-1)/n.duration:0;t.bar.set("loaded",e,"width")})),this.on("error",(function(){t.video.error&&t.tran&&t.notice&&"webtorrent"!==t.type&&t.notice(t.tran("video-failed"),-1)})),this.on("ended",(function(){t.bar.set("played",1,"width"),t.setting.loop?(t.seek(0),t.play()):t.pause(),t.danmaku&&(t.danmaku.danIndex=0)})),this.on("play",(function(){t.paused&&t.play(!0)})),this.on("pause",(function(){t.paused||t.pause(!0)})),this.on("timeupdate",(function(){t.bar.set("played",t.video.currentTime/t.video.duration,"width");var n=z.secondToTime(t.video.currentTime);t.template.ptime.innerHTML!==n&&(t.template.ptime.innerHTML=n)}));for(var a=function(e){n.addEventListener(t.events.videoEvents[e],(function(){t.events.trigger(t.events.videoEvents[e])}))},o=0;o<this.events.videoEvents.length;o++)a(o);this.volume(this.user.get("volume"),!0,!0),this.options.subtitle&&(this.subtitle=new Un(this.template.subtitle,this.video,this.options.subtitle,this.events),Array.isArray(this.options.subtitle.url)&&(this.subtitles=new Fn(this)),this.user.get("subtitle")||this.subtitle.hide())}},{key:"switchQuality",value:function(n){var e=this;if(n="string"==typeof n?parseInt(n):n,this.qualityIndex!==n&&!this.switchingQuality){this.prevIndex=this.qualityIndex,this.qualityIndex=n,this.switchingQuality=!0,this.quality=this.options.video.quality[n],this.template.qualityButton.innerHTML=this.quality.name;var t=this.video.paused;this.video.pause();var a=dt()({current:!1,pic:null,screenshot:this.options.screenshot,preload:"auto",url:this.quality.url,subtitle:this.options.subtitle}),o=(new DOMParser).parseFromString(a,"text/html").body.firstChild;this.template.videoWrap.insertBefore(o,this.template.videoWrap.getElementsByTagName("div")[0]),this.prevVideo=this.video,this.video=o,this.initVideo(this.video,this.quality.type||this.options.video.type),this.seek(this.prevVideo.currentTime),this.notice("".concat(this.tran("switching-quality").replace("%q",this.quality.name)),-1),this.events.trigger("quality_start",this.quality),this.on("canplay",(function(){if(e.prevVideo){if(e.video.currentTime!==e.prevVideo.currentTime)return void e.seek(e.prevVideo.currentTime);e.template.videoWrap.removeChild(e.prevVideo),e.video.classList.add("dplayer-video-current"),t||e.video.play(),e.prevVideo=null,e.notice("".concat(e.tran("switched-quality").replace("%q",e.quality.name))),e.switchingQuality=!1,e.events.trigger("quality_end")}})),this.on("error",(function(){e.video.error&&e.prevVideo&&(e.template.videoWrap.removeChild(e.video),e.video=e.prevVideo,t||e.video.play(),e.qualityIndex=e.prevIndex,e.quality=e.options.video.quality[e.qualityIndex],e.noticeTime=setTimeout((function(){e.template.notice.style.opacity=0,e.events.trigger("notice_hide")}),3e3),e.prevVideo=null,e.switchingQuality=!1)}))}}},{key:"notice",value:function(n){var e,t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2e3,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.8,r=Bn.NewNotice(n,o);this.template.noticeList.appendChild(r),this.events.trigger("notice_show",r),a>0&&setTimeout((e=r,t=this,function(){e.addEventListener("animationend",(function(){t.template.noticeList.removeChild(e)})),e.classList.add("remove-notice"),t.events.trigger("notice_hide")}),a)}},{key:"resize",value:function(){this.danmaku&&this.danmaku.resize(),this.controller.thumbnails&&this.controller.thumbnails.resize(160,this.video.videoHeight/this.video.videoWidth*160,this.template.barWrap.offsetWidth),this.events.trigger("resize")}},{key:"speed",value:function(n){this.video.playbackRate=n}},{key:"destroy",value:function(){ht.splice(ht.indexOf(this),1),this.pause(),document.removeEventListener("click",this.docClickFun,!0),this.container.removeEventListener("click",this.containerClickFun,!0),this.fullScreen.destroy(),this.hotkey.destroy(),this.contextmenu.destroy(),this.controller.destroy(),this.timer.destroy(),this.video.src="",this.container.innerHTML="",this.events.trigger("destroy")}}],a=[{key:"version",get:function(){return"1.27.0"}}],t&&ut(e.prototype,t),a&&ut(e,a),Object.defineProperty(e,"prototype",{writable:!1}),n}();const ft=mt;console.log("\n".concat(" %c DPlayer v","1.27.0"," ").concat("a0424ca"," %c https://dplayer.diygod.dev ","\n","\n"),"color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;");const bt=ft})(),a.default})()));
//# sourceMappingURL=DPlayer.min.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

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

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


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
/* harmony import */ var _lib_report_sora__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/report-sora */ "./resources/js/lib/report-sora.js");
/* harmony import */ var _lib_quick_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/quick-access */ "./resources/js/lib/quick-access.js");
/* harmony import */ var _lib_flipbook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/flipbook */ "./resources/js/lib/flipbook.js");
/* harmony import */ var _lib_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/share */ "./resources/js/lib/share.js");
/* harmony import */ var _lib_favorites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/favorites */ "./resources/js/lib/favorites.js");
/* harmony import */ var _lib_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/clipboard */ "./resources/js/lib/clipboard.js");
/* harmony import */ var _lib_file_uploader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/file-uploader */ "./resources/js/lib/file-uploader.js");
/* harmony import */ var _lib_image_uploader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/image-uploader */ "./resources/js/lib/image-uploader.js");
/* harmony import */ var _lib_vid_player__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/vid-player */ "./resources/js/lib/vid-player.js");
/* harmony import */ var _lib_logo_video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/logo-video */ "./resources/js/lib/logo-video.js");
/* harmony import */ var _lib_quran_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/quran-slider */ "./resources/js/lib/quran-slider.js");
/* harmony import */ var _lib_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/player */ "./resources/js/lib/player.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/utils */ "./resources/js/lib/utils.js");
/* harmony import */ var _lib_playlist__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/playlist */ "./resources/js/lib/playlist.js");
/* harmony import */ var _lib_screenfull__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/screenfull */ "./resources/js/lib/screenfull.js");















/************************* */

/***       EVENTS        ***/

/************************* */

/************************* */

/***        SETUP        ***/

/************************* */

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});
window.ajax_prefix = window.App.urlBase + '/' + window.App.current_language + '/ajax';
window.prefix = window.App.urlBase + '/' + window.App.current_language;
window.player = new _lib_player__WEBPACK_IMPORTED_MODULE_11__["default"]();
window.favorites = new _lib_favorites__WEBPACK_IMPORTED_MODULE_4__["default"]();
/************************* */

/***       BUTTONS       ***/

/************************* */

function initiateLib() {
  $(".quick-access a").on("click", function (e) {
    e.preventDefault();
    window.quickAccess = new _lib_quick_access__WEBPACK_IMPORTED_MODULE_1__["default"]();
    quickAccess.showModal();
  });
  $(".report-btn").on("click", function (e) {
    e.preventDefault();
    var params = {
      read: $(this).data("read"),
      sora: $(this).data("sora"),
      prefix: $(this).data("prefix")
    };
    window.reportSora = new _lib_report_sora__WEBPACK_IMPORTED_MODULE_0__["default"](params);
    reportSora.showModal();
  });
  $("#submitReport").on("click", function (e) {
    e.preventDefault();
    reportSora.submitReport();
  });
  $(".ply-btn.btn-pause").on("click", function (e) {
    player.pause();
  });
  $(".ply-btn.btn-play").on("click", function (e) {
    var url = $(this).data("url");
    var item = $(this).data("item");
    var type = $(this).data("type");
    var time = $(this).data("time");
    Object(_lib_utils__WEBPACK_IMPORTED_MODULE_12__["getItemAndPlay"])(url, item, type, time);
  });
  $(".share-btn").on("click", function (e) {
    var params = {
      url: $(this).data("url"),
      description: $(this).data("description"),
      title: $(this).data("title")
    };
    window.share = new _lib_share__WEBPACK_IMPORTED_MODULE_3__["default"](params);
    share.showModal();
  });
  $(".share-on").on("click", function (e) {
    var network = $(this).data("network");
    share.shareOn(network);
  });
  $(".direct-share").on("click", function (e) {
    var network = $(this).data("network");
    var params = {
      url: $(this).closest('.show-share').data("url"),
      description: $(this).parents('.show-share').data("description"),
      title: $(this).parent().data("title")
    };
    window.share = new _lib_share__WEBPACK_IMPORTED_MODULE_3__["default"](params);
    share.shareOn(network);
  });
  $(".clipboard-btn").on("click", function (e) {
    var text = $(this).data("text");
    window.clipboard = new _lib_clipboard__WEBPACK_IMPORTED_MODULE_5__["default"](text);
    clipboard.copy();
  });
  $(".sora-btn.playlist-add").on("click", function (e) {
    var url = $(this).data("url");
    Object(_lib_utils__WEBPACK_IMPORTED_MODULE_12__["addItem"])(url);
  });
  $('.like-btn').on("click", function (e) {
    var sora_id = $(this).data("id");
    var group = $(this).data("group");
    favorites.addItem(sora_id, group);
  });
  $('.deslike-btn').on("click", function (e) {
    var sora_id = $(this).data("id");
    var group = $(this).data("group");
    favorites.removeItem(sora_id, group);
  });
  $('.more-btn').on("click", function (e) {
    $('.more-btn').not(this).next('.item-options').removeClass('show');
    $(this).next('.item-options').toggleClass('show');
  });
  $(".ply-bookmark").off("click");
  $(".ply-bookmark").on("click", function (e) {
    try {
      var time = window.player.current_item.howl.seek();
      var url = window.ajax_prefix + '/tsora/bookmark?id=' + window.player.current_item.read_id + '&time=' + Math.round(time);
      Object(_lib_utils__WEBPACK_IMPORTED_MODULE_12__["bookmarkTsora"])(url);
    } catch (error) {
      notify(trans("text.not-added"), 'warn', trans("text.bookmark-not-created"));
    }
  }); // ********* card logo video ********* //

  $(".card-logo-video").each(function (index) {
    window.videoLogo = new _lib_logo_video__WEBPACK_IMPORTED_MODULE_9__["default"](this);
  }); // ********* file uploader ********* //

  $(".file-uploader").each(function (index) {
    new _lib_file_uploader__WEBPACK_IMPORTED_MODULE_6__["default"](this);
  }); // ********* file uploader ********* //

  $(".image-uploader").each(function (index) {
    window.imageUploader = new _lib_image_uploader__WEBPACK_IMPORTED_MODULE_7__["default"](this);
  }); // ********* video player ********* //

  $(".dplayer").each(function (index) {
    new _lib_vid_player__WEBPACK_IMPORTED_MODULE_8__["default"](this);
  }); // ********* fullscreen ********* //

  var fullscreenElement = document.getElementById('fullscreen');

  if (fullscreenElement) {
    document.getElementById('fullscreenToggle').addEventListener('click', function () {
      if (_lib_screenfull__WEBPACK_IMPORTED_MODULE_14__["default"].isEnabled) {
        _lib_screenfull__WEBPACK_IMPORTED_MODULE_14__["default"].toggle(fullscreenElement);
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
}

$(document).ready(function () {
  initiateLib();
  favorites.favoritesChanged();
});
document.addEventListener("turbolinks:render", function (event) {
  $(document).ready(function () {
    initiateLib();
  });
  player.stateChanged();
  favorites.favoritesChanged();
});
Livewire.on('changeDom', function (postId) {
  initiateLib();
  player.stateChanged();
  favorites.favoritesChanged();
});
$("#playerPlayBtn").on("click", function (e) {
  e.preventDefault();
  player.play();
});
$("#fullPlayerPlayBtn").on("click", function (e) {
  e.preventDefault();
  player.play();
});
$("#playerPauseBtn").on("click", function (e) {
  e.preventDefault();
  player.pause();
});
$("#fullPlayerPauseBtn").on("click", function (e) {
  e.preventDefault();
  player.pause();
});
$("#playerPrevBtn").on("click", function (e) {
  e.preventDefault();
  player.skip('prev');
});
$("#fullPlayerPrevBtn").on("click", function (e) {
  e.preventDefault();
  player.skip('prev');
});
$("#playerNextBtn").on("click", function (e) {
  e.preventDefault();
  player.skip('next');
});
$("#fullPlayerNextBtn").on("click", function (e) {
  e.preventDefault();
  player.skip('next');
});
$("#playerBackwardBtn").on("click", function (e) {
  e.preventDefault();
  player.backward(5);
});
$("#playerForwardBtn").on("click", function (e) {
  e.preventDefault();
  player.forward(5);
});
$("#playerPlaylistBtn").on("click", function (e) {
  e.preventDefault();
  player.togglePlaylist();
});
$("#closePlaylist").on("click", function (e) {
  e.preventDefault();
  player.togglePlaylist();
});
$("#fullPlayerToggle").on("click", function (e) {
  e.preventDefault();
  player.toggleFullPlayer();
});
$("#closeFullplayer").on("click", function (e) {
  e.preventDefault();
  player.toggleFullPlayer();
});
$("#playerVolumeBtn").on("click", function (e) {
  e.preventDefault();
  player.toggleVolume();
});
$("#playerVolume").on("click", function (e) {
  e.preventDefault();
  player.toggleVolume();
});
$("#clearPlaylist").on("click", function (e) {
  e.preventDefault();
  player.setPlaylist([]);
  $("#playlistId").val("");
  $("#playlistName").val("");
});

if ($('#savePlaylist').length) {
  $("#savePlaylist").on("click", function (e) {
    e.preventDefault();
    Object(_lib_playlist__WEBPACK_IMPORTED_MODULE_13__["savePlaylist"])();
  });
}

$(".quran-slider").each(function (e) {
  var control = $(this).data("control");
  new _lib_quran_slider__WEBPACK_IMPORTED_MODULE_10__["default"](this, control);
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

      if (this.page === 0) {
        odd = 1;
        add = 0;
      }

      if (this.page % 2 !== 0 && this.mobile !== 'true') {
        odd = 1;
        add = 0;
      }

      var first_page = Math.max(1, this.start - add, this.page - 5 - odd);
      var last_page = Math.min(this.end + add, this.page + 29 - odd);
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
              console.log(self.progress);
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
        console.log('imageError');
        $("#imageError").show();
        valid = false;
      }

      console.log(this.image.length);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/lib/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js"),
    Howl = _require.Howl,
    Howler = _require.Howler;



var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    //Get old current item
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

    var playlist = JSON.parse(localStorage.getItem("mp3quran_playlist_2") || "[]");
    this.playerData = JSON.parse(localStorage.getItem("mp3quran_player_2") || "{}");
    this.setPlaylist(playlist);

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
  }
  /************************************
  * Playlist Controles
  ************************************/


  _createClass(Player, [{
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

      this.playlist.forEach(function (item) {
        var clone = document.getElementById('playlistItem').content.cloneNode(true);
        var fullclone = document.getElementById('fullPlaylistItem').content.cloneNode(true); //set text elements

        if (typeof item.name !== "undefined" && item.name != null) {
          var sora = clone.querySelectorAll(".read-sora")[0];
          var fullsora = fullclone.querySelectorAll(".read-sora")[0];
          sora.innerHTML = item.name;
          fullsora.innerHTML = item.name;
        }

        if (typeof item.num !== "undefined" && item.num != null) {
          var num = clone.querySelectorAll(".read-num")[0];
          num.innerHTML = item.num;
        }

        if (typeof item.reciter !== "undefined" && item.reciter != null) {
          var reciter = clone.querySelectorAll(".reciter-name")[0];
          var fullreciter = fullclone.querySelectorAll(".read-reciter")[0];
          reciter.innerHTML = item.reciter;
          fullreciter.innerHTML = item.reciter;
        }

        if (typeof item.rewaya !== "undefined" && item.rewaya != null) {
          var rewaya = clone.querySelectorAll(".rewaya-name")[0];
          rewaya.innerHTML = item.rewaya;
        }

        clone.querySelectorAll("li")[0].id = "playerListItem-" + self.getItemIndex(item);
        fullclone.querySelectorAll("li")[0].id = "fullPlayerListItem-" + self.getItemIndex(item); //add event and append

        clone.querySelectorAll(".btn-play")[0].onclick = function () {
          player.skipTo(self.playlist.indexOf(item));
        };

        fullclone.querySelectorAll(".btn-play")[0].onclick = function () {
          player.skipTo(self.playlist.indexOf(item));
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
          self.dragStartIndex = self.playlist.indexOf(item);
        });
        clone.querySelectorAll(".drag-handle")[0].closest('li').addEventListener('dragover', function (event) {
          event.preventDefault();
        });
        clone.querySelectorAll(".drag-handle")[0].closest('li').addEventListener('drop', function () {
          var dragEndIndex = self.playlist.indexOf(item);
          player.swapItemsPlaylist(self.dragStartIndex, dragEndIndex);
        });
        document.getElementById('playerList').appendChild(clone);
        document.getElementById('fullPlayerList').appendChild(fullclone); //update storage playlist

        var storageItem = Object.assign({}, item);
        delete storageItem.howl;
        storagePlaylist.push(storageItem);
      });
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
      Object(_utils__WEBPACK_IMPORTED_MODULE_0__["stateChange"])({
        index: this.current_index,
        playing_state: this.state.playing_state,
        playing_item: this.state.playing_item,
        playing_type: this.state.playing_type
      });
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
      this.sound.play();
    }
  }, {
    key: "pause",
    value: function pause() {
      this.sound.pause();
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
      $(".quran-slider.seek .qs-point").css("left", "calc(0% - 6px)"); // Play the new track.

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
      } else if (val > 0 && val <= 0.15) {
        $('#playerVolumeBtn .uni-icon').hide();
        $('#playerVolumeBtn .icon-volume_mute').show();
      } else if (val > 0.15 && val <= 0.65) {
        $('#playerVolumeBtn .uni-icon').hide();
        $('#playerVolumeBtn .icon-volume_down').show();
      } else {
        $('#playerVolumeBtn .uni-icon').hide();
        $('#playerVolumeBtn .icon-volume_up').show();
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
/*! exports provided: savePlaylist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePlaylist", function() { return savePlaylist; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "./resources/js/lib/services.js");

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
  Object(_services__WEBPACK_IMPORTED_MODULE_0__["postPlaylist"])(url, data);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clipboard; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Clipboard = /*#__PURE__*/function () {
  function Clipboard(slider, control) {
    _classCallCheck(this, Clipboard);

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

  _createClass(Clipboard, [{
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

  return Clipboard;
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
/*! exports provided: postPlaylist, postReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postPlaylist", function() { return postPlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postReport", function() { return postReport; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./resources/js/lib/utils.js");

function postPlaylist(url, data) {
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
/*! exports provided: notify, trans, stateChange, getItemAndPlay, addItem, bookmarkTsora */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notify", function() { return notify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trans", function() { return trans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateChange", function() { return stateChange; });
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
function stateChange(state) {
  $('.hiden-ply-btn').hide();
  $('.shown-ply-btn').show();

  switch (state.playing_state) {
    case "loading":
      $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-loading').show();
      $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-pause').hide();
      $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-play').hide();
      $("#playerLoading").show();
      $("#playerPauseBtn").hide();
      $("#playerPlayBtn").hide();
      $("#fullPlayerLoading").show();
      $("#fullPlayerPauseBtn").hide();
      $("#fullPlayerPlayBtn").hide();
      $('#playerListItem-' + state.index + ' .btn-loading').show();
      $('#playerListItem-' + state.index + ' .btn-pause').hide();
      $('#playerListItem-' + state.index + ' .btn-play').hide();
      $('#fullPlayerListItem-' + state.index + ' .btn-loading').show();
      $('#fullPlayerListItem-' + state.index + ' .btn-pause').hide();
      $('#fullPlayerListItem-' + state.index + ' .btn-play').hide();
      break;

    case "playing":
      $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-loading').hide();
      $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-pause').show();
      $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-play').hide();
      $("#playerLoading").hide();
      $("#playerPauseBtn").show();
      $("#playerPlayBtn").hide();
      $("#fullPlayerLoading").hide();
      $("#fullPlayerPauseBtn").show();
      $("#fullPlayerPlayBtn").hide();
      $('#playerListItem-' + state.index + ' .btn-loading').hide();
      $('#playerListItem-' + state.index + ' .btn-pause').show();
      $('#playerListItem-' + state.index + ' .btn-play').hide();
      $('#fullPlayerListItem-' + state.index + ' .btn-loading').hide();
      $('#fullPlayerListItem-' + state.index + ' .btn-pause').show();
      $('#fullPlayerListItem-' + state.index + ' .btn-play').hide();
      break;

    default:
      $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-loading').hide();
      $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-pause').hide();
      $("#" + state.playing_type + '-' + state.playing_item + ' .ply-btn.btn-play').show();
      $("#playerLoading").hide();
      $("#playerPauseBtn").hide();
      $("#playerPlayBtn").show();
      $("#fullPlayerLoading").hide();
      $("#fullPlayerPauseBtn").hide();
      $("#fullPlayerPlayBtn").show();
      $('#playerListItem-' + state.index + ' .btn-loading').hide();
      $('#playerListItem-' + state.index + ' .btn-pause').hide();
      $('#playerListItem-' + state.index + ' .btn-play').show();
      $('#fullPlayerListItem-' + state.index + ' .btn-loading').hide();
      $('#fullPlayerListItem-' + state.index + ' .btn-pause').hide();
      $('#fullPlayerListItem-' + state.index + ' .btn-play').show();
      break;
  }
}
function getItemAndPlay(url, item, type) {
  var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  if (window.player.state.playing_item != item) {
    stateChange({
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
          window.player.sound.on('play', function () {
            window.player.sound.seek(time);
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var VidPlayer = /*#__PURE__*/function () {
  function VidPlayer(item) {
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

    console.log('autoplay');
    console.log(autoplay);
    console.log('live');
    console.log(live);
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
  }
  /************************************
  * Playlist Controles
  ************************************/


  _createClass(VidPlayer, [{
    key: "seek",
    value: function seek(per) {
      this.sound.seek(this.sound.duration() * per);
    }
  }]);

  return VidPlayer;
}();



/***/ }),

/***/ 1:
/*!**************************************!*\
  !*** multi ./resources/js/app_v3.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wnmp\nginx-bins\default\www\mp3quran\resources\js\app_v3.js */"./resources/js/app_v3.js");


/***/ })

/******/ });