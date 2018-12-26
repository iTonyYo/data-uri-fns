"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = require("fs");

var saveAsFileSync = function saveAsFileSync(_ref) {
  var dataURI = _ref.dataURI,
      dest = _ref.dest;
  (0, _fs.writeFileSync)(dest, dataURI.split(';base64,').pop(), {
    encoding: 'base64'
  });
};

var _default = saveAsFileSync;
exports.default = _default;
module.exports = exports.default;