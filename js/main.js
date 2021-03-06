/*  SWIPER  */

let SwiperServices = new Swiper(".mySwiper", {
    loop: true, // бесконечный слайдер
    mousewheel: {  // прокрутка мышью с помощью колеса
        sensitivity: 1,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      600: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      900: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
});

/*  MIXITUP FILTER FEATURED  */

let mixerFeatured = mixitup('.featured-content', {
   selectors: {
   target: '.featured-card'
   },
   animation: {
   duration: 300
   }
});

/*  link active featured  */

const linkFeatured = document.querySelectorAll('.featured-item')

function activeFeatured(){
  linkFeatured.forEach(i=> i.classList.remove('active-featured'))
  this.classList.add('active-featured')
}
linkFeatured.forEach(i=> i.addEventListener('click', activeFeatured))

/*  POPUP  */

$(function(){

  let radio = document.getElementsByName('choice'); // form replacement
  for (let i = 0; i < radio.length; i++) {
    radio[i].onchange = function() {
    if (this.value == "v") {  // form for a lan
      console.log('1');
      $('.lan').addClass('lan-active');
      $('.viz').removeClass('viz-active');
      $('.cms').removeClass('cms-active');
      $('.lan-choice').removeClass('hidden_question');
      $('.lan-choice').addClass('active_question');
      $('.viz-choice').removeClass('active_question');
      $('.viz-choice').addClass('hidden_question');
      $('.cms-choice').removeClass('active_question');
      $('.cms-choice').addClass('hidden_question');
    }
    else if (this.value == "b") {  // form for a viz
      console.log('2');
      $('.viz').addClass('viz-active');
      $('.lan').removeClass('lan-active');
      $('.cms').removeClass('cms-active');
      $('.viz-choice').removeClass('hidden_question');
      $('.viz-choice').addClass('active_question');
      $('.lan-choice').removeClass('active_question');
      $('.lan-choice').addClass('hidden_question');
      $('.cms-choice').removeClass('active_question');
      $('.cms-choice').addClass('hidden_question');
    }
    else if (this.value == "c") {  // form for a cms
      console.log('3');
      $('.cms').addClass('cms-active');
      $('.lan').removeClass('lan-active');
      $('.viz').removeClass('viz-active');
      $('.cms-choice').removeClass('hidden_question');
      $('.cms-choice').addClass('active_question');
      $('.lan-choice').removeClass('active_question');
      $('.lan-choice').addClass('hidden_question');
      $('.viz-choice').removeClass('active_question');
      $('.viz-choice').addClass('hidden_question');
    }
  }
}
});

/*  SPOILER  */

$(document).ready(function() {

  $('.spoiler-title').click(function(event) {

    if ($('.spoiler').hasClass('one')) {
      $('.spoiler-title').not($(this)).removeClass('active');
      $('.spoiler-text').not($(this).next()).slideUp(300);
    }

    $(this).toggleClass('active').next().slideToggle(300);
  });
});

/*  MENU  */

$('.header').click(function() {
  $(this).toggleClass("header-active");
});
