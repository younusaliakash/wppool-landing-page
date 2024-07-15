const prevBtn = document.querySelector(".custom-prev-button")
const nextBtn = document.querySelector(".custom-next-button")


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".custom-next-button",
        prevEl: ".custom-prev-button",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
    on: {
        init: function (swiper) {
            updateCustomPagination(swiper);
            // updateCustomSliderLeftMargin(swiper);
        },
        slideChange: function (swiper) {
            updateCustomPagination(swiper);
            // updateCustomSliderLeftMargin(swiper);
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

nextBtn.addEventListener('click', () => {
    updateCustomSliderLeftMargin()
})
prevBtn.addEventListener('click', () => {
    updateCustomSliderLeftMargin()
})


function updateCustomSliderLeftMargin() {
    const activeSlideEl = document.querySelector(".mySwiper .swiper-slide-active")
    const activeNumber = parseInt(activeSlideEl.getAttribute("aria-label").substring(0, 1))

    const slides = document.querySelectorAll('.swiper-slide');

    slides.forEach((slide, index) => {
        slide.style.marginLeft = '0px';
    });

    const currentIndex = activeNumber
    const prevIndex = activeNumber - 1
    const nextIndex = activeNumber + 1

    console.log("currentIndex:" + currentIndex, "nextIndex:" + nextIndex, "prevIndex:" + prevIndex, "activeIndex:" + (activeNumber + 1))
    console.log(window.screen.width)

    if(window.screen.width > 1200) {
        if (currentIndex > 2) {
            console.log("currentIndex:" + currentIndex, "nextIndex:" + nextIndex, "prevIndex:" + prevIndex, "activeIndex:" + (activeNumber + 1))
            activeSlideEl.style.marginLeft = (currentIndex * 20) + (20 * (currentIndex - 2)) + "px";
            console.log((currentIndex * 20) + (20 * (currentIndex - 2)) + "px")
        } else if (currentIndex === 2) {
            activeSlideEl.style.marginLeft = (currentIndex * 20) + "px";
        }
    }


}