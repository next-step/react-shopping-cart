import { http } from './httpClient';

const BASE_URL = '/product';

export const productList = async () => {
  const response = await http.get(BASE_URL);

  return response.data;
};
