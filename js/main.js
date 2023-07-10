(function($){
    'use strict'

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    // Wow.js
    new WOW().init();

    // Fixed Navbar
    $(window).scroll(function(){
        if($(window).width() < 992){
            if($(this).scrollTop() > 45){
                $('.fixed-top').addClass('bg-white shadow');
                $('.navbar-brand').addClass('text-body');
                $('.navbar-toggler').addClass('text-body');
                $('.nav-link').addClass('text-body');
            }
            else{
                $('.fixed-top').removeClass('bg-white shadow');
                $('.navbar-brand').removeClass('text-body');
                $('.navbar-toggler').removeClass('text-body');
                $('.nav-link').removeClass('text-body');

            }
        }else{
            if($(this).scrollTop() > 45){
                $('.fixed-top').addClass('bg-white shadow').css('top', -45)
                $('.nav-link').addClass('text-body');
                $('.navbar-brand').css('color', 'black')
            }
            else{
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0)
                $('.nav-link').removeClass('text-body');
                $('.navbar-brand').css('color', 'white')
            }
        }
    });


    //Counter
    jQuery(document).ready(function($) {
        $('[data-toggle="counter"]').counterUp({
            delay: 10,
            time: 2000
        });
    });

        // Project carousel
        $(".project-carousel").owlCarousel({
            smartSpeed: 600,
            margin: 100,
            loop: true,
            center: true,
            nav: true,
            autoplay:true,
            navText : [
                '<i class="fa-solid fa-arrow-left-long"></i>',
                '<i class="fa-solid fa-arrow-right-long"></i>'
            ],
            responsive: {
                0:{
                    items:1
                }
            }
        });
    
        // Testimonial carousel
        $(".testimonial-carousel").owlCarousel({
            smartSpeed: 600,
            margin: 30,
            loop: true,
            center: true,
            nav: true,
            autoplay:true,
            navText : [
                '<i class="fa-solid fa-arrow-left-long"></i>',
                '<i class="fa-solid fa-arrow-right-long"></i>'
            ],
            responsive: {
                0: {
                    items:1
                },
                576: {
                    items:1
                },
                768: {
                    items:2
                },
                992: {
                    items:3
                }

            }
        });
    


})(jQuery);