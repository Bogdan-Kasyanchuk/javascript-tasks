import galleryItems from './gallery-items.js'

const refs = {
  gallery: document.querySelector('.gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  closeLightbox: document.querySelector('button[data-action="close-lightbox"]'),
  lightboxOverlay: document.querySelector('.lightbox__overlay'),
}

const { gallery } = refs

const fnGallery = (array) =>
  array.map(
    (element) => `<a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`,
  )

gallery.insertAdjacentHTML('beforeend', fnGallery(galleryItems).join(''))

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
})
