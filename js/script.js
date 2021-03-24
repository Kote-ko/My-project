$(document).ready(function(){
    $('.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });  
});


$("#wrapper").click( function() {
  $(".icon").toggleClass("close");
});



$(function () {
	$('.multiple-items').slick({
  		 slidesToShow: 4,
  		 slidesToScroll: 1,
  		 arrows: true,
  		 autoplay: true,
  		 autoplaySpeed: 1000,
  		 speed: 2500,
  		 dots: false,
  		 prevArrow: ".arrow-prev",
  		 nextArrow: ".arrow-next",
  		 responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});
});


// $('.item').mousemove(function(e) {
// 	$(this).children('a').children('img').animate({ height: '250', width: '350'} 100);
// }).mouseleave(function(e) {
// 	$(this).children('a').children('img').animate({ height: '90%', width: '90%'} 100);
// });
