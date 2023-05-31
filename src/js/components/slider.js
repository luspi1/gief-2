import { Swiper } from "swiper/bundle"


// Инициализация слайдеров

export const swiperHeader = new Swiper('.news-item-page__slider', {
  navigation: {
    nextEl: '.news-item-page__slider-button-next',
    prevEl: '.news-item-page__slider-button-prev'
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },

  slidesPerView: 1,
  spaceBetween: 5,
})
