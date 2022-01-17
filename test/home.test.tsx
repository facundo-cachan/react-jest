import React from "react";
import { render } from "@testing-library/react";
import Home from "../src/routes/home";

test("renders Welcome to the homepage message", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Welcome to the homepage/i);
  expect(linkElement).toBeInTheDocument();
});
