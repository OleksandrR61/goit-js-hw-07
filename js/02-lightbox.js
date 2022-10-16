import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createGallery(galleryItems) {
    return galleryItems.map(item => {
        return `<a class="gallery__item" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>`;
    }).join('');
}

function createImgModal() {
    return new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});
}

function handleClick(event) {
    event.preventDefault();

    if (event.target.nodeName != 'IMG') {
        return;
    };
    
    let imgModal = createImgModal();

    imgModal.open(event.target.parentNode);
    imgModal.on('closed.simplelightbox', function () {
	    imgModal.destroy();
    });
}

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("beforeend", createGallery(galleryItems));
galleryRef.addEventListener('click', handleClick);