'use strict';

const clean = require('gulp-clean');

module.exports = function (gulp, callback) {
  return gulp.src([
    global.config.styles.dest + '/**/*.css',
    '!' + global.config.fonts.cssdir + '/google-fonts.css',
    '!' + global.config.fonts.cssdir + '/material-icons.css',
    '!' + global.config.fonts.cssdir + '/fontawesome.css',
    '!' + global.config.fonts.cssdir + '/theme-fonts.css',
  ], {read: false})
      .pipe(clean({force: true}));
};
