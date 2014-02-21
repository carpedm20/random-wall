random-wall
===========

A jQuery plugin that randomly changes background-image of an element

What is random-wall?
--------------------

Parse a wallpaper webpage (http://www.reddit.com/r/wallpapers/) and get a url of randomly selected image. You can set ``delay_time`` to change a background-image without a new page load. If not, ``random-wall`` will only change a background-image only when a page is reloaded.

See a live demo [here](http://carpedm20.github.io/randomwall/);


Installation
------------

To use, download the minified library into your javascripts directory. jquery.random-wall.js is also available unminimized.


Usage
-----

Include jQuery and random-wall into your HTML.

```html
<script src="jquery.min.js"></script>
<script src="jquery.random-wall.min.js"></script>
```

You should have a div field to change a background-image.

```html
<div id="random-wall" /> </div>
```

Now, attach the plugin to the text field.

```html
<script>
$("#random-wall").randomwall({
  delay_time: 0, // default: 0 miliseconds (optional)
});
</script>
```

or you can set your own image links.

```html
<script>
$("#random-wall").randomwall({
  image_list: ['http://i.imgur.com/CiAvVQL.jpg',
               'http://i.imgur.com/qC5Nprs.jpg',
               'http://i.imgur.com/fckzvp1.jpg',
               'http://i.imgur.com/od4QZ8C.jpg'] // use only these images (optional)
});
</script>
```


Todo
----
- Add more image link sources (working on imgur).


Author
-------

- Kim Tae Hoon, [blog](http://carpedm20.us.to).

License
-------

Copyright (c) 2014 Kim Tae Hoon

Licensed under the MIT License.
