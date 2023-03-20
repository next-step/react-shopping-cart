import { getOrders } from "mocks/api/orders";
import server from "mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("fetches carts from the server", async () => {
  const orders = await getOrders();
  expect(orders).toEqual([
    {
      id: 1,
      orderDetails: [
        {
          id: 1,
          name: "리치스 스위트콘 대 2.95kg",
          price: 23900,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/ff297e50-7d6b-4a87-8509-b387442ff877.jpg",
          quantity: 5,
        },
        {
          id: 2,
          name: "젓가락(종이)-웬만해선 이 맛을 막을 수 없다",
          price: 21800,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/1b6e926b-52a3-4a92-8db5-fddaccdb2583.jpg",
          quantity: 3,
        },
      ],
    },
    {
      id: 2,
      orderDetails: [
        {
          id: 1,
          name: "펩시 콜라 355ml 24캔",
          price: 83700,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/84fc0238-0239-4d0e-870b-a9daa6f2c42c.jpg",
          quantity: 3,
        },
      ],
    },
  ]);
});
