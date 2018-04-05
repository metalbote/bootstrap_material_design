'use strict';

var merge = require('lodash.merge'),
    browserSync = require('browser-sync'),
    site = browserSync.create('site');

module.exports = function (gulp, callback) {
  if (global.config.browserSync.site.enabled) {
    var siteOptions = merge(
        {},
        global.config.browserSync.site,
        {
          proxy: global.config.paths.devUrl,
          snippetOptions: {
            rule: {
              match: /<\/body>/i,
              fn: function (snippet, match) {
                return snippet + match;
              }
            }
          }
        }
    );

    site.init(siteOptions);
  }
};
