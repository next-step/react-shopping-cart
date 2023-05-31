import axiosInstance from '@/services/axiosInstance';

import { TProductsDto, TProduct } from '@/types/product';

class ProductService {
  async getProducts() {
    const { data } = await axiosInstance.get<TProductsDto>('/products');

    return data;
  }

  async getProductById(id: number) {
    const { data } = await axiosInstance.get<TProduct>(`/products/${id}`);

    return data;
  }
}

const productService = new ProductService();

export default productService;
