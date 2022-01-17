import React from "react";
import { render } from "@testing-library/react";
import App from "../src/App";

test("render Home link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test("render About link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});
