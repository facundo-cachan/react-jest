import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "@/App";
import renderWithRouter from "@mocks/renderWithRouter";

test("Exist link & router loaded?", () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByText(/about/i)).toBeInTheDocument();
});

test("Landing on a page", () => {
  renderWithRouter(<App />, { route: "/about" });
  expect(screen.getByText(/Who are we/i)).toBeInTheDocument();
});
