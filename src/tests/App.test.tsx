import { describe, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App component testing", () => {
  it("renders component without crashing", () => {
    const clickHandler = vi.fn((count: number, setCount) =>
      setCount(count + 1)
    );
    render(<App clickHandler={clickHandler} />);
    expect(
      screen.getByRole("button", { name: /^count is/ })
    ).toBeInTheDocument();
  });

  it.only("should call clickHandler", () => {
    const clickHandler = vi.fn((count: number, setCount) =>
      setCount(count + 1)
    );
    render(<App clickHandler={clickHandler} />);
    const incrementButton = screen.getByRole("button", { name: /^count is/ });
    const n = 3;
    for (let i = 0; i < n; i++) {
      fireEvent(incrementButton, new MouseEvent("click", { bubbles: true }));
    }

    expect(clickHandler).toBeCalledTimes(n);
  });
});
