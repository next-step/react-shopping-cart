import { useMutation, useQuery } from "@tanstack/react-query";
import productsRepository from "./products.clients";

export function useProduct(id: number) {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => productsRepository.getProduct(id),
  });
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: productsRepository.getProducts,
  });
}

export function useCreateProduct() {
  return useMutation({
    mutationKey: ["createProduct"],
    mutationFn: productsRepository.createProduct,
  });
}

export function useDeleteProduct() {
  return useMutation({
    mutationKey: ["deleteProduct"],
    mutationFn: productsRepository.deleteProduct,
  });
}
