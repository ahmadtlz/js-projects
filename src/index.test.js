/**
 * @jest-environment jsdom
 */
import { fireEvent, getByText } from "@testing-library/dom";
import "@testing-library/jest-dom";

function getExampleDOM() {
  const body = document.createElement("body");
  body.innerHTML = `
   <button class="open-btn">Show More</button>
   <section class="modal-container">
      <div class="modal">
        <h1>usefull note</h1>
        <p>
          It was supposed to be something intimate. It was supposed to be the
          business of no one else, except the only one who made the choice for
          her body, for her life. It was supposed to be a right.
        </p>
        <button class="modal-btn">Close</button>
      </div>
    </section>
  `;
  const closeBtn = body.querySelector(".modal-btn");
  const openBtn = body.querySelector(".open-btn");
  const container = body.querySelector(".modal-container");

  openBtn.addEventListener("click", () => {
    container.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    container.classList.remove("show");
  });

  return body;
}

let container;
beforeEach(() => {
  container = getExampleDOM();
});

it("should renders a button element", () => {
  expect(container.querySelector(".open-btn")).not.toBeNull();
  expect(getByText(container, /show more/i)).toBeDefined();
});

it("should not  display  a modal", () => {
  expect(container.getElementsByClassName("show").length).toBe(0);
});

it("should display a modal", () => {
  getByText(container, /show more/i).click();

  expect(container.getElementsByClassName("show").length).toBe(1);
});

it("should display a modal and close it", () => {
  getByText(container, /show more/i).click();

  expect(container.getElementsByClassName("show").length).toBe(1);

  getByText(container, /close/i).click();

  expect(container.getElementsByClassName("show").length).toBe(0);
});
