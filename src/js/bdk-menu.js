/**
 * bdk_menu()
 * @constructor
 * @param {string} content_element DOM element that uses as a reference for changing
 * @param {string} menu_element DOM element that represents the menu being affected
 */
function bdk_menu(content_element, menu_element, active_class) {
	content_element = typeof content_element !== 'undefined' ? content_element : 'main[role="container"]';
	menu_element = typeof menu_element !== 'undefined' ? menu_element : '.menu-fixed-top';
	active_class = typeof active_class !== 'undefined' ? active_class : 'active';

	var content = $(content_element);
	var nav = $(menu_element);
	var breakpoint;
	/*
	 * el total del scrollTop + la altura del menu_element tiene que coincidir con 
	 * el top del content_element
	*/
	$(window).on('scroll', function() {
		breakpoint = $(window).scrollTop() + nav.outerHeight();
		// console.log(nav.offset().top);	
		// console.log(content.offset().top);		
		if( breakpoint >= content.offset().top ) {
			nav.addClass(active_class);					
		} else {
			nav.removeClass(active_class);
		}
	});

}
/*
 * Function instance
 */
bdk_menu();