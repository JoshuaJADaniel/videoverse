import Swiper, { Autoplay, Pagination } from "swiper";
import "swiper/swiper-bundle.css";

Swiper.use([Autoplay, Pagination]);

const initializeHeroCarousel = () => {
  new Swiper(".swiper-container", {
    loop: true,

    autoplay: {
      delay: 5000,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

export { initializeHeroCarousel };
