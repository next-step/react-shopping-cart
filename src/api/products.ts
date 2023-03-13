import api from "./api";
import EndPoint from "./endPoints";

export type Product = {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
};

export const fetchProducts = () => {
  return api.get<Product[]>(EndPoint.PRODUCTS.GET_PRODUCTS);
};

export const addProduct = (product: Product) => {
  return api.post<Product>(EndPoint.PRODUCTS.ADD_PRODUCTS, { product });
};

export const fetchProduct = (productId: string) => {
  return api.get<Product>(EndPoint.PRODUCTS.GET_PRODUCT, { data: productId });
};

export const deleteProduct = (productId: string) => {
  return api.delete<Product>(EndPoint.PRODUCTS.DELETE_PRODUCT, { data: { productId } });
};
