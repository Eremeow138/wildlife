const toggle = document.querySelector('.toggle');

const navbar = document.querySelector('.navbar');

const footer = document.querySelector('.footer');

const main = document.querySelector('.main_content');

const logotype = document.querySelector('.logotype');

toggle.addEventListener('click', () => {
  navbar.classList.toggle('slide-left');
  footer.classList.toggle('slide-left');
  main.classList.toggle('slide-left');
  logotype.classList.toggle('slide-left');
  toggle.classList.toggle('toggle_clicked');
});
