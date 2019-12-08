var mySwiper = new Swiper('.swiperRoulete', {
  speed: 40,

  spaceBetween: 10,

  centeredSlides: true,

  slidesPerView: 15,

  freeMode: true,

  freeModeMomentumRatio: 14,

  initialSlide: 1,

  loop: true,

  freeModeMomentum: true,

  longSwipesMs: 5,

  freeModeMomentumBounceRatio: 3,

  loopedSlides: 50,


});

var mySwiper = document.querySelector('.swiperRoulete').swiper;
let green = document.querySelector('.green');
mySwiper.on('progress', function () {
  green.style.strokeDasharray = 50;
  green.style.strokeDashoffset -= 1;
});

mySwiper.slideNext();