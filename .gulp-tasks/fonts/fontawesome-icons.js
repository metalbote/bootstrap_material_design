'use strict';

const concat = require('gulp-concat'),
    cssmin = require('gulp-minify-css'),
    fontBase64 = require('gulp-base64-webfont-css'),
    merge = require('merge-stream'),
    replace = require('gulp-replace');

module.exports = function (gulp, callback) {
  var base64fontcss = gulp.src(['./node_modules/font-awesome/fonts/fontawesome-webfont.woff', './node_modules/font-awesome/fonts/fontawesome-webfont.woff2'])
      .pipe(fontBase64());
  var cssfile = gulp.src(['./node_modules/font-awesome/css/font-awesome.css']).pipe(replace(/@font-face\s*\{[^}]+}/g, ' '));

  return merge(base64fontcss, cssfile)
      .pipe(concat('fontawesome.css'))
      .pipe(cssmin())
      .pipe(gulp.dest(global.config.fonts.cssdir));
};
