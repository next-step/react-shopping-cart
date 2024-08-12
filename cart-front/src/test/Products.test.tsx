import { afterEach, describe, expect, vi } from "vitest";
import server from "../Mocks/server";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "@tanstack/react-router";
import { renderHook, render, screen } from "@testing-library/react";
import { useProductsQuery } from "../Pages/Products/useProducQuery";
import { waitFor, cleanup, configure } from "@testing-library/react";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "../main";
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
afterEach(() => {
  server.resetHandlers();
  vi.resetAllMocks();
  window.history.replaceState(null, "root", "/Products");
  cleanup();
});
const data = [
  {
    id: 1,
    name: "냉면용기(대)",
    price: 83700,
    imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
  },
  {
    id: 2,
    name: "생새우살 (71/90) 500g 4개",
    price: 29000,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
  },
  {
    id: 3,
    name: "펩시 콜라 355ml 24캔",
    price: 83700,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/84fc0238-0239-4d0e-870b-a9daa6f2c42c.jpg",
  },
  {
    id: 4,
    name: "리치스 스위트콘 대 2.95kg",
    price: 4780,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
  },
  {
    id: 5,
    name: "하늘푸드 스위트고로케 1kg",
    price: 5200,
    imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
  },
  {
    id: 6,
    name: "야채고로케 (60g*18입) 1080g",
    price: 11170,
    imageUrl:
      "https://cdn-mart.baemin.com/goods/custom/20200427/9751-main-01.png",
  },
  {
    id: 7,
    name: "식자재왕 김말이튀김 야채맛 1kg",
    price: 6580,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/bulk/20211210-155432/9416-main-01.jpg",
  },
  {
    id: 8,
    name: "삼양 야채튀김 (60g*50±1/박스) 3kg",
    price: 24610,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/8916edff-9fa9-4538-95c3-13d463f58a86.jpg",
  },
  {
    id: 9,
    name: "미미사 분모자 (17mm) 250G",
    price: 1440,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/6ae4c431-6988-41ab-8894-7df7ee7b7cb3.jpg",
  },
  {
    id: 10,
    name: "손수 맛있는 쌀떡볶이떡 1kg",
    price: 2200,
    imageUrl: "https://cdn-mart.baemin.com/goods/21/10221-main-01.jpg",
  },
  {
    id: 11,
    name: "젓가락(종이)-웬만해선 이 맛을 막을 수 없다",
    price: 21800,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/1b6e926b-52a3-4a92-8db5-fddaccdb2583.jpg",
  },
  {
    id: 12,
    name: "[리뉴얼]젓가락(종이)-정성을 담아",
    price: 21800,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg",
  },
  {
    id: 13,
    name: "냉면용기(대)",
    price: 83700,
    imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
  },
  {
    id: 14,
    name: "생새우살 (71/90) 500g 4개",
    price: 29000,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg",
  },
  {
    id: 15,
    name: "펩시 콜라 355ml 24캔",
    price: 83700,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/84fc0238-0239-4d0e-870b-a9daa6f2c42c.jpg",
  },
  {
    id: 16,
    name: "리치스 스위트콘 대 2.95kg",
    price: 4780,
    imageUrl:
      "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
  },
];
configure({ reactStrictMode: true });
describe("Products testcode", async () => {
  it("1.ProductsView가 렌더링 되는지 확인", async () => {
    render(<RouterProvider router={router} />);

    window.history.pushState({}, "Test page", "/products");
    expect(router.state.location.href).toBe("/products");
    const productsLink = await screen.findAllByRole("link");
    if (data.length < 16) {
      expect(productsLink.length).toBe(data.length);
    } else {
      expect(productsLink.length).toBe(16);
    }
  });

  it("2.api fetch 성공(구현 ok)", async () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
    const wrapper = ({ children }: ReactNode) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { result } = renderHook(
      () => useProductsQuery({ page: 1, limit: 16 }),
      {
        wrapper,
      }
    );
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  it("4. 로딩 시에", async () => {});

  it("5.새로 고침시 기존 위치 저장", async () => {});

  it("6.무한 스크롤로 로딩 처리", async () => {});

  it("7.새로고침시 기존 위치 저장", async () => {});

  it("8.클릭시 product detail 페이지로 이동", async () => {});
});
