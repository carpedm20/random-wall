"use strict";

(function ($, window, document, undefined) {
  var pluginName = "randomwall";
  var img_exts = ['.jpg','.png'];

  var defaults = {
    delay_time: 0,
  };

  function Plugin(elem, options) {
    this.$field = $(elem);
    this._defaults = defaults;
    this.urls = [];
    this.init();
  }

  Plugin.prototype = {
    init: function () {
      var urls = [];
      var field = this.$field;

      $.getJSON( "http://www.reddit.com/r/wallpapers/.json", function(d) {
        var items = d.data.children;

        items.forEach(function(entry) {
          var temp_url = entry.data.url;
          var found = false;

          for (var i=0; i < img_exts.length; i++) {
            var position = temp_url.indexOf(img_exts[i]);
            if (position != -1 && position == temp_url.length - 4) {
              urls.push(entry.data.url);
              found = true;
              continue;
            }
          }

          if (found == false && temp_url.indexOf('imgur') != -1 && temp_url.indexOf('/a/') == -1)
            urls.push(entry.data.url + '.jpg');
        });

        var randomIndex = Math.floor(Math.random() * urls.length);
        field.css('background', 'url('+urls[randomIndex]+') no-repeat center center fixed');
      });
    },
  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "yz_" + pluginName)) {
        $.data(this, "yz_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);
