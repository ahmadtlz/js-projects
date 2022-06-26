const closeBtn = document.querySelector(".modal-btn");
const openBtn = document.querySelector(".open-btn");
const container = document.querySelector(".modal-container");

openBtn.addEventListener("click", () => {
  container.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  container.classList.remove("show");
});
