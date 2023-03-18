import { useCallback, useState } from "react";

import { fetchOrders as internalFethcOrders, Order } from "@/api/orders";
import { withAsync } from "@/helpers";

import useApiStatus from "../useApiStatus";

const useFetchOrderProducts = () => {
  const { apiStatus, setApiStatus, ...statuses } = useApiStatus("IDLE");
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrders = useCallback(async () => {
    setApiStatus("IDLE");

    const { result, error } = await withAsync(() => internalFethcOrders());

    if (error) {
      setApiStatus("ERROR");
    } else if (result?.data) {
      setOrders(result.data);
      setApiStatus("SUCCESS");
    }
  }, []);

  return {
    orders,
    apiStatus,
    fetchOrders,
    ...statuses,
  };
};

export default useFetchOrderProducts;
