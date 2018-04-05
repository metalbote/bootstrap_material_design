'use strict';

const runSequence = require('run-sequence');

module.exports = function (gulp, callback) {
  return runSequence('fonts:fontawesome-icons', 'fonts:material-icons', 'fonts:google-fonts', 'fonts:theme-fonts');
};
