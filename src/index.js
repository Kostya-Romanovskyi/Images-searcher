// Підключення бібліотеки Notify
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Підключення файлу запиту
import GalleryApiService from './js/fetch-search';

//Підключення розмітки
import onCreateMarkup from './js/gallery-markup';

const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');
const galleryEl = document.querySelector('.gallery');

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

const galleryApiService = new GalleryApiService();

// Функція запиту
function onSearch(e) {
  e.preventDefault();

  clearCardsContainer();

  galleryApiService.query = e.currentTarget.elements.searchQuery.value;
  galleryApiService.resetPage();

  if (!galleryApiService.query) {
    Notify.warning('Sorry, you need to write a keywords!!! Please try again.');
    loadMoreBtn.classList.remove('is-active');
    return;
  }

  galleryApiService.fetchCards().then(onCreateMarkup);

  if (clearCardsContainer) {
    loadMoreBtn.classList.remove('is-active');
  }
}
// Функція для кнопки завантажити ще
function onLoadMore() {
  galleryApiService.fetchCards().then(onCreateMarkup);
}

// Функція для перевірок повідомлень
export function onConditionСhecks(data) {
  if (data.total === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  } else if (galleryApiService.page === 1) {
    Notify.success(`Hooray! We found ${data.totalHits} images.`);
  }

  if (galleryApiService.page < Math.ceil(data.totalHits / 40)) {
    loadMoreBtn.classList.add('is-active');
  } else {
    loadMoreBtn.classList.remove('is-active');
  }

  if (data.hits.length === 0 || galleryApiService.page === 1) {
    return;
  } else if (data.hits.length < 40) {
    Notify.info("We're sorry, but you've reached the end of search results.");
  }
}

// Очищення контенту
function clearCardsContainer() {
  galleryEl.innerHTML = '';
}
