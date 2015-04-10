/*
 * bodoke_dropdown.js
 *
 * Custom dropdown - Homemade :)
 * important! -> Requires jQuery!
 */

// Dropdown
$(document).ready(function(){
	// Append dropdown icon
	// $('.dropdown .handler').append('<i class="icon arrow-dropdown"></i>');

	// Agrega un contenedor si es mobile
	if ( $('.dropdown').hasClass('mobile') ) {
		console.log('es moobile');
		$('.dropdown .list').wrap('<div class="mobile-list-container"></div>');
		// $('.dropdown .mobile-list-container').wrap('<div class="blackout"></div>');
	}
	
	// Click Outside and Close
	var is_hover = false;
	$('.dropdown')
		.mouseover(function() {
			is_hover = true;
		})
		.mouseout(function(){
			is_hover = false
		});
	$('body').click(function(){
		if ( !is_hover ) {
			$('.dropdown').removeClass('open');
		}
	});
	// Click to open
	$('.dropdown .handler').click(function(){
		$(this).parents('.dropdown').toggleClass('open');
	});

});
