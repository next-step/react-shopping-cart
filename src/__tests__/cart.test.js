import { getCarts } from "mocks/api/cart";
import server from "mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("fetches carts from the server", async () => {
  const carts = await getCarts();
  expect(carts).toEqual([
    {
      id: 1675351764224,
      product: {
        id: 4,
        name: "리치스 스위트콘 대 2.95kg",
        price: 4780,
        imageUrl:
          "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
      },
    },
    {
      id: 1675351772608,
      product: {
        id: 4,
        name: "리치스 스위트콘 대 2.95kg",
        price: 4780,
        imageUrl:
          "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
      },
    },
  ]);
});