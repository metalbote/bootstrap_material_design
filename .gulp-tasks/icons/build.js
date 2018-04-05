'use strict';

const runSequence = require('run-sequence');

module.exports = function (gulp, callback) {
  return runSequence('icons:prepare', 'icons:iconify');
};
