// Your code here...
$(document).ready(function(){
  $('.your-class').slick({
    
    prevArrow:$('.main_step-by-step_prev__button'),
    nextArrow:$('.main_step-by-step_next__button'),
    slidesToShow: 3,
    speed: 300,
    centerPadding:50,
  });

  $('.your-class2').slick({
    
    prevArrow:$('.main_craft-education_prev__button'),
    nextArrow:$('.main_craft-education_next__button'),
    slidesToShow: 3,
    speed: 300,
    centerPadding:50,
  });
  $('.your-class3').slick({
    
    prevArrow:$('.main_inspiration_prev__button'),
    nextArrow:$('.main_inspiration_next__button'),
    slidesToShow: 3,
    speed: 300,
    centerPadding:50,
  });
  $(".fa-search").click(function(){

    $(".wrap, .input").toggleClass("active");

    $("input[type='text']").focus();

  });

  

});


  

