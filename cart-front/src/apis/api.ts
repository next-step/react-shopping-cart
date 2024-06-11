import { AxiosInstance } from "./Axios";
import { URL } from "../Const/Url";

export const getProducts = async () => {
  try {
    const data = await AxiosInstance.get(URL.getProducts());
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

interface products {
  price: number;
  name: string;
  imageUrl: string;
}

export const postProducts = async ({ price, name, imageUrl }: products) => {
  try {
    await AxiosInstance.post(URL.getProducts(), {
      price,
      name,
      imageUrl,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id: string) => {
  try {
    const data = await AxiosInstance.get(URL.getProduct(id));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const data = await AxiosInstance.delete(URL.deleteProduct(id));
    return data;
  } catch (error) {
    console.log(error);
  }
};

interface Cart {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const getCarts = async () => {
  try {
    const data = await AxiosInstance.get(URL.getCarts());
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postCarts = async ({ id, name, price, imageUrl }: Cart) => {
  try {
    const data = await AxiosInstance.post(URL.postCarts(), {
      id,
      name,
      price,
      imageUrl,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCarts = async (id: string) => {
  try {
    const data = await AxiosInstance.delete(URL.deleteCarts(id));
    return data;
  } catch (error) {
    console.log(error);
  }
};

interface Order {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
  quantity: number;
}

type OrderDetails = Order[];

export const postOrders = async (orderDetails: OrderDetails) => {
  try {
    const data = await AxiosInstance.post(URL.postOrders(), orderDetails);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = async () => {
  try {
    const data = await AxiosInstance.get(URL.getOrders());
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrder = async (id: string) => {
  try {
    const data = await AxiosInstance.get(URL.getOrder(id));
    return data;
  } catch (error) {
    console.log(error);
  }
};
