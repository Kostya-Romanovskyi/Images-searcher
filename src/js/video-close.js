const video = document.querySelector('.video');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const cross = document.querySelector('.read-more__modal-button');

overlay.addEventListener('click', onPauseVideo);
cross.addEventListener('click', onPauseVideo);

function onPauseVideo() {
  if (body.classList) {
    video.pause();
  }
}
