$(document).ready(function(){
    $('.wol').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

$(window).on('scroll', function(){
   if ($(window).scrollTop() > 0) {
     $('header').addClass('fixed-header');
      }
   else {
     $('header').removeClass('fixed-header');
   };
});


$(document).ready(function(){
    $('.owl-banner-2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ["<img src='./images/arrow.png'>","<img src='./images/arrowright.png'>"],
        autoplay: false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:7
            },
            1000:{
                items:4
            }
        }
    });
});




var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.banner-caption').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-200, Math.min(500, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-200, Math.min(500, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();





//image move

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground1() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.girl').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground1);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-200, Math.min(500, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-200, Math.min(500, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground1();





// Accordion



jQuery(document).ready(function($) {
            "use strict";
            //  TESTIMONIALS CAROUSEL HOOK
            $('#customers-testimonials').owlCarousel({
                loop: true,
                center: true,
                items: 3,
                margin: 0,
                autoplay: false,
                dots:true,
                autoplayTimeout: 8500,
                smartSpeed: 450,
                responsive: {
                  0: {
                    items: 1
                  },
                  768: {
                    items: 2
                  },
                  1170: {
                    items: 3
                  }
                }
            });
          });




