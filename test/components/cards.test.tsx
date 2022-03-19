import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { User } from "@components/cards";

test("loads and displays message", async () => {
    const name = 'Facundo';
  render(<User name={name} />);
  const card = screen.getByText(name);
  expect(card).toBeVisible();
});
