import axios from 'axios'
import { OrderProductsType } from '../components/OrderProducts/OrderProducts'

type GetOrdersFn = () => Promise<OrderProductsType[]>
type GetOrderFn = (orderId: string) => Promise<OrderProductsType>
type AddOrderFn = (order: OrderProductsType) => Promise<OrderProductsType>

export interface OrderHttpClientType {
  getOrders: GetOrdersFn
  getOrder: GetOrderFn
  addOrder: AddOrderFn
}

const getOrders: GetOrdersFn = async () => {
  return axios.get('/api/orders')
}

const getOrder: GetOrderFn = async (orderId) => {
  return axios.get(`/api/order/${orderId}`)
}

const addOrder: AddOrderFn = async (order) => {
  return axios.post('/api/order', { params: order })
}

export const ordersHttpClient: OrderHttpClientType = {
  getOrder,
  getOrders,
  addOrder,
}
