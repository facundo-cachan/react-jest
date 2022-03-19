import React from "react";
import { render, screen } from "@testing-library/react";
// import fetch, { Response } from "node-fetch";
import "@testing-library/jest-dom";

import About from "@routes/about";

// jest.mock("node-fetch");

test("loads and displays message", async () => {
  render(<About />);
  const welcome = screen.getByText("Who are we?");
  expect(welcome).toBeVisible();
});
/* 
test("Fetch users and display names", async () => {
  fetch.mockReturnValue(Promise.resolve(new Response("4")));

  const idUsuario = await crearUsuario();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith("http://sitio.com/usuarios", {
    method: "POST",
  });
  expect(idUsuario).toBe("4");
});
 */