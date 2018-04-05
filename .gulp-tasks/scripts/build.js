'use strict';

const runSequence = require('run-sequence');

module.exports = function (gulp, callback) {
  return runSequence('scripts:theme-scripts', 'scripts:vendor');
};
