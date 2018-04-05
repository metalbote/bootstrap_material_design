'use strict';

const merge = require('merge-stream');
const vendor = {
  bootstrap_material_design: {
    js: 'node_modules/bootstrap-material-design/dist/js/bootstrap-material-design.*',
  },
  popper: {
    js: 'node_modules/popper.js/dist/umd/popper.*',
  }
};

module.exports = function (gulp, callback) {

  var scripts = gulp.src([
    vendor.bootstrap_material_design.js,
    vendor.popper.js
  ]).pipe(gulp.dest(global.config.scripts.dest));

  return scripts
};
