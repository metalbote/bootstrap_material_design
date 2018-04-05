'use strict';

const clean = require('gulp-clean');

module.exports = function (gulp, callback) {
  return gulp.src([
    global.config.scripts.dest + '/**/*.js',
    global.config.scripts.dest + '/**/*.map',
  ], {read: false})
      .pipe(clean({force: true}));
};
