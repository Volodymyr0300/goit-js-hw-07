import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector(".gallery");
console.log(divRef);

function createDivCardMarkup(items) {
  return items
    .map((item) => {
      return `
          <div class="gallery__item">
              <a class="gallery__link" href="${item.original}">
                  <img
                      class="gallery__image"
                      src="${item.preview}"
                      data-source="${item.original}"
                      alt="${item.description}"
                  />
              </a>
          </div>
          `;
    })
    .join("");
}

const createGalleryMarcup = createDivCardMarkup(galleryItems);

divRef.innerHTML = createGalleryMarcup;

divRef.addEventListener("click", onImgClick);

function onImgClick(e) {
  e.preventDefault();
  //   console.log(e.target); // img
  //   console.log(e.currentTarget); // div
  //   console.log(e.target.nodeName);
  if (e.target.nodeName !== "IMG") {
    return;
  }
  //   console.log(e.target.dataset.source);

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  divRef.addEventListener("keydown", (e) => {
    // console.log(e.code);
    // console.dir(e);
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
