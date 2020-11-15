var mySwiper = new Swiper(".customers-swiper", {
  speed: 400,
  spaceBetween: 50,
  slidesPerView: 'auto',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  centeredSlides: true,
});

const swiperPrev = document.querySelector('#prevSwiper');
const swiperNext = document.querySelector('#nextSwiper');

swiperPrev.addEventListener('click', function() {
    mySwiper.slidePrev();
});
swiperNext.addEventListener('click', function() {
    mySwiper.slideNext();
});