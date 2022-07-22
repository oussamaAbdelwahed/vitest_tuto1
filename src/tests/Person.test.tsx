import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Person } from "../Person";

test("Person component testing", () => {
  render(<Person name="Oussama" />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toBeInTheDocument();
  expect(divElement).toHaveTextContent("Name is Oussama");
  expect(divElement).toHaveAttribute("role", "contentinfo");
});
