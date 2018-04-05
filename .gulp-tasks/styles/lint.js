'use strict';

const cached = require('gulp-cached'),
    gulpif = require('gulp-if'),
    sassLint = require('gulp-sass-lint');

module.exports = function (gulp, callback) {
  if (global.config.styles.lint.enabled) {
    return gulp.src(global.config.styles.src)
        .pipe(cached('styles:lint'))
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(gulpif(global.config.styles.lint.failOnError, sassLint.failOnError()));
  }
  else {
    return console.log('css linting not enabled');
  }
};
