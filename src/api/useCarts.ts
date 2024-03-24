import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import type { ICart, IProduct } from "@/types";

const fetchCarts = async (page: number): Promise<ICart[]> => {
  return fetch(`/carts?page=${page}&limit=${5}`).then((res) => res.json());
};

const postCart = async (product: IProduct) => {
  return fetch("/carts", {
    method: "POST",
    body: JSON.stringify(product),
  }).then((res) => res.json());
};
const deleteCartItem = async (id: number) => {
  return fetch(`/cart/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
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
