'use strict';

const clean = require('gulp-clean');

module.exports = function (gulp, callback) {
  return gulp.src([
    '.tmp',
    global.config.scripts.dest + "/grunticon.loader.js",
    global.config.styles.dest + "/icons.data.svg.css",
    global.config.styles.dest + "/icons.data.png.css",
    global.config.styles.dest + "/icons.fallback.css",
    global.config.icons.dest
  ], {read: false})
      .pipe(clean({force: true}));
};
