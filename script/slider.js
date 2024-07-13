
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: ".custom-next-button",
        prevEl: ".custom-prev-button",
    },
    on: {
        init: function (swiper) {
            updateCustomPagination(swiper);
        },
        slideChange: function (swiper) {
            updateCustomPagination(swiper);
        }
    }
});

function updateCustomPagination(swiper) {
    var currentIndex = swiper.activeIndex + 1;
    var totalSlides = Math.ceil(swiper.slides.length - swiper.params.slidesPerView + 1);
    var nextIndex = currentIndex < totalSlides ? currentIndex + 1 : 1;

    document.getElementById('current-slide').textContent = currentIndex;
    document.getElementById('next-slide').textContent = nextIndex;
    document.getElementById('total-slides').textContent = totalSlides;
}