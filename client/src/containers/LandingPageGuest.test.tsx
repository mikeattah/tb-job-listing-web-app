import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPageGuest from "./LandingPageGuest";

test("renders learn react link", () => {
  render(<LandingPageGuest />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
