(function($, Waypoint) {
    'use strict';

    var mqShowNav;
    var subNavSticky;

    // It's your world, IE
    if (typeof matchMedia !== 'undefined') {
        mqShowNav = matchMedia('(min-width: 880px)');
    }

    function enableDesktop() {
        if (mqShowNav) {
            subNavSticky = new Waypoint.Sticky({
                element: $('.moz-sub-nav'),
                offset: 0
            });
        }
    }

    mqShowNav.addListener(function(mq) {
        if (mq.matches) {
            enableDesktop();
        } else {
            subNavSticky.destroy();
        }
    });

    if (mqShowNav.matches) {
        enableDesktop();
    }
})(window.jQuery, window.Waypoint);
