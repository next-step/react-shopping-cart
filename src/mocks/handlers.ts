import { http, HttpResponse, delay } from "msw";
import data from "./db.json";

const getProducts = async () => {
  await delay(1000);
  return HttpResponse.json(data.products);
};

const getProduct = async (id: string) => {
  const findItem = data.products.find((item) => `${item.id}` === id);
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
  http.get("/products", getProducts),
  http.get("/product/:id", ({ params }) => {
    const { id } = params;
    getProduct(`${id}`);
  }),
];
