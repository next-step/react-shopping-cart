import { PRODUCTS } from "constants/products";
import { rest } from "msw";
import { Product } from "types/products";
import productsData from "mocks/data/products.json";

const handlers = [
  // 상품 리스트 가져오기
  rest.get<Product[]>(`/${PRODUCTS}`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json<Product[]>(productsData.products));
  }),
];
export default handlers;
