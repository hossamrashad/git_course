$(document).ready(function() {
  $('.img-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
	  // الخاصية دي علشان تفتح النكات تظهر الصور و بعدين يكون فية موس تغير منو 
	  gallery: {enabled: true}
  // other options
});
	$('.test-popup-link').magnificPopup({
  type: 'image'
  // other options
});
});