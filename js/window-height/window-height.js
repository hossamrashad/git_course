/*global $, alert, console*/
$(function () {
    'use strict';
    $('.window-height').height($(window).height());
    $(window).resize(function () {
        $('.window-height').height($(window).height());
    });
    console.log("Header = Window Height");
});
