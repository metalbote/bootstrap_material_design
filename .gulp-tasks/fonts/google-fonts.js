'use strict';

const concat = require('gulp-concat'),
    cssmin = require('gulp-minify-css'),
    webFontsBase64 = require('gulp-google-fonts-base64-css');

module.exports = function (gulp, callback) {
  return gulp.src(global.config.fonts.src)
      .pipe(webFontsBase64())
      .pipe(concat('google-fonts.css'))
      .pipe(cssmin())
      .pipe(gulp.dest(global.config.fonts.cssdir));
};
