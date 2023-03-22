import { useCallback, useEffect, useState } from "react";

import { fetchProducts as internalFetchProducts, Product } from "@/api/products";
import { withAsync } from "@/helpers";

import useApiStatus from "../useApiStatus";

const useFetchProducts = () => {
  const { apiStatus, setApiStatus, ...statuses } = useApiStatus();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = useCallback(async () => {
    setApiStatus("PENDING");

    const { result, error } = await withAsync(() => internalFetchProducts());

    if (error) {
      setApiStatus("ERROR");
    } else if (result?.data) {
      setProducts(result.data);
      setApiStatus("SUCCESS");
    }
  }, []);

  return {
    products,
    apiStatus,
    fetchProducts,
    ...statuses,
  };
};

export default useFetchProducts;
