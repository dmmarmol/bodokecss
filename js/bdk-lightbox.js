// bdk-lightbox.js

var lightbox_open,
	mouse_is_outside;

var bdk_lightbox = 'bdk-lightbox';
var bdk_lightbox_open_class = bdk_lightbox+'-active';
var bdk_blackout = '#bdk-blackout';

function openlbox(id) {
	$('body').toggleClass(bdk_lightbox_open_class);
	$('#'+bdk_lightbox+'-'+id).fadeIn(function(){
		lightbox_open = true;		
	});
}
function closelbox() {
	$('.'+bdk_lightbox).fadeOut(function(){
		lightbox_open = false;
		
		$(bdk_blackout).fadeOut(function(){
			$('body').removeClass(bdk_lightbox_open_class);
			$(this).removeAttr('style');
		});
	});
}
$(document).ready(function(){

	// $('.openlbox').click(bindlbox);
	$('*[lightbox]').click(function(){
		var id = $(this).attr('lightbox');
		openlbox( id );
	});

	// Close Button
	$('.'+bdk_lightbox+' .close').click(function(e){
		closelbox();
	});
	$(document).keyup(function(e) {
		if (e.keyCode == 27 && lightbox_open) { 
			closelbox();
		} // esc
	});
	
	/**
	 * Outside Close
	 * The lightbox is closed if the user clicks outside it
	 */ 
	$('.'+bdk_lightbox).hover(function(){ 
		mouse_is_outside = false;
	}, function(){ 
		mouse_is_outside = true;
	});
	
	$(bdk_blackout).click(function(){ 
		if (mouse_is_outside) {
			closelbox();
		}
	});

});