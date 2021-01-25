$(function () {
    'use stricr';
    var scrollBoutton = $("#scroll-top");
    $(window).scroll(function () {
        //console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 700) {
            scrollBoutton.show();
        } else {
            scrollBoutton.hide();
        }
    });
    scrollBoutton.click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    /*********************************************************/
    /*********************************************************/
    var scrollBouttonDoun = $("#scroll-down");
    $(window).scroll(function () {
        //console.log($(this).scrollTop());
        if ($(this).scrollTop() <= 700) {
            scrollBouttonDoun.show();
        } else {
            scrollBouttonDoun.hide();
        }
    });
    scrollBouttonDoun.click(function () {
        $('html, body').animate({
            scrollTop: 16850
        }, 3000);
    });
});
