import axios from 'axios'
import { CartItemType } from '../components/CartItem/CartItem'

type GetCartsFn = () => Promise<CartItemType[]>
type AddCartFn = (cartItem: CartItemType) => Promise<CartItemType>

export interface CartHttpClientType {
  getCarts: GetCartsFn
  addCart: AddCartFn
}

const getCarts: GetCartsFn = async () => {
  return axios.get('/carts').then((res) => res.data)
}

const addCart: AddCartFn = async (cartItem: CartItemType) => {
  return axios.post('/carts', { params: cartItem }).then((res) => res.data)
}

export const cartHttpClient: CartHttpClientType = {
  getCarts,
  addCart,
}
