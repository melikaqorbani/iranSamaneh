



$(function() {
  
  initDropDowns($("div.shy-menu"));

});

function initDropDowns(allMenus) {

  allMenus.children(".shy-menu-hamburger").on("click", function() {
    
    var thisTrigger = jQuery(this),
      thisMenu = thisTrigger.parent(),
      thisPanel = thisTrigger.next();

    if (thisMenu.hasClass("is-open")) {

          thisMenu.removeClass("is-open");
      
          jQuery(document).off("click");                                 
          thisPanel.off("click");

    } else {      
      
        allMenus.removeClass("is-open");  
      thisMenu.addClass("is-open");
  
      jQuery(document).on("click", function() {
        allMenus.removeClass("is-open");
      });
      thisPanel.on("click", function(e) {
        e.stopPropagation();
      });
    }
    
    return false;
  });
}





var swiper = new Swiper(".mySwiper", {
  autoplay:true,
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
console.log(swiper)

    var swiper = new Swiper(".mySwiper2", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
      
    });

$(".sliders").hover(function (e) {
  var index = parseInt($(this).attr("myIndex"));
  swiper.slideTo(index-1);
});




$(".province-block").on("click", function () {
  $(".ostanitemsSelected").load("ajax/test.html");
});

$(document).ready(function () {
  $(".nav-menu").hide();
  $(".banner-backdrops").hide();
});

$(".hamberger-menu").click(function () {
  $(".nav-menu").show();
  $(".banner-backdrops").show();
});

$(".hamberger-menu").click(function () {
  $("body").css("overflow", "hidden");
});

$(".menu-toggle").click(function () {
  $(".nav-menu").hide();
  $(".banner-backdrops").hide();
});

$(".banner-backdrops").click(function () {
  $(this).hide();
  $(".nav-menu").hide();
});

// var swiper3 = new Swiper(".myScroll", {
//   direction: "vertical",
//   slidesPerView: "auto",
//   freeMode: true,
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
//   mousewheel: true,
// });
