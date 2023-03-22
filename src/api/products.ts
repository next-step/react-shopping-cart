import axios from "./api";
import EndPoint from "./endPoints";

export type Product = {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
};

export const fetchProducts = () => {
  return axios.get<Product[]>(EndPoint.PRODUCTS.GET_PRODUCTS);
};

export const addProduct = (product: Product) => {
  return axios.post<Product>(EndPoint.PRODUCTS.ADD_PRODUCTS, { product });
};

export const fetchProduct = (productId: string) => {
  return axios.get<Product>(EndPoint.PRODUCTS.GET_PRODUCT, { data: productId });
};

export const deleteProduct = (productId: string) => {
  return axios.delete<Product>(EndPoint.PRODUCTS.DELETE_PRODUCT, { data: { productId } });
};
