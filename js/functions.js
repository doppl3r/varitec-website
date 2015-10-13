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

$( window ).load(function() {
    sliceExtension();
});

function sliceExtension(){
    //remove fragment as much as it can go without adding an entry in browser history:
    window.location.replace("#");
    // slice off the remaining '#' in HTML5:    
    if (typeof window.history.replaceState == 'function') {
        var href=window.location.href;
        history.replaceState({}, '', window.location.href.slice(0, href.lastIndexOf(".")));
    }
}