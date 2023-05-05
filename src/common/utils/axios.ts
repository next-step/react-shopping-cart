import axios, { AxiosResponse } from 'axios';
import type { OrderedItemsType, ProductListType, CartProductListType } from 'domain/types';

export const getProductItems = async (page: number): Promise<ProductListType> => {
  const response = await axios.get<ProductListType>('/products', { params: { page } });
  return response.data;
};

export const getData = async <T>(url: string): Promise<T> => {
  const response = await axios.get<T>(url);
  return response.data;
};
export const postData = async <T>(
  url: string,
  data: T
): Promise<T | OrderedItemsType[] | CartProductListType | AxiosResponse> => {
  const response = await axios.post<T>(url, JSON.stringify(data));
  return response.data;
};

export const updateData = async <T>(url: string, data: T): Promise<T | CartProductListType> => {
  const response = await axios.put(url, JSON.stringify(data));
  return response.data;
};
