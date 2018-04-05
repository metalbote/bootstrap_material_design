'use strict';

const eslint = require('gulp-eslint');

module.exports = function (gulp, callback) {
  var source = global.config.scripts.src;
  source.push('!js/vendor/*');
  source.push('!js/*.min.js');

  if (global.config.scripts.lint.enabled) {
    return gulp.src(source)
        .pipe(eslint({
          useEslintrc: true
        }))
        .pipe(eslint.format());
  }
  return console.log('linting not enabled');
};
