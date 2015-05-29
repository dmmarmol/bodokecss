/**
 * bdk-lightbox.js
 * @constructor
 * @desc Open and closes the lightbox
 * @example
 * <div id="bdk-blackout">
 * 	<div class="bdk-lightbox" id="bdk-lightbox-lightbox-id">
 * 		<div class="close" title="{% trans 'Cerrar' %}" onclick='refreshIframeOnClose("send_message_iframe")'>
 * 		    <i class="ficon fa-times"></i>
 * 		</div>
 * 		<div>
 *			<!-- // Some random content! -->
 * 		</div>
 * 	</div>
 * </div>
 * @group bdk-lightbox
 * @param {string} [list_element=.star-list'] - DOM element that holds the rating elements (stars)
 * @since 0.3.0
 * @return {void}
 */

var bdk_lightbox_open,
	mouse_is_outside;

var bdk_lightbox = 'bdk-lightbox';
var bdk_lightbox_anim_class = 'fadeInUp';
var bdk_lightbox_open_class = bdk_lightbox+'-active';
var bdk_blackout = '#bdk-blackout';

function openlbox(id) {
	$('body').toggleClass(bdk_lightbox_open_class);
	$('#'+bdk_lightbox+'-'+id).fadeIn(function(){
		bdk_lightbox_open = true;		
	});//.addClass(bdk_lightbox_anim_class);
}
function closelbox() {
	$('.'+bdk_lightbox).fadeOut(function(){
		bdk_lightbox_open = false;
		$(this).find('.alert').fadeOut();
		
		$(bdk_blackout).fadeOut(function(){
			// $(this).removeClass(bdk_lightbox_anim_class);
			/**
			 * Close the curent alert process
			 */
			$('body').removeClass(bdk_lightbox_open_class);
			$(this).removeAttr('style');
		});
	});
}
/**
 * processlbox()
 * This function is going to be trigger before the 'lightbox' is closing
 * @param {string} 
 * @see closelbox()
 * @return {void}
 */
function processlbox(id) {
	var alert = document.createElement('div');
	var alertIcon = '<i class="ficon fa-circle-o-notch"></i>';
	var alertMessage = '<span class="text">Procesando...</span>';
		
	alert.className += ' alert panel alert-quiet h-center';
	alert.innerHTML = alert.innerHTML + alertMessage + alertIcon;

	$('#'+bdk_lightbox+'-'+id).prepend(alert);
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