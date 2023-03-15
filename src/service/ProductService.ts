import { productList } from '../api/product';

function ProductService() {
  const getProducts = async () => {
    const products = await productList();

    return products;
  };

  return {
    getProducts
  };
}

export default ProductService;
