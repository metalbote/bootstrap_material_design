'use strict';

const concat = require('gulp-concat'),
    cssmin = require('gulp-minify-css'),
    fontBase64 = require('gulp-base64-webfont-css');

module.exports = function (gulp, callback) {
  return gulp.src(['./src/fonts/**/*.woff', '../src/fonts/**/*.woff2'])
      .pipe(fontBase64())
      .pipe(concat('theme-fonts.css'))
      .pipe(cssmin())
      .pipe(gulp.dest(global.config.fonts.cssdir));
};
