import axios from 'axios'
import { ProductType } from '../components/Product/Product'

type getProductsFn = () => Promise<ProductType[]>
type addProductFn = (product: ProductType) => Promise<ProductType>
type getProductFn = (productId: string) => Promise<ProductType>

export interface ProductClientType {
  getProducts: getProductsFn
  addProduct: addProductFn
  getProduct: getProductFn
}

const getProducts: getProductsFn = async () => {
  return axios.get('/api/products').then((res) => res.data)
}

const addProduct: addProductFn = async (product: ProductType) => {
  return axios.get('/api/products', { params: product }).then((res) => res.data)
}

const getProduct: getProductFn = async (productId: string) => {
  return axios.get(`/api/products/${productId}`).then((res) => res.data)
}

export const productHttpClient: ProductClientType = {
  getProducts,
  getProduct,
  addProduct,
}
