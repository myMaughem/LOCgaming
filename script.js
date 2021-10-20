let offset = 0;
const sliderLine = document.querySelector('.header__slider-line');

function sliderStart() {
  offset += 750;
  sliderLine.style.left = -offset + 'px';
  if (offset >= 750*3) {
    offset = -750;
  }
  autoSlider();
}

function autoSlider () {
  setTimeout(opacity, 3000);
  setTimeout(sliderStart, 4000)
}

autoSlider();

function opacity() {
  sliderLine.animate({opacity: 0}, 1000);
}
