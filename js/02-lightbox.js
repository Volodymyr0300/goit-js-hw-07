import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divRef = document.querySelector(".gallery");

function createLinkAndImg(items) {
  return items
    .map((item) => {
      return `
            <div class="gallery__item">
                <a class="gallery__item" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>
            </div>
            `;
    })
    .join("");
}

const createGaleryMarkup = createLinkAndImg(galleryItems);

divRef.innerHTML = createGaleryMarkup;

divRef.addEventListener("click", onImgClick);

function onImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

  divRef.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      gallery.close();
    }
  });
}
