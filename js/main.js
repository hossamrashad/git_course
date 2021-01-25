/*globel $, jquery, alert, document, console*/

$(function () {
    /* start section loading */
    $(window).load(function () {
        'use strict';
        $(".loading-overlay .spinner").fadeOut(2000, function () {
            $("body").css("overflow", "auto");
            $(this).parent().fadeOut(2000, function () {

                $(this).remove();
            });
        });
    });
    /* end section loading */
});
