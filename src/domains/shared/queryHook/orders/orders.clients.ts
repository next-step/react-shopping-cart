import { z } from "zod";
import { Response, responseScheme } from "../types";
import { Order, orderScheme, ordersScheme } from "./orders.type";
import { URI } from "../../URLs";

class OrderRepository {
  async getOrders() {
    try {
      const response = await fetch(URI.ORDERS_URI);
      const responseData: Response<z.infer<typeof ordersScheme>> =
        await response.json();
      const zodParsed = responseScheme(ordersScheme).parse(responseData);
      return zodParsed;
    } catch (error) {
      throw new Error("getOrders api 의 오류.");
    }
  }

  async getOrder(id: number) {
    try {
      const response = await fetch(`${URI.ORDERS_URI}/${id}`);
      const responseData = await response.json();
      const zodParsed = responseScheme(orderScheme).parse(responseData);
      return zodParsed;
    } catch (error) {
      throw new Error("getOrder api 의 오류.");
    }
  }

  // async addOrder(orderDetails: Order[]) {
  //   return fetch(ORDERS_URI.orders.uri, {
  //     method: "POST",
  //     body: JSON.stringify({ orderDetails }),
  //   }).then<Response<{}>>((res) => {
  //     return responseScheme(z.object({})).parse(res.json());
  //   });
  // }

  async createOrder(orderDetails: Order[]) {
    try {
      const response = await fetch(URI.ORDERS_URI, {
        method: "POST",
        body: JSON.stringify({ orderDetails }),
      });

      const responseData = await response.json();
      return responseScheme(z.object({})).parse(responseData);
    } catch (error) {
      throw new Error("addOrder api 의 오류.");
    }
  }
}

export default new OrderRepository();
