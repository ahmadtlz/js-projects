import { fireEvent, getByText } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let container;

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: "dangerously" });
  container = dom.window.document.body;
});

it("should renders a button element", () => {
  expect(container.querySelector("button")).not.toBeNull();
  expect(getByText(container, "change background")).toBeInTheDocument();
});

it("should change background color when press button", async () => {
  const button = getByText(container, "change background");

  fireEvent.click(button);
  expect(button).toHaveBeenCalledTimes(1);
  dom.window.document.body.style.backgroundColor = "red";

  expect(dom.window.document.body.style.backgroundColor).toBe("red");
});
