// Your code here...
$(document).ready(function(){
  $('.your-class').slick({
    
    prevArrow:$('.main_step-by-step__button-prev'),
    nextArrow:$('.main_step-by-step__button-next'),
    slidesToShow: 3,
    speed: 300,
    centerPadding:50,
  });
  $(".fa-search").click(function(){

    $(".wrap, .input").toggleClass("active");

    $("input[type='text']").focus();

  });

  

});


  

