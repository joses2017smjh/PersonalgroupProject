(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
    get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
  }) : x2)(function(x2) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x2 + '" is not supported');
  });
  var __commonJS = (cb2, mod) => function __require2() {
    return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/object-hash/dist/object_hash.js
  var require_object_hash = __commonJS({
    "node_modules/object-hash/dist/object_hash.js"(exports, module) {
      !function(e) {
        var t;
        "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : ("undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.objectHash = e());
      }(function() {
        return function r2(o, i, u) {
          function s(n, e2) {
            if (!i[n]) {
              if (!o[n]) {
                var t = "function" == typeof __require && __require;
                if (!e2 && t)
                  return t(n, true);
                if (a)
                  return a(n, true);
                throw new Error("Cannot find module '" + n + "'");
              }
              e2 = i[n] = { exports: {} };
              o[n][0].call(e2.exports, function(e3) {
                var t2 = o[n][1][e3];
                return s(t2 || e3);
              }, e2, e2.exports, r2, o, i, u);
            }
            return i[n].exports;
          }
          for (var a = "function" == typeof __require && __require, e = 0; e < u.length; e++)
            s(u[e]);
          return s;
        }({ 1: [function(w3, b2, m) {
          !function(e, n, s, c, d, h, p2, g, y2) {
            "use strict";
            var r2 = w3("crypto");
            function t(e2, t2) {
              t2 = u(e2, t2);
              var n2;
              return void 0 === (n2 = "passthrough" !== t2.algorithm ? r2.createHash(t2.algorithm) : new l2()).write && (n2.write = n2.update, n2.end = n2.update), f(t2, n2).dispatch(e2), n2.update || n2.end(""), n2.digest ? n2.digest("buffer" === t2.encoding ? void 0 : t2.encoding) : (e2 = n2.read(), "buffer" !== t2.encoding ? e2.toString(t2.encoding) : e2);
            }
            (m = b2.exports = t).sha1 = function(e2) {
              return t(e2);
            }, m.keys = function(e2) {
              return t(e2, { excludeValues: true, algorithm: "sha1", encoding: "hex" });
            }, m.MD5 = function(e2) {
              return t(e2, { algorithm: "md5", encoding: "hex" });
            }, m.keysMD5 = function(e2) {
              return t(e2, { algorithm: "md5", encoding: "hex", excludeValues: true });
            };
            var o = r2.getHashes ? r2.getHashes().slice() : ["sha1", "md5"], i = (o.push("passthrough"), ["buffer", "hex", "binary", "base64"]);
            function u(e2, t2) {
              var n2 = {};
              if (n2.algorithm = (t2 = t2 || {}).algorithm || "sha1", n2.encoding = t2.encoding || "hex", n2.excludeValues = !!t2.excludeValues, n2.algorithm = n2.algorithm.toLowerCase(), n2.encoding = n2.encoding.toLowerCase(), n2.ignoreUnknown = true === t2.ignoreUnknown, n2.respectType = false !== t2.respectType, n2.respectFunctionNames = false !== t2.respectFunctionNames, n2.respectFunctionProperties = false !== t2.respectFunctionProperties, n2.unorderedArrays = true === t2.unorderedArrays, n2.unorderedSets = false !== t2.unorderedSets, n2.unorderedObjects = false !== t2.unorderedObjects, n2.replacer = t2.replacer || void 0, n2.excludeKeys = t2.excludeKeys || void 0, void 0 === e2)
                throw new Error("Object argument required.");
              for (var r3 = 0; r3 < o.length; ++r3)
                o[r3].toLowerCase() === n2.algorithm.toLowerCase() && (n2.algorithm = o[r3]);
              if (-1 === o.indexOf(n2.algorithm))
                throw new Error('Algorithm "' + n2.algorithm + '"  not supported. supported values: ' + o.join(", "));
              if (-1 === i.indexOf(n2.encoding) && "passthrough" !== n2.algorithm)
                throw new Error('Encoding "' + n2.encoding + '"  not supported. supported values: ' + i.join(", "));
              return n2;
            }
            function a(e2) {
              if ("function" == typeof e2)
                return null != /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e2));
            }
            function f(o2, t2, i2) {
              i2 = i2 || [];
              function u2(e2) {
                return t2.update ? t2.update(e2, "utf8") : t2.write(e2, "utf8");
              }
              return { dispatch: function(e2) {
                return this["_" + (null === (e2 = o2.replacer ? o2.replacer(e2) : e2) ? "null" : typeof e2)](e2);
              }, _object: function(t3) {
                var n2, e2 = Object.prototype.toString.call(t3), r3 = /\[object (.*)\]/i.exec(e2);
                r3 = (r3 = r3 ? r3[1] : "unknown:[" + e2 + "]").toLowerCase();
                if (0 <= (e2 = i2.indexOf(t3)))
                  return this.dispatch("[CIRCULAR:" + e2 + "]");
                if (i2.push(t3), void 0 !== s && s.isBuffer && s.isBuffer(t3))
                  return u2("buffer:"), u2(t3);
                if ("object" === r3 || "function" === r3 || "asyncfunction" === r3)
                  return e2 = Object.keys(t3), o2.unorderedObjects && (e2 = e2.sort()), false === o2.respectType || a(t3) || e2.splice(0, 0, "prototype", "__proto__", "constructor"), o2.excludeKeys && (e2 = e2.filter(function(e3) {
                    return !o2.excludeKeys(e3);
                  })), u2("object:" + e2.length + ":"), n2 = this, e2.forEach(function(e3) {
                    n2.dispatch(e3), u2(":"), o2.excludeValues || n2.dispatch(t3[e3]), u2(",");
                  });
                if (!this["_" + r3]) {
                  if (o2.ignoreUnknown)
                    return u2("[" + r3 + "]");
                  throw new Error('Unknown object type "' + r3 + '"');
                }
                this["_" + r3](t3);
              }, _array: function(e2, t3) {
                t3 = void 0 !== t3 ? t3 : false !== o2.unorderedArrays;
                var n2 = this;
                if (u2("array:" + e2.length + ":"), !t3 || e2.length <= 1)
                  return e2.forEach(function(e3) {
                    return n2.dispatch(e3);
                  });
                var r3 = [], t3 = e2.map(function(e3) {
                  var t4 = new l2(), n3 = i2.slice();
                  return f(o2, t4, n3).dispatch(e3), r3 = r3.concat(n3.slice(i2.length)), t4.read().toString();
                });
                return i2 = i2.concat(r3), t3.sort(), this._array(t3, false);
              }, _date: function(e2) {
                return u2("date:" + e2.toJSON());
              }, _symbol: function(e2) {
                return u2("symbol:" + e2.toString());
              }, _error: function(e2) {
                return u2("error:" + e2.toString());
              }, _boolean: function(e2) {
                return u2("bool:" + e2.toString());
              }, _string: function(e2) {
                u2("string:" + e2.length + ":"), u2(e2.toString());
              }, _function: function(e2) {
                u2("fn:"), a(e2) ? this.dispatch("[native]") : this.dispatch(e2.toString()), false !== o2.respectFunctionNames && this.dispatch("function-name:" + String(e2.name)), o2.respectFunctionProperties && this._object(e2);
              }, _number: function(e2) {
                return u2("number:" + e2.toString());
              }, _xml: function(e2) {
                return u2("xml:" + e2.toString());
              }, _null: function() {
                return u2("Null");
              }, _undefined: function() {
                return u2("Undefined");
              }, _regexp: function(e2) {
                return u2("regex:" + e2.toString());
              }, _uint8array: function(e2) {
                return u2("uint8array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _uint8clampedarray: function(e2) {
                return u2("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _int8array: function(e2) {
                return u2("int8array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _uint16array: function(e2) {
                return u2("uint16array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _int16array: function(e2) {
                return u2("int16array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _uint32array: function(e2) {
                return u2("uint32array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _int32array: function(e2) {
                return u2("int32array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _float32array: function(e2) {
                return u2("float32array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _float64array: function(e2) {
                return u2("float64array:"), this.dispatch(Array.prototype.slice.call(e2));
              }, _arraybuffer: function(e2) {
                return u2("arraybuffer:"), this.dispatch(new Uint8Array(e2));
              }, _url: function(e2) {
                return u2("url:" + e2.toString());
              }, _map: function(e2) {
                u2("map:");
                e2 = Array.from(e2);
                return this._array(e2, false !== o2.unorderedSets);
              }, _set: function(e2) {
                u2("set:");
                e2 = Array.from(e2);
                return this._array(e2, false !== o2.unorderedSets);
              }, _file: function(e2) {
                return u2("file:"), this.dispatch([e2.name, e2.size, e2.type, e2.lastModfied]);
              }, _blob: function() {
                if (o2.ignoreUnknown)
                  return u2("[blob]");
                throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n');
              }, _domwindow: function() {
                return u2("domwindow");
              }, _bigint: function(e2) {
                return u2("bigint:" + e2.toString());
              }, _process: function() {
                return u2("process");
              }, _timer: function() {
                return u2("timer");
              }, _pipe: function() {
                return u2("pipe");
              }, _tcp: function() {
                return u2("tcp");
              }, _udp: function() {
                return u2("udp");
              }, _tty: function() {
                return u2("tty");
              }, _statwatcher: function() {
                return u2("statwatcher");
              }, _securecontext: function() {
                return u2("securecontext");
              }, _connection: function() {
                return u2("connection");
              }, _zlib: function() {
                return u2("zlib");
              }, _context: function() {
                return u2("context");
              }, _nodescript: function() {
                return u2("nodescript");
              }, _httpparser: function() {
                return u2("httpparser");
              }, _dataview: function() {
                return u2("dataview");
              }, _signal: function() {
                return u2("signal");
              }, _fsevent: function() {
                return u2("fsevent");
              }, _tlswrap: function() {
                return u2("tlswrap");
              } };
            }
            function l2() {
              return { buf: "", write: function(e2) {
                this.buf += e2;
              }, end: function(e2) {
                this.buf += e2;
              }, read: function() {
                return this.buf;
              } };
            }
            m.writeToStream = function(e2, t2, n2) {
              return void 0 === n2 && (n2 = t2, t2 = {}), f(t2 = u(e2, t2), n2).dispatch(e2);
            };
          }.call(this, w3("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w3("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_9a5aa49d.js", "/");
        }, { buffer: 3, crypto: 5, lYpoI2: 11 }], 2: [function(e, t, f) {
          !function(e2, t2, n, r2, o, i, u, s, a) {
            !function(e3) {
              "use strict";
              var a2 = "undefined" != typeof Uint8Array ? Uint8Array : Array, t3 = "+".charCodeAt(0), n2 = "/".charCodeAt(0), r3 = "0".charCodeAt(0), o2 = "a".charCodeAt(0), i2 = "A".charCodeAt(0), u2 = "-".charCodeAt(0), s2 = "_".charCodeAt(0);
              function f2(e4) {
                e4 = e4.charCodeAt(0);
                return e4 === t3 || e4 === u2 ? 62 : e4 === n2 || e4 === s2 ? 63 : e4 < r3 ? -1 : e4 < r3 + 10 ? e4 - r3 + 26 + 26 : e4 < i2 + 26 ? e4 - i2 : e4 < o2 + 26 ? e4 - o2 + 26 : void 0;
              }
              e3.toByteArray = function(e4) {
                var t4, n3;
                if (0 < e4.length % 4)
                  throw new Error("Invalid string. Length must be a multiple of 4");
                var r4 = e4.length, r4 = "=" === e4.charAt(r4 - 2) ? 2 : "=" === e4.charAt(r4 - 1) ? 1 : 0, o3 = new a2(3 * e4.length / 4 - r4), i3 = 0 < r4 ? e4.length - 4 : e4.length, u3 = 0;
                function s3(e5) {
                  o3[u3++] = e5;
                }
                for (t4 = 0; t4 < i3; t4 += 4, 0)
                  s3((16711680 & (n3 = f2(e4.charAt(t4)) << 18 | f2(e4.charAt(t4 + 1)) << 12 | f2(e4.charAt(t4 + 2)) << 6 | f2(e4.charAt(t4 + 3)))) >> 16), s3((65280 & n3) >> 8), s3(255 & n3);
                return 2 == r4 ? s3(255 & (n3 = f2(e4.charAt(t4)) << 2 | f2(e4.charAt(t4 + 1)) >> 4)) : 1 == r4 && (s3((n3 = f2(e4.charAt(t4)) << 10 | f2(e4.charAt(t4 + 1)) << 4 | f2(e4.charAt(t4 + 2)) >> 2) >> 8 & 255), s3(255 & n3)), o3;
              }, e3.fromByteArray = function(e4) {
                var t4, n3, r4, o3, i3 = e4.length % 3, u3 = "";
                function s3(e5) {
                  return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e5);
                }
                for (t4 = 0, r4 = e4.length - i3; t4 < r4; t4 += 3)
                  n3 = (e4[t4] << 16) + (e4[t4 + 1] << 8) + e4[t4 + 2], u3 += s3((o3 = n3) >> 18 & 63) + s3(o3 >> 12 & 63) + s3(o3 >> 6 & 63) + s3(63 & o3);
                switch (i3) {
                  case 1:
                    u3 = (u3 += s3((n3 = e4[e4.length - 1]) >> 2)) + s3(n3 << 4 & 63) + "==";
                    break;
                  case 2:
                    u3 = (u3 = (u3 += s3((n3 = (e4[e4.length - 2] << 8) + e4[e4.length - 1]) >> 10)) + s3(n3 >> 4 & 63)) + s3(n3 << 2 & 63) + "=";
                }
                return u3;
              };
            }(void 0 === f ? this.base64js = {} : f);
          }.call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js", "/node_modules/gulp-browserify/node_modules/base64-js/lib");
        }, { buffer: 3, lYpoI2: 11 }], 3: [function(O2, e, H3) {
          !function(e2, n, f, r2, h, p2, g, y2, w3) {
            var a = O2("base64-js"), i = O2("ieee754");
            function f(e3, t2, n2) {
              if (!(this instanceof f))
                return new f(e3, t2, n2);
              var r3, o2, i2, u2, s2 = typeof e3;
              if ("base64" === t2 && "string" == s2)
                for (e3 = (u2 = e3).trim ? u2.trim() : u2.replace(/^\s+|\s+$/g, ""); e3.length % 4 != 0; )
                  e3 += "=";
              if ("number" == s2)
                r3 = j(e3);
              else if ("string" == s2)
                r3 = f.byteLength(e3, t2);
              else {
                if ("object" != s2)
                  throw new Error("First argument needs to be a number, array or string.");
                r3 = j(e3.length);
              }
              if (f._useTypedArrays ? o2 = f._augment(new Uint8Array(r3)) : ((o2 = this).length = r3, o2._isBuffer = true), f._useTypedArrays && "number" == typeof e3.byteLength)
                o2._set(e3);
              else if (C3(u2 = e3) || f.isBuffer(u2) || u2 && "object" == typeof u2 && "number" == typeof u2.length)
                for (i2 = 0; i2 < r3; i2++)
                  f.isBuffer(e3) ? o2[i2] = e3.readUInt8(i2) : o2[i2] = e3[i2];
              else if ("string" == s2)
                o2.write(e3, 0, t2);
              else if ("number" == s2 && !f._useTypedArrays && !n2)
                for (i2 = 0; i2 < r3; i2++)
                  o2[i2] = 0;
              return o2;
            }
            function b2(e3, t2, n2, r3) {
              return f._charsWritten = c(function(e4) {
                for (var t3 = [], n3 = 0; n3 < e4.length; n3++)
                  t3.push(255 & e4.charCodeAt(n3));
                return t3;
              }(t2), e3, n2, r3);
            }
            function m(e3, t2, n2, r3) {
              return f._charsWritten = c(function(e4) {
                for (var t3, n3, r4 = [], o2 = 0; o2 < e4.length; o2++)
                  n3 = e4.charCodeAt(o2), t3 = n3 >> 8, n3 = n3 % 256, r4.push(n3), r4.push(t3);
                return r4;
              }(t2), e3, n2, r3);
            }
            function v3(e3, t2, n2) {
              var r3 = "";
              n2 = Math.min(e3.length, n2);
              for (var o2 = t2; o2 < n2; o2++)
                r3 += String.fromCharCode(e3[o2]);
              return r3;
            }
            function o(e3, t2, n2, r3) {
              r3 || (d("boolean" == typeof n2, "missing or invalid endian"), d(null != t2, "missing offset"), d(t2 + 1 < e3.length, "Trying to read beyond buffer length"));
              var o2, r3 = e3.length;
              if (!(r3 <= t2))
                return n2 ? (o2 = e3[t2], t2 + 1 < r3 && (o2 |= e3[t2 + 1] << 8)) : (o2 = e3[t2] << 8, t2 + 1 < r3 && (o2 |= e3[t2 + 1])), o2;
            }
            function u(e3, t2, n2, r3) {
              r3 || (d("boolean" == typeof n2, "missing or invalid endian"), d(null != t2, "missing offset"), d(t2 + 3 < e3.length, "Trying to read beyond buffer length"));
              var o2, r3 = e3.length;
              if (!(r3 <= t2))
                return n2 ? (t2 + 2 < r3 && (o2 = e3[t2 + 2] << 16), t2 + 1 < r3 && (o2 |= e3[t2 + 1] << 8), o2 |= e3[t2], t2 + 3 < r3 && (o2 += e3[t2 + 3] << 24 >>> 0)) : (t2 + 1 < r3 && (o2 = e3[t2 + 1] << 16), t2 + 2 < r3 && (o2 |= e3[t2 + 2] << 8), t2 + 3 < r3 && (o2 |= e3[t2 + 3]), o2 += e3[t2] << 24 >>> 0), o2;
            }
            function _(e3, t2, n2, r3) {
              if (r3 || (d("boolean" == typeof n2, "missing or invalid endian"), d(null != t2, "missing offset"), d(t2 + 1 < e3.length, "Trying to read beyond buffer length")), !(e3.length <= t2))
                return r3 = o(e3, t2, n2, true), 32768 & r3 ? -1 * (65535 - r3 + 1) : r3;
            }
            function E2(e3, t2, n2, r3) {
              if (r3 || (d("boolean" == typeof n2, "missing or invalid endian"), d(null != t2, "missing offset"), d(t2 + 3 < e3.length, "Trying to read beyond buffer length")), !(e3.length <= t2))
                return r3 = u(e3, t2, n2, true), 2147483648 & r3 ? -1 * (4294967295 - r3 + 1) : r3;
            }
            function I2(e3, t2, n2, r3) {
              return r3 || (d("boolean" == typeof n2, "missing or invalid endian"), d(t2 + 3 < e3.length, "Trying to read beyond buffer length")), i.read(e3, t2, n2, 23, 4);
            }
            function A2(e3, t2, n2, r3) {
              return r3 || (d("boolean" == typeof n2, "missing or invalid endian"), d(t2 + 7 < e3.length, "Trying to read beyond buffer length")), i.read(e3, t2, n2, 52, 8);
            }
            function s(e3, t2, n2, r3, o2) {
              o2 || (d(null != t2, "missing value"), d("boolean" == typeof r3, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 1 < e3.length, "trying to write beyond buffer length"), Y3(t2, 65535));
              o2 = e3.length;
              if (!(o2 <= n2))
                for (var i2 = 0, u2 = Math.min(o2 - n2, 2); i2 < u2; i2++)
                  e3[n2 + i2] = (t2 & 255 << 8 * (r3 ? i2 : 1 - i2)) >>> 8 * (r3 ? i2 : 1 - i2);
            }
            function l2(e3, t2, n2, r3, o2) {
              o2 || (d(null != t2, "missing value"), d("boolean" == typeof r3, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 3 < e3.length, "trying to write beyond buffer length"), Y3(t2, 4294967295));
              o2 = e3.length;
              if (!(o2 <= n2))
                for (var i2 = 0, u2 = Math.min(o2 - n2, 4); i2 < u2; i2++)
                  e3[n2 + i2] = t2 >>> 8 * (r3 ? i2 : 3 - i2) & 255;
            }
            function B2(e3, t2, n2, r3, o2) {
              o2 || (d(null != t2, "missing value"), d("boolean" == typeof r3, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 1 < e3.length, "Trying to write beyond buffer length"), F3(t2, 32767, -32768)), e3.length <= n2 || s(e3, 0 <= t2 ? t2 : 65535 + t2 + 1, n2, r3, o2);
            }
            function L(e3, t2, n2, r3, o2) {
              o2 || (d(null != t2, "missing value"), d("boolean" == typeof r3, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 3 < e3.length, "Trying to write beyond buffer length"), F3(t2, 2147483647, -2147483648)), e3.length <= n2 || l2(e3, 0 <= t2 ? t2 : 4294967295 + t2 + 1, n2, r3, o2);
            }
            function U2(e3, t2, n2, r3, o2) {
              o2 || (d(null != t2, "missing value"), d("boolean" == typeof r3, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 3 < e3.length, "Trying to write beyond buffer length"), D3(t2, 34028234663852886e22, -34028234663852886e22)), e3.length <= n2 || i.write(e3, t2, n2, r3, 23, 4);
            }
            function x2(e3, t2, n2, r3, o2) {
              o2 || (d(null != t2, "missing value"), d("boolean" == typeof r3, "missing or invalid endian"), d(null != n2, "missing offset"), d(n2 + 7 < e3.length, "Trying to write beyond buffer length"), D3(t2, 17976931348623157e292, -17976931348623157e292)), e3.length <= n2 || i.write(e3, t2, n2, r3, 52, 8);
            }
            H3.Buffer = f, H3.SlowBuffer = f, H3.INSPECT_MAX_BYTES = 50, f.poolSize = 8192, f._useTypedArrays = function() {
              try {
                var e3 = new ArrayBuffer(0), t2 = new Uint8Array(e3);
                return t2.foo = function() {
                  return 42;
                }, 42 === t2.foo() && "function" == typeof t2.subarray;
              } catch (e4) {
                return false;
              }
            }(), f.isEncoding = function(e3) {
              switch (String(e3).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "raw":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return true;
                default:
                  return false;
              }
            }, f.isBuffer = function(e3) {
              return !(null == e3 || !e3._isBuffer);
            }, f.byteLength = function(e3, t2) {
              var n2;
              switch (e3 += "", t2 || "utf8") {
                case "hex":
                  n2 = e3.length / 2;
                  break;
                case "utf8":
                case "utf-8":
                  n2 = T2(e3).length;
                  break;
                case "ascii":
                case "binary":
                case "raw":
                  n2 = e3.length;
                  break;
                case "base64":
                  n2 = M2(e3).length;
                  break;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  n2 = 2 * e3.length;
                  break;
                default:
                  throw new Error("Unknown encoding");
              }
              return n2;
            }, f.concat = function(e3, t2) {
              if (d(C3(e3), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e3.length)
                return new f(0);
              if (1 === e3.length)
                return e3[0];
              if ("number" != typeof t2)
                for (o2 = t2 = 0; o2 < e3.length; o2++)
                  t2 += e3[o2].length;
              for (var n2 = new f(t2), r3 = 0, o2 = 0; o2 < e3.length; o2++) {
                var i2 = e3[o2];
                i2.copy(n2, r3), r3 += i2.length;
              }
              return n2;
            }, f.prototype.write = function(e3, t2, n2, r3) {
              isFinite(t2) ? isFinite(n2) || (r3 = n2, n2 = void 0) : (a2 = r3, r3 = t2, t2 = n2, n2 = a2), t2 = Number(t2) || 0;
              var o2, i2, u2, s2, a2 = this.length - t2;
              switch ((!n2 || a2 < (n2 = Number(n2))) && (n2 = a2), r3 = String(r3 || "utf8").toLowerCase()) {
                case "hex":
                  o2 = function(e4, t3, n3, r4) {
                    n3 = Number(n3) || 0;
                    var o3 = e4.length - n3;
                    (!r4 || o3 < (r4 = Number(r4))) && (r4 = o3), d((o3 = t3.length) % 2 == 0, "Invalid hex string"), o3 / 2 < r4 && (r4 = o3 / 2);
                    for (var i3 = 0; i3 < r4; i3++) {
                      var u3 = parseInt(t3.substr(2 * i3, 2), 16);
                      d(!isNaN(u3), "Invalid hex string"), e4[n3 + i3] = u3;
                    }
                    return f._charsWritten = 2 * i3, i3;
                  }(this, e3, t2, n2);
                  break;
                case "utf8":
                case "utf-8":
                  i2 = this, u2 = t2, s2 = n2, o2 = f._charsWritten = c(T2(e3), i2, u2, s2);
                  break;
                case "ascii":
                case "binary":
                  o2 = b2(this, e3, t2, n2);
                  break;
                case "base64":
                  i2 = this, u2 = t2, s2 = n2, o2 = f._charsWritten = c(M2(e3), i2, u2, s2);
                  break;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  o2 = m(this, e3, t2, n2);
                  break;
                default:
                  throw new Error("Unknown encoding");
              }
              return o2;
            }, f.prototype.toString = function(e3, t2, n2) {
              var r3, o2, i2, u2, s2 = this;
              if (e3 = String(e3 || "utf8").toLowerCase(), t2 = Number(t2) || 0, (n2 = void 0 !== n2 ? Number(n2) : s2.length) === t2)
                return "";
              switch (e3) {
                case "hex":
                  r3 = function(e4, t3, n3) {
                    var r4 = e4.length;
                    (!t3 || t3 < 0) && (t3 = 0);
                    (!n3 || n3 < 0 || r4 < n3) && (n3 = r4);
                    for (var o3 = "", i3 = t3; i3 < n3; i3++)
                      o3 += k2(e4[i3]);
                    return o3;
                  }(s2, t2, n2);
                  break;
                case "utf8":
                case "utf-8":
                  r3 = function(e4, t3, n3) {
                    var r4 = "", o3 = "";
                    n3 = Math.min(e4.length, n3);
                    for (var i3 = t3; i3 < n3; i3++)
                      e4[i3] <= 127 ? (r4 += N2(o3) + String.fromCharCode(e4[i3]), o3 = "") : o3 += "%" + e4[i3].toString(16);
                    return r4 + N2(o3);
                  }(s2, t2, n2);
                  break;
                case "ascii":
                case "binary":
                  r3 = v3(s2, t2, n2);
                  break;
                case "base64":
                  o2 = s2, u2 = n2, r3 = 0 === (i2 = t2) && u2 === o2.length ? a.fromByteArray(o2) : a.fromByteArray(o2.slice(i2, u2));
                  break;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  r3 = function(e4, t3, n3) {
                    for (var r4 = e4.slice(t3, n3), o3 = "", i3 = 0; i3 < r4.length; i3 += 2)
                      o3 += String.fromCharCode(r4[i3] + 256 * r4[i3 + 1]);
                    return o3;
                  }(s2, t2, n2);
                  break;
                default:
                  throw new Error("Unknown encoding");
              }
              return r3;
            }, f.prototype.toJSON = function() {
              return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
            }, f.prototype.copy = function(e3, t2, n2, r3) {
              if (t2 = t2 || 0, (r3 = r3 || 0 === r3 ? r3 : this.length) !== (n2 = n2 || 0) && 0 !== e3.length && 0 !== this.length) {
                d(n2 <= r3, "sourceEnd < sourceStart"), d(0 <= t2 && t2 < e3.length, "targetStart out of bounds"), d(0 <= n2 && n2 < this.length, "sourceStart out of bounds"), d(0 <= r3 && r3 <= this.length, "sourceEnd out of bounds"), r3 > this.length && (r3 = this.length);
                var o2 = (r3 = e3.length - t2 < r3 - n2 ? e3.length - t2 + n2 : r3) - n2;
                if (o2 < 100 || !f._useTypedArrays)
                  for (var i2 = 0; i2 < o2; i2++)
                    e3[i2 + t2] = this[i2 + n2];
                else
                  e3._set(this.subarray(n2, n2 + o2), t2);
              }
            }, f.prototype.slice = function(e3, t2) {
              var n2 = this.length;
              if (e3 = S3(e3, n2, 0), t2 = S3(t2, n2, n2), f._useTypedArrays)
                return f._augment(this.subarray(e3, t2));
              for (var r3 = t2 - e3, o2 = new f(r3, void 0, true), i2 = 0; i2 < r3; i2++)
                o2[i2] = this[i2 + e3];
              return o2;
            }, f.prototype.get = function(e3) {
              return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e3);
            }, f.prototype.set = function(e3, t2) {
              return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e3, t2);
            }, f.prototype.readUInt8 = function(e3, t2) {
              if (t2 || (d(null != e3, "missing offset"), d(e3 < this.length, "Trying to read beyond buffer length")), !(e3 >= this.length))
                return this[e3];
            }, f.prototype.readUInt16LE = function(e3, t2) {
              return o(this, e3, true, t2);
            }, f.prototype.readUInt16BE = function(e3, t2) {
              return o(this, e3, false, t2);
            }, f.prototype.readUInt32LE = function(e3, t2) {
              return u(this, e3, true, t2);
            }, f.prototype.readUInt32BE = function(e3, t2) {
              return u(this, e3, false, t2);
            }, f.prototype.readInt8 = function(e3, t2) {
              if (t2 || (d(null != e3, "missing offset"), d(e3 < this.length, "Trying to read beyond buffer length")), !(e3 >= this.length))
                return 128 & this[e3] ? -1 * (255 - this[e3] + 1) : this[e3];
            }, f.prototype.readInt16LE = function(e3, t2) {
              return _(this, e3, true, t2);
            }, f.prototype.readInt16BE = function(e3, t2) {
              return _(this, e3, false, t2);
            }, f.prototype.readInt32LE = function(e3, t2) {
              return E2(this, e3, true, t2);
            }, f.prototype.readInt32BE = function(e3, t2) {
              return E2(this, e3, false, t2);
            }, f.prototype.readFloatLE = function(e3, t2) {
              return I2(this, e3, true, t2);
            }, f.prototype.readFloatBE = function(e3, t2) {
              return I2(this, e3, false, t2);
            }, f.prototype.readDoubleLE = function(e3, t2) {
              return A2(this, e3, true, t2);
            }, f.prototype.readDoubleBE = function(e3, t2) {
              return A2(this, e3, false, t2);
            }, f.prototype.writeUInt8 = function(e3, t2, n2) {
              n2 || (d(null != e3, "missing value"), d(null != t2, "missing offset"), d(t2 < this.length, "trying to write beyond buffer length"), Y3(e3, 255)), t2 >= this.length || (this[t2] = e3);
            }, f.prototype.writeUInt16LE = function(e3, t2, n2) {
              s(this, e3, t2, true, n2);
            }, f.prototype.writeUInt16BE = function(e3, t2, n2) {
              s(this, e3, t2, false, n2);
            }, f.prototype.writeUInt32LE = function(e3, t2, n2) {
              l2(this, e3, t2, true, n2);
            }, f.prototype.writeUInt32BE = function(e3, t2, n2) {
              l2(this, e3, t2, false, n2);
            }, f.prototype.writeInt8 = function(e3, t2, n2) {
              n2 || (d(null != e3, "missing value"), d(null != t2, "missing offset"), d(t2 < this.length, "Trying to write beyond buffer length"), F3(e3, 127, -128)), t2 >= this.length || (0 <= e3 ? this.writeUInt8(e3, t2, n2) : this.writeUInt8(255 + e3 + 1, t2, n2));
            }, f.prototype.writeInt16LE = function(e3, t2, n2) {
              B2(this, e3, t2, true, n2);
            }, f.prototype.writeInt16BE = function(e3, t2, n2) {
              B2(this, e3, t2, false, n2);
            }, f.prototype.writeInt32LE = function(e3, t2, n2) {
              L(this, e3, t2, true, n2);
            }, f.prototype.writeInt32BE = function(e3, t2, n2) {
              L(this, e3, t2, false, n2);
            }, f.prototype.writeFloatLE = function(e3, t2, n2) {
              U2(this, e3, t2, true, n2);
            }, f.prototype.writeFloatBE = function(e3, t2, n2) {
              U2(this, e3, t2, false, n2);
            }, f.prototype.writeDoubleLE = function(e3, t2, n2) {
              x2(this, e3, t2, true, n2);
            }, f.prototype.writeDoubleBE = function(e3, t2, n2) {
              x2(this, e3, t2, false, n2);
            }, f.prototype.fill = function(e3, t2, n2) {
              if (t2 = t2 || 0, n2 = n2 || this.length, d("number" == typeof (e3 = "string" == typeof (e3 = e3 || 0) ? e3.charCodeAt(0) : e3) && !isNaN(e3), "value is not a number"), d(t2 <= n2, "end < start"), n2 !== t2 && 0 !== this.length) {
                d(0 <= t2 && t2 < this.length, "start out of bounds"), d(0 <= n2 && n2 <= this.length, "end out of bounds");
                for (var r3 = t2; r3 < n2; r3++)
                  this[r3] = e3;
              }
            }, f.prototype.inspect = function() {
              for (var e3 = [], t2 = this.length, n2 = 0; n2 < t2; n2++)
                if (e3[n2] = k2(this[n2]), n2 === H3.INSPECT_MAX_BYTES) {
                  e3[n2 + 1] = "...";
                  break;
                }
              return "<Buffer " + e3.join(" ") + ">";
            }, f.prototype.toArrayBuffer = function() {
              if ("undefined" == typeof Uint8Array)
                throw new Error("Buffer.toArrayBuffer not supported in this browser");
              if (f._useTypedArrays)
                return new f(this).buffer;
              for (var e3 = new Uint8Array(this.length), t2 = 0, n2 = e3.length; t2 < n2; t2 += 1)
                e3[t2] = this[t2];
              return e3.buffer;
            };
            var t = f.prototype;
            function S3(e3, t2, n2) {
              return "number" != typeof e3 ? n2 : t2 <= (e3 = ~~e3) ? t2 : 0 <= e3 || 0 <= (e3 += t2) ? e3 : 0;
            }
            function j(e3) {
              return (e3 = ~~Math.ceil(+e3)) < 0 ? 0 : e3;
            }
            function C3(e3) {
              return (Array.isArray || function(e4) {
                return "[object Array]" === Object.prototype.toString.call(e4);
              })(e3);
            }
            function k2(e3) {
              return e3 < 16 ? "0" + e3.toString(16) : e3.toString(16);
            }
            function T2(e3) {
              for (var t2 = [], n2 = 0; n2 < e3.length; n2++) {
                var r3 = e3.charCodeAt(n2);
                if (r3 <= 127)
                  t2.push(e3.charCodeAt(n2));
                else
                  for (var o2 = n2, i2 = (55296 <= r3 && r3 <= 57343 && n2++, encodeURIComponent(e3.slice(o2, n2 + 1)).substr(1).split("%")), u2 = 0; u2 < i2.length; u2++)
                    t2.push(parseInt(i2[u2], 16));
              }
              return t2;
            }
            function M2(e3) {
              return a.toByteArray(e3);
            }
            function c(e3, t2, n2, r3) {
              for (var o2 = 0; o2 < r3 && !(o2 + n2 >= t2.length || o2 >= e3.length); o2++)
                t2[o2 + n2] = e3[o2];
              return o2;
            }
            function N2(e3) {
              try {
                return decodeURIComponent(e3);
              } catch (e4) {
                return String.fromCharCode(65533);
              }
            }
            function Y3(e3, t2) {
              d("number" == typeof e3, "cannot write a non-number as a number"), d(0 <= e3, "specified a negative value for writing an unsigned value"), d(e3 <= t2, "value is larger than maximum value for type"), d(Math.floor(e3) === e3, "value has a fractional component");
            }
            function F3(e3, t2, n2) {
              d("number" == typeof e3, "cannot write a non-number as a number"), d(e3 <= t2, "value larger than maximum allowed value"), d(n2 <= e3, "value smaller than minimum allowed value"), d(Math.floor(e3) === e3, "value has a fractional component");
            }
            function D3(e3, t2, n2) {
              d("number" == typeof e3, "cannot write a non-number as a number"), d(e3 <= t2, "value larger than maximum allowed value"), d(n2 <= e3, "value smaller than minimum allowed value");
            }
            function d(e3, t2) {
              if (!e3)
                throw new Error(t2 || "Failed assertion");
            }
            f._augment = function(e3) {
              return e3._isBuffer = true, e3._get = e3.get, e3._set = e3.set, e3.get = t.get, e3.set = t.set, e3.write = t.write, e3.toString = t.toString, e3.toLocaleString = t.toString, e3.toJSON = t.toJSON, e3.copy = t.copy, e3.slice = t.slice, e3.readUInt8 = t.readUInt8, e3.readUInt16LE = t.readUInt16LE, e3.readUInt16BE = t.readUInt16BE, e3.readUInt32LE = t.readUInt32LE, e3.readUInt32BE = t.readUInt32BE, e3.readInt8 = t.readInt8, e3.readInt16LE = t.readInt16LE, e3.readInt16BE = t.readInt16BE, e3.readInt32LE = t.readInt32LE, e3.readInt32BE = t.readInt32BE, e3.readFloatLE = t.readFloatLE, e3.readFloatBE = t.readFloatBE, e3.readDoubleLE = t.readDoubleLE, e3.readDoubleBE = t.readDoubleBE, e3.writeUInt8 = t.writeUInt8, e3.writeUInt16LE = t.writeUInt16LE, e3.writeUInt16BE = t.writeUInt16BE, e3.writeUInt32LE = t.writeUInt32LE, e3.writeUInt32BE = t.writeUInt32BE, e3.writeInt8 = t.writeInt8, e3.writeInt16LE = t.writeInt16LE, e3.writeInt16BE = t.writeInt16BE, e3.writeInt32LE = t.writeInt32LE, e3.writeInt32BE = t.writeInt32BE, e3.writeFloatLE = t.writeFloatLE, e3.writeFloatBE = t.writeFloatBE, e3.writeDoubleLE = t.writeDoubleLE, e3.writeDoubleBE = t.writeDoubleBE, e3.fill = t.fill, e3.inspect = t.inspect, e3.toArrayBuffer = t.toArrayBuffer, e3;
            };
          }.call(this, O2("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, O2("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/buffer/index.js", "/node_modules/gulp-browserify/node_modules/buffer");
        }, { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 }], 4: [function(c, d, e) {
          !function(e2, t, a, n, r2, o, i, u, s) {
            var a = c("buffer").Buffer, f = 4, l2 = new a(f);
            l2.fill(0);
            d.exports = { hash: function(e3, t2, n2, r3) {
              for (var o2 = t2(function(e4, t3) {
                e4.length % f != 0 && (n3 = e4.length + (f - e4.length % f), e4 = a.concat([e4, l2], n3));
                for (var n3, r4 = [], o3 = t3 ? e4.readInt32BE : e4.readInt32LE, i3 = 0; i3 < e4.length; i3 += f)
                  r4.push(o3.call(e4, i3));
                return r4;
              }(e3 = a.isBuffer(e3) ? e3 : new a(e3), r3), 8 * e3.length), t2 = r3, i2 = new a(n2), u2 = t2 ? i2.writeInt32BE : i2.writeInt32LE, s2 = 0; s2 < o2.length; s2++)
                u2.call(i2, o2[s2], 4 * s2, true);
              return i2;
            } };
          }.call(this, c("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, { buffer: 3, lYpoI2: 11 }], 5: [function(v3, e, _) {
          !function(l2, c, u, d, h, p2, g, y2, w3) {
            var u = v3("buffer").Buffer, e2 = v3("./sha"), t = v3("./sha256"), n = v3("./rng"), b2 = { sha1: e2, sha256: t, md5: v3("./md5") }, s = 64, a = new u(s);
            function r2(e3, n2) {
              var r3 = b2[e3 = e3 || "sha1"], o2 = [];
              return r3 || i("algorithm:", e3, "is not yet supported"), { update: function(e4) {
                return u.isBuffer(e4) || (e4 = new u(e4)), o2.push(e4), e4.length, this;
              }, digest: function(e4) {
                var t2 = u.concat(o2), t2 = n2 ? function(e5, t3, n3) {
                  u.isBuffer(t3) || (t3 = new u(t3)), u.isBuffer(n3) || (n3 = new u(n3)), t3.length > s ? t3 = e5(t3) : t3.length < s && (t3 = u.concat([t3, a], s));
                  for (var r4 = new u(s), o3 = new u(s), i2 = 0; i2 < s; i2++)
                    r4[i2] = 54 ^ t3[i2], o3[i2] = 92 ^ t3[i2];
                  return n3 = e5(u.concat([r4, n3])), e5(u.concat([o3, n3]));
                }(r3, n2, t2) : r3(t2);
                return o2 = null, e4 ? t2.toString(e4) : t2;
              } };
            }
            function i() {
              var e3 = [].slice.call(arguments).join(" ");
              throw new Error([e3, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"));
            }
            a.fill(0), _.createHash = function(e3) {
              return r2(e3);
            }, _.createHmac = r2, _.randomBytes = function(e3, t2) {
              if (!t2 || !t2.call)
                return new u(n(e3));
              try {
                t2.call(this, void 0, new u(n(e3)));
              } catch (e4) {
                t2(e4);
              }
            };
            var o, f = ["createCredentials", "createCipher", "createCipheriv", "createDecipher", "createDecipheriv", "createSign", "createVerify", "createDiffieHellman", "pbkdf2"], m = function(e3) {
              _[e3] = function() {
                i("sorry,", e3, "is not implemented yet");
              };
            };
            for (o in f)
              m(f[o], o);
          }.call(this, v3("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, v3("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, { "./md5": 6, "./rng": 7, "./sha": 8, "./sha256": 9, buffer: 3, lYpoI2: 11 }], 6: [function(w3, b2, e) {
          !function(e2, r2, o, i, u, a, f, l2, y2) {
            var t = w3("./helpers");
            function n(e3, t2) {
              e3[t2 >> 5] |= 128 << t2 % 32, e3[14 + (t2 + 64 >>> 9 << 4)] = t2;
              for (var n2 = 1732584193, r3 = -271733879, o2 = -1732584194, i2 = 271733878, u2 = 0; u2 < e3.length; u2 += 16) {
                var s2 = n2, a2 = r3, f2 = o2, l3 = i2, n2 = c(n2, r3, o2, i2, e3[u2 + 0], 7, -680876936), i2 = c(i2, n2, r3, o2, e3[u2 + 1], 12, -389564586), o2 = c(o2, i2, n2, r3, e3[u2 + 2], 17, 606105819), r3 = c(r3, o2, i2, n2, e3[u2 + 3], 22, -1044525330);
                n2 = c(n2, r3, o2, i2, e3[u2 + 4], 7, -176418897), i2 = c(i2, n2, r3, o2, e3[u2 + 5], 12, 1200080426), o2 = c(o2, i2, n2, r3, e3[u2 + 6], 17, -1473231341), r3 = c(r3, o2, i2, n2, e3[u2 + 7], 22, -45705983), n2 = c(n2, r3, o2, i2, e3[u2 + 8], 7, 1770035416), i2 = c(i2, n2, r3, o2, e3[u2 + 9], 12, -1958414417), o2 = c(o2, i2, n2, r3, e3[u2 + 10], 17, -42063), r3 = c(r3, o2, i2, n2, e3[u2 + 11], 22, -1990404162), n2 = c(n2, r3, o2, i2, e3[u2 + 12], 7, 1804603682), i2 = c(i2, n2, r3, o2, e3[u2 + 13], 12, -40341101), o2 = c(o2, i2, n2, r3, e3[u2 + 14], 17, -1502002290), n2 = d(n2, r3 = c(r3, o2, i2, n2, e3[u2 + 15], 22, 1236535329), o2, i2, e3[u2 + 1], 5, -165796510), i2 = d(i2, n2, r3, o2, e3[u2 + 6], 9, -1069501632), o2 = d(o2, i2, n2, r3, e3[u2 + 11], 14, 643717713), r3 = d(r3, o2, i2, n2, e3[u2 + 0], 20, -373897302), n2 = d(n2, r3, o2, i2, e3[u2 + 5], 5, -701558691), i2 = d(i2, n2, r3, o2, e3[u2 + 10], 9, 38016083), o2 = d(o2, i2, n2, r3, e3[u2 + 15], 14, -660478335), r3 = d(r3, o2, i2, n2, e3[u2 + 4], 20, -405537848), n2 = d(n2, r3, o2, i2, e3[u2 + 9], 5, 568446438), i2 = d(i2, n2, r3, o2, e3[u2 + 14], 9, -1019803690), o2 = d(o2, i2, n2, r3, e3[u2 + 3], 14, -187363961), r3 = d(r3, o2, i2, n2, e3[u2 + 8], 20, 1163531501), n2 = d(n2, r3, o2, i2, e3[u2 + 13], 5, -1444681467), i2 = d(i2, n2, r3, o2, e3[u2 + 2], 9, -51403784), o2 = d(o2, i2, n2, r3, e3[u2 + 7], 14, 1735328473), n2 = h(n2, r3 = d(r3, o2, i2, n2, e3[u2 + 12], 20, -1926607734), o2, i2, e3[u2 + 5], 4, -378558), i2 = h(i2, n2, r3, o2, e3[u2 + 8], 11, -2022574463), o2 = h(o2, i2, n2, r3, e3[u2 + 11], 16, 1839030562), r3 = h(r3, o2, i2, n2, e3[u2 + 14], 23, -35309556), n2 = h(n2, r3, o2, i2, e3[u2 + 1], 4, -1530992060), i2 = h(i2, n2, r3, o2, e3[u2 + 4], 11, 1272893353), o2 = h(o2, i2, n2, r3, e3[u2 + 7], 16, -155497632), r3 = h(r3, o2, i2, n2, e3[u2 + 10], 23, -1094730640), n2 = h(n2, r3, o2, i2, e3[u2 + 13], 4, 681279174), i2 = h(i2, n2, r3, o2, e3[u2 + 0], 11, -358537222), o2 = h(o2, i2, n2, r3, e3[u2 + 3], 16, -722521979), r3 = h(r3, o2, i2, n2, e3[u2 + 6], 23, 76029189), n2 = h(n2, r3, o2, i2, e3[u2 + 9], 4, -640364487), i2 = h(i2, n2, r3, o2, e3[u2 + 12], 11, -421815835), o2 = h(o2, i2, n2, r3, e3[u2 + 15], 16, 530742520), n2 = p2(n2, r3 = h(r3, o2, i2, n2, e3[u2 + 2], 23, -995338651), o2, i2, e3[u2 + 0], 6, -198630844), i2 = p2(i2, n2, r3, o2, e3[u2 + 7], 10, 1126891415), o2 = p2(o2, i2, n2, r3, e3[u2 + 14], 15, -1416354905), r3 = p2(r3, o2, i2, n2, e3[u2 + 5], 21, -57434055), n2 = p2(n2, r3, o2, i2, e3[u2 + 12], 6, 1700485571), i2 = p2(i2, n2, r3, o2, e3[u2 + 3], 10, -1894986606), o2 = p2(o2, i2, n2, r3, e3[u2 + 10], 15, -1051523), r3 = p2(r3, o2, i2, n2, e3[u2 + 1], 21, -2054922799), n2 = p2(n2, r3, o2, i2, e3[u2 + 8], 6, 1873313359), i2 = p2(i2, n2, r3, o2, e3[u2 + 15], 10, -30611744), o2 = p2(o2, i2, n2, r3, e3[u2 + 6], 15, -1560198380), r3 = p2(r3, o2, i2, n2, e3[u2 + 13], 21, 1309151649), n2 = p2(n2, r3, o2, i2, e3[u2 + 4], 6, -145523070), i2 = p2(i2, n2, r3, o2, e3[u2 + 11], 10, -1120210379), o2 = p2(o2, i2, n2, r3, e3[u2 + 2], 15, 718787259), r3 = p2(r3, o2, i2, n2, e3[u2 + 9], 21, -343485551), n2 = g(n2, s2), r3 = g(r3, a2), o2 = g(o2, f2), i2 = g(i2, l3);
              }
              return Array(n2, r3, o2, i2);
            }
            function s(e3, t2, n2, r3, o2, i2) {
              return g((t2 = g(g(t2, e3), g(r3, i2))) << o2 | t2 >>> 32 - o2, n2);
            }
            function c(e3, t2, n2, r3, o2, i2, u2) {
              return s(t2 & n2 | ~t2 & r3, e3, t2, o2, i2, u2);
            }
            function d(e3, t2, n2, r3, o2, i2, u2) {
              return s(t2 & r3 | n2 & ~r3, e3, t2, o2, i2, u2);
            }
            function h(e3, t2, n2, r3, o2, i2, u2) {
              return s(t2 ^ n2 ^ r3, e3, t2, o2, i2, u2);
            }
            function p2(e3, t2, n2, r3, o2, i2, u2) {
              return s(n2 ^ (t2 | ~r3), e3, t2, o2, i2, u2);
            }
            function g(e3, t2) {
              var n2 = (65535 & e3) + (65535 & t2);
              return (e3 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
            }
            b2.exports = function(e3) {
              return t.hash(e3, n, 16);
            };
          }.call(this, w3("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, w3("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 7: [function(e, l2, t) {
          !function(e2, t2, n, r2, o, i, u, s, f) {
            var a;
            l2.exports = a || function(e3) {
              for (var t3, n2 = new Array(e3), r3 = 0; r3 < e3; r3++)
                0 == (3 & r3) && (t3 = 4294967296 * Math.random()), n2[r3] = t3 >>> ((3 & r3) << 3) & 255;
              return n2;
            };
          }.call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, { buffer: 3, lYpoI2: 11 }], 8: [function(c, d, e) {
          !function(e2, t, n, r2, o, s, a, f, l2) {
            var i = c("./helpers");
            function u(l3, c2) {
              l3[c2 >> 5] |= 128 << 24 - c2 % 32, l3[15 + (c2 + 64 >> 9 << 4)] = c2;
              for (var e3, t2, n2, r3 = Array(80), o2 = 1732584193, i2 = -271733879, u2 = -1732584194, s2 = 271733878, d2 = -1009589776, h = 0; h < l3.length; h += 16) {
                for (var p2 = o2, g = i2, y2 = u2, w3 = s2, b2 = d2, a2 = 0; a2 < 80; a2++) {
                  r3[a2] = a2 < 16 ? l3[h + a2] : v3(r3[a2 - 3] ^ r3[a2 - 8] ^ r3[a2 - 14] ^ r3[a2 - 16], 1);
                  var f2 = m(m(v3(o2, 5), (f2 = i2, t2 = u2, n2 = s2, (e3 = a2) < 20 ? f2 & t2 | ~f2 & n2 : !(e3 < 40) && e3 < 60 ? f2 & t2 | f2 & n2 | t2 & n2 : f2 ^ t2 ^ n2)), m(m(d2, r3[a2]), (e3 = a2) < 20 ? 1518500249 : e3 < 40 ? 1859775393 : e3 < 60 ? -1894007588 : -899497514)), d2 = s2, s2 = u2, u2 = v3(i2, 30), i2 = o2, o2 = f2;
                }
                o2 = m(o2, p2), i2 = m(i2, g), u2 = m(u2, y2), s2 = m(s2, w3), d2 = m(d2, b2);
              }
              return Array(o2, i2, u2, s2, d2);
            }
            function m(e3, t2) {
              var n2 = (65535 & e3) + (65535 & t2);
              return (e3 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
            }
            function v3(e3, t2) {
              return e3 << t2 | e3 >>> 32 - t2;
            }
            d.exports = function(e3) {
              return i.hash(e3, u, 20, true);
            };
          }.call(this, c("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 9: [function(c, d, e) {
          !function(e2, t, n, r2, u, s, a, f, l2) {
            function b2(e3, t2) {
              var n2 = (65535 & e3) + (65535 & t2);
              return (e3 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
            }
            function o(e3, l3) {
              var c2, d2 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298), t2 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225), n2 = new Array(64);
              e3[l3 >> 5] |= 128 << 24 - l3 % 32, e3[15 + (l3 + 64 >> 9 << 4)] = l3;
              for (var r3, o2, h = 0; h < e3.length; h += 16) {
                for (var i2 = t2[0], u2 = t2[1], s2 = t2[2], p2 = t2[3], a2 = t2[4], g = t2[5], y2 = t2[6], w3 = t2[7], f2 = 0; f2 < 64; f2++)
                  n2[f2] = f2 < 16 ? e3[f2 + h] : b2(b2(b2((o2 = n2[f2 - 2], m(o2, 17) ^ m(o2, 19) ^ v3(o2, 10)), n2[f2 - 7]), (o2 = n2[f2 - 15], m(o2, 7) ^ m(o2, 18) ^ v3(o2, 3))), n2[f2 - 16]), c2 = b2(b2(b2(b2(w3, m(o2 = a2, 6) ^ m(o2, 11) ^ m(o2, 25)), a2 & g ^ ~a2 & y2), d2[f2]), n2[f2]), r3 = b2(m(r3 = i2, 2) ^ m(r3, 13) ^ m(r3, 22), i2 & u2 ^ i2 & s2 ^ u2 & s2), w3 = y2, y2 = g, g = a2, a2 = b2(p2, c2), p2 = s2, s2 = u2, u2 = i2, i2 = b2(c2, r3);
                t2[0] = b2(i2, t2[0]), t2[1] = b2(u2, t2[1]), t2[2] = b2(s2, t2[2]), t2[3] = b2(p2, t2[3]), t2[4] = b2(a2, t2[4]), t2[5] = b2(g, t2[5]), t2[6] = b2(y2, t2[6]), t2[7] = b2(w3, t2[7]);
              }
              return t2;
            }
            var i = c("./helpers"), m = function(e3, t2) {
              return e3 >>> t2 | e3 << 32 - t2;
            }, v3 = function(e3, t2) {
              return e3 >>> t2;
            };
            d.exports = function(e3) {
              return i.hash(e3, o, 32, true);
            };
          }.call(this, c("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, c("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js", "/node_modules/gulp-browserify/node_modules/crypto-browserify");
        }, { "./helpers": 4, buffer: 3, lYpoI2: 11 }], 10: [function(e, t, f) {
          !function(e2, t2, n, r2, o, i, u, s, a) {
            f.read = function(e3, t3, n2, r3, o2) {
              var i2, u2, l2 = 8 * o2 - r3 - 1, c = (1 << l2) - 1, d = c >> 1, s2 = -7, a2 = n2 ? o2 - 1 : 0, f2 = n2 ? -1 : 1, o2 = e3[t3 + a2];
              for (a2 += f2, i2 = o2 & (1 << -s2) - 1, o2 >>= -s2, s2 += l2; 0 < s2; i2 = 256 * i2 + e3[t3 + a2], a2 += f2, s2 -= 8)
                ;
              for (u2 = i2 & (1 << -s2) - 1, i2 >>= -s2, s2 += r3; 0 < s2; u2 = 256 * u2 + e3[t3 + a2], a2 += f2, s2 -= 8)
                ;
              if (0 === i2)
                i2 = 1 - d;
              else {
                if (i2 === c)
                  return u2 ? NaN : 1 / 0 * (o2 ? -1 : 1);
                u2 += Math.pow(2, r3), i2 -= d;
              }
              return (o2 ? -1 : 1) * u2 * Math.pow(2, i2 - r3);
            }, f.write = function(e3, t3, l2, n2, r3, c) {
              var o2, i2, u2 = 8 * c - r3 - 1, s2 = (1 << u2) - 1, a2 = s2 >> 1, d = 23 === r3 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f2 = n2 ? 0 : c - 1, h = n2 ? 1 : -1, c = t3 < 0 || 0 === t3 && 1 / t3 < 0 ? 1 : 0;
              for (t3 = Math.abs(t3), isNaN(t3) || t3 === 1 / 0 ? (i2 = isNaN(t3) ? 1 : 0, o2 = s2) : (o2 = Math.floor(Math.log(t3) / Math.LN2), t3 * (n2 = Math.pow(2, -o2)) < 1 && (o2--, n2 *= 2), 2 <= (t3 += 1 <= o2 + a2 ? d / n2 : d * Math.pow(2, 1 - a2)) * n2 && (o2++, n2 /= 2), s2 <= o2 + a2 ? (i2 = 0, o2 = s2) : 1 <= o2 + a2 ? (i2 = (t3 * n2 - 1) * Math.pow(2, r3), o2 += a2) : (i2 = t3 * Math.pow(2, a2 - 1) * Math.pow(2, r3), o2 = 0)); 8 <= r3; e3[l2 + f2] = 255 & i2, f2 += h, i2 /= 256, r3 -= 8)
                ;
              for (o2 = o2 << r3 | i2, u2 += r3; 0 < u2; e3[l2 + f2] = 255 & o2, f2 += h, o2 /= 256, u2 -= 8)
                ;
              e3[l2 + f2 - h] |= 128 * c;
            };
          }.call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/ieee754/index.js", "/node_modules/gulp-browserify/node_modules/ieee754");
        }, { buffer: 3, lYpoI2: 11 }], 11: [function(e, h, t) {
          !function(e2, t2, n, r2, o, f, l2, c, d) {
            var i, u, s;
            function a() {
            }
            (e2 = h.exports = {}).nextTick = (u = "undefined" != typeof window && window.setImmediate, s = "undefined" != typeof window && window.postMessage && window.addEventListener, u ? function(e3) {
              return window.setImmediate(e3);
            } : s ? (i = [], window.addEventListener("message", function(e3) {
              var t3 = e3.source;
              t3 !== window && null !== t3 || "process-tick" !== e3.data || (e3.stopPropagation(), 0 < i.length && i.shift()());
            }, true), function(e3) {
              i.push(e3), window.postMessage("process-tick", "*");
            }) : function(e3) {
              setTimeout(e3, 0);
            }), e2.title = "browser", e2.browser = true, e2.env = {}, e2.argv = [], e2.on = a, e2.addListener = a, e2.once = a, e2.off = a, e2.removeListener = a, e2.removeAllListeners = a, e2.emit = a, e2.binding = function(e3) {
              throw new Error("process.binding is not supported");
            }, e2.cwd = function() {
              return "/";
            }, e2.chdir = function(e3) {
              throw new Error("process.chdir is not supported");
            };
          }.call(this, e("lYpoI2"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/gulp-browserify/node_modules/process/browser.js", "/node_modules/gulp-browserify/node_modules/process");
        }, { buffer: 3, lYpoI2: 11 }] }, {}, [1])(1);
      });
    }
  });

  // node_modules/@firebase/util/dist/index.esm2017.js
  var stringToByteArray$1 = function(str) {
    const out = [];
    let p2 = 0;
    for (let i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i);
      if (c < 128) {
        out[p2++] = c;
      } else if (c < 2048) {
        out[p2++] = c >> 6 | 192;
        out[p2++] = c & 63 | 128;
      } else if ((c & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
        c = 65536 + ((c & 1023) << 10) + (str.charCodeAt(++i) & 1023);
        out[p2++] = c >> 18 | 240;
        out[p2++] = c >> 12 & 63 | 128;
        out[p2++] = c >> 6 & 63 | 128;
        out[p2++] = c & 63 | 128;
      } else {
        out[p2++] = c >> 12 | 224;
        out[p2++] = c >> 6 & 63 | 128;
        out[p2++] = c & 63 | 128;
      }
    }
    return out;
  };
  var byteArrayToString = function(bytes) {
    const out = [];
    let pos = 0, c = 0;
    while (pos < bytes.length) {
      const c1 = bytes[pos++];
      if (c1 < 128) {
        out[c++] = String.fromCharCode(c1);
      } else if (c1 > 191 && c1 < 224) {
        const c2 = bytes[pos++];
        out[c++] = String.fromCharCode((c1 & 31) << 6 | c2 & 63);
      } else if (c1 > 239 && c1 < 365) {
        const c2 = bytes[pos++];
        const c3 = bytes[pos++];
        const c4 = bytes[pos++];
        const u = ((c1 & 7) << 18 | (c2 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
        out[c++] = String.fromCharCode(55296 + (u >> 10));
        out[c++] = String.fromCharCode(56320 + (u & 1023));
      } else {
        const c2 = bytes[pos++];
        const c3 = bytes[pos++];
        out[c++] = String.fromCharCode((c1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
      }
    }
    return out.join("");
  };
  var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === "function",
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray(input, webSafe) {
      if (!Array.isArray(input)) {
        throw Error("encodeByteArray takes an array as a parameter");
      }
      this.init_();
      const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
      const output = [];
      for (let i = 0; i < input.length; i += 3) {
        const byte1 = input[i];
        const haveByte2 = i + 1 < input.length;
        const byte2 = haveByte2 ? input[i + 1] : 0;
        const haveByte3 = i + 2 < input.length;
        const byte3 = haveByte3 ? input[i + 2] : 0;
        const outByte1 = byte1 >> 2;
        const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
        let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
        let outByte4 = byte3 & 63;
        if (!haveByte3) {
          outByte4 = 64;
          if (!haveByte2) {
            outByte3 = 64;
          }
        }
        output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
      }
      return output.join("");
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString(input, webSafe) {
      if (this.HAS_NATIVE_SUPPORT && !webSafe) {
        return btoa(input);
      }
      return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString(input, webSafe) {
      if (this.HAS_NATIVE_SUPPORT && !webSafe) {
        return atob(input);
      }
      return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray(input, webSafe) {
      this.init_();
      const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
      const output = [];
      for (let i = 0; i < input.length; ) {
        const byte1 = charToByteMap[input.charAt(i++)];
        const haveByte2 = i < input.length;
        const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
        ++i;
        const haveByte3 = i < input.length;
        const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
        ++i;
        const haveByte4 = i < input.length;
        const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
        ++i;
        if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
          throw new DecodeBase64StringError();
        }
        const outByte1 = byte1 << 2 | byte2 >> 4;
        output.push(outByte1);
        if (byte3 !== 64) {
          const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
          output.push(outByte2);
          if (byte4 !== 64) {
            const outByte3 = byte3 << 6 & 192 | byte4;
            output.push(outByte3);
          }
        }
      }
      return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_() {
      if (!this.byteToCharMap_) {
        this.byteToCharMap_ = {};
        this.charToByteMap_ = {};
        this.byteToCharMapWebSafe_ = {};
        this.charToByteMapWebSafe_ = {};
        for (let i = 0; i < this.ENCODED_VALS.length; i++) {
          this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
          this.charToByteMap_[this.byteToCharMap_[i]] = i;
          this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
          this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
          if (i >= this.ENCODED_VALS_BASE.length) {
            this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
            this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
          }
        }
      }
    }
  };
  var DecodeBase64StringError = class extends Error {
    constructor() {
      super(...arguments);
      this.name = "DecodeBase64StringError";
    }
  };
  var base64Encode = function(str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
  };
  var base64urlEncodeWithoutPadding = function(str) {
    return base64Encode(str).replace(/\./g, "");
  };
  var base64Decode = function(str) {
    try {
      return base64.decodeString(str, true);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
  function getGlobal() {
    if (typeof self !== "undefined") {
      return self;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
    throw new Error("Unable to locate global object.");
  }
  var getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
  var getDefaultsFromEnvVariable = () => {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
      return;
    }
    const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
    if (defaultsJsonString) {
      return JSON.parse(defaultsJsonString);
    }
  };
  var getDefaultsFromCookie = () => {
    if (typeof document === "undefined") {
      return;
    }
    let match;
    try {
      match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch (e) {
      return;
    }
    const decoded = match && base64Decode(match[1]);
    return decoded && JSON.parse(decoded);
  };
  var getDefaults = () => {
    try {
      return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  };
  var getDefaultEmulatorHost = (productName) => {
    var _a, _b;
    return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName];
  };
  var getDefaultEmulatorHostnameAndPort = (productName) => {
    const host = getDefaultEmulatorHost(productName);
    if (!host) {
      return void 0;
    }
    const separatorIndex = host.lastIndexOf(":");
    if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
      throw new Error(`Invalid host ${host} with no separate hostname and port!`);
    }
    const port = parseInt(host.substring(separatorIndex + 1), 10);
    if (host[0] === "[") {
      return [host.substring(1, separatorIndex - 1), port];
    } else {
      return [host.substring(0, separatorIndex), port];
    }
  };
  var getDefaultAppConfig = () => {
    var _a;
    return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
  };
  var Deferred = class {
    constructor() {
      this.reject = () => {
      };
      this.resolve = () => {
      };
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    wrapCallback(callback) {
      return (error, value) => {
        if (error) {
          this.reject(error);
        } else {
          this.resolve(value);
        }
        if (typeof callback === "function") {
          this.promise.catch(() => {
          });
          if (callback.length === 1) {
            callback(error);
          } else {
            callback(error, value);
          }
        }
      };
    }
  };
  function createMockUserToken(token, projectId) {
    if (token.uid) {
      throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    const header = {
      alg: "none",
      type: "JWT"
    };
    const project = projectId || "demo-project";
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) {
      throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    const payload = Object.assign({
      // Set all required fields to decent defaults
      iss: `https://securetoken.google.com/${project}`,
      aud: project,
      iat,
      exp: iat + 3600,
      auth_time: iat,
      sub,
      user_id: sub,
      firebase: {
        sign_in_provider: "custom",
        identities: {}
      }
    }, token);
    const signature = "";
    return [
      base64urlEncodeWithoutPadding(JSON.stringify(header)),
      base64urlEncodeWithoutPadding(JSON.stringify(payload)),
      signature
    ].join(".");
  }
  function getUA() {
    if (typeof navigator !== "undefined" && typeof navigator["userAgent"] === "string") {
      return navigator["userAgent"];
    } else {
      return "";
    }
  }
  function isNode() {
    var _a;
    const forceEnvironment = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.forceEnvironment;
    if (forceEnvironment === "node") {
      return true;
    } else if (forceEnvironment === "browser") {
      return false;
    }
    try {
      return Object.prototype.toString.call(global.process) === "[object process]";
    } catch (e) {
      return false;
    }
  }
  function isBrowserExtension() {
    const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
    return typeof runtime === "object" && runtime.id !== void 0;
  }
  function isSafari() {
    return !isNode() && !!navigator.userAgent && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
  }
  function isIndexedDBAvailable() {
    try {
      return typeof indexedDB === "object";
    } catch (e) {
      return false;
    }
  }
  function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
      try {
        let preExist = true;
        const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
        const request = self.indexedDB.open(DB_CHECK_NAME);
        request.onsuccess = () => {
          request.result.close();
          if (!preExist) {
            self.indexedDB.deleteDatabase(DB_CHECK_NAME);
          }
          resolve(true);
        };
        request.onupgradeneeded = () => {
          preExist = false;
        };
        request.onerror = () => {
          var _a;
          reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
        };
      } catch (error) {
        reject(error);
      }
    });
  }
  function areCookiesEnabled() {
    if (typeof navigator === "undefined" || !navigator.cookieEnabled) {
      return false;
    }
    return true;
  }
  var ERROR_NAME = "FirebaseError";
  var FirebaseError = class _FirebaseError extends Error {
    constructor(code, message, customData) {
      super(message);
      this.code = code;
      this.customData = customData;
      this.name = ERROR_NAME;
      Object.setPrototypeOf(this, _FirebaseError.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ErrorFactory.prototype.create);
      }
    }
  };
  var ErrorFactory = class {
    constructor(service, serviceName, errors) {
      this.service = service;
      this.serviceName = serviceName;
      this.errors = errors;
    }
    create(code, ...data) {
      const customData = data[0] || {};
      const fullCode = `${this.service}/${code}`;
      const template = this.errors[code];
      const message = template ? replaceTemplate(template, customData) : "Error";
      const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
      const error = new FirebaseError(fullCode, fullMessage, customData);
      return error;
    }
  };
  function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
      const value = data[key];
      return value != null ? String(value) : `<${key}?>`;
    });
  }
  var PATTERN = /\{\$([^}]+)}/g;
  function deepEqual(a, b2) {
    if (a === b2) {
      return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b2);
    for (const k2 of aKeys) {
      if (!bKeys.includes(k2)) {
        return false;
      }
      const aProp = a[k2];
      const bProp = b2[k2];
      if (isObject(aProp) && isObject(bProp)) {
        if (!deepEqual(aProp, bProp)) {
          return false;
        }
      } else if (aProp !== bProp) {
        return false;
      }
    }
    for (const k2 of bKeys) {
      if (!aKeys.includes(k2)) {
        return false;
      }
    }
    return true;
  }
  function isObject(thing) {
    return thing !== null && typeof thing === "object";
  }
  var DEFAULT_INTERVAL_MILLIS = 1e3;
  var DEFAULT_BACKOFF_FACTOR = 2;
  var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
  var RANDOM_FACTOR = 0.5;
  function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
    const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    const randomWait = Math.round(
      // A fraction of the backoff value to add/subtract.
      // Deviation: changes multiplication order to improve readability.
      RANDOM_FACTOR * currBaseValue * // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
      // if we add or subtract.
      (Math.random() - 0.5) * 2
    );
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
  }
  function getModularInstance(service) {
    if (service && service._delegate) {
      return service._delegate;
    } else {
      return service;
    }
  }

  // node_modules/@firebase/component/dist/esm/index.esm2017.js
  var Component = class {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    constructor(name5, instanceFactory, type) {
      this.name = name5;
      this.instanceFactory = instanceFactory;
      this.type = type;
      this.multipleInstances = false;
      this.serviceProps = {};
      this.instantiationMode = "LAZY";
      this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
      this.instantiationMode = mode;
      return this;
    }
    setMultipleInstances(multipleInstances) {
      this.multipleInstances = multipleInstances;
      return this;
    }
    setServiceProps(props) {
      this.serviceProps = props;
      return this;
    }
    setInstanceCreatedCallback(callback) {
      this.onInstanceCreated = callback;
      return this;
    }
  };
  var DEFAULT_ENTRY_NAME = "[DEFAULT]";
  var Provider = class {
    constructor(name5, container) {
      this.name = name5;
      this.container = container;
      this.component = null;
      this.instances = /* @__PURE__ */ new Map();
      this.instancesDeferred = /* @__PURE__ */ new Map();
      this.instancesOptions = /* @__PURE__ */ new Map();
      this.onInitCallbacks = /* @__PURE__ */ new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    get(identifier) {
      const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      if (!this.instancesDeferred.has(normalizedIdentifier)) {
        const deferred = new Deferred();
        this.instancesDeferred.set(normalizedIdentifier, deferred);
        if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
          try {
            const instance = this.getOrInitializeService({
              instanceIdentifier: normalizedIdentifier
            });
            if (instance) {
              deferred.resolve(instance);
            }
          } catch (e) {
          }
        }
      }
      return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
      var _a;
      const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
      const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          return this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
        } catch (e) {
          if (optional) {
            return null;
          } else {
            throw e;
          }
        }
      } else {
        if (optional) {
          return null;
        } else {
          throw Error(`Service ${this.name} is not available`);
        }
      }
    }
    getComponent() {
      return this.component;
    }
    setComponent(component) {
      if (component.name !== this.name) {
        throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
      }
      if (this.component) {
        throw Error(`Component for ${this.name} has already been provided`);
      }
      this.component = component;
      if (!this.shouldAutoInitialize()) {
        return;
      }
      if (isComponentEager(component)) {
        try {
          this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
        } catch (e) {
        }
      }
      for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
        const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        try {
          const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          instanceDeferred.resolve(instance);
        } catch (e) {
        }
      }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME) {
      this.instancesDeferred.delete(identifier);
      this.instancesOptions.delete(identifier);
      this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
      const services = Array.from(this.instances.values());
      await Promise.all([
        ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
        ...services.filter((service) => "_delete" in service).map((service) => service._delete())
      ]);
    }
    isComponentSet() {
      return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME) {
      return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME) {
      return this.instancesOptions.get(identifier) || {};
    }
    initialize(opts = {}) {
      const { options = {} } = opts;
      const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
      if (this.isInitialized(normalizedIdentifier)) {
        throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
      }
      if (!this.isComponentSet()) {
        throw Error(`Component ${this.name} has not been registered yet`);
      }
      const instance = this.getOrInitializeService({
        instanceIdentifier: normalizedIdentifier,
        options
      });
      for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
        const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
        if (normalizedIdentifier === normalizedDeferredIdentifier) {
          instanceDeferred.resolve(instance);
        }
      }
      return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    onInit(callback, identifier) {
      var _a;
      const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
      const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
      existingCallbacks.add(callback);
      this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
      const existingInstance = this.instances.get(normalizedIdentifier);
      if (existingInstance) {
        callback(existingInstance, normalizedIdentifier);
      }
      return () => {
        existingCallbacks.delete(callback);
      };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    invokeOnInitCallbacks(instance, identifier) {
      const callbacks = this.onInitCallbacks.get(identifier);
      if (!callbacks) {
        return;
      }
      for (const callback of callbacks) {
        try {
          callback(instance, identifier);
        } catch (_a) {
        }
      }
    }
    getOrInitializeService({ instanceIdentifier, options = {} }) {
      let instance = this.instances.get(instanceIdentifier);
      if (!instance && this.component) {
        instance = this.component.instanceFactory(this.container, {
          instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
          options
        });
        this.instances.set(instanceIdentifier, instance);
        this.instancesOptions.set(instanceIdentifier, options);
        this.invokeOnInitCallbacks(instance, instanceIdentifier);
        if (this.component.onInstanceCreated) {
          try {
            this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
          } catch (_a) {
          }
        }
      }
      return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
      if (this.component) {
        return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
      } else {
        return identifier;
      }
    }
    shouldAutoInitialize() {
      return !!this.component && this.component.instantiationMode !== "EXPLICIT";
    }
  };
  function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
  }
  function isComponentEager(component) {
    return component.instantiationMode === "EAGER";
  }
  var ComponentContainer = class {
    constructor(name5) {
      this.name = name5;
      this.providers = /* @__PURE__ */ new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    addComponent(component) {
      const provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
      }
      provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
      const provider = this.getProvider(component.name);
      if (provider.isComponentSet()) {
        this.providers.delete(component.name);
      }
      this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    getProvider(name5) {
      if (this.providers.has(name5)) {
        return this.providers.get(name5);
      }
      const provider = new Provider(name5, this);
      this.providers.set(name5, provider);
      return provider;
    }
    getProviders() {
      return Array.from(this.providers.values());
    }
  };

  // node_modules/@firebase/logger/dist/esm/index.esm2017.js
  var instances = [];
  var LogLevel;
  (function(LogLevel2) {
    LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
    LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
    LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
    LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
    LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
    LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
  })(LogLevel || (LogLevel = {}));
  var levelStringToEnum = {
    "debug": LogLevel.DEBUG,
    "verbose": LogLevel.VERBOSE,
    "info": LogLevel.INFO,
    "warn": LogLevel.WARN,
    "error": LogLevel.ERROR,
    "silent": LogLevel.SILENT
  };
  var defaultLogLevel = LogLevel.INFO;
  var ConsoleMethod = {
    [LogLevel.DEBUG]: "log",
    [LogLevel.VERBOSE]: "log",
    [LogLevel.INFO]: "info",
    [LogLevel.WARN]: "warn",
    [LogLevel.ERROR]: "error"
  };
  var defaultLogHandler = (instance, logType, ...args) => {
    if (logType < instance.logLevel) {
      return;
    }
    const now = (/* @__PURE__ */ new Date()).toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
      console[method](`[${now}]  ${instance.name}:`, ...args);
    } else {
      throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
    }
  };
  var Logger = class {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    constructor(name5) {
      this.name = name5;
      this._logLevel = defaultLogLevel;
      this._logHandler = defaultLogHandler;
      this._userLogHandler = null;
      instances.push(this);
    }
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(val) {
      if (!(val in LogLevel)) {
        throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
      }
      this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
      this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
    }
    get logHandler() {
      return this._logHandler;
    }
    set logHandler(val) {
      if (typeof val !== "function") {
        throw new TypeError("Value assigned to `logHandler` must be a function");
      }
      this._logHandler = val;
    }
    get userLogHandler() {
      return this._userLogHandler;
    }
    set userLogHandler(val) {
      this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */
    debug(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
      this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
      this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
      this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
      this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
      this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
      this._logHandler(this, LogLevel.ERROR, ...args);
    }
  };

  // node_modules/idb/build/wrap-idb-value.js
  var instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
  var idbProxyableTypes;
  var cursorAdvanceMethods;
  function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
      IDBDatabase,
      IDBObjectStore,
      IDBIndex,
      IDBCursor,
      IDBTransaction
    ]);
  }
  function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey
    ]);
  }
  var cursorRequestMap = /* @__PURE__ */ new WeakMap();
  var transactionDoneMap = /* @__PURE__ */ new WeakMap();
  var transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
  var transformCache = /* @__PURE__ */ new WeakMap();
  var reverseTransformCache = /* @__PURE__ */ new WeakMap();
  function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
      const unlisten = () => {
        request.removeEventListener("success", success);
        request.removeEventListener("error", error);
      };
      const success = () => {
        resolve(wrap(request.result));
        unlisten();
      };
      const error = () => {
        reject(request.error);
        unlisten();
      };
      request.addEventListener("success", success);
      request.addEventListener("error", error);
    });
    promise.then((value) => {
      if (value instanceof IDBCursor) {
        cursorRequestMap.set(value, request);
      }
    }).catch(() => {
    });
    reverseTransformCache.set(promise, request);
    return promise;
  }
  function cacheDonePromiseForTransaction(tx) {
    if (transactionDoneMap.has(tx))
      return;
    const done = new Promise((resolve, reject) => {
      const unlisten = () => {
        tx.removeEventListener("complete", complete);
        tx.removeEventListener("error", error);
        tx.removeEventListener("abort", error);
      };
      const complete = () => {
        resolve();
        unlisten();
      };
      const error = () => {
        reject(tx.error || new DOMException("AbortError", "AbortError"));
        unlisten();
      };
      tx.addEventListener("complete", complete);
      tx.addEventListener("error", error);
      tx.addEventListener("abort", error);
    });
    transactionDoneMap.set(tx, done);
  }
  var idbProxyTraps = {
    get(target, prop, receiver) {
      if (target instanceof IDBTransaction) {
        if (prop === "done")
          return transactionDoneMap.get(target);
        if (prop === "objectStoreNames") {
          return target.objectStoreNames || transactionStoreNamesMap.get(target);
        }
        if (prop === "store") {
          return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
        }
      }
      return wrap(target[prop]);
    },
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
    has(target, prop) {
      if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
        return true;
      }
      return prop in target;
    }
  };
  function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
  }
  function wrapFunction(func) {
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
      return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
        return wrap(tx);
      };
    }
    if (getCursorAdvanceMethods().includes(func)) {
      return function(...args) {
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
      };
    }
    return function(...args) {
      return wrap(func.apply(unwrap(this), args));
    };
  }
  function transformCachableValue(value) {
    if (typeof value === "function")
      return wrapFunction(value);
    if (value instanceof IDBTransaction)
      cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
      return new Proxy(value, idbProxyTraps);
    return value;
  }
  function wrap(value) {
    if (value instanceof IDBRequest)
      return promisifyRequest(value);
    if (transformCache.has(value))
      return transformCache.get(value);
    const newValue = transformCachableValue(value);
    if (newValue !== value) {
      transformCache.set(value, newValue);
      reverseTransformCache.set(newValue, value);
    }
    return newValue;
  }
  var unwrap = (value) => reverseTransformCache.get(value);

  // node_modules/idb/build/index.js
  function openDB(name5, version5, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name5, version5);
    const openPromise = wrap(request);
    if (upgrade) {
      request.addEventListener("upgradeneeded", (event) => {
        upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
      });
    }
    if (blocked) {
      request.addEventListener("blocked", (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion,
        event.newVersion,
        event
      ));
    }
    openPromise.then((db3) => {
      if (terminated)
        db3.addEventListener("close", () => terminated());
      if (blocking) {
        db3.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
      }
    }).catch(() => {
    });
    return openPromise;
  }
  var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
  var writeMethods = ["put", "add", "delete", "clear"];
  var cachedMethods = /* @__PURE__ */ new Map();
  function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
      return;
    }
    if (cachedMethods.get(prop))
      return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
    ) {
      return;
    }
    const method = async function(storeName, ...args) {
      const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
      let target2 = tx.store;
      if (useIndex)
        target2 = target2.index(args.shift());
      return (await Promise.all([
        target2[targetFuncName](...args),
        isWrite && tx.done
      ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
  }
  replaceTraps((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
  }));

  // node_modules/@firebase/app/dist/esm/index.esm2017.js
  var PlatformLoggerServiceImpl = class {
    constructor(container) {
      this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
      const providers = this.container.getProviders();
      return providers.map((provider) => {
        if (isVersionServiceProvider(provider)) {
          const service = provider.getImmediate();
          return `${service.library}/${service.version}`;
        } else {
          return null;
        }
      }).filter((logString) => logString).join(" ");
    }
  };
  function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
  }
  var name$o = "@firebase/app";
  var version$1 = "0.9.29";
  var logger = new Logger("@firebase/app");
  var name$n = "@firebase/app-compat";
  var name$m = "@firebase/analytics-compat";
  var name$l = "@firebase/analytics";
  var name$k = "@firebase/app-check-compat";
  var name$j = "@firebase/app-check";
  var name$i = "@firebase/auth";
  var name$h = "@firebase/auth-compat";
  var name$g = "@firebase/database";
  var name$f = "@firebase/database-compat";
  var name$e = "@firebase/functions";
  var name$d = "@firebase/functions-compat";
  var name$c = "@firebase/installations";
  var name$b = "@firebase/installations-compat";
  var name$a = "@firebase/messaging";
  var name$9 = "@firebase/messaging-compat";
  var name$8 = "@firebase/performance";
  var name$7 = "@firebase/performance-compat";
  var name$6 = "@firebase/remote-config";
  var name$5 = "@firebase/remote-config-compat";
  var name$4 = "@firebase/storage";
  var name$3 = "@firebase/storage-compat";
  var name$2 = "@firebase/firestore";
  var name$1 = "@firebase/firestore-compat";
  var name = "firebase";
  var version = "10.9.0";
  var DEFAULT_ENTRY_NAME2 = "[DEFAULT]";
  var PLATFORM_LOG_STRING = {
    [name$o]: "fire-core",
    [name$n]: "fire-core-compat",
    [name$l]: "fire-analytics",
    [name$m]: "fire-analytics-compat",
    [name$j]: "fire-app-check",
    [name$k]: "fire-app-check-compat",
    [name$i]: "fire-auth",
    [name$h]: "fire-auth-compat",
    [name$g]: "fire-rtdb",
    [name$f]: "fire-rtdb-compat",
    [name$e]: "fire-fn",
    [name$d]: "fire-fn-compat",
    [name$c]: "fire-iid",
    [name$b]: "fire-iid-compat",
    [name$a]: "fire-fcm",
    [name$9]: "fire-fcm-compat",
    [name$8]: "fire-perf",
    [name$7]: "fire-perf-compat",
    [name$6]: "fire-rc",
    [name$5]: "fire-rc-compat",
    [name$4]: "fire-gcs",
    [name$3]: "fire-gcs-compat",
    [name$2]: "fire-fst",
    [name$1]: "fire-fst-compat",
    "fire-js": "fire-js",
    [name]: "fire-js-all"
  };
  var _apps = /* @__PURE__ */ new Map();
  var _components = /* @__PURE__ */ new Map();
  function _addComponent(app2, component) {
    try {
      app2.container.addComponent(component);
    } catch (e) {
      logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app2.name}`, e);
    }
  }
  function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
      logger.debug(`There were multiple attempts to register component ${componentName}.`);
      return false;
    }
    _components.set(componentName, component);
    for (const app2 of _apps.values()) {
      _addComponent(app2, component);
    }
    return true;
  }
  function _getProvider(app2, name5) {
    const heartbeatController = app2.container.getProvider("heartbeat").getImmediate({ optional: true });
    if (heartbeatController) {
      void heartbeatController.triggerHeartbeat();
    }
    return app2.container.getProvider(name5);
  }
  var ERRORS = {
    [
      "no-app"
      /* AppError.NO_APP */
    ]: "No Firebase App '{$appName}' has been created - call initializeApp() first",
    [
      "bad-app-name"
      /* AppError.BAD_APP_NAME */
    ]: "Illegal App name: '{$appName}",
    [
      "duplicate-app"
      /* AppError.DUPLICATE_APP */
    ]: "Firebase App named '{$appName}' already exists with different options or config",
    [
      "app-deleted"
      /* AppError.APP_DELETED */
    ]: "Firebase App named '{$appName}' already deleted",
    [
      "no-options"
      /* AppError.NO_OPTIONS */
    ]: "Need to provide options, when not being deployed to hosting via source.",
    [
      "invalid-app-argument"
      /* AppError.INVALID_APP_ARGUMENT */
    ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    [
      "invalid-log-argument"
      /* AppError.INVALID_LOG_ARGUMENT */
    ]: "First argument to `onLog` must be null or a function.",
    [
      "idb-open"
      /* AppError.IDB_OPEN */
    ]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    [
      "idb-get"
      /* AppError.IDB_GET */
    ]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    [
      "idb-set"
      /* AppError.IDB_WRITE */
    ]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    [
      "idb-delete"
      /* AppError.IDB_DELETE */
    ]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
  };
  var ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
  var FirebaseAppImpl = class {
    constructor(options, config, container) {
      this._isDeleted = false;
      this._options = Object.assign({}, options);
      this._config = Object.assign({}, config);
      this._name = config.name;
      this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
      this._container = container;
      this.container.addComponent(new Component(
        "app",
        () => this,
        "PUBLIC"
        /* ComponentType.PUBLIC */
      ));
    }
    get automaticDataCollectionEnabled() {
      this.checkDestroyed();
      return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
      this.checkDestroyed();
      this._automaticDataCollectionEnabled = val;
    }
    get name() {
      this.checkDestroyed();
      return this._name;
    }
    get options() {
      this.checkDestroyed();
      return this._options;
    }
    get config() {
      this.checkDestroyed();
      return this._config;
    }
    get container() {
      return this._container;
    }
    get isDeleted() {
      return this._isDeleted;
    }
    set isDeleted(val) {
      this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    checkDestroyed() {
      if (this.isDeleted) {
        throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
      }
    }
  };
  var SDK_VERSION = version;
  function initializeApp(_options, rawConfig = {}) {
    let options = _options;
    if (typeof rawConfig !== "object") {
      const name6 = rawConfig;
      rawConfig = { name: name6 };
    }
    const config = Object.assign({ name: DEFAULT_ENTRY_NAME2, automaticDataCollectionEnabled: false }, rawConfig);
    const name5 = config.name;
    if (typeof name5 !== "string" || !name5) {
      throw ERROR_FACTORY.create("bad-app-name", {
        appName: String(name5)
      });
    }
    options || (options = getDefaultAppConfig());
    if (!options) {
      throw ERROR_FACTORY.create(
        "no-options"
        /* AppError.NO_OPTIONS */
      );
    }
    const existingApp = _apps.get(name5);
    if (existingApp) {
      if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
        return existingApp;
      } else {
        throw ERROR_FACTORY.create("duplicate-app", { appName: name5 });
      }
    }
    const container = new ComponentContainer(name5);
    for (const component of _components.values()) {
      container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name5, newApp);
    return newApp;
  }
  function getApp(name5 = DEFAULT_ENTRY_NAME2) {
    const app2 = _apps.get(name5);
    if (!app2 && name5 === DEFAULT_ENTRY_NAME2 && getDefaultAppConfig()) {
      return initializeApp();
    }
    if (!app2) {
      throw ERROR_FACTORY.create("no-app", { appName: name5 });
    }
    return app2;
  }
  function registerVersion(libraryKeyOrName, version5, variant) {
    var _a;
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
      library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version5.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
      const warning = [
        `Unable to register library "${library}" with version "${version5}":`
      ];
      if (libraryMismatch) {
        warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
      }
      if (libraryMismatch && versionMismatch) {
        warning.push("and");
      }
      if (versionMismatch) {
        warning.push(`version name "${version5}" contains illegal characters (whitespace or "/")`);
      }
      logger.warn(warning.join(" "));
      return;
    }
    _registerComponent(new Component(
      `${library}-version`,
      () => ({ library, version: version5 }),
      "VERSION"
      /* ComponentType.VERSION */
    ));
  }
  var DB_NAME = "firebase-heartbeat-database";
  var DB_VERSION = 1;
  var STORE_NAME = "firebase-heartbeat-store";
  var dbPromise = null;
  function getDbPromise() {
    if (!dbPromise) {
      dbPromise = openDB(DB_NAME, DB_VERSION, {
        upgrade: (db3, oldVersion) => {
          switch (oldVersion) {
            case 0:
              try {
                db3.createObjectStore(STORE_NAME);
              } catch (e) {
                console.warn(e);
              }
          }
        }
      }).catch((e) => {
        throw ERROR_FACTORY.create("idb-open", {
          originalErrorMessage: e.message
        });
      });
    }
    return dbPromise;
  }
  async function readHeartbeatsFromIndexedDB(app2) {
    try {
      const db3 = await getDbPromise();
      const tx = db3.transaction(STORE_NAME);
      const result = await tx.objectStore(STORE_NAME).get(computeKey(app2));
      await tx.done;
      return result;
    } catch (e) {
      if (e instanceof FirebaseError) {
        logger.warn(e.message);
      } else {
        const idbGetError = ERROR_FACTORY.create("idb-get", {
          originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
        });
        logger.warn(idbGetError.message);
      }
    }
  }
  async function writeHeartbeatsToIndexedDB(app2, heartbeatObject) {
    try {
      const db3 = await getDbPromise();
      const tx = db3.transaction(STORE_NAME, "readwrite");
      const objectStore = tx.objectStore(STORE_NAME);
      await objectStore.put(heartbeatObject, computeKey(app2));
      await tx.done;
    } catch (e) {
      if (e instanceof FirebaseError) {
        logger.warn(e.message);
      } else {
        const idbGetError = ERROR_FACTORY.create("idb-set", {
          originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
        });
        logger.warn(idbGetError.message);
      }
    }
  }
  function computeKey(app2) {
    return `${app2.name}!${app2.options.appId}`;
  }
  var MAX_HEADER_BYTES = 1024;
  var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
  var HeartbeatServiceImpl = class {
    constructor(container) {
      this.container = container;
      this._heartbeatsCache = null;
      const app2 = this.container.getProvider("app").getImmediate();
      this._storage = new HeartbeatStorageImpl(app2);
      this._heartbeatsCachePromise = this._storage.read().then((result) => {
        this._heartbeatsCache = result;
        return result;
      });
    }
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */
    async triggerHeartbeat() {
      var _a, _b;
      const platformLogger = this.container.getProvider("platform-logger").getImmediate();
      const agent = platformLogger.getPlatformInfoString();
      const date = getUTCDateString();
      if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null) {
        this._heartbeatsCache = await this._heartbeatsCachePromise;
        if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
          return;
        }
      }
      if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) {
        return;
      } else {
        this._heartbeatsCache.heartbeats.push({ date, agent });
      }
      this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat) => {
        const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
        const now = Date.now();
        return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
      });
      return this._storage.overwrite(this._heartbeatsCache);
    }
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */
    async getHeartbeatsHeader() {
      var _a;
      if (this._heartbeatsCache === null) {
        await this._heartbeatsCachePromise;
      }
      if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) {
        return "";
      }
      const date = getUTCDateString();
      const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
      const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
      this._heartbeatsCache.lastSentHeartbeatDate = date;
      if (unsentEntries.length > 0) {
        this._heartbeatsCache.heartbeats = unsentEntries;
        await this._storage.overwrite(this._heartbeatsCache);
      } else {
        this._heartbeatsCache.heartbeats = [];
        void this._storage.overwrite(this._heartbeatsCache);
      }
      return headerString;
    }
  };
  function getUTCDateString() {
    const today = /* @__PURE__ */ new Date();
    return today.toISOString().substring(0, 10);
  }
  function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
    const heartbeatsToSend = [];
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache) {
      const heartbeatEntry = heartbeatsToSend.find((hb2) => hb2.agent === singleDateHeartbeat.agent);
      if (!heartbeatEntry) {
        heartbeatsToSend.push({
          agent: singleDateHeartbeat.agent,
          dates: [singleDateHeartbeat.date]
        });
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatsToSend.pop();
          break;
        }
      } else {
        heartbeatEntry.dates.push(singleDateHeartbeat.date);
        if (countBytes(heartbeatsToSend) > maxSize) {
          heartbeatEntry.dates.pop();
          break;
        }
      }
      unsentEntries = unsentEntries.slice(1);
    }
    return {
      heartbeatsToSend,
      unsentEntries
    };
  }
  var HeartbeatStorageImpl = class {
    constructor(app2) {
      this.app = app2;
      this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    async runIndexedDBEnvironmentCheck() {
      if (!isIndexedDBAvailable()) {
        return false;
      } else {
        return validateIndexedDBOpenable().then(() => true).catch(() => false);
      }
    }
    /**
     * Read all heartbeats.
     */
    async read() {
      const canUseIndexedDB = await this._canUseIndexedDBPromise;
      if (!canUseIndexedDB) {
        return { heartbeats: [] };
      } else {
        const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
        if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
          return idbHeartbeatObject;
        } else {
          return { heartbeats: [] };
        }
      }
    }
    // overwrite the storage with the provided heartbeats
    async overwrite(heartbeatsObject) {
      var _a;
      const canUseIndexedDB = await this._canUseIndexedDBPromise;
      if (!canUseIndexedDB) {
        return;
      } else {
        const existingHeartbeatsObject = await this.read();
        return writeHeartbeatsToIndexedDB(this.app, {
          lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
          heartbeats: heartbeatsObject.heartbeats
        });
      }
    }
    // add heartbeats
    async add(heartbeatsObject) {
      var _a;
      const canUseIndexedDB = await this._canUseIndexedDBPromise;
      if (!canUseIndexedDB) {
        return;
      } else {
        const existingHeartbeatsObject = await this.read();
        return writeHeartbeatsToIndexedDB(this.app, {
          lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
          heartbeats: [
            ...existingHeartbeatsObject.heartbeats,
            ...heartbeatsObject.heartbeats
          ]
        });
      }
    }
  };
  function countBytes(heartbeatsCache) {
    return base64urlEncodeWithoutPadding(
      // heartbeatsCache wrapper properties
      JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
    ).length;
  }
  function registerCoreComponents(variant) {
    _registerComponent(new Component(
      "platform-logger",
      (container) => new PlatformLoggerServiceImpl(container),
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ));
    _registerComponent(new Component(
      "heartbeat",
      (container) => new HeartbeatServiceImpl(container),
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ));
    registerVersion(name$o, version$1, variant);
    registerVersion(name$o, version$1, "esm2017");
    registerVersion("fire-js", "");
  }
  registerCoreComponents("");

  // node_modules/firebase/app/dist/esm/index.esm.js
  var name2 = "firebase";
  var version2 = "10.9.0";
  registerVersion(name2, version2, "app");

  // node_modules/@firebase/installations/dist/esm/index.esm2017.js
  var name3 = "@firebase/installations";
  var version3 = "0.6.5";
  var PENDING_TIMEOUT_MS = 1e4;
  var PACKAGE_VERSION = `w:${version3}`;
  var INTERNAL_AUTH_VERSION = "FIS_v2";
  var INSTALLATIONS_API_URL = "https://firebaseinstallations.googleapis.com/v1";
  var TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1e3;
  var SERVICE = "installations";
  var SERVICE_NAME = "Installations";
  var ERROR_DESCRIPTION_MAP = {
    [
      "missing-app-config-values"
      /* ErrorCode.MISSING_APP_CONFIG_VALUES */
    ]: 'Missing App configuration value: "{$valueName}"',
    [
      "not-registered"
      /* ErrorCode.NOT_REGISTERED */
    ]: "Firebase Installation is not registered.",
    [
      "installation-not-found"
      /* ErrorCode.INSTALLATION_NOT_FOUND */
    ]: "Firebase Installation not found.",
    [
      "request-failed"
      /* ErrorCode.REQUEST_FAILED */
    ]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    [
      "app-offline"
      /* ErrorCode.APP_OFFLINE */
    ]: "Could not process request. Application offline.",
    [
      "delete-pending-registration"
      /* ErrorCode.DELETE_PENDING_REGISTRATION */
    ]: "Can't delete installation while there is a pending registration request."
  };
  var ERROR_FACTORY2 = new ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
  function isServerError(error) {
    return error instanceof FirebaseError && error.code.includes(
      "request-failed"
      /* ErrorCode.REQUEST_FAILED */
    );
  }
  function getInstallationsEndpoint({ projectId }) {
    return `${INSTALLATIONS_API_URL}/projects/${projectId}/installations`;
  }
  function extractAuthTokenInfoFromResponse(response) {
    return {
      token: response.token,
      requestStatus: 2,
      expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
      creationTime: Date.now()
    };
  }
  async function getErrorFromResponse(requestName, response) {
    const responseJson = await response.json();
    const errorData = responseJson.error;
    return ERROR_FACTORY2.create("request-failed", {
      requestName,
      serverCode: errorData.code,
      serverMessage: errorData.message,
      serverStatus: errorData.status
    });
  }
  function getHeaders({ apiKey }) {
    return new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      "x-goog-api-key": apiKey
    });
  }
  function getHeadersWithAuth(appConfig, { refreshToken }) {
    const headers = getHeaders(appConfig);
    headers.append("Authorization", getAuthorizationHeader(refreshToken));
    return headers;
  }
  async function retryIfServerError(fn) {
    const result = await fn();
    if (result.status >= 500 && result.status < 600) {
      return fn();
    }
    return result;
  }
  function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
    return Number(responseExpiresIn.replace("s", "000"));
  }
  function getAuthorizationHeader(refreshToken) {
    return `${INTERNAL_AUTH_VERSION} ${refreshToken}`;
  }
  async function createInstallationRequest({ appConfig, heartbeatServiceProvider }, { fid }) {
    const endpoint = getInstallationsEndpoint(appConfig);
    const headers = getHeaders(appConfig);
    const heartbeatService = heartbeatServiceProvider.getImmediate({
      optional: true
    });
    if (heartbeatService) {
      const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
      if (heartbeatsHeader) {
        headers.append("x-firebase-client", heartbeatsHeader);
      }
    }
    const body = {
      fid,
      authVersion: INTERNAL_AUTH_VERSION,
      appId: appConfig.appId,
      sdkVersion: PACKAGE_VERSION
    };
    const request = {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    };
    const response = await retryIfServerError(() => fetch(endpoint, request));
    if (response.ok) {
      const responseValue = await response.json();
      const registeredInstallationEntry = {
        fid: responseValue.fid || fid,
        registrationStatus: 2,
        refreshToken: responseValue.refreshToken,
        authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
      };
      return registeredInstallationEntry;
    } else {
      throw await getErrorFromResponse("Create Installation", response);
    }
  }
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  function bufferToBase64UrlSafe(array) {
    const b64 = btoa(String.fromCharCode(...array));
    return b64.replace(/\+/g, "-").replace(/\//g, "_");
  }
  var VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
  var INVALID_FID = "";
  function generateFid() {
    try {
      const fidByteArray = new Uint8Array(17);
      const crypto = self.crypto || self.msCrypto;
      crypto.getRandomValues(fidByteArray);
      fidByteArray[0] = 112 + fidByteArray[0] % 16;
      const fid = encode(fidByteArray);
      return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
    } catch (_a) {
      return INVALID_FID;
    }
  }
  function encode(fidByteArray) {
    const b64String = bufferToBase64UrlSafe(fidByteArray);
    return b64String.substr(0, 22);
  }
  function getKey(appConfig) {
    return `${appConfig.appName}!${appConfig.appId}`;
  }
  var fidChangeCallbacks = /* @__PURE__ */ new Map();
  function fidChanged(appConfig, fid) {
    const key = getKey(appConfig);
    callFidChangeCallbacks(key, fid);
    broadcastFidChange(key, fid);
  }
  function callFidChangeCallbacks(key, fid) {
    const callbacks = fidChangeCallbacks.get(key);
    if (!callbacks) {
      return;
    }
    for (const callback of callbacks) {
      callback(fid);
    }
  }
  function broadcastFidChange(key, fid) {
    const channel = getBroadcastChannel();
    if (channel) {
      channel.postMessage({ key, fid });
    }
    closeBroadcastChannel();
  }
  var broadcastChannel = null;
  function getBroadcastChannel() {
    if (!broadcastChannel && "BroadcastChannel" in self) {
      broadcastChannel = new BroadcastChannel("[Firebase] FID Change");
      broadcastChannel.onmessage = (e) => {
        callFidChangeCallbacks(e.data.key, e.data.fid);
      };
    }
    return broadcastChannel;
  }
  function closeBroadcastChannel() {
    if (fidChangeCallbacks.size === 0 && broadcastChannel) {
      broadcastChannel.close();
      broadcastChannel = null;
    }
  }
  var DATABASE_NAME = "firebase-installations-database";
  var DATABASE_VERSION = 1;
  var OBJECT_STORE_NAME = "firebase-installations-store";
  var dbPromise2 = null;
  function getDbPromise2() {
    if (!dbPromise2) {
      dbPromise2 = openDB(DATABASE_NAME, DATABASE_VERSION, {
        upgrade: (db3, oldVersion) => {
          switch (oldVersion) {
            case 0:
              db3.createObjectStore(OBJECT_STORE_NAME);
          }
        }
      });
    }
    return dbPromise2;
  }
  async function set(appConfig, value) {
    const key = getKey(appConfig);
    const db3 = await getDbPromise2();
    const tx = db3.transaction(OBJECT_STORE_NAME, "readwrite");
    const objectStore = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = await objectStore.get(key);
    await objectStore.put(value, key);
    await tx.done;
    if (!oldValue || oldValue.fid !== value.fid) {
      fidChanged(appConfig, value.fid);
    }
    return value;
  }
  async function remove(appConfig) {
    const key = getKey(appConfig);
    const db3 = await getDbPromise2();
    const tx = db3.transaction(OBJECT_STORE_NAME, "readwrite");
    await tx.objectStore(OBJECT_STORE_NAME).delete(key);
    await tx.done;
  }
  async function update(appConfig, updateFn) {
    const key = getKey(appConfig);
    const db3 = await getDbPromise2();
    const tx = db3.transaction(OBJECT_STORE_NAME, "readwrite");
    const store = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = await store.get(key);
    const newValue = updateFn(oldValue);
    if (newValue === void 0) {
      await store.delete(key);
    } else {
      await store.put(newValue, key);
    }
    await tx.done;
    if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
      fidChanged(appConfig, newValue.fid);
    }
    return newValue;
  }
  async function getInstallationEntry(installations) {
    let registrationPromise;
    const installationEntry = await update(installations.appConfig, (oldEntry) => {
      const installationEntry2 = updateOrCreateInstallationEntry(oldEntry);
      const entryWithPromise = triggerRegistrationIfNecessary(installations, installationEntry2);
      registrationPromise = entryWithPromise.registrationPromise;
      return entryWithPromise.installationEntry;
    });
    if (installationEntry.fid === INVALID_FID) {
      return { installationEntry: await registrationPromise };
    }
    return {
      installationEntry,
      registrationPromise
    };
  }
  function updateOrCreateInstallationEntry(oldEntry) {
    const entry = oldEntry || {
      fid: generateFid(),
      registrationStatus: 0
      /* RequestStatus.NOT_STARTED */
    };
    return clearTimedOutRequest(entry);
  }
  function triggerRegistrationIfNecessary(installations, installationEntry) {
    if (installationEntry.registrationStatus === 0) {
      if (!navigator.onLine) {
        const registrationPromiseWithError = Promise.reject(ERROR_FACTORY2.create(
          "app-offline"
          /* ErrorCode.APP_OFFLINE */
        ));
        return {
          installationEntry,
          registrationPromise: registrationPromiseWithError
        };
      }
      const inProgressEntry = {
        fid: installationEntry.fid,
        registrationStatus: 1,
        registrationTime: Date.now()
      };
      const registrationPromise = registerInstallation(installations, inProgressEntry);
      return { installationEntry: inProgressEntry, registrationPromise };
    } else if (installationEntry.registrationStatus === 1) {
      return {
        installationEntry,
        registrationPromise: waitUntilFidRegistration(installations)
      };
    } else {
      return { installationEntry };
    }
  }
  async function registerInstallation(installations, installationEntry) {
    try {
      const registeredInstallationEntry = await createInstallationRequest(installations, installationEntry);
      return set(installations.appConfig, registeredInstallationEntry);
    } catch (e) {
      if (isServerError(e) && e.customData.serverCode === 409) {
        await remove(installations.appConfig);
      } else {
        await set(installations.appConfig, {
          fid: installationEntry.fid,
          registrationStatus: 0
          /* RequestStatus.NOT_STARTED */
        });
      }
      throw e;
    }
  }
  async function waitUntilFidRegistration(installations) {
    let entry = await updateInstallationRequest(installations.appConfig);
    while (entry.registrationStatus === 1) {
      await sleep(100);
      entry = await updateInstallationRequest(installations.appConfig);
    }
    if (entry.registrationStatus === 0) {
      const { installationEntry, registrationPromise } = await getInstallationEntry(installations);
      if (registrationPromise) {
        return registrationPromise;
      } else {
        return installationEntry;
      }
    }
    return entry;
  }
  function updateInstallationRequest(appConfig) {
    return update(appConfig, (oldEntry) => {
      if (!oldEntry) {
        throw ERROR_FACTORY2.create(
          "installation-not-found"
          /* ErrorCode.INSTALLATION_NOT_FOUND */
        );
      }
      return clearTimedOutRequest(oldEntry);
    });
  }
  function clearTimedOutRequest(entry) {
    if (hasInstallationRequestTimedOut(entry)) {
      return {
        fid: entry.fid,
        registrationStatus: 0
        /* RequestStatus.NOT_STARTED */
      };
    }
    return entry;
  }
  function hasInstallationRequestTimedOut(installationEntry) {
    return installationEntry.registrationStatus === 1 && installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now();
  }
  async function generateAuthTokenRequest({ appConfig, heartbeatServiceProvider }, installationEntry) {
    const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
    const headers = getHeadersWithAuth(appConfig, installationEntry);
    const heartbeatService = heartbeatServiceProvider.getImmediate({
      optional: true
    });
    if (heartbeatService) {
      const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
      if (heartbeatsHeader) {
        headers.append("x-firebase-client", heartbeatsHeader);
      }
    }
    const body = {
      installation: {
        sdkVersion: PACKAGE_VERSION,
        appId: appConfig.appId
      }
    };
    const request = {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    };
    const response = await retryIfServerError(() => fetch(endpoint, request));
    if (response.ok) {
      const responseValue = await response.json();
      const completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
      return completedAuthToken;
    } else {
      throw await getErrorFromResponse("Generate Auth Token", response);
    }
  }
  function getGenerateAuthTokenEndpoint(appConfig, { fid }) {
    return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
  }
  async function refreshAuthToken(installations, forceRefresh = false) {
    let tokenPromise;
    const entry = await update(installations.appConfig, (oldEntry) => {
      if (!isEntryRegistered(oldEntry)) {
        throw ERROR_FACTORY2.create(
          "not-registered"
          /* ErrorCode.NOT_REGISTERED */
        );
      }
      const oldAuthToken = oldEntry.authToken;
      if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
        return oldEntry;
      } else if (oldAuthToken.requestStatus === 1) {
        tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
        return oldEntry;
      } else {
        if (!navigator.onLine) {
          throw ERROR_FACTORY2.create(
            "app-offline"
            /* ErrorCode.APP_OFFLINE */
          );
        }
        const inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
        tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
        return inProgressEntry;
      }
    });
    const authToken = tokenPromise ? await tokenPromise : entry.authToken;
    return authToken;
  }
  async function waitUntilAuthTokenRequest(installations, forceRefresh) {
    let entry = await updateAuthTokenRequest(installations.appConfig);
    while (entry.authToken.requestStatus === 1) {
      await sleep(100);
      entry = await updateAuthTokenRequest(installations.appConfig);
    }
    const authToken = entry.authToken;
    if (authToken.requestStatus === 0) {
      return refreshAuthToken(installations, forceRefresh);
    } else {
      return authToken;
    }
  }
  function updateAuthTokenRequest(appConfig) {
    return update(appConfig, (oldEntry) => {
      if (!isEntryRegistered(oldEntry)) {
        throw ERROR_FACTORY2.create(
          "not-registered"
          /* ErrorCode.NOT_REGISTERED */
        );
      }
      const oldAuthToken = oldEntry.authToken;
      if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
        return Object.assign(Object.assign({}, oldEntry), { authToken: {
          requestStatus: 0
          /* RequestStatus.NOT_STARTED */
        } });
      }
      return oldEntry;
    });
  }
  async function fetchAuthTokenFromServer(installations, installationEntry) {
    try {
      const authToken = await generateAuthTokenRequest(installations, installationEntry);
      const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken });
      await set(installations.appConfig, updatedInstallationEntry);
      return authToken;
    } catch (e) {
      if (isServerError(e) && (e.customData.serverCode === 401 || e.customData.serverCode === 404)) {
        await remove(installations.appConfig);
      } else {
        const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken: {
          requestStatus: 0
          /* RequestStatus.NOT_STARTED */
        } });
        await set(installations.appConfig, updatedInstallationEntry);
      }
      throw e;
    }
  }
  function isEntryRegistered(installationEntry) {
    return installationEntry !== void 0 && installationEntry.registrationStatus === 2;
  }
  function isAuthTokenValid(authToken) {
    return authToken.requestStatus === 2 && !isAuthTokenExpired(authToken);
  }
  function isAuthTokenExpired(authToken) {
    const now = Date.now();
    return now < authToken.creationTime || authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER;
  }
  function makeAuthTokenRequestInProgressEntry(oldEntry) {
    const inProgressAuthToken = {
      requestStatus: 1,
      requestTime: Date.now()
    };
    return Object.assign(Object.assign({}, oldEntry), { authToken: inProgressAuthToken });
  }
  function hasAuthTokenRequestTimedOut(authToken) {
    return authToken.requestStatus === 1 && authToken.requestTime + PENDING_TIMEOUT_MS < Date.now();
  }
  async function getId(installations) {
    const installationsImpl = installations;
    const { installationEntry, registrationPromise } = await getInstallationEntry(installationsImpl);
    if (registrationPromise) {
      registrationPromise.catch(console.error);
    } else {
      refreshAuthToken(installationsImpl).catch(console.error);
    }
    return installationEntry.fid;
  }
  async function getToken(installations, forceRefresh = false) {
    const installationsImpl = installations;
    await completeInstallationRegistration(installationsImpl);
    const authToken = await refreshAuthToken(installationsImpl, forceRefresh);
    return authToken.token;
  }
  async function completeInstallationRegistration(installations) {
    const { registrationPromise } = await getInstallationEntry(installations);
    if (registrationPromise) {
      await registrationPromise;
    }
  }
  function extractAppConfig(app2) {
    if (!app2 || !app2.options) {
      throw getMissingValueError("App Configuration");
    }
    if (!app2.name) {
      throw getMissingValueError("App Name");
    }
    const configKeys = [
      "projectId",
      "apiKey",
      "appId"
    ];
    for (const keyName of configKeys) {
      if (!app2.options[keyName]) {
        throw getMissingValueError(keyName);
      }
    }
    return {
      appName: app2.name,
      projectId: app2.options.projectId,
      apiKey: app2.options.apiKey,
      appId: app2.options.appId
    };
  }
  function getMissingValueError(valueName) {
    return ERROR_FACTORY2.create("missing-app-config-values", {
      valueName
    });
  }
  var INSTALLATIONS_NAME = "installations";
  var INSTALLATIONS_NAME_INTERNAL = "installations-internal";
  var publicFactory = (container) => {
    const app2 = container.getProvider("app").getImmediate();
    const appConfig = extractAppConfig(app2);
    const heartbeatServiceProvider = _getProvider(app2, "heartbeat");
    const installationsImpl = {
      app: app2,
      appConfig,
      heartbeatServiceProvider,
      _delete: () => Promise.resolve()
    };
    return installationsImpl;
  };
  var internalFactory = (container) => {
    const app2 = container.getProvider("app").getImmediate();
    const installations = _getProvider(app2, INSTALLATIONS_NAME).getImmediate();
    const installationsInternal = {
      getId: () => getId(installations),
      getToken: (forceRefresh) => getToken(installations, forceRefresh)
    };
    return installationsInternal;
  };
  function registerInstallations() {
    _registerComponent(new Component(
      INSTALLATIONS_NAME,
      publicFactory,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
    _registerComponent(new Component(
      INSTALLATIONS_NAME_INTERNAL,
      internalFactory,
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ));
  }
  registerInstallations();
  registerVersion(name3, version3);
  registerVersion(name3, version3, "esm2017");

  // node_modules/@firebase/analytics/dist/esm/index.esm2017.js
  var ANALYTICS_TYPE = "analytics";
  var GA_FID_KEY = "firebase_id";
  var ORIGIN_KEY = "origin";
  var FETCH_TIMEOUT_MILLIS = 60 * 1e3;
  var DYNAMIC_CONFIG_URL = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig";
  var GTAG_URL = "https://www.googletagmanager.com/gtag/js";
  var logger2 = new Logger("@firebase/analytics");
  var ERRORS2 = {
    [
      "already-exists"
      /* AnalyticsError.ALREADY_EXISTS */
    ]: "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
    [
      "already-initialized"
      /* AnalyticsError.ALREADY_INITIALIZED */
    ]: "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
    [
      "already-initialized-settings"
      /* AnalyticsError.ALREADY_INITIALIZED_SETTINGS */
    ]: "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
    [
      "interop-component-reg-failed"
      /* AnalyticsError.INTEROP_COMPONENT_REG_FAILED */
    ]: "Firebase Analytics Interop Component failed to instantiate: {$reason}",
    [
      "invalid-analytics-context"
      /* AnalyticsError.INVALID_ANALYTICS_CONTEXT */
    ]: "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
    [
      "indexeddb-unavailable"
      /* AnalyticsError.INDEXEDDB_UNAVAILABLE */
    ]: "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
    [
      "fetch-throttle"
      /* AnalyticsError.FETCH_THROTTLE */
    ]: "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
    [
      "config-fetch-failed"
      /* AnalyticsError.CONFIG_FETCH_FAILED */
    ]: "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
    [
      "no-api-key"
      /* AnalyticsError.NO_API_KEY */
    ]: 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
    [
      "no-app-id"
      /* AnalyticsError.NO_APP_ID */
    ]: 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
    [
      "no-client-id"
      /* AnalyticsError.NO_CLIENT_ID */
    ]: 'The "client_id" field is empty.',
    [
      "invalid-gtag-resource"
      /* AnalyticsError.INVALID_GTAG_RESOURCE */
    ]: "Trusted Types detected an invalid gtag resource: {$gtagURL}."
  };
  var ERROR_FACTORY3 = new ErrorFactory("analytics", "Analytics", ERRORS2);
  function createGtagTrustedTypesScriptURL(url) {
    if (!url.startsWith(GTAG_URL)) {
      const err = ERROR_FACTORY3.create("invalid-gtag-resource", {
        gtagURL: url
      });
      logger2.warn(err.message);
      return "";
    }
    return url;
  }
  function promiseAllSettled(promises) {
    return Promise.all(promises.map((promise) => promise.catch((e) => e)));
  }
  function createTrustedTypesPolicy(policyName, policyOptions) {
    let trustedTypesPolicy;
    if (window.trustedTypes) {
      trustedTypesPolicy = window.trustedTypes.createPolicy(policyName, policyOptions);
    }
    return trustedTypesPolicy;
  }
  function insertScriptTag(dataLayerName2, measurementId) {
    const trustedTypesPolicy = createTrustedTypesPolicy("firebase-js-sdk-policy", {
      createScriptURL: createGtagTrustedTypesScriptURL
    });
    const script = document.createElement("script");
    const gtagScriptURL = `${GTAG_URL}?l=${dataLayerName2}&id=${measurementId}`;
    script.src = trustedTypesPolicy ? trustedTypesPolicy === null || trustedTypesPolicy === void 0 ? void 0 : trustedTypesPolicy.createScriptURL(gtagScriptURL) : gtagScriptURL;
    script.async = true;
    document.head.appendChild(script);
  }
  function getOrCreateDataLayer(dataLayerName2) {
    let dataLayer = [];
    if (Array.isArray(window[dataLayerName2])) {
      dataLayer = window[dataLayerName2];
    } else {
      window[dataLayerName2] = dataLayer;
    }
    return dataLayer;
  }
  async function gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, measurementId, gtagParams) {
    const correspondingAppId = measurementIdToAppId2[measurementId];
    try {
      if (correspondingAppId) {
        await initializationPromisesMap2[correspondingAppId];
      } else {
        const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList2);
        const foundConfig = dynamicConfigResults.find((config) => config.measurementId === measurementId);
        if (foundConfig) {
          await initializationPromisesMap2[foundConfig.appId];
        }
      }
    } catch (e) {
      logger2.error(e);
    }
    gtagCore("config", measurementId, gtagParams);
  }
  async function gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementId, gtagParams) {
    try {
      let initializationPromisesToWaitFor = [];
      if (gtagParams && gtagParams["send_to"]) {
        let gaSendToList = gtagParams["send_to"];
        if (!Array.isArray(gaSendToList)) {
          gaSendToList = [gaSendToList];
        }
        const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList2);
        for (const sendToId of gaSendToList) {
          const foundConfig = dynamicConfigResults.find((config) => config.measurementId === sendToId);
          const initializationPromise = foundConfig && initializationPromisesMap2[foundConfig.appId];
          if (initializationPromise) {
            initializationPromisesToWaitFor.push(initializationPromise);
          } else {
            initializationPromisesToWaitFor = [];
            break;
          }
        }
      }
      if (initializationPromisesToWaitFor.length === 0) {
        initializationPromisesToWaitFor = Object.values(initializationPromisesMap2);
      }
      await Promise.all(initializationPromisesToWaitFor);
      gtagCore("event", measurementId, gtagParams || {});
    } catch (e) {
      logger2.error(e);
    }
  }
  function wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2) {
    async function gtagWrapper(command, ...args) {
      try {
        if (command === "event") {
          const [measurementId, gtagParams] = args;
          await gtagOnEvent(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementId, gtagParams);
        } else if (command === "config") {
          const [measurementId, gtagParams] = args;
          await gtagOnConfig(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, measurementId, gtagParams);
        } else if (command === "consent") {
          const [gtagParams] = args;
          gtagCore("consent", "update", gtagParams);
        } else if (command === "get") {
          const [measurementId, fieldName, callback] = args;
          gtagCore("get", measurementId, fieldName, callback);
        } else if (command === "set") {
          const [customParams] = args;
          gtagCore("set", customParams);
        } else {
          gtagCore(command, ...args);
        }
      } catch (e) {
        logger2.error(e);
      }
    }
    return gtagWrapper;
  }
  function wrapOrCreateGtag(initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2, dataLayerName2, gtagFunctionName) {
    let gtagCore = function(..._args) {
      window[dataLayerName2].push(arguments);
    };
    if (window[gtagFunctionName] && typeof window[gtagFunctionName] === "function") {
      gtagCore = window[gtagFunctionName];
    }
    window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap2, dynamicConfigPromisesList2, measurementIdToAppId2);
    return {
      gtagCore,
      wrappedGtag: window[gtagFunctionName]
    };
  }
  function findGtagScriptOnPage(dataLayerName2) {
    const scriptTags = window.document.getElementsByTagName("script");
    for (const tag of Object.values(scriptTags)) {
      if (tag.src && tag.src.includes(GTAG_URL) && tag.src.includes(dataLayerName2)) {
        return tag;
      }
    }
    return null;
  }
  var LONG_RETRY_FACTOR = 30;
  var BASE_INTERVAL_MILLIS = 1e3;
  var RetryData = class {
    constructor(throttleMetadata = {}, intervalMillis = BASE_INTERVAL_MILLIS) {
      this.throttleMetadata = throttleMetadata;
      this.intervalMillis = intervalMillis;
    }
    getThrottleMetadata(appId) {
      return this.throttleMetadata[appId];
    }
    setThrottleMetadata(appId, metadata) {
      this.throttleMetadata[appId] = metadata;
    }
    deleteThrottleMetadata(appId) {
      delete this.throttleMetadata[appId];
    }
  };
  var defaultRetryData = new RetryData();
  function getHeaders2(apiKey) {
    return new Headers({
      Accept: "application/json",
      "x-goog-api-key": apiKey
    });
  }
  async function fetchDynamicConfig(appFields) {
    var _a;
    const { appId, apiKey } = appFields;
    const request = {
      method: "GET",
      headers: getHeaders2(apiKey)
    };
    const appUrl = DYNAMIC_CONFIG_URL.replace("{app-id}", appId);
    const response = await fetch(appUrl, request);
    if (response.status !== 200 && response.status !== 304) {
      let errorMessage = "";
      try {
        const jsonResponse = await response.json();
        if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
          errorMessage = jsonResponse.error.message;
        }
      } catch (_ignored) {
      }
      throw ERROR_FACTORY3.create("config-fetch-failed", {
        httpStatus: response.status,
        responseMessage: errorMessage
      });
    }
    return response.json();
  }
  async function fetchDynamicConfigWithRetry(app2, retryData = defaultRetryData, timeoutMillis) {
    const { appId, apiKey, measurementId } = app2.options;
    if (!appId) {
      throw ERROR_FACTORY3.create(
        "no-app-id"
        /* AnalyticsError.NO_APP_ID */
      );
    }
    if (!apiKey) {
      if (measurementId) {
        return {
          measurementId,
          appId
        };
      }
      throw ERROR_FACTORY3.create(
        "no-api-key"
        /* AnalyticsError.NO_API_KEY */
      );
    }
    const throttleMetadata = retryData.getThrottleMetadata(appId) || {
      backoffCount: 0,
      throttleEndTimeMillis: Date.now()
    };
    const signal = new AnalyticsAbortSignal();
    setTimeout(async () => {
      signal.abort();
    }, timeoutMillis !== void 0 ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
    return attemptFetchDynamicConfigWithRetry({ appId, apiKey, measurementId }, throttleMetadata, signal, retryData);
  }
  async function attemptFetchDynamicConfigWithRetry(appFields, { throttleEndTimeMillis, backoffCount }, signal, retryData = defaultRetryData) {
    var _a;
    const { appId, measurementId } = appFields;
    try {
      await setAbortableTimeout(signal, throttleEndTimeMillis);
    } catch (e) {
      if (measurementId) {
        logger2.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${measurementId} provided in the "measurementId" field in the local Firebase config. [${e === null || e === void 0 ? void 0 : e.message}]`);
        return { appId, measurementId };
      }
      throw e;
    }
    try {
      const response = await fetchDynamicConfig(appFields);
      retryData.deleteThrottleMetadata(appId);
      return response;
    } catch (e) {
      const error = e;
      if (!isRetriableError(error)) {
        retryData.deleteThrottleMetadata(appId);
        if (measurementId) {
          logger2.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${measurementId} provided in the "measurementId" field in the local Firebase config. [${error === null || error === void 0 ? void 0 : error.message}]`);
          return { appId, measurementId };
        } else {
          throw e;
        }
      }
      const backoffMillis = Number((_a = error === null || error === void 0 ? void 0 : error.customData) === null || _a === void 0 ? void 0 : _a.httpStatus) === 503 ? calculateBackoffMillis(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR) : calculateBackoffMillis(backoffCount, retryData.intervalMillis);
      const throttleMetadata = {
        throttleEndTimeMillis: Date.now() + backoffMillis,
        backoffCount: backoffCount + 1
      };
      retryData.setThrottleMetadata(appId, throttleMetadata);
      logger2.debug(`Calling attemptFetch again in ${backoffMillis} millis`);
      return attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData);
    }
  }
  function setAbortableTimeout(signal, throttleEndTimeMillis) {
    return new Promise((resolve, reject) => {
      const backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
      const timeout = setTimeout(resolve, backoffMillis);
      signal.addEventListener(() => {
        clearTimeout(timeout);
        reject(ERROR_FACTORY3.create("fetch-throttle", {
          throttleEndTimeMillis
        }));
      });
    });
  }
  function isRetriableError(e) {
    if (!(e instanceof FirebaseError) || !e.customData) {
      return false;
    }
    const httpStatus = Number(e.customData["httpStatus"]);
    return httpStatus === 429 || httpStatus === 500 || httpStatus === 503 || httpStatus === 504;
  }
  var AnalyticsAbortSignal = class {
    constructor() {
      this.listeners = [];
    }
    addEventListener(listener) {
      this.listeners.push(listener);
    }
    abort() {
      this.listeners.forEach((listener) => listener());
    }
  };
  var defaultEventParametersForInit;
  async function logEvent$1(gtagFunction, initializationPromise, eventName, eventParams, options) {
    if (options && options.global) {
      gtagFunction("event", eventName, eventParams);
      return;
    } else {
      const measurementId = await initializationPromise;
      const params = Object.assign(Object.assign({}, eventParams), { "send_to": measurementId });
      gtagFunction("event", eventName, params);
    }
  }
  var defaultConsentSettingsForInit;
  function _setConsentDefaultForInit(consentSettings) {
    defaultConsentSettingsForInit = consentSettings;
  }
  function _setDefaultEventParametersForInit(customParams) {
    defaultEventParametersForInit = customParams;
  }
  async function validateIndexedDB() {
    if (!isIndexedDBAvailable()) {
      logger2.warn(ERROR_FACTORY3.create("indexeddb-unavailable", {
        errorInfo: "IndexedDB is not available in this environment."
      }).message);
      return false;
    } else {
      try {
        await validateIndexedDBOpenable();
      } catch (e) {
        logger2.warn(ERROR_FACTORY3.create("indexeddb-unavailable", {
          errorInfo: e === null || e === void 0 ? void 0 : e.toString()
        }).message);
        return false;
      }
    }
    return true;
  }
  async function _initializeAnalytics(app2, dynamicConfigPromisesList2, measurementIdToAppId2, installations, gtagCore, dataLayerName2, options) {
    var _a;
    const dynamicConfigPromise = fetchDynamicConfigWithRetry(app2);
    dynamicConfigPromise.then((config) => {
      measurementIdToAppId2[config.measurementId] = config.appId;
      if (app2.options.measurementId && config.measurementId !== app2.options.measurementId) {
        logger2.warn(`The measurement ID in the local Firebase config (${app2.options.measurementId}) does not match the measurement ID fetched from the server (${config.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`);
      }
    }).catch((e) => logger2.error(e));
    dynamicConfigPromisesList2.push(dynamicConfigPromise);
    const fidPromise = validateIndexedDB().then((envIsValid) => {
      if (envIsValid) {
        return installations.getId();
      } else {
        return void 0;
      }
    });
    const [dynamicConfig, fid] = await Promise.all([
      dynamicConfigPromise,
      fidPromise
    ]);
    if (!findGtagScriptOnPage(dataLayerName2)) {
      insertScriptTag(dataLayerName2, dynamicConfig.measurementId);
    }
    if (defaultConsentSettingsForInit) {
      gtagCore("consent", "default", defaultConsentSettingsForInit);
      _setConsentDefaultForInit(void 0);
    }
    gtagCore("js", /* @__PURE__ */ new Date());
    const configProperties = (_a = options === null || options === void 0 ? void 0 : options.config) !== null && _a !== void 0 ? _a : {};
    configProperties[ORIGIN_KEY] = "firebase";
    configProperties.update = true;
    if (fid != null) {
      configProperties[GA_FID_KEY] = fid;
    }
    gtagCore("config", dynamicConfig.measurementId, configProperties);
    if (defaultEventParametersForInit) {
      gtagCore("set", defaultEventParametersForInit);
      _setDefaultEventParametersForInit(void 0);
    }
    return dynamicConfig.measurementId;
  }
  var AnalyticsService = class {
    constructor(app2) {
      this.app = app2;
    }
    _delete() {
      delete initializationPromisesMap[this.app.options.appId];
      return Promise.resolve();
    }
  };
  var initializationPromisesMap = {};
  var dynamicConfigPromisesList = [];
  var measurementIdToAppId = {};
  var dataLayerName = "dataLayer";
  var gtagName = "gtag";
  var gtagCoreFunction;
  var wrappedGtagFunction;
  var globalInitDone = false;
  function warnOnBrowserContextMismatch() {
    const mismatchedEnvMessages = [];
    if (isBrowserExtension()) {
      mismatchedEnvMessages.push("This is a browser extension environment.");
    }
    if (!areCookiesEnabled()) {
      mismatchedEnvMessages.push("Cookies are not available.");
    }
    if (mismatchedEnvMessages.length > 0) {
      const details = mismatchedEnvMessages.map((message, index) => `(${index + 1}) ${message}`).join(" ");
      const err = ERROR_FACTORY3.create("invalid-analytics-context", {
        errorInfo: details
      });
      logger2.warn(err.message);
    }
  }
  function factory(app2, installations, options) {
    warnOnBrowserContextMismatch();
    const appId = app2.options.appId;
    if (!appId) {
      throw ERROR_FACTORY3.create(
        "no-app-id"
        /* AnalyticsError.NO_APP_ID */
      );
    }
    if (!app2.options.apiKey) {
      if (app2.options.measurementId) {
        logger2.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${app2.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);
      } else {
        throw ERROR_FACTORY3.create(
          "no-api-key"
          /* AnalyticsError.NO_API_KEY */
        );
      }
    }
    if (initializationPromisesMap[appId] != null) {
      throw ERROR_FACTORY3.create("already-exists", {
        id: appId
      });
    }
    if (!globalInitDone) {
      getOrCreateDataLayer(dataLayerName);
      const { wrappedGtag, gtagCore } = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName);
      wrappedGtagFunction = wrappedGtag;
      gtagCoreFunction = gtagCore;
      globalInitDone = true;
    }
    initializationPromisesMap[appId] = _initializeAnalytics(app2, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction, dataLayerName, options);
    const analyticsInstance = new AnalyticsService(app2);
    return analyticsInstance;
  }
  function getAnalytics(app2 = getApp()) {
    app2 = getModularInstance(app2);
    const analyticsProvider = _getProvider(app2, ANALYTICS_TYPE);
    if (analyticsProvider.isInitialized()) {
      return analyticsProvider.getImmediate();
    }
    return initializeAnalytics(app2);
  }
  function initializeAnalytics(app2, options = {}) {
    const analyticsProvider = _getProvider(app2, ANALYTICS_TYPE);
    if (analyticsProvider.isInitialized()) {
      const existingInstance = analyticsProvider.getImmediate();
      if (deepEqual(options, analyticsProvider.getOptions())) {
        return existingInstance;
      } else {
        throw ERROR_FACTORY3.create(
          "already-initialized"
          /* AnalyticsError.ALREADY_INITIALIZED */
        );
      }
    }
    const analyticsInstance = analyticsProvider.initialize({ options });
    return analyticsInstance;
  }
  function logEvent(analyticsInstance, eventName, eventParams, options) {
    analyticsInstance = getModularInstance(analyticsInstance);
    logEvent$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], eventName, eventParams, options).catch((e) => logger2.error(e));
  }
  var name4 = "@firebase/analytics";
  var version4 = "0.10.1";
  function registerAnalytics() {
    _registerComponent(new Component(
      ANALYTICS_TYPE,
      (container, { options: analyticsOptions }) => {
        const app2 = container.getProvider("app").getImmediate();
        const installations = container.getProvider("installations-internal").getImmediate();
        return factory(app2, installations, analyticsOptions);
      },
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
    _registerComponent(new Component(
      "analytics-internal",
      internalFactory2,
      "PRIVATE"
      /* ComponentType.PRIVATE */
    ));
    registerVersion(name4, version4);
    registerVersion(name4, version4, "esm2017");
    function internalFactory2(container) {
      try {
        const analytics2 = container.getProvider(ANALYTICS_TYPE).getImmediate();
        return {
          logEvent: (eventName, eventParams, options) => logEvent(analytics2, eventName, eventParams, options)
        };
      } catch (e) {
        throw ERROR_FACTORY3.create("interop-component-reg-failed", {
          reason: e
        });
      }
    }
  }
  registerAnalytics();

  // node_modules/@firebase/webchannel-wrapper/dist/esm/index.esm2017.js
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  var esm = {};
  var k;
  var goog = goog || {};
  var l = commonjsGlobal || self;
  function aa(a) {
    var b2 = typeof a;
    b2 = "object" != b2 ? b2 : a ? Array.isArray(a) ? "array" : b2 : "null";
    return "array" == b2 || "object" == b2 && "number" == typeof a.length;
  }
  function p(a) {
    var b2 = typeof a;
    return "object" == b2 && null != a || "function" == b2;
  }
  function ba(a) {
    return Object.prototype.hasOwnProperty.call(a, ca) && a[ca] || (a[ca] = ++da);
  }
  var ca = "closure_uid_" + (1e9 * Math.random() >>> 0);
  var da = 0;
  function ea(a, b2, c) {
    return a.call.apply(a.bind, arguments);
  }
  function fa(a, b2, c) {
    if (!a)
      throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b2, e);
      };
    }
    return function() {
      return a.apply(b2, arguments);
    };
  }
  function q(a, b2, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? q = ea : q = fa;
    return q.apply(null, arguments);
  }
  function ha(a, b2) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }
  function r(a, b2) {
    function c() {
    }
    c.prototype = b2.prototype;
    a.$ = b2.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
    a.ac = function(d, e, f) {
      for (var h = Array(arguments.length - 2), n = 2; n < arguments.length; n++)
        h[n - 2] = arguments[n];
      return b2.prototype[e].apply(d, h);
    };
  }
  function v() {
    this.s = this.s;
    this.o = this.o;
  }
  var ia = 0;
  v.prototype.s = false;
  v.prototype.sa = function() {
    if (!this.s && (this.s = true, this.N(), 0 != ia)) {
      ba(this);
    }
  };
  v.prototype.N = function() {
    if (this.o)
      for (; this.o.length; )
        this.o.shift()();
  };
  var ka = Array.prototype.indexOf ? function(a, b2) {
    return Array.prototype.indexOf.call(a, b2, void 0);
  } : function(a, b2) {
    if ("string" === typeof a)
      return "string" !== typeof b2 || 1 != b2.length ? -1 : a.indexOf(b2, 0);
    for (let c = 0; c < a.length; c++)
      if (c in a && a[c] === b2)
        return c;
    return -1;
  };
  function ma(a) {
    const b2 = a.length;
    if (0 < b2) {
      const c = Array(b2);
      for (let d = 0; d < b2; d++)
        c[d] = a[d];
      return c;
    }
    return [];
  }
  function na(a, b2) {
    for (let c = 1; c < arguments.length; c++) {
      const d = arguments[c];
      if (aa(d)) {
        const e = a.length || 0, f = d.length || 0;
        a.length = e + f;
        for (let h = 0; h < f; h++)
          a[e + h] = d[h];
      } else
        a.push(d);
    }
  }
  function w(a, b2) {
    this.type = a;
    this.g = this.target = b2;
    this.defaultPrevented = false;
  }
  w.prototype.h = function() {
    this.defaultPrevented = true;
  };
  var oa = function() {
    if (!l.addEventListener || !Object.defineProperty)
      return false;
    var a = false, b2 = Object.defineProperty({}, "passive", { get: function() {
      a = true;
    } });
    try {
      const c = () => {
      };
      l.addEventListener("test", c, b2);
      l.removeEventListener("test", c, b2);
    } catch (c) {
    }
    return a;
  }();
  function x(a) {
    return /^[\s\xa0]*$/.test(a);
  }
  function pa() {
    var a = l.navigator;
    return a && (a = a.userAgent) ? a : "";
  }
  function y(a) {
    return -1 != pa().indexOf(a);
  }
  function qa(a) {
    qa[" "](a);
    return a;
  }
  qa[" "] = function() {
  };
  function ra(a, b2) {
    var c = sa;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b2(a);
  }
  var ta = y("Opera");
  var z = y("Trident") || y("MSIE");
  var ua = y("Edge");
  var va = ua || z;
  var wa = y("Gecko") && !(-1 != pa().toLowerCase().indexOf("webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge");
  var xa = -1 != pa().toLowerCase().indexOf("webkit") && !y("Edge");
  function ya() {
    var a = l.document;
    return a ? a.documentMode : void 0;
  }
  var za;
  a: {
    Aa = "", Ba = function() {
      var a = pa();
      if (wa)
        return /rv:([^\);]+)(\)|;)/.exec(a);
      if (ua)
        return /Edge\/([\d\.]+)/.exec(a);
      if (z)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (xa)
        return /WebKit\/(\S+)/.exec(a);
      if (ta)
        return /(?:Version)[ \/]?(\S+)/.exec(a);
    }();
    Ba && (Aa = Ba ? Ba[1] : "");
    if (z) {
      Ca = ya();
      if (null != Ca && Ca > parseFloat(Aa)) {
        za = String(Ca);
        break a;
      }
    }
    za = Aa;
  }
  var Aa;
  var Ba;
  var Ca;
  var Da;
  if (l.document && z) {
    Ea = ya();
    Da = Ea ? Ea : parseInt(za, 10) || void 0;
  } else
    Da = void 0;
  var Ea;
  var Fa = Da;
  function A(a, b2) {
    w.call(this, a ? a.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.i = null;
    if (a) {
      var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.g = b2;
      if (b2 = a.relatedTarget) {
        if (wa) {
          a: {
            try {
              qa(b2.nodeName);
              var e = true;
              break a;
            } catch (f) {
            }
            e = false;
          }
          e || (b2 = null);
        }
      } else
        "mouseover" == c ? b2 = a.fromElement : "mouseout" == c && (b2 = a.toElement);
      this.relatedTarget = b2;
      d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ga[a.pointerType] || "";
      this.state = a.state;
      this.i = a;
      a.defaultPrevented && A.$.h.call(this);
    }
  }
  r(A, w);
  var Ga = { 2: "touch", 3: "pen", 4: "mouse" };
  A.prototype.h = function() {
    A.$.h.call(this);
    var a = this.i;
    a.preventDefault ? a.preventDefault() : a.returnValue = false;
  };
  var Ha = "closure_listenable_" + (1e6 * Math.random() | 0);
  var Ia = 0;
  function Ja(a, b2, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b2;
    this.type = c;
    this.capture = !!d;
    this.la = e;
    this.key = ++Ia;
    this.fa = this.ia = false;
  }
  function Ma(a) {
    a.fa = true;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.la = null;
  }
  function Na(a, b2, c) {
    for (const d in a)
      b2.call(c, a[d], d, a);
  }
  function Oa(a, b2) {
    for (const c in a)
      b2.call(void 0, a[c], c, a);
  }
  function Pa(a) {
    const b2 = {};
    for (const c in a)
      b2[c] = a[c];
    return b2;
  }
  var Qa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function Ra(a, b2) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d)
        a[c] = d[c];
      for (let f = 0; f < Qa.length; f++)
        c = Qa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function Sa(a) {
    this.src = a;
    this.g = {};
    this.h = 0;
  }
  Sa.prototype.add = function(a, b2, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.h++);
    var h = Ta(a, b2, d, e);
    -1 < h ? (b2 = a[h], c || (b2.ia = false)) : (b2 = new Ja(b2, this.src, f, !!d, e), b2.ia = c, a.push(b2));
    return b2;
  };
  function Ua(a, b2) {
    var c = b2.type;
    if (c in a.g) {
      var d = a.g[c], e = ka(d, b2), f;
      (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
      f && (Ma(b2), 0 == a.g[c].length && (delete a.g[c], a.h--));
    }
  }
  function Ta(a, b2, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.fa && f.listener == b2 && f.capture == !!c && f.la == d)
        return e;
    }
    return -1;
  }
  var Va = "closure_lm_" + (1e6 * Math.random() | 0);
  var Wa = {};
  function Ya(a, b2, c, d, e) {
    if (d && d.once)
      return Za(a, b2, c, d, e);
    if (Array.isArray(b2)) {
      for (var f = 0; f < b2.length; f++)
        Ya(a, b2[f], c, d, e);
      return null;
    }
    c = $a(c);
    return a && a[Ha] ? a.O(b2, c, p(d) ? !!d.capture : !!d, e) : ab(a, b2, c, false, d, e);
  }
  function ab(a, b2, c, d, e, f) {
    if (!b2)
      throw Error("Invalid event type");
    var h = p(e) ? !!e.capture : !!e, n = bb(a);
    n || (a[Va] = n = new Sa(a));
    c = n.add(b2, c, d, h, f);
    if (c.proxy)
      return c;
    d = cb();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
      oa || (e = h), void 0 === e && (e = false), a.addEventListener(b2.toString(), d, e);
    else if (a.attachEvent)
      a.attachEvent(db(b2.toString()), d);
    else if (a.addListener && a.removeListener)
      a.addListener(d);
    else
      throw Error("addEventListener and attachEvent are unavailable.");
    return c;
  }
  function cb() {
    function a(c) {
      return b2.call(a.src, a.listener, c);
    }
    const b2 = eb;
    return a;
  }
  function Za(a, b2, c, d, e) {
    if (Array.isArray(b2)) {
      for (var f = 0; f < b2.length; f++)
        Za(a, b2[f], c, d, e);
      return null;
    }
    c = $a(c);
    return a && a[Ha] ? a.P(b2, c, p(d) ? !!d.capture : !!d, e) : ab(a, b2, c, true, d, e);
  }
  function fb(a, b2, c, d, e) {
    if (Array.isArray(b2))
      for (var f = 0; f < b2.length; f++)
        fb(a, b2[f], c, d, e);
    else
      (d = p(d) ? !!d.capture : !!d, c = $a(c), a && a[Ha]) ? (a = a.i, b2 = String(b2).toString(), b2 in a.g && (f = a.g[b2], c = Ta(f, c, d, e), -1 < c && (Ma(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.g[b2], a.h--)))) : a && (a = bb(a)) && (b2 = a.g[b2.toString()], a = -1, b2 && (a = Ta(b2, c, d, e)), (c = -1 < a ? b2[a] : null) && gb(c));
  }
  function gb(a) {
    if ("number" !== typeof a && a && !a.fa) {
      var b2 = a.src;
      if (b2 && b2[Ha])
        Ua(b2.i, a);
      else {
        var c = a.type, d = a.proxy;
        b2.removeEventListener ? b2.removeEventListener(c, d, a.capture) : b2.detachEvent ? b2.detachEvent(db(c), d) : b2.addListener && b2.removeListener && b2.removeListener(d);
        (c = bb(b2)) ? (Ua(c, a), 0 == c.h && (c.src = null, b2[Va] = null)) : Ma(a);
      }
    }
  }
  function db(a) {
    return a in Wa ? Wa[a] : Wa[a] = "on" + a;
  }
  function eb(a, b2) {
    if (a.fa)
      a = true;
    else {
      b2 = new A(b2, this);
      var c = a.listener, d = a.la || a.src;
      a.ia && gb(a);
      a = c.call(d, b2);
    }
    return a;
  }
  function bb(a) {
    a = a[Va];
    return a instanceof Sa ? a : null;
  }
  var hb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
  function $a(a) {
    if ("function" === typeof a)
      return a;
    a[hb] || (a[hb] = function(b2) {
      return a.handleEvent(b2);
    });
    return a[hb];
  }
  function B() {
    v.call(this);
    this.i = new Sa(this);
    this.S = this;
    this.J = null;
  }
  r(B, v);
  B.prototype[Ha] = true;
  B.prototype.removeEventListener = function(a, b2, c, d) {
    fb(this, a, b2, c, d);
  };
  function C(a, b2) {
    var c, d = a.J;
    if (d)
      for (c = []; d; d = d.J)
        c.push(d);
    a = a.S;
    d = b2.type || b2;
    if ("string" === typeof b2)
      b2 = new w(b2, a);
    else if (b2 instanceof w)
      b2.target = b2.target || a;
    else {
      var e = b2;
      b2 = new w(d, a);
      Ra(b2, e);
    }
    e = true;
    if (c)
      for (var f = c.length - 1; 0 <= f; f--) {
        var h = b2.g = c[f];
        e = ib(h, d, true, b2) && e;
      }
    h = b2.g = a;
    e = ib(h, d, true, b2) && e;
    e = ib(h, d, false, b2) && e;
    if (c)
      for (f = 0; f < c.length; f++)
        h = b2.g = c[f], e = ib(h, d, false, b2) && e;
  }
  B.prototype.N = function() {
    B.$.N.call(this);
    if (this.i) {
      var a = this.i, c;
      for (c in a.g) {
        for (var d = a.g[c], e = 0; e < d.length; e++)
          Ma(d[e]);
        delete a.g[c];
        a.h--;
      }
    }
    this.J = null;
  };
  B.prototype.O = function(a, b2, c, d) {
    return this.i.add(String(a), b2, false, c, d);
  };
  B.prototype.P = function(a, b2, c, d) {
    return this.i.add(String(a), b2, true, c, d);
  };
  function ib(a, b2, c, d) {
    b2 = a.i.g[String(b2)];
    if (!b2)
      return true;
    b2 = b2.concat();
    for (var e = true, f = 0; f < b2.length; ++f) {
      var h = b2[f];
      if (h && !h.fa && h.capture == c) {
        var n = h.listener, t = h.la || h.src;
        h.ia && Ua(a.i, h);
        e = false !== n.call(t, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  var jb = l.JSON.stringify;
  var kb = class {
    constructor(a, b2) {
      this.i = a;
      this.j = b2;
      this.h = 0;
      this.g = null;
    }
    get() {
      let a;
      0 < this.h ? (this.h--, a = this.g, this.g = a.next, a.next = null) : a = this.i();
      return a;
    }
  };
  function lb() {
    var a = mb;
    let b2 = null;
    a.g && (b2 = a.g, a.g = a.g.next, a.g || (a.h = null), b2.next = null);
    return b2;
  }
  var nb = class {
    constructor() {
      this.h = this.g = null;
    }
    add(a, b2) {
      const c = ob.get();
      c.set(a, b2);
      this.h ? this.h.next = c : this.g = c;
      this.h = c;
    }
  };
  var ob = new kb(() => new pb(), (a) => a.reset());
  var pb = class {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(a, b2) {
      this.h = a;
      this.g = b2;
      this.next = null;
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  };
  function qb(a) {
    var b2 = 1;
    a = a.split(":");
    const c = [];
    for (; 0 < b2 && a.length; )
      c.push(a.shift()), b2--;
    a.length && c.push(a.join(":"));
    return c;
  }
  function rb(a) {
    l.setTimeout(() => {
      throw a;
    }, 0);
  }
  var sb;
  var tb = false;
  var mb = new nb();
  var vb = () => {
    const a = l.Promise.resolve(void 0);
    sb = () => {
      a.then(ub);
    };
  };
  var ub = () => {
    for (var a; a = lb(); ) {
      try {
        a.h.call(a.g);
      } catch (c) {
        rb(c);
      }
      var b2 = ob;
      b2.j(a);
      100 > b2.h && (b2.h++, a.next = b2.g, b2.g = a);
    }
    tb = false;
  };
  function wb(a, b2) {
    B.call(this);
    this.h = a || 1;
    this.g = b2 || l;
    this.j = q(this.qb, this);
    this.l = Date.now();
  }
  r(wb, B);
  k = wb.prototype;
  k.ga = false;
  k.T = null;
  k.qb = function() {
    if (this.ga) {
      var a = Date.now() - this.l;
      0 < a && a < 0.8 * this.h ? this.T = this.g.setTimeout(this.j, this.h - a) : (this.T && (this.g.clearTimeout(this.T), this.T = null), C(this, "tick"), this.ga && (xb(this), this.start()));
    }
  };
  k.start = function() {
    this.ga = true;
    this.T || (this.T = this.g.setTimeout(this.j, this.h), this.l = Date.now());
  };
  function xb(a) {
    a.ga = false;
    a.T && (a.g.clearTimeout(a.T), a.T = null);
  }
  k.N = function() {
    wb.$.N.call(this);
    xb(this);
    delete this.g;
  };
  function yb(a, b2, c) {
    if ("function" === typeof a)
      c && (a = q(a, c));
    else if (a && "function" == typeof a.handleEvent)
      a = q(a.handleEvent, a);
    else
      throw Error("Invalid listener argument");
    return 2147483647 < Number(b2) ? -1 : l.setTimeout(a, b2 || 0);
  }
  function zb(a) {
    a.g = yb(() => {
      a.g = null;
      a.i && (a.i = false, zb(a));
    }, a.j);
    const b2 = a.h;
    a.h = null;
    a.m.apply(null, b2);
  }
  var Ab = class extends v {
    constructor(a, b2) {
      super();
      this.m = a;
      this.j = b2;
      this.h = null;
      this.i = false;
      this.g = null;
    }
    l(a) {
      this.h = arguments;
      this.g ? this.i = true : zb(this);
    }
    N() {
      super.N();
      this.g && (l.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
    }
  };
  function Bb(a) {
    v.call(this);
    this.h = a;
    this.g = {};
  }
  r(Bb, v);
  var Cb = [];
  function Eb(a, b2, c, d) {
    Array.isArray(c) || (c && (Cb[0] = c.toString()), c = Cb);
    for (var e = 0; e < c.length; e++) {
      var f = Ya(b2, c[e], d || a.handleEvent, false, a.h || a);
      if (!f)
        break;
      a.g[f.key] = f;
    }
  }
  function Fb(a) {
    Na(a.g, function(b2, c) {
      this.g.hasOwnProperty(c) && gb(b2);
    }, a);
    a.g = {};
  }
  Bb.prototype.N = function() {
    Bb.$.N.call(this);
    Fb(this);
  };
  Bb.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };
  function Gb() {
    this.g = true;
  }
  Gb.prototype.Ea = function() {
    this.g = false;
  };
  function Hb(a, b2, c, d, e, f) {
    a.info(function() {
      if (a.g)
        if (f) {
          var h = "";
          for (var n = f.split("&"), t = 0; t < n.length; t++) {
            var m = n[t].split("=");
            if (1 < m.length) {
              var u = m[0];
              m = m[1];
              var L = u.split("_");
              h = 2 <= L.length && "type" == L[1] ? h + (u + "=" + m + "&") : h + (u + "=redacted&");
            }
          }
        } else
          h = null;
      else
        h = f;
      return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b2 + "\n" + c + "\n" + h;
    });
  }
  function Ib(a, b2, c, d, e, f, h) {
    a.info(function() {
      return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b2 + "\n" + c + "\n" + f + " " + h;
    });
  }
  function D(a, b2, c, d) {
    a.info(function() {
      return "XMLHTTP TEXT (" + b2 + "): " + Jb(a, c) + (d ? " " + d : "");
    });
  }
  function Kb(a, b2) {
    a.info(function() {
      return "TIMEOUT: " + b2;
    });
  }
  Gb.prototype.info = function() {
  };
  function Jb(a, b2) {
    if (!a.g)
      return b2;
    if (!b2)
      return null;
    try {
      var c = JSON.parse(b2);
      if (c) {
        for (a = 0; a < c.length; a++)
          if (Array.isArray(c[a])) {
            var d = c[a];
            if (!(2 > d.length)) {
              var e = d[1];
              if (Array.isArray(e) && !(1 > e.length)) {
                var f = e[0];
                if ("noop" != f && "stop" != f && "close" != f)
                  for (var h = 1; h < e.length; h++)
                    e[h] = "";
              }
            }
          }
      }
      return jb(c);
    } catch (n) {
      return b2;
    }
  }
  var E = {};
  var Lb = null;
  function Mb() {
    return Lb = Lb || new B();
  }
  E.Ta = "serverreachability";
  function Nb(a) {
    w.call(this, E.Ta, a);
  }
  r(Nb, w);
  function Ob(a) {
    const b2 = Mb();
    C(b2, new Nb(b2));
  }
  E.STAT_EVENT = "statevent";
  function Pb(a, b2) {
    w.call(this, E.STAT_EVENT, a);
    this.stat = b2;
  }
  r(Pb, w);
  function F(a) {
    const b2 = Mb();
    C(b2, new Pb(b2, a));
  }
  E.Ua = "timingevent";
  function Qb(a, b2) {
    w.call(this, E.Ua, a);
    this.size = b2;
  }
  r(Qb, w);
  function Rb(a, b2) {
    if ("function" !== typeof a)
      throw Error("Fn must not be null and must be a function");
    return l.setTimeout(function() {
      a();
    }, b2);
  }
  var Sb = { NO_ERROR: 0, rb: 1, Eb: 2, Db: 3, yb: 4, Cb: 5, Fb: 6, Qa: 7, TIMEOUT: 8, Ib: 9 };
  var Tb = { wb: "complete", Sb: "success", Ra: "error", Qa: "abort", Kb: "ready", Lb: "readystatechange", TIMEOUT: "timeout", Gb: "incrementaldata", Jb: "progress", zb: "downloadprogress", $b: "uploadprogress" };
  function Ub() {
  }
  Ub.prototype.h = null;
  function Vb(a) {
    return a.h || (a.h = a.i());
  }
  function Wb() {
  }
  var Xb = { OPEN: "a", vb: "b", Ra: "c", Hb: "d" };
  function Yb() {
    w.call(this, "d");
  }
  r(Yb, w);
  function Zb() {
    w.call(this, "c");
  }
  r(Zb, w);
  var $b;
  function ac() {
  }
  r(ac, Ub);
  ac.prototype.g = function() {
    return new XMLHttpRequest();
  };
  ac.prototype.i = function() {
    return {};
  };
  $b = new ac();
  function bc(a, b2, c, d) {
    this.l = a;
    this.j = b2;
    this.m = c;
    this.W = d || 1;
    this.U = new Bb(this);
    this.P = cc;
    a = va ? 125 : void 0;
    this.V = new wb(a);
    this.I = null;
    this.i = false;
    this.u = this.B = this.A = this.L = this.G = this.Y = this.C = null;
    this.F = [];
    this.g = null;
    this.o = 0;
    this.s = this.v = null;
    this.ca = -1;
    this.J = false;
    this.O = 0;
    this.M = null;
    this.ba = this.K = this.aa = this.S = false;
    this.h = new dc();
  }
  function dc() {
    this.i = null;
    this.g = "";
    this.h = false;
  }
  var cc = 45e3;
  var ec = {};
  var fc = {};
  k = bc.prototype;
  k.setTimeout = function(a) {
    this.P = a;
  };
  function gc(a, b2, c) {
    a.L = 1;
    a.A = hc(G(b2));
    a.u = c;
    a.S = true;
    ic(a, null);
  }
  function ic(a, b2) {
    a.G = Date.now();
    jc(a);
    a.B = G(a.A);
    var c = a.B, d = a.W;
    Array.isArray(d) || (d = [String(d)]);
    kc(c.i, "t", d);
    a.o = 0;
    c = a.l.J;
    a.h = new dc();
    a.g = lc(a.l, c ? b2 : null, !a.u);
    0 < a.O && (a.M = new Ab(q(a.Pa, a, a.g), a.O));
    Eb(a.U, a.g, "readystatechange", a.nb);
    b2 = a.I ? Pa(a.I) : {};
    a.u ? (a.v || (a.v = "POST"), b2["Content-Type"] = "application/x-www-form-urlencoded", a.g.ha(a.B, a.v, a.u, b2)) : (a.v = "GET", a.g.ha(a.B, a.v, null, b2));
    Ob();
    Hb(a.j, a.v, a.B, a.m, a.W, a.u);
  }
  k.nb = function(a) {
    a = a.target;
    const b2 = this.M;
    b2 && 3 == H(a) ? b2.l() : this.Pa(a);
  };
  k.Pa = function(a) {
    try {
      if (a == this.g)
        a: {
          const u = H(this.g);
          var b2 = this.g.Ia();
          const L = this.g.da();
          if (!(3 > u) && (3 != u || va || this.g && (this.h.h || this.g.ja() || mc(this.g)))) {
            this.J || 4 != u || 7 == b2 || (8 == b2 || 0 >= L ? Ob(3) : Ob(2));
            nc(this);
            var c = this.g.da();
            this.ca = c;
            b:
              if (oc(this)) {
                var d = mc(this.g);
                a = "";
                var e = d.length, f = 4 == H(this.g);
                if (!this.h.i) {
                  if ("undefined" === typeof TextDecoder) {
                    I(this);
                    pc(this);
                    var h = "";
                    break b;
                  }
                  this.h.i = new l.TextDecoder();
                }
                for (b2 = 0; b2 < e; b2++)
                  this.h.h = true, a += this.h.i.decode(d[b2], { stream: f && b2 == e - 1 });
                d.length = 0;
                this.h.g += a;
                this.o = 0;
                h = this.h.g;
              } else
                h = this.g.ja();
            this.i = 200 == c;
            Ib(this.j, this.v, this.B, this.m, this.W, u, c);
            if (this.i) {
              if (this.aa && !this.K) {
                b: {
                  if (this.g) {
                    var n, t = this.g;
                    if ((n = t.g ? t.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !x(n)) {
                      var m = n;
                      break b;
                    }
                  }
                  m = null;
                }
                if (c = m)
                  D(this.j, this.m, c, "Initial handshake response via X-HTTP-Initial-Response"), this.K = true, qc(this, c);
                else {
                  this.i = false;
                  this.s = 3;
                  F(12);
                  I(this);
                  pc(this);
                  break a;
                }
              }
              this.S ? (rc(this, u, h), va && this.i && 3 == u && (Eb(this.U, this.V, "tick", this.mb), this.V.start())) : (D(this.j, this.m, h, null), qc(this, h));
              4 == u && I(this);
              this.i && !this.J && (4 == u ? sc(this.l, this) : (this.i = false, jc(this)));
            } else
              tc(this.g), 400 == c && 0 < h.indexOf("Unknown SID") ? (this.s = 3, F(12)) : (this.s = 0, F(13)), I(this), pc(this);
          }
        }
    } catch (u) {
    } finally {
    }
  };
  function oc(a) {
    return a.g ? "GET" == a.v && 2 != a.L && a.l.Ha : false;
  }
  function rc(a, b2, c) {
    let d = true, e;
    for (; !a.J && a.o < c.length; )
      if (e = uc(a, c), e == fc) {
        4 == b2 && (a.s = 4, F(14), d = false);
        D(a.j, a.m, null, "[Incomplete Response]");
        break;
      } else if (e == ec) {
        a.s = 4;
        F(15);
        D(a.j, a.m, c, "[Invalid Chunk]");
        d = false;
        break;
      } else
        D(a.j, a.m, e, null), qc(a, e);
    oc(a) && 0 != a.o && (a.h.g = a.h.g.slice(a.o), a.o = 0);
    4 != b2 || 0 != c.length || a.h.h || (a.s = 1, F(16), d = false);
    a.i = a.i && d;
    d ? 0 < c.length && !a.ba && (a.ba = true, b2 = a.l, b2.g == a && b2.ca && !b2.M && (b2.l.info("Great, no buffering proxy detected. Bytes received: " + c.length), vc(b2), b2.M = true, F(11))) : (D(
      a.j,
      a.m,
      c,
      "[Invalid Chunked Response]"
    ), I(a), pc(a));
  }
  k.mb = function() {
    if (this.g) {
      var a = H(this.g), b2 = this.g.ja();
      this.o < b2.length && (nc(this), rc(this, a, b2), this.i && 4 != a && jc(this));
    }
  };
  function uc(a, b2) {
    var c = a.o, d = b2.indexOf("\n", c);
    if (-1 == d)
      return fc;
    c = Number(b2.substring(c, d));
    if (isNaN(c))
      return ec;
    d += 1;
    if (d + c > b2.length)
      return fc;
    b2 = b2.slice(d, d + c);
    a.o = d + c;
    return b2;
  }
  k.cancel = function() {
    this.J = true;
    I(this);
  };
  function jc(a) {
    a.Y = Date.now() + a.P;
    wc(a, a.P);
  }
  function wc(a, b2) {
    if (null != a.C)
      throw Error("WatchDog timer not null");
    a.C = Rb(q(a.lb, a), b2);
  }
  function nc(a) {
    a.C && (l.clearTimeout(a.C), a.C = null);
  }
  k.lb = function() {
    this.C = null;
    const a = Date.now();
    0 <= a - this.Y ? (Kb(this.j, this.B), 2 != this.L && (Ob(), F(17)), I(this), this.s = 2, pc(this)) : wc(this, this.Y - a);
  };
  function pc(a) {
    0 == a.l.H || a.J || sc(a.l, a);
  }
  function I(a) {
    nc(a);
    var b2 = a.M;
    b2 && "function" == typeof b2.sa && b2.sa();
    a.M = null;
    xb(a.V);
    Fb(a.U);
    a.g && (b2 = a.g, a.g = null, b2.abort(), b2.sa());
  }
  function qc(a, b2) {
    try {
      var c = a.l;
      if (0 != c.H && (c.g == a || xc(c.i, a))) {
        if (!a.K && xc(c.i, a) && 3 == c.H) {
          try {
            var d = c.Ja.g.parse(b2);
          } catch (m) {
            d = null;
          }
          if (Array.isArray(d) && 3 == d.length) {
            var e = d;
            if (0 == e[0])
              a: {
                if (!c.u) {
                  if (c.g)
                    if (c.g.G + 3e3 < a.G)
                      yc(c), zc(c);
                    else
                      break a;
                  Ac(c);
                  F(18);
                }
              }
            else
              c.Fa = e[1], 0 < c.Fa - c.V && 37500 > e[2] && c.G && 0 == c.A && !c.v && (c.v = Rb(q(c.ib, c), 6e3));
            if (1 >= Bc(c.i) && c.oa) {
              try {
                c.oa();
              } catch (m) {
              }
              c.oa = void 0;
            }
          } else
            J(c, 11);
        } else if ((a.K || c.g == a) && yc(c), !x(b2))
          for (e = c.Ja.g.parse(b2), b2 = 0; b2 < e.length; b2++) {
            let m = e[b2];
            c.V = m[0];
            m = m[1];
            if (2 == c.H)
              if ("c" == m[0]) {
                c.K = m[1];
                c.pa = m[2];
                const u = m[3];
                null != u && (c.ra = u, c.l.info("VER=" + c.ra));
                const L = m[4];
                null != L && (c.Ga = L, c.l.info("SVER=" + c.Ga));
                const Ka = m[5];
                null != Ka && "number" === typeof Ka && 0 < Ka && (d = 1.5 * Ka, c.L = d, c.l.info("backChannelRequestTimeoutMs_=" + d));
                d = c;
                const la = a.g;
                if (la) {
                  const La = la.g ? la.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                  if (La) {
                    var f = d.i;
                    f.g || -1 == La.indexOf("spdy") && -1 == La.indexOf("quic") && -1 == La.indexOf("h2") || (f.j = f.l, f.g = /* @__PURE__ */ new Set(), f.h && (Cc(f, f.h), f.h = null));
                  }
                  if (d.F) {
                    const Db = la.g ? la.g.getResponseHeader("X-HTTP-Session-Id") : null;
                    Db && (d.Da = Db, K(d.I, d.F, Db));
                  }
                }
                c.H = 3;
                c.h && c.h.Ba();
                c.ca && (c.S = Date.now() - a.G, c.l.info("Handshake RTT: " + c.S + "ms"));
                d = c;
                var h = a;
                d.wa = Dc(d, d.J ? d.pa : null, d.Y);
                if (h.K) {
                  Ec(d.i, h);
                  var n = h, t = d.L;
                  t && n.setTimeout(t);
                  n.C && (nc(n), jc(n));
                  d.g = h;
                } else
                  Fc(d);
                0 < c.j.length && Gc(c);
              } else
                "stop" != m[0] && "close" != m[0] || J(c, 7);
            else
              3 == c.H && ("stop" == m[0] || "close" == m[0] ? "stop" == m[0] ? J(c, 7) : Hc(c) : "noop" != m[0] && c.h && c.h.Aa(m), c.A = 0);
          }
      }
      Ob(4);
    } catch (m) {
    }
  }
  function Ic(a) {
    if (a.Z && "function" == typeof a.Z)
      return a.Z();
    if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set)
      return Array.from(a.values());
    if ("string" === typeof a)
      return a.split("");
    if (aa(a)) {
      for (var b2 = [], c = a.length, d = 0; d < c; d++)
        b2.push(a[d]);
      return b2;
    }
    b2 = [];
    c = 0;
    for (d in a)
      b2[c++] = a[d];
    return b2;
  }
  function Jc(a) {
    if (a.ta && "function" == typeof a.ta)
      return a.ta();
    if (!a.Z || "function" != typeof a.Z) {
      if ("undefined" !== typeof Map && a instanceof Map)
        return Array.from(a.keys());
      if (!("undefined" !== typeof Set && a instanceof Set)) {
        if (aa(a) || "string" === typeof a) {
          var b2 = [];
          a = a.length;
          for (var c = 0; c < a; c++)
            b2.push(c);
          return b2;
        }
        b2 = [];
        c = 0;
        for (const d in a)
          b2[c++] = d;
        return b2;
      }
    }
  }
  function Kc(a, b2) {
    if (a.forEach && "function" == typeof a.forEach)
      a.forEach(b2, void 0);
    else if (aa(a) || "string" === typeof a)
      Array.prototype.forEach.call(a, b2, void 0);
    else
      for (var c = Jc(a), d = Ic(a), e = d.length, f = 0; f < e; f++)
        b2.call(void 0, d[f], c && c[f], a);
  }
  var Lc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
  function Mc(a, b2) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else
          f = a[c];
        b2(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  }
  function M(a) {
    this.g = this.s = this.j = "";
    this.m = null;
    this.o = this.l = "";
    this.h = false;
    if (a instanceof M) {
      this.h = a.h;
      Nc(this, a.j);
      this.s = a.s;
      this.g = a.g;
      Oc(this, a.m);
      this.l = a.l;
      var b2 = a.i;
      var c = new Pc();
      c.i = b2.i;
      b2.g && (c.g = new Map(b2.g), c.h = b2.h);
      Qc(this, c);
      this.o = a.o;
    } else
      a && (b2 = String(a).match(Lc)) ? (this.h = false, Nc(this, b2[1] || "", true), this.s = Rc(b2[2] || ""), this.g = Rc(b2[3] || "", true), Oc(this, b2[4]), this.l = Rc(b2[5] || "", true), Qc(this, b2[6] || "", true), this.o = Rc(b2[7] || "")) : (this.h = false, this.i = new Pc(null, this.h));
  }
  M.prototype.toString = function() {
    var a = [], b2 = this.j;
    b2 && a.push(Sc(b2, Tc, true), ":");
    var c = this.g;
    if (c || "file" == b2)
      a.push("//"), (b2 = this.s) && a.push(Sc(b2, Tc, true), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, null != c && a.push(":", String(c));
    if (c = this.l)
      this.g && "/" != c.charAt(0) && a.push("/"), a.push(Sc(c, "/" == c.charAt(0) ? Uc : Vc, true));
    (c = this.i.toString()) && a.push("?", c);
    (c = this.o) && a.push("#", Sc(c, Wc));
    return a.join("");
  };
  function G(a) {
    return new M(a);
  }
  function Nc(a, b2, c) {
    a.j = c ? Rc(b2, true) : b2;
    a.j && (a.j = a.j.replace(/:$/, ""));
  }
  function Oc(a, b2) {
    if (b2) {
      b2 = Number(b2);
      if (isNaN(b2) || 0 > b2)
        throw Error("Bad port number " + b2);
      a.m = b2;
    } else
      a.m = null;
  }
  function Qc(a, b2, c) {
    b2 instanceof Pc ? (a.i = b2, Xc(a.i, a.h)) : (c || (b2 = Sc(b2, Yc)), a.i = new Pc(b2, a.h));
  }
  function K(a, b2, c) {
    a.i.set(b2, c);
  }
  function hc(a) {
    K(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
    return a;
  }
  function Rc(a, b2) {
    return a ? b2 ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  }
  function Sc(a, b2, c) {
    return "string" === typeof a ? (a = encodeURI(a).replace(b2, Zc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  }
  function Zc(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  }
  var Tc = /[#\/\?@]/g;
  var Vc = /[#\?:]/g;
  var Uc = /[#\?]/g;
  var Yc = /[#\?@]/g;
  var Wc = /#/g;
  function Pc(a, b2) {
    this.h = this.g = null;
    this.i = a || null;
    this.j = !!b2;
  }
  function N(a) {
    a.g || (a.g = /* @__PURE__ */ new Map(), a.h = 0, a.i && Mc(a.i, function(b2, c) {
      a.add(decodeURIComponent(b2.replace(/\+/g, " ")), c);
    }));
  }
  k = Pc.prototype;
  k.add = function(a, b2) {
    N(this);
    this.i = null;
    a = O(this, a);
    var c = this.g.get(a);
    c || this.g.set(a, c = []);
    c.push(b2);
    this.h += 1;
    return this;
  };
  function $c(a, b2) {
    N(a);
    b2 = O(a, b2);
    a.g.has(b2) && (a.i = null, a.h -= a.g.get(b2).length, a.g.delete(b2));
  }
  function ad(a, b2) {
    N(a);
    b2 = O(a, b2);
    return a.g.has(b2);
  }
  k.forEach = function(a, b2) {
    N(this);
    this.g.forEach(function(c, d) {
      c.forEach(function(e) {
        a.call(b2, e, d, this);
      }, this);
    }, this);
  };
  k.ta = function() {
    N(this);
    const a = Array.from(this.g.values()), b2 = Array.from(this.g.keys()), c = [];
    for (let d = 0; d < b2.length; d++) {
      const e = a[d];
      for (let f = 0; f < e.length; f++)
        c.push(b2[d]);
    }
    return c;
  };
  k.Z = function(a) {
    N(this);
    let b2 = [];
    if ("string" === typeof a)
      ad(this, a) && (b2 = b2.concat(this.g.get(O(this, a))));
    else {
      a = Array.from(this.g.values());
      for (let c = 0; c < a.length; c++)
        b2 = b2.concat(a[c]);
    }
    return b2;
  };
  k.set = function(a, b2) {
    N(this);
    this.i = null;
    a = O(this, a);
    ad(this, a) && (this.h -= this.g.get(a).length);
    this.g.set(a, [b2]);
    this.h += 1;
    return this;
  };
  k.get = function(a, b2) {
    if (!a)
      return b2;
    a = this.Z(a);
    return 0 < a.length ? String(a[0]) : b2;
  };
  function kc(a, b2, c) {
    $c(a, b2);
    0 < c.length && (a.i = null, a.g.set(O(a, b2), ma(c)), a.h += c.length);
  }
  k.toString = function() {
    if (this.i)
      return this.i;
    if (!this.g)
      return "";
    const a = [], b2 = Array.from(this.g.keys());
    for (var c = 0; c < b2.length; c++) {
      var d = b2[c];
      const f = encodeURIComponent(String(d)), h = this.Z(d);
      for (d = 0; d < h.length; d++) {
        var e = f;
        "" !== h[d] && (e += "=" + encodeURIComponent(String(h[d])));
        a.push(e);
      }
    }
    return this.i = a.join("&");
  };
  function O(a, b2) {
    b2 = String(b2);
    a.j && (b2 = b2.toLowerCase());
    return b2;
  }
  function Xc(a, b2) {
    b2 && !a.j && (N(a), a.i = null, a.g.forEach(function(c, d) {
      var e = d.toLowerCase();
      d != e && ($c(this, d), kc(this, e, c));
    }, a));
    a.j = b2;
  }
  var bd = class {
    constructor(a, b2) {
      this.g = a;
      this.map = b2;
    }
  };
  function cd(a) {
    this.l = a || dd;
    l.PerformanceNavigationTiming ? (a = l.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(l.g && l.g.Ka && l.g.Ka() && l.g.Ka().dc);
    this.j = a ? this.l : 1;
    this.g = null;
    1 < this.j && (this.g = /* @__PURE__ */ new Set());
    this.h = null;
    this.i = [];
  }
  var dd = 10;
  function ed(a) {
    return a.h ? true : a.g ? a.g.size >= a.j : false;
  }
  function Bc(a) {
    return a.h ? 1 : a.g ? a.g.size : 0;
  }
  function xc(a, b2) {
    return a.h ? a.h == b2 : a.g ? a.g.has(b2) : false;
  }
  function Cc(a, b2) {
    a.g ? a.g.add(b2) : a.h = b2;
  }
  function Ec(a, b2) {
    a.h && a.h == b2 ? a.h = null : a.g && a.g.has(b2) && a.g.delete(b2);
  }
  cd.prototype.cancel = function() {
    this.i = fd(this);
    if (this.h)
      this.h.cancel(), this.h = null;
    else if (this.g && 0 !== this.g.size) {
      for (const a of this.g.values())
        a.cancel();
      this.g.clear();
    }
  };
  function fd(a) {
    if (null != a.h)
      return a.i.concat(a.h.F);
    if (null != a.g && 0 !== a.g.size) {
      let b2 = a.i;
      for (const c of a.g.values())
        b2 = b2.concat(c.F);
      return b2;
    }
    return ma(a.i);
  }
  var gd = class {
    stringify(a) {
      return l.JSON.stringify(a, void 0);
    }
    parse(a) {
      return l.JSON.parse(a, void 0);
    }
  };
  function hd() {
    this.g = new gd();
  }
  function id(a, b2, c) {
    const d = c || "";
    try {
      Kc(a, function(e, f) {
        let h = e;
        p(e) && (h = jb(e));
        b2.push(d + f + "=" + encodeURIComponent(h));
      });
    } catch (e) {
      throw b2.push(d + "type=" + encodeURIComponent("_badmap")), e;
    }
  }
  function jd(a, b2) {
    const c = new Gb();
    if (l.Image) {
      const d = new Image();
      d.onload = ha(kd, c, d, "TestLoadImage: loaded", true, b2);
      d.onerror = ha(kd, c, d, "TestLoadImage: error", false, b2);
      d.onabort = ha(kd, c, d, "TestLoadImage: abort", false, b2);
      d.ontimeout = ha(kd, c, d, "TestLoadImage: timeout", false, b2);
      l.setTimeout(function() {
        if (d.ontimeout)
          d.ontimeout();
      }, 1e4);
      d.src = a;
    } else
      b2(false);
  }
  function kd(a, b2, c, d, e) {
    try {
      b2.onload = null, b2.onerror = null, b2.onabort = null, b2.ontimeout = null, e(d);
    } catch (f) {
    }
  }
  function ld(a) {
    this.l = a.ec || null;
    this.j = a.ob || false;
  }
  r(ld, Ub);
  ld.prototype.g = function() {
    return new md(this.l, this.j);
  };
  ld.prototype.i = /* @__PURE__ */ function(a) {
    return function() {
      return a;
    };
  }({});
  function md(a, b2) {
    B.call(this);
    this.F = a;
    this.u = b2;
    this.m = void 0;
    this.readyState = nd;
    this.status = 0;
    this.responseType = this.responseText = this.response = this.statusText = "";
    this.onreadystatechange = null;
    this.v = new Headers();
    this.h = null;
    this.C = "GET";
    this.B = "";
    this.g = false;
    this.A = this.j = this.l = null;
  }
  r(md, B);
  var nd = 0;
  k = md.prototype;
  k.open = function(a, b2) {
    if (this.readyState != nd)
      throw this.abort(), Error("Error reopening a connection");
    this.C = a;
    this.B = b2;
    this.readyState = 1;
    od(this);
  };
  k.send = function(a) {
    if (1 != this.readyState)
      throw this.abort(), Error("need to call open() first. ");
    this.g = true;
    const b2 = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
    a && (b2.body = a);
    (this.F || l).fetch(new Request(this.B, b2)).then(this.$a.bind(this), this.ka.bind(this));
  };
  k.abort = function() {
    this.response = this.responseText = "";
    this.v = new Headers();
    this.status = 0;
    this.j && this.j.cancel("Request was aborted.").catch(() => {
    });
    1 <= this.readyState && this.g && 4 != this.readyState && (this.g = false, pd(this));
    this.readyState = nd;
  };
  k.$a = function(a) {
    if (this.g && (this.l = a, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a.headers, this.readyState = 2, od(this)), this.g && (this.readyState = 3, od(this), this.g)))
      if ("arraybuffer" === this.responseType)
        a.arrayBuffer().then(this.Ya.bind(this), this.ka.bind(this));
      else if ("undefined" !== typeof l.ReadableStream && "body" in a) {
        this.j = a.body.getReader();
        if (this.u) {
          if (this.responseType)
            throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
          this.response = [];
        } else
          this.response = this.responseText = "", this.A = new TextDecoder();
        qd(this);
      } else
        a.text().then(this.Za.bind(this), this.ka.bind(this));
  };
  function qd(a) {
    a.j.read().then(a.Xa.bind(a)).catch(a.ka.bind(a));
  }
  k.Xa = function(a) {
    if (this.g) {
      if (this.u && a.value)
        this.response.push(a.value);
      else if (!this.u) {
        var b2 = a.value ? a.value : new Uint8Array(0);
        if (b2 = this.A.decode(b2, { stream: !a.done }))
          this.response = this.responseText += b2;
      }
      a.done ? pd(this) : od(this);
      3 == this.readyState && qd(this);
    }
  };
  k.Za = function(a) {
    this.g && (this.response = this.responseText = a, pd(this));
  };
  k.Ya = function(a) {
    this.g && (this.response = a, pd(this));
  };
  k.ka = function() {
    this.g && pd(this);
  };
  function pd(a) {
    a.readyState = 4;
    a.l = null;
    a.j = null;
    a.A = null;
    od(a);
  }
  k.setRequestHeader = function(a, b2) {
    this.v.append(a, b2);
  };
  k.getResponseHeader = function(a) {
    return this.h ? this.h.get(a.toLowerCase()) || "" : "";
  };
  k.getAllResponseHeaders = function() {
    if (!this.h)
      return "";
    const a = [], b2 = this.h.entries();
    for (var c = b2.next(); !c.done; )
      c = c.value, a.push(c[0] + ": " + c[1]), c = b2.next();
    return a.join("\r\n");
  };
  function od(a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  }
  Object.defineProperty(md.prototype, "withCredentials", { get: function() {
    return "include" === this.m;
  }, set: function(a) {
    this.m = a ? "include" : "same-origin";
  } });
  var rd = l.JSON.parse;
  function P(a) {
    B.call(this);
    this.headers = /* @__PURE__ */ new Map();
    this.u = a || null;
    this.h = false;
    this.C = this.g = null;
    this.I = "";
    this.m = 0;
    this.j = "";
    this.l = this.G = this.v = this.F = false;
    this.B = 0;
    this.A = null;
    this.K = sd;
    this.L = this.M = false;
  }
  r(P, B);
  var sd = "";
  var td = /^https?$/i;
  var ud = ["POST", "PUT"];
  k = P.prototype;
  k.Oa = function(a) {
    this.M = a;
  };
  k.ha = function(a, b2, c, d) {
    if (this.g)
      throw Error("[goog.net.XhrIo] Object is active with another request=" + this.I + "; newUri=" + a);
    b2 = b2 ? b2.toUpperCase() : "GET";
    this.I = a;
    this.j = "";
    this.m = 0;
    this.F = false;
    this.h = true;
    this.g = this.u ? this.u.g() : $b.g();
    this.C = this.u ? Vb(this.u) : Vb($b);
    this.g.onreadystatechange = q(this.La, this);
    try {
      this.G = true, this.g.open(b2, String(a), true), this.G = false;
    } catch (f) {
      vd(this, f);
      return;
    }
    a = c || "";
    c = new Map(this.headers);
    if (d)
      if (Object.getPrototypeOf(d) === Object.prototype)
        for (var e in d)
          c.set(e, d[e]);
      else if ("function" === typeof d.keys && "function" === typeof d.get)
        for (const f of d.keys())
          c.set(f, d.get(f));
      else
        throw Error("Unknown input type for opt_headers: " + String(d));
    d = Array.from(c.keys()).find((f) => "content-type" == f.toLowerCase());
    e = l.FormData && a instanceof l.FormData;
    !(0 <= ka(ud, b2)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    for (const [f, h] of c)
      this.g.setRequestHeader(f, h);
    this.K && (this.g.responseType = this.K);
    "withCredentials" in this.g && this.g.withCredentials !== this.M && (this.g.withCredentials = this.M);
    try {
      wd(this), 0 < this.B && ((this.L = xd(this.g)) ? (this.g.timeout = this.B, this.g.ontimeout = q(this.ua, this)) : this.A = yb(this.ua, this.B, this)), this.v = true, this.g.send(a), this.v = false;
    } catch (f) {
      vd(this, f);
    }
  };
  function xd(a) {
    return z && "number" === typeof a.timeout && void 0 !== a.ontimeout;
  }
  k.ua = function() {
    "undefined" != typeof goog && this.g && (this.j = "Timed out after " + this.B + "ms, aborting", this.m = 8, C(this, "timeout"), this.abort(8));
  };
  function vd(a, b2) {
    a.h = false;
    a.g && (a.l = true, a.g.abort(), a.l = false);
    a.j = b2;
    a.m = 5;
    yd(a);
    zd(a);
  }
  function yd(a) {
    a.F || (a.F = true, C(a, "complete"), C(a, "error"));
  }
  k.abort = function(a) {
    this.g && this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false, this.m = a || 7, C(this, "complete"), C(this, "abort"), zd(this));
  };
  k.N = function() {
    this.g && (this.h && (this.h = false, this.l = true, this.g.abort(), this.l = false), zd(this, true));
    P.$.N.call(this);
  };
  k.La = function() {
    this.s || (this.G || this.v || this.l ? Ad(this) : this.kb());
  };
  k.kb = function() {
    Ad(this);
  };
  function Ad(a) {
    if (a.h && "undefined" != typeof goog && (!a.C[1] || 4 != H(a) || 2 != a.da())) {
      if (a.v && 4 == H(a))
        yb(a.La, 0, a);
      else if (C(a, "readystatechange"), 4 == H(a)) {
        a.h = false;
        try {
          const h = a.da();
          a:
            switch (h) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var b2 = true;
                break a;
              default:
                b2 = false;
            }
          var c;
          if (!(c = b2)) {
            var d;
            if (d = 0 === h) {
              var e = String(a.I).match(Lc)[1] || null;
              !e && l.self && l.self.location && (e = l.self.location.protocol.slice(0, -1));
              d = !td.test(e ? e.toLowerCase() : "");
            }
            c = d;
          }
          if (c)
            C(a, "complete"), C(a, "success");
          else {
            a.m = 6;
            try {
              var f = 2 < H(a) ? a.g.statusText : "";
            } catch (n) {
              f = "";
            }
            a.j = f + " [" + a.da() + "]";
            yd(a);
          }
        } finally {
          zd(a);
        }
      }
    }
  }
  function zd(a, b2) {
    if (a.g) {
      wd(a);
      const c = a.g, d = a.C[0] ? () => {
      } : null;
      a.g = null;
      a.C = null;
      b2 || C(a, "ready");
      try {
        c.onreadystatechange = d;
      } catch (e) {
      }
    }
  }
  function wd(a) {
    a.g && a.L && (a.g.ontimeout = null);
    a.A && (l.clearTimeout(a.A), a.A = null);
  }
  k.isActive = function() {
    return !!this.g;
  };
  function H(a) {
    return a.g ? a.g.readyState : 0;
  }
  k.da = function() {
    try {
      return 2 < H(this) ? this.g.status : -1;
    } catch (a) {
      return -1;
    }
  };
  k.ja = function() {
    try {
      return this.g ? this.g.responseText : "";
    } catch (a) {
      return "";
    }
  };
  k.Wa = function(a) {
    if (this.g) {
      var b2 = this.g.responseText;
      a && 0 == b2.indexOf(a) && (b2 = b2.substring(a.length));
      return rd(b2);
    }
  };
  function mc(a) {
    try {
      if (!a.g)
        return null;
      if ("response" in a.g)
        return a.g.response;
      switch (a.K) {
        case sd:
        case "text":
          return a.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in a.g)
            return a.g.mozResponseArrayBuffer;
      }
      return null;
    } catch (b2) {
      return null;
    }
  }
  function tc(a) {
    const b2 = {};
    a = (a.g && 2 <= H(a) ? a.g.getAllResponseHeaders() || "" : "").split("\r\n");
    for (let d = 0; d < a.length; d++) {
      if (x(a[d]))
        continue;
      var c = qb(a[d]);
      const e = c[0];
      c = c[1];
      if ("string" !== typeof c)
        continue;
      c = c.trim();
      const f = b2[e] || [];
      b2[e] = f;
      f.push(c);
    }
    Oa(b2, function(d) {
      return d.join(", ");
    });
  }
  k.Ia = function() {
    return this.m;
  };
  k.Sa = function() {
    return "string" === typeof this.j ? this.j : String(this.j);
  };
  function Bd(a) {
    let b2 = "";
    Na(a, function(c, d) {
      b2 += d;
      b2 += ":";
      b2 += c;
      b2 += "\r\n";
    });
    return b2;
  }
  function Cd(a, b2, c) {
    a: {
      for (d in c) {
        var d = false;
        break a;
      }
      d = true;
    }
    d || (c = Bd(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : K(a, b2, c));
  }
  function Dd(a, b2, c) {
    return c && c.internalChannelParams ? c.internalChannelParams[a] || b2 : b2;
  }
  function Ed(a) {
    this.Ga = 0;
    this.j = [];
    this.l = new Gb();
    this.pa = this.wa = this.I = this.Y = this.g = this.Da = this.F = this.na = this.o = this.U = this.s = null;
    this.fb = this.W = 0;
    this.cb = Dd("failFast", false, a);
    this.G = this.v = this.u = this.m = this.h = null;
    this.aa = true;
    this.Fa = this.V = -1;
    this.ba = this.A = this.C = 0;
    this.ab = Dd("baseRetryDelayMs", 5e3, a);
    this.hb = Dd("retryDelaySeedMs", 1e4, a);
    this.eb = Dd("forwardChannelMaxRetries", 2, a);
    this.xa = Dd("forwardChannelRequestTimeoutMs", 2e4, a);
    this.va = a && a.xmlHttpFactory || void 0;
    this.Ha = a && a.useFetchStreams || false;
    this.L = void 0;
    this.J = a && a.supportsCrossDomainXhr || false;
    this.K = "";
    this.i = new cd(a && a.concurrentRequestLimit);
    this.Ja = new hd();
    this.P = a && a.fastHandshake || false;
    this.O = a && a.encodeInitMessageHeaders || false;
    this.P && this.O && (this.O = false);
    this.bb = a && a.bc || false;
    a && a.Ea && this.l.Ea();
    a && a.forceLongPolling && (this.aa = false);
    this.ca = !this.P && this.aa && a && a.detectBufferingProxy || false;
    this.qa = void 0;
    a && a.longPollingTimeout && 0 < a.longPollingTimeout && (this.qa = a.longPollingTimeout);
    this.oa = void 0;
    this.S = 0;
    this.M = false;
    this.ma = this.B = null;
  }
  k = Ed.prototype;
  k.ra = 8;
  k.H = 1;
  function Hc(a) {
    Fd(a);
    if (3 == a.H) {
      var b2 = a.W++, c = G(a.I);
      K(c, "SID", a.K);
      K(c, "RID", b2);
      K(c, "TYPE", "terminate");
      Gd(a, c);
      b2 = new bc(a, a.l, b2);
      b2.L = 2;
      b2.A = hc(G(c));
      c = false;
      if (l.navigator && l.navigator.sendBeacon)
        try {
          c = l.navigator.sendBeacon(b2.A.toString(), "");
        } catch (d) {
        }
      !c && l.Image && (new Image().src = b2.A, c = true);
      c || (b2.g = lc(b2.l, null), b2.g.ha(b2.A));
      b2.G = Date.now();
      jc(b2);
    }
    Hd(a);
  }
  function zc(a) {
    a.g && (vc(a), a.g.cancel(), a.g = null);
  }
  function Fd(a) {
    zc(a);
    a.u && (l.clearTimeout(a.u), a.u = null);
    yc(a);
    a.i.cancel();
    a.m && ("number" === typeof a.m && l.clearTimeout(a.m), a.m = null);
  }
  function Gc(a) {
    if (!ed(a.i) && !a.m) {
      a.m = true;
      var b2 = a.Na;
      sb || vb();
      tb || (sb(), tb = true);
      mb.add(b2, a);
      a.C = 0;
    }
  }
  function Id(a, b2) {
    if (Bc(a.i) >= a.i.j - (a.m ? 1 : 0))
      return false;
    if (a.m)
      return a.j = b2.F.concat(a.j), true;
    if (1 == a.H || 2 == a.H || a.C >= (a.cb ? 0 : a.eb))
      return false;
    a.m = Rb(q(a.Na, a, b2), Jd(a, a.C));
    a.C++;
    return true;
  }
  k.Na = function(a) {
    if (this.m)
      if (this.m = null, 1 == this.H) {
        if (!a) {
          this.W = Math.floor(1e5 * Math.random());
          a = this.W++;
          const e = new bc(this, this.l, a);
          let f = this.s;
          this.U && (f ? (f = Pa(f), Ra(f, this.U)) : f = this.U);
          null !== this.o || this.O || (e.I = f, f = null);
          if (this.P)
            a: {
              var b2 = 0;
              for (var c = 0; c < this.j.length; c++) {
                b: {
                  var d = this.j[c];
                  if ("__data__" in d.map && (d = d.map.__data__, "string" === typeof d)) {
                    d = d.length;
                    break b;
                  }
                  d = void 0;
                }
                if (void 0 === d)
                  break;
                b2 += d;
                if (4096 < b2) {
                  b2 = c;
                  break a;
                }
                if (4096 === b2 || c === this.j.length - 1) {
                  b2 = c + 1;
                  break a;
                }
              }
              b2 = 1e3;
            }
          else
            b2 = 1e3;
          b2 = Kd(this, e, b2);
          c = G(this.I);
          K(c, "RID", a);
          K(c, "CVER", 22);
          this.F && K(c, "X-HTTP-Session-Id", this.F);
          Gd(this, c);
          f && (this.O ? b2 = "headers=" + encodeURIComponent(String(Bd(f))) + "&" + b2 : this.o && Cd(c, this.o, f));
          Cc(this.i, e);
          this.bb && K(c, "TYPE", "init");
          this.P ? (K(c, "$req", b2), K(c, "SID", "null"), e.aa = true, gc(e, c, null)) : gc(e, c, b2);
          this.H = 2;
        }
      } else
        3 == this.H && (a ? Ld(this, a) : 0 == this.j.length || ed(this.i) || Ld(this));
  };
  function Ld(a, b2) {
    var c;
    b2 ? c = b2.m : c = a.W++;
    const d = G(a.I);
    K(d, "SID", a.K);
    K(d, "RID", c);
    K(d, "AID", a.V);
    Gd(a, d);
    a.o && a.s && Cd(d, a.o, a.s);
    c = new bc(a, a.l, c, a.C + 1);
    null === a.o && (c.I = a.s);
    b2 && (a.j = b2.F.concat(a.j));
    b2 = Kd(a, c, 1e3);
    c.setTimeout(Math.round(0.5 * a.xa) + Math.round(0.5 * a.xa * Math.random()));
    Cc(a.i, c);
    gc(c, d, b2);
  }
  function Gd(a, b2) {
    a.na && Na(a.na, function(c, d) {
      K(b2, d, c);
    });
    a.h && Kc({}, function(c, d) {
      K(b2, d, c);
    });
  }
  function Kd(a, b2, c) {
    c = Math.min(a.j.length, c);
    var d = a.h ? q(a.h.Va, a.h, a) : null;
    a: {
      var e = a.j;
      let f = -1;
      for (; ; ) {
        const h = ["count=" + c];
        -1 == f ? 0 < c ? (f = e[0].g, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
        let n = true;
        for (let t = 0; t < c; t++) {
          let m = e[t].g;
          const u = e[t].map;
          m -= f;
          if (0 > m)
            f = Math.max(0, e[t].g - 100), n = false;
          else
            try {
              id(u, h, "req" + m + "_");
            } catch (L) {
              d && d(u);
            }
        }
        if (n) {
          d = h.join("&");
          break a;
        }
      }
    }
    a = a.j.splice(0, c);
    b2.F = a;
    return d;
  }
  function Fc(a) {
    if (!a.g && !a.u) {
      a.ba = 1;
      var b2 = a.Ma;
      sb || vb();
      tb || (sb(), tb = true);
      mb.add(b2, a);
      a.A = 0;
    }
  }
  function Ac(a) {
    if (a.g || a.u || 3 <= a.A)
      return false;
    a.ba++;
    a.u = Rb(q(a.Ma, a), Jd(a, a.A));
    a.A++;
    return true;
  }
  k.Ma = function() {
    this.u = null;
    Md(this);
    if (this.ca && !(this.M || null == this.g || 0 >= this.S)) {
      var a = 2 * this.S;
      this.l.info("BP detection timer enabled: " + a);
      this.B = Rb(q(this.jb, this), a);
    }
  };
  k.jb = function() {
    this.B && (this.B = null, this.l.info("BP detection timeout reached."), this.l.info("Buffering proxy detected and switch to long-polling!"), this.G = false, this.M = true, F(10), zc(this), Md(this));
  };
  function vc(a) {
    null != a.B && (l.clearTimeout(a.B), a.B = null);
  }
  function Md(a) {
    a.g = new bc(a, a.l, "rpc", a.ba);
    null === a.o && (a.g.I = a.s);
    a.g.O = 0;
    var b2 = G(a.wa);
    K(b2, "RID", "rpc");
    K(b2, "SID", a.K);
    K(b2, "AID", a.V);
    K(b2, "CI", a.G ? "0" : "1");
    !a.G && a.qa && K(b2, "TO", a.qa);
    K(b2, "TYPE", "xmlhttp");
    Gd(a, b2);
    a.o && a.s && Cd(b2, a.o, a.s);
    a.L && a.g.setTimeout(a.L);
    var c = a.g;
    a = a.pa;
    c.L = 1;
    c.A = hc(G(b2));
    c.u = null;
    c.S = true;
    ic(c, a);
  }
  k.ib = function() {
    null != this.v && (this.v = null, zc(this), Ac(this), F(19));
  };
  function yc(a) {
    null != a.v && (l.clearTimeout(a.v), a.v = null);
  }
  function sc(a, b2) {
    var c = null;
    if (a.g == b2) {
      yc(a);
      vc(a);
      a.g = null;
      var d = 2;
    } else if (xc(a.i, b2))
      c = b2.F, Ec(a.i, b2), d = 1;
    else
      return;
    if (0 != a.H) {
      if (b2.i)
        if (1 == d) {
          c = b2.u ? b2.u.length : 0;
          b2 = Date.now() - b2.G;
          var e = a.C;
          d = Mb();
          C(d, new Qb(d, c));
          Gc(a);
        } else
          Fc(a);
      else if (e = b2.s, 3 == e || 0 == e && 0 < b2.ca || !(1 == d && Id(a, b2) || 2 == d && Ac(a)))
        switch (c && 0 < c.length && (b2 = a.i, b2.i = b2.i.concat(c)), e) {
          case 1:
            J(a, 5);
            break;
          case 4:
            J(a, 10);
            break;
          case 3:
            J(a, 6);
            break;
          default:
            J(a, 2);
        }
    }
  }
  function Jd(a, b2) {
    let c = a.ab + Math.floor(Math.random() * a.hb);
    a.isActive() || (c *= 2);
    return c * b2;
  }
  function J(a, b2) {
    a.l.info("Error code " + b2);
    if (2 == b2) {
      var c = null;
      a.h && (c = null);
      var d = q(a.pb, a);
      c || (c = new M("//www.google.com/images/cleardot.gif"), l.location && "http" == l.location.protocol || Nc(c, "https"), hc(c));
      jd(c.toString(), d);
    } else
      F(2);
    a.H = 0;
    a.h && a.h.za(b2);
    Hd(a);
    Fd(a);
  }
  k.pb = function(a) {
    a ? (this.l.info("Successfully pinged google.com"), F(2)) : (this.l.info("Failed to ping google.com"), F(1));
  };
  function Hd(a) {
    a.H = 0;
    a.ma = [];
    if (a.h) {
      const b2 = fd(a.i);
      if (0 != b2.length || 0 != a.j.length)
        na(a.ma, b2), na(a.ma, a.j), a.i.i.length = 0, ma(a.j), a.j.length = 0;
      a.h.ya();
    }
  }
  function Dc(a, b2, c) {
    var d = c instanceof M ? G(c) : new M(c);
    if ("" != d.g)
      b2 && (d.g = b2 + "." + d.g), Oc(d, d.m);
    else {
      var e = l.location;
      d = e.protocol;
      b2 = b2 ? b2 + "." + e.hostname : e.hostname;
      e = +e.port;
      var f = new M(null);
      d && Nc(f, d);
      b2 && (f.g = b2);
      e && Oc(f, e);
      c && (f.l = c);
      d = f;
    }
    c = a.F;
    b2 = a.Da;
    c && b2 && K(d, c, b2);
    K(d, "VER", a.ra);
    Gd(a, d);
    return d;
  }
  function lc(a, b2, c) {
    if (b2 && !a.J)
      throw Error("Can't create secondary domain capable XhrIo object.");
    b2 = a.Ha && !a.va ? new P(new ld({ ob: c })) : new P(a.va);
    b2.Oa(a.J);
    return b2;
  }
  k.isActive = function() {
    return !!this.h && this.h.isActive(this);
  };
  function Nd() {
  }
  k = Nd.prototype;
  k.Ba = function() {
  };
  k.Aa = function() {
  };
  k.za = function() {
  };
  k.ya = function() {
  };
  k.isActive = function() {
    return true;
  };
  k.Va = function() {
  };
  function Od() {
    if (z && !(10 <= Number(Fa)))
      throw Error("Environmental error: no available transport.");
  }
  Od.prototype.g = function(a, b2) {
    return new Q(a, b2);
  };
  function Q(a, b2) {
    B.call(this);
    this.g = new Ed(b2);
    this.l = a;
    this.h = b2 && b2.messageUrlParams || null;
    a = b2 && b2.messageHeaders || null;
    b2 && b2.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
    this.g.s = a;
    a = b2 && b2.initMessageHeaders || null;
    b2 && b2.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b2.messageContentType : a = { "X-WebChannel-Content-Type": b2.messageContentType });
    b2 && b2.Ca && (a ? a["X-WebChannel-Client-Profile"] = b2.Ca : a = { "X-WebChannel-Client-Profile": b2.Ca });
    this.g.U = a;
    (a = b2 && b2.cc) && !x(a) && (this.g.o = a);
    this.A = b2 && b2.supportsCrossDomainXhr || false;
    this.v = b2 && b2.sendRawJson || false;
    (b2 = b2 && b2.httpSessionIdParam) && !x(b2) && (this.g.F = b2, a = this.h, null !== a && b2 in a && (a = this.h, b2 in a && delete a[b2]));
    this.j = new R(this);
  }
  r(Q, B);
  Q.prototype.m = function() {
    this.g.h = this.j;
    this.A && (this.g.J = true);
    var a = this.g, b2 = this.l, c = this.h || void 0;
    F(0);
    a.Y = b2;
    a.na = c || {};
    a.G = a.aa;
    a.I = Dc(a, null, a.Y);
    Gc(a);
  };
  Q.prototype.close = function() {
    Hc(this.g);
  };
  Q.prototype.u = function(a) {
    var b2 = this.g;
    if ("string" === typeof a) {
      var c = {};
      c.__data__ = a;
      a = c;
    } else
      this.v && (c = {}, c.__data__ = jb(a), a = c);
    b2.j.push(new bd(b2.fb++, a));
    3 == b2.H && Gc(b2);
  };
  Q.prototype.N = function() {
    this.g.h = null;
    delete this.j;
    Hc(this.g);
    delete this.g;
    Q.$.N.call(this);
  };
  function Pd(a) {
    Yb.call(this);
    a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
    var b2 = a.__sm__;
    if (b2) {
      a: {
        for (const c in b2) {
          a = c;
          break a;
        }
        a = void 0;
      }
      if (this.i = a)
        a = this.i, b2 = null !== b2 && a in b2 ? b2[a] : void 0;
      this.data = b2;
    } else
      this.data = a;
  }
  r(Pd, Yb);
  function Qd() {
    Zb.call(this);
    this.status = 1;
  }
  r(Qd, Zb);
  function R(a) {
    this.g = a;
  }
  r(R, Nd);
  R.prototype.Ba = function() {
    C(this.g, "a");
  };
  R.prototype.Aa = function(a) {
    C(this.g, new Pd(a));
  };
  R.prototype.za = function(a) {
    C(this.g, new Qd());
  };
  R.prototype.ya = function() {
    C(this.g, "b");
  };
  function Rd() {
    this.blockSize = -1;
  }
  function S() {
    this.blockSize = -1;
    this.blockSize = 64;
    this.g = Array(4);
    this.m = Array(this.blockSize);
    this.i = this.h = 0;
    this.reset();
  }
  r(S, Rd);
  S.prototype.reset = function() {
    this.g[0] = 1732584193;
    this.g[1] = 4023233417;
    this.g[2] = 2562383102;
    this.g[3] = 271733878;
    this.i = this.h = 0;
  };
  function Sd(a, b2, c) {
    c || (c = 0);
    var d = Array(16);
    if ("string" === typeof b2)
      for (var e = 0; 16 > e; ++e)
        d[e] = b2.charCodeAt(c++) | b2.charCodeAt(c++) << 8 | b2.charCodeAt(c++) << 16 | b2.charCodeAt(c++) << 24;
    else
      for (e = 0; 16 > e; ++e)
        d[e] = b2[c++] | b2[c++] << 8 | b2[c++] << 16 | b2[c++] << 24;
    b2 = a.g[0];
    c = a.g[1];
    e = a.g[2];
    var f = a.g[3];
    var h = b2 + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
    b2 = c + (h << 7 & 4294967295 | h >>> 25);
    h = f + (e ^ b2 & (c ^ e)) + d[1] + 3905402710 & 4294967295;
    f = b2 + (h << 12 & 4294967295 | h >>> 20);
    h = e + (c ^ f & (b2 ^ c)) + d[2] + 606105819 & 4294967295;
    e = f + (h << 17 & 4294967295 | h >>> 15);
    h = c + (b2 ^ e & (f ^ b2)) + d[3] + 3250441966 & 4294967295;
    c = e + (h << 22 & 4294967295 | h >>> 10);
    h = b2 + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
    b2 = c + (h << 7 & 4294967295 | h >>> 25);
    h = f + (e ^ b2 & (c ^ e)) + d[5] + 1200080426 & 4294967295;
    f = b2 + (h << 12 & 4294967295 | h >>> 20);
    h = e + (c ^ f & (b2 ^ c)) + d[6] + 2821735955 & 4294967295;
    e = f + (h << 17 & 4294967295 | h >>> 15);
    h = c + (b2 ^ e & (f ^ b2)) + d[7] + 4249261313 & 4294967295;
    c = e + (h << 22 & 4294967295 | h >>> 10);
    h = b2 + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
    b2 = c + (h << 7 & 4294967295 | h >>> 25);
    h = f + (e ^ b2 & (c ^ e)) + d[9] + 2336552879 & 4294967295;
    f = b2 + (h << 12 & 4294967295 | h >>> 20);
    h = e + (c ^ f & (b2 ^ c)) + d[10] + 4294925233 & 4294967295;
    e = f + (h << 17 & 4294967295 | h >>> 15);
    h = c + (b2 ^ e & (f ^ b2)) + d[11] + 2304563134 & 4294967295;
    c = e + (h << 22 & 4294967295 | h >>> 10);
    h = b2 + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
    b2 = c + (h << 7 & 4294967295 | h >>> 25);
    h = f + (e ^ b2 & (c ^ e)) + d[13] + 4254626195 & 4294967295;
    f = b2 + (h << 12 & 4294967295 | h >>> 20);
    h = e + (c ^ f & (b2 ^ c)) + d[14] + 2792965006 & 4294967295;
    e = f + (h << 17 & 4294967295 | h >>> 15);
    h = c + (b2 ^ e & (f ^ b2)) + d[15] + 1236535329 & 4294967295;
    c = e + (h << 22 & 4294967295 | h >>> 10);
    h = b2 + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
    b2 = c + (h << 5 & 4294967295 | h >>> 27);
    h = f + (c ^ e & (b2 ^ c)) + d[6] + 3225465664 & 4294967295;
    f = b2 + (h << 9 & 4294967295 | h >>> 23);
    h = e + (b2 ^ c & (f ^ b2)) + d[11] + 643717713 & 4294967295;
    e = f + (h << 14 & 4294967295 | h >>> 18);
    h = c + (f ^ b2 & (e ^ f)) + d[0] + 3921069994 & 4294967295;
    c = e + (h << 20 & 4294967295 | h >>> 12);
    h = b2 + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
    b2 = c + (h << 5 & 4294967295 | h >>> 27);
    h = f + (c ^ e & (b2 ^ c)) + d[10] + 38016083 & 4294967295;
    f = b2 + (h << 9 & 4294967295 | h >>> 23);
    h = e + (b2 ^ c & (f ^ b2)) + d[15] + 3634488961 & 4294967295;
    e = f + (h << 14 & 4294967295 | h >>> 18);
    h = c + (f ^ b2 & (e ^ f)) + d[4] + 3889429448 & 4294967295;
    c = e + (h << 20 & 4294967295 | h >>> 12);
    h = b2 + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
    b2 = c + (h << 5 & 4294967295 | h >>> 27);
    h = f + (c ^ e & (b2 ^ c)) + d[14] + 3275163606 & 4294967295;
    f = b2 + (h << 9 & 4294967295 | h >>> 23);
    h = e + (b2 ^ c & (f ^ b2)) + d[3] + 4107603335 & 4294967295;
    e = f + (h << 14 & 4294967295 | h >>> 18);
    h = c + (f ^ b2 & (e ^ f)) + d[8] + 1163531501 & 4294967295;
    c = e + (h << 20 & 4294967295 | h >>> 12);
    h = b2 + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
    b2 = c + (h << 5 & 4294967295 | h >>> 27);
    h = f + (c ^ e & (b2 ^ c)) + d[2] + 4243563512 & 4294967295;
    f = b2 + (h << 9 & 4294967295 | h >>> 23);
    h = e + (b2 ^ c & (f ^ b2)) + d[7] + 1735328473 & 4294967295;
    e = f + (h << 14 & 4294967295 | h >>> 18);
    h = c + (f ^ b2 & (e ^ f)) + d[12] + 2368359562 & 4294967295;
    c = e + (h << 20 & 4294967295 | h >>> 12);
    h = b2 + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
    b2 = c + (h << 4 & 4294967295 | h >>> 28);
    h = f + (b2 ^ c ^ e) + d[8] + 2272392833 & 4294967295;
    f = b2 + (h << 11 & 4294967295 | h >>> 21);
    h = e + (f ^ b2 ^ c) + d[11] + 1839030562 & 4294967295;
    e = f + (h << 16 & 4294967295 | h >>> 16);
    h = c + (e ^ f ^ b2) + d[14] + 4259657740 & 4294967295;
    c = e + (h << 23 & 4294967295 | h >>> 9);
    h = b2 + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
    b2 = c + (h << 4 & 4294967295 | h >>> 28);
    h = f + (b2 ^ c ^ e) + d[4] + 1272893353 & 4294967295;
    f = b2 + (h << 11 & 4294967295 | h >>> 21);
    h = e + (f ^ b2 ^ c) + d[7] + 4139469664 & 4294967295;
    e = f + (h << 16 & 4294967295 | h >>> 16);
    h = c + (e ^ f ^ b2) + d[10] + 3200236656 & 4294967295;
    c = e + (h << 23 & 4294967295 | h >>> 9);
    h = b2 + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
    b2 = c + (h << 4 & 4294967295 | h >>> 28);
    h = f + (b2 ^ c ^ e) + d[0] + 3936430074 & 4294967295;
    f = b2 + (h << 11 & 4294967295 | h >>> 21);
    h = e + (f ^ b2 ^ c) + d[3] + 3572445317 & 4294967295;
    e = f + (h << 16 & 4294967295 | h >>> 16);
    h = c + (e ^ f ^ b2) + d[6] + 76029189 & 4294967295;
    c = e + (h << 23 & 4294967295 | h >>> 9);
    h = b2 + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
    b2 = c + (h << 4 & 4294967295 | h >>> 28);
    h = f + (b2 ^ c ^ e) + d[12] + 3873151461 & 4294967295;
    f = b2 + (h << 11 & 4294967295 | h >>> 21);
    h = e + (f ^ b2 ^ c) + d[15] + 530742520 & 4294967295;
    e = f + (h << 16 & 4294967295 | h >>> 16);
    h = c + (e ^ f ^ b2) + d[2] + 3299628645 & 4294967295;
    c = e + (h << 23 & 4294967295 | h >>> 9);
    h = b2 + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
    b2 = c + (h << 6 & 4294967295 | h >>> 26);
    h = f + (c ^ (b2 | ~e)) + d[7] + 1126891415 & 4294967295;
    f = b2 + (h << 10 & 4294967295 | h >>> 22);
    h = e + (b2 ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
    e = f + (h << 15 & 4294967295 | h >>> 17);
    h = c + (f ^ (e | ~b2)) + d[5] + 4237533241 & 4294967295;
    c = e + (h << 21 & 4294967295 | h >>> 11);
    h = b2 + (e ^ (c | ~f)) + d[12] + 1700485571 & 4294967295;
    b2 = c + (h << 6 & 4294967295 | h >>> 26);
    h = f + (c ^ (b2 | ~e)) + d[3] + 2399980690 & 4294967295;
    f = b2 + (h << 10 & 4294967295 | h >>> 22);
    h = e + (b2 ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
    e = f + (h << 15 & 4294967295 | h >>> 17);
    h = c + (f ^ (e | ~b2)) + d[1] + 2240044497 & 4294967295;
    c = e + (h << 21 & 4294967295 | h >>> 11);
    h = b2 + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
    b2 = c + (h << 6 & 4294967295 | h >>> 26);
    h = f + (c ^ (b2 | ~e)) + d[15] + 4264355552 & 4294967295;
    f = b2 + (h << 10 & 4294967295 | h >>> 22);
    h = e + (b2 ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
    e = f + (h << 15 & 4294967295 | h >>> 17);
    h = c + (f ^ (e | ~b2)) + d[13] + 1309151649 & 4294967295;
    c = e + (h << 21 & 4294967295 | h >>> 11);
    h = b2 + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
    b2 = c + (h << 6 & 4294967295 | h >>> 26);
    h = f + (c ^ (b2 | ~e)) + d[11] + 3174756917 & 4294967295;
    f = b2 + (h << 10 & 4294967295 | h >>> 22);
    h = e + (b2 ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
    e = f + (h << 15 & 4294967295 | h >>> 17);
    h = c + (f ^ (e | ~b2)) + d[9] + 3951481745 & 4294967295;
    a.g[0] = a.g[0] + b2 & 4294967295;
    a.g[1] = a.g[1] + (e + (h << 21 & 4294967295 | h >>> 11)) & 4294967295;
    a.g[2] = a.g[2] + e & 4294967295;
    a.g[3] = a.g[3] + f & 4294967295;
  }
  S.prototype.j = function(a, b2) {
    void 0 === b2 && (b2 = a.length);
    for (var c = b2 - this.blockSize, d = this.m, e = this.h, f = 0; f < b2; ) {
      if (0 == e)
        for (; f <= c; )
          Sd(this, a, f), f += this.blockSize;
      if ("string" === typeof a)
        for (; f < b2; ) {
          if (d[e++] = a.charCodeAt(f++), e == this.blockSize) {
            Sd(this, d);
            e = 0;
            break;
          }
        }
      else
        for (; f < b2; )
          if (d[e++] = a[f++], e == this.blockSize) {
            Sd(this, d);
            e = 0;
            break;
          }
    }
    this.h = e;
    this.i += b2;
  };
  S.prototype.l = function() {
    var a = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
    a[0] = 128;
    for (var b2 = 1; b2 < a.length - 8; ++b2)
      a[b2] = 0;
    var c = 8 * this.i;
    for (b2 = a.length - 8; b2 < a.length; ++b2)
      a[b2] = c & 255, c /= 256;
    this.j(a);
    a = Array(16);
    for (b2 = c = 0; 4 > b2; ++b2)
      for (var d = 0; 32 > d; d += 8)
        a[c++] = this.g[b2] >>> d & 255;
    return a;
  };
  function T(a, b2) {
    this.h = b2;
    for (var c = [], d = true, e = a.length - 1; 0 <= e; e--) {
      var f = a[e] | 0;
      d && f == b2 || (c[e] = f, d = false);
    }
    this.g = c;
  }
  var sa = {};
  function Td(a) {
    return -128 <= a && 128 > a ? ra(a, function(b2) {
      return new T([b2 | 0], 0 > b2 ? -1 : 0);
    }) : new T([a | 0], 0 > a ? -1 : 0);
  }
  function U(a) {
    if (isNaN(a) || !isFinite(a))
      return V;
    if (0 > a)
      return W(U(-a));
    for (var b2 = [], c = 1, d = 0; a >= c; d++)
      b2[d] = a / c | 0, c *= Ud;
    return new T(b2, 0);
  }
  function Vd(a, b2) {
    if (0 == a.length)
      throw Error("number format error: empty string");
    b2 = b2 || 10;
    if (2 > b2 || 36 < b2)
      throw Error("radix out of range: " + b2);
    if ("-" == a.charAt(0))
      return W(Vd(a.substring(1), b2));
    if (0 <= a.indexOf("-"))
      throw Error('number format error: interior "-" character');
    for (var c = U(Math.pow(b2, 8)), d = V, e = 0; e < a.length; e += 8) {
      var f = Math.min(8, a.length - e), h = parseInt(a.substring(e, e + f), b2);
      8 > f ? (f = U(Math.pow(b2, f)), d = d.R(f).add(U(h))) : (d = d.R(c), d = d.add(U(h)));
    }
    return d;
  }
  var Ud = 4294967296;
  var V = Td(0);
  var Wd = Td(1);
  var Xd = Td(16777216);
  k = T.prototype;
  k.ea = function() {
    if (X(this))
      return -W(this).ea();
    for (var a = 0, b2 = 1, c = 0; c < this.g.length; c++) {
      var d = this.D(c);
      a += (0 <= d ? d : Ud + d) * b2;
      b2 *= Ud;
    }
    return a;
  };
  k.toString = function(a) {
    a = a || 10;
    if (2 > a || 36 < a)
      throw Error("radix out of range: " + a);
    if (Y(this))
      return "0";
    if (X(this))
      return "-" + W(this).toString(a);
    for (var b2 = U(Math.pow(a, 6)), c = this, d = ""; ; ) {
      var e = Yd(c, b2).g;
      c = Zd(c, e.R(b2));
      var f = ((0 < c.g.length ? c.g[0] : c.h) >>> 0).toString(a);
      c = e;
      if (Y(c))
        return f + d;
      for (; 6 > f.length; )
        f = "0" + f;
      d = f + d;
    }
  };
  k.D = function(a) {
    return 0 > a ? 0 : a < this.g.length ? this.g[a] : this.h;
  };
  function Y(a) {
    if (0 != a.h)
      return false;
    for (var b2 = 0; b2 < a.g.length; b2++)
      if (0 != a.g[b2])
        return false;
    return true;
  }
  function X(a) {
    return -1 == a.h;
  }
  k.X = function(a) {
    a = Zd(this, a);
    return X(a) ? -1 : Y(a) ? 0 : 1;
  };
  function W(a) {
    for (var b2 = a.g.length, c = [], d = 0; d < b2; d++)
      c[d] = ~a.g[d];
    return new T(c, ~a.h).add(Wd);
  }
  k.abs = function() {
    return X(this) ? W(this) : this;
  };
  k.add = function(a) {
    for (var b2 = Math.max(this.g.length, a.g.length), c = [], d = 0, e = 0; e <= b2; e++) {
      var f = d + (this.D(e) & 65535) + (a.D(e) & 65535), h = (f >>> 16) + (this.D(e) >>> 16) + (a.D(e) >>> 16);
      d = h >>> 16;
      f &= 65535;
      h &= 65535;
      c[e] = h << 16 | f;
    }
    return new T(c, c[c.length - 1] & -2147483648 ? -1 : 0);
  };
  function Zd(a, b2) {
    return a.add(W(b2));
  }
  k.R = function(a) {
    if (Y(this) || Y(a))
      return V;
    if (X(this))
      return X(a) ? W(this).R(W(a)) : W(W(this).R(a));
    if (X(a))
      return W(this.R(W(a)));
    if (0 > this.X(Xd) && 0 > a.X(Xd))
      return U(this.ea() * a.ea());
    for (var b2 = this.g.length + a.g.length, c = [], d = 0; d < 2 * b2; d++)
      c[d] = 0;
    for (d = 0; d < this.g.length; d++)
      for (var e = 0; e < a.g.length; e++) {
        var f = this.D(d) >>> 16, h = this.D(d) & 65535, n = a.D(e) >>> 16, t = a.D(e) & 65535;
        c[2 * d + 2 * e] += h * t;
        $d(c, 2 * d + 2 * e);
        c[2 * d + 2 * e + 1] += f * t;
        $d(c, 2 * d + 2 * e + 1);
        c[2 * d + 2 * e + 1] += h * n;
        $d(c, 2 * d + 2 * e + 1);
        c[2 * d + 2 * e + 2] += f * n;
        $d(c, 2 * d + 2 * e + 2);
      }
    for (d = 0; d < b2; d++)
      c[d] = c[2 * d + 1] << 16 | c[2 * d];
    for (d = b2; d < 2 * b2; d++)
      c[d] = 0;
    return new T(c, 0);
  };
  function $d(a, b2) {
    for (; (a[b2] & 65535) != a[b2]; )
      a[b2 + 1] += a[b2] >>> 16, a[b2] &= 65535, b2++;
  }
  function ae(a, b2) {
    this.g = a;
    this.h = b2;
  }
  function Yd(a, b2) {
    if (Y(b2))
      throw Error("division by zero");
    if (Y(a))
      return new ae(V, V);
    if (X(a))
      return b2 = Yd(W(a), b2), new ae(W(b2.g), W(b2.h));
    if (X(b2))
      return b2 = Yd(a, W(b2)), new ae(W(b2.g), b2.h);
    if (30 < a.g.length) {
      if (X(a) || X(b2))
        throw Error("slowDivide_ only works with positive integers.");
      for (var c = Wd, d = b2; 0 >= d.X(a); )
        c = be(c), d = be(d);
      var e = Z(c, 1), f = Z(d, 1);
      d = Z(d, 2);
      for (c = Z(c, 2); !Y(d); ) {
        var h = f.add(d);
        0 >= h.X(a) && (e = e.add(c), f = h);
        d = Z(d, 1);
        c = Z(c, 1);
      }
      b2 = Zd(a, e.R(b2));
      return new ae(e, b2);
    }
    for (e = V; 0 <= a.X(b2); ) {
      c = Math.max(1, Math.floor(a.ea() / b2.ea()));
      d = Math.ceil(Math.log(c) / Math.LN2);
      d = 48 >= d ? 1 : Math.pow(2, d - 48);
      f = U(c);
      for (h = f.R(b2); X(h) || 0 < h.X(a); )
        c -= d, f = U(c), h = f.R(b2);
      Y(f) && (f = Wd);
      e = e.add(f);
      a = Zd(a, h);
    }
    return new ae(e, a);
  }
  k.gb = function(a) {
    return Yd(this, a).h;
  };
  k.and = function(a) {
    for (var b2 = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b2; d++)
      c[d] = this.D(d) & a.D(d);
    return new T(c, this.h & a.h);
  };
  k.or = function(a) {
    for (var b2 = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b2; d++)
      c[d] = this.D(d) | a.D(d);
    return new T(c, this.h | a.h);
  };
  k.xor = function(a) {
    for (var b2 = Math.max(this.g.length, a.g.length), c = [], d = 0; d < b2; d++)
      c[d] = this.D(d) ^ a.D(d);
    return new T(c, this.h ^ a.h);
  };
  function be(a) {
    for (var b2 = a.g.length + 1, c = [], d = 0; d < b2; d++)
      c[d] = a.D(d) << 1 | a.D(d - 1) >>> 31;
    return new T(c, a.h);
  }
  function Z(a, b2) {
    var c = b2 >> 5;
    b2 %= 32;
    for (var d = a.g.length - c, e = [], f = 0; f < d; f++)
      e[f] = 0 < b2 ? a.D(f + c) >>> b2 | a.D(f + c + 1) << 32 - b2 : a.D(f + c);
    return new T(e, a.h);
  }
  Od.prototype.createWebChannel = Od.prototype.g;
  Q.prototype.send = Q.prototype.u;
  Q.prototype.open = Q.prototype.m;
  Q.prototype.close = Q.prototype.close;
  Sb.NO_ERROR = 0;
  Sb.TIMEOUT = 8;
  Sb.HTTP_ERROR = 6;
  Tb.COMPLETE = "complete";
  Wb.EventType = Xb;
  Xb.OPEN = "a";
  Xb.CLOSE = "b";
  Xb.ERROR = "c";
  Xb.MESSAGE = "d";
  B.prototype.listen = B.prototype.O;
  P.prototype.listenOnce = P.prototype.P;
  P.prototype.getLastError = P.prototype.Sa;
  P.prototype.getLastErrorCode = P.prototype.Ia;
  P.prototype.getStatus = P.prototype.da;
  P.prototype.getResponseJson = P.prototype.Wa;
  P.prototype.getResponseText = P.prototype.ja;
  P.prototype.send = P.prototype.ha;
  P.prototype.setWithCredentials = P.prototype.Oa;
  S.prototype.digest = S.prototype.l;
  S.prototype.reset = S.prototype.reset;
  S.prototype.update = S.prototype.j;
  T.prototype.add = T.prototype.add;
  T.prototype.multiply = T.prototype.R;
  T.prototype.modulo = T.prototype.gb;
  T.prototype.compare = T.prototype.X;
  T.prototype.toNumber = T.prototype.ea;
  T.prototype.toString = T.prototype.toString;
  T.prototype.getBits = T.prototype.D;
  T.fromNumber = U;
  T.fromString = Vd;
  var createWebChannelTransport = esm.createWebChannelTransport = function() {
    return new Od();
  };
  var getStatEventTarget = esm.getStatEventTarget = function() {
    return Mb();
  };
  var ErrorCode = esm.ErrorCode = Sb;
  var EventType = esm.EventType = Tb;
  var Event = esm.Event = E;
  var Stat = esm.Stat = { xb: 0, Ab: 1, Bb: 2, Ub: 3, Zb: 4, Wb: 5, Xb: 6, Vb: 7, Tb: 8, Yb: 9, PROXY: 10, NOPROXY: 11, Rb: 12, Nb: 13, Ob: 14, Mb: 15, Pb: 16, Qb: 17, tb: 18, sb: 19, ub: 20 };
  var FetchXmlHttpFactory = esm.FetchXmlHttpFactory = ld;
  var WebChannel = esm.WebChannel = Wb;
  var XhrIo = esm.XhrIo = P;
  var Md5 = esm.Md5 = S;
  var Integer = esm.Integer = T;

  // node_modules/@firebase/firestore/dist/index.esm2017.js
  var w2 = "@firebase/firestore";
  var User = class {
    constructor(e) {
      this.uid = e;
    }
    isAuthenticated() {
      return null != this.uid;
    }
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    toKey() {
      return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
    }
    isEqual(e) {
      return e.uid === this.uid;
    }
  };
  User.UNAUTHENTICATED = new User(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
  // non-FirebaseAuth providers.
  User.GOOGLE_CREDENTIALS = new User("google-credentials-uid"), User.FIRST_PARTY = new User("first-party-uid"), User.MOCK_USER = new User("mock-user");
  var S2 = "10.9.0";
  var b = new Logger("@firebase/firestore");
  function __PRIVATE_getLogLevel() {
    return b.logLevel;
  }
  function __PRIVATE_logDebug(e, ...t) {
    if (b.logLevel <= LogLevel.DEBUG) {
      const n = t.map(__PRIVATE_argToString);
      b.debug(`Firestore (${S2}): ${e}`, ...n);
    }
  }
  function __PRIVATE_logError(e, ...t) {
    if (b.logLevel <= LogLevel.ERROR) {
      const n = t.map(__PRIVATE_argToString);
      b.error(`Firestore (${S2}): ${e}`, ...n);
    }
  }
  function __PRIVATE_logWarn(e, ...t) {
    if (b.logLevel <= LogLevel.WARN) {
      const n = t.map(__PRIVATE_argToString);
      b.warn(`Firestore (${S2}): ${e}`, ...n);
    }
  }
  function __PRIVATE_argToString(e) {
    if ("string" == typeof e)
      return e;
    try {
      return function __PRIVATE_formatJSON(e2) {
        return JSON.stringify(e2);
      }(e);
    } catch (t) {
      return e;
    }
  }
  function fail(e = "Unexpected state") {
    const t = `FIRESTORE (${S2}) INTERNAL ASSERTION FAILED: ` + e;
    throw __PRIVATE_logError(t), new Error(t);
  }
  function __PRIVATE_hardAssert(e, t) {
    e || fail();
  }
  function __PRIVATE_debugCast(e, t) {
    return e;
  }
  var D2 = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
  };
  var FirestoreError = class extends FirebaseError {
    /** @hideconstructor */
    constructor(e, t) {
      super(e, t), this.code = e, this.message = t, // HACK: We write a toString property directly because Error is not a real
      // class and so inheritance does not work correctly. We could alternatively
      // do the same "back-door inheritance" trick that FirebaseError does.
      this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
    }
  };
  var __PRIVATE_Deferred = class {
    constructor() {
      this.promise = new Promise((e, t) => {
        this.resolve = e, this.reject = t;
      });
    }
  };
  var __PRIVATE_OAuthToken = class {
    constructor(e, t) {
      this.user = t, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${e}`);
    }
  };
  var __PRIVATE_EmptyAuthCredentialsProvider = class {
    getToken() {
      return Promise.resolve(null);
    }
    invalidateToken() {
    }
    start(e, t) {
      e.enqueueRetryable(() => t(User.UNAUTHENTICATED));
    }
    shutdown() {
    }
  };
  var __PRIVATE_EmulatorAuthCredentialsProvider = class {
    constructor(e) {
      this.token = e, /**
       * Stores the listener registered with setChangeListener()
       * This isn't actually necessary since the UID never changes, but we use this
       * to verify the listen contract is adhered to in tests.
       */
      this.changeListener = null;
    }
    getToken() {
      return Promise.resolve(this.token);
    }
    invalidateToken() {
    }
    start(e, t) {
      this.changeListener = t, // Fire with initial user.
      e.enqueueRetryable(() => t(this.token.user));
    }
    shutdown() {
      this.changeListener = null;
    }
  };
  var __PRIVATE_FirebaseAuthCredentialsProvider = class {
    constructor(e) {
      this.t = e, /** Tracks the current User. */
      this.currentUser = User.UNAUTHENTICATED, /**
       * Counter used to detect if the token changed while a getToken request was
       * outstanding.
       */
      this.i = 0, this.forceRefresh = false, this.auth = null;
    }
    start(e, t) {
      let n = this.i;
      const __PRIVATE_guardedChangeListener = (e2) => this.i !== n ? (n = this.i, t(e2)) : Promise.resolve();
      let r2 = new __PRIVATE_Deferred();
      this.o = () => {
        this.i++, this.currentUser = this.u(), r2.resolve(), r2 = new __PRIVATE_Deferred(), e.enqueueRetryable(() => __PRIVATE_guardedChangeListener(this.currentUser));
      };
      const __PRIVATE_awaitNextToken = () => {
        const t2 = r2;
        e.enqueueRetryable(async () => {
          await t2.promise, await __PRIVATE_guardedChangeListener(this.currentUser);
        });
      }, __PRIVATE_registerAuth = (e2) => {
        __PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = e2, this.auth.addAuthTokenListener(this.o), __PRIVATE_awaitNextToken();
      };
      this.t.onInit((e2) => __PRIVATE_registerAuth(e2)), // Our users can initialize Auth right after Firestore, so we give it
      // a chance to register itself with the component framework before we
      // determine whether to start up in unauthenticated mode.
      setTimeout(() => {
        if (!this.auth) {
          const e2 = this.t.getImmediate({
            optional: true
          });
          e2 ? __PRIVATE_registerAuth(e2) : (
            // If auth is still not available, proceed with `null` user
            (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth not yet detected"), r2.resolve(), r2 = new __PRIVATE_Deferred())
          );
        }
      }, 0), __PRIVATE_awaitNextToken();
    }
    getToken() {
      const e = this.i, t = this.forceRefresh;
      return this.forceRefresh = false, this.auth ? this.auth.getToken(t).then((t2) => (
        // Cancel the request since the token changed while the request was
        // outstanding so the response is potentially for a previous user (which
        // user, we can't be sure).
        this.i !== e ? (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : t2 ? (__PRIVATE_hardAssert("string" == typeof t2.accessToken), new __PRIVATE_OAuthToken(t2.accessToken, this.currentUser)) : null
      )) : Promise.resolve(null);
    }
    invalidateToken() {
      this.forceRefresh = true;
    }
    shutdown() {
      this.auth && this.auth.removeAuthTokenListener(this.o);
    }
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    u() {
      const e = this.auth && this.auth.getUid();
      return __PRIVATE_hardAssert(null === e || "string" == typeof e), new User(e);
    }
  };
  var __PRIVATE_FirstPartyToken = class {
    constructor(e, t, n) {
      this.l = e, this.h = t, this.P = n, this.type = "FirstParty", this.user = User.FIRST_PARTY, this.I = /* @__PURE__ */ new Map();
    }
    /**
     * Gets an authorization token, using a provided factory function, or return
     * null.
     */
    T() {
      return this.P ? this.P() : null;
    }
    get headers() {
      this.I.set("X-Goog-AuthUser", this.l);
      const e = this.T();
      return e && this.I.set("Authorization", e), this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h), this.I;
    }
  };
  var __PRIVATE_FirstPartyAuthCredentialsProvider = class {
    constructor(e, t, n) {
      this.l = e, this.h = t, this.P = n;
    }
    getToken() {
      return Promise.resolve(new __PRIVATE_FirstPartyToken(this.l, this.h, this.P));
    }
    start(e, t) {
      e.enqueueRetryable(() => t(User.FIRST_PARTY));
    }
    shutdown() {
    }
    invalidateToken() {
    }
  };
  var AppCheckToken = class {
    constructor(e) {
      this.value = e, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
    }
  };
  var __PRIVATE_FirebaseAppCheckTokenProvider = class {
    constructor(e) {
      this.A = e, this.forceRefresh = false, this.appCheck = null, this.R = null;
    }
    start(e, t) {
      const onTokenChanged = (e2) => {
        null != e2.error && __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${e2.error.message}`);
        const n = e2.token !== this.R;
        return this.R = e2.token, __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Received ${n ? "new" : "existing"} token.`), n ? t(e2.token) : Promise.resolve();
      };
      this.o = (t2) => {
        e.enqueueRetryable(() => onTokenChanged(t2));
      };
      const __PRIVATE_registerAppCheck = (e2) => {
        __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = e2, this.appCheck.addTokenListener(this.o);
      };
      this.A.onInit((e2) => __PRIVATE_registerAppCheck(e2)), // Our users can initialize AppCheck after Firestore, so we give it
      // a chance to register itself with the component framework.
      setTimeout(() => {
        if (!this.appCheck) {
          const e2 = this.A.getImmediate({
            optional: true
          });
          e2 ? __PRIVATE_registerAppCheck(e2) : (
            // If AppCheck is still not available, proceed without it.
            __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
          );
        }
      }, 0);
    }
    getToken() {
      const e = this.forceRefresh;
      return this.forceRefresh = false, this.appCheck ? this.appCheck.getToken(e).then((e2) => e2 ? (__PRIVATE_hardAssert("string" == typeof e2.token), this.R = e2.token, new AppCheckToken(e2.token)) : null) : Promise.resolve(null);
    }
    invalidateToken() {
      this.forceRefresh = true;
    }
    shutdown() {
      this.appCheck && this.appCheck.removeTokenListener(this.o);
    }
  };
  function __PRIVATE_randomBytes(e) {
    const t = (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      "undefined" != typeof self && (self.crypto || self.msCrypto)
    ), n = new Uint8Array(e);
    if (t && "function" == typeof t.getRandomValues)
      t.getRandomValues(n);
    else
      for (let t2 = 0; t2 < e; t2++)
        n[t2] = Math.floor(256 * Math.random());
    return n;
  }
  var __PRIVATE_AutoId = class {
    static newId() {
      const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = Math.floor(256 / e.length) * e.length;
      let n = "";
      for (; n.length < 20; ) {
        const r2 = __PRIVATE_randomBytes(40);
        for (let i = 0; i < r2.length; ++i)
          n.length < 20 && r2[i] < t && (n += e.charAt(r2[i] % e.length));
      }
      return n;
    }
  };
  function __PRIVATE_primitiveComparator(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
  }
  function __PRIVATE_arrayEquals(e, t, n) {
    return e.length === t.length && e.every((e2, r2) => n(e2, t[r2]));
  }
  var Timestamp = class _Timestamp {
    /**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */
    constructor(e, t) {
      if (this.seconds = e, this.nanoseconds = t, t < 0)
        throw new FirestoreError(D2.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
      if (t >= 1e9)
        throw new FirestoreError(D2.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t);
      if (e < -62135596800)
        throw new FirestoreError(D2.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
      if (e >= 253402300800)
        throw new FirestoreError(D2.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    }
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */
    static now() {
      return _Timestamp.fromMillis(Date.now());
    }
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */
    static fromDate(e) {
      return _Timestamp.fromMillis(e.getTime());
    }
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */
    static fromMillis(e) {
      const t = Math.floor(e / 1e3), n = Math.floor(1e6 * (e - 1e3 * t));
      return new _Timestamp(t, n);
    }
    /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
     * causes a loss of precision since `Date` objects only support millisecond
     * precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */
    toDate() {
      return new Date(this.toMillis());
    }
    /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */
    toMillis() {
      return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }
    _compareTo(e) {
      return this.seconds === e.seconds ? __PRIVATE_primitiveComparator(this.nanoseconds, e.nanoseconds) : __PRIVATE_primitiveComparator(this.seconds, e.seconds);
    }
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */
    isEqual(e) {
      return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
    }
    /** Returns a textual representation of this `Timestamp`. */
    toString() {
      return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }
    /** Returns a JSON-serializable representation of this `Timestamp`. */
    toJSON() {
      return {
        seconds: this.seconds,
        nanoseconds: this.nanoseconds
      };
    }
    /**
     * Converts this object to a primitive string, which allows `Timestamp` objects
     * to be compared using the `>`, `<=`, `>=` and `>` operators.
     */
    valueOf() {
      const e = this.seconds - -62135596800;
      return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }
  };
  var SnapshotVersion = class _SnapshotVersion {
    constructor(e) {
      this.timestamp = e;
    }
    static fromTimestamp(e) {
      return new _SnapshotVersion(e);
    }
    static min() {
      return new _SnapshotVersion(new Timestamp(0, 0));
    }
    static max() {
      return new _SnapshotVersion(new Timestamp(253402300799, 999999999));
    }
    compareTo(e) {
      return this.timestamp._compareTo(e.timestamp);
    }
    isEqual(e) {
      return this.timestamp.isEqual(e.timestamp);
    }
    /** Returns a number representation of the version for use in spec tests. */
    toMicroseconds() {
      return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }
    toString() {
      return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }
    toTimestamp() {
      return this.timestamp;
    }
  };
  var BasePath = class _BasePath {
    constructor(e, t, n) {
      void 0 === t ? t = 0 : t > e.length && fail(), void 0 === n ? n = e.length - t : n > e.length - t && fail(), this.segments = e, this.offset = t, this.len = n;
    }
    get length() {
      return this.len;
    }
    isEqual(e) {
      return 0 === _BasePath.comparator(this, e);
    }
    child(e) {
      const t = this.segments.slice(this.offset, this.limit());
      return e instanceof _BasePath ? e.forEach((e2) => {
        t.push(e2);
      }) : t.push(e), this.construct(t);
    }
    /** The index of one past the last segment of the path. */
    limit() {
      return this.offset + this.length;
    }
    popFirst(e) {
      return e = void 0 === e ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e);
    }
    popLast() {
      return this.construct(this.segments, this.offset, this.length - 1);
    }
    firstSegment() {
      return this.segments[this.offset];
    }
    lastSegment() {
      return this.get(this.length - 1);
    }
    get(e) {
      return this.segments[this.offset + e];
    }
    isEmpty() {
      return 0 === this.length;
    }
    isPrefixOf(e) {
      if (e.length < this.length)
        return false;
      for (let t = 0; t < this.length; t++)
        if (this.get(t) !== e.get(t))
          return false;
      return true;
    }
    isImmediateParentOf(e) {
      if (this.length + 1 !== e.length)
        return false;
      for (let t = 0; t < this.length; t++)
        if (this.get(t) !== e.get(t))
          return false;
      return true;
    }
    forEach(e) {
      for (let t = this.offset, n = this.limit(); t < n; t++)
        e(this.segments[t]);
    }
    toArray() {
      return this.segments.slice(this.offset, this.limit());
    }
    static comparator(e, t) {
      const n = Math.min(e.length, t.length);
      for (let r2 = 0; r2 < n; r2++) {
        const n2 = e.get(r2), i = t.get(r2);
        if (n2 < i)
          return -1;
        if (n2 > i)
          return 1;
      }
      return e.length < t.length ? -1 : e.length > t.length ? 1 : 0;
    }
  };
  var ResourcePath = class _ResourcePath extends BasePath {
    construct(e, t, n) {
      return new _ResourcePath(e, t, n);
    }
    canonicalString() {
      return this.toArray().join("/");
    }
    toString() {
      return this.canonicalString();
    }
    /**
     * Returns a string representation of this path
     * where each path segment has been encoded with
     * `encodeURIComponent`.
     */
    toUriEncodedString() {
      return this.toArray().map(encodeURIComponent).join("/");
    }
    /**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */
    static fromString(...e) {
      const t = [];
      for (const n of e) {
        if (n.indexOf("//") >= 0)
          throw new FirestoreError(D2.INVALID_ARGUMENT, `Invalid segment (${n}). Paths must not contain // in them.`);
        t.push(...n.split("/").filter((e2) => e2.length > 0));
      }
      return new _ResourcePath(t);
    }
    static emptyPath() {
      return new _ResourcePath([]);
    }
  };
  var C2 = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
  var FieldPath$1 = class _FieldPath$1 extends BasePath {
    construct(e, t, n) {
      return new _FieldPath$1(e, t, n);
    }
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    static isValidIdentifier(e) {
      return C2.test(e);
    }
    canonicalString() {
      return this.toArray().map((e) => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), _FieldPath$1.isValidIdentifier(e) || (e = "`" + e + "`"), e)).join(".");
    }
    toString() {
      return this.canonicalString();
    }
    /**
     * Returns true if this field references the key of a document.
     */
    isKeyField() {
      return 1 === this.length && "__name__" === this.get(0);
    }
    /**
     * The field designating the key of a document.
     */
    static keyField() {
      return new _FieldPath$1(["__name__"]);
    }
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    static fromServerFormat(e) {
      const t = [];
      let n = "", r2 = 0;
      const __PRIVATE_addCurrentSegment = () => {
        if (0 === n.length)
          throw new FirestoreError(D2.INVALID_ARGUMENT, `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
        t.push(n), n = "";
      };
      let i = false;
      for (; r2 < e.length; ) {
        const t2 = e[r2];
        if ("\\" === t2) {
          if (r2 + 1 === e.length)
            throw new FirestoreError(D2.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
          const t3 = e[r2 + 1];
          if ("\\" !== t3 && "." !== t3 && "`" !== t3)
            throw new FirestoreError(D2.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
          n += t3, r2 += 2;
        } else
          "`" === t2 ? (i = !i, r2++) : "." !== t2 || i ? (n += t2, r2++) : (__PRIVATE_addCurrentSegment(), r2++);
      }
      if (__PRIVATE_addCurrentSegment(), i)
        throw new FirestoreError(D2.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
      return new _FieldPath$1(t);
    }
    static emptyPath() {
      return new _FieldPath$1([]);
    }
  };
  var DocumentKey = class _DocumentKey {
    constructor(e) {
      this.path = e;
    }
    static fromPath(e) {
      return new _DocumentKey(ResourcePath.fromString(e));
    }
    static fromName(e) {
      return new _DocumentKey(ResourcePath.fromString(e).popFirst(5));
    }
    static empty() {
      return new _DocumentKey(ResourcePath.emptyPath());
    }
    get collectionGroup() {
      return this.path.popLast().lastSegment();
    }
    /** Returns true if the document is in the specified collectionId. */
    hasCollectionId(e) {
      return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
    }
    /** Returns the collection group (i.e. the name of the parent collection) for this key. */
    getCollectionGroup() {
      return this.path.get(this.path.length - 2);
    }
    /** Returns the fully qualified path to the parent collection. */
    getCollectionPath() {
      return this.path.popLast();
    }
    isEqual(e) {
      return null !== e && 0 === ResourcePath.comparator(this.path, e.path);
    }
    toString() {
      return this.path.toString();
    }
    static comparator(e, t) {
      return ResourcePath.comparator(e.path, t.path);
    }
    static isDocumentKey(e) {
      return e.length % 2 == 0;
    }
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */
    static fromSegments(e) {
      return new _DocumentKey(new ResourcePath(e.slice()));
    }
  };
  var FieldIndex = class {
    constructor(e, t, n, r2) {
      this.indexId = e, this.collectionGroup = t, this.fields = n, this.indexState = r2;
    }
  };
  FieldIndex.UNKNOWN_ID = -1;
  function __PRIVATE_newIndexOffsetSuccessorFromReadTime(e, t) {
    const n = e.toTimestamp().seconds, r2 = e.toTimestamp().nanoseconds + 1, i = SnapshotVersion.fromTimestamp(1e9 === r2 ? new Timestamp(n + 1, 0) : new Timestamp(n, r2));
    return new IndexOffset(i, DocumentKey.empty(), t);
  }
  function __PRIVATE_newIndexOffsetFromDocument(e) {
    return new IndexOffset(e.readTime, e.key, -1);
  }
  var IndexOffset = class _IndexOffset {
    constructor(e, t, n) {
      this.readTime = e, this.documentKey = t, this.largestBatchId = n;
    }
    /** Returns an offset that sorts before all regular offsets. */
    static min() {
      return new _IndexOffset(SnapshotVersion.min(), DocumentKey.empty(), -1);
    }
    /** Returns an offset that sorts after all regular offsets. */
    static max() {
      return new _IndexOffset(SnapshotVersion.max(), DocumentKey.empty(), -1);
    }
  };
  function __PRIVATE_indexOffsetComparator(e, t) {
    let n = e.readTime.compareTo(t.readTime);
    return 0 !== n ? n : (n = DocumentKey.comparator(e.documentKey, t.documentKey), 0 !== n ? n : __PRIVATE_primitiveComparator(e.largestBatchId, t.largestBatchId));
  }
  var v2 = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
  var PersistenceTransaction = class {
    constructor() {
      this.onCommittedListeners = [];
    }
    addOnCommittedListener(e) {
      this.onCommittedListeners.push(e);
    }
    raiseOnCommittedEvent() {
      this.onCommittedListeners.forEach((e) => e());
    }
  };
  async function __PRIVATE_ignoreIfPrimaryLeaseLoss(e) {
    if (e.code !== D2.FAILED_PRECONDITION || e.message !== v2)
      throw e;
    __PRIVATE_logDebug("LocalStore", "Unexpectedly lost primary lease");
  }
  var PersistencePromise = class _PersistencePromise {
    constructor(e) {
      this.nextCallback = null, this.catchCallback = null, // When the operation resolves, we'll set result or error and mark isDone.
      this.result = void 0, this.error = void 0, this.isDone = false, // Set to true when .then() or .catch() are called and prevents additional
      // chaining.
      this.callbackAttached = false, e((e2) => {
        this.isDone = true, this.result = e2, this.nextCallback && // value should be defined unless T is Void, but we can't express
        // that in the type system.
        this.nextCallback(e2);
      }, (e2) => {
        this.isDone = true, this.error = e2, this.catchCallback && this.catchCallback(e2);
      });
    }
    catch(e) {
      return this.next(void 0, e);
    }
    next(e, t) {
      return this.callbackAttached && fail(), this.callbackAttached = true, this.isDone ? this.error ? this.wrapFailure(t, this.error) : this.wrapSuccess(e, this.result) : new _PersistencePromise((n, r2) => {
        this.nextCallback = (t2) => {
          this.wrapSuccess(e, t2).next(n, r2);
        }, this.catchCallback = (e2) => {
          this.wrapFailure(t, e2).next(n, r2);
        };
      });
    }
    toPromise() {
      return new Promise((e, t) => {
        this.next(e, t);
      });
    }
    wrapUserFunction(e) {
      try {
        const t = e();
        return t instanceof _PersistencePromise ? t : _PersistencePromise.resolve(t);
      } catch (e2) {
        return _PersistencePromise.reject(e2);
      }
    }
    wrapSuccess(e, t) {
      return e ? this.wrapUserFunction(() => e(t)) : _PersistencePromise.resolve(t);
    }
    wrapFailure(e, t) {
      return e ? this.wrapUserFunction(() => e(t)) : _PersistencePromise.reject(t);
    }
    static resolve(e) {
      return new _PersistencePromise((t, n) => {
        t(e);
      });
    }
    static reject(e) {
      return new _PersistencePromise((t, n) => {
        n(e);
      });
    }
    static waitFor(e) {
      return new _PersistencePromise((t, n) => {
        let r2 = 0, i = 0, s = false;
        e.forEach((e2) => {
          ++r2, e2.next(() => {
            ++i, s && i === r2 && t();
          }, (e3) => n(e3));
        }), s = true, i === r2 && t();
      });
    }
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    static or(e) {
      let t = _PersistencePromise.resolve(false);
      for (const n of e)
        t = t.next((e2) => e2 ? _PersistencePromise.resolve(e2) : n());
      return t;
    }
    static forEach(e, t) {
      const n = [];
      return e.forEach((e2, r2) => {
        n.push(t.call(this, e2, r2));
      }), this.waitFor(n);
    }
    /**
     * Concurrently map all array elements through asynchronous function.
     */
    static mapArray(e, t) {
      return new _PersistencePromise((n, r2) => {
        const i = e.length, s = new Array(i);
        let o = 0;
        for (let _ = 0; _ < i; _++) {
          const a = _;
          t(e[a]).next((e2) => {
            s[a] = e2, ++o, o === i && n(s);
          }, (e2) => r2(e2));
        }
      });
    }
    /**
     * An alternative to recursive PersistencePromise calls, that avoids
     * potential memory problems from unbounded chains of promises.
     *
     * The `action` will be called repeatedly while `condition` is true.
     */
    static doWhile(e, t) {
      return new _PersistencePromise((n, r2) => {
        const process2 = () => {
          true === e() ? t().next(() => {
            process2();
          }, r2) : n();
        };
        process2();
      });
    }
  };
  var __PRIVATE_SimpleDbTransaction = class ___PRIVATE_SimpleDbTransaction {
    constructor(e, t) {
      this.action = e, this.transaction = t, this.aborted = false, /**
       * A `Promise` that resolves with the result of the IndexedDb transaction.
       */
      this.V = new __PRIVATE_Deferred(), this.transaction.oncomplete = () => {
        this.V.resolve();
      }, this.transaction.onabort = () => {
        t.error ? this.V.reject(new __PRIVATE_IndexedDbTransactionError(e, t.error)) : this.V.resolve();
      }, this.transaction.onerror = (t2) => {
        const n = __PRIVATE_checkForAndReportiOSError(t2.target.error);
        this.V.reject(new __PRIVATE_IndexedDbTransactionError(e, n));
      };
    }
    static open(e, t, n, r2) {
      try {
        return new ___PRIVATE_SimpleDbTransaction(t, e.transaction(r2, n));
      } catch (e2) {
        throw new __PRIVATE_IndexedDbTransactionError(t, e2);
      }
    }
    get m() {
      return this.V.promise;
    }
    abort(e) {
      e && this.V.reject(e), this.aborted || (__PRIVATE_logDebug("SimpleDb", "Aborting transaction:", e ? e.message : "Client-initiated abort"), this.aborted = true, this.transaction.abort());
    }
    g() {
      const e = this.transaction;
      this.aborted || "function" != typeof e.commit || e.commit();
    }
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */
    store(e) {
      const t = this.transaction.objectStore(e);
      return new __PRIVATE_SimpleDbStore(t);
    }
  };
  var __PRIVATE_SimpleDb = class ___PRIVATE_SimpleDb {
    /*
     * Creates a new SimpleDb wrapper for IndexedDb database `name`.
     *
     * Note that `version` must not be a downgrade. IndexedDB does not support
     * downgrading the schema version. We currently do not support any way to do
     * versioning outside of IndexedDB's versioning mechanism, as only
     * version-upgrade transactions are allowed to do things like create
     * objectstores.
     */
    constructor(e, t, n) {
      this.name = e, this.version = t, this.p = n;
      12.2 === ___PRIVATE_SimpleDb.S(getUA()) && __PRIVATE_logError("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
    }
    /** Deletes the specified database. */
    static delete(e) {
      return __PRIVATE_logDebug("SimpleDb", "Removing database:", e), __PRIVATE_wrapRequest(window.indexedDB.deleteDatabase(e)).toPromise();
    }
    /** Returns true if IndexedDB is available in the current environment. */
    static D() {
      if (!isIndexedDBAvailable())
        return false;
      if (___PRIVATE_SimpleDb.C())
        return true;
      const e = getUA(), t = ___PRIVATE_SimpleDb.S(e), n = 0 < t && t < 10, r2 = ___PRIVATE_SimpleDb.v(e), i = 0 < r2 && r2 < 4.5;
      return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || n || i);
    }
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */
    static C() {
      var e;
      return "undefined" != typeof process && "YES" === (null === (e = process.__PRIVATE_env) || void 0 === e ? void 0 : e.F);
    }
    /** Helper to get a typed SimpleDbStore from a transaction. */
    static M(e, t) {
      return e.store(t);
    }
    // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    static S(e) {
      const t = e.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = t ? t[1].split("_").slice(0, 2).join(".") : "-1";
      return Number(n);
    }
    // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    static v(e) {
      const t = e.match(/Android ([\d.]+)/i), n = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
      return Number(n);
    }
    /**
     * Opens the specified database, creating or upgrading it if necessary.
     */
    async O(e) {
      return this.db || (__PRIVATE_logDebug("SimpleDb", "Opening database:", this.name), this.db = await new Promise((t, n) => {
        const r2 = indexedDB.open(this.name, this.version);
        r2.onsuccess = (e2) => {
          const n2 = e2.target.result;
          t(n2);
        }, r2.onblocked = () => {
          n(new __PRIVATE_IndexedDbTransactionError(e, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
        }, r2.onerror = (t2) => {
          const r3 = t2.target.error;
          "VersionError" === r3.name ? n(new FirestoreError(D2.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : "InvalidStateError" === r3.name ? n(new FirestoreError(D2.FAILED_PRECONDITION, "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " + r3)) : n(new __PRIVATE_IndexedDbTransactionError(e, r3));
        }, r2.onupgradeneeded = (e2) => {
          __PRIVATE_logDebug("SimpleDb", 'Database "' + this.name + '" requires upgrade from version:', e2.oldVersion);
          const t2 = e2.target.result;
          this.p.N(t2, r2.transaction, e2.oldVersion, this.version).next(() => {
            __PRIVATE_logDebug("SimpleDb", "Database upgrade to version " + this.version + " complete");
          });
        };
      })), this.L && (this.db.onversionchange = (e2) => this.L(e2)), this.db;
    }
    B(e) {
      this.L = e, this.db && (this.db.onversionchange = (t) => e(t));
    }
    async runTransaction(e, t, n, r2) {
      const i = "readonly" === t;
      let s = 0;
      for (; ; ) {
        ++s;
        try {
          this.db = await this.O(e);
          const t2 = __PRIVATE_SimpleDbTransaction.open(this.db, e, i ? "readonly" : "readwrite", n), s2 = r2(t2).next((e2) => (t2.g(), e2)).catch((e2) => (
            // Abort the transaction if there was an error.
            (t2.abort(e2), PersistencePromise.reject(e2))
          )).toPromise();
          return s2.catch(() => {
          }), // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
          // fire), but still return the original transactionFnResult back to the
          // caller.
          await t2.m, s2;
        } catch (e2) {
          const t2 = e2, n2 = "FirebaseError" !== t2.name && s < 3;
          if (__PRIVATE_logDebug("SimpleDb", "Transaction failed with error:", t2.message, "Retrying:", n2), this.close(), !n2)
            return Promise.reject(t2);
        }
      }
    }
    close() {
      this.db && this.db.close(), this.db = void 0;
    }
  };
  var __PRIVATE_IterationController = class {
    constructor(e) {
      this.k = e, this.q = false, this.K = null;
    }
    get isDone() {
      return this.q;
    }
    get $() {
      return this.K;
    }
    set cursor(e) {
      this.k = e;
    }
    /**
     * This function can be called to stop iteration at any point.
     */
    done() {
      this.q = true;
    }
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */
    U(e) {
      this.K = e;
    }
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */
    delete() {
      return __PRIVATE_wrapRequest(this.k.delete());
    }
  };
  var __PRIVATE_IndexedDbTransactionError = class extends FirestoreError {
    constructor(e, t) {
      super(D2.UNAVAILABLE, `IndexedDB transaction '${e}' failed: ${t}`), this.name = "IndexedDbTransactionError";
    }
  };
  function __PRIVATE_isIndexedDbTransactionError(e) {
    return "IndexedDbTransactionError" === e.name;
  }
  var __PRIVATE_SimpleDbStore = class {
    constructor(e) {
      this.store = e;
    }
    put(e, t) {
      let n;
      return void 0 !== t ? (__PRIVATE_logDebug("SimpleDb", "PUT", this.store.name, e, t), n = this.store.put(t, e)) : (__PRIVATE_logDebug("SimpleDb", "PUT", this.store.name, "<auto-key>", e), n = this.store.put(e)), __PRIVATE_wrapRequest(n);
    }
    /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value - The object to write.
     * @returns The key of the value to add.
     */
    add(e) {
      __PRIVATE_logDebug("SimpleDb", "ADD", this.store.name, e, e);
      return __PRIVATE_wrapRequest(this.store.add(e));
    }
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @returns The object with the specified key or null if no object exists.
     */
    get(e) {
      return __PRIVATE_wrapRequest(this.store.get(e)).next((t) => (
        // Normalize nonexistence to null.
        (void 0 === t && (t = null), __PRIVATE_logDebug("SimpleDb", "GET", this.store.name, e, t), t)
      ));
    }
    delete(e) {
      __PRIVATE_logDebug("SimpleDb", "DELETE", this.store.name, e);
      return __PRIVATE_wrapRequest(this.store.delete(e));
    }
    /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */
    count() {
      __PRIVATE_logDebug("SimpleDb", "COUNT", this.store.name);
      return __PRIVATE_wrapRequest(this.store.count());
    }
    W(e, t) {
      const n = this.options(e, t), r2 = n.index ? this.store.index(n.index) : this.store;
      if ("function" == typeof r2.getAll) {
        const e2 = r2.getAll(n.range);
        return new PersistencePromise((t2, n2) => {
          e2.onerror = (e3) => {
            n2(e3.target.error);
          }, e2.onsuccess = (e3) => {
            t2(e3.target.result);
          };
        });
      }
      {
        const e2 = this.cursor(n), t2 = [];
        return this.G(e2, (e3, n2) => {
          t2.push(n2);
        }).next(() => t2);
      }
    }
    /**
     * Loads the first `count` elements from the provided index range. Loads all
     * elements if no limit is provided.
     */
    j(e, t) {
      const n = this.store.getAll(e, null === t ? void 0 : t);
      return new PersistencePromise((e2, t2) => {
        n.onerror = (e3) => {
          t2(e3.target.error);
        }, n.onsuccess = (t3) => {
          e2(t3.target.result);
        };
      });
    }
    H(e, t) {
      __PRIVATE_logDebug("SimpleDb", "DELETE ALL", this.store.name);
      const n = this.options(e, t);
      n.J = false;
      const r2 = this.cursor(n);
      return this.G(r2, (e2, t2, n2) => n2.delete());
    }
    Y(e, t) {
      let n;
      t ? n = e : (n = {}, t = e);
      const r2 = this.cursor(n);
      return this.G(r2, t);
    }
    /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */
    Z(e) {
      const t = this.cursor({});
      return new PersistencePromise((n, r2) => {
        t.onerror = (e2) => {
          const t2 = __PRIVATE_checkForAndReportiOSError(e2.target.error);
          r2(t2);
        }, t.onsuccess = (t2) => {
          const r3 = t2.target.result;
          r3 ? e(r3.primaryKey, r3.value).next((e2) => {
            e2 ? r3.continue() : n();
          }) : n();
        };
      });
    }
    G(e, t) {
      const n = [];
      return new PersistencePromise((r2, i) => {
        e.onerror = (e2) => {
          i(e2.target.error);
        }, e.onsuccess = (e2) => {
          const i2 = e2.target.result;
          if (!i2)
            return void r2();
          const s = new __PRIVATE_IterationController(i2), o = t(i2.primaryKey, i2.value, s);
          if (o instanceof PersistencePromise) {
            const e3 = o.catch((e4) => (s.done(), PersistencePromise.reject(e4)));
            n.push(e3);
          }
          s.isDone ? r2() : null === s.$ ? i2.continue() : i2.continue(s.$);
        };
      }).next(() => PersistencePromise.waitFor(n));
    }
    options(e, t) {
      let n;
      return void 0 !== e && ("string" == typeof e ? n = e : t = e), {
        index: n,
        range: t
      };
    }
    cursor(e) {
      let t = "next";
      if (e.reverse && (t = "prev"), e.index) {
        const n = this.store.index(e.index);
        return e.J ? n.openKeyCursor(e.range, t) : n.openCursor(e.range, t);
      }
      return this.store.openCursor(e.range, t);
    }
  };
  function __PRIVATE_wrapRequest(e) {
    return new PersistencePromise((t, n) => {
      e.onsuccess = (e2) => {
        const n2 = e2.target.result;
        t(n2);
      }, e.onerror = (e2) => {
        const t2 = __PRIVATE_checkForAndReportiOSError(e2.target.error);
        n(t2);
      };
    });
  }
  var F2 = false;
  function __PRIVATE_checkForAndReportiOSError(e) {
    const t = __PRIVATE_SimpleDb.S(getUA());
    if (t >= 12.2 && t < 13) {
      const t2 = "An internal error was encountered in the Indexed Database server";
      if (e.message.indexOf(t2) >= 0) {
        const e2 = new FirestoreError("internal", `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t2}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);
        return F2 || (F2 = true, // Throw a global exception outside of this promise chain, for the user to
        // potentially catch.
        setTimeout(() => {
          throw e2;
        }, 0)), e2;
      }
    }
    return e;
  }
  var __PRIVATE_ListenSequence = class {
    constructor(e, t) {
      this.previousValue = e, t && (t.sequenceNumberHandler = (e2) => this.se(e2), this.oe = (e2) => t.writeSequenceNumber(e2));
    }
    se(e) {
      return this.previousValue = Math.max(e, this.previousValue), this.previousValue;
    }
    next() {
      const e = ++this.previousValue;
      return this.oe && this.oe(e), e;
    }
  };
  __PRIVATE_ListenSequence._e = -1;
  function __PRIVATE_isNullOrUndefined(e) {
    return null == e;
  }
  function __PRIVATE_isNegativeZero(e) {
    return 0 === e && 1 / e == -1 / 0;
  }
  function isSafeInteger(e) {
    return "number" == typeof e && Number.isInteger(e) && !__PRIVATE_isNegativeZero(e) && e <= Number.MAX_SAFE_INTEGER && e >= Number.MIN_SAFE_INTEGER;
  }
  var H2 = [...[...[...[...["mutationQueues", "mutations", "documentMutations", "remoteDocuments", "targets", "owner", "targetGlobal", "targetDocuments"], "clientMetadata"], "remoteDocumentGlobal"], "collectionParents"], "bundles", "namedQueries"];
  var J2 = [...H2, "documentOverlays"];
  var Y2 = ["mutationQueues", "mutations", "documentMutations", "remoteDocumentsV14", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries", "documentOverlays"];
  var Z2 = Y2;
  var X2 = [...Z2, "indexConfiguration", "indexState", "indexEntries"];
  function __PRIVATE_objectSize(e) {
    let t = 0;
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && t++;
    return t;
  }
  function forEach(e, t) {
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n]);
  }
  function isEmpty(e) {
    for (const t in e)
      if (Object.prototype.hasOwnProperty.call(e, t))
        return false;
    return true;
  }
  var SortedMap = class _SortedMap {
    constructor(e, t) {
      this.comparator = e, this.root = t || LLRBNode.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
    insert(e, t) {
      return new _SortedMap(this.comparator, this.root.insert(e, t, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
    }
    // Returns a copy of the map, with the specified key removed.
    remove(e) {
      return new _SortedMap(this.comparator, this.root.remove(e, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
    }
    // Returns the value of the node with the given key, or null.
    get(e) {
      let t = this.root;
      for (; !t.isEmpty(); ) {
        const n = this.comparator(e, t.key);
        if (0 === n)
          return t.value;
        n < 0 ? t = t.left : n > 0 && (t = t.right);
      }
      return null;
    }
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    indexOf(e) {
      let t = 0, n = this.root;
      for (; !n.isEmpty(); ) {
        const r2 = this.comparator(e, n.key);
        if (0 === r2)
          return t + n.left.size;
        r2 < 0 ? n = n.left : (
          // Count all nodes left of the node plus the node itself
          (t += n.left.size + 1, n = n.right)
        );
      }
      return -1;
    }
    isEmpty() {
      return this.root.isEmpty();
    }
    // Returns the total number of nodes in the map.
    get size() {
      return this.root.size;
    }
    // Returns the minimum key in the map.
    minKey() {
      return this.root.minKey();
    }
    // Returns the maximum key in the map.
    maxKey() {
      return this.root.maxKey();
    }
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    inorderTraversal(e) {
      return this.root.inorderTraversal(e);
    }
    forEach(e) {
      this.inorderTraversal((t, n) => (e(t, n), false));
    }
    toString() {
      const e = [];
      return this.inorderTraversal((t, n) => (e.push(`${t}:${n}`), false)), `{${e.join(", ")}}`;
    }
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    reverseTraversal(e) {
      return this.root.reverseTraversal(e);
    }
    // Returns an iterator over the SortedMap.
    getIterator() {
      return new SortedMapIterator(this.root, null, this.comparator, false);
    }
    getIteratorFrom(e) {
      return new SortedMapIterator(this.root, e, this.comparator, false);
    }
    getReverseIterator() {
      return new SortedMapIterator(this.root, null, this.comparator, true);
    }
    getReverseIteratorFrom(e) {
      return new SortedMapIterator(this.root, e, this.comparator, true);
    }
  };
  var SortedMapIterator = class {
    constructor(e, t, n, r2) {
      this.isReverse = r2, this.nodeStack = [];
      let i = 1;
      for (; !e.isEmpty(); )
        if (i = t ? n(e.key, t) : 1, // flip the comparison if we're going in reverse
        t && r2 && (i *= -1), i < 0)
          e = this.isReverse ? e.left : e.right;
        else {
          if (0 === i) {
            this.nodeStack.push(e);
            break;
          }
          this.nodeStack.push(e), e = this.isReverse ? e.right : e.left;
        }
    }
    getNext() {
      let e = this.nodeStack.pop();
      const t = {
        key: e.key,
        value: e.value
      };
      if (this.isReverse)
        for (e = e.left; !e.isEmpty(); )
          this.nodeStack.push(e), e = e.right;
      else
        for (e = e.right; !e.isEmpty(); )
          this.nodeStack.push(e), e = e.left;
      return t;
    }
    hasNext() {
      return this.nodeStack.length > 0;
    }
    peek() {
      if (0 === this.nodeStack.length)
        return null;
      const e = this.nodeStack[this.nodeStack.length - 1];
      return {
        key: e.key,
        value: e.value
      };
    }
  };
  var LLRBNode = class _LLRBNode {
    constructor(e, t, n, r2, i) {
      this.key = e, this.value = t, this.color = null != n ? n : _LLRBNode.RED, this.left = null != r2 ? r2 : _LLRBNode.EMPTY, this.right = null != i ? i : _LLRBNode.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
    copy(e, t, n, r2, i) {
      return new _LLRBNode(null != e ? e : this.key, null != t ? t : this.value, null != n ? n : this.color, null != r2 ? r2 : this.left, null != i ? i : this.right);
    }
    isEmpty() {
      return false;
    }
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    inorderTraversal(e) {
      return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e);
    }
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    reverseTraversal(e) {
      return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
    }
    // Returns the minimum node in the tree.
    min() {
      return this.left.isEmpty() ? this : this.left.min();
    }
    // Returns the maximum key in the tree.
    minKey() {
      return this.min().key;
    }
    // Returns the maximum key in the tree.
    maxKey() {
      return this.right.isEmpty() ? this.key : this.right.maxKey();
    }
    // Returns new tree, with the key/value added.
    insert(e, t, n) {
      let r2 = this;
      const i = n(e, r2.key);
      return r2 = i < 0 ? r2.copy(null, null, null, r2.left.insert(e, t, n), null) : 0 === i ? r2.copy(null, t, null, null, null) : r2.copy(null, null, null, null, r2.right.insert(e, t, n)), r2.fixUp();
    }
    removeMin() {
      if (this.left.isEmpty())
        return _LLRBNode.EMPTY;
      let e = this;
      return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp();
    }
    // Returns new tree, with the specified item removed.
    remove(e, t) {
      let n, r2 = this;
      if (t(e, r2.key) < 0)
        r2.left.isEmpty() || r2.left.isRed() || r2.left.left.isRed() || (r2 = r2.moveRedLeft()), r2 = r2.copy(null, null, null, r2.left.remove(e, t), null);
      else {
        if (r2.left.isRed() && (r2 = r2.rotateRight()), r2.right.isEmpty() || r2.right.isRed() || r2.right.left.isRed() || (r2 = r2.moveRedRight()), 0 === t(e, r2.key)) {
          if (r2.right.isEmpty())
            return _LLRBNode.EMPTY;
          n = r2.right.min(), r2 = r2.copy(n.key, n.value, null, null, r2.right.removeMin());
        }
        r2 = r2.copy(null, null, null, null, r2.right.remove(e, t));
      }
      return r2.fixUp();
    }
    isRed() {
      return this.color;
    }
    // Returns new tree after performing any needed rotations.
    fixUp() {
      let e = this;
      return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e;
    }
    moveRedLeft() {
      let e = this.colorFlip();
      return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e;
    }
    moveRedRight() {
      let e = this.colorFlip();
      return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e;
    }
    rotateLeft() {
      const e = this.copy(null, null, _LLRBNode.RED, null, this.right.left);
      return this.right.copy(null, null, this.color, e, null);
    }
    rotateRight() {
      const e = this.copy(null, null, _LLRBNode.RED, this.left.right, null);
      return this.left.copy(null, null, this.color, null, e);
    }
    colorFlip() {
      const e = this.left.copy(null, null, !this.left.color, null, null), t = this.right.copy(null, null, !this.right.color, null, null);
      return this.copy(null, null, !this.color, e, t);
    }
    // For testing.
    checkMaxDepth() {
      const e = this.check();
      return Math.pow(2, e) <= this.size + 1;
    }
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    check() {
      if (this.isRed() && this.left.isRed())
        throw fail();
      if (this.right.isRed())
        throw fail();
      const e = this.left.check();
      if (e !== this.right.check())
        throw fail();
      return e + (this.isRed() ? 0 : 1);
    }
  };
  LLRBNode.EMPTY = null, LLRBNode.RED = true, LLRBNode.BLACK = false;
  LLRBNode.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
  class LLRBEmptyNode {
    constructor() {
      this.size = 0;
    }
    get key() {
      throw fail();
    }
    get value() {
      throw fail();
    }
    get color() {
      throw fail();
    }
    get left() {
      throw fail();
    }
    get right() {
      throw fail();
    }
    // Returns a copy of the current node.
    copy(e, t, n, r2, i) {
      return this;
    }
    // Returns a copy of the tree, with the specified key/value added.
    insert(e, t, n) {
      return new LLRBNode(e, t);
    }
    // Returns a copy of the tree, with the specified key removed.
    remove(e, t) {
      return this;
    }
    isEmpty() {
      return true;
    }
    inorderTraversal(e) {
      return false;
    }
    reverseTraversal(e) {
      return false;
    }
    minKey() {
      return null;
    }
    maxKey() {
      return null;
    }
    isRed() {
      return false;
    }
    // For testing.
    checkMaxDepth() {
      return true;
    }
    check() {
      return 0;
    }
  }();
  var SortedSet = class _SortedSet {
    constructor(e) {
      this.comparator = e, this.data = new SortedMap(this.comparator);
    }
    has(e) {
      return null !== this.data.get(e);
    }
    first() {
      return this.data.minKey();
    }
    last() {
      return this.data.maxKey();
    }
    get size() {
      return this.data.size;
    }
    indexOf(e) {
      return this.data.indexOf(e);
    }
    /** Iterates elements in order defined by "comparator" */
    forEach(e) {
      this.data.inorderTraversal((t, n) => (e(t), false));
    }
    /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
    forEachInRange(e, t) {
      const n = this.data.getIteratorFrom(e[0]);
      for (; n.hasNext(); ) {
        const r2 = n.getNext();
        if (this.comparator(r2.key, e[1]) >= 0)
          return;
        t(r2.key);
      }
    }
    /**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */
    forEachWhile(e, t) {
      let n;
      for (n = void 0 !== t ? this.data.getIteratorFrom(t) : this.data.getIterator(); n.hasNext(); ) {
        if (!e(n.getNext().key))
          return;
      }
    }
    /** Finds the least element greater than or equal to `elem`. */
    firstAfterOrEqual(e) {
      const t = this.data.getIteratorFrom(e);
      return t.hasNext() ? t.getNext().key : null;
    }
    getIterator() {
      return new SortedSetIterator(this.data.getIterator());
    }
    getIteratorFrom(e) {
      return new SortedSetIterator(this.data.getIteratorFrom(e));
    }
    /** Inserts or updates an element */
    add(e) {
      return this.copy(this.data.remove(e).insert(e, true));
    }
    /** Deletes an element */
    delete(e) {
      return this.has(e) ? this.copy(this.data.remove(e)) : this;
    }
    isEmpty() {
      return this.data.isEmpty();
    }
    unionWith(e) {
      let t = this;
      return t.size < e.size && (t = e, e = this), e.forEach((e2) => {
        t = t.add(e2);
      }), t;
    }
    isEqual(e) {
      if (!(e instanceof _SortedSet))
        return false;
      if (this.size !== e.size)
        return false;
      const t = this.data.getIterator(), n = e.data.getIterator();
      for (; t.hasNext(); ) {
        const e2 = t.getNext().key, r2 = n.getNext().key;
        if (0 !== this.comparator(e2, r2))
          return false;
      }
      return true;
    }
    toArray() {
      const e = [];
      return this.forEach((t) => {
        e.push(t);
      }), e;
    }
    toString() {
      const e = [];
      return this.forEach((t) => e.push(t)), "SortedSet(" + e.toString() + ")";
    }
    copy(e) {
      const t = new _SortedSet(this.comparator);
      return t.data = e, t;
    }
  };
  var SortedSetIterator = class {
    constructor(e) {
      this.iter = e;
    }
    getNext() {
      return this.iter.getNext().key;
    }
    hasNext() {
      return this.iter.hasNext();
    }
  };
  var FieldMask = class _FieldMask {
    constructor(e) {
      this.fields = e, // TODO(dimond): validation of FieldMask
      // Sort the field mask to support `FieldMask.isEqual()` and assert below.
      e.sort(FieldPath$1.comparator);
    }
    static empty() {
      return new _FieldMask([]);
    }
    /**
     * Returns a new FieldMask object that is the result of adding all the given
     * fields paths to this field mask.
     */
    unionWith(e) {
      let t = new SortedSet(FieldPath$1.comparator);
      for (const e2 of this.fields)
        t = t.add(e2);
      for (const n of e)
        t = t.add(n);
      return new _FieldMask(t.toArray());
    }
    /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */
    covers(e) {
      for (const t of this.fields)
        if (t.isPrefixOf(e))
          return true;
      return false;
    }
    isEqual(e) {
      return __PRIVATE_arrayEquals(this.fields, e.fields, (e2, t) => e2.isEqual(t));
    }
  };
  var __PRIVATE_Base64DecodeError = class extends Error {
    constructor() {
      super(...arguments), this.name = "Base64DecodeError";
    }
  };
  var ByteString = class _ByteString {
    constructor(e) {
      this.binaryString = e;
    }
    static fromBase64String(e) {
      const t = function __PRIVATE_decodeBase64(e2) {
        try {
          return atob(e2);
        } catch (e3) {
          throw "undefined" != typeof DOMException && e3 instanceof DOMException ? new __PRIVATE_Base64DecodeError("Invalid base64 string: " + e3) : e3;
        }
      }(e);
      return new _ByteString(t);
    }
    static fromUint8Array(e) {
      const t = (
        /**
        * Helper function to convert an Uint8array to a binary string.
        */
        function __PRIVATE_binaryStringFromUint8Array(e2) {
          let t2 = "";
          for (let n = 0; n < e2.length; ++n)
            t2 += String.fromCharCode(e2[n]);
          return t2;
        }(e)
      );
      return new _ByteString(t);
    }
    [Symbol.iterator]() {
      let e = 0;
      return {
        next: () => e < this.binaryString.length ? {
          value: this.binaryString.charCodeAt(e++),
          done: false
        } : {
          value: void 0,
          done: true
        }
      };
    }
    toBase64() {
      return function __PRIVATE_encodeBase64(e) {
        return btoa(e);
      }(this.binaryString);
    }
    toUint8Array() {
      return function __PRIVATE_uint8ArrayFromBinaryString(e) {
        const t = new Uint8Array(e.length);
        for (let n = 0; n < e.length; n++)
          t[n] = e.charCodeAt(n);
        return t;
      }(this.binaryString);
    }
    approximateByteSize() {
      return 2 * this.binaryString.length;
    }
    compareTo(e) {
      return __PRIVATE_primitiveComparator(this.binaryString, e.binaryString);
    }
    isEqual(e) {
      return this.binaryString === e.binaryString;
    }
  };
  ByteString.EMPTY_BYTE_STRING = new ByteString("");
  var ee = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
  function __PRIVATE_normalizeTimestamp(e) {
    if (__PRIVATE_hardAssert(!!e), "string" == typeof e) {
      let t = 0;
      const n = ee.exec(e);
      if (__PRIVATE_hardAssert(!!n), n[1]) {
        let e2 = n[1];
        e2 = (e2 + "000000000").substr(0, 9), t = Number(e2);
      }
      const r2 = new Date(e);
      return {
        seconds: Math.floor(r2.getTime() / 1e3),
        nanos: t
      };
    }
    return {
      seconds: __PRIVATE_normalizeNumber(e.seconds),
      nanos: __PRIVATE_normalizeNumber(e.nanos)
    };
  }
  function __PRIVATE_normalizeNumber(e) {
    return "number" == typeof e ? e : "string" == typeof e ? Number(e) : 0;
  }
  function __PRIVATE_normalizeByteString(e) {
    return "string" == typeof e ? ByteString.fromBase64String(e) : ByteString.fromUint8Array(e);
  }
  function __PRIVATE_isServerTimestamp(e) {
    var t, n;
    return "server_timestamp" === (null === (n = ((null === (t = null == e ? void 0 : e.mapValue) || void 0 === t ? void 0 : t.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
  }
  function __PRIVATE_getPreviousValue(e) {
    const t = e.mapValue.fields.__previous_value__;
    return __PRIVATE_isServerTimestamp(t) ? __PRIVATE_getPreviousValue(t) : t;
  }
  function __PRIVATE_getLocalWriteTime(e) {
    const t = __PRIVATE_normalizeTimestamp(e.mapValue.fields.__local_write_time__.timestampValue);
    return new Timestamp(t.seconds, t.nanos);
  }
  var DatabaseInfo = class {
    /**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param appId - The Firebase App Id.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     * @param longPollingOptions Options that configure long-polling.
     * @param useFetchStreams Whether to use the Fetch API instead of
     * XMLHTTPRequest
     */
    constructor(e, t, n, r2, i, s, o, _, a) {
      this.databaseId = e, this.appId = t, this.persistenceKey = n, this.host = r2, this.ssl = i, this.forceLongPolling = s, this.autoDetectLongPolling = o, this.longPollingOptions = _, this.useFetchStreams = a;
    }
  };
  var DatabaseId = class _DatabaseId {
    constructor(e, t) {
      this.projectId = e, this.database = t || "(default)";
    }
    static empty() {
      return new _DatabaseId("", "");
    }
    get isDefaultDatabase() {
      return "(default)" === this.database;
    }
    isEqual(e) {
      return e instanceof _DatabaseId && e.projectId === this.projectId && e.database === this.database;
    }
  };
  var te = {
    mapValue: {
      fields: {
        __type__: {
          stringValue: "__max__"
        }
      }
    }
  };
  function __PRIVATE_typeOrder(e) {
    return "nullValue" in e ? 0 : "booleanValue" in e ? 1 : "integerValue" in e || "doubleValue" in e ? 2 : "timestampValue" in e ? 3 : "stringValue" in e ? 5 : "bytesValue" in e ? 6 : "referenceValue" in e ? 7 : "geoPointValue" in e ? 8 : "arrayValue" in e ? 9 : "mapValue" in e ? __PRIVATE_isServerTimestamp(e) ? 4 : __PRIVATE_isMaxValue(e) ? 9007199254740991 : 10 : fail();
  }
  function __PRIVATE_valueEquals(e, t) {
    if (e === t)
      return true;
    const n = __PRIVATE_typeOrder(e);
    if (n !== __PRIVATE_typeOrder(t))
      return false;
    switch (n) {
      case 0:
      case 9007199254740991:
        return true;
      case 1:
        return e.booleanValue === t.booleanValue;
      case 4:
        return __PRIVATE_getLocalWriteTime(e).isEqual(__PRIVATE_getLocalWriteTime(t));
      case 3:
        return function __PRIVATE_timestampEquals(e2, t2) {
          if ("string" == typeof e2.timestampValue && "string" == typeof t2.timestampValue && e2.timestampValue.length === t2.timestampValue.length)
            return e2.timestampValue === t2.timestampValue;
          const n2 = __PRIVATE_normalizeTimestamp(e2.timestampValue), r2 = __PRIVATE_normalizeTimestamp(t2.timestampValue);
          return n2.seconds === r2.seconds && n2.nanos === r2.nanos;
        }(e, t);
      case 5:
        return e.stringValue === t.stringValue;
      case 6:
        return function __PRIVATE_blobEquals(e2, t2) {
          return __PRIVATE_normalizeByteString(e2.bytesValue).isEqual(__PRIVATE_normalizeByteString(t2.bytesValue));
        }(e, t);
      case 7:
        return e.referenceValue === t.referenceValue;
      case 8:
        return function __PRIVATE_geoPointEquals(e2, t2) {
          return __PRIVATE_normalizeNumber(e2.geoPointValue.latitude) === __PRIVATE_normalizeNumber(t2.geoPointValue.latitude) && __PRIVATE_normalizeNumber(e2.geoPointValue.longitude) === __PRIVATE_normalizeNumber(t2.geoPointValue.longitude);
        }(e, t);
      case 2:
        return function __PRIVATE_numberEquals(e2, t2) {
          if ("integerValue" in e2 && "integerValue" in t2)
            return __PRIVATE_normalizeNumber(e2.integerValue) === __PRIVATE_normalizeNumber(t2.integerValue);
          if ("doubleValue" in e2 && "doubleValue" in t2) {
            const n2 = __PRIVATE_normalizeNumber(e2.doubleValue), r2 = __PRIVATE_normalizeNumber(t2.doubleValue);
            return n2 === r2 ? __PRIVATE_isNegativeZero(n2) === __PRIVATE_isNegativeZero(r2) : isNaN(n2) && isNaN(r2);
          }
          return false;
        }(e, t);
      case 9:
        return __PRIVATE_arrayEquals(e.arrayValue.values || [], t.arrayValue.values || [], __PRIVATE_valueEquals);
      case 10:
        return function __PRIVATE_objectEquals(e2, t2) {
          const n2 = e2.mapValue.fields || {}, r2 = t2.mapValue.fields || {};
          if (__PRIVATE_objectSize(n2) !== __PRIVATE_objectSize(r2))
            return false;
          for (const e3 in n2)
            if (n2.hasOwnProperty(e3) && (void 0 === r2[e3] || !__PRIVATE_valueEquals(n2[e3], r2[e3])))
              return false;
          return true;
        }(e, t);
      default:
        return fail();
    }
  }
  function __PRIVATE_arrayValueContains(e, t) {
    return void 0 !== (e.values || []).find((e2) => __PRIVATE_valueEquals(e2, t));
  }
  function __PRIVATE_valueCompare(e, t) {
    if (e === t)
      return 0;
    const n = __PRIVATE_typeOrder(e), r2 = __PRIVATE_typeOrder(t);
    if (n !== r2)
      return __PRIVATE_primitiveComparator(n, r2);
    switch (n) {
      case 0:
      case 9007199254740991:
        return 0;
      case 1:
        return __PRIVATE_primitiveComparator(e.booleanValue, t.booleanValue);
      case 2:
        return function __PRIVATE_compareNumbers(e2, t2) {
          const n2 = __PRIVATE_normalizeNumber(e2.integerValue || e2.doubleValue), r3 = __PRIVATE_normalizeNumber(t2.integerValue || t2.doubleValue);
          return n2 < r3 ? -1 : n2 > r3 ? 1 : n2 === r3 ? 0 : (
            // one or both are NaN.
            isNaN(n2) ? isNaN(r3) ? 0 : -1 : 1
          );
        }(e, t);
      case 3:
        return __PRIVATE_compareTimestamps(e.timestampValue, t.timestampValue);
      case 4:
        return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(e), __PRIVATE_getLocalWriteTime(t));
      case 5:
        return __PRIVATE_primitiveComparator(e.stringValue, t.stringValue);
      case 6:
        return function __PRIVATE_compareBlobs(e2, t2) {
          const n2 = __PRIVATE_normalizeByteString(e2), r3 = __PRIVATE_normalizeByteString(t2);
          return n2.compareTo(r3);
        }(e.bytesValue, t.bytesValue);
      case 7:
        return function __PRIVATE_compareReferences(e2, t2) {
          const n2 = e2.split("/"), r3 = t2.split("/");
          for (let e3 = 0; e3 < n2.length && e3 < r3.length; e3++) {
            const t3 = __PRIVATE_primitiveComparator(n2[e3], r3[e3]);
            if (0 !== t3)
              return t3;
          }
          return __PRIVATE_primitiveComparator(n2.length, r3.length);
        }(e.referenceValue, t.referenceValue);
      case 8:
        return function __PRIVATE_compareGeoPoints(e2, t2) {
          const n2 = __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e2.latitude), __PRIVATE_normalizeNumber(t2.latitude));
          if (0 !== n2)
            return n2;
          return __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e2.longitude), __PRIVATE_normalizeNumber(t2.longitude));
        }(e.geoPointValue, t.geoPointValue);
      case 9:
        return function __PRIVATE_compareArrays(e2, t2) {
          const n2 = e2.values || [], r3 = t2.values || [];
          for (let e3 = 0; e3 < n2.length && e3 < r3.length; ++e3) {
            const t3 = __PRIVATE_valueCompare(n2[e3], r3[e3]);
            if (t3)
              return t3;
          }
          return __PRIVATE_primitiveComparator(n2.length, r3.length);
        }(e.arrayValue, t.arrayValue);
      case 10:
        return function __PRIVATE_compareMaps(e2, t2) {
          if (e2 === te.mapValue && t2 === te.mapValue)
            return 0;
          if (e2 === te.mapValue)
            return 1;
          if (t2 === te.mapValue)
            return -1;
          const n2 = e2.fields || {}, r3 = Object.keys(n2), i = t2.fields || {}, s = Object.keys(i);
          r3.sort(), s.sort();
          for (let e3 = 0; e3 < r3.length && e3 < s.length; ++e3) {
            const t3 = __PRIVATE_primitiveComparator(r3[e3], s[e3]);
            if (0 !== t3)
              return t3;
            const o = __PRIVATE_valueCompare(n2[r3[e3]], i[s[e3]]);
            if (0 !== o)
              return o;
          }
          return __PRIVATE_primitiveComparator(r3.length, s.length);
        }(e.mapValue, t.mapValue);
      default:
        throw fail();
    }
  }
  function __PRIVATE_compareTimestamps(e, t) {
    if ("string" == typeof e && "string" == typeof t && e.length === t.length)
      return __PRIVATE_primitiveComparator(e, t);
    const n = __PRIVATE_normalizeTimestamp(e), r2 = __PRIVATE_normalizeTimestamp(t), i = __PRIVATE_primitiveComparator(n.seconds, r2.seconds);
    return 0 !== i ? i : __PRIVATE_primitiveComparator(n.nanos, r2.nanos);
  }
  function canonicalId(e) {
    return __PRIVATE_canonifyValue(e);
  }
  function __PRIVATE_canonifyValue(e) {
    return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function __PRIVATE_canonifyTimestamp(e2) {
      const t = __PRIVATE_normalizeTimestamp(e2);
      return `time(${t.seconds},${t.nanos})`;
    }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? function __PRIVATE_canonifyByteString(e2) {
      return __PRIVATE_normalizeByteString(e2).toBase64();
    }(e.bytesValue) : "referenceValue" in e ? function __PRIVATE_canonifyReference(e2) {
      return DocumentKey.fromName(e2).toString();
    }(e.referenceValue) : "geoPointValue" in e ? function __PRIVATE_canonifyGeoPoint(e2) {
      return `geo(${e2.latitude},${e2.longitude})`;
    }(e.geoPointValue) : "arrayValue" in e ? function __PRIVATE_canonifyArray(e2) {
      let t = "[", n = true;
      for (const r2 of e2.values || [])
        n ? n = false : t += ",", t += __PRIVATE_canonifyValue(r2);
      return t + "]";
    }(e.arrayValue) : "mapValue" in e ? function __PRIVATE_canonifyMap(e2) {
      const t = Object.keys(e2.fields || {}).sort();
      let n = "{", r2 = true;
      for (const i of t)
        r2 ? r2 = false : n += ",", n += `${i}:${__PRIVATE_canonifyValue(e2.fields[i])}`;
      return n + "}";
    }(e.mapValue) : fail();
  }
  function isInteger(e) {
    return !!e && "integerValue" in e;
  }
  function isArray(e) {
    return !!e && "arrayValue" in e;
  }
  function __PRIVATE_isMapValue(e) {
    return !!e && "mapValue" in e;
  }
  function __PRIVATE_deepClone(e) {
    if (e.geoPointValue)
      return {
        geoPointValue: Object.assign({}, e.geoPointValue)
      };
    if (e.timestampValue && "object" == typeof e.timestampValue)
      return {
        timestampValue: Object.assign({}, e.timestampValue)
      };
    if (e.mapValue) {
      const t = {
        mapValue: {
          fields: {}
        }
      };
      return forEach(e.mapValue.fields, (e2, n) => t.mapValue.fields[e2] = __PRIVATE_deepClone(n)), t;
    }
    if (e.arrayValue) {
      const t = {
        arrayValue: {
          values: []
        }
      };
      for (let n = 0; n < (e.arrayValue.values || []).length; ++n)
        t.arrayValue.values[n] = __PRIVATE_deepClone(e.arrayValue.values[n]);
      return t;
    }
    return Object.assign({}, e);
  }
  function __PRIVATE_isMaxValue(e) {
    return "__max__" === (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue;
  }
  var ObjectValue = class _ObjectValue {
    constructor(e) {
      this.value = e;
    }
    static empty() {
      return new _ObjectValue({
        mapValue: {}
      });
    }
    /**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or null if the path is not set.
     */
    field(e) {
      if (e.isEmpty())
        return this.value;
      {
        let t = this.value;
        for (let n = 0; n < e.length - 1; ++n)
          if (t = (t.mapValue.fields || {})[e.get(n)], !__PRIVATE_isMapValue(t))
            return null;
        return t = (t.mapValue.fields || {})[e.lastSegment()], t || null;
      }
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     */
    set(e, t) {
      this.getFieldsMap(e.popLast())[e.lastSegment()] = __PRIVATE_deepClone(t);
    }
    /**
     * Sets the provided fields to the provided values.
     *
     * @param data - A map of fields to values (or null for deletes).
     */
    setAll(e) {
      let t = FieldPath$1.emptyPath(), n = {}, r2 = [];
      e.forEach((e2, i2) => {
        if (!t.isImmediateParentOf(i2)) {
          const e3 = this.getFieldsMap(t);
          this.applyChanges(e3, n, r2), n = {}, r2 = [], t = i2.popLast();
        }
        e2 ? n[i2.lastSegment()] = __PRIVATE_deepClone(e2) : r2.push(i2.lastSegment());
      });
      const i = this.getFieldsMap(t);
      this.applyChanges(i, n, r2);
    }
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     */
    delete(e) {
      const t = this.field(e.popLast());
      __PRIVATE_isMapValue(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()];
    }
    isEqual(e) {
      return __PRIVATE_valueEquals(this.value, e.value);
    }
    /**
     * Returns the map that contains the leaf element of `path`. If the parent
     * entry does not yet exist, or if it is not a map, a new map will be created.
     */
    getFieldsMap(e) {
      let t = this.value;
      t.mapValue.fields || (t.mapValue = {
        fields: {}
      });
      for (let n = 0; n < e.length; ++n) {
        let r2 = t.mapValue.fields[e.get(n)];
        __PRIVATE_isMapValue(r2) && r2.mapValue.fields || (r2 = {
          mapValue: {
            fields: {}
          }
        }, t.mapValue.fields[e.get(n)] = r2), t = r2;
      }
      return t.mapValue.fields;
    }
    /**
     * Modifies `fieldsMap` by adding, replacing or deleting the specified
     * entries.
     */
    applyChanges(e, t, n) {
      forEach(t, (t2, n2) => e[t2] = n2);
      for (const t2 of n)
        delete e[t2];
    }
    clone() {
      return new _ObjectValue(__PRIVATE_deepClone(this.value));
    }
  };
  function __PRIVATE_extractFieldMask(e) {
    const t = [];
    return forEach(e.fields, (e2, n) => {
      const r2 = new FieldPath$1([e2]);
      if (__PRIVATE_isMapValue(n)) {
        const e3 = __PRIVATE_extractFieldMask(n.mapValue).fields;
        if (0 === e3.length)
          t.push(r2);
        else
          for (const n2 of e3)
            t.push(r2.child(n2));
      } else
        t.push(r2);
    }), new FieldMask(t);
  }
  var MutableDocument = class _MutableDocument {
    constructor(e, t, n, r2, i, s, o) {
      this.key = e, this.documentType = t, this.version = n, this.readTime = r2, this.createTime = i, this.data = s, this.documentState = o;
    }
    /**
     * Creates a document with no known version or data, but which can serve as
     * base document for mutations.
     */
    static newInvalidDocument(e) {
      return new _MutableDocument(
        e,
        0,
        /* version */
        SnapshotVersion.min(),
        /* readTime */
        SnapshotVersion.min(),
        /* createTime */
        SnapshotVersion.min(),
        ObjectValue.empty(),
        0
        /* DocumentState.SYNCED */
      );
    }
    /**
     * Creates a new document that is known to exist with the given data at the
     * given version.
     */
    static newFoundDocument(e, t, n, r2) {
      return new _MutableDocument(
        e,
        1,
        /* version */
        t,
        /* readTime */
        SnapshotVersion.min(),
        /* createTime */
        n,
        r2,
        0
        /* DocumentState.SYNCED */
      );
    }
    /** Creates a new document that is known to not exist at the given version. */
    static newNoDocument(e, t) {
      return new _MutableDocument(
        e,
        2,
        /* version */
        t,
        /* readTime */
        SnapshotVersion.min(),
        /* createTime */
        SnapshotVersion.min(),
        ObjectValue.empty(),
        0
        /* DocumentState.SYNCED */
      );
    }
    /**
     * Creates a new document that is known to exist at the given version but
     * whose data is not known (e.g. a document that was updated without a known
     * base document).
     */
    static newUnknownDocument(e, t) {
      return new _MutableDocument(
        e,
        3,
        /* version */
        t,
        /* readTime */
        SnapshotVersion.min(),
        /* createTime */
        SnapshotVersion.min(),
        ObjectValue.empty(),
        2
        /* DocumentState.HAS_COMMITTED_MUTATIONS */
      );
    }
    /**
     * Changes the document type to indicate that it exists and that its version
     * and data are known.
     */
    convertToFoundDocument(e, t) {
      return !this.createTime.isEqual(SnapshotVersion.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = e), this.version = e, this.documentType = 1, this.data = t, this.documentState = 0, this;
    }
    /**
     * Changes the document type to indicate that it doesn't exist at the given
     * version.
     */
    convertToNoDocument(e) {
      return this.version = e, this.documentType = 2, this.data = ObjectValue.empty(), this.documentState = 0, this;
    }
    /**
     * Changes the document type to indicate that it exists at a given version but
     * that its data is not known (e.g. a document that was updated without a known
     * base document).
     */
    convertToUnknownDocument(e) {
      return this.version = e, this.documentType = 3, this.data = ObjectValue.empty(), this.documentState = 2, this;
    }
    setHasCommittedMutations() {
      return this.documentState = 2, this;
    }
    setHasLocalMutations() {
      return this.documentState = 1, this.version = SnapshotVersion.min(), this;
    }
    setReadTime(e) {
      return this.readTime = e, this;
    }
    get hasLocalMutations() {
      return 1 === this.documentState;
    }
    get hasCommittedMutations() {
      return 2 === this.documentState;
    }
    get hasPendingWrites() {
      return this.hasLocalMutations || this.hasCommittedMutations;
    }
    isValidDocument() {
      return 0 !== this.documentType;
    }
    isFoundDocument() {
      return 1 === this.documentType;
    }
    isNoDocument() {
      return 2 === this.documentType;
    }
    isUnknownDocument() {
      return 3 === this.documentType;
    }
    isEqual(e) {
      return e instanceof _MutableDocument && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data);
    }
    mutableCopy() {
      return new _MutableDocument(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
    }
    toString() {
      return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
    }
  };
  var Bound = class {
    constructor(e, t) {
      this.position = e, this.inclusive = t;
    }
  };
  function __PRIVATE_boundCompareToDocument(e, t, n) {
    let r2 = 0;
    for (let i = 0; i < e.position.length; i++) {
      const s = t[i], o = e.position[i];
      if (s.field.isKeyField())
        r2 = DocumentKey.comparator(DocumentKey.fromName(o.referenceValue), n.key);
      else {
        r2 = __PRIVATE_valueCompare(o, n.data.field(s.field));
      }
      if ("desc" === s.dir && (r2 *= -1), 0 !== r2)
        break;
    }
    return r2;
  }
  function __PRIVATE_boundEquals(e, t) {
    if (null === e)
      return null === t;
    if (null === t)
      return false;
    if (e.inclusive !== t.inclusive || e.position.length !== t.position.length)
      return false;
    for (let n = 0; n < e.position.length; n++) {
      if (!__PRIVATE_valueEquals(e.position[n], t.position[n]))
        return false;
    }
    return true;
  }
  var OrderBy = class {
    constructor(e, t = "asc") {
      this.field = e, this.dir = t;
    }
  };
  function __PRIVATE_orderByEquals(e, t) {
    return e.dir === t.dir && e.field.isEqual(t.field);
  }
  var Filter = class {
  };
  var FieldFilter = class _FieldFilter extends Filter {
    constructor(e, t, n) {
      super(), this.field = e, this.op = t, this.value = n;
    }
    /**
     * Creates a filter based on the provided arguments.
     */
    static create(e, t, n) {
      return e.isKeyField() ? "in" === t || "not-in" === t ? this.createKeyFieldInFilter(e, t, n) : new __PRIVATE_KeyFieldFilter(e, t, n) : "array-contains" === t ? new __PRIVATE_ArrayContainsFilter(e, n) : "in" === t ? new __PRIVATE_InFilter(e, n) : "not-in" === t ? new __PRIVATE_NotInFilter(e, n) : "array-contains-any" === t ? new __PRIVATE_ArrayContainsAnyFilter(e, n) : new _FieldFilter(e, t, n);
    }
    static createKeyFieldInFilter(e, t, n) {
      return "in" === t ? new __PRIVATE_KeyFieldInFilter(e, n) : new __PRIVATE_KeyFieldNotInFilter(e, n);
    }
    matches(e) {
      const t = e.data.field(this.field);
      return "!=" === this.op ? null !== t && this.matchesComparison(__PRIVATE_valueCompare(t, this.value)) : null !== t && __PRIVATE_typeOrder(this.value) === __PRIVATE_typeOrder(t) && this.matchesComparison(__PRIVATE_valueCompare(t, this.value));
    }
    matchesComparison(e) {
      switch (this.op) {
        case "<":
          return e < 0;
        case "<=":
          return e <= 0;
        case "==":
          return 0 === e;
        case "!=":
          return 0 !== e;
        case ">":
          return e > 0;
        case ">=":
          return e >= 0;
        default:
          return fail();
      }
    }
    isInequality() {
      return [
        "<",
        "<=",
        ">",
        ">=",
        "!=",
        "not-in"
        /* Operator.NOT_IN */
      ].indexOf(this.op) >= 0;
    }
    getFlattenedFilters() {
      return [this];
    }
    getFilters() {
      return [this];
    }
  };
  var CompositeFilter = class _CompositeFilter extends Filter {
    constructor(e, t) {
      super(), this.filters = e, this.op = t, this.ue = null;
    }
    /**
     * Creates a filter based on the provided arguments.
     */
    static create(e, t) {
      return new _CompositeFilter(e, t);
    }
    matches(e) {
      return __PRIVATE_compositeFilterIsConjunction(this) ? void 0 === this.filters.find((t) => !t.matches(e)) : void 0 !== this.filters.find((t) => t.matches(e));
    }
    getFlattenedFilters() {
      return null !== this.ue || (this.ue = this.filters.reduce((e, t) => e.concat(t.getFlattenedFilters()), [])), this.ue;
    }
    // Returns a mutable copy of `this.filters`
    getFilters() {
      return Object.assign([], this.filters);
    }
  };
  function __PRIVATE_compositeFilterIsConjunction(e) {
    return "and" === e.op;
  }
  function __PRIVATE_compositeFilterIsFlatConjunction(e) {
    return __PRIVATE_compositeFilterIsFlat(e) && __PRIVATE_compositeFilterIsConjunction(e);
  }
  function __PRIVATE_compositeFilterIsFlat(e) {
    for (const t of e.filters)
      if (t instanceof CompositeFilter)
        return false;
    return true;
  }
  function __PRIVATE_canonifyFilter(e) {
    if (e instanceof FieldFilter)
      return e.field.canonicalString() + e.op.toString() + canonicalId(e.value);
    if (__PRIVATE_compositeFilterIsFlatConjunction(e))
      return e.filters.map((e2) => __PRIVATE_canonifyFilter(e2)).join(",");
    {
      const t = e.filters.map((e2) => __PRIVATE_canonifyFilter(e2)).join(",");
      return `${e.op}(${t})`;
    }
  }
  function __PRIVATE_filterEquals(e, t) {
    return e instanceof FieldFilter ? function __PRIVATE_fieldFilterEquals(e2, t2) {
      return t2 instanceof FieldFilter && e2.op === t2.op && e2.field.isEqual(t2.field) && __PRIVATE_valueEquals(e2.value, t2.value);
    }(e, t) : e instanceof CompositeFilter ? function __PRIVATE_compositeFilterEquals(e2, t2) {
      if (t2 instanceof CompositeFilter && e2.op === t2.op && e2.filters.length === t2.filters.length) {
        return e2.filters.reduce((e3, n, r2) => e3 && __PRIVATE_filterEquals(n, t2.filters[r2]), true);
      }
      return false;
    }(e, t) : void fail();
  }
  function __PRIVATE_stringifyFilter(e) {
    return e instanceof FieldFilter ? function __PRIVATE_stringifyFieldFilter(e2) {
      return `${e2.field.canonicalString()} ${e2.op} ${canonicalId(e2.value)}`;
    }(e) : e instanceof CompositeFilter ? function __PRIVATE_stringifyCompositeFilter(e2) {
      return e2.op.toString() + " {" + e2.getFilters().map(__PRIVATE_stringifyFilter).join(" ,") + "}";
    }(e) : "Filter";
  }
  var __PRIVATE_KeyFieldFilter = class extends FieldFilter {
    constructor(e, t, n) {
      super(e, t, n), this.key = DocumentKey.fromName(n.referenceValue);
    }
    matches(e) {
      const t = DocumentKey.comparator(e.key, this.key);
      return this.matchesComparison(t);
    }
  };
  var __PRIVATE_KeyFieldInFilter = class extends FieldFilter {
    constructor(e, t) {
      super(e, "in", t), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("in", t);
    }
    matches(e) {
      return this.keys.some((t) => t.isEqual(e.key));
    }
  };
  var __PRIVATE_KeyFieldNotInFilter = class extends FieldFilter {
    constructor(e, t) {
      super(e, "not-in", t), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("not-in", t);
    }
    matches(e) {
      return !this.keys.some((t) => t.isEqual(e.key));
    }
  };
  function __PRIVATE_extractDocumentKeysFromArrayValue(e, t) {
    var n;
    return ((null === (n = t.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((e2) => DocumentKey.fromName(e2.referenceValue));
  }
  var __PRIVATE_ArrayContainsFilter = class extends FieldFilter {
    constructor(e, t) {
      super(e, "array-contains", t);
    }
    matches(e) {
      const t = e.data.field(this.field);
      return isArray(t) && __PRIVATE_arrayValueContains(t.arrayValue, this.value);
    }
  };
  var __PRIVATE_InFilter = class extends FieldFilter {
    constructor(e, t) {
      super(e, "in", t);
    }
    matches(e) {
      const t = e.data.field(this.field);
      return null !== t && __PRIVATE_arrayValueContains(this.value.arrayValue, t);
    }
  };
  var __PRIVATE_NotInFilter = class extends FieldFilter {
    constructor(e, t) {
      super(e, "not-in", t);
    }
    matches(e) {
      if (__PRIVATE_arrayValueContains(this.value.arrayValue, {
        nullValue: "NULL_VALUE"
      }))
        return false;
      const t = e.data.field(this.field);
      return null !== t && !__PRIVATE_arrayValueContains(this.value.arrayValue, t);
    }
  };
  var __PRIVATE_ArrayContainsAnyFilter = class extends FieldFilter {
    constructor(e, t) {
      super(e, "array-contains-any", t);
    }
    matches(e) {
      const t = e.data.field(this.field);
      return !(!isArray(t) || !t.arrayValue.values) && t.arrayValue.values.some((e2) => __PRIVATE_arrayValueContains(this.value.arrayValue, e2));
    }
  };
  var __PRIVATE_TargetImpl = class {
    constructor(e, t = null, n = [], r2 = [], i = null, s = null, o = null) {
      this.path = e, this.collectionGroup = t, this.orderBy = n, this.filters = r2, this.limit = i, this.startAt = s, this.endAt = o, this.ce = null;
    }
  };
  function __PRIVATE_newTarget(e, t = null, n = [], r2 = [], i = null, s = null, o = null) {
    return new __PRIVATE_TargetImpl(e, t, n, r2, i, s, o);
  }
  function __PRIVATE_canonifyTarget(e) {
    const t = __PRIVATE_debugCast(e);
    if (null === t.ce) {
      let e2 = t.path.canonicalString();
      null !== t.collectionGroup && (e2 += "|cg:" + t.collectionGroup), e2 += "|f:", e2 += t.filters.map((e3) => __PRIVATE_canonifyFilter(e3)).join(","), e2 += "|ob:", e2 += t.orderBy.map((e3) => function __PRIVATE_canonifyOrderBy(e4) {
        return e4.field.canonicalString() + e4.dir;
      }(e3)).join(","), __PRIVATE_isNullOrUndefined(t.limit) || (e2 += "|l:", e2 += t.limit), t.startAt && (e2 += "|lb:", e2 += t.startAt.inclusive ? "b:" : "a:", e2 += t.startAt.position.map((e3) => canonicalId(e3)).join(",")), t.endAt && (e2 += "|ub:", e2 += t.endAt.inclusive ? "a:" : "b:", e2 += t.endAt.position.map((e3) => canonicalId(e3)).join(",")), t.ce = e2;
    }
    return t.ce;
  }
  function __PRIVATE_targetEquals(e, t) {
    if (e.limit !== t.limit)
      return false;
    if (e.orderBy.length !== t.orderBy.length)
      return false;
    for (let n = 0; n < e.orderBy.length; n++)
      if (!__PRIVATE_orderByEquals(e.orderBy[n], t.orderBy[n]))
        return false;
    if (e.filters.length !== t.filters.length)
      return false;
    for (let n = 0; n < e.filters.length; n++)
      if (!__PRIVATE_filterEquals(e.filters[n], t.filters[n]))
        return false;
    return e.collectionGroup === t.collectionGroup && (!!e.path.isEqual(t.path) && (!!__PRIVATE_boundEquals(e.startAt, t.startAt) && __PRIVATE_boundEquals(e.endAt, t.endAt)));
  }
  var __PRIVATE_QueryImpl = class {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    constructor(e, t = null, n = [], r2 = [], i = null, s = "F", o = null, _ = null) {
      this.path = e, this.collectionGroup = t, this.explicitOrderBy = n, this.filters = r2, this.limit = i, this.limitType = s, this.startAt = o, this.endAt = _, this.le = null, // The corresponding `Target` of this `Query` instance, for use with
      // non-aggregate queries.
      this.he = null, // The corresponding `Target` of this `Query` instance, for use with
      // aggregate queries. Unlike targets for non-aggregate queries,
      // aggregate query targets do not contain normalized order-bys, they only
      // contain explicit order-bys.
      this.Pe = null, this.startAt, this.endAt;
    }
  };
  function __PRIVATE_newQuery(e, t, n, r2, i, s, o, _) {
    return new __PRIVATE_QueryImpl(e, t, n, r2, i, s, o, _);
  }
  function __PRIVATE_newQueryForPath(e) {
    return new __PRIVATE_QueryImpl(e);
  }
  function __PRIVATE_queryMatchesAllDocuments(e) {
    return 0 === e.filters.length && null === e.limit && null == e.startAt && null == e.endAt && (0 === e.explicitOrderBy.length || 1 === e.explicitOrderBy.length && e.explicitOrderBy[0].field.isKeyField());
  }
  function __PRIVATE_isCollectionGroupQuery(e) {
    return null !== e.collectionGroup;
  }
  function __PRIVATE_queryNormalizedOrderBy(e) {
    const t = __PRIVATE_debugCast(e);
    if (null === t.le) {
      t.le = [];
      const e2 = /* @__PURE__ */ new Set();
      for (const n2 of t.explicitOrderBy)
        t.le.push(n2), e2.add(n2.field.canonicalString());
      const n = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc", r2 = function __PRIVATE_getInequalityFilterFields(e3) {
        let t2 = new SortedSet(FieldPath$1.comparator);
        return e3.filters.forEach((e4) => {
          e4.getFlattenedFilters().forEach((e5) => {
            e5.isInequality() && (t2 = t2.add(e5.field));
          });
        }), t2;
      }(t);
      r2.forEach((r3) => {
        e2.has(r3.canonicalString()) || r3.isKeyField() || t.le.push(new OrderBy(r3, n));
      }), // Add the document key field to the last if it is not explicitly ordered.
      e2.has(FieldPath$1.keyField().canonicalString()) || t.le.push(new OrderBy(FieldPath$1.keyField(), n));
    }
    return t.le;
  }
  function __PRIVATE_queryToTarget(e) {
    const t = __PRIVATE_debugCast(e);
    return t.he || (t.he = __PRIVATE__queryToTarget(t, __PRIVATE_queryNormalizedOrderBy(e))), t.he;
  }
  function __PRIVATE__queryToTarget(e, t) {
    if ("F" === e.limitType)
      return __PRIVATE_newTarget(e.path, e.collectionGroup, t, e.filters, e.limit, e.startAt, e.endAt);
    {
      t = t.map((e2) => {
        const t2 = "desc" === e2.dir ? "asc" : "desc";
        return new OrderBy(e2.field, t2);
      });
      const n = e.endAt ? new Bound(e.endAt.position, e.endAt.inclusive) : null, r2 = e.startAt ? new Bound(e.startAt.position, e.startAt.inclusive) : null;
      return __PRIVATE_newTarget(e.path, e.collectionGroup, t, e.filters, e.limit, n, r2);
    }
  }
  function __PRIVATE_queryWithLimit(e, t, n) {
    return new __PRIVATE_QueryImpl(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), t, n, e.startAt, e.endAt);
  }
  function __PRIVATE_queryEquals(e, t) {
    return __PRIVATE_targetEquals(__PRIVATE_queryToTarget(e), __PRIVATE_queryToTarget(t)) && e.limitType === t.limitType;
  }
  function __PRIVATE_canonifyQuery(e) {
    return `${__PRIVATE_canonifyTarget(__PRIVATE_queryToTarget(e))}|lt:${e.limitType}`;
  }
  function __PRIVATE_stringifyQuery(e) {
    return `Query(target=${function __PRIVATE_stringifyTarget(e2) {
      let t = e2.path.canonicalString();
      return null !== e2.collectionGroup && (t += " collectionGroup=" + e2.collectionGroup), e2.filters.length > 0 && (t += `, filters: [${e2.filters.map((e3) => __PRIVATE_stringifyFilter(e3)).join(", ")}]`), __PRIVATE_isNullOrUndefined(e2.limit) || (t += ", limit: " + e2.limit), e2.orderBy.length > 0 && (t += `, orderBy: [${e2.orderBy.map((e3) => function __PRIVATE_stringifyOrderBy(e4) {
        return `${e4.field.canonicalString()} (${e4.dir})`;
      }(e3)).join(", ")}]`), e2.startAt && (t += ", startAt: ", t += e2.startAt.inclusive ? "b:" : "a:", t += e2.startAt.position.map((e3) => canonicalId(e3)).join(",")), e2.endAt && (t += ", endAt: ", t += e2.endAt.inclusive ? "a:" : "b:", t += e2.endAt.position.map((e3) => canonicalId(e3)).join(",")), `Target(${t})`;
    }(__PRIVATE_queryToTarget(e))}; limitType=${e.limitType})`;
  }
  function __PRIVATE_queryMatches(e, t) {
    return t.isFoundDocument() && function __PRIVATE_queryMatchesPathAndCollectionGroup(e2, t2) {
      const n = t2.key.path;
      return null !== e2.collectionGroup ? t2.key.hasCollectionId(e2.collectionGroup) && e2.path.isPrefixOf(n) : DocumentKey.isDocumentKey(e2.path) ? e2.path.isEqual(n) : e2.path.isImmediateParentOf(n);
    }(e, t) && function __PRIVATE_queryMatchesOrderBy(e2, t2) {
      for (const n of __PRIVATE_queryNormalizedOrderBy(e2))
        if (!n.field.isKeyField() && null === t2.data.field(n.field))
          return false;
      return true;
    }(e, t) && function __PRIVATE_queryMatchesFilters(e2, t2) {
      for (const n of e2.filters)
        if (!n.matches(t2))
          return false;
      return true;
    }(e, t) && function __PRIVATE_queryMatchesBounds(e2, t2) {
      if (e2.startAt && !/**
      * Returns true if a document sorts before a bound using the provided sort
      * order.
      */
      function __PRIVATE_boundSortsBeforeDocument(e3, t3, n) {
        const r2 = __PRIVATE_boundCompareToDocument(e3, t3, n);
        return e3.inclusive ? r2 <= 0 : r2 < 0;
      }(e2.startAt, __PRIVATE_queryNormalizedOrderBy(e2), t2))
        return false;
      if (e2.endAt && !function __PRIVATE_boundSortsAfterDocument(e3, t3, n) {
        const r2 = __PRIVATE_boundCompareToDocument(e3, t3, n);
        return e3.inclusive ? r2 >= 0 : r2 > 0;
      }(e2.endAt, __PRIVATE_queryNormalizedOrderBy(e2), t2))
        return false;
      return true;
    }(e, t);
  }
  function __PRIVATE_newQueryComparator(e) {
    return (t, n) => {
      let r2 = false;
      for (const i of __PRIVATE_queryNormalizedOrderBy(e)) {
        const e2 = __PRIVATE_compareDocs(i, t, n);
        if (0 !== e2)
          return e2;
        r2 = r2 || i.field.isKeyField();
      }
      return 0;
    };
  }
  function __PRIVATE_compareDocs(e, t, n) {
    const r2 = e.field.isKeyField() ? DocumentKey.comparator(t.key, n.key) : function __PRIVATE_compareDocumentsByField(e2, t2, n2) {
      const r3 = t2.data.field(e2), i = n2.data.field(e2);
      return null !== r3 && null !== i ? __PRIVATE_valueCompare(r3, i) : fail();
    }(e.field, t, n);
    switch (e.dir) {
      case "asc":
        return r2;
      case "desc":
        return -1 * r2;
      default:
        return fail();
    }
  }
  var ObjectMap = class {
    constructor(e, t) {
      this.mapKeyFn = e, this.equalsFn = t, /**
       * The inner map for a key/value pair. Due to the possibility of collisions we
       * keep a list of entries that we do a linear search through to find an actual
       * match. Note that collisions should be rare, so we still expect near
       * constant time lookups in practice.
       */
      this.inner = {}, /** The number of entries stored in the map */
      this.innerSize = 0;
    }
    /** Get a value for this key, or undefined if it does not exist. */
    get(e) {
      const t = this.mapKeyFn(e), n = this.inner[t];
      if (void 0 !== n) {
        for (const [t2, r2] of n)
          if (this.equalsFn(t2, e))
            return r2;
      }
    }
    has(e) {
      return void 0 !== this.get(e);
    }
    /** Put this key and value in the map. */
    set(e, t) {
      const n = this.mapKeyFn(e), r2 = this.inner[n];
      if (void 0 === r2)
        return this.inner[n] = [[e, t]], void this.innerSize++;
      for (let n2 = 0; n2 < r2.length; n2++)
        if (this.equalsFn(r2[n2][0], e))
          return void (r2[n2] = [e, t]);
      r2.push([e, t]), this.innerSize++;
    }
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    delete(e) {
      const t = this.mapKeyFn(e), n = this.inner[t];
      if (void 0 === n)
        return false;
      for (let r2 = 0; r2 < n.length; r2++)
        if (this.equalsFn(n[r2][0], e))
          return 1 === n.length ? delete this.inner[t] : n.splice(r2, 1), this.innerSize--, true;
      return false;
    }
    forEach(e) {
      forEach(this.inner, (t, n) => {
        for (const [t2, r2] of n)
          e(t2, r2);
      });
    }
    isEmpty() {
      return isEmpty(this.inner);
    }
    size() {
      return this.innerSize;
    }
  };
  var re = new SortedMap(DocumentKey.comparator);
  function __PRIVATE_mutableDocumentMap() {
    return re;
  }
  var ie = new SortedMap(DocumentKey.comparator);
  function documentMap(...e) {
    let t = ie;
    for (const n of e)
      t = t.insert(n.key, n);
    return t;
  }
  function __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e) {
    let t = ie;
    return e.forEach((e2, n) => t = t.insert(e2, n.overlayedDocument)), t;
  }
  function __PRIVATE_newOverlayMap() {
    return __PRIVATE_newDocumentKeyMap();
  }
  function __PRIVATE_newMutationMap() {
    return __PRIVATE_newDocumentKeyMap();
  }
  function __PRIVATE_newDocumentKeyMap() {
    return new ObjectMap((e) => e.toString(), (e, t) => e.isEqual(t));
  }
  var se = new SortedMap(DocumentKey.comparator);
  var oe = new SortedSet(DocumentKey.comparator);
  function __PRIVATE_documentKeySet(...e) {
    let t = oe;
    for (const n of e)
      t = t.add(n);
    return t;
  }
  var _e = new SortedSet(__PRIVATE_primitiveComparator);
  function __PRIVATE_targetIdSet() {
    return _e;
  }
  function __PRIVATE_toDouble(e, t) {
    if (e.useProto3Json) {
      if (isNaN(t))
        return {
          doubleValue: "NaN"
        };
      if (t === 1 / 0)
        return {
          doubleValue: "Infinity"
        };
      if (t === -1 / 0)
        return {
          doubleValue: "-Infinity"
        };
    }
    return {
      doubleValue: __PRIVATE_isNegativeZero(t) ? "-0" : t
    };
  }
  function __PRIVATE_toInteger(e) {
    return {
      integerValue: "" + e
    };
  }
  function toNumber(e, t) {
    return isSafeInteger(t) ? __PRIVATE_toInteger(t) : __PRIVATE_toDouble(e, t);
  }
  var TransformOperation = class {
    constructor() {
      this._ = void 0;
    }
  };
  function __PRIVATE_applyTransformOperationToLocalView(e, t, n) {
    return e instanceof __PRIVATE_ServerTimestampTransform ? function serverTimestamp$1(e2, t2) {
      const n2 = {
        fields: {
          __type__: {
            stringValue: "server_timestamp"
          },
          __local_write_time__: {
            timestampValue: {
              seconds: e2.seconds,
              nanos: e2.nanoseconds
            }
          }
        }
      };
      return t2 && __PRIVATE_isServerTimestamp(t2) && (t2 = __PRIVATE_getPreviousValue(t2)), t2 && (n2.fields.__previous_value__ = t2), {
        mapValue: n2
      };
    }(n, t) : e instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(e, t) : e instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(e, t) : function __PRIVATE_applyNumericIncrementTransformOperationToLocalView(e2, t2) {
      const n2 = __PRIVATE_computeTransformOperationBaseValue(e2, t2), r2 = asNumber(n2) + asNumber(e2.Ie);
      return isInteger(n2) && isInteger(e2.Ie) ? __PRIVATE_toInteger(r2) : __PRIVATE_toDouble(e2.serializer, r2);
    }(e, t);
  }
  function __PRIVATE_applyTransformOperationToRemoteDocument(e, t, n) {
    return e instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(e, t) : e instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(e, t) : n;
  }
  function __PRIVATE_computeTransformOperationBaseValue(e, t) {
    return e instanceof __PRIVATE_NumericIncrementTransformOperation ? (
      /** Returns true if `value` is either an IntegerValue or a DoubleValue. */
      function __PRIVATE_isNumber(e2) {
        return isInteger(e2) || function __PRIVATE_isDouble(e3) {
          return !!e3 && "doubleValue" in e3;
        }(e2);
      }(t) ? t : {
        integerValue: 0
      }
    ) : null;
  }
  var __PRIVATE_ServerTimestampTransform = class extends TransformOperation {
  };
  var __PRIVATE_ArrayUnionTransformOperation = class extends TransformOperation {
    constructor(e) {
      super(), this.elements = e;
    }
  };
  function __PRIVATE_applyArrayUnionTransformOperation(e, t) {
    const n = __PRIVATE_coercedFieldValuesArray(t);
    for (const t2 of e.elements)
      n.some((e2) => __PRIVATE_valueEquals(e2, t2)) || n.push(t2);
    return {
      arrayValue: {
        values: n
      }
    };
  }
  var __PRIVATE_ArrayRemoveTransformOperation = class extends TransformOperation {
    constructor(e) {
      super(), this.elements = e;
    }
  };
  function __PRIVATE_applyArrayRemoveTransformOperation(e, t) {
    let n = __PRIVATE_coercedFieldValuesArray(t);
    for (const t2 of e.elements)
      n = n.filter((e2) => !__PRIVATE_valueEquals(e2, t2));
    return {
      arrayValue: {
        values: n
      }
    };
  }
  var __PRIVATE_NumericIncrementTransformOperation = class extends TransformOperation {
    constructor(e, t) {
      super(), this.serializer = e, this.Ie = t;
    }
  };
  function asNumber(e) {
    return __PRIVATE_normalizeNumber(e.integerValue || e.doubleValue);
  }
  function __PRIVATE_coercedFieldValuesArray(e) {
    return isArray(e) && e.arrayValue.values ? e.arrayValue.values.slice() : [];
  }
  function __PRIVATE_fieldTransformEquals(e, t) {
    return e.field.isEqual(t.field) && function __PRIVATE_transformOperationEquals(e2, t2) {
      return e2 instanceof __PRIVATE_ArrayUnionTransformOperation && t2 instanceof __PRIVATE_ArrayUnionTransformOperation || e2 instanceof __PRIVATE_ArrayRemoveTransformOperation && t2 instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_arrayEquals(e2.elements, t2.elements, __PRIVATE_valueEquals) : e2 instanceof __PRIVATE_NumericIncrementTransformOperation && t2 instanceof __PRIVATE_NumericIncrementTransformOperation ? __PRIVATE_valueEquals(e2.Ie, t2.Ie) : e2 instanceof __PRIVATE_ServerTimestampTransform && t2 instanceof __PRIVATE_ServerTimestampTransform;
    }(e.transform, t.transform);
  }
  var MutationResult = class {
    constructor(e, t) {
      this.version = e, this.transformResults = t;
    }
  };
  var Precondition = class _Precondition {
    constructor(e, t) {
      this.updateTime = e, this.exists = t;
    }
    /** Creates a new empty Precondition. */
    static none() {
      return new _Precondition();
    }
    /** Creates a new Precondition with an exists flag. */
    static exists(e) {
      return new _Precondition(void 0, e);
    }
    /** Creates a new Precondition based on a version a document exists at. */
    static updateTime(e) {
      return new _Precondition(e);
    }
    /** Returns whether this Precondition is empty. */
    get isNone() {
      return void 0 === this.updateTime && void 0 === this.exists;
    }
    isEqual(e) {
      return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime);
    }
  };
  function __PRIVATE_preconditionIsValidForDocument(e, t) {
    return void 0 !== e.updateTime ? t.isFoundDocument() && t.version.isEqual(e.updateTime) : void 0 === e.exists || e.exists === t.isFoundDocument();
  }
  var Mutation = class {
  };
  function __PRIVATE_calculateOverlayMutation(e, t) {
    if (!e.hasLocalMutations || t && 0 === t.fields.length)
      return null;
    if (null === t)
      return e.isNoDocument() ? new __PRIVATE_DeleteMutation(e.key, Precondition.none()) : new __PRIVATE_SetMutation(e.key, e.data, Precondition.none());
    {
      const n = e.data, r2 = ObjectValue.empty();
      let i = new SortedSet(FieldPath$1.comparator);
      for (let e2 of t.fields)
        if (!i.has(e2)) {
          let t2 = n.field(e2);
          null === t2 && e2.length > 1 && (e2 = e2.popLast(), t2 = n.field(e2)), null === t2 ? r2.delete(e2) : r2.set(e2, t2), i = i.add(e2);
        }
      return new __PRIVATE_PatchMutation(e.key, r2, new FieldMask(i.toArray()), Precondition.none());
    }
  }
  function __PRIVATE_mutationApplyToRemoteDocument(e, t, n) {
    e instanceof __PRIVATE_SetMutation ? function __PRIVATE_setMutationApplyToRemoteDocument(e2, t2, n2) {
      const r2 = e2.value.clone(), i = __PRIVATE_serverTransformResults(e2.fieldTransforms, t2, n2.transformResults);
      r2.setAll(i), t2.convertToFoundDocument(n2.version, r2).setHasCommittedMutations();
    }(e, t, n) : e instanceof __PRIVATE_PatchMutation ? function __PRIVATE_patchMutationApplyToRemoteDocument(e2, t2, n2) {
      if (!__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2))
        return void t2.convertToUnknownDocument(n2.version);
      const r2 = __PRIVATE_serverTransformResults(e2.fieldTransforms, t2, n2.transformResults), i = t2.data;
      i.setAll(__PRIVATE_getPatch(e2)), i.setAll(r2), t2.convertToFoundDocument(n2.version, i).setHasCommittedMutations();
    }(e, t, n) : function __PRIVATE_deleteMutationApplyToRemoteDocument(e2, t2, n2) {
      t2.convertToNoDocument(n2.version).setHasCommittedMutations();
    }(0, t, n);
  }
  function __PRIVATE_mutationApplyToLocalView(e, t, n, r2) {
    return e instanceof __PRIVATE_SetMutation ? function __PRIVATE_setMutationApplyToLocalView(e2, t2, n2, r3) {
      if (!__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2))
        return n2;
      const i = e2.value.clone(), s = __PRIVATE_localTransformResults(e2.fieldTransforms, r3, t2);
      return i.setAll(s), t2.convertToFoundDocument(t2.version, i).setHasLocalMutations(), null;
    }(e, t, n, r2) : e instanceof __PRIVATE_PatchMutation ? function __PRIVATE_patchMutationApplyToLocalView(e2, t2, n2, r3) {
      if (!__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2))
        return n2;
      const i = __PRIVATE_localTransformResults(e2.fieldTransforms, r3, t2), s = t2.data;
      if (s.setAll(__PRIVATE_getPatch(e2)), s.setAll(i), t2.convertToFoundDocument(t2.version, s).setHasLocalMutations(), null === n2)
        return null;
      return n2.unionWith(e2.fieldMask.fields).unionWith(e2.fieldTransforms.map((e3) => e3.field));
    }(e, t, n, r2) : function __PRIVATE_deleteMutationApplyToLocalView(e2, t2, n2) {
      if (__PRIVATE_preconditionIsValidForDocument(e2.precondition, t2))
        return t2.convertToNoDocument(t2.version).setHasLocalMutations(), null;
      return n2;
    }(e, t, n);
  }
  function __PRIVATE_mutationExtractBaseValue(e, t) {
    let n = null;
    for (const r2 of e.fieldTransforms) {
      const e2 = t.data.field(r2.field), i = __PRIVATE_computeTransformOperationBaseValue(r2.transform, e2 || null);
      null != i && (null === n && (n = ObjectValue.empty()), n.set(r2.field, i));
    }
    return n || null;
  }
  function __PRIVATE_mutationEquals(e, t) {
    return e.type === t.type && (!!e.key.isEqual(t.key) && (!!e.precondition.isEqual(t.precondition) && (!!function __PRIVATE_fieldTransformsAreEqual(e2, t2) {
      return void 0 === e2 && void 0 === t2 || !(!e2 || !t2) && __PRIVATE_arrayEquals(e2, t2, (e3, t3) => __PRIVATE_fieldTransformEquals(e3, t3));
    }(e.fieldTransforms, t.fieldTransforms) && (0 === e.type ? e.value.isEqual(t.value) : 1 !== e.type || e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask)))));
  }
  var __PRIVATE_SetMutation = class extends Mutation {
    constructor(e, t, n, r2 = []) {
      super(), this.key = e, this.value = t, this.precondition = n, this.fieldTransforms = r2, this.type = 0;
    }
    getFieldMask() {
      return null;
    }
  };
  var __PRIVATE_PatchMutation = class extends Mutation {
    constructor(e, t, n, r2, i = []) {
      super(), this.key = e, this.data = t, this.fieldMask = n, this.precondition = r2, this.fieldTransforms = i, this.type = 1;
    }
    getFieldMask() {
      return this.fieldMask;
    }
  };
  function __PRIVATE_getPatch(e) {
    const t = /* @__PURE__ */ new Map();
    return e.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const r2 = e.data.field(n);
        t.set(n, r2);
      }
    }), t;
  }
  function __PRIVATE_serverTransformResults(e, t, n) {
    const r2 = /* @__PURE__ */ new Map();
    __PRIVATE_hardAssert(e.length === n.length);
    for (let i = 0; i < n.length; i++) {
      const s = e[i], o = s.transform, _ = t.data.field(s.field);
      r2.set(s.field, __PRIVATE_applyTransformOperationToRemoteDocument(o, _, n[i]));
    }
    return r2;
  }
  function __PRIVATE_localTransformResults(e, t, n) {
    const r2 = /* @__PURE__ */ new Map();
    for (const i of e) {
      const e2 = i.transform, s = n.data.field(i.field);
      r2.set(i.field, __PRIVATE_applyTransformOperationToLocalView(e2, s, t));
    }
    return r2;
  }
  var __PRIVATE_DeleteMutation = class extends Mutation {
    constructor(e, t) {
      super(), this.key = e, this.precondition = t, this.type = 2, this.fieldTransforms = [];
    }
    getFieldMask() {
      return null;
    }
  };
  var __PRIVATE_VerifyMutation = class extends Mutation {
    constructor(e, t) {
      super(), this.key = e, this.precondition = t, this.type = 3, this.fieldTransforms = [];
    }
    getFieldMask() {
      return null;
    }
  };
  var MutationBatch = class {
    /**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    constructor(e, t, n, r2) {
      this.batchId = e, this.localWriteTime = t, this.baseMutations = n, this.mutations = r2;
    }
    /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to compute the state of the remote document
     *
     * @param document - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */
    applyToRemoteDocument(e, t) {
      const n = t.mutationResults;
      for (let t2 = 0; t2 < this.mutations.length; t2++) {
        const r2 = this.mutations[t2];
        if (r2.key.isEqual(e.key)) {
          __PRIVATE_mutationApplyToRemoteDocument(r2, e, n[t2]);
        }
      }
    }
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param document - The document to apply mutations to.
     * @param mutatedFields - Fields that have been updated before applying this mutation batch.
     * @returns A `FieldMask` representing all the fields that are mutated.
     */
    applyToLocalView(e, t) {
      for (const n of this.baseMutations)
        n.key.isEqual(e.key) && (t = __PRIVATE_mutationApplyToLocalView(n, e, t, this.localWriteTime));
      for (const n of this.mutations)
        n.key.isEqual(e.key) && (t = __PRIVATE_mutationApplyToLocalView(n, e, t, this.localWriteTime));
      return t;
    }
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
     * replace all the mutation applications.
     */
    applyToLocalDocumentSet(e, t) {
      const n = __PRIVATE_newMutationMap();
      return this.mutations.forEach((r2) => {
        const i = e.get(r2.key), s = i.overlayedDocument;
        let o = this.applyToLocalView(s, i.mutatedFields);
        o = t.has(r2.key) ? null : o;
        const _ = __PRIVATE_calculateOverlayMutation(s, o);
        null !== _ && n.set(r2.key, _), s.isValidDocument() || s.convertToNoDocument(SnapshotVersion.min());
      }), n;
    }
    keys() {
      return this.mutations.reduce((e, t) => e.add(t.key), __PRIVATE_documentKeySet());
    }
    isEqual(e) {
      return this.batchId === e.batchId && __PRIVATE_arrayEquals(this.mutations, e.mutations, (e2, t) => __PRIVATE_mutationEquals(e2, t)) && __PRIVATE_arrayEquals(this.baseMutations, e.baseMutations, (e2, t) => __PRIVATE_mutationEquals(e2, t));
    }
  };
  var MutationBatchResult = class _MutationBatchResult {
    constructor(e, t, n, r2) {
      this.batch = e, this.commitVersion = t, this.mutationResults = n, this.docVersions = r2;
    }
    /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */
    static from(e, t, n) {
      __PRIVATE_hardAssert(e.mutations.length === n.length);
      let r2 = /* @__PURE__ */ function __PRIVATE_documentVersionMap() {
        return se;
      }();
      const i = e.mutations;
      for (let e2 = 0; e2 < i.length; e2++)
        r2 = r2.insert(i[e2].key, n[e2].version);
      return new _MutationBatchResult(e, t, n, r2);
    }
  };
  var Overlay = class {
    constructor(e, t) {
      this.largestBatchId = e, this.mutation = t;
    }
    getKey() {
      return this.mutation.key;
    }
    isEqual(e) {
      return null !== e && this.mutation === e.mutation;
    }
    toString() {
      return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
    }
  };
  var ae2;
  var ue;
  function __PRIVATE_isPermanentError(e) {
    switch (e) {
      default:
        return fail();
      case D2.CANCELLED:
      case D2.UNKNOWN:
      case D2.DEADLINE_EXCEEDED:
      case D2.RESOURCE_EXHAUSTED:
      case D2.INTERNAL:
      case D2.UNAVAILABLE:
      case D2.UNAUTHENTICATED:
        return false;
      case D2.INVALID_ARGUMENT:
      case D2.NOT_FOUND:
      case D2.ALREADY_EXISTS:
      case D2.PERMISSION_DENIED:
      case D2.FAILED_PRECONDITION:
      case D2.ABORTED:
      case D2.OUT_OF_RANGE:
      case D2.UNIMPLEMENTED:
      case D2.DATA_LOSS:
        return true;
    }
  }
  function __PRIVATE_mapCodeFromRpcCode(e) {
    if (void 0 === e)
      return __PRIVATE_logError("GRPC error has no .code"), D2.UNKNOWN;
    switch (e) {
      case ae2.OK:
        return D2.OK;
      case ae2.CANCELLED:
        return D2.CANCELLED;
      case ae2.UNKNOWN:
        return D2.UNKNOWN;
      case ae2.DEADLINE_EXCEEDED:
        return D2.DEADLINE_EXCEEDED;
      case ae2.RESOURCE_EXHAUSTED:
        return D2.RESOURCE_EXHAUSTED;
      case ae2.INTERNAL:
        return D2.INTERNAL;
      case ae2.UNAVAILABLE:
        return D2.UNAVAILABLE;
      case ae2.UNAUTHENTICATED:
        return D2.UNAUTHENTICATED;
      case ae2.INVALID_ARGUMENT:
        return D2.INVALID_ARGUMENT;
      case ae2.NOT_FOUND:
        return D2.NOT_FOUND;
      case ae2.ALREADY_EXISTS:
        return D2.ALREADY_EXISTS;
      case ae2.PERMISSION_DENIED:
        return D2.PERMISSION_DENIED;
      case ae2.FAILED_PRECONDITION:
        return D2.FAILED_PRECONDITION;
      case ae2.ABORTED:
        return D2.ABORTED;
      case ae2.OUT_OF_RANGE:
        return D2.OUT_OF_RANGE;
      case ae2.UNIMPLEMENTED:
        return D2.UNIMPLEMENTED;
      case ae2.DATA_LOSS:
        return D2.DATA_LOSS;
      default:
        return fail();
    }
  }
  (ue = ae2 || (ae2 = {}))[ue.OK = 0] = "OK", ue[ue.CANCELLED = 1] = "CANCELLED", ue[ue.UNKNOWN = 2] = "UNKNOWN", ue[ue.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", ue[ue.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", ue[ue.NOT_FOUND = 5] = "NOT_FOUND", ue[ue.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", ue[ue.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", ue[ue.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", ue[ue.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", ue[ue.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", ue[ue.ABORTED = 10] = "ABORTED", ue[ue.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", ue[ue.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", ue[ue.INTERNAL = 13] = "INTERNAL", ue[ue.UNAVAILABLE = 14] = "UNAVAILABLE", ue[ue.DATA_LOSS = 15] = "DATA_LOSS";
  var le = new Integer([4294967295, 4294967295], 0);
  var JsonProtoSerializer = class {
    constructor(e, t) {
      this.databaseId = e, this.useProto3Json = t;
    }
  };
  function toTimestamp(e, t) {
    if (e.useProto3Json) {
      return `${new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z`;
    }
    return {
      seconds: "" + t.seconds,
      nanos: t.nanoseconds
    };
  }
  function __PRIVATE_toBytes(e, t) {
    return e.useProto3Json ? t.toBase64() : t.toUint8Array();
  }
  function __PRIVATE_toVersion(e, t) {
    return toTimestamp(e, t.toTimestamp());
  }
  function __PRIVATE_fromVersion(e) {
    return __PRIVATE_hardAssert(!!e), SnapshotVersion.fromTimestamp(function fromTimestamp(e2) {
      const t = __PRIVATE_normalizeTimestamp(e2);
      return new Timestamp(t.seconds, t.nanos);
    }(e));
  }
  function __PRIVATE_toResourceName(e, t) {
    return __PRIVATE_toResourcePath(e, t).canonicalString();
  }
  function __PRIVATE_toResourcePath(e, t) {
    const n = function __PRIVATE_fullyQualifiedPrefixPath(e2) {
      return new ResourcePath(["projects", e2.projectId, "databases", e2.database]);
    }(e).child("documents");
    return void 0 === t ? n : n.child(t);
  }
  function __PRIVATE_fromResourceName(e) {
    const t = ResourcePath.fromString(e);
    return __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(t)), t;
  }
  function __PRIVATE_toName(e, t) {
    return __PRIVATE_toResourceName(e.databaseId, t.path);
  }
  function __PRIVATE_fromQueryPath(e) {
    const t = __PRIVATE_fromResourceName(e);
    return 4 === t.length ? ResourcePath.emptyPath() : __PRIVATE_extractLocalPathFromResourceName(t);
  }
  function __PRIVATE_getEncodedDatabaseId(e) {
    return new ResourcePath(["projects", e.databaseId.projectId, "databases", e.databaseId.database]).canonicalString();
  }
  function __PRIVATE_extractLocalPathFromResourceName(e) {
    return __PRIVATE_hardAssert(e.length > 4 && "documents" === e.get(4)), e.popFirst(5);
  }
  function __PRIVATE_toMutationDocument(e, t, n) {
    return {
      name: __PRIVATE_toName(e, t),
      fields: n.value.mapValue.fields
    };
  }
  function toMutation(e, t) {
    let n;
    if (t instanceof __PRIVATE_SetMutation)
      n = {
        update: __PRIVATE_toMutationDocument(e, t.key, t.value)
      };
    else if (t instanceof __PRIVATE_DeleteMutation)
      n = {
        delete: __PRIVATE_toName(e, t.key)
      };
    else if (t instanceof __PRIVATE_PatchMutation)
      n = {
        update: __PRIVATE_toMutationDocument(e, t.key, t.data),
        updateMask: __PRIVATE_toDocumentMask(t.fieldMask)
      };
    else {
      if (!(t instanceof __PRIVATE_VerifyMutation))
        return fail();
      n = {
        verify: __PRIVATE_toName(e, t.key)
      };
    }
    return t.fieldTransforms.length > 0 && (n.updateTransforms = t.fieldTransforms.map((e2) => function __PRIVATE_toFieldTransform(e3, t2) {
      const n2 = t2.transform;
      if (n2 instanceof __PRIVATE_ServerTimestampTransform)
        return {
          fieldPath: t2.field.canonicalString(),
          setToServerValue: "REQUEST_TIME"
        };
      if (n2 instanceof __PRIVATE_ArrayUnionTransformOperation)
        return {
          fieldPath: t2.field.canonicalString(),
          appendMissingElements: {
            values: n2.elements
          }
        };
      if (n2 instanceof __PRIVATE_ArrayRemoveTransformOperation)
        return {
          fieldPath: t2.field.canonicalString(),
          removeAllFromArray: {
            values: n2.elements
          }
        };
      if (n2 instanceof __PRIVATE_NumericIncrementTransformOperation)
        return {
          fieldPath: t2.field.canonicalString(),
          increment: n2.Ie
        };
      throw fail();
    }(0, e2))), t.precondition.isNone || (n.currentDocument = function __PRIVATE_toPrecondition(e2, t2) {
      return void 0 !== t2.updateTime ? {
        updateTime: __PRIVATE_toVersion(e2, t2.updateTime)
      } : void 0 !== t2.exists ? {
        exists: t2.exists
      } : fail();
    }(e, t.precondition)), n;
  }
  function __PRIVATE_fromWriteResults(e, t) {
    return e && e.length > 0 ? (__PRIVATE_hardAssert(void 0 !== t), e.map((e2) => function __PRIVATE_fromWriteResult(e3, t2) {
      let n = e3.updateTime ? __PRIVATE_fromVersion(e3.updateTime) : __PRIVATE_fromVersion(t2);
      return n.isEqual(SnapshotVersion.min()) && // The Firestore Emulator currently returns an update time of 0 for
      // deletes of non-existing documents (rather than null). This breaks the
      // test "get deleted doc while offline with source=cache" as NoDocuments
      // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
      // TODO(#2149): Remove this when Emulator is fixed
      (n = __PRIVATE_fromVersion(t2)), new MutationResult(n, e3.transformResults || []);
    }(e2, t))) : [];
  }
  function __PRIVATE_convertQueryTargetToQuery(e) {
    let t = __PRIVATE_fromQueryPath(e.parent);
    const n = e.structuredQuery, r2 = n.from ? n.from.length : 0;
    let i = null;
    if (r2 > 0) {
      __PRIVATE_hardAssert(1 === r2);
      const e2 = n.from[0];
      e2.allDescendants ? i = e2.collectionId : t = t.child(e2.collectionId);
    }
    let s = [];
    n.where && (s = function __PRIVATE_fromFilters(e2) {
      const t2 = __PRIVATE_fromFilter(e2);
      if (t2 instanceof CompositeFilter && __PRIVATE_compositeFilterIsFlatConjunction(t2))
        return t2.getFilters();
      return [t2];
    }(n.where));
    let o = [];
    n.orderBy && (o = function __PRIVATE_fromOrder(e2) {
      return e2.map((e3) => function __PRIVATE_fromPropertyOrder(e4) {
        return new OrderBy(
          __PRIVATE_fromFieldPathReference(e4.field),
          // visible for testing
          function __PRIVATE_fromDirection(e5) {
            switch (e5) {
              case "ASCENDING":
                return "asc";
              case "DESCENDING":
                return "desc";
              default:
                return;
            }
          }(e4.direction)
        );
      }(e3));
    }(n.orderBy));
    let _ = null;
    n.limit && (_ = function __PRIVATE_fromInt32Proto(e2) {
      let t2;
      return t2 = "object" == typeof e2 ? e2.value : e2, __PRIVATE_isNullOrUndefined(t2) ? null : t2;
    }(n.limit));
    let a = null;
    n.startAt && (a = function __PRIVATE_fromStartAtCursor(e2) {
      const t2 = !!e2.before, n2 = e2.values || [];
      return new Bound(n2, t2);
    }(n.startAt));
    let u = null;
    return n.endAt && (u = function __PRIVATE_fromEndAtCursor(e2) {
      const t2 = !e2.before, n2 = e2.values || [];
      return new Bound(n2, t2);
    }(n.endAt)), __PRIVATE_newQuery(t, i, o, s, _, "F", a, u);
  }
  function __PRIVATE_fromFilter(e) {
    return void 0 !== e.unaryFilter ? function __PRIVATE_fromUnaryFilter(e2) {
      switch (e2.unaryFilter.op) {
        case "IS_NAN":
          const t = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
          return FieldFilter.create(t, "==", {
            doubleValue: NaN
          });
        case "IS_NULL":
          const n = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
          return FieldFilter.create(n, "==", {
            nullValue: "NULL_VALUE"
          });
        case "IS_NOT_NAN":
          const r2 = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
          return FieldFilter.create(r2, "!=", {
            doubleValue: NaN
          });
        case "IS_NOT_NULL":
          const i = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
          return FieldFilter.create(i, "!=", {
            nullValue: "NULL_VALUE"
          });
        default:
          return fail();
      }
    }(e) : void 0 !== e.fieldFilter ? function __PRIVATE_fromFieldFilter(e2) {
      return FieldFilter.create(__PRIVATE_fromFieldPathReference(e2.fieldFilter.field), function __PRIVATE_fromOperatorName(e3) {
        switch (e3) {
          case "EQUAL":
            return "==";
          case "NOT_EQUAL":
            return "!=";
          case "GREATER_THAN":
            return ">";
          case "GREATER_THAN_OR_EQUAL":
            return ">=";
          case "LESS_THAN":
            return "<";
          case "LESS_THAN_OR_EQUAL":
            return "<=";
          case "ARRAY_CONTAINS":
            return "array-contains";
          case "IN":
            return "in";
          case "NOT_IN":
            return "not-in";
          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any";
          default:
            return fail();
        }
      }(e2.fieldFilter.op), e2.fieldFilter.value);
    }(e) : void 0 !== e.compositeFilter ? function __PRIVATE_fromCompositeFilter(e2) {
      return CompositeFilter.create(e2.compositeFilter.filters.map((e3) => __PRIVATE_fromFilter(e3)), function __PRIVATE_fromCompositeOperatorName(e3) {
        switch (e3) {
          case "AND":
            return "and";
          case "OR":
            return "or";
          default:
            return fail();
        }
      }(e2.compositeFilter.op));
    }(e) : fail();
  }
  function __PRIVATE_fromFieldPathReference(e) {
    return FieldPath$1.fromServerFormat(e.fieldPath);
  }
  function __PRIVATE_toDocumentMask(e) {
    const t = [];
    return e.fields.forEach((e2) => t.push(e2.canonicalString())), {
      fieldPaths: t
    };
  }
  function __PRIVATE_isValidResourceName(e) {
    return e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2);
  }
  var __PRIVATE_LocalSerializer = class {
    constructor(e) {
      this.ct = e;
    }
  };
  function __PRIVATE_fromBundledQuery(e) {
    const t = __PRIVATE_convertQueryTargetToQuery({
      parent: e.parent,
      structuredQuery: e.structuredQuery
    });
    return "LAST" === e.limitType ? __PRIVATE_queryWithLimit(
      t,
      t.limit,
      "L"
      /* LimitType.Last */
    ) : t;
  }
  var __PRIVATE_FirestoreIndexValueWriter = class {
    constructor() {
    }
    // The write methods below short-circuit writing terminators for values
    // containing a (terminating) truncated value.
    // As an example, consider the resulting encoding for:
    // ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
    // ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
    // ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
    /** Writes an index value.  */
    Pt(e, t) {
      this.It(e, t), // Write separator to split index values
      // (see go/firestore-storage-format#encodings).
      t.Tt();
    }
    It(e, t) {
      if ("nullValue" in e)
        this.Et(t, 5);
      else if ("booleanValue" in e)
        this.Et(t, 10), t.dt(e.booleanValue ? 1 : 0);
      else if ("integerValue" in e)
        this.Et(t, 15), t.dt(__PRIVATE_normalizeNumber(e.integerValue));
      else if ("doubleValue" in e) {
        const n = __PRIVATE_normalizeNumber(e.doubleValue);
        isNaN(n) ? this.Et(t, 13) : (this.Et(t, 15), __PRIVATE_isNegativeZero(n) ? (
          // -0.0, 0 and 0.0 are all considered the same
          t.dt(0)
        ) : t.dt(n));
      } else if ("timestampValue" in e) {
        const n = e.timestampValue;
        this.Et(t, 20), "string" == typeof n ? t.At(n) : (t.At(`${n.seconds || ""}`), t.dt(n.nanos || 0));
      } else if ("stringValue" in e)
        this.Rt(e.stringValue, t), this.Vt(t);
      else if ("bytesValue" in e)
        this.Et(t, 30), t.ft(__PRIVATE_normalizeByteString(e.bytesValue)), this.Vt(t);
      else if ("referenceValue" in e)
        this.gt(e.referenceValue, t);
      else if ("geoPointValue" in e) {
        const n = e.geoPointValue;
        this.Et(t, 45), t.dt(n.latitude || 0), t.dt(n.longitude || 0);
      } else
        "mapValue" in e ? __PRIVATE_isMaxValue(e) ? this.Et(t, Number.MAX_SAFE_INTEGER) : (this.yt(e.mapValue, t), this.Vt(t)) : "arrayValue" in e ? (this.wt(e.arrayValue, t), this.Vt(t)) : fail();
    }
    Rt(e, t) {
      this.Et(t, 25), this.St(e, t);
    }
    St(e, t) {
      t.At(e);
    }
    yt(e, t) {
      const n = e.fields || {};
      this.Et(t, 55);
      for (const e2 of Object.keys(n))
        this.Rt(e2, t), this.It(n[e2], t);
    }
    wt(e, t) {
      const n = e.values || [];
      this.Et(t, 50);
      for (const e2 of n)
        this.It(e2, t);
    }
    gt(e, t) {
      this.Et(t, 37);
      DocumentKey.fromName(e).path.forEach((e2) => {
        this.Et(t, 60), this.St(e2, t);
      });
    }
    Et(e, t) {
      e.dt(t);
    }
    Vt(e) {
      e.dt(2);
    }
  };
  __PRIVATE_FirestoreIndexValueWriter.bt = new __PRIVATE_FirestoreIndexValueWriter();
  var __PRIVATE_MemoryIndexManager = class {
    constructor() {
      this._n = new __PRIVATE_MemoryCollectionParentIndex();
    }
    addToCollectionParentIndex(e, t) {
      return this._n.add(t), PersistencePromise.resolve();
    }
    getCollectionParents(e, t) {
      return PersistencePromise.resolve(this._n.getEntries(t));
    }
    addFieldIndex(e, t) {
      return PersistencePromise.resolve();
    }
    deleteFieldIndex(e, t) {
      return PersistencePromise.resolve();
    }
    deleteAllFieldIndexes(e) {
      return PersistencePromise.resolve();
    }
    createTargetIndexes(e, t) {
      return PersistencePromise.resolve();
    }
    getDocumentsMatchingTarget(e, t) {
      return PersistencePromise.resolve(null);
    }
    getIndexType(e, t) {
      return PersistencePromise.resolve(
        0
        /* IndexType.NONE */
      );
    }
    getFieldIndexes(e, t) {
      return PersistencePromise.resolve([]);
    }
    getNextCollectionGroupToUpdate(e) {
      return PersistencePromise.resolve(null);
    }
    getMinOffset(e, t) {
      return PersistencePromise.resolve(IndexOffset.min());
    }
    getMinOffsetFromCollectionGroup(e, t) {
      return PersistencePromise.resolve(IndexOffset.min());
    }
    updateCollectionGroup(e, t, n) {
      return PersistencePromise.resolve();
    }
    updateIndexEntries(e, t) {
      return PersistencePromise.resolve();
    }
  };
  var __PRIVATE_MemoryCollectionParentIndex = class {
    constructor() {
      this.index = {};
    }
    // Returns false if the entry already existed.
    add(e) {
      const t = e.lastSegment(), n = e.popLast(), r2 = this.index[t] || new SortedSet(ResourcePath.comparator), i = !r2.has(n);
      return this.index[t] = r2.add(n), i;
    }
    has(e) {
      const t = e.lastSegment(), n = e.popLast(), r2 = this.index[t];
      return r2 && r2.has(n);
    }
    getEntries(e) {
      return (this.index[e] || new SortedSet(ResourcePath.comparator)).toArray();
    }
  };
  var Te = new Uint8Array(0);
  var LruParams = class _LruParams {
    constructor(e, t, n) {
      this.cacheSizeCollectionThreshold = e, this.percentileToCollect = t, this.maximumSequenceNumbersToCollect = n;
    }
    static withCacheSize(e) {
      return new _LruParams(e, _LruParams.DEFAULT_COLLECTION_PERCENTILE, _LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
    }
  };
  LruParams.DEFAULT_COLLECTION_PERCENTILE = 10, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, LruParams.DEFAULT = new LruParams(41943040, LruParams.DEFAULT_COLLECTION_PERCENTILE, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), LruParams.DISABLED = new LruParams(-1, 0, 0);
  var __PRIVATE_TargetIdGenerator = class ___PRIVATE_TargetIdGenerator {
    constructor(e) {
      this.On = e;
    }
    next() {
      return this.On += 2, this.On;
    }
    static Nn() {
      return new ___PRIVATE_TargetIdGenerator(0);
    }
    static Ln() {
      return new ___PRIVATE_TargetIdGenerator(-1);
    }
  };
  var RemoteDocumentChangeBuffer = class {
    constructor() {
      this.changes = new ObjectMap((e) => e.toString(), (e, t) => e.isEqual(t)), this.changesApplied = false;
    }
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    addEntry(e) {
      this.assertNotApplied(), this.changes.set(e.key, e);
    }
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    removeEntry(e, t) {
      this.assertNotApplied(), this.changes.set(e, MutableDocument.newInvalidDocument(e).setReadTime(t));
    }
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached document or an invalid document if we have nothing
     * cached.
     */
    getEntry(e, t) {
      this.assertNotApplied();
      const n = this.changes.get(t);
      return void 0 !== n ? PersistencePromise.resolve(n) : this.getFromCache(e, t);
    }
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached documents, indexed by key. If an entry cannot be
     *     found, the corresponding key will be mapped to an invalid document.
     */
    getEntries(e, t) {
      return this.getAllFromCache(e, t);
    }
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    apply(e) {
      return this.assertNotApplied(), this.changesApplied = true, this.applyChanges(e);
    }
    /** Helper to assert this.changes is not null  */
    assertNotApplied() {
    }
  };
  var OverlayedDocument = class {
    constructor(e, t) {
      this.overlayedDocument = e, this.mutatedFields = t;
    }
  };
  var LocalDocumentsView = class {
    constructor(e, t, n, r2) {
      this.remoteDocumentCache = e, this.mutationQueue = t, this.documentOverlayCache = n, this.indexManager = r2;
    }
    /**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */
    getDocument(e, t) {
      let n = null;
      return this.documentOverlayCache.getOverlay(e, t).next((r2) => (n = r2, this.remoteDocumentCache.getEntry(e, t))).next((e2) => (null !== n && __PRIVATE_mutationApplyToLocalView(n.mutation, e2, FieldMask.empty(), Timestamp.now()), e2));
    }
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    getDocuments(e, t) {
      return this.remoteDocumentCache.getEntries(e, t).next((t2) => this.getLocalViewOfDocuments(e, t2, __PRIVATE_documentKeySet()).next(() => t2));
    }
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     *
     * @param transaction - The transaction this operation is scoped to.
     * @param docs - The documents to apply local mutations to get the local views.
     * @param existenceStateChanged - The set of document keys whose existence state
     *   is changed. This is useful to determine if some documents overlay needs
     *   to be recalculated.
     */
    getLocalViewOfDocuments(e, t, n = __PRIVATE_documentKeySet()) {
      const r2 = __PRIVATE_newOverlayMap();
      return this.populateOverlays(e, r2, t).next(() => this.computeViews(e, t, r2, n).next((e2) => {
        let t2 = documentMap();
        return e2.forEach((e3, n2) => {
          t2 = t2.insert(e3, n2.overlayedDocument);
        }), t2;
      }));
    }
    /**
     * Gets the overlayed documents for the given document map, which will include
     * the local view of those documents and a `FieldMask` indicating which fields
     * are mutated locally, `null` if overlay is a Set or Delete mutation.
     */
    getOverlayedDocuments(e, t) {
      const n = __PRIVATE_newOverlayMap();
      return this.populateOverlays(e, n, t).next(() => this.computeViews(e, t, n, __PRIVATE_documentKeySet()));
    }
    /**
     * Fetches the overlays for {@code docs} and adds them to provided overlay map
     * if the map does not already contain an entry for the given document key.
     */
    populateOverlays(e, t, n) {
      const r2 = [];
      return n.forEach((e2) => {
        t.has(e2) || r2.push(e2);
      }), this.documentOverlayCache.getOverlays(e, r2).next((e2) => {
        e2.forEach((e3, n2) => {
          t.set(e3, n2);
        });
      });
    }
    /**
     * Computes the local view for the given documents.
     *
     * @param docs - The documents to compute views for. It also has the base
     *   version of the documents.
     * @param overlays - The overlays that need to be applied to the given base
     *   version of the documents.
     * @param existenceStateChanged - A set of documents whose existence states
     *   might have changed. This is used to determine if we need to re-calculate
     *   overlays from mutation queues.
     * @return A map represents the local documents view.
     */
    computeViews(e, t, n, r2) {
      let i = __PRIVATE_mutableDocumentMap();
      const s = __PRIVATE_newDocumentKeyMap(), o = function __PRIVATE_newOverlayedDocumentMap() {
        return __PRIVATE_newDocumentKeyMap();
      }();
      return t.forEach((e2, t2) => {
        const o2 = n.get(t2.key);
        r2.has(t2.key) && (void 0 === o2 || o2.mutation instanceof __PRIVATE_PatchMutation) ? i = i.insert(t2.key, t2) : void 0 !== o2 ? (s.set(t2.key, o2.mutation.getFieldMask()), __PRIVATE_mutationApplyToLocalView(o2.mutation, t2, o2.mutation.getFieldMask(), Timestamp.now())) : (
          // no overlay exists
          // Using EMPTY to indicate there is no overlay for the document.
          s.set(t2.key, FieldMask.empty())
        );
      }), this.recalculateAndSaveOverlays(e, i).next((e2) => (e2.forEach((e3, t2) => s.set(e3, t2)), t.forEach((e3, t2) => {
        var n2;
        return o.set(e3, new OverlayedDocument(t2, null !== (n2 = s.get(e3)) && void 0 !== n2 ? n2 : null));
      }), o));
    }
    recalculateAndSaveOverlays(e, t) {
      const n = __PRIVATE_newDocumentKeyMap();
      let r2 = new SortedMap((e2, t2) => e2 - t2), i = __PRIVATE_documentKeySet();
      return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, t).next((e2) => {
        for (const i2 of e2)
          i2.keys().forEach((e3) => {
            const s = t.get(e3);
            if (null === s)
              return;
            let o = n.get(e3) || FieldMask.empty();
            o = i2.applyToLocalView(s, o), n.set(e3, o);
            const _ = (r2.get(i2.batchId) || __PRIVATE_documentKeySet()).add(e3);
            r2 = r2.insert(i2.batchId, _);
          });
      }).next(() => {
        const s = [], o = r2.getReverseIterator();
        for (; o.hasNext(); ) {
          const r3 = o.getNext(), _ = r3.key, a = r3.value, u = __PRIVATE_newMutationMap();
          a.forEach((e2) => {
            if (!i.has(e2)) {
              const r4 = __PRIVATE_calculateOverlayMutation(t.get(e2), n.get(e2));
              null !== r4 && u.set(e2, r4), i = i.add(e2);
            }
          }), s.push(this.documentOverlayCache.saveOverlays(e, _, u));
        }
        return PersistencePromise.waitFor(s);
      }).next(() => n);
    }
    /**
     * Recalculates overlays by reading the documents from remote document cache
     * first, and saves them after they are calculated.
     */
    recalculateAndSaveOverlaysForDocumentKeys(e, t) {
      return this.remoteDocumentCache.getEntries(e, t).next((t2) => this.recalculateAndSaveOverlays(e, t2));
    }
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param offset - Read time and key to start scanning by (exclusive).
     * @param context - A optional tracker to keep a record of important details
     *   during database local query execution.
     */
    getDocumentsMatchingQuery(e, t, n, r2) {
      return function __PRIVATE_isDocumentQuery$1(e2) {
        return DocumentKey.isDocumentKey(e2.path) && null === e2.collectionGroup && 0 === e2.filters.length;
      }(t) ? this.getDocumentsMatchingDocumentQuery(e, t.path) : __PRIVATE_isCollectionGroupQuery(t) ? this.getDocumentsMatchingCollectionGroupQuery(e, t, n, r2) : this.getDocumentsMatchingCollectionQuery(e, t, n, r2);
    }
    /**
     * Given a collection group, returns the next documents that follow the provided offset, along
     * with an updated batch ID.
     *
     * <p>The documents returned by this method are ordered by remote version from the provided
     * offset. If there are no more remote documents after the provided offset, documents with
     * mutations in order of batch id from the offset are returned. Since all documents in a batch are
     * returned together, the total number of documents returned can exceed {@code count}.
     *
     * @param transaction
     * @param collectionGroup The collection group for the documents.
     * @param offset The offset to index into.
     * @param count The number of documents to return
     * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
     */
    getNextDocuments(e, t, n, r2) {
      return this.remoteDocumentCache.getAllFromCollectionGroup(e, t, n, r2).next((i) => {
        const s = r2 - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, t, n.largestBatchId, r2 - i.size) : PersistencePromise.resolve(__PRIVATE_newOverlayMap());
        let o = -1, _ = i;
        return s.next((t2) => PersistencePromise.forEach(t2, (t3, n2) => (o < n2.largestBatchId && (o = n2.largestBatchId), i.get(t3) ? PersistencePromise.resolve() : this.remoteDocumentCache.getEntry(e, t3).next((e2) => {
          _ = _.insert(t3, e2);
        }))).next(() => this.populateOverlays(e, t2, i)).next(() => this.computeViews(e, _, t2, __PRIVATE_documentKeySet())).next((e2) => ({
          batchId: o,
          changes: __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e2)
        })));
      });
    }
    getDocumentsMatchingDocumentQuery(e, t) {
      return this.getDocument(e, new DocumentKey(t)).next((e2) => {
        let t2 = documentMap();
        return e2.isFoundDocument() && (t2 = t2.insert(e2.key, e2)), t2;
      });
    }
    getDocumentsMatchingCollectionGroupQuery(e, t, n, r2) {
      const i = t.collectionGroup;
      let s = documentMap();
      return this.indexManager.getCollectionParents(e, i).next((o) => PersistencePromise.forEach(o, (o2) => {
        const _ = function __PRIVATE_asCollectionQueryAtPath(e2, t2) {
          return new __PRIVATE_QueryImpl(
            t2,
            /*collectionGroup=*/
            null,
            e2.explicitOrderBy.slice(),
            e2.filters.slice(),
            e2.limit,
            e2.limitType,
            e2.startAt,
            e2.endAt
          );
        }(t, o2.child(i));
        return this.getDocumentsMatchingCollectionQuery(e, _, n, r2).next((e2) => {
          e2.forEach((e3, t2) => {
            s = s.insert(e3, t2);
          });
        });
      }).next(() => s));
    }
    getDocumentsMatchingCollectionQuery(e, t, n, r2) {
      let i;
      return this.documentOverlayCache.getOverlaysForCollection(e, t.path, n.largestBatchId).next((s) => (i = s, this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, n, i, r2))).next((e2) => {
        i.forEach((t2, n3) => {
          const r3 = n3.getKey();
          null === e2.get(r3) && (e2 = e2.insert(r3, MutableDocument.newInvalidDocument(r3)));
        });
        let n2 = documentMap();
        return e2.forEach((e3, r3) => {
          const s = i.get(e3);
          void 0 !== s && __PRIVATE_mutationApplyToLocalView(s.mutation, r3, FieldMask.empty(), Timestamp.now()), // Finally, insert the documents that still match the query
          __PRIVATE_queryMatches(t, r3) && (n2 = n2.insert(e3, r3));
        }), n2;
      });
    }
  };
  var __PRIVATE_MemoryBundleCache = class {
    constructor(e) {
      this.serializer = e, this.cr = /* @__PURE__ */ new Map(), this.lr = /* @__PURE__ */ new Map();
    }
    getBundleMetadata(e, t) {
      return PersistencePromise.resolve(this.cr.get(t));
    }
    saveBundleMetadata(e, t) {
      return this.cr.set(
        t.id,
        /** Decodes a BundleMetadata proto into a BundleMetadata object. */
        function __PRIVATE_fromBundleMetadata(e2) {
          return {
            id: e2.id,
            version: e2.version,
            createTime: __PRIVATE_fromVersion(e2.createTime)
          };
        }(t)
      ), PersistencePromise.resolve();
    }
    getNamedQuery(e, t) {
      return PersistencePromise.resolve(this.lr.get(t));
    }
    saveNamedQuery(e, t) {
      return this.lr.set(t.name, function __PRIVATE_fromProtoNamedQuery(e2) {
        return {
          name: e2.name,
          query: __PRIVATE_fromBundledQuery(e2.bundledQuery),
          readTime: __PRIVATE_fromVersion(e2.readTime)
        };
      }(t)), PersistencePromise.resolve();
    }
  };
  var __PRIVATE_MemoryDocumentOverlayCache = class {
    constructor() {
      this.overlays = new SortedMap(DocumentKey.comparator), this.hr = /* @__PURE__ */ new Map();
    }
    getOverlay(e, t) {
      return PersistencePromise.resolve(this.overlays.get(t));
    }
    getOverlays(e, t) {
      const n = __PRIVATE_newOverlayMap();
      return PersistencePromise.forEach(t, (t2) => this.getOverlay(e, t2).next((e2) => {
        null !== e2 && n.set(t2, e2);
      })).next(() => n);
    }
    saveOverlays(e, t, n) {
      return n.forEach((n2, r2) => {
        this.ht(e, t, r2);
      }), PersistencePromise.resolve();
    }
    removeOverlaysForBatchId(e, t, n) {
      const r2 = this.hr.get(n);
      return void 0 !== r2 && (r2.forEach((e2) => this.overlays = this.overlays.remove(e2)), this.hr.delete(n)), PersistencePromise.resolve();
    }
    getOverlaysForCollection(e, t, n) {
      const r2 = __PRIVATE_newOverlayMap(), i = t.length + 1, s = new DocumentKey(t.child("")), o = this.overlays.getIteratorFrom(s);
      for (; o.hasNext(); ) {
        const e2 = o.getNext().value, s2 = e2.getKey();
        if (!t.isPrefixOf(s2.path))
          break;
        s2.path.length === i && (e2.largestBatchId > n && r2.set(e2.getKey(), e2));
      }
      return PersistencePromise.resolve(r2);
    }
    getOverlaysForCollectionGroup(e, t, n, r2) {
      let i = new SortedMap((e2, t2) => e2 - t2);
      const s = this.overlays.getIterator();
      for (; s.hasNext(); ) {
        const e2 = s.getNext().value;
        if (e2.getKey().getCollectionGroup() === t && e2.largestBatchId > n) {
          let t2 = i.get(e2.largestBatchId);
          null === t2 && (t2 = __PRIVATE_newOverlayMap(), i = i.insert(e2.largestBatchId, t2)), t2.set(e2.getKey(), e2);
        }
      }
      const o = __PRIVATE_newOverlayMap(), _ = i.getIterator();
      for (; _.hasNext(); ) {
        if (_.getNext().value.forEach((e2, t2) => o.set(e2, t2)), o.size() >= r2)
          break;
      }
      return PersistencePromise.resolve(o);
    }
    ht(e, t, n) {
      const r2 = this.overlays.get(n.key);
      if (null !== r2) {
        const e2 = this.hr.get(r2.largestBatchId).delete(n.key);
        this.hr.set(r2.largestBatchId, e2);
      }
      this.overlays = this.overlays.insert(n.key, new Overlay(t, n));
      let i = this.hr.get(t);
      void 0 === i && (i = __PRIVATE_documentKeySet(), this.hr.set(t, i)), this.hr.set(t, i.add(n.key));
    }
  };
  var __PRIVATE_ReferenceSet = class {
    constructor() {
      this.Pr = new SortedSet(__PRIVATE_DocReference.Ir), // A set of outstanding references to a document sorted by target id.
      this.Tr = new SortedSet(__PRIVATE_DocReference.Er);
    }
    /** Returns true if the reference set contains no references. */
    isEmpty() {
      return this.Pr.isEmpty();
    }
    /** Adds a reference to the given document key for the given ID. */
    addReference(e, t) {
      const n = new __PRIVATE_DocReference(e, t);
      this.Pr = this.Pr.add(n), this.Tr = this.Tr.add(n);
    }
    /** Add references to the given document keys for the given ID. */
    dr(e, t) {
      e.forEach((e2) => this.addReference(e2, t));
    }
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    removeReference(e, t) {
      this.Ar(new __PRIVATE_DocReference(e, t));
    }
    Rr(e, t) {
      e.forEach((e2) => this.removeReference(e2, t));
    }
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    Vr(e) {
      const t = new DocumentKey(new ResourcePath([])), n = new __PRIVATE_DocReference(t, e), r2 = new __PRIVATE_DocReference(t, e + 1), i = [];
      return this.Tr.forEachInRange([n, r2], (e2) => {
        this.Ar(e2), i.push(e2.key);
      }), i;
    }
    mr() {
      this.Pr.forEach((e) => this.Ar(e));
    }
    Ar(e) {
      this.Pr = this.Pr.delete(e), this.Tr = this.Tr.delete(e);
    }
    gr(e) {
      const t = new DocumentKey(new ResourcePath([])), n = new __PRIVATE_DocReference(t, e), r2 = new __PRIVATE_DocReference(t, e + 1);
      let i = __PRIVATE_documentKeySet();
      return this.Tr.forEachInRange([n, r2], (e2) => {
        i = i.add(e2.key);
      }), i;
    }
    containsKey(e) {
      const t = new __PRIVATE_DocReference(e, 0), n = this.Pr.firstAfterOrEqual(t);
      return null !== n && e.isEqual(n.key);
    }
  };
  var __PRIVATE_DocReference = class {
    constructor(e, t) {
      this.key = e, this.pr = t;
    }
    /** Compare by key then by ID */
    static Ir(e, t) {
      return DocumentKey.comparator(e.key, t.key) || __PRIVATE_primitiveComparator(e.pr, t.pr);
    }
    /** Compare by ID then by key */
    static Er(e, t) {
      return __PRIVATE_primitiveComparator(e.pr, t.pr) || DocumentKey.comparator(e.key, t.key);
    }
  };
  var __PRIVATE_MemoryMutationQueue = class {
    constructor(e, t) {
      this.indexManager = e, this.referenceDelegate = t, /**
       * The set of all mutations that have been sent but not yet been applied to
       * the backend.
       */
      this.mutationQueue = [], /** Next value to use when assigning sequential IDs to each mutation batch. */
      this.yr = 1, /** An ordered mapping between documents and the mutations batch IDs. */
      this.wr = new SortedSet(__PRIVATE_DocReference.Ir);
    }
    checkEmpty(e) {
      return PersistencePromise.resolve(0 === this.mutationQueue.length);
    }
    addMutationBatch(e, t, n, r2) {
      const i = this.yr;
      this.yr++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
      const s = new MutationBatch(i, t, n, r2);
      this.mutationQueue.push(s);
      for (const t2 of r2)
        this.wr = this.wr.add(new __PRIVATE_DocReference(t2.key, i)), this.indexManager.addToCollectionParentIndex(e, t2.key.path.popLast());
      return PersistencePromise.resolve(s);
    }
    lookupMutationBatch(e, t) {
      return PersistencePromise.resolve(this.Sr(t));
    }
    getNextMutationBatchAfterBatchId(e, t) {
      const n = t + 1, r2 = this.br(n), i = r2 < 0 ? 0 : r2;
      return PersistencePromise.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null);
    }
    getHighestUnacknowledgedBatchId() {
      return PersistencePromise.resolve(0 === this.mutationQueue.length ? -1 : this.yr - 1);
    }
    getAllMutationBatches(e) {
      return PersistencePromise.resolve(this.mutationQueue.slice());
    }
    getAllMutationBatchesAffectingDocumentKey(e, t) {
      const n = new __PRIVATE_DocReference(t, 0), r2 = new __PRIVATE_DocReference(t, Number.POSITIVE_INFINITY), i = [];
      return this.wr.forEachInRange([n, r2], (e2) => {
        const t2 = this.Sr(e2.pr);
        i.push(t2);
      }), PersistencePromise.resolve(i);
    }
    getAllMutationBatchesAffectingDocumentKeys(e, t) {
      let n = new SortedSet(__PRIVATE_primitiveComparator);
      return t.forEach((e2) => {
        const t2 = new __PRIVATE_DocReference(e2, 0), r2 = new __PRIVATE_DocReference(e2, Number.POSITIVE_INFINITY);
        this.wr.forEachInRange([t2, r2], (e3) => {
          n = n.add(e3.pr);
        });
      }), PersistencePromise.resolve(this.Dr(n));
    }
    getAllMutationBatchesAffectingQuery(e, t) {
      const n = t.path, r2 = n.length + 1;
      let i = n;
      DocumentKey.isDocumentKey(i) || (i = i.child(""));
      const s = new __PRIVATE_DocReference(new DocumentKey(i), 0);
      let o = new SortedSet(__PRIVATE_primitiveComparator);
      return this.wr.forEachWhile((e2) => {
        const t2 = e2.key.path;
        return !!n.isPrefixOf(t2) && // Rows with document keys more than one segment longer than the query
        // path can't be matches. For example, a query on 'rooms' can't match
        // the document /rooms/abc/messages/xyx.
        // TODO(mcg): we'll need a different scanner when we implement
        // ancestor queries.
        (t2.length === r2 && (o = o.add(e2.pr)), true);
      }, s), PersistencePromise.resolve(this.Dr(o));
    }
    Dr(e) {
      const t = [];
      return e.forEach((e2) => {
        const n = this.Sr(e2);
        null !== n && t.push(n);
      }), t;
    }
    removeMutationBatch(e, t) {
      __PRIVATE_hardAssert(0 === this.Cr(t.batchId, "removed")), this.mutationQueue.shift();
      let n = this.wr;
      return PersistencePromise.forEach(t.mutations, (r2) => {
        const i = new __PRIVATE_DocReference(r2.key, t.batchId);
        return n = n.delete(i), this.referenceDelegate.markPotentiallyOrphaned(e, r2.key);
      }).next(() => {
        this.wr = n;
      });
    }
    Mn(e) {
    }
    containsKey(e, t) {
      const n = new __PRIVATE_DocReference(t, 0), r2 = this.wr.firstAfterOrEqual(n);
      return PersistencePromise.resolve(t.isEqual(r2 && r2.key));
    }
    performConsistencyCheck(e) {
      return this.mutationQueue.length, PersistencePromise.resolve();
    }
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    Cr(e, t) {
      return this.br(e);
    }
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    br(e) {
      if (0 === this.mutationQueue.length)
        return 0;
      return e - this.mutationQueue[0].batchId;
    }
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    Sr(e) {
      const t = this.br(e);
      if (t < 0 || t >= this.mutationQueue.length)
        return null;
      return this.mutationQueue[t];
    }
  };
  var __PRIVATE_MemoryRemoteDocumentCacheImpl = class {
    /**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */
    constructor(e) {
      this.vr = e, /** Underlying cache of documents and their read times. */
      this.docs = function __PRIVATE_documentEntryMap() {
        return new SortedMap(DocumentKey.comparator);
      }(), /** Size of all cached documents. */
      this.size = 0;
    }
    setIndexManager(e) {
      this.indexManager = e;
    }
    /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    addEntry(e, t) {
      const n = t.key, r2 = this.docs.get(n), i = r2 ? r2.size : 0, s = this.vr(t);
      return this.docs = this.docs.insert(n, {
        document: t.mutableCopy(),
        size: s
      }), this.size += s - i, this.indexManager.addToCollectionParentIndex(e, n.path.popLast());
    }
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    removeEntry(e) {
      const t = this.docs.get(e);
      t && (this.docs = this.docs.remove(e), this.size -= t.size);
    }
    getEntry(e, t) {
      const n = this.docs.get(t);
      return PersistencePromise.resolve(n ? n.document.mutableCopy() : MutableDocument.newInvalidDocument(t));
    }
    getEntries(e, t) {
      let n = __PRIVATE_mutableDocumentMap();
      return t.forEach((e2) => {
        const t2 = this.docs.get(e2);
        n = n.insert(e2, t2 ? t2.document.mutableCopy() : MutableDocument.newInvalidDocument(e2));
      }), PersistencePromise.resolve(n);
    }
    getDocumentsMatchingQuery(e, t, n, r2) {
      let i = __PRIVATE_mutableDocumentMap();
      const s = t.path, o = new DocumentKey(s.child("")), _ = this.docs.getIteratorFrom(o);
      for (; _.hasNext(); ) {
        const { key: e2, value: { document: o2 } } = _.getNext();
        if (!s.isPrefixOf(e2.path))
          break;
        e2.path.length > s.length + 1 || (__PRIVATE_indexOffsetComparator(__PRIVATE_newIndexOffsetFromDocument(o2), n) <= 0 || (r2.has(o2.key) || __PRIVATE_queryMatches(t, o2)) && (i = i.insert(o2.key, o2.mutableCopy())));
      }
      return PersistencePromise.resolve(i);
    }
    getAllFromCollectionGroup(e, t, n, r2) {
      fail();
    }
    Fr(e, t) {
      return PersistencePromise.forEach(this.docs, (e2) => t(e2));
    }
    newChangeBuffer(e) {
      return new __PRIVATE_MemoryRemoteDocumentChangeBuffer(this);
    }
    getSize(e) {
      return PersistencePromise.resolve(this.size);
    }
  };
  var __PRIVATE_MemoryRemoteDocumentChangeBuffer = class extends RemoteDocumentChangeBuffer {
    constructor(e) {
      super(), this.ar = e;
    }
    applyChanges(e) {
      const t = [];
      return this.changes.forEach((n, r2) => {
        r2.isValidDocument() ? t.push(this.ar.addEntry(e, r2)) : this.ar.removeEntry(n);
      }), PersistencePromise.waitFor(t);
    }
    getFromCache(e, t) {
      return this.ar.getEntry(e, t);
    }
    getAllFromCache(e, t) {
      return this.ar.getEntries(e, t);
    }
  };
  var __PRIVATE_MemoryTargetCache = class {
    constructor(e) {
      this.persistence = e, /**
       * Maps a target to the data about that target
       */
      this.Mr = new ObjectMap((e2) => __PRIVATE_canonifyTarget(e2), __PRIVATE_targetEquals), /** The last received snapshot version. */
      this.lastRemoteSnapshotVersion = SnapshotVersion.min(), /** The highest numbered target ID encountered. */
      this.highestTargetId = 0, /** The highest sequence number encountered. */
      this.Or = 0, /**
       * A ordered bidirectional mapping between documents and the remote target
       * IDs.
       */
      this.Nr = new __PRIVATE_ReferenceSet(), this.targetCount = 0, this.Lr = __PRIVATE_TargetIdGenerator.Nn();
    }
    forEachTarget(e, t) {
      return this.Mr.forEach((e2, n) => t(n)), PersistencePromise.resolve();
    }
    getLastRemoteSnapshotVersion(e) {
      return PersistencePromise.resolve(this.lastRemoteSnapshotVersion);
    }
    getHighestSequenceNumber(e) {
      return PersistencePromise.resolve(this.Or);
    }
    allocateTargetId(e) {
      return this.highestTargetId = this.Lr.next(), PersistencePromise.resolve(this.highestTargetId);
    }
    setTargetsMetadata(e, t, n) {
      return n && (this.lastRemoteSnapshotVersion = n), t > this.Or && (this.Or = t), PersistencePromise.resolve();
    }
    qn(e) {
      this.Mr.set(e.target, e);
      const t = e.targetId;
      t > this.highestTargetId && (this.Lr = new __PRIVATE_TargetIdGenerator(t), this.highestTargetId = t), e.sequenceNumber > this.Or && (this.Or = e.sequenceNumber);
    }
    addTargetData(e, t) {
      return this.qn(t), this.targetCount += 1, PersistencePromise.resolve();
    }
    updateTargetData(e, t) {
      return this.qn(t), PersistencePromise.resolve();
    }
    removeTargetData(e, t) {
      return this.Mr.delete(t.target), this.Nr.Vr(t.targetId), this.targetCount -= 1, PersistencePromise.resolve();
    }
    removeTargets(e, t, n) {
      let r2 = 0;
      const i = [];
      return this.Mr.forEach((s, o) => {
        o.sequenceNumber <= t && null === n.get(o.targetId) && (this.Mr.delete(s), i.push(this.removeMatchingKeysForTargetId(e, o.targetId)), r2++);
      }), PersistencePromise.waitFor(i).next(() => r2);
    }
    getTargetCount(e) {
      return PersistencePromise.resolve(this.targetCount);
    }
    getTargetData(e, t) {
      const n = this.Mr.get(t) || null;
      return PersistencePromise.resolve(n);
    }
    addMatchingKeys(e, t, n) {
      return this.Nr.dr(t, n), PersistencePromise.resolve();
    }
    removeMatchingKeys(e, t, n) {
      this.Nr.Rr(t, n);
      const r2 = this.persistence.referenceDelegate, i = [];
      return r2 && t.forEach((t2) => {
        i.push(r2.markPotentiallyOrphaned(e, t2));
      }), PersistencePromise.waitFor(i);
    }
    removeMatchingKeysForTargetId(e, t) {
      return this.Nr.Vr(t), PersistencePromise.resolve();
    }
    getMatchingKeysForTargetId(e, t) {
      const n = this.Nr.gr(t);
      return PersistencePromise.resolve(n);
    }
    containsKey(e, t) {
      return PersistencePromise.resolve(this.Nr.containsKey(t));
    }
  };
  var __PRIVATE_MemoryPersistence = class {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    constructor(e, t) {
      this.Br = {}, this.overlays = {}, this.kr = new __PRIVATE_ListenSequence(0), this.qr = false, this.qr = true, this.referenceDelegate = e(this), this.Qr = new __PRIVATE_MemoryTargetCache(this);
      this.indexManager = new __PRIVATE_MemoryIndexManager(), this.remoteDocumentCache = function __PRIVATE_newMemoryRemoteDocumentCache(e2) {
        return new __PRIVATE_MemoryRemoteDocumentCacheImpl(e2);
      }((e2) => this.referenceDelegate.Kr(e2)), this.serializer = new __PRIVATE_LocalSerializer(t), this.$r = new __PRIVATE_MemoryBundleCache(this.serializer);
    }
    start() {
      return Promise.resolve();
    }
    shutdown() {
      return this.qr = false, Promise.resolve();
    }
    get started() {
      return this.qr;
    }
    setDatabaseDeletedListener() {
    }
    setNetworkEnabled() {
    }
    getIndexManager(e) {
      return this.indexManager;
    }
    getDocumentOverlayCache(e) {
      let t = this.overlays[e.toKey()];
      return t || (t = new __PRIVATE_MemoryDocumentOverlayCache(), this.overlays[e.toKey()] = t), t;
    }
    getMutationQueue(e, t) {
      let n = this.Br[e.toKey()];
      return n || (n = new __PRIVATE_MemoryMutationQueue(t, this.referenceDelegate), this.Br[e.toKey()] = n), n;
    }
    getTargetCache() {
      return this.Qr;
    }
    getRemoteDocumentCache() {
      return this.remoteDocumentCache;
    }
    getBundleCache() {
      return this.$r;
    }
    runTransaction(e, t, n) {
      __PRIVATE_logDebug("MemoryPersistence", "Starting transaction:", e);
      const r2 = new __PRIVATE_MemoryTransaction(this.kr.next());
      return this.referenceDelegate.Ur(), n(r2).next((e2) => this.referenceDelegate.Wr(r2).next(() => e2)).toPromise().then((e2) => (r2.raiseOnCommittedEvent(), e2));
    }
    Gr(e, t) {
      return PersistencePromise.or(Object.values(this.Br).map((n) => () => n.containsKey(e, t)));
    }
  };
  var __PRIVATE_MemoryTransaction = class extends PersistenceTransaction {
    constructor(e) {
      super(), this.currentSequenceNumber = e;
    }
  };
  var __PRIVATE_MemoryEagerDelegate = class ___PRIVATE_MemoryEagerDelegate {
    constructor(e) {
      this.persistence = e, /** Tracks all documents that are active in Query views. */
      this.zr = new __PRIVATE_ReferenceSet(), /** The list of documents that are potentially GCed after each transaction. */
      this.jr = null;
    }
    static Hr(e) {
      return new ___PRIVATE_MemoryEagerDelegate(e);
    }
    get Jr() {
      if (this.jr)
        return this.jr;
      throw fail();
    }
    addReference(e, t, n) {
      return this.zr.addReference(n, t), this.Jr.delete(n.toString()), PersistencePromise.resolve();
    }
    removeReference(e, t, n) {
      return this.zr.removeReference(n, t), this.Jr.add(n.toString()), PersistencePromise.resolve();
    }
    markPotentiallyOrphaned(e, t) {
      return this.Jr.add(t.toString()), PersistencePromise.resolve();
    }
    removeTarget(e, t) {
      this.zr.Vr(t.targetId).forEach((e2) => this.Jr.add(e2.toString()));
      const n = this.persistence.getTargetCache();
      return n.getMatchingKeysForTargetId(e, t.targetId).next((e2) => {
        e2.forEach((e3) => this.Jr.add(e3.toString()));
      }).next(() => n.removeTargetData(e, t));
    }
    Ur() {
      this.jr = /* @__PURE__ */ new Set();
    }
    Wr(e) {
      const t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
      return PersistencePromise.forEach(this.Jr, (n) => {
        const r2 = DocumentKey.fromPath(n);
        return this.Yr(e, r2).next((e2) => {
          e2 || t.removeEntry(r2, SnapshotVersion.min());
        });
      }).next(() => (this.jr = null, t.apply(e)));
    }
    updateLimboDocument(e, t) {
      return this.Yr(e, t).next((e2) => {
        e2 ? this.Jr.delete(t.toString()) : this.Jr.add(t.toString());
      });
    }
    Kr(e) {
      return 0;
    }
    Yr(e, t) {
      return PersistencePromise.or([() => PersistencePromise.resolve(this.zr.containsKey(t)), () => this.persistence.getTargetCache().containsKey(e, t), () => this.persistence.Gr(e, t)]);
    }
  };
  var __PRIVATE_LocalViewChanges = class ___PRIVATE_LocalViewChanges {
    constructor(e, t, n, r2) {
      this.targetId = e, this.fromCache = t, this.qi = n, this.Qi = r2;
    }
    static Ki(e, t) {
      let n = __PRIVATE_documentKeySet(), r2 = __PRIVATE_documentKeySet();
      for (const e2 of t.docChanges)
        switch (e2.type) {
          case 0:
            n = n.add(e2.doc.key);
            break;
          case 1:
            r2 = r2.add(e2.doc.key);
        }
      return new ___PRIVATE_LocalViewChanges(e, t.fromCache, n, r2);
    }
  };
  var QueryContext = class {
    constructor() {
      this._documentReadCount = 0;
    }
    get documentReadCount() {
      return this._documentReadCount;
    }
    incrementDocumentReadCount(e) {
      this._documentReadCount += e;
    }
  };
  var __PRIVATE_QueryEngine = class {
    constructor() {
      this.$i = false, this.Ui = false, /**
       * SDK only decides whether it should create index when collection size is
       * larger than this.
       */
      this.Wi = 100, this.Gi = /**
      * This cost represents the evaluation result of
      * (([index, docKey] + [docKey, docContent]) per document in the result set)
      * / ([docKey, docContent] per documents in full collection scan) coming from
      * experiment [enter PR experiment URL here].
      */
      function __PRIVATE_getDefaultRelativeIndexReadCostPerDocument() {
        return isSafari() ? 8 : __PRIVATE_SimpleDb.v(getUA()) > 0 ? 6 : 4;
      }();
    }
    /** Sets the document view to query against. */
    initialize(e, t) {
      this.zi = e, this.indexManager = t, this.$i = true;
    }
    /** Returns all local documents matching the specified query. */
    getDocumentsMatchingQuery(e, t, n, r2) {
      const i = {
        result: null
      };
      return this.ji(e, t).next((e2) => {
        i.result = e2;
      }).next(() => {
        if (!i.result)
          return this.Hi(e, t, r2, n).next((e2) => {
            i.result = e2;
          });
      }).next(() => {
        if (i.result)
          return;
        const n2 = new QueryContext();
        return this.Ji(e, t, n2).next((r3) => {
          if (i.result = r3, this.Ui)
            return this.Yi(e, t, n2, r3.size);
        });
      }).next(() => i.result);
    }
    Yi(e, t, n, r2) {
      return n.documentReadCount < this.Wi ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "SDK will not create cache indexes for query:", __PRIVATE_stringifyQuery(t), "since it only creates cache indexes for collection contains", "more than or equal to", this.Wi, "documents"), PersistencePromise.resolve()) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Query:", __PRIVATE_stringifyQuery(t), "scans", n.documentReadCount, "local documents and returns", r2, "documents as results."), n.documentReadCount > this.Gi * r2 ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "The SDK decides to create cache indexes for query:", __PRIVATE_stringifyQuery(t), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(e, __PRIVATE_queryToTarget(t))) : PersistencePromise.resolve());
    }
    /**
     * Performs an indexed query that evaluates the query based on a collection's
     * persisted index values. Returns `null` if an index is not available.
     */
    ji(e, t) {
      if (__PRIVATE_queryMatchesAllDocuments(t))
        return PersistencePromise.resolve(null);
      let n = __PRIVATE_queryToTarget(t);
      return this.indexManager.getIndexType(e, n).next((r2) => 0 === r2 ? null : (null !== t.limit && 1 === r2 && // We cannot apply a limit for targets that are served using a partial
      // index. If a partial index will be used to serve the target, the
      // query may return a superset of documents that match the target
      // (e.g. if the index doesn't include all the target's filters), or
      // may return the correct set of documents in the wrong order (e.g. if
      // the index doesn't include a segment for one of the orderBys).
      // Therefore, a limit should not be applied in such cases.
      (t = __PRIVATE_queryWithLimit(
        t,
        null,
        "F"
        /* LimitType.First */
      ), n = __PRIVATE_queryToTarget(t)), this.indexManager.getDocumentsMatchingTarget(e, n).next((r3) => {
        const i = __PRIVATE_documentKeySet(...r3);
        return this.zi.getDocuments(e, i).next((r4) => this.indexManager.getMinOffset(e, n).next((n2) => {
          const s = this.Zi(t, r4);
          return this.Xi(t, s, i, n2.readTime) ? this.ji(e, __PRIVATE_queryWithLimit(
            t,
            null,
            "F"
            /* LimitType.First */
          )) : this.es(e, s, t, n2);
        }));
      })));
    }
    /**
     * Performs a query based on the target's persisted query mapping. Returns
     * `null` if the mapping is not available or cannot be used.
     */
    Hi(e, t, n, r2) {
      return __PRIVATE_queryMatchesAllDocuments(t) || r2.isEqual(SnapshotVersion.min()) ? PersistencePromise.resolve(null) : this.zi.getDocuments(e, n).next((i) => {
        const s = this.Zi(t, i);
        return this.Xi(t, s, n, r2) ? PersistencePromise.resolve(null) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Re-using previous result from %s to execute query: %s", r2.toString(), __PRIVATE_stringifyQuery(t)), this.es(e, s, t, __PRIVATE_newIndexOffsetSuccessorFromReadTime(r2, -1)).next((e2) => e2));
      });
    }
    /** Applies the query filter and sorting to the provided documents.  */
    Zi(e, t) {
      let n = new SortedSet(__PRIVATE_newQueryComparator(e));
      return t.forEach((t2, r2) => {
        __PRIVATE_queryMatches(e, r2) && (n = n.add(r2));
      }), n;
    }
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param query - The query.
     * @param sortedPreviousResults - The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys - The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion - The version of the snapshot when the
     * query was last synchronized.
     */
    Xi(e, t, n, r2) {
      if (null === e.limit)
        return false;
      if (n.size !== t.size)
        return true;
      const i = "F" === e.limitType ? t.last() : t.first();
      return !!i && (i.hasPendingWrites || i.version.compareTo(r2) > 0);
    }
    Ji(e, t, n) {
      return __PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Using full collection scan to execute query:", __PRIVATE_stringifyQuery(t)), this.zi.getDocumentsMatchingQuery(e, t, IndexOffset.min(), n);
    }
    /**
     * Combines the results from an indexed execution with the remaining documents
     * that have not yet been indexed.
     */
    es(e, t, n, r2) {
      return this.zi.getDocumentsMatchingQuery(e, n, r2).next((e2) => (
        // Merge with existing results
        (t.forEach((t2) => {
          e2 = e2.insert(t2.key, t2);
        }), e2)
      ));
    }
  };
  var __PRIVATE_LocalStoreImpl = class {
    constructor(e, t, n, r2) {
      this.persistence = e, this.ts = t, this.serializer = r2, /**
       * Maps a targetID to data about its target.
       *
       * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
       * of `applyRemoteEvent()` idempotent.
       */
      this.ns = new SortedMap(__PRIVATE_primitiveComparator), /** Maps a target to its targetID. */
      // TODO(wuandy): Evaluate if TargetId can be part of Target.
      this.rs = new ObjectMap((e2) => __PRIVATE_canonifyTarget(e2), __PRIVATE_targetEquals), /**
       * A per collection group index of the last read time processed by
       * `getNewDocumentChanges()`.
       *
       * PORTING NOTE: This is only used for multi-tab synchronization.
       */
      this.ss = /* @__PURE__ */ new Map(), this.os = e.getRemoteDocumentCache(), this.Qr = e.getTargetCache(), this.$r = e.getBundleCache(), this._s(n);
    }
    _s(e) {
      this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e), this.indexManager = this.persistence.getIndexManager(e), this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager), this.localDocuments = new LocalDocumentsView(this.os, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.os.setIndexManager(this.indexManager), this.ts.initialize(this.localDocuments, this.indexManager);
    }
    collectGarbage(e) {
      return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (t) => e.collect(t, this.ns));
    }
  };
  function __PRIVATE_newLocalStore(e, t, n, r2) {
    return new __PRIVATE_LocalStoreImpl(e, t, n, r2);
  }
  async function __PRIVATE_localStoreHandleUserChange(e, t) {
    const n = __PRIVATE_debugCast(e);
    return await n.persistence.runTransaction("Handle user change", "readonly", (e2) => {
      let r2;
      return n.mutationQueue.getAllMutationBatches(e2).next((i) => (r2 = i, n._s(t), n.mutationQueue.getAllMutationBatches(e2))).next((t2) => {
        const i = [], s = [];
        let o = __PRIVATE_documentKeySet();
        for (const e3 of r2) {
          i.push(e3.batchId);
          for (const t3 of e3.mutations)
            o = o.add(t3.key);
        }
        for (const e3 of t2) {
          s.push(e3.batchId);
          for (const t3 of e3.mutations)
            o = o.add(t3.key);
        }
        return n.localDocuments.getDocuments(e2, o).next((e3) => ({
          us: e3,
          removedBatchIds: i,
          addedBatchIds: s
        }));
      });
    });
  }
  function __PRIVATE_localStoreAcknowledgeBatch(e, t) {
    const n = __PRIVATE_debugCast(e);
    return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (e2) => {
      const r2 = t.batch.keys(), i = n.os.newChangeBuffer({
        trackRemovals: true
      });
      return function __PRIVATE_applyWriteToRemoteDocuments(e3, t2, n2, r3) {
        const i2 = n2.batch, s = i2.keys();
        let o = PersistencePromise.resolve();
        return s.forEach((e4) => {
          o = o.next(() => r3.getEntry(t2, e4)).next((t3) => {
            const s2 = n2.docVersions.get(e4);
            __PRIVATE_hardAssert(null !== s2), t3.version.compareTo(s2) < 0 && (i2.applyToRemoteDocument(t3, n2), t3.isValidDocument() && // We use the commitVersion as the readTime rather than the
            // document's updateTime since the updateTime is not advanced
            // for updates that do not modify the underlying document.
            (t3.setReadTime(n2.commitVersion), r3.addEntry(t3)));
          });
        }), o.next(() => e3.mutationQueue.removeMutationBatch(t2, i2));
      }(n, e2, t, i).next(() => i.apply(e2)).next(() => n.mutationQueue.performConsistencyCheck(e2)).next(() => n.documentOverlayCache.removeOverlaysForBatchId(e2, r2, t.batch.batchId)).next(() => n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e2, function __PRIVATE_getKeysWithTransformResults(e3) {
        let t2 = __PRIVATE_documentKeySet();
        for (let n2 = 0; n2 < e3.mutationResults.length; ++n2) {
          e3.mutationResults[n2].transformResults.length > 0 && (t2 = t2.add(e3.batch.mutations[n2].key));
        }
        return t2;
      }(t))).next(() => n.localDocuments.getDocuments(e2, r2));
    });
  }
  function __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e) {
    const t = __PRIVATE_debugCast(e);
    return t.persistence.runTransaction("Get last remote snapshot version", "readonly", (e2) => t.Qr.getLastRemoteSnapshotVersion(e2));
  }
  function __PRIVATE_localStoreGetNextMutationBatch(e, t) {
    const n = __PRIVATE_debugCast(e);
    return n.persistence.runTransaction("Get next mutation batch", "readonly", (e2) => (void 0 === t && (t = -1), n.mutationQueue.getNextMutationBatchAfterBatchId(e2, t)));
  }
  var __PRIVATE_LocalClientState = class {
    constructor() {
      this.activeTargetIds = __PRIVATE_targetIdSet();
    }
    As(e) {
      this.activeTargetIds = this.activeTargetIds.add(e);
    }
    Rs(e) {
      this.activeTargetIds = this.activeTargetIds.delete(e);
    }
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    ds() {
      const e = {
        activeTargetIds: this.activeTargetIds.toArray(),
        updateTimeMs: Date.now()
      };
      return JSON.stringify(e);
    }
  };
  var __PRIVATE_MemorySharedClientState = class {
    constructor() {
      this.no = new __PRIVATE_LocalClientState(), this.ro = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
    }
    addPendingMutation(e) {
    }
    updateMutationState(e, t, n) {
    }
    addLocalQueryTarget(e) {
      return this.no.As(e), this.ro[e] || "not-current";
    }
    updateQueryState(e, t, n) {
      this.ro[e] = t;
    }
    removeLocalQueryTarget(e) {
      this.no.Rs(e);
    }
    isLocalQueryTarget(e) {
      return this.no.activeTargetIds.has(e);
    }
    clearQueryState(e) {
      delete this.ro[e];
    }
    getAllActiveQueryTargets() {
      return this.no.activeTargetIds;
    }
    isActiveQueryTarget(e) {
      return this.no.activeTargetIds.has(e);
    }
    start() {
      return this.no = new __PRIVATE_LocalClientState(), Promise.resolve();
    }
    handleUserChange(e, t, n) {
    }
    setOnlineState(e) {
    }
    shutdown() {
    }
    writeSequenceNumber(e) {
    }
    notifyBundleLoaded(e) {
    }
  };
  var __PRIVATE_NoopConnectivityMonitor = class {
    io(e) {
    }
    shutdown() {
    }
  };
  var __PRIVATE_BrowserConnectivityMonitor = class {
    constructor() {
      this.so = () => this.oo(), this._o = () => this.ao(), this.uo = [], this.co();
    }
    io(e) {
      this.uo.push(e);
    }
    shutdown() {
      window.removeEventListener("online", this.so), window.removeEventListener("offline", this._o);
    }
    co() {
      window.addEventListener("online", this.so), window.addEventListener("offline", this._o);
    }
    oo() {
      __PRIVATE_logDebug("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
      for (const e of this.uo)
        e(
          0
          /* NetworkStatus.AVAILABLE */
        );
    }
    ao() {
      __PRIVATE_logDebug("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
      for (const e of this.uo)
        e(
          1
          /* NetworkStatus.UNAVAILABLE */
        );
    }
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    static D() {
      return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }
  };
  var Ae = null;
  function __PRIVATE_generateUniqueDebugId() {
    return null === Ae ? Ae = function __PRIVATE_generateInitialUniqueDebugId() {
      return 268435456 + Math.round(2147483648 * Math.random());
    }() : Ae++, "0x" + Ae.toString(16);
  }
  var Re = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery",
    RunAggregationQuery: "runAggregationQuery"
  };
  var __PRIVATE_StreamBridge = class {
    constructor(e) {
      this.lo = e.lo, this.ho = e.ho;
    }
    Po(e) {
      this.Io = e;
    }
    To(e) {
      this.Eo = e;
    }
    onMessage(e) {
      this.Ao = e;
    }
    close() {
      this.ho();
    }
    send(e) {
      this.lo(e);
    }
    Ro() {
      this.Io();
    }
    Vo(e) {
      this.Eo(e);
    }
    mo(e) {
      this.Ao(e);
    }
  };
  var Ve = "WebChannelConnection";
  var __PRIVATE_WebChannelConnection = class extends /**
   * Base class for all Rest-based connections to the backend (WebChannel and
   * HTTP).
   */
  class __PRIVATE_RestConnection {
    constructor(e) {
      this.databaseInfo = e, this.databaseId = e.databaseId;
      const t = e.ssl ? "https" : "http", n = encodeURIComponent(this.databaseId.projectId), r2 = encodeURIComponent(this.databaseId.database);
      this.fo = t + "://" + e.host, this.po = `projects/${n}/databases/${r2}`, this.yo = "(default)" === this.databaseId.database ? `project_id=${n}` : `project_id=${n}&database_id=${r2}`;
    }
    get wo() {
      return false;
    }
    So(e, t, n, r2, i) {
      const s = __PRIVATE_generateUniqueDebugId(), o = this.bo(e, t.toUriEncodedString());
      __PRIVATE_logDebug("RestConnection", `Sending RPC '${e}' ${s}:`, o, n);
      const _ = {
        "google-cloud-resource-prefix": this.po,
        "x-goog-request-params": this.yo
      };
      return this.Do(_, r2, i), this.Co(e, o, _, n).then((t2) => (__PRIVATE_logDebug("RestConnection", `Received RPC '${e}' ${s}: `, t2), t2), (t2) => {
        throw __PRIVATE_logWarn("RestConnection", `RPC '${e}' ${s} failed with error: `, t2, "url: ", o, "request:", n), t2;
      });
    }
    vo(e, t, n, r2, i, s) {
      return this.So(e, t, n, r2, i);
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */
    Do(e, t, n) {
      e["X-Goog-Api-Client"] = // SDK_VERSION is updated to different value at runtime depending on the entry point,
      // so we need to get its value when we need it in a function.
      function __PRIVATE_getGoogApiClientValue() {
        return "gl-js/ fire/" + S2;
      }(), // Content-Type: text/plain will avoid preflight requests which might
      // mess with CORS and redirects by proxies. If we add custom headers
      // we will need to change this code to potentially use the $httpOverwrite
      // parameter supported by ESF to avoid triggering preflight requests.
      e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), t && t.headers.forEach((t2, n2) => e[n2] = t2), n && n.headers.forEach((t2, n2) => e[n2] = t2);
    }
    bo(e, t) {
      const n = Re[e];
      return `${this.fo}/v1/${t}:${n}`;
    }
    /**
     * Closes and cleans up any resources associated with the connection. This
     * implementation is a no-op because there are no resources associated
     * with the RestConnection that need to be cleaned up.
     */
    terminate() {
    }
  } {
    constructor(e) {
      super(e), this.forceLongPolling = e.forceLongPolling, this.autoDetectLongPolling = e.autoDetectLongPolling, this.useFetchStreams = e.useFetchStreams, this.longPollingOptions = e.longPollingOptions;
    }
    Co(e, t, n, r2) {
      const i = __PRIVATE_generateUniqueDebugId();
      return new Promise((s, o) => {
        const _ = new XhrIo();
        _.setWithCredentials(true), _.listenOnce(EventType.COMPLETE, () => {
          try {
            switch (_.getLastErrorCode()) {
              case ErrorCode.NO_ERROR:
                const t2 = _.getResponseJson();
                __PRIVATE_logDebug(Ve, `XHR for RPC '${e}' ${i} received:`, JSON.stringify(t2)), s(t2);
                break;
              case ErrorCode.TIMEOUT:
                __PRIVATE_logDebug(Ve, `RPC '${e}' ${i} timed out`), o(new FirestoreError(D2.DEADLINE_EXCEEDED, "Request time out"));
                break;
              case ErrorCode.HTTP_ERROR:
                const n2 = _.getStatus();
                if (__PRIVATE_logDebug(Ve, `RPC '${e}' ${i} failed with status:`, n2, "response text:", _.getResponseText()), n2 > 0) {
                  let e2 = _.getResponseJson();
                  Array.isArray(e2) && (e2 = e2[0]);
                  const t3 = null == e2 ? void 0 : e2.error;
                  if (t3 && t3.status && t3.message) {
                    const e3 = function __PRIVATE_mapCodeFromHttpResponseErrorStatus(e4) {
                      const t4 = e4.toLowerCase().replace(/_/g, "-");
                      return Object.values(D2).indexOf(t4) >= 0 ? t4 : D2.UNKNOWN;
                    }(t3.status);
                    o(new FirestoreError(e3, t3.message));
                  } else
                    o(new FirestoreError(D2.UNKNOWN, "Server responded with status " + _.getStatus()));
                } else
                  o(new FirestoreError(D2.UNAVAILABLE, "Connection failed."));
                break;
              default:
                fail();
            }
          } finally {
            __PRIVATE_logDebug(Ve, `RPC '${e}' ${i} completed.`);
          }
        });
        const a = JSON.stringify(r2);
        __PRIVATE_logDebug(Ve, `RPC '${e}' ${i} sending request:`, r2), _.send(t, "POST", a, n, 15);
      });
    }
    Fo(e, t, n) {
      const r2 = __PRIVATE_generateUniqueDebugId(), i = [this.fo, "/", "google.firestore.v1.Firestore", "/", e, "/channel"], s = createWebChannelTransport(), o = getStatEventTarget(), _ = {
        // Required for backend stickiness, routing behavior is based on this
        // parameter.
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          // This param is used to improve routing and project isolation by the
          // backend and must be included in every request.
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
        },
        sendRawJson: true,
        supportsCrossDomainXhr: true,
        internalChannelParams: {
          // Override the default timeout (randomized between 10-20 seconds) since
          // a large write batch on a slow internet connection may take a long
          // time to send to the backend. Rather than have WebChannel impose a
          // tight timeout which could lead to infinite timeouts and retries, we
          // set it very large (5-10 minutes) and rely on the browser's builtin
          // timeouts to kick in if the request isn't working.
          forwardChannelRequestTimeoutMs: 6e5
        },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling
      }, a = this.longPollingOptions.timeoutSeconds;
      void 0 !== a && (_.longPollingTimeout = Math.round(1e3 * a)), this.useFetchStreams && (_.useFetchStreams = true), this.Do(_.initMessageHeaders, t, n), // Sending the custom headers we just added to request.initMessageHeaders
      // (Authorization, etc.) will trigger the browser to make a CORS preflight
      // request because the XHR will no longer meet the criteria for a "simple"
      // CORS request:
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
      // Therefore to avoid the CORS preflight request (an extra network
      // roundtrip), we use the encodeInitMessageHeaders option to specify that
      // the headers should instead be encoded in the request's POST payload,
      // which is recognized by the webchannel backend.
      _.encodeInitMessageHeaders = true;
      const u = i.join("");
      __PRIVATE_logDebug(Ve, `Creating RPC '${e}' stream ${r2}: ${u}`, _);
      const c = s.createWebChannel(u, _);
      let l2 = false, h = false;
      const P2 = new __PRIVATE_StreamBridge({
        lo: (t2) => {
          h ? __PRIVATE_logDebug(Ve, `Not sending because RPC '${e}' stream ${r2} is closed:`, t2) : (l2 || (__PRIVATE_logDebug(Ve, `Opening RPC '${e}' stream ${r2} transport.`), c.open(), l2 = true), __PRIVATE_logDebug(Ve, `RPC '${e}' stream ${r2} sending:`, t2), c.send(t2));
        },
        ho: () => c.close()
      }), __PRIVATE_unguardedEventListen = (e2, t2, n2) => {
        e2.listen(t2, (e3) => {
          try {
            n2(e3);
          } catch (e4) {
            setTimeout(() => {
              throw e4;
            }, 0);
          }
        });
      };
      return __PRIVATE_unguardedEventListen(c, WebChannel.EventType.OPEN, () => {
        h || __PRIVATE_logDebug(Ve, `RPC '${e}' stream ${r2} transport opened.`);
      }), __PRIVATE_unguardedEventListen(c, WebChannel.EventType.CLOSE, () => {
        h || (h = true, __PRIVATE_logDebug(Ve, `RPC '${e}' stream ${r2} transport closed`), P2.Vo());
      }), __PRIVATE_unguardedEventListen(c, WebChannel.EventType.ERROR, (t2) => {
        h || (h = true, __PRIVATE_logWarn(Ve, `RPC '${e}' stream ${r2} transport errored:`, t2), P2.Vo(new FirestoreError(D2.UNAVAILABLE, "The operation could not be completed")));
      }), __PRIVATE_unguardedEventListen(c, WebChannel.EventType.MESSAGE, (t2) => {
        var n2;
        if (!h) {
          const i2 = t2.data[0];
          __PRIVATE_hardAssert(!!i2);
          const s2 = i2, o2 = s2.error || (null === (n2 = s2[0]) || void 0 === n2 ? void 0 : n2.error);
          if (o2) {
            __PRIVATE_logDebug(Ve, `RPC '${e}' stream ${r2} received error:`, o2);
            const t3 = o2.status;
            let n3 = (
              /**
              * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
              *
              * @returns The Code equivalent to the given status string or undefined if
              *     there is no match.
              */
              function __PRIVATE_mapCodeFromRpcStatus(e2) {
                const t4 = ae2[e2];
                if (void 0 !== t4)
                  return __PRIVATE_mapCodeFromRpcCode(t4);
              }(t3)
            ), i3 = o2.message;
            void 0 === n3 && (n3 = D2.INTERNAL, i3 = "Unknown error status: " + t3 + " with message " + o2.message), // Mark closed so no further events are propagated
            h = true, P2.Vo(new FirestoreError(n3, i3)), c.close();
          } else
            __PRIVATE_logDebug(Ve, `RPC '${e}' stream ${r2} received:`, i2), P2.mo(i2);
        }
      }), __PRIVATE_unguardedEventListen(o, Event.STAT_EVENT, (t2) => {
        t2.stat === Stat.PROXY ? __PRIVATE_logDebug(Ve, `RPC '${e}' stream ${r2} detected buffering proxy`) : t2.stat === Stat.NOPROXY && __PRIVATE_logDebug(Ve, `RPC '${e}' stream ${r2} detected no buffering proxy`);
      }), setTimeout(() => {
        P2.Ro();
      }, 0), P2;
    }
  };
  function getDocument() {
    return "undefined" != typeof document ? document : null;
  }
  function __PRIVATE_newSerializer(e) {
    return new JsonProtoSerializer(
      e,
      /* useProto3Json= */
      true
    );
  }
  var __PRIVATE_ExponentialBackoff = class {
    constructor(e, t, n = 1e3, r2 = 1.5, i = 6e4) {
      this.oi = e, this.timerId = t, this.Mo = n, this.xo = r2, this.Oo = i, this.No = 0, this.Lo = null, /** The last backoff attempt, as epoch milliseconds. */
      this.Bo = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */
    reset() {
      this.No = 0;
    }
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    ko() {
      this.No = this.Oo;
    }
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    qo(e) {
      this.cancel();
      const t = Math.floor(this.No + this.Qo()), n = Math.max(0, Date.now() - this.Bo), r2 = Math.max(0, t - n);
      r2 > 0 && __PRIVATE_logDebug("ExponentialBackoff", `Backing off for ${r2} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`), this.Lo = this.oi.enqueueAfterDelay(this.timerId, r2, () => (this.Bo = Date.now(), e())), // Apply backoff factor to determine next delay and ensure it is within
      // bounds.
      this.No *= this.xo, this.No < this.Mo && (this.No = this.Mo), this.No > this.Oo && (this.No = this.Oo);
    }
    Ko() {
      null !== this.Lo && (this.Lo.skipDelay(), this.Lo = null);
    }
    cancel() {
      null !== this.Lo && (this.Lo.cancel(), this.Lo = null);
    }
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
    Qo() {
      return (Math.random() - 0.5) * this.No;
    }
  };
  var __PRIVATE_PersistentStream = class {
    constructor(e, t, n, r2, i, s, o, _) {
      this.oi = e, this.$o = n, this.Uo = r2, this.connection = i, this.authCredentialsProvider = s, this.appCheckCredentialsProvider = o, this.listener = _, this.state = 0, /**
       * A close count that's incremented every time the stream is closed; used by
       * getCloseGuardedDispatcher() to invalidate callbacks that happen after
       * close.
       */
      this.Wo = 0, this.Go = null, this.zo = null, this.stream = null, this.jo = new __PRIVATE_ExponentialBackoff(e, t);
    }
    /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */
    Ho() {
      return 1 === this.state || 5 === this.state || this.Jo();
    }
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    Jo() {
      return 2 === this.state || 3 === this.state;
    }
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    start() {
      4 !== this.state ? this.auth() : this.Yo();
    }
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    async stop() {
      this.Ho() && await this.close(
        0
        /* PersistentStreamState.Initial */
      );
    }
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    Zo() {
      this.state = 0, this.jo.reset();
    }
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    Xo() {
      this.Jo() && null === this.Go && (this.Go = this.oi.enqueueAfterDelay(this.$o, 6e4, () => this.e_()));
    }
    /** Sends a message to the underlying stream. */
    t_(e) {
      this.n_(), this.stream.send(e);
    }
    /** Called by the idle timer when the stream should close due to inactivity. */
    async e_() {
      if (this.Jo())
        return this.close(
          0
          /* PersistentStreamState.Initial */
        );
    }
    /** Marks the stream as active again. */
    n_() {
      this.Go && (this.Go.cancel(), this.Go = null);
    }
    /** Cancels the health check delayed operation. */
    r_() {
      this.zo && (this.zo.cancel(), this.zo = null);
    }
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState - the intended state of the stream after closing.
     * @param error - the error the connection was closed with.
     */
    async close(e, t) {
      this.n_(), this.r_(), this.jo.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
      // underlying stream), guaranteeing they won't execute.
      this.Wo++, 4 !== e ? (
        // If this is an intentional close ensure we don't delay our next connection attempt.
        this.jo.reset()
      ) : t && t.code === D2.RESOURCE_EXHAUSTED ? (
        // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
        (__PRIVATE_logError(t.toString()), __PRIVATE_logError("Using maximum backoff delay to prevent overloading the backend."), this.jo.ko())
      ) : t && t.code === D2.UNAUTHENTICATED && 3 !== this.state && // "unauthenticated" error means the token was rejected. This should rarely
      // happen since both Auth and AppCheck ensure a sufficient TTL when we
      // request a token. If a user manually resets their system clock this can
      // fail, however. In this case, we should get a Code.UNAUTHENTICATED error
      // before we received the first message and we need to invalidate the token
      // to ensure that we fetch a new token.
      (this.authCredentialsProvider.invalidateToken(), this.appCheckCredentialsProvider.invalidateToken()), // Clean up the underlying stream because we are no longer interested in events.
      null !== this.stream && (this.i_(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
      // inhibit backoff or otherwise manipulate the state in its non-started state.
      this.state = e, // Notify the listener that the stream closed.
      await this.listener.To(t);
    }
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    i_() {
    }
    auth() {
      this.state = 1;
      const e = this.s_(this.Wo), t = this.Wo;
      Promise.all([this.authCredentialsProvider.getToken(), this.appCheckCredentialsProvider.getToken()]).then(([e2, n]) => {
        this.Wo === t && // Normally we'd have to schedule the callback on the AsyncQueue.
        // However, the following calls are safe to be called outside the
        // AsyncQueue since they don't chain asynchronous calls
        this.o_(e2, n);
      }, (t2) => {
        e(() => {
          const e2 = new FirestoreError(D2.UNKNOWN, "Fetching auth token failed: " + t2.message);
          return this.__(e2);
        });
      });
    }
    o_(e, t) {
      const n = this.s_(this.Wo);
      this.stream = this.a_(e, t), this.stream.Po(() => {
        n(() => (this.state = 2, this.zo = this.oi.enqueueAfterDelay(this.Uo, 1e4, () => (this.Jo() && (this.state = 3), Promise.resolve())), this.listener.Po()));
      }), this.stream.To((e2) => {
        n(() => this.__(e2));
      }), this.stream.onMessage((e2) => {
        n(() => this.onMessage(e2));
      });
    }
    Yo() {
      this.state = 5, this.jo.qo(async () => {
        this.state = 0, this.start();
      });
    }
    // Visible for tests
    __(e) {
      return __PRIVATE_logDebug("PersistentStream", `close with error: ${e}`), this.stream = null, this.close(4, e);
    }
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    s_(e) {
      return (t) => {
        this.oi.enqueueAndForget(() => this.Wo === e ? t() : (__PRIVATE_logDebug("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()));
      };
    }
  };
  var __PRIVATE_PersistentWriteStream = class extends __PRIVATE_PersistentStream {
    constructor(e, t, n, r2, i, s) {
      super(e, "write_stream_connection_backoff", "write_stream_idle", "health_check_timeout", t, n, r2, s), this.serializer = i, this.h_ = false;
    }
    /**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */
    get P_() {
      return this.h_;
    }
    // Override of PersistentStream.start
    start() {
      this.h_ = false, this.lastStreamToken = void 0, super.start();
    }
    i_() {
      this.h_ && this.I_([]);
    }
    a_(e, t) {
      return this.connection.Fo("Write", e, t);
    }
    onMessage(e) {
      if (
        // Always capture the last stream token.
        __PRIVATE_hardAssert(!!e.streamToken), this.lastStreamToken = e.streamToken, this.h_
      ) {
        this.jo.reset();
        const t = __PRIVATE_fromWriteResults(e.writeResults, e.commitTime), n = __PRIVATE_fromVersion(e.commitTime);
        return this.listener.T_(n, t);
      }
      return __PRIVATE_hardAssert(!e.writeResults || 0 === e.writeResults.length), this.h_ = true, this.listener.E_();
    }
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    d_() {
      const e = {};
      e.database = __PRIVATE_getEncodedDatabaseId(this.serializer), this.t_(e);
    }
    /** Sends a group of mutations to the Firestore backend to apply. */
    I_(e) {
      const t = {
        streamToken: this.lastStreamToken,
        writes: e.map((e2) => toMutation(this.serializer, e2))
      };
      this.t_(t);
    }
  };
  var __PRIVATE_DatastoreImpl = class extends class Datastore {
  } {
    constructor(e, t, n, r2) {
      super(), this.authCredentials = e, this.appCheckCredentials = t, this.connection = n, this.serializer = r2, this.A_ = false;
    }
    R_() {
      if (this.A_)
        throw new FirestoreError(D2.FAILED_PRECONDITION, "The client has already been terminated.");
    }
    /** Invokes the provided RPC with auth and AppCheck tokens. */
    So(e, t, n, r2) {
      return this.R_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i, s]) => this.connection.So(e, __PRIVATE_toResourcePath(t, n), r2, i, s)).catch((e2) => {
        throw "FirebaseError" === e2.name ? (e2.code === D2.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e2) : new FirestoreError(D2.UNKNOWN, e2.toString());
      });
    }
    /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
    vo(e, t, n, r2, i) {
      return this.R_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s, o]) => this.connection.vo(e, __PRIVATE_toResourcePath(t, n), r2, s, o, i)).catch((e2) => {
        throw "FirebaseError" === e2.name ? (e2.code === D2.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e2) : new FirestoreError(D2.UNKNOWN, e2.toString());
      });
    }
    terminate() {
      this.A_ = true, this.connection.terminate();
    }
  };
  var __PRIVATE_OnlineStateTracker = class {
    constructor(e, t) {
      this.asyncQueue = e, this.onlineStateHandler = t, /** The current OnlineState. */
      this.state = "Unknown", /**
       * A count of consecutive failures to open the stream. If it reaches the
       * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
       * Offline.
       */
      this.m_ = 0, /**
       * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
       * transition from OnlineState.Unknown to OnlineState.Offline without waiting
       * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
       */
      this.f_ = null, /**
       * Whether the client should log a warning message if it fails to connect to
       * the backend (initially true, cleared after a successful stream, or if we've
       * logged the message already).
       */
      this.g_ = true;
    }
    /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */
    p_() {
      0 === this.m_ && (this.y_(
        "Unknown"
        /* OnlineState.Unknown */
      ), this.f_ = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.f_ = null, this.w_("Backend didn't respond within 10 seconds."), this.y_(
        "Offline"
        /* OnlineState.Offline */
      ), Promise.resolve())));
    }
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    S_(e) {
      "Online" === this.state ? this.y_(
        "Unknown"
        /* OnlineState.Unknown */
      ) : (this.m_++, this.m_ >= 1 && (this.b_(), this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`), this.y_(
        "Offline"
        /* OnlineState.Offline */
      )));
    }
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    set(e) {
      this.b_(), this.m_ = 0, "Online" === e && // We've connected to watch at least once. Don't warn the developer
      // about being offline going forward.
      (this.g_ = false), this.y_(e);
    }
    y_(e) {
      e !== this.state && (this.state = e, this.onlineStateHandler(e));
    }
    w_(e) {
      const t = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
      this.g_ ? (__PRIVATE_logError(t), this.g_ = false) : __PRIVATE_logDebug("OnlineStateTracker", t);
    }
    b_() {
      null !== this.f_ && (this.f_.cancel(), this.f_ = null);
    }
  };
  var __PRIVATE_RemoteStoreImpl = class {
    constructor(e, t, n, r2, i) {
      this.localStore = e, this.datastore = t, this.asyncQueue = n, this.remoteSyncer = {}, /**
       * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
       * LocalStore via fillWritePipeline() and have or will send to the write
       * stream.
       *
       * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
       * restart the write stream. When the stream is established the writes in the
       * pipeline will be sent in order.
       *
       * Writes remain in writePipeline until they are acknowledged by the backend
       * and thus will automatically be re-sent if the stream is interrupted /
       * restarted before they're acknowledged.
       *
       * Write responses from the backend are linked to their originating request
       * purely based on order, and so we can just shift() writes from the front of
       * the writePipeline as we receive responses.
       */
      this.D_ = [], /**
       * A mapping of watched targets that the client cares about tracking and the
       * user has explicitly called a 'listen' for this target.
       *
       * These targets may or may not have been sent to or acknowledged by the
       * server. On re-establishing the listen stream, these targets should be sent
       * to the server. The targets removed with unlistens are removed eagerly
       * without waiting for confirmation from the listen stream.
       */
      this.C_ = /* @__PURE__ */ new Map(), /**
       * A set of reasons for why the RemoteStore may be offline. If empty, the
       * RemoteStore may start its network connections.
       */
      this.v_ = /* @__PURE__ */ new Set(), /**
       * Event handlers that get called when the network is disabled or enabled.
       *
       * PORTING NOTE: These functions are used on the Web client to create the
       * underlying streams (to support tree-shakeable streams). On Android and iOS,
       * the streams are created during construction of RemoteStore.
       */
      this.F_ = [], this.M_ = i, this.M_.io((e2) => {
        n.enqueueAndForget(async () => {
          __PRIVATE_canUseNetwork(this) && (__PRIVATE_logDebug("RemoteStore", "Restarting streams for network reachability change."), await async function __PRIVATE_restartNetwork(e3) {
            const t2 = __PRIVATE_debugCast(e3);
            t2.v_.add(
              4
              /* OfflineCause.ConnectivityChange */
            ), await __PRIVATE_disableNetworkInternal(t2), t2.x_.set(
              "Unknown"
              /* OnlineState.Unknown */
            ), t2.v_.delete(
              4
              /* OfflineCause.ConnectivityChange */
            ), await __PRIVATE_enableNetworkInternal(t2);
          }(this));
        });
      }), this.x_ = new __PRIVATE_OnlineStateTracker(n, r2);
    }
  };
  async function __PRIVATE_enableNetworkInternal(e) {
    if (__PRIVATE_canUseNetwork(e))
      for (const t of e.F_)
        await t(
          /* enabled= */
          true
        );
  }
  async function __PRIVATE_disableNetworkInternal(e) {
    for (const t of e.F_)
      await t(
        /* enabled= */
        false
      );
  }
  function __PRIVATE_canUseNetwork(e) {
    return 0 === __PRIVATE_debugCast(e).v_.size;
  }
  async function __PRIVATE_disableNetworkUntilRecovery(e, t, n) {
    if (!__PRIVATE_isIndexedDbTransactionError(t))
      throw t;
    e.v_.add(
      1
      /* OfflineCause.IndexedDbFailed */
    ), // Disable network and raise offline snapshots
    await __PRIVATE_disableNetworkInternal(e), e.x_.set(
      "Offline"
      /* OnlineState.Offline */
    ), n || // Use a simple read operation to determine if IndexedDB recovered.
    // Ideally, we would expose a health check directly on SimpleDb, but
    // RemoteStore only has access to persistence through LocalStore.
    (n = () => __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e.localStore)), // Probe IndexedDB periodically and re-enable network
    e.asyncQueue.enqueueRetryable(async () => {
      __PRIVATE_logDebug("RemoteStore", "Retrying IndexedDB access"), await n(), e.v_.delete(
        1
        /* OfflineCause.IndexedDbFailed */
      ), await __PRIVATE_enableNetworkInternal(e);
    });
  }
  function __PRIVATE_executeWithRecovery(e, t) {
    return t().catch((n) => __PRIVATE_disableNetworkUntilRecovery(e, n, t));
  }
  async function __PRIVATE_fillWritePipeline(e) {
    const t = __PRIVATE_debugCast(e), n = __PRIVATE_ensureWriteStream(t);
    let r2 = t.D_.length > 0 ? t.D_[t.D_.length - 1].batchId : -1;
    for (; __PRIVATE_canAddToWritePipeline(t); )
      try {
        const e2 = await __PRIVATE_localStoreGetNextMutationBatch(t.localStore, r2);
        if (null === e2) {
          0 === t.D_.length && n.Xo();
          break;
        }
        r2 = e2.batchId, __PRIVATE_addToWritePipeline(t, e2);
      } catch (e2) {
        await __PRIVATE_disableNetworkUntilRecovery(t, e2);
      }
    __PRIVATE_shouldStartWriteStream(t) && __PRIVATE_startWriteStream(t);
  }
  function __PRIVATE_canAddToWritePipeline(e) {
    return __PRIVATE_canUseNetwork(e) && e.D_.length < 10;
  }
  function __PRIVATE_addToWritePipeline(e, t) {
    e.D_.push(t);
    const n = __PRIVATE_ensureWriteStream(e);
    n.Jo() && n.P_ && n.I_(t.mutations);
  }
  function __PRIVATE_shouldStartWriteStream(e) {
    return __PRIVATE_canUseNetwork(e) && !__PRIVATE_ensureWriteStream(e).Ho() && e.D_.length > 0;
  }
  function __PRIVATE_startWriteStream(e) {
    __PRIVATE_ensureWriteStream(e).start();
  }
  async function __PRIVATE_onWriteStreamOpen(e) {
    __PRIVATE_ensureWriteStream(e).d_();
  }
  async function __PRIVATE_onWriteHandshakeComplete(e) {
    const t = __PRIVATE_ensureWriteStream(e);
    for (const n of e.D_)
      t.I_(n.mutations);
  }
  async function __PRIVATE_onMutationResult(e, t, n) {
    const r2 = e.D_.shift(), i = MutationBatchResult.from(r2, t, n);
    await __PRIVATE_executeWithRecovery(e, () => e.remoteSyncer.applySuccessfulWrite(i)), // It's possible that with the completion of this mutation another
    // slot has freed up.
    await __PRIVATE_fillWritePipeline(e);
  }
  async function __PRIVATE_onWriteStreamClose(e, t) {
    t && __PRIVATE_ensureWriteStream(e).P_ && // This error affects the actual write.
    await async function __PRIVATE_handleWriteError(e2, t2) {
      if (function __PRIVATE_isPermanentWriteError(e3) {
        return __PRIVATE_isPermanentError(e3) && e3 !== D2.ABORTED;
      }(t2.code)) {
        const n = e2.D_.shift();
        __PRIVATE_ensureWriteStream(e2).Zo(), await __PRIVATE_executeWithRecovery(e2, () => e2.remoteSyncer.rejectFailedWrite(n.batchId, t2)), // It's possible that with the completion of this mutation
        // another slot has freed up.
        await __PRIVATE_fillWritePipeline(e2);
      }
    }(e, t), // The write stream might have been started by refilling the write
    // pipeline for failed writes
    __PRIVATE_shouldStartWriteStream(e) && __PRIVATE_startWriteStream(e);
  }
  async function __PRIVATE_remoteStoreHandleCredentialChange(e, t) {
    const n = __PRIVATE_debugCast(e);
    n.asyncQueue.verifyOperationInProgress(), __PRIVATE_logDebug("RemoteStore", "RemoteStore received new credentials");
    const r2 = __PRIVATE_canUseNetwork(n);
    n.v_.add(
      3
      /* OfflineCause.CredentialChange */
    ), await __PRIVATE_disableNetworkInternal(n), r2 && // Don't set the network status to Unknown if we are offline.
    n.x_.set(
      "Unknown"
      /* OnlineState.Unknown */
    ), await n.remoteSyncer.handleCredentialChange(t), n.v_.delete(
      3
      /* OfflineCause.CredentialChange */
    ), await __PRIVATE_enableNetworkInternal(n);
  }
  async function __PRIVATE_remoteStoreApplyPrimaryState(e, t) {
    const n = __PRIVATE_debugCast(e);
    t ? (n.v_.delete(
      2
      /* OfflineCause.IsSecondary */
    ), await __PRIVATE_enableNetworkInternal(n)) : t || (n.v_.add(
      2
      /* OfflineCause.IsSecondary */
    ), await __PRIVATE_disableNetworkInternal(n), n.x_.set(
      "Unknown"
      /* OnlineState.Unknown */
    ));
  }
  function __PRIVATE_ensureWriteStream(e) {
    return e.L_ || // Create stream (but note that it is not started yet).
    (e.L_ = function __PRIVATE_newPersistentWriteStream(e2, t, n) {
      const r2 = __PRIVATE_debugCast(e2);
      return r2.R_(), new __PRIVATE_PersistentWriteStream(t, r2.connection, r2.authCredentials, r2.appCheckCredentials, r2.serializer, n);
    }(e.datastore, e.asyncQueue, {
      Po: __PRIVATE_onWriteStreamOpen.bind(null, e),
      To: __PRIVATE_onWriteStreamClose.bind(null, e),
      E_: __PRIVATE_onWriteHandshakeComplete.bind(null, e),
      T_: __PRIVATE_onMutationResult.bind(null, e)
    }), e.F_.push(async (t) => {
      t ? (e.L_.Zo(), // This will start the write stream if necessary.
      await __PRIVATE_fillWritePipeline(e)) : (await e.L_.stop(), e.D_.length > 0 && (__PRIVATE_logDebug("RemoteStore", `Stopping write stream with ${e.D_.length} pending writes`), e.D_ = []));
    })), e.L_;
  }
  var DelayedOperation = class _DelayedOperation {
    constructor(e, t, n, r2, i) {
      this.asyncQueue = e, this.timerId = t, this.targetTimeMs = n, this.op = r2, this.removalCallback = i, this.deferred = new __PRIVATE_Deferred(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
      // and so we attach a dummy catch callback to avoid
      // 'UnhandledPromiseRejectionWarning' log spam.
      this.deferred.promise.catch((e2) => {
      });
    }
    get promise() {
      return this.deferred.promise;
    }
    /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */
    static createAndSchedule(e, t, n, r2, i) {
      const s = Date.now() + n, o = new _DelayedOperation(e, t, s, r2, i);
      return o.start(n), o;
    }
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    start(e) {
      this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
    }
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    skipDelay() {
      return this.handleDelayElapsed();
    }
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    cancel(e) {
      null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new FirestoreError(D2.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))));
    }
    handleDelayElapsed() {
      this.asyncQueue.enqueueAndForget(() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e))) : Promise.resolve());
    }
    clearTimeout() {
      null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
    }
  };
  function __PRIVATE_wrapInUserErrorIfRecoverable(e, t) {
    if (__PRIVATE_logError("AsyncQueue", `${t}: ${e}`), __PRIVATE_isIndexedDbTransactionError(e))
      return new FirestoreError(D2.UNAVAILABLE, `${t}: ${e}`);
    throw e;
  }
  var __PRIVATE_EventManagerImpl = class {
    constructor() {
      this.queries = new ObjectMap((e) => __PRIVATE_canonifyQuery(e), __PRIVATE_queryEquals), this.onlineState = "Unknown", this.W_ = /* @__PURE__ */ new Set();
    }
  };
  function __PRIVATE_raiseSnapshotsInSyncEvent(e) {
    e.W_.forEach((e2) => {
      e2.next();
    });
  }
  var me;
  var fe;
  (fe = me || (me = {})).j_ = "default", /** Listen to changes in cache only */
  fe.Cache = "cache";
  var __PRIVATE_SyncEngineImpl = class {
    constructor(e, t, n, r2, i, s) {
      this.localStore = e, this.remoteStore = t, this.eventManager = n, this.sharedClientState = r2, this.currentUser = i, this.maxConcurrentLimboResolutions = s, this.ya = {}, this.wa = new ObjectMap((e2) => __PRIVATE_canonifyQuery(e2), __PRIVATE_queryEquals), this.Sa = /* @__PURE__ */ new Map(), /**
       * The keys of documents that are in limbo for which we haven't yet started a
       * limbo resolution query. The strings in this set are the result of calling
       * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
       *
       * The `Set` type was chosen because it provides efficient lookup and removal
       * of arbitrary elements and it also maintains insertion order, providing the
       * desired queue-like FIFO semantics.
       */
      this.ba = /* @__PURE__ */ new Set(), /**
       * Keeps track of the target ID for each document that is in limbo with an
       * active target.
       */
      this.Da = new SortedMap(DocumentKey.comparator), /**
       * Keeps track of the information about an active limbo resolution for each
       * active target ID that was started for the purpose of limbo resolution.
       */
      this.Ca = /* @__PURE__ */ new Map(), this.va = new __PRIVATE_ReferenceSet(), /** Stores user completion handlers, indexed by User and BatchId. */
      this.Fa = {}, /** Stores user callbacks waiting for all pending writes to be acknowledged. */
      this.Ma = /* @__PURE__ */ new Map(), this.xa = __PRIVATE_TargetIdGenerator.Ln(), this.onlineState = "Unknown", // The primary state is set to `true` or `false` immediately after Firestore
      // startup. In the interim, a client should only be considered primary if
      // `isPrimary` is true.
      this.Oa = void 0;
    }
    get isPrimaryClient() {
      return true === this.Oa;
    }
  };
  async function __PRIVATE_syncEngineWrite(e, t, n) {
    const r2 = __PRIVATE_syncEngineEnsureWriteCallbacks(e);
    try {
      const e2 = await function __PRIVATE_localStoreWriteLocally(e3, t2) {
        const n2 = __PRIVATE_debugCast(e3), r3 = Timestamp.now(), i = t2.reduce((e4, t3) => e4.add(t3.key), __PRIVATE_documentKeySet());
        let s, o;
        return n2.persistence.runTransaction("Locally write mutations", "readwrite", (e4) => {
          let _ = __PRIVATE_mutableDocumentMap(), a = __PRIVATE_documentKeySet();
          return n2.os.getEntries(e4, i).next((e5) => {
            _ = e5, _.forEach((e6, t3) => {
              t3.isValidDocument() || (a = a.add(e6));
            });
          }).next(() => n2.localDocuments.getOverlayedDocuments(e4, _)).next((i2) => {
            s = i2;
            const o2 = [];
            for (const e5 of t2) {
              const t3 = __PRIVATE_mutationExtractBaseValue(e5, s.get(e5.key).overlayedDocument);
              null != t3 && // NOTE: The base state should only be applied if there's some
              // existing document to override, so use a Precondition of
              // exists=true
              o2.push(new __PRIVATE_PatchMutation(e5.key, t3, __PRIVATE_extractFieldMask(t3.value.mapValue), Precondition.exists(true)));
            }
            return n2.mutationQueue.addMutationBatch(e4, r3, o2, t2);
          }).next((t3) => {
            o = t3;
            const r4 = t3.applyToLocalDocumentSet(s, a);
            return n2.documentOverlayCache.saveOverlays(e4, t3.batchId, r4);
          });
        }).then(() => ({
          batchId: o.batchId,
          changes: __PRIVATE_convertOverlayedDocumentMapToDocumentMap(s)
        }));
      }(r2.localStore, t);
      r2.sharedClientState.addPendingMutation(e2.batchId), function __PRIVATE_addMutationCallback(e3, t2, n2) {
        let r3 = e3.Fa[e3.currentUser.toKey()];
        r3 || (r3 = new SortedMap(__PRIVATE_primitiveComparator));
        r3 = r3.insert(t2, n2), e3.Fa[e3.currentUser.toKey()] = r3;
      }(r2, e2.batchId, n), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(r2, e2.changes), await __PRIVATE_fillWritePipeline(r2.remoteStore);
    } catch (e2) {
      const t2 = __PRIVATE_wrapInUserErrorIfRecoverable(e2, "Failed to persist write");
      n.reject(t2);
    }
  }
  function __PRIVATE_syncEngineApplyOnlineStateChange(e, t, n) {
    const r2 = __PRIVATE_debugCast(e);
    if (r2.isPrimaryClient && 0 === n || !r2.isPrimaryClient && 1 === n) {
      const e2 = [];
      r2.wa.forEach((n2, r3) => {
        const i = r3.view.G_(t);
        i.snapshot && e2.push(i.snapshot);
      }), function __PRIVATE_eventManagerOnOnlineStateChange(e3, t2) {
        const n2 = __PRIVATE_debugCast(e3);
        n2.onlineState = t2;
        let r3 = false;
        n2.queries.forEach((e4, n3) => {
          for (const e5 of n3.Q_)
            e5.G_(t2) && (r3 = true);
        }), r3 && __PRIVATE_raiseSnapshotsInSyncEvent(n2);
      }(r2.eventManager, t), e2.length && r2.ya.u_(e2), r2.onlineState = t, r2.isPrimaryClient && r2.sharedClientState.setOnlineState(t);
    }
  }
  async function __PRIVATE_syncEngineApplySuccessfulWrite(e, t) {
    const n = __PRIVATE_debugCast(e), r2 = t.batch.batchId;
    try {
      const e2 = await __PRIVATE_localStoreAcknowledgeBatch(n.localStore, t);
      __PRIVATE_processUserCallback(
        n,
        r2,
        /*error=*/
        null
      ), __PRIVATE_triggerPendingWritesCallbacks(n, r2), n.sharedClientState.updateMutationState(r2, "acknowledged"), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n, e2);
    } catch (e2) {
      await __PRIVATE_ignoreIfPrimaryLeaseLoss(e2);
    }
  }
  async function __PRIVATE_syncEngineRejectFailedWrite(e, t, n) {
    const r2 = __PRIVATE_debugCast(e);
    try {
      const e2 = await function __PRIVATE_localStoreRejectBatch(e3, t2) {
        const n2 = __PRIVATE_debugCast(e3);
        return n2.persistence.runTransaction("Reject batch", "readwrite-primary", (e4) => {
          let r3;
          return n2.mutationQueue.lookupMutationBatch(e4, t2).next((t3) => (__PRIVATE_hardAssert(null !== t3), r3 = t3.keys(), n2.mutationQueue.removeMutationBatch(e4, t3))).next(() => n2.mutationQueue.performConsistencyCheck(e4)).next(() => n2.documentOverlayCache.removeOverlaysForBatchId(e4, r3, t2)).next(() => n2.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e4, r3)).next(() => n2.localDocuments.getDocuments(e4, r3));
        });
      }(r2.localStore, t);
      __PRIVATE_processUserCallback(r2, t, n), __PRIVATE_triggerPendingWritesCallbacks(r2, t), r2.sharedClientState.updateMutationState(t, "rejected", n), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(r2, e2);
    } catch (n2) {
      await __PRIVATE_ignoreIfPrimaryLeaseLoss(n2);
    }
  }
  function __PRIVATE_triggerPendingWritesCallbacks(e, t) {
    (e.Ma.get(t) || []).forEach((e2) => {
      e2.resolve();
    }), e.Ma.delete(t);
  }
  function __PRIVATE_processUserCallback(e, t, n) {
    const r2 = __PRIVATE_debugCast(e);
    let i = r2.Fa[r2.currentUser.toKey()];
    if (i) {
      const e2 = i.get(t);
      e2 && (n ? e2.reject(n) : e2.resolve(), i = i.remove(t)), r2.Fa[r2.currentUser.toKey()] = i;
    }
  }
  async function __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e, t, n) {
    const r2 = __PRIVATE_debugCast(e), i = [], s = [], o = [];
    r2.wa.isEmpty() || (r2.wa.forEach((e2, _) => {
      o.push(r2.Na(_, t, n).then((e3) => {
        if (
          // If there are changes, or we are handling a global snapshot, notify
          // secondary clients to update query state.
          (e3 || n) && r2.isPrimaryClient && r2.sharedClientState.updateQueryState(_.targetId, (null == e3 ? void 0 : e3.fromCache) ? "not-current" : "current"), e3
        ) {
          i.push(e3);
          const t2 = __PRIVATE_LocalViewChanges.Ki(_.targetId, e3);
          s.push(t2);
        }
      }));
    }), await Promise.all(o), r2.ya.u_(i), await async function __PRIVATE_localStoreNotifyLocalViewChanges(e2, t2) {
      const n2 = __PRIVATE_debugCast(e2);
      try {
        await n2.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (e3) => PersistencePromise.forEach(t2, (t3) => PersistencePromise.forEach(t3.qi, (r3) => n2.persistence.referenceDelegate.addReference(e3, t3.targetId, r3)).next(() => PersistencePromise.forEach(t3.Qi, (r3) => n2.persistence.referenceDelegate.removeReference(e3, t3.targetId, r3)))));
      } catch (e3) {
        if (!__PRIVATE_isIndexedDbTransactionError(e3))
          throw e3;
        __PRIVATE_logDebug("LocalStore", "Failed to update sequence numbers: " + e3);
      }
      for (const e3 of t2) {
        const t3 = e3.targetId;
        if (!e3.fromCache) {
          const e4 = n2.ns.get(t3), r3 = e4.snapshotVersion, i2 = e4.withLastLimboFreeSnapshotVersion(r3);
          n2.ns = n2.ns.insert(t3, i2);
        }
      }
    }(r2.localStore, s));
  }
  async function __PRIVATE_syncEngineHandleCredentialChange(e, t) {
    const n = __PRIVATE_debugCast(e);
    if (!n.currentUser.isEqual(t)) {
      __PRIVATE_logDebug("SyncEngine", "User change. New user:", t.toKey());
      const e2 = await __PRIVATE_localStoreHandleUserChange(n.localStore, t);
      n.currentUser = t, // Fails tasks waiting for pending writes requested by previous user.
      function __PRIVATE_rejectOutstandingPendingWritesCallbacks(e3, t2) {
        e3.Ma.forEach((e4) => {
          e4.forEach((e5) => {
            e5.reject(new FirestoreError(D2.CANCELLED, t2));
          });
        }), e3.Ma.clear();
      }(n, "'waitForPendingWrites' promise is rejected due to a user change."), // TODO(b/114226417): Consider calling this only in the primary tab.
      n.sharedClientState.handleUserChange(t, e2.removedBatchIds, e2.addedBatchIds), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n, e2.us);
    }
  }
  function __PRIVATE_syncEngineEnsureWriteCallbacks(e) {
    const t = __PRIVATE_debugCast(e);
    return t.remoteStore.remoteSyncer.applySuccessfulWrite = __PRIVATE_syncEngineApplySuccessfulWrite.bind(null, t), t.remoteStore.remoteSyncer.rejectFailedWrite = __PRIVATE_syncEngineRejectFailedWrite.bind(null, t), t;
  }
  var MemoryOfflineComponentProvider = class {
    constructor() {
      this.synchronizeTabs = false;
    }
    async initialize(e) {
      this.serializer = __PRIVATE_newSerializer(e.databaseInfo.databaseId), this.sharedClientState = this.createSharedClientState(e), this.persistence = this.createPersistence(e), await this.persistence.start(), this.localStore = this.createLocalStore(e), this.gcScheduler = this.createGarbageCollectionScheduler(e, this.localStore), this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(e, this.localStore);
    }
    createGarbageCollectionScheduler(e, t) {
      return null;
    }
    createIndexBackfillerScheduler(e, t) {
      return null;
    }
    createLocalStore(e) {
      return __PRIVATE_newLocalStore(this.persistence, new __PRIVATE_QueryEngine(), e.initialUser, this.serializer);
    }
    createPersistence(e) {
      return new __PRIVATE_MemoryPersistence(__PRIVATE_MemoryEagerDelegate.Hr, this.serializer);
    }
    createSharedClientState(e) {
      return new __PRIVATE_MemorySharedClientState();
    }
    async terminate() {
      var e, t;
      null === (e = this.gcScheduler) || void 0 === e || e.stop(), null === (t = this.indexBackfillerScheduler) || void 0 === t || t.stop(), this.sharedClientState.shutdown(), await this.persistence.shutdown();
    }
  };
  var OnlineComponentProvider = class {
    async initialize(e, t) {
      this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(t), this.remoteStore = this.createRemoteStore(t), this.eventManager = this.createEventManager(t), this.syncEngine = this.createSyncEngine(
        t,
        /* startAsPrimary=*/
        !e.synchronizeTabs
      ), this.sharedClientState.onlineStateHandler = (e2) => __PRIVATE_syncEngineApplyOnlineStateChange(
        this.syncEngine,
        e2,
        1
        /* OnlineStateSource.SharedClientState */
      ), this.remoteStore.remoteSyncer.handleCredentialChange = __PRIVATE_syncEngineHandleCredentialChange.bind(null, this.syncEngine), await __PRIVATE_remoteStoreApplyPrimaryState(this.remoteStore, this.syncEngine.isPrimaryClient));
    }
    createEventManager(e) {
      return function __PRIVATE_newEventManager() {
        return new __PRIVATE_EventManagerImpl();
      }();
    }
    createDatastore(e) {
      const t = __PRIVATE_newSerializer(e.databaseInfo.databaseId), n = function __PRIVATE_newConnection(e2) {
        return new __PRIVATE_WebChannelConnection(e2);
      }(e.databaseInfo);
      return function __PRIVATE_newDatastore(e2, t2, n2, r2) {
        return new __PRIVATE_DatastoreImpl(e2, t2, n2, r2);
      }(e.authCredentials, e.appCheckCredentials, n, t);
    }
    createRemoteStore(e) {
      return function __PRIVATE_newRemoteStore(e2, t, n, r2, i) {
        return new __PRIVATE_RemoteStoreImpl(e2, t, n, r2, i);
      }(this.localStore, this.datastore, e.asyncQueue, (e2) => __PRIVATE_syncEngineApplyOnlineStateChange(
        this.syncEngine,
        e2,
        0
        /* OnlineStateSource.RemoteStore */
      ), function __PRIVATE_newConnectivityMonitor() {
        return __PRIVATE_BrowserConnectivityMonitor.D() ? new __PRIVATE_BrowserConnectivityMonitor() : new __PRIVATE_NoopConnectivityMonitor();
      }());
    }
    createSyncEngine(e, t) {
      return function __PRIVATE_newSyncEngine(e2, t2, n, r2, i, s, o) {
        const _ = new __PRIVATE_SyncEngineImpl(e2, t2, n, r2, i, s);
        return o && (_.Oa = true), _;
      }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, t);
    }
    async terminate() {
      var e;
      await async function __PRIVATE_remoteStoreShutdown(e2) {
        const t = __PRIVATE_debugCast(e2);
        __PRIVATE_logDebug("RemoteStore", "RemoteStore shutting down."), t.v_.add(
          5
          /* OfflineCause.Shutdown */
        ), await __PRIVATE_disableNetworkInternal(t), t.M_.shutdown(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
        // triggering spurious listener events with cached data, etc.
        t.x_.set(
          "Unknown"
          /* OnlineState.Unknown */
        );
      }(this.remoteStore), null === (e = this.datastore) || void 0 === e || e.terminate();
    }
  };
  var FirestoreClient = class {
    constructor(e, t, n, r2) {
      this.authCredentials = e, this.appCheckCredentials = t, this.asyncQueue = n, this.databaseInfo = r2, this.user = User.UNAUTHENTICATED, this.clientId = __PRIVATE_AutoId.newId(), this.authCredentialListener = () => Promise.resolve(), this.appCheckCredentialListener = () => Promise.resolve(), this.authCredentials.start(n, async (e2) => {
        __PRIVATE_logDebug("FirestoreClient", "Received user=", e2.uid), await this.authCredentialListener(e2), this.user = e2;
      }), this.appCheckCredentials.start(n, (e2) => (__PRIVATE_logDebug("FirestoreClient", "Received new app check token=", e2), this.appCheckCredentialListener(e2, this.user)));
    }
    get configuration() {
      return {
        asyncQueue: this.asyncQueue,
        databaseInfo: this.databaseInfo,
        clientId: this.clientId,
        authCredentials: this.authCredentials,
        appCheckCredentials: this.appCheckCredentials,
        initialUser: this.user,
        maxConcurrentLimboResolutions: 100
      };
    }
    setCredentialChangeListener(e) {
      this.authCredentialListener = e;
    }
    setAppCheckTokenChangeListener(e) {
      this.appCheckCredentialListener = e;
    }
    /**
     * Checks that the client has not been terminated. Ensures that other methods on //
     * this class cannot be called after the client is terminated. //
     */
    verifyNotTerminated() {
      if (this.asyncQueue.isShuttingDown)
        throw new FirestoreError(D2.FAILED_PRECONDITION, "The client has already been terminated.");
    }
    terminate() {
      this.asyncQueue.enterRestrictedMode();
      const e = new __PRIVATE_Deferred();
      return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this._onlineComponents && await this._onlineComponents.terminate(), this._offlineComponents && await this._offlineComponents.terminate(), // The credentials provider must be terminated after shutting down the
          // RemoteStore as it will prevent the RemoteStore from retrieving auth
          // tokens.
          this.authCredentials.shutdown(), this.appCheckCredentials.shutdown(), e.resolve();
        } catch (t) {
          const n = __PRIVATE_wrapInUserErrorIfRecoverable(t, "Failed to shutdown persistence");
          e.reject(n);
        }
      }), e.promise;
    }
  };
  async function __PRIVATE_setOfflineComponentProvider(e, t) {
    e.asyncQueue.verifyOperationInProgress(), __PRIVATE_logDebug("FirestoreClient", "Initializing OfflineComponentProvider");
    const n = e.configuration;
    await t.initialize(n);
    let r2 = n.initialUser;
    e.setCredentialChangeListener(async (e2) => {
      r2.isEqual(e2) || (await __PRIVATE_localStoreHandleUserChange(t.localStore, e2), r2 = e2);
    }), // When a user calls clearPersistence() in one client, all other clients
    // need to be terminated to allow the delete to succeed.
    t.persistence.setDatabaseDeletedListener(() => e.terminate()), e._offlineComponents = t;
  }
  async function __PRIVATE_setOnlineComponentProvider(e, t) {
    e.asyncQueue.verifyOperationInProgress();
    const n = await __PRIVATE_ensureOfflineComponents(e);
    __PRIVATE_logDebug("FirestoreClient", "Initializing OnlineComponentProvider"), await t.initialize(n, e.configuration), // The CredentialChangeListener of the online component provider takes
    // precedence over the offline component provider.
    e.setCredentialChangeListener((e2) => __PRIVATE_remoteStoreHandleCredentialChange(t.remoteStore, e2)), e.setAppCheckTokenChangeListener((e2, n2) => __PRIVATE_remoteStoreHandleCredentialChange(t.remoteStore, n2)), e._onlineComponents = t;
  }
  function __PRIVATE_canFallbackFromIndexedDbError(e) {
    return "FirebaseError" === e.name ? e.code === D2.FAILED_PRECONDITION || e.code === D2.UNIMPLEMENTED : !("undefined" != typeof DOMException && e instanceof DOMException) || // When the browser is out of quota we could get either quota exceeded
    // or an aborted error depending on whether the error happened during
    // schema migration.
    (22 === e.code || 20 === e.code || // Firefox Private Browsing mode disables IndexedDb and returns
    // INVALID_STATE for any usage.
    11 === e.code);
  }
  async function __PRIVATE_ensureOfflineComponents(e) {
    if (!e._offlineComponents)
      if (e._uninitializedComponentsProvider) {
        __PRIVATE_logDebug("FirestoreClient", "Using user provided OfflineComponentProvider");
        try {
          await __PRIVATE_setOfflineComponentProvider(e, e._uninitializedComponentsProvider._offline);
        } catch (t) {
          const n = t;
          if (!__PRIVATE_canFallbackFromIndexedDbError(n))
            throw n;
          __PRIVATE_logWarn("Error using user provided cache. Falling back to memory cache: " + n), await __PRIVATE_setOfflineComponentProvider(e, new MemoryOfflineComponentProvider());
        }
      } else
        __PRIVATE_logDebug("FirestoreClient", "Using default OfflineComponentProvider"), await __PRIVATE_setOfflineComponentProvider(e, new MemoryOfflineComponentProvider());
    return e._offlineComponents;
  }
  async function __PRIVATE_ensureOnlineComponents(e) {
    return e._onlineComponents || (e._uninitializedComponentsProvider ? (__PRIVATE_logDebug("FirestoreClient", "Using user provided OnlineComponentProvider"), await __PRIVATE_setOnlineComponentProvider(e, e._uninitializedComponentsProvider._online)) : (__PRIVATE_logDebug("FirestoreClient", "Using default OnlineComponentProvider"), await __PRIVATE_setOnlineComponentProvider(e, new OnlineComponentProvider()))), e._onlineComponents;
  }
  function __PRIVATE_getSyncEngine(e) {
    return __PRIVATE_ensureOnlineComponents(e).then((e2) => e2.syncEngine);
  }
  function __PRIVATE_cloneLongPollingOptions(e) {
    const t = {};
    return void 0 !== e.timeoutSeconds && (t.timeoutSeconds = e.timeoutSeconds), t;
  }
  var ge = /* @__PURE__ */ new Map();
  function __PRIVATE_validateNonEmptyArgument(e, t, n) {
    if (!n)
      throw new FirestoreError(D2.INVALID_ARGUMENT, `Function ${e}() cannot be called with an empty ${t}.`);
  }
  function __PRIVATE_validateIsNotUsedTogether(e, t, n, r2) {
    if (true === t && true === r2)
      throw new FirestoreError(D2.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`);
  }
  function __PRIVATE_validateDocumentPath(e) {
    if (!DocumentKey.isDocumentKey(e))
      throw new FirestoreError(D2.INVALID_ARGUMENT, `Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`);
  }
  function __PRIVATE_valueDescription(e) {
    if (void 0 === e)
      return "undefined";
    if (null === e)
      return "null";
    if ("string" == typeof e)
      return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e);
    if ("number" == typeof e || "boolean" == typeof e)
      return "" + e;
    if ("object" == typeof e) {
      if (e instanceof Array)
        return "an array";
      {
        const t = (
          /** try to get the constructor name for an object. */
          function __PRIVATE_tryGetCustomObjectType(e2) {
            if (e2.constructor)
              return e2.constructor.name;
            return null;
          }(e)
        );
        return t ? `a custom ${t} object` : "an object";
      }
    }
    return "function" == typeof e ? "a function" : fail();
  }
  function __PRIVATE_cast(e, t) {
    if ("_delegate" in e && // Unwrap Compat types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e = e._delegate), !(e instanceof t)) {
      if (t.name === e.constructor.name)
        throw new FirestoreError(D2.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
      {
        const n = __PRIVATE_valueDescription(e);
        throw new FirestoreError(D2.INVALID_ARGUMENT, `Expected type '${t.name}', but it was: ${n}`);
      }
    }
    return e;
  }
  var FirestoreSettingsImpl = class {
    constructor(e) {
      var t, n;
      if (void 0 === e.host) {
        if (void 0 !== e.ssl)
          throw new FirestoreError(D2.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
        this.host = "firestore.googleapis.com", this.ssl = true;
      } else
        this.host = e.host, this.ssl = null === (t = e.ssl) || void 0 === t || t;
      if (this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, this.localCache = e.localCache, void 0 === e.cacheSizeBytes)
        this.cacheSizeBytes = 41943040;
      else {
        if (-1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576)
          throw new FirestoreError(D2.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
        this.cacheSizeBytes = e.cacheSizeBytes;
      }
      __PRIVATE_validateIsNotUsedTogether("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = false : void 0 === e.experimentalAutoDetectLongPolling ? this.experimentalAutoDetectLongPolling = true : (
        // For backwards compatibility, coerce the value to boolean even though
        // the TypeScript compiler has narrowed the type to boolean already.
        // noinspection PointlessBooleanExpressionJS
        this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling
      ), this.experimentalLongPollingOptions = __PRIVATE_cloneLongPollingOptions(null !== (n = e.experimentalLongPollingOptions) && void 0 !== n ? n : {}), function __PRIVATE_validateLongPollingOptions(e2) {
        if (void 0 !== e2.timeoutSeconds) {
          if (isNaN(e2.timeoutSeconds))
            throw new FirestoreError(D2.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (must not be NaN)`);
          if (e2.timeoutSeconds < 5)
            throw new FirestoreError(D2.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (minimum allowed value is 5)`);
          if (e2.timeoutSeconds > 30)
            throw new FirestoreError(D2.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (maximum allowed value is 30)`);
        }
      }(this.experimentalLongPollingOptions), this.useFetchStreams = !!e.useFetchStreams;
    }
    isEqual(e) {
      return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && function __PRIVATE_longPollingOptionsEqual(e2, t) {
        return e2.timeoutSeconds === t.timeoutSeconds;
      }(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams;
    }
  };
  var Firestore$1 = class {
    /** @hideconstructor */
    constructor(e, t, n, r2) {
      this._authCredentials = e, this._appCheckCredentials = t, this._databaseId = n, this._app = r2, /**
       * Whether it's a Firestore or Firestore Lite instance.
       */
      this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new FirestoreSettingsImpl({}), this._settingsFrozen = false;
    }
    /**
     * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
     * instance.
     */
    get app() {
      if (!this._app)
        throw new FirestoreError(D2.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
      return this._app;
    }
    get _initialized() {
      return this._settingsFrozen;
    }
    get _terminated() {
      return void 0 !== this._terminateTask;
    }
    _setSettings(e) {
      if (this._settingsFrozen)
        throw new FirestoreError(D2.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
      this._settings = new FirestoreSettingsImpl(e), void 0 !== e.credentials && (this._authCredentials = function __PRIVATE_makeAuthCredentialsProvider(e2) {
        if (!e2)
          return new __PRIVATE_EmptyAuthCredentialsProvider();
        switch (e2.type) {
          case "firstParty":
            return new __PRIVATE_FirstPartyAuthCredentialsProvider(e2.sessionIndex || "0", e2.iamToken || null, e2.authTokenFactory || null);
          case "provider":
            return e2.client;
          default:
            throw new FirestoreError(D2.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
        }
      }(e.credentials));
    }
    _getSettings() {
      return this._settings;
    }
    _freezeSettings() {
      return this._settingsFrozen = true, this._settings;
    }
    _delete() {
      return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
    }
    /** Returns a JSON-serializable representation of this `Firestore` instance. */
    toJSON() {
      return {
        app: this._app,
        databaseId: this._databaseId,
        settings: this._settings
      };
    }
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */
    _terminate() {
      return function __PRIVATE_removeComponents(e) {
        const t = ge.get(e);
        t && (__PRIVATE_logDebug("ComponentProvider", "Removing Datastore"), ge.delete(e), t.terminate());
      }(this), Promise.resolve();
    }
  };
  function connectFirestoreEmulator(e, t, n, r2 = {}) {
    var i;
    const s = (e = __PRIVATE_cast(e, Firestore$1))._getSettings(), o = `${t}:${n}`;
    if ("firestore.googleapis.com" !== s.host && s.host !== o && __PRIVATE_logWarn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."), e._setSettings(Object.assign(Object.assign({}, s), {
      host: o,
      ssl: false
    })), r2.mockUserToken) {
      let t2, n2;
      if ("string" == typeof r2.mockUserToken)
        t2 = r2.mockUserToken, n2 = User.MOCK_USER;
      else {
        t2 = createMockUserToken(r2.mockUserToken, null === (i = e._app) || void 0 === i ? void 0 : i.options.projectId);
        const s2 = r2.mockUserToken.sub || r2.mockUserToken.user_id;
        if (!s2)
          throw new FirestoreError(D2.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
        n2 = new User(s2);
      }
      e._authCredentials = new __PRIVATE_EmulatorAuthCredentialsProvider(new __PRIVATE_OAuthToken(t2, n2));
    }
  }
  var Query = class _Query {
    // This is the lite version of the Query class in the main SDK.
    /** @hideconstructor protected */
    constructor(e, t, n) {
      this.converter = t, this._query = n, /** The type of this Firestore reference. */
      this.type = "query", this.firestore = e;
    }
    withConverter(e) {
      return new _Query(this.firestore, e, this._query);
    }
  };
  var DocumentReference = class _DocumentReference {
    /** @hideconstructor */
    constructor(e, t, n) {
      this.converter = t, this._key = n, /** The type of this Firestore reference. */
      this.type = "document", this.firestore = e;
    }
    get _path() {
      return this._key.path;
    }
    /**
     * The document's identifier within its collection.
     */
    get id() {
      return this._key.path.lastSegment();
    }
    /**
     * A string representing the path of the referenced document (relative
     * to the root of the database).
     */
    get path() {
      return this._key.path.canonicalString();
    }
    /**
     * The collection this `DocumentReference` belongs to.
     */
    get parent() {
      return new CollectionReference(this.firestore, this.converter, this._key.path.popLast());
    }
    withConverter(e) {
      return new _DocumentReference(this.firestore, e, this._key);
    }
  };
  var CollectionReference = class _CollectionReference extends Query {
    /** @hideconstructor */
    constructor(e, t, n) {
      super(e, t, __PRIVATE_newQueryForPath(n)), this._path = n, /** The type of this Firestore reference. */
      this.type = "collection";
    }
    /** The collection's identifier. */
    get id() {
      return this._query.path.lastSegment();
    }
    /**
     * A string representing the path of the referenced collection (relative
     * to the root of the database).
     */
    get path() {
      return this._query.path.canonicalString();
    }
    /**
     * A reference to the containing `DocumentReference` if this is a
     * subcollection. If this isn't a subcollection, the reference is null.
     */
    get parent() {
      const e = this._path.popLast();
      return e.isEmpty() ? null : new DocumentReference(
        this.firestore,
        /* converter= */
        null,
        new DocumentKey(e)
      );
    }
    withConverter(e) {
      return new _CollectionReference(this.firestore, e, this._path);
    }
  };
  function doc(e, t, ...n) {
    if (e = getModularInstance(e), // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    1 === arguments.length && (t = __PRIVATE_AutoId.newId()), __PRIVATE_validateNonEmptyArgument("doc", "path", t), e instanceof Firestore$1) {
      const r2 = ResourcePath.fromString(t, ...n);
      return __PRIVATE_validateDocumentPath(r2), new DocumentReference(
        e,
        /* converter= */
        null,
        new DocumentKey(r2)
      );
    }
    {
      if (!(e instanceof DocumentReference || e instanceof CollectionReference))
        throw new FirestoreError(D2.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
      const r2 = e._path.child(ResourcePath.fromString(t, ...n));
      return __PRIVATE_validateDocumentPath(r2), new DocumentReference(e.firestore, e instanceof CollectionReference ? e.converter : null, new DocumentKey(r2));
    }
  }
  var __PRIVATE_AsyncQueueImpl = class {
    constructor() {
      this.nu = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
      // retried with backoff.
      this.ru = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
      // be changed again.
      this.iu = false, // Operations scheduled to be queued in the future. Operations are
      // automatically removed after they are run or canceled.
      this.su = [], // visible for testing
      this.ou = null, // Flag set while there's an outstanding AsyncQueue operation, used for
      // assertion sanity-checks.
      this._u = false, // Enabled during shutdown on Safari to prevent future access to IndexedDB.
      this.au = false, // List of TimerIds to fast-forward delays for.
      this.uu = [], // Backoff timer used to schedule retries for retryable operations
      this.jo = new __PRIVATE_ExponentialBackoff(
        this,
        "async_queue_retry"
        /* TimerId.AsyncQueueRetry */
      ), // Visibility handler that triggers an immediate retry of all retryable
      // operations. Meant to speed up recovery when we regain file system access
      // after page comes into foreground.
      this.cu = () => {
        const e2 = getDocument();
        e2 && __PRIVATE_logDebug("AsyncQueue", "Visibility state changed to " + e2.visibilityState), this.jo.Ko();
      };
      const e = getDocument();
      e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.cu);
    }
    get isShuttingDown() {
      return this.iu;
    }
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    enqueueAndForget(e) {
      this.enqueue(e);
    }
    enqueueAndForgetEvenWhileRestricted(e) {
      this.lu(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
      this.hu(e);
    }
    enterRestrictedMode(e) {
      if (!this.iu) {
        this.iu = true, this.au = e || false;
        const t = getDocument();
        t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.cu);
      }
    }
    enqueue(e) {
      if (this.lu(), this.iu)
        return new Promise(() => {
        });
      const t = new __PRIVATE_Deferred();
      return this.hu(() => this.iu && this.au ? Promise.resolve() : (e().then(t.resolve, t.reject), t.promise)).then(() => t.promise);
    }
    enqueueRetryable(e) {
      this.enqueueAndForget(() => (this.ru.push(e), this.Pu()));
    }
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */
    async Pu() {
      if (0 !== this.ru.length) {
        try {
          await this.ru[0](), this.ru.shift(), this.jo.reset();
        } catch (e) {
          if (!__PRIVATE_isIndexedDbTransactionError(e))
            throw e;
          __PRIVATE_logDebug("AsyncQueue", "Operation failed with retryable error: " + e);
        }
        this.ru.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
        // This is necessary to run retryable operations that failed during
        // their initial attempt since we don't know whether they are already
        // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
        // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
        // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
        // call scheduled here.
        // Since `backoffAndRun()` cancels an existing backoff and schedules a
        // new backoff on every call, there is only ever a single additional
        // operation in the queue.
        this.jo.qo(() => this.Pu());
      }
    }
    hu(e) {
      const t = this.nu.then(() => (this._u = true, e().catch((e2) => {
        this.ou = e2, this._u = false;
        const t2 = (
          /**
          * Chrome includes Error.message in Error.stack. Other browsers do not.
          * This returns expected output of message + stack when available.
          * @param error - Error or FirestoreError
          */
          function __PRIVATE_getMessageOrStack(e3) {
            let t3 = e3.message || "";
            e3.stack && (t3 = e3.stack.includes(e3.message) ? e3.stack : e3.message + "\n" + e3.stack);
            return t3;
          }(e2)
        );
        throw __PRIVATE_logError("INTERNAL UNHANDLED ERROR: ", t2), e2;
      }).then((e2) => (this._u = false, e2))));
      return this.nu = t, t;
    }
    enqueueAfterDelay(e, t, n) {
      this.lu(), // Fast-forward delays for timerIds that have been overriden.
      this.uu.indexOf(e) > -1 && (t = 0);
      const r2 = DelayedOperation.createAndSchedule(this, e, t, n, (e2) => this.Iu(e2));
      return this.su.push(r2), r2;
    }
    lu() {
      this.ou && fail();
    }
    verifyOperationInProgress() {
    }
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    async Tu() {
      let e;
      do {
        e = this.nu, await e;
      } while (e !== this.nu);
    }
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    Eu(e) {
      for (const t of this.su)
        if (t.timerId === e)
          return true;
      return false;
    }
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    du(e) {
      return this.Tu().then(() => {
        this.su.sort((e2, t) => e2.targetTimeMs - t.targetTimeMs);
        for (const t of this.su)
          if (t.skipDelay(), "all" !== e && t.timerId === e)
            break;
        return this.Tu();
      });
    }
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    Au(e) {
      this.uu.push(e);
    }
    /** Called once a DelayedOperation is run or canceled. */
    Iu(e) {
      const t = this.su.indexOf(e);
      this.su.splice(t, 1);
    }
  };
  var Firestore = class extends Firestore$1 {
    /** @hideconstructor */
    constructor(e, t, n, r2) {
      super(e, t, n, r2), /**
       * Whether it's a {@link Firestore} or Firestore Lite instance.
       */
      this.type = "firestore", this._queue = function __PRIVATE_newAsyncQueue() {
        return new __PRIVATE_AsyncQueueImpl();
      }(), this._persistenceKey = (null == r2 ? void 0 : r2.name) || "[DEFAULT]";
    }
    _terminate() {
      return this._firestoreClient || // The client must be initialized to ensure that all subsequent API
      // usage throws an exception.
      __PRIVATE_configureFirestore(this), this._firestoreClient.terminate();
    }
  };
  function getFirestore(t, n) {
    const r2 = "object" == typeof t ? t : getApp(), i = "string" == typeof t ? t : n || "(default)", s = _getProvider(r2, "firestore").getImmediate({
      identifier: i
    });
    if (!s._initialized) {
      const e = getDefaultEmulatorHostnameAndPort("firestore");
      e && connectFirestoreEmulator(s, ...e);
    }
    return s;
  }
  function ensureFirestoreConfigured(e) {
    return e._firestoreClient || __PRIVATE_configureFirestore(e), e._firestoreClient.verifyNotTerminated(), e._firestoreClient;
  }
  function __PRIVATE_configureFirestore(e) {
    var t, n, r2;
    const i = e._freezeSettings(), s = function __PRIVATE_makeDatabaseInfo(e2, t2, n2, r3) {
      return new DatabaseInfo(e2, t2, n2, r3.host, r3.ssl, r3.experimentalForceLongPolling, r3.experimentalAutoDetectLongPolling, __PRIVATE_cloneLongPollingOptions(r3.experimentalLongPollingOptions), r3.useFetchStreams);
    }(e._databaseId, (null === (t = e._app) || void 0 === t ? void 0 : t.options.appId) || "", e._persistenceKey, i);
    e._firestoreClient = new FirestoreClient(e._authCredentials, e._appCheckCredentials, e._queue, s), (null === (n = i.localCache) || void 0 === n ? void 0 : n._offlineComponentProvider) && (null === (r2 = i.localCache) || void 0 === r2 ? void 0 : r2._onlineComponentProvider) && (e._firestoreClient._uninitializedComponentsProvider = {
      _offlineKind: i.localCache.kind,
      _offline: i.localCache._offlineComponentProvider,
      _online: i.localCache._onlineComponentProvider
    });
  }
  var Bytes = class _Bytes {
    /** @hideconstructor */
    constructor(e) {
      this._byteString = e;
    }
    /**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */
    static fromBase64String(e) {
      try {
        return new _Bytes(ByteString.fromBase64String(e));
      } catch (e2) {
        throw new FirestoreError(D2.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e2);
      }
    }
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */
    static fromUint8Array(e) {
      return new _Bytes(ByteString.fromUint8Array(e));
    }
    /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */
    toBase64() {
      return this._byteString.toBase64();
    }
    /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */
    toUint8Array() {
      return this._byteString.toUint8Array();
    }
    /**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */
    toString() {
      return "Bytes(base64: " + this.toBase64() + ")";
    }
    /**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */
    isEqual(e) {
      return this._byteString.isEqual(e._byteString);
    }
  };
  var FieldPath = class {
    /**
     * Creates a `FieldPath` from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    constructor(...e) {
      for (let t = 0; t < e.length; ++t)
        if (0 === e[t].length)
          throw new FirestoreError(D2.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
      this._internalPath = new FieldPath$1(e);
    }
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */
    isEqual(e) {
      return this._internalPath.isEqual(e._internalPath);
    }
  };
  var FieldValue = class {
    /**
     * @param _methodName - The public API endpoint that returns this class.
     * @hideconstructor
     */
    constructor(e) {
      this._methodName = e;
    }
  };
  var GeoPoint = class {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    constructor(e, t) {
      if (!isFinite(e) || e < -90 || e > 90)
        throw new FirestoreError(D2.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + e);
      if (!isFinite(t) || t < -180 || t > 180)
        throw new FirestoreError(D2.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + t);
      this._lat = e, this._long = t;
    }
    /**
     * The latitude of this `GeoPoint` instance.
     */
    get latitude() {
      return this._lat;
    }
    /**
     * The longitude of this `GeoPoint` instance.
     */
    get longitude() {
      return this._long;
    }
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */
    isEqual(e) {
      return this._lat === e._lat && this._long === e._long;
    }
    /** Returns a JSON-serializable representation of this GeoPoint. */
    toJSON() {
      return {
        latitude: this._lat,
        longitude: this._long
      };
    }
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    _compareTo(e) {
      return __PRIVATE_primitiveComparator(this._lat, e._lat) || __PRIVATE_primitiveComparator(this._long, e._long);
    }
  };
  var ye = /^__.*__$/;
  var ParsedSetData = class {
    constructor(e, t, n) {
      this.data = e, this.fieldMask = t, this.fieldTransforms = n;
    }
    toMutation(e, t) {
      return null !== this.fieldMask ? new __PRIVATE_PatchMutation(e, this.data, this.fieldMask, t, this.fieldTransforms) : new __PRIVATE_SetMutation(e, this.data, t, this.fieldTransforms);
    }
  };
  function __PRIVATE_isWrite(e) {
    switch (e) {
      case 0:
      case 2:
      case 1:
        return true;
      case 3:
      case 4:
        return false;
      default:
        throw fail();
    }
  }
  var __PRIVATE_ParseContextImpl = class ___PRIVATE_ParseContextImpl {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    constructor(e, t, n, r2, i, s) {
      this.settings = e, this.databaseId = t, this.serializer = n, this.ignoreUndefinedProperties = r2, // Minor hack: If fieldTransforms is undefined, we assume this is an
      // external call and we need to validate the entire path.
      void 0 === i && this.Ru(), this.fieldTransforms = i || [], this.fieldMask = s || [];
    }
    get path() {
      return this.settings.path;
    }
    get Vu() {
      return this.settings.Vu;
    }
    /** Returns a new context with the specified settings overwritten. */
    mu(e) {
      return new ___PRIVATE_ParseContextImpl(Object.assign(Object.assign({}, this.settings), e), this.databaseId, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.fieldMask);
    }
    fu(e) {
      var t;
      const n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e), r2 = this.mu({
        path: n,
        gu: false
      });
      return r2.pu(e), r2;
    }
    yu(e) {
      var t;
      const n = null === (t = this.path) || void 0 === t ? void 0 : t.child(e), r2 = this.mu({
        path: n,
        gu: false
      });
      return r2.Ru(), r2;
    }
    wu(e) {
      return this.mu({
        path: void 0,
        gu: true
      });
    }
    Su(e) {
      return __PRIVATE_createError(e, this.settings.methodName, this.settings.bu || false, this.path, this.settings.Du);
    }
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
    contains(e) {
      return void 0 !== this.fieldMask.find((t) => e.isPrefixOf(t)) || void 0 !== this.fieldTransforms.find((t) => e.isPrefixOf(t.field));
    }
    Ru() {
      if (this.path)
        for (let e = 0; e < this.path.length; e++)
          this.pu(this.path.get(e));
    }
    pu(e) {
      if (0 === e.length)
        throw this.Su("Document fields must not be empty");
      if (__PRIVATE_isWrite(this.Vu) && ye.test(e))
        throw this.Su('Document fields cannot begin and end with "__"');
    }
  };
  var __PRIVATE_UserDataReader = class {
    constructor(e, t, n) {
      this.databaseId = e, this.ignoreUndefinedProperties = t, this.serializer = n || __PRIVATE_newSerializer(e);
    }
    /** Creates a new top-level parse context. */
    Cu(e, t, n, r2 = false) {
      return new __PRIVATE_ParseContextImpl({
        Vu: e,
        methodName: t,
        Du: n,
        path: FieldPath$1.emptyPath(),
        gu: false,
        bu: r2
      }, this.databaseId, this.serializer, this.ignoreUndefinedProperties);
    }
  };
  function __PRIVATE_newUserDataReader(e) {
    const t = e._freezeSettings(), n = __PRIVATE_newSerializer(e._databaseId);
    return new __PRIVATE_UserDataReader(e._databaseId, !!t.ignoreUndefinedProperties, n);
  }
  function __PRIVATE_parseSetData(e, t, n, r2, i, s = {}) {
    const o = e.Cu(s.merge || s.mergeFields ? 2 : 0, t, n, i);
    __PRIVATE_validatePlainObject("Data must be an object, but it was:", o, r2);
    const _ = __PRIVATE_parseObject(r2, o);
    let a, u;
    if (s.merge)
      a = new FieldMask(o.fieldMask), u = o.fieldTransforms;
    else if (s.mergeFields) {
      const e2 = [];
      for (const r3 of s.mergeFields) {
        const i2 = __PRIVATE_fieldPathFromArgument$1(t, r3, n);
        if (!o.contains(i2))
          throw new FirestoreError(D2.INVALID_ARGUMENT, `Field '${i2}' is specified in your field mask but missing from your input data.`);
        __PRIVATE_fieldMaskContains(e2, i2) || e2.push(i2);
      }
      a = new FieldMask(e2), u = o.fieldTransforms.filter((e3) => a.covers(e3.field));
    } else
      a = null, u = o.fieldTransforms;
    return new ParsedSetData(new ObjectValue(_), a, u);
  }
  function __PRIVATE_parseData(e, t) {
    if (__PRIVATE_looksLikeJsonObject(
      // Unwrap the API type from the Compat SDK. This will return the API type
      // from firestore-exp.
      e = getModularInstance(e)
    ))
      return __PRIVATE_validatePlainObject("Unsupported field value:", t, e), __PRIVATE_parseObject(e, t);
    if (e instanceof FieldValue)
      return function __PRIVATE_parseSentinelFieldValue(e2, t2) {
        if (!__PRIVATE_isWrite(t2.Vu))
          throw t2.Su(`${e2._methodName}() can only be used with update() and set()`);
        if (!t2.path)
          throw t2.Su(`${e2._methodName}() is not currently supported inside arrays`);
        const n = e2._toFieldTransform(t2);
        n && t2.fieldTransforms.push(n);
      }(e, t), null;
    if (void 0 === e && t.ignoreUndefinedProperties)
      return null;
    if (
      // If context.path is null we are inside an array and we don't support
      // field mask paths more granular than the top-level array.
      t.path && t.fieldMask.push(t.path), e instanceof Array
    ) {
      if (t.settings.gu && 4 !== t.Vu)
        throw t.Su("Nested arrays are not supported");
      return function __PRIVATE_parseArray(e2, t2) {
        const n = [];
        let r2 = 0;
        for (const i of e2) {
          let e3 = __PRIVATE_parseData(i, t2.wu(r2));
          null == e3 && // Just include nulls in the array for fields being replaced with a
          // sentinel.
          (e3 = {
            nullValue: "NULL_VALUE"
          }), n.push(e3), r2++;
        }
        return {
          arrayValue: {
            values: n
          }
        };
      }(e, t);
    }
    return function __PRIVATE_parseScalarValue(e2, t2) {
      if (null === (e2 = getModularInstance(e2)))
        return {
          nullValue: "NULL_VALUE"
        };
      if ("number" == typeof e2)
        return toNumber(t2.serializer, e2);
      if ("boolean" == typeof e2)
        return {
          booleanValue: e2
        };
      if ("string" == typeof e2)
        return {
          stringValue: e2
        };
      if (e2 instanceof Date) {
        const n = Timestamp.fromDate(e2);
        return {
          timestampValue: toTimestamp(t2.serializer, n)
        };
      }
      if (e2 instanceof Timestamp) {
        const n = new Timestamp(e2.seconds, 1e3 * Math.floor(e2.nanoseconds / 1e3));
        return {
          timestampValue: toTimestamp(t2.serializer, n)
        };
      }
      if (e2 instanceof GeoPoint)
        return {
          geoPointValue: {
            latitude: e2.latitude,
            longitude: e2.longitude
          }
        };
      if (e2 instanceof Bytes)
        return {
          bytesValue: __PRIVATE_toBytes(t2.serializer, e2._byteString)
        };
      if (e2 instanceof DocumentReference) {
        const n = t2.databaseId, r2 = e2.firestore._databaseId;
        if (!r2.isEqual(n))
          throw t2.Su(`Document reference is for database ${r2.projectId}/${r2.database} but should be for database ${n.projectId}/${n.database}`);
        return {
          referenceValue: __PRIVATE_toResourceName(e2.firestore._databaseId || t2.databaseId, e2._key.path)
        };
      }
      throw t2.Su(`Unsupported field value: ${__PRIVATE_valueDescription(e2)}`);
    }(e, t);
  }
  function __PRIVATE_parseObject(e, t) {
    const n = {};
    return isEmpty(e) ? (
      // If we encounter an empty object, we explicitly add it to the update
      // mask to ensure that the server creates a map entry.
      t.path && t.path.length > 0 && t.fieldMask.push(t.path)
    ) : forEach(e, (e2, r2) => {
      const i = __PRIVATE_parseData(r2, t.fu(e2));
      null != i && (n[e2] = i);
    }), {
      mapValue: {
        fields: n
      }
    };
  }
  function __PRIVATE_looksLikeJsonObject(e) {
    return !("object" != typeof e || null === e || e instanceof Array || e instanceof Date || e instanceof Timestamp || e instanceof GeoPoint || e instanceof Bytes || e instanceof DocumentReference || e instanceof FieldValue);
  }
  function __PRIVATE_validatePlainObject(e, t, n) {
    if (!__PRIVATE_looksLikeJsonObject(n) || !function __PRIVATE_isPlainObject(e2) {
      return "object" == typeof e2 && null !== e2 && (Object.getPrototypeOf(e2) === Object.prototype || null === Object.getPrototypeOf(e2));
    }(n)) {
      const r2 = __PRIVATE_valueDescription(n);
      throw "an object" === r2 ? t.Su(e + " a custom object") : t.Su(e + " " + r2);
    }
  }
  function __PRIVATE_fieldPathFromArgument$1(e, t, n) {
    if (
      // If required, replace the FieldPath Compat class with with the firestore-exp
      // FieldPath.
      (t = getModularInstance(t)) instanceof FieldPath
    )
      return t._internalPath;
    if ("string" == typeof t)
      return __PRIVATE_fieldPathFromDotSeparatedString(e, t);
    throw __PRIVATE_createError(
      "Field path arguments must be of type string or ",
      e,
      /* hasConverter= */
      false,
      /* path= */
      void 0,
      n
    );
  }
  var we = new RegExp("[~\\*/\\[\\]]");
  function __PRIVATE_fieldPathFromDotSeparatedString(e, t, n) {
    if (t.search(we) >= 0)
      throw __PRIVATE_createError(
        `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
        e,
        /* hasConverter= */
        false,
        /* path= */
        void 0,
        n
      );
    try {
      return new FieldPath(...t.split("."))._internalPath;
    } catch (r2) {
      throw __PRIVATE_createError(
        `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
        e,
        /* hasConverter= */
        false,
        /* path= */
        void 0,
        n
      );
    }
  }
  function __PRIVATE_createError(e, t, n, r2, i) {
    const s = r2 && !r2.isEmpty(), o = void 0 !== i;
    let _ = `Function ${t}() called with invalid data`;
    n && (_ += " (via `toFirestore()`)"), _ += ". ";
    let a = "";
    return (s || o) && (a += " (found", s && (a += ` in field ${r2}`), o && (a += ` in document ${i}`), a += ")"), new FirestoreError(D2.INVALID_ARGUMENT, _ + e + a);
  }
  function __PRIVATE_fieldMaskContains(e, t) {
    return e.some((e2) => e2.isEqual(t));
  }
  function __PRIVATE_applyFirestoreDataConverter(e, t, n) {
    let r2;
    return r2 = e ? n && (n.merge || n.mergeFields) ? e.toFirestore(t, n) : e.toFirestore(t) : t, r2;
  }
  function setDoc(e, t, n) {
    e = __PRIVATE_cast(e, DocumentReference);
    const r2 = __PRIVATE_cast(e.firestore, Firestore), i = __PRIVATE_applyFirestoreDataConverter(e.converter, t, n);
    return executeWrite(r2, [__PRIVATE_parseSetData(__PRIVATE_newUserDataReader(r2), "setDoc", e._key, i, null !== e.converter, n).toMutation(e._key, Precondition.none())]);
  }
  function executeWrite(e, t) {
    return function __PRIVATE_firestoreClientWrite(e2, t2) {
      const n = new __PRIVATE_Deferred();
      return e2.asyncQueue.enqueueAndForget(async () => __PRIVATE_syncEngineWrite(await __PRIVATE_getSyncEngine(e2), t2, n)), n.promise;
    }(ensureFirestoreConfigured(e), t);
  }
  !function __PRIVATE_registerFirestore(e, t = true) {
    !function __PRIVATE_setSDKVersion(e2) {
      S2 = e2;
    }(SDK_VERSION), _registerComponent(new Component("firestore", (e2, { instanceIdentifier: n, options: r2 }) => {
      const i = e2.getProvider("app").getImmediate(), s = new Firestore(new __PRIVATE_FirebaseAuthCredentialsProvider(e2.getProvider("auth-internal")), new __PRIVATE_FirebaseAppCheckTokenProvider(e2.getProvider("app-check-internal")), function __PRIVATE_databaseIdFromApp(e3, t2) {
        if (!Object.prototype.hasOwnProperty.apply(e3.options, ["projectId"]))
          throw new FirestoreError(D2.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        return new DatabaseId(e3.options.projectId, t2);
      }(i, n), i);
      return r2 = Object.assign({
        useFetchStreams: t
      }, r2), s._setSettings(r2), s;
    }, "PUBLIC").setMultipleInstances(true)), registerVersion(w2, "4.5.0", e), // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    registerVersion(w2, "4.5.0", "esm2017");
  }();

  // src/index.js
  var import_object_hash = __toESM(require_object_hash());
  var firebaseConfig = {
    apiKey: "AIzaSyDTUWKsoImm-tKlZ0b6PgENkTgSVb_3DR0",
    authDomain: "osu-bathrooms-app.firebaseapp.com",
    projectId: "osu-bathrooms-app",
    storageBucket: "osu-bathrooms-app.appspot.com",
    messagingSenderId: "596326357253",
    appId: "1:596326357253:web:11e5963c8c998f996a3f6c",
    measurementId: "G-VTT4DK7M14"
  };
  var app = initializeApp(firebaseConfig);
  var analytics = getAnalytics(app);
  var db2 = getFirestore(app);
  console.log(db2);
  async function main() {
    const bathroomsData = await (await fetch("bathrooms.json")).json();
    for (const { value, display, building } of bathroomsData) {
      const docHash = (0, import_object_hash.default)({ value, display, building });
      const singleBathroomDoc = {
        building_name: building,
        gender: display.endsWith(" Women's") ? "FEMALE" : display.endsWith(" Men's") ? "MALE" : "INCLUSIVE",
        rating: 0,
        room_number: display.match(/^\S+/g)?.[0],
        wheelchair_accessible: false,
        // defaults to false; self-reported?
        id: docHash
      };
      setDoc(doc(db2, "Bathroom", docHash), singleBathroomDoc);
    }
  }
  main();
})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/analytics/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/analytics/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
