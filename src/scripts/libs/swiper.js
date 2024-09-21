/* eslint-disable no-unused-vars */
'use strict';

const Swiper = require('swiper').default;
const { Navigation } = require('swiper/modules');

require('swiper/swiper-bundle.css');

const SWIPER_SELECTOR = '.swiper';
const NEXT_BTN_SELECTOR = '.swiper__button--next';
const PREV_BTN_SELECTOR = '.swiper__button--prev';

function initSwiper() {
  const swiper = new Swiper(SWIPER_SELECTOR, {
    modules: [Navigation],
    navigation: {
      nextEl: NEXT_BTN_SELECTOR,
      prevEl: PREV_BTN_SELECTOR,
    },
    loop: true,
  });
}

module.exports = {
  initSwiper,
};
