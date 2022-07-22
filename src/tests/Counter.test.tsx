import { fireEvent, render, screen } from "@testing-library/react";
import { test, vi } from "vitest";
import Counter from "../Counter";

test("C0unter component testing", () => {
  render(<Counter />);
  const buttonElement = screen.getByText("Add One");
  const divElement = screen.getByRole("contentinfo");
  fireEvent.click(buttonElement);
  expect(divElement).toHaveTextContent("Count is 1");
});
