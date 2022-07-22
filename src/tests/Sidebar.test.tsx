import { render, screen } from "@testing-library/react";
import { test } from "vitest";
import { Sidebar } from "../Sidebar";

test("Sidebar component testing", () => {
  const items = [{ name: "test", href: "/test" }];
  render(<Sidebar items={items} />);
  const anchroElements = screen.getAllByRole("navigation");
  expect(anchroElements[0]).toHaveTextContent(items[0].name);
  expect(anchroElements[0]).toHaveAttribute("href", items[0].href);
});
