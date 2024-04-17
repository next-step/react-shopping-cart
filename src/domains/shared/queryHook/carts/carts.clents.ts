import { z } from "zod";
import { cartsScheme } from "./carts.type";
import { Product, Response, responseScheme } from "../types";
import { URI } from "../../URLs";

class CartsRepository {
  async getCarts() {
    const response = await fetch(URI.CART_URI);
    const responseData = await response.json();
    return responseScheme(cartsScheme).parse(responseData);
  }

  async addToCart(product: Product) {
    const response = await fetch(URI.CART_URI, {
      method: "POST",
      body: JSON.stringify({ product }),
    });

    const responseData: Response<object> = await response.json();
    return responseScheme(z.object({})).parse(responseData);
  }

  async deleteProductFromCart({ id }: { id: number }) {
    const response = (
      await fetch(`${URI.CART_URI}/${id}`, { method: "DELETE" })
    ).json();
    return responseScheme(z.object({})).parse(response);
  }
}

export default new CartsRepository();
