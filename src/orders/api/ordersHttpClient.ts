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
  return axios.get('/api/orders').then((res) => res.data)
}

const getOrder: GetOrderFn = async (orderId: string) => {
  return axios.get(`/api/order/${orderId}`).then((res) => res.data)
}

const addOrder: AddOrderFn = async (order: OrderProductsType) => {
  return axios.post('/api/order', { params: order }).then((res) => res.data)
}

export const ordersHttpClient: OrderHttpClientType = {
  getOrder,
  getOrders,
  addOrder,
}
