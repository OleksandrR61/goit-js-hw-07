import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("beforeend", createGallery(galleryItems));
galleryRef.addEventListener('click', handleClick);

function createGallery(galleryItems) {
    return galleryItems.map(item => {
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${item.original}">
                        <img
                            class="gallery__image"
                            src="${item.preview}"
                            data-source="${item.original}"
                            alt="${item.description}"
                        />
                    </a>
                </div>`;
    }).join('');
}

function handleClick(event) {
    event.preventDefault();
    
    console.log(event.target.dataset.source);
}