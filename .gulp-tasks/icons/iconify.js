'use strict';

const glob = require('glob'),
    Grunticon = require('grunticon-lib');


module.exports = function (gulp, callback) {
  var icons = glob.sync('.tmp/*.*'),
      options = {
        enhanceSVG: true,
        datasvgcss: "../css/icons.data.svg.css",
        datapngcss: "../css/icons.data.png.css",
        urlpngcss: "../css/icons.fallback.css",
        loadersnippet: "../js/grunticon.loader.js",
        cssbasepath: "../css/",
        defaultWidth: '128px',
        defaultHeight: '128px',
        colors: {
          primary: '#736b55',
          secondary: '#f1ead3',
          success: '#28a745',
          info: '#17a2b8',
          warning: '#ffc107',
          danger: '#dc3545',
          light: '#f8f9fa',
          dark: '#343a40',
          action: '#c3731e',
          action_hover: '#772700'
        },
        previewTemplate: "./src/icons/config/preview.hbs",
      },
      grunticon = new Grunticon(icons, global.config.icons.dest, options);

  return grunticon.process(callback);
};
