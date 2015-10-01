'use strict';

//resize any element with the given class
function fullscreen(name) {
    $(name).addClass('fullscreen');
    $('.fullscreen').css({
        width: $(window).width(),
        height: $(window).height()
    });
}

//Listen to Window Resize
var $resize = $(window).resize(function () { if (!isMobile()) fullscreen(null); });

function isMobile() {return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)); }

