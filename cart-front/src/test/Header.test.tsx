import {
  cleanup,
  configure,
  fireEvent,
  render,
  screen,
  act,
} from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";

afterEach(() => {
  vi.resetAllMocks();
  window.history.replaceState(null, "root", "/");
  cleanup();
});

describe("header 기능 구현", () => {
  configure({ reactStrictMode: true });
  test("렌더링 클릭시 url변경 확인", async () => {
    const router = createRouter({ routeTree });
    render(<RouterProvider router={router} />);
    const cartElement = await screen.findByText("장바구니");
    const orderElement = await screen.findByText("주문목록");
    expect(cartElement).toBeInTheDocument();
    expect(orderElement).toBeInTheDocument();
    expect(router.state.location.href).toBe("/");

    act(() => {
      fireEvent.click(cartElement);
    });
    expect(router.state.location.href).toBe("/Cart");

    act(() => {
      fireEvent.click(orderElement);
    });

    expect(router.state.location.href).toBe("/Orders");
  });
});
