const smallImg = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");
const fullImg = document.querySelector(".full-img");

smallImg.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("open");
    fullImg.classList.add("open");
    let getAltAttribute = img.getAttribute("alt");
    fullImg.setAttribute("src", `img/full/${getAltAttribute}.jpg`);
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("open")) {
    modal.classList.remove("open");
    fullImg.classList.remove("open");
  }
});
