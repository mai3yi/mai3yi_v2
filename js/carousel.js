document.addEventListener("DOMContentLoaded", () => {

  const carousel = document.querySelector(".project-carousel");
  if (!carousel) return;

  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const nextBtn = carousel.querySelector(".next");
  const prevBtn = carousel.querySelector(".prev");

  let currentIndex = 0;
  const totalSlides = slides.length;
  const intervalTime = 5000; 
  let autoScroll;

  function updateCarousel() {
    const slideWidth = carousel.clientWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    
    slides.forEach((slide, index) => {
      const video = slide.querySelector("video");
      if (video && index !== currentIndex) {
        video.pause();
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  function startAutoScroll() {
    autoScroll = setInterval(nextSlide, intervalTime);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  nextBtn?.addEventListener("click", () => {
    nextSlide();
    stopAutoScroll();
    startAutoScroll();
  });

  prevBtn?.addEventListener("click", () => {
    prevSlide();
    stopAutoScroll();
    startAutoScroll();
  });

  carousel.addEventListener("mouseenter", stopAutoScroll);
  carousel.addEventListener("mouseleave", startAutoScroll);

  window.addEventListener("resize", updateCarousel);

  updateCarousel();
  startAutoScroll();

});
