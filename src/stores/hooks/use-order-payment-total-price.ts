import { useAtomValue } from 'jotai'
import { orderPaymentAtom } from '@/stores/atoms/order-payment-atom'

export const useOrderPaymentTotalPrice = () => {
  const orderPaymentList = useAtomValue(orderPaymentAtom)

  return orderPaymentList.reduce(
    (sum, orderPayment) => (sum += orderPayment.price * orderPayment.quantity),
    0,
  )
}
