const sliderContainer = document.querySelector(".image-slider__images")
const sliderDots = Array.from(document.querySelectorAll(".image-slider__dot"))
const sliderButtons = document.querySelectorAll(".image-slider__button")

sliderDots.forEach((dot, index) => dot.addEventListener("click", () => 
    sliderContainer.scrollTo(sliderContainer.getBoundingClientRect().width * index, 0)
))

sliderButtons.forEach(button => button.addEventListener("click", () => {
    const currentIndex = sliderDots.indexOf(document.querySelector(".image-slider__dot:checked"))

    if (button.classList.contains("image-slider__button--left")) {
        sliderDots[currentIndex - 1]?.click()
    } else {
        sliderDots[currentIndex + 1]?.click()
    }
}))