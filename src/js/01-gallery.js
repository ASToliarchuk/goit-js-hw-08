
import SimpleLightbox from "simplelightbox";

import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const imageList = document.querySelector('.gallery');
const imageListItem = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
   </a>
</li>`
).join('');

imageList.insertAdjacentHTML(`afterbegin`, imageListItem);

console.log(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoomFactor: 0.2,
  navText: ['⇚', '⇛'],
  closeText: '&#10008',
});
