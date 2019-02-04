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

function handler1(){
  
  
  const shift = parseInt((getComputedStyle(document.querySelector(".light")
  ).height)) ;

  const count_of_images=(document.querySelectorAll('.light').length);
let height_of_line=count_of_images*shift;
const start=shift*3;


let first;
const view = parseInt((getComputedStyle(document.querySelector(".content_step-by-step_gallery-mobile__view")
).height)) ;

if(view !== height_of_line){
 
document.getElementsByClassName('content_step-by-step_gallery-mobile__view')[0].style.height = height_of_line+'px'; 
document.getElementById('load').textContent = "Hide";

}
else{
  
  document.getElementsByClassName('content_step-by-step_gallery-mobile__view')[0].style.height = start+'px';
  document.getElementById('load').textContent = "Load more";
}

  
}
load.addEventListener("click", handler1);
function hand(){
  
  console.log("s");
  const shift = parseInt((getComputedStyle(document.querySelector(".craft-education-light")
  ).height)) ;

  const count_of_images=(document.querySelectorAll('.craft-education-light').length);
let height_of_line=count_of_images*shift;
const start=shift*3;


let first;
const view = parseInt((getComputedStyle(document.querySelector(".content_craft-education_gallery-mobile__view")
).height)) ;

if(view !== height_of_line){
 
document.getElementsByClassName('content_craft-education_gallery-mobile__view')[0].style.height = height_of_line+'px'; 
}
else{
  
  document.getElementsByClassName('content_craft-education_gallery-mobile__view')[0].style.height = start+'px';
}

}

education_load.addEventListener("click", hand);
function hand2(){
  
  console.log("s");
  const shift = parseInt((getComputedStyle(document.querySelector(".inspiration-light")
  ).height)) ;

  const count_of_images=(document.querySelectorAll('.inspiration-light').length);
let height_of_line=count_of_images*shift;
const start=shift*3;


let first;
const view = parseInt((getComputedStyle(document.querySelector(".content_inspiration_gallery-mobile__view")
).height)) ;

if(view !== height_of_line){
 
document.getElementsByClassName('content_inspiration_gallery-mobile__view')[0].style.height = height_of_line+'px'; 
}
else{
  
  document.getElementsByClassName('content_inspiration_gallery-mobile__view')[0].style.height = start+'px';
}

}

inspiration_load.addEventListener("click",hand2)

  

