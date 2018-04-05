'use strict';

module.exports = function (gulp, callback) {
  return gulp.watch('**/*.{php,inc,info,twig}', ['drush:clearcache', 'reload']);
};
