import React from "react";
import { render, screen } from "@testing-library/react";
import JobApplicationForm from "./JobApplicationForm";

test("renders learn react link", () => {
  render(<JobApplicationForm />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
