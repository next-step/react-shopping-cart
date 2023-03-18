import { API } from '@/config'
import { ProductType } from '@/types'

// Todo: Post, Update, Delete에 대한 Fetch도 커스텀 훅으로 계층 분리
export const addCart = (product: ProductType) => {
  fetch(API.CARTS, {
    method: 'POST',
    body: JSON.stringify({ product: { ...product } }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
}
