
new Swiper(".mySwiper", {
    slidesPerView: "auto",
    // spaceBetween: ,
    // want to autoplay  then uncomment it
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });
