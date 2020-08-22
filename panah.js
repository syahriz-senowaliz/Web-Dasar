$(document).ready(function(){
    $(".work-item > img").mouseenter(
     function(){
     });
    $(window).scroll(function(){
      hiddeArrowUp();
    });
  
   $(".goTop").click(function(){
     srollToPosition($("html"));
   });
  
  function srollToPosition(position){
    $("html,body").animate({
      scrollTop:position.offset().top
    },1500);
  }
  
  function hiddeArrowUp(){
    var currentPosition = $(window).scrollTop();
    if(currentPosition < 200){
    $(".goTop").hide();
    }
    else {
      $(".goTop").show();
    }
  }
   });
  