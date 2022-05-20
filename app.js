const navBtn = document.querySelector('#nav-btn');
const navbar = document.querySelector('#navbar');
const navClose = document.querySelector('#nav-close');

navBtn.addEventListener('click', function () {
  navbar.classList.add('showNav');
});

navClose.addEventListener('click', function () {
  navbar.classList.remove('showNav');
});
