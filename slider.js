const sliderContainer = document.querySelector(".image-slider__images")
const sliderDots = Array.from(document.querySelectorAll(".image-slider__dot"))
const sliderButtonLeft = document.querySelector(".image-slider__button--left")
const sliderButtonRight = document.querySelector(".image-slider__button--right")

const currentSlide = () => sliderDots.indexOf(document.querySelector(".image-slider__dot:checked"))

sliderButtonLeft.addEventListener("click", () => sliderDots[currentSlide() - 1]?.click())
sliderButtonRight.addEventListener("click", () => sliderDots[currentSlide() + 1]?.click())

sliderDots.forEach((dot, index) => dot.addEventListener("click", () => 
    sliderContainer.scrollTo(sliderContainer.getBoundingClientRect().width * index, 0)
))