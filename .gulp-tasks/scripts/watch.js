'use strict';

const browserSync = require('browser-sync');

module.exports = function (gulp, callback) {
  return gulp.watch(global.config.scripts.src, ['scripts:lint', "scripts:build"], function () {
    if (global.config.browserSync.site.enabled) {
      console.log('site reload');
      browserSync.get('site').reload();
    }
  });
};
