import { HttpResponse, delay } from "msw";
import { pagination } from "@/utils";
// import { groupByProductId } from "@/utils/cart";
import type { ICart, IProduct } from "@/types";

const getCarts = async (page: number, limit: number) => {
  const cartData = localStorage.getItem("cart") || "[]";
  const parsedCartData = JSON.parse(cartData);
  try {
    const paginatedData = pagination<ICart>(parsedCartData, page, limit);
    // const groupByProduct = groupByProductId(paginatedData);
    await delay(1000);
    return HttpResponse.json(paginatedData);
  } catch (error) {
    return new HttpResponse("Failed to fetch cart items", {
      status: 500,
    });
  }
};

const addToCart = async (product: IProduct) => {
  const newItem = {
    id: window.crypto.randomUUID(),
    product,
  };
  const cartData = localStorage.getItem("cart") || "[]";
  const parsedCartData = JSON.parse(cartData);
  try {
    const newCart = [...parsedCartData, newItem];
    localStorage.setItem("cart", JSON.stringify(newCart));
    await delay(1000);
    return HttpResponse.json(newItem);
  } catch (error) {
    return new HttpResponse("Failed to add item to cart", {
      status: 500,
    });
  }
};

export { getCarts, addToCart };
