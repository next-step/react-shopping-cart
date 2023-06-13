import { useEffect, useState } from "react";
import { IOrder } from "../domain/types";
import { requestMyOrders } from "../apis";

const useOrders = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);

  const fetchMyOrders = async () => {
    const myOrders = await requestMyOrders();
    setOrders(myOrders.orders);
  };

  useEffect(() => {
    fetchMyOrders();
  }, []);

  return { orders };
};

export default useOrders;
