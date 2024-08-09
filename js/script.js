var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleHeaders = document.querySelectorAll('.toggle-header');

  toggleHeaders.forEach(header => {
      header.addEventListener('click', function() {
          const content = this.nextElementSibling;
          const icon = this.querySelector('.toggle-icon');

          if (content.classList.contains('show')) {
              content.classList.remove('show');
              icon.textContent = '+';
          } else {
              content.classList.add('show');
              icon.textContent = '×';
          }
      });
  });
});