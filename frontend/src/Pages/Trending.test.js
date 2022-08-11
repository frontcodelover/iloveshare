import { render, screen } from "@testing-library/react";
import Trending from "./Trending";

test("renders Lorem text", () => {
  render(<Trending />);
  const textFavourites = screen.getByText(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo iure sapiente facilis? Consequatur natus, modi nobis praesentium debitis error quibusdam hic, unde aliquid distinctio vitae obcaecati veritatis ad inventore voluptatem!"
  );
  expect(textFavourites).toBeInTheDocument();
});
