document.addEventListener("DOMContentLoaded", () => {
  const items = Array.from(document.querySelectorAll("[data-gallery-item]"));
  const lightbox = document.querySelector("#gallery-lightbox");
  const image = lightbox?.querySelector(".gallery-lightbox__image");
  const close = lightbox?.querySelector(".gallery-lightbox__close");
  const prev = lightbox?.querySelector(".gallery-lightbox__nav--prev");
  const next = lightbox?.querySelector(".gallery-lightbox__nav--next");
  const counter = lightbox?.querySelector(".gallery-lightbox__counter");

  if (!items.length || !lightbox || !image || !close || !prev || !next || !counter) return;

  let currentIndex = 0;

  const render = (index) => {
    currentIndex = (index + items.length) % items.length;
    const item = items[currentIndex];
    image.src = item.dataset.full;
    image.alt = item.querySelector("img")?.alt || "";
    counter.textContent = `${currentIndex + 1} / ${items.length}`;
  };

  const open = (item) => {
    currentIndex = items.indexOf(item);
    render(currentIndex);
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    close.focus();
  };

  const hide = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    image.src = "";
    document.body.style.overflow = "";
  };

  const showPrevious = () => render(currentIndex - 1);
  const showNext = () => render(currentIndex + 1);

  items.forEach((item) => item.addEventListener("click", () => open(item)));
  close.addEventListener("click", hide);
  prev.addEventListener("click", showPrevious);
  next.addEventListener("click", showNext);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) hide();
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (event.key === "Escape") hide();
    if (event.key === "ArrowLeft") showPrevious();
    if (event.key === "ArrowRight") showNext();
  });
});
