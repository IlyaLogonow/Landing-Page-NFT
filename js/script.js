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
