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
