import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { apiClient } from "./axios";
import type { ICart, IProduct } from "@/types";

const fetchCarts = async (page: number) => {
  const query = new URLSearchParams({ page: page.toString(), limit: "5" });
  const { data } = await apiClient.get<ICart[]>(`/carts?${query.toString()}`);
  return data;
};

const postCart = async (product: IProduct) => {
  const { data } = await apiClient.post<ICart>("/carts", product);
  return data;
};
const deleteCartItem = async (id: number) => {
  const { data } = await apiClient.delete<ICart>(`/carts/${id}`);
  return data;
};

export const useCarts = () => {
  return useInfiniteQuery({
    queryKey: ["carts"],
    queryFn: ({ pageParam }) => fetchCarts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (_lastPage, _allPages, lastPageParam) =>
      lastPageParam + 1,
  });
};

export const usePostCarts = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (product: IProduct) => postCart(product),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["carts"],
        exact: true,
      });
    },
  });
};
export const useDeleteCartItem = () => {
  return useMutation({
    mutationFn: (id: number) => deleteCartItem(id),
  });
};
