import Swiper, { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Autoplay, Navigation, Scrollbar, Pagination]);

const initializeHeroCarousel = (customClass, multislide) => {
  new Swiper(`.swiper-container.${customClass}`, {
    loop: multislide,
    watchOverflow: true,

    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

const initializeRowCarousel = (customClass) => {
  new Swiper(`.swiper-container.${customClass}`, {
    direction: "horizontal",
    slidesPerView: "auto",
    slidesPerGroup: 2,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
};

export { initializeHeroCarousel, initializeRowCarousel };
