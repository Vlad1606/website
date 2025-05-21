
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
  if (index >= slides.length) { slideIndex = 0; }
  if (index < 0) { slideIndex = slides.length - 1; }
  let offset = -slideIndex * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

showSlide(slideIndex);
