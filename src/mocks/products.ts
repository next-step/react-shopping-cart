import { rest } from 'msw'

const PRODUCTS = [
  {
    id: '1',
    price: 2500,
    name: '연필',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1670958553973-58e2ef388f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
  },
  {
    id: '2',
    price: 200000,
    name: '갤럭시 워치',
    imageUrl:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80',
  },
  {
    id: '3',
    price: 100000,
    name: '캠핑 가방',
    imageUrl:
      'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80',
  },
  {
    id: '4',
    price: 230000,
    name: '컬러풀한 운동화',
    imageUrl:
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  },
  {
    id: '5',
    price: 8000,
    name: '병아리콩 다이어트 샐러드',
    imageUrl:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '6',
    price: 5000,
    name: '유기농 양송이버섯',
    imageUrl:
      'https://images.unsplash.com/photo-1678311146766-9d147b40c0b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: '7',
    price: 3500,
    name: '구슬 콘 아이스크림',
    imageUrl:
      'https://images.unsplash.com/photo-1677896263326-18a6681eb9dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    id: '8',
    price: 11000,
    name: '아보카도 1kg (페루산)',
    imageUrl:
      'https://images.unsplash.com/photo-1677555024309-19edb4a1d40e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
  },
  {
    id: '9',
    price: 7000,
    name: '과즙팡팡 원액 100% 감귤주스',
    imageUrl:
      'https://images.unsplash.com/photo-1676018407020-35d550638b3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: '10',
    price: 18000,
    name: '대만 밀크티 (2통)',
    imageUrl:
      'https://images.unsplash.com/photo-1675730600698-c50cb8e53265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: '11',
    price: 9000,
    name: '켈리포니아 도넛 (6개입)',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1676473229662-6978eec493ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: '12',
    price: 12000,
    name: '수제 마카롱 5개입',
    imageUrl:
      'https://images.unsplash.com/photo-1676292943577-65f74f4a52e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: '13',
    price: 130000,
    name: '나이키 신발',
    imageUrl:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '14',
    price: 38000,
    name: '텀블러',
    imageUrl:
      'https://images.unsplash.com/photo-1610824352934-c10d87b700cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: '15',
    price: 132000,
    name: '조말론 향수 블랙베리 30ml',
    imageUrl:
      'https://images.unsplash.com/photo-1530630458144-014709e10016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
]

export const productsHandler = [
  rest.get('/api/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PRODUCTS))
  }),
  rest.post('/api/products', async (req, res, ctx) => {
    const product = await req.json()
    const currentProduct = { ...product, id: PRODUCTS.length + 1 }
    PRODUCTS.push(currentProduct)

    return res(ctx.status(201), ctx.json(currentProduct))
  }),
  rest.get('/api/products/:productId', (req, res, ctx) => {
    const { productId } = req.params
    const product = PRODUCTS.find((product) => product.id === productId)
    return res(
      ctx.status(200),
      ctx.json(product || { message: 'product not found' }),
    )
  }),
  rest.delete('/api/products/:productId', (req, res, ctx) => {
    const { productId } = req.params
    const productIndex = PRODUCTS.findIndex(
      (product) => product.id === productId,
    )

    PRODUCTS.splice(productIndex, 1)

    return res(
      ctx.json({
        message: 'Delete successfully',
      }),
    )
  }),
]
