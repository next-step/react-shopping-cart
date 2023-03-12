import { getCarts } from "mocks/api/cart";
import { getProducts } from "mocks/api/product";
import server from "mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("fetches products from the server", async () => {
  const products = await getProducts();
  expect(products).toEqual([
    {
      id: 1,
      name: "냉면용기(대)",
      price: 83700,
      imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg"
    },
    {
      id: 2,
      name: "생새우살 (71/90) 500g 4개",
      price: 29000,
      imageUrl: "https://cdn-mart.baemin.com/sellergoods/main/6b95c66a-c13d-4ccd-9df5-b1af1428a225.jpg"
    }
  ]);
});