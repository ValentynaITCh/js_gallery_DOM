'use strict';

const mainImg = document.querySelector('#largeImg');
const anchor = document.querySelectorAll('a');

anchor.forEach((a) => {
  a.addEventListener('click', function (e) {
    e.preventDefault();

    const targetImg = e.target.closest('a');

    if (targetImg) {
      const source = targetImg.getAttribute('href');

      mainImg.setAttribute('src', source);
    }
  });
});
