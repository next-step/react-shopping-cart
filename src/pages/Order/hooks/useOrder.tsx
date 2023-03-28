import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'
import { z } from 'zod'

import { PaymentCheckModal } from '@/components'
import { API } from '@/config'
import { useFetch, useModal, useMutation } from '@/hooks'
import { OrderSchema, OrderSchemaInfer } from '@/schemas'

const useOrder = () => {
  const navigate = useNavigate()
  const { openModal, closeModal } = useModal()

  const {
    payload: orders,
    isLoading,
    error,
  } = useFetch<OrderSchemaInfer[]>(API.ORDERS, {
    schema: z.array(OrderSchema),
  })
  const createOrderListMutation = useMutation(`${API.ORDER_LIST}`, 'POST')

  const handleConfirmButtonClick = async () => {
    await createOrderListMutation.mutate({
      orderListItem: {
        orderListId: uuid(),
        orders,
      },
    })

    closeModal({ element: <PaymentCheckModal /> })
    navigate('/order-list')
  }

  const openPaymentCheckModal = () => {
    openModal({
      element: <PaymentCheckModal text="주문 목록을 결제하시겠어요?" onConfirmButtonClick={handleConfirmButtonClick} />,
    })
  }

  const totalOrderPrice = orders?.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity
  }, 0)

  const totalOrderQuantity = orders?.reduce((acc, cur) => {
    return acc + cur.quantity
  }, 0)

  return { orders, isLoading, error, totalOrderPrice, totalOrderQuantity, openPaymentCheckModal }
}

export default useOrder
