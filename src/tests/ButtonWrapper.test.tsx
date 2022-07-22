import { fireEvent, render, screen } from "@testing-library/react";
import { test, vi } from "vitest";
import ButtonWrapper from "../ButtonWrapper";

test("ButtonWrapper Component testing", () => {
  const clickHandler = vi.fn((e) => {});
  render(<ButtonWrapper title="Add Item" onClick={clickHandler} />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
