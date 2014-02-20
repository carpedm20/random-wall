random-wall
===========

A jQuery plugin that randomly changes background-image of an element

What is random-wall?
--------------------

Parse a wallpaper webpage (http://www.hdwallpapers.in) and get a url of randomly selected image. You can set ``delay_time`` to change a background-image without a new page load. If not, ``random-wall`` will only change a background-image only when a page is reloaded.


Installation
------------

To use, download the minified library into your javascripts directory. jquery.random-wall.js is also available unminimized.


Usage (jQuery)
-----------------

Include jQuery and random-wall into your HTML.

```html
<script src="jquery.min.js"></script>
<script src="jquery.random-wall.min.js"></script>
```

You should have a div field to change a background-image.

```html
<div id="random-wall" />
```

Now, attach the plugin to the text field.

```html
<script>
$("#random-wall").emailautocomplete({
  delay_time: 100 // default: 0
});
</script>
```

Author
-------

- Kim Tae Hoon, [blog](https://carpedm20.us.to).

License
-------

Copyright (c) 2014 Kim Tae Hoon

Licensed under the MIT License.
