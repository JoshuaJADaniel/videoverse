import Swiper, { Navigation, Scrollbar } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Navigation, Scrollbar]);

const initializeSwiper = () => {
  new Swiper(".swiper-container", {
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

export default initializeSwiper;
