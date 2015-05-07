// bdk-lightbox.js

var lighbox_open;
var element = $('#bdk-lightbox');
var lbox = '.bdk-lightbox';


function openlbox(id) {
	$('body').toggleClass('lightbox-active');
	$(element'-'+id).fadeIn(function(){
		lighbox_open = true;		
	});
}
function closelbox() {
	$('.bdk-lightbox').fadeOut(function(){
		lighbox_open = false;
		// $('.blackout').fadeOut();
		$('body').removeClass('lightbox-active');
	});
}
$(document).ready(function(){

	// $('.openlbox').click(bindlbox);
	$('*[lightbox]').click(function(){
		var id = $(this).attr('lightbox');
		openlbox( id );
	});

	// Close Button
	$('.bdk-lightbox .close').click(function(e){
		closelbox();
	});
	$(document).keyup(function(e) {
		if (e.keyCode == 27 && lighbox_open) { 
			closelbox();
		} // esc
	});
	// Outside Close
	var mouse_is_outside;
	$('.bdk-lightbox').hover(function(){ 
		mouse_is_outside = false;
	}, function(){ 
		mouse_is_outside = true;
	});
	$("#blackout").click(function(){ 
		if (mouse_is_outside) {
			closelbox();
		}
	});

});