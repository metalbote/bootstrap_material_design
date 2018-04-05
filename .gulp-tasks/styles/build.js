'use strict';

const autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    cssmin = require('gulp-cssmin'),
    gulpif = require('gulp-if'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    stripCssComments = require('gulp-strip-css-comments'),
    tildeImporter = require('node-sass-tilde-importer');

module.exports = function (gulp, callback) {
  return gulp.src(global.config.styles.src)
      .pipe(plumber())
      .pipe(gulpif(global.config.buildSourceMaps, sourcemaps.init({debug: true})))
      .pipe(
          sass({
            includePaths: ['node_modules'],
            importer: tildeImporter,
            outputStyle: 'compressed',
            precision: 10,
          }).on('error', sass.logError))
      .pipe(autoprefixer(global.config.styles.browsers, {cascade: true}))
      .pipe(stripCssComments({preserve: false}))
      .pipe(cssmin())
      .pipe(gulpif(global.config.buildSourceMaps, sourcemaps.write()))
      .pipe(gulp.dest(global.config.styles.dest))
      .pipe(gulpif(global.config.browserSync.site.enabled, browserSync.get('site').stream({match: '**/*.css'})));
};
