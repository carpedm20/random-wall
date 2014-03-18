"use strict";

(function ($, window, document, undefined) {
  var pluginName = "randomwall";
  var img_exts = ['.jpg','.png'];

  var rand_urls = [];
  var mode = '';
  var field;

  var defaults = {
    mode: "raddit", // default imgur (option: 'imgur', 'raddit')
    delay_time: 0, // milisecons
    image_list: [],
  };

  function Plugin(elem, options) {
    this.$field = $(elem);
    this.options = $.extend(true, {}, defaults, options);
    this._defaults = defaults;
    this.RADDIT = ['http://www.reddit.com/r/wallpapers/controversial/.json', 'http://www.reddit.com/r/wallpapers/.json'];
    this.init();
  }

  Plugin.prototype = {
    init: function () {
      mode = this.options.mode;
      field = this.$field;

      if(this.options.image_list.length == 0) {
        var json_url = "";

        if(mode == 'imgur')
          json_url = "http://imgur.com/r/wallpapers/hot.json";
        else
          json_url = this.RADDIT[Math.floor(Math.random() * this.RADDIT.length)];

        $.getJSON(json_url, this.getUrl);
      } else {
        rand_urls = this.options.image_list;
      }

      if (this.options.delay_time != 0)
        setInterval(this.changeWall, this.options.delay_time);
      else
        this.changeWall();
    },
    getUrl: function(d) {
      if(mode == 'imgur')
        var items = d.data;
      else
        var items = d.data.children;

      if(mode == 'raddit') {
        items.forEach(function(entry) {
          var temp_url = entry.data.url;
          var found = false;

          for (var i=0; i < img_exts.length; i++) {
            var position = temp_url.indexOf(img_exts[i]);
            if (position != -1 && position == temp_url.length - 4) {
              rand_urls.push(entry.data.url);
              found = true;
              continue;
            }
          }

          if (found == false && temp_url.indexOf('imgur') != -1 && temp_url.indexOf('/a/') == -1)
            rand_urls.push(temp_url + '.jpg');
        });
      } else {
        items.forEach(function(entry) {
          var temp_url = entry.hash;
          var type = entry.mimetype;

          if (type.indexOf('png') != -1) {
            rand_urls.push("http://i.imgur.com/" + temp_url + '.png');
          } else {
            rand_urls.push("http://i.imgur.com/" + temp_url + '.jpg');
          }
        });
      }

      var randomIndex = Math.floor(Math.random() * rand_urls.length);
      field.animate({opacity: 0}, 'slow', function() {
        field.css('background', 'url('+rand_urls[randomIndex]+') no-repeat center center fixed').css('background-size','cover').animate({opacity: 1}, 'slow');
      });
    },
    changeWall: function() {
      var urls = rand_urls;

      var randomIndex = Math.floor(Math.random() * urls.length);

      if (this.options.delay_time != 0)
        field.animate({opacity: 0}, 'slow', function() {
          field.css('background', 'url('+urls[randomIndex]+') no-repeat center center fixed').css('background-size','cover').animate({opacity: 1}, 'slow');
        });
      else
        field.css('background', 'url('+urls[randomIndex]+') no-repeat center center fixed').css('background-size','cover').animate({opacity: 1}, 'slow');
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
