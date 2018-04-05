'use strict';

const cp = require('child_process');

module.exports = function (gulp, callback) {
  return cp.spawn('lando drush', ['cc all'], {stdio: 'inherit'})
      .on('close', done);
};
