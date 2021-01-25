/* globel $, alert, console */
$(document).ready(function () {
	'use strict';
	/* هنا انا اديت للنك اللي انا عاوز اول لما ادوس علية يوديني لحتة معينة كلاس اسمو سار  */
	//$('.ser').click(function () {
	/* هنا انا قلتلو يعمل انميت اول لما ادوس على اللنك اللي انا مديلو العلاس و ينزل عند الداف اللي انا مديلو ايدي سرفساس في سنية  */
	/*$('html, body').animate({
			scrollTop: $('#services').offset().top
		}, 1000);
		console.log($(this).data('value'));
	});*/
	$('.links li a').click(function () {
		$('html, body').animate({
			/* 
			بتخلي النك اللي انت هتدوس علية زاي كد 
			<li><a href="#" data-value="ser">About</a></li>
			*/
			scrollTop: $('#' + $(this).data('value')).offset().top
		}, 1000);
		console.log('#' + $(this).data('value'));
	});
});
