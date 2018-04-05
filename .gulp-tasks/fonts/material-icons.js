'use strict';

const concat = require('gulp-concat'),
    cssmin = require('gulp-minify-css'),
    fontBase64 = require('gulp-base64-webfont-css'),
    merge = require('merge-stream');

module.exports = function (gulp, callback) {
  var base64fontcss = gulp.src(['./node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff', './node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2'])
      .pipe(fontBase64());
  var cssfile = gulp.src(['./node_modules/material-design-icons/iconfont/material-icons.css'])

  return merge(base64fontcss, cssfile)
      .pipe(concat('material-icons.css'))
      .pipe(cssmin())
      .pipe(gulp.dest(global.config.fonts.cssdir));
};
