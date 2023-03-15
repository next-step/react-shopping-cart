import { priceFormat } from '../utils';
import { http } from '../client/httpClient';
import { IProduct } from '../types/shoppingCart';

const BASE_URL = '/products';

function ProductService() {
  const findAllProducts = async (): Promise<IProduct[]> => {
    const { data } = await http.get(BASE_URL);

    return data.map((item: IProduct) => ({
      ...item,
      price: priceFormat(item.price)
    }));
  };

  const findProductOne = async (id: number): Promise<IProduct> => {
    const { data } = await http.get(BASE_URL);
    const findOne = data.find((item: IProduct) => item.id === id);

    return {
      ...findOne,
      price: priceFormat(findOne.price)
    };
  };

  return {
    findAllProducts,
    findProductOne
  };
}

export default ProductService;
