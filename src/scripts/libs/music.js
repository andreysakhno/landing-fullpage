'use strict';

function initMusic() {
  const MUSIC_BTN_SELECTOR = '.music';
  const MUSIC_SELECTOR = '.music-container';
  const MUSIC_MUTED = 'music--muted';

  const musicButton = document.querySelector(MUSIC_BTN_SELECTOR);
  const backgroundMusic = document.querySelector(MUSIC_SELECTOR);

  let isMuted = true;

  musicButton.addEventListener('click', () => {
    if (isMuted) {
      backgroundMusic.play();
      musicButton.classList.remove(MUSIC_MUTED);
    } else {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;
      musicButton.classList.add(MUSIC_MUTED);
    }
    isMuted = !isMuted;
  });
}

module.exports = {
  initMusic,
};
