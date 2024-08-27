var swiper = new Swiper(".section03 .mySwiper", {
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".section03 .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

handleScrollTop();

function handleScrollTop() {
  const topBtn = document.querySelector(".scrollTopBtn");
  topBtn.addEventListener("click", () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  );
}

// var swiper = new Swiper(".section04 .mySwiper", {
//   slidesPerView: "auto",
//   spaceBetween: 30,
//   centeredSlides: true,
//   pagination: {
//     el: ".section04 .swiper-pagination",
//     clickable: true,
//   },
// });

// handleScrollTo();

// function handleScrollTo() {
//   const downText = document.querySelector(".scrollDownBtn");
//   downText.addEventListener("click", function () {

//     window.scrollTo(0, 870);
//   });
// }

// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);
// });
