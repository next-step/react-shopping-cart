import { useCallback, useEffect, useState } from "react";

import { Cart, fetchCarts } from "@/api/carts";
import { withAsync } from "@/helpers";

import useApiStatus from "../useApiStatus";

const useFetchCartProducts = () => {
  const { apiStatus, setApiStatus, ...statuses } = useApiStatus("IDLE");
  const [cartProducts, setCartProducts] = useState<Cart[]>([]);

  useEffect(() => {
    fetchCartProducts();
  }, []);

  const fetchCartProducts = useCallback(async () => {
    setApiStatus("PENDING");

    const { result, error } = await withAsync(() => fetchCarts());

    if (error) {
      setApiStatus("ERROR");
    } else if (result?.data) {
      setCartProducts(result.data);
      setApiStatus("SUCCESS");
    }
  }, []);

  return {
    cartProducts,
    apiStatus,
    fetchCartProducts,
    ...statuses,
  };
};

export default useFetchCartProducts;
