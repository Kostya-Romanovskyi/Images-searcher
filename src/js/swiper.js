new Swiper('.swiper', {
  //arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  simulateTouch: false,
  // control keyboard
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  //autoheight
  autoheight: true,
  spaceBetween: 200,
});
