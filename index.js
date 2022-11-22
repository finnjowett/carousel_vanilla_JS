let slidePosition = 0;
const slides = document.querySelectorAll(".item");
const totalSlides = slides.length;

document.querySelector("#next").addEventListener("click", () => {
  moveToNext();
});

document.querySelector("#prev").addEventListener("click", () => {
  moveToPrev();
});

function updateSlidePosition() {
  slides.forEach((e) => {
    e.classList.remove("item-visible");
    e.classList.add("item-hidden");
  });
  slides[slidePosition].classList.add("item-visible");
}

function moveToNext() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrev() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}
