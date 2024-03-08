import { galleryImages, loadBtnEl } from '../main';

export function createMarkup(data) {
  let markupImages = data.hits
    .map(({
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => {
      return `<li class="gallery-image">
  <div class="wrapper-image">
    <a href="${largeImageURL}"
      ><img
        class="image"
        src="${webformatURL}"
        alt="${tags}"
        width="360"
        height="200"
    /></a>
  </div>
  <div class="wrapper-description">
    <ul class="list-image">
      <li class="list-image-item">
        <h3 class="list-image-heading">Likes</h3>
        <p class="list-image-desc">${likes}</p>
      </li>
      <li class="list-image-item">
        <h3 class="list-image-heading">Views</h3>
        <p class="list-image-desc">${views}</p>
      </li>
      <li class="list-image-item">
        <h3 class="list-image-heading">Comments</h3>
        <p class="list-image-desc">${comments}</p>
      </li>
      <li class="list-image-item">
        <h3 class="list-image-heading">Downloads</h3>
        <p class="list-image-desc">${downloads}</p>
      </li>
    </ul>
  </div>
</li>`;
    }).join("");
  loadBtnEl.classList.remove('is-hidden');

      return galleryImages.insertAdjacentHTML('beforeend', markupImages); 
};
