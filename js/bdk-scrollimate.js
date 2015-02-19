// bdk-animate-on-scroll.js
/*
 * Agrega/Quita animaciones dependiendo de
 * cuanto scrolleo el usuario
 */ 

var w = $(window);
var	windows_height = w.height() * 1.1;
// var isTouch = Modernizr.touch();

// Trigger
if (!scrollimateIsMobile() ) {
	w.on('scroll', scrollimate);	
}

// The Function
function scrollimate() {
	var animated = 'animated-once';
	var scrolled = w.scrollTop();
	$('.scrollimate').each(function(){
		var element = $(this);
		offsetTop = (element.offset().top) + (element.height() / 2);
		if ( scrolled + windows_height > offsetTop ) {
			// Previene que se anime mas de una vez
			if ( !element.hasClass(animated) ) {
				if ( element.data('timeout') ) {
					window.setTimeout(function(){
						element.addClass( element.data('animation') ); // Agrega la clase con el nombre de la animacion
					}, parseInt( element.data('timeout'), 10 ) );
				} else {
					element.addClass( element.data('animation') );
				}
				element.addClass(animated); // Previene que se anime mas de una vez
			}
		}
	});
}

//Animation Started
$('.scrollimate').on('animationstart webkitAnimationStart oanimationstart MSAnimationEnd', function() {
    // console.log('animation has started');
	//Do Something
});


// Mobile
// ================================
function scrollimateIsMobile(myUserAgent) {
	var userAgent = navigator.userAgent.toLowerCase();
	if ( !myUserAgent ) {
		if( userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i) ) {
			console.log(userAgent);
		 	return true;
		} else {
			return false;
		}
	} else {
		var ua = '/'+myUserAgent+'/i';
		if( userAgent.match(ua) ) {
			console.log(userAgent);
		 	return true;
		} else {
			return false;
		}
	}
}