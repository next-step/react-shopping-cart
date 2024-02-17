export const API_ROOT = 'http://localhost:3000'

export const API_PATH = {
  PRODUCTS: 'products',
  CARTS: 'carts',
  ORDERS: 'orders',
}

export const API = {
  PRODUCTS: `${API_ROOT}/${API_PATH.PRODUCTS}`,
  PRODUCT: (id: number | null) => `${API_ROOT}/${API_PATH.PRODUCTS}/${id}`,
  CARTS: `${API_ROOT}/${API_PATH.CARTS}`,
  CART: (id: number) => `${API_ROOT}/${API_PATH.CARTS}/${id}`,
  ORDERS: `${API_ROOT}/${API_PATH.ORDERS}`,
  ORDER_LIST: `${API_ROOT}/${API_PATH.ORDERS}/list`,
}
