const sliderContainer = document.querySelector(".image-slider__images");
const sliderButtons = document.querySelectorAll(".image-slider__radio");

sliderButtons.forEach((button, index) => button.addEventListener("click", () => 
    sliderContainer.scrollTo(sliderContainer.getBoundingClientRect().width * index, 0)
));