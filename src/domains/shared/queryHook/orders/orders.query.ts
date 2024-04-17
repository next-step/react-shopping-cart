import { useMutation, useQuery } from "@tanstack/react-query";
import ordersRepository from "./orders.clients";

export function useOrders() {
  return useQuery({
    queryKey: ["orders"],
    queryFn: ordersRepository.getOrders,
  });
}

export function useOrder(id: number) {
  return useQuery({
    queryKey: ["order", id],
    queryFn: () => ordersRepository.getOrder(id),
  });
}

export function useCreateOrder() {
  return useMutation({
    mutationKey: ["createOrder"],
    mutationFn: ordersRepository.createOrder,
  });
}
