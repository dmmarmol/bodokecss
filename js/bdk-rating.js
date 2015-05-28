/**
 * bdk_rating()
 * @constructor
 * @desc Fires the rating UI. Each parameter could recieve 'undefined' as a parameter.
 * @example
 * <ul class="star-list list list-inline-block" data-rating="{{ section_data.rating.votes }}">
 *	<li class="item" id="star-x">
 *		<label for="star-x-input">
 *			<i class="ficon fa-star star-full"></i>
 *			<i class="ficon fa-star-o star-empty"></i>
 *		</label>
 *		<input type="radio" class="hidden" id="star-x-input" name="rating" value="1" />
 *	</li>			
 *	<li class="item" id="star-x">
 *		<label for="star-x-input">
 *			<i class="ficon fa-star star-full"></i>
 *			<i class="ficon fa-star-o star-empty"></i>
 *		</label>
 *		<input type="radio" class="hidden" id="star-x-input" name="rating" value="1" />
 *	</li>			
 * </ul>
 * @param {string} [list_element=.star-list'] - DOM element that holds the rating elements (stars)
 * @param {string} [single_element=.star-list .item'] - DOM element that represents a single rating element (star)
 * @param {string} [hover_class='hover'] - CSS class when the single_element is hovered
 * @return {void}
 */
function bdk_rating(list_element, single_element, hover_class) {
	list_element = typeof list_element !== 'undefined' ? list_element : '.star-list';
	single_element = typeof single_element !== 'undefined' ? single_element : '.star-list .item';
	hover_class = typeof hover_class !== 'undefined' ? hover_class : 'hover';

	var list = $(list_element);
	var element = $(single_element);

	/**
	 * If the mouse hover any of the single_element
	 * then it will change his appearence 'filling' themselves
	 *
	 */
	element.mouseenter(function(){
		var $elements = $(this).siblings('.item').andSelf();
		var id = $(this).index();

		$elements.removeClass(hover_class);
		$elements.slice(0, id + 1).addClass(hover_class);
	});

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