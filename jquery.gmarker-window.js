/**
 * ITEMAN GMarker Window - A jQuery plug-in for displaying GMarker information window
 * Copyright (c) 2009 ITEMAN, Inc. All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

jQuery.showGMarkerWindow = function(config) {
  config = $.extend({
    map: null,
    marker: null,
    windowHTML: null,
    fields: null,
    okId: null,
    cancelId: null,
    removeId: null
  }, config);

  var windowElement = $(config.windowHTML).appendTo('body');

  $.each(config.fields, function() {
    $('#' + this).val(config.marker[this]);
  });

  $('#' + config.okId).click(function() {
    $.each(config.fields, function() {
      config.marker[this] = $('#' + this).val();
    });

    config.marker.closeInfoWindow();
  });
  $('#' + config.cancelId).click(function() {
    config.marker.closeInfoWindow();
  });
  $('#' + config.removeId).click(function() {
    config.map.removeOverlay(config.marker);
  });

  windowElement[0].style.display = 'inline'
  config.marker.openInfoWindow(windowElement[0]);
};

/**
 * Local Variables:
 * mode: js2
 * coding: iso-8859-1
 * tab-width: 2
 * js2-basic-offset: 2
 * indent-tabs-mode: nil
 * c-hanging-comment-ender-p: nil
 * End:
 */
