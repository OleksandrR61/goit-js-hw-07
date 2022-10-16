import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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

function createImgModal({ target }) {
    const imgModal = basicLightbox.create(`
	    <img
            src="${target.dataset.source}"
            alt="${target.attributes.getNamedItem('alt').value}"
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

    return imgModal;
}

function handleClick(event) {
    event.preventDefault();

    if (event.target.nodeName != 'IMG') {
        return;
    };
    
    const imgModal = createImgModal(event);
    
    imgModal.show();
}

function handleKeydownEsc(imgModal, { code }) {
    if (code === 'Escape') {
        imgModal.close();
    };
}

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("beforeend", createGallery(galleryItems));
galleryRef.addEventListener('click', handleClick);