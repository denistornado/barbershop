const test = [
  [
    {href: 'z8M0Fa1JVco',class:'step-by-step'},
    {href: 'Wi2KcdoCuo4',class:'step-by-step'},
    {href: '8H6dYUgQKB8',class:'step-by-step'},
    {href: 'PZjGrmHdFME',class:'step-by-step'},
    {href: '_wLGr24VeoI',class:'step-by-step'},
    {href: 'DG4FAU5qmMY',class:'step-by-step'},
    
],
 
  [
  
  
    {href: 'RmNWNLXmswk',class:'craft-education'},
    {href: '-tztXOz8Vc0',class:'craft-education'},
    {href: 'kUfIVtyydgQ',class:'craft-education'},
    {href: 'kUfIVtyydgQ',class:'craft-education'},
    {href: 'kUfIVtyydgQ',class:'craft-education'},
  
],
   [
      {href: 'PZjGrmHdFME',class:'inspiration'},
      {href: 'vz0k8O-Ef9Y',class:'inspiration'},
      {href: '6oPBFnsqJW8',class:'inspiration'},
      {href: '6oPBFnsqJW8',class:'inspiration'},
      {href: '6oPBFnsqJW8',class:'inspiration'},
      {href: '6oPBFnsqJW8',class:'inspiration'},
      
  ],
 
 
  
  
  ];
  const a=5;
  

$(document).ready(function(){
  for(var i=0;i<test.length;i++){
  $(`.${test[i][0].class}`).slick({
   
    prevArrow:$(`.content-${test[i][0].class}_gallery__button-prev`),
    nextArrow:$(`.content-${test[i][0].class}_gallery__button-next`),
    slidesToShow: 3,
    speed: 300,
    centerPadding:50,
    responsive: [
      {
        breakpoint: 900
        
        
        
        
        
        ,
        settings: {
          slidesToShow: 2,
          speed: 300,
          centerPadding:50,
      
        }
      },
     
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  
  }); 
  console.log(`.content-${test[i][0].class}__button-prev`);
}

 
  $(".fa-search").click(function(){

    $(".top__wrap, .top__input").toggleClass("active");

    $("top__input[type='search']").focus();

  });
  
  

});



var fired_button = $("button").val();
$("button").click(function() {
  var fired_button = $(this).val();

  const shift = parseInt((getComputedStyle(document.querySelector(`.light-${fired_button}`)
  ).height)) ;

  const count_of_images=(document.querySelectorAll(`.light-${fired_button}`).length-1);
let height_of_line=count_of_images*shift;
const start=shift*3;


let first;
const view = parseInt((getComputedStyle(document.querySelector(`.content-${fired_button}_gallery-mobile__view`)
).height)) ;

if(view !== height_of_line){
document.getElementsByClassName(`content-${fired_button}_gallery-mobile__view`)[0].style.height = height_of_line+'px'; 
document.getElementById(`${fired_button}`).innerHTML = 'Hide'

}
else{
  
  document.getElementsByClassName(`content-${fired_button}_gallery-mobile__view`)[0].style.height = start+'px';
  document.getElementById(`${fired_button}`).innerHTML = 'Load more'
}
console.log(`.content-${fired_button}_gallery-mobile__view`);
});

/*
function User(name) {

  this.name = name;

  this.sayHi = function() {
    for(var i=0;i<test.length;i++){
    const shift = parseInt((getComputedStyle(document.querySelector(`.${test[i][0].class}`)
    ).height)) ;
  alert(`.${test[i][0].class}`);
    const count_of_images=(document.querySelectorAll(`.${test[i][0].class}`).length);
  let height_of_line=count_of_images*shift;
  const start=shift*3;
  
  
  let first;
  const view = parseInt((getComputedStyle(document.querySelector(`.content_${test[i][0].class}_gallery-mobile__view`)
  ).height)) ;
  
  if(view !== height_of_line){
  document.getElementsByClassName(`content_${test[i][0].class}_gallery-mobile__view`)[0].style.height = height_of_line+'px'; 

  
  }
  else{
    
    document.getElementsByClassName(`content_${test[i][0].class}_gallery-mobile__view`)[0].style.height = start+'px';
   
  }
}
  };
}
for(var i=0;i<test.length;i++){
var ivan = new User(`${test[i][0].class}`);


}

for(var i=0;i<test.length;i++){
  $(`#${test[i][0].class}`).click(function(){
  
  
  const shift = parseInt((getComputedStyle(document.querySelector(`.${test[i][0].class}`)
  ).height)) ;

  const count_of_images=(document.querySelectorAll(`.${test[i][0].class}`).length);
let height_of_line=count_of_images*shift;
const start=shift*3;


let first;
const view = parseInt((getComputedStyle(document.querySelector(`.content_${test[i][0].class}_gallery-mobile__view`)
).height)) ;

if(view !== height_of_line){
document.getElementsByClassName(`content_${test[i][0].class}_gallery-mobile__view`)[0].style.height = height_of_line+'px'; 
document.getElementById('load').textContent = "Hide";

}
else{
  
  document.getElementsByClassName(`content_${test[i][0].class}_gallery-mobile__view`)[0].style.height = start+'px';
  document.getElementById('load').textContent = "Load more";
}

alert(`tt.${test[i][0].class}`) ;
});
//load.addEventListener("click", handler1);

/*
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

inspiration_load.addEventListener("click",hand2);

  */

