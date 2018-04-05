'use strict';

module.exports = function (gulp, callback) {
  return gulp.watch(global.config.styles.src, ['styles:lint', 'styles:build']);
};
