const container1 = document.querySelector(' .swiper1');
const container2 = document.querySelector(' .swiper2');

function initMainSwiper() {
  var mySwiper1 = new Swiper('.swiper1', {
    speed: 40,

    slidesPerView: 7,

    spaceBetween: 22,

    initialSlide: 0,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: document.querySelector('.nextbottom'),
      prevEl: document.querySelector('.prevbottom'),
    },



  });
}

function initMainSwiper2() {
  var mySwiper1 = new Swiper('.swiper2', {
    speed: 40,

    slidesPerView: 3,

    spaceBetween: 22,

    initialSlide: 1,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: document.querySelector('.naxtop'),
      prevEl: document.querySelector('.prevtop'),
    },


  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  initMainSwiper();
  initMainSwiper2();
});