jQuery(document).ready(function($) {
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    nav:true,
    mouseDrag:true,
    autoplay:true,
    animateOut: 'slideOutUp',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

});