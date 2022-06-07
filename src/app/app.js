import "normalize.css";
import Swiper, { Autoplay, Scrollbar, FreeMode, Thumbs } from "swiper";
// import "swiper/swiper-bundle.min.css";
import "swiper/css/bundle";

function initPartnersSlider() {
  const selector = document.querySelector(".partners-slider") ?? null;
  console.log(selector);
  if (selector === null) return;

  const slider = new Swiper(selector, {
    modules: [Scrollbar, Autoplay],
    effect: "slide",
    loop: true,
    spaceBetween: 30,
    slidesPerView: 6,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    autoplay: {
      delay: 3000,
    },
  });
  slider.init();
}

function initSingleProductThumbsSlider() {
  var swiper = new Swiper(".thumbs-slider", {
    modules: [FreeMode],
    spaceBetween: 30,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".main-thumbs-slider", {
    modules: [Thumbs],
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });
}

window.addEventListener("load", (e) => {
  initPartnersSlider();
  initSingleProductThumbsSlider();
});
