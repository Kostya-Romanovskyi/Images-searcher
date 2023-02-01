const home = document.querySelector('[name="home"]');
const howItMade = document.querySelector('[name="how-it`s-made"]');
const ourProducts = document.querySelector('[name="our-products"]');
const contacts = document.querySelector('[name="contacts"]');
const wrap = document.getElementById('header__mobile-wrapp');
const btnMenuOpen = document.querySelector('[data-menu-open]');
const mainBtn = document.getElementById('modal-buy-now-open');

home.addEventListener('click', onRemoveListHome);
howItMade.addEventListener('click', onRemoveListMade);
ourProducts.addEventListener('click', onRemoveListProducts);
contacts.addEventListener('click', onRemoveListContacts);

function onRemoveListHome() {
  wrap.classList.remove('is-open');
  btnMenuOpen.classList.remove('is-open');
  mainBtn.classList.remove('tablet__btn--none');
}
function onRemoveListMade() {
  wrap.classList.remove('is-open');
  btnMenuOpen.classList.remove('is-open');
  mainBtn.classList.remove('tablet__btn--none');
}
function onRemoveListProducts() {
  wrap.classList.remove('is-open');
  btnMenuOpen.classList.remove('is-open');
  mainBtn.classList.remove('tablet__btn--none');
}
function onRemoveListContacts() {
  wrap.classList.remove('is-open');
  btnMenuOpen.classList.remove('is-open');
  mainBtn.classList.remove('tablet__btn--none');
}
