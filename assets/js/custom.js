$('.counter').counterUp({delay: 10,
time: 2000});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:3
        },
        992:{
            items:3
        }
    }
})
