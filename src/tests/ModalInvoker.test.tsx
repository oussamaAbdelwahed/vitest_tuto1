import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import ModalInvoker from "../modal/ModalInvoker";

vi.mock("./Modal", () => ({
  __esModule: true,
  Modal: () => <div />,
}));

describe("ModalInvoker COmponent testing", () => {
  it("Modal component should be visible", () => {
    render(<ModalInvoker open={true} />);
    expect(screen.getByRole("contentinfo")).toHaveTextContent(
      "Modal is visible"
    );
  });

  it("Modal component should not be visible", () => {
    render(<ModalInvoker open={false} />);
    expect(screen.getByRole("contentinfo")).toBeEmptyDOMElement();
  });
});
