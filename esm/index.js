"use strict";

var getMimeType = require('./getMimeType');

var saveAsFile = require('./saveAsFile');

var saveAsFileSync = require('./saveAsFileSync');

module.exports = {
  getMimeType: getMimeType,
  saveAsFile: saveAsFile,
  saveAsFileSync: saveAsFileSync
};