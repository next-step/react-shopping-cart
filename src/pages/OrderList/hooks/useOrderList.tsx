import { z } from 'zod'

import { API } from '@/config'
import { useFetch } from '@/hooks'
import { OrderListSchemaInfer, OrderListSchema } from '@/schemas'

const useOrderList = () => {
  const { payload: orderList } = useFetch<OrderListSchemaInfer[]>(API.ORDER_LIST, {
    schema: z.array(OrderListSchema),
  })
  return { orderList }
}

export default useOrderList
