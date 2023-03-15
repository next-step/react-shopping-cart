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

  return {
    findAllProducts
  };
}

export default ProductService;
