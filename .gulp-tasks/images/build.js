'use strict';

const imagemin = require('gulp-imagemin');

module.exports = function (gulp, options) {

  return gulp.src(global.config.images.src)
      .pipe(imagemin({
        progressive: true,
        interlaced: true,
        svgoPlugins: [{
          cleanupIDs: false,
          removeViewBox: false,
          removeUselessStrokeAndFill: false,
          removeXMLProcInst: false
        }]
      }))
      .pipe(gulp.dest(global.config.images.dest))
};
