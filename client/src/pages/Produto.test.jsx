import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Produto from "./Produto";

test("loads and displays Produto", async () => {
  // ARRANGE
  render(<Produto />);

  // ACT
  const item = screen.getAllByText('...loading');

  // ASSERT
  expect(item).toHaveLength(1);
});
