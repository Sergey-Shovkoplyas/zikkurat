$(document).ready(function () {

	// ------------------- section-slider itialize ----------------

	$('.home__slider-1 .sec-slider__slider-wrap').slick({
		variableWidth: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		prevArrow: $('.home__slider-1 .sec-slider__arrow.prev'),
		nextArrow: $('.home__slider-1 .sec-slider__arrow.next'),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToScroll: 5,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	$('.home__slider-2 .sec-slider__slider-wrap').slick({
		variableWidth: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		prevArrow: $('.home__slider-2 .sec-slider__arrow.prev'),
		nextArrow: $('.home__slider-2 .sec-slider__arrow.next'),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToScroll: 5,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	$('.home__slider-3 .sec-slider__slider-wrap').slick({
		variableWidth: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		prevArrow: $('.home__slider-3 .sec-slider__arrow.prev'),
		nextArrow: $('.home__slider-3 .sec-slider__arrow.next'),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToScroll: 5,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	// ----------------------------- header__menu-sublist -----------------

	$('.header__menu-btn').on('click', function () {
		$(this).next('.header__menu-sublist').slideToggle();
	});

	// ----------------------------- header__submenu toggle -----------------

	$('.header__submenu-btn').on('click', function () {
		$('.header__submenu').toggleClass('active');
	});

	// ----------------------------- header__submenu tabs -----------------

	$('.header__submenu-list li').on('click', function (e) {
		if ($(this).attr('data-num')) {
			e.preventDefault();
			let dataNum = +$(this).attr('data-num');
			$('.header__submenu-list li, .header__submenu-content').removeClass('active');
			$('.header__submenu-list li, .header__submenu-content').each(function () {
				let itemNum = +$(this).attr('data-num');
				if (itemNum === dataNum) {
					$(this).addClass('active');
				}
			});
		}
	});

	// ------------------------------ header-mob__menu -------------------------

	$('.header-mob__item.menu').on('click', function () {
		$('.header-mob__menu').addClass('active');
		$('.header-mob__overlay').fadeIn();
	});
	$('.header-mob__menu-btn, .header-mob__overlay').on('click', function () {
		$('.header-mob__menu').removeClass('active');
		$('.header-mob__overlay').fadeOut();
	});

	// ------------------------------ header-mob__search -------------------------

	$('.header-mob__item.search').on('click', function () {
		$('.header-mob__search').fadeToggle("fast");
	});

	// -------------------- quantity --------------------------

	$('.quantity__bnt--minus').on('click', function () {
		let $input = $(this).next('.quantity__input');
		let inputValue = $input.val();
		if (inputValue > 0) {
			inputValue--;
			$input.val(inputValue)
		}
	});

	$('.quantity__bnt--plus').on('click', function () {
		let $input = $(this).prev('.quantity__input');
		let inputValue = $input.val();
		inputValue++;
		$input.val(inputValue);

	});


	// -------------------- show more categories --------------------------

		$('.category__list-more').on('click', function(){
			$(this).prev('.category__list').find('.category__list-sublist').slideToggle();
		});



	// ------------------- .category__filter-btn ------------------
		
		$('.category__filter-btn').on('click', function(){
			$(this).toggleClass('active');
			$('.category__left').slideToggle();
		});



	// ------------------------------ select customaze  -------------------

	$('select.form__select').styler();
	$('.jq-selectbox__select').on('click', function () {
		$(this).toggleClass('active');
	});
	$('.jq-selectbox__dropdown').on('click', function () {
		$(this).prev('.jq-selectbox__select').toggleClass('active');
	});


});