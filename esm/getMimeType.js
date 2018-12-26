"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _between = _interopRequireDefault(require("./between"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMimeType = function getMimeType(str) {
  return (0, _between.default)(str, 'data:', ';base64');
};

var _default = getMimeType;
exports.default = _default;
module.exports = exports.default;