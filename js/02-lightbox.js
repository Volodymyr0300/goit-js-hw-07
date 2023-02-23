import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
// import SimpleLightbox from "simplelightbox";

const divRef = document.querySelector(".gallery");

// function createLinkAndImg(items) {
//   return items
//     .map((item) => {
//       return `<a class="gallery__item" href="${item.original}">
//     <img class="gallery__image" src="${item.preview}" alt="Image description" />
//   </a>`;
//     })
//     .join("");
// }

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
  //   var lightbox = $(".gallery a").simpleLightbox({
  //     /* options */
  //   });

  //   var lightbox = new SimpleLightbox(".gallery a", {
  //     /* options */
  //   });

  //   let gallery = new SimpleLightbox(".gallery a");
  //   gallery.on("show.simplelightbox", function () {
  //     // Do something…
  //     // gallery.options.next.simplelightbox;
  //     console.dir(gallery);

  //     // for (const item of gallery.elements) {
  //     //   console.log(item.firstElementChild);
  //     //   console.dir(item.firstElementChild.alt);
  //     // }

  //     // gallery.options.additionalHtml = e.target.alt;
  //     gallery.elements[1].childNodes[0];
  //     console.log(gallery.elements[1].childNodes[0]);
  //     gallery.elements[1].children.firstChild.alt;
  //     console.log(gallery.elements[1].children.firstChild.alt);
  //   });

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
