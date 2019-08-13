"use strict";

$(document).ready(function(){
    console.log("jQuery veikia")
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:5,
        autoplay:true,
        autoplayTimeout:1200,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
            }
        }
    })
})


let burger = document.querySelector(".burger");
console.log(burger);

burger.addEventListener("click", function(){
	let meniu = document.querySelector(".main-nav");

	meniu.classList.toggle("show");
});

let burgery = document.querySelector(".burgery");
console.log(burgery);

burger.addEventListener("click", function(){
	let meniu = document.querySelector(".mainy-nav");

	meniu.classList.toggle("show");
});

