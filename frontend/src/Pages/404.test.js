import { render, screen } from "@testing-library/react";
import PageNotFound from "./404";

test("renders 404 text", () => {
  render(<PageNotFound />);
  const text404 = screen.getByText("This page doesn't exist.");
  expect(text404).toBeInTheDocument();
});
