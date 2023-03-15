import { productList } from '../api/product';
import { priceFormat } from '../utils';

function ProductService() {
  const getProducts = async () => {
    const products = await productList();

    return products.map((item) => ({
      ...item,
      price: priceFormat(item.price)
    }));
  };

  return {
    getProducts
  };
}

export default ProductService;
