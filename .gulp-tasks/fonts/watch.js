'use strict';

const browserSync = require('browser-sync');

module.exports = function (gulp, callback) {
  return gulp.watch([global.config.fonts.srcdir, global.config.fonts.src], ['fonts:theme-fonts', 'fonts:google-fonts'], function () {
    if (global.config.browserSync.site.enabled) {
      console.log('site reload');
      browserSync.get('site').reload();
    }
  });
};
