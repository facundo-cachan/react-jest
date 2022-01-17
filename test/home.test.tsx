import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../src/routes/home";

test("loads and displays message", async () => {
  render(<Home />);
  const welcome = screen.getByText("Welcome to the homepage!");
  expect(welcome).toBeVisible();
});
