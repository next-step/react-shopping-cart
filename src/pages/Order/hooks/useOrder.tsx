import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { PaymentCheckModal } from '@/components'
import { API } from '@/config'
import { useFetch, useModal } from '@/hooks'
import { OrderSchema, OrderSchemaInfer } from '@/schemas'

const useOrder = () => {
  const navigate = useNavigate()
  const { openModal, closeModal } = useModal()

  const {
    payload: orderList,
    isLoading,
    error,
  } = useFetch<OrderSchemaInfer[]>(API.ORDERS, {
    schema: z.array(OrderSchema),
  })

  const handleConfirmButtonClick = () => {
    closeModal({ element: <PaymentCheckModal /> })
    navigate('/order-list')
  }

  const openPaymentCheckModal = () => {
    openModal({
      element: <PaymentCheckModal text="주문 목록을 결제하시겠어요?" onConfirmButtonClick={handleConfirmButtonClick} />,
    })
  }

  const totalOrderPrice = orderList?.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity
  }, 0)

  const totalOrderQuantity = orderList?.reduce((acc, cur) => {
    return acc + cur.quantity
  }, 0)

  return { orderList, isLoading, error, totalOrderPrice, totalOrderQuantity, openPaymentCheckModal }
}

export default useOrder
