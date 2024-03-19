const galleryItems = [
  {
    preview:
      "https://cdn.statically.io/img/img.freepik.com/free-photo/3d-render-slr-camera-color-illustration_460848-10413.jpg?t=st=1710853753~exp=1710857353~hmac=3a2c654394db3806195389aab14cebffcc422bce1e2269506a2442693d37d8dc&w=626",
    original:
      "https://cdn.statically.io/img/img.freepik.com/free-photo/3d-render-slr-camera-color-illustration_460848-10413.jpg?t=st=1710853753~exp=1710857353~hmac=3a2c654394db3806195389aab14cebffcc422bce1e2269506a2442693d37d8dc&w=1280",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.statically.io/img/img.freepik.com/free-photo/front-view-man-eating-apple_23-2149857625.jpg?w=800&t=st=1710848375~exp=1710848975~hmac=0264049190a70398a4bd03334626eb92629ab82eb61762574cf91ab4506bc05a",
    original:
      "https://cdn.statically.io/img/img.freepik.com/free-photo/front-view-man-eating-apple_23-2149857625.jpg?w=1280&t=st=1710848375~exp=1710848975~hmac=0264049190a70398a4bd03334626eb92629ab82eb61762574cf91ab4506bc05a",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.statically.io/img/img.freepik.com/free-photo/view-of-cooked-crawfish_23-2150426277.jpg?w=800&t=st=1710848410~exp=1710849010~hmac=5fe05e2706eaf7e95588b056cf2ff160ec64621e8255a892955ba6517585b42a",
    original:
      "https://cdn.statically.io/img/img.freepik.com/free-photo/view-of-cooked-crawfish_23-2150426277.jpg?w=1280&t=st=1710848410~exp=1710849010~hmac=5fe05e2706eaf7e95588b056cf2ff160ec64621e8255a892955ba6517585b42a",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.statically.io/img/img.freepik.com/free-photo/medium-shot-fit-people-outdoors_23-2150828882.jpg?w=800&t=st=1710848524~exp=1710849124~hmac=dfee13dff816d45f6bfea81ee5e5b349e1242b6fb0974d944ea514b35ca1d4d9",
    original:
      "https://cdn.statically.io/img/img.freepik.com/free-photo/medium-shot-fit-people-outdoors_23-2150828882.jpg?w=1280&t=st=1710848524~exp=1710849124~hmac=dfee13dff816d45f6bfea81ee5e5b349e1242b6fb0974d944ea514b35ca1d4d9",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.statically.io/img/img.freepik.com/free-photo/water-polo-player-at-the-pool-with-swimming-equipment_23-2150893950.jpg?w=800&t=st=1710848545~exp=1710849145~hmac=bcc571b01adbd51102c1c5fd71b2d7955b3c6803908d8aebc68395f0583c598f",
    original:
      "https://cdn.statically.io/img/img.freepik.com/free-photo/water-polo-player-at-the-pool-with-swimming-equipment_23-2150893950.jpg?w=1280&t=st=1710848545~exp=1710849145~hmac=bcc571b01adbd51102c1c5fd71b2d7955b3c6803908d8aebc68395f0583c598f",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.statically.io/img/img.freepik.com/premium-photo/full-length-of-woman-exercising-on-field_1048944-30351094.jpg?w=800",
    original:
      "https://cdn.statically.io/img/img.freepik.com/premium-photo/full-length-of-woman-exercising-on-field_1048944-30351094.jpg?w=1280",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.statically.io/img/img.freepik.com/premium-photo/authentic-scenes-of-plus-size-males-playing-basketball_23-2150961227.jpg?w=800",
    original:
      "https://cdn.statically.io/img/img.freepik.com/premium-photo/authentic-scenes-of-plus-size-males-playing-basketball_23-2150961227.jpg?w=1280",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.statically.io/img/img.freepik.com/premium-photo/squirrel-sitting-on-tree-branch_1048944-30371835.jpg?w=800",
    original:
      "https://cdn.statically.io/img/img.freepik.com/premium-photo/squirrel-sitting-on-tree-branch_1048944-30371835.jpg?w=1280",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.statically.io/img/img.freepik.com/premium-photo/medium-shot-woman-living-at-farmhouse_23-2150621719.jpg?w=800",
    original:
      "https://cdn.statically.io/img/img.freepik.com/premium-photo/medium-shot-woman-living-at-farmhouse_23-2150621719.jpg?w=1280",
    description: "Lighthouse Coast Sea",
  },
];

const galleryItemsMarkUp = makeMarkUp(galleryItems);
const placeForMarkUp = document.querySelector(".js-gallery");

placeForMarkUp.innerHTML = galleryItemsMarkUp;

function makeMarkUp(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src= '${preview}'
            data-source= '${original}'
            alt= '${description}'
        
          />
        </a>
      </li>`;
    })
    .join("");
}

const gallery = document.querySelector(".gallery");
const modalWindow = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const overlayLightBox = document.querySelector(".lightbox__overlay");
const closeBtn = document.querySelector(".lightbox__button");

gallery.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }
  openModal();
  lightboxImage.src = e.target.src;
});

closeBtn.addEventListener("click", () => {
  closeModal();
  lightboxImage.src = "";
});

overlayLightBox.addEventListener("click", () => closeModal());

function closeModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  window.removeEventListener("keydown", onLeftAndRight);
  modalWindow.classList.remove("is-open");
}

function openModal() {
  window.addEventListener("keydown", onEscKeyPress);
  window.addEventListener("keydown", onLeftAndRight);
  modalWindow.classList.add("is-open");
}

function onEscKeyPress(e) {
  if (e.code === "Escape") {
    closeModal();
  }
}

let countOfImage = 0;

function onLeftAndRight(e) {
  if (e.code === "ArrowRight") {
    countOfImage += 1;
    lightboxImage.src = galleryItems[countOfImage].original;
    console.log(countOfImage);
  }
  if (e.code === "ArrowLeft") {
    countOfImage -= 1;
    lightboxImage.src = galleryItems[countOfImage].original;
    console.log(countOfImage);
  }
}
