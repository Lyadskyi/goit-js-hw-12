import { requestToServer } from "./js/pixabay-api";

export const inputEl = document.querySelector('input[name=message]');
export const galleryImages = document.querySelector('.gallery-images');
export const loaderEl = document.querySelector('.loader');
export const loadBtnEl = document.querySelector('.load-btn');
const formEl = document.querySelector('.form');
const KEY = '42641678-dfe8c371983b31bc21d252361';

export const request = new URLSearchParams ({
  per_page: 15,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

export let page;
let inputValue;
let currentUrl;

formEl.addEventListener('submit', event => {
  event.preventDefault();
  galleryImages.innerHTML = null;
  loaderEl.classList.remove('is-hidden');
  loadBtnEl.classList.add('is-hidden');
  inputValue = inputEl.value;
  page = 1;
  currentUrl = `https://pixabay.com/api/?key=${KEY}&q=${inputEl.value}&${request}&page=${page}`;
  requestToServer(currentUrl);
});

loadBtnEl.addEventListener('click', () => {
  page += 1;
  currentUrl = `https://pixabay.com/api/?key=${KEY}&q=${inputValue}&${request}&page=${page}`;
  requestToServer(currentUrl);
});
