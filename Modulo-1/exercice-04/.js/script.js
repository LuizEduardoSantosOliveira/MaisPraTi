document.addEventListener('DOMContentLoaded', function() {
    window.menuShow = function() {
        let menuMobile = document.querySelector('.menu-mobile');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
        } else {
            menuMobile.classList.add('open');
        }
       
    };
});
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

