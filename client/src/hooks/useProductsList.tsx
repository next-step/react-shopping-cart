import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import { ProductType } from 'types';

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
