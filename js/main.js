"use strict";

(function($) { 
    // filter menu drop
    // открытие фильтра
    $('.catalog-mobile').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('mobile-filter-open');
        $('.filter-mobile .close').on('click', function(e) {
            e.preventDefault();
            $('body').removeClass('mobile-filter-open');
        });
    });
    // очистка инпутов в фильтре
    $('.filter-drop .clear').click(function (e) {
        e.preventDefault();
        $('.filter-mobile-dropdown li label input:checkbox').prop('checked', false);
    });
    // удаление с фильтра
    $('.filter-count span').each(function(i, key) {
        $(key).on('click', () => {
            $(key).detach();
        });
    });



    // открытие доп.меню в фильтре
    $('.mobile-dropdown > a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().toggleClass('open-drop');
        $('.filter-drop .back').on('click', function(e) {
            e.preventDefault();
            $('.mobile-dropdown').removeClass('open-drop');
        });
    });

    // изменение картинки при скролле
	var $logo = $('.navbar__logo a img');
	$logo.data('initial', $logo.attr('src'));

    $(window).on('scroll load resize', function () {
		var wScroll = $(this).scrollTop();
		var wWidth = $(this).width();

		if (wScroll > 1) {
			$('#nav').addClass('fixed-nav');
			$logo.attr('src', $logo.data('inverse'));
		} else {
			$logo.attr('src', $logo.data('initial'));
			$('#nav').removeClass('fixed-nav');
		}
    });
    
    // burger menu
    $('.navbar__collapse').on('click', function() {
        $('#nav').toggleClass('menu-open');
    });

    // like
    $('.catalog__item .like').each(function(i, key) {
        $(key).on('click', () => {
            $(key).parent().toggleClass('like-active');
        });
    });

    // открытие цена на странице каталог
    $('.filter__price > span').on('click', () => {
        $('.filter__price').toggleClass('open-price');
    });

    // появление кнопки для изменение вида продуктов
    $(window).on('load resize', function () {
        if ($(window).width() > 768) {
            $('.catalog__list').removeClass('catalog-list');
        } else {
            $('.catalog-view').on('click', () => {
                $('.catalog__list').toggleClass('catalog-list');
            });
        }
    });

    // главное меню
    $('.has-dropdown > a').on('click', function(e) {
        e.preventDefault();
		$(this).parent().toggleClass('open-drop');
	});
	
    // аккордеон на странице продукта
    $('.js-accordion').accordion({
        heightStyle: 'content',
        active: true,
        collapsible: true
    });

    // слайдеры
    $('.js-slider').slick({
        dots: false,
        arrows: true,
        prevArrow: "<button class='slider-arrow slider-arrow__prev'><svg viewBox='0 0 41 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M40 1L1 41L40 81' stroke='#E3E3E3' stroke-width='2' stroke-linejoin='round'/></svg></button>",
        nextArrow: "<button class='slider-arrow slider-arrow__next'><svg viewBox='0 0 42 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L41 41L1 81' stroke='#E3E3E3' stroke-width='2' stroke-linejoin='round'/></svg></button>",
        draggable: true,
    });
    $('.js-reviews').slick({
        dots: false,
        arrows: true,
        prevArrow: "<button class='slider-arrow reviews__prev'><svg viewBox='0 0 41 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M40 1L1 41L40 81' stroke='#fff' stroke-width='2' stroke-linejoin='round'/></svg></button>",
        nextArrow: "<button class='slider-arrow reviews__next'><svg viewBox='0 0 42 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L41 41L1 81' stroke='#fff' stroke-width='2' stroke-linejoin='round'/></svg></button>",
        draggable: true,
    });
    $(window).on('load resize', function () {
        if ($(window).width() < 768) {
            $('.js-certificate:not(.slick-initialized)').slick({
                dots: true,
                dotsClass: 'slider-dots',
                infinite: true,
                speed: 100,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
            $('.js-items-like:not(.slick-initialized)').slick({
                dots: true,
                dotsClass: 'slider-dots',
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 375,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
            $(".js-gallery-nav.slick-initialized").slick("unslick");
        } else {
            $(".js-certificate.slick-initialized").slick("unslick");
            $(".js-items-like.slick-initialized").slick("unslick");
            $('.js-gallery-nav:not(.slick-initialized)').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.js-gallery-single',
                prevArrow: "<button class='slider-arrow reviews__prev'><svg viewBox='0 0 41 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M40 1L1 41L40 81' stroke='#fff' stroke-width='2' stroke-linejoin='round'/></svg></button>",
                nextArrow: "<button class='slider-arrow reviews__next'><svg viewBox='0 0 42 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L41 41L1 81' stroke='#fff' stroke-width='2' stroke-linejoin='round'/></svg></button>",
                centerMode: true,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                        }
                    }
                ]
            });
        }
    });

    $('.js-gallery-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-gallery-nav',
        responsive: [{
            breakpoint: 768,
            settings: {
                asNavFor: null,
                arrows: true,
                prevArrow: "<button class='slider-arrow gallery__prev'><svg viewBox='0 0 41 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M40 1L1 41L40 81' stroke='#E3E3E3' stroke-width='2' stroke-linejoin='round'/></svg></button>",
                nextArrow: "<button class='slider-arrow gallery__next'><svg viewBox='0 0 42 82' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1 1L41 41L1 81' stroke='#E3E3E3' stroke-width='2' stroke-linejoin='round'/></svg></button>",
            }
        }]
    });

    $( function() {
        // mileage volume
        $( "#mileage-range" ).slider({
            range: true,
            min: 0,
            max: 1000000,
            values: [ 56000, 120000 ],
            slide: function( event, ui ) {
                $( "#mileageOne" ).val( ui.values[ 0 ] + "₽");
                $( "#mileageTwo" ).val( ui.values[ 1 ] + "₽");
            }
        });
        $( "#mileageOne" ).val( $( "#mileage-range" ).slider( "values", 0 ) + "₽");
        $( "#mileageTwo" ).val( $( "#mileage-range" ).slider( "values", 1 ) + "₽");
        
        $( "#dropdown-range" ).slider({
            range: true,
            min: 0,
            max: 1000000,
            values: [ 56000, 120000 ],
            slide: function( event, ui ) {
                $( "#dropdown-rangeOne" ).val( ui.values[ 0 ] + "₽");
                $( "#dropdown-rangeTwo" ).val( ui.values[ 1 ] + "₽");
            }
        });
        $( "#dropdown-rangeOne" ).val( $( "#dropdown-range" ).slider( "values", 0 ) + "₽");
        $( "#dropdown-rangeTwo" ).val( $( "#dropdown-range" ).slider( "values", 1 ) + "₽");
    });
})(jQuery);