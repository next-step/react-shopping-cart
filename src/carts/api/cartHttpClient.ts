import axios from 'axios'
import { CartItemType } from '../components/CartItem/CartItem'
import { ProductType } from '../../products/components/Product/Product'

type GetCartsFn = () => Promise<CartItemType[]>
type AddCartFn = (cartItem: ProductType) => Promise<CartItemType>

export interface CartHttpClientType {
  getCarts: GetCartsFn
  addCart: AddCartFn
}

const getCarts: GetCartsFn = async () => {
  return axios.get('/api/carts')
}

const addCart: AddCartFn = async (cartItem) => {
  return axios.post('/api/cart', { params: cartItem })
}

export const cartHttpClient: CartHttpClientType = {
  getCarts,
  addCart,
}
