'use strict';

const gulp = require('gulp'),
    yaml = require('js-yaml'),
    fs = require('fs'),
    assign = require('lodash.assign'),
    argv = require('yargs').argv,
    runSequence = require('run-sequence').use(gulp);

// read default config settings
var config = yaml.safeLoad(fs.readFileSync('default.gulpfile.yml', 'utf8'), {json: true});

try {
  // override default config settings
  var customConfig = yaml.safeLoad(fs.readFileSync('gulpfile.yml', 'utf8'), {json: true});
  config = assign(config, customConfig);
}
catch (e) {
  console.log('No custom config found! Proceeding with default config only.');
}

//  should we build sourcemaps? "gulp build --sourcemaps"
var buildSourceMaps = !!argv.sourcemaps;
config.buildSourceMaps = buildSourceMaps;

global.config = config;

var gulpRequireTasks = require('gulp-require-tasks');
gulpRequireTasks({
  path: process.cwd() + '/.gulp-tasks'
});

gulp.task('clean', ['fonts:clean', 'icons:clean', 'images:clean', 'styles:clean', 'scripts:clean']);

gulp.task('default', ['watch']);

gulp.task('build', ['clean', 'fonts:build', 'images:build', 'icons:build', 'scripts:build', 'styles:build']);

gulp.task('watch', ['serve', 'styles:watch', 'scripts:watch', 'images:watch', 'icons:watch', 'fonts:watch']);



