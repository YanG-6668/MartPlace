$(function() {



    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>'
    });

    var mixer = mixitup('.products__inner-box');

    $('.slider__second-inner').slick({

        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button class="slick-arrow slick-prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"></button>',

    });

});