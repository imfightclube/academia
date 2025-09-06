const bntmenu = document.querySelector(".header__menu-icon");

bntmenu.addEventListener('click', () => {
  const nav = document.querySelector('.menu');
  nav.classList.toggle('ativo');
});