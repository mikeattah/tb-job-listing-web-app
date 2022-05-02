import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPageAdmin from "./LandingPageAdmin";

test("renders learn react link", () => {
  render(<LandingPageAdmin />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
