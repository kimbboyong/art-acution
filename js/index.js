var swiper = new Swiper(".section04 .mySwiper", {
  autoplay: {
    delay: 2000,
  },
  loop: true,
  pagination: {
    el: ".section04 .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
var swiper = new Swiper(".sectionNews .mySwiper", {
  slidesPerView: 3.2,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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
