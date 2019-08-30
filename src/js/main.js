// wow = new WOW({
//     boxClass:     'wow',      
//     animateClass: 'animated', 
//     offset:       0,          
//     mobile:       false,       
//     live:         true        
// })
// wow.init();

function sliders() {
    $('.slider').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        speed: 1000,
        autoplay: true
    });


    $('.cat-slider').slick({
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
    $('.cert-list').slick({
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $('.card_slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.card_slider-nav'
    });
    $('.card_slider-nav').slick({
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.card_slider-for',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
}

sliders();

$(function(){
    $('.open--modal').on('click', function(){
        var modal = $(this).attr('data-modal');
        $(modal).fadeIn();
        return false;
    });
    $('.call-btn').on('click', function(){
        var modal = $(this).attr('data-modal');
        $(modal).fadeIn();
        return false;
    });
    $('.modal .close, .modal__layer').on('click', function(){
        $(this).parents('.modal').fadeOut();
        return false;
    });
    $('.contract_block, .cert_block').on('click', function(){
        var modal2 = $(this).attr('data-modal');
        $(modal2).fadeIn();
        setTimeout(function(){
            $('.contract-slider').slick({
                dots: false,
                arrows: true,
                slidesToShow: 1,
                speed: 1000,
                autoplay: true
            });
        
        }, 0);
        setTimeout(function(){
            $('.cert-slider').slick({
                dots: false,
                arrows: true,
                slidesToShow: 1,
                speed: 1000,
                autoplay: true
            });
        }, 0);
        return false;
    });

    $('.nav--btn').on('click', function(){
        if ($('header .nav').is(':visible')) {
            $('header .nav').slideUp();
            $(this).removeClass('open');
        } else {
            $('header .nav').slideDown();
            $(this).addClass('open');
        }
        return false;
    });
    $('.phone--btn').on('click', function(){
        if ($('header .top').is(':visible')) {
            $('header .top').slideUp();
            $(this).removeClass('open');
        } else {
            $('header .top').slideDown();
            $(this).addClass('open');
        }
        $(document).bind('touchstart', function(e){
            if(!(e.target).closest('header .phone--btn')){
                $('header .top').slideUp();
                $('header .phone--btn').removeClass('open');
            }
            e.stopPropagation();
        });
        return false;
    });

    $('.search--btn').on('click', function(){
        var search = $('.search');
        $(search).addClass('open');
        $(document).bind('touchstart', function(e){
            if(!(e.target).closest('header .search')){
                $(search).removeClass('open');
            }
            e.stopPropagation();
        });
        return false;
    });
    $('.search .close-btn').on('click', function(){
        var search = $('.search');
        $(search).removeClass('open');
        return false;
    });

    $('[name="tel"]').inputmask('+7 (999) 999-99-99');
});

//  submenu
$(function(){
    // var width = $(window).width();
    // $('.submenu > a').on('mouseover', function(){
    //     if(width > 1199){
    //         $(this).next('ul').fadeIn(200);
    //     }
    // });

    // $('.submenu > a').on('click', function(){
    //     if (width < 1100) {
    //       $(this).next('ul').slideToggle();
    //       return false;
    //     } 
    //   });

    // if(width > 1199){
    //     $('.submenu').on('mouseleave', function(){
    //         $('.submenu').children('ul').fadeOut();
    //     });
    // }

    $('.langs .more--btn').on('click', function(){
        if($('.langs ul').is(':visible')){
            $('.langs ul').slideToggle();
            $(this).removeClass('open');
        }
        else{
            $('.langs ul').slideToggle();
            $(this).addClass('open');
        }
        $(document).bind('touchstart', function(e){
            if(!(e.target).closest('.header .langs .more--btn')){
                $('.langs ul').slideUp();
                $('.langs .more--btn').removeClass('open');
            }
            e.stopPropagation();s
        });
        return false;
    });
    $('.col--phone .more--btn').on('click', function(){
       if($('.col--phone ul').is(':visible')){
            $('.col--phone ul').slideToggle();
            $(this).removeClass('open');
       }
       else{
           $('.col--phone ul').slideToggle();
           $(this).addClass('open');
       }
       return false;
    });

   
});
$(window).on("load",function(e){
    if ($(window).width() <= '1024'){
        $('header .submenu > a').on('click', function(){
            $(this).next().slideToggle();
            return false;
        });
        $('.submenu').on('mouseleave', function(){
            $(this).children('ul').slideUp();
        });
    } else {
        $('header .submenu > a').on('mouseover', function(){
            $(this).next().slideDown(250);
        });
        $('.submenu').on('mouseleave', function(){
            $(this).children('ul').slideUp(250);
        });
    }
});

// $(function(){
//     $('.btn--up').bind('click.smoothscroll',function (e) {
//         e.preventDefault();
//         var target = this.hash,
//         $target = $(target);

//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top
//             }, 1000, 'swing', function () {
//             window.location.hash = target;
//         });
//     });

//     $(window).scroll(function(){
//         var bo = $(this).scrollTop();
//         var a = $(".btn--up").css('opacity')
//         if ( bo >= 200 && a == 0) {$(".btn--up").stop().animate({'opacity':'1'},400)};
//         if ( bo < 200 && a == 1) {$(".btn--up").stop().animate({'opacity':'0'},400)};
//     });
// });

// $(window).on('load', function(){
//     $('body').animate({'opacity' : 1});
// });