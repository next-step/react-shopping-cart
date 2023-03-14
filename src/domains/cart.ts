import { API } from '@/config'
import { ProductType } from '@/types'

export const addCart = (product: ProductType) => {
  fetch(API.CARTS, {
    method: 'POST',
    body: JSON.stringify({ product: { ...product } }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
}
