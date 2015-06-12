/**
 * bdk_rating()
 * @constructor
 * @desc Fires the rating UI. Each parameter could recieve 'undefined' as a parameter.
 * @example
 * <div class="post-rating">
 *	<ul class="star-list list list-inline-block" data-rating="{{ section_data.rating.votes }}">
 *		<li class="item" id="star-x">
 *			<label for="star-x-input">
 *				<i class="ficon fa-star star-full"></i>
 *				<i class="ficon fa-star-o star-empty"></i>
 *			</label>
 *			<input type="radio" class="hidden" id="star-x-input" name="rating" value="1" />
 *		</li>			
 *		<li class="item" id="star-x">
 *			<label for="star-x-input">
 *				<i class="ficon fa-star star-full"></i>
 *				<i class="ficon fa-star-o star-empty"></i>
 *			</label>
 *			<input type="radio" class="hidden" id="star-x-input" name="rating" value="1" />
 *		</li>			
 *	</ul>
 *	<span class="post-votes"><!-- Votes count --></span>
 * </div>
 * @see _rating.scss
 * @param {string} [list_element=.star-list'] - DOM element that holds the rating elements (stars)
 * @param {string} [single_element=.star-list .item'] - DOM element that represents a single rating element (star)
 * @param {string} [hover_class='hover'] - CSS class when the single_element is hovered
 * @param {string} [half_class='half'] - CSS class when the single_element is showing a half star
 * @return {void}
 */
function bdk_rating(list_element, single_element, hover_class, half_class) {
	list_element = typeof list_element !== 'undefined' ? list_element : '.star-list';
	single_element = typeof single_element !== 'undefined' ? single_element : '.star-list .item';
	hover_class = typeof hover_class !== 'undefined' ? hover_class : 'hover';
	half_class = typeof half_class !== 'undefined' ? half_class : 'half';

	var list = $(list_element);
	var element = $(single_element);
	var initial_rating;
	// console.log(initial_rating);
	var votes_count;

	/**
	 * If the mouse hover any of the single_element
	 * then it will change his appearence 'filling' themselves
	 * - EXCEPT - if the user has voted before, then the list_element
	 * will have a class named "blocked" in order to prevent the UI
	 */
	if ( !list.hasClass('blocked') ) {
		element.hover(
			// MouseEnter
			function(){
                votes_count = $('.post-rating .post-votes').text();
				// var $elements = $(this).siblings('.item').andSelf();
				var id = $(this).index();
				// console.log('id: '+id);
				element.removeClass(hover_class+' '+half_class);
				element.slice(0, id + 1).addClass(hover_class);

				$('.post-rating .post-votes').text( $(this).attr('title') );
			},
			// MouseOut
			function(){
                initial_rating = $(list_element).attr('data-rating');
                initial_rating = initial_rating.replace(/\,/g,'.'); // Look for commas inside the number and replace them with a dot
                initial_rating = Number(initial_rating);

				element.removeClass(hover_class+' '+half_class);

				var integer = Math.floor(initial_rating);
				var decimal = initial_rating - integer;
					decimal = (Math.round(decimal*2)/2).toFixed(1);

				// console.log( integer +' '+ decimal);

				if ( decimal > 0 ) {
					// Hover items plus a half one
					element.slice(0, integer).addClass(hover_class);
					element.eq(integer).addClass(half_class);
				} else {
					// Hover full stars
					element.slice(0, integer).addClass(hover_class);
				}

                if ($('.post-rating .post-votes').text().indexOf("voto") == -1)
				    $('.post-rating .post-votes').text(votes_count);
			}
		);		
	}

	/**
	 * If the mouse leaves the list_element that contains all the single_element
	 * then it returns to his original stage.
	 */
	// list.mouseleave(function(){
	// 	element.removeClass(hover_class);		
	// 	console.log( Math.floor(initial_rating) );
	// 	element.slice(0, initial_rating + 1).addClass( hover_class );		
	// });
}
/**
 * Function instance
 */
bdk_rating();