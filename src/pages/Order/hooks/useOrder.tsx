import { usePayssion } from 'payssion'
import { useNavigate } from 'react-router-dom'
import uuid from 'react-uuid'
import { z } from 'zod'

import { CheckModal } from '@/components'
import { API } from '@/config'
import { useFetch, useModal, useMutation } from '@/hooks'
import { OrderSchema, OrderSchemaInfer } from '@/schemas'

const useOrder = () => {
  const navigate = useNavigate()
  const { openModal, closeModal } = useModal()
  const { initiatePayment } = usePayssion()

  const {
    payload: orders,
    isLoading,
    error,
  } = useFetch<OrderSchemaInfer[]>(API.ORDERS, {
    schema: z.array(OrderSchema),
  })
  const createOrderListMutation = useMutation(`${API.ORDER_LIST}`, 'POST')

  const deleteAllOrdersMutation = useMutation(`${API.ORDERS}`, 'DELETE')

  const onSuccessAction = async () => {
    await createOrderListMutation.mutate({
      orderListItem: {
        orderListId: uuid(),
        orders,
      },
    })
    await deleteAllOrdersMutation.mutate()
    navigate('/order-list')
  }

  const handleConfirmButtonClick = (amount: number) => {
    closeModal({ element: CheckModal })
    initiatePayment({ amount, onSuccessAction })
  }

  const openPaymentCheckModal = (price: number) => {
    openModal({
      element: (
        <CheckModal text="주문 목록을 결제하시겠어요?" onConfirmButtonClick={() => handleConfirmButtonClick(price)} />
      ),
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
