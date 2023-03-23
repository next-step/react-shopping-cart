import { httpGet } from '.';
import { IProductTypes } from '../@interface';
const URL = '/products';

// 여기서 mock인지 아닌지 판단..?
export const getAllProducts = async (): Promise<IProductTypes[]> => {
  const { data } = await httpGet(URL, '', true);
  console.log(data);
  return data;
};

export const getProduct = async (id: number): Promise<IProductTypes> => {
  const { data } = await httpGet(`${URL}/${id}`, '', true);
  console.log(data);
  return data;
};
