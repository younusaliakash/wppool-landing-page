const prevBtn = document.querySelector(".custom-prev-button");
const nextBtn = document.querySelector(".custom-next-button");

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
    var currentIndex = swiper.activeIndex + 1; // Swiper indices are 0-based
    var totalSlides = Math.ceil(swiper.slides.length - swiper.params.slidesPerView + 1);
    var nextIndex = currentIndex < totalSlides ? currentIndex + 1 : 1; // Loop back to 1 if at end

    document.getElementById('current-slide').textContent = currentIndex;
    document.getElementById('next-slide').textContent = nextIndex;
    document.getElementById('total-slides').textContent = totalSlides;
}

// function toggleNavButtons(swiper) {
//     var currentIndex = swiper.realIndex;
//     var totalSlides = swiper.slides.length - swiper.loopedSlides * 2;


//     if (currentIndex === 0) {
//         // prevBtn.disabled = true;
//         prevBtn.classList.add("disabled");
//     } else {
//         // prevBtn.disabled = false;
//         prevBtn.classList.remove("disabled");
//     }

//     if (currentIndex === totalSlides - 1) {
//         // nextBtn.disabled = true;
//         nextBtn.classList.add("disabled");
//     } else {
//         // nextBtn.disabled = false;
//         nextBtn.classList.remove("disabled");
//     }
// }
