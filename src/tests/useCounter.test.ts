import { renderHook, act } from "@testing-library/react";
import { test } from "vitest";
import useCounter from "../hooks/useCounter";

test("useCOunter hook testing", () => {
  const { result } = renderHook(() => useCounter());
  expect(result.current.count).toBe(0);
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
});
