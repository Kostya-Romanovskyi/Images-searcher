import smoothscroll from 'smoothscroll-polyfill';

(() => {
  const menuBtnRef = document.querySelector('[data-menu-open]');
  const tabletBtnRef = document.querySelector('.tablet__btn');

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    tabletBtnRef.classList.toggle('tablet__btn--none');
  });
})();

const btnToTop = document.querySelector('.back-button');
btnToTop.addEventListener('click', onTop);

function onTop(e) {
  e.preventDefault();
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}
