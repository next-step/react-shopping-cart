import { AxiosInstance } from "./axios";
import { URLS } from "../Const/url";

export const getProducts = async ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  try {
    const data = await AxiosInstance.get(URLS.getProducts({ page, limit }));
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
    await AxiosInstance.post(URLS.postProducts(), {
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
    const response = await AxiosInstance.get(URLS.getProduct(id));
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const data = await AxiosInstance.delete(URLS.deleteProduct(id));
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
    const response = await AxiosInstance.get(URLS.getCarts());
    return response.data[0];
  } catch (error) {
    console.log(error);
  }
};

export const postCarts = async ({ id, name, price, imageUrl }: Cart) => {
  try {
    const data = await AxiosInstance.post(URLS.postCarts(id.toString()), {
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
    const data = await AxiosInstance.delete(URLS.deleteCartsItem(id));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postOrders = async () => {
  try {
    const response = await AxiosInstance.post(URLS.postOrders());
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrders = async () => {
  try {
    const response = await AxiosInstance.get(URLS.getOrders());
    return response.data.orders;
  } catch (error) {
    console.log(error);
  }
};

export const getOrder = async (id: string) => {
  try {
    const { data: response } = await AxiosInstance.get(URLS.getOrder(id));
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const ToggleCheck = async (id: string) =>
  AxiosInstance.post(URLS.postCartsItemCheck(id));

export const IncreaseItem = async (id: string) => {
  AxiosInstance.post(URLS.postCartsItemNumber(id));
};

export const DecreaseItem = async (id: string) => {
  AxiosInstance.post(URLS.postdecreaseCartsItemNumber(id));
};
