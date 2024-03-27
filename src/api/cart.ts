import { Order } from '../context/cartsContext'

export const fetchOrderList = async () => {
  const response = await fetch('/orders')
  const jsonData: Array<Order> = await response.json()
  return jsonData
}
