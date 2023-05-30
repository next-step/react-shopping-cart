import { useEffect, useState } from 'react';

import { TProduct } from '@/types/product';

import productApi from '@/domain/product/apis/product';

export default function useProducts() {
  const [data, setData] = useState<TProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      const res = await productApi.getProducts();
      setData(res.products);
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
  }, []);

  return { data, isLoading, error };
}
