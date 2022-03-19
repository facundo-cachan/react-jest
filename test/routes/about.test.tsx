import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import About from "@routes/about";

beforeEach(() => render(<About />));
afterEach(() => cleanup());

test("Loads and displays message", async () => {
  const welcome = screen.getByText("Who are we?");
  expect(welcome).toBeVisible();  
});
test("Not users to show", () => {
  const notUsers = screen.getByText("Not users to show");
  expect(notUsers).toBeVisible();
});
test("Display users list", async () => {
  waitFor(() => {
    const usersList = screen.getAllByTestId("users-list");
    expect(usersList).toBeVisible();
  });
});

test("Fetch users and display names", async () => {
  waitFor(() => {
    const usernames = screen.getAllByTestId(1);
    const li = usernames.map((li) => li.textContent);
    const names = li.map((c) => c);

    expect(names).toEqual(usernames);
    expect(li).toEqual(names);
    expect(usernames.keys()).toEqual(li)
  });
});
