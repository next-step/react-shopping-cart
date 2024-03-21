import { http, HttpResponse, delay } from "msw";
import products from "./db/products.json";

const pagination = (data: unknown[], page: number, limit: number) => {
  const start = (page - 1) * limit;
  const end = page * limit;
  return data.slice(start, end);
};

const getProducts = async (page: number, limit: number) => {
  const paginatedData = pagination(products, page, limit);
  await delay(1000);
  return HttpResponse.json(paginatedData);
};

const getProduct = async (id: string) => {
  const findItem = products.find((item) => `${item.id}` === id);
  await delay(1000);
  if (!findItem) {
    new HttpResponse("Not found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  return HttpResponse.json(findItem);
};

export const handlers = [
  http.get("/products", ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get("page");
    const limit = url.searchParams.get("limit");
    return getProducts(Number(page), Number(limit));
  }),
  http.get("/product/:id", ({ params }) => {
    const { id } = params;
    getProduct(`${id}`);
  }),
];
