// Підключення бібліотеки LightBox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

//Підключення функції з перевірками
import { onConditionСhecks } from '../index';

const galleryEl = document.querySelector('.gallery');

var lightbox = new SimpleLightbox('.gallery a', {
  showCounter: false,
  captionsData: 'alt',
  captionDelay: 250,
  widthRatio: 0.9,
  heightRatio: 0.9,
});

//Створює розмітку
export default function onCreateMarkup(data) {
  const cardsMarkup = data.hits
    .map(
      item =>
        `<div class="photo-card"> <a href="${item.largeImageURL}">
            <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy"/>
            </a>
            <div class="info">
              <p class="info-item">
                <b>${item.likes}</b>
                <span>Likes</span>
              </p>
              <p class="info-item">
                <b>${item.views}</b>
                <span>Views</span>
              </p>
              <p class="info-item">
                <b>${item.comments}</b>
                <span>Comments<span>
              </p>
              <p class="info-item">
                <b>${item.downloads}</b>
                <span>Downloads</span>
              </p>
            </div>
          </div>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', cardsMarkup);

  onConditionСhecks(data);

  lightbox.refresh();
}
