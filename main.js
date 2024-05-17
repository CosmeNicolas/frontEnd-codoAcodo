/* const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('active');
    }
}); */



document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const carouselItems = document.querySelectorAll('.carousel-item');
  
    let index = 0;
  
    function showItem(idx) {
      carouselItems.forEach((item, i) => {
        if (i === idx) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  
    function nextSlide() {
      index = (index + 1) % carouselItems.length;
      showItem(index);
    }
  
    function prevSlide() {
      index = (index - 1 + carouselItems.length) % carouselItems.length;
      showItem(index);
    }
  
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  });