$(function () {
    'use strict'

    // slider part start
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    });
    // slider part end





    // fix menu part start
    let menuOff = $('#menu').offset().top;


    $(window).scroll(function () {

        let scrolling = $(this).scrollTop()

        if (scrolling > menuOff) {
            $('#menu').addClass('fix_menu')
        } else {
            $('#menu').removeClass('fix_menu')
        }

    });
    // fix menu part end





    // slider part start
    $('#bc_top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000)
    });


    $(window).scroll(function () {
        let scrolling = $(this).scrollTop()

        if (scrolling > 200) {
            $('#bc_top').fadeIn()
        } else {
            $('#bc_top').fadeOut()
        }
    })
    // slider part end

    // slider part start
    // slider part end

    // slider part start
    // slider part end



});