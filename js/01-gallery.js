import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divRef = document.querySelector(".gallery");
console.log(divRef);

function createDivCardMarkup() {
  return divRef.insertAdjacentHTML(
    "beforeend",
    galleryItems
      .map(({ preview, original, description }) => {
        return `
          <div class="gallery__item">
              <a class="gallery__link" href="${original}">
                  <img
                      class="gallery__image"
                      src="${preview}"
                      data-source="${original}"
                      alt="${description}"
                  />
              </a>
          </div>
          `;
      })
      .join("")
  );
}

createDivCardMarkup();

divRef.addEventListener("click", onImgClick);

function onImgClick(e) {
  console.log(e.target); // img
  console.log(e.currentTarget); // div
}
