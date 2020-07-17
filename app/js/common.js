$(document).ready(function () {

	// ------------------- home__head slider itialize ----------------

	$('.home__head').slick({

	});

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

	// ------------------- TABS section-sliders itialize ----------------
	// ---------------------- home__tab -------------------------

	$('.home__tab-btn').on('click', function () {
		$(this).addClass('active');
		$('.home__tab-btn').not($(this)).removeClass('active');
		let num = +$(this).attr('data-num') - 1 ;
		slider.slick('slickGoTo', num)
	});

	let slider = $('.home__slider-tab .sec-slider__slider-wrap');
	let prev = slider.parent('.sec-slider__slider').find('.sec-slider__arrow.prev');
	let next = slider.parent('.sec-slider__slider').find('.sec-slider__arrow.next');
	slider.slick({
		variableWidth: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		prevArrow: prev,
		nextArrow: next,
		infinite: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToScroll: 6,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToScroll: 6,
				}
			}
		]
	});
	slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
		let curSlide = currentSlide + 1;
		$('.home__tab-btn').removeClass('active');
		$('[data-num="'+curSlide+'"]').addClass('active');
	});
	

	// ----------------------------- header__menu-sublist -----------------

/* 	$('.header__menu-btn').on('click', function () {
		$(this).next('.header__menu-sublist').slideToggle();
	}); */

	$('.header__menu').hover(
		function() {
			$(this).find('.header__menu-sublist').clearQueue();
			$(this).find('.header__menu-sublist').fadeIn("fast");
		},
		function() {
			$(this).find('.header__menu-sublist').clearQueue();
			$(this).find('.header__menu-sublist').fadeOut("fast");
		},
	);


	// ----------------------------- header__alage-sublist -----------------

	$('.header__alege-btn').on('click', function () {
		$(this).next('.header__alege-sublist').slideToggle();
	});

	// ----------------------------- header__submenu toggle -----------------

/* 	$('.header__submenu-btn').on('click', function () {
		$('.header__submenu').toggleClass('active');
	});
 */

	$('.header__submenu-btn').hover(
		function() {
			$(this).find('.header__submenu').addClass("active");
		},
		function() {
			$(this).find('.header__submenu').removeClass("active");
		},
	);


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

	$('.category__list-more').on('click', function () {
		$(this).prev('.category__list').find('.category__list-sublist').slideToggle();
		$(this).toggleClass('active');
		if ( $(this).is('.active') ) {
			$(this).html('MAI PUTINE -');
		} else {
			$(this).html('MAI MULTE +');
		}
	});



	// ------------------- .category__filter-btn ------------------

	$('.category__filter-btn').on('click', function () {
		$(this).toggleClass('active');
		$('.category__left').slideToggle();
	});

	// ------------------- .category-main__filter-btn ------------------

	$('.category-main__filter-btn').on('click', function () {
		$(this).toggleClass('active');
		$('.category-main__left').slideToggle();
	});


	// ---------------------- product__info-tab -------------------------

	$('.product__info-tab-btn').on('click', function () {
		$(this).addClass('active');
		$('.product__info-tab-btn').not($(this)).removeClass('active');
		let num = +$(this).attr('data-num') - 1;
		let text = $('.product__info-tab-content')[num];
		$('.product__info-tab-content').not(text).removeClass('active');
		$(text).addClass('active');
	});

	


	// ----------------- Scroll to home__category-item  ---------------------

	$('.home__category-item').on('click', function () {
		let identify = $(this).attr('data-btn');
		let $item = $('[data-item=' + identify + ']')
		let itemOffsetTop = $item.offset().top

		scrollTo(itemOffsetTop);

	});

	function scrollTo(offsetTop) {
		$([document.documentElement, document.body]).animate({
			scrollTop: offsetTop - 50
		}, 2000);
	}

	// ---------------------- mobile-list open sublist --------------------

	$('.mobile-list--main .mobile-list__link').on('click', function () {
		$(this).next('.mobile-list__sublist').slideToggle();
	});

	// ---------------------- popup toggle --------------------

	$('.pupup-cart__close, .pupup-cart__owerlay, .pupup-cart__btn-close').on('click', function () {
		$('.pupup-cart').fadeOut();
	});

	$('.pupup-category__close, .pupup-category__owerlay, .pupup-category__continue').on('click', function () {
		$('.pupup-category').fadeOut();
	});

	// ---------------------- upload__file (custom input type=file) --------------------

	$(".upload__btn input[type=file]").change(function () {
		var filename = $(this).val().replace(/.*\\/, "");
		$(".upload__file-name").html(filename);
	});


	// ------------------------------ select customaze  -------------------

	$('select.form__select').styler();
	// $('.jq-selectbox__select').on('click', function () {
	// 	$(this).toggleClass('active');
	// });
	// $('.jq-selectbox__dropdown').on('click', function () {
	// 	$(this).prev('.jq-selectbox__select').toggleClass('active');
	// });


});