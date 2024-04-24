import { OrderRequest } from '@/types/api-type'
import { request } from '@/utils/request'
import { useMutation } from '@tanstack/react-query'

export const useCreateOrder = () => {
  const { mutate: createOrder, ...rest } = useMutation({
    mutationFn: (orderRequest: OrderRequest) =>
      request.post('orders', {
        json: orderRequest,
      }),
  })
  return { createOrder, ...rest }
}
