//=require components/**.*

$('.shakers-slider').slick({
    dots: false,
    adaptiveHeight: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.prevArrow').click(function() {
    $('.shakers-slider').slick('slickPrev');
});

$('.nextArrow').click(function() {
    $('.shakers-slider').slick('slickNext');
});

$('.shakers-slider').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    }
});

$(".sandwich, .menu_item, .toggle-mnu").click(function() {
    $(".sandwich").toggleClass("active");
    if ($(".top_mnu").is(":visible")) {
        $(".top_mnu").fadeOut(600);
    } else {
        $(".top_mnu").fadeIn(600);
    };
});
$(".top_mnu a").click(function() {
    $(".top_mnu").fadeOut(600);
    $(".sandwich").toggleClass("active");
});
// $(".toggle_mnu").click(function() {
//     if ($(".top_mnu").is(":visible")) {
//         $(".top_mnu").fadeOut(600);
//     } else {
//         $(".top_mnu").fadeIn(600);
//     };

// });