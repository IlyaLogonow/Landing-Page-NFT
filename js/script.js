/*HEADER*/
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const mainNav = document.querySelector('.main-nav');
  const socialList = document.querySelector('.social-list');
  const headerRow = document.querySelector('.main-hero__row');

  // Анимация появления header
  setTimeout(function() {
      headerRow.classList.add('show');
  }, 500);

  burger.addEventListener('click', function() {
      headerRow.classList.toggle('active');
      burger.classList.toggle('active');
  });
});
/*HEADER-END*/

/*SLIDER*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      560: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      300: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });
  
/*SLIDER-END*/

/*FAQ*/
document.addEventListener('DOMContentLoaded', function() {
    const toggleHeaders = document.querySelectorAll('.toggle-header');
  
    toggleHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.toggle-icon');
  
            if (content.classList.contains('show')) {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.classList.remove('show');
                content.style.maxHeight = '0';
                icon.textContent = '+';
                this.classList.remove('active');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.classList.add('show');
                icon.textContent = '×';
                this.classList.add('active');
            }
        });
    });
  });
/*FAQ-END*/
  
  
