'use strict';

const babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

module.exports = function (gulp, callback) {
  return gulp.src(global.config.scripts.src)
      .pipe(gulpif(global.config.buildSourceMaps, sourcemaps.init({debug: true})))
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(concat('theme-scripts.js'))
      .pipe(gulp.dest(global.config.scripts.dest))
      .pipe(rename('theme-scripts.min.js'))
      .pipe(uglify())
      .pipe(gulpif(global.config.buildSourceMaps, sourcemaps.write()))
      .pipe(gulp.dest(global.config.scripts.dest))
};
