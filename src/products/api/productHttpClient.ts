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
  return axios.get('/api/products')
}

const addProduct: addProductFn = async (product: ProductType) => {
  return axios.get('/api/product', { params: product })
}

const getProduct: getProductFn = async (productId: string) => {
  return axios.get(`/api/product/${productId}`)
}

export const productHttpClient: ProductClientType = {
  getProducts,
  getProduct,
  addProduct,
}
