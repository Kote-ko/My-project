$(document).ready(function(){
    $('.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(200);
    });  
});


// burger
$("#wrapper").click( function() {
  $(".icon").toggleClass("close");
});
// burger


// slick-slider (carousel)
$(function () {
	$('.multiple-items').slick({
  		 slidesToShow: 4,
  		 slidesToScroll: 1,
  		 arrows: true,
  		 autoplay: true,
  		 autoplaySpeed: 1000,
  		 speed: 2500,
       infinite: true,
  		 dots: false,
  		 prevArrow: ".arrow-prev",
  		 nextArrow: ".arrow-next",
  		 responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 414,
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
// slick-slider (carousel)


/* animation text opacity*/
// var wrapper = document.getElementsByClassName("text-left-1")[0];
// wrapper.style.opacity="1";
// wrapper.innerHTML = wrapper.textContent.replace(/./g,"<span>$&</span>");

// var spans = wrapper.getElementsByTagName("span");

// for(var i=0;i<spans.length;i++){
//   spans[i].style.animationDelay = i*80+"ms";
// } 
/* animation text opacity*/



/* animation on scroll*/
ScrollOut({
	targets: ".text-left-1,.cta-textline.prof,.cta-textline.advertising,.cta-textline-1.prof,.cta-textline-1.advertising,.cta-textline-1.und,.sign-anim"
})
/* animation on scroll*/



baguetteBox.run(".gallery-1", {
    animation: 'fadeIn',
    noScrollbars: false
});





