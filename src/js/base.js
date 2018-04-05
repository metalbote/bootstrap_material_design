/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_material_design = {
    attach: function (context, settings) {
      $('body').bootstrapMaterialDesign();
    }
  };

})(jQuery, Drupal);

