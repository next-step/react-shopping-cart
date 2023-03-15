import axiosInstance from '@/apis/axiosInstance';

import { ProductsDto } from '@/product/types/product';

class ProductApi {
  async getProducts() {
    const { data } = await axiosInstance.instance.get<ProductsDto>('/products');

    return data;
  }
}

const productApi = new ProductApi();

export default productApi;
