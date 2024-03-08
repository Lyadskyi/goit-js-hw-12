// 1. Створюємо функцію для HTTP-запитів, яка створює запит на сервер

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import axios from 'axios';

import { inputEl, galleryImages, loaderEl, loadBtnEl, request, page } from '../main';

import { createMarkup } from "../js/render-functions";

import octagon from "../img/x-octagon.svg"

const pick = {
  captionsData: 'alt',
  captionDelay: 250
};

const lightbox = new SimpleLightbox('.gallery-image a', pick);
let allPages = 0;

export async function requestToServer(link) {
  await axios
    .get(link)
    .then(({ data }) => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          titleColor: '#fff',
          titleSize: '16px',
          titleLineHeight: '1.5',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fafafb',
          messageSize: '16px',
          messageLineHeight: '1.5',
          backgroundColor: '#ef4040',
          theme: 'dark',
          iconUrl: octagon,
          iconColor: '#fafafb',
          closeOnEscape: true,
          maxWidth: '432px',
          position: 'topRight',
        });
        galleryImages.innerHTML = '';
        return;
      }

      allPages = Math.ceil(data.totalHits / request.per_page);

      if (page === allPages) {
        iziToast.info({
          message: 'Sorry, there are no images',
          messageColor: '#fafafb',
          messageSize: '16px',
          backgroundColor: '#2e2f42',
          theme: 'dark',
          closeOnEscape: true,
          maxWidth: '432',
          position: 'topRight',
        });

        loadBtnEl.classList.add('is-hidden');
        return;
      }

      createMarkup(data);

      const scrollHight = galleryImages.getBoundingClientRect().height;

      window.scrollBy({
        top: scrollHight,
        behavior: 'smooth',
      });

      return lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loaderEl.classList.add('is-hidden');
      inputEl.value = '';
    });
};
