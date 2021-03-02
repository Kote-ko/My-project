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

