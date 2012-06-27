jQuery Likejacker
============================================================
LikeJacker is a jQuery plugin, for doing the evil deed of clickjacking or likejacking.

It is really easy to use, and shows how this can be done with ease.
I wrote it some time ago in pure javascript, but as a exericie I converted it to a jQuery plugin. It is for demonstration purposes only. 


Does it work?
-------------
Yes. But you might get banned from facebook, and it is a very shady thing to do. It is against the TOS. You should not use it!

How does it work?
-----------------
Use the source luke! 
Ok, I'll tell you. On mouse movement, on some elements it places the like button in front of the cursor. 
You can't click the button when this happens due to (Good) limitations in the browser.

What I do is that from when you start hovering the element, it sets a timeout when this is out it will remove itself. 
You also have the ability to call a function on this timeout.

Most users will click, within a few seconds of hovering the element, I (ab)use this here. 
And it can almost mimic a real button where no one will notice.

Can't facebook fix this?
-----------------------
They could. Facebook could just make a confimation popup before the like appears. 
I belive they do this already if you are getting too many likes, in a short amount of time.

Setup
-----

1. Include jQuery and the likejacker
```
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.likejacker.js"></script>
```

2. Append it to a element
```
<script type="text/javascript">
	$(function () {
		$('.likejackerZone').likejacker({
			target: 'http://example.com'
		});
	});
</script>
```


Legal
-----

Copyright (C) 2012, Allan Kimmer Jensen

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies. If you meet me in person, you will also be required to buy me a beer.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.