"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = require("fs");

var saveAsFile = function saveAsFile(_ref) {
  var dataURI = _ref.dataURI,
      dest = _ref.dest;
  return new Promise(function (resolve, reject) {
    (0, _fs.writeFile)(dest, dataURI.split(';base64,').pop(), {
      encoding: 'base64'
    }, function (err) {
      if (!err) {
        resolve();
      }

      reject(new Error(err));
    });
  });
};

var _default = saveAsFile;
exports.default = _default;
module.exports = exports.default;