import { http } from '../client/httpClient';
import { IProduct } from '../types/shoppingCart';

const BASE_URL = '/products';

export function ProductService() {
  const findAllProducts = async (): Promise<IProduct[]> => {
    const { data } = await http.get(BASE_URL);

    return data;
  };

  const findProductOne = async (id: number): Promise<IProduct> => {
    const { data } = await http.get(`${BASE_URL}/${id}`);

    return data;
  };

  return {
    findAllProducts,
    findProductOne
  };
}
