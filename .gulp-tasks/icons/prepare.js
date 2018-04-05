'use strict';

const rename = require('gulp-rename'),
    svgmin = require('gulp-svgmin');


module.exports = function (gulp, callback) {

  return gulp.src([global.config.icons.src + "/**/*.svg"])
      .pipe(svgmin({
        plugins: [
          {removeViewBox: false},
          {removeUselessStrokeAndFill: false},
          {removeXMLProcInst: false}
        ]
      }))
      .pipe(rename({
        suffix: '.colors-primary-secondary-success-info-warning-danger-light-dark-action_hover'
      }))
      .pipe(gulp.dest('./.tmp'));
};
