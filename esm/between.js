"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringSize = _interopRequireDefault(require("lodash/_stringSize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取多个区间的实现，参见 https://git.io/fpv6D
 */
var between = function between(str, start, end) {
  return str.substring(str.indexOf(start) + (0, _stringSize.default)(start), str.indexOf(end));
};

var _default = between;
exports.default = _default;
module.exports = exports.default;