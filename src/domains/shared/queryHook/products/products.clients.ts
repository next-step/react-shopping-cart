import { URI } from "../../URLs";
import { Product, productSchema, Response, responseScheme } from "../types";

import { z } from "zod";

const getProductsSchema = z.array(productSchema);

class ProductsRepository {
  async getProducts() {
    try {
      const response = await fetch(URI.PRODUCTS_URI);
      const responseData: Response<z.infer<typeof getProductsSchema>> =
        await response.json();
      return responseScheme(getProductsSchema).parse(responseData);
    } catch (error) {
      throw new Error("getProducts api 오류.");
    }
  }

  async getProduct(id: number) {
    try {
      const response = await fetch(`${URI.PRODUCTS_URI}/${id}`);
      const responseData: Response<z.infer<typeof productSchema>> =
        await response.json();
      return responseScheme(productSchema).parse(responseData);
    } catch (error) {
      throw new Error("getProduct api 오류.");
    }
  }

  async deleteProduct(id: number) {
    try {
      const response = await fetch(`${URI.PRODUCTS_URI}/${id}`, {
        method: "DELETE",
      });
      const responseData = await response.json();
      return responseScheme(z.object({})).parse(responseData);
    } catch (error) {
      throw new Error("deleteProduct api 오류.");
    }
  }

  async createProduct(products: Product) {
    try {
      const response = await fetch(URI.PRODUCTS_URI, {
        method: "POST",
        body: JSON.stringify(products),
      });

      const responseData = await response.json();
      return responseScheme(z.object({})).parse(responseData);
    } catch (error) {
      throw new Error("createProduct api 오류.");
    }
  }
}

export default new ProductsRepository();
