import { renderHook } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { act } from "react-dom/test-utils";
import { test } from "vitest";
import useAPI from "../hooks/useAPI";

const server = setupServer(
  rest.get("http://localhost/apii", (_req, res, ctx) => {
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

test("useAPI async hook testing", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useAPI());
  act(() => {});
  await waitForNextUpdate();
  expect(result.current).toEqual({ name: "Oussama" });
});
