'use strict';

const clean = require('gulp-clean');

module.exports = function (gulp, callback) {
  return gulp.src([global.config.images.dest], {read: false})
      .pipe(clean({force: true}));
};
