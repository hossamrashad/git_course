/*global $, alert, console*/

$(document).ready(function () {
    'use strict';
    $(window).resize(function () {
        $('.padding-helf-window-height').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.padding-helf-window-height').height()) / 2);
        });
    });
    $('.padding-helf-window-height').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.padding-helf-window-height').height()) / 2);
    });
});
