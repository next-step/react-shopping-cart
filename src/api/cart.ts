import { Order, Product } from '../context/cartsContext'

export const getOrderList = async () => {
  const response = await fetch('/orders')
  const data: Array<Order> = await response.json()
  return data
}

export const getProductList = async () => {
  const response = await fetch('/products')
  const data: Array<Product> = await response.json()

  return data
}

export const getProductDetailItem = async (param: string) => {
  const response = await fetch(`/products/${param}`)
  const data: Product = await response.json()

  return data
}
