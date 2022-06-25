/**
 * @jest-environment jsdom
 */
import { fireEvent, getByText } from "@testing-library/dom";
import "@testing-library/jest-dom";

function getExampleDOM() {
  const html = document.createElement("html");
  html.innerHTML = `
  <head/>
  <body>
    <button>change background</button>
  </body>
  `;
  const button = html.querySelector("button");
  const body = html.querySelector("body");

  button.addEventListener("click", () => {
    body.style.backgroundColor = "red";
  });
  return html;
}

let container;
beforeEach(() => {
  container = getExampleDOM();
});

it("should renders a button element", () => {
  expect(container.querySelector("button")).not.toBeNull();
  expect(getByText(container, "change background")).toBeDefined();
});

it("should change background color when press button", async () => {
  getByText(container, "change background").click();

  expect(container).toMatchInlineSnapshot(`
<html>
  <head>
    
  
  </head>
  <body
    style="background-color: red;"
  >
    
    
    <button>
      change background
    </button>
    
  
  
  </body>
</html>
`);
});
