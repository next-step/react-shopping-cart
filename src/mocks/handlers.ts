import db from '../../db.json'
import { HttpResponse, PathParams, http } from 'msw'
import { Product, Cart, ProductRequest, CartRequest, Order, OrderRequest } from '@/types/api-type'
import { isCartRequest, isProductRequest } from '@/types/type-guard'

const productList: Product[] = db.products
let cartList: Cart[] = db.carts
const orderList: Order[] = db.orders

let lastProductId = productList.at(-1)?.id ?? productList.length + 1
let lastCartId = cartList.at(-1)?.id ?? cartList.length + 1
let lastOrderId = orderList.at(-1)?.id ?? orderList.length + 1

export const handlers = [
  // product api
  http.get('/products', ({ request }) => {
    const url = new URL(request.url)
    const searchParams = url.searchParams
    const limitValue = Number(searchParams.get('limit') ?? 8)
    const offsetValue = Number(searchParams.get('offset') ?? 0)

    return HttpResponse.json<{ products: Product[]; totalSize: number }>({
      products: productList.slice(offsetValue, offsetValue + limitValue),
      totalSize: productList.length,
    })
  }),

  http.post<PathParams, ProductRequest>('/products', async ({ request }) => {
    const apiRequest = await request.json()
    if (!isProductRequest(apiRequest)) return new HttpResponse(null, { status: 400 })
    const newProduct = { id: ++lastProductId, ...apiRequest }
    productList.push(newProduct)
    return new HttpResponse(null, { status: 201 })
  }),

  http.get('/products/:id', ({ params }) => {
    const { id } = params
    const targetProduct = productList.find(({ id: _id }) => _id === Number(id))
    if (!targetProduct) return new HttpResponse(null, { status: 404 })
    return HttpResponse.json<Product>(targetProduct)
  }),

  http.delete('/products/:id', ({ params }) => {
    const { id } = params
    const targetProductIdx = productList.findIndex(({ id: _id }) => _id === Number(id))
    if (targetProductIdx === -1) return new HttpResponse(null, { status: 404 })
    return new HttpResponse(null, { status: 204 })
  }),

  // cart api
  http.get('/carts', () => {
    return HttpResponse.json<Cart[]>(cartList)
  }),

  // 즐겨찾기 추가 + 개수 추가
  http.post<PathParams, CartRequest>('/carts', async ({ request }) => {
    const apiRequest = await request.json()
    if (!isCartRequest(apiRequest)) return new HttpResponse(null, { status: 400 })
    cartList.push({
      id: ++lastCartId,
      product: apiRequest,
    })

    return new HttpResponse(null, { status: 201 })
  }),

  // 즐겨찾기 삭제 = 장바구니 리스트 내 해당 상품 전체 삭제
  http.delete<PathParams, number[]>('/carts/product/all', async ({ request }) => {
    const requestDeleteIdList = await request.json()
    cartList = [...cartList.filter(cart => !requestDeleteIdList.includes(cart.product.id))]
    return new HttpResponse(null, { status: 204 })
  }),

  // 즐겨찾기 개수 감소 = 장바구니 리스트 내 해당 상품 한개만 삭제
  http.delete('/carts/product/:id', ({ params }) => {
    const { id: targetProductId } = params
    const targetCart = cartList.find(cart => cart.product.id === Number(targetProductId))
    if (!targetCart) return new HttpResponse(null, { status: 400 })
    cartList = [...cartList.filter(cart => cart.id !== targetCart.id)]

    return new HttpResponse(null, { status: 204 })
  }),

  // orders api
  http.get('/orders', () => {
    return HttpResponse.json<Order[]>(orderList)
  }),

  http.post<PathParams, OrderRequest>('/orders', async ({ request }) => {
    const orderRequest = await request.json()
    orderList.push({ id: ++lastOrderId, orderDetails: orderRequest })
    return new HttpResponse(null, { status: 201 })
  }),

  http.get('/orders/:id', ({ params }) => {
    const { id } = params
    const targetOrder = orderList.find(({ id: _id }) => _id === Number(id))
    if (!targetOrder) return new HttpResponse(null, { status: 404 })
    return HttpResponse.json<Order>(targetOrder)
  }),
]
