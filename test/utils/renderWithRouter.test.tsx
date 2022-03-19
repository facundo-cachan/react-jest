import React from "react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/routes/home";
import renderWithRouter from "@mocks/renderWithRouter";

test("Callback of renderWithRouter", () => {
  renderWithRouter(<Home />, { route: "/about" });
  expect(screen.getByText(/believe in you/i)).toBeInTheDocument();
});
