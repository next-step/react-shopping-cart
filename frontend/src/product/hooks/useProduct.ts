import { useEffect, useState } from 'react';

import { TProduct } from '@/types/product';

import productApi from '@/product/apis/product';

export default function useProduct(id: number) {
  const [data, setData] = useState<TProduct>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      const product = await productApi.getProductById(id);
      setData(product);
    };

    try {
      fetchProducts();
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  return {
    data,
    isLoading,
    error,
  };
}
