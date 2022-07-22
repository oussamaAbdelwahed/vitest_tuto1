import { render, waitFor, screen } from "@testing-library/react";
import { test } from "vitest";
import APIComponent from "../APIComponent";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("http://localhost/api", (_req, res, ctx) => {
    return res(
      ctx.json({
        name: "Oussama",
      })
    );
  })
);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

test("APIComponent testing", async () => {
  render(<APIComponent />);
  const out = await waitFor(() => screen.getByRole("contentinfo"));
  expect(out).toHaveTextContent("Name is Oussama");
});
