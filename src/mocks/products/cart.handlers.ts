import { delay, http, HttpResponse } from 'msw'

import { Product } from '@/routes/-product-list.api'

import { productsRepository } from './products.repository'

export const cartHandlers = [
  http.get('/carts', async ({ cookies }) => {
    const cartList = JSON.parse(decodeURIComponent(cookies.CARTS)) as Array<{
      id: number
      count: number
    }> // TODO: zod로 검증할 것

    // id에 해당하는 상품 데이터 내려주기
    const res: Array<Product & { count: number }> = []

    cartList.forEach((product) => {
      const foundProduct = productsRepository.get(product.id)

      if (foundProduct) {
        res.push({ ...foundProduct, count: product.count })
      }
    })

    await delay(300)

    return HttpResponse.json({
      list: res,
    })
  }),
]
