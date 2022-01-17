import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import About from "../src/routes/about";

test("loads and displays message", async () => {
  render(<About />);
  const welcome = screen.getByText("Who are we?");
  expect(welcome).toBeVisible();
});
