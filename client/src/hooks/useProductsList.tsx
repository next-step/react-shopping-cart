import { useEffect, useState } from 'react';
import type { AxiosResponse } from 'axios';
import useFetch from './useFetch';

type ProductType = {
  id: number;
  price: string;
  imageUrl: string;
  name: string;
};

const useProductList = () => {
  const { sendRequest, isLoading, error } = useFetch();
  const [products, setProducts] = useState<ProductType[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseData = await sendRequest('/products');
        setProducts(responseData.products);
      } catch (err: any) {}
    };
    fetchProducts();
  }, [sendRequest]);
  return { products, isLoading, error };
};
export default useProductList;
