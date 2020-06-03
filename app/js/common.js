$( document ).ready(function() {

	// ------------------- section-slider itialize ----------------

	$('.home__slider-1 .sec-slider__slider-wrap').slick({
		variableWidth: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		prevArrow: $('.home__slider-1 .sec-slider__arrow.prev'),
		nextArrow: $('.home__slider-1 .sec-slider__arrow.next')
	});

	$('.home__slider-2 .sec-slider__slider-wrap').slick({
		variableWidth: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		prevArrow: $('.home__slider-2 .sec-slider__arrow.prev'),
		nextArrow: $('.home__slider-2 .sec-slider__arrow.next')
	});

	$('.home__slider-3 .sec-slider__slider-wrap').slick({
		variableWidth: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		prevArrow: $('.home__slider-3 .sec-slider__arrow.prev'),
		nextArrow: $('.home__slider-3 .sec-slider__arrow.next')
	});

});