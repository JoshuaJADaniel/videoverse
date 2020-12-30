import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body,
  #root {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: "Comfortaa", sans-serif;
  }
  
  body,
  #root {
    min-height: 100%;
  }
  
  ::-webkit-scrollbar {
    width: 16px;
    background: ${(props) => props.theme.scrollbarBackground};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.scrollbarThumb};
  }
  
  .carousel-inner,
  .carousel-item {
    height: 100%;
  }
  
  body.using-mouse .carousel-control-prev:focus span:first-child,
  body.using-mouse .carousel-control-next:focus span:first-child {
    outline: 0;
  }
  
  .carousel-control-prev:focus span:first-child, 
  .carousel-control-next:focus span:first-child {
    outline-color: -webkit-focus-ring-color;
    outline-offset: 3px;
    outline-style: auto;
    outline-width: 1px;
  }
    
  div.swiper-slide:not(:last-child) {
    margin-right: 20px;
  }
  
  div.swiper-scrollbar {
    background: ${(props) => props.theme.carouselScrollbarBackground};
  }
  
  div.swiper-scrollbar-drag {
    background: ${(props) => props.theme.carouselScrollbar};
  }
  
  button.swiper-button-prev:after,
  button.swiper-button-next:after {
    content: '';
  }
  
  button.swiper-button-prev,
  button.swiper-button-next  {
    border: none;
    transition: all 0.2s ease;
    background-position: center;
    background-repeat: no-repeat;
    background-color: white;
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
  
  body.using-mouse button.swiper-button-prev:focus,
  body.using-mouse button.swiper-button-next:focus {
    outline: none;
  }
  
  button.swiper-button-prev:not(.swiper-button-disabled):hover,
  button.swiper-button-next:not(.swiper-button-disabled):hover {
    transform: scale(1.1);
  }
  
  button.swiper-button-prev {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' stroke-width='1.325' stroke-linecap='round' stroke-linejoin='round' stroke='currentColor' fill='none' class='sc-bdfBwQ dLlPUp'%3E%3Cpolyline points='15 4 6 12 15 20'%3E%3C/polyline%3E%3C/svg%3E");
  }
  
  button.swiper-button-next {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' stroke-width='1.325' stroke-linecap='round' stroke-linejoin='round' stroke='currentColor' fill='none' class='sc-bdfBwQ dLlPUp'%3E%3Cpolyline points='9 4 18 12 9 20'%3E%3C/polyline%3E%3C/svg%3E");
  }
  
  button.swiper-button-prev.swiper-button-disabled,
  button.swiper-button-next.swiper-button-disabled {
    pointer-events: all;
  }
`;

export default GlobalStyles;
