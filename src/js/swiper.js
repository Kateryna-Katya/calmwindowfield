import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.my-swiper', {
  modules: [Navigation, Autoplay],

  loop: true,
  speed: 800,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },

  slidesPerView: 1.2,
  spaceBetween: 16,

  breakpoints: {
    1440: {
      slidesPerView: 3.4,
      spaceBetween: 24,
    },
  },
});