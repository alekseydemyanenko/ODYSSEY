$(document).ready(function() {

	//header fix
	$(window).scroll(function(){
		$('.header').toggleClass('fix', $(this).scrollTop() > 0);
	});

	// lk login
    $('.btn-entrance-js').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('none-scroll');
        $('.lk-block').toggleClass('active');
        $('.overlay-page').toggleClass('active');
    });

    $('.overlay-page').on('click', function() {
        $('body').removeClass('none-scroll');
        $('.lk-block').removeClass('active');
        $(this).removeClass('active');
    });

    $('.close-lk-js').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('none-scroll');
        $('.lk-block').removeClass('active');
        $('.overlay-page').removeClass('active');
        $(this).removeClass('active');
    });


	// arrow top
    $(window).scroll(function() {
	    if($(this).scrollTop() > 800) {
	    $('#toTop').fadeIn();
	    } else {
	    $('#toTop').fadeOut();
	    }
	});

	$('#toTop').click(function() {
	    $('body,html').animate({scrollTop:0},800);
	});

	// animate user
	setTimeout(function() {
		$('.icon-phone').addClass('active');
		$('.load-user').addClass('active');

	},4000);

	//slider for-who
	$(".slick-carousel").slick({
		speed: 6000,
		autoplay: true,
		variableWidth: true,
		rtl: false,
		autoplaySpeed: 0,
		cssEase: 'linear',
		slidesToShow: 4,
		slidesPerRow: 1,
		rows: 1,
		infinite: true,
		dots: false,
		arrows: false,
		swipeToSlide: false,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 650,
			settings: {
			}
		},
		{
			breakpoint: 480,
			settings: {
			}
		}
		]
	});



	//slider for-who mob1
	$(".slick-carousel1-mob").slick({
		speed: 5000,
		autoplay: true,
		variableWidth: true,
		rtl: false,
		autoplaySpeed: 0,
		cssEase: 'linear',
		slidesToShow: 3,
		slidesPerRow: 1,
		rows: 1,
		infinite: true,
		dots: false,
		arrows: false,
		swipeToSlide: false,
		centerMode: true,
		focusOnSelect: true,
	});

	//slider for-who mob2
	$(".slick-carousel2-mob").slick({
		speed: 7000,
		autoplay: true,
		variableWidth: true,
		rtl: false,
		autoplaySpeed: 0,
		cssEase: 'linear',
		slidesToShow: 2,
		slidesPerRow: 1,
		rows: 1,
		infinite: true,
		dots: false,
		arrows: false,
		swipeToSlide: false,
		centerMode: true,
		focusOnSelect: true,
	});


	//slider for-who mob3
	$(".slick-carousel3-mob").slick({
		speed: 6000,
		autoplay: true,
		variableWidth: true,
		rtl: false,
		autoplaySpeed: 0,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesPerRow: 1,
		rows: 1,
		infinite: true,
		dots: false,
		arrows: false,
		swipeToSlide: false,
		centerMode: true,
		focusOnSelect: true,
	});


	//slider for-who mob4
	$(".slick-carousel4-mob").slick({
		speed: 5000,
		autoplay: true,
		variableWidth: true,
		rtl: false,
		autoplaySpeed: 0,
		cssEase: 'linear',
		slidesToShow: 4,
		slidesPerRow: 1,
		rows: 1,
		infinite: true,
		dots: false,
		arrows: false,
		swipeToSlide: false,
		centerMode: true,
		focusOnSelect: true,
	});


	// Помощь анимации
	// data-wow-delay="0.3s" // задержка анимации
	// data-wow-offset="10" // — расстояние в пикселях от нижнего края браузера до верхней границы элемента необходимое для начала анимации;
	new WOW().init();


	// Маска для формы телефона https://github.com/RobinHerbots/Inputmask
    $("input[type='tel']").inputmask({
	  mask: '+7 (999) 999 99-99',
	  showMaskOnHover: false,
	  autoUnmask: true,
	});

	//Плавный скролл до блока .div по клику на .scroll
	$('a[data-target="anchor"]').on('click', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});


    // Боковое меню
    $('.menuToggle').on('click', function() {
        $('body').toggleClass('none-scroll');
        $('.menu-nav').toggleClass('active');
        $('.overlay-page').toggleClass('active');
        $(this).toggleClass('active')
    });

    $('.overlay-page').on('click', function() {
        $('body').removeClass('none-scroll');
        $('.menu-nav').removeClass('active');
        $('.menuToggle').removeClass('active');
        $(this).removeClass('active');
    });


    $('.main-nav ul li a[data-target="anchor"]').on('click', function(e) {
    	$('.menu-nav').removeClass('active');
    	$('.menuToggle').removeClass('active');
    	$('body').removeClass('none-scroll');
    	$('.overlay-page').removeClass('active');
    });



	// if (window.matchMedia('(max-width: 1200px)').matches) // адаптивный js


});




