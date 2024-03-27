import { HttpResponse, delay } from "msw";
import { pagination } from "@/utils";
import products from "../db/products.json";
import type { IProduct } from "@/types";

const getProducts = async (page: number, limit: number) => {
  const paginatedData = pagination<IProduct>(products, page, limit);
  await delay(1000);
  return HttpResponse.json(paginatedData);
};

const getProduct = async (id: string) => {
  const item = products.find((product) => product.id === Number(id));
  await delay(1000);
  if (!item) {
    new HttpResponse("Not found", {
      status: 404,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  return HttpResponse.json(item);
};

export { getProducts, getProduct };
