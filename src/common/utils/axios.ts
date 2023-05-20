import axios from 'axios';
import type { AxiosResponse } from 'axios';

import type { OrderedItemsType, ProductListType, CartProductListType } from 'domain/types';
import { reportError } from './error';

export const getProductItems = async (page: number): Promise<ProductListType> => {
  try {
    const response = await axios.get<ProductListType>('/products', { params: { page } });
    return response.data;
  } catch (error) {
    return reportError(error);
  }
};

export const getData = async <T>(url: string): Promise<T> => {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    return reportError(error);
  }
};
export const postData = async <T>(
  url: string,
  data: T
): Promise<T | OrderedItemsType[] | CartProductListType | AxiosResponse> => {
  try {
    const response = await axios.post<T>(url, JSON.stringify(data));
    return response.data;
  } catch (error) {
    return reportError(error);
  }
};

export const updateData = async <T>(url: string, data: T): Promise<T | CartProductListType> => {
  try {
    const response = await axios.put(url, JSON.stringify(data));
    return response.data;
  } catch (error) {
    return reportError(error);
  }
};
