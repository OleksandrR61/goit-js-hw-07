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

    if (event.target.nodeName != 'IMG') {
        return;
    };
    
    const imgModal = basicLightbox.create(`
	    <img
            src="${event.target.dataset.source}"
            alt="${event.target.attributes.getNamedItem('alt').value}"
        />
    `,
        {
            onShow: () => {
                window.addEventListener('keydown', handleKeydownListener)
            },

            onClose: () => {
                window.removeEventListener('keydown', handleKeydownListener)
            }
        }
    );

    const handleKeydownListener = handleKeydownEsc.bind(null, imgModal);
    
    imgModal.show();
}

function handleKeydownEsc(imgModal, event) {
    if (event.code === 'Escape') {
        imgModal.close();
    };
}