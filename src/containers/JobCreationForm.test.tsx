import React from "react";
import { render, screen } from "@testing-library/react";
import JobCreationForm from "./JobCreationForm";

test("renders learn react link", () => {
  render(<JobCreationForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
