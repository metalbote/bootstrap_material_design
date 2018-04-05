'use strict';

const browserSync = require('browser-sync');

module.exports = function (gulp, callback) {
  return gulp.watch([global.config.images.src + "/**/*.{png,gif,jpg,jpeg,svg}"], [
    'images:build'
  ], function () {
    if (global.config.browserSync.site.enabled) {
      console.log('site reload');
      browserSync.get('site').reload();
    }
  });
};
