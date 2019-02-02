// Your code here...
$(document).ready(function(){
  $('.your-class').slick({
    
    prevArrow:$('.content_step-by-step_gallery__button-prev'),
    nextArrow:$('.content_step-by-step_gallery__button-next'),
    slidesToShow: 3,
    speed: 300,
    centerPadding:50,
  });

  $('.your-class2').slick({
    
    prevArrow:$('.content_craft-education_gallery__button-prev'),
    nextArrow:$('.content_craft-education_gallery__button-next'),
    slidesToShow: 3,
    speed: 300,
    centerPadding:50,
  });
  $('.your-class3').slick({
    
    prevArrow:$('.content_inspiration_gallery__button-prev'),
    nextArrow:$('.content_inspiration_gallery__button-next'),
    slidesToShow: 3,
    speed: 300,
    centerPadding:50,
  });
  $(".fa-search").click(function(){

    $(".header_top__wrap, .header_top__input").toggleClass("active");

    $("header_top__input[type='text']").focus();

  });

  

});


  

