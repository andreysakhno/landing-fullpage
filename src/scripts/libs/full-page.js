'use strict';

function initFullPage() {
  const MAIN_SELECTOR = '.page__main';
  const SECTION_SELECTOR = '.page__section';
  const BTN_SELECTOR = '.button--next';

  const main = document.querySelector(MAIN_SELECTOR);
  let currentStep = 0;
  const totalSteps = document.querySelectorAll(SECTION_SELECTOR).length;

  document.querySelectorAll(BTN_SELECTOR).forEach((button) => {
    button.addEventListener('click', () => {
      if (currentStep < totalSteps - 1) {
        currentStep++;
        main.style.transform = `translateX(-${currentStep * 100}vw)`;
      }
    });
  });
}

module.exports = {
  initFullPage,
};
