// http://stackoverflow.com/questions/11306736/jquery-check-if-element-has-a-specific-style-property-defined-inline
        $.fn.inlineStyle = function (prop) {
		var styles = this.attr("style"),
		value;
		styles && styles.split(";").forEach(function (e) {
			var style = e.split(":");
			if ($.trim(style[0]) === prop) {
				value = style[1];
			}
		});
		return value;
	};

	function setWidth(){
		$('.no-flexbox .flex-container').not('.vertical').each(function(){
			var $el = $(this),
			widthPerBox = Math.ceil(100/$el.find('> .flex-item').length);

			$el.children('.flex-item').each(function(){
				if($(this).attr('data-width') !== undefined ){
					$(this).css('width', $(this).data('width')+'%');
				}
				// do not overwrite the actual width
				else if(!$(this).inlineStyle('width')){
					$(this).css('width', widthPerBox+'%');
				}
			});
		});
	}

	// there is a problem while setting width and height at same time
	// so I'm setting width then height
	function setHeight(){
		$('.no-flexbox .flex-container').not('.vertical').each(function(){
			var $el = $(this),
			maxHeight = 0;

			$el.children('.flex-item').each(function(){
				// set height auto to reset the height
				$(this).css('height', 'auto');
				if($(this).height() > maxHeight){
					maxHeight = $(this).outerHeight();
				}
			});
			// makes sure maxHeight is not equal to 0
			if(maxHeight){
				$el.find(' >.flex-item').css('height', maxHeight);
			}
		});
	}


	$(document).ready(function(){
		setWidth();
		setHeight();
	});
	$(window).resize(function(){
		setHeight();
	});