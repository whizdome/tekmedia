import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter } from "react-router-dom";
import App from "./App";
import { routes } from "./app/routes.jsx";

test("renders Tekmedia", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ["/"],
  });

  render(<App router={router} />);

  expect(screen.getByText(/tekmedia/i)).toBeInTheDocument();
});
