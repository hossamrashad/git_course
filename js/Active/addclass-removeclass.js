/*global $, alert, console*/
$(function () {
	'use strict';
	$('.links li a').click(function () {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
});
