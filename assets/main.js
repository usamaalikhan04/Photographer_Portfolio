document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slide");
  let currentSlide = 0;

  function showSlide() {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    slides[currentSlide].style.display = "block";
  }

  function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide();
  }

  showSlide();

  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");

  prevButton.addEventListener("click", function () {
    changeSlide(-1);
  });

  nextButton.addEventListener("click", function () {
    changeSlide(1);
  });
});
