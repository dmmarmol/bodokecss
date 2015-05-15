/**
 * bdk-offcanvas()
 * @constructor
 *
 */
function bdk_offcanvas(content_element, nav_element, menu_button, active_class) {
	content_element = typeof content_element !== 'undefined' ? content_element : '#main';
	nav_element = typeof nav_element !== 'undefined' ? nav_element : '#site-nav';
	menu_button = typeof menu_button !== 'undefined' ? menu_button : '#menu-toggle';
	active_class = typeof active_class !== 'undefined' ? active_class : 'site-nav-open';

	function openSiteNav() {
		$("body").addClass(active_class);
	}
	function closeSiteNav() {
		$("body").removeClass(active_class);
	}
  
	// Open #site-nav when clicking sandwich button
	$(menu_button).on('click', function(e) {
		e.stopPropagation();
		e.preventDefault();
		$("body").toggleClass(active_class);
	});

	// Close #site-nav when clicking #main
	$(content_element).on('click', function(e) {
		if($('body').hasClass(active_class)) {
			e.preventDefault();
			closeSiteNav();
		}
	});
  
	// Close #site-nav when clicking nav links
	$(nav_element+' a').on('click', function(e) {
		if($('body').hasClass(active_class)) {
			closeSiteNav();
		}
	});
  
	// Disable mousewheel scroll when #site-nav is active
	$('body').on('mousewheel DOMMouseScroll', function(e) {
		if($('body').hasClass(active_class)) {
			e.preventDefault();
		}
	});
  
	// Disable arrow key scroll when #site-nav is active
	$('body').keydown(function(e) {
		var ar = new Array(33,34,35,36,37,38,39,40);
		var key = e.which;
    
		if($('body').hasClass(active_class)) {
			if( $.inArray(key,ar) > -1 ) {
				e.preventDefault();
				return false;
			}
		}    
		return true;
	});
  
	// Disable touch scroll when #site-nav is active
  	$('body').on('touchmove', function(e) { 
		if($('body').hasClass(active_class)) {
			e.preventDefault();
		}
	});
};

bdk_offcanvas('#site-wrapper', '#site-nav', '#offcanvas-button');