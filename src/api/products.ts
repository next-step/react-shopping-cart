import client from './client';

export type ResponseReturn<T> = {
  ok: boolean;
  data?: T;
};

// useFetch에 함수형태를 넣을지, endpoint를 넣을지 고민..
export const getProductList = async <T>() => {
  const res = await client.get<ResponseReturn<T>>('/products');
  return res.data;
};
